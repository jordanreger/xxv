import { serve } from "https://deno.land/std/http/server.ts";

async function handler(req: Request): Promise<any> {
  let url = new URL(req.url);
  let path = url.pathname, params = new URLSearchParams(url.search);
  const route = (route:string) => { let regexRoute = new RegExp(route, "gmi"); if(regexRoute.test(path)){ return path } else { return null }}
  const file = async (fp:string) => { let d = new TextDecoder("utf-8"); return d.decode(await Deno.readFile(fp))}

  let tr, rb, ct = "";

  switch(path){
    case '/':
      tr = true, rb = await file("./process/src/xxv.html"), ct = "text/html; charset=UTF-8";
      break;

    case '/robots.txt':
      tr = true, rb = "User-agent: * Disallow:", ct = "text/plain";
      break;
    case '/manifest.webmanifest':
      tr = true, rb = await file("./process/src/utils/manifest.webmanifest"), ct = "application/manifest+json";
      break;
    case '/service-worker.js':
      tr = true, rb = await file("./process/src/utils/serviceWorker.js"), ct = "text/javascript";
      break;
    case '/xxvlogo.png':
      tr = false, rb = "https://avatars.githubusercontent.com/u/96634922?s=400&u=a9197ca079d5d778083dcf125a4bad0a007b8f54&v=4";
      break;

    case '/module':
      let data = String(params.get("data"));
      data = data.replace(" ", "+");
      tr = true, rb = `<object data="data:text/html;base64,${decodeURIComponent(data)}" style="position:absolute;left:0;top:0;width:100%;height:100%;"></object>`, ct = "text/html; charset=UTF-8";
      break;

    default:
      tr = true, rb = await file("./process/src/utils/404.html"), ct = "text/html; charset=UTF-8";
  }

  let res;

  if(tr){
    res = new Response(await rb, { headers: { "content-type": ct } });
  } else {
    res = Response.redirect(rb, 302);
  }
  return res;
}

await serve(handler);
