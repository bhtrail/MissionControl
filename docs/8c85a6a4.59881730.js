(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{204:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(6),r=(n(0),n(288)),o={id:"dialogue-matches-conditional",title:"Dialogue Matches Conditional",sidebar_label:"Dialogue Matches"},c=[{value:"Properties",id:"properties",children:[]},{value:"Example",id:"example",children:[]}],l={id:"contract-builder-api/trigger-conditionals/dialogue-matches-conditional",title:"Dialogue Matches Conditional",description:"The `DialogueMatchesConditional` conditional checks the incoming `Trigger` caller `Guid` against the specified conditional `DialogueGuid`. If they match then the condition is satisfied. This is often used together with a `TriggerOn` of `OnDialogueComplete`, which sends the `Guid` of the completed `Dialogue` Encounter Object.\r",source:"@site/docs\\contract-builder-api\\trigger-conditionals\\dialogue-matches-conditional.md",permalink:"/docs/contract-builder-api/trigger-conditionals/dialogue-matches-conditional",sidebar_label:"Dialogue Matches",sidebar:"docs",previous:{title:"Always True Conditional",permalink:"/docs/contract-builder-api/trigger-conditionals/always-true-conditional"},next:{title:"Encounter Object Matches State Conditional",permalink:"/docs/contract-builder-api/trigger-conditionals/encounter-object-matches-state-conditional"}},b={rightToc:c,metadata:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"DialogueMatchesConditional")," conditional checks the incoming ",Object(r.b)("inlineCode",{parentName:"p"},"Trigger")," caller ",Object(r.b)("inlineCode",{parentName:"p"},"Guid")," against the specified conditional ",Object(r.b)("inlineCode",{parentName:"p"},"DialogueGuid"),". If they match then the condition is satisfied. This is often used together with a ",Object(r.b)("inlineCode",{parentName:"p"},"TriggerOn")," of ",Object(r.b)("inlineCode",{parentName:"p"},"OnDialogueComplete"),", which sends the ",Object(r.b)("inlineCode",{parentName:"p"},"Guid")," of the completed ",Object(r.b)("inlineCode",{parentName:"p"},"Dialogue")," Encounter Object."),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Details"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ObjectiveStatusConditional")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Guid"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A ",Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://www.uuidgenerator.net/"}),"UUIDv4")," of the objective you wish to check against")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Status"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The Objective status you want the conditional to pass on a successful check.",Object(r.b)("br",null),Object(r.b)("br",null),"Statuses are: ",Object(r.b)("inlineCode",{parentName:"td"},"InProgress"),", ",Object(r.b)("inlineCode",{parentName:"td"},"Complete"),", ",Object(r.b)("inlineCode",{parentName:"td"},"Success"),", ",Object(r.b)("inlineCode",{parentName:"td"},"Failed"),", ",Object(r.b)("inlineCode",{parentName:"td"},"NotInProgress"))))),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "Name": "Trigger_Activate_Post_3a",\n  "TriggerOn": "OnDialogueComplete",\n  "Description": "Activate Post 3a Chunk",\n  "Conditionals": [\n    {\n      "Type": "DialogueMatchesConditional", // Checks the completed Dialogue Guid against the specified DialogueGuid below\n      "DialogueGuid": "4ef16b5e-1486-4399-8835-b81026b22cac"\n    }\n  ]\n  // more Trigger properties\n}\n')))}d.isMDXComponent=!0},288:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a),r=i.a.createContext({}),o=function(e){var t=i.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=o(e.components);return i.a.createElement(r.Provider,{value:t},e.children)};var l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),d=o(n),p=a,u=d[c+"."+p]||d[p]||l[p]||r;return n?i.a.createElement(u,Object.assign({},{ref:t},b,{components:n})):i.a.createElement(u,Object.assign({},{ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<r;d++)o[d]=n[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);