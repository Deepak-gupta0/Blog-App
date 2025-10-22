import { getLoggedInUser } from "@/lib/auth";
import { connectDB } from "@/lib/connectDB";
import { Blog } from "@/models/BlogModel";

export async function POST(request){
  try {
    await connectDB()
    const {perPage, page} = await request.json()
    const blogs = await Blog.find().skip(perPage * (page -1)).limit(perPage) 
    const blogCount = await Blog.countDocuments();
    return Response.json({blogs, blogCount}, {
      status : 200
    })
    
  } catch (error) {
    console.log(error)
    console.log("Failed to fetch the blogs")
  }
}

export async function GET(){
  try {
    await connectDB()

    const user = await getLoggedInUser()

    if(user instanceof Response){
      console.log("user verify nhi hua")
      return user;
    }
    console.log(user)
    const blogs = await Blog.find({userId : user.id})

    if(!blogs){
      console.log("blog nhi mila")
      return Response.json([], {status : 200})
    }
    console.log("kaam ho gya")
    console.log(blogs)
    return Response.json(blogs.map(({id, title, desc, blogImg, userId, createdAt}) => ({id, title, desc, blogImg, userId, createdAt})), {status : 200})

  } catch (error) {
    console.log(error)
    return Response.json({error : "Something went wrong"}, {status : 500})
  }
}
