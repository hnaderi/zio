"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[6911],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,u=function(e,t){if(null==e)return{};var r,n,u={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(u[r]=e[r]);return u}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(u[r]=e[r])}return u}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,u=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=p(r),d=u,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var a=r.length,i=new Array(a);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:u,i[1]=o;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5140:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(87462),u=(r(67294),r(3905));const a={id:"with-future",title:"How to Interop with Future?",sidebar_label:"Scala's Future"},i=void 0,o={unversionedId:"guides/interop/with-future",id:"guides/interop/with-future",title:"How to Interop with Future?",description:"Scala Future",source:"@site/docs/guides/interop/with-future.md",sourceDirName:"guides/interop",slug:"/guides/interop/with-future",permalink:"/guides/interop/with-future",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/guides/interop/with-future.md",tags:[],version:"current",frontMatter:{id:"with-future",title:"How to Interop with Future?",sidebar_label:"Scala's Future"},sidebar:"guides-sidebar",previous:{title:"Cats Effect",permalink:"/guides/interop/with-cats-effect"},next:{title:"Java",permalink:"/guides/interop/with-java"}},l={},p=[{value:"Scala Future",id:"scala-future",level:2},{value:"From Future",id:"from-future",level:3},{value:"To Future",id:"to-future",level:3},{value:"Run to Future",id:"run-to-future",level:2}],c={toc:p};function s(e){let{components:t,...r}=e;return(0,u.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"scala-future"},"Scala Future"),(0,u.kt)("p",null,"Basic interoperability with Scala's ",(0,u.kt)("inlineCode",{parentName:"p"},"Future")," is now provided by ZIO, and does not require a separate module."),(0,u.kt)("h3",{id:"from-future"},"From Future"),(0,u.kt)("p",null,"Scala's ",(0,u.kt)("inlineCode",{parentName:"p"},"Future")," can be converted into a ZIO effect with ",(0,u.kt)("inlineCode",{parentName:"p"},"ZIO.fromFuture"),":"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-scala"},'def loggedFuture[A](future: ExecutionContext => Future[A]): UIO[Task[A]] = {\n  ZIO.fromFuture { implicit ec =>\n    future(ec).flatMap { result =>\n      Future(println("Future succeeded with " + result)).map(_ => result)\n    }\n  }\n}\n')),(0,u.kt)("p",null,"Scala's ",(0,u.kt)("inlineCode",{parentName:"p"},"Future")," can also be converted into a ",(0,u.kt)("inlineCode",{parentName:"p"},"Fiber")," with ",(0,u.kt)("inlineCode",{parentName:"p"},"Fiber.fromFuture"),":"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-scala"},"def futureToFiber[A](future: => Future[A]): Fiber[Throwable, A] = \n  Fiber.fromFuture(future)\n")),(0,u.kt)("p",null,"This is a pure operation, given any sensible notion of fiber equality."),(0,u.kt)("h3",{id:"to-future"},"To Future"),(0,u.kt)("p",null,"A ZIO ",(0,u.kt)("inlineCode",{parentName:"p"},"Task")," effect can be converted into a ",(0,u.kt)("inlineCode",{parentName:"p"},"Future")," with ",(0,u.kt)("inlineCode",{parentName:"p"},"ZIO#toFuture"),":"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-scala"},"def taskToFuture[A](task: Task[A]): UIO[Future[A]] = \n  task.toFuture\n")),(0,u.kt)("p",null,"Because converting a ",(0,u.kt)("inlineCode",{parentName:"p"},"Task")," into an (eager) ",(0,u.kt)("inlineCode",{parentName:"p"},"Future")," is effectful, the return value of ",(0,u.kt)("inlineCode",{parentName:"p"},"ZIO#toFuture")," is an effect. To actually begin the computation, and access the started ",(0,u.kt)("inlineCode",{parentName:"p"},"Future"),", it is necessary to execute the effect with a runtime."),(0,u.kt)("p",null,"A ZIO ",(0,u.kt)("inlineCode",{parentName:"p"},"Fiber")," can be converted into a ",(0,u.kt)("inlineCode",{parentName:"p"},"Future")," with ",(0,u.kt)("inlineCode",{parentName:"p"},"Fiber#toFuture"),":"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-scala"},"def fiberToFuture[A](fiber: Fiber[Throwable, A]): UIO[Future[A]] = \n  fiber.toFuture\n")),(0,u.kt)("h2",{id:"run-to-future"},"Run to Future"),(0,u.kt)("p",null,"The ",(0,u.kt)("inlineCode",{parentName:"p"},"Runtime")," type has a method ",(0,u.kt)("inlineCode",{parentName:"p"},"unsafeRunToFuture"),", which can execute a ZIO effect asynchronously, and return a ",(0,u.kt)("inlineCode",{parentName:"p"},"Future")," that will be completed when the execution of the effect is complete."))}s.isMDXComponent=!0}}]);