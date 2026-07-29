import { createClient } from '@supabase/supabase-js';

// Public project config, safe to inline as build-time fallbacks: the anon key is
// a PUBLISHABLE key (already shipped in every client bundle and gated by
// row-level security) and the project URL is public. Set VITE_SUPABASE_URL /
// VITE_SUPABASE_ANON_KEY in the build environment to override these; when they
// aren't set (e.g. no dashboard vars), these keep the pricing page wired instead
// of falling back to the "not enabled yet" placeholder state.
const DEFAULT_URL = 'https://zvupfktbnlnfzeyvrrxx.supabase.co';
const DEFAULT_ANON_KEY = 'sb_publishable_ILMspoenpNoJtc2aKQrBaw_h26hldSE';

const url = (import.meta.env.VITE_SUPABASE_URL as string) || DEFAULT_URL;
const anonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || DEFAULT_ANON_KEY;

export const configured = Boolean(url && anonKey);

export const supabase = createClient(url, anonKey);
