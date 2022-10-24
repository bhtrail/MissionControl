(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"default",(function(){return c}));var a=n(2),r=n(6),o=(n(0),n(288)),i={id:"release-1.5.1",title:"Release v1.5.1",author:"Richard 'CWolf' Griffiths",author_title:"Developer",author_url:"https://github.com/cwolfs",author_image_url:"https://avatars0.githubusercontent.com/u/7622361",tags:["changelog","release","v1.5.1"]},l=[{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes",children:[]},{value:"\ud83c\udd99 Upgrade Instructions",id:"-upgrade-instructions",children:[]}],u={permalink:"/blog/release-1.5.1",source:"@site/blog\\2022-10-24-release-1.5.1.md",description:"This release fixes a single bug mentioned below that caused an infinite spinner when returning from a contract that didn't have MC running on it.",date:"2022-10-24T00:00:00.000Z",tags:[{label:"changelog",permalink:"/blog/tags/changelog"},{label:"release",permalink:"/blog/tags/release"},{label:"v1.5.1",permalink:"/blog/tags/v-1-5-1"}],title:"Release v1.5.1",nextItem:{title:"Release v1.5.0",permalink:"/blog/release-1.5.0"}},s={rightToc:l,metadata:u};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This release fixes a single bug mentioned below that caused an infinite spinner when returning from a contract that didn't have MC running on it."),Object(o.b)("p",null,"The full release diff can be at the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CWolfs/MissionControl/pull/554"}),"v1.5.1 pull request"),"."),Object(o.b)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug Fixes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/552"}),"Data Cleanup: RestoreFromCopy cleanup approach caused infinite spinner when MC was not allowed to run"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"When Mission Control wasn't running for a contract the data backup wasn't running. When the contract ended the data backup caused an infinite spinner because there was no data to restore and MC errored.")))),Object(o.b)("h2",{id:"-upgrade-instructions"},"\ud83c\udd99 Upgrade Instructions"),Object(o.b)("p",null,"This update is just a dll and mod.json update."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you're using MC without a modpack and none of your own changes, just delete the MC folder and move the new one into your mods folder"),Object(o.b)("li",{parentName:"ul"},"If you're using MC as part of a modpack, let the modpack authors update MC for you (using the below guide)"),Object(o.b)("li",{parentName:"ul"},"If you're using MC without a modpack but you've made some of your own changes to the configs, or you're a modpack author:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Copy into your Mods/MissionControl folder",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"MissionControl.dll"),Object(o.b)("li",{parentName:"ul"},"mod.json")))))))}c.isMDXComponent=!0},288:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return c}));var a=n(0),r=n.n(a),o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),c=i(n),p=a,d=c[l+"."+p]||c[p]||u[p]||o;return n?r.a.createElement(d,Object.assign({},{ref:t},s,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);