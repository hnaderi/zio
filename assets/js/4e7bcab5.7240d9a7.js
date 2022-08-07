"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[7109],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=i,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},60303:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const o={id:"coding-guidelines",title:"ZIO Coding Guidelines"},r=void 0,l={unversionedId:"about/coding-guidelines",id:"about/coding-guidelines",title:"ZIO Coding Guidelines",description:"These are coding guidelines strictly for ZIO contributors for ZIO projects and",source:"@site/docs/about/coding-guidelines.md",sourceDirName:"about",slug:"/about/coding-guidelines",permalink:"/about/coding-guidelines",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/about/coding-guidelines.md",tags:[],version:"current",frontMatter:{id:"coding-guidelines",title:"ZIO Coding Guidelines"},sidebar:"about-sidebar",previous:{title:"FAQ",permalink:"/about/faq"},next:{title:"ZIO Contributor Guidelines",permalink:"/about/contributing"}},s={},p=[{value:"Defining classes and traits",id:"defining-classes-and-traits",level:3},{value:"Final and private modifiers",id:"final-and-private-modifiers",level:3},{value:"Refactoring",id:"refactoring",level:3},{value:"Understanding naming of parameters or values",id:"understanding-naming-of-parameters-or-values",level:3},{value:"Understanding naming of methods",id:"understanding-naming-of-methods",level:3},{value:"Type annotations",id:"type-annotations",level:3},{value:"Method alphabetization",id:"method-alphabetization",level:3},{value:"Scala documentation",id:"scala-documentation",level:3}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"These are coding guidelines strictly for ZIO contributors for ZIO projects and\nnot general conventions to be applied by the Scala community at large."),(0,i.kt)("p",null,"Additionally, bear in mind that, although we try to enforce these rules to the\nbest of our ability, both via automated rules (scalafmt) and strict reviewing\nprocesses, it is both possible to find existing code that does not comply to\nthese rules. If that is the case, we would be extremely grateful if you could\nmake a contribution, by providing a fix to said issue."),(0,i.kt)("p",null,"Last, but not least, these rules are continuously evolving and as such,\nrefer to them once in a while when in doubt."),(0,i.kt)("h3",{id:"defining-classes-and-traits"},"Defining classes and traits"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Value classes must be final and extend ",(0,i.kt)("inlineCode",{parentName:"p"},"AnyVal"),".\nThis is done to avoid allocating runtime objects; ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Method extension classes must be final and extend ",(0,i.kt)("inlineCode",{parentName:"p"},"AnyVal"),";")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Avoid overloading standard interfaces. When creating services avoid using the same names as well known standard interfaces.\nExample: Instead of having a service ",(0,i.kt)("inlineCode",{parentName:"p"},"Random")," with methods ",(0,i.kt)("inlineCode",{parentName:"p"},"nextLong(n)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"nextInt(n)")," consider choosing something like\n",(0,i.kt)("inlineCode",{parentName:"p"},"nextLongBounded(n)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"nextIntBounded(n)"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sealed traits that are ADTs (Algebraic data types) should extend ",(0,i.kt)("inlineCode",{parentName:"p"},"Product")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Serializable"),".\nThis is done to help the compiler infer types;")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Regular traits and sealed trait that do not form ADTs should extend ",(0,i.kt)("inlineCode",{parentName:"p"},"Serializable")," but not ",(0,i.kt)("inlineCode",{parentName:"p"},"Product"),";")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Traits should always extend ",(0,i.kt)("inlineCode",{parentName:"p"},"Serializable"),". (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO"),")."))),(0,i.kt)("h3",{id:"final-and-private-modifiers"},"Final and private modifiers"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"All methods on classes / traits are declared ",(0,i.kt)("inlineCode",{parentName:"p"},"final"),", by default;")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"No methods on objects declared ",(0,i.kt)("inlineCode",{parentName:"p"},"final"),", because they are ",(0,i.kt)("inlineCode",{parentName:"p"},"final")," by default;")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"No methods on final classes declared ",(0,i.kt)("inlineCode",{parentName:"p"},"final"),", because they are ",(0,i.kt)("inlineCode",{parentName:"p"},"final")," by default;")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"All classes inside objects should be defined ",(0,i.kt)("inlineCode",{parentName:"p"},"final"),", because otherwise they could still be extended;")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In general, classes that are not case classes have their constructors & constructor parameters private.\nTypically, it is not good practice to expose constructors and constructor parameters but exceptions apply (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"Assertion")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"TestAnnotation"),");")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"All ",(0,i.kt)("inlineCode",{parentName:"p"},"vals")," declared ",(0,i.kt)("inlineCode",{parentName:"p"},"final"),", even in objects or ",(0,i.kt)("inlineCode",{parentName:"p"},"final classes"),", if they are constant expressions and without type annotations;")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Package-private ",(0,i.kt)("inlineCode",{parentName:"p"},"vals")," and methods should be declared ",(0,i.kt)("inlineCode",{parentName:"p"},"final"),"."))),(0,i.kt)("h3",{id:"refactoring"},"Refactoring"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If a class has all its members ",(0,i.kt)("inlineCode",{parentName:"p"},"final"),", the class should be declared ",(0,i.kt)("inlineCode",{parentName:"p"},"final")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"final")," member annotations should be removed except constant expressions;")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"All type annotations should use the least powerful type alias. This means, that, let us say, a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," effect that has\nno dependencies but throws an arbitrary error, should be defined as ",(0,i.kt)("inlineCode",{parentName:"p"},"IO"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"def")," in place of ",(0,i.kt)("inlineCode",{parentName:"p"},"val")," for an abstract data member to avoid ",(0,i.kt)("inlineCode",{parentName:"p"},"NullPointerException")," risk."))),(0,i.kt)("h3",{id:"understanding-naming-of-parameters-or-values"},"Understanding naming of parameters or values"),(0,i.kt)("p",null,"ZIO code often uses the following naming conventions, and you might be asked to change method parameters to follow these conventions. This guide can help you understand where the names come from.\nNaming expectations can be helpful in understanding the role of certain parameters without even glancing at its type signature when reading code or class/method signatures."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Partial functions have a shortened name ",(0,i.kt)("inlineCode",{parentName:"p"},"pf"),";")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In ZIO implicit parameters are often used as compiler evidences;\nThese evidences help you, as a developer, prove something to the compiler (at compile time), and they have the ability to add constraints to a method;\nThey are typically called ",(0,i.kt)("inlineCode",{parentName:"p"},"ev")," if there is only one. Or ",(0,i.kt)("inlineCode",{parentName:"p"},"ev1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ev2"),"... if more than one;")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Promises are called ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," (unless in its own class methods, in that case it is called ",(0,i.kt)("inlineCode",{parentName:"p"},"that"),", like point 8 defines);")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Functions are called ",(0,i.kt)("inlineCode",{parentName:"p"},"fn"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fn1"),", unless they bear specific meaning: ",(0,i.kt)("inlineCode",{parentName:"p"},"use"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"release"),";")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"ZIO effects are called ",(0,i.kt)("inlineCode",{parentName:"p"},"f"),", unless they bear specific meaning like partially providing environment: ",(0,i.kt)("inlineCode",{parentName:"p"},"r0"),";")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Iterable are called ",(0,i.kt)("inlineCode",{parentName:"p"},"in"),";")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When a parameter type equals own (in a method of a trait) call it ",(0,i.kt)("inlineCode",{parentName:"p"},"that"),";")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Be mindful of using by-name parameters. Mind the ",(0,i.kt)("inlineCode",{parentName:"p"},"Function[0]")," extra allocation and loss of clean syntax when invoking the method.\nLoss of syntax means that instead of being able to do something like ",(0,i.kt)("inlineCode",{parentName:"p"},"f.flatMap(ZIO.success)")," you require to explicitly do ",(0,i.kt)("inlineCode",{parentName:"p"},"f.flatMap(ZIO.success(_))"),";")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fold or fold variants initial values are called ",(0,i.kt)("inlineCode",{parentName:"p"},"zero"),"."))),(0,i.kt)("h3",{id:"understanding-naming-of-methods"},"Understanding naming of methods"),(0,i.kt)("p",null,"ZIO goes to great lengths to define method names that are intuitive to the library user. Naming is hard!!!\nThis section will attempt to provide some guidelines and examples to document, guide and explain naming of methods in ZIO."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"All operators that return effects should be lazy in all parameters that are not lambdas. Strict parameters are a source of bugs when users inadvertently call side effecting code\nin arguments to these parameters. Preventing these bugs is the responsibility of the effect system and lazy parameters allow the runtime to properly manage these side effects.\nThere are two exceptions. First, strict parameters should be used when by name parameters would cause duplicate method signatures due to type erasure. Second, operators on high\nperformance concurrent data structures such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Ref"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Queue"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Hub")," should be strict in their parameters.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Methods that have the form of ",(0,i.kt)("inlineCode",{parentName:"p"},"List#zip")," are called ",(0,i.kt)("inlineCode",{parentName:"p"},"zip"),", and have an alias called ",(0,i.kt)("inlineCode",{parentName:"p"},"<*>"),". The parallel version, if applicable, has the name ",(0,i.kt)("inlineCode",{parentName:"p"},"zipPar"),", with an alias called ",(0,i.kt)("inlineCode",{parentName:"p"},"<&>"),";")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Avoid the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"effect")," in constructors as this pushes responsibility on users to identify what code is or is not side effecting whereas the effect system should handle this\ncorrectly regardless. Instead prefer more specific names such as ",(0,i.kt)("inlineCode",{parentName:"p"},"succeed"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"attempt"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"suspend"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The dual of zip, which is trying either a left or right side, producing an Either of the result, should be called ",(0,i.kt)("inlineCode",{parentName:"p"},"orElseEither"),", with alias ",(0,i.kt)("inlineCode",{parentName:"p"},"<+>"),".\nThe simplified variant where both left and right have the same type should be called ",(0,i.kt)("inlineCode",{parentName:"p"},"orElse"),", with alias ",(0,i.kt)("inlineCode",{parentName:"p"},"<>"),";\n")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Constructors for a data type ",(0,i.kt)("inlineCode",{parentName:"p"},"X")," that are based on another data type ",(0,i.kt)("inlineCode",{parentName:"p"},"Y")," should be placed in the companion object ",(0,i.kt)("inlineCode",{parentName:"p"},"X")," and named ",(0,i.kt)("inlineCode",{parentName:"p"},"fromY"),".\nFor example, ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO.fromOption"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ZStream.fromEffect"),";")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Parallel versions of methods should be named the same, but with a ",(0,i.kt)("inlineCode",{parentName:"p"},"Par")," suffix.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"foreach")," should be used for operators that effectually iterate over a collection. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO.foreach"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Variants of operators that accept arguments or return results in the context of an effect type should be suffixed by the name of the effect type, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"mapZIO")," or\n",(0,i.kt)("inlineCode",{parentName:"p"},"mapSTM"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"M")," suffix should not be used as it is not idiomatic Scala and does not specify what effect type is involved.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Discard")," suffix for variants of methods that discard their results. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"foreachDiscard"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," suffix should not be used as it is not idiomatic Scala and\ndoes not describe what it does.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Methods that are necessarily side effecting should be prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"unsafe"),", for example ",(0,i.kt)("inlineCode",{parentName:"p"},"unsafeRun"),". This does not apply to methods on internal data types that are inherently imperative in nature, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"MutableConcurrentQueue"),"."))),(0,i.kt)("h3",{id:"type-annotations"},"Type annotations"),(0,i.kt)("p",null,"ZIO goes to great lengths to take advantage of the scala compiler in varied ways. Type variance is one of them.\nThe following rules are good to have in mind when adding new ",(0,i.kt)("inlineCode",{parentName:"p"},"types"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"traits")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"classes")," that have either covariant or contravariant types."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Generalized ADTs should always have type annotation. (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"final case class Fail[+E](value: E) extends Cause[E]"),");"),(0,i.kt)("li",{parentName:"ol"},"Type alias should always have type annotation. Much like in Generalized ADTs defining type aliases should carry the type annotations\n(i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"type IO[+E, +A] = ZIO[Any, E, A]"),").")),(0,i.kt)("p",null,"When defining new methods, keep in mind the following rules:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Accept the most general type possible. For example, if a method accepts a collection, prefer ",(0,i.kt)("inlineCode",{parentName:"li"},"Iterable[A]")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"List[A]"),"."),(0,i.kt)("li",{parentName:"ol"},"Return the most specific type possible, e.g., prefer ",(0,i.kt)("inlineCode",{parentName:"li"},"UIO[Unit]")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"UIO[Any]"),".")),(0,i.kt)("h3",{id:"method-alphabetization"},"Method alphabetization"),(0,i.kt)("p",null,"In general the following rules should be applied regarding method alphabetization.\nTo fix forward references of values we recommend the programmer to make them lazy (",(0,i.kt)("inlineCode",{parentName:"p"},"lazy val"),").\nOperators are any methods that only have non-letter characters (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"<*>")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"<>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"*>"),")."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Public abstract defs / vals listed first, and alphabetized, with operators appearing before names.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Public concrete defs / vals listed second, and alphabetized, with operators appearing before names.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Private implementation details listed third, and alphabetized, with operators appearing before names."))),(0,i.kt)("h3",{id:"scala-documentation"},"Scala documentation"),(0,i.kt)("p",null,"It is strongly recommended to use scala doc links when referring to other members.\nThis both makes it easier for users to navigate the documentation and enforces that the references are accurate.\nA good example of this are ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," type aliases that are extremely pervasive in the codebase: ",(0,i.kt)("inlineCode",{parentName:"p"},"Task"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"RIO"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"URIO")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"UIO"),".\nTo make it easy for developers to see the implementation scala doc links are used, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  /**\n   * @see See [[zio.ZIO.absolve]]\n   */\n  def absolve[R, A](v: RIO[R, Either[Throwable, A]]): RIO[R, A] =\n    ZIO.absolve(v)\n")))}m.isMDXComponent=!0}}]);