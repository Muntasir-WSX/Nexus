"use client";

import React from 'react';
import { Search, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from '../Logo/logo';

export default function Navbar({ activeUser }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex w-full items-center justify-between px-6 py-4"
    >
      
      {/* 1. Left Section: Logo */}
      <div className="flex items-center w-[60px]">
      <Logo></Logo>
      </div>

      {/* 2. Middle Section: Search Bar */}
      <div className="flex flex-1 items-center justify-center max-w-[800px] px-8">
        <div className="w-full relative group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by Contact, Account, Deal..." 
            className="w-full rounded-[24px] border-none bg-white/60 py-3.5 pl-14 pr-14 text-[14px] shadow-sm outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:ring-1 focus:ring-gray-100"
          />
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-full border border-gray-100 bg-white p-2 text-gray-400 shadow-sm hover:text-black"
          >
            <ChevronDown size={14} />
          </motion.div>
        </div>
      </div>

      {/* 3. Right Section: Profile & Settings */}
      <div className="flex items-center gap-3">
        {/* User Card */}
        <div className="flex items-center gap-3 bg-white/80 p-1 pr-5 rounded-[22px] border border-white shadow-sm">
          <div className="w-11 h-11 rounded-[14px] bg-[#F3FF90] flex items-center justify-center overflow-hidden">
            <img 
              src={activeUser?.avatar || "https://res.cloudinary.com/dnk0bvpym/image/upload/q_auto/f_auto/v1774706231/blog3-Pqq9Xkjs_onxzad.jpg"} 
              alt="User" 
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </div>
          
          <div className="flex flex-col">
            <span className="text-[13px] font-bold text-gray-800 leading-tight">
              {activeUser?.name || "Emily King"}
            </span>
            <span className="text-[10px] text-gray-400 font-semibold tracking-wide uppercase">
              {activeUser?.role || "Realtor"}
            </span>
          </div>
        </div>

        {/* Sliders Icon */}
        <motion.div
          whileHover={{ y: -1, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer rounded-[18px] border border-white bg-white/80 p-3.5 text-gray-500 shadow-sm transition-all hover:bg-white hover:text-black"
        >
          <SlidersHorizontal size={18} strokeWidth={2.2} />
        </motion.div>
      </div>
    </motion.nav>
  );
}