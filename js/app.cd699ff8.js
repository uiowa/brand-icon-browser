(function(){"use strict";var e={7856:function(e,n,a){var t=a(9242),o=(a(7658),a(3396)),r=a(4870),i=a(7139),c=a(2483),l=a(2804),s=a(408),u=a(7638);const m=(e,n,a,t)=>{const o=(0,r.iH)(""),i="/";return o.value=a?t?i+"brand-icons/"+e+"-"+n+"-"+t+"."+a:i+"brand-icons/"+e+"-"+n+"."+a:i+"brand-icons/"+e+"-"+n+".png",o};var v=m;const d=["icon","variant","format","src","alt"];var p={__name:"Icon",props:{icon:String,variant:String,format:String,height:String,width:String},setup(e){return(n,a)=>((0,o.wg)(),(0,o.iD)("img",{icon:e.icon,variant:e.variant,format:e.format,src:(0,r.SU)(v)(e.icon,e.variant,e.format).value,alt:e.icon,loading:"lazy",class:(0,i.C_)(e.variant),height:"100",width:"100"},null,10,d))}};const _=p;var g=_;const w={class:"category-list-item__title"},f={class:"category-list-item__count"};var h={__name:"CategoryListItem",props:{label:String,icon:String,count:Number,category:Object},setup(e){return(n,a)=>{const t=(0,o.up)("router-link");return(0,o.wg)(),(0,o.j4)(t,{to:{name:"Category",params:{category:e.category.slug},query:{search:void 0}},class:"category-list-item__link","active-class":"category-list-item__link--active"},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{icon:e.icon,variant:"two-color",class:"category-list-item__icon"},null,8,["icon"]),(0,o._)("div",w,(0,i.zw)(e.label),1),(0,o._)("div",f,(0,i.zw)(e.count),1)])),_:1},8,["to"])}}};const y=h;var b=y;const k={class:"category-list"},S={class:"category-list__list"},C={class:"category-list-item"},U=(0,o._)("div",{class:"category-list-item__title"},"All brand icons",-1),T={class:"category-list-item__count"};var j={__name:"CategoryList",props:{icon:String,currentCategory:String},emits:["clearCurrentCategory"],setup(e,{emit:n}){const a=u.b,t=s.c;return(e,n)=>{const c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",k,[(0,o._)("ul",S,[(0,o._)("li",C,[(0,o.Wm)(c,{to:{name:"Home"},class:"category-list-item__link","active-class":"category-list-item__link--active"},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{icon:"open-book",variant:"two-color",class:"category-list-item__icon"}),U,(0,o._)("div",T,(0,i.zw)((0,r.SU)(t).length),1)])),_:1})]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,r.SU)(a),(e=>((0,o.wg)(),(0,o.iD)("li",{key:e.title,class:"category-list__item"},[(0,o.Wm)(b,{label:e.label,icon:e.icon,category:e,count:e.icons.length},null,8,["label","icon","category","count"])])))),128))])])}}};const H=j;var M=H;a(89);const W={class:"modal"},I={class:"modal__actions"},O=(0,o._)("path",{d:"M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"},null,-1),V=[O],D={class:"modal__body"},z={class:"modal__icon-preview-wrapper"},L={class:"modal__preview-actions"},B={class:"modal__heading"},A=(0,o._)("p",{class:"text-center"},"Select a variant:",-1),x={class:"modal__icon-variants-wrapper"},E={class:"modal__icon-preview-wrapper"},P={class:"icon-preview__download"},F=(0,o._)("i",{class:"fas fa-download"},null,-1),q=(0,o._)("i",{class:"fas fa-download"},null,-1),N=(0,o._)("i",{class:"fas fa-download"},null,-1),Y={class:"tags"};var K={__name:"IconModal",props:{icon:Object,currentCategory:Object,variant:String},emits:["closeModal"],setup(e,{emit:n}){const a=e,c=(0,r.iH)(""),s=(0,r.iH)("white");function u(e){s.value="one-color-white"==e?"icon-preview--one-color-white":"",c.value=e}function m(e,n,a,t){gtag("event","icon_download",{icon_name:e,icon_variant:n,icon_format:a,icon_size:t})}c.value=a.variant,document.addEventListener("keydown",(function(e){"Escape"===e.key&&p()}));const d=[{variant:"one-color-black"},{variant:"two-color"},{variant:"one-color-gold"},{variant:"one-color-white"}];function p(){n("closeModal")}return(n,a)=>{const _=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",{class:"modal__backdrop",onClick:a[5]||(a[5]=(0,t.iM)((e=>p()),["self"]))},[(0,o._)("div",W,[(0,o._)("div",I,[((0,o.wg)(),(0,o.iD)("svg",{onClick:a[0]||(a[0]=e=>p()),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},V))]),(0,o._)("div",D,[(0,o._)("div",z,[(0,o._)("div",null,[(0,o._)("div",{class:(0,i.C_)(["icon-preview",s.value])},[(0,o.Wm)(g,{icon:e.icon.name,variant:c.value,class:"icon-preview__img"},null,8,["icon","variant"])],2)]),(0,o._)("div",L,[(0,o._)("div",null,[(0,o._)("h1",B,(0,i.zw)(e.icon.name),1),A,(0,o._)("div",x,[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(d,(n=>(0,o._)("div",{class:(0,i.C_)(["icon-preview icon-preview--small",[{"icon-preview--active":c.value==n.variant},"icon-preview--"+n.variant]]),key:n.variant},[(0,o.Wm)(g,{class:"icon-preview__img",icon:e.icon.name,variant:n.variant,onClick:e=>u(n.variant)},null,8,["icon","variant","onClick"])],2))),64))])])])]),(0,o._)("div",E,[(0,o._)("div",P,[(0,o._)("div",{class:"icon-preview__download-button-container",onClick:a[1]||(a[1]=n=>m(e.icon.name,c.value,"svg"))},[(0,o.Wm)((0,r.SU)(l.Pe),{href:(0,r.SU)(v)(e.icon.name,c.value,"svg").value,download:"",color:"tertiary",size:"small"},{default:(0,o.w5)((()=>[(0,o.Uk)("SVG "),F])),_:1},8,["href"])]),(0,o._)("div",{class:"icon-preview__download-button-container",onClick:a[2]||(a[2]=n=>m(e.icon.name,c.value,"png","square"))},[(0,o.Wm)((0,r.SU)(l.Pe),{href:(0,r.SU)(v)(e.icon.name,c.value,"png","square").value,download:"",color:"tertiary",size:"small"},{default:(0,o.w5)((()=>[(0,o.Uk)(" PNG (Square) "),q])),_:1},8,["href"])]),(0,o._)("div",{class:"icon-preview__download-button-container",onClick:a[3]||(a[3]=n=>m(e.icon.name,c.value,"png","wide"))},[(0,o.Wm)((0,r.SU)(l.Pe),{href:(0,r.SU)(v)(e.icon.name,c.value,"png","wide").value,download:"",color:"tertiary",size:"small"},{default:(0,o.w5)((()=>[(0,o.Uk)(" PNG (Wide) "),N])),_:1},8,["href"])])])]),(0,o._)("div",Y,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.icon.keywords,(e=>((0,o.wg)(),(0,o.iD)("span",{key:e.id,onClick:a[4]||(a[4]=e=>p())},[(0,o.Wm)(_,{class:"uids-tag",to:{name:"Search",params:{term:e}},onClick:a=>n.gtag("event","tag_click",[{term:e}])},{default:(0,o.w5)((()=>[(0,o.Uk)("#"+(0,i.zw)(e),1)])),_:2},1032,["to","onClick"])])))),128))])])])])}}};const G=K;var Z=G;const R={key:0,class:"icon-list",id:"icon-list"},J={class:"icon-list__button-inner"},Q={class:"icon-list__label"},X={key:1,class:"content text-center"},$=(0,o._)("p",null,"No icons found.",-1);var ee={__name:"IconList",props:{icons:Object,variant:String},emits:["openModal"],setup(e,{emit:n}){function a(e){gtag("event","icon_selected",{icon_name:e.name}),n("openModal",e)}return(n,t)=>{const r=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[e.icons?((0,o.wg)(),(0,o.iD)("div",R,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.icons,(n=>((0,o.wg)(),(0,o.j4)(r,{tag:"button",class:"icon-list__button",key:n.id,to:{hash:"#"+n.name},onClick:e=>a(n)},{default:(0,o.w5)((()=>[(0,o._)("div",J,[(0,o.Wm)(g,{icon:n.name,variant:e.variant},null,8,["icon","variant"]),(0,o._)("span",Q,(0,i.zw)(n.name),1)])])),_:2},1032,["to","onClick"])))),128))])):(0,o.kq)("",!0),0==e.icons.length?((0,o.wg)(),(0,o.iD)("div",X,[(0,o.Wm)(g,{icon:"heart-break",format:"svg",variant:"two-color",class:"not-found-icon"}),$])):(0,o.kq)("",!0)],64)}}};const ne=ee;var ae=ne;const te={class:"search"},oe=["value"],re=(0,o._)("button",{class:"search__button"},[(0,o._)("svg",{id:"search","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 23"},[(0,o._)("title",null,"search"),(0,o._)("path",{d:"M19.82,16.38l-3.15-3.15a6.25,6.25,0,0,0,1.14-3.66,6.36,6.36,0,0,0-.51-2.51A6.68,6.68,0,0,0,15.93,5a6.45,6.45,0,0,0-2.07-1.37,6.41,6.41,0,0,0-5,0A6.29,6.29,0,0,0,6.79,5,6.54,6.54,0,0,0,5.41,7.06a6.43,6.43,0,0,0,0,5,6.47,6.47,0,0,0,5.95,4A6.24,6.24,0,0,0,15,14.89L18.16,18a1.08,1.08,0,0,0,.82.34,1.13,1.13,0,0,0,.83-.34,1.16,1.16,0,0,0,.35-.83A1.13,1.13,0,0,0,19.82,16.38Zm-5.56-3.91a3.94,3.94,0,0,1-2.9,1.21A4.11,4.11,0,0,1,7.25,9.57a4,4,0,0,1,1.2-2.9,4.09,4.09,0,0,1,5.81,0,4,4,0,0,1,1.2,2.9A4,4,0,0,1,14.26,12.47Z"})]),(0,o._)("span",{class:"sr-only"},"Search")],-1);var ie={__name:"SearchBar",props:{currentSearchTerm:String},emits:["setCurrentSearchTerm"],setup(e,{emit:n}){const a=(0,c.tv)();(0,c.yj)();function r(e){e?(gtag("event","search",{search_term:e}),i(e),a.push({name:"Search",params:{term:e}})):a.push({name:"Home"})}function i(e){n("setCurrentSearchTerm",e)}return(n,a)=>((0,o.wg)(),(0,o.iD)("div",te,[(0,o._)("form",{onSubmit:a[2]||(a[2]=(0,t.iM)((n=>r(e.currentSearchTerm)),["prevent"])),class:"search__form"},[(0,o._)("input",{type:"search",placeholder:"Examples: academics, accessibility, buildings, heart, iowa",class:"search__input",value:e.currentSearchTerm,onChange:a[0]||(a[0]=e=>i(e.target.value)),onFocus:a[1]||(a[1]=e=>e.target.select())},null,40,oe),re],32)]))}};const ce=ie;var le=ce,se=a(6673);const ue={class:"settings__variant-selector"};var me={__name:"Settings",props:{currentVariant:String},emits:["toggleVariantColor"],setup(e,{emit:n}){function a(){n("toggleVariantColor")}return(e,n)=>((0,o.wg)(),(0,o.iD)("div",ue,[(0,o.Wm)((0,r.SU)(se.Z),{activeColor:"#ffcd00",title:"Color",name:"vue-toggle",toggled:!0,onToggle:a})]))}};const ve=me;var de=ve;const pe={class:"site-name"},_e=(0,o._)("nav",{role:"navigation","aria-labelledby":"toplinks-menu",id:"toplinks",class:"menu--top"},[(0,o._)("h2",{class:"visually-hidden",id:"toplinks-menu"},"Top links"),(0,o._)("ul",{class:"menu"},[(0,o._)("li",null,[(0,o._)("a",{href:"https://brand.uiowa.edu/graphic-elements#iconography"},"Icon Usage")])])],-1),ge={class:"wrapper",id:"main-wrapper"},we={class:"sticky"},fe={class:"download-section"},he=(0,o._)("i",{class:"fas fa-download"},null,-1),ye=(0,o._)("p",{class:"feedback"},[(0,o._)("a",{href:"mailto:osc-brand@uiowa.edu?subject=Icon Browser Feedback"},"Submit Feedback"),(0,o._)("a",{href:"https://uiowa.edu/privacy"},"Privacy Notice")],-1),be={class:"copyright-container"},ke={class:"main-container"},Se={class:"toolbar sticky"};var Ce={__name:"App",setup(e){const n=(0,r.iH)("two-color"),a=(0,c.tv)(),t=((0,c.yj)(),(0,r.iH)(!1)),u=(0,r.iH)(""),m=(0,r.iH)("");var v=(new Date).getFullYear();if(window.location.hash){let e=window.location.hash.replace("#",""),n=s.c.find((function(n){return n.name==e}));n&&(u.value=e,p(n))}function d(e){m.value=e}function p(e){t.value=!0,document.body.classList.add("modal-open"),u.value=e}function _(){setTimeout((()=>{"one-color-black"==n.value?n.value="two-color":n.value="one-color-black"}),300)}function g(){a.push({hash:""}),document.body.classList.remove("modal-open"),t.value=!1}return(e,a)=>{const c=(0,o.up)("router-link"),s=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)((0,r.SU)(l.DM),{height:"narrow",class:"iowa-bar--full iowa-bar horizontal"},{default:(0,o.w5)((()=>[(0,o._)("h1",pe,[(0,o.Wm)(c,{to:{name:"Home"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Icon Browser")])),_:1})]),_e])),_:1}),(0,o._)("div",ge,[(0,o._)("aside",null,[(0,o._)("div",we,[(0,o.Wm)(M),(0,o._)("div",fe,[(0,o.Wm)((0,r.SU)(l.Pe),{href:"https://github.com/uiowa/brand-icons/archive/refs/heads/main.zip",color:"tertiary",size:"small",full:!0,download:""},{default:(0,o.w5)((()=>[(0,o.Uk)("Download all "),he])),_:1})]),ye,(0,o._)("p",be," © "+(0,i.zw)((0,r.SU)(v))+" The University of Iowa ",1)])]),(0,o._)("main",ke,[(0,o._)("div",Se,[(0,o.Wm)(le,{id:"search",onSetCurrentSearchTerm:d,currentSearchTerm:m.value},null,8,["currentSearchTerm"]),(0,o.Wm)(de,{onToggleVariantColor:_,currentVariant:n.value},null,8,["currentVariant"])]),(0,o.Wm)(s,{onOpenModal:p,onSetCurrentSearchTerm:d,currentVariant:n.value},null,8,["currentVariant"])])]),t.value?((0,o.wg)(),(0,o.j4)(o.lR,{key:0,to:".modals"},[(0,o.Wm)(Z,{onCloseModal:g,variant:n.value,icon:u.value},null,8,["variant","icon"])])):(0,o.kq)("",!0)],64)}}};const Ue=Ce;var Te=Ue,je={__name:"HomeView",props:{currentVariant:String},emits:["openModal"],setup(e,{emit:n}){(0,c.yj)();const a=(0,r.iH)(s.c.sort(((e,n)=>e.name.localeCompare(n.name))));function t(e){n("openModal",e)}return(n,r)=>((0,o.wg)(),(0,o.j4)(ae,{icons:a.value,variant:e.currentVariant,onOpenModal:t},null,8,["icons","variant"]))}};const He=je;var Me=He,We={__name:"CategoryView",props:{currentVariant:String},emits:["openModal","setCurrentSearchTerm"],setup(e,{emit:n}){const a=(0,c.yj)(),t=(0,c.tv)(),i=(0,r.iH)(null);let l=u.b;a.params.category;const m=(0,o.Fl)((()=>{if(a.params.category){let e=a.params.category;i.value=l.find((n=>n.slug==e))}i.value||t.push({name:"NotFound"});let e={icons:[]},n=i.value.icons,o=new Set,r=[],c=[];return n.forEach((n=>e.icons.push(s.c.filter((function(e){return e.name==n}))))),r=e.icons.flat(),r.forEach((e=>{o.add(e)})),c=[...o],c.sort(((e,n)=>e.name.localeCompare(n.name))),c}));function v(e){n("openModal",e)}return(n,a)=>((0,o.wg)(),(0,o.j4)(ae,{icons:(0,r.SU)(m),variant:e.currentVariant,onOpenModal:v},null,8,["icons","variant"]))}};const Ie=We;var Oe=Ie,Ve={__name:"SearchView",props:{currentVariant:String},emits:["openModal","setCurrentSearchTerm"],setup(e,{emit:n}){(0,r.iH)("");const a=(0,c.yj)(),t=(0,c.tv)(),i=(0,r.iH)(null);m(a.params.term);const l=(0,o.Fl)((()=>{if(a.params.term)return i.value=a.params.term,v(i.value)}));function u(e){n("openModal",e)}function m(e){n("setCurrentSearchTerm",e)}function v(e){let n=[],a=new Set,t=e.replace("#","").toLowerCase(),o=s.c.filter((function(e){return e.name.includes(t.replace(" ","-"))})),r=s.c.filter((function(e){return e.keywords.includes(t)}));n=n.concat(o,r),n.forEach((e=>{a.add(e)}));let i=[...a];return i.sort(((e,n)=>e.name.localeCompare(n.name))),0==i.length&&gtag("event","search_no_results",{search_term:e}),i}return t.beforeEach(((e,n)=>{"Search"==e.name?m(e.params.term):m("")})),(n,a)=>((0,o.wg)(),(0,o.j4)(ae,{icons:(0,r.SU)(l),variant:e.currentVariant,onOpenModal:u},null,8,["icons","variant"]))}};const De=Ve;var ze=De;const Le={class:"content text-center"},Be=(0,o._)("h1",null,"404",-1),Ae=(0,o._)("p",null,"Page or icon not found.",-1);var xe={__name:"NotFoundView",setup(e){return(e,n)=>((0,o.wg)(),(0,o.iD)("div",Le,[(0,o.Wm)(g,{icon:"heart-break",variant:"two-color",class:"not-found-icon"}),Be,Ae]))}};const Ee=xe;var Pe=Ee;const Fe=u.b,qe=s.c,Ne=[{path:"/",name:"Home",component:Me,meta:{title:"All Icons",metaTags:[{name:"description",content:"Browse over 500 University of Iowa brand icons"},{property:"og:description",content:"Browse over 500 University of Iowa brand icons"}]}},{path:"/category/:category",name:"Category",component:Oe,meta:{title:"Category",metaTags:[{name:"description",content:"Browse over 500 University of Iowa brand icons"},{property:"og:description",content:"Browse over 500 University of Iowa brand icons"}]}},{path:"/search/:term",name:"Search",component:ze,meta:{title:"Search",metaTags:[{name:"description",content:"Browse over 500 University of Iowa brand icons"},{property:"og:description",content:"Browse over 500 University of Iowa brand icons"}]}},{path:"/:pathMatch(.*)*",name:"NotFound",component:Pe,meta:{title:"Page or Icon Not Found",metaTags:[{name:"description",content:"Browse over 500 University of Iowa brand icons"},{property:"og:description",content:"Browse over 500 University of Iowa brand icons"}]}}],Ye=(0,c.p7)({history:(0,c.PO)("/"),routes:Ne});function Ke(){var e=document.querySelector(".iowa-bar");e.scrollIntoView({block:"start",inline:"nearest"})}function Ge(){var e=document.querySelector(".main-container");e.scrollIntoView({alignToTop:!0,block:"start",inline:"nearest"})}Ye.beforeEach(((e,n,a)=>{let t="",o="Icon Browser - The University of Iowa",r=null,i=null;const c=e.matched.slice().reverse().find((e=>e.meta&&e.meta.title)),l=e.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags)),s=n.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags));if(c){if(e.hash){let n=e.hash.replace("#","").toLowerCase();r=qe.find((e=>e.name===n))}e.params.category&&(i=Fe.find((n=>n.slug===e.params.category))),t=r?r.name:i?i.label:c.meta.title}else t=s?s.meta.title:c.meta.title;if(document.title=t+" | "+o,Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((e=>e.parentNode.removeChild(e))),!l)return a();l.meta.metaTags.map((e=>{const n=document.createElement("meta");return Object.keys(e).forEach((a=>{n.setAttribute(a,e[a])})),n.setAttribute("data-vue-router-controlled",""),n})).forEach((e=>document.head.appendChild(e))),e.hash||n.hash||("Search"==e.name||"Category"==e.name||"Home"==e.name?Ge():Ke()),a()}));var Ze=Ye;(0,t.ri)(Te).use(Ze).mount("#app")}},n={};function a(t){var o=n[t];if(void 0!==o)return o.exports;var r=n[t]={exports:{}};return e[t](r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(n,t,o,r){if(!t){var i=1/0;for(u=0;u<e.length;u++){t=e[u][0],o=e[u][1],r=e[u][2];for(var c=!0,l=0;l<t.length;l++)(!1&r||i>=r)&&Object.keys(a.O).every((function(e){return a.O[e](t[l])}))?t.splice(l--,1):(c=!1,r<i&&(i=r));if(c){e.splice(u--,1);var s=o();void 0!==s&&(n=s)}}return n}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[t,o,r]}}(),function(){a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,{a:n}),n}}(),function(){a.d=function(e,n){for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};a.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,r,i=t[0],c=t[1],l=t[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(o in c)a.o(c,o)&&(a.m[o]=c[o]);if(l)var u=l(a)}for(n&&n(t);s<i.length;s++)r=i[s],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},t=self["webpackChunkbrand_icon_browser"]=self["webpackChunkbrand_icon_browser"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=a.O(void 0,[998],(function(){return a(7856)}));t=a.O(t)})();
//# sourceMappingURL=app.cd699ff8.js.map