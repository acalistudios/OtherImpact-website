import { configured, supabase } from './supabase';

// This site is static marketing content — the only thing that talks to the
// backend is Pricing's "Go Pro" checkout button, which needs this pair.
export const demoMode = !configured;

/**
 * Calls an edge function and surfaces the server's actual error message.
 * supabase-js's functions.invoke() returns {data: null, error: FunctionsHttpError}
 * on any non-2xx response — the JSON body our functions send (e.g.
 * {error: "Payments not enabled yet"}) is NOT on `data`, it's only reachable
 * via error.context (the raw Response). Without this, every server-side
 * error collapses to the generic "Edge Function returned a non-2xx status code".
 * Keep in sync with the otherimpact (app) repo's src/lib/api.ts.
 */
export async function invokeFunction<T>(name: string, body: Record<string, unknown>): Promise<T> {
  const { data, error } = await supabase.functions.invoke(name, { body });
  if (error) {
    let message = error.message;
    const context = (error as { context?: Response }).context;
    if (context && typeof context.json === 'function') {
      try {
        const serverBody = await context.json();
        if (serverBody?.error) message = serverBody.error;
      } catch {
        // Response body wasn't JSON (or already consumed) — keep the generic message.
      }
    }
    throw new Error(message);
  }
  return data as T;
}
