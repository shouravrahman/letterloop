import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

const emailSchema = new mongoose.Schema(
	{
		title: {
			type: String,
		},
		content: {
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
emailSchema.plugin(toJSON);

export default mongoose.models.Email || mongoose.model("Email", emailSchema);
