import mongoose from "mongoose";

const DB_URL = process.env.DB_URI;

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Alraedy connected");
      return;
    }

    await mongoose.connect(DB_URL, {
      dbName: "BlogApp",
    });
    console.log("Database connected sucessfully")
    
  } catch (error) {
    console.log(error);
    console.log("Database not connected");
    process.exit(1);
  }
};
