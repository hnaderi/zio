"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[75278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},63538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={id:"index",title:"Introduction to ZIO Direct Style",sidebar_label:"Introduction"},o=void 0,l={unversionedId:"zio-direct/index",id:"zio-direct/index",title:"Introduction to ZIO Direct Style",description:"ZIO Direct Style is a library that allows using directly-style i.e. imperative programming with ZIO effects which is based on the Monadless paradigm.",source:"@site/docs/zio-direct/index.md",sourceDirName:"zio-direct",slug:"/zio-direct/",permalink:"/zio-direct/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-direct/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO Direct Style",sidebar_label:"Introduction"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO Deriving",permalink:"/zio-deriving/"},next:{title:"Supported Constructs",permalink:"/zio-direct/supported-constructs"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Branching and Looping Support",id:"branching-and-looping-support",level:2},{value:"Great for Refs and FiberRefs!",id:"great-for-refs-and-fiberrefs",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ZIO Direct Style is a library that allows using directly-style i.e. imperative programming with ZIO effects which is based on the Monadless paradigm."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Project Stage"),(0,i.kt)("th",{parentName:"tr",align:null},"CI"),(0,i.kt)("th",{parentName:"tr",align:null},"Release"),(0,i.kt)("th",{parentName:"tr",align:null},"Snapshot"),(0,i.kt)("th",{parentName:"tr",align:null},"Discord"),(0,i.kt)("th",{parentName:"tr",align:null},"Github"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/zio/zio/wiki/Project-Stages"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Project%20Stage-Development-green.svg",alt:"Development"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://github.com/zio/zio-direct/workflows/CI/badge.svg",alt:"CI Badge"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://oss.sonatype.org/content/repositories/releases/dev/zio/zio-direct_3/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/nexus/r/https/oss.sonatype.org/dev.zio/zio-direct_3.svg",alt:"Sonatype Releases"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://oss.sonatype.org/content/repositories/snapshots/dev/zio/zio-direct_3/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/dev.zio/zio-direct_3.svg",alt:"Sonatype Snapshots"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://discord.gg/2ccFBr4"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/629491597070827530?logo=discord",alt:"Chat on Discord!"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/zio/zio-direct"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/zio/zio-direct?style=social",alt:"ZIO Direct Style"})))))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"To use zio-direct, add the following to your ",(0,i.kt)("inlineCode",{parentName:"p"},"build.sbt")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-direct" % "1.0.0-RC3"\n')),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Talk at Functional Scala 2022:\n",(0,i.kt)("a",{parentName:"p",href:"https://www.slideshare.net/deusaquilus/ziodirect-functional-scala-2022"},"https://www.slideshare.net/deusaquilus/ziodirect-functional-scala-2022")),(0,i.kt)("p",null,"ZIO-Direct allows direct style programming with ZIO. This library provides a ",(0,i.kt)("em",{parentName:"p"},"syntactic sugar")," that is more powerful than for-comprehensions as well as more natural to use. Simply add the ",(0,i.kt)("inlineCode",{parentName:"p"},".run")," suffix to any ZIO effect in order to retrieve it's value."),(0,i.kt)("p",null,"ZIO-Direct works by using macros to rewrite sequential code into flatMap-chains based on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/monadless/monadless"},"Monadless")," paradigm. The values resulting in ",(0,i.kt)("inlineCode",{parentName:"p"},".run")," calls from the ZIO effects are not actually awaited. Instead, they are rolled-up into a chain of flatMaps."),(0,i.kt)("p",null,"For example, in imperative programming operations typically are done in a simple set of steps."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"object FileOps:\n  def read(file: File): String\n  def write(file: File, content: String): Unit\n\nval textA = read(fileA)\nval textB = read(fileB)\nwrite(fileC, textA + textB)\n")),(0,i.kt)("p",null,"Using functional programming, the equivalent of this functionality is a set of nested flatMap-chains."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"object FileOps\n  def read(file: File): ZIO[Any, Throwable, String]\n  def write(file: File, content: String): ZIO[Any, Throwable, Unit]\n\nread(fileA).flatMap { textA =>\n  read(fileB).flatMap { textB =>\n    write(fileC, textA + textB)\n  }\n}\n")),(0,i.kt)("p",null,"In order to avoid this complexity scala provides a for-comprehension syntactic sugar."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"for {\n  textA <- read(fileA)\n  textB <- read(fileB)\n  _ <- write(fileC, textA + textB)\n} yield ()\n")),(0,i.kt)("p",null,"Unfortunately this syntactic sugar is limited in many cases, for example, inserting a conditional value inside is impossible."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'for {\n  textA <- read(fileA)\n  // Not a possible syntax\n  if (fileA.contains("some string")) {\n    textB <- read(fileB)\n    _ <- write(fileC, textA + textB)\n  }\n} yield ()\n')),(0,i.kt)("p",null,"ZIO-Direct offers an equivalent syntactic sugar that is more ergonomic and allows many constructs that for-comprehensions do not."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'defer {\n  val textA = read(fileA).run\n  if (fileA.contains("some string")) {\n    val textB = read(fileB).run\n    write(fileC, textA + textB).run\n  }\n}\n')),(0,i.kt)("h1",{id:"zio-tailored"},"ZIO-Tailored"),(0,i.kt)("p",null,"ZIO-Direct is specifically tailored to ZIO capabilities as it supports Environment and Error composition in ZIO effects similar to the for-comprehension."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val out: ZIO[CustomerConfig & DistributorConfig, CustomerGetException | DistrubutorGetException, (Customer, Distributor)] =\n  defer {\n    // Get a customer-configuration object from the environment and extract its .url field\n    val custUrl: String = ZIO.service[CustomerConfig].run.url\n    // Get a distributor-configuration from the environment and extract its .url field\n    val distUrl: String = ZIO.service[DistributorConfig].run.url\n    (\n      // Use the two configurations to make an HTTP-call\n      parseCustomer(httpGetCustomer(custUrl).run),\n      parseDistrubutor(httpGetDistributor(distUrl).run)\n    )\n  }\n")),(0,i.kt)("h2",{id:"branching-and-looping-support"},"Branching and Looping Support"),(0,i.kt)("p",null,"Unlike the for-comprehension, ZIO-Direct supports branching and looping in the use of flatMaps composition.\nLet's have a look at a another non-trivial example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"class Database:\n  def nextRow(): ZIO[Any, Throwable, Row]\n  def hasNextRow(): ZIO[Any, Throwable, Boolean]\n  def lockNextRow(): ZIO[Any, Throwable, Boolean]\nobject Database:\n  def open: ZIO[Any, Throwable, Database]\n\ndefer {\n  // Open a database connection\n  val db = Database.open().run\n  // See if there is is a next-row\n  while (db.hasNextRow().run) {\n    // try to lock, if aquired continue\n    if (db.lockNextRow().run)\n      val nextRow = db.nextRow().run\n      doSomethingWith(nextRow)\n    else\n      waitT()\n  }\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: The above database-api is imaginary.")),(0,i.kt)("p",null,"The above code needs to be translated into something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"Database.open.flatMap { db =>\n  def whileFun(): ZIO[Any, Throwable, Unit] =\n    db.hasNextRow().flatMap { hasNextRow =>\n      if (hasNextRow)(\n        db.lockNextRow().flatMap { lockNextRow =>\n          if (!lockNextRow)\n            db.nextRow().map(nextRow => doSomethingWith(nextRow))\n          else\n            ZIO.succeed(waitT())\n        }\n      ).flatMap(_ => whileFun())\n      else\n        ZIO.unit\n    }\n  whileFun()\n}\n")),(0,i.kt)("p",null,"Note that normally this is the exact code that would have to be written to capture such functionality For-comprehensions do not provide a way to do looping and branching so in such cases\na combination of flatMaps and recursion is necessary to avoid calling effects unnecessarily."),(0,i.kt)("h2",{id:"great-for-refs-and-fiberrefs"},"Great for Refs and FiberRefs!"),(0,i.kt)("p",null,"ZIO-direct makes it much easier to use ZIO mutable Ref and FiberRef variables. Since retrieveing and updating Ref and FiberRef variables requries a flatMap/for-comprehension call, it is typically very difficult to use them with branching/looping constructs. ZIO-direct makes these cases much easier."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"class DatabaseApi {\n  val connRef = FiberRef.make[Option[Connection]](None)\n  def openConnection(): Connection = lowLevelDatabaseApi.openConnection()\n  def transaction(action: Action) =\n    defer {\n      val conn = connRef.get.run\n      if (conn == None) {\n        connRef.set(Some(openConnection())).run\n      }\n      val conn1 = connRef.get.run\n      conn.execute(action).run\n    }\n}\n")),(0,i.kt)("p",null,"Instead of having to write the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"class DatabaseApi {\n  val connRef = FiberRef.make[Option[Connection]](None)\n  def openConnection(): Connection = lowLevelDatabaseApi.openConnection()\n  def transaction(action: Action) =\n    connRef.get.flatMap { conn =>\n      (if (conn == None) {\n        connRef.set(Some(openConnection()))\n      } else {\n        ZIO.unit\n      }).flatMap(_ => connRef.get.flatMap { conn1 =>\n        conn1.execute(action)\n      })\n    }\n\n  // Note that for-comprehensions do not help very much in this use-case\n  def transaction0(action: Action) =\n    for {\n      conn <- connRef.get\n      _ <- if (conn == None) {\n        connRef.set(Some(openConnection()))\n      } else {\n        ZIO.unit\n      }\n      conn1 <- connRef.get\n      _ <- conn1.execute(action)\n    }\n}\n")))}u.isMDXComponent=!0}}]);