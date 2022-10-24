(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{269:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"rightToc",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),l=(a(0),a(288)),b={id:"per-contract-overrides",title:"Per-Contract Overrides"},c=[{value:"General",id:"general",children:[]},{value:"Additional Lances",id:"additional-lances",children:[]},{value:"Extended Lances",id:"extended-lances",children:[]},{value:"Extended Boundaries",id:"extended-boundaries",children:[]}],i={id:"features/per-contract-overrides",title:"Per-Contract Overrides",description:"A Per-Contract override, named this way to avoid confusion with the vanilla BT `ContractOverride` (contract json), is an MC setting override file for individual contracts. This allows you to override specific MC settings for special procedural or flashpoint contracts.\r",source:"@site/docs\\features\\per-contract-overrides.md",permalink:"/docs/features/per-contract-overrides",sidebar:"docs",previous:{title:"Combat Dialogue",permalink:"/docs/features/combat-dialogue"},next:{title:"Metrics",permalink:"/docs/features/metrics"}},o={rightToc:c,metadata:i};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"A Per-Contract override, named this way to avoid confusion with the vanilla BT ",Object(l.b)("inlineCode",{parentName:"p"},"ContractOverride")," (contract json), is an MC setting override file for individual contracts. This allows you to override specific MC settings for special procedural or flashpoint contracts."),Object(l.b)("p",null,"The per-contrat overrides are stored in ",Object(l.b)("inlineCode",{parentName:"p"},"MissionControl/config/Contracts")," and ",Object(l.b)("inlineCode",{parentName:"p"},"MissionControl/config/Flashpoints"),". These folders are effectively the same and are both supported purely for an organisational reason. You could just have the ",Object(l.b)("inlineCode",{parentName:"p"},"Contracts")," folder if that better fits your needs."),Object(l.b)("p",null,"If specific property is not defined, the usual settings will take effect."),Object(l.b)("h1",{id:"settings-breakdown"},"Settings Breakdown"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"NOTE:")," Filename of the per-contract override is very important. It must match the ID of the ",Object(l.b)("inlineCode",{parentName:"p"},"ContactOverride")," (contract json) you wish to override. For the example below the filename would be ",Object(l.b)("inlineCode",{parentName:"p"},"My_Contract_ID_Example.json")," to override the contract with ID ",Object(l.b)("inlineCode",{parentName:"p"},"My_Contract_ID_Example"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "ID": "My_Contract_ID_Example",\n  "RandomSpawns": {\n    "Enable": true\n  },\n  "HotDropProtection": {\n    "Enable": true\n  },\n  "AdditionalLances": {\n    "Enable": true,\n    "EnemyLanceCount": 2,\n    "EnemyLances": [\n      "Damaged_Assault_Battle_Lance",\n      "lancedef_vehicle_d10_dynamic_convoy"\n    ],\n    "AllyLanceCount": 1,\n    "AllyLances": ["Generic_Light_Battle_Lance"]\n  },\n  "ExtendedLances": {\n    "Enable": true,\n    "TargetLanceSize": 6,\n    "EmployerLanceSize": 5,\n    "TargetAllyLanceSize": 5,\n    "EmployerAllyLanceSize": 5,\n    "HostileToAllLanceSize": 5,\n    "NeutralToAllLanceSize": 5\n  },\n  "ExtendedBoundaries": {\n    "Enable": true,\n    "IncreaseBoundarySizeByPercentage": 0.5\n  },\n  "DynamicWithdraw": {\n    "Enable": true\n  },\n  "AdditionalPlayerMechs": {\n    "Enable": true\n  }\n}\n')),Object(l.b)("h2",{id:"general"},"General"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ID"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"My_Contract_ID_Example")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Must be the same ID as the contract you want to override. The filename should also be the same name.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RandomSpawns/Enable"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true")," or ",Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Override Random Spawns feature to be on or off on a contract.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"HotDropProtection/Enable"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true")," or ",Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Override Hot Drop Protection feature to be on or off on a contract.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Additional Lances"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See Table Below"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Extended Lances"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See Table Below"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Extended Boundaries"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See Table Below"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DynamicWithdraw/Enable"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true")," or ",Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Override Dynamic Withdraw feature to be on or off on a contract.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AdditionalPlayerMechs/Enable"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true")," or ",Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Override Additional Player Mechs to be on or off on a contract. This is what allows Bigger Drops mod to work.")))),Object(l.b)("h2",{id:"additional-lances"},"Additional Lances"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true")," or ",Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If AL config is provided then ",Object(l.b)("inlineCode",{parentName:"td"},"Enable")," is required.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UseDialogue"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true")," or ",Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Overrides if Ally AL dialogue should appear")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DialogueCastDefId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"castDef_DariusDefault"),", ",Object(l.b)("inlineCode",{parentName:"td"},"castDef_Commander"),", ",Object(l.b)("inlineCode",{parentName:"td"},"castDef_TeamPilot_Random_1")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the CastDef of the speaker. Can be a real CastDef or MC Dynamic CastDef (see ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/features/dialogue-system"}),"Dialogue System"),").")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dialogue"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"Hello, this is what you'd see being spoken by the Ally AL lance")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Overrides the actual dialogue spoken by the Ally AL lance")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"EnemyLanceCount"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"2")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Overrides the number of enemy/target AL lances that will spawn.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"EnemyLances"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'["Damaged_Assault_Battle_Lance",'),Object(l.b)("br",null),Object(l.b)("inlineCode",{parentName:"td"},'"lancedef_vehicle_d10_dynamic_convoy"]')),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Manually specifies the exact MC lance or LanceDef you want to spawn for the enemy/target AL lances that spawn.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"EnemyLanceObjectiveNames"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'["Destroy Traitors Lance 1", "Destroy Traitors Lance 2"]')),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Overrides the Enemy AL lance objective names. Taken on a first come basis.",Object(l.b)("br",null),Object(l.b)("br",null),"If fewer names are provided then it will assign the custom names then return to the default names.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AllyLanceCount"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"1")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Overrides the number of ally/employer AL lances that will spawn.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AllyLances"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'["Generic_Light_Battle_Lance"]')),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Manually specifies the exact MC lance or LanceDef you want to spawn for the ally/employer AL lances that spawn.")))),Object(l.b)("h2",{id:"extended-lances"},"Extended Lances"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true")," or ",Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If EL config is provided then ",Object(l.b)("inlineCode",{parentName:"td"},"Enable")," is required.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TargetLanceSize"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"6")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Overrides the number of enemy/target units in a lance.",Object(l.b)("br",null),Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"DEPRECATION"),": Previously ",Object(l.b)("inlineCode",{parentName:"td"},"EnemyLanceSize"),". Still works but is deprecated.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"EmployerLanceSize"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"5")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Overrides the number of ally/employer units in a lance.",Object(l.b)("br",null),Object(l.b)("br",null),Object(l.b)("strong",{parentName:"td"},"DEPRECATION"),": Previously ",Object(l.b)("inlineCode",{parentName:"td"},"AllyLanceSize"),". Still works but is deprecated.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TargetAllyLanceSize"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"5")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Overrides the number of target ally units in a lance.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"EmployerAllyLanceSize"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"5")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Overrides the number of employer ally units in a lance.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"HostileToAllLanceSize"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"5")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Overrides the number of hostile to all units in a lance.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NeutralToAllLanceSize"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"5")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Overrides the number of neutral to all units in a lance.")))),Object(l.b)("h2",{id:"extended-boundaries"},"Extended Boundaries"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true")," or ",Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If EB config is provided then ",Object(l.b)("inlineCode",{parentName:"td"},"Enable")," is required.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IncreaseBoundarySizeByPercentage"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"0.5")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Overrides the percentrage to increase the boundary size for this contract. Supports values 0 to 1.")))))}d.isMDXComponent=!0},288:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n),l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},c=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)};var i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},o=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,o=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),d=b(a),O=n,j=d[c+"."+O]||d[O]||i[O]||l;return a?r.a.createElement(j,Object.assign({},{ref:t},o,{components:a})):r.a.createElement(j,Object.assign({},{ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=o;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var d=2;d<l;d++)b[d]=a[d];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"}}]);