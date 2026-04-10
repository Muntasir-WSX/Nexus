"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Lottie from "lottie-react";

export default function AuthLottiePanel() {
  const pathname = usePathname();
  const [animationData, setAnimationData] = useState(null);

  const animationPath = useMemo(() => {
    if (pathname?.includes("signup")) return "/register_new.json";
    return "/login.json";
  }, [pathname]);

  useEffect(() => {
    let isMounted = true;

    async function loadAnimation() {
      try {
        const res = await fetch(animationPath);
        if (!res.ok) throw new Error("Failed to fetch Lottie JSON");
        const json = await res.json();
        if (isMounted) setAnimationData(json);
      } catch {
        if (isMounted) setAnimationData(null);
      }
    }

    loadAnimation();
    return () => {
      isMounted = false;
    };
  }, [animationPath]);

  if (!animationData) {
    return (
      <div className="grid h-95 w-full place-items-center rounded-3xl border border-white/80 bg-white/60 text-sm text-gray-500">
        Lottie animation loading...
      </div>
    );
  }

  return (
    <div className="w-full rounded-3xl border border-white/80 bg-white/50 p-4 shadow-lg shadow-black/5 backdrop-blur-sm">
      <Lottie animationData={animationData} loop className="h-90 w-full" />
    </div>
  );
}
