"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[83043],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=d(t),u=o,f=s["".concat(l,".").concat(u)]||s[u]||m[u]||r;return t?i.createElement(f,a(a({ref:n},c),{},{components:t})):i.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[s]="string"==typeof e?e:o,a[1]=p;for(var d=2;d<r;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},97821:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var i=t(87462),o=(t(67294),t(3905));const r={id:"dependency-propagation",title:"Dependency Propagation"},a=void 0,p={unversionedId:"reference/di/dependency-propagation",id:"reference/di/dependency-propagation",title:"Dependency Propagation",description:"When we write an application, our application has a lot of dependencies. We need a way to provide implementations and to feed and propagate all dependencies throughout the whole application. We can solve the propagation problem by using ZIO environment.",source:"@site/docs/reference/di/dependency-propagation.md",sourceDirName:"reference/di",slug:"/reference/di/dependency-propagation",permalink:"/reference/di/dependency-propagation",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/di/dependency-propagation.md",tags:[],version:"current",frontMatter:{id:"dependency-propagation",title:"Dependency Propagation"},sidebar:"reference-sidebar",previous:{title:"Automatic Layer Construction",permalink:"/reference/di/automatic-layer-construction"},next:{title:"Multiple Implementations",permalink:"/reference/di/providing-different-implementation-of-a-service"}},l={},d=[{value:"Using <code>ZIO#provideEnvironment</code> Method",id:"using-zioprovideenvironment-method",level:2},{value:"Using <code>ZIO#provide</code> Method",id:"using-zioprovide-method",level:2},{value:"Using <code>ZIO#provideSome</code> Method",id:"using-zioprovidesome-method",level:2}],c={toc:d},s="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When we write an application, our application has a lot of dependencies. We need a way to provide implementations and to feed and propagate all dependencies throughout the whole application. We can solve the propagation problem by using ",(0,o.kt)("em",{parentName:"p"},"ZIO environment"),"."),(0,o.kt)("p",null,"During the development of an application, we don't care about implementations. Incrementally, when we use various effects with different requirements on their environment, all parts of our application compose together, and at the end of the day we have a ZIO effect which requires some services as an environment. Before running this effect by ",(0,o.kt)("inlineCode",{parentName:"p"},"unsafeRun")," we should provide an implementation of these services into the ZIO Environment of that effect."),(0,o.kt)("p",null,"ZIO has some facilities for doing this. ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#provide")," is the core function that allows us to ",(0,o.kt)("em",{parentName:"p"},"feed")," an ",(0,o.kt)("inlineCode",{parentName:"p"},"R")," to an effect that requires an ",(0,o.kt)("inlineCode",{parentName:"p"},"R"),"."),(0,o.kt)("p",null,"Notice that the act of ",(0,o.kt)("inlineCode",{parentName:"p"},"provide"),"ing an effect with its environment, eliminates the environment dependency in the resulting effect type, represented by type ",(0,o.kt)("inlineCode",{parentName:"p"},"Any")," of the resulting environment."),(0,o.kt)("h2",{id:"using-zioprovideenvironment-method"},"Using ",(0,o.kt)("inlineCode",{parentName:"h2"},"ZIO#provideEnvironment")," Method"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#provideEnvironment")," takes an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"ZEnvironment[R]")," and provides it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," effect which eliminates its dependency on ",(0,o.kt)("inlineCode",{parentName:"p"},"R"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  def provideEnvironment(r: => ZEnvironment[R]): IO[E, A]\n}\n")),(0,o.kt)("p",null,"This is similar to dependency injection, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"provide*")," function can be thought of as ",(0,o.kt)("em",{parentName:"p"},"inject"),"."),(0,o.kt)("p",null,"Assume we have the following services:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"trait EmailService {\n  def send(email: String, content: String): UIO[Unit]\n}\n\nobject EmailService {\n  def send(email: String, content: String) = ZIO.serviceWithZIO[EmailService](_.send(email, content))\n}\n")),(0,o.kt)("p",null,"Let's write a simple program using ",(0,o.kt)("inlineCode",{parentName:"p"},"EmailService")," service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val app: ZIO[EmailService, Nothing, Unit] = EmailService.send("john@doe.com", "Hello John!")\n')),(0,o.kt)("p",null,"We can ",(0,o.kt)("inlineCode",{parentName:"p"},"provide")," implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"EmailService")," service into the ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," effect:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val loggingImpl = new EmailService {\n  override def send(email: String, content: String): UIO[Unit] = ???\n}\n\nval effect = app.provideEnvironment(ZEnvironment(loggingImpl))\n")),(0,o.kt)("p",null,"Most of the time, we don't use ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#provideEnvironment")," directly to provide our services; instead, we use ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer")," to construct the dependency graph of our application, then we use methods like ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#provide"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#provideSome")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#provideCustom")," to propagate dependencies into the environment of our ZIO effect."),(0,o.kt)("h2",{id:"using-zioprovide-method"},"Using ",(0,o.kt)("inlineCode",{parentName:"h2"},"ZIO#provide")," Method"),(0,o.kt)("p",null,"Unlike the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#provideEnvironment")," which takes a ",(0,o.kt)("inlineCode",{parentName:"p"},"ZEnvironment[R]"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#provide")," takes a ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer")," to the ZIO effect and translates it to another level."),(0,o.kt)("p",null,"Assume we have written this piece of program that requires ",(0,o.kt)("inlineCode",{parentName:"p"},"Foo")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Bar")," services:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'trait Foo {\n  def foo(): UIO[String]\n}\n\nobject Foo {\n  def foo(): ZIO[Foo, Nothing, String] = ZIO.serviceWithZIO[Foo](_.foo())\n}\n\ncase class FooLive() extends Foo {\n  override def foo(): UIO[String] = ZIO.succeed("foo")\n}\n\nobject FooLive {\n  val layer: ULayer[Foo] = ZLayer.succeed(FooLive())\n}\n\ntrait Bar {\n  def bar(): UIO[Int]\n}\n\nobject Bar {\n  def bar(): ZIO[Bar, Nothing, Int] = ZIO.serviceWithZIO[Bar](_.bar())\n}\n\ncase class BarLive() extends Bar {\n  override def bar(): UIO[Int] = ZIO.succeed(1)\n}\n\nobject BarLive {\n  val layer: ULayer[Bar] = ZLayer.succeed(BarLive())\n}\n\nval myApp: ZIO[Foo & Bar, Nothing, Unit] = for {\n  foo  <- Foo.foo()\n  bar  <- Bar.bar()\n  _    <- ZIO.debug(s"foo: $foo, bar: $bar")\n} yield ()\n')),(0,o.kt)("p",null,"We provide implementations of ",(0,o.kt)("inlineCode",{parentName:"p"},"Foo"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Bar")," services to the ",(0,o.kt)("inlineCode",{parentName:"p"},"myApp")," effect by using ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#provide")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val mainEffect: ZIO[Any, Nothing, Unit] = \n  myApp.provide(FooLive.layer, BarLive.layer)\n")),(0,o.kt)("p",null,"As we see, the type of our effect converted from ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO[Foo & Bar, Nothing, Unit]")," which requires two services to ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO[Any, Nothing, Unit]")," effect which doesn't require any services."),(0,o.kt)("h2",{id:"using-zioprovidesome-method"},"Using ",(0,o.kt)("inlineCode",{parentName:"h2"},"ZIO#provideSome")," Method"),(0,o.kt)("p",null,"Sometimes we have written a program, and we don't want to provide all its requirements. In these cases, we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#provideSome")," to partially apply some layers to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," effect."),(0,o.kt)("p",null,"In the previous example, if we just want to provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"Foo"),", we should use ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#provideSome"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val mainEffectSome: ZIO[Bar, Nothing, Unit] = \n  myApp.provideSome(FooLive.layer)\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"When using ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#provideSome[R0]"),", we should provide the remaining type as ",(0,o.kt)("inlineCode",{parentName:"p"},"R0")," type parameter. This workaround helps the compiler to infer the proper types.")))}m.isMDXComponent=!0}}]);