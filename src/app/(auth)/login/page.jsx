"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { getSupabaseClient, hasSupabaseConfig } from "@/lib/supabaseClient";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!hasSupabaseConfig) {
      setError("Supabase env vars are missing. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local");
      return;
    }

    const supabase = getSupabaseClient();
    if (!supabase) {
      setError("Supabase client could not be initialized. Check NEXT_PUBLIC_SUPABASE_URL format.");
      return;
    }

    setLoading(true);
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (signInError) {
      setError(signInError.message);
      return;
    }

    router.push("/");
  };

  const handleGoogleAuth = async () => {
    setError("");

    if (!hasSupabaseConfig) {
      setError("Supabase env vars are missing. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local");
      return;
    }

    const supabase = getSupabaseClient();
    if (!supabase) {
      setError("Supabase client could not be initialized. Check NEXT_PUBLIC_SUPABASE_URL format.");
      return;
    }

    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/` },
    });

    if (oauthError) setError(oauthError.message);
  };

  return (
    <section className="w-full max-w-md rounded-3xl border border-white/80 bg-white/85 p-6 shadow-lg shadow-black/5">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-800">Welcome back</h1>
      <p className="mt-2 text-sm text-gray-500">Sign in to continue to your dashboard.</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-gray-300 focus:ring-2 focus:ring-black/5"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-gray-300 focus:ring-2 focus:ring-black/5"
            placeholder="Your password"
          />
        </div>

        {error ? <p className="rounded-xl bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p> : null}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#242424] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign in"}
          <ArrowRight size={16} />
        </button>

        <button
          type="button"
          onClick={handleGoogleAuth}
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>
      </form>

      <p className="mt-5 text-sm text-gray-500">
        Do not have an account?{" "}
        <Link href="/signup" className="font-semibold text-gray-800 underline-offset-2 hover:underline">
          Create one
        </Link>
      </p>
    </section>
  );
}
