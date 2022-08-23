(function(){"use strict";var e={5983:function(e,n,t){var a=t(9242),o=t(3396),r=t(4870),i=t(7139),c=t(678),l=t(2804),s=t(408),u=t(7638);const v=(e,n,t,a)=>{const o=(0,r.iH)(""),i="/";return o.value=t?a?i+"brand-icons/"+e+"-"+n+"-"+a+"."+t:i+"brand-icons/"+e+"-"+n+"."+t:i+"brand-icons/"+e+"-"+n+".png",o};var m=v;const d=["icon","variant","format","src","alt"];var p={props:{icon:String,variant:String,format:String,height:String,width:String},setup(e){return(n,t)=>((0,o.wg)(),(0,o.iD)("img",{icon:e.icon,variant:e.variant,format:e.format,src:(0,r.SU)(m)(e.icon,e.variant,e.format).value,alt:e.icon,loading:"lazy",class:(0,i.C_)(e.variant),height:"100",width:"100"},null,10,d))}};const g=p;var w=g;const _={class:"category-list-item__title"},f={class:"category-list-item__count"};var h={props:{label:String,icon:String,count:Number,category:Object},setup(e){return(n,t)=>{const a=(0,o.up)("router-link");return(0,o.wg)(),(0,o.j4)(a,{to:{name:"Category",params:{category:e.category.slug},query:{search:void 0}},class:"category-list-item__link","active-class":"category-list-item__link--active"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{icon:e.icon,variant:"two-color",class:"category-list-item__icon"},null,8,["icon"]),(0,o._)("div",_,(0,i.zw)(e.label),1),(0,o._)("div",f,(0,i.zw)(e.count),1)])),_:1},8,["to"])}}};const y=h;var b=y;const k={class:"category-list"},S={class:"category-list__list"},C={class:"category-list-item"},U=(0,o._)("div",{class:"category-list-item__title"},"All brand icons",-1),T={class:"category-list-item__count"};var j={props:{icon:String,currentCategory:String},emits:["clearCurrentCategory"],setup(e,{emit:n}){const t=u.b,a=s.c;return(e,n)=>{const c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",k,[(0,o._)("ul",S,[(0,o._)("li",C,[(0,o.Wm)(c,{to:{name:"Home"},class:"category-list-item__link","active-class":"category-list-item__link--active"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{icon:"open-book",variant:"two-color",class:"category-list-item__icon"}),U,(0,o._)("div",T,(0,i.zw)((0,r.SU)(a).length),1)])),_:1})]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,r.SU)(t),(e=>((0,o.wg)(),(0,o.iD)("li",{key:e.title,class:"category-list__item"},[(0,o.Wm)(b,{label:e.label,icon:e.icon,category:e,count:e.icons.length},null,8,["label","icon","category","count"])])))),128))])])}}};const W=j;var M=W;t(89);const H={class:"modal"},O={class:"modal__actions"},D=(0,o._)("path",{d:"M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"},null,-1),B=[D],I={class:"modal__body"},V={class:"modal__icon-preview-wrapper"},z={class:"modal__preview-actions"},x={class:"modal__heading"},A=(0,o._)("p",{class:"text-center"},"Select a variant:",-1),E={class:"modal__icon-variants-wrapper"},L={class:"modal__icon-preview-wrapper"},P={class:"icon-preview__download"},F=(0,o.Uk)("SVG "),q=(0,o._)("i",{class:"fas fa-download"},null,-1),N=(0,o.Uk)(" Square (PNG) "),Y=(0,o._)("i",{class:"fas fa-download"},null,-1),K=(0,o.Uk)(" Wide (PNG) "),G=(0,o._)("i",{class:"fas fa-download"},null,-1),Z={class:"tags"};var R={props:{icon:Object,currentCategory:Object,variant:String},emits:["closeModal"],setup(e,{emit:n}){const t=e,c=(0,r.iH)(""),s=(0,r.iH)("white");function u(e){s.value="one-color-white"==e?"icon-preview--one-color-white":"",c.value=e}function v(e,n,t,a){gtag("event","icon_download",{icon_name:e,icon_variant:n,icon_format:t,icon_size:a})}c.value=t.variant,document.addEventListener("keydown",(function(e){"Escape"===e.key&&p()}));const d=[{variant:"one-color-black"},{variant:"two-color"},{variant:"one-color-gold"},{variant:"one-color-white"}];function p(){n("closeModal")}return(n,t)=>{const g=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",{class:"modal__backdrop",onClick:t[5]||(t[5]=(0,a.iM)((e=>p()),["self"]))},[(0,o._)("div",H,[(0,o._)("div",O,[((0,o.wg)(),(0,o.iD)("svg",{onClick:t[0]||(t[0]=e=>p()),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},B))]),(0,o._)("div",I,[(0,o._)("div",V,[(0,o._)("div",null,[(0,o._)("div",{class:(0,i.C_)(["icon-preview",s.value])},[(0,o.Wm)(w,{icon:e.icon.name,variant:c.value,class:"icon-preview__img"},null,8,["icon","variant"])],2)]),(0,o._)("div",z,[(0,o._)("div",null,[(0,o._)("h1",x,(0,i.zw)(e.icon.name),1),A,(0,o._)("div",E,[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(d,(n=>(0,o._)("div",{class:(0,i.C_)(["icon-preview icon-preview--small",[{"icon-preview--active":c.value==n.variant},"icon-preview--"+n.variant]]),key:n.variant},[(0,o.Wm)(w,{class:"icon-preview__img",icon:e.icon.name,variant:n.variant,onClick:e=>u(n.variant)},null,8,["icon","variant","onClick"])],2))),64))])])])]),(0,o._)("div",L,[(0,o._)("div",P,[(0,o._)("div",{class:"icon-preview__download-button-container",onClick:t[1]||(t[1]=n=>v(e.icon.name,c.value,"svg"))},[(0,o.Wm)((0,r.SU)(l.Pe),{href:(0,r.SU)(m)(e.icon.name,c.value,"svg").value,download:"",color:"tertiary",size:"small"},{default:(0,o.w5)((()=>[F,q])),_:1},8,["href"])]),(0,o._)("div",{class:"icon-preview__download-button-container",onClick:t[2]||(t[2]=n=>v(e.icon.name,c.value,"png","square"))},[(0,o.Wm)((0,r.SU)(l.Pe),{href:(0,r.SU)(m)(e.icon.name,c.value,"png","square").value,download:"",color:"tertiary",size:"small"},{default:(0,o.w5)((()=>[N,Y])),_:1},8,["href"])]),(0,o._)("div",{class:"icon-preview__download-button-container",onClick:t[3]||(t[3]=n=>v(e.icon.name,c.value,"png","wide"))},[(0,o.Wm)((0,r.SU)(l.Pe),{href:(0,r.SU)(m)(e.icon.name,c.value,"png","wide").value,download:"",color:"tertiary",size:"small"},{default:(0,o.w5)((()=>[K,G])),_:1},8,["href"])])])]),(0,o._)("div",Z,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.icon.keywords,(e=>((0,o.wg)(),(0,o.iD)("span",{key:e.id,onClick:t[4]||(t[4]=e=>p())},[(0,o.Wm)(g,{class:"uids-tag",to:{name:"Search",params:{term:e}},onClick:t=>n.gtag("event","tag_click",[{term:e}])},{default:(0,o.w5)((()=>[(0,o.Uk)("#"+(0,i.zw)(e),1)])),_:2},1032,["to","onClick"])])))),128))])])])])}}};const J=R;var Q=J;const X={key:0,class:"icon-list",id:"icon-list"},$={class:"icon-list__button-inner"},ee={class:"icon-list__label"},ne={key:1,class:"content text-center"},te=(0,o._)("p",null,"No icons found.",-1);var ae={props:{icons:Object,variant:String},emits:["openModal"],setup(e,{emit:n}){function t(e){gtag("event","icon_selected",{icon_name:e.name}),n("openModal",e)}return(n,a)=>{const r=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[e.icons?((0,o.wg)(),(0,o.iD)("div",X,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.icons,(n=>((0,o.wg)(),(0,o.j4)(r,{tag:"button",class:"icon-list__button",key:n.id,to:{hash:"#"+n.name},onClick:e=>t(n)},{default:(0,o.w5)((()=>[(0,o._)("div",$,[(0,o.Wm)(w,{icon:n.name,variant:e.variant},null,8,["icon","variant"]),(0,o._)("span",ee,(0,i.zw)(n.name),1)])])),_:2},1032,["to","onClick"])))),128))])):(0,o.kq)("",!0),0==e.icons.length?((0,o.wg)(),(0,o.iD)("div",ne,[(0,o.Wm)(w,{icon:"heart-break",format:"svg",variant:"two-color",class:"not-found-icon"}),te])):(0,o.kq)("",!0)],64)}}};const oe=ae;var re=oe;const ie={class:"search"},ce=["value"],le=(0,o._)("button",{class:"search__button"},[(0,o._)("svg",{id:"search","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 23"},[(0,o._)("title",null,"search"),(0,o._)("path",{d:"M19.82,16.38l-3.15-3.15a6.25,6.25,0,0,0,1.14-3.66,6.36,6.36,0,0,0-.51-2.51A6.68,6.68,0,0,0,15.93,5a6.45,6.45,0,0,0-2.07-1.37,6.41,6.41,0,0,0-5,0A6.29,6.29,0,0,0,6.79,5,6.54,6.54,0,0,0,5.41,7.06a6.43,6.43,0,0,0,0,5,6.47,6.47,0,0,0,5.95,4A6.24,6.24,0,0,0,15,14.89L18.16,18a1.08,1.08,0,0,0,.82.34,1.13,1.13,0,0,0,.83-.34,1.16,1.16,0,0,0,.35-.83A1.13,1.13,0,0,0,19.82,16.38Zm-5.56-3.91a3.94,3.94,0,0,1-2.9,1.21A4.11,4.11,0,0,1,7.25,9.57a4,4,0,0,1,1.2-2.9,4.09,4.09,0,0,1,5.81,0,4,4,0,0,1,1.2,2.9A4,4,0,0,1,14.26,12.47Z"})]),(0,o._)("span",{class:"sr-only"},"Search")],-1);var se={props:{currentSearchTerm:String},emits:["setCurrentSearchTerm"],setup(e,{emit:n}){const t=(0,c.tv)();(0,c.yj)();function r(e){e?(gtag("event","search",{search_term:e}),i(e),t.push({name:"Search",params:{term:e}})):t.push({name:"Home"})}function i(e){n("setCurrentSearchTerm",e)}return(n,t)=>((0,o.wg)(),(0,o.iD)("div",ie,[(0,o._)("form",{onSubmit:t[2]||(t[2]=(0,a.iM)((n=>r(e.currentSearchTerm)),["prevent"])),class:"search__form"},[(0,o._)("input",{type:"search",placeholder:"Examples: academics, accessibility, buildings, heart, iowa",class:"search__input",value:e.currentSearchTerm,onChange:t[0]||(t[0]=e=>i(e.target.value)),onFocus:t[1]||(t[1]=e=>e.target.select())},null,40,ce),le],32)]))}};const ue=se;var ve=ue,me=t(6673);const de={class:"settings__variant-selector"};var pe={props:{currentVariant:String},emits:["toggleVariantColor"],setup(e,{emit:n}){function t(){n("toggleVariantColor")}return(e,n)=>((0,o.wg)(),(0,o.iD)("div",de,[(0,o.Wm)((0,r.SU)(me.Z),{activeColor:"#ffcd00",title:"Color",name:"vue-toggle",toggled:!0,onToggle:t})]))}};const ge=pe;var we=ge;const _e={class:"site-name"},fe=(0,o.Uk)("Brand Icon Browser"),he={class:"wrapper"},ye={class:"sticky"},be={class:"download-section"},ke=(0,o.Uk)("Download all "),Se=(0,o._)("i",{class:"fas fa-download"},null,-1),Ce=(0,o._)("p",{class:"feedback"},[(0,o._)("a",{href:"mailto:osc-brand@uiowa.edu?subject=Brand Icon Browser Feedback"},"Submit Feedback"),(0,o._)("a",{href:"https://uiowa.edu/privacy"},"Privacy Notice")],-1),Ue={class:"copyright-container"},Te={class:"toolbar sticky"};var je={setup(e){const n=(0,r.iH)("two-color"),t=(0,c.tv)(),a=((0,c.yj)(),(0,r.iH)(!1)),u=(0,r.iH)(""),v=(0,r.iH)("");var m=(new Date).getFullYear();if(window.location.hash){let e=window.location.hash.replace("#",""),n=s.c.find((function(n){return n.name==e}));n&&(u.value=e,p(n))}function d(e){v.value=e}function p(e){a.value=!0,document.body.classList.add("modal-open"),u.value=e}function g(){setTimeout((()=>{"one-color-black"==n.value?n.value="two-color":n.value="one-color-black"}),300)}function w(){t.push({hash:""}),document.body.classList.remove("modal-open"),a.value=!1}return(e,t)=>{const c=(0,o.up)("router-link"),s=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)((0,r.SU)(l.DM),{height:"narrow"},{default:(0,o.w5)((()=>[(0,o._)("h1",_e,[(0,o.Wm)(c,{to:{name:"Home"}},{default:(0,o.w5)((()=>[fe])),_:1})])])),_:1}),(0,o._)("div",he,[(0,o._)("aside",null,[(0,o._)("div",ye,[(0,o.Wm)(M),(0,o._)("div",be,[(0,o.Wm)((0,r.SU)(l.Pe),{href:"https://github.com/uiowa/brand-icons/archive/refs/heads/main.zip",color:"tertiary",size:"small",full:!0,download:""},{default:(0,o.w5)((()=>[ke,Se])),_:1})]),Ce,(0,o._)("p",Ue," © "+(0,i.zw)((0,r.SU)(m))+" The University of Iowa ",1)])]),(0,o._)("main",null,[(0,o._)("div",Te,[(0,o.Wm)(ve,{id:"search",onSetCurrentSearchTerm:d,currentSearchTerm:v.value},null,8,["currentSearchTerm"]),(0,o.Wm)(we,{onToggleVariantColor:g,currentVariant:n.value},null,8,["currentVariant"])]),(0,o.Wm)(s,{onOpenModal:p,onSetCurrentSearchTerm:d,currentVariant:n.value},null,8,["currentVariant"])])]),a.value?((0,o.wg)(),(0,o.j4)(o.lR,{key:0,to:".modals"},[(0,o.Wm)(Q,{onCloseModal:w,variant:n.value,icon:u.value},null,8,["variant","icon"])])):(0,o.kq)("",!0)],64)}}};const We=je;var Me=We,He={props:{currentVariant:String},emits:["openModal"],setup(e,{emit:n}){(0,c.yj)();const t=(0,r.iH)(s.c.sort(((e,n)=>e.name.localeCompare(n.name))));function a(e){n("openModal",e)}return(n,r)=>((0,o.wg)(),(0,o.j4)(re,{icons:t.value,variant:e.currentVariant,onOpenModal:a},null,8,["icons","variant"]))}};const Oe=He;var De=Oe,Be={props:{currentVariant:String},emits:["openModal","setCurrentSearchTerm"],setup(e,{emit:n}){const t=(0,c.yj)(),a=(0,c.tv)(),i=(0,r.iH)(null);let l=u.b;t.params.category;const v=(0,o.Fl)((()=>{if(t.params.category){let e=t.params.category;i.value=l.find((n=>n.slug==e))}i.value||a.push({name:"NotFound"});let e={icons:[]},n=i.value.icons,o=new Set,r=[],c=[];return n.forEach((n=>e.icons.push(s.c.filter((function(e){return e.name==n}))))),r=e.icons.flat(),r.forEach((e=>{o.add(e)})),c=[...o],c.sort(((e,n)=>e.name.localeCompare(n.name))),c}));function m(e){n("openModal",e)}return(n,t)=>((0,o.wg)(),(0,o.j4)(re,{icons:(0,r.SU)(v),variant:e.currentVariant,onOpenModal:m},null,8,["icons","variant"]))}};const Ie=Be;var Ve=Ie,ze={props:{currentVariant:String},emits:["openModal","setCurrentSearchTerm"],setup(e,{emit:n}){(0,r.iH)("");const t=(0,c.yj)(),a=(0,c.tv)(),i=(0,r.iH)(null);v(t.params.term);const l=(0,o.Fl)((()=>{if(t.params.term)return i.value=t.params.term,m(i.value)}));function u(e){n("openModal",e)}function v(e){n("setCurrentSearchTerm",e)}function m(e){let n=[],t=new Set,a=e.replace("#","").toLowerCase(),o=s.c.filter((function(e){return e.name.includes(a.replace(" ","-"))})),r=s.c.filter((function(e){return e.keywords.includes(a)}));n=n.concat(o,r),n.forEach((e=>{t.add(e)}));let i=[...t];return i.sort(((e,n)=>e.name.localeCompare(n.name))),0==i.length&&gtag("event","search_no_results",{search_term:e}),i}return a.beforeEach(((e,n)=>{"Search"==e.name?v(e.params.term):v("")})),(n,t)=>((0,o.wg)(),(0,o.j4)(re,{icons:(0,r.SU)(l),variant:e.currentVariant,onOpenModal:u},null,8,["icons","variant"]))}};const xe=ze;var Ae=xe;const Ee={class:"content text-center"},Le=(0,o._)("h1",null,"404",-1),Pe=(0,o._)("p",null,"Page or icon not found.",-1);var Fe={setup(e){return(e,n)=>((0,o.wg)(),(0,o.iD)("div",Ee,[(0,o.Wm)(w,{icon:"heart-break",variant:"two-color",class:"not-found-icon"}),Le,Pe]))}};const qe=Fe;var Ne=qe;const Ye=u.b,Ke=s.c,Ge=[{path:"/",name:"Home",component:De,meta:{title:"All Icons",metaTags:[{name:"description",content:"Browse over 500 University of Iowa brand icons"},{property:"og:description",content:"Browse over 500 University of Iowa brand icons"}]}},{path:"/category/:category",name:"Category",component:Ve,meta:{title:"Category",metaTags:[{name:"description",content:"Browse over 500 University of Iowa brand icons"},{property:"og:description",content:"Browse over 500 University of Iowa brand icons"}]}},{path:"/search/:term",name:"Search",component:Ae,meta:{title:"Search",metaTags:[{name:"description",content:"Browse over 500 University of Iowa brand icons"},{property:"og:description",content:"Browse over 500 University of Iowa brand icons"}]}},{path:"/:pathMatch(.*)*",name:"NotFound",component:Ne,meta:{title:"Page or Icon Not Found",metaTags:[{name:"description",content:"Browse over 500 University of Iowa brand icons"},{property:"og:description",content:"Browse over 500 University of Iowa brand icons"}]}}],Ze=(0,c.p7)({history:(0,c.PO)("/"),routes:Ge});function Re(){var e=document.querySelector(".iowa-bar");e.scrollIntoView({block:"start",inline:"nearest"})}Ze.beforeEach(((e,n,t)=>{let a="",o="Brand Icon Browser - The University of Iowa",r=null,i=null;const c=e.matched.slice().reverse().find((e=>e.meta&&e.meta.title)),l=e.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags)),s=n.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags));if(c){if(e.hash){let n=e.hash.replace("#","").toLowerCase();r=Ke.find((e=>e.name===n))}e.params.category&&(i=Ye.find((n=>n.slug===e.params.category))),a=r?r.name:i?i.label:c.meta.title}else a=s?s.meta.title:c.meta.title;if(document.title=a+" | "+o,Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((e=>e.parentNode.removeChild(e))),!l)return t();l.meta.metaTags.map((e=>{const n=document.createElement("meta");return Object.keys(e).forEach((t=>{n.setAttribute(t,e[t])})),n.setAttribute("data-vue-router-controlled",""),n})).forEach((e=>document.head.appendChild(e))),e.hash||n.hash||Re(),t()}));var Je=Ze;(0,a.ri)(Me).use(Je).mount("#app")}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={exports:{}};return e[a](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,a,o,r){if(!a){var i=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],r=e[u][2];for(var c=!0,l=0;l<a.length;l++)(!1&r||i>=r)&&Object.keys(t.O).every((function(e){return t.O[e](a[l])}))?a.splice(l--,1):(c=!1,r<i&&(i=r));if(c){e.splice(u--,1);var s=o();void 0!==s&&(n=s)}}return n}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[a,o,r]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,a){var o,r,i=a[0],c=a[1],l=a[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(l)var u=l(t)}for(n&&n(a);s<i.length;s++)r=i[s],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},a=self["webpackChunkbrand_icon_browser"]=self["webpackChunkbrand_icon_browser"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(5983)}));a=t.O(a)})();
//# sourceMappingURL=app.c2733007.js.map