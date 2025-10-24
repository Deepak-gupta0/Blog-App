"use server";

import { getImageUrl } from "@/app/actions/authAction";
import { connectDB } from "@/lib/connectDB";
import { Profile } from "@/models/ProfileModel";

export async function EditProfileAction(editedData) {
  await connectDB();
  const { _id, name, desc, address } = editedData;

  try {
    const profile = await Profile.findByIdAndUpdate(
      _id,
      { name, desc, address },
      { new: true }
    );

    if (!profile) {
      return { success: false };
    }

    return { success: "profile updated successfully" };
  } catch (error) {
    console.log(error);
  }
}

export const changeProfileImg = async (file, data) => {
  try {
    const imgUrl = await getImageUrl(file);
    const { _id } = data;

    const profile = await Profile.findByIdAndUpdate(_id, {
      profileImg: imgUrl,
    });

    if (!profile) {
      return { success: false };
    }

    return { success: "profile updated successfully" };
  } catch (error) {
    console.log(error);
  }
};
