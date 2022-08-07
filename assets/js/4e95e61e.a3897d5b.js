"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[3175],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=s.createContext({}),p=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return s.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},f=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=p(n),u=r,d=f["".concat(c,".").concat(u)]||f[u]||m[u]||i;return n?s.createElement(d,a(a({ref:t},l),{},{components:n})):s.createElement(d,a({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}f.displayName="MDXCreateElement"},98035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var s=n(87462),r=(n(67294),n(3905));const i={id:"environment-specific-tests",title:"Environment-specific Tests"},a=void 0,o={unversionedId:"reference/test/aspects/environment-specific-tests",id:"reference/test/aspects/environment-specific-tests",title:"Environment-specific Tests",description:"OS-specific Tests",source:"@site/docs/reference/test/aspects/environment-specific-tests.md",sourceDirName:"reference/test/aspects",slug:"/reference/test/aspects/environment-specific-tests",permalink:"/reference/test/aspects/environment-specific-tests",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/aspects/environment-specific-tests.md",tags:[],version:"current",frontMatter:{id:"environment-specific-tests",title:"Environment-specific Tests"},sidebar:"reference-sidebar",previous:{title:"Debugging and Diagnostics",permalink:"/reference/test/aspects/debugging-and-diagnostics"},next:{title:"Execution Strategy",permalink:"/reference/test/aspects/execution-strategy"}},c={},p=[{value:"OS-specific Tests",id:"os-specific-tests",level:2},{value:"Platform-specific Tests",id:"platform-specific-tests",level:2},{value:"Version-specific Tests",id:"version-specific-tests",level:2}],l={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"os-specific-tests"},"OS-specific Tests"),(0,r.kt)("p",null,"To run a test on a specific operating system, we can use one of the ",(0,r.kt)("inlineCode",{parentName:"p"},"unix"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"mac")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"windows")," test aspects or a combination of them. Additionally, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"os")," test aspect directly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\n\nsuite("os")(\n  test("unix test") {\n    ZIO.attempt("running on unix/linux os")\n      .debug\n      .map(_ => assertTrue(true))\n  } @@ TestAspect.unix,\n  test("macos test") {\n    ZIO.attempt("running on macos")\n      .debug\n      .map(_ => assertTrue(true))\n  } @@ TestAspect.os(_.isMac)\n)\n')),(0,r.kt)("h2",{id:"platform-specific-tests"},"Platform-specific Tests"),(0,r.kt)("p",null,"Sometimes we have platform-specific tests. Instead of creating separate sources for each platform to test those tests, we can use a proper aspect to run those tests on a specific platform."),(0,r.kt)("p",null,"To run a test on a specific platform, we can use one of the ",(0,r.kt)("inlineCode",{parentName:"p"},"jvm"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"js"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"native")," test aspects or a combination of them. If we want to run our test only on one of these platforms, we can use one of the ",(0,r.kt)("inlineCode",{parentName:"p"},"jvmOnly"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"jsOnly"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"nativeOnly")," test aspects. To exclude one of these platforms, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"exceptJs"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"exceptJVM"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"exceptNative")," test aspects:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\n\ntest("Java virtual machine name can be accessed") {\n  for {\n    vm <- live(System.property("java.vm.name"))\n  } yield\n    assertTrue(vm.get.contains("VM"))\n} @@ TestAspect.jvmOnly\n')),(0,r.kt)("h2",{id:"version-specific-tests"},"Version-specific Tests"),(0,r.kt)("p",null,"Various test aspects can be used to run tests for specific versions of Scala, including ",(0,r.kt)("inlineCode",{parentName:"p"},"scala2"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"scala211"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"scala212"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"scala213"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"dotty"),". As in the previous section, these test aspects have corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"*only")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"except*")," versions."))}m.isMDXComponent=!0}}]);