"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[51301],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,p(p({ref:t},c),{},{components:a})):n.createElement(h,p({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,p=new Array(r);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<r;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},73755:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={sidebar_position:2},p="Getting Started",i={unversionedId:"v1.x/getting-started",id:"v1.x/getting-started",title:"Getting Started",description:"ZIO HTTP is a powerful library that is used to build highly performant HTTP-based services and clients using functional scala and ZIO and uses Netty as its core.",source:"@site/node_modules/@zio.dev/zio-http/v1.x/getting-started.md",sourceDirName:"v1.x",slug:"/v1.x/getting-started",permalink:"/zio-http/v1.x/getting-started",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/zio-http/v1.x/"},next:{title:"Server",permalink:"/zio-http/v1.x/dsl/server"}},l={},s=[{value:"Http",id:"http",level:2},{value:"Creating a &quot;<em>Hello World</em>&quot; app",id:"creating-a-hello-world-app",level:3},{value:"Routing",id:"routing",level:3},{value:"Composition",id:"composition",level:3},{value:"ZIO Integration",id:"zio-integration",level:3},{value:"Accessing the Request",id:"accessing-the-request",level:3},{value:"Testing",id:"testing",level:3},{value:"Socket",id:"socket",level:2},{value:"Creating a socket app",id:"creating-a-socket-app",level:3},{value:"Server",id:"server",level:2},{value:"Starting an HTTP App",id:"starting-an-http-app",level:3},{value:"Examples",id:"examples",level:2}],c={toc:s};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ZIO HTTP")," is a powerful library that is used to build highly performant HTTP-based services and clients using functional scala and ZIO and uses ",(0,o.kt)("a",{parentName:"p",href:"https://netty.io/"},"Netty")," as its core.\nZIO HTTP has powerful functional domains which help in creating, modifying, composing apps easily. Let's start with the HTTP domain.\nThe first step when using ZIO HTTP is creating an HTTP app. "),(0,o.kt)("h2",{id:"http"},"Http"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Http")," is a domain that models HTTP apps using ZIO and works over any request and response types. ",(0,o.kt)("inlineCode",{parentName:"p"},"Http")," Domain provides different constructors to create HTTP apps, ",(0,o.kt)("inlineCode",{parentName:"p"},"Http.text"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Http.html"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Http.fromFile"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Http.fromData"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Http.fromStream"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Http.fromEffect"),".  "),(0,o.kt)("h3",{id:"creating-a-hello-world-app"},'Creating a "',(0,o.kt)("em",{parentName:"h3"},"Hello World"),'" app'),(0,o.kt)("p",null,'Creating an HTTP app using ZIO Http is as simple as given below, this app will always respond with "Hello World!"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\n\nval app = Http.text("Hello World!")\n')),(0,o.kt)("p",null,"An app can be made using any of the available constructors on ",(0,o.kt)("inlineCode",{parentName:"p"},"zio.Http"),"."),(0,o.kt)("h3",{id:"routing"},"Routing"),(0,o.kt)("p",null," For handling routes, Http Domain has a ",(0,o.kt)("inlineCode",{parentName:"p"},"collect")," method that, accepts different requests and produces responses. Pattern matching on the route is supported by the framework.\nThe example below shows how to create routes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\n\nval app = Http.collect[Request] {\n  case Method.GET -> !! / "fruits" / "a"  => Response.text("Apple")\n  case Method.GET -> !! / "fruits" / "b"  => Response.text("Banana")\n}\n')),(0,o.kt)("p",null,"You can create typed routes as well. The below example shows how to accept count as ",(0,o.kt)("inlineCode",{parentName:"p"},"Int")," only."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\n\nval app = Http.collect[Request] {\n  case Method.GET -> !! / "Apple" / int(count)  => Response.text(s"Apple: $count")\n}\n')),(0,o.kt)("h3",{id:"composition"},"Composition"),(0,o.kt)("p",null,"Apps can be composed using operators in ",(0,o.kt)("inlineCode",{parentName:"p"},"Http"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using the ",(0,o.kt)("inlineCode",{parentName:"li"},"++")," operator. The way it works is, if none of the routes match in ",(0,o.kt)("inlineCode",{parentName:"li"},"a"),", then the control is passed on to the ",(0,o.kt)("inlineCode",{parentName:"li"},"b")," app.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},' import zio.http._\n \n val a = Http.collect[Request] { case Method.GET -> !! / "a"  => Response.ok }\n val b = Http.collect[Request] { case Method.GET -> !! / "b"  => Response.ok }\n \n val app = a ++ b\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using the ",(0,o.kt)("inlineCode",{parentName:"li"},"<>")," operator. The way it works is, if ",(0,o.kt)("inlineCode",{parentName:"li"},"a")," fails, then the control is passed on to the ",(0,o.kt)("inlineCode",{parentName:"li"},"b")," app.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\n\nval a = Http.fail(new Error("SERVER_ERROR"))\nval b = Http.text("OK")\n\nval app = a <> b\n')),(0,o.kt)("h3",{id:"zio-integration"},"ZIO Integration"),(0,o.kt)("p",null,"For creating effectful apps, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"collectZIO")," and wrap ",(0,o.kt)("inlineCode",{parentName:"p"},"Response")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"UIO")," to produce ZIO effect value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val app = Http.collectZIO[Request] {\n  case Method.GET -> !! / "hello" => UIO(Response.text("Hello World"))\n}\n')),(0,o.kt)("h3",{id:"accessing-the-request"},"Accessing the Request"),(0,o.kt)("p",null,"To access the request use ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," as it binds a matched pattern to a variable and can be used while creating a response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\n\nval app = Http.collectZIO[Request] {\n    case req @ Method.GET -> !! / "fruits" / "a"  =>\n      UIO(Response.text("URL:" + req.url.path.asString + " Headers: " + req.getHeaders))\n    case req @ Method.POST -> !! / "fruits" / "a" =>\n      req.bodyAsString.map(Response.text(_))\n  }\n')),(0,o.kt)("h3",{id:"testing"},"Testing"),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"Http")," is a function of the form ",(0,o.kt)("inlineCode",{parentName:"p"},"A => ZIO[R, Option[E], B]")," to test it you can simply call an ",(0,o.kt)("inlineCode",{parentName:"p"},"Http")," like a function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.test._\nimport zio.http._\n\nobject Spec extends DefaultRunnableSpec {\n\n  def spec = suite("http")(\n      test("should be ok") {\n        val app = Http.ok\n        val req = Request()\n        assertZIO(app(req))(equalTo(Response.ok))\n      }\n    )\n}\n')),(0,o.kt)("p",null,"When we call the ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," it calls the apply method of ",(0,o.kt)("inlineCode",{parentName:"p"},"Http")," via ",(0,o.kt)("inlineCode",{parentName:"p"},"zio.test")," package"),(0,o.kt)("h2",{id:"socket"},"Socket"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Socket")," is functional domain in ZIO HTTP. It provides constructors to create socket apps.\nA socket app is an app that handles WebSocket connections."),(0,o.kt)("h3",{id:"creating-a-socket-app"},"Creating a socket app"),(0,o.kt)("p",null,"Socket app can be created by using ",(0,o.kt)("inlineCode",{parentName:"p"},"Socket")," constructors. To create a socket app, you need to create a socket that accepts ",(0,o.kt)("inlineCode",{parentName:"p"},"WebSocketFrame")," and produces ",(0,o.kt)("inlineCode",{parentName:"p"},"ZStream")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"WebSocketFrame"),".\nFinally, we need to convert socketApp to ",(0,o.kt)("inlineCode",{parentName:"p"},"Response")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"toResponse"),", so that we can run it like any other HTTP app.",(0,o.kt)("br",{parentName:"p"}),"\n","The below example shows a simple socket app, we are using ",(0,o.kt)("inlineCode",{parentName:"p"},"collect"),' which returns a stream with WebsSocketTextFrame "BAR" on receiving WebsSocketTextFrame "FOO".   '),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.socket._\n\nprivate val socket = Socket.collect[WebSocketFrame] { case WebSocketFrame.Text("FOO") =>\n    ZStream.succeed(WebSocketFrame.text("BAR"))\n  }\n\n  private val app = Http.collectZIO[Request] {\n    case Method.GET -> !! / "greet" / name => UIO(Response.text(s"Greetings {$name}!"))\n    case Method.GET -> !! / "ws"           => socket.toResponse\n  }\n')),(0,o.kt)("h2",{id:"server"},"Server"),(0,o.kt)("p",null,"As we have seen how to create HTTP apps, the only thing left is to run an  HTTP server and serve requests.\nZIO HTTP provides a way to set configurations for your server. The server can be configured according to the leak detection level, request size, address etc. "),(0,o.kt)("h3",{id:"starting-an-http-app"},"Starting an HTTP App"),(0,o.kt)("p",null,"To launch our app, we need to start the server on a port. The below example shows a simple HTTP app that responds with empty content and a ",(0,o.kt)("inlineCode",{parentName:"p"},"200")," status code, deployed on port ",(0,o.kt)("inlineCode",{parentName:"p"},"8090")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"Server.start"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.http._\nimport zio.http.Server\nimport zio._\n\nobject HelloWorld extends App {\n  val app = Http.ok\n\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =\n    Server.start(8090, app).exitCode\n}\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zio.github.io/zio-http/docs/v1.x/examples/zio-http-basic-examples/http_server"},"HTTP Server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zio.github.io/zio-http/docs/v1.x/examples/advanced-examples/advanced_server"},"Advanced Server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zio.github.io/zio-http/docs/v1.x/examples/zio-http-basic-examples/web-socket"},"WebSocket Server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zio.github.io/zio-http/docs/v1.x/examples/advanced-examples/stream-response"},"Streaming Response")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zio.github.io/zio-http/docs/v1.x/examples/zio-http-basic-examples/http_client"},"HTTP Client")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zio.github.io/zio-http/docs/v1.x/examples/advanced-examples/stream-file"},"File Streaming")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zio.github.io/zio-http/docs/v1.x/examples/advanced-examples/authentication"},"Authentication"))))}d.isMDXComponent=!0}}]);