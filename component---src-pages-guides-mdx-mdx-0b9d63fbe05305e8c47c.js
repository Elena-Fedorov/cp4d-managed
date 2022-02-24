"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[6104],{2917:function(e,t,a){a.r(t),a.d(t,{Title:function(){return s},_frontmatter:function(){return c},default:function(){return m}});var n,r=a(3366),i=(a(7294),a(4983)),o=a(4295),l=["components"],s=function(){return(0,i.kt)("span",null,"First line ",(0,i.kt)("br",null)," Second line")},c={},d=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),u={Title:s,_frontmatter:c},p=o.Z;function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)(p,Object.assign({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{mdxType:"PageDescription"},(0,i.kt)("p",null,"MDX allows for certain things beyond what markdown is capable of. Content here\nwill discuss using those features to augment or modify the default content\nlayout."),(0,i.kt)("p",null,"It’s extremly important that for any rich text, or images represented through\nmark down, that they are left aligned. This is true even if they are within a\ncomponent. Otherwise it will be processed as a regular string.")),(0,i.kt)("h2",null,"FAQs"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"How is my data processed and protected?",(0,i.kt)("br",null),"\nIBM takes clients data security and protection very seriously, for additional information please see Chapter 11 Security and Compliance")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"What happens when the service encounters problems?\nThrough the managed service monitoring software our IBM operations team is automatically alerted and will begin to take action and troubleshoot the service. In addition to this, on request IBM can work with Clients to setup an email distribution list for notifications of a reduced functionality or loss of service. These types of notifications would be distributed to Clients without undue delay upon confirmation of such an issue that is known or reasonably suspected by IBM to affect the Client. IBM will provide Client with reasonably requested information about such issue and the status of any IBM remediation and restoration activities.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On which Cloud Service Provider is the service or application hosted? For example like AWS, Azure, GCP, etc.\nThis offering is only available on IBM Cloud.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"How are the environments accessed via the network?\nBy default, the servers are accessible through a Client site to site VPN on the server’s public IP addresses. These public IP addresses are utilized in order avoid conflicts with Clients internal IP private subnets.\nPublic IP’s are protected by the VPN and not accessible on the public internet.\nDNS resolution will be provided by default, which will be sufficient for a majority of customers. Alternatively, Client may setup access through their own internal DNS service.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"How can I provide ideas for improving offerings / products?",(0,i.kt)("br",null),"\nPlease post your idea/suggestion to our IBM Analytics Ideas portal: ",(0,i.kt)("a",{parentName:"p",href:"https://ibmanalytics.ideas.aha.io/"},"https://ibmanalytics.ideas.aha.io/"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Where can I find additional information on IBM Data Security of the Cloud Service and privacy principals.",(0,i.kt)("br",null),"\nRefer to the DSP ",(0,i.kt)("a",{parentName:"p",href:"https://www-03.ibm.com/software/sla/sladb.nsf/sla/dsp?OpenDocument"},"https://www-03.ibm.com/software/sla/sladb.nsf/sla/dsp?OpenDocument"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"How do I open a support ticket?\nOnce the welcome letter is received Clients are entitled to log support cases, the designated Cloud Service Coordinator (CSC) will walk Clients through the registration and setup process.\nFor reference tickets for the any of the ‘Analytics Cloud Service’ products the link is available here -> ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/mysupport/s/?language=en_US"},"https://www.ibm.com/mysupport/s/?language=en_US")," additional details on Support please see section Chapter 10 - How to get Support"))),(0,i.kt)("h2",null,"Frontmatter"),(0,i.kt)("p",null,"You can declare frontmatter in your ",(0,i.kt)("inlineCode",{parentName:"p"},".mdx")," files to provide specific metadata\nfor the theme to use."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title"),": Main page title: search results and SEO"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description"),": SEO and search results"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"date"),": Enter a date that the page was last modified to be displayed at the\nbottom left corner of the page. Refer to the\n",(0,i.kt)("a",{parentName:"li",href:"https://www-03preprod.ibm.com/support/knowledgecenter/ibm_style/dates-and-times.html"},"IBM Style guide"),"\nfor the correct syntax."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keywords"),": just SEO (optional)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hiddenFromSearch"),": if true, page will be excluded from search")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"---\ntitle: Markdown\ndescription: Usage instructions for the Markdown component\nkeywords: 'ibm,carbon,gatsby,mdx,markdown'\ndate: 27 January 2021\nhiddenFromSearch: true\n---\n")),(0,i.kt)("h2",null,"Smart quotes"),(0,i.kt)("p",null,"The theme has a remark for processing straight quotes, into ‘smart’ quotes (”).\nHowever, this plugin isn’t able to process text used in custom MDX components.\nWhen using quotes in custom components, content authors should manually use\n",(0,i.kt)("a",{parentName:"p",href:"https://www.figma.com/design-systems/"},"“smart quotes”")," to adhere to the IBM\nDesign Language content guidelines."),(0,i.kt)("h2",null,"Custom title"),(0,i.kt)("p",null,"You can export a ",(0,i.kt)("inlineCode",{parentName:"p"},"Title")," component in order to render a unique title for a\nsingle page. This is particularly useful for including line breaks at a specific\nlocation."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," You still need to provide a regular string title to the frontmatter\nfor search, navigation, and the HTML header title to work."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mdx"},"---\ntitle: MDX\ndescription: custom title page\n---\n\nexport const Title = () => (\n  <span>\n    First line <br /> Second line\n  </span>\n);\n\n;\n")))}m.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(7294),r=a(8650),i=a.n(r),o=a(5444),l=a(5426),s=a(3321),c=a(5900),d=a.n(c),u=function(e){var t,a=e.title,r=e.theme,i=e.tabs,o=void 0===i?[]:i;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=o.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},p=function(e){var t=e.relativePagePath,a=e.repository,r=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||r,l=i.baseUrl,s=i.subDirectory,c=l+"/edit/"+i.branch+s+"/src/pages"+t;return l?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},m=a(4275),h=a(1721),f=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,l=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),s=a===l,c=new RegExp(l+"/?(#.*)?$"),u=r.replace(c,a);return n.createElement("li",{key:e,className:d()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+u},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),g=f,k=a(2881),b=a(6958),w=a(36),y=function(e){var t=e.date,a=new Date(t);return t?n.createElement(w.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(w.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},v=function(e){var t=e.pageContext,a=e.children,r=e.location,c=e.Title,d=t.frontmatter,h=void 0===d?{}:d,f=t.relativePagePath,w=t.titleType,v=h.tabs,N=h.title,C=h.theme,E=h.description,x=h.keywords,P=h.date,S=(0,b.Z)().interiorTheme,T=(0,o.useStaticQuery)("2456312558").site.pathPrefix,I=T?r.pathname.replace(T,""):r.pathname,M=v?I.split("/").filter(Boolean).slice(-1)[0]||i()(v[0],{lower:!0}):"",D=C||S;return n.createElement(s.Z,{tabs:v,homepage:!1,theme:D,pageTitle:N,pageDescription:E,pageKeywords:x,titleType:w},n.createElement(u,{title:c?n.createElement(c,null):N,label:"label",tabs:v,theme:D}),v&&n.createElement(g,{title:N,slug:I,tabs:v,currentTab:M}),n.createElement(k.Z,{padded:!0},a,n.createElement(p,{relativePagePath:f}),n.createElement(y,{date:P})),n.createElement(m.Z,{pageContext:t,location:r,slug:I,tabs:v,currentTab:M}),n.createElement(l.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-mdx-mdx-0b9d63fbe05305e8c47c.js.map