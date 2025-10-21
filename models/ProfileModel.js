import mongoose, { Schema } from "mongoose";

export const Profile = mongoose.models.Profile || mongoose.model("Profile", {
  profileImg : {
    type : String,
    required : true,
  },
  name : {
    type : String,
    required : true,
  },
  desc : {
    type : String,
    required : true,
  },
  address : {
    type : String,
    required : true,
  },
  userId : {
    type : Schema.Types.ObjectId,
    required : true,
  },
  uniqueName : {
    type : String,
    required : true,
  },
  createdAt : {
    type : Date,
    default : Date.now,
  },
})