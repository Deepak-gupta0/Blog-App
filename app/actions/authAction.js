"use server";
import bcrypt from "bcrypt";
import { connectDB } from "@/lib/connectDB";
import { LoginSchema, RegisterSchema } from "@/lib/Schemas/UserSchema";
import { User } from "@/models/UserModel";
import { flattenError } from "zod";
import { Session } from "@/models/SessionModel";
import { CookieToSignCookie } from "@/lib/auth";
import { cookies } from "next/headers";

export async function registerAction(_, { name, email, password }) {
  const { success, data, error } = RegisterSchema.safeParse({
    name,
    email,
    password,
  });

  if (error) {
    return { error: flattenError(error).fieldErrors, success: false };
  }

  try {
    await connectDB();

    const hashedPassword = await bcrypt.hash(password, 10);
    const createUser = await User.create({ ...data, password: hashedPassword });
    console.log(createUser);

    return { success: true };
  } catch (error) {
    console.log(error);
    if (error?.code === 11000) {
      return { success: false, error: { email: "Email Already Exists" } };
    }
    return { success: false, error: { email: "Something went wrong" } };
  }
}

export async function loginAction(_, formData) {
  const cookieStore = await cookies();
  const { success, data, error } = LoginSchema.safeParse(formData);
  const { email, password } = data;

  if (!success) {
    return { success: false, errors: z.flattenError(error).fieldErrors };
  }
  console.log("sucess hua");

  await connectDB();
  try {
    const user = await User.findOne({ email });

    if (!user) {
      console.log("user not found");
      return { success: false, error: { email: "User is not registered" } };
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return { success: false, error: { password: "Invalid Password" } };
    }
    const session = await Session.create({ userId: user.id });

    cookieStore.set({
      name: "sid",
      value: CookieToSignCookie(session.id),
      httpOnly: true,
      path: "/",
    });

    return {success : true}


  } catch (error) {
    console.log(error);
  }
}
