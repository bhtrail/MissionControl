(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{116:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"default",(function(){return o}));var n=a(2),r=a(6),b=(a(0),a(288)),l={id:"ai-orders",title:"AI Orders",sidebar_label:"AI Orders"},i=[{value:"StayInsideRegion",id:"stayinsideregion",children:[]},{value:"MagicKnowledgeByTag",id:"magicknowledgebytag",children:[]},{value:"PrioritiseTaggedUnit",id:"prioritisetaggedunit",children:[]}],c={id:"contract-builder-api/ai-orders",title:"AI Orders",description:"An AI order is used for a lance or a lance unit. An order helps guide the AI to do something specific such as attack buildings or move to and stay within a region.\r",source:"@site/docs\\contract-builder-api\\ai-orders.md",permalink:"/docs/contract-builder-api/ai-orders",sidebar_label:"AI Orders",sidebar:"docs",previous:{title:"Combat State",permalink:"/docs/contract-builder-api/nodes/combat-state"},next:{title:"Overrides",permalink:"/docs/contract-builder-api/overrides"}},d={rightToc:i,metadata:c};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"An AI order is used for a lance or a lance unit. An order helps guide the AI to do something specific such as attack buildings or move to and stay within a region."),Object(b.b)("p",null,"It can be set as a starting order by the lance spawner or, in upcoming releases, an ",Object(b.b)("inlineCode",{parentName:"p"},"IssueOrder")," and similar results will be exposed to be used to set orders using triggers."),Object(b.b)("h2",{id:"stayinsideregion"},"StayInsideRegion"),Object(b.b)("p",null,"This order makes the AI go to and stay within a specific region."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type of AI order")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RegionGuid"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UUID of the region to stay within")))),Object(b.b)("h4",{id:"example"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "Type": "StayInsideRegion",\n  "RegionGuid": "21a03616-c88b-4edd-a9a9-b4dd54b46d6c"\n}\n')),Object(b.b)("h2",{id:"magicknowledgebytag"},"MagicKnowledgeByTag"),Object(b.b)("p",null,"This order allows the AI to granted sight of the specified units by tag. This is often crucial for enemy AI to be aware of the player so they can act/move without being visible to the player."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type of AI order")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tags"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Simple")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the tags of any building or unit that the AI should have knowledge of")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Action"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Add")," or ",Object(b.b)("inlineCode",{parentName:"td"},"Remove")," knowledge")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MustMatchAll"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Must all the provided tags be matched? If ",Object(b.b)("inlineCode",{parentName:"td"},"false")," (default) then if any are matched then this will be applied")))),Object(b.b)("h4",{id:"example-1"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "Type": "MagicKnowledgeByTag",\n  "Action": "Add",\n  "Tags": ["Player 1"]\n}\n')),Object(b.b)("h2",{id:"prioritisetaggedunit"},"PrioritiseTaggedUnit"),Object(b.b)("p",null,"This order forces the AI to priortise certain units by tag. This is required if you wish the AI to attack buildings."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Dialogue")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type of node")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tags"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the tags of any building or unit that the AI should prioritise")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Priority"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Priority. The higher the number the higher the priority.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MustMatchAll"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Must all the provided tags be matched? If ",Object(b.b)("inlineCode",{parentName:"td"},"false")," (default) then if any are matched then this will be applied")))),Object(b.b)("h4",{id:"example-2"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "Type": "PrioritiseTaggedUnit",\n  "Tags": ["defend_building_3b"],\n  "Priority": 1\n}\n')))}o.isMDXComponent=!0},288:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o}));var n=a(0),r=a.n(n),b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},i=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)};var c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),o=l(a),p=n,O=o[i+"."+p]||o[p]||c[p]||b;return a?r.a.createElement(O,Object.assign({},{ref:t},d,{components:a})):r.a.createElement(O,Object.assign({},{ref:t},d))}));function o(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);