import { parse } from 'https://deno.land/std/flags/mod.ts';

const { args } = Deno;
const DEFAULT_PORT = 42069;
const argPort = parse(args).port;

const server = Deno.listen({ port: argPort ? Number(argPort) : DEFAULT_PORT });
console.log("./ → http://localhost:42069");

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
        let file;
        let ct;

        switch(path){

          /* PAGES */
          case '/':
            file = Deno.readFile("./src/index.html");
            ct = "text/html; charset=UTF-8";
            break;

          /* SETUP */
          case '/search.js':
            file = Deno.readFile("./src/search.js");
            ct = "text/javascript";
            break;
          case '/main.css':
            file = Deno.readFile("./src/utils/main.css");
            ct = "text/css";
            break;
          case '/base_logo.png':
            file = Deno.readFile("./src/utils/base_logo.png");
            ct = "image/png";
            break;

          case '/testJS':
            testFunc();
            file = "test";
            ct = "text/html";
            break;

          default:
            file = Deno.readFile("./src/index.html");
            ct = "text/html; charset=UTF-8";
        }
        let res = new Response(await file, {
          headers: {
            "content-type": ct,
          },
        });
        await request.respondWith(res);


        function testFunc(){
          console.log("test");
        }
      }
    })();

  } catch (err) {
    break;
  }
}
