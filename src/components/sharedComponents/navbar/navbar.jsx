import React from 'react';
import { Search, ChevronDown, SlidersHorizontal } from 'lucide-react';

export default function Navbar({ activeUser }) {
  return (
    <nav className="flex w-full items-center justify-between px-6 pt-4 pb-3">
      
      {/* 1. Left Section: Search */}
      <div className="flex flex-1 items-center max-w-[760px] pl-4">
        
        <div className="w-full">
          <div className="relative flex items-center group">
            <Search className="absolute left-4 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by Contact, Account, Deal..." 
              className="w-full rounded-3xl border border-white bg-white/70 py-3 pl-12 pr-12 text-sm shadow-sm outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:ring-1 focus:ring-gray-200"
            />
            <div className="absolute right-3 cursor-pointer rounded-full border border-gray-100 bg-white p-1.5 text-gray-500 shadow-sm">
              <ChevronDown size={14} />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Right Section: User Profile & Settings */}
      <div className="flex items-center gap-3">
        {/* User Profile Card */}
        <div className="flex items-center gap-3 bg-white/90 p-1.5 pr-4 rounded-[20px] border border-white shadow-sm">
          {/* Avatar with Fixed Yellow Background */}
          <div className="w-10 h-10 rounded-xl bg-[#F3FF90] flex items-center justify-center overflow-hidden">
            <img 
              src={activeUser?.avatar || "https://res.cloudinary.com/dnk0bvpym/image/upload/q_auto/f_auto/v1774706231/blog3-Pqq9Xkjs_onxzad.jpg"} 
              alt="User" 
              className="w-full h-full object-cover mix-blend-multiply opacity-90"
            />
          </div>
          
          <div className="flex flex-col">
            <span className="text-[13px] font-bold text-gray-800 leading-tight">
              {activeUser?.name || "Emily King"}
            </span>
            <span className="text-[11px] text-gray-400 font-medium">
              {activeUser?.role || "Realtor"}
            </span>
          </div>
        </div>

        {/* Settings Icon */}
        <div className="cursor-pointer rounded-2xl border border-white bg-white/80 p-3 text-gray-500 shadow-sm transition-all hover:text-black">
          <SlidersHorizontal size={18} strokeWidth={2.5} />
        </div>
      </div>
    </nav>
  );
}