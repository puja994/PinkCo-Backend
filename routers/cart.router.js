import express from "express";
const router = express.Router();

import { getProductById } from "../models/products/product.model.js";

router.post("/", async (req, res) => {
    const { ids } = req.body;
    try {
      const result = await getProductById(ids);
  
      res.json({
        status: "success",
        message: "products added in cart",
        result,
      });
    } catch (error) {
      throw error;
    }
  });
  
  export default router;
  