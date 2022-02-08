"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[2194],{4636:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return u}});var n=a(3366),r=(a(7294),a(4983)),l=a(4295),i=["components"],o={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)}},m=s("PageDescription"),d=s("MediumPosts"),c={_frontmatter:o},p=l.Z;function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)(p,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(m,{mdxType:"PageDescription"},(0,r.kt)("p",null,"Using a Gatsby plugin, this component automatically builds three ",(0,r.kt)("inlineCode",{parentName:"p"},"ArticleCards"),"\npopulated with the most recent Medium posts at build time.")),(0,r.kt)("h2",null,"Setup"),(0,r.kt)("p",null,"To update the source account for this component, pass in a ",(0,r.kt)("inlineCode",{parentName:"p"},"mediumAccount")," to\nyour theme options in ",(0,r.kt)("inlineCode",{parentName:"p"},"gatsby-config.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"plugins: [\n  {\n    resolve: 'gatsby-theme-carbon',\n    options: {\n      mediumAccount: 'carbondesign',\n    },\n  },\n];\n")),(0,r.kt)("h2",null,"Example"),(0,r.kt)(d,{color:"dark",postLimit:3,mdxType:"MediumPosts"}),(0,r.kt)("h2",null,"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/MediumPosts/MediumPosts.js src=https://github.com/ibm-iacs/cp4d-managed/tree/main/packages/gatsby-theme-carbon/src/components/MediumPosts",path:"components/MediumPosts/MediumPosts.js",src:"https://github.com/ibm-iacs/cp4d-managed/tree/main/packages/gatsby-theme-carbon/src/components/MediumPosts"},'<MediumPosts color="dark" postLimit={3} />\n')),(0,r.kt)("h3",null,"Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"propType"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"color"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"light")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the card for the correct color theme, default is ",(0,r.kt)("inlineCode",{parentName:"td"},"light"),", options are ",(0,r.kt)("inlineCode",{parentName:"td"},"light")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"dark"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"postLimit"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the number of posts pulled from Medium, default is ",(0,r.kt)("inlineCode",{parentName:"td"},"3"),", maximum is ",(0,r.kt)("inlineCode",{parentName:"td"},"10"),".")))))}u.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return P}});var n=a(7294),r=a(8650),l=a.n(r),i=a(5444),o=a(5426),s=a(3321),m=a(5900),d=a.n(m),c=function(e){var t,a=e.title,r=e.theme,l=e.tabs,i=void 0===l?[]:l;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},p=function(e){var t=e.relativePagePath,a=e.repository,r=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||r,o=l.baseUrl,s=l.subDirectory,m=o+"/edit/"+l.branch+s+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},u=a(4275),g=a(1721),k=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,o=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),s=a===o,m=new RegExp(o+"/?(#.*)?$"),c=r.replace(m,a);return n.createElement("li",{key:e,className:d()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+c},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),b=k,h=a(2881),N=a(6958),f=a(36),E=function(e){var t=e.date,a=new Date(t);return t?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},P=function(e){var t=e.pageContext,a=e.children,r=e.location,m=e.Title,d=t.frontmatter,g=void 0===d?{}:d,k=t.relativePagePath,f=t.titleType,P=g.tabs,v=g.title,y=g.theme,x=g.description,C=g.keywords,w=g.date,T=(0,N.Z)().interiorTheme,M=(0,i.useStaticQuery)("2456312558").site.pathPrefix,D=M?r.pathname.replace(M,""):r.pathname,L=P?D.split("/").filter(Boolean).slice(-1)[0]||l()(P[0],{lower:!0}):"",Z=y||T;return n.createElement(s.Z,{tabs:P,homepage:!1,theme:Z,pageTitle:v,pageDescription:x,pageKeywords:C,titleType:f},n.createElement(c,{title:m?n.createElement(m,null):v,label:"label",tabs:P,theme:Z}),P&&n.createElement(b,{title:v,slug:D,tabs:P,currentTab:L}),n.createElement(h.Z,{padded:!0},a,n.createElement(p,{relativePagePath:k}),n.createElement(E,{date:w})),n.createElement(u.Z,{pageContext:t,location:r,slug:D,tabs:P,currentTab:L}),n.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-components-medium-posts-mdx-1653b5fc4efb39cc5b94.js.map