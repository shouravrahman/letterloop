"use server";


import { connectDB } from "@/lib/mongodb";
import Email from "@/models/Email";

export const getDetails = async ({
	title,
	ownerId,
}: {
	title: string;
	ownerId: string;
}) => {
	try {
		await connectDB();
		const email = await Email.findOne({ title, ownerId });
		return email;
	} catch (error) {
		console.log(error.message);
	}
};
