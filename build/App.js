(()=>{var N=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),R=class{constructor(e,t){if(t!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return N&&this.t===void 0&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}},X=new Map,G=r=>{let e=X.get(r);return e===void 0&&X.set(r,e=new R(r,K)),e},J=r=>G(typeof r=="string"?r:r+""),g=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((s,i,n)=>s+(o=>{if(o instanceof R)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return G(t)},L=(r,e)=>{N?r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let s=document.createElement("style");s.textContent=t.cssText,r.appendChild(s)})},$=N?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return J(t)})(r):r;var Y,I,z,Q,_={toAttribute(r,e){switch(e){case Boolean:r=r?"":null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch(s){t=null}}return t}},ee=(r,e)=>e!==r&&(e==e||r==r),V={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:ee},b=class extends HTMLElement{constructor(){super(),this.\u03A0i=new Map,this.\u03A0o=void 0,this.\u03A0l=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.\u03A0h=null,this.u()}static addInitializer(e){var t;(t=this.v)!==null&&t!==void 0||(this.v=[]),this.v.push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,s)=>{let i=this.\u03A0p(s,t);i!==void 0&&(this.\u03A0m.set(i,s),e.push(i))}),e}static createProperty(e,t=V){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let s=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(i){let n=this[e];this[t]=i,this.requestUpdate(e,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||V}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this.\u03A0m=new Map,this.hasOwnProperty("properties")){let t=this.properties,s=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let i of s)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let i of s)t.unshift($(i))}else e!==void 0&&t.push($(e));return t}static \u03A0p(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this.\u03A0g=new Promise(t=>this.enableUpdating=t),this.L=new Map,this.\u03A0_(),this.requestUpdate(),(e=this.constructor.v)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,s;((t=this.\u03A0U)!==null&&t!==void 0?t:this.\u03A0U=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)===null||s===void 0||s.call(e))}removeController(e){var t;(t=this.\u03A0U)===null||t===void 0||t.splice(this.\u03A0U.indexOf(e)>>>0,1)}\u03A0_(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this.\u03A0i.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return L(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this.\u03A0U)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostConnected)===null||s===void 0?void 0:s.call(t)}),this.\u03A0l&&(this.\u03A0l(),this.\u03A0o=this.\u03A0l=void 0)}enableUpdating(e){}disconnectedCallback(){var e;(e=this.\u03A0U)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostDisconnected)===null||s===void 0?void 0:s.call(t)}),this.\u03A0o=new Promise(t=>this.\u03A0l=t)}attributeChangedCallback(e,t,s){this.K(e,s)}\u03A0j(e,t,s=V){var i,n;let o=this.constructor.\u03A0p(e,s);if(o!==void 0&&s.reflect===!0){let c=((n=(i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&n!==void 0?n:_.toAttribute)(t,s.type);this.\u03A0h=e,c==null?this.removeAttribute(o):this.setAttribute(o,c),this.\u03A0h=null}}K(e,t){var s,i,n;let o=this.constructor,c=o.\u03A0m.get(e);if(c!==void 0&&this.\u03A0h!==c){let a=o.getPropertyOptions(c),l=a.converter,m=(n=(i=(s=l)===null||s===void 0?void 0:s.fromAttribute)!==null&&i!==void 0?i:typeof l=="function"?l:null)!==null&&n!==void 0?n:_.fromAttribute;this.\u03A0h=c,this[c]=m(t,a.type),this.\u03A0h=null}}requestUpdate(e,t,s){let i=!0;e!==void 0&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||ee)(this[e],t)?(this.L.has(e)||this.L.set(e,t),s.reflect===!0&&this.\u03A0h!==e&&(this.\u03A0k===void 0&&(this.\u03A0k=new Map),this.\u03A0k.set(e,s))):i=!1),!this.isUpdatePending&&i&&(this.\u03A0g=this.\u03A0q())}async \u03A0q(){this.isUpdatePending=!0;try{for(await this.\u03A0g;this.\u03A0o;)await this.\u03A0o}catch(t){Promise.reject(t)}let e=this.performUpdate();return e!=null&&await e,!this.isUpdatePending}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this.\u03A0i&&(this.\u03A0i.forEach((i,n)=>this[n]=i),this.\u03A0i=void 0);let t=!1,s=this.L;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(e=this.\u03A0U)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(s)):this.\u03A0$()}catch(i){throw t=!1,this.\u03A0$(),i}t&&this.E(s)}willUpdate(e){}E(e){var t;(t=this.\u03A0U)===null||t===void 0||t.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}\u03A0$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.\u03A0g}shouldUpdate(e){return!0}update(e){this.\u03A0k!==void 0&&(this.\u03A0k.forEach((t,s)=>this.\u03A0j(s,this[s],t)),this.\u03A0k=void 0),this.\u03A0$()}updated(e){}firstUpdated(e){}};b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},(I=(Y=globalThis).reactiveElementPlatformSupport)===null||I===void 0||I.call(Y,{ReactiveElement:b}),((z=(Q=globalThis).reactiveElementVersions)!==null&&z!==void 0?z:Q.reactiveElementVersions=[]).push("1.0.0-rc.2");var te,W,B,se,H=globalThis.trustedTypes,ie=H?H.createPolicy("lit-html",{createHTML:r=>r}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,re="?"+y,Ue=`<${re}>`,S=document,P=(r="")=>S.createComment(r),M=r=>r===null||typeof r!="object"&&typeof r!="function",oe=Array.isArray,je=r=>{var e;return oe(r)||typeof((e=r)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ne=/-->/g,ae=/>/g,k=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,le=/'/g,ue=/"/g,ce=/^(?:script|style|textarea)$/i,de=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),f=de(1),Oe=de(2),w=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),he=new WeakMap,pe=(r,e,t)=>{var s,i;let n=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:e,o=n._$litPart$;if(o===void 0){let c=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=o=new C(e.insertBefore(P(),c),c,void 0,t)}return o.I(r),o},x=S.createTreeWalker(S,129,null,!1),Ne=(r,e)=>{let t=r.length-1,s=[],i,n=e===2?"<svg>":"",o=T;for(let a=0;a<t;a++){let l=r[a],m,u,d=-1,v=0;for(;v<l.length&&(o.lastIndex=v,u=o.exec(l),u!==null);)v=o.lastIndex,o===T?u[1]==="!--"?o=ne:u[1]!==void 0?o=ae:u[2]!==void 0?(ce.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=k):u[3]!==void 0&&(o=k):o===k?u[0]===">"?(o=i??T,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,m=u[1],o=u[3]===void 0?k:u[3]==='"'?ue:le):o===ue||o===le?o=k:o===ne||o===ae?o=T:(o=k,i=void 0);let U=o===k&&r[a+1].startsWith("/>")?" ":"";n+=o===T?l+Ue:d>=0?(s.push(m),l.slice(0,d)+"$lit$"+l.slice(d)+y+U):l+y+(d===-2?(s.push(void 0),a):U)}let c=n+(r[t]||"<?>")+(e===2?"</svg>":"");return[ie!==void 0?ie.createHTML(c):c,s]},E=class{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,o=0,c=e.length-1,a=this.parts,[l,m]=Ne(e,t);if(this.el=E.createElement(l,s),x.currentNode=this.el.content,t===2){let u=this.el.content,d=u.firstChild;d.remove(),u.append(...d.childNodes)}for(;(i=x.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes()){let u=[];for(let d of i.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(y)){let v=m[o++];if(u.push(d),v!==void 0){let U=i.getAttribute(v.toLowerCase()+"$lit$").split(y),j=/([.?@])?(.*)/.exec(v);a.push({type:1,index:n,name:j[2],strings:U,ctor:j[1]==="."?ve:j[1]==="?"?fe:j[1]==="@"?ge:A})}else a.push({type:6,index:n})}for(let d of u)i.removeAttribute(d)}if(ce.test(i.tagName)){let u=i.textContent.split(y),d=u.length-1;if(d>0){i.textContent=H?H.emptyScript:"";for(let v=0;v<d;v++)i.append(u[v],P()),x.nextNode(),a.push({type:2,index:++n});i.append(u[d],P())}}}else if(i.nodeType===8)if(i.data===re)a.push({type:2,index:n});else{let u=-1;for(;(u=i.data.indexOf(y,u+1))!==-1;)a.push({type:7,index:n}),u+=y.length-1}n++}}static createElement(e,t){let s=S.createElement("template");return s.innerHTML=e,s}};function q(r,e,t=r,s){var i,n,o,c;if(e===w)return e;let a=s!==void 0?(i=t.\u03A3i)===null||i===void 0?void 0:i[s]:t.\u03A3o,l=M(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((n=a==null?void 0:a.O)===null||n===void 0||n.call(a,!1),l===void 0?a=void 0:(a=new l(r),a.T(r,t,s)),s!==void 0?((o=(c=t).\u03A3i)!==null&&o!==void 0?o:c.\u03A3i=[])[s]=a:t.\u03A3o=a),a!==void 0&&(e=q(r,a.S(r,e.values),a,s)),e}var me=class{constructor(e,t){this.l=[],this.N=void 0,this.D=e,this.M=t}u(e){var t;let{el:{content:s},parts:i}=this.D,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:S).importNode(s,!0);x.currentNode=n;let o=x.nextNode(),c=0,a=0,l=i[0];for(;l!==void 0;){if(c===l.index){let m;l.type===2?m=new C(o,o.nextSibling,this,e):l.type===1?m=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(m=new be(o,this,e)),this.l.push(m),l=i[++a]}c!==(l==null?void 0:l.index)&&(o=x.nextNode(),c++)}return n}v(e){let t=0;for(let s of this.l)s!==void 0&&(s.strings!==void 0?(s.I(e,s,t),t+=s.strings.length-2):s.I(e[t])),t++}},C=class{constructor(e,t,s,i){this.type=2,this.N=void 0,this.A=e,this.B=t,this.M=s,this.options=i}setConnected(e){var t;(t=this.P)===null||t===void 0||t.call(this,e)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(e,t=this){e=q(this,e,t),M(e)?e===h||e==null||e===""?(this.H!==h&&this.R(),this.H=h):e!==this.H&&e!==w&&this.m(e):e._$litType$!==void 0?this._(e):e.nodeType!==void 0?this.$(e):je(e)?this.g(e):this.m(e)}k(e,t=this.B){return this.A.parentNode.insertBefore(e,t)}$(e){this.H!==e&&(this.R(),this.H=this.k(e))}m(e){let t=this.A.nextSibling;t!==null&&t.nodeType===3&&(this.B===null?t.nextSibling===null:t===this.B.previousSibling)?t.data=e:this.$(S.createTextNode(e)),this.H=e}_(e){var t;let{values:s,_$litType$:i}=e,n=typeof i=="number"?this.C(e):(i.el===void 0&&(i.el=E.createElement(i.h,this.options)),i);if(((t=this.H)===null||t===void 0?void 0:t.D)===n)this.H.v(s);else{let o=new me(n,this),c=o.u(this.options);o.v(s),this.$(c),this.H=o}}C(e){let t=he.get(e.strings);return t===void 0&&he.set(e.strings,t=new E(e)),t}g(e){oe(this.H)||(this.H=[],this.R());let t=this.H,s,i=0;for(let n of e)i===t.length?t.push(s=new C(this.k(P()),this.k(P()),this,this.options)):s=t[i],s.I(n),i++;i<t.length&&(this.R(s&&s.B.nextSibling,i),t.length=i)}R(e=this.A.nextSibling,t){var s;for((s=this.P)===null||s===void 0||s.call(this,!1,!0,t);e&&e!==this.B;){let i=e.nextSibling;e.remove(),e=i}}},A=class{constructor(e,t,s,i,n){this.type=1,this.H=h,this.N=void 0,this.V=void 0,this.element=e,this.name=t,this.M=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this.H=Array(s.length-1).fill(h),this.strings=s):this.H=h}get tagName(){return this.element.tagName}I(e,t=this,s,i){let n=this.strings,o=!1;if(n===void 0)e=q(this,e,t,0),o=!M(e)||e!==this.H&&e!==w,o&&(this.H=e);else{let c=e,a,l;for(e=n[0],a=0;a<n.length-1;a++)l=q(this,c[s+a],t,a),l===w&&(l=this.H[a]),o||(o=!M(l)||l!==this.H[a]),l===h?e=h:e!==h&&(e+=(l??"")+n[a+1]),this.H[a]=l}o&&!i&&this.W(e)}W(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ve=class extends A{constructor(){super(...arguments),this.type=3}W(e){this.element[this.name]=e===h?void 0:e}},fe=class extends A{constructor(){super(...arguments),this.type=4}W(e){e&&e!==h?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}},ge=class extends A{constructor(){super(...arguments),this.type=5}I(e,t=this){var s;if((e=(s=q(this,e,t,0))!==null&&s!==void 0?s:h)===w)return;let i=this.H,n=e===h&&i!==h||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==h&&(i===h||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this.H=e}handleEvent(e){var t,s;typeof this.H=="function"?this.H.call((s=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&s!==void 0?s:this.element,e):this.H.handleEvent(e)}},be=class{constructor(e,t,s){this.element=e,this.type=6,this.N=void 0,this.V=void 0,this.M=t,this.options=s}I(e){q(this,e)}};(W=(te=globalThis).litHtmlPlatformSupport)===null||W===void 0||W.call(te,E,C),((B=(se=globalThis).litHtmlVersions)!==null&&B!==void 0?B:se.litHtmlVersions=[]).push("2.0.0-rc.3");var D,ye,Z,ke,F,we;((D=(we=globalThis).litElementVersions)!==null&&D!==void 0?D:we.litElementVersions=[]).push("3.0.0-rc.2");var p=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this.\u03A6t=void 0}createRenderRoot(){var e,t;let s=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=s.firstChild),s}update(e){let t=this.render();super.update(e),this.\u03A6t=pe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this.\u03A6t)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.\u03A6t)===null||e===void 0||e.setConnected(!1)}render(){return w}};p.finalized=!0,p._$litElement$=!0,(Z=(ye=globalThis).litElementHydrateSupport)===null||Z===void 0||Z.call(ye,{LitElement:p}),(F=(ke=globalThis).litElementPlatformSupport)===null||F===void 0||F.call(ke,{LitElement:p});var Se=Element.prototype,ot=Se.msMatchesSelector||Se.webkitMatchesSelector;console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'.");var xe=class extends p{firstUpdated(){global.routes=[];let e=this.shadowRoot.host.children;for(var t=0;t<e.length;t++)global.routes.push(e[t].path);let s=!1;for(var i=0;i<global.routes.length;i++)if(window.location.pathname===global.routes[i]){s=!0;break}s||window.location.pathname!=="/404"&&(window.location.href="/404")}render(){return f`<slot />`}},Ee=class extends p{static get properties(){return{path:{type:String}}}constructor(){super();this.path="/"}static get styles(){return g`
      div {
        position: absolute;
        left: 56.5%;
        top: 10%;
        transform: translateX(-50%);
        width: 85%;
        padding-bottom: 2.5%;
      }
    `}render(){return window.location.pathname===this.path?f`<div><slot /></div>`:null}},qe=class extends p{static get styles(){return g`
      .title {
        width: 85%;
      }

      @media only screen and (max-width: 600px) {
        .title {
          font-weight: 700;
          font-size: 5vmax;
        }
      }

      @media only screen and (min-width: 600px) {
        .title {
          font-weight: 700;
          font-size: 3vmax;
        }
      }
    `}render(){return f`<div class="title"><slot /></div>`}},Ce=class extends p{static get styles(){return g`
      .body {
        width: 85%;
        overflow-x: auto;
        text-align: justify;
      }
    `}render(){return f`<div class="body"><br/><slot /></div>`}},Pe=class extends p{static get styles(){return g`
      @media only screen and (max-width: 600px) {
        .author {
          font-weight: 500;
          color: #696969;
          font-size: 2.15vmax;
        }
      }

      @media only screen and (min-width: 600px) {
        .author {
          font-weight: 500;
          color: #696969;
          font-size: 1.25vmax;
        }
      }
    `}render(){return f`<span class="author">— <slot /></span>`}},Te=class extends p{static get styles(){return g`
      @media only screen and (max-width: 600px) {
        .date {
          font-weight: 500;
          color: #696969;
          font-size: 2.15vmax;
        }
      }

      @media only screen and (min-width: 600px) {
        .date {
          font-weight: 500;
          color: #696969;
          font-size: 1.25vmax;
        }
      }
    `}render(){return f`<span class="date"><slot /></span>`}};customElements.get("skriv-app")||customElements.define("skriv-app",xe);customElements.get("skriv-page")||customElements.define("skriv-page",Ee);customElements.get("skriv-title")||customElements.define("skriv-title",qe);customElements.get("skriv-author")||customElements.define("skriv-author",Pe);customElements.get("skriv-date")||customElements.define("skriv-date",Te);customElements.get("skriv-body")||customElements.define("skriv-body",Ce);var Ae=class extends p{static get styles(){return g`
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
    `}SHA(){return process.env.COMMIT_REF?process.env.COMMIT_REF.slice(0,7):f`dev env`}render(){return f`
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
    `}};customElements.get("app-root")||customElements.define("app-root",Ae);})();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
