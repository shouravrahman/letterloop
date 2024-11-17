import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

const subscriberSchema = new mongoose.Schema(
	{
		email: {
			type: String,
		},
		ownerId: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);
// add plugin that converts mongoose to json
subscriberSchema.plugin(toJSON);

export default mongoose.models.Subscriber ||
	mongoose.model("Subscriber", subscriberSchema);
