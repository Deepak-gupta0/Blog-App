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
    const loggedInProfile = await getLoggedInUser();

    if (loggedInProfile instanceof Response) {
      return {error : "Please login"};
    }

    if (loggedInProfile.id.toString() === profile.userId.toString()) {
      if (!blogs) {
        return {
          profile: { ...JSON.parse(JSON.stringify(profile)) },
          isOwner: true,
        };
      }
      return {
        profile: { ...JSON.parse(JSON.stringify(profile)) },
        blogs,
        isOwner: true,
      };
    }

    if (!blogs) {
      return {
        profile: { ...JSON.parse(JSON.stringify(profile)) },
        isOwner: false,
      };
    }
    return {
      profile: { ...JSON.parse(JSON.stringify(profile)) },
      blogs,
      isOwner: false,
    };
  } catch (error) {
    console.log(error);
    return { error: "something went wrong" };
  }
}
