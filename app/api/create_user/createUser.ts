'use server'
import { prisma } from '@/lib/prisma'
import { CreateUser } from '../../types/user'
import { CreateFood } from '../../types/food'
import { transporter } from "@/lib/mailer"

export async function createUser({ name, attending, food} : { name: string, attending: boolean, food?: string}) {
    const validName = CreateUser.parse({ name, attending }) // check if name and attending are of valid types via zod

    const lines = [
        'Dear Meghan and Jake,',
        '',
        'Hey Guys! We just got a new RSVP to the party.',
        `Our spooky guest is ${validName.name} and they will ${attending ? `be attending! They would like to eat ${food}.` : 'not be attending cause they suck!'}`,
        '',
        'Best,',
        'The Spooky Man',
      ];

    // Need to make two database operations, one for users and one for food, so it's wraped in transaction
    await prisma.$transaction(async (tx) => { 
        const newUser = await tx.user.create({ data: validName })
        const userId = newUser.id;
        const favoriteFood = validName ? CreateFood.parse({ food, userId }) : ''

        if (favoriteFood && attending) {
            await tx.favoriteFood.create({ 
                data: { food: favoriteFood.food, UserId: newUser.id }})
        }
    })
    try {
        await transporter.sendMail({
            from: `"Halloween RSVP" <${process.env.NO_REPLY_EMAIL}>`,
            to: process.env.RSVP_NOTIFY,
            subject: "Halloween Horror Nights",
            text: lines.join('\n'),
        })
    } catch (err) {
        console.log("ERROR, EMAIL FAILED TO SEND: ", err)
    }
}