"use strict";(self.webpackChunkdbt_sqlserver_docs=self.webpackChunkdbt_sqlserver_docs||[]).push([[366],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=d(n),c=i,m=h["".concat(s,".").concat(c)]||h[c]||p[c]||a;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1564:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return h}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],l={title:"Using VSCode with dbt",sidebar_position:2},s="Using dbt in VSCode",d={unversionedId:"guides/vscode_setup",id:"guides/vscode_setup",isDocsHomePage:!1,title:"Using VSCode with dbt",description:"Intro",source:"@site/docs/guides/vscode_setup.md",sourceDirName:"guides",slug:"/guides/vscode_setup",permalink:"/dbt-msft-docs/docs/guides/vscode_setup",editUrl:"https://github.com/dbt-msft/dbt-msft-docs/tree/documentation/docs/guides/vscode_setup.md",version:"current",sidebarPosition:2,frontMatter:{title:"Using VSCode with dbt",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/dbt-msft-docs/docs/dbt-sqlserver/overview"},next:{title:"Overview",permalink:"/dbt-msft-docs/docs/dbt-synapse/overview"}},u=[{value:"Intro",id:"intro",children:[{value:"Goals",id:"goals",children:[]},{value:"Prerequisite",id:"prerequisite",children:[]},{value:"If you already know VSCode",id:"if-you-already-know-vscode",children:[]},{value:"Getting started",id:"getting-started",children:[]}]},{value:"Python environment",id:"python-environment",children:[{value:"Goal",id:"goal",children:[]},{value:"Walkthrough",id:"walkthrough",children:[]}]},{value:"Extensions",id:"extensions",children:[{value:"vscode-dbt",id:"vscode-dbt",children:[]},{value:"Find Related",id:"find-related",children:[]},{value:"Rainbow CSV",id:"rainbow-csv",children:[]},{value:"SQL Fluff",id:"sql-fluff",children:[]},{value:"dbt Power User",id:"dbt-power-user",children:[]}]},{value:"Settings",id:"settings",children:[{value:"Extra settings",id:"extra-settings",children:[]},{value:"Workspace-level settings files",id:"workspace-level-settings-files",children:[]}]}],p={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-dbt-in-vscode"},"Using dbt in VSCode"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"When our team first started using the dbt CLI, we started with Claire's well-loved discourse post, ",(0,a.kt)("a",{parentName:"p",href:"https://discourse.getdbt.com/t/how-we-set-up-our-computers-for-working-on-dbt-projects/243"},"How we set up our computers for working on dbt project"),". The post details how the dbt team uses Atom and iTerm 2 on macOS for an improved workflow. Many folks commented on how they acheived similar productivity using VSCode. I thought I'd consolidate some of this into a single article, and expand on it given the recent developments. I'm also going to add things to make it easier for working with Azure databases such as the Azure CLI and Azure Data Studio."),(0,a.kt)("h3",{id:"goals"},"Goals"),(0,a.kt)("p",null,"Following this guide will enable the following behavior in VSCode (some points lifted from Claire's guide -- linked above)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a stable, reproducible Python environment for running dbt"),(0,a.kt)("li",{parentName:"ul"},"syntax highlighting for SQL files with jinja in them"),(0,a.kt)("li",{parentName:"ul"},"graying out the text of files that have compiled code in them, to help prevent you from editing compiled SQL (as opposed to your actual model)"),(0,a.kt)("li",{parentName:"ul"},"quick switching b/w a model file and it's ",(0,a.kt)("inlineCode",{parentName:"li"},"compiled")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"run")," counterparts "),(0,a.kt)("li",{parentName:"ul"},"allow  ")),(0,a.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("p",null,"If you've never used VSCode with Python, I strongly recommend at least the first half of  Dan Taylor's ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=PnOPp4DsY2w"},"Get Productive with Python in Visual Studio Code")," talks. It covers a lot of the basics like installing Python, the Python extension, and the command pallette."),(0,a.kt)("p",null,"You should also have the following installed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Git"),(0,a.kt)("li",{parentName:"ul"},"VSCode"),(0,a.kt)("li",{parentName:"ul"},"Python 3 (via anaconda, brew or ",(0,a.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"python.org")," )")),(0,a.kt)("p",null,"In VSCode you'll also need to install the Python extension"),(0,a.kt)("h3",{id:"if-you-already-know-vscode"},"If you already know VSCode"),(0,a.kt)("p",null,"Here's ",(0,a.kt)("a",{parentName:"p",href:"https://gist.github.com/swanderz/5cf876d88c7c8d268d8c1e1e5d05bffd"},"a gist for an example .vscode directory")," that contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.json")," and an ",(0,a.kt)("inlineCode",{parentName:"p"},"extensions.json")),(0,a.kt)("h3",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"To get started, we'll use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dbt-labs/jaffle_shop"},"jaffle_shop repo"),", a self-contained project."),(0,a.kt)("p",null,"You can use the Git CLI or the VSCode Git extension to Git Clone command in VSCode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/dbt-labs/jaffle_shop.git\n")),(0,a.kt)("p",null,"Then, open the ",(0,a.kt)("inlineCode",{parentName:"p"},"jaffle_shop/")," directory in VSCode."),(0,a.kt)("h2",{id:"python-environment"},"Python environment"),(0,a.kt)("h3",{id:"goal"},"Goal"),(0,a.kt)("p",null,"The goal of this section is to ensure that the right version of Python and dbt are always available right away when you open your dbt project in VSCode. Sounds simple, but below is a one-time setup guide on how to make it work. More context is that some folks have bundled this set up process into ",(0,a.kt)("a",{parentName:"p",href:"https://discourse.getdbt.com/t/setting-up-your-local-dbt-run-environments/2353"},"bash scripts")," and ",(0,a.kt)("a",{parentName:"p",href:"https://discourse.getdbt.com/t/a-containerized-dbt-environment-for-your-team/2340"},"Docker containers"),"."),(0,a.kt)("p",null,"Some folks deem this problem so difficult as to justify having users use Docker containers, but I have yet to be convinced of that yet."),(0,a.kt)("h3",{id:"walkthrough"},"Walkthrough"),(0,a.kt)("p",null,"Python can be tricky get working in VSCode (and trickier to work on Windows). You OS likely already has a version of python installed, but this can be troublesome because you don't control it's version."),(0,a.kt)("p",null,"It's better practice to have a dedicated dbt environment. Three popular tools are ",(0,a.kt)("inlineCode",{parentName:"p"},"venv"),"'s, ",(0,a.kt)("inlineCode",{parentName:"p"},"virtualenv"),"'s and ",(0,a.kt)("inlineCode",{parentName:"p"},"conda")," environments. Our team uses ",(0,a.kt)("inlineCode",{parentName:"p"},"conda")," envs because we have many different projects with different sets of package requirements, but if dbt is 1) your only use case for Python, or 2) your first Python-based use case, you'll likely have a better time with ",(0,a.kt)("inlineCode",{parentName:"p"},"virtualenvs"),". I'm going to only talk about venv because it comes built-in with Python"),(0,a.kt)("p",null,"Open a terminal with `CTRL+`` (which should open within the jaffle_shop directory) and do the following steps:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# make sure you have Python at least 3.6 and less than 3.10\n# Create and activate virtual environment\npython3 -m venv .dbtenv\nsource .dbtenv/bin/activate\n\n# install the dbt package you want\npip install dbt-synapse # or dbt-sqlserver or whatever\n\n# make Git ignore all these newly created files\necho '.dbtenv/' > .gitignore\n")),(0,a.kt)("p",null,"Once you've done this you should now be able to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"bring up the command pallette (",(0,a.kt)("inlineCode",{parentName:"li"},"CMD+SHIFT+P"),")"),(0,a.kt)("li",{parentName:"ol"},'search for "Python: Select Interpreter", and'),(0,a.kt)("li",{parentName:"ol"},"Pick the ",(0,a.kt)("inlineCode",{parentName:"li"},".dbtenv")," environment (should be the first result)")),(0,a.kt)("p",null,"Those three steps will:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"activate the Python extension if it hasn't been already"),(0,a.kt)("li",{parentName:"ol"},"ensure that all new terminals opened in VSCode will auto-activate your ",(0,a.kt)("inlineCode",{parentName:"li"},".dbtenv")," environment")),(0,a.kt)("p",null,"This is huge because now all your terminals in the VSCode will always have your dbt package available. However, this behavior will not persist the next time you open this repo in VSCode. To make this auto-env selection persist, you must do two things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"add a ",(0,a.kt)("inlineCode",{parentName:"li"},"requirements.txt")," to you the top level of the repo (",(0,a.kt)("a",{parentName:"li",href:"https://pip.pypa.io/en/stable/user_guide/#requirements-files"},"pip docs on ",(0,a.kt)("inlineCode",{parentName:"a"},"requirements.txt")," files"),")"),(0,a.kt)("li",{parentName:"ol"},"(optional) add to the ",(0,a.kt)("inlineCode",{parentName:"li"},"requirements.txt")," what packages w/ versions you plan to do in this project (example below)"),(0,a.kt)("li",{parentName:"ol"},"create a new file ",(0,a.kt)("inlineCode",{parentName:"li"},".vscode/settings.json")," and add the Python path to the ",(0,a.kt)("inlineCode",{parentName:"li"},"settings.json")," (more on VSCode settings later!)")),(0,a.kt)("h4",{id:"requirementstxt"},(0,a.kt)("inlineCode",{parentName:"h4"},"requirements.txt")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dbt-synapse==0.19.2\nsqlfluff==0.7.1\n")),(0,a.kt)("h4",{id:"vscodesettingsjson"},(0,a.kt)("inlineCode",{parentName:"h4"},".vscode/settings.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    // change this to your desired path!\n    "python.pythonPath": "./.dbtenv/bin/python",\n}\n')),(0,a.kt)("p",null,"Now that you've done these two things, everytime you open the ",(0,a.kt)("inlineCode",{parentName:"p"},"jaffle_shop/")," dir, in VSCode two things should happen:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"the Python extension activates right away (do you see the Python version listed alongside your environment name on the bottom info bar?)"),(0,a.kt)("li",{parentName:"ol"},"any terminal you open will auto-activate your ",(0,a.kt)("inlineCode",{parentName:"li"},".dbtenv")," and each line should begin with ",(0,a.kt)("inlineCode",{parentName:"li"},"(.dbtenv)"))),(0,a.kt)("p",null,"You should test this by closing VSCode, then opening the ",(0,a.kt)("inlineCode",{parentName:"p"},"jaffle_shop")," repo"),(0,a.kt)("h2",{id:"extensions"},"Extensions"),(0,a.kt)("p",null,"In this section, I'll go over some of the extensions that our team uses. Each extension requires that you install it from within VSCode, and most will require adding additional settings to your ",(0,a.kt)("inlineCode",{parentName:"p"},".vscode/settings.json")),(0,a.kt)("h3",{id:"vscode-dbt"},"vscode-dbt"),(0,a.kt)("p",null,"the ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=bastienboutonnet.vscode-dbt"},"vscode-dbt extension")," is great because it provides a few things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"syntax highlighting for SQL with jinja in it (also for ",(0,a.kt)("inlineCode",{parentName:"li"},".md"),"'s and ",(0,a.kt)("inlineCode",{parentName:"li"},".yml"),"s), and"),(0,a.kt)("li",{parentName:"ol"},"helpful jinja snippets will save you a lot of time")),(0,a.kt)("p",null,"To get this working you should add the following to your ",(0,a.kt)("inlineCode",{parentName:"p"},".vscode/settings.json")),(0,a.kt)("p",null,"There's an optional addition I strongly recommend ",(0,a.kt)("inlineCode",{parentName:"p"},'"**/target/**": "",'),", which will not do any syntax highlighting/colorization to any file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"target/")," folder. This prevents me from making the classic mistake where I start editing a compiled model file, instead of the original model file. Then when I call ",(0,a.kt)("inlineCode",{parentName:"p"},"dbt run")," my changes aren't incorporated, but instead overwritten by the unchanged logic of the model file. with this setting you know something is wrong then the sql has no coloring."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"files.associations": {\n    // the pattern on the left side can be whatever you want: e.g.\n    "**/jaffle_shop/**/*.sql": "jinja-sql", // just the .sqlfiles inside of jaffle_shop, or\n    "*.sql": "jinja-sql", // all .sql files\n\n    // optional: don\'t format models in `target/` dir\n    "**/target/**": "",\n    // I don\'t personally use these, but you can also have jinja work for `yaml` and `md` files\n    "**/<dbt-project-dir>/**/*.yaml": "jinja-yaml",\n     "**/<dbt-project-dir>/**/*.yml": "jinja-yaml",\n    "**/<dbt-project-dir>/**/docs/**/*.md": "jinja-md"\n\n    // the vscode-dbt docs say you may need this\n    "editor.quickSuggestions": {\n    "strings": true\n    }\n}\n')),(0,a.kt)("p",null,"You'll know it is working when you open a ",(0,a.kt)("inlineCode",{parentName:"p"},".sql"),' model and, in the bottom toolbar on the right it says now says "Jinja SQL" instead of "SQL".'),(0,a.kt)("h3",{id:"find-related"},"Find Related"),(0,a.kt)("p",null,"the ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=amodio.find-related"},"find-related extension")," allows you to use regular expressions to correspond a ",(0,a.kt)("inlineCode",{parentName:"p"},".sql")," file in your ",(0,a.kt)("inlineCode",{parentName:"p"},"models/")," directory to it's ",(0,a.kt)("inlineCode",{parentName:"p"},"compiled")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," counterparts in the ",(0,a.kt)("inlineCode",{parentName:"p"},"target/")," folder. I find this a huge timesaver compared to manually naviagting the ",(0,a.kt)("inlineCode",{parentName:"p"},"target/")," dir in the explorer sidebar."),(0,a.kt)("p",null,"After you install the ",(0,a.kt)("inlineCode",{parentName:"p"},"find-related")," extension, you can enable it by adding the following to your ",(0,a.kt)("inlineCode",{parentName:"p"},".vscode/settings.json"),". There's no dbt or jinja magic going on here, just regex. So you may need to tweak these settings if they're not working for you."),(0,a.kt)("p",null,"Once it is set up, you can type ",(0,a.kt)("inlineCode",{parentName:"p"},"Option+R")," on any model file to jump to it's compiled version. While on a compiled model file, ",(0,a.kt)("inlineCode",{parentName:"p"},"Option+R")," will take you to it's ",(0,a.kt)("inlineCode",{parentName:"p"},"target/run")," counterpart."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    // this is so you can easily jump to your compiled SQL files\n    "findrelated.workspaceRulesets": [\n        {\n            "name": "sql",\n            "rules": [\n                {\n                    "pattern": "^(.*/)?models/(.*/)?(.+\\\\.sql)$",\n                    "locators": [\n                        "**/compiled/**/$3"\n                    ]\n                },\n                {\n                    "pattern": "^(.*/)?compiled/(.*/)?(.+\\\\.sql)$",\n                    "locators": [\n                        "**/run/**/$3"\n                    ]\n                },\n                {\n                    "pattern": "^(.*/)?run/(.*/)?(.+\\\\.sql)$",\n                    "locators": [\n                        "**/models/**/$3"\n                    ]\n                }\n            ]\n        }\n    ],\n    "findrelated.applyRulesets": [\n        "sql"\n    ]\n    }\n')),(0,a.kt)("h3",{id:"rainbow-csv"},"Rainbow CSV"),(0,a.kt)("p",null,"the ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv"},"rainbow-csv extension")," just highlights csvs where each column is it's own color. It's great to use when you have a csv where character-width varies greatly within a column. You can also hover over a value to see what column it belongs to. Very helpful for seeds!"),(0,a.kt)("h3",{id:"sql-fluff"},"SQL Fluff"),(0,a.kt)("p",null,"Our team has recently implemented sqlfluff linting for our dbt projects, especially because versions ",(0,a.kt)("inlineCode",{parentName:"p"},"0.6.5")," and greater now support TSQL. There's also a great VCcode extenstion."),(0,a.kt)("p",null,"If you already have a ",(0,a.kt)("inlineCode",{parentName:"p"},".sqlfluff")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".sqlfluffignore")," configured and working, it is enough to install ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=dorzey.vscode-sqlfluff"},"vscode-sqlfluff")," and add the following to your ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'    // you get this by calling `where sqlfluff` after calling `pip install sqlfluff`\n    "sql.linter.executablePath": "<PATH_TO_YOUR_SQLFLUFF_FROM_WHICH_SQLFLUFF_COMMAND",\n    "sql.linter.run": "onType" // alternatively "onSave" if you\'d like it less frequent \n')),(0,a.kt)("h3",{id:"dbt-power-user"},"dbt Power User"),(0,a.kt)("p",null,"I personally haven't had time to use the ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=innoverio.vscode-dbt-power-user"},"dbt Power User")," extension, but folks have good things to say. I hope to try it out soon and folks are more than welcome make a Pull Request to this doc as they see fit."),(0,a.kt)("h2",{id:"settings"},"Settings"),(0,a.kt)("h3",{id:"extra-settings"},"Extra settings"),(0,a.kt)("p",null,"Here's some other settings that I recommend:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'        // easier to see if there are unsaved changed\n        "workbench.editor.highlightModifiedTabs": true,\n        "workbench.editor.labelFormat": "medium",\n        // make Command Prompt the default shell for Windows instead of Powershell\n        "terminal.integrated.shell.windows": "C:\\\\Windows\\\\System32\\\\cmd.exe",\n        \n        // make a vertical line so I don\'t make lines too long\n        "editor.rulers": [80],\n        // show whitespace as dots\n        // (easier to count out indentation and spot trailing whitesapce)\n        "editor.renderWhitespace": "all",\n')),(0,a.kt)("h3",{id:"workspace-level-settings-files"},"Workspace-level settings files"),(0,a.kt)("p",null,"Sometimes it isn't convenient to have a ",(0,a.kt)("inlineCode",{parentName:"p"},".vscode/settings.json"),", such as when you:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"have a subset of settings under source control that you'd like all users to be using (it doesn't make sense to source control your specific Python path)"),(0,a.kt)("li",{parentName:"ol"},"you prefer ",(0,a.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/editor/multi-root-workspaces"},"multi-root workspaces")," a.k.a. more than one repo open at at time (great for when you also want your ",(0,a.kt)("inlineCode",{parentName:"li"},".dbt/profiles.yml")," close at hand)")),(0,a.kt)("p",null,"A worksapce settings file has the extension ",(0,a.kt)("inlineCode",{parentName:"p"},".code-workspace")," and encapsulates all the configuration you might find in a ",(0,a.kt)("inlineCode",{parentName:"p"},".vscode/")," dir into a single file. This file also works as a shortcut that you can double click or navigate to to bring up all your settings."),(0,a.kt)("p",null,"If someone wants more info on this free free to open an issue. For now I'll leave this as as stub."))}h.isMDXComponent=!0}}]);