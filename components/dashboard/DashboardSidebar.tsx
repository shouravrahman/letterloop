"use client";
import React, { useState } from "react";
import { Logo } from "../landingpage/Logo.tsx";
import {
   Edit,
   LayoutDashboard,
   TrendingUp,
   Users,
   DollarSign,
   Settings,
   Globe,
   LogOut,
} from "lucide-react";
import Link from "next/link";
import PricingCard from "../shared/cards/SubscriptionCard.tsx";

interface SidebarLink {
   href: string;
   label: string;
   icon: React.ElementType;
}

const links: SidebarLink[] = [
   { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
   { href: "/dashboard/write", label: "Write", icon: Edit },
   { href: "/grow", label: "Grow", icon: TrendingUp },
   { href: "/audience", label: "Audience", icon: Users },
   { href: "/billing", label: "Billing", icon: DollarSign },
   { href: "/settings", label: "Settings", icon: Settings },
   { href: "/dashboard/view-site", label: "View Site", icon: Globe },
   { href: "/sign-out", label: "Sign Out", icon: LogOut },
];

const DashboardSidebar = () => {
   const [show, setShow] = useState(false);

   return (
      <div className="static h-dvh overflow-y-hidden bg-white hidden md:block">
         <div className="rounded xl:hidden flex justify-between w-full p-6 items-center border-b border-gray-200 ">
            <Logo />
         </div>
         <div
            id="Main"
            className={`${show ? "translate-x-0" : "-translate-x-full"
               } rounded transform xl:translate-x-0 ease-in-out transition duration-500 flex justify-start items-start w-full sm:w-64 border-r border-b border-gray-200 flex-col h-full font-semibold`}
         >
            <div className="hidden xl:flex px-10 py-4 items-center border-gray-200 border-b w-full">
               <Logo />
            </div>
            <div className="mt-6 flex flex-col justify-start items-center px-4 w-full space-y-3 pb-5">
               {links.map((link) => (
                  <Link
                     key={link.href}
                     href={link.href}
                     className="focus:outline-none flex justify-start  focus:bg-indigo-500 focus:text-white hover:bg-indigo-300/20  rounded py-3 pl-4 items-center space-x-6 w-full"
                  >
                     <link.icon className="" />
                     <p className="text-base leading-4">{link.label}</p>
                  </Link>
               ))}
            </div>
            <PricingCard
               planName="Free Plan"
               totalSubscribers={500} // Example value
               upgradeHref="/upgrade-plan"
            />
         </div>
      </div>
   );
};

export default DashboardSidebar;
