"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
	getSubscribers,
	addSubscriber,
	deleteSubscriber,
} from "@/actions/subscribers";
import { useUser } from '@clerk/clerk-react'
const Subscribers = () => {
	const [subscribers, setSubscribers] = useState<any[]>([]);
   const [searchTerm, setSearchTerm] = useState("");
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 10;

   const filteredSubscribers = subscribers.filter(
      (subscriber) =>
         subscriber?.name
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
         subscriber?.email?.toLowerCase().includes(searchTerm.toLowerCase())
   );

   const totalPages = Math.ceil(filteredSubscribers.length / itemsPerPage);
   const currentSubscribers = filteredSubscribers.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
   );

   const [email, setEmail] = useState("");
   const { isSignedIn, user, isLoaded } = useUser()
   console.log(user);
	const fetchSubscribers = async () => {
      const data = await getSubscribers(user?.id);
		setSubscribers(data);
	};

	useEffect(() => {
		fetchSubscribers();
   }, [email, user]);

	return (
      <div className="p-4">
			<h1 className="text-2xl font-bold mb-4">Subscribers Management</h1>
         <div className="flex justify-between items-center mb-4">
            <div className="relative">
               <svg
                  className="absolute left-2 top-2.5 h-4 w-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 15z"
                  ></path>
               </svg>
               <input
                  type="text"
                  placeholder="Search subscribers"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 pr-4 py-2 border border-gray-300 rounded-md w-full"
               />
            </div>
         </div>
         <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
               <thead>
                  <tr>
                     <th className="py-2 px-4 border-b">Name</th>
                     <th className="py-2 px-4 border-b">Email</th>
                     <th className="py-2 px-4 border-b">Join Date</th>
                     <th className="py-2 px-4 border-b">Status</th>
                  </tr>
               </thead>
               <tbody>
                  {subscribers.map((subscriber) => (
                     <tr
                        key={subscriber.id}
                        className="hover:bg-gray-100 text-center"
                     >
                        <td className="py-2 px-4 border-b">
                           {subscriber?.name}
                        </td>
                        <td className=" py-2 px-4 border-b">
                           {subscriber?.email}
                        </td>
                        <td className="py-2 px-4 border-b">
                           {subscriber?.joinDate}
                        </td>
                        <td className="py-2 px-4 border-b">
                           {subscriber?.status}
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>

         <div className="flex items-center justify-end space-x-2 py-4">
            <button
               className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100 disabled:opacity-50"
               onClick={() =>
                  setCurrentPage((prev) => Math.max(prev - 1, 1))
               }
               disabled={currentPage === 1}
            >
               Previous
            </button>
            <button
               className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100 disabled:opacity-50"
               onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
               }
               disabled={currentPage === totalPages}
            >
               Next
            </button>
         </div>
		</div>
	);
};

export default Subscribers;
