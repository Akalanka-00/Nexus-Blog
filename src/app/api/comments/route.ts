/* eslint-disable @typescript-eslint/no-unused-vars */
import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// GET ALL COMMENTS OF A POST
export const GET = async (req:NextRequest) => {
  const { searchParams } = new URL(req.url);

  const postSlug = searchParams.get("postSlug");
  console.log({searchParams})

  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(comments ),{ status: 200 });
  } catch (err) {
     //console.log({err});
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, ),{ status: 500 }
    );
  }
};

