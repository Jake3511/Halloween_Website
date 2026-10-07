import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.NO_REPLY_EMAIL,
        pass: process.env.NO_REPLY_PASSWORD,
    }
})