"use server";

import { getLoggedInUser } from "@/lib/auth";
import { connectDB } from "@/lib/connectDB";
import { BlogSchema } from "@/lib/Schemas/BlogSchema";
import { Blog } from "@/models/BlogModel";
import ImageKit from "imagekit";
import { flattenError } from "zod";

export async function BlogAction(_, formData) {
  const { title, desc, blogImg } = await formData;
  const { success, data, error } = BlogSchema.safeParse({ title, desc });

  if (!success) {
    return {error : flattenError(error).fieldErrors};
  }

  await connectDB();
  const user = await getLoggedInUser();

  if (!user) {
    return { error: "User not logged in", status: 401 };
  }

  const imageKit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
  });

   if (!blogImg) throw new Error("No file provided");

  const arrayBuffer = await blogImg.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const res = await imageKit.upload({
    file: buffer,
    fileName: blogImg.name,
  });

  if(!res){
    return {error : "Image not saved on Internet"}
  }



  const blog = await Blog.create({ ...formData, userId: user.id, blogImg: res.url });

  if (!blog) {
    return;
  }
  const Img = blog.blogImg;
  return {url: Img, success:true};
}
