import React from "react";
import {
  Calendar,
  LayoutDashboard,
  Wallet,
  Users,
  Handshake,
  BarChart3,
  Settings,
  Phone,
  Mail,
  Grid,
  Ellipsis,
} from "lucide-react";
import Logo from "../Logo/logo";

function SidebarItem({ icon: Icon, active = false }) {
  return (
    <button
      className={`grid h-11 w-11 place-items-center rounded-2xl transition-all ${
        active
          ? "bg-[#242424] text-white shadow-[0_6px_14px_rgba(0,0,0,0.25)]"
          : "text-gray-500 hover:bg-white/80 hover:text-gray-900"
      }`}
      type="button"
      aria-label="Sidebar item"
    >
      <Icon size={18} strokeWidth={2.2} />
    </button>
  );
}

export default function Sidebar({ mobile = false }) {
  return (
    <aside
      className={`flex h-full w-[92px] shrink-0 flex-col items-center py-5 ${
        mobile ? "bg-transparent" : "border-r border-gray-200/40 bg-transparent"
      }`}
    >
      

      <nav className="flex flex-col gap-3">
        <SidebarItem icon={Calendar} />
        <SidebarItem icon={LayoutDashboard} />
        <SidebarItem icon={Wallet} />
        <SidebarItem icon={Users} active />
        <SidebarItem icon={Handshake} />
        <SidebarItem icon={BarChart3} />
      </nav>

      <div className="mt-auto flex flex-col items-center gap-3">
        <SidebarItem icon={Settings} />
        <div className="flex flex-col gap-2 rounded-3xl border border-white/90 bg-white/70 p-2 shadow-sm backdrop-blur-sm">
          <SidebarItem icon={Phone} />
          <SidebarItem icon={Mail} />
          <SidebarItem icon={Grid} />
        </div>
        <button
          className="grid h-10 w-10 place-items-center rounded-2xl text-gray-500 hover:bg-white/70"
          type="button"
          aria-label="More"
        >
          <Ellipsis size={18} />
        </button>
      </div>
    </aside>
  );
}
