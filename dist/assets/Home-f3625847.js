import{d as y,r as B,a as u,o as h,c as f,b as e,F as m,e as b,w as $,v as F,n as a,p as S,f as E,_ as L,u as z,g as A,h as N,i as j,j as I,t as M,k as V}from"./index-ed7fb14f.js";const g=s=>(S("data-v-d6e2d4eb"),s=s(),E(),s),O={class:"relative my-10 w-[335px] lg:w-[730px] h-[200px] lg:h-[500px]"},X={class:"relative m-auto"},W=["src"],U=g(()=>e("img",{class:"absolute w-[335px] h-[184px] lg:w-[700px] lg:h-[480px] rounded-3xl carousel__bg--first lg:top-[5px] lg:right-[10px]",src:"https://www.w3schools.com/howto/img_nature_wide.jpg"},null,-1)),Y=g(()=>e("img",{class:"absolute w-[400px] h-[170px] lg:w-[700px] lg:h-[400px] rounded-3xl carousel__bg--second mt-[30px] lg:mt-[20px] lg:ml-[20px] lg:right-[10px] lg:top-[30px]",src:"https://www.w3schools.com/howto/img_nature_wide.jpg"},null,-1)),Z=g(()=>e("svg",{class:"w-8 h-8 lg:w-[40px] lg:h-[40px] fill-white",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("polygon",{points:"12.718 4.707 11.305 3.292 2.585 12 11.305 20.707 12.718 19.292 6.417 13 20 13 20 11 6.416 11 12.718 4.707"})],-1)),H=[Z],K=g(()=>e("svg",{class:"w-8 h-8 lg:w-[40px] lg:h-[40px] fill-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("polygon",{points:"11.293 4.707 17.586 11 4 11 4 13 17.586 13 11.293 19.293 12.707 20.707 21.414 12 12.707 3.293 11.293 4.707"})],-1)),q=[K],G={class:"absolute left-[50%] bottom-[20px] lg:bottom-[30px] flex gap-5 lg:gap-3 translate-x-[-50%] translate-y-[-50%] h-[10px] z-11"},J=["onClick"],P=g(()=>e("div",{class:"w-[8px] lg:w-8 rounded h-[8px] bg-slate-300"},null,-1)),Q=[P],R=y({__name:"Carousel",setup(s){const l=B(["https://www.w3schools.com/howto/img_nature_wide.jpg","https://picsum.photos/id/870/200/300?grayscale&blur=2","https://www.w3schools.com/howto/img_lights_wide.jpg"]),t=u(0);function o(r){r<0?t.value=l.length-1:r>l.length-1?t.value=0:t.value=r}return(r,i)=>(h(),f("div",O,[e("div",X,[(h(!0),f(m,null,b(l,(c,p)=>$((h(),f("div",{class:"mySlides fade absolute flex items-center justify-center",key:p},[e("img",{class:"w-[327px] h-[184px] lg:w-[730px] lg:h-[480px] rounded-3xl z-10",src:c},null,8,W)])),[[F,p===t.value]])),128)),U,Y]),e("a",{class:"absolute left-[10px] top-[50%] z-11 translate-y-[-50%]",onClick:i[0]||(i[0]=c=>o(t.value-1))},H),e("a",{class:"absolute right-[10px] top-[50%] z-11 translate-y-[-50%]",onClick:i[1]||(i[1]=c=>o(t.value+1))},q),e("div",G,[(h(!0),f(m,null,b(l.length,c=>(h(),f("span",{class:a(["",{active:t.value===c-1}]),onClick:p=>o(c-1),key:c},Q,10,J))),128))])]))}});const T=L(R,[["__scopeId","data-v-d6e2d4eb"]]);function ee(s){return A()?(N(s),!0):!1}function k(s){return typeof s=="function"?s():z(s)}const te=typeof window<"u"&&typeof document<"u",se=Object.prototype.toString,le=s=>se.call(s)==="[object Object]",oe=()=>{};function ae(s){var l;const t=k(s);return(l=t==null?void 0:t.$el)!=null?l:t}const C=te?window:void 0;function ne(...s){let l,t,o,r;if(typeof s[0]=="string"||Array.isArray(s[0])?([t,o,r]=s,l=C):[l,t,o,r]=s,!l)return oe;Array.isArray(t)||(t=[t]),Array.isArray(o)||(o=[o]);const i=[],c=()=>{i.forEach(n=>n()),i.length=0},p=(n,x,w,_)=>(n.addEventListener(x,w,_),()=>n.removeEventListener(x,w,_)),v=j(()=>[ae(l),k(r)],([n,x])=>{if(c(),!n)return;const w=le(x)?{...x}:x;i.push(...t.flatMap(_=>o.map(D=>p(n,_,D,w))))},{immediate:!0,flush:"post"}),d=()=>{v(),c()};return ee(d),d}function re({window:s=C}={}){if(!s)return{x:u(0),y:u(0)};const l=u(s.scrollX),t=u(s.scrollY);return ne(s,"scroll",()=>{l.value=s.scrollX,t.value=s.scrollY},{capture:!1,passive:!0}),{x:l,y:t}}const ie=V('<div class="width-full flex items-center justify-center lg:py-[20px] py-[10px]"><a class="hidden lg:flex cursor-pointer bg-slate-300 w-[970px] h-[250px] items-center justify-center text-white" href=""> 970 x 250 </a><a class="lg:hidden cursor-pointer bg-slate-300 w-[300px] h-[250px] flex items-center justify-center text-white" href=""> 300 x 250 </a></div><header class="bg-[#B38E5B] h-8 flex flex-col items-end py-1 px-[40px] hidden lg:flex"><ul class="flex gap-3 text-white"><li><a class="cursor-pointer text-sm">康健</a></li><li><a class="cursor-pointer text-sm">大人社團</a></li><li><a class="cursor-pointer text-sm">康健知識庫</a></li><li><a class="cursor-pointer text-sm">康健線上學習</a></li><li><a class="cursor-pointer text-sm">康健嚴選</a></li><li><a class="cursor-pointer text-sm">康健出版</a></li><li><a class="cursor-pointer text-sm">康健影音</a></li><li><a class="cursor-pointer text-sm">書香花園</a></li></ul></header>',2),ce=["aria-expanded"],ue=e("a",{class:"lg:h-[48px] w-[200px] text-white bg-black flex items-center justify-center mr-[10px] h-[29px]",href:""}," logo ",-1),pe=e("a",{class:"h-[48px] w-[200px] text-white rounded bg-slate-300 flex items-center justify-center hidden lg:flex",href:""}," 327 X 28 ",-1),de=e("select",{class:"mr-2.5 xl:min-w-[110px] focus-visible:outline-0 cursor-pointer"},[e("option",{value:"all"},"全部")],-1),xe=e("svg",{class:"w-7 h-7 fill-[#DDDDDD]",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"100",height:"100",viewBox:"0 0 50 50"},[e("path",{d:"M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"})],-1),he=[xe],fe=e("p",{class:"mr-[10px] hidden lg:flex text-base"},"會員限定",-1),ge=e("button",{class:"text-[#FF9122] border-[#FF9122] mr-[10px] py-1.5 px-4 rounded-[46px] border text-base"},"登入",-1),ve=e("button",{class:"text-white bg-[#FF9122] rounded-[46px] py-1.5 px-4 hidden lg:flex text-base"},"加入會員",-1),we=[fe,ge,ve],_e=e("a",{class:"h-[82px] w-[327px] text-white rounded bg-slate-300 flex items-center justify-center lg:hidden mt-[20px]",href:""}," 327 X 28 ",-1),me=e("a",{class:"h-screen flex items-center justify-center"},[e("span",{class:"text-[64px]"},"MENU")],-1),be=[_e,me],ye={class:"px-5 flex flex-col lg:flex-row-reverse lg:justify-around flex-wrap items-center"},je={class:"flex flex-col items-center justify-center lg:flex-col max-w-[410px]"},ke=e("div",{class:"w-full mb-[20px]"},[e("ul",{class:"flex"},[e("li",{class:"flex bg-grey-black/[.6] rounded-xl px-2 mr-[10px] text-sm"},[e("div",{class:"flex items-center justify-center"},[e("svg",{class:"w-[15px] h-[15px]",fill:"#ffffff",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24","xml:space":"preserve"},[e("path",{d:"M9,18l7-6L9,6V18z"})])]),e("span",{class:"text-white m-auto"},"影音")]),e("li",null,[e("span",{class:"text-[#B38E5B] text-sm mr-[10px]"},"#不分癌")]),e("li",null,[e("span",{class:"text-[#B38E5B] text-sm mr-[10px]"},"#常見治療問題")]),e("li",null,[e("span",{class:"text-[#B38E5B] text-sm"},"#常見問題")])])],-1),Ce={class:"text-[28px] font-bold leading-[42px]"},De=["href"],$e=y({__name:"Home",setup(s){const l=u(!1),t=u(!1),o=u(!1),r=u(""),i=u(""),{x:c,y:p}=re(),v=u(p.value);return fetch("https://newsapi.org/v2/top-headlines/sources?apiKey=0b38b1226bb8495399c8c50e26bd1e2f&country=ca").then(d=>d.json()).then(d=>{r.value=d.sources[1].description,i.value=d.sources[1].url}).catch(d=>{console.log("Error: ",d)}),j(()=>p.value,()=>{v.value<p.value?l.value||(t.value=!0):(t.value=!1,o.value=!1),v.value=p.value}),(d,n)=>(h(),f("div",null,[ie,e("div",{class:a([["items-center opacity-100 bg-white flex relative lg:justify-around shadow-nav h-[61px] lg:h-[80px]"],!t.value&&"justify-around",t.value&&"justify-center"])},[e("div",{class:a([["py-4 items-center lg:flex"],!t.value&&"flex",t.value&&"hidden"])},[e("button",{class:"mx-[20px] w-[20px] relative",id:"menu-toggle","aria-expanded":l.value?"true":"false",onClick:n[0]||(n[0]=x=>l.value=!l.value)},[e("span",{class:a([["block bg-black h-[3px] rounded w-full duration-100"],l.value&&"rotate-45 absolute duration-100"])},null,2),e("span",{class:a([["block bg-black h-[3px] rounded w-full mt-[4px] block"],l.value&&"hidden"])},null,2),e("span",{class:a([["block bg-black h-[3px] rounded w-full duration-100"],!l.value&&"mt-[4px]",l.value&&"-rotate-45 absolute duration-100 mt-0"])},null,2)],8,ce),ue,pe],2),e("div",{class:a([["lg:flex"],t.value&&"flex",!t.value&&"hidden"])},[e("div",{class:a([["lg:max-w-[400px] border border-[#DDDDDD] border-solid rounded-[46px] h-[40px] p-2 flex lg:mr-0"],o.value&&"mr-1",!o.value&&"mr-2.5"])},[de,e("div",{class:a([["flex rounded-[20px] border-[#DDDDDD] relative"],o.value&&"w-[70vw]"])},[e("input",{type:"text",class:a([["border-solid border border-y-0 border-r-0 pl-2.5 focus-visible:outline-0 lg:hidden"],!o.value&&"flex",o.value&&"hidden"])},null,2),e("input",{type:"text",class:a([["border-solid border border-y-0 border-r-0 pl-2.5 focus-visible:outline-0 lg:flex lg:w-[150px] xl:w-auto"],o.value&&"flex",!o.value&&"hidden"]),placeholder:"請輸入關鍵字"},null,2),e("button",{class:"absolute right-0",onClick:n[1]||(n[1]=x=>o.value=!o.value)},he)],2)],2),e("button",{class:a([["text-white bg-[#07B53B] rounded-[46px] py-1 px-2 lg:hidden"],!o.value&&"flex items-center justify-center",o.value&&"hidden"])}," 加入 LINE ",2)],2),e("div",{class:a([["items-center justify-center lg:flex"],!t.value&&"flex",t.value&&"hidden"])},we,2),e("nav",{class:a([["absolute top-16 lg:top-20 h-screen bg-[#F7F7F7] w-full min-h-full flex items-center lg:justify-center flex-col z-30"],!l.value&&"hidden duration-100",l.value&&"block duration-100"])},be,2)],2),e("div",ye,[I(T),e("div",je,[ke,e("h1",Ce,M(r.value),1),e("a",{href:i.value,target:"_blank",class:"mt-10 flex items-center justify-center text-[#FF9122] border-[#FF9122] py-2 px-4 rounded-[46px] border w-[171px]"},"立即閱讀",8,De)])])]))}});export{$e as default};