import { connectDB } from "@/lib/connectDB";
import { Test } from "@/models/TestModel";

export async function POST(request){
  
  try {
    await connectDB()
    const {perPage, page} = await request.json()
    const tests = await Test.find().skip(perPage * (page -1)).limit(perPage) 
    const testCount = await Test.countDocuments();
    return Response.json({tests, testCount}, {
      status : 200
    })
    
  } catch (error) {
    console.log(error)
    console.log("Failed to fetch the blogs")
  }
}
