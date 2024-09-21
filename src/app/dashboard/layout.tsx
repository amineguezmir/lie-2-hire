import React, { ReactNode } from "react";
import Sidebar from "./_components/SideBar";

interface DashboardLayoutProps {
  children: ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-5">{children}</div>
    </div>
  );
}

export default DashboardLayout;
