import ButtonAccount from "@/components/ButtonAccount";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar.tsx";
import QuickLinks from "@/components/dashboard/QuickLinks.tsx";
import RecentActivities from "@/components/dashboard/RecentActivities.tsx";
import DashboardOverviewCard from "@/components/shared/cards/OverviewCard.tsx";
import SubscribersChart from "@/components/shared/charts/SubscribersChart.tsx";
import CopyToClipboard from "@/components/shared/CopyToClickboard.tsx";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { redirect } from "next/navigation";

const newsletterURL = `${process.env.NEXT_PUBLIC_APP_URL}/subscribe?username=wve`;
// This is a private page: It's protected by the layout.js component which ensures the user is authenticated.
// It's a server compoment which means you can fetch data (like the user profile) before the page is rendered.
export default async function Dashboard() {
   const { getUser } = getKindeServerSession();
   const user = await getUser();
   console.log(user)
   return (
      <section className=" mx-auto w-full px-4">
         {/* <ButtonAccount /> */}
         <div className="flex justify-between items-start my-10">
            <div className="w-[65%] flex flex-col gap-10">
               <DashboardOverviewCard />
               <SubscribersChart />
            </div>
            <div className="w-[30%] flex flex-col  gap-10 pl-5">
               <button className="btn btn-neutral">Start Writing</button>
               <CopyToClipboard text={newsletterURL} />
               <RecentActivities />
               <QuickLinks />
            </div>
         </div>
      </section>
   );
}
