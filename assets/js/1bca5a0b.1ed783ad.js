"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[3186],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(n),u=o,y=p["".concat(s,".").concat(u)]||p[u]||d[u]||a;return n?r.createElement(y,i(i({ref:t},m),{},{components:n})):r.createElement(y,i({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},90800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},i=void 0,c={unversionedId:"resources/ecosystem/community/tamer",id:"resources/ecosystem/community/tamer",title:"tamer",description:"Tamer",source:"@site/docs/resources/ecosystem/community/tamer.md",sourceDirName:"resources/ecosystem/community",slug:"/resources/ecosystem/community/tamer",permalink:"/resources/ecosystem/community/tamer",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/resources/ecosystem/community/tamer.md",tags:[],version:"current",frontMatter:{},sidebar:"resources-sidebar",previous:{title:"Rezilience",permalink:"/resources/ecosystem/community/rezilience"},next:{title:"TranzactIO",permalink:"/resources/ecosystem/community/tranzactio"}},s={},l=[{value:"Tamer",id:"tamer",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Installation",id:"installation",level:3},{value:"Example",id:"example",level:3}],m={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"tamer"},"Tamer"),(0,o.kt)("p",null," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/laserdisc-io/tamer"},"Tamer")," is a multi-functional Kafka connector for producing data based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-kafka"},"ZIO Kafka"),"."),(0,o.kt)("h3",{id:"introduction"},"Introduction"),(0,o.kt)("p",null," Tamer is a completely customizable source connector that produces to Kafka. It ships with preconfigured modules for SQL, cloud storage and REST API, but you can provide your own functions and Tamer will take care of the rest."),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null," Depending on the source you have at hand you can add the correct dependency in your ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sbt"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "io.laserdisc" %% "tamer-db"                % "0.16.1"\nlibraryDependencies += "io.laserdisc" %% "tamer-oci-objectstorage" % "0.16.1"\nlibraryDependencies += "io.laserdisc" %% "tamer-rest"              % "0.16.1"\nlibraryDependencies += "io.laserdisc" %% "tamer-s3"                % "0.16.1"\n')),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null," Let's say you have a inventory DB that's compatible with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tpolecat/doobie"},"Doobie"),", you can get all of your items with just a few lines of code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import tamer._\nimport tamer.db._\n\nimport doobie.implicits.legacy.instant._\nimport doobie.syntax.string._\nimport zio._\nimport zio.duration._\nimport zio.json._\n\nimport java.time.Instant\n\ncase class Row(id: String, name: String, description: Option[String], modifiedAt: Instant)\n    extends tamer.db.Timestamped(modifiedAt)\n\nobject Row {\n  implicit val rowJsonCodec = DeriveJsonCodec.gen[Row]\n}\n\nobject DatabaseSimple extends zio.App {\n  // Here we\'ll go with zio-json codec, you can use avro, circe and jsoniter\n  // out-of-the box or plug yours!\n  implicit val stateKeyJsonCodec = DeriveJsonCodec.gen[tamer.Tamer.StateKey]\n  implicit val windowJsonCodec = DeriveJsonCodec.gen[tamer.db.Window]\n\n  val program: RIO[ZEnv, Unit] = tamer.db.DbSetup\n    .tumbling(window =>\n      sql"""SELECT id, name, description, modified_at \n           |FROM users \n           |WHERE modified_at > ${window.from} AND modified_at <= ${window.to}""".stripMargin\n        .query[Row]\n    )(\n      recordKey = (_, v) => v.id,\n      from = Instant.parse("2020-01-01T00:00:00.00Z"),\n      tumblingStep = 5.days\n    )\n    .runWith(dbLayerFromEnvironment ++ tamer.kafkaConfigFromEnvironment)\n\n  override final def run(args: List[String]): URIO[ZEnv, ExitCode] =\n    program.exitCode\n\n  // If you have other codecs like circe in the classpath you have to disambiguate\n  implicit lazy val stateKeyCodec: Codec[Tamer.StateKey] = Codec.optionalZioJsonCodec\n  implicit lazy val windowCodec: Codec[tamer.db.Window] = Codec.optionalZioJsonCodec\n  implicit lazy val stringCodec: Codec[String] = Codec.optionalZioJsonCodec\n}\n')),(0,o.kt)("p",null," See full example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/laserdisc-io/tamer/blob/4e1a7646fb44041648d9aa3ba089decb81ebe487/example/src/main/scala/tamer/db/DatabaseSimple.scala"},"on the GitHub repo")))}d.isMDXComponent=!0}}]);