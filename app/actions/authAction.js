"use server";
import bcrypt from "bcrypt";
import { connectDB } from "@/lib/connectDB";
import { LoginSchema, RegisterSchema } from "@/lib/Schemas/UserSchema";
import { User } from "@/models/UserModel";
import { flattenError } from "zod";
import { Session } from "@/models/SessionModel";
import { CookieToSignCookie, getLoggedInUser } from "@/lib/auth";
import { cookies } from "next/headers";
import ImageKit from "imagekit";
import { Profile } from "@/models/ProfileModel";

export async function registerAction(_, { name, email, password }) {
  console.log(name, email, password);
  const { success, data, error } = RegisterSchema.safeParse({
    name,
    email,
    password,
  });

  if (!success) {
    return { error: flattenError(error).fieldErrors, success: false };
  }
  try {
    await connectDB();

    const hashedPassword = await bcrypt.hash(password, 10);
    const createUser = await User.create({ ...data, password: hashedPassword });

    return { success: true };
  } catch (error) {
    if (error?.code === 11000) {
      return { success: false, error: { email: "Email Already Exists" } };
    }
    return { success: false, error: { email: "Something went wrong" } };
  }
}

export async function loginAction(_, formshortName) {
  const cookieStore = await cookies();
  const { success, data, error } = LoginSchema.safeParse(formshortName);
  const { email, password } = data;

  if (!success) {
    return { success: false, errors: z.flattenError(error).fieldErrors };
  }

  await connectDB();
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return { success: false, error: { email: "User is not registered" } };
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return { success: false, error: { password: "Invalid Password" } };
    }

    const sessions = await Session.find({ userId: user.id }).sort({
      createdAt: -1,
    });

    if (sessions.length > 1) {
      const oldSessions = sessions.slice(1); //return remove the first one in array
      const oldSessionsId = oldSessions.map((s) => s._id); //return [{_id : ""}, {_id : ""},...]

      await Session.deleteMany({ _id: { $in: oldSessionsId } });
    }

    const session = await Session.create({ userId: user.id });

    cookieStore.set({
      name: "sid",
      value: await CookieToSignCookie(session.id),
      httpOnly: true,
      path: "/",
    });

    const profile = await Profile.findOne({ userId: session.userId });

    if (!profile) {
      return { success: true, hasProfile: false };
    }

    return { success: true, hasProfile: true };
  } catch (error) {
    return { error: { email: "Something went wrong" } };
  }
}

export async function setUpProfileAction(file, data) {
  try {
    const imgUrl = await getImageUrl(file);

    const user = await getLoggedInUser();

    if (!user) {
      return { error: "Login Please", status: 401 };
    }
    const uniqueName = await createUnique(data.name);
    const profilePic = await Profile.create({
      profileImg: imgUrl,
      userId: user.id,
      ...data,
      uniqueName,
    });

    if (!profilePic) {
      return;
    }
    return { success: "profile set up successfully" };
  } catch (error) {
    return { error: "Something went wrong" };
  }
}

export async function createUnique(name) {
  const shortName = name.replace(/\s+/g, "");
  const random = Math.random().toString(36).substring(2, 8);
  return `${shortName}_${random}`;
}

export const getImageUrl = async (file) => {
  const imageKit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
  });

  if (!file) throw new Error("No file provided");

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const res = await imageKit.upload({
    file: buffer,
    fileName: file.name,
  });

  if (!res) {
    return { error: "Image not saved on Internet" };
  }
  console.log(res.url)
  return res.url;
};
