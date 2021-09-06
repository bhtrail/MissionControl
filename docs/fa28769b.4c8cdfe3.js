(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{254:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"rightToc",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),l=(a(0),a(260)),i={id:"set-team-by-lance-spawner-guid-result",title:"Set Team By Lance Spawner Guid Result",sidebar_label:"Set Team By Lance Spawner Guid"},b=[{value:"Properties",id:"properties",children:[]},{value:"Example",id:"example",children:[]}],c={id:"contract-builder-api/trigger-results/set-team-by-lance-spawner-guid-result",title:"Set Team By Lance Spawner Guid Result",description:"The `SetTeamByLanceSpawnerGuid` result sets the team of units by their `LanceSpawnerGameLogic` Guid.\r",source:"@site/docs\\contract-builder-api\\trigger-results\\set-team-by-lance-spawner-guid-result.md",permalink:"/docs/contract-builder-api/trigger-results/set-team-by-lance-spawner-guid-result",sidebar_label:"Set Team By Lance Spawner Guid",sidebar:"docs",previous:{title:"Set State Result",permalink:"/docs/contract-builder-api/trigger-results/set-state-result"},next:{title:"Set Team By Tag Result",permalink:"/docs/contract-builder-api/trigger-results/set-team-by-tag-result"}},u={rightToc:b,metadata:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"SetTeamByLanceSpawnerGuid")," result sets the team of units by their ",Object(l.b)("inlineCode",{parentName:"p"},"LanceSpawnerGameLogic")," Guid."),Object(l.b)("p",null,"This can be used to change the team of mechs, turrets or any other unit that spawns from a ",Object(l.b)("inlineCode",{parentName:"p"},"LanceSpawnerGameLogic")," (like in some modpacks - vehicles)."),Object(l.b)("h2",{id:"properties"},"Properties"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"SetTeamByLanceSpawnerGuid")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RegionGuid"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Guid of the ",Object(l.b)("inlineCode",{parentName:"td"},"Region"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UnitType"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type of Unit to tag.",Object(l.b)("br",null),Object(l.b)("br",null),"Current supports: ",Object(l.b)("inlineCode",{parentName:"td"},"Building"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NumberOfUnits"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"1")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number of units to tag")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tags"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tags to add to units")))),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "Type": "TagUnitsInRegion",\n  "RegionGuid": "21a03616-c88b-4edd-a9a9-b4dd54b46d6c",\n  "UnitType": "Building",\n  "NumberOfUnits": 4,\n  "Tags": ["defend_building_3b"]\n}\n')))}p.isMDXComponent=!0},260:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n),l=r.a.createContext({}),i=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},b=function(e){var t=i(e.components);return r.a.createElement(l.Provider,{value:t},e.children)};var c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,u=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),p=i(a),d=n,o=p[b+"."+d]||p[d]||c[d]||l;return a?r.a.createElement(o,Object.assign({},{ref:t},u,{components:a})):r.a.createElement(o,Object.assign({},{ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var p=2;p<l;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);