(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{213:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),i=(n(0),n(288)),l={id:"set-status-result",title:"Set Status Result",sidebar_label:"Set Status"},c=[{value:"Properties",id:"properties",children:[]},{value:"Example",id:"example",children:[]}],o={id:"contract-builder-api/trigger-results/set-status-result",title:"Set Status Result",description:"The `SetStatus` result sets the status of a Chunk or Node. This allows for activating/disabling entire `Chunks` of map logic based on certain conditions or more targetted approaches like disabling a `Region`, for example.\r",source:"@site/docs\\contract-builder-api\\trigger-results\\set-status-result.md",permalink:"/docs/contract-builder-api/trigger-results/set-status-result",sidebar_label:"Set Status",sidebar:"docs",previous:{title:"Set Status At Random Result",permalink:"/docs/contract-builder-api/trigger-results/set-status-at-random-result"},next:{title:"Set Team By Lance Spawner Guid Result",permalink:"/docs/contract-builder-api/trigger-results/set-team-by-lance-spawner-guid-result"}},b={rightToc:c,metadata:o};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"SetStatus")," result sets the status of a Chunk or Node. This allows for activating/disabling entire ",Object(i.b)("inlineCode",{parentName:"p"},"Chunks")," of map logic based on certain conditions or more targetted approaches like disabling a ",Object(i.b)("inlineCode",{parentName:"p"},"Region"),", for example."),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Details"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"SetStatus")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"EncounterGuid"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Guid of the ",Object(i.b)("inlineCode",{parentName:"td"},"Chunk"),", ",Object(i.b)("inlineCode",{parentName:"td"},"Node")," or other accessible Encounter Object obtained from the Combat ItemRegistry when triggered")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Status"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Status to set the Encounter Object to.",Object(i.b)("br",null),Object(i.b)("br",null),"Supported status are: ",Object(i.b)("inlineCode",{parentName:"td"},"Active"),", ",Object(i.b)("inlineCode",{parentName:"td"},"Inactive"),", ",Object(i.b)("inlineCode",{parentName:"td"},"Finished"),", ",Object(i.b)("inlineCode",{parentName:"td"},"Nothing"),", ",Object(i.b)("inlineCode",{parentName:"td"},"ControlledByContract"))))),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "Name": "Trigger_Disable_Region_1",\n  "TriggerOn": "OnObjectiveUpdated",\n  "Description": "Disable the first region on first objective complete",\n  "Conditionals": [\n    {\n      "Type": "ObjectiveStatusConditional",\n      "Guid": "786166e2-22ea-45c1-9786-68df31958bd8",\n      "Status": "Success"\n    }\n  ],\n  "Results": [\n    {\n      "Type": "SetStatus",\n      "EncounterGuid": "e7e9f35b-7ed8-404e-9dae-69be61de2dd3",\n      "Status": "Finished"\n    }\n  ]\n}\n')))}s.isMDXComponent=!0},288:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a),i=r.a.createContext({}),l=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=l(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),s=l(n),u=a,d=s[c+"."+u]||s[u]||o[u]||i;return n?r.a.createElement(d,Object.assign({},{ref:t},b,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},b))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);