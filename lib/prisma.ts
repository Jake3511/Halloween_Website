// lib/prisma.ts
import { Prisma, PrismaClient } from '@/prisma/generated/client' // match your generator output path
import { PrismaPg } from '@prisma/adapter-pg'

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

function createClient() {
  const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_PUBLIC_URL,})
    return new PrismaClient({adapter})
}

export const prisma = globalForPrisma.prisma ?? createClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
