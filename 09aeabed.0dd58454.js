(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{63:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return d}));var a=t(3),i=t(7),r=(t(0),t(88)),s={id:"signing",sidebar_label:"PDF Signing API Calls"},o={unversionedId:"signing",id:"signing",isDocsHomePage:!1,title:"signing",description:"PDF Signing API Calls",source:"@site/docs/signing.md",slug:"/signing",permalink:"/gr.grnet.eseal/docs/signing",version:"current",sidebar_label:"PDF Signing API Calls",sidebar:"someSidebar",previous:{title:"E-seal REST API Documentation",permalink:"/gr.grnet.eseal/docs/"},next:{title:"validation",permalink:"/gr.grnet.eseal/docs/validation"}},l=[{value:"POST - Sign a PDF document",id:"post---sign-a-pdf-document",children:[{value:"Request",id:"request",children:[]},{value:"Request Body",id:"request-body",children:[]},{value:"Errors",id:"errors",children:[]}]}],c={toc:l};function d(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"pdf-signing-api-calls"},"PDF Signing API Calls"),Object(r.b)("h2",{id:"post---sign-a-pdf-document"},"POST - Sign a PDF document"),Object(r.b)("h3",{id:"request"},"Request"),Object(r.b)("b",null,"POST")," @ ",Object(r.b)("i",null,"/api/v1/signing/remoteSignDocument"),Object(r.b)("h3",{id:"request-body"},"Request Body"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"username")," : Username to be used at the remote provider API call.\nThe username/password pair maps to a specific eseal.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"password")," : Password to be used at the remote provider API call.\nThe username/password pair maps to a specific eseal.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"key")," :  Key that will be used with the TOTP generation.\nEach username/password pair corresponds to a specific key.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"toSignDocument.bytes")," : PDF document to be signed in base64 encoded format")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"toSignDocument.name"),": Placeholder name for the pdf document"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "username": "example-user",\n    "password": "example-password",\n    "key": "example-key",\n    "toSignDocument": {\n        "name": "document.pdf",\n        "bytes": "JVBERi0xLjM..."\n        }\n}\n')),Object(r.b)("h3",{id:"errors"},"Errors"),Object(r.b)("p",null,"Please refer to section ",Object(r.b)("a",{parentName:"p",href:"/gr.grnet.eseal/docs/errors"},"Errors")," to see all possible Errors"))}d.isMDXComponent=!0}}]);