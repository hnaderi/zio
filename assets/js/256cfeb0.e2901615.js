"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[2651],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5306:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={id:"zio-actors",title:"ZIO Actors"},s=void 0,i={unversionedId:"resources/ecosystem/officials/zio-actors",id:"resources/ecosystem/officials/zio-actors",title:"ZIO Actors",description:"ZIO Actors is a high-performance, purely functional library for building, composing, and supervising typed actors based on ZIO.",source:"@site/docs/resources/ecosystem/officials/zio-actors.md",sourceDirName:"resources/ecosystem/officials",slug:"/resources/ecosystem/officials/zio-actors",permalink:"/resources/ecosystem/officials/zio-actors",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/resources/ecosystem/officials/zio-actors.md",tags:[],version:"current",frontMatter:{id:"zio-actors",title:"ZIO Actors"},sidebar:"resources-sidebar",previous:{title:"Introduction",permalink:"/resources/ecosystem/officials/"},next:{title:"ZIO Akka Cluster",permalink:"/resources/ecosystem/officials/zio-akka-cluster"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2},{value:"Resources",id:"resources",level:2}],p={toc:l};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-actors"},"ZIO Actors")," is a high-performance, purely functional library for building, composing, and supervising typed actors based on ZIO."),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"ZIO Actors is based on the ",(0,n.kt)("em",{parentName:"p"},"Actor Model")," which is a conceptual model of concurrent computation. In the actor model, the ",(0,n.kt)("em",{parentName:"p"},"actor")," is the fundamental unit of computation, unlike the ZIO concurrency model, which is the fiber."),(0,n.kt)("p",null,"Each actor has a mailbox that stores and processes the incoming messages in FIFO order. An actor allowed to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"create another actor."),(0,n.kt)("li",{parentName:"ul"},"send a message to itself or other actors."),(0,n.kt)("li",{parentName:"ul"},"handle the incoming message, and:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"decide ",(0,n.kt)("strong",{parentName:"li"},"what to do")," based on the current state and the received message."),(0,n.kt)("li",{parentName:"ul"},"decide ",(0,n.kt)("strong",{parentName:"li"},"what is the next state")," based on the current state and the received message.")))),(0,n.kt)("p",null,"Some characteristics of an ",(0,n.kt)("em",{parentName:"p"},"Actor Model"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Isolated State")," \u2014 Each actor holds its private state. They only have access to their internal state. They are isolated from each other, and they do not share the memory. The only way to change the state of an actor is to send a message to that actor.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Process of One Message at a Time")," \u2014 Each actor handles and processes one message at a time. They read messages from their inboxes and process them sequentially.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Actor Persistence")," \u2014 A persistent actor records its state as events. The actor can recover its state from persisted events after a crash or restart.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Remote Messaging")," \u2014 Actors can communicate with each other only through messages. They can run locally or remotely on another machine. Remote actors can communicate with each other transparently as if there are located locally.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Actor Supervision")," \u2014 Parent actors can supervise their child actors. For example, if a child actor fails, the supervisor actor can restart that actor."))),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"To use this library, we need to add the following line to our library dependencies in ",(0,n.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-actors" % "0.0.9" \n')),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"Let's try to implement a simple Counter Actor which receives two ",(0,n.kt)("inlineCode",{parentName:"p"},"Increase")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Get")," commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.actors.Actor.Stateful\nimport zio.actors._\nimport zio.clock.Clock\nimport zio.console.putStrLn\nimport zio.{ExitCode, UIO, URIO, ZIO}\n\nsealed trait Message[+_]\ncase object Increase extends Message[Unit]\ncase object Get      extends Message[Int]\n\nobject CounterActorExample extends zio.App {\n\n  // Definition of stateful actor\n  val counterActor: Stateful[Any, Int, Message] =\n    new Stateful[Any, Int, Message] {\n      override def receive[A](\n          state: Int,\n          msg: Message[A],\n          context: Context\n      ): UIO[(Int, A)] =\n        msg match {\n          case Increase => UIO((state + 1, ()))\n          case Get      => UIO((state, state))\n        }\n    }\n\n  val myApp: ZIO[Clock, Throwable, Int] =\n    for {\n      system <- ActorSystem("MyActorSystem")\n      actor  <- system.make("counter", Supervisor.none, 0, counterActor)\n      _      <- actor ! Increase\n      _      <- actor ! Increase\n      s      <- actor ? Get\n    } yield s\n\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =\n    myApp\n      .flatMap(state => putStrLn(s"The final state of counter: $state"))\n      .exitCode\n}\n')),(0,n.kt)("p",null,"Akka actors also has some other optional modules for persistence (which is useful for event sourcing) and integration with Akka toolkit:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-actors-persistence" % zioActorsVersion\nlibraryDependencies += "dev.zio" %% "zio-actors-persistence-jdbc" % zioActorVersion\nlibraryDependencies += "dev.zio" %% "zio-actors-akka-interop" % zioActorVersion\n')),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=AQXBlbkf9wc"},"Acting Lessons for Scala Engineers with Akka and ZIO")," by ",(0,n.kt)("a",{parentName:"li",href:"https://wwww.softinio.com"},"Salar Rahmanian")," (November 2020)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.softinio.com/post/introduction-to-zio-actors/"},"Introduction to ZIO Actors")," by ",(0,n.kt)("a",{parentName:"li",href:"https://www.softinio.com"},"Salar Rahmanian")," (November 2020)")))}m.isMDXComponent=!0}}]);