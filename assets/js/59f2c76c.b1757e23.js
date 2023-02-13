"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[91215],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},91254:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={id:"zio-kafka",title:"ZIO Kafka"},i=void 0,s={unversionedId:"ecosystem/officials/zio-kafka",id:"ecosystem/officials/zio-kafka",title:"ZIO Kafka",description:"ZIO Kafka is a Kafka client for ZIO. It provides a purely functional, streams-based interface to the Kafka client and integrates effortlessly with ZIO and ZIO Streams.",source:"@site/docs/ecosystem/officials/zio-kafka.md",sourceDirName:"ecosystem/officials",slug:"/ecosystem/officials/zio-kafka",permalink:"/ecosystem/officials/zio-kafka",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/ecosystem/officials/zio-kafka.md",tags:[],version:"current",frontMatter:{id:"zio-kafka",title:"ZIO Kafka"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2},{value:"Resources",id:"resources",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-kafka"},"ZIO Kafka")," is a Kafka client for ZIO. It provides a purely functional, streams-based interface to the Kafka client and integrates effortlessly with ZIO and ZIO Streams."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Apache Kafka is a distributed event streaming platform that acts as a distributed publish-subscribe messaging system. It enables us to build distributed streaming data pipelines and event-driven applications."),(0,a.kt)("p",null,"Kafka has a mature Java client for producing and consuming events, but it has a low-level API. ZIO Kafka is a ZIO native client for Apache Kafka. It has a high-level streaming API on top of the Java client. So we can produce and consume events using the declarative concurrency model of ZIO Streams."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-kafka" % "2.0.1" \n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Let's write a simple Kafka producer and consumer using ZIO Kafka with ZIO Streams. Before everything, we need a running instance of Kafka. We can do that by saving the following docker-compose script in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file and run ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose up"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-docker"},"version: '2'\nservices:\n  zookeeper:\n    image: confluentinc/cp-zookeeper:latest\n    environment:\n      ZOOKEEPER_CLIENT_PORT: 2181\n      ZOOKEEPER_TICK_TIME: 2000\n    ports:\n      - 22181:2181\n  \n  kafka:\n    image: confluentinc/cp-kafka:latest\n    depends_on:\n      - zookeeper\n    ports:\n      - 29092:29092\n    environment:\n      KAFKA_BROKER_ID: 1\n      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181\n      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092,PLAINTEXT_HOST://localhost:29092\n      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: PLAINTEXT:PLAINTEXT,PLAINTEXT_HOST:PLAINTEXT\n      KAFKA_INTER_BROKER_LISTENER_NAME: PLAINTEXT\n      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1\n")),(0,a.kt)("p",null,"Now, we can run our ZIO Kafka Streaming application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.kafka.consumer._\nimport zio.kafka.producer.{Producer, ProducerSettings}\nimport zio.kafka.serde._\nimport zio.stream.ZStream\n\nobject MainApp extends ZIOAppDefault {\n  val producer: ZStream[Any with Producer, Throwable, Nothing] =\n    ZStream\n      .repeatZIO(Random.nextIntBetween(0, Int.MaxValue))\n      .schedule(Schedule.fixed(2.seconds))\n      .mapZIO { random =>\n        Producer.produce[Any, Long, String](\n          topic = "random",\n          key = random % 4,\n          value = random.toString,\n          keySerializer = Serde.long,\n          valueSerializer = Serde.string\n        )\n      }\n      .drain\n\n  val consumer: ZStream[Any with Consumer, Throwable, Nothing] =\n    Consumer\n      .subscribeAnd(Subscription.topics("random"))\n      .plainStream(Serde.long, Serde.string)\n      .tap(r => Console.printLine(r.value))\n      .map(_.offset)\n      .aggregateAsync(Consumer.offsetBatches)\n      .mapZIO(_.commit)\n      .drain\n\n  def producerLayer =\n    ZLayer.scoped(\n      Producer.make(\n        settings = ProducerSettings(List("localhost:29092"))\n      )\n    )\n\n  def consumerLayer =\n    ZLayer.scoped(\n      Consumer.make(\n        ConsumerSettings(List("localhost:29092")).withGroupId("group")\n      )\n    )\n\n  override def run =\n    producer.merge(consumer)\n      .runDrain\n      .provide(producerLayer, consumerLayer)\n}\n')),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=GECv1ONieLw"},"ZIO WORLD - ZIO Kafka")," by Aleksandar Skrbic (March 2020) \u2014 Aleksandar Skrbic presented ZIO Kafka, a critical library for the modern Scala developer, which hides some of the complexities of Kafka.")))}d.isMDXComponent=!0}}]);