import { Profile } from "@/models/ProfileModel";
import { connectDB } from "./connectDB";
import { Blog } from "@/models/BlogModel";
import { getLoggedInUser } from "./auth";

export async function getUserBySlug(slug) {
  await connectDB();

  try {
    const profile = await Profile.findOne({ uniqueName: slug }).lean();
    if (!profile) return null;

    const blogs = await Blog.find({ userId: profile.userId }).lean();

    if(!blogs){
      return {profile : {...JSON.parse(JSON.stringify(profile))}};
    }

    return { profile : {...JSON.parse(JSON.stringify(profile))}, blogs };
  } catch (error) {
    console.log(error);
    return { error: "something went wrong" };
  }
}

export async function getSessionUser() {
  try {
    await connectDB()
    const user = await getLoggedInUser();

    if (user instanceof Response) {
      return user;
    }

    const profile = await Profile.findOne({userId :user.id}).lean()
    const blogs = await Blog.find({userId :user.id}).lean()

    if(!blogs){
      return { profile : {...JSON.parse(JSON.stringify(profile))}};
    }

    return {profile : {...JSON.parse(JSON.stringify(profile))}, blogs };

  } catch (error) {
    console.log(error);
    return { error: "something went wrong" };
  }
}
