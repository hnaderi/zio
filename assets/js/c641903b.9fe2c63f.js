"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[498],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},51648:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={id:"zio-ftp",title:"ZIO FTP"},a=void 0,l={unversionedId:"resources/ecosystem/officials/zio-ftp",id:"resources/ecosystem/officials/zio-ftp",title:"ZIO FTP",description:"ZIO FTP is a simple, idiomatic (S)FTP client for ZIO.",source:"@site/docs/resources/ecosystem/officials/zio-ftp.md",sourceDirName:"resources/ecosystem/officials",slug:"/resources/ecosystem/officials/zio-ftp",permalink:"/resources/ecosystem/officials/zio-ftp",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/resources/ecosystem/officials/zio-ftp.md",tags:[],version:"current",frontMatter:{id:"zio-ftp",title:"ZIO FTP"},sidebar:"resources-sidebar",previous:{title:"ZIO Config",permalink:"/resources/ecosystem/officials/zio-config"},next:{title:"ZIO JSON",permalink:"/resources/ecosystem/officials/zio-json"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-ftp"},"ZIO FTP")," is a simple, idiomatic (S)FTP client for ZIO."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-ftp" % "0.3.0" \n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"First we need an FTP server if we don't have:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -d \\\n    -p 21:21 \\\n    -p 21000-21010:21000-21010 \\\n    -e USERS="one|1234" \\\n    -e ADDRESS=localhost \\\n    delfer/alpine-ftp-server\n')),(0,o.kt)("p",null,"Now we can run the example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.blocking.Blocking\nimport zio.console.putStrLn\nimport zio.ftp.Ftp._\nimport zio.ftp._\nimport zio.stream.{Transducer, ZStream}\nimport zio.{Chunk, ExitCode, URIO, ZIO}\n\nobject ZIOFTPExample extends zio.App {\n  private val settings =\n    UnsecureFtpSettings("127.0.0.1", 21, FtpCredentials("one", "1234"))\n\n  private val myApp = for {\n    _        <- putStrLn("List of files at root directory:")\n    resource <- ls("/").runCollect\n    _        <- ZIO.foreach(resource)(e => putStrLn(e.path))\n    path = "~/file.txt"\n    _ <- upload(\n      path,\n      ZStream.fromChunk(\n        Chunk.fromArray("Hello, ZIO FTP!\\nHello, World!".getBytes)\n      )\n    )\n    file <- readFile(path)\n      .transduce(Transducer.utf8Decode)\n      .runCollect\n    _ <- putStrLn(s"Content of $path file:")\n    _ <- putStrLn(file.fold("")(_ + _))\n  } yield ()\n\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] = myApp\n    .provideCustom(\n      unsecure(settings) ++ Blocking.live\n    )\n    .exitCode\n}\n')))}u.isMDXComponent=!0}}]);