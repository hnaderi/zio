"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[609],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>f});var a=n(67294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=a.createContext({}),s=function(e){var r=a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},c=function(e){var r=s(e.components);return a.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),f=t,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||i;return n?a.createElement(d,l(l({ref:r},c),{},{components:n})):a.createElement(d,l({ref:r},c))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:t,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15310:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),t=(n(67294),n(3905));const i={id:"sequential-and-parallel-errors",title:"Sequential and Parallel Errors"},l=void 0,o={unversionedId:"reference/error-management/sequential-and-parallel-errors",id:"reference/error-management/sequential-and-parallel-errors",title:"Sequential and Parallel Errors",description:"A simple and regular ZIO application usually fails with one error, which is the first error encountered by the ZIO runtime:",source:"@site/docs/reference/error-management/sequential-and-parallel-errors.md",sourceDirName:"reference/error-management",slug:"/reference/error-management/sequential-and-parallel-errors",permalink:"/reference/error-management/sequential-and-parallel-errors",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/error-management/sequential-and-parallel-errors.md",tags:[],version:"current",frontMatter:{id:"sequential-and-parallel-errors",title:"Sequential and Parallel Errors"},sidebar:"reference-sidebar",previous:{title:"Typed Errors Guarantees",permalink:"/reference/error-management/typed-errors-guarantees"},next:{title:"1. Catching",permalink:"/reference/error-management/recovering/catching"}},p={},s=[],c={toc:s};function u(e){let{components:r,...n}=e;return(0,t.kt)("wrapper",(0,a.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"A simple and regular ZIO application usually fails with one error, which is the first error encountered by the ZIO runtime:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  val fail = ZIO.fail("Oh uh!")\n  val die = ZIO.dieMessage("Boom!")\n  val interruption = ZIO.interrupt\n\n  def run = (fail <*> die) *> interruption\n}\n')),(0,t.kt)("p",null,'This application will fail with the first error which is "Oh uh!":'),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'timestamp=2022-03-09T09:50:22.067072131Z level=ERROR thread=#zio-fiber-0 message="Exception in thread "zio-fiber-2" java.lang.String: Oh uh!\n    at <empty>.MainApp.fail(MainApp.scala:4)"\n')),(0,t.kt)("p",null,"In some cases, we may run into multiple errors. When we perform parallel computations, the application may fail due to multiple errors:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  def run = ZIO.fail("Oh!") <&> ZIO.fail("Uh!")\n}\n')),(0,t.kt)("p",null,"If we run this application, we can see two exceptions in two different fibers that caused the failure (",(0,t.kt)("inlineCode",{parentName:"p"},"zio-fiber-0")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"zio-fiber-14"),"):"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'timestamp=2022-03-09T08:05:48.703035927Z level=ERROR thread=#zio-fiber-0 message="Exception in thread "zio-fiber-13" java.lang.String: Oh!\n    at <empty>.MainApp.run(MainApp.scala:4)\nException in thread "zio-fiber-14" java.lang.String: Uh!\n    at <empty>.MainApp.run(MainApp.scala:4)"\n')),(0,t.kt)("p",null,"ZIO has a combinator called ",(0,t.kt)("inlineCode",{parentName:"p"},"ZIO#parallelErrors")," that exposes all parallel failure errors in the error channel:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval result: ZIO[Any, ::[String], Nothing] =\n  (ZIO.fail("Oh uh!") <&> ZIO.fail("Oh Error!")).parallelErrors\n')),(0,t.kt)("p",null,"Note that this operator is only for failures, not defects or interruptions."),(0,t.kt)("p",null,"Also, when we work with resource-safety operators like ",(0,t.kt)("inlineCode",{parentName:"p"},"ZIO#ensuring")," we can have multiple sequential errors. Why? because regardless of the original effect has any errors or not, the finalizer is uninterruptible. So the finalizer will be run. Unless the finalizer should be an unexceptional effect (",(0,t.kt)("inlineCode",{parentName:"p"},"URIO"),"), it may die because of a defect. Therefore, it creates multiple sequential errors:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  def run = ZIO.fail("Oh uh!").ensuring(ZIO.dieMessage("Boom!"))\n}\n')),(0,t.kt)("p",null,"When we run this application, we can see that the original failure (",(0,t.kt)("inlineCode",{parentName:"p"},"Oh uh!"),") was suppressed by another defect (",(0,t.kt)("inlineCode",{parentName:"p"},"Boom!"),"):"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'timestamp=2022-03-09T08:30:56.563179230Z level=ERROR thread=#zio-fiber-0 message="Exception in thread "zio-fiber-2" java.lang.String: Oh uh!\n    at <empty>.MainApp.run(MainApp.scala:4)\n    Suppressed: java.lang.RuntimeException: Boom!\n        at <empty>.MainApp.run(MainApp.scala:4)"\n')))}u.isMDXComponent=!0}}]);