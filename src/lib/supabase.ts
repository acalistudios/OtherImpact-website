import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const configured = Boolean(url && anonKey);

// Placeholders keep createClient from throwing at module load when env vars are
// missing; Pricing's Go Pro button shows a "not enabled yet" message instead.
export const supabase = createClient(
  url || 'http://localhost:54321',
  anonKey || 'placeholder-anon-key',
);
