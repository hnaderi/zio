"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[7299],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=p(n),s=r,N=k["".concat(d,".").concat(s)]||k[s]||u[s]||l;return n?a.createElement(N,i(i({ref:e},m),{},{components:n})):a.createElement(N,i({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},98187:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={id:"concurrentset",title:"ConcurrentSet"},i=void 0,o={unversionedId:"reference/sync/concurrentset",id:"reference/sync/concurrentset",title:"ConcurrentSet",description:"A ConcurrentSet is a Set wrapper over java.util.concurrent.ConcurrentHashMap.",source:"@site/docs/reference/sync/concurrentset.md",sourceDirName:"reference/sync",slug:"/reference/sync/concurrentset",permalink:"/reference/sync/concurrentset",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/sync/concurrentset.md",tags:[],version:"current",frontMatter:{id:"concurrentset",title:"ConcurrentSet"},sidebar:"reference-sidebar",previous:{title:"ConcurrentMap",permalink:"/reference/sync/concurrentmap"},next:{title:"Introduction",permalink:"/reference/concurrency/"}},d={},p=[{value:"Creation",id:"creation",level:2},{value:"Update Operations",id:"update-operations",level:2},{value:"Adding Values",id:"adding-values",level:3},{value:"Updating Values",id:"updating-values",level:3},{value:"Removing Values",id:"removing-values",level:3},{value:"Retrieval Operations",id:"retrieval-operations",level:2},{value:"Example Usage",id:"example-usage",level:2}],m={toc:p};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentSet")," is a Set wrapper over ",(0,r.kt)("inlineCode",{parentName:"p"},"java.util.concurrent.ConcurrentHashMap"),"."),(0,r.kt)("h2",{id:"creation"},"Creation"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"empty[A]: UIO[ConcurrentSet[A]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Makes an empty ",(0,r.kt)("inlineCode",{parentName:"td"},"ConcurrentSet"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"empty[A](initialCapacity: Int): UIO[ConcurrentSet[A]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Makes an empty ",(0,r.kt)("inlineCode",{parentName:"td"},"ConcurrentSet")," with initial capacity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fromIterable[A](as: Iterable[(A)]): UIO[ConcurrentSet[A]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Makes a new ",(0,r.kt)("inlineCode",{parentName:"td"},"ConcurrentSet")," initialized with the provided collection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"make[A](as: A*): UIO[ConcurrentSet[A]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Makes a new ",(0,r.kt)("inlineCode",{parentName:"td"},"ConcurrentSet")," initialized with the provided elements")))),(0,r.kt)("h2",{id:"update-operations"},"Update Operations"),(0,r.kt)("p",null,"Basic operations are provided to manipulate the values in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentSet"),":"),(0,r.kt)("h3",{id:"adding-values"},"Adding Values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"add(x: A): UIO[Boolean]")),(0,r.kt)("td",{parentName:"tr",align:null},"Adds a new value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"addAll(xs: Iterable[A]): UIO[Boolean]")),(0,r.kt)("td",{parentName:"tr",align:null},"Adds all new values.")))),(0,r.kt)("h3",{id:"updating-values"},"Updating Values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"transform(f: A => A): UIO[Unit]")),(0,r.kt)("td",{parentName:"tr",align:null},"Transform all elements of the ConcurrentSet using the given function.")))),(0,r.kt)("h3",{id:"removing-values"},"Removing Values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"remove(x: A): UIO[Boolean]")),(0,r.kt)("td",{parentName:"tr",align:null},"Removes the entry for the given value if it is mapped to an existing element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"removeAll(xs: Iterable[A]): UIO[Boolean]")),(0,r.kt)("td",{parentName:"tr",align:null},"Removes all the entries for the given values if they are mapped to an existing element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"removeIf(p: A => Boolean): UIO[Boolean]")),(0,r.kt)("td",{parentName:"tr",align:null},"Removes all elements which satisfy the given predicate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"retainAll(xs: Iterable[A]): UIO[Boolean]")),(0,r.kt)("td",{parentName:"tr",align:null},"Retain all the entries for the given values if they are mapped to an existing element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"retainIf(p: A => Boolean): UIO[Boolean]")),(0,r.kt)("td",{parentName:"tr",align:null},"Removes all elements which do not satisfy the given predicate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"clear: UIO[Unit]")),(0,r.kt)("td",{parentName:"tr",align:null},"Removes all elements.")))),(0,r.kt)("h2",{id:"retrieval-operations"},"Retrieval Operations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"collectFirst[B](pf: PartialFunction[(A, B)): UIO[Option[B]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Finds the first element of a set for which the partial function is defined and applies the function to it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"exists(p: A => Boolean): UIO[Boolean]")),(0,r.kt)("td",{parentName:"tr",align:null},"Tests whether a given predicate holds true for at least one element in the set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fold[R, E, S](zero: S)(f: (S, A) => S): UIO[S]")),(0,r.kt)("td",{parentName:"tr",align:null},"Folds the elements of a set using the given binary operator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"forall(p: A => Boolean): UIO[Boolean]")),(0,r.kt)("td",{parentName:"tr",align:null},"Tests whether a predicate is satisfied by all elements of a set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"find[B](p: A => Boolean): UIO[Option[A]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Retrieves the elements in which predicate is satisfied.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contains(x: A): UIO[Boolean]")),(0,r.kt)("td",{parentName:"tr",align:null},"Tests whether if the element is in the set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"containsAll(xs: Iterable[A]): UIO[Boolean]")),(0,r.kt)("td",{parentName:"tr",align:null},"Tests if the elements in the collection are a subset of the set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"size: UIO[Int]")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of elements in the set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isEmpty: UIO[Boolean]")),(0,r.kt)("td",{parentName:"tr",align:null},"True if there are no elements in the set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"toSet: UIO[Set[A]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Convert the ConcurrentSet to Set.")))),(0,r.kt)("h2",{id:"example-usage"},"Example Usage"),(0,r.kt)("p",null,"Given:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.concurrent.ConcurrentSet\n\nfor {\n  emptySet  <- ConcurrentSet.empty[Int] \n  setA      <- ConcurrentSet.make[Int](1, 2, 3, 4)\n} yield ()\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Result"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"emptySet.add(1).toSet")),(0,r.kt)("td",{parentName:"tr",align:null},"Set(1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"setA.addAll(Chunk(5, 6).toSet)")),(0,r.kt)("td",{parentName:"tr",align:null},"Set(1, 2, 3, 4, 5, 6)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"setA.remove(1).toSet")),(0,r.kt)("td",{parentName:"tr",align:null},"Set(2, 3, 4)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"setA.removeAll(1, 3).toSet")),(0,r.kt)("td",{parentName:"tr",align:null},"Set(2, 4)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"setA.retainAll(List(1, 3, 5, 6)).toSet")),(0,r.kt)("td",{parentName:"tr",align:null},"Set(1, 3)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"setA.clear.isEmpty")),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"setA.contains(5)")),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"setA.containsAll(Chunk(1, 2, 3))")),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"setA.exists(_ > 4)")),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"setA.forAll(_ < 5)")),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"setA.removeIf(_ % 2 == 0)")),(0,r.kt)("td",{parentName:"tr",align:null},"Set(2, 4)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"setA.retainIf(_ % 2 == 0)")),(0,r.kt)("td",{parentName:"tr",align:null},"Set(1, 3)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"setA.find(_ > 2)")),(0,r.kt)("td",{parentName:"tr",align:null},"Set(3, 4)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'setA.collectFirst { case 3 => "Three" }')),(0,r.kt)("td",{parentName:"tr",align:null},"Set(3)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"setA.size")),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"setA.transform(_ + 10)")),(0,r.kt)("td",{parentName:"tr",align:null},"Set(11, 12, 13, 14)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"setA.fold(0)(_ + _)")),(0,r.kt)("td",{parentName:"tr",align:null},"10")))))}u.isMDXComponent=!0}}]);