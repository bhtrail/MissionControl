(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{256:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"rightToc",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(2),i=a(6),o=(a(0),a(295)),l={id:"release-1.5.0",title:"Release v1.5.0",author:"Richard 'CWolf' Griffiths",author_title:"Developer",author_url:"https://github.com/cwolfs",author_image_url:"https://avatars0.githubusercontent.com/u/7622361",tags:["changelog","release","v1.5.0"]},r=[{value:"\u2757 Custom Contract Build Format Upgrade",id:"-custom-contract-build-format-upgrade",children:[]},{value:"\ud83d\ude80 Features",id:"-features",children:[]},{value:"\u26a1 Improvements",id:"-improvements",children:[]},{value:"\ud83d\udd27 Changes",id:"-changes",children:[]},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes",children:[]},{value:"\ud83d\udcdd Documentation / Website",id:"-documentation--website",children:[]},{value:"\ud83c\udd99 Upgrade Instructions",id:"-upgrade-instructions",children:[{value:"Copy and Overwrite Example Per-Contract Override Files",id:"copy-and-overwrite-example-per-contract-override-files",children:[]},{value:"Copy new CastDefs",id:"copy-new-castdefs",children:[]},{value:"Copy new Blackout contracts",id:"copy-new-blackout-contracts",children:[]},{value:"Add <code>ContractOverrideDataCleanupMethod</code> setting to the settings.json",id:"add-contractoverridedatacleanupmethod-setting-to-the-settingsjson",children:[]},{value:"Copy new portraits",id:"copy-new-portraits",children:[]},{value:"\u2757 Update Custom Contract Type Build Files",id:"-update-custom-contract-type-build-files",children:[]}]}],c={permalink:"/blog/release-1.5.0",source:"@site/blog\\2022-10-17-release-1.5.0.md",description:"This release introduces a lot of new features and fixes some important bugs. It adds a lot more content for the existing custom contract types, adds a dialogue system that works with the combat dialogue for much more control and allows player pilots to talk in contracts. One of the main reasons for this release is to prepare the contract type build formats for the upcoming Mission Control Designer.",date:"2022-10-17T00:00:00.000Z",tags:[{label:"changelog",permalink:"/blog/tags/changelog"},{label:"release",permalink:"/blog/tags/release"},{label:"v1.5.0",permalink:"/blog/tags/v-1-5-0"}],title:"Release v1.5.0",prevItem:{title:"Release v1.5.1",permalink:"/blog/release-1.5.1"},nextItem:{title:"Release v1.4.2",permalink:"/blog/release-1.4.2"}},s={rightToc:r,metadata:c};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This release introduces a lot of new features and fixes some important bugs. It adds a lot more content for the existing custom contract types, adds a dialogue system that works with the combat dialogue for much more control and allows player pilots to talk in contracts. One of the main reasons for this release is to prepare the contract type build formats for the upcoming Mission Control Designer."),Object(o.b)("p",null,"All website documentation has been updated to reflect all the new additions and changes so check there for specifics."),Object(o.b)("p",null,"The full release diff can be at the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/CWolfs/MissionControl/pull/551"}),"v1.5.0 pull request"),"."),Object(o.b)("h2",{id:"-custom-contract-build-format-upgrade"},"\u2757 Custom Contract Build Format Upgrade"),Object(o.b)("p",null,"As the Mission Control Designer is in a functional state I've been testing the Designer saving out the existing custom contract types (Duels & Blackout). For various reasons related to the Designer the existing custom contract type build files (files that are located under ",Object(o.b)("inlineCode",{parentName:"p"},"MissionControl/contractTypeBuilds"),") require an upgrade."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The upgrade is critical and must be done.")," - See the below ",Object(o.b)("ins",null,"Upgrade instructions")," on the process"),Object(o.b)("h2",{id:"-features"},"\ud83d\ude80 Features"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/390"}),"Blackout: Added 3 more contracts"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Absent Witness"),Object(o.b)("li",{parentName:"ul"},"Prepared Grounds (written by Vantas Strider)"),Object(o.b)("li",{parentName:"ul"},"A Minor Royal Pain"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/521"}),"Blackout: Added to 3 new maps"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Tyrlon (Highlands Fall biome)"),Object(o.b)("li",{parentName:"ul"},"Central Mountain (Desert Parched biome)"),Object(o.b)("li",{parentName:"ul"},"Lost World (Jungle Tropical biome)"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/519"}),"Solo Duel: Added to 5 new maps"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Big Loch (Highlands Spring biome)"),Object(o.b)("li",{parentName:"ul"},"Red City (Martian Vacuum biome)"),Object(o.b)("li",{parentName:"ul"},"Tide Bay (Jungle Tropical biome)"),Object(o.b)("li",{parentName:"ul"},"City Centre (Urban HighTech biome)"),Object(o.b)("li",{parentName:"ul"},"Taiga River (Trunda Frozen biome)"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/520"}),"Duo Duel: Added to 5 new maps"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Big Loch (Highlands Spring biome)"),Object(o.b)("li",{parentName:"ul"},"Red City (Martian Vacuum biome)"),Object(o.b)("li",{parentName:"ul"},"Tide Bay (Jungle Tropical biome)"),Object(o.b)("li",{parentName:"ul"},"City Centre (Urban HighTech biome)"),Object(o.b)("li",{parentName:"ul"},"Taiga River (Trunda Frozen biome)"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.missioncontrolmod.com/docs/features/dialogue-system"}),"Dialogue: Added a dialogue system on top of the contract dialogue system for Combat")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/533"}),"Dialogue: Player Pilots Can Talk in Contracts"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Anyone interacting with contract dialogue CastDefs / ",Object(o.b)("inlineCode",{parentName:"li"},"selectedCastDefId")," can now select Player lance pilots to talk"),Object(o.b)("li",{parentName:"ul"},"Provided manual (",Object(o.b)("inlineCode",{parentName:"li"},"castDef_TeamPilot_1"),"), true random (",Object(o.b)("inlineCode",{parentName:"li"},"castDef_TeamPilot_Random"),") and bound random selection of Player lance pilots (",Object(o.b)("inlineCode",{parentName:"li"},"castDef_TeamPilot_Random_1")," or ",Object(o.b)("inlineCode",{parentName:"li"},"castDef_TeamPilot_Random_BoredPilot"),")"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/535"}),"Dialogue: Commander can be used as a CastDef regardless of if dropped in the Player lance"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Can be used if the Commander is on the dropship or in the Player lance"),Object(o.b)("li",{parentName:"ul"},"Can be used with ",Object(o.b)("inlineCode",{parentName:"li"},"castDef_Commander")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/533"}),"Dialogue: Dialogue can reference Commander, Speaker, Bound or Position Player Pilots"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Some pilots can be accessed in the dialogue, e.g. (",Object(o.b)("inlineCode",{parentName:"li"},"{MC.PlayerLance.TeamPilot_Random_2.UnitName}"),", ",Object(o.b)("inlineCode",{parentName:"li"},"{MC.PlayerLance.Speaker.DisplayName}"),", ",Object(o.b)("inlineCode",{parentName:"li"},"{MC.Commander.DisplayName}"),")"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/544"}),"Dialogue: Conditional dialogue - the ability to show dialogue on certain conditions"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Supports checks against Employer or Target Faction Type"),Object(o.b)("li",{parentName:"ul"},"Supports checks against Employer or Target Name and Short Name"),Object(o.b)("li",{parentName:"ul"},"Supports tag checks against all tag scopes (",Object(o.b)("inlineCode",{parentName:"li"},"Pilot"),", ",Object(o.b)("inlineCode",{parentName:"li"},"Commander"),", ",Object(o.b)("inlineCode",{parentName:"li"},"Company"),", ",Object(o.b)("inlineCode",{parentName:"li"},"System"),") and a new custom ",Object(o.b)("inlineCode",{parentName:"li"},"Encounter")," tag scope that is fresh for every contract"),Object(o.b)("li",{parentName:"ul"},"Supports multi-conditional checks (",Object(o.b)("inlineCode",{parentName:"li"},"{{condition1} AND {condition2}}"),", ",Object(o.b)("inlineCode",{parentName:"li"},"{{condition1} OR {condition2}}"),")"),Object(o.b)("li",{parentName:"ul"},"Supports random percentage chance checks"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/547"}),"Dialogue: Modifications - the ability to modify the game"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Supports adding tags to all tag scopes"),Object(o.b)("li",{parentName:"ul"},"Supports removing tags from all tag scopes"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/541"}),"Dialogue: Formatting - the ability to change text style"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Supports formatting text to different cases (",Object(o.b)("inlineCode",{parentName:"li"},"ToUpper"),", ",Object(o.b)("inlineCode",{parentName:"li"},"ToLower"),", ",Object(o.b)("inlineCode",{parentName:"li"},"ToUpperFirst"),", ",Object(o.b)("inlineCode",{parentName:"li"},"ToAlternating"),", e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"[MC.Format.ToUpper.{TEAM_EMP.FactionDef.Name}]"),")"),Object(o.b)("li",{parentName:"ul"},"Helps fix vanilla BT annoyance with Faction names starting lowercase so faction names can now be correctly used at the start of sentences."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/528"}),"Per-Contract Override - Additional Lances - Support Enabling / Disabling UseDialogue"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Allows modders to remove the Ally mission start dialogue for AL lances at a contract level"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/526"}),"Per-Contract Override - Additional Lances - Support Custom Objective Names"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Allows modders to provide custom names for the Enemy AL lances"),Object(o.b)("li",{parentName:"ul"},"Fewer objective names can be provided than AL lances and if the names aren't enough it fallsback to the default names"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/530"}),"Per-Contract Override - Additional Lances - Support CastDef"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Allows modders to provide a custom CastDef id and that Cast will speak the mission start dialogue for Ally AL lances"),Object(o.b)("li",{parentName:"ul"},"CastDef id can be a Mission Control dynamic CastDef id as mentioned in the new ",Object(o.b)("inlineCode",{parentName:"li"},"Dialogue")," features"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/530"}),"Per-Contract Override - Additional Lances - Support Custom Dialogue"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Allows modders to provide custom dialogue for the Ally AL lance to speak at the mission start dialogue"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/513#issuecomment-1257807830"}),"Additional Lances - Code API access"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Allows modders to link against Mission Control and access the Additional Lances feature functionality"),Object(o.b)("li",{parentName:"ul"},"Modders can provide a lance count, list of ",Object(o.b)("inlineCode",{parentName:"li"},"LanceOverride"),"s or ",Object(o.b)("inlineCode",{parentName:"li"},"MLanceOverride"),"s and optional objective name overrides"),Object(o.b)("li",{parentName:"ul"},"This will override every other AL lance approach"),Object(o.b)("li",{parentName:"ul"},"Usable only for procedural contracts and not available for Flashpoints and Story contracts"),Object(o.b)("li",{parentName:"ul"},"Accessed through ",Object(o.b)("inlineCode",{parentName:"li"},"MissionControl.Instance.API")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/515"}),"Metrics"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Added a way for other mods to access some Mission Control data"),Object(o.b)("li",{parentName:"ul"},"Accessed through ",Object(o.b)("inlineCode",{parentName:"li"},"MissionControl.Instance.Metrics")),Object(o.b)("li",{parentName:"ul"},"Currently supports Additional Lance counts per encounter/contract")))),Object(o.b)("h2",{id:"-improvements"},"\u26a1 Improvements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Custom Contract Types: Build File Format Updated",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The custom contract type build file format is updated as built by the Designer"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/296"}),"Solo & Duo Duel: OpFor Moves To Engage Before Contact"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Previously, the OpFor duelists would sit at their spawn point until contact was made, then they would move to engage the player"),Object(o.b)("li",{parentName:"ul"},"This led to a boring situation where the player would just jump the enemy"),Object(o.b)("li",{parentName:"ul"},"Now the OpFor moves to engage the player similar to how the player would move at the start of the contract"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/516"}),"Extended Boundaries - Support use of only MapId"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Previously, you could provide only ",Object(o.b)("inlineCode",{parentName:"li"},"ContractTypeName")," or provide ",Object(o.b)("inlineCode",{parentName:"li"},"ContractTypeName")," and ",Object(o.b)("inlineCode",{parentName:"li"},"MapId")," but you couldn't only provide ",Object(o.b)("inlineCode",{parentName:"li"},"MapId")),Object(o.b)("li",{parentName:"ul"},"You can now provide only ",Object(o.b)("inlineCode",{parentName:"li"},"MapId")," if required"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/393"}),"Blackout: Fixed bad turret placement in Phase2 base in Story7 map"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Often the turrets would destroy the buildings they were meant to protect"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/539"}),"Additional Lances: Follow AI is restricted to Additional Lance lances"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Previously, the FollowAI would be injected into the ",Object(o.b)("inlineCode",{parentName:"li"},"Core")," behaviour tree and ",Object(o.b)("inlineCode",{parentName:"li"},"Follow")," orders would be sent to all lance units that had the ",Object(o.b)("inlineCode",{parentName:"li"},"Employer")," tag"),Object(o.b)("li",{parentName:"ul"},"This correctly didn't affect things like Escort units or Defend Base engineers as they didn't use the ",Object(o.b)("inlineCode",{parentName:"li"},"Core")," AI behaviour tree"),Object(o.b)("li",{parentName:"ul"},"Now, the AI ",Object(o.b)("inlineCode",{parentName:"li"},"Follow")," order is sent to any lance units that have both ",Object(o.b)("inlineCode",{parentName:"li"},"Employer")," and ",Object(o.b)("inlineCode",{parentName:"li"},"AdditionalLance")," tags - so only the AL lances"),Object(o.b)("li",{parentName:"ul"},"This change purely keeps Mission Control's Follow AI influence to where it's required"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/382"}),"Data Cleanup: Added new method for cleaning up data from Mission Control"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This new method is now default"),Object(o.b)("li",{parentName:"ul"},"The old method can be turned on instead if there are some unforseen compatibility issues with other mods in the community"),Object(o.b)("li",{parentName:"ul"},"In ",Object(o.b)("inlineCode",{parentName:"li"},"settings.json"),", there is a new setting under ",Object(o.b)("inlineCode",{parentName:"li"},"Misc/ContractOverrideDataCleanupMethod"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"RestoreFromCopy")," is the default and the new cleaning method. It takes copies of LanceOverrides and ObjectiveOverrides and restores them after combat"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ScrubData")," is the old method. It scans through the contract override and removes anything MC added."))))),Object(o.b)("li",{parentName:"ul"},"Contract Type Builder - Added ",Object(o.b)("inlineCode",{parentName:"li"},"DurationType")," property to OccupyRegion Objective")),Object(o.b)("h2",{id:"-changes"},"\ud83d\udd27 Changes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Contract Type Builder - Refactored ",Object(o.b)("inlineCode",{parentName:"li"},"SetStateResult")," result to ",Object(o.b)("inlineCode",{parentName:"li"},"SetStatusResult")),Object(o.b)("li",{parentName:"ul"},"Contract Type Builder - Refactored ",Object(o.b)("inlineCode",{parentName:"li"},"SetStateAtRandomResult")," result to ",Object(o.b)("inlineCode",{parentName:"li"},"SetStatusAtRandomResult"))),Object(o.b)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug Fixes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/420"}),"Additional Lances: Ally units Follow AI was breaking after initial contact with enemies"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"If an initial encounter was made and at least one enemy unit was destroyed, then contact lost - then the ally AL Follow AI wasn't stripping out dead units for visible/detected enemy checks so the ally AL would always think there were enemies nearby and never return to follow mode"),Object(o.b)("li",{parentName:"ul"},"Now, dead units are not considered valid for visible/detected enemy checks"),Object(o.b)("li",{parentName:"ul"},"Now, ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=zBhnTauFwV8"}),"ally AL lances will return to follow mode correctly after contact is lost")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CWolfs/MissionControl/issues/543"}),"Custom Contract Types: Metadata was using wrong heights when plots changed"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Mission Control's custom recalculation of the metadata (based on BT's algorithm) was running before the custom contract type plots were enabled/disabled"),Object(o.b)("li",{parentName:"ul"},"This would cause the metadata heights to not always be correct in plot areas that were different to the existing vanilla metadata")))),Object(o.b)("h2",{id:"-documentation--website"},"\ud83d\udcdd Documentation / Website"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Added a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.missioncontrolmod.com/docs/features/dialogue-system"}),"Dialogue System")," feature page"),Object(o.b)("li",{parentName:"ul"},"Added a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.missioncontrolmod.com/docs/features/metrics"}),"Metrics")," feature page"),Object(o.b)("li",{parentName:"ul"},"Updated ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.missioncontrolmod.com/docs/features/per-contract-overrides"}),"Per-Contract Overrides")," feature section with new Additional Lances settings"),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("inlineCode",{parentName:"li"},"ContractOverrideDataCleanupMethod")," to the ",Object(o.b)("inlineCode",{parentName:"li"},"Settings")," feature page"),Object(o.b)("li",{parentName:"ul"},"Added Additional Lance API section to the ",Object(o.b)("inlineCode",{parentName:"li"},"Additional Lances")," feature page"),Object(o.b)("li",{parentName:"ul"},"Added information on ",Object(o.b)("inlineCode",{parentName:"li"},"MapId")," only overrides for the ",Object(o.b)("inlineCode",{parentName:"li"},"Extended Boundaries")," feature page"),Object(o.b)("li",{parentName:"ul"},"Fixed incorrect information in ",Object(o.b)("inlineCode",{parentName:"li"},"SetTeamByLanceSpawnerResult")," and ",Object(o.b)("inlineCode",{parentName:"li"},"SetTeamByLanceSpawnerGuidResult")," result pages"),Object(o.b)("li",{parentName:"ul"},"Refactored ",Object(o.b)("inlineCode",{parentName:"li"},"SetStateResult")," result to ",Object(o.b)("inlineCode",{parentName:"li"},"SetStatusResult")),Object(o.b)("li",{parentName:"ul"},"Refactored ",Object(o.b)("inlineCode",{parentName:"li"},"SetStateAtRandomResult")," result to ",Object(o.b)("inlineCode",{parentName:"li"},"SetStatusAtRandomResult")),Object(o.b)("li",{parentName:"ul"},"Fixed incorrect information in ",Object(o.b)("inlineCode",{parentName:"li"},"CompleteObjectiveResult")," result page"),Object(o.b)("li",{parentName:"ul"},"Fixed incorrect information in ",Object(o.b)("inlineCode",{parentName:"li"},"EncounterObjectiveMatchesState")," conditional page"),Object(o.b)("li",{parentName:"ul"},"Fixed incorrect information in ",Object(o.b)("inlineCode",{parentName:"li"},"ObjectiveStatuses")," conditional page"),Object(o.b)("li",{parentName:"ul"},"Fixed issue with latest LastPass Chrome plugin with the website causing empty space to appear near the top of the page"),Object(o.b)("li",{parentName:"ul"},"Added ",Object(o.b)("inlineCode",{parentName:"li"},"DurationType")," to ",Object(o.b)("inlineCode",{parentName:"li"},"OccupyRegion")," objective page")),Object(o.b)("h2",{id:"-upgrade-instructions"},"\ud83c\udd99 Upgrade Instructions"),Object(o.b)("p",null,"This update is just a dll and mod.json update."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you're using MC without a modpack and none of your own changes, just delete the MC folder and move the new one into your mods folder"),Object(o.b)("li",{parentName:"ul"},"If you're using MC as part of a modpack, let the modpack authors update MC for you (using the below guide)"),Object(o.b)("li",{parentName:"ul"},"If you're using MC without a modpack but you've made some of your own changes to the configs, or you're a modpack author:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Copy into your Mods/MissionControl folder",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"MissionControl.dll"),Object(o.b)("li",{parentName:"ul"},"mod.json")))))),Object(o.b)("h3",{id:"copy-and-overwrite-example-per-contract-override-files"},"Copy and Overwrite Example Per-Contract Override Files"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Copy and overwrite ",Object(o.b)("inlineCode",{parentName:"li"},"config/Contracts")," to ",Object(o.b)("inlineCode",{parentName:"li"},"config/Contracts")," folder")),Object(o.b)("h3",{id:"copy-new-castdefs"},"Copy new CastDefs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Copy and overwrite ",Object(o.b)("inlineCode",{parentName:"li"},"overrides/cast")," folder to ",Object(o.b)("inlineCode",{parentName:"li"},"overrides/cast")," folder")),Object(o.b)("h3",{id:"copy-new-blackout-contracts"},"Copy new Blackout contracts"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Copy ",Object(o.b)("inlineCode",{parentName:"li"},"overrides/contracts/blackout/Blackout_AMinorRoyalPain.json")," to ",Object(o.b)("inlineCode",{parentName:"li"},"overrides/contracts/blackout")),Object(o.b)("li",{parentName:"ul"},"Copy ",Object(o.b)("inlineCode",{parentName:"li"},"overrides/contracts/blackout/Blackout_AbsentWitness.json")," to ",Object(o.b)("inlineCode",{parentName:"li"},"overrides/contracts/blackout")),Object(o.b)("li",{parentName:"ul"},"Copy ",Object(o.b)("inlineCode",{parentName:"li"},"overrides/contracts/blackout/Blackout_PreparedGrounds.json")," to ",Object(o.b)("inlineCode",{parentName:"li"},"overrides/contracts/blackout"))),Object(o.b)("h3",{id:"add-contractoverridedatacleanupmethod-setting-to-the-settingsjson"},"Add ",Object(o.b)("inlineCode",{parentName:"h3"},"ContractOverrideDataCleanupMethod")," setting to the settings.json"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Edit the ",Object(o.b)("inlineCode",{parentName:"li"},"Misc")," section and add to the bottom of that section:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"ContractOverrideDataCleanupMethod": "RestoreFromCopy"\n')),Object(o.b)("h3",{id:"copy-new-portraits"},"Copy new portraits"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Copy and overwrite ",Object(o.b)("inlineCode",{parentName:"li"},"spirtes/Portraits")," folder to ",Object(o.b)("inlineCode",{parentName:"li"},"spirtes/Portraits"))),Object(o.b)("h3",{id:"-update-custom-contract-type-build-files"},"\u2757 Update Custom Contract Type Build Files"),Object(o.b)("p",null,"There are many changes within the custom contract type build files and the EncounterLayer files that need to be addressed in this update. I'll explain the easiest method that I recommend."),Object(o.b)("h4",{id:"easiest-recommended-method"},"Easiest (RECOMMENDED) Method"),Object(o.b)("p",null,"Everyone should use this approach to upgrade the contract type and encounter layer files."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Delete your ",Object(o.b)("inlineCode",{parentName:"li"},"contractTypeBuilds")," folder and copy in the new v1.5 release ",Object(o.b)("inlineCode",{parentName:"li"},"contractTypeBuilds")," folder"),Object(o.b)("li",{parentName:"ul"},"Delete your ",Object(o.b)("inlineCode",{parentName:"li"},"overrides/encounterLayers")," folder and copy in the new v1.5 release ",Object(o.b)("inlineCode",{parentName:"li"},"overrides/encounterLayers")," folder"),Object(o.b)("li",{parentName:"ul"},"(BTA modpack, and any modpack with their own custom contract types) Recreate your Hero Duels (or other custom contract types you've made)"),Object(o.b)("li",{parentName:"ul"},"(Any modpacks that edited the old contract type build files) Remake the old changes to the new contract type build files")),Object(o.b)("h4",{id:"harder-not-supported-method"},"Harder (NOT SUPPORTED) Method"),Object(o.b)("p",null,"If you decide to take this approach it is ",Object(o.b)("ins",null,"NOT SUPPORTED")," by Mission Control (and CWolf). The only reason you'd take this approach is if you made extensive changes to the previous custom contract types and you didn't want to lose these changes. ",Object(o.b)("ins",null,"NOT RECOMMENDED"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Rename all ",Object(o.b)("inlineCode",{parentName:"li"},"contractTypeBuilds")," in your modpack to be the same as the new ",Object(o.b)("inlineCode",{parentName:"li"},"contractTypeBuilds")),Object(o.b)("li",{parentName:"ul"},"Copy over new ",Object(o.b)("inlineCode",{parentName:"li"},"contractTypeBuilds")," files for ",Object(o.b)("inlineCode",{parentName:"li"},"SoloDuel"),", ",Object(o.b)("inlineCode",{parentName:"li"},"DuoDuel"),", ",Object(o.b)("inlineCode",{parentName:"li"},"Blackout")," into their respective sub-folders"),Object(o.b)("li",{parentName:"ul"},"Rename all ",Object(o.b)("inlineCode",{parentName:"li"},"overrides/encounterLayers")," files to be the same as the new ",Object(o.b)("inlineCode",{parentName:"li"},"contractTypeBuilds"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE:")," For any non-MC custom contract types the names of the your own custom encounterLayers must take the same format and link to the contract type build files. The reason for this is for Designer compatibility. The format is:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"build file: ",Object(o.b)("inlineCode",{parentName:"p"},"[mapname]_[biome].jsonc"),", for example ",Object(o.b)("inlineCode",{parentName:"p"},"centralmountain_desertparched.jsonc")," and ",Object(o.b)("inlineCode",{parentName:"p"},"mountainhold_lunarvacuum.jsonc"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"encounterLayer file: ",Object(o.b)("inlineCode",{parentName:"p"},"encounterLayer_[contracttype].[mapname]_[biome].json"),", for example ",Object(o.b)("inlineCode",{parentName:"p"},"encounterLayer_blackout.centralmountain_desertparched.json")," and ",Object(o.b)("inlineCode",{parentName:"p"},"encounterLayer_blackout.mountainhold_lunarvacuum.json"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Compare each and every contract type build file and apply the diff changes manually (allows you to keep your custom)"))))}b.isMDXComponent=!0},295:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return b}));var n=a(0),i=a.n(n),o=i.a.createContext({}),l=function(e){var t=i.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},r=function(e){var t=l(e.components);return i.a.createElement(o.Provider,{value:t},e.children)};var c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),b=l(a),u=n,d=b[r+"."+u]||b[u]||c[u]||o;return a?i.a.createElement(d,Object.assign({},{ref:t},s,{components:a})):i.a.createElement(d,Object.assign({},{ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=s;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var b=2;b<o;b++)l[b]=a[b];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);