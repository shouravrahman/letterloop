import { NextResponse, NextRequest } from "next/server";

import { createCustomerPortal } from "@/lib/stripe";
import User from "@/models/User";
import { currentUser } from "@clerk/nextjs/server";
import { connectDB } from "@/lib/mongodb";

export async function POST(req: NextRequest) {
	const user = await currentUser();

	if (user) {
		try {
			await connectDB();

			const body = await req.json();

			const dbUser = await User.findById(user.id);

			if (!dbUser?.customerId) {
				return NextResponse.json(
					{
						error: "You don't have a billing account yet. Make a purchase first.",
					},
					{ status: 400 }
				);
			} else if (!body.returnUrl) {
				return NextResponse.json(
					{ error: "Return URL is required" },
					{ status: 400 }
				);
			}

			const stripePortalUrl = await createCustomerPortal({
				customerId: dbUser.customerId,
				returnUrl: body.returnUrl,
			});

			return NextResponse.json({
				url: stripePortalUrl,
			});
		} catch (e) {
			console.error(e);
			return NextResponse.json({ error: e?.message }, { status: 500 });
		}
	} else {
		// Not Signed in
		return NextResponse.json({ error: "Not signed in" }, { status: 401 });
	}
}
