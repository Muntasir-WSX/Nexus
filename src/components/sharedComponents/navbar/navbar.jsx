"use client";

import React, { useEffect, useMemo, useState } from 'react';
import { Search, ChevronDown, SlidersHorizontal, LogOut, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Logo from '../Logo/logo';
import Sidebar from '../sidebar/sidebar';
import { getSupabaseClient } from '@/lib/supabaseClient';

export default function Navbar({ activeUser }) {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [sessionUser, setSessionUser] = useState(null);

  useEffect(() => {
    const supabase = getSupabaseClient();
    if (!supabase) return undefined;

    let isMounted = true;

    const hydrateSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!isMounted) return;
      setSessionUser(data?.session?.user ?? null);
    };

    hydrateSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSessionUser(session?.user ?? null);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const userCard = useMemo(() => {
    const email = sessionUser?.email || activeUser?.email || "emily@example.com";
    const displayName =
      sessionUser?.user_metadata?.full_name ||
      sessionUser?.user_metadata?.name ||
      activeUser?.name ||
      email.split("@")[0];
    const image =
      sessionUser?.user_metadata?.avatar_url ||
      sessionUser?.user_metadata?.picture ||
      sessionUser?.user_metadata?.photoURL ||
      activeUser?.avatar ||
      `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(email)}`;

    return {
      displayName,
      email,
      image,
    };
  }, [activeUser?.avatar, activeUser?.email, activeUser?.name, sessionUser]);

  const handleLogout = async () => {
    const supabase = getSupabaseClient();
    if (!supabase) {
      router.replace('/login');
      return;
    }

    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error('Could not log out', {
        description: error.message,
      });
      return;
    }

    toast.success('Logged out', {
      description: 'You have been signed out successfully.',
    });
    router.replace('/login');
    router.refresh();
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex w-full items-center justify-between px-3 py-3 sm:px-6 sm:py-4"
      >
        {/* 1. Left Section: Menu + Logo */}
        <div className="flex items-center gap-2 sm:w-15">
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-2xl border border-white/80 bg-white/80 text-gray-700 shadow-sm lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
          <Logo />
        </div>

        {/* 2. Middle Section: Search Bar */}
        <div className="hidden flex-1 items-center justify-center px-4 sm:flex sm:max-w-200 sm:px-8">
          <div className="group relative w-full">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search by Contact, Account, Deal..."
              className="w-full rounded-3xl border-none bg-white/60 py-3.5 pl-14 pr-14 text-[14px] shadow-sm outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:ring-1 focus:ring-gray-100"
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
        <div className="flex items-center gap-2 sm:gap-3">
          {/* User Card */}
          <div className="flex items-center gap-2 rounded-[22px] border border-white bg-white/80 p-1 pr-2 shadow-sm sm:gap-3 sm:pr-5">
            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-[#F3FF90] sm:h-11 sm:w-11 sm:rounded-[14px]">
              <img
                src={userCard.image}
                alt="User"
                className="h-full w-full object-cover mix-blend-multiply"
              />
            </div>

            <div className="hidden flex-col sm:flex">
              <span className="text-[13px] font-bold leading-tight text-gray-800">
                {userCard.displayName}
              </span>
              <span className="max-w-46 truncate text-[10px] font-semibold tracking-wide text-gray-400">
                {userCard.email}
              </span>
            </div>
          </div>

          {/* Sliders Icon */}
          <motion.div
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer rounded-2xl border border-white bg-white/80 p-2.5 text-gray-500 shadow-sm transition-all hover:bg-white hover:text-black sm:rounded-[18px] sm:p-3.5"
          >
            <SlidersHorizontal size={18} strokeWidth={2.2} />
          </motion.div>

          <motion.button
            type="button"
            onClick={handleLogout}
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-2xl border border-white bg-white/80 p-2.5 text-gray-500 shadow-sm transition-all hover:bg-white hover:text-black sm:rounded-[18px] sm:p-3.5"
            aria-label="Log out"
          >
            <LogOut size={18} strokeWidth={2.2} />
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isDrawerOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 z-40 bg-black/25 xl:hidden"
            />

            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed left-0 top-0 z-50 h-full w-23 bg-[#F1F4F2] xl:hidden"
            >
              <button
                type="button"
                onClick={() => setIsDrawerOpen(false)}
                className="absolute -right-11 top-4 grid h-10 w-10 place-items-center rounded-2xl bg-white text-gray-700 shadow-sm"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>

              <Sidebar mobile />
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}