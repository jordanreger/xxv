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

  render() {
    return html`

    `;
  }
}
customElements.get("app-root") || customElements.define("app-root", App);
