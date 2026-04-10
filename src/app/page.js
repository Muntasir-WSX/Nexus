"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "@/components/sharedComponents/sidebar/sidebar";
import ContactList from "@/components/ContactList/ContactList";
import MainProfile from "@/components/MainProfile/MainProfile";
import RightSidebar from "@/components/RightSidebar/RightSidebar";
import dashboardData from "@/data/dasboardData.json";

export default function Page() {
  const initialContact = useMemo(
    () => [...dashboardData.contacts, ...dashboardData.favorite_contacts][0] ?? null,
    []
  );
  const [selectedContact, setSelectedContact] = useState(initialContact);

  return (
    <div className="flex h-full w-full overflow-hidden">
      <Sidebar />

      <motion.aside
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="shrink-0 border-r border-gray-200/40 px-3 py-4"
      >
        <ContactList onContactSelect={setSelectedContact} />
      </motion.aside>

      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
        className="custom-scrollbar min-w-0 flex-1 overflow-y-auto py-4"
      >
        <MainProfile contact={selectedContact} propertyPreview={dashboardData.propertyPreview} />
      </motion.section>

      <motion.aside
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
        className="shrink-0 border-l border-gray-200/40 px-3 py-4"
      >
        <RightSidebar selectedContact={selectedContact} activeUser={dashboardData.activeUser} />
      </motion.aside>
    </div>
  );
}
