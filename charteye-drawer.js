import{L as t,s as e,m as a,a as o}from"./charteye-CxiMDR9d.js";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class r{constructor(t){this.i=t=>{"ready"===t.detail.status&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(t,this.i)}hostDisconnected(){window.removeEventListener(t,this.i)}}const i=t=>t.addController(new r(t)),s=globalThis,n=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),h=new WeakMap;let d=class{constructor(t,e,a){if(this._$cssResult$=!0,a!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const a=void 0!==e&&1===e.length;a&&(t=h.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),a&&h.set(e,t))}return t}toString(){return this.cssText}};const c=(t,...e)=>{const a=1===t.length?t[0]:e.reduce(((e,a,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+t[o+1]),t[0]);return new d(a,t,l)},p=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const a of t.cssRules)e+=a.cssText;return(t=>new d("string"==typeof t?t:t+"",void 0,l))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:b,defineProperty:f,getOwnPropertyDescriptor:u,getOwnPropertyNames:w,getOwnPropertySymbols:g,getPrototypeOf:v}=Object,m=globalThis,y=m.trustedTypes,_=y?y.emptyScript:"",x=m.reactiveElementPolyfillSupport,k=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let a=t;switch(e){case Boolean:a=null!==t;break;case Number:a=null===t?null:Number(t);break;case Object:case Array:try{a=JSON.parse(t)}catch(t){a=null}}return a}},S=(t,e)=>!b(t,e),A={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:S};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class C extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const a=Symbol(),o=this.getPropertyDescriptor(t,a,e);void 0!==o&&f(this.prototype,t,o)}}static getPropertyDescriptor(t,e,a){const{get:o,set:r}=u(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return o?.call(this)},set(e){const i=o?.call(this);r.call(this,e),this.requestUpdate(t,i,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;const t=v(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){const t=this.properties,e=[...w(t),...g(t)];for(const a of e)this.createProperty(a,t[a])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,a]of e)this.elementProperties.set(t,a)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const a=this._$Eu(t,e);void 0!==a&&this._$Eh.set(a,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const a=new Set(t.flat(1/0).reverse());for(const t of a)e.unshift(p(t))}else void 0!==t&&e.push(p(t));return e}static _$Eu(t,e){const a=e.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const a of e.keys())this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(n)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const a of e){const e=document.createElement("style"),o=s.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=a.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,a){this._$AK(t,a)}_$EC(t,e){const a=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,a);if(void 0!==o&&!0===a.reflect){const r=(void 0!==a.converter?.toAttribute?a.converter:$).toAttribute(e,a.type);this._$Em=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){const a=this.constructor,o=a._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=a.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=o,this[o]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,a){if(void 0!==t){if(a??=this.constructor.getPropertyOptions(t),!(a.hasChanged??S)(this[t],e))return;this.P(t,e,a)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,a){this._$AL.has(t)||this._$AL.set(t,e),!0===a.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,a]of t)!0!==a.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],a)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[k("elementProperties")]=new Map,C[k("finalized")]=new Map,x?.({ReactiveElement:C}),(m.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const M=globalThis,z=M.trustedTypes,T=z?z.createPolicy("lit-html",{createHTML:t=>t}):void 0,j="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,R="?"+E,O=`<${R}>`,P=document,U=()=>P.createComment(""),B=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,N="[ \t\n\f\r]",Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,F=/>/g,I=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Y=/'/g,H=/"/g,V=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...a)=>({_$litType$:t,strings:e,values:a}))(1),q=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),J=new WeakMap,X=P.createTreeWalker(P,129);function K(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==T?T.createHTML(e):e}const G=(t,e)=>{const a=t.length-1,o=[];let r,i=2===e?"<svg>":"",s=Z;for(let e=0;e<a;e++){const a=t[e];let n,l,h=-1,d=0;for(;d<a.length&&(s.lastIndex=d,l=s.exec(a),null!==l);)d=s.lastIndex,s===Z?"!--"===l[1]?s=D:void 0!==l[1]?s=F:void 0!==l[2]?(V.test(l[2])&&(r=RegExp("</"+l[2],"g")),s=I):void 0!==l[3]&&(s=I):s===I?">"===l[0]?(s=r??Z,h=-1):void 0===l[1]?h=-2:(h=s.lastIndex-l[2].length,n=l[1],s=void 0===l[3]?I:'"'===l[3]?H:Y):s===H||s===Y?s=I:s===D||s===F?s=Z:(s=I,r=void 0);const c=s===I&&t[e+1].startsWith("/>")?" ":"";i+=s===Z?a+O:h>=0?(o.push(n),a.slice(0,h)+j+a.slice(h)+E+c):a+E+(-2===h?e:c)}return[K(t,i+(t[a]||"<?>")+(2===e?"</svg>":"")),o]};class tt{constructor({strings:t,_$litType$:e},a){let o;this.parts=[];let r=0,i=0;const s=t.length-1,n=this.parts,[l,h]=G(t,e);if(this.el=tt.createElement(l,a),X.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=X.nextNode())&&n.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(j)){const e=h[i++],a=o.getAttribute(t).split(E),s=/([.?@])?(.*)/.exec(e);n.push({type:1,index:r,name:s[2],strings:a,ctor:"."===s[1]?it:"?"===s[1]?st:"@"===s[1]?nt:rt}),o.removeAttribute(t)}else t.startsWith(E)&&(n.push({type:6,index:r}),o.removeAttribute(t));if(V.test(o.tagName)){const t=o.textContent.split(E),e=t.length-1;if(e>0){o.textContent=z?z.emptyScript:"";for(let a=0;a<e;a++)o.append(t[a],U()),X.nextNode(),n.push({type:2,index:++r});o.append(t[e],U())}}}else if(8===o.nodeType)if(o.data===R)n.push({type:2,index:r});else{let t=-1;for(;-1!==(t=o.data.indexOf(E,t+1));)n.push({type:7,index:r}),t+=E.length-1}r++}}static createElement(t,e){const a=P.createElement("template");return a.innerHTML=t,a}}function et(t,e,a=t,o){if(e===q)return e;let r=void 0!==o?a._$Co?.[o]:a._$Cl;const i=B(e)?void 0:e._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),void 0===i?r=void 0:(r=new i(t),r._$AT(t,a,o)),void 0!==o?(a._$Co??=[])[o]=r:a._$Cl=r),void 0!==r&&(e=et(t,r._$AS(t,e.values),r,o)),e}class at{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:a}=this._$AD,o=(t?.creationScope??P).importNode(e,!0);X.currentNode=o;let r=X.nextNode(),i=0,s=0,n=a[0];for(;void 0!==n;){if(i===n.index){let e;2===n.type?e=new ot(r,r.nextSibling,this,t):1===n.type?e=new n.ctor(r,n.name,n.strings,this,t):6===n.type&&(e=new lt(r,this,t)),this._$AV.push(e),n=a[++s]}i!==n?.index&&(r=X.nextNode(),i++)}return X.currentNode=P,o}p(t){let e=0;for(const a of this._$AV)void 0!==a&&(void 0!==a.strings?(a._$AI(t,a,e),e+=a.strings.length-2):a._$AI(t[e])),e++}}class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,a,o){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=a,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=et(this,t,e),B(t)?t===Q||null==t||""===t?(this._$AH!==Q&&this._$AR(),this._$AH=Q):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>L(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==Q&&B(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:a}=t,o="number"==typeof a?this._$AC(t):(void 0===a.el&&(a.el=tt.createElement(K(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new at(o,this),a=t.u(this.options);t.p(e),this.T(a),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new tt(t)),e}k(t){L(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let a,o=0;for(const r of t)o===e.length?e.push(a=new ot(this.S(U()),this.S(U()),this,this.options)):a=e[o],a._$AI(r),o++;o<e.length&&(this._$AR(a&&a._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class rt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,a,o,r){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=Q}_$AI(t,e=this,a,o){const r=this.strings;let i=!1;if(void 0===r)t=et(this,t,e,0),i=!B(t)||t!==this._$AH&&t!==q,i&&(this._$AH=t);else{const o=t;let s,n;for(t=r[0],s=0;s<r.length-1;s++)n=et(this,o[a+s],e,s),n===q&&(n=this._$AH[s]),i||=!B(n)||n!==this._$AH[s],n===Q?t=Q:t!==Q&&(t+=(n??"")+r[s+1]),this._$AH[s]=n}i&&!o&&this.j(t)}j(t){t===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends rt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Q?void 0:t}}class st extends rt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Q)}}class nt extends rt{constructor(t,e,a,o,r){super(t,e,a,o,r),this.type=5}_$AI(t,e=this){if((t=et(this,t,e,0)??Q)===q)return;const a=this._$AH,o=t===Q&&a!==Q||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,r=t!==Q&&(a===Q||o);o&&this.element.removeEventListener(this.name,this,a),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class lt{constructor(t,e,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){et(this,t)}}const ht=M.litHtmlPolyfillSupport;ht?.(tt,ot),(M.litHtmlVersions??=[]).push("3.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let dt=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,a)=>{const o=a?.renderBefore??e;let r=o._$litPart$;if(void 0===r){const t=a?.renderBefore??null;o._$litPart$=r=new ot(e.insertBefore(U(),t),t,void 0,a??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}};dt._$litElement$=!0,dt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:dt});const ct=globalThis.litElementPolyfillSupport;ct?.({LitElement:dt}),(globalThis.litElementVersions??=[]).push("4.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pt=2,bt=t=>(...e)=>({_$litDirective$:t,values:e});class ft{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,a){this._$Ct=t,this._$AM=e,this._$Ci=a}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ut=class extends ft{constructor(t){if(super(t),this.it=Q,t.type!==pt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Q||null==t)return this._t=void 0,this.it=t;if(t===q)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};ut.directiveName="unsafeHTML",ut.resultType=1;const wt=bt(ut),gt=(t,e)=>{const a=t._$AN;if(void 0===a)return!1;for(const t of a)t._$AO?.(e,!1),gt(t,e);return!0},vt=t=>{let e,a;do{if(void 0===(e=t._$AM))break;a=e._$AN,a.delete(t),t=e}while(0===a?.size)},mt=t=>{for(let e;e=t._$AM;t=e){let a=e._$AN;if(void 0===a)e._$AN=a=new Set;else if(a.has(t))break;a.add(t),xt(e)}};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function yt(t){void 0!==this._$AN?(vt(this),this._$AM=t,mt(this)):this._$AM=t}function _t(t,e=!1,a=0){const o=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(o))for(let t=a;t<o.length;t++)gt(o[t],!1),vt(o[t]);else null!=o&&(gt(o,!1),vt(o));else gt(this,t)}const xt=t=>{t.type==pt&&(t._$AP??=_t,t._$AQ??=yt)};class kt extends ft{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,a){super._$AT(t,e,a),mt(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(gt(this,t),vt(this))}setValue(t){if((t=>void 0===t.strings)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=()=>new St;class St{}const At=new WeakMap,Ct=bt(class extends kt{render(t){return Q}update(t,[e]){const a=e!==this.Y;return a&&void 0!==this.Y&&this.rt(void 0),(a||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),Q}rt(t){if("function"==typeof this.Y){const e=this.ht??globalThis;let a=At.get(e);void 0===a&&(a=new WeakMap,At.set(e,a)),void 0!==a.get(this.Y)&&this.Y.call(this.ht,void 0),a.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return"function"==typeof this.Y?At.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Mt extends dt{contentRef=$t();footerRef=$t();dropupRef=$t();toastRef=$t();promptRef=$t();static get styles(){return c`
      :host {
        --balloon-border-radius: 2px;
        --balloon-color: rgb(54, 58, 69);
        --balloon-text-color: #fff;
        --balloon-font-size: 12px;
        --balloon-move: 4px;

        --drawer-width: 40vw;
        --drawer-height: 100%;
        --drawer-background: #fff;
        --drawer-color: rgb(19, 23, 34);
        --drawer-border-color: rgb(224, 227, 235);
        --drawer-button-hover-bg: rgb(240, 243, 250);
        --drawer-separator-color: rgb(224, 227, 235);
        --drawer-spinner-bg-color: #ededed;
        --drawer-tradingview-blue: rgb(41, 98, 255);
        --drawer-tradingview-green: #1c8e76;
        --drawer-tradingview-red: #d94f4f;
        --drawer-max-panel-height: calc(100vh - 84px - 39px);

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        border-left: 2px solid var(--drawer-border-color);
        width: var(--drawer-width);
        height: 100%;
        transform: scaleX(0);
        background: var(--drawer-background);
        user-select: text !important;
        z-index: 100;
        transition:
          transform 0.25s ease-in-out 0.15s,
          opacity 0.15s ease-in-out 0.1s;
        transform-origin: right;
        will-change: transform;
        font-family: -apple-system, 'system-ui', 'Trebuchet MS', Roboto, Ubuntu,
          sans-serif;
        color: var(--drawer-color);
      }

      @media screen and (max-width: 1024px) {
        :host {
          --drawer-width: 60vw;
        }
      }

      :host([dir='rtl']) {
        text-align: right;
        border-left: 0;
        border-right: 2px solid var(--drawer-border-color);
        transform-origin: left;
        right: auto;
        left: 0;
      }

      :host([theme='dark']) {
        --balloon-color: rgb(54, 58, 69);
        --balloon-text-color: #fff;
        --drawer-background: #131722;
        --drawer-color: rgb(209, 212, 220);
        --drawer-border-color: rgb(42, 46, 57);
        --drawer-button-hover-bg: rgba(255, 255, 255, 0.1);
        --drawer-separator-color: rgb(67, 70, 81);
        --drawer-spinner-bg-color: #262931;
      }

      :host([open]) {
        transform: scaleX(1);
        opacity: 1;
        transition-delay: 0ms;
        transition: transform 0.25s ease-in-out;
      }

      :root {
        --balloon-border-radius: 2px;
        --balloon-color: rgba(16, 16, 16, 0.95);
        --balloon-text-color: #fff;
        --balloon-font-size: 12px;
        --balloon-move: 4px;
      }

      ::selection {
        background: var(--drawer-tradingview-green);
        color: #fff;
      }

      button[aria-label][data-balloon-pos] {
        overflow: visible;
      }

      [aria-label][data-balloon-pos] {
        position: relative;
        cursor: pointer;
      }
      [aria-label][data-balloon-pos]:after {
        opacity: 0;
        pointer-events: none;
        transition: all 0.18s ease-out 0.18s;
        text-indent: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: normal;
        font-style: normal;
        text-shadow: none;
        font-size: var(--balloon-font-size);
        background: var(--balloon-color);
        border-radius: 2px;
        color: var(--balloon-text-color);
        border-radius: var(--balloon-border-radius);
        content: attr(aria-label);
        padding: 0.5em 1em;
        position: absolute;
        white-space: nowrap;
        z-index: 10;
      }
      [aria-label][data-balloon-pos]:before {
        width: 0;
        height: 0;
        border: 5px solid transparent;
        border-top-color: var(--balloon-color);
        opacity: 0;
        pointer-events: none;
        transition: all 0.18s ease-out 0.18s;
        content: '';
        position: absolute;
        z-index: 10;
      }
      [aria-label][data-balloon-pos]:hover:before,
      [aria-label][data-balloon-pos]:hover:after,
      [aria-label][data-balloon-pos][data-balloon-visible]:before,
      [aria-label][data-balloon-pos][data-balloon-visible]:after,
      [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before,
      [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
        opacity: 1;
        pointer-events: none;
      }
      [aria-label][data-balloon-pos].font-awesome:after {
        font-family:
          FontAwesome,
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          Roboto,
          Oxygen,
          Ubuntu,
          Cantarell,
          'Open Sans',
          'Helvetica Neue',
          sans-serif;
      }
      [aria-label][data-balloon-pos][data-balloon-break]:after {
        white-space: pre;
      }
      [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
        white-space: pre-line;
        word-break: break-word;
      }
      [aria-label][data-balloon-pos][data-balloon-blunt]:before,
      [aria-label][data-balloon-pos][data-balloon-blunt]:after {
        transition: none;
      }
      [aria-label][data-balloon-pos][data-balloon-pos='up']:hover:after,
      [aria-label][data-balloon-pos][data-balloon-pos='up'][data-balloon-visible]:after,
      [aria-label][data-balloon-pos][data-balloon-pos='down']:hover:after,
      [aria-label][data-balloon-pos][data-balloon-pos='down'][data-balloon-visible]:after {
        transform: translate(-50%, 0);
      }
      [aria-label][data-balloon-pos][data-balloon-pos='up']:hover:before,
      [aria-label][data-balloon-pos][data-balloon-pos='up'][data-balloon-visible]:before,
      [aria-label][data-balloon-pos][data-balloon-pos='down']:hover:before,
      [aria-label][data-balloon-pos][data-balloon-pos='down'][data-balloon-visible]:before {
        transform: translate(-50%, 0);
      }
      [aria-label][data-balloon-pos][data-balloon-pos*='-left']:after {
        left: 0;
      }
      [aria-label][data-balloon-pos][data-balloon-pos*='-left']:before {
        left: 5px;
      }
      [aria-label][data-balloon-pos][data-balloon-pos*='-right']:after {
        right: 0;
      }
      [aria-label][data-balloon-pos][data-balloon-pos*='-right']:before {
        right: 5px;
      }
      [aria-label][data-balloon-pos][data-balloon-po*='-left']:hover:after,
      [aria-label][data-balloon-pos][data-balloon-po*='-left'][data-balloon-visible]:after,
      [aria-label][data-balloon-pos][data-balloon-pos*='-right']:hover:after,
      [aria-label][data-balloon-pos][data-balloon-pos*='-right'][data-balloon-visible]:after {
        transform: translate(0, 0);
      }
      [aria-label][data-balloon-pos][data-balloon-po*='-left']:hover:before,
      [aria-label][data-balloon-pos][data-balloon-po*='-left'][data-balloon-visible]:before,
      [aria-label][data-balloon-pos][data-balloon-pos*='-right']:hover:before,
      [aria-label][data-balloon-pos][data-balloon-pos*='-right'][data-balloon-visible]:before {
        transform: translate(0, 0);
      }
      [aria-label][data-balloon-pos][data-balloon-pos^='up']:before,
      [aria-label][data-balloon-pos][data-balloon-pos^='up']:after {
        bottom: 100%;
        transform-origin: top;
        transform: translate(0, var(--balloon-move));
      }
      [aria-label][data-balloon-pos][data-balloon-pos^='up']:after {
        margin-bottom: 10px;
      }
      [aria-label][data-balloon-pos][data-balloon-pos='up']:before,
      [aria-label][data-balloon-pos][data-balloon-pos='up']:after {
        left: 50%;
        transform: translate(-50%, var(--balloon-move));
      }
      [aria-label][data-balloon-pos][data-balloon-pos^='down']:before,
      [aria-label][data-balloon-pos][data-balloon-pos^='down']:after {
        top: 100%;
        transform: translate(0, calc(var(--balloon-move) * -1));
      }
      [aria-label][data-balloon-pos][data-balloon-pos^='down']:after {
        margin-top: 10px;
      }
      [aria-label][data-balloon-pos][data-balloon-pos^='down']:before {
        width: 0;
        height: 0;
        border: 5px solid transparent;
        border-bottom-color: var(--balloon-color);
      }
      [aria-label][data-balloon-pos][data-balloon-pos='down']:after,
      [aria-label][data-balloon-pos][data-balloon-pos='down']:before {
        left: 50%;
        transform: translate(-50%, calc(var(--balloon-move) * -1));
      }
      [aria-label][data-balloon-pos][data-balloon-pos='left']:hover:after,
      [aria-label][data-balloon-pos][data-balloon-pos='left'][data-balloon-visible]:after,
      [aria-label][data-balloon-pos][data-balloon-pos='right']:hover:after,
      [aria-label][data-balloon-pos][data-balloon-pos='right'][data-balloon-visible]:after {
        transform: translate(0, -50%);
      }
      [aria-label][data-balloon-pos][data-balloon-pos='left']:hover:before,
      [aria-label][data-balloon-pos][data-balloon-pos='left'][data-balloon-visible]:before,
      [aria-label][data-balloon-pos][data-balloon-pos='right']:hover:before,
      [aria-label][data-balloon-pos][data-balloon-pos='right'][data-balloon-visible]:before {
        transform: translate(0, -50%);
      }
      [aria-label][data-balloon-pos][data-balloon-pos='left']:after,
      [aria-label][data-balloon-pos][data-balloon-pos='left']:before {
        right: 100%;
        top: 50%;
        transform: translate(var(--balloon-move), -50%);
      }
      [aria-label][data-balloon-pos][data-balloon-pos='left']:after {
        margin-right: 10px;
      }
      [aria-label][data-balloon-pos][data-balloon-pos='left']:before {
        width: 0;
        height: 0;
        border: 5px solid transparent;
        border-left-color: var(--balloon-color);
      }
      [aria-label][data-balloon-pos][data-balloon-pos='right']:after,
      [aria-label][data-balloon-pos][data-balloon-pos='right']:before {
        left: 100%;
        top: 50%;
        transform: translate(calc(var(--balloon-move) * -1), -50%);
      }
      [aria-label][data-balloon-pos][data-balloon-pos='right']:after {
        margin-left: 10px;
      }
      [aria-label][data-balloon-pos][data-balloon-pos='right']:before {
        width: 0;
        height: 0;
        border: 5px solid transparent;
        border-right-color: var(--balloon-color);
      }
      [aria-label][data-balloon-pos][data-balloon-length]:after {
        white-space: normal;
      }
      [aria-label][data-balloon-pos][data-balloon-length='small']:after {
        width: 80px;
      }
      [aria-label][data-balloon-pos][data-balloon-length='medium']:after {
        width: 150px;
      }
      [aria-label][data-balloon-pos][data-balloon-length='large']:after {
        width: 260px;
      }
      [aria-label][data-balloon-pos][data-balloon-length='xlarge']:after {
        width: 380px;
      }
      @media screen and (max-width: 768px) {
        [aria-label][data-balloon-pos][data-balloon-length='xlarge']:after {
          width: 90vw;
        }
      }
      [aria-label][data-balloon-pos][data-balloon-length='fit']:after {
        width: 100%;
      }

      * {
        box-sizing: border-box;
      }

      a:hover,
      a:focus {
        text-decoration: none;
      }

      button,
      a.button {
        padding: 0.5rem;
        border-radius: 4px;
        transition:
          background-color 0.35s ease,
          color 60ms ease;
        cursor: pointer;
        appearance: none;
        background: none;
        display: inline-flex;
        align-items: center;
        border: 0;
        color: var(--drawer-color);
      }

      a.button:hover,
      a.focus:hover,
      button:hover,
      button:focus {
        background: var(--drawer-button-hover-bg);
      }

      button svg {
        pointer-events: none;
      }

      .charteye-drawer__content {
        height: calc(100% - 42px - 39px);
      }

      .charteye-drawer__content input[type='radio'] {
        position: absolute;
        opacity: 0;
        z-index: -1;
      }

      .charteye-drawer__panel-content {
        padding: 0 0.75rem;
        max-height: 0;
        overflow: hidden;
        opacity: 0;
        transition:
          max-height 0.25s ease-in-out,
          opacity 0.2s ease-in-out;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        user-select: text !important;
      }

      .charteye-drawer__panel-label {
        cursor: pointer;
        padding: 0.766rem 0.75rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        position: relative;
        opacity: 0.75;
        color: var(--drawer-color);
        border-bottom: 1px solid var(--drawer-border-color);
      }

      .charteye-drawer__panel-label svg {
        transition: opacity 0.25s ease-in-out;
        position: absolute;
        right: 0.75rem;
        top: 50%;
        transform: translateY(-50%);
      }

      .charteye-drawer__panel:only-child
        .charteye-drawer__panel-label
        svg:not([data-spinner]),
      .charteye-drawer__panel-label[data-loading] svg:not([data-spinner]) {
        opacity: 0 !important;
      }

      .charteye-drawer__panel-label svg.icon-min {
        opacity: 0;
        visibility: hidden;
      }

      .charteye-drawer__panel-label svg.icon-plus {
        opacity: 1;
        visibility: visible;
      }

      .charteye-drawer__panel-label:empty {
        display: none;
      }

      .charteye-drawer__panel input:checked + .charteye-drawer__panel-label {
        padding-left: 1.75rem;
        opacity: 1;
      }

      .charteye-drawer__panel
        input:checked
        + .charteye-drawer__panel-label
        svg.icon-min {
        opacity: 1;
        visibility: visible;
      }

      .charteye-drawer__panel
        input:checked
        + .charteye-drawer__panel-label
        svg.icon-plus {
        opacity: 0;
        visibility: hidden;
      }

      .charteye-drawer__panel
        input:checked
        + .charteye-drawer__panel-label::before {
        content: '';
        position: absolute;
        left: 0.75rem;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--drawer-tradingview-blue);
      }

      .charteye-drawer__panel input:checked ~ .charteye-drawer__panel-content {
        max-height: var(--drawer-max-panel-height);
        padding: 0.75rem 1.75rem;
        opacity: 1;
        border-bottom: 1px solid var(--drawer-border-color);
      }

      .charteye-drawer__panel:last-child
        input:checked
        ~ .charteye-drawer__panel-content {
        border-bottom: 0;
      }

      .charteye-drawer__panel-content h2 {
        font-size: 1.25rem;
        margin-bottom: 0.35rem;
      }

      .charteye-drawer__panel-content h3 {
        font-size: 1rem;
        margin-bottom: 0.35rem;
      }

      .charteye-drawer__panel-content p {
        margin-bottom: 1.5rem;
        margin-top: 0;
        line-height: 1.5;
      }

      .charteye-drawer__panel-content li {
        margin-bottom: 1rem;
        line-height: 1.5;
      }

      .charteye-drawer__panel-content li:empty,
      .charteye-drawer__panel-content p:empty {
        display: none;
      }

      .charteye-drawer__panel-content ul,
      .charteye-drawer__panel-content ol {
        padding-left: 0.75rem;
        margin-bottom: 1.5rem;
      }

      .charteye-drawer__header {
        background: var(--drawer-background);
        border-bottom: 4px solid var(--drawer-border-color);
        height: 42px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 0 0.25rem;
        font-size: 14px;
        justify-content: end;
        z-index: 10;
        position: relative;
      }

      .charteye-drawer__footer {
        background: var(--drawer-background);
        border-top: 1px solid var(--drawer-border-color);
        height: 39px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 3px 0.5rem 2px 0.25rem;
        font-size: 14px;
        justify-content: space-between;
        margin: auto 0 0;
        z-index: 10;
        position: relative;
        transform: translateY(100%);
        transition: transform 0.25s ease-in-out;
        transform-origin: bottom;
        will-change: transform;
      }

      .charteye-drawer__footer.show {
        transform: translateY(0);
      }

      .charteye-drawer__separator {
        display: inline-flex;
        height: calc(100% - 16px);
        margin: 8px 4px;
        width: 1px;
        color: rgb(209, 212, 220);
        background: var(--drawer-separator-color);
      }

      .charteye-drawer__spinner {
        display: flex;
        align-items: center;
        font-size: 14px;
        gap: 0.5rem;
      }

      .charteye-drawer__spinner svg {
        color: var(--drawer-spinner-bg-color);
        display: inline-flex;
      }

      .charteye-drawer__form {
        padding: 0.5rem 0;
      }

      .charteye-drawer__form textarea {
        width: 100%;
        height: 100px;
        margin-bottom: 1rem;
        padding: 10px;
        font-family: -apple-system, 'system-ui', 'Trebuchet MS', Roboto, Ubuntu,
          sans-serif;
        border: 1px solid var(--drawer-border-color);
        background: var(--drawer-background);
        border-radius: 4px;
        resize: none;
      }

      .charteye-drawer__form button {
        background: var(--drawer-tradingview-blue);
        color: #fff;
        padding: 0.5rem 0.75rem;
      }

      .charteye-drawer__toast,
      .charteye-drawer__dropup {
        position: absolute;
        bottom: 38px;
        background: var(--drawer-background);
        left: 0;
        display: flex;
        flex-direction: column;
        width: 100%;
        transform: translateY(100%);
        transition:
          transform 0.25s ease-in-out,
          opacity 0.25s ease-in-out;
        transform-origin: bottom;
        will-change: transform, opacity;
        visibility: hidden;
        opacity: 0;
        backdrop-filter: blur(3px);
        border-top: 1px solid var(--drawer-border-color);
        z-index: 9;
        font-size: 14px;
        padding: 0;
        margin: 0;
      }

      .charteye-drawer__toast {
        bottom: auto;
        padding: 0.75rem;
        top: 0;
        z-index: 12;
        color: #fff;
        flex-direction: row;
        transform: translateY(-200%);
      }

      .charteye-drawer__toast svg {
        margin-right: 0.35rem;
      }

      .charteye-drawer__toast.is-success {
        background: var(--drawer-tradingview-green);
      }

      .charteye-drawer__toast.show,
      .charteye-drawer__dropup.show {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }

      .charteye-drawer__dropup li {
        border-bottom: 1px solid var(--drawer-border-color);
        display: flex;
      }

      .charteye-drawer__dropup svg {
        color: var(--drawer-color);
      }
      .charteye-drawer__dropup button:hover {
        background: var(--drawer-button-hover-bg);
      }
      .charteye-drawer__dropup button:hover svg {
        color: var(--drawer-tradingview-blue);
      }
      .charteye-drawer__dropup button[disabled] {
        pointer-events: none;
        opacity: 0.5;
      }
      .charteye-drawer__dropup [data-tag] {
        background: var(--drawer-tradingview-blue);
        color: #fff;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 12px;
      }
      .charteye-drawer__dropup button {
        padding: 0.5rem;
        border-radius: 0;
        display: flex;
        width: 100%;
        align-items: center;
        gap: 0.5rem;
        transition:
          background-color 0.35s ease,
          color 60ms ease,
          font-weight 60ms ease;
      }
    `}static get properties(){return{debug:{type:Boolean},locale:{type:String,reflect:!0},theme:{type:String,reflect:!0},open:{type:Boolean},data:{type:Object},panels:{type:Object},activePanel:{type:String},isLoading:{type:Boolean},toastMessage:{type:String},userPrompt:{type:String}}}constructor(){super(),i(this),this.theme="light",this.panels={},this.debug=!1,this.open=!1,this.data={},this.plugin=null,this.activePanel="",this.userPrompt="",this.panels={},this.isLoading=!1,this.toastMessage="Toast message",this.maxPanelHeight=81,this.messages=this.getTranslations(),this.addEventListener("drawer:open",this._onOpen),this.addEventListener("drawer:close",this._onClose),this.addEventListener("analysis:render",this._onAnalysisRender),this.addEventListener("analysis:ready",this._onAnalysisReady)}async setLocale(t){await e(t).then((()=>{this.messages=this.getTranslations()}))}getTranslations(){return{close:a("Close"),interactWithChartEye:a("Interact with ChartEye"),downloadAnalysisAsPDF:a("Download analysis as PDF"),shareThisAnalysis:a("Share this analysis"),frequentlyAskedQuestions:a("Frequently Asked Questions"),waitingForChartEye:a("Awaiting a reply from ChartEye. This can take a few moments...")}}_onOpen(){this.open=!0,this.setAttribute("open","")}_onClose(){this.open=!1,this.removeAttribute("open")}_onAnalysisRender(t){this.data.analysis=t.detail,this.panels.ta.content=wt(this.data.analysis),this.requestUpdate()}_onAnalysisReady(t){this.data=t.detail,this.panels.ta.content=wt(this.data.analysis),this.toastMessage=a(o`Analysis for ${this.data.symbol} on ${this.data.interval} timeframe is ready`),this.toggleToast(),this.footerRef.value.classList.add("show")}log(t,...e){const a=new Date,o=(a.getHours()<10?"0":"")+a.getHours()+":"+((a.getMinutes()<10?"0":"")+a.getMinutes())+":"+((a.getSeconds()<10?"0":"")+a.getSeconds());return this.debug?console.log(`[${o}] - ${t}`,...e):null}header(){return W`
      <div class="charteye-drawer__header">
        ${this.button({label:this.messages.close,icon:W`<svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 17 17"
            width="17"
            height="17"
            fill="currentColor"
          >
            <path d="m.58 1.42.82-.82 15 15-.82.82z"></path>
            <path d="m.58 15.58 15-15 .82.82-15 15z"></path>
          </svg>`,onClick:()=>this._onClose(),tooltip:"rtl"===this.dir?"right":"left"})}
      </div>
    `}content(){return this.data.analysis||(this.panels.ta={label:a(o`Technical Analysis for ${this.data.symbol} on ${this.data.interval} timeframe`),content:this.loader({label:this.messages.waitingForChartEye})}),W`
      <div
        ${Ct(this.contentRef)}
        class="charteye-drawer__content"
        @click="${()=>this.dropupRef.value.classList.remove("show")}"
      >
        ${Object.values(this.panels).map((t=>this.panel(t)))}
      </div>
    `}panel({content:t,key:e,label:a="",isLoading:o=!1}={}){const r=`panel_${Object.keys(this.panels).indexOf(e)+1}`;this.activePanel||(this.activePanel=e);const i=e===this.activePanel;return W`<div class="charteye-drawer__panel">
      <input type="radio" name="drawer" id="${r}" ?checked=${i} />
      <label
        for="${r}"
        class="charteye-drawer__panel-label"
        ?data-loading=${o}
        @click="${()=>{this.activePanel=e}}"
      >
        <div>${o?W`<div>${this.loader()}</div>`:""}${a}</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            class="icon-min"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 12h14"
            /></svg
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            class="icon-plus"
            stroke="currentColor"
            width="17"
            height="17"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </label>
      <div class="charteye-drawer__panel-content">${t}</div>
    </div>`}toast({type:t="success"}={}){let e="";return"success"===t&&(e=W`<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        width="17"
        height="17"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg> `),W`<div
      ${Ct(this.toastRef)}
      class="charteye-drawer__toast is-${t}"
    >
      ${e}${this.toastMessage}
    </div>`}toggleToast(){this.toastRef.value.classList.toggle("show"),setTimeout((()=>{this.toastRef.value.classList.remove("show")}),6e3)}toggleDropup(){this.dropupRef.value.classList.toggle("show")}dropup(){const t=this.data?.questions||[],e=a("Formulate your own message");return W`
      <ul ${Ct(this.dropupRef)} class="charteye-drawer__dropup">
        ${t?.map((t=>this.dropupQuestion(t,t.includes(e))))}
        ${this.dropupQuestion(e,!0)}
      </ul>
    `}dropupQuestion(t,e){return W`<li>
      <button
        data-prompt="${t}"
        ?disabled=${e&&"premium"!==this.plugin?.tier||this.isLoading||Object.values(this.panels).map((t=>t.label)).includes(t)}
        @click="${()=>this.addPanel(t,e)}"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          /></svg
        >${t}${e?W`<span data-tag>${a("Premium")}</span>`:""}
      </button>
    </li>`}promptForm(){return W`<form
      class="charteye-drawer__form"
      @submit="${t=>{this.userPrompt&&this.addPanel(this.userPrompt),t.preventDefault()}}"
    >
      <textarea
        ${Ct(this.promptRef)}
        name="prompt"
        id="prompt"
        cols="30"
        rows="5"
        required
        @keydown="${t=>{const e=(()=>{let t="",e=document.activeElement,a=e?e.tagName.toLowerCase():null;return"textarea"===a||"input"===a&&/^(?:text|search|password|tel|url)$/i.test(e.type)&&"number"==typeof e.selectionStart?t=e.value.slice(e.selectionStart,e.selectionEnd):window.getSelection&&(t=window.getSelection().toString()),t})();["Enter","Shift","Meta","ArrowLeft","ArrowRight"].includes(t.key)||("Backspace"===t.key?this.userPrompt=e?this.userPrompt.replace(e,""):this.userPrompt.slice(0,-1):this.userPrompt+=t.key,this.promptRef.value.value=this.userPrompt),t.shiftKey&&(!t.shiftKey||"Shift"===t.key)||["ArrowLeft","ArrowRight"].includes(t.key)||t.preventDefault()}}"
      ></textarea>
      <button type="submit">Submit</button>
    </form>`}async addPanel(t,e=!1){let a=t.replace(/\s/g,"-").toLowerCase();if(e&&(a="custom"),this.panels[a]={key:a,label:t,content:e?this.promptForm():this.loader({label:this.messages.waitingForChartEye}),isLoading:!e},this.activePanel=a,this.toggleDropup(),this.style.setProperty("--drawer-max-panel-height","calc(100vh - 84px - 39px - (42px * "+(Object.keys(this.panels).length-1)),e)return;let o="";const r=await this.plugin.improveAnalysis(t),i=r.body?.getReader(),s=new TextDecoder;for(;;){const{done:t,value:e}=await i.read();if(t){this.panels[a].isLoading=!1,this.requestUpdate();break}o+=s.decode(e),this.panels[a].content=wt(o),this.requestUpdate()}}button({id:t,label:e,icon:a,onClick:o,tooltip:r="up"}){return W`
      <button
        @click="${o}"
        type="button"
        aria-label="${e}"
        data-balloon-pos="${r}"
        id="${t||e.replace(" ","-").toLowerCase()}"
      >
        ${W`${a}`}
      </button>
    `}separator(){return W`<span class="charteye-drawer__separator">&nbsp;</span>`}loader({label:t=""}={}){return W`<div class="charteye-drawer__spinner">
      <svg width="24" height="24" viewBox="0 0 24 24" data-spinner>
        <style>
          .spinner_ajPY {
            transform-origin: center;
            animation: spinner_AtaB 0.75s infinite linear;
          }
          @keyframes spinner_AtaB {
            100% {
              transform: rotate(360deg);
            }
          }
        </style>
        <path
          fill="currentColor"
          d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        />
        <path
          fill="#2849cc"
          d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
          class="spinner_ajPY"
        />
      </svg>
      <span>${t}</span>
    </div>`}footer(){return W`
      <div ${Ct(this.footerRef)} class="charteye-drawer__footer">
        <div>
          ${this.button({onClick:()=>this.toggleDropup(),icon:W`<svg
              fill="none"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>`,label:this.messages.interactWithChartEye})}
          ${this.separator()}
          ${W`<a
            class="button"
            target="_blank"
            aria-label="${this.messages.downloadAnalysisAsPDF}"
            data-balloon-pos="up"
            href="https://charteye.ai/pdf/${this.data.slug}"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              /></svg
          ></a>`}
          ${this.separator()}
          ${W`<a
            class="button"
            target="_blank"
            aria-label="${this.messages.shareThisAnalysis}"
            data-balloon-pos="up"
            href="https://charteye.ai/ta/${this.data.slug}"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
              /></svg
          ></a>`}
          ${this.separator()}
          ${W`<a
            class="button"
            target="_blank"
            aria-label="${this.messages.frequentlyAskedQuestions}"
            data-balloon-pos="up"
            href="https://charteye.ai/faq"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              width="17"
              height="17"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </a>`}
        </div>
        <p>
          ChartEye is powered by
          <a
            href="https://chartai.tech"
            target="_blank"
            rel="noopener noreferrer"
            >ChartAI</a
          >
        </p>
      </div>
    `}render(){return this.log("Render web component"),W`
      ${this.header()} ${this.toast()} ${this.content()} ${this.dropup()}
      ${this.footer()}
      <slot></slot>
    `}}window.customElements.define("charteye-drawer",Mt),window.document.body.insertAdjacentElement("afterbegin",window.document.createElement("charteye-drawer"));export{Mt as CharteyeDrawer};
