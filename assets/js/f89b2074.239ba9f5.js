"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[5599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={id:"index",title:"Introduction"},i=void 0,s={unversionedId:"reference/test/services/index",id:"reference/test/services/index",title:"Introduction",description:"ZIO Test has out of the box test implementations for all built-in ZIO services, such as Console, Clock, Random and System through the following modules:",source:"@site/docs/reference/test/services/index.md",sourceDirName:"reference/test/services",slug:"/reference/test/services/",permalink:"/reference/test/services/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/services/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction"},sidebar:"reference-sidebar",previous:{title:"Spec",permalink:"/reference/test/spec"},next:{title:"TestConsole",permalink:"/reference/test/services/console"}},l={},c=[],m={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ZIO Test has out of the box test implementations for all built-in ZIO services, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Console"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Clock"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Random")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"System")," through the following modules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/reference/test/services/console"},(0,o.kt)("inlineCode",{parentName:"a"},"TestConsole"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/reference/test/services/clock"},(0,o.kt)("inlineCode",{parentName:"a"},"TestClock"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/reference/test/services/random"},(0,o.kt)("inlineCode",{parentName:"a"},"TestRandom"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/reference/test/services/system"},(0,o.kt)("inlineCode",{parentName:"a"},"TestSystem")))),(0,o.kt)("p",null,"Stability is what we expect from tests, at least those we consider unit tests. Consecutive runs should yield the same results and take more or less the same amount of time."),(0,o.kt)("p",null,"External services, such as payment APIs, object storages, HTTP APIs, are the biggest source of complexity during testing. It is normal to hide these kinds of services behind an interface and provide test instances to regain control and determinism."),(0,o.kt)("p",null,"However, there is another source of complexity that comes from the local infrastructure that is also hard to control without building prior abstractions. Things like stdin/stdout, clocks, random generators, schedulers can make writing tests hard or even impossible."),(0,o.kt)("p",null,"Fortunately, ZIO abstracted most of it in its runtime under ",(0,o.kt)("inlineCode",{parentName:"p"},"Environment")," type. Thanks to this design ZIO Test could easily provide its own implementation named ",(0,o.kt)("inlineCode",{parentName:"p"},"TestEnvironment")," which gives us test implementations of mentioned infrastructure."),(0,o.kt)("p",null,"If we are using ZIO Test and extending ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIOSpecDefault")," a ",(0,o.kt)("inlineCode",{parentName:"p"},"TestEnvironment")," containing all of them will be automatically provided to each of our tests. Otherwise, the easiest way to use the test implementations in ZIO Test is by providing the ",(0,o.kt)("inlineCode",{parentName:"p"},"TestEnvironment")," to our program:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"myProgram.provide(testEnvironment)\n")),(0,o.kt)("p",null,"Then all environmental effects, such as printing to the console or generating random numbers, will be implemented by the ",(0,o.kt)("inlineCode",{parentName:"p"},"TestEnvironment"),' and will be fully testable. When we do need to access the "live" environment, for example to print debugging information to the console, we just use the ',(0,o.kt)("inlineCode",{parentName:"p"},"live")," combinator along with the effect as our normally would. "),(0,o.kt)("p",null,"If we are only interested in one of the test implementations for our application, we can also access them a la carte through the ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," method on each module. Each test module requires some data on initialization:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"myProgram.provideCustom(TestConsole.make(TestConsole.Data()))\n")),(0,o.kt)("p",null,"Finally, we can create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Test")," object that implements the test interface directly using the ",(0,o.kt)("inlineCode",{parentName:"p"},"makeTest")," method. This can be useful when we want to access some testing functionality without using the environment type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"for {\n  testRandom <- TestRandom.makeTest(TestRandom.DefaultData)\n  n          <- testRandom.nextInt\n} yield n\n")),(0,o.kt)("p",null,"This can also be useful when we are creating a more complex environment to provide the implementation for test services that we mix in."))}p.isMDXComponent=!0}}]);