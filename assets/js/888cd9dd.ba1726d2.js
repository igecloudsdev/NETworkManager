"use strict";(self.webpackChunknetworkmanager_docs=self.webpackChunknetworkmanager_docs||[]).push([[897],{2670:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=r(4848),t=r(8453);const i={sidebar_position:999},s="2022.2.22.0",l={id:"changelog/2022-2-22-0",title:"2022.2.22.0",description:"Version: 2022.2.22.0",source:"@site/docs/changelog/2022-2-22-0.md",sourceDirName:"changelog",slug:"/changelog/2022-2-22-0",permalink:"/NETworkManager/docs/changelog/2022-2-22-0",draft:!1,unlisted:!1,editUrl:"https://github.com/bornToBeRoot/NETworkManager/tree/main/Website/docs/changelog/2022-2-22-0.md",tags:[],version:"current",sidebarPosition:999,frontMatter:{sidebar_position:999},sidebar:"docsSidebar",previous:{title:"2022.8.18.0",permalink:"/NETworkManager/docs/changelog/2022-8-18-0"},next:{title:"Application",permalink:"/NETworkManager/docs/category/application"}},h={},d=[{value:"What&#39;s new?",id:"whats-new",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Bugfixes",id:"bugfixes",level:2},{value:"Dependencies, Refactoring &amp; Documentation",id:"dependencies-refactoring--documentation",level:2}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"20222220",children:"2022.2.22.0"}),"\n",(0,o.jsxs)(n.p,{children:["Version: ",(0,o.jsx)(n.strong,{children:"2022.2.22.0"}),(0,o.jsx)("br",{}),"\nRelease date: ",(0,o.jsx)(n.strong,{children:"22.2.2022"})]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"File"}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.code,{children:"SHA256"})})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/releases/download/2022.2.22.0/NETworkManager_2022.2.22.0_Setup.exe",children:"Setup"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"F0CF905B14622588E658977BC2E7B85042858FA4191CDAEF4F84C1BAE2DC9311"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/releases/download/2022.2.22.0/NETworkManager_2022.2.22.0_Portable.zip",children:"Portable"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"241F02978697BAF2E8BD695671D5197C081CB44C5D52925BC30CC3CECF0A4592"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/releases/download/2022.2.22.0/NETworkManager_2022.2.22.0_Archive.zip",children:"Archive"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"DC5FC8FF4FC61E21F9D795B39E28C8CCDEC2FD4F01323031F27D691A93563CF8"})})]})]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Read this before upgrading from 2021.11.30.0 and earlier to 2022.2.22.0 or later!"})}),"\n",(0,o.jsx)(n.p,{children:"The profile (file) has been updated and needs to be migrated:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"The encryption of the profile file(s) must be disabled in the currently installed version."}),"\n",(0,o.jsx)(n.li,{children:"Then the update can be installed as usual."}),"\n",(0,o.jsx)(n.li,{children:"At the first startup the loading of the profiles fails and a PowerShell script can be started to migrate the profiles."}),"\n",(0,o.jsx)(n.li,{children:"After the migration the encryption of the profiles can be enabled again."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Note: ",(0,o.jsx)(n.em,{children:"Steps 1 and 4 can be skipped if the profiles are not encrypted."})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"System requirements"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Windows 10 / Server x64 (1809 or later)"}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://dotnet.microsoft.com/download/dotnet/6.0",children:".NET Desktop Runtime 6.x (LTS)"})}),"\n",(0,o.jsxs)(n.li,{children:["(optional) ",(0,o.jsx)(n.a,{href:"https://developer.microsoft.com/en-us/microsoft-edge/webview2/",children:"Microsoft Edge - WebView2 Runtime (Evergreen)"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"whats-new",children:"What's new?"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["New Icon/Logo for the application ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/1362",children:"#1362"})," ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/1371",children:"#1371"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Profiles reworked [BREAKING CHANGE] ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/1236",children:"#1236"})," ",(0,o.jsx)("br",{}),(0,o.jsx)(n.br,{}),"\n","Group-specific settings can now be set for:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Remote Desktop (Credentials for a group of servers, Settings)"}),"\n",(0,o.jsx)(n.li,{children:"PowerShell (Settings)"}),"\n",(0,o.jsx)(n.li,{children:"PuTTY (Settings)"}),"\n",(0,o.jsx)(n.li,{children:"TigerVNC (Settings)"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The inheritance works as follows: General Settings > Group settings > Profile settings (Profile overwrites group, group overwrites general settings)"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"The profiles are migrated with a PowerShell script when the app is executed for the first time / when the profiles are loaded. To do this, they must first be decrypted in an old version."})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"PuTTY"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Custom profile ",(0,o.jsx)(n.code,{children:"NETworkManager"})," will be added to the registry (",(0,o.jsx)(n.code,{children:"HCKU\\Software\\SimonTatham\\PuTTY\\Sessions\\NETworkManager"}),") which will set the PuTTY background to the application background ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/1358",children:"#1358"})," ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/1236",children:"#1236"})]}),"\n",(0,o.jsxs)(n.li,{children:["Add context menu button (right click on the tab) to fix the PuTTY embedded window size ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/1366",children:"#1366"})]}),"\n",(0,o.jsxs)(n.li,{children:["Try to automatically fix the embedded window size after the initial connect ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/1236",children:"#1236"})," ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/1376",children:"#1376"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"improvements",children:"Improvements"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Profile page in settings improved ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/1236",children:"#1236"})]}),"\n",(0,o.jsxs)(n.li,{children:["Validation of entries in the profile dialog improved ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/1236",children:"#1236"})," ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/issues/1283",children:"#1283"})]}),"\n",(0,o.jsxs)(n.li,{children:["Minimum required window size reduced to 800x600 ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/1366",children:"#1366"})," ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/issues/1275",children:"#1275"})]}),"\n",(0,o.jsxs)(n.li,{children:["Default history entries increased from 5 to 10 ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/issues/1372",children:"#1372"})]}),"\n",(0,o.jsxs)(n.li,{children:["Default background job time decreased from 15 to 5 minutes (save settings, profiles in background and not only when closing the application) ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/1236",children:"#1236"})]}),"\n",(0,o.jsxs)(n.li,{children:["Edit group button in the profiles list is not visible when the group name is longer than the width of the profiles list ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/1236",children:"#1236"})]}),"\n",(0,o.jsxs)(n.li,{children:["Port Scanner","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["MySQL and PostgreSQL ports added to port profile ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/commit/4334b649e0f73ab419e524f50c438b128288d8e3",children:"4334b64"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"bugfixes",children:"Bugfixes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Visibility of the min/max/close button on the pulled out window fixed ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/1366",children:"#1366"})]}),"\n",(0,o.jsxs)(n.li,{children:["App crash when building with SDK .NET 6.0.2 and running the app on 6.0.0 or 6.0.1 fixed ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/1236",children:"#1236"})," ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/issues/1381",children:"#1381"})]}),"\n",(0,o.jsxs)(n.li,{children:["App crash when renaming a profile file fixed ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/issues/1318",children:"#1318"})]}),"\n",(0,o.jsxs)(n.li,{children:["Language ",(0,o.jsx)(n.code,{children:"zh-CN"})," and ",(0,o.jsx)(n.code,{children:"zh-TW"})," is missing in dotnet publish. Build script changed from ",(0,o.jsx)(n.code,{children:"dotnet"})," to ",(0,o.jsx)(n.code,{children:"msbuild"})," ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/issues/1316",children:"#1316"})]}),"\n",(0,o.jsxs)(n.li,{children:["Remote Desktop","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:['Connection via Profile leads to error message "Error Code 4 (Total login limit was reached)" fixed ',(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/issues/1265",children:"#1265"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["PowerShell","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Validate host input in connect dialog ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/issues/1373",children:"#1373"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["PuTTY","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Fixed that some arguments from the connect dialog of PuTTY (like privatekey) were not applied correctly. Fix was also applied to remote desktop, powershell, tigervnc and webconsole, even if the bug could not be reproduced there. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/issues/1372",children:"#1372"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"dependencies-refactoring--documentation",children:"Dependencies, Refactoring & Documentation"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Code refactoring, Cleanup, etc."}),"\n",(0,o.jsxs)(n.li,{children:["Language files updated ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pulls?q=author%3Aapp%2Ftransifex-integration",children:"#transifex"})]}),"\n",(0,o.jsxs)(n.li,{children:["Dependencies updated ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pulls?q=author%3Aapp%2Fdependabot",children:"#dependencies"})]}),"\n",(0,o.jsxs)(n.li,{children:["Update OUI list ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/commit/f2f6e77e2bae2fc30f6dcfe9e9ceeb759d2e2f70",children:"f2f6e77"})]}),"\n",(0,o.jsxs)(n.li,{children:["Update Whois list ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/commit/f2f6e77e2bae2fc30f6dcfe9e9ceeb759d2e2f70",children:"f2f6e77"})]}),"\n",(0,o.jsxs)(n.li,{children:["Update Ports list ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/commit/f2f6e77e2bae2fc30f6dcfe9e9ceeb759d2e2f70",children:"f2f6e77"})]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var o=r(6540);const t={},i=o.createContext(t);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);