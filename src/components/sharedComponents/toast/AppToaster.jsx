"use client";

import { Toaster } from "sonner";

export default function AppToaster() {
  return (
    <Toaster
      position="top-right"
      richColors
      closeButton
      toastOptions={{
        style: {
          background: "#ffffff",
          border: "1px solid #e5e7eb",
          color: "#1f2937",
          boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
        },
      }}
    />
  );
}
