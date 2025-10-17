import mongoose, { Schema } from "mongoose";

export const Profile = mongoose.models.Profile || mongoose.model("Profile", {
  profileImg : {
    type : String,
    required : true,
  },
  userId : {
    type : Schema.Types.ObjectId,
    required : true,
  },
  createdAt : {
    type : Date,
    default : Date.now,
  },
})