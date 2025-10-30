import { formatMongoDate } from "@/lib/auth";
import { connectDB } from "@/lib/connectDB";
import { Blog } from "@/models/BlogModel";
import { Profile } from "@/models/ProfileModel";

export async function GET(_, { params }) {
  const { id } = await params;

  try {
    await connectDB();

    const blog = await Blog.findOne({_id : id}).lean();

    if (!blog) {
      return Response.json({ error: "Blog not found" }, { status: 404 });
    }

    const profile = await Profile.findOne({userId : blog.userId}) 

    if(!profile){
    return Response.json({ error: "Profile not found" }, { status: 404 });
    }

    return Response.json({...blog, profile : profile, createdAt : formatMongoDate(blog.createdAt)}, {status : 200})

  } catch (error) {
    console.log("Blog not found", error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
