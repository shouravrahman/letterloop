"use client";
import { getDetails } from "@/actions/getEmailDetails";
import { saveEmail } from "@/actions/saveEmail";
import { simpleEmailTemplate } from "@/data/mails/default.ts";
import { useUser } from '@clerk/clerk-react'
import { useEffect, useRef, useState } from "react";
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";
import { toast } from "sonner";

const Editor = ({ subject }: { subject: string }) => {
	const [loading, setLoading] = useState(true);
   const [data, setData] = useState(simpleEmailTemplate);
   const { isSignedIn, user, isLoaded } = useUser()
	const emailEditorRef = useRef<EditorRef>(null);

	const onReady: EmailEditorProps["onReady"] = () => {
		const unlayer: any = emailEditorRef.current?.editor;
		unlayer.loadDesign(data);
	};

	useEffect(() => {
		const getEmailDetails = async () => {
         try {
            const res = await getDetails({
               title: subject,
               ownerId: user?.id,
            });
            if (res) {
               setData(JSON.parse(res?.content));
               console.log("res", res);
            }
         } catch (error) {
            console.error("Failed to fetch email details:", error);
         } finally {
            setLoading(false);
         }
		};

      if (user?.id && subject) {
         getEmailDetails();
      }
   }, [subject, user?.id]);

	const saveDraft = async () => {
		const unlayer = emailEditorRef.current?.editor;
		unlayer?.exportHtml(async (data) => {
         const { design } = data;
			await saveEmail({
				title: subject,
				content: JSON.stringify(design),
				ownerId: user?.id,
			}).then((res) => {
            toast.success(res.message);
				// history.push("/dashboard/write");
			});
		});
	};

	return (
		<>
			{!loading && (
            <div className="w-full h-full flex flex-col border relative">
					<EmailEditor
                  style={{ flex: 1 }}
						ref={emailEditorRef}
						onReady={onReady}
                  minHeight={"60vh"}
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
