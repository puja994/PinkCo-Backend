import express from "express";
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';
uuidv4();
import Stripe from 'stripe';
const stripe = new Stripe('process.env.STRIPE_PRIVATE_KEY');

router.all("*", (req, res, next) => {
	next();
});

router.post("/",  (req,res) => {
const {token, product} = req.body
const idempotency_key = uuid()

return stripe.customers.create({
	email: token.email,
	source: token.id,
})
.then(customer => {
	stripe.charges.create({
		customer: customer.id,
		amount: product.total,
		currency: "aud",
		description: "new order payment",
		receipt_email: token.email,

	},
	
{idempotency_key}
)
.then(result=>{
	res.send({
		status: "success",
		message: "payment is taken",
		result,
	})
})
})
.catch(error=>{
	console.log(error)
	res.send({
		status: "error",
		message: "eror, unable to take payment at the moment, try again later"
	})
})



	res.send({
		status: "success",
		message: "payment taken",
	})
	console.log("hi")
})

// router.post("/", loginValidation, async (req, res) => {
// 	try {
// 		const { email, password } = req.body;
// 		const user = await getUserByEmail(email);

// 		if (!user?._id) {
// 			return res
// 				.status(403)
// 				.json({ status: "error", message: "Invalid login details" });
// 		}

// 		const dbHashPass = user.password;
// 		const result = await comparePassword(password, dbHashPass);
// 		if (!result) {
// 			return res.json({ status: "error", message: "Invalid login details" });
// 		}

// 		const accessJWT = await createAccessJWT(user.email, user._id);
// 		const refreshJWT = await createRefreshJWT(user.email, user._id);

// 		user.password = undefined;
// 		user.refreshJWT = undefined;
// 		res.json({
// 			status: "success",
// 			message: "login success",
// 			user,
// 			accessJWT,
// 			refreshJWT,
// 		});
// 	} catch (error) {
// 		console.log(error);
// 		throw new Error(error.message);
// 	}
// });

export default router;
