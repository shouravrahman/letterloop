"use client";
import { getDetails } from "@/actions/getEmailDetails";
import { saveEmail } from "@/actions/saveEmail";
import { simpleEmailTemplate } from "@/data/mails/default.ts";
import apiClient from "@/lib/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";
import { toast } from "sonner";
const Editor = ({ subject }: { subject: string }) => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(simpleEmailTemplate);
	const history = useRouter();
	const { getUser } = useKindeBrowserClient();
	const user = getUser();
	const emailEditorRef = useRef<EditorRef>(null);

	const exportHtml = () => {
		const unlayer = emailEditorRef.current?.editor;

		unlayer?.exportHtml((data) => {
			const { design, html } = data;
			console.log("exportHtml", html);
		});
	};
	const onReady: EmailEditorProps["onReady"] = () => {
		const unlayer: any = emailEditorRef.current?.editor;
		unlayer.loadDesign(data);
	};

	useEffect(() => {
		const getEmailDetails = async () => {
			await getDetails({ title: subject, ownerId: user?.id }).then(
				(res) => {
					if (res) {
						setData(JSON.parse(res?.content));
					}
					setLoading(false);
				}
			);
		};
		getEmailDetails();
	}, []);
	const saveDraft = async () => {
		const unlayer = emailEditorRef.current?.editor;
		unlayer?.exportHtml(async (data) => {
			const { design } = data;
			setData(design);
			await saveEmail({
				title: subject,
				content: JSON.stringify(design),
				ownerId: user?.id,
			}).then((res) => {
				toast.success("Draft saved");
				// history.push("/dashboard/write");
			});
		});
	};

	return (
		<>
			{!loading && (
				<div className="w-full border relative">
					<EmailEditor
						minHeight={"80vh"}
						ref={emailEditorRef}
						onReady={onReady}
						options={{
							version: "latest",
							appearance: {
								theme: "modern_light",
							},
						}}
					/>
					<div className="my-4 mr-5 flex items-center justify-end gap-4">
						<button
							className="btn btn-outline btn-md"
							onClick={saveDraft}
						>
							Save Draft
						</button>
						<button
							className="btn btn-primary btn-md"
							onClick={saveDraft}
							disabled
						>
							Send
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default Editor;
