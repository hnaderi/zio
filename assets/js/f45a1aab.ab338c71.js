"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[80447],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||f[m]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={id:"fiberref",title:"FiberRef"},r=void 0,l={unversionedId:"reference/state-management/fiberref",id:"reference/state-management/fiberref",title:"FiberRef",description:"FiberRef[A] models a mutable reference to a value of type A. The two basic operations are set, which sets the reference to a new value, and get, which retrieves the current value of the reference.",source:"@site/docs/reference/state-management/fiberref.md",sourceDirName:"reference/state-management",slug:"/reference/state-management/fiberref",permalink:"/reference/state-management/fiberref",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/state-management/fiberref.md",tags:[],version:"current",frontMatter:{id:"fiberref",title:"FiberRef"},sidebar:"reference-sidebar",previous:{title:"Fiber-local State",permalink:"/reference/state-management/fiber-local-state"},next:{title:"ZState",permalink:"/reference/state-management/zstate"}},s={},p=[{value:"Motivation",id:"motivation",level:2},{value:"Solution",id:"solution",level:2},{value:"Solution 1: ZIO Environment",id:"solution-1-zio-environment",level:3},{value:"Solution 2: FiberRef",id:"solution-2-fiberref",level:3},{value:"Use Cases",id:"use-cases",level:2},{value:"Operations",id:"operations",level:2},{value:"Propagation",id:"propagation",level:2},{value:"Copy-on-Fork",id:"copy-on-fork",level:3},{value:"Merging Back",id:"merging-back",level:2},{value:"join",id:"join",level:3},{value:"join with Custom Merge",id:"join-with-custom-merge",level:3},{value:"await",id:"await",level:3},{value:"inheritAll",id:"inheritall",level:3},{value:"Memory Safety",id:"memory-safety",level:2}],d={toc:p},c="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef[A]")," models a mutable reference to a value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),". The two basic operations are ",(0,i.kt)("inlineCode",{parentName:"p"},"set"),", which sets the reference to a new value, and ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),", which retrieves the current value of the reference."),(0,i.kt)("p",null,"We can think of ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef")," as Java's ",(0,i.kt)("inlineCode",{parentName:"p"},"ThreadLocal")," on steroids. So, just like we have ",(0,i.kt)("inlineCode",{parentName:"p"},"ThreadLocal")," in Java we have ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef")," in ZIO. So as different threads have different ",(0,i.kt)("inlineCode",{parentName:"p"},"ThreadLocal"),"s, we can say different fibers have different ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef"),"s. They don't intersect or overlap in any way. ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef")," is the fiber version of ",(0,i.kt)("inlineCode",{parentName:"p"},"ThreadLocal")," with significant improvements in its semantics. A ",(0,i.kt)("inlineCode",{parentName:"p"},"ThreadLocal")," only has a mutable state in which each thread accesses its own copy, but threads don't propagate their state to their children's."),(0,i.kt)("p",null,"As opposed to ",(0,i.kt)("inlineCode",{parentName:"p"},"Ref[A]"),", the value of a ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef[A]")," is bound to an executing fiber. Different fibers who hold the same ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef[A]")," can independently set and retrieve values of the reference, without collisions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nfor {\n  fiberRef <- FiberRef.make[Int](0)\n  _        <- fiberRef.set(10)\n  v        <- fiberRef.get\n} yield v == 10\n")),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"Whenever we have some kind of scoped information or context, and we don't want to use the ZIO environment to store it, we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef")," to store it."),(0,i.kt)("p",null,"To illustrate this, let's try to find a solution to the ",(0,i.kt)("em",{parentName:"p"},"Structured Logging")," problem. In structured logging, we tend to attach contextual information to log messages, such as user id, correlation id, log level, and so on."),(0,i.kt)("p",null,"So assume we have written the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nfor {\n  _ <- Logging.log("Hello World!")\n  _ <- ZIO.foreachParDiscard(List("Jane", "John")) { name =>\n    Logging.logAnnotate("name", name) {\n      for {\n        _ <- Logging.log(s"Received request")\n        fiberId <- ZIO.fiberId.map(_.ids.head)\n        _ <- Logging.logAnnotate("fiber_id", s"$fiberId")(\n          Logging.log("Processing request")\n        )\n        _ <- Logging.log("Finished processing request")\n      } yield ()\n    }\n  }\n  _ <- Logging.log("All requests processed")\n} yield ()\n')),(0,i.kt)("p",null,"We would like to see the following log output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"Hello World!\n[name=Jane] Received request\n[name=John] Received request\n[name=Jane] [fiber_id=7] Processing request\n[name=John] [fiber_id=8] Processing request\n[name=John] Finished processing request\n[name=Jane] Finished processing request\nAll requests processed\n")),(0,i.kt)("p",null,"In the above code, we have two users, ",(0,i.kt)("inlineCode",{parentName:"p"},"Jane")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"John"),", and we want to handle some operations on each user, concurrently. When we perform concurrent operations, we would like to have a way to associate each concurrent operation with its corresponding user and fiber id. So when we log messages, we have all the information available for a specific event."),(0,i.kt)("p",null,"In order to do this, we need a context-aware logging service. This logging service needs to have a ",(0,i.kt)("strong",{parentName:"p"},"state")," that is a place to store annotations. This state can be accessed and modified ",(0,i.kt)("strong",{parentName:"p"},"concurrently")," by multiple fibers. And the important part is that each fiber should have its own isolated copy of the state, so when a fiber modifies the state, it doesn't clobber the state of other fibers."),(0,i.kt)("p",null,"Until now, we can categorize our requirements into two parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We need a mechanism to carry some contextual information, without explicitly passing it around."),(0,i.kt)("li",{parentName:"ul"},"We need a mechanism to update the state in an isolated fashion, where each fiber can update the state without affecting the state of other fibers.")),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("p",null,"In this section, we will look at two solutions to the problem of structured logging we have mentioned above. The first solution has some limitations and drawbacks, so we will choose the second solution as the final solution."),(0,i.kt)("h3",{id:"solution-1-zio-environment"},"Solution 1: ZIO Environment"),(0,i.kt)("p",null,"One solution is to use the ZIO environment to store the state. It addresses the first requirement, very well. ZIO environment is a nice place to store the contextual states. And to make the state isolated between fibers, we can reintroduce the new state to the environment instead of updating the environment globally:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'// Solution 1: Using the ZIO environment to store the state\nimport zio._\n\nobject Logging {\n  type Annotation = Map[String, String]\n\n  def logAnnotate[R, E, A](key: String, value: String)(\n    zio: ZIO[R with Annotation, E, A]\n  ): ZIO[R with Annotation, E, A] = {\n    for {\n      s <- ZIO.service[Annotation]\n      r <- zio.provideSomeLayer[R](ZLayer.succeed(s.updated(key, value)))\n    } yield (r)\n  }\n\n  def log(message: String): ZIO[Annotation, Nothing, Unit] = {\n    ZIO.service[Annotation].flatMap {\n      case annotation if annotation.isEmpty => \n        Console.printLine(message).orDie\n      case annotation =>\n        val line =\n          s"${annotation.map { case (k, v) => s"[$k=$v]" }.mkString(" ")} $message"\n        Console.printLine(line).orDie\n    }\n  }\n}\n')),(0,i.kt)("p",null,"But this solution is not very flexible, because this brings type safety over the contextual data types. So any change to the type of contextual data needs a change to the whole program."),(0,i.kt)("h3",{id:"solution-2-fiberref"},"Solution 2: FiberRef"),(0,i.kt)("p",null,"The other solution is to use ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef"),". FiberRef is a nice way to store the contextual states and make them isolated. Any state maintained by a ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef")," will be isolated between fibers. Also, a nice thing about ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef")," is that we do not require to place the state in the environment."),(0,i.kt)("p",null,"Let's see how to use ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef")," to implement the logging service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\ncase class Logging private (ref: FiberRef[Map[String, String]]) {\n  def logAnnotate[R, E, A](key: String, value: String)(\n      zio: ZIO[R, E, A]\n  ): ZIO[R, E, A] = ref.locallyWith(_.updated(key, value))(zio)\n\n  def log(message: String): UIO[Unit] = {\n    ref.get.flatMap {\n      case annotation if annotation.isEmpty => Console.printLine(message).orDie\n      case annotation =>\n        val line =\n          s"${annotation.map { case (k, v) => s"[$k=$v]" }.mkString(" ")} $message"\n        Console.printLine(message).orDie\n    }\n  }\n}\n\nobject Logging {\n  def make() = FiberRef.make(Map.empty[String, String]).map(new Logging(_))\n}\n')),(0,i.kt)("p",null,"Now we can write a program that logs some information:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject FiberRefLoggingExample extends ZIOAppDefault {\n  def run =\n    for {\n      logging <- Logging.make()\n      _ <- logging.log("Hello World!")\n      _ <- ZIO.foreachParDiscard(List("Jane", "John")) { name =>\n        logging.logAnnotate("name", name) {\n          for {\n            _ <- logging.log(s"Received request")\n            fiberId <- ZIO.fiberId.map(_.ids.head)\n            _ <- logging.logAnnotate("fiber_id", s"$fiberId")(\n              logging.log("Processing request")\n            )\n            _ <- logging.log("Finished processing request")\n          } yield ()\n        }\n      }\n      _ <- logging.log("All requests processed")\n    } yield ()\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")),(0,i.kt)("p",{parentName:"blockquote"},"In the above solution, if we replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"Ref"),", the program will not work properly, because the ",(0,i.kt)("inlineCode",{parentName:"p"},"Ref")," is not isolated. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Ref")," will be shared between all fibers, so each fiber clobbers the other fibers' state.")),(0,i.kt)("h2",{id:"use-cases"},"Use Cases"),(0,i.kt)("p",null,"Whenever we have some kind of scoped information or context, we can think about ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef")," as a way to store that information. "),(0,i.kt)("p",null,"When developing applications, there are several use cases for ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef"),". Let's take a look at some of them:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Distributed Tracing"),"\u2014 In an architecture, where we have highly concurrent workflows and distributed services, there is a need to trace requests as they propagate through the services. To be able to trace requests, we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef")," to design the system to automatically propagate request-scoped information.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Contextual Logging"),"\u2014 In lot of cases, logs are not independent piece of information, but they are part of a larger context. So other than just logging the message, we also need to log some additional information such as the request ID, the user ID, the session id, and so on. So whe we collect these logs, we can correlate them based on a common data point. Instead of explicitly passing these contextual information, we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Execution Scoped Configuration"),"\u2014 When we write applications, we would like to make them configurable. So we configure the application once and used it throughout the whole components. Not all configurations are global. There are certain kinds of configurations that are not global, or at least we have a default value for them globally, but we need to change them dynamically for certain regions. ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef")," is a nice tool to model these kind of configurations."))),(0,i.kt)("p",null,"In ZIO we have several use cases for ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef"),". Let's discuss some of them:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Whenever we use ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIO.withParallelism"),", we can specify the parallelism factor for a region of code. So this information will be stored inside a ",(0,i.kt)("inlineCode",{parentName:"li"},"FiberRef"),", without any need to pass it around all effects explicitly. When we exit the region, the parallelism factor will be restored to the original value:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nobject MainApp extends ZIOAppDefault {\n  def myJob(name: String) =\n    ZIO.foreachParDiscard(1 to 3)(i =>\n      ZIO.debug(s"The $name-$i job started") *> ZIO.sleep(2.second)\n    )\n\n  def run =\n    ZIO.withParallelismUnbounded(\n      for {\n        _ <- myJob("foo")\n        _ <- ZIO.debug("------------------")\n        _ <- ZIO.withParallelism(1)(myJob("bar"))\n        _ <- ZIO.debug("------------------")\n        _ <- myJob("baz")\n      } yield ()\n    )\n}\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Using ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIOAspect.annotated")," we can annotate the effect with some contextual information, e.g. the ",(0,i.kt)("inlineCode",{parentName:"li"},"correlation_id"),". This information will be stored inside a ",(0,i.kt)("inlineCode",{parentName:"li"},"FiberRef"),", which will be propagated to all fibers that are created from the same parent fiber. Each fiber will have its own set of annotations. When we log inside a fiber, the logging service will use the fiber's specific annotations to create the log message:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n\n  def handleRequest(request: String) =\n    for {\n      _ <- ZIO.log(s"Received request.")\n      _ <- ZIO.unit // do something with the request\n      _ <- ZIO.log(s"Finished processing request")\n    } yield ()\n\n  def run =\n    for {\n      _ <- ZIO.log("Hello World!")\n      _ <- ZIO.foreachParDiscard(List(("req1", "1"), ("req2", "2"), ("req3", "3"))){ case (req, id) =>\n        handleRequest(req) @@ ZIOAspect.annotated("correlation_id", id)\n      }\n      _ <- ZIO.log("Goodbye!")\n    } yield ()\n\n}\n')),(0,i.kt)("p",null,"Here is the output (extra columns were removed for better readability):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'message="Hello World!"\nmessage="Received request." correlation_id=2\nmessage="Received request." correlation_id=1\nmessage="Received request." correlation_id=3\nmessage="Finished processing request." correlation_id=3\nmessage="Finished processing request." correlation_id=1\nmessage="Finished processing request." correlation_id=2\nmessage="Goodbye!"\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Log levels are also maintained by using ",(0,i.kt)("inlineCode",{parentName:"li"},"FiberRef"),". They are stored inside a ",(0,i.kt)("inlineCode",{parentName:"li"},"FiberRef"),", and whenever we want, we can change the log level using the ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIO.logLevel")," operator:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nfor {\n  _ <- ZIO.log("Application started!")\n  _ <- ZIO.logLevel(LogLevel.Trace) {\n    for {\n      _ <- ZIO.log("Entering trace log level region")\n      _ <- ZIO.log("Doing something")\n      _ <- ZIO.log("Leaving trace log level region")\n    } yield ()\n  }\n  _ <- ZIO.log("Application ended!")\n} yield ()\n')),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"The same goes for when we access the environment (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIO.service"),"), or when we provide a layer to a ZIO effect (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIO#provide"),"). ZIO uses ",(0,i.kt)("inlineCode",{parentName:"li"},"FiberRef")," under the hood to store the environment:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  private val fooLayer = ZLayer.succeed("foo")\n  private val barLayer = ZLayer.succeed("bar") \n  \n  def run =\n    (for {\n      _ <- ZIO.service[String].debug("context")\n      _ <- ZIO.service[String].debug("context").provide(barLayer)\n      _ <- ZIO.service[String].debug("context")\n    } yield ()).provide(fooLayer)\n}\n')),(0,i.kt)("p",null,"There are several other use cases for ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef")," in ZIO itself. We just covered some of them to get you some ideas on how they are used in the real world."),(0,i.kt)("h2",{id:"operations"},"Operations"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef[A]")," has an API almost identical to ",(0,i.kt)("inlineCode",{parentName:"p"},"Ref[A]"),". It includes well-known methods such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FiberRef#get"),". Returns the current value of the reference."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FiberRef#set"),". Sets the current value of the reference."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FiberRef#update")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"FiberRef#updateSome")," updates the value with the specified function."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FiberRef#modify"),"/ ",(0,i.kt)("inlineCode",{parentName:"li"},"FiberRef#modifySome")," modifies the value with the specified function, computing a return value for the operation.")),(0,i.kt)("p",null,"You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"locally")," to scope ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef")," value only for a given effect:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nfor {\n  correlationId <- FiberRef.make[String]("")\n  v1            <- correlationId.locally("my-correlation-id")(correlationId.get)\n  v2            <- correlationId.get\n} yield v1 == "my-correlation-id" && v2 == ""\n')),(0,i.kt)("h2",{id:"propagation"},"Propagation"),(0,i.kt)("p",null,"Let's go back to the ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef"),"s analog called ",(0,i.kt)("inlineCode",{parentName:"p"},"ThreadLocal")," and see how it works. If we have thread ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," with its ",(0,i.kt)("inlineCode",{parentName:"p"},"ThreadLocal")," and thread ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," creates a new thread, let's call it thread ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),". When thread ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," sends thread ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," the same ",(0,i.kt)("inlineCode",{parentName:"p"},"ThreadLocal")," then what value does thread ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," see inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"ThreadLocal"),"? Well, it sees the default value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ThreadLocal"),". It does not see ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),"s value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ThreadLocal"),". So in other words, ",(0,i.kt)("inlineCode",{parentName:"p"},"ThreadLocal"),"s do not propagate their values across the sort of graph of threads so when one thread creates another, the ",(0,i.kt)("inlineCode",{parentName:"p"},"ThreadLocal")," value is not propagated from parent to child."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef"),"s improve on that model quite dramatically. Basically, whenever a child's fiber is created from its parent, the ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef")," value of parent fiber propagated to its child fiber."),(0,i.kt)("h3",{id:"copy-on-fork"},"Copy-on-Fork"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef[A]")," has ",(0,i.kt)("em",{parentName:"p"},"copy-on-fork")," semantics for ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO#fork"),". This essentially means that a child ",(0,i.kt)("inlineCode",{parentName:"p"},"Fiber")," starts with ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef")," values of its parent. When the child sets a new value of ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef"),", the change is visible only to the child itself. The parent fiber still has its own value."),(0,i.kt)("p",null,"So if we create a ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef")," and set its value to ",(0,i.kt)("inlineCode",{parentName:"p"},"5"),", and we pass this ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef")," to a child fiber, it sees the value ",(0,i.kt)("inlineCode",{parentName:"p"},"5"),". If the child fiber modifies the value from ",(0,i.kt)("inlineCode",{parentName:"p"},"5")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"6"),", the parent fiber can't see that change. So the child fiber gets its own copy of the ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef"),", and it can modify it locally. Those changes will not affect the parent fiber:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nfor {\n  fiberRef <- FiberRef.make(5)\n  promise <- Promise.make[Nothing, Int]\n  _ <- fiberRef\n    .updateAndGet(_ => 6)\n    .flatMap(promise.succeed).fork\n  childValue <- promise.await\n  parentValue <- fiberRef.get\n} yield assert(parentValue == 5 && childValue == 6)\n")),(0,i.kt)("h2",{id:"merging-back"},"Merging Back"),(0,i.kt)("p",null,"ZIO does not only support to propagate ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef")," values from parents to childs, but also to fetch back these values into the current fiber. This section describes multiple variants for doing so."),(0,i.kt)("h3",{id:"join"},"join"),(0,i.kt)("p",null,"If we ",(0,i.kt)("inlineCode",{parentName:"p"},"join")," a fiber then its ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef")," is merged back into the parent fiber:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nfor {\n  fiberRef <- FiberRef.make(5)\n  child <- fiberRef.set(6).fork\n  _ <- child.join\n  parentValue <- fiberRef.get\n} yield assert(parentValue == 6)\n")),(0,i.kt)("p",null,"So if we ",(0,i.kt)("inlineCode",{parentName:"p"},"fork")," a fiber and that child fiber modifies a bunch of ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef"),"s and then later we ",(0,i.kt)("inlineCode",{parentName:"p"},"join")," it, we get those modifications merged back into the parent fiber. So that's the semantic model of ZIO on ",(0,i.kt)("inlineCode",{parentName:"p"},"join"),". "),(0,i.kt)("p",null,"Each fiber has its own ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef")," and can modify it locally. So when multiple child fibers ",(0,i.kt)("inlineCode",{parentName:"p"},"join")," their parent, how do they get merged? By default, the last child fiber will win, the last fiber which is going to ",(0,i.kt)("inlineCode",{parentName:"p"},"join")," will override the parent's ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef")," value."),(0,i.kt)("p",null,"As we can see, ",(0,i.kt)("inlineCode",{parentName:"p"},"child1")," is the last fiber, so its value, which is ",(0,i.kt)("inlineCode",{parentName:"p"},"6"),", gets merged back into its parent:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nfor {\n  fiberRef <- FiberRef.make(5)\n  child1 <- fiberRef.set(6).fork\n  child2 <- fiberRef.set(7).fork\n  _ <- child2.join\n  _ <- child1.join\n  parentValue <- fiberRef.get\n} yield assert(parentValue == 6)\n")),(0,i.kt)("h3",{id:"join-with-custom-merge"},"join with Custom Merge"),(0,i.kt)("p",null,"Furthermore, we can customize how, if at all, the value will be initialized when a fiber is forked and how values will be combined when a fiber is merged. To do this you specify the desired behavior during ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef#make"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nfor {\n  fiberRef <- FiberRef.make(initial = 0, join = math.max)\n  child    <- fiberRef.update(_ + 1).fork\n  _        <- fiberRef.update(_ + 2)\n  _        <- child.join\n  value    <- fiberRef.get\n} yield assert(value == 2)\n")),(0,i.kt)("h3",{id:"await"},"await"),(0,i.kt)("p",null,"It is important to note that ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," has no such merge behavior. So ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," waits for the child fiber to finish and gives us its value as an ",(0,i.kt)("inlineCode",{parentName:"p"},"Exit"),", without ever merging any ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef")," values back into the parent:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nfor {\n  fiberRef <- FiberRef.make(5)\n  child <- fiberRef.set(6).fork\n  _ <- child.await\n  parentValue <- fiberRef.get\n} yield assert(parentValue == 5)\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"join")," has higher-level semantics than ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," because it will fail if the child fiber failed, it will interrupt if the child is interrupted, and it will also merge back its value to its parent."),(0,i.kt)("h3",{id:"inheritall"},"inheritAll"),(0,i.kt)("p",null,"We can inherit the values from all ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef"),"s from an existing ",(0,i.kt)("inlineCode",{parentName:"p"},"Fiber")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Fiber#inheritAll")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nfor {\n  fiberRef <- FiberRef.make[Int](0)\n  latch    <- Promise.make[Nothing, Unit]\n  fiber    <- (fiberRef.set(10) *> latch.succeed(())).fork\n  _        <- latch.await\n  _        <- fiber.inheritAll\n  v        <- fiberRef.get\n} yield v == 10\n")),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"inheritAll")," is automatically called on ",(0,i.kt)("inlineCode",{parentName:"p"},"join"),". However, ",(0,i.kt)("inlineCode",{parentName:"p"},"join")," will wait for merging the ",(0,i.kt)("em",{parentName:"p"},"final")," values, while ",(0,i.kt)("inlineCode",{parentName:"p"},"inheritAll")," will merge the ",(0,i.kt)("em",{parentName:"p"},"current")," values and then continue:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nval withJoin =\n    for {\n        fiberRef <- FiberRef.make[Int](0)\n        fiber    <- (fiberRef.set(10) *> fiberRef.set(20).delay(2.seconds)).fork\n        _        <- fiber.join  // wait for fiber's end and copy final result 20 into fiberRef\n        v        <- fiberRef.get\n    } yield assert(v == 20)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nval withoutJoin =\n    for {\n        fiberRef <- FiberRef.make[Int](0)\n        fiber    <- (fiberRef.set(10) *> fiberRef.set(20).delay(2.seconds)).fork\n        _        <- fiber.inheritAll.delay(1.second) // copy intermediate result 10 into fiberRef and continue\n        v        <- fiberRef.get\n    } yield assert(v == 10)\n")),(0,i.kt)("h2",{id:"memory-safety"},"Memory Safety"),(0,i.kt)("p",null,"The value of a ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef")," is automatically garbage collected once the ",(0,i.kt)("inlineCode",{parentName:"p"},"Fiber")," owning it is finished. A ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef")," that is no longer reachable (has no reference to it in user-code) will cause all fiber-specific values of the reference to be garbage collected, even if they were once used in a ",(0,i.kt)("inlineCode",{parentName:"p"},"Fiber")," that is currently executing."))}f.isMDXComponent=!0}}]);