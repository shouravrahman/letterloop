"use client";
import React, { useState } from "react";
import { Logo } from "../landingpage/Logo";
import {
	Edit,
	LayoutDashboard,
	TrendingUp,
	Users,
	DollarSign,
	Settings,
	Globe,
	LogOut,
	Menu,
	X,
} from "lucide-react";
import Link from "next/link";
import PricingCard from "../shared/cards/SubscriptionCard";

interface SidebarLink {
	href: string;
	label: string;
	icon: React.ElementType;
}

const links: SidebarLink[] = [
	{ href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
	{ href: "/dashboard/write", label: "Write", icon: Edit },
	{ href: "/dashboard/grow", label: "Grow", icon: TrendingUp },
	{ href: "/dashboard/subscribers", label: "Subscribers", icon: Users },
	{ href: "/dashboard/billing", label: "Billing", icon: DollarSign },
	{ href: "/dashboard/settings", label: "Settings", icon: Settings },
	{ href: "/dashboard/view-site", label: "View Site", icon: Globe },
	{ href: "/sign-out", label: "Sign Out", icon: LogOut },
];

const DashboardSidebar = () => {
	const [show, setShow] = useState(false);

	const toggleSidebar = () => {
		setShow(!show);
	};

	return (
		<div className="lg:w-64 bg-white border-r border-gray-200 flex flex-col z-20">
			<button
				className="lg:hidden p-2 bg-gray-200 rounded m-4"
				onClick={toggleSidebar}
			>
				{show ? <X /> : <Menu />}
			</button>
			<div
				className={`fixed lg:static top-0 left-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ease-in-out ${
					show ? "translate-x-0" : "-translate-x-full"
				} lg:translate-x-0`}
			>
				<div className="p-6 border-b border-gray-200">
					<Logo />
				</div>
				<div className="flex flex-col p-4 space-y-3">
					{links.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="flex items-center space-x-4 p-2 hover:bg-indigo-100 rounded"
						>
							<link.icon className="w-5 h-5" />
							<span>{link.label}</span>
						</Link>
					))}
				</div>
				<PricingCard
					planName="Free Plan"
					totalSubscribers={500}
					upgradeHref="/upgrade-plan"
				/>
			</div>
		</div>
	);
};

export default DashboardSidebar;
