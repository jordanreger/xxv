function search(e){
  e.preventDefault();
  let pkgEl = e.srcElement[0];
  let url = pkgEl.value;

  fetch(url, { responseType: 2 })
    .then(data => data.text)
    .then(text => { console.log(text) });

  // clear
  pkgEl.value = '';
}
