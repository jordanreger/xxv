import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { route } from "./router.ts";

console.log("xxv —— the future is light.\n\nhttp://localhost:6969");

async function handler(req: Request): Promise<any> {
  let path = (function(){
    let url = req.url.split("/"), path = "";
    url.splice(0, 3);
    for(let i = 0; i < url.length; i++){path = path.concat(`/${url[i]}`);}
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

    case route('/module/.', path):
      let mod = path.split("/module/")[1];
      try {
        if(await Deno.stat(`./.modules/${mod}.html`)){
          file = await Deno.readFile(`./.modules/${mod}.html`);
          const b64 = btoa(String.fromCharCode(...new Uint8Array(file)));
          file = `<object data="data:text/html;base64,${b64}" style="position:absolute;left:0;top:0;width:100%;height:100%;"></object>`;
        }
      } catch (error) {
        let data = await fetch(`https://raw.githubusercontent.com/xxvnetwork/modules/main/${mod}.html`)
          .then((data) => data.text())
          .then((data) => { return data })
        Deno.writeTextFile(`./.modules/${mod}.html`, data);
        file = `installed ${mod}`;
      }
      f = true, r = "";
      ct = "text/html; charset=UTF-8";
      break;

    /*case route('/x/.', path):
      let pkg = path.split("/x/")[1];
      if(pkg.includes('https://xxv.network/')){
        console.log(pkg);
      }
      file = await fetch(pkg)
        .then((data) => data.text())
        .then((data) => { return data })
      f = true, r = "";
      ct = "text/html; charset=UTF-8";
      break;*/


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
