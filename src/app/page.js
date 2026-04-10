import React from "react";
import Sidebar from "@/components/sharedComponents/sidebar/sidebar";

export default function Page() {
  return (
    <div className="flex h-full w-full overflow-hidden">
      <Sidebar />

      <section className="flex min-w-0 flex-1 items-center justify-center text-gray-400">
        Dashboard content area
      </section>
    </div>
  );
}
