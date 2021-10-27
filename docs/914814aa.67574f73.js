(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{190:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),r=(n(0),n(263)),o={id:"structure",title:"Understanding Structure",sidebar_label:"Understanding Structure"},c=[{value:"Common",id:"common",children:[{value:"Plots",id:"plots",children:[]},{value:"Chunks",id:"chunks",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Map Specific",id:"map-specific",children:[{value:"Encounter Layer Id",id:"encounter-layer-id",children:[]},{value:"Overrides",id:"overrides",children:[]}]}],l={id:"contract-builder/structure",title:"Understanding Structure",description:"## Common\r",source:"@site/docs\\contract-builder\\structure.md",permalink:"/docs/contract-builder/structure",sidebar_label:"Understanding Structure",sidebar:"docs",previous:{title:"Setup",permalink:"/docs/contract-builder/setup"},next:{title:"Chunks",permalink:"/docs/contract-builder-api/chunks"}},s={rightToc:c,metadata:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"common"},"Common"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"common.jsonc")," outlays all the general elements and logic for the contract type. Some structure is required, whilst others is flexible."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "Key": "SoloDuel", // Required. Links to the ContractType Name\n  "ContractObjective": [{}], // Optional. Not fully implemented in v1.0.0 yet so does nothing\n  "Plots": [\n    // Optional. Enables plots in the map. See the Plots section in the API\n  ],\n  "Chunks": [\n    // Required. Chunks go here. See the Chunks section in the API docs\n  ],\n  "Triggers": [\n    // Required. Triggers go here. See the Triggers section in the API docs\n  ]\n}\n')),Object(r.b)("h3",{id:"plots"},"Plots"),Object(r.b)("p",null,"BattleTech maps use a system called ",Object(r.b)("inlineCode",{parentName:"p"},"Plots"),". ",Object(r.b)("inlineCode",{parentName:"p"},"Plots")," are typically collections of buildings, or bases that help make vanilla maps seem a bit more dynamic. They are turned on and off by the HBS designer when they created each contract type on a map."),Object(r.b)("p",null,"From this section you can decide which plots you want to enable to help create varied experiences."),Object(r.b)("p",null,"Read the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/contract-builder-api/plots"}),"Plots API")," section for detailed information."),Object(r.b)("h3",{id:"chunks"},"Chunks"),Object(r.b)("p",null,"A chunk is a collection of game logic game objects which are related. A named chunk, e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"PlayerLance"),", often has special logic associated with it whilst using chunks purely as a logical collection of 'like' logics can also be used, e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"Container"),"."),Object(r.b)("p",null,"Under a chunk you create ",Object(r.b)("inlineCode",{parentName:"p"},"Node")," children. A node is a specific logic piece like the ability to place a ",Object(r.b)("inlineCode",{parentName:"p"},"Spawner")," or create an ",Object(r.b)("inlineCode",{parentName:"p"},"Objective"),"."),Object(r.b)("p",null,"Read the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/contract-builder-api/chunks"}),"Chunks API")," section for detailed information."),Object(r.b)("h3",{id:"triggers"},"Triggers"),Object(r.b)("p",null,"BattleTech's encounter system makes use of a ",Object(r.b)("inlineCode",{parentName:"p"},"Trigger"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Condition")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Result")," system."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("inlineCode",{parentName:"li"},"Trigger")," is an event that is sent out. For example, ",Object(r.b)("inlineCode",{parentName:"li"},"OnEncounterBegin"),", ",Object(r.b)("inlineCode",{parentName:"li"},"OnObjectiveUpdated")," or ",Object(r.b)("inlineCode",{parentName:"li"},"OnDialogueComplete")),Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("inlineCode",{parentName:"li"},"Condition")," is a check on a set criteria to determine if the linked ",Object(r.b)("inlineCode",{parentName:"li"},"Result")," should run. For example, if an objective's status is 'Success'"),Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("inlineCode",{parentName:"li"},"Result")," is an action that is taken. This can be anything like activate another ",Object(r.b)("inlineCode",{parentName:"li"},"Chunk"),", enable an ",Object(r.b)("inlineCode",{parentName:"li"},"Objective"),", change the ",Object(r.b)("inlineCode",{parentName:"li"},"Camera")," focus or fire artillery")),Object(r.b)("p",null,"Read the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/contract-builder-api/triggers"}),"Triggers API")," section for detailed information."),Object(r.b)("h2",{id:"map-specific"},"Map Specific"),Object(r.b)("p",null,"For every map the contract type is set up to run on a ",Object(r.b)("inlineCode",{parentName:"p"},".jsonc")," for map specific settings (most often positions and rotations), for example ",Object(r.b)("inlineCode",{parentName:"p"},"deathvalley_desert_open_area.jsonc")," (the name can be anything you want but it's a good idea to include the map name, biome and any other specifier)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'// This file overrides the contract type \'common.json\' file with map specific values (such as locations and rotations)\n{\n  "EncounterLayerId": "mapGeneral_frostySlopes_iTnd.d8bb1d16-3a64-40a9-a081-03a365fd0fcf", // Same Id set in the `EncounterLayerId`\n  "Overrides": [\n    // Required. Overrides go here, for example positions and rotations unique to the map\n  ]\n}\n')),Object(r.b)("h3",{id:"encounter-layer-id"},"Encounter Layer Id"),Object(r.b)("p",null,"This must be the exact ",Object(r.b)("inlineCode",{parentName:"p"},"EncounterLayerId")," set in your encounter layer you created (see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"setup"}),"Setup - Create an encounter layer"),"). This allows you to have multiple override files for the same map and same contact type if you created a second encounter layer for it."),Object(r.b)("h3",{id:"overrides"},"Overrides"),Object(r.b)("p",null,"This allows you to specify which information from ",Object(r.b)("inlineCode",{parentName:"p"},"common.jsonc")," to override. The format of overrides is the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.newtonsoft.com/json/help/html/QueryJsonSelectTokenJsonPath.htm"}),"Json.NET query/select system"),"."),Object(r.b)("p",null,"An example of information to override would be turning on a ",Object(r.b)("inlineCode",{parentName:"p"},"Plot")," specific to a map, setting the lance spawn positions or setting the encounter boundary size and position."),Object(r.b)("p",null,"Read the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/contract-builder-api/overrides"}),"Overrides API")," section for detailed information."))}p.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return p}));var a=n(0),i=n.n(a),r=i.a.createContext({}),o=function(e){var t=i.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=o(e.components);return i.a.createElement(r.Provider,{value:t},e.children)};var l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=o(n),d=a,b=p[c+"."+d]||p[d]||l[d]||r;return n?i.a.createElement(b,Object.assign({},{ref:t},s,{components:n})):i.a.createElement(b,Object.assign({},{ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<r;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);