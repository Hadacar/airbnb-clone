import { PrismaClient } from "@prisma/client"

global.prisma = global.prisma || new PrismaClient();
const client = global.prisma;

if (process.env.NODE_ENV !== "production") {
  global.prisma = client;
}

export default client