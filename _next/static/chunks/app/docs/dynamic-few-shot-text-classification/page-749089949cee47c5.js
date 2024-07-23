(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[613,301,76,52,451,548,84,838,289,326,457,669,290,852,515,532,931],{946:function(t,e,i){Promise.resolve().then(i.t.bind(i,231,23)),Promise.resolve().then(i.bind(i,4456)),Promise.resolve().then(i.bind(i,7408)),Promise.resolve().then(i.bind(i,2553)),Promise.resolve().then(i.bind(i,817))},4456:function(t,e,i){"use strict";i.d(e,{DocsHeader:function(){return r}});var n=i(7437),l=i(6463),s=i(5045);function r(t){let{title:e}=t,i=(0,l.usePathname)(),r=s.G.find(t=>t.links.find(t=>t.href===i));return e||r?(0,n.jsxs)("header",{className:"mb-9 space-y-1",children:[r&&(0,n.jsx)("p",{className:"font-display text-sm font-medium text-teal-800 dark:text-teal-200",children:r.title}),e&&(0,n.jsx)("h1",{className:"font-display text-3xl tracking-tight text-zinc-900 dark:text-white",children:e})]}):null}},7408:function(t,e,i){"use strict";i.d(e,{Fence:function(){return r}});var n=i(7437),l=i(2265),s=i(373);function r(t){let{children:e,language:i}=t;return(0,n.jsx)(s.y$,{code:e.trimEnd(),language:i,theme:{plain:{color:"#e4e4e7",fontStyle:"normal"},styles:[{types:["builtin","changed","keyword","function"],style:{color:"#ff7500"}},{types:["string","number","definition","boolean","class-name"],style:{color:"#fdba74"}},{types:["comment"],style:{color:"#6a9955"}},{types:["property","punctuation","operator"],style:{color:"#a1a1aa"}}]},children:t=>{let{className:e,style:i,tokens:s,getTokenProps:r}=t;return(0,n.jsx)("pre",{className:e,style:i,children:(0,n.jsx)("code",{children:s.map((t,e)=>(0,n.jsxs)(l.Fragment,{children:[t.filter(t=>!t.empty).map((t,e)=>(0,n.jsx)("span",{...r({token:t})},e)),"\n"]},e))})})}})}},2553:function(t,e,i){"use strict";i.d(e,{PrevNextLinks:function(){return d}});var n=i(7437),l=i(7138),s=i(6463),r=i(4839),a=i(5045);function o(t){return(0,n.jsx)("svg",{viewBox:"0 0 16 16","aria-hidden":"true",...t,children:(0,n.jsx)("path",{d:"m9.182 13.423-1.17-1.16 3.505-3.505H3V7.065h8.517l-3.506-3.5L9.181 2.4l5.512 5.511-5.511 5.512Z"})})}function c(t){let{title:e,href:i,dir:s="next",...a}=t;return(0,n.jsxs)("div",{...a,children:[(0,n.jsx)("dt",{className:"font-display text-sm font-medium text-zinc-900 dark:text-white",children:"next"===s?"Next":"Previous"}),(0,n.jsx)("dd",{className:"mt-1",children:(0,n.jsxs)(l.default,{href:i,className:(0,r.Z)("flex items-center gap-x-1 text-base font-semibold text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300","previous"===s&&"flex-row-reverse"),children:[e,(0,n.jsx)(o,{className:(0,r.Z)("h-4 w-4 flex-none fill-current","previous"===s&&"-scale-x-100")})]})})]})}function d(){let t=(0,s.usePathname)(),e=a.G.flatMap(t=>t.links),i=e.findIndex(e=>e.href===t),l=i>-1?e[i-1]:null,r=i>-1?e[i+1]:null;return r||l?(0,n.jsxs)("dl",{className:"mt-12 flex border-t border-zinc-200 pt-6 dark:border-zinc-800",children:[l&&(0,n.jsx)(c,{dir:"previous",...l}),r&&(0,n.jsx)(c,{className:"ml-auto text-right",...r})]}):null}},817:function(t,e,i){"use strict";i.d(e,{TableOfContents:function(){return a}});var n=i(7437),l=i(2265),s=i(7138),r=i(4839);function a(t){let{tableOfContents:e}=t,[i,a]=(0,l.useState)(e[0]?.id),o=(0,l.useCallback)(t=>t.flatMap(t=>[t.id,...t.children.map(t=>t.id)]).map(t=>{let e=document.getElementById(t);if(!e)return null;let i=parseFloat(window.getComputedStyle(e).scrollMarginTop);return{id:t,top:window.scrollY+e.getBoundingClientRect().top-i}}).filter(t=>null!==t),[]);function c(t){return t.id===i||!!t.children&&t.children.findIndex(c)>-1}return(0,l.useEffect)(()=>{if(0===e.length)return;let t=o(e);function i(){let e=window.scrollY,i=t[0].id;for(let n of t)if(e>=n.top-10)i=n.id;else break;a(i)}return window.addEventListener("scroll",i,{passive:!0}),i(),()=>{window.removeEventListener("scroll",i)}},[o,e]),(0,n.jsx)("div",{className:"hidden xl:sticky xl:top-[4.75rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.75rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6",children:(0,n.jsx)("nav",{"aria-labelledby":"on-this-page-title",className:"w-56",children:e.length>0&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{id:"on-this-page-title",className:"font-display text-sm font-medium text-zinc-900 dark:text-white",children:"On this page"}),(0,n.jsx)("ol",{role:"list",className:"mt-4 space-y-3 text-sm",children:e.map(t=>(0,n.jsxs)("li",{children:[(0,n.jsx)("h3",{children:(0,n.jsx)(s.default,{href:`#${t.id}`,className:(0,r.Z)(c(t)?"text-teal-500 dark:text-teal-200":"font-normal text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300"),children:t.title})}),t.children.length>0&&(0,n.jsx)("ol",{role:"list",className:"mt-2 space-y-3 pl-5 text-zinc-500 dark:text-zinc-400",children:t.children.map(t=>(0,n.jsx)("li",{children:(0,n.jsx)(s.default,{href:`#${t.id}`,className:c(t)?"text-teal-500 dark:text-teal-200":"hover:text-zinc-600 dark:hover:text-zinc-300",children:t.title})},t.id))})]},t.id))})]})})})}},5045:function(t,e,i){"use strict";i.d(e,{G:function(){return n}});let n=[{title:"Introduction",links:[{title:"Quick start",href:"/"},{title:"Backend families",href:"/docs/introduction-backend-families"}]},{title:"test",links:[{title:"test",href:"/docs/test"}]},{title:"Text classification",links:[{title:"Zero-shot text classification",href:"/docs/zero-shot-text-classification"},{title:"Few-shot text classification",href:"/docs/few-shot-text-classification"},{title:"Dynamic few-shot text classification",href:"/docs/dynamic-few-shot-text-classification"},{title:"Tunable text classification",href:"/docs/tunable-text-classification"}]},{title:"Text-to-text modelling",links:[{title:"Text summarization",href:"/docs/text-summarization"},{title:"Text translation",href:"/docs/text-translation"},{title:"Tunable text-to-text",href:"/docs/tunable-text-to-text"}]},{title:"Text Vectorization",links:[{title:"Overview",href:"/docs/text-vectorization"}]},{title:"Contributing",links:[{title:"How to contribute",href:"/docs/how-to-contribute"}]}]}},function(t){t.O(0,[231,55,971,23,744],function(){return t(t.s=946)}),_N_E=t.O()}]);