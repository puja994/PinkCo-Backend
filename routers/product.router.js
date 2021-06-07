import express from 'express'
const router = express.Router()
import slugify from 'slugify'
import multer from 'multer'

import {getProducts,getProductById, getProductBySlug} from '../models/products/Product.model.js'


router.all("*", (req, res, next) => {
	next();
})

router.get("/", async (req, res) => {

	try {
	  const result = await getProducts();
	  if (result) {
		return res.json({
		  status: "success",
		  message: "fetch success",
		  result,
		});
	  }
	  res.json({
		status: "fail",
		message: "fetch unsuccess",
		result,
	  });
  
	 
	} catch (error) {
	  throw error;
	}
  });

  router.get("/:slug", async (req, res) => {
  
	try {
		const { slug } = req.params;
	  const result = await getProductBySlug(slug);
	  if (slug) {
		return res.json({
		  status: "success",
		  message: "fetch success",
		  result,
		});
	  }
	  res.json({
		status: "fail",
		message: "fetch unsuccess",
		result,
	  });
  
	
	} catch (error) {
	  throw error;
	}
  });




export default router;