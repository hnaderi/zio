"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[94803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||g[d]||o;return n?i.createElement(f,r(r({ref:t},p),{},{components:n})):i.createElement(f,r({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));const o={id:"debug-a-zio-application",title:"Tutorial: How to Debug a ZIO Application?",sidebar_label:"Debugging a ZIO Application"},r=void 0,l={unversionedId:"guides/tutorials/debug-a-zio-application",id:"guides/tutorials/debug-a-zio-application",title:"Tutorial: How to Debug a ZIO Application?",description:"Introduction",source:"@site/docs/guides/tutorials/debug-a-zio-application.md",sourceDirName:"guides/tutorials",slug:"/guides/tutorials/debug-a-zio-application",permalink:"/guides/tutorials/debug-a-zio-application",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/guides/tutorials/debug-a-zio-application.md",tags:[],version:"current",frontMatter:{id:"debug-a-zio-application",title:"Tutorial: How to Debug a ZIO Application?",sidebar_label:"Debugging a ZIO Application"},sidebar:"guides-sidebar",previous:{title:"Monitoring a ZIO Application Using ZIO's Built-in Metric System",permalink:"/guides/tutorials/monitor-a-zio-application-using-zio-built-in-metric-system"},next:{title:"Building a RESTful Web Service",permalink:"/guides/tutorials/build-a-restful-webservice"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Debugging an Ordinary Scala Application",id:"debugging-an-ordinary-scala-application",level:2},{value:"Debugging a ZIO Application Using <code>debug</code> Effect",id:"debugging-a-zio-application-using-debug-effect",level:2},{value:"Debugging Using a Debugger",id:"debugging-using-a-debugger",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u},c="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Writing applications using functional programming helps us to write a base code that is less error-prone and more predictable. However, we often make mistakes when developing applications. Even though we have written lots of tests, we might have missed some areas of our code that could have caused errors. Finally, in the middle of one night, the alarm starts calling and paging us to take the right action for the error in production. This is where debugging comes in. It is a process of finding the root cause of the error and then fixing it. Sometimes this process takes a large amount of time and effort."),(0,a.kt)("p",null,"In this article, we are going to learn how to debug a ZIO application. We will start with the simplest example of a ZIO application and then move to the more complex ones."),(0,a.kt)("h2",{id:"debugging-an-ordinary-scala-application"},"Debugging an Ordinary Scala Application"),(0,a.kt)("p",null,"Before talking about debugging functional effects, we need to understand how to debug an ordinary Scala application. In scala, one simple way to debug a code is to use ",(0,a.kt)("inlineCode",{parentName:"p"},"print")," statements to print the intermediate values of the computation to the console."),(0,a.kt)("p",null,"Assume we have the following fibonacci function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"def fib(n: Int): Int = {\n  @annotation.tailrec\n  def go(n: Int, a: Int, b: Int): Int =\n    if (n == 0) a\n    else go(n - 1, b, a + b) \n  go(n, 0, 1)\n}\n")),(0,a.kt)("p",null,"The implementation of this function is correct, but for pedagogical purposes, let's debug it by printing the intermediate values of the computation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'def fib(n: Int): Int = {\n  @annotation.tailrec\n  def go(n: Int, a: Int, b: Int): Int =\n    if (n == 0) {\n      println(s"final result: $a")\n      a\n    } else {\n      println(s"go(${n - 1}, $b, ${a + b})")\n      go(n - 1, b, a + b)\n    }\n  println(s"go($n, 0, 1)")\n  go(n, 0, 1)\n}\n')),(0,a.kt)("p",null,"Now if we call ",(0,a.kt)("inlineCode",{parentName:"p"},"fib(3)"),", we will see the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go(3, 0, 1)\ngo(2, 1, 1)\ngo(1, 1, 2)\ngo(0, 2, 3)\nfinal result: 2\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"print")," statements are the easiest way for lazy programmers to debug their code. However, they are not the most efficient way to debug code."),(0,a.kt)("h2",{id:"debugging-a-zio-application-using-debug-effect"},"Debugging a ZIO Application Using ",(0,a.kt)("inlineCode",{parentName:"h2"},"debug")," Effect"),(0,a.kt)("p",null,"When we use functional effects like ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO"),", we are creating the description of the computation that we want to run. For example, assume we have the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nval effect: ZIO[Any, Nothing, Unit] = ZIO.succeed(3).map(_ * 2)\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"effect")," itself is a description of the computation that we want to run. So we can't use print statements to debug effects directly. For example, if we write ",(0,a.kt)("inlineCode",{parentName:"p"},"println(effect)"),", we will get something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"OnSuccess(<empty>.MainApp.effect(MainApp.scala:4),Sync(<empty>.MainApp.effect(MainApp.scala:4),MainApp$$$Lambda$23/0x00000008000bc440@44a3ec6b),zio.ZIO$$Lambda$25/0x00000008000ba040@71623278)\n")),(0,a.kt)("p",null,"This is not the expected output. We want to see the result of the computation, not the description of the computation. Why did this happen? Because we haven't run the computation yet."),(0,a.kt)("p",null,"So keep in mind that, unlike the ordinary scala print statements, we can't use print statements directly to debug functional effects, unless we unsafely run the computation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval effect: ZIO[Any, Nothing, Int] = \n  ZIO.succeed(3).map(_ * 2)\n\nval executedEffect: Int =\n  Unsafe.unsafe { implicit unsafe =>\n    Runtime.default.unsafe.run(effect).getOrThrowFiberFailure()\n  }\n  \nprintln(s"executedEffect: $executedEffect")\n')),(0,a.kt)("p",null,"This will print the result of the computation. But, this is not the idiomatic way to debug functional effects."),(0,a.kt)("p",null,"Simple ",(0,a.kt)("em",{parentName:"p"},"print statements")," are not composable with ZIO applications. So we can't use them to debug ZIO applications easily. So instead of print statements, we should use ZIO effects to debug ZIO applications. We can use ",(0,a.kt)("inlineCode",{parentName:"p"},"Console.printLine")," effect to debug ZIO applications, but the ZIO itself has a specialized effect called ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO.debug"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#debug")," which allows us to print intermediate values easily."),(0,a.kt)("p",null,"For example, assume we have written the Fibonacci function using the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," data type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\ndef fib(n: Int): ZIO[Any, Nothing, Int] = {\n  if (n <= 1) ZIO.succeed(n)\n  else fib(n - 1).zipWith(fib(n - 2))(_ + _)\n}\n")),(0,a.kt)("p",null,"We can debug this program by utilizing the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#debug")," effect:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\ndef fib(n: Int): ZIO[Any, Nothing, Int] = {\n  if (n <= 1) ZIO.succeed(n).debug(s"fib($n) = $n")\n  else {\n    fib(n - 1)\n      .zipWith(fib(n - 2))(_ + _)\n      .debug(s"fib($n) = fib(${n - 1}) + fib(${n - 2})")\n  }\n}\n')),(0,a.kt)("p",null,"If we run the above program, we will see the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"fib(1) = 1: 1\nfib(0) = 0: 0\nfib(2) = fib(1) + fib(0): 1\nfib(1) = 1: 1\nfib(3) = fib(2) + fib(1): 2\nfib(1) = 1: 1\nfib(0) = 0: 0\nfib(2) = fib(1) + fib(0): 1\nfib(4) = fib(3) + fib(2): 3\nfib(1) = 1: 1\nfib(0) = 0: 0\nfib(2) = fib(1) + fib(0): 1\nfib(1) = 1: 1\nfib(3) = fib(2) + fib(1): 2\nfib(5) = fib(4) + fib(3): 5\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#debug")," effect taps into the called function and prints its output. It doesn't change the result of a computation. We also can use ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO.debug")," to print any arbitrary message."),(0,a.kt)("p",null,"We have the same effect as the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.stream._\n\nZStream\n  .fromIterable(1 to 3)\n  .debug("before map")\n  .map(_ * 2)\n  .debug("after map")\n  .runDrain\n')),(0,a.kt)("p",null,"The output is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"before map: 1\nafter map: 2\nbefore map: 2\nafter map: 4\nbefore map: 3\nafter map: 6\n")),(0,a.kt)("h2",{id:"debugging-using-a-debugger"},"Debugging Using a Debugger"),(0,a.kt)("p",null,"Debugging using print statements is usable in some cases, and sometimes it is not performant. Another way to debug a code is to use a debugger. A debugger is a program that allows us to step through the code and see the intermediate values of the computation. Some IDEs like IntelliJ IDEA or Visual Studio Code have built-in debuggers. We can use these to debug our code, whether we are debugging a functional effect or an ordinary scala program."),(0,a.kt)("p",null,"To learn how to use a debugger in each of the IDEs, we can look at the following links:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/help/idea/run-debug-and-test-scala.html"},"IntelliJ IDEA")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/editor/debugging"},"Visual Studio Code"))),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this article we discussed how to debug functional effects using ",(0,a.kt)("inlineCode",{parentName:"p"},"debug")," effect and also debuggers. We saw that debugging with functional effects can be even easier than debugging ordinary scala programs."))}g.isMDXComponent=!0}}]);