/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
"use client"
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { BellIcon, ChevronDownIcon, Search } from 'lucide-react'
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from 'next/link';
const userNavigation = [
   { name: 'Your profile', href: '#' },
   { name: 'Sign out', href: '/api/auth/logout' },
]

function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
}

export default function DashboardNavbar() {


   const { getUser } = useKindeBrowserClient();
   const user = getUser();
   return (
      <>
         {/*
         This example requires updating your template:

         ```
         <html class="h-full bg-white">
         <body class="h-full">
         ```
       */}



         <div className="flex  gap-x-4 self-stretch lg:gap-x-6 pt-3 pb-1 px-4">
            <form className="relative flex flex-1 " action="#" method="GET">
               <label htmlFor="search-field" className="sr-only">
                  Search
               </label>
               <Search
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
               />
               <input
                  id="search-field"
                  className="block h-full w-full border-0 py-2 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
               />
            </form>
            <div className="flex items-center gap-x-4 lg:gap-x-6">
               <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
               </button>

               {/* Separator */}
               <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

               {/* Profile dropdown */}
               <Menu as="div" className="relative">
                  <MenuButton className="-m-1.5 flex items-center p-1.5">
                     <span className="sr-only">Open user menu</span>
                     <img
                        className="h-8 w-8 rounded-full bg-gray-50"
                        src={user?.picture}
                        alt=""
                     />
                     <span className="hidden lg:flex lg:items-center">
                        <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                           {user?.given_name}
                        </span>
                        <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                     </span>
                  </MenuButton>
                  <Transition
                     enter="transition ease-out duration-100"
                     enterFrom="transform opacity-0 scale-95"
                     enterTo="transform opacity-100 scale-100"
                     leave="transition ease-in duration-75"
                     leaveFrom="transform opacity-100 scale-100"
                     leaveTo="transform opacity-0 scale-95"
                  >
                     <MenuItems className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                        {userNavigation.map((item) => (
                           <MenuItem key={item.name}>
                              {({ focus }) => (
                                 <Link
                                    href={item.href}
                                    className={classNames(
                                       focus ? 'bg-gray-50' : '',
                                       'block px-3 py-1 text-sm leading-6 text-gray-900'
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





      </>
   )
}
