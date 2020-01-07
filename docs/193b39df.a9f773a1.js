(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{163:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n),o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},l=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),u=i(a),p=n,m=u[l+"."+p]||u[p]||c[p]||o;return a?r.a.createElement(m,Object.assign({},{ref:t},s,{components:a})):r.a.createElement(m,Object.assign({},{ref:t},s))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},95:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(6),o=(a(0),a(163)),i={id:"release-0.1.0",title:"Release v0.1.0",author:"Richard 'CWolf' Griffiths",author_title:"Developer",author_url:"https://github.com/cwolfs",author_image_url:"https://avatars0.githubusercontent.com/u/7622361",tags:["changelog","release","v0.1.0"]},l=[{value:"Major Features",id:"major-features",children:[]}],s={permalink:"/blog/release-0.1.0",source:"@site/blog\\2018-10-27-release-0.1.0.md",description:"This is the initial release for Mission Control.",date:"2018-10-27T00:00:00.000Z",tags:[{label:"changelog",permalink:"/blog/tags/changelog"},{label:"release",permalink:"/blog/tags/release"},{label:"v0.1.0",permalink:"/blog/tags/v-0-1-0"}],title:"Release v0.1.0",prevItem:{title:"Release v0.2.0",permalink:"/blog/release-0.2.0"}},c={rightToc:l,metadata:s},u="wrapper";function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(u,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is the initial release for Mission Control."),Object(o.b)("h2",{id:"major-features"},"Major Features"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Random spawns based on contract type"),Object(o.b)("li",{parentName:"ul"},"Additional lances. Enemy and ally lances will spawn based on contract type, biome type, percentage chances, maximum limits and lance configs."),Object(o.b)("li",{parentName:"ul"},"New AI - ",Object(o.b)("inlineCode",{parentName:"li"},"Follow Lance")," for allies on some contract type variations"),Object(o.b)("li",{parentName:"ul"},"Quick Skirmish - New menu item on the main menu that uses last used skirmish lance for a singleplayer fight"),Object(o.b)("li",{parentName:"ul"},"Mod Support - Allow other modders to submit their encounter rulesets for use in MC.")))}p.isMDXComponent=!0}}]);