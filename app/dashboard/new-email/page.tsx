"use client";

import { Button } from "@/components/landingpage/Button.tsx";
import Editor from "@/components/shared/email/EmailEditor.tsx";
import apiClient from "@/lib/api";
import { ArrowBigLeftDashIcon } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const page = () => {
   const searchParams = useSearchParams();
   const subject: string = searchParams.get("subject");
   const subjectTitle = subject.replace(/-/g, " ");

   return (
      <div className="w-full flex flex-col">
         <div className="w-full pt-2">
            <Link href={"/dashboard/write"} className=" btn btn-link">
               <ArrowBigLeftDashIcon />
               Go Back
            </Link>
         </div>
         <div className="my-5">
            <Editor subject={subjectTitle} />
         </div>
      </div>
   );
};

export default page;
