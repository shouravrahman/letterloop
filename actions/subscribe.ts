"use server";

import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import Subscriber from "@/models/Subcriber";

export const subscribe = async (email: string, username: string) => {
	try {
		await connectDB();

		// Verify email using Kickbox
		const isEmailVerified = await verifyEmail(email);
		if (!isEmailVerified) {
			return { message: "not a valid email" };
		}

		// Find the newsletter owner
		const newsLetterOwner = await User.findOne({ first_name: username });
		if (!newsLetterOwner) {
			return { error: "Newsletter owner not found" };
		}

		// Check if the subscriber already exists
		const existingSubscriber = await Subscriber.findOne({
			email,
			ownerId: newsLetterOwner.id,
		});
		if (existingSubscriber) {
			return { error: "Email already exists" };
		}

		// Add new subscriber
		const newSubscriber = await Subscriber.create({
			email,
			ownerId: newsLetterOwner.id,
		});

		return {
			message: "Subscription successful",
			subscriberDetails: JSON.stringify(newSubscriber),
		};
	} catch (error) {
		console.log(error);
		return { error: "An error occurred" };
	}
};

// Helper function to verify email using Kickbox
const verifyEmail = (email: string): Promise<boolean> => {
	return new Promise((resolve, reject) => {
		const kickbox = require("kickbox")
			.client(process.env.KICKBOX_API_KEY)
			.kickbox();
		kickbox.verify(email, (err: string, response: any) => {
			if (err) {
				console.error("Kickbox error:", err);
				return resolve(false);
			}
			const isDeliverable = response?.body?.result === "deliverable";
			resolve(isDeliverable);
		});
	});
};
