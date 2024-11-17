"use client"
import { subscribe } from "@/actions/subscribe";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { useUser } from '@clerk/clerk-react';
const emailSchema = z.string().email("Invalid email format");

const Subscribe = () => {
   const [email, setEmail] = useState("");
   const { user } = useUser()


   // console.log(user)
   const handleSubmit = async (event: FormEvent) => {
      event.preventDefault();

      // Validate email
      try {
         emailSchema.parse(email);

         // Call subscribe action here with the validated email
         const response = await subscribe(email, user.lastName).then((res) => {
            if (res.error) {
               toast.error(res.message);
            } else {
               toast.success("You are successfully subscribed!");
               setEmail("");
            }
         });
      } catch (error) {
         if (error instanceof z.ZodError) {
            toast.error(error.errors[0].message);
         } else {
            console.error("Error subscribing:", error);
            toast.error("please try again");
         }
      }
   };

   return (
      <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
         <div className="max-w-2xl mx-auto p-4">
            <h1 className="relative z-10 text-lg md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-bold">
               Join {user.lastName}'s Newsletter
            </h1>
            <p className="text-neutral-500 max-w-lg mx-auto my-4 text-sm md:text-base text-center relative z-10">
               {`Stay updated with the latest from ${user.lastName}. Subscribe to my newsletter for insights, tips, and exclusive content.`}
            </p>

            <form
               className="flex items-center mt-4"
               onSubmit={handleSubmit}
            >
               <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="shourav@gmail.com"
                  className="text-white/80 rounded-lg border border-neutral-800 focus:ring-1 focus:ring-teal-500 w-full relative z-10 p-5 bg-neutral-950 placeholder:text-neutral-700"
               />
               <button
                  type="submit"
                  className="btn mx-2 btn-lg cursor-pointer"
               >
                  I'm in
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="feather feather-send"
                  >
                     <line
                        x1="22"
                        y1="2"
                        x2="11"
                        y2="13"
                     ></line>
                     <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
               </button>
            </form>
         </div>
         <BackgroundBeams />
      </div>
   );
};

export default Subscribe;
