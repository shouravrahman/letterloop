import { ReactNode } from "react";
import { redirect } from "next/navigation";

import config from "@/config";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar.tsx";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import DashboardNavbar from "@/components/DashboardNavbar";

export default async function LayoutPrivate({
   children,
}: {
   children: ReactNode;
}) {

   const { isAuthenticated, getUser } = getKindeServerSession();
   const user = await getUser();
   // console.log(user)
   if (!isAuthenticated) redirect("/")

   return (
      <div className="flex flex-grow">
         <aside className="">
            <DashboardSidebar />
         </aside>
         <main className="w-full" >
            <DashboardNavbar />
            {children}</main>
      </div>
   );
}
