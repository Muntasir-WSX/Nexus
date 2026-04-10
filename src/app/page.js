import React from "react";
import Sidebar from "@/components/sharedComponents/sidebar/sidebar";
import ContactList from "@/components/ContactList/ContactList";

export default function Page() {
  return (
    <div className="flex h-full w-full overflow-hidden">
      <Sidebar />

      <aside className="shrink-0 border-r border-gray-200/40 px-3 py-4">
        <ContactList />
      </aside>

      <section className="flex min-w-0 flex-1 items-center justify-center text-gray-400">
        Dashboard content area
      </section>
    </div>
  );
}
