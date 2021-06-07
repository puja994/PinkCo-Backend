import mongoose from "mongoose";

const SignUpSchema = mongoose.Schema(
  {
    fName: {
      type: String,
      require: true,
      default: "",
    },
    lName: {
      type: String,
      require: true,
      default: "",
    },
    email: {
      type: String,
      unique: true,
      require: true,
      default: "",
    },

    password: {
      type: String,
      require: true,
      default: "",
    },
    address: {
      type: String,
      require: true,
      default: "",
    },

  },
  {
    timestamp: true,
  }
);

export const SignUp = mongoose.model("signup", SignUpSchema);
