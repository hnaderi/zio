"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[8713],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},33971:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={id:"examples",title:"Examples"},c=void 0,l={unversionedId:"reference/schedule/examples",id:"reference/schedule/examples",title:"Examples",description:"Let's try some example of creating and combining schedules.",source:"@site/docs/reference/schedule/examples.md",sourceDirName:"reference/schedule",slug:"/reference/schedule/examples",permalink:"/reference/schedule/examples",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/schedule/examples.md",tags:[],version:"current",frontMatter:{id:"examples",title:"Examples"},sidebar:"reference-sidebar",previous:{title:"Schedule Combinators",permalink:"/reference/schedule/combinators"},next:{title:"Introduction",permalink:"/reference/contextual/"}},i={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Let's try some example of creating and combining schedules."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Stop retrying after a specified amount of time has elapsed:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val expMaxElapsed = (Schedule.exponential(10.milliseconds) >>> Schedule.elapsed).whileOutput(_ < 30.seconds)\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Retry only when a specific exception occurs:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import scala.concurrent.TimeoutException\n\nval whileTimeout = Schedule.exponential(10.milliseconds) && Schedule.recurWhile[Throwable] {\n  case _: TimeoutException => true\n  case _ => false\n}\n")))}u.isMDXComponent=!0}}]);