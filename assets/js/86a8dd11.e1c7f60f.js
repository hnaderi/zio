"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[1216],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(r),u=o,m=h["".concat(c,".").concat(u)]||h[u]||d[u]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},16479:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={id:"expected-and-unexpected-errors",title:"Expected and Unexpected Errors"},i=void 0,s={unversionedId:"reference/error-management/expected-and-unexpected-errors",id:"reference/error-management/expected-and-unexpected-errors",title:"Expected and Unexpected Errors",description:"Inside an application, there are two distinct categories of errors:",source:"@site/docs/reference/error-management/expected-and-unexpected-errors.md",sourceDirName:"reference/error-management",slug:"/reference/error-management/expected-and-unexpected-errors",permalink:"/reference/error-management/expected-and-unexpected-errors",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/error-management/expected-and-unexpected-errors.md",tags:[],version:"current",frontMatter:{id:"expected-and-unexpected-errors",title:"Expected and Unexpected Errors"},sidebar:"reference-sidebar",previous:{title:"Imperative vs. Declarative",permalink:"/reference/error-management/imperative-vs-declarative"},next:{title:"Exceptional and Unexceptional Effects",permalink:"/reference/error-management/exceptional-and-unexceptional-effects"}},c={},l=[{value:"Expected Errors",id:"expected-errors",level:2},{value:"Unexpected Errors",id:"unexpected-errors",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Expected Errors",id:"expected-errors-1",level:3},{value:"Unexpected Errors",id:"unexpected-errors-1",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Inside an application, there are two distinct categories of errors:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Expected errors")," are those that are expected to occur, and we tend to recover them. They are also known as ",(0,o.kt)("em",{parentName:"li"},"recoverable errors")," or ",(0,o.kt)("em",{parentName:"li"},"declared errors"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Unexpected errors")," are those that are not expected to occur, and they are not recoverable. They are also known as ",(0,o.kt)("em",{parentName:"li"},"non-recoverable errors")," or ",(0,o.kt)("em",{parentName:"li"},"defects"),". ")),(0,o.kt)("h2",{id:"expected-errors"},"Expected Errors"),(0,o.kt)("p",null,"Expected errors are those errors in which we expected them to happen in normal circumstances, and we can't prevent them. They can be predicted upfront, and we can plan for them. We know when, where, and why they occur. So we know when, where, and how to handle these errors. By handling them we can recover from the failure, this is why we say they are ",(0,o.kt)("em",{parentName:"p"},"recoverable errors"),". All domain errors, business errors are expected once because we talk about them in workflows and user stories, so we know about them in the context of business flows."),(0,o.kt)("p",null,"For example, when accessing an external database, that database might be down for some short period of time, so we retry to connect again, or after some number of attempts, we might decide to use an alternative solution, e.g. using an in-memory database."),(0,o.kt)("h2",{id:"unexpected-errors"},"Unexpected Errors"),(0,o.kt)("p",null,"We know there is a category of things that we are not going to expect and plan for. These are the things we don't expect but of course, we know they are going to happen. We don't know what is the exact root of these errors at runtime, so we have no idea how to handle them. They are actually going to bring down our production application, and then we have to figure out what went wrong to fix them."),(0,o.kt)("p",null,"For example, the corrupted database file will cause an unexpected error. We can't handle that in runtime. It may be necessary to shut down the whole application in order to prevent further damage."),(0,o.kt)("p",null,"Most of the unexpected errors are rooted in programming errors. This means, we have just tested the ",(0,o.kt)("em",{parentName:"p"},"happy path"),", so in case of ",(0,o.kt)("em",{parentName:"p"},"unhappy path")," we encounter a defect. When we have defects in our code we have no way of knowing about them otherwise we investigate, test, and fix them."),(0,o.kt)("p",null,"One of the common programming errors is forgetting to validate unexpected errors that may occur when we expect an input but the input is not valid, while we haven't validated the input. When the user inputs the invalid data, we might encounter the divide by zero exception or might corrupt our service state or a cause similar defect. "),(0,o.kt)("p",null,"These kinds of defects are common when we upgrade our service with the new data model for its input, while one of the other services is not upgraded with the new data contract and is calling our service with the deprecated data model. If we haven't a validation phase, they will cause defects!"),(0,o.kt)("p",null,"Another example of defects is ",(0,o.kt)("em",{parentName:"p"},"memory errors")," like ",(0,o.kt)("em",{parentName:"p"},"buffer overflows"),", ",(0,o.kt)("em",{parentName:"p"},"stack overflows"),", ",(0,o.kt)("em",{parentName:"p"},"out-of-memory"),", ",(0,o.kt)("em",{parentName:"p"},"invalid access to null pointers"),", and so forth. Most of the time these unexpected errors are occurs when we haven't written a memory-safe and resource-safe program, or they might occur due to hardware issues or uncontrollable external problems. We as a developer don't know how to cope with these types of errors at runtime. We should investigate to find the exact root cause of these defects."),(0,o.kt)("p",null,"As we cannot handle unexpected errors, we should instead log them with their respective stack traces and contextual information. So later we could investigate the problem and try to fix them. The best we can do with unexpected errors is to ",(0,o.kt)("em",{parentName:"p"},"sandbox")," them to limit the damage that they do to the overall application. For example, an unexpected error in browser extension shouldn't crash the whole browser."),(0,o.kt)("h2",{id:"best-practices"},"Best Practices"),(0,o.kt)("p",null,"So the best practice for each of these errors is as follows:"),(0,o.kt)("h3",{id:"expected-errors-1"},"Expected Errors"),(0,o.kt)("p",null,"we handle expected errors with the aid of the Scala compiler, by pushing them into the type system. In ZIO there is the error type parameter called ",(0,o.kt)("inlineCode",{parentName:"p"},"E"),", and this error type parameter is for modeling all the expected errors in the application."),(0,o.kt)("p",null,"A ZIO value has a type parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"E")," which is the type of ",(0,o.kt)("em",{parentName:"p"},"declared errors")," it can fail with. ",(0,o.kt)("inlineCode",{parentName:"p"},"E")," only covers the errors which were specified at the outset. The same ZIO value could still throw exceptions in unforeseen ways. These unforeseen situations are called ",(0,o.kt)("em",{parentName:"p"},"defects")," in a ZIO program, and they lie outside ",(0,o.kt)("inlineCode",{parentName:"p"},"E"),"."),(0,o.kt)("p",null,"Bringing abnormal situations from the domain of defects into that of ",(0,o.kt)("inlineCode",{parentName:"p"},"E")," enables the compiler to help us keep a tab on error conditions throughout the application, at compile time. This helps ensure the handling of domain errors in domain-specific ways."),(0,o.kt)("h3",{id:"unexpected-errors-1"},"Unexpected Errors"),(0,o.kt)("p",null,"We encode unexpected errors by not reflecting them to the type system because there is no way we could do it, and it wouldn't provide any value if we could. At best as we can, we simply sandbox that to some well-defined area of the application."),(0,o.kt)("p",null,"Note that ",(0,o.kt)("em",{parentName:"p"},"defects"),", can creep silently to higher levels in our application, and, if they get triggered at all, their handling might eventually be in more general ways."),(0,o.kt)("p",null,"So for ZIO, expected errors are reflected in the type of the ZIO effect, whereas unexpected errors are not so reflective, and that is the distinction."),(0,o.kt)("p",null,"That is the best practice. It helps us write better code. The code that we can reason about its error properties and potential expected errors. We can look at the ZIO effect and know how it is supposed to fail."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Unexpected errors are impossible to recover, and they will eventually shut down the application but expected errors can be recovered by handling them."),(0,o.kt)("li",{parentName:"ol"},"We do not type unexpected errors, but we type expected errors either explicitly or using general ",(0,o.kt)("inlineCode",{parentName:"li"},"Throwable")," error type."),(0,o.kt)("li",{parentName:"ol"},"Unexpected errors mostly is a sign of programming errors, but expected errors part of domain errors."),(0,o.kt)("li",{parentName:"ol"},"Even though we haven't any clue on how to handle defects, we might still need to do some operation, before letting them crash the application. So in such a situation, we can ",(0,o.kt)("a",{parentName:"li",href:"/reference/error-management/recovering/catching"},"catch defects")," do following operations, and then rethrow them again:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"logging the defect to a log aggregator"),(0,o.kt)("li",{parentName:"ul"},"sending an email to alert developers"),(0,o.kt)("li",{parentName:"ul"},'displaying a nice "unexpected error" message to the user'),(0,o.kt)("li",{parentName:"ul"},"etc.")))}d.isMDXComponent=!0}}]);