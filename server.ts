import { parse } from 'https://deno.land/std/flags/mod.ts';

const { args } = Deno;
const DEFAULT_PORT = 6969;
const argPort = parse(args).port;

const server = Deno.listen({ port: argPort ? Number(argPort) : DEFAULT_PORT });
console.log("./ → http://localhost:6969");

while (true) {
  try {
    const conn = await server.accept();

    (async () => {
      const http = Deno.serveHttp(conn);
      for await (const request of http) {

        let path = (function(){
          let paths = request.request.url.split("/");
          paths.splice(0, 3);
          let path = "/" + paths.join("/");
          if(path !== ""){
            return path;
          } else {
            return "/";
          }
        })();
        let file, ct, f, res;

        switch(path){
          /* PAGES */
          case '/':
            f = true;
            file = Deno.readFile("./src/index.html");
            ct = "text/html; charset=UTF-8";
            break;

          /* OTHER */
          case '/testJS':
            console.log("test");
            f = false;

          /* SETUP */
          case '/manifest.webmanifest':
            f = true;
            file = Deno.readFile("./src/utils/manifest.webmanifest");
            ct = "application/manifest+json";
            break;
          case '/service-worker.js':
            f = true;
            file = Deno.readFile("./src/utils/serviceWorker.js");
            ct = "text/javascript";
            break;
          case '/main.css':
            f = true;
            file = Deno.readFile("./src/utils/main.css");
            ct = "text/css";
            break;
          case '/base_logo.png':
            f = true;
            file = Deno.readFile("./src/utils/base_logo.png");
            ct = "image/png";
            break;

          default:
            f = true;
            file = Deno.readFile("./src/utils/404.html");
            ct = "text/html; charset=UTF-8";
        }

        if(f) {
            res = new Response(await file, {
            headers: {
              "content-type": ct,
            },
          });
        } else {
          let blob = new Blob();
          res = new Response(blob, { "status" : 200 });
        }

        await request.respondWith(res);
      }
    })();

  } catch (err) {
    break;
  }
}
