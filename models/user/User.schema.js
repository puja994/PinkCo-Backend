import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
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

		role: {
			type: String,
			require: true,
			default: "guest",
		},

		email: {
			type: String,
			require: true,
			default: "",
		},
		password: {
			type: String,
			require: true,
			default: "",
		},
		
		
	},
	{
		timestamp: true,
	}
);

const UsersSchema = mongoose.model("User", UserSchema);

export default UsersSchema;
