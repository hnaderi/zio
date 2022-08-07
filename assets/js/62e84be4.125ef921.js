"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[6104],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={id:"zio-nio",title:"ZIO NIO"},i=void 0,l={unversionedId:"resources/ecosystem/officials/zio-nio",id:"resources/ecosystem/officials/zio-nio",title:"ZIO NIO",description:"ZIO NIO is a small, unopinionated ZIO interface to NIO.",source:"@site/docs/resources/ecosystem/officials/zio-nio.md",sourceDirName:"resources/ecosystem/officials",slug:"/resources/ecosystem/officials/zio-nio",permalink:"/resources/ecosystem/officials/zio-nio",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/resources/ecosystem/officials/zio-nio.md",tags:[],version:"current",frontMatter:{id:"zio-nio",title:"ZIO NIO"},sidebar:"resources-sidebar",previous:{title:"ZIO Mock",permalink:"/resources/ecosystem/officials/zio-mock"},next:{title:"ZIO Optics",permalink:"/resources/ecosystem/officials/zio-optics"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://zio.github.io/zio-nio/"},"ZIO NIO")," is a small, unopinionated ZIO interface to NIO."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In Java, there are two packages for I/O operations:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Java IO (",(0,o.kt)("inlineCode",{parentName:"p"},"java.io"),")"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Standard Java IO API"),(0,o.kt)("li",{parentName:"ul"},"Introduced since Java 1.0"),(0,o.kt)("li",{parentName:"ul"},"Stream-based API"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Blocking I/O operation")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Java NIO (",(0,o.kt)("inlineCode",{parentName:"p"},"java.nio"),")"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Introduced since Java 1.4"),(0,o.kt)("li",{parentName:"ul"},"NIO means ",(0,o.kt)("em",{parentName:"li"},"New IO"),", an alternative to the standard Java IO API"),(0,o.kt)("li",{parentName:"ul"},"It can operate in a ",(0,o.kt)("strong",{parentName:"li"},"non-blocking mode")," if possible"),(0,o.kt)("li",{parentName:"ul"},"Buffer-based API")))),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/nio/package-summary.html"},"Java NIO")," is an alternative to the Java IO API. Because it supports non-blocking IO, it can be more performant in concurrent environments like web services."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"ZIO NIO is a ZIO wrapper on Java NIO. It comes in two flavors:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"zio.nio.core"))," \u2014 a small and unopionanted ZIO interface to NIO that just wraps NIO API in ZIO effects,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"zio.nio"))," \u2014 an opinionated interface with deeper ZIO integration that provides more type and resource safety.")),(0,o.kt)("p",null,"In order to use this library, we need to add one of the following lines in our ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-nio-core" % "1.0.0-RC11"\nlibraryDependencies += "dev.zio" %% "zio-nio"      % "1.0.0-RC11" \n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Let's try writing a simple server using ",(0,o.kt)("inlineCode",{parentName:"p"},"zio-nio")," module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.console._\nimport zio.nio.channels._\nimport zio.nio.core._\nimport zio.stream._\n\nobject ZIONIOServerExample extends zio.App {\n  val myApp =\n    AsynchronousServerSocketChannel()\n      .use(socket =>\n        for {\n          addr <- InetSocketAddress.hostName("localhost", 8080)\n          _ <- socket.bindTo(addr)\n          _ <- putStrLn(s"Waiting for incoming connections on $addr endpoint").orDie\n          _ <- ZStream\n            .repeatEffect(socket.accept.preallocate)\n            .map(_.withEarlyRelease)\n            .mapMPar(16) {\n              _.use { case (closeConn, channel) =>\n                for {\n                  _ <- putStrLn("Received connection").orDie\n                  data <- ZStream\n                    .repeatEffectOption(\n                      channel.readChunk(64).eofCheck.orElseFail(None)\n                    )\n                    .flattenChunks\n                    .transduce(ZTransducer.utf8Decode)\n                    .run(Sink.foldLeft("")(_ + _))\n                  _ <- closeConn\n                  _ <- putStrLn(s"Request Received:\\n${data.mkString}").orDie\n                } yield ()\n              }\n            }.runDrain\n        } yield ()\n      ).orDie\n   \n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =\n    myApp.exitCode\n}\n')),(0,o.kt)("p",null,"Now we can send our requests to the server using ",(0,o.kt)("em",{parentName:"p"},"curl")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -X POST localhost:8080 -d "Hello, ZIO NIO!"\n')))}u.isMDXComponent=!0}}]);