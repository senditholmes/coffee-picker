import Image from "next/image";

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default function Home() {
  return ( <div className="flex h-96 justify-center content-center items-center flex-1">Hello World</div>);
}
