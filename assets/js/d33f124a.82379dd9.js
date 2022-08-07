"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[5351],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=s(r),d=i,y=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(y,l(l({ref:t},p),{},{components:r})):n.createElement(y,l({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6409:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={id:"retrying",title:"Retrying"},l=void 0,o={unversionedId:"reference/schedule/retrying",id:"reference/schedule/retrying",title:"Retrying",description:"In the case of retrying, ZIO has a ZIO#retry function, which takes a schedule as a repetition policy and returns another effect that describes an effect with repetition strategy which will retry following the failure of the original effect.",source:"@site/docs/reference/schedule/retrying.md",sourceDirName:"reference/schedule",slug:"/reference/schedule/retrying",permalink:"/reference/schedule/retrying",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/schedule/retrying.md",tags:[],version:"current",frontMatter:{id:"retrying",title:"Retrying"},sidebar:"reference-sidebar",previous:{title:"Repetition",permalink:"/reference/schedule/repetition"},next:{title:"Built-in Schedules",permalink:"/reference/schedule/built-in-schedules"}},c={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the case of retrying, ZIO has a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO#retry")," function, which takes a schedule as a repetition policy and returns another effect that describes an effect with repetition strategy which will retry following the failure of the original effect."),(0,i.kt)("p",null,"Repeat policies are used in the following functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ZIO#retry")," \u2013 Retries an effect until it succeeds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ZIO#retryOrElse")," \u2014 Retries an effect until it succeeds, with a fallback for errors.")),(0,i.kt)("p",null,"Let's see how we can create a repeated effect by using ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO#retry")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val action:       ZIO[R, E, A] = ???\nval policy: Schedule[R1, E, S] = ???\n\nval repeated = action retry policy\n\n")),(0,i.kt)("p",null,"There is another version of ",(0,i.kt)("inlineCode",{parentName:"p"},"retry")," that helps us to have a fallback strategy in case of erros, if something goes wrong we can handle that by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO#retryOrElse")," function, which helps up to add an ",(0,i.kt)("inlineCode",{parentName:"p"},"orElse")," callback that will run in case of failure of repetition failure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val action:       ZIO[R, E, A] = ???\nval policy: Schedule[R1, A, B] = ???\n\nval orElse: (E, S) => ZIO[R1, E1, A1] = ???\n\nval repeated = action retryOrElse (policy, orElse)\n")))}u.isMDXComponent=!0}}]);