"use server";

import { connectDB } from "@/lib/mongodb";
import Email from "@/models/Email";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
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
	const { isAuthenticated } = getKindeServerSession();
	const isUserAuthenticated = await isAuthenticated();
	if (!isUserAuthenticated) return null;

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
		return { message: "Email update failed" };
		console.log(error);
	}
};
