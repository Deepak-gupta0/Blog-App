import mongoose, { Schema } from "mongoose";

export const Test = mongoose.models.Test || mongoose.model("Test", {
  tile : {
    type : String,
    required : true,
  },
  createdAt : {
    type : Date,
    default : Date.now,
  }
})