import { getLoggedInUser } from "@/lib/auth";
import { connectDB } from "@/lib/connectDB";
import { Profile } from "@/models/ProfileModel";

export async function GET() {
  try {
    await connectDB();
    const loggedInProfile = await getLoggedInUser();

    if (loggedInProfile instanceof Response) {
      return loggedInProfile;
    }

    const profile = await Profile.findOne({ userId: loggedInProfile.id }).select("-_id uniqueName");
    if(!profile){
      return Response.json({error : "profile not found"}, {status : 404})
    }
    return Response.json(profile, {status : 200})
    
  } catch (error) {
    console.log(error);
    return Response.json({ error: "something went wrong"}, {status : 500} )
  }
}
