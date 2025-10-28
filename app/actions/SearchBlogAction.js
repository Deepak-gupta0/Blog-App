"use server";

import { connectDB } from "@/lib/connectDB";
import { Blog } from "@/models/BlogModel";
import { Profile } from "@/models/ProfileModel";

// Helper: Convert MongoDB document to plain object with string IDs
const toPlainObject = (doc) => {
  if (!doc) return null;

  const plain = { ...doc };

  // Convert _id and userId if they are ObjectId or Buffer
  if (plain._id && typeof plain._id !== "string") {
    plain._id = plain._id.toString();
  }
  if (plain.userId && typeof plain.userId !== "string") {
    plain.userId = plain.userId.toString();
  }

  // Convert createdAt to ISO string
  if (plain.createdAt && plain.createdAt instanceof Date) {
    plain.createdAt = plain.createdAt.toISOString();
  }

  // Convert Buffer (e.g., images) to base64 if needed, or remove if not used
  if (plain.blogImg && Buffer.isBuffer(plain.blogImg)) {
    plain.blogImg = `data:image/jpeg;base64,${plain.blogImg.toString("base64")}`;
  }
  if (plain.profileImg && Buffer.isBuffer(plain.profileImg)) {
    plain.profileImg = `data:image/jpeg;base64,${plain.profileImg.toString("base64")}`;
  }

  return plain;
};

export async function SearchBlogAction(data) {
  await connectDB();

  try {
    // Search Blogs
    const blogs = await Blog.find({
      $or: [
        { title: { $regex: data, $options: "i" } },
        { desc: { $regex: data, $options: "i" } },
      ],
    }).lean();

    const userIds = blogs.map((blog) => blog.userId);
    const profiles = await Profile.find({
      userId: { $in: userIds },
    }).lean();

    // Merge blog with profile
    const mergedBlogs = blogs.map((blog) => {
      const profile = profiles.find(
        (p) => p.userId.toString() === blog.userId.toString()
      );

      return {
        ...toPlainObject(blog),
        profile: profile ? toPlainObject(profile) : null,
      };
    });

    // Search Profiles separately
    const profilesSearch = await Profile.find({
      $or: [
        { name: { $regex: data, $options: "i" } },
        { uniqueName: { $regex: data, $options: "i" } },
      ],
    }).lean();

    const safeProfiles = profilesSearch.map(toPlainObject);

    // Return plain, serializable data
    return {
      blogsData: mergedBlogs,
      profileData: safeProfiles,
    };
  } catch (error) {
    console.error("SearchBlogAction Error:", error);
    throw new Error("Failed to search blogs and profiles");
  }
}