"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2933],{18026:(r,e,a)=>{a.d(e,{L:()=>P,g:()=>l,l:()=>c});var t=a(62614),o=a(16276),n=a(14041),i=(a(95899),a(9532)),s=a(31085);function l(r){return(0,t.a)("MuiLinearProgress",r)}var c=(0,t.g)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const u=["className","color","value","valueBuffer","variant"];let d,f,m,b,v,p,g=r=>r;const h=(0,t.a5)(d||(d=g`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),y=(0,t.a5)(f||(f=g`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),w=(0,t.a5)(m||(m=g`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),x=(r,e)=>"inherit"===e?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:"light"===r.palette.mode?(0,t.W)(r.palette[e].main,.62):(0,t.X)(r.palette[e].main,.5),C=(0,t.s)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.root,e[`color${(0,t.e)(a.color)}`],e[a.variant]]}})((({ownerState:r,theme:e})=>(0,o._)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:x(e,r.color)},"inherit"===r.color&&"buffer"!==r.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===r.variant&&{backgroundColor:"transparent"},"query"===r.variant&&{transform:"rotate(180deg)"}))),S=(0,t.s)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.dashed,e[`dashedColor${(0,t.e)(a.color)}`]]}})((({ownerState:r,theme:e})=>{const a=x(e,r.color);return(0,o._)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===r.color&&{opacity:.3},{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,t.a4)(b||(b=g`
    animation: ${0} 3s infinite linear;
  `),w)),k=(0,t.s)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${(0,t.e)(a.color)}`],("indeterminate"===a.variant||"query"===a.variant)&&e.bar1Indeterminate,"determinate"===a.variant&&e.bar1Determinate,"buffer"===a.variant&&e.bar1Buffer]}})((({ownerState:r,theme:e})=>(0,o._)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"determinate"===r.variant&&{transition:"transform .4s linear"},"buffer"===r.variant&&{zIndex:1,transition:"transform .4s linear"})),(({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,t.a4)(v||(v=g`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),h))),$=(0,t.s)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${(0,t.e)(a.color)}`],("indeterminate"===a.variant||"query"===a.variant)&&e.bar2Indeterminate,"buffer"===a.variant&&e.bar2Buffer]}})((({ownerState:r,theme:e})=>(0,o._)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==r.variant&&{backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"inherit"===r.color&&{opacity:.3},"buffer"===r.variant&&{backgroundColor:x(e,r.color),transition:"transform .4s linear"})),(({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,t.a4)(p||(p=g`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),y)));var P=n.forwardRef((function(r,e){const a=(0,t.u)({props:r,name:"MuiLinearProgress"}),{className:n,color:c="primary",value:d,valueBuffer:f,variant:m="indeterminate"}=a,b=(0,t._)(a,u),v=(0,o._)({},a,{color:c,variant:m}),p=(r=>{const{classes:e,variant:a,color:o}=r,n={root:["root",`color${(0,t.e)(o)}`,a],dashed:["dashed",`dashedColor${(0,t.e)(o)}`],bar1:["bar",`barColor${(0,t.e)(o)}`,("indeterminate"===a||"query"===a)&&"bar1Indeterminate","determinate"===a&&"bar1Determinate","buffer"===a&&"bar1Buffer"],bar2:["bar","buffer"!==a&&`barColor${(0,t.e)(o)}`,"buffer"===a&&`color${(0,t.e)(o)}`,("indeterminate"===a||"query"===a)&&"bar2Indeterminate","buffer"===a&&"bar2Buffer"]};return(0,t.c)(n,l,e)})(v),g=(0,i.u)(),h={},y={bar1:{},bar2:{}};if("determinate"===m||"buffer"===m)if(void 0!==d){h["aria-valuenow"]=Math.round(d),h["aria-valuemin"]=0,h["aria-valuemax"]=100;let r=d-100;"rtl"===g.direction&&(r=-r),y.bar1.transform=`translateX(${r}%)`}else 0;if("buffer"===m)if(void 0!==f){let r=(f||0)-100;"rtl"===g.direction&&(r=-r),y.bar2.transform=`translateX(${r}%)`}else 0;return(0,s.jsxs)(C,(0,o._)({className:(0,t.l)(p.root,n),ownerState:v,role:"progressbar"},h,{ref:e},b,{children:["buffer"===m?(0,s.jsx)(S,{className:p.dashed,ownerState:v}):null,(0,s.jsx)(k,{className:p.bar1,ownerState:v,style:y.bar1}),"determinate"===m?null:(0,s.jsx)($,{className:p.bar2,ownerState:v,style:y.bar2})]}))}))},49152:(r,e,a)=>{a.d(e,{r:()=>d});var t=a(95899),o=a(86445),n=a(60947),i=t.c,s=t.B,l=t.z,c=n.r,u=RegExp.prototype,d=function(r){var e=r.flags;return void 0!==e||"flags"in u||s(r,"flags")||!l(u,r)?e:i(c,r)},f=t.E.PROPER,m=t.x,b=t.d,v=o.t,p=t.b,g=d,h="toString",y=RegExp.prototype[h],w=p((function(){return"/a/b"!=y.call({source:"a",flags:"b"})})),x=f&&y.name!=h;(w||x)&&m(RegExp.prototype,h,(function(){var r=b(this);return"/"+v(r.source)+"/"+v(g(r))}),{unsafe:!0})},52933:(r,e,a)=>{a.r(e),a.d(e,{default:()=>s});a(49152);var t=a(31085),o=a(95899),n=a(18026);a(86445),a(44105),a(60947),a(62614),a(16276),a(14041),a(9532);const i=[{min:80,className:"red"},{min:50,className:"orange"},{min:0,className:"green"}],s=({variant:r="determinate",color:e="primary",value:a=0,className:o=""})=>{const s=a>100?100:a||0;let l;return i.forEach((r=>{if(!l&&a>=r.min)return l=r.className,!1})),(0,t.jsx)("div",{className:`sq-progress-indicator ${o} sq-progress-indicator--${l}`,children:(0,t.jsxs)("div",{className:"sq-progress-indicator__container",children:[(0,t.jsx)("div",{className:"sq-progress-indicator__bar",children:(0,t.jsx)(n.L,{className:"sq-progress-indicator__progress-bar",color:e,variant:r,value:s})}),(0,t.jsxs)("div",{className:"sq-progress-indicator__label",children:[s.toString(),s<1*a?"+":"","%"]})]})})};s.propTypes={value:o.P.number,type:o.P.string,className:o.P.string,text:o.P.string}},60947:(r,e,a)=>{a.d(e,{r:()=>o});var t=a(95899).d,o=function(){var r=t(this),e="";return r.hasIndices&&(e+="d"),r.global&&(e+="g"),r.ignoreCase&&(e+="i"),r.multiline&&(e+="m"),r.dotAll&&(e+="s"),r.unicode&&(e+="u"),r.unicodeSets&&(e+="v"),r.sticky&&(e+="y"),e}},86445:(r,e,a)=>{a.d(e,{t:()=>n});var t=a(44105).c,o=String,n=function(r){if("Symbol"===t(r))throw TypeError("Cannot convert a Symbol value to a string");return o(r)}},9532:(r,e,a)=>{a.d(e,{u:()=>o});a(14041);var t=a(62614);function o(){const r=(0,t.d)(t.ah);return r[t.T]||r}}}]);