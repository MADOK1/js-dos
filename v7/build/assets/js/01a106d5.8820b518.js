"use strict";(self.webpackChunkgh_pages=self.webpackChunkgh_pages||[]).push([[295],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),i=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(t),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3936:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>s,metadata:()=>l,toc:()=>p,default:()=>c});var r=t(4034),o=(t(7294),t(3905));const a={id:"react",title:"In React (TypeScript)"},s=void 0,l={unversionedId:"react",id:"react",isDocsHomePage:!1,title:"In React (TypeScript)",description:"Bootstrapping application",source:"@site/docs/react.md",sourceDirName:".",slug:"/react",permalink:"/v7/build/docs/react",editUrl:"https://github.com/caiiiycuk/js-dos/edit/gh-pages/v7/docs/react.md",tags:[],version:"current",frontMatter:{id:"react",title:"In React (TypeScript)"},sidebar:"someSidebar",previous:{title:"In node.js",permalink:"/v7/build/docs/node"},next:{title:"In Three.js",permalink:"/v7/build/docs/threejs"}},p=[{value:"Bootstrapping application",id:"bootstrapping-application",children:[]},{value:"Creating DOS component",id:"creating-dos-component",children:[]},{value:"Using DosPlayer component",id:"using-dosplayer-component",children:[]}],i={toc:p};function c({components:e,...n}){return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"bootstrapping-application"},"Bootstrapping application"),(0,o.kt)("p",null,"In this example we will create react component that can start any ",(0,o.kt)("a",{parentName:"p",href:"jsdos-bundle"},"js-dos bundle"),"."),(0,o.kt)("p",null,"Let's start with creating TypeScript react app. Execute following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn create react-app my-app --template typescript\ncd my-app\n")),(0,o.kt)("p",null,"Next we need to download Digger ",(0,o.kt)("a",{parentName:"p",href:"jsdos-bundle"},"jsdos bundle")," into ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://cdn.dos.zone/original/2X/2/24b00b14f118580763440ecaddcc948f8cb94f14.jsdos -o public/digger.jsdos\n")),(0,o.kt)("p",null,"To run DOS program we need to install ",(0,o.kt)("inlineCode",{parentName:"p"},"js-dos")," package, and copy contents of ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," folders\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"public/js-dos")," directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add js-dos\ncp -r node_modules/js-dos/dist public/js-dos\n")),(0,o.kt)("p",null,"Resulting folder structure should be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"public/digger.jsdos    - digger js-dos bundle\npublic/js-dos/*        - js-dos package contents\n")),(0,o.kt)("p",null,"js-dos package is built on top of emulators-ui package, because of that to have correct types in TypeScript you also need to install emulators-ui package (it will be used only for type checking)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add emulators-ui\n")),(0,o.kt)("p",null,"Next we need to modify ",(0,o.kt)("inlineCode",{parentName:"p"},"public/index.html")," of react app to add js-dos scripts and styles."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'  <head>\n    \x3c!-- ... --\x3e\n    <script src="%PUBLIC_URL%/js-dos/js-dos.js"><\/script>\n    <link rel="stylesheet" href="%PUBLIC_URL%/js-dos/js-dos.css">\n    <script>\n       emulators.pathPrefix = "%PUBLIC_URL%/js-dos/";\n    <\/script>\n')),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Currently, js-dos v7 packages provides only types information, you can't import actual implementation as\njs module."),(0,o.kt)("p",{parentName:"div"},"You need to set ",(0,o.kt)("inlineCode",{parentName:"p"},"emulators.pathPrefix")," to point actual path to emulators, you can do this in ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," or in\nreact component."))),(0,o.kt)("h2",{id:"creating-dos-component"},"Creating DOS component"),(0,o.kt)("p",null,"Let's implement a React component that can run a DOS program. Create file ",(0,o.kt)("inlineCode",{parentName:"p"},"src/dos-player.tsx"),"."),(0,o.kt)("p",null,"Import type information and declare emulators in component module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { DosPlayer as Instance, DosPlayerFactoryType } from "js-dos";\n\ndeclare const Dos: DosPlayerFactoryType;\n')),(0,o.kt)("p",null,"Props of the component will have only url to ",(0,o.kt)("inlineCode",{parentName:"p"},"js-dos bundle"),". To embed js-dos we need to create root div\ncomponent:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'interface PlayerProps {\n    bundleUrl: string;\n}\n\nexport default function DosPlayer(props: PlayerProps) {\n    const rootRef = useRef<HTMLDivElement>(null);\n\n    return <div ref={rootRef} style={{ width: "100%", height: "100%" }}>\n    </div>;\n}\n')),(0,o.kt)("p",null,"When root div will be ready we will create a ",(0,o.kt)("inlineCode",{parentName:"p"},"DosInstance")," in it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"    const [dos, setDos] = useState<Instance | null>(null);\n\n    useEffect(() => {\n        if (rootRef === null || rootRef.current === null) {\n            return;\n        }\n\n        const root = rootRef.current as HTMLDivElement;\n        const instance = Dos(root);\n\n        setDos(instance);\n\n        return () => {\n            instance.stop();\n        };\n    }, [rootRef]);\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Do not forget to free resources by calling instance.stop at the end."))),(0,o.kt)("p",null,"Finally, we should run our program when dos are set:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"    useEffect(() => {\n        if (dos !== null) {\n            dos.run(props.bundleUrl); // ci is returned\n        }\n    }, [dos, props.bundleUrl]);\n")),(0,o.kt)("p",null,"Full component code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useEffect, useRef, useState } from "react";\n\nimport { DosPlayer as Instance, DosPlayerFactoryType } from "js-dos";\n\ndeclare const Dos: DosPlayerFactoryType;\n\ninterface PlayerProps {\n    bundleUrl: string;\n}\n\nexport default function DosPlayer(props: PlayerProps) {\n    const rootRef = useRef<HTMLDivElement>(null);\n\n    const [dos, setDos] = useState<Instance | null>(null);\n\n    useEffect(() => {\n        if (rootRef === null || rootRef.current === null) {\n            return;\n        }\n\n        const root = rootRef.current as HTMLDivElement;\n        const instance = Dos(root);\n\n        setDos(instance);\n\n        return () => {\n            instance.stop();\n        };\n    }, [rootRef]);\n\n    useEffect(() => {\n        if (dos !== null) {\n            dos.run(props.bundleUrl); // ci is returned\n        }\n    }, [dos, props.bundleUrl]);\n\n    return <div ref={rootRef} style={{ width: "100%", height: "100%" }}>\n    </div>;\n}\n')),(0,o.kt)("h2",{id:"using-dosplayer-component"},"Using DosPlayer component"),(0,o.kt)("p",null,"You can use this component as any other React component. Let's replace ",(0,o.kt)("inlineCode",{parentName:"p"},"src/app.tsx")," contents with our player:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\nimport \'./App.css\';\n\nimport DosPlayer from "./dos-player";\n\nfunction App() {\n  return (\n    <div className="App" style={{ width: "640px", height: "400px" }}>\n        <DosPlayer bundleUrl="digger.jsdos" />\n    </div>\n  );\n}\n\nexport default App;\n')),(0,o.kt)("p",null,"Now you can run the app and play Digger! Just type ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start"),"."))}c.isMDXComponent=!0}}]);