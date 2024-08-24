import Link from "next/link";
import React from "react";

interface PricingCardProps {
	planName: string;
	totalSubscribers: number;
	upgradeHref: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
	planName,
	totalSubscribers,
	upgradeHref,
}) => {
	return (
		<div className="bg-accent/20 mt-auto self-end shadow rounded-lg p-4 border border-gray-200 w-full max-w-sm mx-auto">
			<div className="flex items-center justify-between text-center">
				<h3 className="text-base font-semibold text-gray-800 ">{planName}</h3>
				<Link
					href={upgradeHref}
					className=" text-sm  p-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
				>
					Upgrade
				</Link>
			</div>
			<div className="mt-4">
				<p className="text-sm text-gray-600">Total Subscribers</p>
				<div className="relative mt-2">
					<div className="absolute inset-0 bg-white rounded-full">
						<div
							className="bg-indigo-500 h-full rounded-full"
							style={{
								width: `${Math.min((totalSubscribers / 1000) * 100, 100)}%`,
							}} // Adjust percentage logic as needed
						/>
					</div>
					<p className="pl-3 relative text-white font-semibold">
						{totalSubscribers}
					</p>
				</div>
			</div>
		</div>
	);
};

export default PricingCard;
