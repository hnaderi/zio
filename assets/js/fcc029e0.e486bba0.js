"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[2659],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=o,f=m["".concat(c,".").concat(h)]||m[h]||u[h]||i;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45272:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const i={id:"zio-cache",title:"ZIO Cache"},r=void 0,s={unversionedId:"resources/ecosystem/officials/zio-cache",id:"resources/ecosystem/officials/zio-cache",title:"ZIO Cache",description:"ZIO Cache is a library that makes it easy to optimize the performance of our application by caching values.",source:"@site/docs/resources/ecosystem/officials/zio-cache.md",sourceDirName:"resources/ecosystem/officials",slug:"/resources/ecosystem/officials/zio-cache",permalink:"/resources/ecosystem/officials/zio-cache",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/resources/ecosystem/officials/zio-cache.md",tags:[],version:"current",frontMatter:{id:"zio-cache",title:"ZIO Cache"},sidebar:"resources-sidebar",previous:{title:"ZIO AWS",permalink:"/resources/ecosystem/officials/zio-aws"},next:{title:"ZIO Config",permalink:"/resources/ecosystem/officials/zio-config"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2},{value:"Resources",id:"resources",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ZIO Cache is a library that makes it easy to optimize the performance of our application by caching values."),(0,o.kt)("p",null,"Sometimes we may call or receive requests to do overlapping work. Assume we are writing a service that is going to handle all incoming requests. We don't want to handle duplicate requests. Using ZIO Cache we can make our application to be more ",(0,o.kt)("strong",{parentName:"p"},"performant")," by preventing duplicated works."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Some key features of ZIO Cache:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Compositionality")," \u2014 If we want our applications to be ",(0,o.kt)("strong",{parentName:"p"},"compositional"),", different parts of our application may do overlapping work. ZIO Cache helps us to stay benefit from compositionality while using caching.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Unification of Synchronous and Asynchronous Caches")," \u2014 Compositional definition of cache in terms of ",(0,o.kt)("em",{parentName:"p"},"lookup function")," unifies synchronous and asynchronous caches. So the lookup function can compute value either synchronously or asynchronously.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Deep ZIO Integration")," \u2014 ZIO Cache is a ZIO native solution. So without losing the power of ZIO it includes support for ",(0,o.kt)("em",{parentName:"p"},"concurrent lookups"),", ",(0,o.kt)("em",{parentName:"p"},"failure"),", and ",(0,o.kt)("em",{parentName:"p"},"interruption"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Caching Policy")," \u2014 Using caching policy, the ZIO Cache can determine when values should/may be removed from the cache. So, if we want to build something more complex and custom we have a lot of flexibility. The caching policy has two parts and together they define a whole caching policy:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Priority (Optional Removal)")," \u2014 When we are running out of space, it defines the order that the existing values ",(0,o.kt)("strong",{parentName:"p"},"might")," be removed from the cache to make more space.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Evict (Mandatory Removal)")," \u2014 Regardless of space when we ",(0,o.kt)("strong",{parentName:"p"},"must")," remove existing values because they are no longer valid anymore. They might be invalid because they do not satisfy business requirements (e.g., maybe it's too old). This is a function that determines whether an entry is valid based on the entry and the current time.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Composition Caching Policy")," \u2014 We can define much more complicated caching policies out of much simpler ones.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Cache/Entry Statistics")," \u2014 ZIO Cache maintains some good statistic metrics, such as entries, memory size, hits, misses, loads, evictions, and total load time. So we can look at how our cache is doing and decide where we should change our caching policy to improve caching metrics."))),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-cache" % "0.2.0-RC6"\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"In this example, we are calling ",(0,o.kt)("inlineCode",{parentName:"p"},"timeConsumingEffect")," three times in parallel with the same key. The ZIO Cache runs this effect only once. So the concurrent lookups will suspend until the value being computed is available:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.cache.{Cache, Lookup}\n\nobject ZIOCacheExample extends ZIOAppDefault {\n  def timeConsumingEffect(key: String) =\n    ZIO.sleep(5.seconds).as(key.hashCode)\n\n  def run =\n    for {\n      cache <- Cache.make(\n        capacity = 100,\n        timeToLive = Duration.Infinity,\n        lookup = Lookup(timeConsumingEffect)\n      )\n      result <- cache\n        .get("key1")\n        .zipPar(cache.get("key1"))\n        .zipPar(cache.get("key1"))\n      _ <- ZIO.debug(\n        s"Result of parallel execution of three effects with the same key: $result"\n      )\n\n      hits <- cache.cacheStats.map(_.hits)\n      misses <- cache.cacheStats.map(_.misses)\n      _ <- ZIO.debug(s"Number of cache hits: $hits")\n      _ <- ZIO.debug(s"Number of cache misses: $misses")\n    } yield ()\n\n}\n')),(0,o.kt)("p",null,"The output of this program should be as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Result of parallel execution three effects with the same key: ((3288498,3288498),3288498)\nNumber of cache hits: 2\nNumber of cache misses: 1\n")),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=iFeTUhYpPLs"},"Compositional Caching")," by Adam Fraser (December 2020) \u2014 In this talk, Adam will introduce ZIO Cache, a new library in the ZIO ecosystem that provides a drop-in caching solution for ZIO applications. We will see how ZIO\u2019s support for asynchrony and concurrent lets us implement a cache in terms of a single lookup function and how we get many other things such as typed errors and compositional caching policies for free. See how easy it can be to add caching to your ZIO application!")))}u.isMDXComponent=!0}}]);