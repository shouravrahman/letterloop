"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
	getSubscribers,
	addSubscriber,
	deleteSubscriber,
} from "@/actions/subscribers";

const Subscribers = () => {
	const [subscribers, setSubscribers] = useState<any[]>([]);
	const [email, setEmail] = useState("");

	const fetchSubscribers = async () => {
		const data = await getSubscribers();
		setSubscribers(data);
	};

	const handleAddSubscriber = async () => {
		if (!email) {
			toast.error("Email is required");
			return;
		}
		const result = await addSubscriber(email);
		if (result) {
			setEmail("");
			fetchSubscribers();
			toast.success("Subscriber added");
		} else {
			toast.error("Error adding subscriber");
		}
	};

	const handleDeleteSubscriber = async (id: string) => {
		const result = await deleteSubscriber(id);
		if (result) {
			fetchSubscribers();
			toast.success("Subscriber deleted");
		} else {
			toast.error("Error deleting subscriber");
		}
	};

	useEffect(() => {
		fetchSubscribers();
	}, []);

	return (
		<div className="p-4 container">
			<h1 className="text-2xl font-bold mb-4">Subscribers Management</h1>
			<div className="mb-4">
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Enter subscriber email"
					className="border p-2 rounded"
				/>
				<button
					onClick={handleAddSubscriber}
					className="ml-2 btn btn-primary"
				>
					Add Subscriber
				</button>
			</div>
			<ul>
				{subscribers.map((subscriber) => (
					<li
						key={subscriber._id}
						className=" flex justify-between items-center mb-2"
					>
						{subscriber.email ? (
							<span>{subscriber.email}</span>
						) : (
							"NO subscribers"
						)}

						<button
							onClick={() =>
								handleDeleteSubscriber(subscriber._id)
							}
							className="text-red-500"
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Subscribers;
