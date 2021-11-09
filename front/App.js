import { LitElement, html, css } from "lit-element";
import "skriv";

class App extends LitElement {
  static get styles() {
    return css`
      a {
        color: #212121;
        font-weight: 500;
      }

      #sha {
        position: fixed;
        right: 1%;
        bottom: 1%;
        font-size: 0.5rem;
        color: #696969;
      }
    `;
  }

  SHA() {
    if (process.env.COMMIT_REF) {
      return process.env.COMMIT_REF.slice(0, 7);
    } else {
      return html`dev env`;
    }
  }

  render() {
    return html`
    <skriv-app>
      <skriv-page path="/">

        <skriv-title>jordan reger</skriv-title>
        <skriv-date>web developer and engineering student</skriv-date>

        <skriv-body>
          <a href="https://github.com/jordanreger/latt"><b>projects/latt</b>: lit elements router</a>
          <br/>
          <a href="/projects/skriv"><b>projects/skriv</b>: lit elements blog</a>
        </skriv-body>

        <skriv-body>
          <a href="/blog/hello-world"><b>blog/hello world</b></a>
          <br/>
          <a href="/blog/rklb-stock"><b>blog/rklb stock</b></a>
          <br/>
        </skriv-body>

      </skriv-page>


      <skriv-page path="/404">
        <skriv-title>oopsie woopsie!</skriv-title>
        <skriv-body>the page you're looking for doesn't exist. just like my ability to understand rust...</skriv-body>
      </skriv-page>

      <!-- projects -->

      <skriv-page path="/projects/skriv">

        <skriv-title>skriv</skriv-title>
        <skriv-date>lit elements based blog template</skriv-date>
        <skriv-body>
          <a href="https://npmjs.com/package/skriv">find it on npm!</a>
          <br/>
          <br/>
          [docs coming soon]
        </skriv-body>

      </skriv-page>


      <!-- blog posts -->
      <skriv-page path="/blog/hello-world">

        <skriv-title>hello world!</skriv-title>
        <skriv-date>10/09/21</skriv-date>
        <skriv-author>jordan reger</skriv-author>
        <skriv-body>
          This is the first blog post of many (maybe). Heaven knows if I'll actually keep this up, because I'm inconsistent when it comes to content creation. This is honestly just a test of my skills making dynamic content, but I may end up actually using this to write about my thoughts.
          <br/>
          <br/>
          Anyways, looks good huh?
        </skriv-body>

      </skriv-page>

      <skriv-page path="/blog/rklb-stock">

        <skriv-title>why i'm buying rocket lab stock</skriv-title>
        <skriv-date>10/11/21</skriv-date>
        <skriv-author>jordan reger</skriv-author>
        <skriv-body>
          <b>**This is an opinion. Do NOT take this as a buy signal.**</b>
          <br/>
          <br/>
          <br/>
          From their <a href="https://investors.rocketlabusa.com/overview/default.aspx">investor page</a>:
          <br/>
          <br/>
          "Rocket Lab is an end-to-end space company with an established track record of mission success. We deliver reliable launch services, spacecraft components, satellites and other spacecraft and on-orbit management solutions that make it faster, easier and more affordable to access space. We believe that space has defined some of humanity's greatest achievements and it continues to shape our future. We are motivated by the impact we can have on Earth by making it easier to get to space and to use it as a platform for innovation, exploration and infrastructure."
          <br/>
          <br/>
          As a rocket nerd, Rocket Lab has always maintained a presence in my mind. Electron, their main launch vehicle, is a beautiful rocket with a (mostly; <a href="https://www.youtube.com/watch?v=5ZcZoDFYjXc">No. 13</a> and <a href="https://www.youtube.com/watch?v=Zw3sIUyfSfc">No. 20</a> both had failures, but no catastrophic events) clean launch history. They are planning on turning Electron into a reusable vehicle - <a href="https://www.youtube.com/watch?v=N3CWGDhkmbs">using parachutes and a helicopter</a> - and yes, this is real. Along with moving to reusable technologies, they're moving to multiple launch complexes as well. Their first and main complex resides in New Zealand and their second and newest complex is on Wallops Island, Virginia. Finally, they've announced new technologies as well: Photon, their configurable satellite system, and Neutron, their newest massive rocket.
          <br/>
          <br/>
          Everything aforementioned is obviously very commendable in its own right, but there's one thing that's really driving me to buy their stock:
          <br/>
          <br/>
          Starship.
          <br/>
          <br/>
          It needs no introduction. It is SpaceX's massive Mars mover. What does it have to do with Rocket Lab? They are in completely different markets, they have quite different launch vehicles, and are different in many more ways - that's precisely the reason I feel Rocket Lab will soar in earnings. They're in completely different markets and SpaceX is transitioning from mainly earth operations to interplanetary missions and larger orbits, meaning that Rocket Lab has an opportunity to swoop in and take the business of many customers in the wake of Falcon 9's success of reducing cost to space. As a result, more and more customers can go to space. Who's going to be able to lift the smaller payloads? Probably not Starship (it can, but with a larger cargo capacity, there's a problem here: transporter missions are going to be few and far between due to the sheer amount of time it will take to fill up the capacity) so it must be someone else. Who's the best contender? Rocket Lab.
          <br/>
          <br/>
          As I mentioned, this is just an opinion and is not meant to inspire action. This article will be updated with more details as time passes.
          <br/>
          <br/>

        </skriv-body>

      </skriv-page>

      <skriv-page path="/etc/test">
        <skriv-title>test</skriv-title>
        <skriv-date>10/09/21</skriv-date>
        <skriv-author>jordan reger</skriv-author>
        <skriv-body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt dui ut ornare lectus. Phasellus faucibus scelerisque eleifend donec pretium. Urna et pharetra pharetra massa massa. Porttitor lacus luctus accumsan tortor posuere ac. Enim eu turpis egestas pretium aenean pharetra magna. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Enim neque volutpat ac tincidunt. Arcu ac tortor dignissim convallis aenean et tortor at risus. Varius duis at consectetur lorem donec. Sit amet purus gravida quis blandit turpis cursus in. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Felis eget nunc lobortis mattis. Cras semper auctor neque vitae tempus. Dignissim diam quis enim lobortis. Ultrices neque ornare aenean euismod elementum nisi quis. Elit eget gravida cum sociis.

        Sagittis orci a scelerisque purus. Mattis enim ut tellus elementum sagittis vitae et. In metus vulputate eu scelerisque felis. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Arcu odio ut sem nulla pharetra diam. Cras sed felis eget velit aliquet sagittis id consectetur. Vestibulum sed arcu non odio euismod lacinia at quis. Tortor condimentum lacinia quis vel eros donec ac odio. Sed faucibus turpis in eu mi bibendum. Tortor consequat id porta nibh venenatis cras sed felis eget. Velit laoreet id donec ultrices tincidunt arcu non. Sem viverra aliquet eget sit. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Amet est placerat in egestas erat. Tincidunt eget nullam non nisi est sit amet facilisis.

        Elementum facilisis leo vel fringilla est ullamcorper eget. Nisl vel pretium lectus quam id leo. Tincidunt lobortis feugiat vivamus at augue eget. Ullamcorper morbi tincidunt ornare massa. Lobortis feugiat vivamus at augue eget arcu. Neque egestas congue quisque egestas. Elementum nisi quis eleifend quam adipiscing vitae. Eu augue ut lectus arcu. Lorem donec massa sapien faucibus. Egestas sed sed risus pretium. Odio pellentesque diam volutpat commodo. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Tempus quam pellentesque nec nam aliquam sem et.

        Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Euismod elementum nisi quis eleifend quam adipiscing. In est ante in nibh. Semper quis lectus nulla at volutpat diam ut. Vel facilisis volutpat est velit egestas dui id ornare arcu. Condimentum lacinia quis vel eros donec. Scelerisque viverra mauris in aliquam sem. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Urna nunc id cursus metus aliquam eleifend. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Ut eu sem integer vitae justo eget magna fermentum iaculis. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Sed augue lacus viverra vitae congue eu consequat ac felis. Etiam non quam lacus suspendisse faucibus interdum. Nunc aliquet bibendum enim facilisis.

        Netus et malesuada fames ac turpis egestas maecenas. Vitae aliquet nec ullamcorper sit. Venenatis urna cursus eget nunc scelerisque viverra mauris. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Cursus turpis massa tincidunt dui ut ornare. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Ornare lectus sit amet est placerat in egestas erat imperdiet. Tellus molestie nunc non blandit massa enim nec. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Massa sed elementum tempus egestas. Cursus sit amet dictum sit amet. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Et malesuada fames ac turpis egestas maecenas. In cursus turpis massa tincidunt dui ut ornare lectus. Tellus id interdum velit laoreet id donec. Etiam non quam lacus suspendisse faucibus. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Pellentesque habitant morbi tristique senectus et netus et. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis. Mauris in aliquam sem fringilla ut morbi tincidunt augue.
        </skriv-body>
      </skriv-page>

      <div id="sha">${this.SHA()}</div>

    </skriv-app>
    `;
  }
}
customElements.get("app-root") || customElements.define("app-root", App);
