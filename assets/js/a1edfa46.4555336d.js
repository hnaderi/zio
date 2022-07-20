"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[5627],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},990:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={id:"task",title:"Task"},i=void 0,p={unversionedId:"datatypes/core/task",id:"version-1.x/datatypes/core/task",title:"Task",description:"Task[A] is a type alias for ZIO[Any, Throwable, A], which represents an effect that has no requirements, and may fail with a Throwable value, or succeed with an A.",source:"@site/versioned_docs/version-1.x/datatypes/core/task.md",sourceDirName:"datatypes/core",slug:"/datatypes/core/task",permalink:"/version-1.x/datatypes/core/task",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/core/task.md",tags:[],version:"1.x",frontMatter:{id:"task",title:"Task"},sidebar:"datatypes-sidebar",previous:{title:"URIO",permalink:"/version-1.x/datatypes/core/urio"},next:{title:"RIO",permalink:"/version-1.x/datatypes/core/rio"}},s={},l=[],c={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Task[A]")," is a type alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO[Any, Throwable, A]"),", which represents an effect that has no requirements, and may fail with a ",(0,r.kt)("inlineCode",{parentName:"p"},"Throwable")," value, or succeed with an ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,r.kt)("p",null,"Let's see how the ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," type alias is defined:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"type Task[+A] = ZIO[Any, Throwable, A]\n")),(0,r.kt)("p",null,"So the ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," just equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," which doesn't require any dependency. Its error channel is ",(0,r.kt)("inlineCode",{parentName:"p"},"Throwable"),", so it may fail with ",(0,r.kt)("inlineCode",{parentName:"p"},"Throwable")," and may succeed with an ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," value."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("p",{parentName:"blockquote"},"In Scala, the ",(0,r.kt)("em",{parentName:"p"},"type alias")," is a way to give a name to another type, to avoid having to repeat the original type again and again. It doesn't affect the type-checking process. It just helps us to have an expressive API design.")),(0,r.kt)("p",null,"Some time, we know that our effect may fail, but we don't care the type of that exception, this is where we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Task"),". The type signature of this type-alias is similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Future[T]")," and Cats ",(0,r.kt)("inlineCode",{parentName:"p"},"IO"),"."),(0,r.kt)("p",null,"If we want to be less precise and want to eliminate the need to think about requirements and error types, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Task"),". This type-alias is a good start point for anyone who wants to refactor the current code base which is written in Cats ",(0,r.kt)("inlineCode",{parentName:"p"},"IO")," or Monix ",(0,r.kt)("inlineCode",{parentName:"p"},"Task"),". "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," ",(0,r.kt)("em",{parentName:"p"},"Principle of The Least Power")),(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," data type is the most powerful effect in the ZIO library. It helps us to model various types of workflows. On other hand, the type aliases are a way of subtyping and specializing the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," type, specific for a less powerful workflow. "),(0,r.kt)("p",{parentName:"blockquote"},"Lot of the time, we don't need such a piece of powerful machinery. So as a rule of thumb, whenever we require a less powerful effect, it's better to use the proper specialized type alias."),(0,r.kt)("p",{parentName:"blockquote"},"So there is no need to convert type aliases to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," data type, whenever the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," data type is required, we can use the most precise type alias to fit our workflow requirement.")))}u.isMDXComponent=!0}}]);