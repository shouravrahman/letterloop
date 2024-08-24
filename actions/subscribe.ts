"use server";

import { connectDB } from "@/lib/mongodb";

export const subscribe = async (email: string, username: string) => {
	try {
		const kickbox = require("kickbox")
			.client(process.env.KICKBOX_API_KEY)
			.kickbox();
		kickbox.verify(email, function (err: string, response: Response) {
			console.log(response?.body?.result);
			return response;
		});
		await connectDB();
	} catch (error) {
		console.log(error);
	}
};
