"use server";

import connectDB from "@/lib/mongodb";
import Email from "@/models/Email";

export const getEmails = async ({ ownerId }: { ownerId: string }) => {
	try {
		await connectDB();
		const emails = await Email.find({ ownerId });
		return emails;
	} catch (error) {
		console.log(error.message);
	}
};
