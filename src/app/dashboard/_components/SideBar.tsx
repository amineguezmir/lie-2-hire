"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import {
  UserIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("candidates");
  const { user } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    {
      name: "Add candidate",
      icon: <PlusIcon className="h-6 w-6" />,
      key: "add",
      path: "/dashboard/add",
    },
    {
      name: "Candidates",
      icon: <UserIcon className="h-6 w-6" />,
      key: "candidates",
      path: "/dashboard/candidates",
    },
    {
      name: "Roles",
      icon: <DocumentTextIcon className="h-6 w-6" />,
      key: "roles",
      path: "/dashboard/roles",
    },
    {
      name: "Billing",
      icon: <BriefcaseIcon className="h-6 w-6" />,
      key: "billing",
      path: "/dashboard/billing",
      credits: 2,
    },
  ];

  useEffect(() => {
    const currentTab = menuItems.find((item) => pathname === item.path)?.key;
    if (currentTab) {
      setActiveTab(currentTab);
    }
  }, [pathname, menuItems]);

  const handleMenuClick = (path: any) => {
    setActiveTab(path.split("/").pop());
    router.push(path);
  };

  return (
    <div className="h-auto max-w-screen-xl bg-[#1b1b1b] p-5 flex flex-col justify-between rounded-4xl shadow-lg mt-4 mb-4 ml-32">
      <div>
        <div className="flex items-center space-x-2 mb-10">
          <div className="h-8 w-8 bg-orange-500 rounded-full flex items-center justify-center">
            <Image
              src="../../../public/logoipsum-327.svg"
              alt="Logo"
              width={24}
              height={24}
            />
          </div>
          <span className="text-white font-bold text-xl">ResumeFilter</span>
        </div>

        <nav className="space-y-4">
          {menuItems.map((item, index) => (
            <div key={item.key}>
              <div
                onClick={() => handleMenuClick(item.path)}
                className={`flex items-center justify-between cursor-pointer p-3 rounded-md ${
                  activeTab === item.key
                    ? "bg-gray-700 text-white"
                    : "text-gray-400"
                }`}
              >
                <div className="flex items-center space-x-2 text-xl">
                  {typeof item.icon === "string" ? (
                    <span className="text-lg">{item.icon}</span>
                  ) : (
                    item.icon
                  )}
                  <span>{item.name}</span>
                </div>
                {item.credits && (
                  <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                    {item.credits} credits
                  </span>
                )}
              </div>

              {(index === 0 || index === 2) && (
                <div className="border-b border-gray-600 my-4" />
              )}
            </div>
          ))}
        </nav>
      </div>

      <div className="flex items-center space-x-2 border-t border-gray-700 pt-4">
        <UserButton />
        {user && (
          <span className="text-gray-400 text-xl">
            {user.emailAddresses[0]?.emailAddress}
          </span>
        )}
      </div>
    </div>
  );
}
