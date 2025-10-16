import mongoose, { Schema } from "mongoose";

export const Profile = mongoose.models.Profile || mongoose.model("Profile", {
  profileImg : {
    type : String,
    userId : Schema.Types.ObjectId,
  }
})