import { createHmac } from "crypto";
import { cookies } from "next/headers";
import { connectDB } from "./connectDB";
import { Session } from "@/models/SessionModel";
import { User } from "@/models/UserModel";

export async function CookieToSignCookie(cookie) {
  const sign = createHmac("sha256", process.env.COOKIE_SECRET).update(cookie).digest("hex")
  return `${sign}.${cookie}`
}

export async function SignCookieToCookie(signCookie) {
  const [signOfCookie, cookie] = signCookie.split(".")
  const sign = (await CookieToSignCookie(cookie)).split(".")[0]

  if(sign === signOfCookie){
    return cookie;
  }
  return false;
}

export async function getLoggedInUser(){
  try {
  await connectDB()  
  const cookieStore = await cookies()
  const errorResponse = Response.json({error : "Please login"}, {
    status : 401
  })

  const signedCookie = cookieStore.get("sid")?.value

  if(!signedCookie){
    return errorResponse
  }

  const sessionId = await SignCookieToCookie(signedCookie) 

  if(!sessionId){
    return errorResponse;
  }

  const session = await Session.findById(sessionId)

  if(!sessionId){
    return errorResponse;
  }

  const user = await User.findById(session.userId)

  if(!user){
    return errorResponse;
  }

  const {_id, name, email} = user;

  return {id : _id, name, email}

  } catch (err) {
    return {error : "User Auth failed"}
  }
}

export function ConvertDate(createdAt) {
  if (!createdAt) return "";

  const date = new Date(createdAt);

  const options = { day: "numeric", month: "long", year: "numeric" };
  return date.toLocaleDateString("en-GB", options); // "en-GB" for day-month-year
}
// Helper function (use in Server Action, API route, etc.)
export const formatMongoDate = (mongoDate) => {
  if (!mongoDate) return null;

  const d = new Date(mongoDate);               // works with ISO string or Date object
  const day   = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0'); // +1 → months 0-based
  const year  = d.getFullYear();

  return `${day}/${month}/${year}`;            // → "20/2/2025"
};