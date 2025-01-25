/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/connect";

//GET Single POST
export const GET = async (req: NextRequest, { params }: {params:any}) => {
    const { slug } =await params;
  
    try {
      const post = await prisma.post.findUnique({
        where: { slug },
        include:{user:true}
      });
  
      console.log(JSON.stringify(post))
      return new NextResponse(JSON.stringify(post),{ status: 200 });
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }, ),{ status: 500 }
      );
    }
  };
  