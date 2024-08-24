"use client";

import { useState } from "react";
import CreateNewsletterCard from "./CreateNewsletterCard.tsx";

const Write = () => {
	const [email, setEmail] = useState();
	const [open, setOpen] = useState();

	return (
		<div>
			<CreateNewsletterCard />
		</div>
	);
};

export default Write;
