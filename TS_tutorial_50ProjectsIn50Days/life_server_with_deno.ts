import { serve } from "https://deno.land/std@0.203.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.203.0/http/file_server.ts";

const handler = (request: Request): Promise<Response> => {
  return serveDir(request, { fsRoot: "./", showIndex: true });
};

console.log("Server running on http://localhost:8080");
await serve(handler, { port: 8080 });
