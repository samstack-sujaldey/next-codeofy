import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: false,
    },
    googleId: {
      type: String,
      required: false,
      unique: true,
      sparse: true,
    },
    githubId: {
      type: String,
      required: false,
      unique: true,
      sparse: true,
    },
    linkedinId: {
      type: String,
      required: false,
      unique: true,
      sparse: true,
    },
    twitterId: {
      type: String,
      required: false,
      unique: true,
      sparse: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("User", userSchema);
