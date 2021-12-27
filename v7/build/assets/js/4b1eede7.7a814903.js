"use strict";(self.webpackChunkgh_pages=self.webpackChunkgh_pages||[]).push([[143],{3905:(t,e,o)=>{o.d(e,{Zo:()=>p,kt:()=>h});var n=o(7294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function a(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var s=n.createContext({}),c=function(t){var e=n.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):l(l({},e),t)),o},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),m=c(o),h=r,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||i;return o?n.createElement(d,l(l({ref:e},p),{},{components:o})):n.createElement(d,l({ref:e},p))}));function h(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=o.length,l=new Array(i);l[0]=m;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a.mdxType="string"==typeof t?t:r,l[1]=a;for(var c=2;c<i;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3919:(t,e,o)=>{function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}o.d(e,{b:()=>n,Z:()=>r})},4996:(t,e,o)=>{o.d(e,{C:()=>i,Z:()=>l});var n=o(2263),r=o(3919);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,n.Z)();return{withBaseUrl:(o,n)=>function(t,e,o,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!o)return o;if(o.startsWith("#"))return o;if((0,r.b)(o))return o;if(n)return e+o;const l=o.startsWith(e)?o:e+o.replace(/^\//,"");return i?t+l:l}(e,t,o,n)}}function l(t,e={}){const{withBaseUrl:o}=i();return o(t,e)}},3580:(t,e,o)=>{o.r(e),o.d(e,{frontMatter:()=>l,contentTitle:()=>a,metadata:()=>s,toc:()=>c,default:()=>u});var n=o(4034),r=(o(7294),o(3905)),i=o(4996);const l={id:"mobile-support",title:"Mobile support"},a=void 0,s={unversionedId:"mobile-support",id:"mobile-support",isDocsHomePage:!1,title:"Mobile support",description:"js-dos v7.xx mobile friendly. We build a set of controls that helps map touch gestures to key or mouse events.",source:"@site/docs/mobile-support.md",sourceDirName:".",slug:"/mobile-support",permalink:"/v7/build/docs/mobile-support",editUrl:"https://github.com/caiiiycuk/js-dos/edit/gh-pages/v7/docs/mobile-support.md",tags:[],version:"current",frontMatter:{id:"mobile-support",title:"Mobile support"},sidebar:"someSidebar",previous:{title:"Command Interface (CI)",permalink:"/v7/build/docs/command-interface"},next:{title:"Mouse locking",permalink:"/v7/build/docs/mouse-locking"}},c=[{value:"Positioning",id:"positioning",children:[]},{value:"Options Control",id:"options-control",children:[]},{value:"Key Control",id:"key-control",children:[]},{value:"Keyboard Control",id:"keyboard-control",children:[]},{value:"Switch Control",id:"switch-control",children:[]},{value:"Screen Move Control",id:"screen-move-control",children:[]},{value:"Nipple Activator Control",id:"nipple-activator-control",children:[]},{value:"Pointer Button Control",id:"pointer-button-control",children:[]},{value:"Pointer Move Control",id:"pointer-move-control",children:[]},{value:"Pointer Reset Control",id:"pointer-reset-control",children:[]}],p={toc:c};function u({components:t,...e}){return(0,r.kt)("wrapper",(0,n.Z)({},p,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"js-dos v7.xx mobile friendly. We build a set of controls that helps map touch gestures to key or mouse events."),(0,r.kt)("p",null,"The core concept of mobile support is a layer abstraction. Layer is a combination of virtual controls like buttons, joysticks and other that put on top of the game. Each control translates user interaction into some control sequences (keys, mouse) for the game."),(0,r.kt)("p",null,"You can put on top as many layers as you want. However, only one layer can be active at the same time."),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"https://dos.zone/studio"},"game-studio")," can help to visually create this controls for game."),(0,r.kt)("p",null,"Take a look how it works in real game:"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/I19hllmQWgk?start=20",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("h2",{id:"positioning"},"Positioning"),(0,r.kt)("p",null,"Layer do the layouting of controls that it have. When you create a layer you should choose the layout system.\nCurrently supported: ",(0,r.kt)("inlineCode",{parentName:"p"},"square")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"honeycomb")," layout."),(0,r.kt)("img",{alt:"square/honeycomb positioning",src:(0,i.Z)("img/grid.jpg")}),(0,r.kt)("h2",{id:"options-control"},"Options Control"),(0,r.kt)("p",null,"Control type ",(0,r.kt)("inlineCode",{parentName:"p"},"Options")," will create and ",(0,r.kt)("em",{parentName:"p"},"Options")," button that includes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"toggle keyboard")," action"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"save")," action"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"toggle fullscreen")," action")),(0,r.kt)("img",{alt:"options control",src:(0,i.Z)("img/special-button.jpg")}),(0,r.kt)("p",null,"You can't customize ",(0,r.kt)("inlineCode",{parentName:"p"},"Options")," control yet."),(0,r.kt)("h2",{id:"key-control"},"Key Control"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Key")," is a virtual button, that map touches into keyboard press and release event."),(0,r.kt)("img",{alt:"key control",src:(0,i.Z)("img/key.jpg")}),(0,r.kt)("p",null,"You must provide symbol and mapping key code for this control."),(0,r.kt)("h2",{id:"keyboard-control"},"Keyboard Control"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Keyboard")," is a virtual button that toggles virtual keyboard when you press it."),(0,r.kt)("img",{alt:"key control",src:(0,i.Z)("img/keyboard.jpg")}),(0,r.kt)("p",null,"You can't customize ",(0,r.kt)("inlineCode",{parentName:"p"},"Keyboard")," control yet."),(0,r.kt)("h2",{id:"switch-control"},"Switch Control"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Switch")," is a virtual button that switch between layers when you press it."),(0,r.kt)("p",null,"You must provide symbol and layer name to switch for this control.\nUsing this control you can easily implements multi-layer virtual controls."),(0,r.kt)("p",null,"Often one layer is enough for a game, but sometimes the game has a complex UI that requires changing layers between scenes. In that case you can attach multiple layers to the game and then switch between them when needed."),(0,r.kt)("p",null,"X-Com one such game, take a look how it works (",(0,r.kt)("inlineCode",{parentName:"p"},">")," is a switch control)."),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/gu8uFM7yuls",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("h2",{id:"screen-move-control"},"Screen Move Control"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Screen Move")," is a virtual button that moves the mouse into one of the sides (up, down, left, right) or into one of the corners. Using this control you can support the scroll of the game screen in games that scroll when the mouse pointer is near the screen edge."),(0,r.kt)("p",null,"You should provide side to that control. Usually this control used in combination with ",(0,r.kt)("inlineCode",{parentName:"p"},"Nipple Activator"),". "),(0,r.kt)("h2",{id:"nipple-activator-control"},"Nipple Activator Control"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Nipple Activator")," is a joystick that activates neighboring controls when a joystick touches them."),(0,r.kt)("img",{alt:"nipple activator control",src:(0,i.Z)("img/nipple-activator.jpg")}),(0,r.kt)("p",null,"This can be used to implement scroll behaviour in games. Watch the video above to see how it works."),(0,r.kt)("p",null,"You can't customize ",(0,r.kt)("inlineCode",{parentName:"p"},"Nipple Activator")," control yet."),(0,r.kt)("h2",{id:"pointer-button-control"},"Pointer Button Control"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Pointer Button")," is a virtual button that changes the behaviour of click/tap. By default, click/tap is interpreted as left mouse button click. With this control you can change it to right button peramnently or temporary (while holding it)."),(0,r.kt)("p",null,"This control has a ",(0,r.kt)("inlineCode",{parentName:"p"},"click")," property, if it is set, then clicking on the virtual button will set the pointer button to the right mouse button for next game click/tap. In the other case the button will be set to the right mouse button while you are holding the virtual button."),(0,r.kt)("p",null,"Look the video above to see how it works (look on ",(0,r.kt)("inlineCode",{parentName:"p"},"R")," virtual button)."),(0,r.kt)("h2",{id:"pointer-move-control"},"Pointer Move Control"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Pointer Move")," is a virtual button that moves mouse pointer into special screen position.\nPosition is passed in range ",(0,r.kt)("strong",{parentName:"p"},"[0 .. 1]")," (e.g. ","[0.5, 0,5]"," is a screen center)."),(0,r.kt)("h2",{id:"pointer-reset-control"},"Pointer Reset Control"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Pointer Reset")," is a virtual button that force sycning of browser cursor position and in-game cursor position."),(0,r.kt)("p",null,"You can't customize ",(0,r.kt)("inlineCode",{parentName:"p"},"Pointer Reset")," control yet."))}u.isMDXComponent=!0}}]);