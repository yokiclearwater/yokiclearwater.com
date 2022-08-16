import mongoose from "mongoose";
import { User } from "../models/User";
import data from "./../data/about";

const connectMongo = async () => {
  const mongoURI = process.env.MONGO_URI || "";

  if (mongoose.connections[0].readyState === 1) {
    return;
  }

  await mongoose.connect(`${mongoURI}`).then(() => {
    console.log("Mongoose is connected");
  });  
};

export default connectMongo;
