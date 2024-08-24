import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";
export interface UserDocument {
	_id: string;
	email: string;
	password: string;
	name: string;
	phone: string;
	image: string;
	createdAt: Date;
	updatedAt: Date;
	priceId: string;
	customerId: string;
	hasAccess: boolean;
}
// USER SCHEMA
const userSchema = new mongoose.Schema<UserDocument>(
	{
		name: {
			type: String,
			trim: true,
		},
		email: {
			type: String,
			trim: true,
			lowercase: true,
			private: true,
		},
		image: {
			type: String,
		},
		// Used in the Stripe webhook to identify the user in Stripe and later create Customer Portal or prefill user credit card details
		customerId: {
			type: String,
			validate(value: string) {
				return value.includes("cus_");
			},
		},
		// Used in the Stripe webhook. should match a plan in config.js file.
		priceId: {
			type: String,
			validate(value: string) {
				return value.includes("price_");
			},
		},
		// Used to determine if the user has access to the product—it's turn on/off by the Stripe webhook
		hasAccess: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
		toJSON: { virtuals: true },
	}
);

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);

export default mongoose.models.User ||
	mongoose.model<UserDocument>("User", userSchema);
