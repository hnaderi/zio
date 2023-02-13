"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[16833],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=o(a),m=r,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||s;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var o=2;o<s;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},71629:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const s={sidebar_position:"3"},l="Request",i={unversionedId:"zio-http/v1.x/dsl/request",id:"zio-http/v1.x/dsl/request",title:"Request",description:"ZIO HTTP Request is designed in the simplest way possible to decode HTTP Request into a ZIO HTTP request.",source:"@site/docs/zio-http/v1.x/dsl/request.md",sourceDirName:"zio-http/v1.x/dsl",slug:"/zio-http/v1.x/dsl/request",permalink:"/zio-http/v1.x/dsl/request",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/v1.x/dsl/request.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3}},p={},o=[{value:"Creating a Request",id:"creating-a-request",level:2},{value:"Matching and Extracting Requests",id:"matching-and-extracting-requests",level:2},{value:"Method",id:"method",level:3},{value:"Path",id:"path",level:3},{value:"Accessing the Request",id:"accessing-the-request",level:2},{value:"Creating and reading a Request with query params",id:"creating-and-reading-a-request-with-query-params",level:2}],u={toc:o},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"request"},"Request"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZIO HTTP")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Request")," is designed in the simplest way possible to decode HTTP Request into a ZIO HTTP request.\nIt supports all HTTP request methods (as defined in ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc2616"},"RFC2616")," ) and headers along with custom methods and headers."),(0,r.kt)("h2",{id:"creating-a-request"},"Creating a Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Request")," can be created with ",(0,r.kt)("inlineCode",{parentName:"p"},"method"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"headers"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"remoteAddress")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),".\nCreating requests using ",(0,r.kt)("inlineCode",{parentName:"p"},"Request")," is useful while writing unit tests."),(0,r.kt)("p",null,"The below snippet creates a request with default params, ",(0,r.kt)("inlineCode",{parentName:"p"},"method")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"Method.GET"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"URL.root"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"headers")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"Headers.empty"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"Body.Empty"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"remoteAddress")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"None")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val request: Request = Request()\n")),(0,r.kt)("h2",{id:"matching-and-extracting-requests"},"Matching and Extracting Requests"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Request")," can be extracted into an HTTP Method and Path via ",(0,r.kt)("inlineCode",{parentName:"p"},"->"),". On the left side is the ",(0,r.kt)("inlineCode",{parentName:"p"},"Method"),", and on the right side, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Path"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'Method.GET -> !! / "text"\n')),(0,r.kt)("h3",{id:"method"},"Method"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"Method")," represents HTTP methods like POST, GET, PUT, PATCH, and DELETE.\nYou can create existing HTTP methods such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Method.GET"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Method.POST")," etc or create a custom one."),(0,r.kt)("h3",{id:"path"},"Path"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"Path")," can be created using"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"!!")," which represents the root"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/")," which represents the path delimiter and starts the extraction from the left-hand side of the expression"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/:")," which represents the path delimiter and starts the extraction from the right-hand side of the expression and can match paths partially ")),(0,r.kt)("p",null,"The below snippet creates an ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpApp")," that accepts an input of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Request")," and output of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Response")," with two paths.\nAccording to the request path, it will respond with the corresponding response:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if the request has path ",(0,r.kt)("inlineCode",{parentName:"li"},"/name")," it will match the first route."),(0,r.kt)("li",{parentName:"ul"},"if the request has path ",(0,r.kt)("inlineCode",{parentName:"li"},"/name/joe/wilson")," it will match the second route as ",(0,r.kt)("inlineCode",{parentName:"li"},"/:")," matches the path partially as well.  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'  val app: HttpApp[Any, Nothing] = Http.collect[Request] {\n     case Method.GET -> !! / a => Response.text(s"$a")\n     case Method.GET -> "" /: "name" /: a => Response.text(s"$a")\n   }\n')),(0,r.kt)("h2",{id:"accessing-the-request"},"Accessing the Request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getBody")," to access the content of request as a Chunk","[Byte]")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"  val app = Http.collectZIO[Request] { case req => req.getBody.as(Response.ok) }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getBodyAsString")," to access the content of request as string")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"  val app = Http.collectZIO[Request] { case req => req.bodyAsString.as(Response.ok) }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getHeaders")," to get all the headers in the Request")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'  val app = Http.collect[Request] { case req => Response.text(req.getHeaders.toList.mkString("")) }\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"method")," to access request method")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val app = Http.collect[Request] { case req => Response.text(req.method.toString())}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path")," to access request path")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"  val app = Http.collect[Request] { case req => Response.text(req.path.toString())}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"remoteAddress")," to access request's remote address if available")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"  val app = Http.collect[Request] { case req => Response.text(req.remoteAddress.toString())}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url")," to access the complete url")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"  val app = Http.collect[Request] { case req => Response.text(req.url.toString())}\n")),(0,r.kt)("h2",{id:"creating-and-reading-a-request-with-query-params"},"Creating and reading a Request with query params"),(0,r.kt)("p",null,"Query params can be added in the request using ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"Request"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"URL")," stores query params as ",(0,r.kt)("inlineCode",{parentName:"p"},"Map[String, List[String]]"),"."),(0,r.kt)("p",null,"The below snippet creates a request with query params: ",(0,r.kt)("inlineCode",{parentName:"p"},"?q=a&q=b&q=c")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'      val request: Request = Request(url = URL(!!, queryParams = Map("q" -> List("a","b","c"))))\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"url.queryParams")," can be used to read query params from the request"),(0,r.kt)("p",null,"The below snippet shows how to read query params from request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'  val app = Http.collect[Request] { case req => Response.text(req.url.queryParams.mkString(""))}\n')))}c.isMDXComponent=!0}}]);