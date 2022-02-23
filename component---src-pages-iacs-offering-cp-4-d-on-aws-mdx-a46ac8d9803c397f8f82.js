"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[3749],{261:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return d}});var n,o=a(3366),l=(a(7294),a(4983)),r=a(4295),i=["components"],s={},c=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),p={_frontmatter:s},u=r.Z;function d(e){var t=e.components,a=(0,o.Z)(e,i);return(0,l.kt)(u,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",null,"Running the Cloud Pak Deployer on AWS"),(0,l.kt)("p",null,"On Amazon Web Services (AWS), OpenShift can be set up in various ways. The Cloud Pak Deployer currently implements one of them: ROSA (Red Hat OpenShift on AWS), which is a managed service so that customers can focus on the deployment and running of applications. More information about ROSA can be found here: ",(0,l.kt)("a",{parentName:"p",href:"https://aws.amazon.com/rosa/"},"https://aws.amazon.com/rosa/")),(0,l.kt)("h2",null,"Topology"),(0,l.kt)("p",null,"A typical setup of the ROSA cluster is pictured below:\n",(0,l.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"802px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"101.73611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADXElEQVQ4y52UyW7cRhCG5x3zDnmCPEKCIEFgOMglx1xzyykLZCG2ZVmOhUjxElvLLJqhNMOdbG7dTbL5Bd2zSUFOKaKA+qvJn9VVf/cIYBgGtmaGgc8e/8hPT8/Iy4ZPv/iBN1febs0+1vzygu9ff0JYTxze5kdbMqUUUkoaqXl2ds3YixBlw+HpJVFWMRhD13XOTW8QdcE770/KpnJ4u7Yj9DyPyXhMlCT0xnDfti8/dAPGrvUP8jvCrm3XpRcFjeeRxzHBYkGVpmDXtP4Pl/tYKcu+J9Ra2x9isozS87ieTDk/PyfLsnX/zLD2YdjHuxyYrmdQak/Yti3GuD3wv03re4S2QhtrzdD165iBUhnGqwIv65gGFYu0ZZ5o5oliHktmYcMi1cz8Ai03hPZbV+GG8L69WRk+PxB8d9LyzdOSb49bvvwt4uvDjMcvFI+e1zw6Unz1RBDlLaN9tdrp0SiFt4y5DVJEKbmJO17N4Y+54dW85+Sm48VVzfFYcjLvNnk4nvQUQjIqqwY/TOn7zlXYNpKln1BVlZOENSFnVPp2K31yNUF2gUO9KcjkFVrnVKJhFEQZPx8cuR5aHdW5oKr32x6GjqvkOTfZ681p6Xgf/IIn/nI4lR4f4wMCMaMWmtF0MqEsC3o3CEMvFalQ6G6gUR21NMyCkEUU0yhD2fRM/QAvTpHakBSKa/+WMK2pi4ZR23ZOLnYotoeW8MP1HeNFyCqp8VNJnBui3OCnjfM4H4jynlXaEGSaREAQS5qy/tdQGOgaRRhlaHsKNsfeE6esyncb3DPNjgjrC4eqNmSaH5HXSyqhHurQxp1U1E17TzgDF8FLpsnZpqeGt6tD5ul7h7PG5+3qCZG42xNa3xLaLQdJhahbRKXJq5Yg7Yjz3uWyUhNmhijrELUmFi2BxamiLmpG9qzOZjOapllfElLx96XHZOETC0latISiIMwLkkI7HOTC5WxshxKIjDCtqETN6OP1gt+PTp2+dNtS5wVFue+ftdvijEn6zEnIvneTn7i+ut73BRfxr/jiklq0jOpGsvLD3ZTtUOxW93RwJ2bcpB92eJ5dscjG64u5b7mKzohESF2o/ZTtba20RpUVy2VCHAuiKHd+t8xZLgVhuMfWbRwENhYs71JEkvMP8Uv5dTy94qEAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ROSA configuration",title:"ROSA configuration",src:"/cp4d-managed/static/274a19968c1b2266947e4eb25e5b34d2/32d86/sample-rosa-ocs-cp4d.png",srcSet:["/cp4d-managed/static/274a19968c1b2266947e4eb25e5b34d2/7fc1e/sample-rosa-ocs-cp4d.png 288w","/cp4d-managed/static/274a19968c1b2266947e4eb25e5b34d2/a5df1/sample-rosa-ocs-cp4d.png 576w","/cp4d-managed/static/274a19968c1b2266947e4eb25e5b34d2/32d86/sample-rosa-ocs-cp4d.png 802w"],sizes:"(max-width: 802px) 100vw, 802px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)("p",null,"When deploying ROSA, an external host name and domain name are automatically generated by Amazon Web Services and both the API and Ingress servers can be resolved by external clients. At this stage, one cannot configure the domain name to be used."),(0,l.kt)("h2",null,"Enable ROSA on AWS"),(0,l.kt)("p",null,"Before you can use ROSA on AWS, you have to enable it if this has not been done already. This can be done as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Go to ",(0,l.kt)("a",{parentName:"li",href:"https://aws.amazon.com/"},"https://aws.amazon.com/")),(0,l.kt)("li",{parentName:"ul"},"Login to the AWS console"),(0,l.kt)("li",{parentName:"ul"},"Search for ",(0,l.kt)("strong",{parentName:"li"},"ROSA service")),(0,l.kt)("li",{parentName:"ul"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Enable OpenShift"))),(0,l.kt)("h2",null,"Obtain the AWS IAM credentials"),(0,l.kt)("p",null,"You will need an ",(0,l.kt)("strong",{parentName:"p"},"Access Key ID")," and ",(0,l.kt)("strong",{parentName:"p"},"Secret Access Key")," for the deployer to run ",(0,l.kt)("inlineCode",{parentName:"p"},"rosa")," commands."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Go to ",(0,l.kt)("a",{parentName:"li",href:"https://aws.amazon.com/"},"https://aws.amazon.com/")),(0,l.kt)("li",{parentName:"ul"},"Login to the AWS console"),(0,l.kt)("li",{parentName:"ul"},"Click on your user name at the top right of the screen"),(0,l.kt)("li",{parentName:"ul"},"Select ",(0,l.kt)("strong",{parentName:"li"},"Security credentials"),". You can also reach this screen via ",(0,l.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/iam/home?region=us-east-2#/security_credentials"},"https://console.aws.amazon.com/iam/home?region=us-east-2#/security_credentials"),"."),(0,l.kt)("li",{parentName:"ul"},"If you do not yet have an access key (or you no longer have the associated secret), create an access key"),(0,l.kt)("li",{parentName:"ul"},"Store your ",(0,l.kt)("strong",{parentName:"li"},"Access Key ID")," and ",(0,l.kt)("strong",{parentName:"li"},"Secret Access Key")," in safe place")),(0,l.kt)("h2",null,"Obtain your ROSA login token"),(0,l.kt)("p",null,"To run ",(0,l.kt)("inlineCode",{parentName:"p"},"rosa")," commands to manage the cluster, the deployer requires the ROSA login token."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Go to ",(0,l.kt)("a",{parentName:"li",href:"https://cloud.redhat.com/openshift/token/rosa"},"https://cloud.redhat.com/openshift/token/rosa")),(0,l.kt)("li",{parentName:"ul"},"Login with your Red Hat user ID and password. If you don’t have one yet, you need to create it."),(0,l.kt)("li",{parentName:"ul"},"Copy the offline access token presented on the screen and store it in a safe place.")),(0,l.kt)("h2",null,"Acquire an IBM Cloud Pak Entitlement Key"),(0,l.kt)("p",null,"If you want to pull the Cloud Pak images from the entitled registry (i.e. an online install), or if you want to mirror the images to your private registry, you need to download the entitlement key. You can skip this step if you’re installing from a private registry and all Cloud Pak images have already been downloaded to the private registry."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Navigate to ",(0,l.kt)("a",{parentName:"li",href:"https://myibm.ibm.com/products-services/containerlibrary"},"https://myibm.ibm.com/products-services/containerlibrary")," and login with your IBMId credentials"),(0,l.kt)("li",{parentName:"ul"},"Select ",(0,l.kt)("strong",{parentName:"li"},"Get Entitlement Key")," and create a new key (or copy your existing key)"),(0,l.kt)("li",{parentName:"ul"},"Copy the key value")),(0,l.kt)(c,{kind:"warning",mdxType:"InlineNotification"},"As stated for the API key, you can choose to download the entitlement key to a file. However, when we reference the entitlement key, we mean the 80+ character string that is displayed, not the file."),(0,l.kt)("h2",null,"Prepare for running"),(0,l.kt)("h3",null,"Set environment variables"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'export AWS_ACCESS_KEY_ID=your_access_key\nexport AWS_SECRET_ACCESS_KEY=your_secret_access_key\nexport ROSA_LOGIN_TOKEN="your_rosa_login_token"\nexport CP_ENTITLEMENT_KEY=your_cp_entitlement_key\n\nexport STATUS_DIR=/data/status/sample\nexport CONFIG_DIR=/data/config/sample\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY"),": This is the AWS Access Key you retrieved above, often this is something like ",(0,l.kt)("inlineCode",{parentName:"li"},"AK1A2VLMPQWBJJQGD6GV")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AWS_SECRET_ACCESS_KEY"),": The secret associated with your AWS Access Key, also retrieved above"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ROSA_LOGIN_TOKEN"),": The offline access token that was retrieved before. This is a very long string (200+ characters). Make sure you enclose the string in single or double quotes as it may hold special characters"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CP_ENTITLEMENT_KEY"),": This is the entitlement key you acquired as per the instructions above, this is a 80+ character string"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"STATUS_DIR"),": The directory where the Cloud Pak Deployer keeps all status information and logs files. ",(0,l.kt)("strong",{parentName:"li"},"Please note")," that if you have chosen to use a File Vault, the properties file is keps under the ",(0,l.kt)("inlineCode",{parentName:"li"},"vault")," directory within the status directory"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CONFIG_DIR"),": Directory that holds the configuration, it must have ",(0,l.kt)("inlineCode",{parentName:"li"},"config"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"defaults")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"inventory")," subdirectories")),(0,l.kt)(c,{mdxType:"InlineNotification"},"Cloud Pak Deployer uses the status directory to logs its activities and also to keep track of its running state. For a given environment you're provisioning or destroying, you should always specify the same status directory to avoid contention between different deploy runs. You can run the Cloud Pak Deployer in parallel for different environments (different configuration directories)."),(0,l.kt)("h3",null,"Create the secrets needed for ROSA cluster"),(0,l.kt)("p",null,"You need to store the below credentials in the vault so that the deployer has access to them when doing the ROSA install."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./cp-deploy.sh vault set \\\n    --vault-secret aws-access-key \\\n    --vault-secret-value $AWS_ACCESS_KEY\n\n./cp-deploy.sh vault set \\\n    --vault-secret aws-secret-access-key \\\n    --vault-secret-value $AWS_SECRET_ACCESS_KEY\n\n./cp-deploy.sh vault set \\\n    --vault-secret rosa-login-token \\\n    --vault-secret-value $ROSA_LOGIN_TOKEN\n")),(0,l.kt)("h2",null,"Run the Cloud Pak Deployer"),(0,l.kt)("p",null,"To run the container using a local configuration input directory and a data directory where temporary and state is kept, use the example below. If you don’t specify the status directory, the deployer will automatically create a temporary directory. Please note that the status directory will also hold secrets if you have configured a flat file vault. If you lose the directory, you will not be able to make changes to the configuration and adjust the deployment. It is best to specify a permanent directory that you can reuse later. If you specify an existing directory the current user ",(0,l.kt)("strong",{parentName:"p"},"must")," be the owner of the directory. Failing to do so may cause the container to fail with insufficient permissions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./cp-deploy.sh env apply -e env_id=pluto-01\n")),(0,l.kt)("p",null,"In the above command, the ",(0,l.kt)("inlineCode",{parentName:"p"},"env_id")," extra variable defines the names of the objects that are being created; these are referenced in the ",(0,l.kt)("inlineCode",{parentName:"p"},".yaml")," configuration files as ",(0,l.kt)("inlineCode",{parentName:"p"},"{{ env_id }}"),". For more information about the extra (dynamic) variables, see ",(0,l.kt)("a",{parentName:"p",href:"/cp4d-managed/advanced/advanced-configuration"},"advanced configuration"),"."),(0,l.kt)("p",null,"When running the command, the container will start as a daemon and the command will tail-follow the logs. You can press Ctrl-C at any time to interrupt the logging but the container will continue to run in the background."),(0,l.kt)("p",null,"You can return to view the logs as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./cp-deploy.sh env logs\n")),(0,l.kt)("p",null,"Deploying the infrastructure, preparing OpenShift and installing the Cloud Pak will take a long time, typically between 1-5 hours,dependent on which Cloud Pak cartridges you configured. For estimated duration of the steps, refer to ",(0,l.kt)("a",{parentName:"p",href:"/cp4d-managed/cpd-design/timings"},"Timings"),"."),(0,l.kt)("p",null,"If you need to interrupt the automation, use CTRL-C to stop the logging output and then use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./cp-deploy.sh env kill\n")),(0,l.kt)("h2",null,"On failure"),(0,l.kt)("p",null,"If the Cloud Pak Deployer fails, for example because certain infrastructure components are temporarily not available, fix the cause if needed and then just re-run it with the same ",(0,l.kt)("inlineCode",{parentName:"p"},"CONFIG_DIR")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"STATUS_DIR")," as well extra variables. The provisioning process has been designed to be idempotent and it will not redo actions that have already completed successfully."),(0,l.kt)("h2",null,"Finishing up"),(0,l.kt)("p",null,"Once the process has finished, it will output the URLs by which you can access the deployed Cloud Pak. You can also find this information under the ",(0,l.kt)("inlineCode",{parentName:"p"},"cloud-paks")," directory in the status directory you specified."),(0,l.kt)("p",null,"To retrieve the Cloud Pak URL(s):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cat $STATUS_DIR/cloud-paks/*\n")),(0,l.kt)("p",null,"This will show the Cloud Pak URLs:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-output"},"Cloud Pak for Data URL for cluster pluto-01 and project zen-40:\nhttps://cpd-zen-40.apps.pluto-01.pmxz.p1.openshiftapps.com\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"admin")," password can be retrieved from the vault as follows:"),(0,l.kt)("p",null,"List the secrets in the vault:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./cp-deploy.sh vault list\n")),(0,l.kt)("p",null,"This will show something similar to the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-output"},"Secret list for group sample:\n- aws-access-key\n- aws-secret-access-key\n- ibm_cp_entitlement_key\n- rosa-login-token\n- pluto-01-cluster-admin-password\n- cp4d_admin_zen_40_pluto_01\n- all-config\n")),(0,l.kt)("p",null,"You can then retrieve the Cloud Pak for Data admin password like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./cp-deploy.sh vault get --vault-secret cp4d_admin_zen_40_pluto_01\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-output"},"PLAY [Secrets] *****************************************************************\nincluded: /automation_script/automation-roles/99-generic/vault/vault-get-secret/tasks/get-secret-file.yml for localhost\ncp4d_admin_zen_40_pluto_01: gelGKrcgaLatBsnAdMEbmLwGr\n")))}d.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(7294),o=a(8650),l=a.n(o),r=a(5444),i=a(5426),s=a(3321),c=a(5900),p=a.n(c),u=function(e){var t,a=e.title,o=e.theme,l=e.tabs,r=void 0===l?[]:l;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=r.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===o,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,o=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||o,i=l.baseUrl,s=l.subDirectory,c=i+"/edit/"+l.branch+s+"/src/pages"+t;return i?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},m=a(4275),h=a(1721),k=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,o=e.slug,i=o.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),s=a===i,c=new RegExp(i+"/?(#.*)?$"),u=o.replace(c,a);return n.createElement("li",{key:e,className:p()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:""+u},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),y=k,g=a(2881),f=a(6958),v=a(36),N=function(e){var t=e.date,a=new Date(t);return t?n.createElement(v.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(v.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},b=function(e){var t=e.pageContext,a=e.children,o=e.location,c=e.Title,p=t.frontmatter,h=void 0===p?{}:p,k=t.relativePagePath,v=t.titleType,b=h.tabs,w=h.title,A=h.theme,E=h.description,C=h.keywords,S=h.date,T=(0,f.Z)().interiorTheme,_=(0,r.useStaticQuery)("2456312558").site.pathPrefix,x=_?o.pathname.replace(_,""):o.pathname,P=b?x.split("/").filter(Boolean).slice(-1)[0]||l()(b[0],{lower:!0}):"",R=A||T;return n.createElement(s.Z,{tabs:b,homepage:!1,theme:R,pageTitle:w,pageDescription:E,pageKeywords:C,titleType:v},n.createElement(u,{title:c?n.createElement(c,null):w,label:"label",tabs:b,theme:R}),b&&n.createElement(y,{title:w,slug:x,tabs:b,currentTab:P}),n.createElement(g.Z,{padded:!0},a,n.createElement(d,{relativePagePath:k}),n.createElement(N,{date:S})),n.createElement(m.Z,{pageContext:t,location:o,slug:x,tabs:b,currentTab:P}),n.createElement(i.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-iacs-offering-cp-4-d-on-aws-mdx-a46ac8d9803c397f8f82.js.map