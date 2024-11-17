"use client";
import {
   Menu,
   MenuButton,
   MenuItem,
   MenuItems,
   Transition,
} from "@headlessui/react";
import { BellIcon, ChevronDownIcon, Search } from "lucide-react";
import { useUser } from '@clerk/clerk-react'
import Link from "next/link";

const userNavigation = [
   { name: "Your profile", href: "#" },
   { name: "Sign out", href: "/api/auth/logout" },
];

function classNames(...classes: string[]) {
   return classes.filter(Boolean).join(" ");
}

export default function DashboardNavbar() {
   const { isSignedIn, user, isLoaded } = useUser()

   return (
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
         <form
            className="flex-1 relative"
            action="#"
            method="GET"
         >
            <label
               htmlFor="search-field"
               className="sr-only"
            >
               Search
            </label>
            <Search
               className="z-0 px-5  pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
               aria-hidden="true"
            />
            <input
               id="search-field"
               className="block w-full pl-8 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-0 sm:text-sm"
               placeholder="Search..."
               type="search"
               name="search"
            />
         </form>
         <div className="flex items-center space-x-4 ml-3">
            <button
               type="button"
               className="text-gray-400 hover:text-gray-500"
            >
               <span className="sr-only">View notifications</span>
               <BellIcon
                  className="h-6 w-6"
                  aria-hidden="true"
               />
            </button>
            <Menu
               as="div"
               className="relative"
            >
               <MenuButton className="flex items-center space-x-2">
                  <img
                     className="h-8 w-8 rounded-full"
                     src={user?.imageUrl}
                     alt=""
                  />
                  <span className="hidden lg:block text-sm font-semibold text-gray-900">
                     {user?.username}
                  </span>
                  <ChevronDownIcon className="h-5 w-5 text-gray-400" />
               </MenuButton>
               <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
               >
                  <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
                     {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                           {({ active }) => (
                              <Link
                                 href={item.href}
                                 className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                 )}
                              >
                                 {item.name}
                              </Link>
                           )}
                        </MenuItem>
                     ))}
                  </MenuItems>
               </Transition>
            </Menu>
         </div>
      </div>
   );
}
