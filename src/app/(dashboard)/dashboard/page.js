"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  const [mobileTab, setMobileTab] = useState("profile");

  return (
    <div className="flex h-full w-full overflow-hidden">
      <div className="flex h-full w-full flex-col overflow-hidden px-3 pb-3 xl:hidden">
        <div className="mb-3 flex gap-2 pt-1 md:hidden">
          <button
            type="button"
            onClick={() => setMobileTab("contacts")}
            className={`rounded-2xl px-3 py-2 text-xs font-semibold ${
              mobileTab === "contacts" ? "bg-[#242424] text-white" : "bg-white/80 text-gray-600"
            }`}
          >
            Contacts
          </button>
          <button
            type="button"
            onClick={() => setMobileTab("profile")}
            className={`rounded-2xl px-3 py-2 text-xs font-semibold ${
              mobileTab === "profile" ? "bg-[#242424] text-white" : "bg-white/80 text-gray-600"
            }`}
          >
            Profile
          </button>
          <button
            type="button"
            onClick={() => setMobileTab("notes")}
            className={`rounded-2xl px-3 py-2 text-xs font-semibold ${
              mobileTab === "notes" ? "bg-[#242424] text-white" : "bg-white/80 text-gray-600"
            }`}
          >
            Notes
          </button>
        </div>

        <div className="hidden min-h-0 flex-1 gap-3 md:flex">
          <aside className="custom-scrollbar min-h-0 w-73 overflow-y-auto rounded-3xl border border-white/70 bg-white/35 p-3">
            <ContactList onContactSelect={setSelectedContact} />
          </aside>

          <section className="flex min-h-0 min-w-0 flex-1 flex-col rounded-3xl border border-white/70 bg-white/35 p-3">
            <div className="mb-3 flex gap-2">
              <button
                type="button"
                onClick={() => setMobileTab("profile")}
                className={`rounded-2xl px-3 py-2 text-xs font-semibold ${
                  mobileTab !== "notes" ? "bg-[#242424] text-white" : "bg-white/80 text-gray-600"
                }`}
              >
                Profile
              </button>
              <button
                type="button"
                onClick={() => setMobileTab("notes")}
                className={`rounded-2xl px-3 py-2 text-xs font-semibold ${
                  mobileTab === "notes" ? "bg-[#242424] text-white" : "bg-white/80 text-gray-600"
                }`}
              >
                Notes
              </button>
            </div>

            <div className="custom-scrollbar min-h-0 flex-1 overflow-y-auto rounded-2xl bg-white/25 p-2">
              <AnimatePresence mode="wait" initial={false}>
                {mobileTab === "notes" ? (
                  <motion.div
                    key="notes-panel"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="h-full"
                  >
                    <RightSidebar selectedContact={selectedContact} activeUser={dashboardData.activeUser} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="profile-panel"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 16 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="h-full"
                  >
                    <MainProfile contact={selectedContact} propertyPreview={dashboardData.propertyPreview} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>
        </div>

        <div className="custom-scrollbar min-h-0 flex-1 overflow-y-auto rounded-3xl border border-white/70 bg-white/35 p-3 md:hidden">
          <AnimatePresence mode="wait" initial={false}>
            {mobileTab === "contacts" ? (
              <motion.div
                key="mobile-contacts"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <ContactList onContactSelect={setSelectedContact} />
              </motion.div>
            ) : null}

            {mobileTab === "profile" ? (
              <motion.div
                key="mobile-profile"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <MainProfile contact={selectedContact} propertyPreview={dashboardData.propertyPreview} />
              </motion.div>
            ) : null}

            {mobileTab === "notes" ? (
              <motion.div
                key="mobile-notes"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <RightSidebar selectedContact={selectedContact} activeUser={dashboardData.activeUser} />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>

      <div className="hidden h-full w-full overflow-hidden xl:flex">
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
          className="hidden shrink-0 border-l border-gray-200/40 px-3 py-4 xl:block"
        >
          <RightSidebar selectedContact={selectedContact} activeUser={dashboardData.activeUser} />
        </motion.aside>
      </div>
    </div>
  );
}
