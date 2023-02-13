"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[90393],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=i,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8731:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const a={id:"index",title:"Introduction to ZIO Metrics"},o=void 0,s={unversionedId:"reference/observability/metrics/index",id:"reference/observability/metrics/index",title:"Introduction to ZIO Metrics",description:"In highly concurrent applications, things are interconnected, so maintaining such setup to run smoothly and without application downtimes is very challenging.",source:"@site/docs/reference/observability/metrics/index.md",sourceDirName:"reference/observability/metrics",slug:"/reference/observability/metrics/",permalink:"/reference/observability/metrics/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/observability/metrics/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO Metrics"},sidebar:"reference-sidebar",previous:{title:"Logging",permalink:"/reference/observability/logging"},next:{title:"Counter",permalink:"/reference/observability/metrics/counter"}},c={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In highly concurrent applications, things are interconnected, so maintaining such setup to run smoothly and without application downtimes is very challenging. "),(0,i.kt)("p",null,"Imagine we have a complex infrastructure with lots of services. Services are replicated and distributed across our servers. So we have no insight on what happening on the across our services at level of errors, response latency, service uptime, etc. With ZIO Metrics, we can capture these different metrics and provide them to a ",(0,i.kt)("em",{parentName:"p"},"metric service")," for later investigation."),(0,i.kt)("p",null,"ZIO supports 5 types of Metrics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/reference/observability/metrics/counter"},"Counter"))," \u2014 The Counter is used for any value that increases over time like ",(0,i.kt)("em",{parentName:"li"},"request counts"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/reference/observability/metrics/gauge"},"Gauge"))," \u2014 The gauge is a single numerical value that can arbitrary goes up or down over time like ",(0,i.kt)("em",{parentName:"li"},"memory usage"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/reference/observability/metrics/histogram"},"Histogram"))," \u2014 The Histogram is used to track the distribution of a set of observed values across a set of buckets like ",(0,i.kt)("em",{parentName:"li"},"request latencies"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/reference/observability/metrics/summary"},"Summary"))," \u2014 The Summary represents a sliding window of a time series along with metrics for certain percentiles of the time series, referred to as quantiles like ",(0,i.kt)("em",{parentName:"li"},"request latencies"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/reference/observability/metrics/setcount"},"Frequency"))," \u2014 The Frequency is a metric that counts the number of occurrences of distinct string values.")),(0,i.kt)("p",null,"All ZIO Metrics are defined in the form of ZIO Aspects that can be applied to effects without changing the signature of the effect it is applied to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"TODO\n")),(0,i.kt)("p",null,"After adding metrics into our application, whenever we want we can capture snapshot of all metrics recorded by our application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"TODO\n")),(0,i.kt)("p",null,"Also, a ",(0,i.kt)("em",{parentName:"p"},"metric service")," can implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"MetricListener")," interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"TODO\n")),(0,i.kt)("p",null,"And then we can install that to our application which will be notified every time a metric is updated:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"TODO\n")))}m.isMDXComponent=!0}}]);