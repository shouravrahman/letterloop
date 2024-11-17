"use server";

import { connectDB } from "@/lib/mongodb";
import Subscriber from "@/models/Subcriber";

export const getSubscribers = async (ownerId: string) => {
	try {
		await connectDB();
		const subscribers = await Subscriber.find({ ownerId: ownerId });
		return subscribers;
	} catch (error) {
		console.log(error.message);
		return null;
	}
};

export const addSubscriber = async (email: string) => {
	try {
		await connectDB();
		const newSubscriber = new Subscriber({ email });
		await newSubscriber.save();
		return true;
	} catch (error) {
		console.log(error.message);
		return false;
	}
};

export const deleteSubscriber = async (id: string) => {
	try {
		await connectDB();
		await Subscriber.findByIdAndDelete(id);
		return true;
	} catch (error) {
		console.log(error.message);
		return false;
	}
};
