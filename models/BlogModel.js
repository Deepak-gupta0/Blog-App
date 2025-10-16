import mongoose, { Schema } from "mongoose";

export const Blog = mongoose.models.Blog || mongoose.model("Blog", {
  tile : {
    type : String,
    required : true,
  },
  content :  {
    type : String,
    required : true,
  },
  blogImg : {
    type : String,
    required : true,
  },
  createdAt : {
    type : Date,
    default : Date.now,
  },
  userId : {
    type :  Schema.Types.ObjectId,
    required : true,
  }
})