import { serve } from "https://deno.land/std/http/server.ts";

async function handler(req: Request): Promise<any> {
  let url = new URL(req.url);
  let path = url.pathname, params = new URLSearchParams(url.search);
  const route = (route:string) => { let regexRoute = new RegExp(route, "gmi"); if(regexRoute.test(path)){ return path } else { return null }}
  const file = async (fp:string) => { let d = new TextDecoder("utf-8"); return d.decode(await Deno.readFile(fp))}

  let tr, rb, ct = "";

  switch(path){
    case '/':
      tr = true, rb = await file("./land/src/index.html"), ct = "text/html; charset=UTF-8";
      break;
    case '/roadmap':
      tr = true, rb = await file("./land/src/roadmap.html"), ct = "text/html; charset=UTF-8";
      break;

    case route('/mod/.'):
      let mod = path.replace("/mod/", "");
      try {
        let data = await fetch(`https://raw.githubusercontent.com/xxvnetwork/modules/main/${mod}.json`)
          .then((data) => data.json())
          .then((data) => { return data })
        let request = params.get("request");
        if(!request){
          tr = true, rb = `
          <!DOCTYPE html>
          <html lang="en">
            <head>

              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
              />
              <meta
                name="theme-color"
                content="#000"
              />

              <title>xxv</title>

              <style>
                html {
                  background-color: #000;
                }

                ::-moz-selection {
                  color: #000;
                  background: #ffcf96;
                }

                ::selection {
                  color: #000;
                  background: #ffcf96;
                }

                a {
                  color: inherit;
                  text-decoration: none;
                }

                a:hover {
                  color: #ffcf96;
                  cursor: pointer;
                }

                #app {
                  background-color: #000;
                  position: absolute;
                  height: auto;
                  left: 5vmin;
                  top: 5vmin;
                  right: 5vmin;
                  bottom: 5vmin;
                }

                .arrow {
                  display: inline-block;
                  font-family: Courier;
                  font-size: 4vmin;
                  -moz-transform: scale(-1, 1);
                  -webkit-transform: scale(-1, 1);
                  transform: scale(-1, 1);
                  user-select: none;
                  color: #696969;
                }

                .module-name {
                  font-family: Arial;
                  font-weight: bold;
                  font-size: 5vmin;
                  user-select: none;
                  color: #c4c4c4;
                }

                .module-name:hover {
                  color: #ffcf96;
                  cursor: pointer;
                }

                .module-description {
                  font-family: Arial;
                  font-size: 5vmin;
                  user-select: none;
                  color: #c4c4c4;
                }

                .separator {
                  font-family: Arial;
                  font-weight: bold;
                  font-size: 4vmin;
                  user-select: none;
                  color: #212121;
                }

                pre {
                  color: #c4c4c4;
                }
              </style>

            </head>

            <main id="app">
              <div class="module"><span class="arrow">↵</span> <span class="module-name"><a href="https://github.com/xxvnetwork/modules/blob/main/${data.name}.json">${data.name}</a></span><span class="separator"> — </span><span class="module-description">${data.description}</span></div>
              <br/>
              <br/>
              <span class="module-description">cache urls</span>
              <pre style="word-wrap: break-word; white-space: pre-wrap;">${data.cache}</pre>
            </main>
          </html>
          `, ct = "text/html; charset=UTF-8";
        } else {
          let src = await fetch(data.src)
            .then((data) => data.text())
            .then((data) => { return data })
          tr = true, rb = src, ct = "text/html; charset=UTF-8";
        }
      } catch(error) {
        tr = false, rb = 'https://github.com/xxvnetwork/modules';
      }

      break;

    case '/modules':
      tr = false, rb = "https://github.com/xxvnetwork/modules";
      break;

    default:
      tr = true, rb = "404", ct = "text/html; charset=UTF-8";
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
