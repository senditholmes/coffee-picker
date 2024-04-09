import Image from "next/image";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function retrieveUsers() {
  const allUsers = await prisma.users.findMany()
  console.log(allUsers)
}

export default function Home() {
  retrieveUsers()
  return ( <div className="flex h-96 justify-center content-center items-center flex-1">Hello World</div>
);
}
