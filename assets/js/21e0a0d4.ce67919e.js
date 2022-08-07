"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[7086],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>m});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),d=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=d(e.components);return t.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?t.createElement(f,o(o({ref:a},p),{},{components:n})):t.createElement(f,o({ref:a},p))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},91007:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=n(87462),r=(n(67294),n(3905));const i={id:"zmanaged",title:"ZManaged"},o=void 0,l={unversionedId:"datatypes/resource/zmanaged",id:"version-1.x/datatypes/resource/zmanaged",title:"ZManaged",description:"A ZManaged[R, E, A] is a managed resource, that requires an R, and may fail with an E value, or succeed with an A.",source:"@site/versioned_docs/version-1.x/datatypes/resource/zmanaged.md",sourceDirName:"datatypes/resource",slug:"/datatypes/resource/zmanaged",permalink:"/version-1.x/datatypes/resource/zmanaged",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/resource/zmanaged.md",tags:[],version:"1.x",frontMatter:{id:"zmanaged",title:"ZManaged"},sidebar:"datatypes-sidebar",previous:{title:"Introduction",permalink:"/version-1.x/datatypes/resource/"},next:{title:"Managed",permalink:"/version-1.x/datatypes/resource/managed"}},s={},d=[{value:"Creation",id:"creation",level:2},{value:"Making",id:"making",level:3},{value:"Lifting a pure value",id:"lifting-a-pure-value",level:3},{value:"Lifting a ZIO effect",id:"lifting-a-zio-effect",level:3},{value:"Making from AutoClosable Resources",id:"making-from-autoclosable-resources",level:3},{value:"Making Interruptible Acquires",id:"making-interruptible-acquires",level:3},{value:"Usage",id:"usage",level:2},{value:"use",id:"use",level:3},{value:"useNow",id:"usenow",level:3},{value:"useForever",id:"useforever",level:3},{value:"Combinators",id:"combinators",level:2}],p={toc:d};function u(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged[R, E, A]")," is a managed resource, that requires an ",(0,r.kt)("inlineCode",{parentName:"p"},"R"),", and may fail with an ",(0,r.kt)("inlineCode",{parentName:"p"},"E")," value, or succeed with an ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged")," is a data structure that encapsulates the acquisition and the release of a resource, which may be used by invoking the ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," method of the resource. The resource will be automatically acquired before the resource is used and automatically released after the resource is used."),(0,r.kt)("p",null,"Resources do not survive the scope of ",(0,r.kt)("inlineCode",{parentName:"p"},"use"),", meaning that if we attempt to capture the resource, leak it from ",(0,r.kt)("inlineCode",{parentName:"p"},"use"),", and then use it after the resource has been consumed, the resource will not be valid anymore and may fail with some checked error, as per the type of the functions provided by the resource."),(0,r.kt)("h2",{id:"creation"},"Creation"),(0,r.kt)("p",null,"In this section, we explore some common ways to create managed resources."),(0,r.kt)("h3",{id:"making"},"Making"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged")," has a ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," constructor which requires ",(0,r.kt)("inlineCode",{parentName:"p"},"acquire")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"release")," actions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val managed = ZManaged.make(acquire)(release)\n")),(0,r.kt)("p",null,"In the following example, we have a managed resource which requires ",(0,r.kt)("inlineCode",{parentName:"p"},"Console")," as an environment to print the first line of a given file. The ",(0,r.kt)("inlineCode",{parentName:"p"},"BufferedReader")," will be acquired before printing the first line and automatically will be released after using ",(0,r.kt)("inlineCode",{parentName:"p"},"BufferedReader"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.console._\ndef printFirstLine(file: String): ZIO[Console, Throwable, Unit] = {\n  def acquire(file: String) = ZIO.effect(new BufferedReader(new FileReader(file)))\n  def release(reader: BufferedReader) = ZIO.effectTotal(reader.close())\n\n  ZManaged.make(acquire(file))(release).use { reader =>\n    putStrLn(reader.readLine()) \n  }\n}\n")),(0,r.kt)("p",null,"If we need to have different logic in ",(0,r.kt)("inlineCode",{parentName:"p"},"release")," action based on exit status of ",(0,r.kt)("inlineCode",{parentName:"p"},"acquire")," action, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged.makeExit")," constructor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZManaged[-R, +E, +A] {\n  def makeExit[R, R1 <: R, E, A](\n    acquire: ZIO[R, E, A]\n  )(release: (A, Exit[Any, Any]) => ZIO[R1, Nothing, Any]): ZManaged[R1, E, A]\n}\n")),(0,r.kt)("p",null,"Not that like ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged.make"),", both of ",(0,r.kt)("inlineCode",{parentName:"p"},"acquire")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"release")," actions are uninterruptible in ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged.makeExit"),"."),(0,r.kt)("h3",{id:"lifting-a-pure-value"},"Lifting a pure value"),(0,r.kt)("p",null,"We can lift pure values to ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO.succeed")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val managedString = ZManaged.succeed("Hello, World!")\nval managedBoolean = ZManaged.succeed(true)\n')),(0,r.kt)("h3",{id:"lifting-a-zio-effect"},"Lifting a ZIO effect"),(0,r.kt)("p",null,"Every ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," effect can be lifted to ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged.fromEffect")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#toZManaged_")," operations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val managedHello = ZManaged.fromEffect(putStrLn("Hello, World!"))\nval managedHello_ = putStrLn("Hello, World!").toManaged_\n')),(0,r.kt)("p",null,"This is useful when we want to combine ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged")," effects with ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," effects. Assume during creation of managed resource, we need to log some information, we can lift a ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," effect to ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged")," world:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'def userRepository: ZManaged[Blocking with Console, Throwable, UserRepository] = for {\n  cfg <- dbConfig.toManaged_\n  _ <- putStrLn("Read database config").toManaged_\n  _ <- initializeDb(cfg).toManaged_\n  _ <- putStrLn("Database initialized").toManaged_\n  xa <- makeTransactor(cfg)\n  _ <- putStrLn("Created new blocking transactor").toManaged_\n} yield new UserRepository(xa)\n')),(0,r.kt)("h3",{id:"making-from-autoclosable-resources"},"Making from AutoClosable Resources"),(0,r.kt)("p",null,"If the resource implemented the ",(0,r.kt)("inlineCode",{parentName:"p"},"AutoClosable")," interface, we can easily make a ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged")," from it by using ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged.fromAutoClosable")," constructor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'ZManaged.fromAutoCloseable(ZIO.effect(new FileInputStream("file.txt")))\n// res1: ZManaged[Any, Throwable, FileInputStream] = zio.ZManaged$$anon$2@5cae2b56\nZManaged.fromAutoCloseable(ZIO.effect(fromResource("file.txt")))\n// res2: ZManaged[Any, Throwable, scala.io.BufferedSource] = zio.ZManaged$$anon$2@427b0848\nZManaged.fromAutoCloseable(ZIO.effect(fromFile("file.txt")))\n// res3: ZManaged[Any, Throwable, scala.io.BufferedSource] = zio.ZManaged$$anon$2@443085a6\n')),(0,r.kt)("h3",{id:"making-interruptible-acquires"},"Making Interruptible Acquires"),(0,r.kt)("p",null,"By default, when we create a ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged")," via ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged.make")," constructor, the ",(0,r.kt)("inlineCode",{parentName:"p"},"acquire")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"release")," actions are ",(0,r.kt)("em",{parentName:"p"},"uninterruptible"),". But what if we want to make the ",(0,r.kt)("inlineCode",{parentName:"p"},"acquire")," action interruptible? The ",(0,r.kt)("inlineCode",{parentName:"p"},"makeInterruptible")," constructor does that for us:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZManaged[-R, +E, +A] {\n  def makeInterruptible[R, E, A](\n    acquire: ZIO[R, E, A]\n  )(release: A => URIO[R, Any]): ZManaged[R, E, A]\n}\n")),(0,r.kt)("p",null,"Making ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged")," via this constructor makes the ",(0,r.kt)("inlineCode",{parentName:"p"},"acquire")," action interruptible, the release action remains uninterruptible."),(0,r.kt)("p",null,"If we want to decide what to do in the ",(0,r.kt)("inlineCode",{parentName:"p"},"release")," action based on how the ",(0,r.kt)("inlineCode",{parentName:"p"},"acquire")," action is completed, whether by success, failure, or interruption; we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"makeReserve")," constructor. The type of ",(0,r.kt)("inlineCode",{parentName:"p"},"release")," action is ",(0,r.kt)("inlineCode",{parentName:"p"},"Exit[Any, Any] => URIO[R, Any]")," which provides us the ",(0,r.kt)("inlineCode",{parentName:"p"},"Exit")," status of the ",(0,r.kt)("inlineCode",{parentName:"p"},"acquire")," action, so we can decide what to do based on the exit status of ",(0,r.kt)("inlineCode",{parentName:"p"},"acquire")," action:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZManaged[-R, +E, +A] {\n  def makeReserve[R, E, A](reservation: ZIO[R, E, Reservation[R, E, A]]): ZManaged[R, E, A]\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Reservation")," data type is defined as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"final case class Reservation[-R, +E, +A](acquire: ZIO[R, E, A], release: Exit[Any, Any] => URIO[R, Any])\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"use"},"use"),(0,r.kt)("p",null,"Inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," block, we can use the managed resource and return a new value. The ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," method converts a managed resource from ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged")," world to ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," world:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def firstLine(file: String): ZIO[Console, Throwable, Unit] =\n  ZManaged.fromAutoCloseable(ZIO.effect(fromFile(file))).use { reader =>\n    putStrLn(reader.bufferedReader().readLine())\n  }\n")),(0,r.kt)("h3",{id:"usenow"},"useNow"),(0,r.kt)("p",null,"If our managed resource could be valid after releasing resources, we can convert that ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," effect by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged#useNow"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val hello: UIO[String] = ZManaged.succeed("Hello, World!").useNow\n')),(0,r.kt)("p",null,"This is useful when we have composed some ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged")," with some ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," effects, and the result can be outlived outside the ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def is(file: String): Task[FileInputStream]  = Task.effect(???)\ndef os(file: String): Task[FileOutputStream] = Task.effect(???)\n\ndef close(resource: Closeable): UIO[Unit] = Task.effectTotal(???)\ndef copy(from: FileInputStream, to: FileOutputStream): Task[Unit] = ???\n\ndef transfer(from: String, to: String): ZIO[Any, Throwable, Unit] = {\n  val resource: ZManaged[Any, Throwable, Unit] = for {\n    from <- ZManaged.make(is(from))(close)\n    to   <- ZManaged.make(os(to))(close)\n    _    <- copy(from, to).toManaged_\n  } yield ()\n  resource.useNow\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("p",{parentName:"blockquote"},"Be careful, don\u2019t call the ",(0,r.kt)("inlineCode",{parentName:"p"},"useNow")," method on a managed resource that isn\u2019t valid after its release actions. For example, running ",(0,r.kt)("inlineCode",{parentName:"p"},"useNow")," on ",(0,r.kt)("inlineCode",{parentName:"p"},'ZManaged.fromAutoCloseable(ZIO.effect(fromFile("file.txt")))')," doesn\u2019t make sense, because after releasing a file, we haven\u2019t any handle to that file.")),(0,r.kt)("h3",{id:"useforever"},"useForever"),(0,r.kt)("p",null,"Assume we are going to make a managed resource long-lived. The ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged#useForever")," does that for us, it converts a ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged")," effect to a ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," effect which will remain forever running."),(0,r.kt)("h2",{id:"combinators"},"Combinators"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged")," like the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," effect has almost all combinators that we introduced on the ",(0,r.kt)("a",{parentName:"p",href:"/version-1.x/datatypes/core/zio"},"ZIO")," page. We can use them to create more complicated ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged")," ones."),(0,r.kt)("p",null,"There is also some combinators which specific for ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"ensuringFirst"),"\u2014 This combinator adds a ",(0,r.kt)("inlineCode",{parentName:"li"},"ZIO")," effect as a finalizer to an existing ",(0,r.kt)("inlineCode",{parentName:"li"},"ZManaged")," effect. This finalizer will be executed before the existing finalizers:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZManaged[-R, +E, +A] {\n  def ensuringFirst[R1 <: R](f: ZIO[R1, Nothing, Any]): ZManaged[R1, E, A]\n}\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"onExitFirst"),"\u2014 Like ",(0,r.kt)("inlineCode",{parentName:"li"},"ensuringFirst"),", but it has access to the ",(0,r.kt)("inlineCode",{parentName:"li"},"ZManaged"),"\u2019s result:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZManaged[-R, +E, +A] {\n  def onExitFirst[R1 <: R](cleanup: Exit[E, A] => ZIO[R1, Nothing, Any]): ZManaged[R1, E, A]\n}\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"withEarlyRelease"),"\u2014 It will produce another ",(0,r.kt)("inlineCode",{parentName:"li"},"ZManaged")," which provides a canceler that can be used to eagerly execute the finalizer of this ",(0,r.kt)("inlineCode",{parentName:"li"},"ZManaged"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZManaged[-R, +E, +A] {\n  def withEarlyRelease: ZManaged[R, E, (UIO[Any], A)]\n}\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"withEarlyReleaseExit"),"\u2014 Like ",(0,r.kt)("inlineCode",{parentName:"li"},"withEarlyRelease"),", but allows us to specify an exit value in the event of early release:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZManaged[-R, +E, +A] {\n  def withEarlyReleaseExit(e: Exit[Any, Any]): ZManaged[R, E, (UIO[Any], A)]\n}\n")))}u.isMDXComponent=!0}}]);