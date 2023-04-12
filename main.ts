import { serve } from "https://deno.land/std@0.182.0/http/server.ts";

const SERVICE_DISCOVERY_ROUTE = new URLPattern({ pathname: "/cds-services" });

function handler(req: Request): Response {
  const match = SERVICE_DISCOVERY_ROUTE.test(req.url);

  if (match) {
    return Response.json({ services: [] });
  }

  return new Response("Not found", { status: 404 });
}

serve(handler);
