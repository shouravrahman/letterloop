import { NextResponse, NextRequest } from "next/server";

import Email from "@/models/Email.ts";
import { connectDB } from "@/lib/mongodb";

export async function POST(req: NextRequest) {
	await connectDB();

	const { title, content, ownerId } = await req.json();

	try {
		const email = await Email.findOne({ title, ownerId });

		if (email) {
			await Email.findByIdAndUpdate(email._id, { content });
			return NextResponse.json({ message: "Email updated" });
		} else {
			await Email.create({
				title,
				content,
				ownerId,
			});
			return NextResponse.json({ message: "Email saved" });
		}
	} catch (e) {
		console.error(e);
		return NextResponse.json({ error: e.message }, { status: 500 });
	}
}

export async function GET() {}
