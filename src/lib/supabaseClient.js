import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

const hasValidSupabaseUrl = typeof supabaseUrl === "string" && /^https?:\/\//.test(supabaseUrl);
const hasSupabaseConfig = hasValidSupabaseUrl && typeof supabaseAnonKey === "string" && supabaseAnonKey.length > 0;

if (!supabaseUrl || !supabaseAnonKey) {
  // Keep this explicit so auth pages can show a helpful message during setup.
  console.warn("Missing Supabase env vars: NEXT_PUBLIC_SUPABASE_URL and/or NEXT_PUBLIC_SUPABASE_ANON_KEY");
}

let supabaseClient = null;

export function getSupabaseClient() {
  if (!hasSupabaseConfig) return null;
  if (supabaseClient) return supabaseClient;

  supabaseClient = createBrowserClient(supabaseUrl, supabaseAnonKey);
  return supabaseClient;
}

export { hasSupabaseConfig };
