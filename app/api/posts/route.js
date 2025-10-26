// app/api/posts/route.js
import { connectDB } from "@/lib/connectDB";
import { Blog } from "@/models/BlogModel";
import { Profile } from "@/models/ProfileModel";

export async function POST(request) {
  await connectDB()

  const {page} = await request.json()

  const limit = 5;

  const skip = (page - 1)*5

  const blog = await Blog.find().sort({createdAt : -1}).skip(skip).limit(limit).lean()

  // Extract userIds from blogs
  const userIds = blogs.map((b) => b.userId);

  // Fetch profiles for those userIds
  const profiles = await Profile.find({ userId: { $in: userIds } }).lean();

  // Merge blog with its profile
  const mergedData = blogs.map((blog) => {
    const profile = profiles.find(
      (p) => p.userId.toString() === blog.userId.toString()
    );
    return {
      ...blog,
      profile: profile ? profile : null,
    };
  });

  return Response.json(JSON.parse(JSON.stringify(mergedData)));
}

