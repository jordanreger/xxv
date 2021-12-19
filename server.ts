import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

async function handler(req: Request): Promise<any> {
  let path = (function(){
    let url = req.url.split("/"), path = `/${url[url.length - 1]}`;
    return path;
  })();

  let file, ct, f, r;

  switch(path){
    // PAGES
    case '/':
      f = true, r = "";
      file = Deno.readFile("./src/xxv.html");
      ct = "text/html; charset=UTF-8";
      break;
    case '/process':
      f = true, r = "";
      file = Deno.readFile("./src/process.html");
      ct = "text/html; charset=UTF-8";
      break;

    case '/robots.txt':
      f = true, r = "";
      file = "User-agent: * Disallow:";
      ct = "text/plain";
      break;
    case '/manifest.webmanifest':
      f = true, r = "";
      file = Deno.readFile("./src/utils/manifest.webmanifest");
      ct = "application/manifest+json";
      break;
    case '/service-worker.js':
      f = true, r = "";
      file = Deno.readFile("./src/utils/serviceWorker.js");
      ct = "text/javascript";
      break;
    case '/main.css':
      f = true, r = "";
      file = Deno.readFile("./src/utils/main.css");
      ct = "text/css";
      break;
    case '/xxvlogo.png':
      f = true, r = "";
      file = Deno.readFile("./src/utils/xxvlogo.png");
      ct = "image/png";
      break;

    default:
      f = true, r = "";
      file = Deno.readFile("./src/utils/404.html");
      ct = "text/html; charset=UTF-8";
  }

  let res;

  if(f){
    res = new Response(await file, {
      headers: {
        "content-type": ct,
      },
    });
  } else {
    res = Response.redirect(r, 302);
  }

  return res;
}

await serve(handler, { addr: ":6969" });
