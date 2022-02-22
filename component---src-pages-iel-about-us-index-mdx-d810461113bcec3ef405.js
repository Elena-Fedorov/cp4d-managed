"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[4686],{7519:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return y}});var r=a(3366),n=(a(7294),a(4983)),o=a(4295),s=["components"],i={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)}},c=l("PageDescription"),d=l("AnchorLinks"),m=l("AnchorLink"),p=l("Accordion"),u=l("AccordionItem"),g=l("Row"),h=l("SquareCard"),b=l("Tools"),f={_frontmatter:i},x=o.Z;function y(e){var t=e.components,a=(0,r.Z)(e,s);return(0,n.kt)(x,Object.assign({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(c,{mdxType:"PageDescription"},(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/products/expertlabs/managed-services"},"IBM Expert Labs - Managed Services")," brings the hands-on skills and deep expertise of IBM Essential Management to your business, when and where you need it.")),(0,n.kt)(d,{mdxType:"AnchorLinks"},(0,n.kt)(m,{mdxType:"AnchorLink"},"What we offer?"),(0,n.kt)(m,{mdxType:"AnchorLink"},"Videos")),(0,n.kt)("p",null,"IBM® Essential Management is a managed services offering from IBM Expert Labs that provides access to product experts who manage your IBM software and applications. Our industry-leading team specializes in timely, high quality delivery to ensure your enterprise remains on track for success. When our experts manage your software, you get instant access to top talent and outcomes without the need to worry about execution."),(0,n.kt)(p,{mdxType:"Accordion"},(0,n.kt)(u,{title:"Access technological expertiser",mdxType:"AccordionItem"},"IBM Essential Management provides a direct connection to specialists with deep knowledge of IBM software and applications."),(0,n.kt)(u,{title:"Leverage industry best practices",mdxType:"AccordionItem"},"We bring IBM Expert Labs’ best practices into the day-to-day management of your environment, allowing you to be confident in our proven experience."),(0,n.kt)(u,{title:"SPSS Users",mdxType:"AccordionItem"},"If you need help with the license for an SPSS product visit SPSS License Support.")),(0,n.kt)("h2",null,"What we offer?"),(0,n.kt)(g,{className:"square-card-group",mdxType:"Row"},(0,n.kt)(h,{title:"The IBM Expert Labs.",href:"https://www.ibm.com/products/expertlabs",mdxType:"SquareCard"},(0,n.kt)(b,{"aria-label":"Tools",className:"my-custom-class",mdxType:"Tools"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},' <SquareCard\n   title="Managed Services"\n   href="https://www.ibm.com/products/expertlabs/managed-services"\n   bodyText="Contact an expert"\n   />\n'))))}y.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return w}});var r=a(7294),n=a(8650),o=a.n(n),s=a(5444),i=a(5426),l=a(3321),c=a(5900),d=a.n(c),m=function(e){var t,a=e.title,n=e.theme,o=e.tabs,s=void 0===o?[]:o;return r.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=s.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===n,t))},r.createElement("div",{className:"bx--grid"},r.createElement("div",{className:"bx--row"},r.createElement("div",{className:"bx--col-lg-12"},r.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},p=function(e){var t=e.relativePagePath,a=e.repository,n=(0,s.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,l=o.subDirectory,c=i+"/edit/"+o.branch+l+"/src/pages"+t;return i?r.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},r.createElement("div",{className:"bx--col"},r.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=a(4275),g=a(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),l=a===i,c=new RegExp(i+"/?(#.*)?$"),m=n.replace(c,a);return r.createElement("li",{key:e,className:d()((t={},t["PageTabs-module--selected-item--aBB0K"]=l,t),"PageTabs-module--list-item--024o6")},r.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return r.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},r.createElement("div",{className:"bx--grid"},r.createElement("div",{className:"bx--row"},r.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},r.createElement("nav",{"aria-label":t},r.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(r.Component),b=h,f=a(2881),x=a(6958),y=a(36),v=function(e){var t=e.date,a=new Date(t);return t?r.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},r.createElement(y.sg,null,r.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(e){var t=e.pageContext,a=e.children,n=e.location,c=e.Title,d=t.frontmatter,g=void 0===d?{}:d,h=t.relativePagePath,y=t.titleType,w=g.tabs,E=g.title,k=g.theme,T=g.description,P=g.keywords,N=g.date,S=(0,x.Z)().interiorTheme,M=(0,s.useStaticQuery)("2456312558").site.pathPrefix,L=M?n.pathname.replace(M,""):n.pathname,B=w?L.split("/").filter(Boolean).slice(-1)[0]||o()(w[0],{lower:!0}):"",I=k||S;return r.createElement(l.Z,{tabs:w,homepage:!1,theme:I,pageTitle:E,pageDescription:T,pageKeywords:P,titleType:y},r.createElement(m,{title:c?r.createElement(c,null):E,label:"label",tabs:w,theme:I}),w&&r.createElement(b,{title:E,slug:L,tabs:w,currentTab:B}),r.createElement(f.Z,{padded:!0},a,r.createElement(p,{relativePagePath:h}),r.createElement(v,{date:N})),r.createElement(u.Z,{pageContext:t,location:n,slug:L,tabs:w,currentTab:B}),r.createElement(i.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-iel-about-us-index-mdx-d810461113bcec3ef405.js.map