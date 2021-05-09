import UsersSchema from "./User.schema.js";

export const createUser = userObj => {
	return new Promise((resolve, reject) => {
		try {
			UsersSchema(userObj)
				.save()
				.then(data => resolve(data))
				.catch(error => reject(error));
		} catch (error) {
			reject(error);
		}
	});
};

export const getUserByEmail = email =>{
	return new Promise((resolve, reject)=>{
		try{
			UsersSchema.findOne({email})
			.then(data => resolve(data))
			.catch(error => reject(error))

		}catch(error){
			reject(error)
		}
	})
}