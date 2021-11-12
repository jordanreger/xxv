import { LitElement, html, css } from "lit-element";
import { WebviewWindow } from '@tauri-apps/api/window';

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

  render() {
    const webview = new WebviewWindow('theUniqueLabel', {
      url: "https://github.com/tauri-apps/tauri"
    })
    console.log(webview);
    return html`
      test
    `;
  }
}
customElements.get("app-root") || customElements.define("app-root", App);
