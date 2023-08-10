(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{223:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),o=n(6),i=(n(0),n(295)),l={id:"release-1.3.0",title:"Release v1.3.0",author:"Richard 'CWolf' Griffiths",author_title:"Developer",author_url:"https://github.com/cwolfs",author_image_url:"https://avatars0.githubusercontent.com/u/7622361",tags:["changelog","release","v1.3.0"]},r=[{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Improvements",id:"improvements",children:[]},{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]}],s={permalink:"/blog/release-1.3.0",source:"@site/blog\\2021-10-27-release-1-3.0.md",description:"This release fixes various bugs and adds various enhancements.",date:"2021-10-27T00:00:00.000Z",tags:[{label:"changelog",permalink:"/blog/tags/changelog"},{label:"release",permalink:"/blog/tags/release"},{label:"v1.3.0",permalink:"/blog/tags/v-1-3-0"}],title:"Release v1.3.0",prevItem:{title:"Release v1.3.1",permalink:"/blog/release-1.3.1"},nextItem:{title:"Mission Control Designer",permalink:"/blog/mission-control-designer"}},c={rightToc:r,metadata:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This release fixes various bugs and adds various enhancements."),Object(i.b)("p",null,"The full release diff can be seen ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CWolfs/MissionControl/pull/459/files"}),"here")),Object(i.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/444"}),"Story Support: Fixed Boundary Detection Issue"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Improved how the boundary game object is grabbed for boundary related processing"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/445"}),"Duo Duel: Fixed broken player pilot death prevention system"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Fixed ",Object(i.b)("inlineCode",{parentName:"li"},"YearlyTussle")," and ",Object(i.b)("inlineCode",{parentName:"li"},"FestiveCouple"),"'s player pilot death prevention system"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/452"}),"Additional Lances: Fixed cases where direct LanceDef references failed"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Sometimes if a direct LanceDef was used and it was not already loaded in memory it would fail and not grab it from the file system"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/458"}),"Contract Types: Fixed various non-critical spelling mistakes in Blackout, Solo Duel and Duo Duel"))),Object(i.b)("h2",{id:"improvements"},"Improvements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/450"}),"Additional Lances: Added a per-contract override to manually specify the Additional Lance(s) dropping"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This acts as a middle ground between dynamic AL and custom contract types. You can use a per-contract override for your contract and manually specify the dropping ally and enemy Additional Lances"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/446"}),"Additional Lances: Support higher than difficulty 10 for config files"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"MC used to only look for AL config ",Object(i.b)("inlineCode",{parentName:"li"},"difficulty1.json")," up to ",Object(i.b)("inlineCode",{parentName:"li"},"difficulty10.json"),". Now it has unlimited search for difficulties."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/448"}),"Additional Lances: Added Drop Weight Influence maximum influence caps"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Added an absolute max value for Drop Weight Influence Enemy and Ally settings that an influence value can go to."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/455"}),"Contract Type Builder: Improved 'Mount On' positioning")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/456"}),"Contract Type Builder: Added custom MC trigger support for Dialogues")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/457"}),"Contract Types: Added optimisation for contract selection related to custom contract types"))),Object(i.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If you're using MC without a modpack and none of your own changes, just delete the MC folder and move the new one into your mods folder"),Object(i.b)("li",{parentName:"ul"},"If you're using MC as part of a modpack, let the modpack authors update MC for you (using the below guide)"),Object(i.b)("li",{parentName:"ul"},"If you're using MC without a modpack but you've made some of your own changes to the configs, or you're a modpack author:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Copy into your ",Object(i.b)("inlineCode",{parentName:"li"},"Mods/MissionControl")," folder",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"MissionControl.dll")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mod.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"config/Contracts/My_FP_Contract_ID_Example.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"contractTypeBuilds/Blackout/common.jsonc")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"contractTypeBuilds/Blackout/mountainhold_lunar.jsonc ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"contractTypeBuilds/DuoDuel/common.jsonc")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"contractTypeBuilds/SoloDuel/common.jsonc")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"overrides/contracts/duoduel/DuoDuel_FestiveCouple.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"overrides/contracts/duoduel/DuoDuel_YearlyTussle.json")),Object(i.b)("li",{parentName:"ul"},"Edit ",Object(i.b)("inlineCode",{parentName:"li"},"settings.json")," (and/or your ",Object(i.b)("inlineCode",{parentName:"li"},"settings.user.json")," / ",Object(i.b)("inlineCode",{parentName:"li"},"settings.modpack.json")," overrides) with the following:")))))),Object(i.b)("h4",{id:"add-the-following-under-the-additionallancesdropweightinfluence-block"},"Add the following under the ",Object(i.b)("inlineCode",{parentName:"h4"},"AdditionalLances/DropWeightInfluence")," block"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"EnemySpawnInfluenceMax": 0.9,\n"AllySpawnInfluenceMax": 0.9,\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Specific for RT modpack")),Object(i.b)("p",null,"Since you had an early release with the Drop Weight Influence maximum - no need to change your custom config for that feature."))}u.isMDXComponent=!0},295:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a),i=o.a.createContext({}),l=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},r=function(e){var t=l(e.components);return o.a.createElement(i.Provider,{value:t},e.children)};var s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},c=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),u=l(n),b=a,p=u[r+"."+b]||u[b]||s[b]||i;return n?o.a.createElement(p,Object.assign({},{ref:t},c,{components:n})):o.a.createElement(p,Object.assign({},{ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var u=2;u<i;u++)l[u]=n[u];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);