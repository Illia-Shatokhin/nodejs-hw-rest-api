import { Schema, model } from "mongoose";
import { handleSaveError, runValidateAtUpdate } from "./hooks.js";

const emailRegexp = /^([a-zA-Z0-9_-]+)@([a-zA-Z0-9_-]+).([a-zA-Z]{2,5})$/;
const passwordRegexp = /^(?=.*\d)[A-Za-z\d]{6,}$/;

const userSchema = new Schema(
  {
    password: {
      type: String,
      // match: passwordRegexp,
      minLength: 6,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      match: emailRegexp,
      unique: true,
      required: [true, "Email is required"],
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: String,
    avatarURL: String,
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleSaveError);

userSchema.pre("findOneAndUpdate", runValidateAtUpdate);

userSchema.post("findOneAndUpdate", handleSaveError);

const User = model("user", userSchema);

export default User;
