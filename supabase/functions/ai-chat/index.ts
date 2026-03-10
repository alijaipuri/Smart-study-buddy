import { serve } from "https://deno.land/std/http/server.ts";

serve(async (req) => {
  const { message } = await req.json();

  const reply = `AI Response to: ${message}`;

  return new Response(
    JSON.stringify({ reply }),
    { headers: { "Content-Type": "application/json" } }
  );
});
