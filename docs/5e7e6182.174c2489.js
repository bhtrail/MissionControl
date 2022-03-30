(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{158:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"rightToc",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(2),l=a(6),r=(a(0),a(274)),i={id:"extended-lances",title:"Extended Lances"},b=[{value:"Settings Breakdown",id:"settings-breakdown",children:[{value:"Lance Sizes",id:"lance-sizes",children:[]},{value:"Lance Sizes Data",id:"lance-sizes-data",children:[]}]},{value:"Faction Ids",id:"faction-ids",children:[]},{value:"Examples",id:"examples",children:[]}],c={id:"features/extended-lances",title:"Extended Lances",description:"Increase the sizes of lances where it makes sense. For the vanilla game this does nothing if the `LanceSizes` section has not been set up by a player or modpack. A player or modpack can set up Clan stars (5 mechs) or Comstar Demi-lances / Reinforced lances (6 mechs).\r",source:"@site/docs\\features\\extended-lances.md",permalink:"/docs/features/extended-lances",sidebar:"docs",previous:{title:"Encounter Rulesets",permalink:"/docs/features/encounter-rulesets"},next:{title:"Extended Boundaries",permalink:"/docs/features/extended-boundaries"}},o={rightToc:b,metadata:c};function d(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Increase the sizes of lances where it makes sense. For the vanilla game this does nothing if the ",Object(r.b)("inlineCode",{parentName:"p"},"LanceSizes")," section has not been set up by a player or modpack. A player or modpack can set up Clan stars (5 mechs) or Comstar Demi-lances / Reinforced lances (6 mechs)."),Object(r.b)("p",null,"This works for both vanilla spawn points for contract types and spawns created by Mission Control."),Object(r.b)("p",null,"Extended Lances can change the lance size of vanilla lance spawns and ones created with Mission Control's ",Object(r.b)("inlineCode",{parentName:"p"},"Additional Lances")," feature."),Object(r.b)("p",null,"Extended Lances is very flexible and allows for full control on how a player/modder wishes to extend a lance. You can extend it in four ways:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LanceSize")," determining the global lance size for the faction. See the below table."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"per-contract-overrides"}),"Per-contract override")," (",Object(r.b)("inlineCode",{parentName:"li"},"MissionControl/config/Contracts")," or ",Object(r.b)("inlineCode",{parentName:"li"},"MissionControl/config/Flashpoints"),") that sets a specific lance size"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LanceDef")," that has a tag (defined in ",Object(r.b)("inlineCode",{parentName:"li"},"ForceLanceDefSizeWithTag")," in the settings.json) in its ",Object(r.b)("inlineCode",{parentName:"li"},"LanceTags/tagSetSourceFile")," property to enforce the unit size defined in the ",Object(r.b)("inlineCode",{parentName:"li"},"LanceDef")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LanceOverride")," (in the contract json) that has a tag (defined in ",Object(r.b)("inlineCode",{parentName:"li"},"ForceLanceOverrideSizeWithTag")," in the settings.json) in its ",Object(r.b)("inlineCode",{parentName:"li"},"lanceTagSet/tagSetSourceFile")," property to enforce the ",Object(r.b)("inlineCode",{parentName:"li"},"LanceOverride")," unit size defined in the ",Object(r.b)("inlineCode",{parentName:"li"},"ContractOverride")," (contract json)")),Object(r.b)("h2",{id:"settings-breakdown"},"Settings Breakdown"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"ExtendedLances": {\n  "Enable": true,\n  "EnableForFlashpoints": true,\n  "EnableForStory": false,\n  "EnableForTargetAlly": true,\n  "EnableForEmployerAlly": true,\n  "EnableForHostileToAll": true,\n  "EnableForNeutralToAll": true,\n  "Autofill": true,\n  "AutofillType": "RespectEmpty",\n  "AutofillUnitCopyType": "RandomInLance",\n  "ExcludeContractTypes": ["SoloDuel", "DuoDuel"],\n  "SkipWhenTaggedWithAny": ["lance_type_solo"],\n  "SkipWhenTaggedWithAll": [],\n  "SkipWhenExcludeTagsContain": ["mc_no_extended_lance", "no_extended_lance"],\n  "ForceLanceOverrideSizeWithTag": "mc_force_extended_lance",\n  "ForceLanceDefSizeWithTag": "mc_force_extended_lance",\n  "LanceSizes": {\n    "5": [\n      {\n        "Faction": "AuriganRestoration"\n      },\n      {\n        "Faction": "TaurianConcordat",\n        "DifficultyMod": -1\n      }\n    ],\n    "6": [\n      {\n        "Faction": "Comstar",\n        "DifficultyMod": -3\n      }\n    ]\n  }\n}\n')),Object(r.b)("p",null,"All the below properties are optional."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Details"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Enable")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Should this feature be enabled or not?")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"EnableForFlashpoints")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable feature for Flashpoints if ",Object(r.b)("inlineCode",{parentName:"td"},"EnableFlashpointOverrides")," is ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"EnableForStory")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable feature for Story if ",Object(r.b)("inlineCode",{parentName:"td"},"EnableStoryOverrides")," is ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"EnableForTargetAlly")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enables this feature for ",Object(r.b)("inlineCode",{parentName:"td"},"TargetAlly")," team if ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"EnableForEmployerAlly")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enables this feature for ",Object(r.b)("inlineCode",{parentName:"td"},"EmployerAlly")," team if ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"EnableForHostileToAll")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enables this feature for ",Object(r.b)("inlineCode",{parentName:"td"},"HostileToAll")," team if ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"EnableForNeutralToAll")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enables this feature for ",Object(r.b)("inlineCode",{parentName:"td"},"NeutralToAll")," team if ",Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Autofill")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If ",Object(r.b)("inlineCode",{parentName:"td"},"true"),", EL will attempt to autofill a lance up to the lance size set below under ",Object(r.b)("inlineCode",{parentName:"td"},"LanceSizes"),". This is currently just a copy of the unit in the first lance slot")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"AutofillType")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"RespectEmpty")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allow for the autofill to be configured.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"td"},"RespectEmpty")," is the legacy and default. When a LanceOverride or LanceDef has empty units defined (e.g. mechDef_None, vehicleDef_None) then it will respect those and not autofill them.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"td"},"FillEmpty")," is a new autofill behaviour. When a LanceOverride or LanceDef has empty units defined (e.g. mechDef_None, vehicleDef_None) then it will autofill and replace them so units will spawn in those slots.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"AutofillUnitCopyType")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"RandomInLance")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"At times Extended Lances needs to copy units to great a variable and interesting lance when autofilling it up to the Faction Size (or any overridden size). There are two behaviours for copying units. slot.",Object(r.b)("br",null),Object(r.b)("br",null),"In this case EL tries to copy a 'Tagged' lance so to use this tagged UnitSpawnPointOverride and leverage the tags to provide variation. If there are no 'Tagged' lances available to copy it will use the defined behaviour in AutofillUnitCopyType in the settings.json.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"td"},"FirstInLance")," is the legacy behaviour. It would pick the first unit (index 0) and copy it (giving it new identify/clearing custom names etc).",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"td"},"RandomInLance")," is the new behaviour and is now the default behaviour. It picks a random unit from the Lance to copy (giving it new identify/clearing custom names etc).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"AutofillStartingFromContractDifficulty")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"3")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Will not autofill units until the defined contract difficulty (real difficulty and not UI/visible UI difficulty). This was added to help make a fairer early game. LanceDefs selected that contain the units will still be used. This only affects autofilling LanceDefs/LanceOverrides that are below the Faction ",Object(r.b)("inlineCode",{parentName:"td"},"LanceSize")," and aren't filled with empty units (e.g. mechDef_None etc)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"SkipWhenTaggedWithAny")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},'["lance_type_solo"]')),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Skip if ANY of the set tags exist under a lance ",Object(r.b)("inlineCode",{parentName:"td"},"lanceTagSet")," in the contract override JSON being used")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"SkipWhenTaggedWithAll")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"[]")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Skip if ALL of the set tags exist under a lance ",Object(r.b)("inlineCode",{parentName:"td"},"lanceTagSet")," in the contract override JSON being used")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"SkipWhenExcludeTagsContain")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},'["mc_no_extended_lance"]')),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Skip if ANY of the set tags exist under a lance ",Object(r.b)("inlineCode",{parentName:"td"},"lanceExcludedTagSet")," in the contract override JSON")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ForceLanceOverrideSizeWithTag")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"mc_force_extended_lance")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Provides a way to force EL to allow specific LanceOverride in a ContractOverride (the lance section in a contract json) set ups.",Object(r.b)("br",null),Object(r.b)("br",null),"For example, A ContractOverride's LanceOverride 'Manual' lance set up has 8 UnitSpawnPointOverrides defined in it. The modder wants this contract to only spawn this exact set up. The modder would add the tag 'mc_force_extended_lance' in the 'lanceTagSet/tagSetSourceFile' property of the LanceOverride. Then exactly 8 units will be spawned no matter what EL settings exist (e.g. overriding of the settings.json Faction Size and per-contract overrides).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ForceLanceDefSizeWithTag")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"mc_force_extended_lance")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Provides a way to force EL to allow specific LanceDef set ups.",Object(r.b)("br",null),Object(r.b)("br",null),"For example, A LanceDef of 3 units is selected. If it contains a special tag in the 'LanceTags/tagSetSourceFile' property 'mc_force_extended_lance' - then only exactly 3 units will be spawned no matter what EL settings exist (e.g. overriding of the settings.json Faction Size and per-contract overrides).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"LanceSizes")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets which faction should have higher lance sizes. By default all faction lances are 4 units like vanilla.")))),Object(r.b)("h3",{id:"lance-sizes"},"Lance Sizes"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Any string number above 4 (e.g. "5")'),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See Table Below")))),Object(r.b)("h3",{id:"lance-sizes-data"},"Lance Sizes Data"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Faction")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The faction short name is used to identify which faction should have the set number of units")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"DifficultyMod")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The difficulty modifier changes the lance selection criteria so a lower, or higher, difficulty lance is selected")))),Object(r.b)("h2",{id:"faction-ids"},"Faction Ids"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Faction")," name you use is taken from your ",Object(r.b)("inlineCode",{parentName:"p"},"BATTLETECH/BattleTech_Data/StreamingAssets/data/enums/Faction.json")," file and the ",Object(r.b)("inlineCode",{parentName:"p"},"Name")," property. You can also refer to modded factions here too in the same way, by using their ",Object(r.b)("inlineCode",{parentName:"p"},"Name")," property."),Object(r.b)("p",null,"The vanilla factions are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Davion"),Object(r.b)("li",{parentName:"ul"},"Liao"),Object(r.b)("li",{parentName:"ul"},"Kurita"),Object(r.b)("li",{parentName:"ul"},"Marik"),Object(r.b)("li",{parentName:"ul"},"Steiner"),Object(r.b)("li",{parentName:"ul"},"TaurianConcordat"),Object(r.b)("li",{parentName:"ul"},"MagistracyOfCanopus"),Object(r.b)("li",{parentName:"ul"},"AuriganDirectorate"),Object(r.b)("li",{parentName:"ul"},"AuriganRestoration"),Object(r.b)("li",{parentName:"ul"},"ComStar"),Object(r.b)("li",{parentName:"ul"},"MercenaryReviewBoard"),Object(r.b)("li",{parentName:"ul"},"AuriganPirates"),Object(r.b)("li",{parentName:"ul"},"AuriganMercenaries"),Object(r.b)("li",{parentName:"ul"},"Locals"),Object(r.b)("li",{parentName:"ul"},"Unknown"),Object(r.b)("li",{parentName:"ul"},"MagistracyCentrella"),Object(r.b)("li",{parentName:"ul"},"MajestyMetals"),Object(r.b)("li",{parentName:"ul"},"Nautilus"),Object(r.b)("li",{parentName:"ul"},"Betrayers"),Object(r.b)("li",{parentName:"ul"},"FlakJackals"),Object(r.b)("li",{parentName:"ul"},"LocalsBrockwayRefugees"),Object(r.b)("li",{parentName:"ul"},"SelfEmployed"),Object(r.b)("li",{parentName:"ul"},"MasonsMarauders"),Object(r.b)("li",{parentName:"ul"},"SteelBeast"),Object(r.b)("li",{parentName:"ul"},"KellHounds"),Object(r.b)("li",{parentName:"ul"},"RazorbackMercs"),Object(r.b)("li",{parentName:"ul"},"HostileMercenaries"),Object(r.b)("li",{parentName:"ul"},"EmeraldDawn"),Object(r.b)("li",{parentName:"ul"},"SianTriumphant"),Object(r.b)("li",{parentName:"ul"},"ProfHorvat"),Object(r.b)("li",{parentName:"ul"},"RedHareRegiment"),Object(r.b)("li",{parentName:"ul"},"EdCorbu"),Object(r.b)("li",{parentName:"ul"},"DuchyOfAndurien"),Object(r.b)("li",{parentName:"ul"},"BlackCalderaDefense"),Object(r.b)("li",{parentName:"ul"},"GrayDeathLegion"),Object(r.b)("li",{parentName:"ul"},"HouseNakano"),Object(r.b)("li",{parentName:"ul"},"SelfEmployed_Yang"),Object(r.b)("li",{parentName:"ul"},"SecuritySolutionsInc"),Object(r.b)("li",{parentName:"ul"},"PaladinProtectionLLC"),Object(r.b)("li",{parentName:"ul"},"HouseKhulan"),Object(r.b)("li",{parentName:"ul"},"BlackWidowCompany"),Object(r.b)("li",{parentName:"ul"},"BountyHunterAssociates"),Object(r.b)("li",{parentName:"ul"},"SelfEmployed_Farah"),Object(r.b)("li",{parentName:"ul"},"SelfEmployed_Sumire"),Object(r.b)("li",{parentName:"ul"},"Moderbjorn"),Object(r.b)("li",{parentName:"ul"},"BaumannGroup")),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("p",null,"For in-depth examples see the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/assets/Extended_Lances_v2_Testing.pdf"}),"testing document for Extended Lances v2"),"."))}d.isMDXComponent=!0},274:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),l=a.n(n),r=l.a.createContext({}),i=function(e){var t=l.a.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},b=function(e){var t=i(e.components);return l.a.createElement(r.Provider,{value:t},e.children)};var c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},o=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,b=e.parentName,o=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),d=i(a),p=n,s=d[b+"."+p]||d[p]||c[p]||r;return a?l.a.createElement(s,Object.assign({},{ref:t},o,{components:a})):l.a.createElement(s,Object.assign({},{ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=o;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var d=2;d<r;d++)i[d]=a[d];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"}}]);