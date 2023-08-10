(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),c=(n(0),n(291)),l={id:"random-spawns",title:"Random Spawns"},o=[{value:"Random Spawns",id:"random-spawns",children:[]}],i={id:"features/random-spawns",title:"Random Spawns",description:"Depending on the contract type, the lance spawns will change every playthrough. The spawning uses contract type specific logic to suitably place the lances. There are no configuration options currently available for this as these come from the encounter type rulesets that are created. Which things are randomised in the game is determined by the Encounter Ruleset which is run for that contract type.\r",source:"@site/docs\\features\\random-spawns.md",permalink:"/docs/features/random-spawns",sidebar:"docs",previous:{title:"Additional Lances",permalink:"/docs/features/additional-lances"},next:{title:"Encounter Rulesets",permalink:"/docs/features/encounter-rulesets"}},b={rightToc:o,metadata:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Depending on the contract type, the lance spawns will change every playthrough. The spawning uses contract type specific logic to suitably place the lances. There are no configuration options currently available for this as these come from the encounter type rulesets that are created. Which things are randomised in the game is determined by the Encounter Ruleset which is run for that contract type."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"RandomSpawns": {\n  "Enable": true,\n  "EnableForFlashpoints": true,\n  "IncludeContractTypes": [],\n  "ExcludeContractTypes": ["SoloDuel", "DuoDuel"]\n}\n')),Object(c.b)("h3",{id:"random-spawns"},"Random Spawns"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Path"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required?"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Details"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"Enable")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"true")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Should this feature be enabled or not?")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"EnableForFlashpoints")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"true")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Enable feature for Flashpoints if ",Object(c.b)("inlineCode",{parentName:"td"},"EnableFlashpointOverrides")," is ",Object(c.b)("inlineCode",{parentName:"td"},"true"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"IncludeContractTypes")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"All contract types"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"When set, it overrides ",Object(c.b)("inlineCode",{parentName:"td"},"ExcludeContractTypes")," for this level")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"ExcludeContractTypes")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No contract types"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Allows you to explicitly exclude boundary changes for all teams for the specified contract types. Not used if ",Object(c.b)("inlineCode",{parentName:"td"},"IncludeContractTypes")," is set")))))}p.isMDXComponent=!0},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a),c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},o=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)};var i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=l(n),s=a,d=p[o+"."+s]||p[s]||i[s]||c;return n?r.a.createElement(d,Object.assign({},{ref:t},b,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},b))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=b;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<c;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);