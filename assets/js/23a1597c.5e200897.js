"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[8974],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>m});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),d=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return a?t.createElement(g,o(o({ref:n},u),{},{components:a})):t.createElement(g,o({ref:n},u))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},73360:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=a(87462),r=(a(67294),a(3905));const i={id:"managed",title:"Managed"},o=void 0,l={unversionedId:"datatypes/resource/managed",id:"version-1.x/datatypes/resource/managed",title:"Managed",description:"Managed[E, A] is a type alias for ZManaged[Any, E, A], which represents a managed resource that has no requirements, and may fail with an E, or succeed with an A.",source:"@site/versioned_docs/version-1.x/datatypes/resource/managed.md",sourceDirName:"datatypes/resource",slug:"/datatypes/resource/managed",permalink:"/version-1.x/datatypes/resource/managed",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/resource/managed.md",tags:[],version:"1.x",frontMatter:{id:"managed",title:"Managed"},sidebar:"datatypes-sidebar",previous:{title:"ZManaged",permalink:"/version-1.x/datatypes/resource/zmanaged"},next:{title:"TaskManaged",permalink:"/version-1.x/datatypes/resource/task-managed"}},s={},d=[{value:"Creating a Managed",id:"creating-a-managed",level:2},{value:"Managed with ZIO environment",id:"managed-with-zio-environment",level:2},{value:"Combining Managed",id:"combining-managed",level:2}],u={toc:d};function p(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Managed[E, A]")," is a type alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged[Any, E, A]"),", which represents a managed resource that has no requirements, and may fail with an ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),", or succeed with an ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Managed")," type alias is defined as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"type Managed[+E, +A] = ZManaged[Any, E, A]\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Managed")," is a data structure that encapsulates the acquisition and the release of a resource, which may be used by invoking the ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," method of the resource. The resource will be automatically acquired before the resource is used, and automatically released after the resource is used."),(0,r.kt)("p",null,"Resources do not survive the scope of ",(0,r.kt)("inlineCode",{parentName:"p"},"use"),", meaning that if you attempt to capture the resource, leak it from ",(0,r.kt)("inlineCode",{parentName:"p"},"use"),", and then use it after the resource has been consumed, the resource will not be valid anymore and may fail with some checked error, as per the type of the functions provided by the resource."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\ndef doSomething(queue: Queue[Int]): UIO[Unit] = IO.unit\n\nval managedResource = Managed.make(Queue.unbounded[Int])(_.shutdown)\nval usedResource: UIO[Unit] = managedResource.use { queue => doSomething(queue) }\n")),(0,r.kt)("p",null,"In this example, the queue will be created when ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," is called, and ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," will be called when ",(0,r.kt)("inlineCode",{parentName:"p"},"doSomething")," completes."),(0,r.kt)("h2",{id:"creating-a-managed"},"Creating a Managed"),(0,r.kt)("p",null,"As shown in the previous example, a ",(0,r.kt)("inlineCode",{parentName:"p"},"Managed")," can be created by passing an ",(0,r.kt)("inlineCode",{parentName:"p"},"acquire")," function and a ",(0,r.kt)("inlineCode",{parentName:"p"},"release")," function."),(0,r.kt)("p",null,"It can also be created from an effect. In this case the release function will do nothing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\ndef acquire: IO[Throwable, Int] = IO.effect(???)\n\nval managedFromEffect: Managed[Throwable, Int] = Managed.fromEffect(acquire)\n")),(0,r.kt)("p",null,"You can create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Managed")," from a pure value as well."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nval managedFromValue: Managed[Nothing, Int] = Managed.succeed(3)\n")),(0,r.kt)("h2",{id:"managed-with-zio-environment"},"Managed with ZIO environment"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Managed[E, A]")," is actually an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged[Any, E, A]"),". If you'd like your ",(0,r.kt)("inlineCode",{parentName:"p"},"acquire"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"release")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," functions to require an environment R, just use ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"Managed"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.console._\n\nval zManagedResource: ZManaged[Console, Nothing, Unit] = ZManaged.make(console.putStrLn("acquiring").orDie)(_ => console.putStrLn("releasing").orDie)\nval zUsedResource: URIO[Console, Unit] = zManagedResource.use { _ => console.putStrLn("running").orDie }\n')),(0,r.kt)("h2",{id:"combining-managed"},"Combining Managed"),(0,r.kt)("p",null,"It is possible to combine multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"Managed")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"flatMap")," to obtain a single ",(0,r.kt)("inlineCode",{parentName:"p"},"Managed")," that will acquire and release all the resources."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val managedQueue: Managed[Nothing, Queue[Int]] = Managed.make(Queue.unbounded[Int])(_.shutdown)\nval managedFile: Managed[IOException, File] = Managed.make(openFile("data.json"))(closeFile)\n\nval combined: Managed[IOException, (Queue[Int], File)] = for {\n    queue <- managedQueue\n    file  <- managedFile\n} yield (queue, file)\n\nval usedCombinedRes: IO[IOException, Unit] = combined.use { case (queue, file) => doSomething(queue, file) }\n\n')))}p.isMDXComponent=!0}}]);