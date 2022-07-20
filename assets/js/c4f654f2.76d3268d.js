"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[713],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,d=f["".concat(i,".").concat(m)]||f[m]||p[m]||c;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,s=new Array(c);s[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<c;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9719:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const c={id:"setcount",title:"Frequency"},s=void 0,o={unversionedId:"references/metrics/setcount",id:"references/metrics/setcount",title:"Frequency",description:"A Frequency represents the number of occurrences of specified values. We can think of a Frequency as a set of counters associated with each value except that new counters will automatically be created when new values are observed.",source:"@site/docs/references/metrics/setcount.md",sourceDirName:"references/metrics",slug:"/references/metrics/setcount",permalink:"/references/metrics/setcount",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/references/metrics/setcount.md",tags:[],version:"current",frontMatter:{id:"setcount",title:"Frequency"},sidebar:"references-sidebar",previous:{title:"Summary",permalink:"/references/metrics/summary"},next:{title:"MetricLabel",permalink:"/references/metrics/metriclabel"}},i={},l=[{value:"API",id:"api",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Examples",id:"examples",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Frequency")," represents the number of occurrences of specified values. We can think of a ",(0,a.kt)("inlineCode",{parentName:"p"},"Frequency")," as a set of counters associated with each value except that new counters will automatically be created when new values are observed."),(0,a.kt)("p",null,"Essentially, a ",(0,a.kt)("inlineCode",{parentName:"p"},"Frequency")," is a set of related counters sharing the same name and tags. The counters are set apart from each other by an additional configurable tag. The values of the tag represent the observed distinct values."),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("p",null,"Sets are used to count the occurrences of distinct string values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tracking number of invocations for each service, for an application that uses logical names for its services."),(0,a.kt)("li",{parentName:"ul"},"Tracking frequency of different types of failures.")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Frequency")," to observe the occurrences of unique ",(0,a.kt)("inlineCode",{parentName:"p"},"Strings"),". It can be applied to effects yielding a ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"TODO\n")),(0,a.kt)("p",null,"Now we can generate some keys within an effect and start counting the occurrences for each value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"TODO\n")))}p.isMDXComponent=!0}}]);