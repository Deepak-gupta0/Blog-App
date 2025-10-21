import { getLoggedInUser } from "@/lib/auth";
import { connectDB } from "@/lib/connectDB";
import { Profile } from "@/models/ProfileModel";

export async function POST(request) {
  await connectDB();
  const slug = await request;
  console.log(slug)
  // const errorResponse = Response.json(
  //   { error: "User not Authorised" },
  //   { status: 401 }
  // );

  // try {
  //   const user = await getLoggedInUser();

  //   if (!user) {
  //     return errorResponse;
  //   }

  //   const profile = await Profile.findOne({userId :user.id}).select("name desc profileImg address uniqueName -_id");

  //   if (!profile) {
  //     return errorResponse;
  //   }

  //   return Response.json(profile, {
  //     status : 200
  //   });

  // } catch (error) {
  //   console.log(error);
  //   return Response.json({error : "Something went wrong!"}, {
  //     status : 500,
  //   })
  // }
}
