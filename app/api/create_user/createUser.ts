'use server'
import { prisma } from '@/lib/prisma'
import { CreateUser } from '../../types/user'
import { CreateFood } from '../../types/food'

export async function createUser({ name, attending, food} : { name: string, attending: boolean, food?: string}) {
    const validName = CreateUser.parse({ name, attending }) // check if name and attending are of valid types via zod

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
}