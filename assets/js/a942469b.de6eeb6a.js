"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[4183],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>f});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),m=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=m(e.components);return n.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(t),f=r,d=u["".concat(o,".").concat(f)]||u[f]||c[f]||p;return t?n.createElement(d,i(i({ref:a},s),{},{components:t})):n.createElement(d,i({ref:a},s))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=t.length,i=new Array(p);i[0]=u;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<p;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1135:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>l,toc:()=>m});var n=t(87462),r=(t(67294),t(3905));const p={id:"tmap",title:"TMap"},i=void 0,l={unversionedId:"reference/stm/tmap",id:"reference/stm/tmap",title:"TMap",description:"A TMap[A] is a mutable map that can participate in transactions in STM.",source:"@site/docs/reference/stm/tmap.md",sourceDirName:"reference/stm",slug:"/reference/stm/tmap",permalink:"/reference/stm/tmap",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/stm/tmap.md",tags:[],version:"current",frontMatter:{id:"tmap",title:"TMap"},sidebar:"reference-sidebar",previous:{title:"TSet",permalink:"/reference/stm/tset"},next:{title:"TRef",permalink:"/reference/stm/tref"}},o={},m=[{value:"Create a TMap",id:"create-a-tmap",level:2},{value:"Put a key-value pair to a TMap",id:"put-a-key-value-pair-to-a-tmap",level:2},{value:"Remove an element from a TMap",id:"remove-an-element-from-a-tmap",level:2},{value:"Retrieve the value from a TMap",id:"retrieve-the-value-from-a-tmap",level:2},{value:"Transform entries of a TMap",id:"transform-entries-of-a-tmap",level:2},{value:"Perform side-effect for TMap key-value pairs",id:"perform-side-effect-for-tmap-key-value-pairs",level:2},{value:"Check TMap membership",id:"check-tmap-membership",level:2},{value:"Convert TMap to a List",id:"convert-tmap-to-a-list",level:2}],s={toc:m};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"TMap[A]")," is a mutable map that can participate in transactions in STM."),(0,r.kt)("h2",{id:"create-a-tmap"},"Create a TMap"),(0,r.kt)("p",null,"Creating an empty ",(0,r.kt)("inlineCode",{parentName:"p"},"TMap"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval emptyTMap: STM[Nothing, TMap[String, Int]] = TMap.empty[String, Int]\n")),(0,r.kt)("p",null,"Or creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"TMap")," with specified values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stm._\n\nval specifiedValuesTMap: STM[Nothing, TMap[String, Int]] = TMap.make(("a", 1), ("b", 2), ("c", 3))\n')),(0,r.kt)("p",null,"Alternatively, you can create a ",(0,r.kt)("inlineCode",{parentName:"p"},"TMap")," by providing a collection of tuple values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stm._\n\nval iterableTMap: STM[Nothing, TMap[String, Int]] = TMap.fromIterable(List(("a", 1), ("b", 2), ("c", 3)))\n')),(0,r.kt)("h2",{id:"put-a-key-value-pair-to-a-tmap"},"Put a key-value pair to a TMap"),(0,r.kt)("p",null,"New key-value pair can be added to the map in the following way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stm._\n\nval putElem: UIO[TMap[String, Int]] = (for {\n  tMap <- TMap.make(("a", 1), ("b", 2))\n  _    <- tMap.put("c", 3)\n} yield tMap).commit\n')),(0,r.kt)("p",null,"Another way of adding an entry in the map is by using ",(0,r.kt)("inlineCode",{parentName:"p"},"merge"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stm._\n\nval mergeElem: UIO[TMap[String, Int]] = (for {\n  tMap <- TMap.make(("a", 1), ("b", 2), ("c", 3))\n  _    <- tMap.merge("c", 4)((x, y) => x * y)\n} yield tMap).commit\n')),(0,r.kt)("p",null,"If the key is not present in the map it behaves as a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"put")," method. It merges the existing value with the new one using the provided function otherwise."),(0,r.kt)("h2",{id:"remove-an-element-from-a-tmap"},"Remove an element from a TMap"),(0,r.kt)("p",null,"The simplest way to remove a key-value pair from ",(0,r.kt)("inlineCode",{parentName:"p"},"TMap")," is using ",(0,r.kt)("inlineCode",{parentName:"p"},"delete")," method that takes key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stm._\n\nval deleteElem: UIO[TMap[String, Int]] = (for {\n  tMap <- TMap.make(("a", 1), ("b", 2), ("c", 3))\n  _    <- tMap.delete("b")\n} yield tMap).commit\n')),(0,r.kt)("p",null,"Also, it is possible to remove every key-value pairs that satisfy provided predicate:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stm._\n\nval removedEvenValues: UIO[TMap[String, Int]] = (for {\n  tMap <- TMap.make(("a", 1), ("b", 2), ("c", 3), ("d", 4))\n  _    <- tMap.removeIf((_, v) => v % 2 == 0)\n} yield tMap).commit\n')),(0,r.kt)("p",null,"Or you can keep all key-value pairs that match predicate function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stm._\n\nval retainedEvenValues: UIO[TMap[String, Int]] = (for {\n  tMap <- TMap.make(("a", 1), ("b", 2), ("c", 3), ("d", 4))\n  _    <- tMap.retainIf((_, v) => v % 2 == 0)\n} yield tMap).commit\n')),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"retainIf")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"removeIf")," serve the same purpose as ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"filterNot"),". The reason for naming them differently was to emphasize a distinction in their nature. Namely, both ",(0,r.kt)("inlineCode",{parentName:"p"},"retainIf")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"removeIf")," are destructive - calling them can modify the collection."),(0,r.kt)("h2",{id:"retrieve-the-value-from-a-tmap"},"Retrieve the value from a TMap"),(0,r.kt)("p",null,"Value associated with the key can be obtained as follows: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stm._\n\nval elemGet: UIO[Option[Int]] = (for {\n  tMap <- TMap.make(("a", 1), ("b", 2), ("c", 3))\n  elem <- tMap.get("c")\n} yield elem).commit\n')),(0,r.kt)("p",null,"Alternatively, you can provide a default value if entry by key is not present in the map:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stm._\n\nval elemGetOrElse: UIO[Int] = (for {\n  tMap <- TMap.make(("a", 1), ("b", 2), ("c", 3))\n  elem <- tMap.getOrElse("d", 4)\n} yield elem).commit\n')),(0,r.kt)("h2",{id:"transform-entries-of-a-tmap"},"Transform entries of a TMap"),(0,r.kt)("p",null,"The transform function ",(0,r.kt)("inlineCode",{parentName:"p"},"(K, V) => (K, V)")," allows computing a new value for every entry in the map: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stm._\n\nval transformTMap: UIO[TMap[String, Int]] = (for {\n  tMap <- TMap.make(("a", 1), ("b", 2), ("c", 3))\n  _    <- tMap.transform((k, v) => k -> v * v)\n} yield tMap).commit\n')),(0,r.kt)("p",null,"Note that it is possible to shrink a ",(0,r.kt)("inlineCode",{parentName:"p"},"TMap"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stm._\n\nval shrinkTMap: UIO[TMap[String, Int]] = (for {\n  tMap <- TMap.make(("a", 1), ("b", 2), ("c", 3))\n  _    <- tMap.transform((_, v) => "d" -> v)\n} yield tMap).commit\n')),(0,r.kt)("p",null,"The entries can be mapped effectfully via ",(0,r.kt)("inlineCode",{parentName:"p"},"transformSTM"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stm._\n\nval transformSTMTMap: UIO[TMap[String, Int]] = (for {\n  tMap <- TMap.make(("a", 1), ("b", 2), ("c", 3))\n  _    <- tMap.transformSTM((k, v) => STM.succeed(k -> v * v))\n} yield tMap).commit\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"transformValues")," function ",(0,r.kt)("inlineCode",{parentName:"p"},"V => V")," allows computing a new value for every value in the map: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stm._\n\nval transformValuesTMap: UIO[TMap[String, Int]] = (for {\n  tMap <- TMap.make(("a", 1), ("b", 2), ("c", 3))\n  _    <- tMap.transformValues(v => v * v)\n} yield tMap).commit\n')),(0,r.kt)("p",null,"The values can be mapped effectfully via ",(0,r.kt)("inlineCode",{parentName:"p"},"transformValuesSTM"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stm._\n\nval transformValuesMTMap: UIO[TMap[String, Int]] = (for {\n  tMap <- TMap.make(("a", 1), ("b", 2), ("c", 3))\n  _    <- tMap.transformValuesSTM(v => STM.succeed(v * v))\n} yield tMap).commit\n')),(0,r.kt)("p",null,"Note that both ",(0,r.kt)("inlineCode",{parentName:"p"},"transform")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"transformValues")," serve the same purpose as ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"mapValues"),". The reason for naming them differently was to emphasize a distinction in their nature. Namely, both ",(0,r.kt)("inlineCode",{parentName:"p"},"transform")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"transformValues")," are destructive - calling them can modify the collection."),(0,r.kt)("p",null,"Folds the elements of a ",(0,r.kt)("inlineCode",{parentName:"p"},"TMap")," using the specified associative binary operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stm._\n\nval foldTMap: UIO[Int] = (for {\n  tMap <- TMap.make(("a", 1), ("b", 2), ("c", 3))\n  sum  <- tMap.fold(0) { case (acc, (_, v)) => acc + v }\n} yield sum).commit\n')),(0,r.kt)("p",null,"The elements can be folded effectfully via ",(0,r.kt)("inlineCode",{parentName:"p"},"foldSTM"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stm._\n\nval foldSTMTMap: UIO[Int] = (for {\n  tMap <- TMap.make(("a", 1), ("b", 2), ("c", 3))\n  sum  <- tMap.foldSTM(0) { case (acc, (_, v)) => STM.succeed(acc + v) }\n} yield sum).commit\n')),(0,r.kt)("h2",{id:"perform-side-effect-for-tmap-key-value-pairs"},"Perform side-effect for TMap key-value pairs"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"foreach")," is used for performing side-effect for each key-value pair in the map:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stm._\n\nval foreachTMap = (for {\n  tMap <- TMap.make(("a", 1), ("b", 2), ("c", 3))\n  _    <- tMap.foreach((k, v) => STM.succeed(println(s"$k -> $v")))\n} yield tMap).commit\n')),(0,r.kt)("h2",{id:"check-tmap-membership"},"Check TMap membership"),(0,r.kt)("p",null,"Checking whether key-value pair is present in a ",(0,r.kt)("inlineCode",{parentName:"p"},"TMap"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stm._\n\nval tMapContainsValue: UIO[Boolean] = (for {\n  tMap <- TMap.make(("a", 1), ("b", 2), ("c", 3))\n  res  <- tMap.contains("a")\n} yield res).commit\n')),(0,r.kt)("h2",{id:"convert-tmap-to-a-list"},"Convert TMap to a List"),(0,r.kt)("p",null,"List of tuples can be obtained as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stm._\n\nval tMapTuplesList: UIO[List[(String, Int)]] = (for {\n  tMap <- TMap.make(("a", 1), ("b", 2), ("c", 3))\n  list <- tMap.toList\n} yield list).commit\n')),(0,r.kt)("p",null,"List of keys can be obtained as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stm._\n\nval tMapKeysList: UIO[List[String]] = (for {\n  tMap <- TMap.make(("a", 1), ("b", 2), ("c", 3))\n  list <- tMap.keys\n} yield list).commit\n')),(0,r.kt)("p",null,"List of values can be obtained as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stm._\n\nval tMapValuesList: UIO[List[Int]] = (for {\n  tMap <- TMap.make(("a", 1), ("b", 2), ("c", 3))\n  list <- tMap.values\n} yield list).commit\n')))}c.isMDXComponent=!0}}]);