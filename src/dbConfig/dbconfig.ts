import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });
    mongoose.connection.on("error", (error) => {
      console.error("MongoDB connection error:", error);
    });


    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected");
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
} 