import Image from "next/image";

import backgroundImage from "@/images/background-call-to-action.jpg";
import { Container } from "./Container.tsx";
import { Button } from "./Button.tsx";

export function CallToAction() {
	return (
		<section
			id="get-started-today"
			className="relative overflow-hidden bg-neutral py-32"
		>
			<Container className="relative">
				<div className="mx-auto max-w-lg text-center">
					<h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
						Start Your Free Trial
					</h2>
					<p className="mt-4 text-lg tracking-tight text-white">
						Enhance your subscriber engagement and streamline your content
						creation. Try our newsletter app today and discover how easy it is
						to connect with your audience.
					</p>
					<Button href="/register" color="white" className="mt-10">
						Get Started for Free
					</Button>
				</div>
			</Container>
		</section>
	);
}
