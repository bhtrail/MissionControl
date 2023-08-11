(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{217:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a(2),o=a(6),r=(a(0),a(295)),i={id:"release-1.5.2",title:"Release v1.5.2",author:"Richard 'CWolf' Griffiths",author_title:"Developer",author_url:"https://github.com/cwolfs",author_image_url:"https://avatars0.githubusercontent.com/u/7622361",tags:["changelog","release","v1.5.2"]},s=[{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes",children:[]},{value:"\ud83c\udd99 Upgrade Instructions",id:"-upgrade-instructions",children:[]}],l={permalink:"/blog/release-1.5.2",source:"@site/blog\\2023-08-10-release-1.5.2.md",description:"This very minor release just fixes some position issues in Blackout maps.",date:"2023-08-10T00:00:00.000Z",tags:[{label:"changelog",permalink:"/blog/tags/changelog"},{label:"release",permalink:"/blog/tags/release"},{label:"v1.5.2",permalink:"/blog/tags/v-1-5-2"}],title:"Release v1.5.2",nextItem:{title:"ConverseTek Release v1.4.0",permalink:"/blog/conversetek-release-1.4.0"}},u={rightToc:s,metadata:l};function c(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This very minor release just fixes some position issues in Blackout maps."),Object(r.b)("p",null,"For detailed documentation, visit the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.missioncontrolmod.com"}),"Mission Control Website"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE: This release is only to officially release out the two hotfix files that were in the MC discord for over half a year. If you already have those there is no need for you to download this release.")),Object(r.b)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug Fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/555"}),"Blackout: Badlands Map - Phase 2 Event 2 invading lance units spawn on top of each other when Random Spawns is off")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/557"}),"Blackout: Badlands Map - Player spawns lance units spawn on top of each other with Random Spawns off")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/559"}),"Blackout: Lowlands Map - Phase 2 Event 2 invading lance units spawn on top of each other when Random Spawns is off"))),Object(r.b)("h2",{id:"-upgrade-instructions"},"\ud83c\udd99 Upgrade Instructions"),Object(r.b)("p",null,"This update is just a mod.json and two contractTypeBuild files update."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If you're using MC without a modpack and none of your own changes, just delete the MC folder and move the new one into your mods folder"),Object(r.b)("li",{parentName:"ul"},"If you're using MC as part of a modpack, let the modpack authors update MC for you (using the below guide)"),Object(r.b)("li",{parentName:"ul"},"If you're using MC without a modpack but you've made some of your own changes to the configs, or you're a modpack author:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Copy into your Mods/MissionControl folder",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"mod.json"))))),Object(r.b)("li",{parentName:"ul"},"Copy and overwrite:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"contractTypeBuilds/Blackout/story2_badlandsparched.jsonc")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"contractTypeBuilds/Blackout/story7_lowlandsspring.jsonc"))))),Object(r.b)("p",null,"NOTE: There was no dll rebuild for this release so the version on that still says v1.5.1. This is not an issue."))}c.isMDXComponent=!0},295:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return c}));var n=a(0),o=a.n(n),r=o.a.createContext({}),i=function(e){var t=o.a.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},s=function(e){var t=i(e.components);return o.a.createElement(r.Provider,{value:t},e.children)};var l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),c=i(a),p=n,b=c[s+"."+p]||c[p]||l[p]||r;return a?o.a.createElement(b,Object.assign({},{ref:t},u,{components:a})):o.a.createElement(b,Object.assign({},{ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);