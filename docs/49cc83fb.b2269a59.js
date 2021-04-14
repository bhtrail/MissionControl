(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),o=n(6),l=(n(0),n(223)),r={id:"release-1.0.2",title:"Release v1.0.2",author:"Richard 'CWolf' Griffiths",author_title:"Developer",author_url:"https://github.com/cwolfs",author_image_url:"https://avatars0.githubusercontent.com/u/7622361",tags:["changelog","release","v1.0.2"]},i=[{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Upgrade Instructions",id:"upgrade-instructions",children:[{value:"Replace <code>settings.json</code> section <code>DropWeightInfluence</code> with",id:"replace-settingsjson-section-dropweightinfluence-with",children:[]}]}],c={permalink:"/blog/release-1.0.2",source:"@site/blog\\2020-05-20-release-1.0.2.md",description:"This release fixes mainly around Blackout contract type bugs and solo/duo duel contract type balances.",date:"2020-05-20T00:00:00.000Z",tags:[{label:"changelog",permalink:"/blog/tags/changelog"},{label:"release",permalink:"/blog/tags/release"},{label:"v1.0.2",permalink:"/blog/tags/v-1-0-2"}],title:"Release v1.0.2",prevItem:{title:"Release v1.0.3",permalink:"/blog/release-1.0.3"},nextItem:{title:"Release v1.0.1",permalink:"/blog/release-1.0.1"}},u={rightToc:i,metadata:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This release fixes mainly around Blackout contract type bugs and solo/duo duel contract type balances."),Object(l.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Blackout: Contracts ",Object(l.b)("inlineCode",{parentName:"li"},"Heavy Static")," and ",Object(l.b)("inlineCode",{parentName:"li"},"Unknown Cause")," would sometimes not complete successfully"),Object(l.b)("li",{parentName:"ul"},"Blackout: Fixed Dynamic Withdraw feature not working"),Object(l.b)("li",{parentName:"ul"},"Blackout: Various dialogue fixes (Thanks @NickAragua and Cargo)"),Object(l.b)("li",{parentName:"ul"},"Solo/Duo Duel: Fixed issue with vehicles spawning"),Object(l.b)("li",{parentName:"ul"},"Solo Duel: Fixed OpFor selection being too strong/weak"),Object(l.b)("li",{parentName:"ul"},"Additional Lances: Yet another attempt to fix the locale reward issue being 100 times higher than it should"),Object(l.b)("li",{parentName:"ul"},"Additional Lances: Reworked ",Object(l.b)("inlineCode",{parentName:"li"},"DropWeightInfluence")," to be more inline with the proposal by the RT team"),Object(l.b)("li",{parentName:"ul"},"Extended Lances: Fixed difficulty modifications being processed too late")),Object(l.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"If you're using MC without a modpack and none of your own changes, just delete the MC folder and move the new one into your mods folder"),Object(l.b)("li",{parentName:"ul"},"If you're using MC as part of a modpack, let the modpack authors update MC for you (using the below guide)"),Object(l.b)("li",{parentName:"ul"},"If you're using MC without a modpack but you've made some of your own changes to the configs, or you're a modpack author:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Copy into your ",Object(l.b)("inlineCode",{parentName:"li"},"Mods/MissionControl")," folder",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"MissionControl.dll")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mod.json")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"contractTypeBuilds/Blackout/common.jsonc")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"overrides/contracts")," folder and overwrite all")))))),Object(l.b)("h3",{id:"replace-settingsjson-section-dropweightinfluence-with"},"Replace ",Object(l.b)("inlineCode",{parentName:"h3"},"settings.json")," section ",Object(l.b)("inlineCode",{parentName:"h3"},"DropWeightInfluence")," with"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"DropWeightInfluence": {\n  "Enable": false,\n  "EnemySpawnInfluencePerHalfSkullAbove": 0.1,\n  "AllySpawnInfluencePerHalfSkullAbove": -0.1,\n  "EnemySpawnInfluencePerHalfSkullBelow": 0.1,\n  "AllySpawnInfluencePerHalfSkullBelow": -0.1\n},\n')))}s.isMDXComponent=!0},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var a=n(0),o=n.n(a),l=o.a.createContext({}),r=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=r(e.components);return o.a.createElement(l.Provider,{value:t},e.children)};var c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),s=r(n),p=a,b=s[i+"."+p]||s[p]||c[p]||l;return n?o.a.createElement(b,Object.assign({},{ref:t},u,{components:n})):o.a.createElement(b,Object.assign({},{ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var s=2;s<l;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);