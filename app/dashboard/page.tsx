import ButtonAccount from "@/components/ButtonAccount";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar.tsx";
import QuickLinks from "@/components/dashboard/QuickLinks.tsx";
import RecentActivities from "@/components/dashboard/RecentActivities.tsx";
import DashboardOverviewCard from "@/components/shared/cards/OverviewCard.tsx";
import SubscribersChart from "@/components/shared/charts/SubscribersChart.tsx";
import CopyToClipboard from "@/components/shared/CopyToClickboard.tsx";
import { auth, currentUser } from '@clerk/nextjs/server'


export default async function Dashboard() {
   const user = await currentUser()
   console.log(user);
   return (
      <section className="mx-auto w-full px-4">
         {/* <ButtonAccount /> */}
         <div className="flex flex-col md:flex-row justify-between items-start my-10">
            <div className="w-full md:w-[65%] flex flex-col gap-10">
               <DashboardOverviewCard />
               <SubscribersChart />
            </div>
            <div className="w-full md:w-[30%] flex flex-col gap-10 pl-0 md:pl-5">
               <button className="btn btn-neutral">Start Writing</button>
               <CopyToClipboard
                  text={`${process.env.NEXT_PUBLIC_APP_URL}/subscribe?username=${user?.username || user?.lastName}`}
               />
               <RecentActivities />
               <QuickLinks />
            </div>
         </div>
      </section>
   );
}
