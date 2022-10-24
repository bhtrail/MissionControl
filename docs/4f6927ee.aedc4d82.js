(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(2),r=a(6),o=(a(0),a(288)),i={id:"release-1.3.1",title:"Release v1.3.1",author:"Richard 'CWolf' Griffiths",author_title:"Developer",author_url:"https://github.com/cwolfs",author_image_url:"https://avatars0.githubusercontent.com/u/7622361",tags:["changelog","release","v1.3.1"]},l=[{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Improvements",id:"improvements",children:[]},{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]}],s={permalink:"/blog/release-1.3.1",source:"@site/blog\\2021-12-13-release-1.3.1.md",description:"This release focuses on compatibility enhancements and some minor bug fixes.",date:"2021-12-13T00:00:00.000Z",tags:[{label:"changelog",permalink:"/blog/tags/changelog"},{label:"release",permalink:"/blog/tags/release"},{label:"v1.3.1",permalink:"/blog/tags/v-1-3-1"}],title:"Release v1.3.1",prevItem:{title:"Release v1.3.2",permalink:"/blog/release-1.3.2"},nextItem:{title:"Release v1.3.0",permalink:"/blog/release-1.3.0"}},u={rightToc:l,metadata:s};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This release focuses on compatibility enhancements and some minor bug fixes."),Object(o.b)("p",null,"The full release diff can be at the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/CWolfs/MissionControl/pull/468"}),"v1.3.1 pull request"),"."),Object(o.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/445"}),"Duo Duel: Fixed broken player pilot death prevention system"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Fixed ",Object(o.b)("inlineCode",{parentName:"li"},"FestiveCouple"),"'s player pilot death prevention system again"),Object(o.b)("li",{parentName:"ul"},"This wasn't fully fixed in v1.3.0 for ",Object(o.b)("inlineCode",{parentName:"li"},"FestiveCouple")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/461"}),"Additional Lances: Fixed Support Lance objective starting at '2' instead of '1'"))),Object(o.b)("h2",{id:"improvements"},"Improvements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/467"}),"ModTek v2 Support: Added support for ModTek v2")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/463"}),"Improved Deferred Loading of Assets"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Older system didn't care what else was loading. Now properly checks to fit itself in between other assets loading"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/465"}),"Improved CAC Compatibility"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Fixed a very rare situation where loading of assets by MC could deadlock loading careers or skirmish")))),Object(o.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you're using MC without a modpack and none of your own changes, just delete the MC folder and move the new one into your mods folder"),Object(o.b)("li",{parentName:"ul"},"If you're using MC as part of a modpack, let the modpack authors update MC for you (using the below guide)"),Object(o.b)("li",{parentName:"ul"},"If you're using MC without a modpack but you've made some of your own changes to the configs, or you're a modpack author:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Copy into your ",Object(o.b)("inlineCode",{parentName:"li"},"Mods/MissionControl")," folder",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"MissionControl.dll")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mod.json")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"overrides/contracts/duoduel/DuoDuel_FestiveCouple.json"))))))))}c.isMDXComponent=!0},288:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return c}));var n=a(0),r=a.n(n),o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},l=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),c=i(a),b=n,p=c[l+"."+b]||c[b]||s[b]||o;return a?r.a.createElement(p,Object.assign({},{ref:t},u,{components:a})):r.a.createElement(p,Object.assign({},{ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);