"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[95841],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={id:"overview_background",title:"Background"},i=void 0,l={unversionedId:"overview/overview_background",id:"version-1.x/overview/overview_background",title:"Background",description:"Procedural Scala programs use procedural functions, which are:",source:"@site/versioned_docs/version-1.x/overview/background.md",sourceDirName:"overview",slug:"/overview/overview_background",permalink:"/version-1.x/overview/overview_background",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/overview/background.md",tags:[],version:"1.x",frontMatter:{id:"overview_background",title:"Background"},sidebar:"overview-sidebar",previous:{title:"Running Effects",permalink:"/version-1.x/overview/overview_running_effects"},next:{title:"Performance",permalink:"/version-1.x/overview/overview_performance"}},s={},p=[{value:"Programs As Values",id:"programs-as-values",level:2},{value:"Next Steps",id:"next-steps",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Procedural Scala programs use ",(0,r.kt)("em",{parentName:"p"},"procedural functions"),", which are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Partial")," \u2014 Procedures do not return values for some inputs (for example, they throw exceptions)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Non-Deterministic")," \u2014 Procedures return different outputs for the same input."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Impure")," \u2014 Procedures perform side-effects, which mutate data or interact with the external world.")),(0,r.kt)("p",null,"Unlike procedural Scala programs, functional Scala programs only use ",(0,r.kt)("em",{parentName:"p"},"pure functions"),", which are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total")," \u2014 Functions always return an output for every input."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Deterministic")," \u2014 Functions return the same output for the same input."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pure")," \u2014 The only effect of providing a function an input is computing the output.")),(0,r.kt)("p",null,"Pure functions only combine or transform input values into output values in a total, deterministic way. Pure functions are easier to understand, easier to test, easier to refactor, and easier to abstract over."),(0,r.kt)("p",null,"Functional programs do not interact with the external world directly, because that involves partiality, non-determinism and side-effects. Instead, functional programs construct and return ",(0,r.kt)("em",{parentName:"p"},"data structures"),", which ",(0,r.kt)("em",{parentName:"p"},"describe")," (or ",(0,r.kt)("em",{parentName:"p"},"model"),") interaction with the real world."),(0,r.kt)("p",null,"Immutable data structures that model procedural effects are called ",(0,r.kt)("em",{parentName:"p"},"functional effects"),". The concept of functional effects is critical to deeply understanding how ZIO works, and is introduced in the next section."),(0,r.kt)("h2",{id:"programs-as-values"},"Programs As Values"),(0,r.kt)("p",null,"We can build a data structure to describe a console program with just three instructions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"sealed trait Console[+A]\nfinal case class Return[A](value: () => A) extends Console[A]\nfinal case class PrintLine[A](line: String, rest: Console[A]) extends Console[A]\nfinal case class ReadLine[A](rest: String => Console[A]) extends Console[A]\n")),(0,r.kt)("p",null,"In this model, ",(0,r.kt)("inlineCode",{parentName:"p"},"Console[A]")," is an immutable, type-safe value, which represents a console program that returns a value of type ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Console")," data structure is an ordered ",(0,r.kt)("em",{parentName:"p"},"tree"),', and at the very "end" of the program, you will find a ',(0,r.kt)("inlineCode",{parentName:"p"},"Return")," instruction that stores a value of type ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),", which is the return value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Console[A]")," program."),(0,r.kt)("p",null,"Although very simple, this data structure is enough to build an interactive program:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val example1: Console[Unit] = \n  PrintLine("Hello, what is your name?",\n    ReadLine(name =>\n      PrintLine(s"Good to meet you, ${name}", Return(() => ())))\n)\n')),(0,r.kt)("p",null,"This immutable value doesn't do anything\u2014it just ",(0,r.kt)("em",{parentName:"p"},"describes")," a program that prints out a message, asks for input, and prints out another message that depends on the input. "),(0,r.kt)("p",null,"Although this program is just a model, we can translate the model into procedural effects quite simply using an ",(0,r.kt)("em",{parentName:"p"},"interpreter"),", which recurses on the data structure, translating every instruction into the side-effect that it describes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def interpret[A](program: Console[A]): A = program match {\n  case Return(value) => \n    value()\n  case PrintLine(line, next) => \n    println(line)\n    interpret(next)\n  case ReadLine(next) =>\n    interpret(next(scala.io.StdIn.readLine()))\n}\n")),(0,r.kt)("p",null,"Interpreting (also called ",(0,r.kt)("em",{parentName:"p"},"running")," or ",(0,r.kt)("em",{parentName:"p"},"executing"),") is not functional, because it may be partial, non-deterministic, and impure. In an ideal application, however, interpretation only needs to happen once: in the application's main function. The rest of the application can be purely functional."),(0,r.kt)("p",null,"In practice, it's not very convenient to build console programs using constructors directly. Instead, we can define helper functions, which look more like their effectful equivalents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def succeed[A](a: => A): Console[A] = Return(() => a)\ndef printLine(line: String): Console[Unit] =\n  PrintLine(line, succeed(()))\nval readLine: Console[String] =\n  ReadLine(line => succeed(line))\n")),(0,r.kt)("p",null,'Composing these "leaf" instructions into larger programs becomes a lot easier if we define ',(0,r.kt)("inlineCode",{parentName:"p"},"map")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"flatMap")," methods on ",(0,r.kt)("inlineCode",{parentName:"p"},"Console"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," method lets you transform a console program that returns an ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," into a console program that returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),", by supplying a function ",(0,r.kt)("inlineCode",{parentName:"p"},"A => B"),". ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"flatMap")," method lets you sequentially compose a console program that returns an ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," with a callback that returns another console program created from the ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,r.kt)("p",{parentName:"li"},"These two methods are defined as follows:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"implicit class ConsoleSyntax[+A](self: Console[A]) {\n  def map[B](f: A => B): Console[B] =\n    flatMap(a => succeed(f(a)))\n\n  def flatMap[B](f: A => Console[B]): Console[B] =\n    self match {\n      case Return(value) => f(value())\n      case PrintLine(line, next) =>\n        PrintLine(line, next.flatMap(f))\n      case ReadLine(next) =>\n        ReadLine(line => next(line).flatMap(f))\n    }\n}\n")),(0,r.kt)("p",null,"With these ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"flatMap")," methods, we can now take advantage of Scala's ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," comprehensions, and write programs that look like their procedural equivalents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val example2: Console[String] =\n  for {\n    _    <- printLine("What\'s your name?")\n    name <- readLine\n    _    <- printLine(s"Hello, ${name}, good to meet you!")\n  } yield name\n')),(0,r.kt)("p",null,"When we wish to execute this program, we can call ",(0,r.kt)("inlineCode",{parentName:"p"},"interpret")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Console")," value. "),(0,r.kt)("p",null,"All functional Scala programs are constructed like this: instead of interacting with the real world, they build a ",(0,r.kt)("em",{parentName:"p"},"functional effect"),", which is nothing more than an immutable, type-safe, tree-like data structure that models procedural effects."),(0,r.kt)("p",null,"Functional programmers use functional effects to build complex, real world software without giving up the equational reasoning, composability, and type safety afforded by purely functional programming."),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"If functional effects are starting to make more sense, then the next step is to learn more about the ",(0,r.kt)("a",{parentName:"p",href:"/version-1.x/overview/"},"core effect type")," in ZIO."))}m.isMDXComponent=!0}}]);