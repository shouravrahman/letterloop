"use server";

import { connectDB } from "@/lib/mongodb";
import Email from "@/models/Email";
import { auth } from "@clerk/nextjs/server";

export const saveEmail = async ({
	title,
	content,
	ownerId,
}: {
	title: string;
	content: string;
	ownerId: string;
}) => {
	console.log(ownerId, content);
	const { userId, redirectToSignIn } = await auth();

	if (!userId) return redirectToSignIn();

	try {
		await connectDB();
		const email = await Email.findOne({ title, ownerId });

		if (email) {
			await Email.findByIdAndUpdate(email._id, { content });
			return { message: "Email updated" };
		} else {
			await Email.create({
				title,
				content,
				ownerId,
			});
		}
	} catch (error) {
		console.log(error);
		return { message: "Email update failed" };
	}
};
