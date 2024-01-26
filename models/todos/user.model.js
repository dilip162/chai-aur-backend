import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    email: {
      type: string,
      unique: [true, "email is already exist"],
      required: [true, "email is required"],
      lowercase: true,
    },

    password: {
      type: string,
      required: [true, "password is required"],
      min: [6, "atleast 6 character is required"],
      max: [20, "more then 20 character is not allowed"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
