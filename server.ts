import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

async function handler(req: Request): Promise<any> {
  let path = (function(){
    let url = req.url.split("/"), path = `/${url[url.length - 1]}`;
    return path;
  })();
  let file;
  let ct;

  switch(path){
    // PAGES
    case '/':
      file = Deno.readFile("./src/index.html");
      ct = "text/html; charset=UTF-8";
      break;

    // SETUP
    case '/robots.txt':
      file = "User-agent: * Disallow:";
      ct = "text/plain";
      break;

    default:
      file = Deno.readFile("./src/404.html");
      ct = "text/html; charset=UTF-8";
  }

  let res = new Response(await file, {
    headers: {
      "content-type": ct,
    },
  });

  return res;
}

await serve(handler, { addr: ":6969" });
