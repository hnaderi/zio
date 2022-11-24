"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[53218],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var n=i(67294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(i),m=l,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return i?n.createElement(g,o(o({ref:t},u),{},{components:i})):n.createElement(g,o({ref:t},u))}));function m(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=i.length,o=new Array(a);o[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var p=2;p<a;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},96812:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var n=i(87462),l=(i(67294),i(3905));const a={id:"sbt-plugin",title:"ZIO CLI SBT Plugin",sidebar_label:"SBT Plugin"},o=void 0,r={unversionedId:"sbt-plugin",id:"sbt-plugin",title:"ZIO CLI SBT Plugin",description:"Overview",source:"@site/node_modules/@zio.dev/zio-cli/sbt-plugin.md",sourceDirName:".",slug:"/sbt-plugin",permalink:"/zio-cli/sbt-plugin",draft:!1,tags:[],version:"current",frontMatter:{id:"sbt-plugin",title:"ZIO CLI SBT Plugin",sidebar_label:"SBT Plugin"},sidebar:"sidebar",previous:{title:"Bash and Zsh Completion",permalink:"/zio-cli/bash-and-zsh-completion"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Current State",id:"current-state",level:2},{value:"Native Images",id:"native-images",level:3},{value:"Outstanding Action Items",id:"outstanding-action-items",level:2},{value:"Plugin Settings",id:"plugin-settings",level:2},{value:"zioCliMainClass: Option[String]",id:"zioclimainclass-optionstring",level:3},{value:"zioCliNativeImageOptions: Seq[String]",id:"zioclinativeimageoptions-seqstring",level:3},{value:"zioCliNativeImageReady: () =&gt; Unit",id:"zioclinativeimageready---unit",level:3},{value:"Plugin Tasks",id:"plugin-tasks",level:2},{value:"zioCliBuildNative: Unit",id:"zioclibuildnative-unit",level:3},{value:"zioCliGenerateBashCompletion: Unit",id:"ziocligeneratebashcompletion-unit",level:3},{value:"zioCliGenerateZshCompletion: Unit",id:"ziocligeneratezshcompletion-unit",level:3},{value:"zioCliInstallCli: Unit",id:"ziocliinstallcli-unit",level:3},{value:"End User Project Setup",id:"end-user-project-setup",level:2},{value:"Locally Publishing the Plugin",id:"locally-publishing-the-plugin",level:3},{value:"End User Project",id:"end-user-project",level:3}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"ZIO CLI offers an SBT plugin to provide some tasks to make generation and deployment of\napplications simple."),(0,l.kt)("h2",{id:"current-state"},"Current State"),(0,l.kt)("p",null,"The current functionality of the plugin offers:"),(0,l.kt)("h3",{id:"native-images"},"Native Images"),(0,l.kt)("p",null,"This SBT plugin depends on and utilizes the\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/scalameta/sbt-native-image"},"sbt-native-image")," plugin. Tasks and settings\nrelated to building a native image map 1:1 to the upstream plugin."),(0,l.kt)("h2",{id:"outstanding-action-items"},"Outstanding Action Items"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Investigate if any cross versions are needed for different versions of SBT"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add remaining corresponding upstream configuration options to pass into the ",(0,l.kt)("inlineCode",{parentName:"li"},"sbt-native-image")," plugin."),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Implement ",(0,l.kt)("inlineCode",{parentName:"li"},"zioCliGenerateBashCompletion"),", when ready."),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Implement ",(0,l.kt)("inlineCode",{parentName:"li"},"zioCliGenerateZshCompletion"),", when ready."),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Implement ",(0,l.kt)("inlineCode",{parentName:"li"},"zioCliInstallCli"),", when ready.")),(0,l.kt)("h2",{id:"plugin-settings"},"Plugin Settings"),(0,l.kt)("h3",{id:"zioclimainclass-optionstring"},"zioCliMainClass: Option","[","String","]"),(0,l.kt)("p",null,"The mainClass of the CLI App in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Compile")," scope. Defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"None"),", and will need to be set."),(0,l.kt)("h3",{id:"zioclinativeimageoptions-seqstring"},"zioCliNativeImageOptions: Seq","[","String","]"),(0,l.kt)("p",null,"A collection of arguments to pass the native-image builder to customize native image generation. Defaults to"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'List(\n      "--allow-incomplete-classpath",\n      "--report-unsupported-elements-at-runtime",\n      "--initialize-at-build-time",\n      "--no-fallback"\n    )\n')),(0,l.kt)("h3",{id:"zioclinativeimageready---unit"},"zioCliNativeImageReady: ","(",")"," => Unit"),(0,l.kt)("p",null,"A side-effecting callback that is called the native image is ready. Defaults to"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'() => {\n        println("ZIO CLI App Native Image Ready!")\n      } \n')),(0,l.kt)("h2",{id:"plugin-tasks"},"Plugin Tasks"),(0,l.kt)("h3",{id:"zioclibuildnative-unit"},"zioCliBuildNative: Unit"),(0,l.kt)("p",null,"Sets mainClass in Compile, and attempts to run ",(0,l.kt)("inlineCode",{parentName:"p"},"nativeImage")," with any applied ",(0,l.kt)("inlineCode",{parentName:"p"},"nativeImageOptions"),".\nFires ",(0,l.kt)("inlineCode",{parentName:"p"},"zioCliNativeImageReady")," on success."),(0,l.kt)("h3",{id:"ziocligeneratebashcompletion-unit"},"zioCliGenerateBashCompletion: Unit"),(0,l.kt)("p",null,"Not currently implemented; prints ",(0,l.kt)("inlineCode",{parentName:"p"},'"TODO: Not Implemented!"')),(0,l.kt)("h3",{id:"ziocligeneratezshcompletion-unit"},"zioCliGenerateZshCompletion: Unit"),(0,l.kt)("p",null,"Not currently implemented; prints ",(0,l.kt)("inlineCode",{parentName:"p"},'"TODO: Not Implemented!"')),(0,l.kt)("h3",{id:"ziocliinstallcli-unit"},"zioCliInstallCli: Unit"),(0,l.kt)("p",null,"Not currently implemented; prints ",(0,l.kt)("inlineCode",{parentName:"p"},'"TODO: Not Implemented!"')),(0,l.kt)("h2",{id:"end-user-project-setup"},"End User Project Setup"),(0,l.kt)("p",null,"There are several steps that are needed to use this in an end user project:"),(0,l.kt)("h3",{id:"locally-publishing-the-plugin"},"Locally Publishing the Plugin"),(0,l.kt)("p",null,"To compile and locally publish a copy of the SBT plugin, simply call  ",(0,l.kt)("inlineCode",{parentName:"p"},"publishLocal")," on the ",(0,l.kt)("inlineCode",{parentName:"p"},"sbtZioCli")," project. Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sbt> project sbtZioCli\nsbt> publishLocal\n")),(0,l.kt)("p",null,"This will locally publish an artifact: ",(0,l.kt)("inlineCode",{parentName:"p"},'"zio.cli.sbt" % "sbt-zio-cli" % "0.0.0-SNAPSHOT"')),(0,l.kt)("h3",{id:"end-user-project"},"End User Project"),(0,l.kt)("p",null,"In your project, configure SBT to use the plugin by adding to ",(0,l.kt)("inlineCode",{parentName:"p"},"project/plugins.sbt"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'addSbtPlugin("zio.cli.sbt" % "sbt-zio-cli" % "0.0.0-SNAPSHOT")\n')),(0,l.kt)("p",null,"Then, enable the plugin for your project in your ",(0,l.kt)("inlineCode",{parentName:"p"},"build.sbt")," file. Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'lazy val root = project\n  .in(file("."))\n  .enablePlugins(ZIOCLIPlugin)\n  .settings(\n    CLIPlugin.zioCliMainClass := Some("zio.cli.YourApp")\n  )\n')),(0,l.kt)("p",null,"At this point, you should be able to build a native image of your application with the task:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sbt> zioCliBuildNative\n")))}c.isMDXComponent=!0}}]);