"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[6564],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(o),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return o?n.createElement(h,i(i({ref:t},p),{},{components:o})):n.createElement(h,i({ref:t},p))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},32173:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=o(87462),a=(o(67294),o(3905));const r={id:"zpool",title:"ZPool"},i=void 0,l={unversionedId:"reference/resource/zpool",id:"reference/resource/zpool",title:"ZPool",description:"A ZPool[E, A] is a pool of items of type A, each of which may be associated with the acquisition and release of resources. An attempt to get an item A from a pool may fail with an error of type E.",source:"@site/docs/reference/resource/zpool.md",sourceDirName:"reference/resource",slug:"/reference/resource/zpool",permalink:"/reference/resource/zpool",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/resource/zpool.md",tags:[],version:"current",frontMatter:{id:"zpool",title:"ZPool"},sidebar:"reference-sidebar",previous:{title:"Scope",permalink:"/reference/resource/scope"},next:{title:"Introduction",permalink:"/reference/stream/"}},s={},c=[{value:"Motivation",id:"motivation",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Constructing ZPools",id:"constructing-zpools",level:2},{value:"Fixed-size Pools",id:"fixed-size-pools",level:3},{value:"Dynamically-sized Pools",id:"dynamically-sized-pools",level:3},{value:"Operators on ZPool",id:"operators-on-zpool",level:2},{value:"Resource Acquisition",id:"resource-acquisition",level:3},{value:"Resource Invalidation",id:"resource-invalidation",level:3}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"ZPool[E, A]")," is a pool of items of type ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),", each of which may be associated with the acquisition and release of resources. An attempt to get an item ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," from a pool may fail with an error of type ",(0,a.kt)("inlineCode",{parentName:"p"},"E"),"."),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"Acquiring some resources is expensive to create and time-consuming. This includes network connections (sockets, databases, remote services), threads, and so on."),(0,a.kt)("p",null,"There are some cases that"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We require a ",(0,a.kt)("strong",{parentName:"li"},"fast and predictable")," way of accessing resources."),(0,a.kt)("li",{parentName:"ul"},"We need a solution to ",(0,a.kt)("strong",{parentName:"li"},"scale across the number of resources"),"."),(0,a.kt)("li",{parentName:"ul"},"On the other hand, each ",(0,a.kt)("strong",{parentName:"li"},"resource consumption doesn't take a long time"),".")),(0,a.kt)("p",null,"If we create a new resource for every resource acquisition, consequently we will find ourselves in a constant repetition of acquisition and release of resources. This might end up with thousands of resources (e.g. connection to a database) created within a short time, which will reduce the performance of our application."),(0,a.kt)("p",null,"To address these issues, we can create a pool of pre-initialized resources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Whenever we need a new resource, we acquire that from the existing resources of the pool. So the resource acquisition will be predictable, and it will avoid the overhead of acquisition."),(0,a.kt)("li",{parentName:"ul"},"When the resource is no longer needed, we release that back to the resource pool. So the released resources will be recyclable, and it will avoid the overhead of re-acquisition.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ZPool")," is an implementation of such an idea with some excellent properties that we will cover on this page."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ZPool")," is an asynchronous and concurrent generalized pool of reusable resources, that is used to create and manage a pool of objects."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZPool[+Error, Item] {\n  def get: ZIO[Scope, Error, Item]\n  def invalidate(item: Item): UIO[Unit]\n}\n")),(0,a.kt)("p",null,"The two fundamental operators on a ",(0,a.kt)("inlineCode",{parentName:"p"},"ZPool")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"invalidate"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"get")," operator retrieves an item from the pool in a scoped effect."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"invalidate")," operator invalidates the specified item. This will cause the pool to eventually reallocate the item.")),(0,a.kt)("h2",{id:"constructing-zpools"},"Constructing ZPools"),(0,a.kt)("h3",{id:"fixed-size-pools"},"Fixed-size Pools"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"make")," constructor is a common way to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"ZPool"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"object ZPool {\n  def make[E, A](get: ZIO[Scope, E, A], size: Int): ZIO[Scope, Nothing, ZPool[E, A]] = ???\n}\n")),(0,a.kt)("p",null,"It takes a scoped resource of type ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),", and the ",(0,a.kt)("inlineCode",{parentName:"p"},"size")," of the pool. The return type will be a scoped ",(0,a.kt)("inlineCode",{parentName:"p"},"ZPool"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A fixed pool size will be used to pre-allocate pool entries, so all the entries of the pool will be acquired eagerly. As a client of the ",(0,a.kt)("inlineCode",{parentName:"li"},"ZPool")," it is recommended to analyze requirements to find out the best suitable size for the resource pool. If we set up a pool with too many eagerly-acquired resources, that may reduce the performance due to the resource contention."),(0,a.kt)("li",{parentName:"ul"},"As the return type of the constructor is ",(0,a.kt)("inlineCode",{parentName:"li"},"ZIO[Scope, Nothing, ZPool[E, A]]"),", it will manage automatically the life cycle of the pool. So, as a client of ",(0,a.kt)("inlineCode",{parentName:"li"},"ZPool"),", we do not require to shutdown the pool manually.")),(0,a.kt)("p",null,"There is another constructor called ",(0,a.kt)("inlineCode",{parentName:"p"},"ZPool.fromInterable")," that is suitable when no cleanup or release actions are required."),(0,a.kt)("h3",{id:"dynamically-sized-pools"},"Dynamically-sized Pools"),(0,a.kt)("p",null,"The previous constructor creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"ZPool")," with a fixed size, so all of its entries are pre-allocated. There is another constructor that creates a pool with pre-allocated minimum entries (eagerly-acquired resources), plus it can increase its entries ",(0,a.kt)("em",{parentName:"p"},"on-demand")," (lazily-acquired resources) until reaches the specified maximum size:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"def make[E, A](get: ZIO[Scope, E, A],\n        range: Range, // minimum and maximum size of the pool\n        timeToLive: Duration): ZIO[Scope, Nothing, ZPool[E, A]]\n")),(0,a.kt)("p",null,"Having a lot of resources that are over our average requirement can waste space and degrade the performance. Therefore, this variant of ",(0,a.kt)("inlineCode",{parentName:"p"},"ZPool")," has an ",(0,a.kt)("em",{parentName:"p"},"eviction policy"),". By taking the ",(0,a.kt)("inlineCode",{parentName:"p"},"timeToLive")," argument, it will evict excess items that have not been acquired for more than the ",(0,a.kt)("inlineCode",{parentName:"p"},"timeToLive")," time, until it reaches the minimum size."),(0,a.kt)("p",null,"Here is an example of creating pool of database connections:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"ZIO.scoped {\n  ZPool.make(acquireDbConnection, 10 to 20, 60.seconds).flatMap { pool =>\n    ZIO.scoped {\n      pool.get.flatMap { conn => useConnection(conn) }\n    }\n  }\n}\n")),(0,a.kt)("h2",{id:"operators-on-zpool"},"Operators on ZPool"),(0,a.kt)("h3",{id:"resource-acquisition"},"Resource Acquisition"),(0,a.kt)("p",null,"After creating a pool, we can retrieve a resource from the pool using ",(0,a.kt)("inlineCode",{parentName:"p"},"ZPool#get")," operation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZPool[+Error, Item] {\n  def get: ZIO[Scope, Error, Item]\n}\n")),(0,a.kt)("p",null,"Here is how it works behind the scenes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If there is any resource available in the pre-allocated entries, it will return one of those."),(0,a.kt)("li",{parentName:"ul"},"If the demand exceeds the available resources in the pool, one new resource will be allocated on-demand and returned to the client."),(0,a.kt)("li",{parentName:"ul"},"If the demand exceeds the maximum size of the pool, it will block while it waits for a resource to become available."),(0,a.kt)("li",{parentName:"ul"},"If the acquisition of a resource fails, then the returned effect will fail for the same reason.")),(0,a.kt)("p",null,"In case of failure, we can retry a failed acquisition. It will repeat the acquisition attempt:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"ZPool.make(acquireDbConnection, 10).flatMap { pool =>\n  pool.get.flatMap( conn => useConnection(conn)).eventually\n}\n")),(0,a.kt)("h3",{id:"resource-invalidation"},"Resource Invalidation"),(0,a.kt)("p",null,"When we are working with resources, especially the remote ones, they may become invalid or faulty. On the other hand, when the resource's life cycle ends, it will be automatically returned to the resource pool. So what happens if another client acquires a resource from the pool? The faulty resource can cause a problem for the next client. To prevent that, we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZPool#invalidate")," to claim that the resource is invalid:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZPool[+Error, Item] {\n  def invalidate(item: Item): UIO[Unit]\n}\n")),(0,a.kt)("p",null,"In this case, the pool will eventually reallocate the item, but this will happen lazily rather than eagerly."))}u.isMDXComponent=!0}}]);