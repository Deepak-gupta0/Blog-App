import { getSessionUser } from "@/lib/User"
import { redirect } from "next/navigation"

export default async function ProfilePage() {
  const loggedInUser = await getSessionUser() 
  console.log(loggedInUser)

  if(loggedInUser instanceof Response){
    return redirect(`/login`)
  }

  const uniqueName = loggedInUser.profile.uniqueName;
  redirect(`/profile/${uniqueName}`)
}
