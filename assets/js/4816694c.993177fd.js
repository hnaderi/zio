"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[3972],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},18346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={id:"failures",title:"Failures"},o=void 0,l={unversionedId:"reference/error-management/types/failures",id:"reference/error-management/types/failures",title:"Failures",description:"When writing ZIO application, we can model a failure, using the ZIO.fail constructor:",source:"@site/docs/reference/error-management/types/failures.md",sourceDirName:"reference/error-management/types",slug:"/reference/error-management/types/failures",permalink:"/reference/error-management/types/failures",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/error-management/types/failures.md",tags:[],version:"current",frontMatter:{id:"failures",title:"Failures"},sidebar:"reference-sidebar",previous:{title:"Three Types of Errors",permalink:"/reference/error-management/types/"},next:{title:"Defects",permalink:"/reference/error-management/types/defects"}},p={},c=[],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When writing ZIO application, we can model a failure, using the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO.fail")," constructor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZIO {\n  def fail[E](error: => E): ZIO[Any, E, Nothing]\n}\n")),(0,a.kt)("p",null,"Let's try to model some failures using this constructor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval f1: ZIO[Any, String, Nothing] = ZIO.fail("Oh uh!")\nval f2: ZIO[Any, String, Int]     = ZIO.succeed(5) *> ZIO.fail("Oh uh!")\n')),(0,a.kt)("p",null,"Now, let's try to run a failing effect and see what happens:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  def run = ZIO.succeed(5) *> ZIO.fail("Oh uh!")\n}\n')),(0,a.kt)("p",null,"This will crash the application and print the following stack trace:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'timestamp=2022-03-08T17:55:50.002161369Z level=ERROR thread=#zio-fiber-0 message="Exception in thread "zio-fiber-2" java.lang.String: Oh uh!\n    at <empty>.MainApp.run(MainApp.scala:4)"\n')),(0,a.kt)("p",null,"We can also model a failure using ",(0,a.kt)("inlineCode",{parentName:"p"},"Exception"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'val f2: ZIO[Any, Exception, Nothing] =\n  ZIO.fail(new Exception("Oh uh!"))\n')),(0,a.kt)("p",null,"Or using user-defined failure types (domain errors):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'case class NegativeNumberException(msg: String) extends Exception(msg)\n\nval validateNonNegaive(input: Int): ZIO[Any, NegativeNumberException, Int] =\n  if (input < 0)\n    ZIO.fail(NegativeNumberException(s"entered negative number: $input"))\n  else\n    ZIO.succeed(input)\n')),(0,a.kt)("p",null,"In the above examples, we can see that the type of the ",(0,a.kt)("inlineCode",{parentName:"p"},"validateNonNegaive")," function is ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO[Any, NegativeNumberException, Int]"),". It means this is an exceptional effect, which may fail with the type of ",(0,a.kt)("inlineCode",{parentName:"p"},"NegativeNumberException"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO.fail")," constructor is somehow the moral equivalent of ",(0,a.kt)("inlineCode",{parentName:"p"},"throw")," for pure codes. We will discuss this ",(0,a.kt)("a",{parentName:"p",href:"/reference/error-management/imperative-vs-declarative"},"further"),"."))}u.isMDXComponent=!0}}]);