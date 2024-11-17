"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { getEmails } from "@/actions/getEmails";
import { DeleteIcon, MailOpenIcon } from "lucide-react";
import Link from "next/link";
import { useUser } from '@clerk/clerk-react'

const Write = () => {
	const [email, setEmail] = useState();
	const [open, setOpen] = useState();
	const router = useRouter();
	const [subject, setSubject] = useState("");
	const [emails, setEmails] = useState<any[]>(() => {
		const cachedEmails = localStorage.getItem("emails");
		return cachedEmails ? JSON.parse(cachedEmails) : null;
	});
   const { isSignedIn, user, isLoaded } = useUser()
	const handleCreate = () => {
		if (subject.length === 0) {
			toast.error("No subject provided!");
		} else {
			const formattedSubject = subject
				.replace(/\s+/g, "-")
				.replace(/&/g, "-");
			router.push(`/dashboard/new-email?subject=${formattedSubject}`);
		}
	};
	const findMails = async () => {
		await getEmails({ ownerId: user?.id })
			.then((res) => {
				setEmails(res);
				localStorage.setItem("emails", JSON.stringify(res));
			})
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		findMails();
	}, [user]);
	const handleDelete = (id: string) => {
		//
	};
	return (
		<div className="flex p-4 items-center justify-between flex-wrap gap-6">
			<Dialog>
				<DialogTrigger asChild>
					<Card className="w-[300px] h-[250px] cursor-pointer">
						<CardContent className="flex flex-col justify-center items-center h-full">
							<MailOpenIcon className="w-12 h-12 mb-4 text-primary" />
							<h3 className="text-2xl font-bold mb-2">
								Create Newsletter
							</h3>
							<p className="text-muted-foreground">
								Click to get started
							</p>
						</CardContent>
					</Card>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[600px]">
					<DialogHeader>
						<DialogTitle>Create Newsletter</DialogTitle>
						<DialogDescription>
							Fill out the form to create a new newsletter.
						</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4 py-4">
						<div className="grid items-center grid-cols-4 gap-4">
							<Label
								htmlFor="subject"
								className="pl-4 text-xl "
							>
								Subject:
							</Label>
							<Input
								id="subject"
								placeholder="Enter email subject"
								className="col-span-3"
								value={subject}
								onChange={(e) => setSubject(e.target.value)}
							/>
						</div>
					</div>
					<DialogFooter>
						<Button onClick={handleCreate}>
							Create Newsletter
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			<div className="flex  gap-10">
				{emails &&
					emails.map((i: any) => {
						const formattedTitle = i?.title
							?.replace(/\s+/g, "-")
							.replace(/&/g, "-");
						return (
							<div
                        key={i}
								className="w-[200px] h-[250px] flex flex-col items-center justify-center rounded-lg shadow-sm hover:shadow-md border cursor-pointer relative"
							>
								<span
									onClick={() => handleDelete(i?._id)}
									className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition-colors duration-200"
								>
									<DeleteIcon className="w-6 h-6" />
								</span>
								<Link
									href={`/dashboard/new-email?subject=${formattedTitle}`}
									className="text-center text-xl text-bold text-gray-800 hover:text-gray-700 transition-colors duration-200"
								>
									{i?.title}
								</Link>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Write;
