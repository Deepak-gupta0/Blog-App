import { getLoggedInUser } from "@/lib/auth";
import { connectDB } from "@/lib/connectDB";
import { Profile } from "@/models/ProfileModel";

export async function POST(request) {
  await connectDB();
  const response = await request.json();
  const errorResponse = Response.json(
    { error: "User not Authorised" },
    { status: 404 }
  );

  try {
    const profile = await Profile.findOne({ uniqueName: response }).select(
      "name desc profileImg address uniqueName -_id"
    );

    if (!profile) {
      return errorResponse;
    }

    return Response.json(profile, {
      status: 200,
    });
  } catch (error) {
    return Response.json(
      { error: "Something went wrong!" },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  const authError = Response.json({ error: "not Authorized" }, { status: 401 });
  try {
    await connectDB();
    const user = await getLoggedInUser();

    if (user instanceof Response) {
      return user;
    }
    const profile = await Profile.findOne({ userId: user.id }).select(
      "name desc profileImg address uniqueName -_id"
    );
    return Response.json(profile, { status: 200 });
  } catch (error) {
    return Response.json(
      { error: "Something went wrong!" },
      {
        status: 500,
      }
    );
  }
}
