"use client";
import { getDetails } from "@/actions/getEmailDetails";
import { defaultMail } from "@/data/mails/default.ts";
import apiClient from "@/lib/api";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";
import { toast } from "sonner";
const Editor = ({ subject }: { subject: string }) => {
   const [loading, setLoading] = useState(true);
   const [data, setData] = useState(defaultMail);
   const history = useRouter();
   const user = "wndfwq"
   const emailEditorRef = useRef<EditorRef>(null);
   useEffect(() => {
      getEmailDetails()
   }, [user])

   const onReady: EmailEditorProps["onReady"] = (unlayer) => {
      unlayer.loadDesign(data);
   };

   const saveDraft = async () => {
      const unlayer = emailEditorRef.current?.editor;
      unlayer?.exportHtml(async (data) => {
         const { design } = data;

         const res = await apiClient
            .post("/emails", {
               title: subject,
               content: JSON.stringify(design),
               ownerId: "wndfwq",
            })
            .then((res) => {
               toast.success("Draft saved");
               // history.push("/dashboard/write");
            });
      });
   };
   const getEmailDetails = async () => {
      await getDetails({ title: subject, ownerId: user }).then((res) => {
         if (res) setData(JSON.parse(res?.content))
         setLoading(false)
      })
   }
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
                  <button className="btn btn-outline btn-md" onClick={saveDraft}>
                     Save Draft
                  </button>
                  <button className="btn btn-primary btn-md" onClick={saveDraft}>
                     Send
                  </button>
               </div>
            </div>
         )}
      </>
   );
};

export default Editor;