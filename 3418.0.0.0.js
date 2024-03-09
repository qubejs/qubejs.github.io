"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3418],{36325:(t,e,n)=>{n.d(e,{B:()=>f});n(95899);var r=n(62614),o=n(16276),i=n(14041),a=n(19224),s=n(31085),l=n(30750);const c=["className","component"];const u=(0,r.p)(),p=function(t={}){const{themeId:e,defaultTheme:n,defaultClassName:u="MuiBox-root",generateClassName:p}=t,f=(0,r.m)("div",{shouldForwardProp:t=>"theme"!==t&&"sx"!==t&&"as"!==t})(r.n);return i.forwardRef((function(t,i){const d=(0,r.d)(n),y=(0,l.e)(t),{className:m,component:h="div"}=y,v=(0,r._)(y,c);return(0,s.jsx)(f,(0,o._)({as:h,ref:i,className:(0,a.c)(m,p?p(u):u),theme:e&&d[e]||d},v))}))}({themeId:r.T,defaultTheme:u,defaultClassName:"MuiBox-root",generateClassName:r.C.generate});var f=p},26135:(t,e,n)=>{n.d(e,{G:()=>m});var r=n(16276),o=n(62614),i=n(14041),a=(n(95899),n(9532)),s=n(1733),l=n(31085),c=n(88784);const u=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function p(t){return`scale(${t}, ${t**2})`}const f={entering:{opacity:1,transform:p(1)},entered:{opacity:1,transform:"none"}},d="undefined"!=typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),y=i.forwardRef((function(t,e){const{addEndListener:n,appear:y=!0,children:m,easing:h,in:v,onEnter:g,onEntered:P,onEntering:b,onExit:x,onExited:E,onExiting:T,style:O,timeout:_="auto",TransitionComponent:j=s.T}=t,w=(0,o._)(t,u),S=i.useRef(),C=i.useRef(),L=(0,a.u)(),k=i.useRef(null),A=(0,c.u)(k,m.ref,e),R=t=>e=>{if(t){const n=k.current;void 0===e?t(n):t(n,e)}},N=R(b),M=R(((t,e)=>{(0,s.r)(t);const{duration:n,delay:r,easing:o}=(0,s.g)({style:O,timeout:_,easing:h},{mode:"enter"});let i;"auto"===_?(i=L.transitions.getAutoHeightDuration(t.clientHeight),C.current=i):i=n,t.style.transition=[L.transitions.create("opacity",{duration:i,delay:r}),L.transitions.create("transform",{duration:d?i:.666*i,delay:r,easing:o})].join(","),g&&g(t,e)})),I=R(P),z=R(T),G=R((t=>{const{duration:e,delay:n,easing:r}=(0,s.g)({style:O,timeout:_,easing:h},{mode:"exit"});let o;"auto"===_?(o=L.transitions.getAutoHeightDuration(t.clientHeight),C.current=o):o=e,t.style.transition=[L.transitions.create("opacity",{duration:o,delay:n}),L.transitions.create("transform",{duration:d?o:.666*o,delay:d?n:n||.333*o,easing:r})].join(","),t.style.opacity=0,t.style.transform=p(.75),x&&x(t)})),D=R(E);return i.useEffect((()=>()=>{clearTimeout(S.current)}),[]),(0,l.jsx)(j,(0,r._)({appear:y,in:v,nodeRef:k,onEnter:M,onEntered:I,onEntering:N,onExit:G,onExited:D,onExiting:z,addEndListener:t=>{"auto"===_&&(S.current=setTimeout(t,C.current||0)),n&&n(k.current,t)},timeout:"auto"===_?null:_},w,{children:(t,e)=>i.cloneElement(m,(0,r._)({style:(0,r._)({opacity:0,transform:p(.75),visibility:"exited"!==t||v?void 0:"hidden"},f[t],O,m.props.style),ref:A},e))}))}));y.muiSupportAuto=!0;var m=y},21121:(t,e,n)=>{n.d(e,{P:()=>j,a:()=>x,b:()=>O,c:()=>_,d:()=>m,g:()=>b,p:()=>h});var r=n(16276),o=n(62614),i=n(14041),a=(n(95899),n(31085)),s=n(70297),l=n(32738),c=n(90623),u=(n(40665),n(71610),n(40311),n(90717),n(26135)),p=n(88784),f=n(13514),d=n(37239),y=n(50501);function m(t){return(0,o.a)("MuiPopover",t)}var h=(0,o.g)("MuiPopover",["root","paper"]);const v=["onEntering"],g=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"],P=["slotProps"];function b(t,e){let n=0;return"number"==typeof e?n=e:"center"===e?n=t.height/2:"bottom"===e&&(n=t.height),n}function x(t,e){let n=0;return"number"==typeof e?n=e:"center"===e?n=t.width/2:"right"===e&&(n=t.width),n}function E(t){return[t.horizontal,t.vertical].map((t=>"number"==typeof t?`${t}px`:t)).join(" ")}function T(t){return"function"==typeof t?t():t}const O=(0,o.s)(s.M,{name:"MuiPopover",slot:"Root",overridesResolver:(t,e)=>e.root})({}),_=(0,o.s)(l.P,{name:"MuiPopover",slot:"Paper",overridesResolver:(t,e)=>e.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0});var j=i.forwardRef((function(t,e){var n,s,l;const h=(0,o.u)({props:t,name:"MuiPopover"}),{action:j,anchorEl:w,anchorOrigin:S={vertical:"top",horizontal:"left"},anchorPosition:C,anchorReference:L="anchorEl",children:k,className:A,container:R,elevation:N=8,marginThreshold:M=16,open:I,PaperProps:z={},slots:G,slotProps:D,transformOrigin:F={vertical:"top",horizontal:"left"},TransitionComponent:H=u.G,transitionDuration:B="auto",TransitionProps:{onEntering:$}={}}=h,V=(0,o._)(h.TransitionProps,v),W=(0,o._)(h,g),q=null!=(n=null==D?void 0:D.paper)?n:z,Y=i.useRef(),U=(0,p.u)(Y,q.ref),X=(0,r._)({},h,{anchorOrigin:S,anchorReference:L,elevation:N,marginThreshold:M,externalPaperSlotProps:q,transformOrigin:F,TransitionComponent:H,transitionDuration:B,TransitionProps:V}),Z=(t=>{const{classes:e}=t;return(0,o.c)({root:["root"],paper:["paper"]},m,e)})(X),J=i.useCallback((()=>{if("anchorPosition"===L)return C;const t=T(w),e=(t&&1===t.nodeType?t:(0,f.o)(Y.current).body).getBoundingClientRect();return{top:e.top+b(e,S.vertical),left:e.left+x(e,S.horizontal)}}),[w,S.horizontal,S.vertical,C,L]),K=i.useCallback((t=>({vertical:b(t,F.vertical),horizontal:x(t,F.horizontal)})),[F.horizontal,F.vertical]),Q=i.useCallback((t=>{const e={width:t.offsetWidth,height:t.offsetHeight},n=K(e);if("none"===L)return{top:null,left:null,transformOrigin:E(n)};const r=J();let o=r.top-n.vertical,i=r.left-n.horizontal;const a=o+e.height,s=i+e.width,l=(0,d.o)(T(w)),c=l.innerHeight-M,u=l.innerWidth-M;if(o<M){const t=o-M;o-=t,n.vertical+=t}else if(a>c){const t=a-c;o-=t,n.vertical+=t}if(i<M){const t=i-M;i-=t,n.horizontal+=t}else if(s>u){const t=s-u;i-=t,n.horizontal+=t}return{top:`${Math.round(o)}px`,left:`${Math.round(i)}px`,transformOrigin:E(n)}}),[w,L,J,K,M]),[tt,et]=i.useState(I),nt=i.useCallback((()=>{const t=Y.current;if(!t)return;const e=Q(t);null!==e.top&&(t.style.top=e.top),null!==e.left&&(t.style.left=e.left),t.style.transformOrigin=e.transformOrigin,et(!0)}),[Q]);i.useEffect((()=>{I&&nt()})),i.useImperativeHandle(j,(()=>I?{updatePosition:()=>{nt()}}:null),[I,nt]),i.useEffect((()=>{if(!I)return;const t=(0,d.d)((()=>{nt()})),e=(0,d.o)(w);return e.addEventListener("resize",t),()=>{t.clear(),e.removeEventListener("resize",t)}}),[w,I,nt]);let rt=B;"auto"!==B||H.muiSupportAuto||(rt=void 0);const ot=R||(w?(0,f.o)(T(w)).body:void 0),it=null!=(s=null==G?void 0:G.root)?s:O,at=null!=(l=null==G?void 0:G.paper)?l:_,st=(0,c.u)({elementType:at,externalSlotProps:(0,r._)({},q,{style:tt?q.style:(0,r._)({},q.style,{opacity:0})}),additionalProps:{elevation:N,ref:U},ownerState:X,className:(0,o.l)(Z.paper,null==q?void 0:q.className)}),lt=(0,c.u)({elementType:it,externalSlotProps:(null==D?void 0:D.root)||{},externalForwardedProps:W,additionalProps:{ref:e,slotProps:{backdrop:{invisible:!0}},container:ot,open:I},ownerState:X,className:(0,o.l)(Z.root,A)}),{slotProps:ct}=lt,ut=(0,o._)(lt,P);return(0,a.jsx)(it,(0,r._)({},ut,!(0,y.i)(it)&&{slotProps:ct},{children:(0,a.jsx)(H,(0,r._)({appear:!0,in:I,onEntering:(t,e)=>{$&&$(t,e),nt()},onExited:()=>{et(!1)},timeout:rt},V,{children:(0,a.jsx)(at,(0,r._)({},st,{children:k}))}))}))}))},40665:(t,e,n)=>{n.d(e,{T:()=>s,_:()=>a,a:()=>i});var r=n(95899),o=n(14041);r.P.oneOfType([r.P.func,r.P.object]);function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,i(t,e)}var s=o.createContext(null)},67853:(t,e,n)=>{function r(t){if(null==t)throw new TypeError("Cannot destructure "+t)}function o(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}function i(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}n.d(e,{_:()=>o,a:()=>i,b:()=>r})},63145:(t,e,n)=>{function r(t,e){return()=>null}n.d(e,{c:()=>r})},19224:(t,e,n)=>{function r(t){var e,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}function o(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(o&&(o+=" "),o+=e);return o}n.d(e,{c:()=>o})},90717:(t,e,n)=>{var r=n(95899);(0,n(63145).c)(r.P.elementType,(function(t,e,n,r,o){const i=t[e],a=o||e;if(null==i||"undefined"==typeof window)return null;let s;return"function"!=typeof i||function(t){const{prototype:e={}}=t;return Boolean(e.isReactComponent)}(i)||(s="Did you accidentally provide a plain function component instead?"),void 0!==s?new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`):null}))},30750:(t,e,n)=>{n.d(e,{e:()=>s});var r=n(16276),o=n(62614);const i=["sx"],a=t=>{var e,n;const r={systemProps:{},otherProps:{}},i=null!=(e=null==t||null==(n=t.theme)?void 0:n.unstable_sxConfig)?e:o.I;return Object.keys(t).forEach((e=>{i[e]?r.systemProps[e]=t[e]:r.otherProps[e]=t[e]})),r};function s(t){const{sx:e}=t,n=(0,o._)(t,i),{systemProps:s,otherProps:l}=a(n);let c;return c=Array.isArray(e)?[s,...e]:"function"==typeof e?(...t)=>{const n=e(...t);return(0,o.ai)(n)?(0,r._)({},s,n):s}:(0,r._)({},s,e),(0,r._)({},l,{sx:c})}},73418:(t,e,n)=>{n.r(e),n.d(e,{default:()=>f});var r=n(67853),o=(n(67588),n(95899)),i=n(14041),a=n(26911),s=n(96888),l=n(31085),c=n(21121),u=n(36325);n(49494),n(62614),n(16276),n(49152),n(86445),n(44105),n(60947),n(66327),n(30936),n(12367),n(68037),n(92855),n(73265),n(22896),n(88784),n(5278),n(14613),n(75627),n(84654),n(42757),n(64012),n(54172),n(85832),n(70297),n(9532),n(1733),n(40665),n(43144),n(71610),n(90623),n(32738),n(40311),n(90717),n(26135),n(30750);const p=["linkProps","popoverProps","title","content"],f=t=>{let{linkProps:e,popoverProps:n,title:o,content:f}=t,d=(0,r._)(t,p);const{analytics:y={},onAnalytics:m}=d,{click:h}=y,[v,g]=i.useState(null),P=Boolean(v);return(0,l.jsxs)("div",{className:"sq-more-content",children:[(0,l.jsx)(s.default,Object.assign({},e,{className:"sq-more-content__link",onAnalytics:m,onClick:t=>{g(t.currentTarget),m&&h&&m(h)}})),(0,l.jsx)(c.P,Object.assign({open:P,className:"sq-more-content__popover",anchorEl:v,onClose:()=>{g(null)},anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"}},n,{children:(0,l.jsxs)(u.B,{p:2,children:[o&&(0,l.jsx)("div",{children:(0,a.Ay)(o)}),(0,a.Ay)(f)]})}))]})};f.propTypes={linkProps:o.P.object,className:o.P.string,content:o.P.string,onClick:o.P.func}},49494:(t,e,n)=>{n.d(e,{o:()=>w});var r=n(95899),o=n(62614),i={},a=r.s,s=r.Y,l=r.p,c=r.d,u=r.F,p=r.Z;i.f=a&&!s?Object.defineProperties:function(t,e){c(t);for(var n,r=u(e),o=p(e),i=o.length,a=0;i>a;)l.f(t,n=o[a++],r[n]);return t};var f,d=r.d,y=i,m=r.$,h=r.a0,v=o.af,g=r.G,P=r.C,b="prototype",x="script",E=P("IE_PROTO"),T=function(){},O=function(t){return"<"+x+">"+t+"</"+x+">"},_=function(t){t.write(O("")),t.close();var e=t.parentWindow.Object;return t=null,e},j=function(){try{f=new ActiveXObject("htmlfile")}catch(o){}var t,e,n;j="undefined"!=typeof document?document.domain&&f?_(f):(e=g("iframe"),n="java"+x+":",e.style.display="none",v.appendChild(e),e.src=String(n),(t=e.contentWindow.document).open(),t.write(O("document.F=Object")),t.close(),t.F):_(f);for(var r=m.length;r--;)delete j[b][m[r]];return j()};h[E]=!0;var w=Object.create||function(t,e){var n;return null!==t?(T[b]=d(t),n=new T,T[b]=null,n[E]=t):n=j(),void 0===e?n:y.f(n,e)}},67588:(t,e,n)=>{var r=n(95899),o=n(49494),i=n(62614),a=r.w,s=o.o,l=r.p.f,c=a("unscopables"),u=Array.prototype;null==u[c]&&l(u,c,{configurable:!0,value:s(null)});var p,f,d,y=!(0,r.b)((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),m=r.B,h=r.n,v=r.t,g=y,P=(0,r.C)("IE_PROTO"),b=Object,x=b.prototype,E=g?b.getPrototypeOf:function(t){var e=v(t);if(m(e,P))return e[P];var n=e.constructor;return h(n)&&e instanceof n?n.prototype:e instanceof b?x:null},T=r.b,O=r.n,_=r.o,j=E,w=r.x,S=(0,r.w)("iterator"),C=!1;[].keys&&("next"in(d=[].keys())?(f=j(j(d)))!==Object.prototype&&(p=f):C=!0),(!_(p)||T((function(){var t={};return p[S].call(t)!==t})))&&(p={}),O(p[S])||w(p,S,(function(){return this}));var L={IteratorPrototype:p,BUGGY_SAFARI_ITERATORS:C},k=L.IteratorPrototype,A=o.o,R=r.D,N=i.j,M=i.k,I=function(){return this},z=r._,G=r.c,D=r.E,F=r.n,H=function(t,e,n,r){var o=e+" Iterator";return t.prototype=A(k,{next:R(+!r,n)}),N(t,o,!1),M[o]=I,t},B=E,$=i.o,V=i.j,W=r.y,q=r.x,Y=r.w,U=i.k,X=L,Z=D.PROPER,J=D.CONFIGURABLE,K=X.IteratorPrototype,Q=X.BUGGY_SAFARI_ITERATORS,tt=Y("iterator"),et="keys",nt="values",rt="entries",ot=function(){return this},it=r.F,at=function(t){u[c][t]=!0},st=i.k,lt=r.A,ct=r.p.f,ut=function(t,e,n,r,o,i,a){H(n,e,r);var s,l,c,u=function(t){if(t===o&&m)return m;if(!Q&&t in d)return d[t];switch(t){case et:case nt:case rt:return function(){return new n(this,t)}}return function(){return new n(this)}},p=e+" Iterator",f=!1,d=t.prototype,y=d[tt]||d["@@iterator"]||o&&d[o],m=!Q&&y||u(o),h="Array"==e&&d.entries||y;if(h&&(s=B(h.call(new t)))!==Object.prototype&&s.next&&(B(s)!==K&&($?$(s,K):F(s[tt])||q(s,tt,ot)),V(s,p,!0)),Z&&o==nt&&y&&y.name!==nt&&(J?W(d,"name",nt):(f=!0,m=function(){return G(y,this)})),o)if(l={values:u(nt),keys:i?m:u(et),entries:u(rt)},a)for(c in l)(Q||f||!(c in d))&&q(d,c,l[c]);else z({target:e,proto:!0,forced:Q||f},l);return d[tt]!==m&&q(d,tt,m,{name:o}),U[e]=m,l},pt=function(t,e){return{value:t,done:e}},ft=r.s,dt="Array Iterator",yt=lt.set,mt=lt.getterFor(dt),ht=ut(Array,"Array",(function(t,e){yt(this,{type:dt,target:it(t),index:0,kind:e})}),(function(){var t=mt(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,pt(void 0,!0)):pt("keys"==n?r:"values"==n?e[r]:[r,e[r]],!1)}),"values"),vt=st.Arguments=st.Array;if(at("keys"),at("values"),at("entries"),ft&&"values"!==vt.name)try{ct(vt,"name",{value:"values"})}catch(At){}var gt=(0,r.G)("span").classList,Pt=gt&&gt.constructor&&gt.constructor.prototype,bt=Pt===Object.prototype?void 0:Pt,xt=r.u,Et={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Tt=bt,Ot=ht,_t=r.y,jt=r.w,wt=jt("iterator"),St=jt("toStringTag"),Ct=Ot.values,Lt=function(t,e){if(t){if(t[wt]!==Ct)try{_t(t,wt,Ct)}catch(At){t[wt]=Ct}if(t[St]||_t(t,St,e),Et[e])for(var n in Ot)if(t[n]!==Ot[n])try{_t(t,n,Ot[n])}catch(At){t[n]=Ot[n]}}};for(var kt in Et)Lt(xt[kt]&&xt[kt].prototype,kt);Lt(Tt,"DOMTokenList")}}]);