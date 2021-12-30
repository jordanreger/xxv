import { serve } from "https://deno.land/std/http/server.ts";
import { route } from "./router.ts";

async function handler(req: Request): Promise<any> {
  let url = new URL(req.url);
  let path = url.pathname, params = new URLSearchParams(url.search);

  let file, ct, f, r;

  switch(path){
    // PAGES
    case '/':
      f = true, r = "";
      file = Deno.readFile("./src/xxv.html");
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

    case '/module':
      const data = String(params.get("data"));
      data = data.replace(" ", "+");
      file = `<object data="data:text/html;base64,${decodeURIComponent(data)}" style="position:absolute;left:0;top:0;width:100%;height:100%;"></object>`;
      f = true, r = "";
      ct = "text/html; charset=UTF-8";
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

await serve(handler);
