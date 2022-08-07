"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[1384],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=i,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},35291:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const a={id:"zio-aws",title:"ZIO AWS"},o=void 0,s={unversionedId:"resources/ecosystem/officials/zio-aws",id:"resources/ecosystem/officials/zio-aws",title:"ZIO AWS",description:"ZIO AWS is a low-level AWS wrapper for ZIO for all the AWS services using the AWS Java SDK v2.",source:"@site/docs/resources/ecosystem/officials/zio-aws.md",sourceDirName:"resources/ecosystem/officials",slug:"/resources/ecosystem/officials/zio-aws",permalink:"/resources/ecosystem/officials/zio-aws",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/resources/ecosystem/officials/zio-aws.md",tags:[],version:"current",frontMatter:{id:"zio-aws",title:"ZIO AWS"},sidebar:"resources-sidebar",previous:{title:"ZIO Akka Cluster",permalink:"/resources/ecosystem/officials/zio-akka-cluster"},next:{title:"ZIO Cache",permalink:"/resources/ecosystem/officials/zio-cache"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2}],p={toc:c};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-aws"},"ZIO AWS")," is a low-level AWS wrapper for ZIO for all the AWS services using the AWS Java SDK v2."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The goal is to have access to all AWS functionality for cases when only simple, direct access is needed from a ZIO application, or to be used as a building block for higher-level wrappers around specific services."),(0,i.kt)("p",null,"Key features of ZIO AWS:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Common configuration layer"),(0,i.kt)("li",{parentName:"ul"},"ZIO module layer per AWS service"),(0,i.kt)("li",{parentName:"ul"},"Wrapper for all operations on all services"),(0,i.kt)("li",{parentName:"ul"},"HTTP service implementations for functional Scala HTTP libraries, injected through ZIO\u2019s module system"),(0,i.kt)("li",{parentName:"ul"},"ZStream wrapper around paginated operations"),(0,i.kt)("li",{parentName:"ul"},"Service-specific extra configuration"),(0,i.kt)("li",{parentName:"ul"},"More idiomatic Scala request and response types wrapping the Java classes")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"There are tones of artifacts ",(0,i.kt)("a",{parentName:"p",href:"https://zio.github.io/zio-aws/docs/artifacts.html"},"published")," for each AWS service. We can pick whichever services we need."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"The following example uses the ",(0,i.kt)("em",{parentName:"p"},"ElasticBeanstalk")," and ",(0,i.kt)("em",{parentName:"p"},"EC2")," APIs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-aws-core"             % "5.17.102.7",\nlibraryDependencies += "dev.zio" %% "zio-aws-ec2"              % "5.17.102.7",\nlibraryDependencies += "dev.zio" %% "zio-aws-elasticbeanstalk" % "5.17.102.7",\nlibraryDependencies += "dev.zio" %% "zio-aws-netty"            % "5.17.102.7"\n')),(0,i.kt)("p",null,"And here is the example code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.aws.core.AwsError\nimport zio.aws.core.config.AwsConfig\nimport zio.aws.ec2.Ec2\nimport zio.aws.ec2.model._\nimport zio.aws.ec2.model.primitives._\nimport zio.aws.elasticbeanstalk.ElasticBeanstalk\nimport zio.aws.elasticbeanstalk.model._\nimport zio.aws.elasticbeanstalk.model.primitives._\nimport zio.aws.netty.NettyHttpClient\nimport zio._\nimport zio.stream._\n\nobject ZIOAWSExample extends ZIOAppDefault {\n  val program: ZIO[Console & Ec2 & ElasticBeanstalk, AwsError, Unit] =\n    for {\n      appsResult <- ElasticBeanstalk.describeApplications(\n        DescribeApplicationsRequest(applicationNames = Some(List(ApplicationName("my-service"))))\n      )\n      app <- appsResult.getApplications.map(_.headOption)\n      _ <- app match {\n        case Some(appDescription) =>\n          for {\n            applicationName <- appDescription.getApplicationName\n            _ <- Console\n              .printLine(\n                s"Got application description for $applicationName"\n              )\n              .ignore\n\n            envStream = ElasticBeanstalk.describeEnvironments(\n              DescribeEnvironmentsRequest(applicationName =\n                Some(applicationName)\n              )\n            )\n\n            _ <- envStream.run(Sink.foreach { env =>\n              env.getEnvironmentName.flatMap { environmentName =>\n                (for {\n                  environmentId <- env.getEnvironmentId\n                  _ <- Console\n                    .printLine(\n                      s"Getting the EB resources of $environmentName"\n                    )\n                    .ignore\n\n                  resourcesResult <-\n                    ElasticBeanstalk.describeEnvironmentResources(\n                      DescribeEnvironmentResourcesRequest(environmentId =\n                        Some(environmentId)\n                      )\n                    )\n                  resources <- resourcesResult.getEnvironmentResources\n                  _ <- Console\n                    .printLine(\n                      s"Getting the EC2 instances in $environmentName"\n                    )\n                    .ignore\n                  instances <- resources.getInstances\n                  instanceIds <- ZIO.foreach(instances)(_.getId)\n                  _ <- Console\n                    .printLine(\n                      s"Instance IDs are ${instanceIds.mkString(", ")}"\n                    )\n                    .ignore\n\n                  reservationsStream = Ec2.describeInstances(\n                    DescribeInstancesRequest(instanceIds = Some(instanceIds.map(id => zio.aws.ec2.model.primitives.InstanceId(ResourceId.unwrap(id)))))\n                  )\n                  _ <- reservationsStream.run(Sink.foreach { reservation =>\n                    reservation.getInstances\n                      .flatMap { instances =>\n                        ZIO.foreach(instances) { instance =>\n                          for {\n                            id <- instance.getInstanceId\n                            typ <- instance.getInstanceType\n                            launchTime <- instance.getLaunchTime\n                            _ <- Console.printLine(s"  instance $id:").ignore\n                            _ <- Console.printLine(s"    type: $typ").ignore\n                            _ <- Console\n                              .printLine(\n                                s"    launched at: $launchTime"\n                              )\n                              .ignore\n                          } yield ()\n                        }\n                      }\n                  })\n                } yield ()).catchAll { error =>\n                  Console\n                    .printLineError(\n                      s"Failed to get info for $environmentName: $error"\n                    )\n                    .ignore\n                }\n              }\n            })\n          } yield ()\n        case None =>\n          ZIO.unit\n      }\n    } yield ()\n\n  override def run: URIO[ZEnv with ZIOAppArgs, ExitCode] = {\n    val httpClient = NettyHttpClient.default\n    val awsConfig = httpClient >>> AwsConfig.default\n    val aws = awsConfig >>> (Ec2.live ++ ElasticBeanstalk.live)\n\n    program\n      .provideCustomLayer(aws)\n      .either\n      .flatMap {\n        case Left(error) =>\n          Console.printLineError(s"AWS error: $error").ignore.as(ExitCode.failure)\n        case Right(_) =>\n          ZIO.unit.as(ExitCode.success)\n      }\n  }\n}\n')))}m.isMDXComponent=!0}}]);