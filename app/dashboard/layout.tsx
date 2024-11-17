import { ReactNode } from "react";

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { auth } from '@clerk/nextjs/server'
import DashboardNavbar from "@/components/DashboardNavbar";

export default async function LayoutPrivate({
   children,
}: {
      children: ReactNode;
}) {
   const { userId, redirectToSignIn } = await auth();

   if (!userId) return redirectToSignIn();

   return (
      <div className="flex flex-col lg:flex-row w-full h-screen">
         <DashboardSidebar />
         <div className="flex-1 flex flex-col">
				<DashboardNavbar />
            <main className="flex-1 overflow-y-auto p-4">{children}</main>
         </div>
		</div>
   );
}
