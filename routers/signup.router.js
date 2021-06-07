import express from "express";
const router = express.Router();
import { createUser } from "../models/signup/signup.model.js";
import { hashPassword } from "../helpers/bcrypt.helper.js";
import { newUserValidation } from "../middlewares/formValidation.middleware.js";

router.post("/", newUserValidation,async (req, res) => {
  try {
  

    const { password } = req.body;
    const hassPass = await hashPassword(password);
    const signup = { ...req.body, password: hassPass };
    const result = await createUser(signup);
   

    if (result?._id) {
      return res.json({
        status: "success",
        message:
          "New account created!",
        result,
      });
    }
    res.json({ status: "error", message: "Unable to cretae account" });
  } catch (error) {
    console.log(error);
    if (error.message.includes("duplicate key error collection")) {
      return res.json({
        status: "error",
        message: "This email already exists.Please enter another email",
      });
    }
    throw new Error(error.message);
  }
});
export default router;