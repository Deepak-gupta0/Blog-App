import { connectDB } from "@/lib/connectDB";
import { User } from "@/models/UserModel";

export async function GET() {
  await connectDB()
  
}
