"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[19104],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return t?n.createElement(m,c(c({ref:r},p),{},{components:t})):n.createElement(m,c({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},33548:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const a={id:"scopedref",title:"ScopedRef: Mutable Reference For Resources",sidebar_label:"ScopedRef"},c=void 0,i={unversionedId:"reference/resource/scopedref",id:"reference/resource/scopedref",title:"ScopedRef: Mutable Reference For Resources",description:"ScopedRef is a resourceful version of Ref data type. So it is a Ref for resourceful effects.",source:"@site/docs/reference/resource/scopedref.md",sourceDirName:"reference/resource",slug:"/reference/resource/scopedref",permalink:"/reference/resource/scopedref",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/resource/scopedref.md",tags:[],version:"current",frontMatter:{id:"scopedref",title:"ScopedRef: Mutable Reference For Resources",sidebar_label:"ScopedRef"},sidebar:"reference-sidebar",previous:{title:"ZPool",permalink:"/reference/resource/zpool"},next:{title:"Introduction to ZIO Streams",permalink:"/reference/stream/"}},s={},l=[{value:"Operations",id:"operations",level:2},{value:"Construction",id:"construction",level:2},{value:"Example",id:"example",level:2}],p={toc:l};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ScopedRef")," is a resourceful version of ",(0,o.kt)("inlineCode",{parentName:"p"},"Ref")," data type. So it is a ",(0,o.kt)("inlineCode",{parentName:"p"},"Ref")," for resourceful effects."),(0,o.kt)("h2",{id:"operations"},"Operations"),(0,o.kt)("p",null,"There are two basic operations: get and set:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"ScopedRef#get")," returns the current value of the scoped ref.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"ScopedRef#set")," sets the scoped ref to a new value by acquiring the new resource to create a new value of the scoped ref. Setting a new value releases the old resource automatically."))),(0,o.kt)("h2",{id:"construction"},"Construction"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ScopedRef")," has two constructors:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"object ScopedRef {\n  def make[A](a: => A): ZIO[Scope, Nothing, ScopedRef[A]] = ???\n  def fromAcquire[R, E, A](acquire: ZIO[R, E, A]): ZIO[R with Scope, E, ScopedRef[A]] = ???\n}\n")),(0,o.kt)("p",null,"So we have two options to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"ScopedRef"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"ScopedRef.make")," creates a scoped ref from an ordinary value. We can use this constructor when we don't need to acquire a resource to create a value of the scoped ref, for example, when we have a constant value.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"ScopedRef.fromAcquire")," creates a scoped ref from an effect that resourcefully produces a value."))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"ScopedRef")," is resourceful, so its lifetimes is scoped. Whenever we don't need it anymore, we can release it by using ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#scoped")," combinator.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Let's see how changing the value of a ",(0,o.kt)("inlineCode",{parentName:"p"},"ScopedRef")," automatically releases the old resource:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  def run = for {\n    _ <- ZIO.unit\n    r1 = ZIO.acquireRelease(\n           ZIO\n             .debug("acquiring the first resource")\n             .as(5)\n         )(_ => ZIO.debug("releasing the first resource"))\n    r2 = ZIO.acquireRelease(\n           ZIO\n             .debug("acquiring the second resource")\n             .as(10)\n         )(_ => ZIO.debug("releasing the second resource"))\n    sref <- ScopedRef.fromAcquire(r1)\n    _    <- sref.get.debug\n    _    <- sref.set(r2)\n    _    <- sref.get.debug\n  } yield ()\n}\n')),(0,o.kt)("p",null,"The output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"acquiring the first resource\n5\nacquiring the second resource\nreleasing the first resource\n10\nreleasing the second resource\n")))}u.isMDXComponent=!0}}]);