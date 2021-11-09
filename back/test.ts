/* SOK by Jordan Reger */

import { parse } from 'https://deno.land/std/flags/mod.ts';

const { args } = Deno;
const DEFAULT_PORT = 42069;
const argPort = parse(args).port;

const server = Deno.listen({ port: argPort ? Number(argPort) : DEFAULT_PORT });
console.log("→ running");

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

        if(path === "/"){
          let html = Deno.readFile("./build/index.html");
          let js = Deno.readFile("./build/App.js");

          let res = new Response(await [html, js], {
            headers: {
              "content-type": "text/html; charset=UTF-8",
            },
          });

          await request.respondWith(res);
        }
      }
    })();

  } catch (err) {
    break;
  }
}
