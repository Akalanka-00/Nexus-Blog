import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/connect";
export const GET = async (req: NextRequest)=>{

    const {searchParams} = new URL(req.url);
    const page = searchParams.get("page") || "1";
    const category = searchParams.get("cat") ;
    const POST_PER_PAGE = 2;

    const query = {
        take:POST_PER_PAGE,
        skip: POST_PER_PAGE * (parseInt(page)-1),
        where:{
            ...(category && {catSlug:category  } )}
    };

    try {
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({where:query.where})
        ]);

    return new NextResponse(JSON.stringify({posts, count}),{ status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({message:"Something went wrong!"}), {status:500});
    }
}