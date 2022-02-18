(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),l=(n(0),n(274)),o={id:"release-1.4.0",title:"Release v1.4.0",author:"Richard 'CWolf' Griffiths",author_title:"Developer",author_url:"https://github.com/cwolfs",author_image_url:"https://avatars0.githubusercontent.com/u/7622361",tags:["changelog","release","v1.4.0"]},r=[{value:"\u2757 Extended Lances v2 Upgrade \u2757",id:"-extended-lances-v2-upgrade-",children:[]},{value:"\ud83d\ude80 Features",id:"-features",children:[]},{value:"\u26a1Improvements",id:"improvements",children:[]},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes",children:[]},{value:"\ud83d\udcdd Documentation / Website",id:"-documentation--website",children:[]},{value:"\ud83c\udd99 Upgrade Instructions",id:"-upgrade-instructions",children:[{value:"Under <code>ExtendedLances</code> add:",id:"under-extendedlances-add",children:[]},{value:"Under <code>ExtendedBoundaries/Overrides</code> add:",id:"under-extendedboundariesoverrides-add",children:[]}]}],c={permalink:"/blog/release-1.4.0",source:"@site/blog\\2022-02-18-release-1.4.0.md",description:"This release introduces Extended Lances version 2, a major upgrade to Extended Lances, and some minor bugfixes.",date:"2022-02-18T00:00:00.000Z",tags:[{label:"changelog",permalink:"/blog/tags/changelog"},{label:"release",permalink:"/blog/tags/release"},{label:"v1.4.0",permalink:"/blog/tags/v-1-4-0"}],title:"Release v1.4.0",nextItem:{title:"Release v1.3.2",permalink:"/blog/release-1.3.2"}},s={rightToc:r,metadata:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This release introduces Extended Lances version 2, a major upgrade to Extended Lances, and some minor bugfixes."),Object(l.b)("p",null,"The full release diff can be at the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CWolfs/MissionControl/pull/496"}),"v1.4.0 pull request"),"."),Object(l.b)("h2",{id:"-extended-lances-v2-upgrade-"},"\u2757 Extended Lances v2 Upgrade \u2757"),Object(l.b)("p",null,"As many of the features and fixes are related to EL - I'm drawing attention to it here. Some of the below fixes and improvements for EL v2 are covered below in the main changelog too."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/488"}),"Extended Lances v2 Upgrade"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Extended Lances has been given a major upgrade. There were some fundamental issues and limitations with EL that preventing some modders achieving the results they wanted. Now EL should have fewer bugs and more flexibility."),Object(l.b)("li",{parentName:"ul"},"Backwards compatible"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/assets/Extended_Lances_v2_Testing.pdf"}),"Extensively tested"))))),Object(l.b)("h2",{id:"-features"},"\ud83d\ude80 Features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/481"}),"Extended Lances: Support all other Teams"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"EL now supports TargetAlly, EmployerAlly, HostileToAll, NeutralToAll"),Object(l.b)("li",{parentName:"ul"},"This feature is on by default so modpacks might want to consider game balance"),Object(l.b)("li",{parentName:"ul"},"Support can be individually turned off in the ",Object(l.b)("inlineCode",{parentName:"li"},"settings.json")," in the EL section"),Object(l.b)("li",{parentName:"ul"},"Can be individually overridden with ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/features/per-contract-overrides"}),"per-contract overrides")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/484"}),"Extended Lances: Provide a way to force EL to allow specific LanceOverride set ups"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"A new ",Object(l.b)("inlineCode",{parentName:"li"},"settings.json")," property called ",Object(l.b)("inlineCode",{parentName:"li"},"ForceLanceOverrideSizeWithTag")," which controls this behaviour"),Object(l.b)("li",{parentName:"ul"},"When a LanceOverride (lance in the contract json) has this tag in its ",Object(l.b)("inlineCode",{parentName:"li"},"lanceTagSet/tagSetSourceFile")," then it will force EL to spawn this exact defined lance"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"lanceTagSet/tagSetSourceFile")," is not used in BattleTech so it's been adopted for this feature"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/483"}),"Extended Lances: Provide a way to force EL to allow specific LanceDef set ups"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"A new ",Object(l.b)("inlineCode",{parentName:"li"},"settings.json")," property called ",Object(l.b)("inlineCode",{parentName:"li"},"ForceLanceDefSizeWithTag")," which controls this behaviour"),Object(l.b)("li",{parentName:"ul"},"When a LanceDef has this tag in its ",Object(l.b)("inlineCode",{parentName:"li"},"LanceTags/tagSetSourceFile")," then it will force EL to spawn this exact defined lance"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"LanceTags/tagSetSourceFile")," is not used in BattleTech so it's been adopted for this feature"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/485"}),"Extended Lances: AutofillType setting"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"When EL autofills lances it has to decide how to handle units that are defined as empty (mechDef_None, vehicleDef_None)"),Object(l.b)("li",{parentName:"ul"},"A new ",Object(l.b)("inlineCode",{parentName:"li"},"settings.json")," property called ",Object(l.b)("inlineCode",{parentName:"li"},"AutofillType")," which controls this behaviour and it has two settings:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"RespectEmpty")," is the legacy and still the default behaviour. When a LanceOverride or LanceDef has empty units defined (e.g. mechDef_None, vehicleDef_None) then it will respect those and not autofill them."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"FillEmpty"),"is a new autofill behaviour. When a LanceOverride or LanceDef has empty units defined (e.g. mechDef_None, vehicleDef_None) then it will autofill and replace them so units will spawn in those slots."))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/494"}),"Extended Lances: AutofillStartingFromContractDifficulty setting"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"A new ",Object(l.b)("inlineCode",{parentName:"li"},"settings.json")," property under ",Object(l.b)("inlineCode",{parentName:"li"},"ExtendedLances")," called ",Object(l.b)("inlineCode",{parentName:"li"},"AutofillStartingFromContractDifficulty")),Object(l.b)("li",{parentName:"ul"},"To aid in a fairer early game, you can now control when Extended Lances autofills units in lances that are below the faction's EL ",Object(l.b)("inlineCode",{parentName:"li"},"LanceSize")," by setting a contract difficulty (real difficulty - not UI/visible difficulty) to start autofilling from"),Object(l.b)("li",{parentName:"ul"},"This does not affect LanceDefs that fill up to the faction's ",Object(l.b)("inlineCode",{parentName:"li"},"LanceSize")," themselves (e.g. modpack Clan LanceDefs up to 5 or 6 etc)"),Object(l.b)("li",{parentName:"ul"},"For those who don't want this feature - set it to ",Object(l.b)("inlineCode",{parentName:"li"},"1")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/486"}),"Extended Lances: AutofillUnitCopyType setting"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"At times EL needs to copy units to create a varied and interesting lance when autofilling it up to the Faction Size (or any overridden size). In this case EL tries to copy a 'Tagged' lance so to use this tagged UnitSpawnPointOverride and leverage the tags to provide variation. If there are no 'Tagged' lances available to copy it will use the defined behaviour in ",Object(l.b)("inlineCode",{parentName:"li"},"AutofillUnitCopyType")," in the settings.json."),Object(l.b)("li",{parentName:"ul"},"A new ",Object(l.b)("inlineCode",{parentName:"li"},"settings.json")," property called ",Object(l.b)("inlineCode",{parentName:"li"},"AutofillUnitCopyType")," which controls this behaviour and it has two settings:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"FirstInLance")," - The legacy behaviour. It would pick the first unit (index 0) and copy it (giving it new identify/clearing custom names etc)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"RandomInLance")," - The new behaviour and is now the default behaviour. It picks a random unit from the Lance to copy (giving it new identify/clearing custom names etc)")))))),Object(l.b)("h2",{id:"improvements"},"\u26a1Improvements"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/493"}),"Extended Boundaries: Ambush Convoy - Reduce increase from 30% to 20%"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Previously Ambush Convoy boundary increased by 30%. As players sometimes struggle to catch the convoy if the Random Spawn algorithm places them too far away the boundary increase is now reduced slightly to 20%")))),Object(l.b)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug Fixes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/482"}),"Extended Lance: LanceOverrides with fewer units than a selected LanceDef didn't populate all LanceDef units")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/472"}),"Extended Lances: LanceDefId being direct reference only added one extra lance instead of EL number")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/478"}),"Random Spawns: Blackout - Opposing Force Orientation Was Wrong")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/491"}),"Additional Lances: Incorrectly handling lanceExcludedTagSet"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"MC AL lances incorrectly added ",Object(l.b)("inlineCode",{parentName:"li"},"lanceExcludedTagSet")," to the ",Object(l.b)("inlineCode",{parentName:"li"},"lanceTagSet"),". This would cause incorrect lance selection behaviour for MC AL lances with tags"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/487"}),"Vanilla: When BT copies LanceDefs it didn't maintain the LanceTags 'tagSetSourceFile' data"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"When BT copies LanceDefs it would never maintain/preserve the ",Object(l.b)("inlineCode",{parentName:"li"},"tagSetSourceFile")," property. Since this property is never used in the game it isn't a problem, however, Since ELv2 uses it - it has been fixed")))),Object(l.b)("h2",{id:"-documentation--website"},"\ud83d\udcdd Documentation / Website"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Added ModTek v2 information in the setup page"),Object(l.b)("li",{parentName:"ul"},"Added per-contract override page"),Object(l.b)("li",{parentName:"ul"},"Added settings.json override with settings.modpack.json and settings.user.json in the settings page"),Object(l.b)("li",{parentName:"ul"},"Added ",Object(l.b)("inlineCode",{parentName:"li"},"SwapPlacement")," type ",Object(l.b)("inlineCode",{parentName:"li"},"EncounterStructure")," subtype node information in the contract builder API nodes area"),Object(l.b)("li",{parentName:"ul"},"Added ",Object(l.b)("inlineCode",{parentName:"li"},"CombatState")," type ",Object(l.b)("inlineCode",{parentName:"li"},"DisablePilotDeath")," subtype node information in the contract builder API nodes area"),Object(l.b)("li",{parentName:"ul"},"Updated Extended Lances information for version 2"),Object(l.b)("li",{parentName:"ul"},"Removed HBS mod loader information")),Object(l.b)("h2",{id:"-upgrade-instructions"},"\ud83c\udd99 Upgrade Instructions"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"If you're using MC without a modpack and none of your own changes, just delete the MC folder and move the new one into your mods folder"),Object(l.b)("li",{parentName:"ul"},"If you're using MC as part of a modpack, let the modpack authors update MC for you (using the below guide)"),Object(l.b)("li",{parentName:"ul"},"If you're using MC without a modpack but you've made some of your own changes to the configs, or you're a modpack author:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Copy into your Mods/MissionControl folder",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"MissionControl.dll"),Object(l.b)("li",{parentName:"ul"},"mod.json"),Object(l.b)("li",{parentName:"ul"},"config/Contracts/My_Contract_ID_Example.json"),Object(l.b)("li",{parentName:"ul"},"config/Contracts/My_FP_Contract_ID_Example.json")))))),Object(l.b)("p",null,"Add the following to your ",Object(l.b)("inlineCode",{parentName:"p"},"settings.json"),":"),Object(l.b)("h3",{id:"under-extendedlances-add"},"Under ",Object(l.b)("inlineCode",{parentName:"h3"},"ExtendedLances")," add:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"EnableForTargetAlly": true,\n"EnableForEmployerAlly": true,\n"EnableForHostileToAll": true,\n"EnableForNeutralToAll": true,\n"AutofillType": "RespectEmpty",\n"AutofillUnitCopyType": "RandomInLance",\n"AutofillStartingFromContractDifficulty": 3,\n"ForceLanceOverrideSizeWithTag": "mc_force_extended_lance",\n"ForceLanceDefSizeWithTag": "mc_force_extended_lance",\n')),Object(l.b)("p",null,"and update to have ",Object(l.b)("inlineCode",{parentName:"p"},"mc_no_extended_lance"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"SkipWhenExcludeTagsContain": ["mc_no_extended_lance", "no_extended_lance"],\n')),Object(l.b)("h3",{id:"under-extendedboundariesoverrides-add"},"Under ",Object(l.b)("inlineCode",{parentName:"h3"},"ExtendedBoundaries/Overrides")," add:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "ContractTypeName": "AmbushConvoy",\n  "IncreaseBoundarySizeByPercentage": 0.2\n}\n')))}b.isMDXComponent=!0},274:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a),l=i.a.createContext({}),o=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},r=function(e){var t=o(e.components);return i.a.createElement(l.Provider,{value:t},e.children)};var c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),b=o(n),d=a,u=b[r+"."+d]||b[d]||c[d]||l;return n?i.a.createElement(u,Object.assign({},{ref:t},s,{components:n})):i.a.createElement(u,Object.assign({},{ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var b=2;b<l;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);