import {z} from 'zod'

export const UserSchema = z.object({
    id: z.number(),
    createdAt: z.date(),
    name: z.string(),
    attending: z.boolean(),
})

export type User = z.infer<typeof UserSchema>

export const CreateUser = UserSchema.omit({ id: true, createdAt: true});