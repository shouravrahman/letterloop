import mongoose from "mongoose";
const { MONGODB_URI } = process.env;
if (!process.env.MONGODB_URI) {
	throw new Error(
		"Add the MONGODB_URI environment variable inside .env.local to use mongoose"
	);
}
export const connectDB = async () => {
	try {
		const { connection } = await mongoose.connect(MONGODB_URI as string);
		if (connection.readyState === 1) {
			console.log("db connected");
			return Promise.resolve(true);
		}
	} catch (error) {
		console.error("Mongoose Client Error: ", error.message);
		return Promise.reject(error);
	}
};
