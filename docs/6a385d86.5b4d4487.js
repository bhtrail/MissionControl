(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{170:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(2),r=a(6),o=(a(0),a(285)),l={id:"release-1.4.1",title:"Release v1.4.1",author:"Richard 'CWolf' Griffiths",author_title:"Developer",author_url:"https://github.com/cwolfs",author_image_url:"https://avatars0.githubusercontent.com/u/7622361",tags:["changelog","release","v1.4.1"]},i=[{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes",children:[]},{value:"\ud83c\udd99 Upgrade Instructions",id:"-upgrade-instructions",children:[]}],s={permalink:"/blog/release-1.4.1",source:"@site/blog\\2022-02-20-release-1.4.1.md",description:"This release fixes some bugs related to the newly upgraded Extended Lances.",date:"2022-02-20T00:00:00.000Z",tags:[{label:"changelog",permalink:"/blog/tags/changelog"},{label:"release",permalink:"/blog/tags/release"},{label:"v1.4.1",permalink:"/blog/tags/v-1-4-1"}],title:"Release v1.4.1",prevItem:{title:"Release v1.4.2",permalink:"/blog/release-1.4.2"},nextItem:{title:"Release v1.4.0",permalink:"/blog/release-1.4.0"}},u={rightToc:i,metadata:s};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This release fixes some bugs related to the newly upgraded Extended Lances."),Object(o.b)("p",null,"The full release diff can be at the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/CWolfs/MissionControl/pull/501"}),"v1.4.1 pull request"),"."),Object(o.b)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug Fixes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/497"}),"Extended Lances: Lances with 0 unit spawn points broke map loading")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/498"}),"Extended Lances: A team's skipped lances could sometimes skip processing for all lances in that faction"))),Object(o.b)("h2",{id:"-upgrade-instructions"},"\ud83c\udd99 Upgrade Instructions"),Object(o.b)("p",null,"This update is just a dll and mod.json update."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you're using MC without a modpack and none of your own changes, just delete the MC folder and move the new one into your mods folder"),Object(o.b)("li",{parentName:"ul"},"If you're using MC as part of a modpack, let the modpack authors update MC for you (using the below guide)"),Object(o.b)("li",{parentName:"ul"},"If you're using MC without a modpack but you've made some of your own changes to the configs, or you're a modpack author:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Copy into your Mods/MissionControl folder",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"MissionControl.dll"),Object(o.b)("li",{parentName:"ul"},"mod.json")))))))}c.isMDXComponent=!0},285:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return c}));var n=a(0),r=a.n(n),o=r.a.createContext({}),l=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},i=function(e){var t=l(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),c=l(a),p=n,d=c[i+"."+p]||c[p]||s[p]||o;return a?r.a.createElement(d,Object.assign({},{ref:t},u,{components:a})):r.a.createElement(d,Object.assign({},{ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);