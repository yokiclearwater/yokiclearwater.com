import mongoose from "mongoose";
import { User } from "../models/User";

async function connectMongo() {
  const mongoURI = process.env.MONGO_URI || "";

  if (mongoose.connection.readyState === 1) {
    console.log("Mongoose is already connected");

    return;
  }

  await mongoose.connect(mongoURI).then(() => {
    console.log("MongoDB connected");
  });
}

export default connectMongo;
