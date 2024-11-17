import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
	clerkId: string;
	firstName: string;
	lastName: string;
	email: string;
	isEmailVerified: boolean;
	profileImageUrl?: string;
	createdAt: Date;
	lastSignInAt?: Date;
}

// Define the Mongoose schema
const UserSchema: Schema = new Schema(
	{
		clerkId: { type: String, required: true, unique: true },
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		profileImageUrl: { type: String, default: "" },
		createdAt: { type: Date, required: true, default: Date.now },
	},
	{ timestamps: true }
);

const User = mongoose.model<IUser>("User", UserSchema);
export default User;
