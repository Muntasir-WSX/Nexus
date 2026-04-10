import Link from "next/link";
import AuthLottiePanel from "@/components/auth/AuthLottiePanel";
import Logo from "@/components/sharedComponents/Logo/logo";

export default function AuthLayout({ children }) {
  return (
    <main className="flex h-full items-center justify-center bg-[#F1F4F2] p-4 lg:p-8">
      <section className="grid h-full w-full max-w-6xl overflow-hidden rounded-4xl border border-white/80 bg-white/55 shadow-2xl shadow-black/10 backdrop-blur-md lg:h-190 lg:grid-cols-[1.05fr_0.95fr]">
        <aside className="hidden border-r border-white/70 bg-linear-to-br from-[#EAF0EC] via-[#E3ECE6] to-[#DDE6E0] p-8 lg:flex lg:flex-col">
          <div className="flex items-center gap-3">
            <Logo size={42} color="#1f2937" />
            <h2 className="text-4xl font-semibold tracking-tight text-gray-800">Nexus</h2>
          </div>

          <p className="mt-4 max-w-md text-sm leading-6 text-gray-600">
           Where your next home begins.
Explore properties, invest smarter, live better.
          </p>

          <div className="mt-8 flex flex-1 items-center justify-center">
            <AuthLottiePanel />
          </div>

          <div className="mt-6 rounded-3xl border border-white/80 bg-white/55 p-5 shadow-lg shadow-black/5 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Why Nexus?</p>
            <p className="mt-2 text-sm leading-6 text-gray-700">
             At Nexus, property search isn’t just easier — it’s smarter.
We bring together verified listings, modern tools, and a smooth experience in one place.
So you can discover, decide, and move forward with confidence.
            </p>
          </div>
        </aside>

        <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8">{children}</div>
      </section>
    </main>
  );
}
