"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[8894],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>b});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),f=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=f(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=f(t),b=i,d=p["".concat(l,".").concat(b)]||p[b]||u[b]||o;return t?n.createElement(d,a(a({ref:r},s),{},{components:t})):n.createElement(d,a({ref:r},s))}));function b(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var f=2;f<o;f++)a[f]=t[f];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5224:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>f});var n=t(7462),i=(t(7294),t(3905));const o={id:"fiberid",title:"FiberId"},a=void 0,c={unversionedId:"references/fiber/fiberid",id:"references/fiber/fiberid",title:"FiberId",description:"FiberId is the identity of a Fiber, described by a globally unique sequence number and the time when it began life:",source:"@site/docs/references/fiber/fiberid.md",sourceDirName:"references/fiber",slug:"/references/fiber/fiberid",permalink:"/references/fiber/fiberid",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/references/fiber/fiberid.md",tags:[],version:"current",frontMatter:{id:"fiberid",title:"FiberId"},sidebar:"references-sidebar",previous:{title:"FiberRef",permalink:"/references/fiber/fiberref"},next:{title:"Fiber.Status",permalink:"/references/fiber/fiberstatus"}},l={},f=[],s={toc:f};function u(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FiberId")," is the identity of a ",(0,i.kt)("a",{parentName:"p",href:"/references/fiber/fiber.md"},"Fiber"),", described by a globally unique sequence number and the time when it began life:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," \u2014 unique monotonically increasing sequence number ",(0,i.kt)("inlineCode",{parentName:"li"},"0,1,2,..."),", derived from an atomic counter"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"startTimeSeconds")," \u2014 UTC time seconds, derived from ",(0,i.kt)("inlineCode",{parentName:"li"},"java.lang.System.currentTimeMillis / 1000"))))}u.isMDXComponent=!0}}]);