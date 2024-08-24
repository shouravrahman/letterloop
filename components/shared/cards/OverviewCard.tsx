import React from "react";

const DashboardOverviewCard = () => {
   return (
      <div className="flex flex-col md:flex-row gap-6">
         {/* Subscribers Card */}
         <div className="w-full md:w-1/3 flex flex-col justify-between border border-gray-200 rounded-lg shadow-sm bg-white p-4 md:p-6 text-sm md:text-lg">
            <h5 className="text-lg md:text-xl font-semibold text-gray-800">
               Subscribers
            </h5>
            <div className="flex items-center justify-between mt-2 md:mt-4">
               <span className="text-xl md:text-3xl font-bold text-gray-900">
                  20
               </span>
               <div className="flex h-6 md:h-8 px-3 md:px-4 py-1 md:py-2 items-center justify-between rounded-full bg-green-500 text-white">
                  <span className="text-sm md:text-lg">+</span>
                  <span className="text-xs md:text-sm pl-1">100%</span>
               </div>
            </div>
            <small className="block mt-1 md:mt-2 text-xs md:text-sm text-gray-600">
               from 8 (last 4 weeks)
            </small>
         </div>

         {/* Open Rates Card */}
         <div className="w-full md:w-1/3 flex flex-col justify-between border border-gray-200 rounded-lg shadow-sm bg-white p-4 md:p-6 text-sm md:text-lg">
            <h5 className="text-lg md:text-xl font-semibold text-gray-800">
               Open Rates
            </h5>
            <div className="flex items-center justify-between mt-2 md:mt-4">
               <span className="text-xl md:text-3xl font-bold text-gray-900">
                  45%
               </span>
               <div className="flex h-6 md:h-8 px-3 md:px-4 py-1 md:py-2 items-center justify-between rounded-full bg-blue-500 text-white">
                  <span className="text-sm md:text-lg">↑</span>
                  <span className="text-xs md:text-sm pl-1">5% </span>
               </div>
            </div>
            <small className="block mt-1 md:mt-2 text-xs md:text-sm text-gray-600">
               compared to last 4 weeks
            </small>
         </div>

         {/* Click Rates Card */}
         <div className="w-full md:w-1/3 flex flex-col justify-between border border-gray-200 rounded-lg shadow-sm bg-white p-4 md:p-6 text-sm md:text-lg">
            <h5 className="text-lg md:text-xl font-semibold text-gray-800">
               Click Rates
            </h5>
            <div className="flex items-center justify-between mt-2 md:mt-4">
               <span className="text-xl md:text-3xl font-bold text-gray-900">
                  10%
               </span>
               <div className="flex h-6 md:h-8 px-3 md:px-4 py-1 md:py-2 items-center justify-between rounded-full bg-red-500 text-white">
                  <span className="text-sm md:text-lg">↑</span>
                  <span className="text-xs md:text-sm pl-1">2% </span>
               </div>
            </div>
            <small className="block mt-1 md:mt-2 text-xs md:text-sm text-gray-600">
               compared to last 4 weeks
            </small>
         </div>
      </div>
   );
};

export default DashboardOverviewCard;
