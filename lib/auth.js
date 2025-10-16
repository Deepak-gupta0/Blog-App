import { createHmac } from "crypto";

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
