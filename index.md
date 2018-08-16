# Raymond Feng

![rfeng](rfeng.png)

Github: [raymondfeng](https://github.com/raymondfeng) LinkedIn: [raymondfeng](https://www.linkedin.com/in/raymondfeng/) Twitter: [cyberfeng](https://twitter.com/cyberfeng)

## Current projects

- [LoopBack](https://loopback.io) - A highly extensible Node.js and TypeScript framework
  for building APIs and microservices. Winner of API World's 2019 Best in API Middleware.
  Over 1.5 million npm downloads in 2020.

  - [loopback-next](https://github.com/strongloop/loopback-next/graphs/contributors) (3.2k github stars)
  - [loopback](https://github.com/strongloop/loopback/graphs/contributors) (13.2k github stars)
  - [loopack-datasource-juggler](https://github.com/strongloop/loopback-datasource-juggler/graphs/contributors)
  - [much more...](https://github.com/raymondfeng)
  - [blogs by me](https://strongloop.com/authors/Raymond_Feng/)

- Monetization microservices for API Connect
- SaaS on IBM Cloud for API Connect

## About me

### My missions

- _Craft platforms and applications to unleash the power of data, services, and infrastructure by APIs_
- _Lead enterprise development with startup spirit for innovations and open source methodology for collaborations_
- _Evangelize `E = mc2` to build APIs and microservices for the cloud era_

  ```js
  {
    E: 'Expose open APIs with confidence',
    m: 'model business domain objects and operations',
    c: [
      'connect to data, services, and infrastructure',
      'compose business logic for micro-services and APIs',
    ],
  }
  ```

### My qualifications

- Hands-on architect
  - Practice and promote architectural simplicity and flexibility driven by user experience and big picture, lead by spiking, coding, reviewing, refactoring, mentoring, and evangelizing
  - Innovate and iterate in fast pace with startup/entrepreneur mindset backed by deep enterprise experience, knowledge, and vision
- Go-to troubleshooter
  - Diagnose and solve complex problems with great insights in many systems and components
- Self-motivated learner
  - Learn and master new things and new ways of doing things eagerly, effectively, and quickly
- Open-minded collaborator
  - Foster strong collaboration and open communication to enable distributed teams
  - Optimize the project management with agile methodology and tools
- Passionate community builder
  - Create and grow multiple open source projects and communities
  - Engage in users to address their needs and develop more contributors for the project

## 09/2015 - Present IBM Corp., Foster City, CA, USA

**STSM, Architect, API Connect**

> _Build API lifecycle solutions at even larger scale_

- Lead the architecture and development of LoopBack

  - Build LoopBack 4 (https://github.com/strongloop/loopback-next) in TypeScript with great extensibility and composability
    - Extensible and composable core foundation for large-scale Node.js frameworks and applications
    - Inversion of Control/Dependency Injection, Extension point/Extension, Middleware/Interceptor
    - Cloud native extensions for health/metrics/logging
    - Extensions for GraphQL, TypeORM, gRPC, WebSocket, Pooling, and Cron
    - CLI commands for app/extension, OpenAPI, service, interceptor, observer, copyright, update
    - Database and service connectors
  - Maintain LoopBack 3.x
  - Enable Cloud native and polyglot microservices
  - Integrate with IBM products (API Connect and App Connect)
  - Contribute to IBM's Node.js strategy, development experience, and reference architecture
  - Contribute to IBM's POV of cloud native microservices
  - Perform Node.js architecture review, performance troubleshooting and tuning for customers

- Lead the architecture and development of cloud-native monetization microservices for IBM API Connect

  - Expose REST APIs
  - Integrate with Stripe and Kill Bill via REST APIs
  - Allow Pluggable billing providers with multi-tenancy
  - Enable cloud native health check, metrics, and logging

- Take the new ownership of SaaS provisioning of API Connect on IBM Cloud
  - Kubernetes with Kustomize and Operators
  - GitOps automation with ArgoCD
  - Terraform for cloud resource/service provisioning and management
  - Integration with IBM Cloud infrastructure for security, database, monitoring,
    billing and more

## 03/2013 - 09/2015 StrongLoop, Inc., San Mateo, CA, USA (Acquired by IBM in 09/2015)

**Co-Founder, Architect**

> _Ride on Node.js and Open APIs to accelerate digital transformation of business_

- Creator of LoopBack - a popular open source Node.js API platform (more than 11k GitHub stars)

  - Connect to existing data and services
  - Model driven design with unified data access DSL
  - Expose and secure open APIs
  - https://github.com/strongloop/loopback
  - https://github.com/strongloop/loopback-datasource-juggler
  - https://github.com/strongloop-archive/strong-gateway

- Key contributions
  - Core architecture and design
  - Models & JSON based language for modeling, query, and mutation
  - Datasources/Connectors
    - Oracle, MySQL, PostgreSQL, MongoDB, SQL Server, …
    - REST, SOAP, gRPC
  - Access control
  - Middleware pipeline
  - Integration components
    - Push notification, Cloud storage, Passport security, oAuth2
  - CLI, StrongLoop Arc, and API Explorer
  - Blogs - https://strongloop.com/authors/Raymond_Feng/

## 04/2010 – 02/2013 Shutterfly, Inc. Redwood City, CA, USA

**Staff Web Engineer, Platform Engineering**

> _Apply SOA and API skills and visions to real-world web applications_ > _Crafting microservices for web applications_ > _Building API servers for mobile and integration_ > _Big operational data collection and search_

## Key projects

- Built the service externalization platform to support Shutterfly’s next generation open web APIs for both internal and external clients. Drove the investigation and implementation of oAuth 2.0 as the strategic authentication and authorization infrastructure. Added MongoDB based persistent store to handle oAuth 2.0 tokens. Developed a reverse HTTP proxy to route and dispatch API requests to the backend services across different platforms such as Java, PHP and .NET.

- Renovated a set of core services for the Shutterfly business domain using the Tuscany framework and service standards to form the foundation of Enterprise services. This work is important as we need to advance the total mass of functionality which has been brought into the SSP both to establish greater credibility for the platform as well as to help us reach a tipping point where SSP development is the assumed norm; and establish the patterns of design and execution on which future service development will be modeled.

  - Rolled out Shutterfly’s brand new Address Book, Address Verification, and Tax Calculation services before 4th quarter of 2011. The Address Book service is rebuilt on REST & JSONRPC with the MongoDB store. Developed a migration tool and process to migrate millions of user contacts from Oracle into MongoDB without disruptions. The Address Verification and Tax Calculation services wrap 3rd party software stacks and make them highly performed and scalable. As a result gained valuable exposure to aspects of Shutterfly’s production environment and Release and IOPS processes. Helped to flesh out a model of how we want to execute on future projects migrating legacy functionality to the shared service platform (SSP).

  - Developed the Archive Service/API to support content/image uploads into Shutterfly using HTML 5 or mobile.

  - Drove the investigation into how we can remote a 3rd party ecommerce platform that consists of a set of Spring services tied to JPA persistence. Developed a reverse engineering tool using Java compiler APIs to generate DTOs from JPA entities as well as Tuscany service interfaces and implementation that delegates to the Spring services.

- Shutterfly demo day 2011: Hacked a demo application in two days to synchronize pictures between Dropbox and Shutterfly with a WebScoket based dashboard. Also implemented a Facebook application prototype to allow Shutterfly members to request address update from their friends on Facebook. Both projects made into the top 10 finalists to present the executive staffs.

- Created a DSL language called Universal Data Definition Language (UDDL) to facilitate the domain driven design as the key enabler to build remotable services. Implemented the DSL parser and code/configuration generation tools using Eclipse Xtext/Xpand framework. UDDL became a core part of the Shared Service Platform (SSP), and provided great benefits in developer productivity, consistency, governance and manageability. For example, 15 lines of DSL can produce 1500 lines of high quality Java/PHP/C# code that support features such as JAXB DTOs, JPA, MongoDB Entities and UML diagrams.

- Brought deep expertise with Tuscany and SCA to the Shutterfly platform engineering team, along with broader experience in SOA/REST and related technologies. Quickly established himself as an in- house expert in these areas, and demonstrated his ability to conduct effective investigations to inform our team's problem solving, decision-making, and planning. Enriched the Tuscany framework based Shutterfly’s requirements and set it as the core foundation to support SSP. Mavenized the Shutterfly Java code base with much better modularity and enabled the continuous integration with Jenkins.

- Continued to contribute to open source projects. Co-developed a Tuscany binding to support REST based JAX-RS. Enabled Tuscany integration with Spring Web and MVC. Developed a Tuscany composite diagram Maven plugin to visualize the deployed services. Contributed Google Protocol Buffer and Apache Thrift providers for JAX-RS to Apache Wink projects. Submitted multiple patches to Apache Amber project to support the latest oAuth 2.0 specification.

## 05/2002 – 04/2010 IBM Corp. Foster City, CA, USA

> _Make SOA practical to build composite applications: Decompose, Componentize, and Assemble_

## Senior Software Engineer

### 05/2006 – 05/2010 Apache Tuscany PMC member and committer

- A key developer of Apache Tuscany project with leadership in many of the areas, including:

  - The composable and extensible kernel that comes with modularity, extensibility, and pluggability
  - Java models for SCA and supporting artifacts, including assembly, policy, interface, and WSDL/XSD
  - High-performed StAX loading/saving of SCA configuration between XML and Java
  - Core runtime for metadata driven activations and invocations
  - Distributed SCA domain that consists of multiple nodes that share the endpoints and policy definitions using stacks such as Apache Tomcat Tribes or Hadoop Zookeeper
  - Databinding framework that facilitates data transformation between JAXB, SDO, AXIOM, DOM, SAX, StAX, XMLBeans, JSON and XML String to give the application components freedom to choose their own databindings
  - Java annotation processing and dependency Injection
  - Java/JAXWS/WSDL interop
  - Component Implementations such as Java, OSGi, XQuery, Spring and BPEL
  - Protocol Bindings such as Web Service, RMI, JSONRPC, ATOM, EJB and CORBA using stacks such as Axis2, Tomcat, Jetty.
  - Web Integration for Tuscany SCA including Google App Engine
  - Maven plugins that automate WAR generation, OSGi-aware build and JUNIT testing, Eclipse PDE o Maven Build

- Led the efforts to enable Tuscany runtime with OSGi
- Led the design and implementation of OSGi remote services with SCA for the emerging OSGi enterprise specs including OSGi remote services, SCA configuration type and remote service admin.
- The main contributor to Tuscany architecture Guide, extension Guide and databinding Guide
- Provided technical leadership in Tuscany to deliver required features for WebSphere SCA Feature Pack through iterations. Worked with management to identify, plan, size, and prioritize the work items. Enabled the team by giving architectural thoughts and removing technical barriers. Worked with SCA FE architect and development team to understand requirements and reach architectural agreements based on scenarios. Delivered features in various areas including the Core, Databinding and Web Service binding. This contributed to the successful GA of SCA Feature Pack GA in December.

- Open source community building:

  - Followed Apache’s guidance to drive the Tuscany project through incubation to become a top level project.
  - Advocated Tuscany in the Google Summer of Code (GSoC) program
  - Mentored contributors including the GSoC student to become committers
  - Hosted a Google group for the Chinese-speaking Tuscany/SCA Community o Interacted with other open source projects

- Contribution to standards

  - Member of OASIS OpenCSA Assembly/Java/Policy subcommittees
  - Member of OSGi Alliance EEG

- Evangelist for Tuscany SCA
  - Articles (JDJ, InfoQ.com)
  - Conferences (JavaOne, ApacheCon, OASIS Symposium, SOAWorld etc, ACM SIGMOD)
  - Book/Blogs - Co-author of Tuscany SCA in Action published by Manning

### 01/2006 – 05/2006 Team Lead, WebSphere Process Server SCA development

- Successfully led the team to deliver the features and bug fixes for the 6.0.1.1 release in time
- Migrate SCA on top of WebSphere 6.1, especially the integration with OSGi which set a guideline for other WPS components
- Provided planning/scoping/sizing for SCA to support the release management for WPS 6.0.1.1 and SOACore 6.1 releases
- Fixed a list of complex SVT defects for WPS 6.0.1 to ensure the on-schedule release. Fixed around 40 defects in SCA for WPS 6.0.1.1 to achieve the performance and stability goals. Resolved several critical PMRs to support the PoCs and meet customer requirements
- Performed a series of SCA skill transfer sessions for the development team and performed SCA deep dive session to train the new members for WPS/SCA and L3 support teams as requested by the WPS management

## Advisory Software Engineer

### 01/2005 – 12/2005 Team Lead, WebSphere Process Server SCA development

- Successfully delivered the commitments in time with high quality following development processes and guidelines across Beta, GM and GA release of WebSphere Process Server (WPS) 6.0.0. My contribution included designing/implementing key features and fixing defects through the cycle highlighted below.
- Designed and implemented a pluggable resource discovery/loading framework to handle SCDL, WSDL and XSD files. Designed and implemented the feature to copy the WSDL/XSD files as a closure to support the J2EE Web Service deployment.
- Enhanced the application install/uninstall/update tasks to support fine-grained update
- Implemented the cross-application SDO copy to optimize co-located cross-module invocation
- Led the efforts to improve exception handling as well as logging/tracing/FFDC for serviceability
- Participated in the RR and PIP test for Business Process Component
- Resolved more than 500 defects. More than 200 are fixed by code changes. Created release notes and delivered i-Fixes.
- Took the assignment as the team lead for SCA and successfully led the SCA team to deliver the features/fixes for WPS 6.0.1 release.
  - Worked with the release management for project sizing and prioritization. Updated status to the release management to make sure the project on track. Provided technical assessment to release management for defect approval
  - Worked with the team to deliver features and resolve defects in a timely manner. Hosted team meetings in regular base to sync up status and track issues. Guided team members to debug complicated scenarios to identify problems and create solutions
  - Worked with performance team to deliver key improvements for SCA in 6.0.1 o Improved the web service import/export to cover more WSDL variants
- Represented the SCA team in daily build calls to effectively communicate the status of critical defects. Worked with the FVT team to review/approve test cases. Worked with SVT team to resolve complex defects under stress testing and multi threading
- Contributed to open source Tuscany project with the Web Service feature to get it ready for Apache incubation.
- Helped the ESB team to create the consistent design for ESB mediations based on SCA.

### 01/2004 – 12/2004 WebSphere Process Server SCA development

- Successfully delivered the commitments in time with high quality following development processes and guidelines from M2 through M5 (Tech Preview).
- Contributed to the system design of SCA to support the evolving Programming Model, especially in the area of SCDL metadata-driven runtime, aspect-oriented qualifier framework, and SCA to J2EE mapping.
- Designed and implemented the feature of stub-less EJB invocation using CORBA naming, CORBA DII and programmatic Java-to-IDL mapping. Implemented the base abstract service EJB for SCA export binding. Implemented the SCA deployment builder to generate EJB home/remote interfaces, bean implementation and deployment descriptor for SCA import/export.
- Implemented the Metadata APIs for SCA runtime. Implemented WebSphere install-tasks to automate the configuration of resources for SCA artifacts. Contributed to the design of middleware- independent implicit context propagation and implemented the feature over IIOP using J2EE Activity Service
- Enhanced the Java implementation handler to support asynchronous interactions
- Designed and implemented a light-weight Transaction & Security qualifier handler Prototype using direct APIs
- Improved SCA serviceability by designing and implementing a logging/tracing framework and object dumping utility to reduce problem determination time.
- Worked with the performance team to measure/resolve SCA performance issues, including EJB stub caching and message dispatching path reduction.
- Ported and improved CMVC/CVS sync-up scripts to facilitate the development process to take advantage of the combined CVS and CMVC solution for version control and defect tracking.
- Provided technical expertise in the several areas including SCA container/qualifier, J2EE and WebSphere for inside and outside the team. Took ownership to test drive platform integration of SCA with the WebSphere and Rational Application Developer (RAD) drivers and provided guidance and/or workarounds to the team. Supported other IBM teams to adopt the SCA technology. Supported the rest of the WBI team to integrate their components on top of SCA, including technical discussions and trouble shootings.
- Backed up the team lead to coordinate the team to execute milestone plans and represent the team in build calls or defect triage meetings. As focal point for the team on defect resolving, conducted the first hand analysis and routed the defect to team members and followed up to get problem solved in a responsive manner. Led the PIP efforts by defining, developing and testing the scenario. Worked closely with the bring-up team for each milestone to quickly resolve the SCA integration issues. Worked the FVT team to define and review test plans/specifications in line with SCA features.

### 01/2003 – 12/2003 WebSphere Process Server SCA development

- Successfully delivered the assigned runtime features for M0 & M1 on time while contributed to the programming model & system design.
- Delivered three Conceptual Design Documents (CDD) for Adapter Infrastructure, Mediated Destination Component, and Component Invocation Framework CDD (consolidated into SCA design). Implemented three prototypes: Enhanced WBI prototype with JCA and RMI/IIOP, Mediated Destination Component Prototype and Component Invocation Framework Prototype.

### 05/2002 – 12/2002 J2EE-based business integration platform using WebSphere

- Evaluated J2EE and WebSphere Application server as the stack for building business integration platform

  - Thread Management & Asynchronous Invocation
  - Session Management & Context Propagation
  - WSIF provider for CrossWorlds connectors to support both synchronous and asynchronous service invocation from Dragonfly workflow
  - EJB-based flow dispatcher to invoke/trigger Microflow and Macroflow o EJB Entity Bean CMP-based correlation service
  - Home-grown publish/subscribe
  - Compensation support with isolation check

- Investigated various technologies such as J2EE, Web Services, WSIF, Workflow, JCA, AsynchBeans and WorkArea to deliver features for WebSphere Business Integration Server via CrossWorlds acquisition.

## 12/1996 – 05/2002 Soft Tech Development, Inc. (San Jose, CA, USA)

### Principal Engineer/Architect (8/1998-05/2002)

- Architect/Project Leader of e-OpenBridge, a middleware suite that provides Java APIs to access legacy data and applications on IBM S/390 mainframes using state-of-the-art technologies such as Java, XML, EJB and CORBA.

### Senior Software Engineer & Training Instructor (1/1998-7/1998)

- Provided architecture and design consulting for People’s Bank of China’s national consumer credit reporting system.
- Delivered more than fifteen IBM courses on S/390, CICS, MQSeries, RS/6000 AIX and RS/6000 SP, Java, TCP/IP to our banking customers

### Software Engineer (12/1996-12/1997)

- Project leader of BEST Internet Banking System. Implemented Web-based online banking system using IBM CICS on OS/2, SUN Solaris and S/390.

## 03/1992 - 07/1996 Part-time Freelance Developer, Beijing, China

- Developed the high performance trading engine in C and SQL on HP-UX for China Zhenzhou Commodity Exchange, the first futures exchange open in China.
- Developed the trading engine and gateway for Automatic Commodity Futures Exchange System for China Commodity Futures Exchange.
- Led the development of General Futures Exchange System for Changchun Futures Exchange.

## Education

### 1993-1996 Master of Computer Engineering, Institute of Software, Chinese Academy of Sciences, Beijing, China

- 1996: Honor graduate of Chinese Academy of Sciences

### 1988-1993 Bachelor of Computer Software, University of Science and Technology of China, Hefei, Anhui, China

- 1993: Honor graduate of Anhui Province
- 1988: First place (Natural Science Oriented Area) in Anhui Province, National Higher Education Entrance Examination
