"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[9314],{4837:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return h}});var n=a(3366),r=(a(7294),a(4983)),l=a(4295),o=a(2148),i=a(2499),m=["components"],d={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)}},p=s("PageDescription"),c=s("Title"),u=s("Video"),g={_frontmatter:d},k=l.Z;function h(e){var t=e.components,a=(0,n.Z)(e,m);return(0,r.kt)(k,Object.assign({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(p,{mdxType:"PageDescription"},(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<Video>")," component can render a Vimeo player or a html video player.")),(0,r.kt)("h2",null,"Example"),(0,r.kt)(c,{mdxType:"Title"},"Vimeo"),(0,r.kt)(u,{title:"Carbon homepage video",vimeoId:"359578263",mdxType:"Video"}),(0,r.kt)(c,{mdxType:"Title"},"Video"),(0,r.kt)(u,{src:"/videos/hero-video.mp4",poster:"/images/poster.png",mdxType:"Video"},(0,r.kt)("track",{kind:"captions",default:!0,src:"/videos/vtt/hero-video.vtt",srcLang:"en"})),(0,r.kt)(c,{mdxType:"Title"},"Video in MDX"),(0,r.kt)(u,{src:o.Z,poster:i.Z,mdxType:"Video"}),(0,r.kt)("h2",null,"Code"),(0,r.kt)(c,{mdxType:"Title"},"Vimeo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/Video/Video.js src=https://github.com/ibm-iacs/cp4d-managed/tree/main/packages/gatsby-theme-carbon/src/components/Video",path:"components/Video/Video.js",src:"https://github.com/ibm-iacs/cp4d-managed/tree/main/packages/gatsby-theme-carbon/src/components/Video"},'<Video title="Carbon homepage video" vimeoId="322021187" />\n')),(0,r.kt)(c,{mdxType:"Title"},"Video"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/Video/Video.js src=https://github.com/ibm-iacs/cp4d-managed/tree/main/packages/gatsby-theme-carbon/src/components/Video",path:"components/Video/Video.js",src:"https://github.com/ibm-iacs/cp4d-managed/tree/main/packages/gatsby-theme-carbon/src/components/Video"},'<Video src="/videos/hero-video.mp4" poster="/images/poster.png">\n  <track\n    kind="captions"\n    default\n    src="/videos/vtt/hero-video.vtt"\n    srcLang="en"\n  />\n</Video>\n')),(0,r.kt)(c,{mdxType:"Title"},"Video in MDX"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/Video.mdx src=https://github.com/ibm-iacs/cp4d-managed/blob/main//src/pages/components/Video/index.mdx",path:"components/Video.mdx",src:"https://github.com/ibm-iacs/cp4d-managed/blob/main//src/pages/components/Video/index.mdx"},"import localVideo from './local-video.mp4';\nimport localPoster from './local-poster.jpg';\n\n<Video src={localVideo} poster={localPoster} />\n")),(0,r.kt)("h3",null,"Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"propType"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vimeoId"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"To find your ",(0,r.kt)("inlineCode",{parentName:"td"},"vimeoId"),", go to the Vimeo page and find the video you want to put on your website. Once it is loaded, look at the URL and look for the numbers that come after the slash (/).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"src"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Use the html ",(0,r.kt)("inlineCode",{parentName:"td"},"<video>")," player with a local ",(0,r.kt)("inlineCode",{parentName:"td"},".mp4")," video")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Vimeo title")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"poster"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Provides an image to show before the video loads, only works with ",(0,r.kt)("inlineCode",{parentName:"td"},"src"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"children"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track"},(0,r.kt)("inlineCode",{parentName:"a"},"<track>"))),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"non-vimeo only")," – Provide ",(0,r.kt)("inlineCode",{parentName:"td"},".vtt")," file in your static directory to make your videos more accessible. Then add a track element with a src pointing to it Check out ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API#Tutorial_on_how_to_write_a_WebVTT_file"},"this simple tutorial")," for getting started with writing vtt files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autoPlay"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Whether or not the video should autoplay.")))))}h.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(7294),r=a(8650),l=a.n(r),o=a(5444),i=a(5426),m=a(3321),d=a(5900),s=a.n(d),p=function(e){var t,a=e.title,r=e.theme,l=e.tabs,o=void 0===l?[]:l;return n.createElement("div",{className:s()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=o.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},c=function(e){var t=e.relativePagePath,a=e.repository,r=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||r,i=l.baseUrl,m=l.subDirectory,d=i+"/edit/"+l.branch+m+"/src/pages"+t;return i?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},u=a(4275),g=a(1721),k=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,i=r.split("/").filter(Boolean).slice(-1)[0],m=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),m=a===i,d=new RegExp(i+"/?(#.*)?$"),p=r.replace(d,a);return n.createElement("li",{key:e,className:s()((t={},t["PageTabs-module--selected-item--aBB0K"]=m,t),"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+p},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},m))))))},t}(n.Component),h=k,b=a(2881),N=a(6958),v=a(36),y=function(e){var t=e.date,a=new Date(t);return t?n.createElement(v.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(v.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},f=function(e){var t=e.pageContext,a=e.children,r=e.location,d=e.Title,s=t.frontmatter,g=void 0===s?{}:s,k=t.relativePagePath,v=t.titleType,f=g.tabs,x=g.title,T=g.theme,V=g.description,E=g.keywords,P=g.date,w=(0,N.Z)().interiorTheme,C=(0,o.useStaticQuery)("2456312558").site.pathPrefix,D=C?r.pathname.replace(C,""):r.pathname,Z=f?D.split("/").filter(Boolean).slice(-1)[0]||l()(f[0],{lower:!0}):"",L=T||w;return n.createElement(m.Z,{tabs:f,homepage:!1,theme:L,pageTitle:x,pageDescription:V,pageKeywords:E,titleType:v},n.createElement(p,{title:d?n.createElement(d,null):x,label:"label",tabs:f,theme:L}),f&&n.createElement(h,{title:x,slug:D,tabs:f,currentTab:Z}),n.createElement(b.Z,{padded:!0},a,n.createElement(c,{relativePagePath:k}),n.createElement(y,{date:P})),n.createElement(u.Z,{pageContext:t,location:r,slug:D,tabs:f,currentTab:Z}),n.createElement(i.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-components-video-index-mdx-02d3ac0763211eb8c495.js.map