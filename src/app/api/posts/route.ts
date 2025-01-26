import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";
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



// CREATE A POST
export const POST = async (req:NextRequest) => {

    const session = await getAuthSession();
    // const body = await req.json();
    // console.log({json:body})
    if (!session) {
      return new NextResponse(
        JSON.stringify({ message: "Not Authenticated!" },), { status: 401 }
      );
    }
  
    try {
       const body = await req.json();
       const data = {...body, userEmail:session.user?.email};
       console.log({data});
      const post = await prisma.post.create({
        data
      });
  
      return new NextResponse(JSON.stringify(post),{ status: 201 });
    } catch (err) {
    //    console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!", err }, ),{ status: 500 }
      );
    }
  };
  
  