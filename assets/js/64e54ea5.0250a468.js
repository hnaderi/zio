"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[4338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),k=a,m=d["".concat(l,".").concat(k)]||d[k]||p[k]||s;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const s={id:"zio-akka-cluster",title:"ZIO Akka Cluster"},o=void 0,i={unversionedId:"resources/ecosystem/officials/zio-akka-cluster",id:"resources/ecosystem/officials/zio-akka-cluster",title:"ZIO Akka Cluster",description:"The ZIO Akka Cluster library is a ZIO wrapper on Akka Cluster. We can use clustering features of the Akka toolkit without the need to use the actor model.",source:"@site/docs/resources/ecosystem/officials/zio-akka-cluster.md",sourceDirName:"resources/ecosystem/officials",slug:"/resources/ecosystem/officials/zio-akka-cluster",permalink:"/resources/ecosystem/officials/zio-akka-cluster",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/resources/ecosystem/officials/zio-akka-cluster.md",tags:[],version:"current",frontMatter:{id:"zio-akka-cluster",title:"ZIO Akka Cluster"},sidebar:"resources-sidebar",previous:{title:"ZIO Actors",permalink:"/resources/ecosystem/officials/zio-actors"},next:{title:"ZIO AWS",permalink:"/resources/ecosystem/officials/zio-aws"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-akka-cluster"},"ZIO Akka Cluster")," library is a ZIO wrapper on ",(0,a.kt)("a",{parentName:"p",href:"https://doc.akka.io/docs/akka/current/index-cluster.html"},"Akka Cluster"),". We can use clustering features of the Akka toolkit without the need to use the actor model."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This library provides us following features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Akka Cluster")," \u2014 This feature contains two Akka Cluster Membership operations called ",(0,a.kt)("inlineCode",{parentName:"p"},"join")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"leave")," and also it has some methods to retrieve ",(0,a.kt)("em",{parentName:"p"},"Cluster State")," and ",(0,a.kt)("em",{parentName:"p"},"Cluster Events"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Akka Distributed PubSub")," \u2014 Akka has a ",(0,a.kt)("em",{parentName:"p"},"Distributed Publish Subscribe")," facility in the cluster. It helps us to send a message to all actors in the cluster that have registered and subscribed for a specific topic name without knowing their physical address or without knowing which node they are running on.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Akka Cluster Sharding")," \u2014 Cluster sharding is useful when we need to ",(0,a.kt)("em",{parentName:"p"},"distribute actors across several nodes in the cluster")," and want to be able to interact with them using their logical identifier without having to care about their physical location in the cluster, which might also change over time. When we have many stateful entities in our application that together they consume more resources (e.g. memory) than fit on one machine, it is useful to use ",(0,a.kt)("em",{parentName:"p"},"Akka Cluster Sharding")," to distribute our entities to multiple nodes."))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-akka-cluster" % "0.2.0" // Check the repo for the latest version\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"In the following example, we are using all these three features. We have a distributed counter application that lives in the Akka Cluster using ",(0,a.kt)("em",{parentName:"p"},"Akka Cluster Sharding")," feature. So the location of ",(0,a.kt)("inlineCode",{parentName:"p"},"LiveUsers")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TotalRequests")," entities in the cluster is transparent for us. We send the result of each entity to the ",(0,a.kt)("em",{parentName:"p"},"Distributed PubSub"),". So every node in the cluster can subscribe and listen to those results. Also, we have created a fiber that is subscribed to the cluster events. All the new events will be logged to the console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import akka.actor.ActorSystem\nimport com.typesafe.config.{Config, ConfigFactory}\nimport zio.akka.cluster.Cluster\nimport zio.akka.cluster.sharding.{Entity, Sharding}\nimport zio.console.putStrLn\nimport zio.{ExitCode, Has, Managed, Task, URIO, ZIO, ZLayer}\n\nsealed trait Counter extends Product with Serializable\ncase object Inc extends Counter\ncase object Dec extends Counter\n\ncase class CounterApp(port: String) {\n  val config: Config =\n    ConfigFactory.parseString(\n      s"""\n         |akka {\n         |  actor {\n         |    provider = "cluster"\n         |  }\n         |  remote {\n         |    netty.tcp {\n         |      hostname = "127.0.0.1"\n         |      port = $port\n         |    }\n         |  }\n         |  cluster {\n         |    seed-nodes = ["akka.tcp://CounterApp@127.0.0.1:2551"]\n         |  }\n         |}\n         |""".stripMargin)\n\n  val actorSystem: ZLayer[Any, Throwable, Has[ActorSystem]] =\n    ZLayer.fromManaged(\n      Managed.make(Task(ActorSystem("CounterApp", config)))(sys =>\n        Task.fromFuture(_ => sys.terminate()).either\n      )\n    )\n\n  val counterApp: ZIO[zio.ZEnv, Throwable, Unit] =\n    actorSystem.build.use(sys =>\n      for {\n        queue <- Cluster\n          .clusterEvents(true)\n          .provideCustom(ZLayer.succeedMany(sys))\n\n        pubsub <- zio.akka.cluster.pubsub.PubSub\n          .createPubSub[Int]\n          .provideCustom(ZLayer.succeedMany(sys))\n\n        liveUsersLogger <- pubsub\n          .listen("LiveUsers")\n          .flatMap(\n            _.take.tap(u => putStrLn(s"Number of live users: $u")).forever\n          )\n          .fork\n        totalRequestLogger <- pubsub\n          .listen("TotalRequests")\n          .flatMap(\n            _.take.tap(r => putStrLn(s"Total request until now: $r")).forever\n          )\n          .fork\n\n        clusterEvents <- queue.take\n          .tap(x => putStrLn("New event in cluster: " + x.toString))\n          .forever\n          .fork\n\n        counterEntityLogic = (c: Counter) =>\n          for {\n            entity <- ZIO.environment[Entity[Int]]\n            newState <- c match {\n              case Inc =>\n                entity.get.state.updateAndGet(s => Some(s.getOrElse(0) + 1))\n              case Dec =>\n                entity.get.state.updateAndGet(s => Some(s.getOrElse(0) - 1))\n            }\n            _ <- pubsub.publish(entity.get.id, newState.getOrElse(0)).orDie\n          } yield ()\n        cluster <- Sharding\n          .start("CounterEntity", counterEntityLogic)\n          .provideCustom(ZLayer.succeedMany(sys))\n\n        _ <- cluster.send("LiveUsers", Inc)\n        _ <- cluster.send("TotalRequests", Inc)\n        _ <- cluster.send("LiveUsers", Dec)\n        _ <- cluster.send("LiveUsers", Inc)\n        _ <- cluster.send("LiveUsers", Inc)\n        _ <- cluster.send("TotalRequests", Inc)\n        _ <- cluster.send("TotalRequests", Inc)\n\n        _ <-\n          clusterEvents.join zipPar liveUsersLogger.join zipPar totalRequestLogger.join\n      } yield ()\n    )\n}\n')),(0,a.kt)("p",null,"Now, let's create a cluster comprising two nodes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'object CounterApp1 extends zio.App {\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] = \n    CounterApp("2551").counterApp.exitCode\n}\n\nobject CounterApp2 extends zio.App {\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] = \n    CounterApp("2552").counterApp.exitCode\n}\n')))}p.isMDXComponent=!0}}]);