import mongoose from "mongoose";

const userSchema = new mongoose.Schema<User.UserData>({
  description: String,
  hobbies: [
    {
      name: String,
      icon: String,
    },
  ],
});

export const User = mongoose.models.User || mongoose.model<User.UserData>("User", userSchema);
