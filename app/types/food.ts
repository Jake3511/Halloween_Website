import { z } from 'zod'
export const FoodSchema = z.object({
    id: z.number(),
    createdAt: z.date(),
    food: z.string(),
    userId: z.number(),
})

export type Food = z.infer<typeof FoodSchema>

export const CreateFood = FoodSchema.omit({id: true, createdAt: true})

