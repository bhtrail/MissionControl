(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{229:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(285)),i={id:"release-1.2.1",title:"Release v1.2.1",author:"Richard 'CWolf' Griffiths",author_title:"Developer",author_url:"https://github.com/cwolfs",author_image_url:"https://avatars0.githubusercontent.com/u/7622361",tags:["changelog","release","v1.2.1"]},l=[{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Improvements",id:"improvements",children:[]},{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]}],s={permalink:"/blog/release-1.2.1",source:"@site/blog\\2021-06-23-release-1.2.1.md",description:"This is a minor bug fix release for some edge case bugs.",date:"2021-06-23T00:00:00.000Z",tags:[{label:"changelog",permalink:"/blog/tags/changelog"},{label:"release",permalink:"/blog/tags/release"},{label:"v1.2.1",permalink:"/blog/tags/v-1-2-1"}],title:"Release v1.2.1",prevItem:{title:"Bye Nexus",permalink:"/blog/bye-nexus"},nextItem:{title:"Release v1.2.0",permalink:"/blog/release-1.2.0"}},c={rightToc:l,metadata:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is a minor bug fix release for some edge case bugs."),Object(o.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/440"}),"Infinite Loading: Contracts with Abandoned Flashpoints"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"If a Flashpoint was abandoned then it still remains the ",Object(o.b)("inlineCode",{parentName:"li"},"ActiveFlashpoint")," in the game. Due to this an assumption I made causes a crash as an abandoned flashpoint doesn't have any active contracts")))),Object(o.b)("h2",{id:"improvements"},"Improvements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/425"}),"Exposed Lance Divergence check values in the settings"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Required for support amongst the various modpacks as one solution doesn't fit all")))),Object(o.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you're using MC without a modpack and none of your own changes, just delete the MC folder and move the new one into your mods folder"),Object(o.b)("li",{parentName:"ul"},"If you're using MC as part of a modpack, let the modpack authors update MC for you (using the below guide)"),Object(o.b)("li",{parentName:"ul"},"If you're using MC without a modpack but you've made some of your own changes to the configs, or you're a modpack author:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Copy into your ",Object(o.b)("inlineCode",{parentName:"li"},"Mods/MissionControl")," folder",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"MissionControl.dll")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mod.json")),Object(o.b)("li",{parentName:"ul"},"Edit ",Object(o.b)("inlineCode",{parentName:"li"},"settings.json")," (and/or your ",Object(o.b)("inlineCode",{parentName:"li"},"settings.user.json")," / ",Object(o.b)("inlineCode",{parentName:"li"},"settings.modpack.json")," overrides) with the following:")))))),Object(o.b)("h4",{id:"add-the-following-misc-block-under-the-top-level-spawners-block"},"Add the following ",Object(o.b)("inlineCode",{parentName:"h4"},"Misc")," block under the top-level ",Object(o.b)("inlineCode",{parentName:"h4"},"Spawners")," block"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'  "Misc": {\n    "LanceSelectionDivergenceOverride": {\n      "Enable": true,\n      "Divergence": 20\n    }\n  }\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Specific for RT modpack")),Object(o.b)("p",null,"For RT modpack authors, or any modpack that uses custom high difficulty value lances like RT, use this block instead (or experiment with much higher divergence values):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'  "Misc": {\n    "LanceSelectionDivergenceOverride": {\n      "Enable": false\n    }\n  }\n')))}u.isMDXComponent=!0},285:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a),o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},c=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),u=i(n),b=a,p=u[l+"."+b]||u[b]||s[b]||o;return n?r.a.createElement(p,Object.assign({},{ref:t},c,{components:n})):r.a.createElement(p,Object.assign({},{ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);