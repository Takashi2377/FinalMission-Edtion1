import{_ as y,a as f,r as a,o as r,c,b as t,d as l,w as u,t as n,k as x,v as k,h as w,F as h,j as L,l as P,e as d}from"./index-9hDLyWWO.js";import{c as V}from"./cartStore-BRiE2sTK.js";import"./sweetalert2.all-FBMbIU1X.js";import"./toastMessage-el1N2vTb.js";var T={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"yuetin-hexschool",BASE_URL:"/FinalMission-Edtion1/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:m,VITE_PATH:b}=T,E={data(){return{product:{},qty:1,products:[],isLoading:!1}},watch:{"$route.query":{async handler(){this.getProduct()},deep:!0}},computed:{recommendProducts(){return this.products.filter(o=>{var s;return o.id!==((s=this.product)==null?void 0:s.id)}).sort(()=>Math.random()-.5).slice(0,3)}},methods:{async getProduct(){this.isLoading=!0;const{id:o}=this.$route.params;this.$http.get(`${m}/api/${b}/product/${o}`).then(s=>{this.product=s.data.product,this.isLoading=!1})},async getProducts(){this.isLoading=!0;const o=`${m}/api/${b}/products/all`;this.$http.get(o).then(s=>{this.products=s.data.products,this.isLoading=!1}).catch(s=>{alert(s.response.data.message)})},...f(V,["addToCart"])},mounted(){this.getProduct(),this.getProducts()}},q={class:"container py-4"},C={class:"row align-items-center"},R={class:"col-md-7 pt-3"},D=["src"],I={class:"col-md-5"},N={"aria-label":"breadcrumb"},U={class:"breadcrumb bg-white px-0 mb-0 py-3"},M={class:"breadcrumb-item"},S={class:"breadcrumb-item"},$=t("li",{class:"breadcrumb-item active","aria-current":"page"},"Detail",-1),A={class:"fw-bold h1 mb-1"},B={class:"mb-0 text-muted text-end"},F={class:"h4 fw-bold text-end"},H={class:"row align-items-center"},O={class:"col-6"},j={class:"input-group my-3 bg-light rounded"},z={class:"input-group-prepend"},G=["disabled"],J=t("i",{class:"bi bi-dash-lg"},null,-1),K=[J],Q={class:"input-group-append"},W=t("i",{class:"bi bi-plus-lg"},null,-1),X=[W],Y={class:"col-6"},Z={class:"text-secondary text-start lh-lg col-10 offset-1 mt-5 fs-6",style:{"text-indent":"2rem"}},tt=t("div",null,[t("p",{class:"text-black-50 text-start lh-lg col-10 offset-1 mt-2 fs-6 fst-italic"},[d(" *所有產品皆提供一年內非人為損壞保固、免費到府收件。 "),t("br"),d(" *所有產品皆可於出貨前客製化調整錶帶長度，請於訂單資料備註手腕測量結果。 ")])],-1),st={class:"container"},et=t("hr",null,null,-1),ot={key:0,class:"row my-3"},it=t("h2",{class:"text-center py-2"},"其他商品",-1),nt={class:"card border-0 mb-4"},dt=["src"],rt={class:"card-body text-center"};function ct(o,s,lt,at,e,_){const g=a("VueLoading"),p=a("router-link"),v=a("RouterLink");return r(),c(h,null,[t("div",q,[l(g,{active:e.isLoading,"z-index":1060},null,8,["active"]),t("div",C,[t("div",R,[t("img",{src:e.product.imageUrl,class:"d-block w-100 rounded-1",alt:"當前單一產品圖片"},null,8,D)]),t("div",I,[t("nav",N,[t("ol",U,[t("li",M,[l(p,{class:"navItem",to:"/"},{default:u(()=>[d("Home")]),_:1})]),t("li",S,[l(p,{class:"navItem",to:"/products"},{default:u(()=>[d("Products")]),_:1})]),$])]),t("h2",A,n(e.product.title),1),t("p",B,[t("del",null,"NT$ "+n(o.$filters.currency(e.product.origin_price)),1)]),t("p",F,"NT$ "+n(o.$filters.currency(e.product.price)),1),t("div",H,[t("div",O,[t("div",j,[t("div",z,[t("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon1",disabled:e.qty===1,onClick:s[0]||(s[0]=i=>e.qty--)},K,8,G)]),x(t("input",{type:"text",class:"form-control border-0 text-center my-auto shadow-none bg-light",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1","onUpdate:modelValue":s[1]||(s[1]=i=>e.qty=i),disabled:""},null,512),[[k,e.qty]]),t("div",Q,[t("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon2",onClick:s[2]||(s[2]=i=>e.qty++)},X)])])]),t("div",Y,[t("a",{class:"text-nowrap btn btn-dark w-100 py-2",onClick:s[3]||(s[3]=w(i=>(o.addToCart(e.product.id,e.qty),e.qty=1),["prevent"]))},"加入購物車")]),t("div",null,[t("p",Z,n(e.product.description),1)]),tt])])])]),t("div",st,[et,_.recommendProducts.length>0?(r(),c("div",ot,[it,(r(!0),c(h,null,L(_.recommendProducts,i=>(r(),c("div",{class:"col-md-4 mt-md-4",key:i.id},[t("div",nt,[t("img",{src:i.imageUrl,class:"card-img-top rounded-0",alt:"其他推薦商品圖片",height:"258"},null,8,dt),t("div",rt,[t("h4",null,n(i.title),1),l(v,{type:"button",class:"btn btn-outline-dark rounded-2 mt-3",to:`/product/${i.id}`},{default:u(()=>[d("立即選購")]),_:2},1032,["to"])])])]))),128))])):P("",!0)])],64)}const mt=y(E,[["render",ct]]);export{mt as default};