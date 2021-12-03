(async () => {
  class SearchBar extends HTMLElement {

    search() {
      console.log("test");
    }

    connectedCallback() {
      this.innerHTML = `
      <form onsubmit="${this.search()}">
        <input id="pkgSearchBar" type="url" class="input" name="pkg" placeholder="pkg url" list="commonpkgs" />

        <datalist id="commonpkgs">
          <option value="https://xxv.network/test">
        </datalist>
      </form>
      `
    }
  }

  window.customElements.define('pkg-search-bar', SearchBar);
})();
