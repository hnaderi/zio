"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[571],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||s;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},97655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={id:"test-hierarchies-and-organization",title:"Test Hierarchies and Organization"},i=void 0,o={unversionedId:"reference/test/test-hierarchies-and-organization",id:"reference/test/test-hierarchies-and-organization",title:"Test Hierarchies and Organization",description:"A Spec[R, E] is the backbone of ZIO Test. All specs require an environment of type R and may potentially fail with an error of type E.",source:"@site/docs/reference/test/test-hierarchies-and-organization.md",sourceDirName:"reference/test",slug:"/reference/test/test-hierarchies-and-organization",permalink:"/reference/test/test-hierarchies-and-organization",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/test-hierarchies-and-organization.md",tags:[],version:"current",frontMatter:{id:"test-hierarchies-and-organization",title:"Test Hierarchies and Organization"},sidebar:"reference-sidebar",previous:{title:"How it Works?",permalink:"/reference/test/assertions/how-it-works"},next:{title:"Sharing Layers within the Same File",permalink:"/reference/test/sharing-layers-within-the-same-file"}},l={},c=[{value:"A Single Spec",id:"a-single-spec",level:2},{value:"Collection of Multiple Specs",id:"collection-of-multiple-specs",level:2},{value:"Collection of Multiple <strong>Smart</strong> Specs",id:"collection-of-multiple-smart-specs",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Spec[R, E]")," is the backbone of ZIO Test. All specs require an environment of type ",(0,a.kt)("inlineCode",{parentName:"p"},"R")," and may potentially fail with an error of type ",(0,a.kt)("inlineCode",{parentName:"p"},"E"),"."),(0,a.kt)("p",null,"We can think of a spec as just a collection of tests. It is essentially a recursive data structure where every spec is just one individual test or a suite that itself can have multiple specs inside that each could be tests or sub suites. We can go down as far as we want in a recursive tree-like data structure."),(0,a.kt)("h2",{id:"a-single-spec"},"A Single Spec"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," constructor creates one single spec:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.test._\n\nval mySpec = test("true is true") {\n  assertTrue(true)\n}\n')),(0,a.kt)("p",null,"Real tests that run some logic and return testing result are created mostly with ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," function. It expects two arguments, first one will be the label of test which will be used for visual reporting back to the user, and an assertion which contains some testable logic specified about a target under the test."),(0,a.kt)("h2",{id:"collection-of-multiple-specs"},"Collection of Multiple Specs"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"suite")," creates a suite which contains other specs (tests or suites):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.test._\n\nval mySuite =\n  suite("A suite containing multiple tests")(\n    test("the first test") {\n      assertTrue(1 + 1 == 2)\n    },\n    test("the second test") {\n      assertTrue(2 * 2 == 4)\n    }\n  )\n')),(0,a.kt)("p",null,"Suites can contain other suites. We can have multiple suites and one big suite that will aggregate them all:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.test._\n\nsuite("int and string")(\n  suite("int suite")(\n    test("minus")(assertTrue(2 - 1 == 1)),\n    test("plus")(assertTrue(1 + 1 == 2))\n  ),\n  suite("string suite")(\n    test("concat")(assertTrue("a" + "b" == "ab")),\n    test("length")(assertTrue("abc".length == 3))\n  )\n)\n')),(0,a.kt)("h2",{id:"collection-of-multiple-smart-specs"},"Collection of Multiple ",(0,a.kt)("strong",{parentName:"h2"},"Smart")," Specs"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"suite")," method creates a spec from a collection of specs. So what we can do is to provide it with a collection of specs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.test._\n\nobject ExampleSpec extends ZIOSpecDefault {\n\n  def spec =\n    suite("some suite")(\n      test("test 1") {\n        val stuff = 1\n        assertTrue(stuff == 1)\n      },\n      test("test 2") {\n        val stuff = Some(1)\n        assertTrue(stuff == Some(1))\n      }\n    )\n\n}\n')),(0,a.kt)("p",null,"But what if we wanted to have a suite of tests that work on a common value, e.g. the same ",(0,a.kt)("inlineCode",{parentName:"p"},"stuff"),"? ZIO provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"suiteAll")," method that helps us to share the same ",(0,a.kt)("inlineCode",{parentName:"p"},"stuff")," between all tests:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.test._\n\nobject ExampleSpec extends ZIOSpecDefault {\n\n  def spec =\n    suiteAll("some suite") {\n\n      val stuff = "hello"\n\n      test("test 1") {\n        assertTrue(stuff.startsWith("h"))\n      }\n\n      val stuff2 = 5\n\n      test("test 2") {\n        assertTrue(stuff.length == stuff2)\n      }\n    }\n\n}\n')))}p.isMDXComponent=!0}}]);