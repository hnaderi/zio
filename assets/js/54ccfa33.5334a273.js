"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[47322],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},53817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(87462),o=(n(67294),n(3905));const a={id:"index",title:"Introduction to ZIO Optics",sidebar_label:"ZIO Optics"},r=void 0,l={unversionedId:"zio-optics/index",id:"zio-optics/index",title:"Introduction to ZIO Optics",description:"ZIO Optics makes it easy to modify parts of larger data structures.",source:"@site/docs/zio-optics/index.md",sourceDirName:"zio-optics",slug:"/zio-optics/",permalink:"/zio-optics/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-optics/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO Optics",sidebar_label:"ZIO Optics"},sidebar:"ecosystem-sidebar",previous:{title:"Use Cases",permalink:"/zio-nio/use-cases"},next:{title:"Understanding Optics",permalink:"/zio-optics/understanding-optics"}},p={},s=[{value:"Installation",id:"installation",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ZIO Optics makes it easy to modify parts of larger data structures."),(0,o.kt)("p",null,"For example, say we have a web application where users can vote on which of various topics they are interested in. We maintain our state of how many votes each topic has received as a ",(0,o.kt)("inlineCode",{parentName:"p"},"Ref[Map[String, Int]]"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nlazy val voteRef: Ref[Map[String, Int]] =\n  ???\n")),(0,o.kt)("p",null,"If we want to increment the number of votes for one of the topics here is what it would look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'def incrementVotes(topic: String): Task[Unit] =\n  voteRef.modify { voteMap =>\n    voteMap.get(topic) match {\n      case Some(votes) =>\n        (ZIO.unit, voteMap + (topic -> (votes + 1)))\n      case None        =>\n        val message = s"voteMap $voteMap did not contain topic $topic"\n        (ZIO.fail(new NoSuchElementException(message)), voteMap)\n    }\n  }.flatten\n')),(0,o.kt)("p",null,"This is alright, but there is a lot of code here for a relatively simple operation of incrementing one of the keys. We have to get the value from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Ref"),", then get the value from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Map"),", and finally set the new value in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Map"),"."),(0,o.kt)("p",null,"We also have to explicitly handle the possibility that the value is not in the map. And this is all for a relatively simple data structure!"),(0,o.kt)("p",null,"Here is what this would look like with ZIO Optics."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.optics._\n\ndef incrementVotes(topic: String): Task[Unit] =\n  voteRef.key(topic).update(_ + 1)\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"key"),' optic "zooms in" on part of a larger structure, in this case transforming the ',(0,o.kt)("inlineCode",{parentName:"p"},"Ref[Map[String, Int]]")," into a ",(0,o.kt)("inlineCode",{parentName:"p"},"Ref")," that accesses the value at the specified key. We can then simply call the ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," operator on ",(0,o.kt)("inlineCode",{parentName:"p"},"Ref")," to increment the value."),(0,o.kt)("p",null,"The optic also handles the possibility of failure for us, failing with an ",(0,o.kt)("inlineCode",{parentName:"p"},"OpticFailure")," that is a subtype of ",(0,o.kt)("inlineCode",{parentName:"p"},"Throwable")," and contains a helpful error message if the key cannot be found."),(0,o.kt)("p",null,"ZIO Optics makes it easy to compose more complex optics from simpler ones, to define optics for your own data types, and to work with optics that use ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"STM")," effects."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Include ZIO Optics in your project by adding the following to your ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-optics" % "0.2.0"\n')))}d.isMDXComponent=!0}}]);