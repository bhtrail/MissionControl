(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{205:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"rightToc",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),l=(a(0),a(288)),i={id:"combat-state",title:"Combat State",sidebar_label:"Combat State"},b=[{value:"DisablePilotDeath",id:"disablepilotdeath",children:[]}],o={id:"contract-builder-api/nodes/combat-state",title:"Combat State",description:"The `CombatState` node allows for modifications and checks for specific combat state related logic.\r",source:"@site/docs\\contract-builder-api\\nodes\\combat-state.md",permalink:"/docs/contract-builder-api/nodes/combat-state",sidebar_label:"Combat State",sidebar:"docs",previous:{title:"Swap Placement",permalink:"/docs/contract-builder-api/nodes/swap-placement"},next:{title:"AI Orders",permalink:"/docs/contract-builder-api/ai-orders"}},c={rightToc:b,metadata:o};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"CombatState")," node allows for modifications and checks for specific combat state related logic."),Object(l.b)("h2",{id:"disablepilotdeath"},"DisablePilotDeath"),Object(l.b)("p",null,"This node ensures that no player pilots can die and optionally not be injured. This is useful, for example, if some contract story doesn't make sense for the pilot to be killed (e.g. a practice fight or training)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the Node that will be used for the Unity game object")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"CombatState")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type of node")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SubType"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"DisablePilotDeath")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Subtype of node")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DisableInjuries"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Should the pilots be immune to injury too? ",Object(l.b)("inlineCode",{parentName:"td"},"true")," makes them not take injury. ",Object(l.b)("inlineCode",{parentName:"td"},"false")," is the vanilla behaviour.")))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "Name": "Chunk_DisablePilotDeath",\n  "Type": "Chunk",\n  "SubType": "Container",\n  "ControlledByContract": true,\n  "Guid": "953a5930-06d0-4a2d-9840-e9a70c2a63ea",\n  "Children": [\n    {\n      "Name": "CombatState_DisablePilotDeath",\n      "Type": "CombatState",\n      "SubType": "DisablePilotDeath",\n      "DisableInjuries": false\n    }\n  ]\n}\n')))}d.isMDXComponent=!0},288:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n),l=r.a.createContext({}),i=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},b=function(e){var t=i(e.components);return r.a.createElement(l.Provider,{value:t},e.children)};var o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},c=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),d=i(a),p=n,u=d[b+"."+p]||d[p]||o[p]||l;return a?r.a.createElement(u,Object.assign({},{ref:t},c,{components:a})):r.a.createElement(u,Object.assign({},{ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var d=2;d<l;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);