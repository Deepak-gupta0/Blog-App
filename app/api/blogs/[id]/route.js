import { connectDB } from "@/lib/connectDB"
import { Blog } from "@/models/BlogModel"
import { Profile } from "@/models/ProfileModel"

export async function POST(resquest) {
  const uniqueName = await resquest.json()

  try {
    await connectDB()

    const profile = await Profile.findOne({uniqueName})

    if(!profile){
      console.log("profile not found")
      return Response.json({error : "Profile not found"}, {status : 404})
    }

    const {userId} = profile;

    const userBlog = await Blog.find({userId})

    if(!userBlog){
      console.log({msg : "No blog post"})
      return Response.json({msg : "No blog post"}, {status  : 200})
    }
    console.log(userBlog)
    return Response.json(userBlog.map(({id, title, desc, blogImg, userId, createdAt}) => ({id, title, desc, blogImg, userId, createdAt})), {status : 200})
    
  } catch (error) {
    console.log(error)
    return Response.json({error : "Somrthing went wrong"}, {status : 500})
  }
}
