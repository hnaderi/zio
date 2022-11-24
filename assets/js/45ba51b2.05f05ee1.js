"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[95970],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),g=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=g(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=g(t),u=o,d=m["".concat(p,".").concat(u)]||m[u]||c[u]||r;return t?a.createElement(d,l(l({ref:n},s),{},{components:t})):a.createElement(d,l({ref:n},s))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var g=2;g<r;g++)l[g]=t[g];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},79044:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>g});var a=t(87462),o=(t(67294),t(3905));const r={id:"jpl",title:"Java Platform/System Logger"},l=void 0,i={unversionedId:"jpl",id:"jpl",title:"Java Platform/System Logger",description:"Java Platform/System Logger",source:"@site/node_modules/@zio.dev/zio-logging/jpl.md",sourceDirName:".",slug:"/jpl",permalink:"/zio-logging/jpl",draft:!1,tags:[],version:"current",frontMatter:{id:"jpl",title:"Java Platform/System Logger"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/zio-logging/"},next:{title:"SLF4J",permalink:"/zio-logging/slf4j"}},p={},g=[{value:"Java Platform/System Logger",id:"java-platformsystem-logger",level:2},{value:"Examples",id:"examples",level:2},{value:"Java Platform/System logger name and annotations",id:"java-platformsystem-logger-name-and-annotations",level:3}],s={toc:g};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"java-platformsystem-logger"},"Java Platform/System Logger"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://openjdk.org/jeps/264"},(0,o.kt)("inlineCode",{parentName:"a"},"Java Platform/System Logger"))," is logging API which was introduced in Java 9."),(0,o.kt)("p",null,"In order to use this logging backend, we need to add the following line in our build.sbt file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-logging-jpl" % 2.1.3\n')),(0,o.kt)("p",null,"Logger layer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.logging.backend.JPL\n\nval logger = Runtime.removeDefaultLoggers >>> JPL.jpl\n")),(0,o.kt)("p",null,"Default ",(0,o.kt)("inlineCode",{parentName:"p"},"JPL")," logger setup:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"logger name (by default)  is extracted from ",(0,o.kt)("inlineCode",{parentName:"li"},"zio.Trace"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"for example, trace ",(0,o.kt)("inlineCode",{parentName:"li"},"zio.logging.example.JplSimpleApp.run(JplSimpleApp.scala:17)")," will have ",(0,o.kt)("inlineCode",{parentName:"li"},"zio.logging.example.JplSimpleApp")," as logger name"),(0,o.kt)("li",{parentName:"ul"},"NOTE: custom logger name may be set by ",(0,o.kt)("inlineCode",{parentName:"li"},"JPL.loggerName")," aspect"))),(0,o.kt)("li",{parentName:"ul"},"all annotations (logger name annotation is excluded) are placed at the beginning of log message"),(0,o.kt)("li",{parentName:"ul"},"cause is logged as throwable")),(0,o.kt)("p",null,"Custom logger name set by aspect:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'ZIO.logInfo("Starting user operation") @@ JPL.loggerName("zio.logging.example.UserOperation")\n')),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"You can find the source code ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-logging/tree/master/examples/src/main/scala/zio/logging/example"},"here")),(0,o.kt)("h3",{id:"java-platformsystem-logger-name-and-annotations"},"Java Platform/System logger name and annotations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'package zio.logging.example\n\nimport zio.logging.LogAnnotation\nimport zio.logging.backend.JPL\nimport zio.{ ExitCode, Runtime, Scope, ZIO, ZIOAppDefault, _ }\n\nimport java.util.UUID\n\nobject JplSimpleApp extends ZIOAppDefault {\n\n  override val bootstrap: ZLayer[ZIOAppArgs with Scope, Any, Any] = Runtime.removeDefaultLoggers >>> JPL.jpl\n\n  private val users = List.fill(2)(UUID.randomUUID())\n\n  override def run: ZIO[Scope, Any, ExitCode] =\n    for {\n      _       <- ZIO.logInfo("Start")\n      traceId <- ZIO.succeed(UUID.randomUUID())\n      _       <- ZIO.foreachPar(users) { uId =>\n        {\n          ZIO.logInfo("Starting user operation") *>\n            ZIO.sleep(500.millis) *>\n            ZIO.logInfo("Stopping user operation")\n        } @@ ZIOAspect.annotated("user", uId.toString)\n      } @@ LogAnnotation.TraceId(traceId) @@ JPL.loggerName("zio.logging.example.UserOperation")\n      _       <- ZIO.logInfo("Done")\n    } yield ExitCode.success\n\n}\n')),(0,o.kt)("p",null,"Expected Console Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Oct 28, 2022 1:47:01 PM zio.logging.backend.JPL$$anon$1 $anonfun$closeLogEntry$1\nINFO: Start\nOct 28, 2022 1:47:01 PM zio.logging.backend.JPL$$anon$1 $anonfun$closeLogEntry$1\nINFO: user=59c114fd-676d-4df9-a5a0-b8e132468fbf trace_id=7d3e3b84-dd3b-44ff-915a-04fb2d135e28 Starting user operation\nOct 28, 2022 1:47:01 PM zio.logging.backend.JPL$$anon$1 $anonfun$closeLogEntry$1\nINFO: user=e1ebf0cc-2f61-484f-afcd-de7e20ec7829 trace_id=7d3e3b84-dd3b-44ff-915a-04fb2d135e28 Starting user operation\nOct 28, 2022 1:47:02 PM zio.logging.backend.JPL$$anon$1 $anonfun$closeLogEntry$1\nINFO: user=e1ebf0cc-2f61-484f-afcd-de7e20ec7829 trace_id=7d3e3b84-dd3b-44ff-915a-04fb2d135e28 Stopping user operation\nOct 28, 2022 1:47:02 PM zio.logging.backend.JPL$$anon$1 $anonfun$closeLogEntry$1\nINFO: user=59c114fd-676d-4df9-a5a0-b8e132468fbf trace_id=7d3e3b84-dd3b-44ff-915a-04fb2d135e28 Stopping user operation\nOct 28, 2022 1:47:02 PM zio.logging.backend.JPL$$anon$1 $anonfun$closeLogEntry$1\nINFO: Done\n")))}c.isMDXComponent=!0}}]);