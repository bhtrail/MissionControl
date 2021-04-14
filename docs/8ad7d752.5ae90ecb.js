(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"default",(function(){return c}));var o=n(2),a=n(6),r=(n(0),n(223)),l={id:"release-1.1.3",title:"Release v1.1.3",author:"Richard 'CWolf' Griffiths",author_title:"Developer",author_url:"https://github.com/cwolfs",author_image_url:"https://avatars0.githubusercontent.com/u/7622361",tags:["changelog","release","v1.1.3"]},i=[{value:"Improvements",id:"improvements",children:[]},{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Custom Contract Type Builder",id:"custom-contract-type-builder",children:[]},{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]}],u={permalink:"/blog/release-1.1.3",source:"@site/blog\\2020-09-01-release-1.1.3.md",description:"This is the final release of Mission Control by me, CWolf. It was a hard decision to make but after two and a half great years modding BattleTech - I've decided it's time for me to move on. Thank you all for the support and I'm glad you've enjoyed what Mission Control grew into. It's not without its faults but I'm very proud of the work I accomplished here.",date:"2020-09-01T00:00:00.000Z",tags:[{label:"changelog",permalink:"/blog/tags/changelog"},{label:"release",permalink:"/blog/tags/release"},{label:"v1.1.3",permalink:"/blog/tags/v-1-1-3"}],title:"Release v1.1.3",nextItem:{title:"Release v1.1.2",permalink:"/blog/release-1.1.2"}},s={rightToc:i,metadata:u};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This is the final release of Mission Control by me, CWolf. It was a hard decision to make but after two and a half great years modding BattleTech - I've decided it's time for me to move on. Thank you all for the support and I'm glad you've enjoyed what Mission Control grew into. It's not without its faults but I'm very proud of the work I accomplished here."),Object(r.b)("p",null,"Keep enjoying BattleTech and destroying your way through the Inner Sphere! Take care - it's been a pleasure. Signing off."),Object(r.b)("p",null,"This release adds some balance and fixes."),Object(r.b)("h2",{id:"improvements"},"Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Blackout: Changed the 'Trap' event in Phase 1 to reduce evasion by 3 instead of reduce it down to 0"),Object(r.b)("li",{parentName:"ul"},"Solo/Duo Duels: Some duels now prevent pilot death where the contract lore/story makes sense, there are:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Solo Duel - All Eyes On"),Object(r.b)("li",{parentName:"ul"},"Solo Duel - Life Lesson"),Object(r.b)("li",{parentName:"ul"},"Duo Duel - Festive Couple"),Object(r.b)("li",{parentName:"ul"},"Duo Duel - Yearly Tussle")))),Object(r.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Settings: Hot Drop Protection for Flashpoints didn't work"),Object(r.b)("li",{parentName:"ul"},"Per-ContractID Overrides: Specific contract overrides worked for enabling features but not disabling them from defaults")),Object(r.b)("h2",{id:"custom-contract-type-builder"},"Custom Contract Type Builder"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"New Result: ",Object(r.b)("inlineCode",{parentName:"li"},"ModifyLanceEvasionTicksByTag")," allows you to increase or reduce all tagged units' evasion by a set amount"),Object(r.b)("li",{parentName:"ul"},"New Node: ",Object(r.b)("inlineCode",{parentName:"li"},"DisablePilotDeath")," combat type node allows disabling of pilot death and, optionally, pilot injury during a contract if used")),Object(r.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If you're using MC without a modpack and none of your own changes, just delete the MC folder and move the new one into your mods folder"),Object(r.b)("li",{parentName:"ul"},"If you're using MC as part of a modpack, let the modpack authors update MC for you (using the below guide)"),Object(r.b)("li",{parentName:"ul"},"If you're using MC without a modpack but you've made some of your own changes to the configs, or you're a modpack author:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Copy into your ",Object(r.b)("inlineCode",{parentName:"li"},"Mods/MissionControl")," folder",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"MissionControl.dll")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"MissionControl.pdb")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"mod.json")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"contractTypeBuilds/Blackout/common.jsonc")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"contractTypeBuilds/SoloDuel/common.jsonc")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"contractTypeBuilds/DuoDuel/common.jsonc")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"overrides/contracts/duoduel/DuoDuel_FestiveCouple.json")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"overrides/contracts/duoduel/DuoDuel_YearlyTussle.json")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"overrides/contracts/soloduel/SoloDuel_AllEyesOn.json")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"overrides/contracts/soloduel/SoloDuel_LifeLesson.json"))))))))}c.isMDXComponent=!0},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var o=n(0),a=n.n(o),r=a.a.createContext({}),l=function(e){var t=a.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=l(e.components);return a.a.createElement(r.Provider,{value:t},e.children)};var u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),c=l(n),d=o,b=c[i+"."+d]||c[d]||u[d]||r;return n?a.a.createElement(b,Object.assign({},{ref:t},s,{components:n})):a.a.createElement(b,Object.assign({},{ref:t},s))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);