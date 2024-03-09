"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5491,6601],{71610:(t,e,n)=>{n.d(e,{P:()=>s,u:()=>u});var r=n(14041),o=n(43144),i=(n(95899),n(31085)),a=n(88784);n(1733);const s=r.forwardRef((function(t,e){const{children:n,container:s,disablePortal:l=!1}=t,[c,u]=r.useState(null),d=(0,a.u)(r.isValidElement(n)?n.ref:null,e);if((0,a.a)((()=>{l||u(function(t){return"function"==typeof t?t():t}(s)||document.body)}),[s,l]),(0,a.a)((()=>{if(c&&!l)return(0,a.s)(e,c),()=>{(0,a.s)(e,null)}}),[e,c,l]),l){if(r.isValidElement(n)){const t={ref:d};return r.cloneElement(n,t)}return(0,i.jsx)(r.Fragment,{children:n})}return(0,i.jsx)(r.Fragment,{children:c?o.createPortal(n,c):c})}));const l={disableDefaultClasses:!1},c=r.createContext(l);function u(t){const{disableDefaultClasses:e}=r.useContext(c);return n=>e?"":t(n)}},40665:(t,e,n)=>{n.d(e,{T:()=>s,_:()=>a,a:()=>i});var r=n(95899),o=n(14041);r.P.oneOfType([r.P.func,r.P.object]);function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,i(t,e)}var s=o.createContext(null)},63145:(t,e,n)=>{function r(t,e){return()=>null}n.d(e,{c:()=>r})},59902:(t,e,n)=>{n.r(e),n.d(e,{default:()=>u});n(67588);var r=n(31085),o=n(14041),i=n(95899),a=n(30936),s=n(21658);n(49494),n(62614),n(16276),n(47883),n(9532),n(63470),n(71610),n(43144),n(88784),n(1733),n(40665),n(90623),n(26135),n(14613),n(5278),n(84654),n(42757);const{storage:l}=a.Wp,{getValue:c}=a.Wp.properties;function u({data:t,mode:e="tiles",onlyMode:n=!1,tileStyle:i="default",disabledImage:a,disabledIcon:u,className:d="",childClassName:f="",noDataMessage:m="No data found",loader:y,titleField:p="name",tagLabel:g,tagColor:v,title:P,iconName:b,imageUrl:h,iconNameField:L="icon",iconColorField:S="iconColor",tagSize:C,imageUrlField:w="imageUrl",tagFieldName:O="tag",tagColorField:T="tagColor",actions:j,onAction:k}){const[F,N]=(0,o.useState)(e),{Button:x}=l.components.get();return(0,r.jsxs)("div",{className:`sq-image-card-list ${d} sq-image-card-list--style-${F}`,children:[!n&&t&&t.length>0&&(0,r.jsxs)("div",{className:"sq-image-card-list__top mb-wide",children:[(0,r.jsx)(x,{buttonText:"List",size:"small",iconSize:"small",variant:""+("list"===F?"contained":"outlined"),iconName:"list",onClick:()=>N("list")}),(0,r.jsx)(x,{buttonText:"Tiles",size:"small",iconSize:"small",variant:""+("tiles"===F?"contained":"outlined"),iconName:"dashboard",onClick:()=>N("tiles")})]}),(0,r.jsxs)("div",{className:"sq-image-card-list__wrapper",children:[y&&!t&&y,t&&0===t.length&&(0,r.jsx)("div",{className:"sq-image-card-list__no-data",children:m}),t&&t.map(((t,e)=>{const n=c({},t[p]||P,t),o=c({},t[w]||h,t),l=c({},t[O]||g,t),d=c({},t[T]||v,t),m=c({},j,t),y=c({},t[L]||b,t),N=c({},t[S]||S,t);return(0,r.jsx)(s.default,{iconName:y,tagSize:C,tileStyle:i,iconColor:N,disabledImage:a,disabledIcon:u,row:t,mode:F,header:n,tagLabel:l,tagColor:d,imageUrl:o,className:f,actions:m,onAction:(e,n)=>k&&k(t,n)},e)}))]})]})}u.propTypes={data:i.P.array,row:i.P.object,loader:i.P.node,className:i.P.string,childClassName:i.P.string,mode:i.P.string,onlyMode:i.P.bool,disabledImage:i.P.bool,disabledIcon:i.P.bool,noDataMessage:i.P.string,tileStyle:i.P.string,title:i.P.any,imageUrl:i.P.any,tagLabel:i.P.any,tagColor:i.P.any,iconName:i.P.any,iconColor:i.P.any,iconNameField:i.P.string,iconColorField:i.P.string,titleField:i.P.string,imageUrlField:i.P.string,tagFieldName:i.P.string,tagColorField:i.P.string,onAction:i.P.func,header:i.P.string,tagSize:i.P.string,actions:i.P.oneOfType([i.P.array,i.P.func])}},49494:(t,e,n)=>{n.d(e,{o:()=>j});var r=n(95899),o=n(62614),i={},a=r.s,s=r.Y,l=r.p,c=r.d,u=r.F,d=r.Z;i.f=a&&!s?Object.defineProperties:function(t,e){c(t);for(var n,r=u(e),o=d(e),i=o.length,a=0;i>a;)l.f(t,n=o[a++],r[n]);return t};var f,m=r.d,y=i,p=r.$,g=r.a0,v=o.af,P=r.G,b=r.C,h="prototype",L="script",S=b("IE_PROTO"),C=function(){},w=function(t){return"<"+L+">"+t+"</"+L+">"},O=function(t){t.write(w("")),t.close();var e=t.parentWindow.Object;return t=null,e},T=function(){try{f=new ActiveXObject("htmlfile")}catch(o){}var t,e,n;T="undefined"!=typeof document?document.domain&&f?O(f):(e=P("iframe"),n="java"+L+":",e.style.display="none",v.appendChild(e),e.src=String(n),(t=e.contentWindow.document).open(),t.write(w("document.F=Object")),t.close(),t.F):O(f);for(var r=p.length;r--;)delete T[h][p[r]];return T()};g[S]=!0;var j=Object.create||function(t,e){var n;return null!==t?(C[h]=m(t),n=new C,C[h]=null,n[S]=t):n=T(),void 0===e?n:y.f(n,e)}},13514:(t,e,n)=>{function r(t){return t&&t.ownerDocument||document}n.d(e,{o:()=>r})},14613:(t,e,n)=>{n.d(e,{u:()=>o});var r=n(14041);function o({controlled:t,default:e,name:n,state:o="value"}){const{current:i}=r.useRef(void 0!==t),[a,s]=r.useState(e);return[i?t:a,r.useCallback((t=>{i||s(t)}),[])]}},84654:(t,e,n)=>{n.d(e,{u:()=>i});var r=n(14041),o=n(88784);function i(t){const e=r.useRef(t);return(0,o.a)((()=>{e.current=t})),r.useCallback(((...t)=>(0,e.current)(...t)),[])}},88784:(t,e,n)=>{n.d(e,{a:()=>i,s:()=>o,u:()=>a});var r=n(14041);function o(t,e){"function"==typeof t?t(e):t&&(t.current=e)}var i="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;function a(...t){return r.useMemo((()=>t.every((t=>null==t))?null:e=>{t.forEach((t=>{o(t,e)}))}),t)}},5278:(t,e,n)=>{var r;n.d(e,{u:()=>s});var o=n(14041);let i=0;const a=(r||(r=n.t(o,2)))["useId".toString()];function s(t){if(void 0!==a){const e=a();return null!=t?t:e}return function(t){const[e,n]=o.useState(t),r=t||e;return o.useEffect((()=>{null==e&&(i+=1,n(`mui-${i}`))}),[e]),r}(t)}},42757:(t,e,n)=>{n.d(e,{u:()=>f});var r=n(14041);let o,i=!0,a=!1;const s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l(t){t.metaKey||t.altKey||t.ctrlKey||(i=!0)}function c(){i=!1}function u(){"hidden"===this.visibilityState&&a&&(i=!0)}function d(t){const{target:e}=t;try{return e.matches(":focus-visible")}catch(n){}return i||function(t){const{type:e,tagName:n}=t;return!("INPUT"!==n||!s[e]||t.readOnly)||"TEXTAREA"===n&&!t.readOnly||!!t.isContentEditable}(e)}function f(){const t=r.useCallback((t=>{var e;null!=t&&((e=t.ownerDocument).addEventListener("keydown",l,!0),e.addEventListener("mousedown",c,!0),e.addEventListener("pointerdown",c,!0),e.addEventListener("touchstart",c,!0),e.addEventListener("visibilitychange",u,!0))}),[]),e=r.useRef(!1);return{isFocusVisibleRef:e,onFocus:function(t){return!!d(t)&&(e.current=!0,!0)},onBlur:function(){return!!e.current&&(a=!0,window.clearTimeout(o),o=window.setTimeout((()=>{a=!1}),100),e.current=!1,!0)},ref:t}}},67588:(t,e,n)=>{var r=n(95899),o=n(49494),i=n(62614),a=r.w,s=o.o,l=r.p.f,c=a("unscopables"),u=Array.prototype;null==u[c]&&l(u,c,{configurable:!0,value:s(null)});var d,f,m,y=!(0,r.b)((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),p=r.B,g=r.n,v=r.t,P=y,b=(0,r.C)("IE_PROTO"),h=Object,L=h.prototype,S=P?h.getPrototypeOf:function(t){var e=v(t);if(p(e,b))return e[b];var n=e.constructor;return g(n)&&e instanceof n?n.prototype:e instanceof h?L:null},C=r.b,w=r.n,O=r.o,T=S,j=r.x,k=(0,r.w)("iterator"),F=!1;[].keys&&("next"in(m=[].keys())?(f=T(T(m)))!==Object.prototype&&(d=f):F=!0),(!O(d)||C((function(){var t={};return d[k].call(t)!==t})))&&(d={}),w(d[k])||j(d,k,(function(){return this}));var N={IteratorPrototype:d,BUGGY_SAFARI_ITERATORS:F},x=N.IteratorPrototype,A=o.o,E=r.D,I=i.j,R=i.k,_=function(){return this},M=r._,D=r.c,G=r.E,V=r.n,U=function(t,e,n,r){var o=e+" Iterator";return t.prototype=A(x,{next:E(+!r,n)}),I(t,o,!1),R[o]=_,t},z=S,B=i.o,q=i.j,H=r.y,W=r.x,$=r.w,K=i.k,Y=N,X=G.PROPER,Z=G.CONFIGURABLE,J=Y.IteratorPrototype,Q=Y.BUGGY_SAFARI_ITERATORS,tt=$("iterator"),et="keys",nt="values",rt="entries",ot=function(){return this},it=r.F,at=function(t){u[c][t]=!0},st=i.k,lt=r.A,ct=r.p.f,ut=function(t,e,n,r,o,i,a){U(n,e,r);var s,l,c,u=function(t){if(t===o&&p)return p;if(!Q&&t in m)return m[t];switch(t){case et:case nt:case rt:return function(){return new n(this,t)}}return function(){return new n(this)}},d=e+" Iterator",f=!1,m=t.prototype,y=m[tt]||m["@@iterator"]||o&&m[o],p=!Q&&y||u(o),g="Array"==e&&m.entries||y;if(g&&(s=z(g.call(new t)))!==Object.prototype&&s.next&&(z(s)!==J&&(B?B(s,J):V(s[tt])||W(s,tt,ot)),q(s,d,!0)),X&&o==nt&&y&&y.name!==nt&&(Z?H(m,"name",nt):(f=!0,p=function(){return D(y,this)})),o)if(l={values:u(nt),keys:i?p:u(et),entries:u(rt)},a)for(c in l)(Q||f||!(c in m))&&W(m,c,l[c]);else M({target:e,proto:!0,forced:Q||f},l);return m[tt]!==p&&W(m,tt,p,{name:o}),K[e]=p,l},dt=function(t,e){return{value:t,done:e}},ft=r.s,mt="Array Iterator",yt=lt.set,pt=lt.getterFor(mt),gt=ut(Array,"Array",(function(t,e){yt(this,{type:mt,target:it(t),index:0,kind:e})}),(function(){var t=pt(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,dt(void 0,!0)):dt("keys"==n?r:"values"==n?e[r]:[r,e[r]],!1)}),"values"),vt=st.Arguments=st.Array;if(at("keys"),at("values"),at("entries"),ft&&"values"!==vt.name)try{ct(vt,"name",{value:"values"})}catch(At){}var Pt=(0,r.G)("span").classList,bt=Pt&&Pt.constructor&&Pt.constructor.prototype,ht=bt===Object.prototype?void 0:bt,Lt=r.u,St={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Ct=ht,wt=gt,Ot=r.y,Tt=r.w,jt=Tt("iterator"),kt=Tt("toStringTag"),Ft=wt.values,Nt=function(t,e){if(t){if(t[jt]!==Ft)try{Ot(t,jt,Ft)}catch(At){t[jt]=Ft}if(t[kt]||Ot(t,kt,e),St[e])for(var n in wt)if(t[n]!==wt[n])try{Ot(t,n,wt[n])}catch(At){t[n]=wt[n]}}};for(var xt in St)Nt(Lt[xt]&&Lt[xt].prototype,xt);Nt(Ct,"DOMTokenList")}}]);