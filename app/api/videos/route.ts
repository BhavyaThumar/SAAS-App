import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

export async function GET(request:NextRequest) {
    try{
        const videos = await prisma.video.findMany({
            orderBy:{createdAt: 'desc'}
        })
        return NextResponse.json(videos)
    }
    catch(error){
        NextResponse.json({error: "Error Fetching videos"}, {status:500})
    }
    finally{
        await prisma.$disconnect()
    }
}