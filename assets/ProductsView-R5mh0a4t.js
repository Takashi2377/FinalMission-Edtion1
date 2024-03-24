import{_ as y,o as d,c as l,b as t,j as c,v as u,F as v,i as U,x as k,a as x,r as f,d as P,t as _}from"./index-UV12MeIp.js";import{u as w}from"./toastMessage-YhLv_bF_.js";import{P as C}from"./PaginationComponent-tFRav8z1.js";import{m as V,D}from"./DelProductModalComponent-FLo5718k.js";const L={props:["product","isNew"],data(){return{modal:"",editProduct:{}}},emits:["update-product"],mixins:[V],mounted(){this.editProduct=this.product},watch:{product(){this.editProduct=this.product}},methods:{createImages(){this.editProduct.imagesUrl=[],this.editProduct.imagesUrl.push("")}}},$={id:"productModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},E={class:"modal-dialog modal-xl"},A={class:"modal-content border-0"},I={class:"modal-header bg-dark text-white"},T={id:"productModalLabel",class:"modal-title"},N={key:0},R={key:1},S=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),B={class:"modal-body"},F={class:"row mb-3"},H={class:"col-sm-4"},O={class:"form-group mb-3"},j=t("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),z=["src"],q={key:0},G={class:"form-group"},J=["for"],K=["id","onUpdate:modelValue"],Q=["src"],W={key:0},X={key:1},Y={key:1},Z={class:"col-sm-8"},tt={class:"form-group mb-3"},et=t("label",{for:"title",class:"form-label"},"標題",-1),ot={class:"row mb-3"},st={class:"form-group col-md-6"},it=t("label",{for:"category",class:"form-label"},"分類",-1),dt={class:"form-group col-md-6"},lt=t("label",{for:"unit",class:"form-label"},"單位",-1),nt={class:"row mb-3"},rt={class:"form-group col-md-6"},ct=t("label",{for:"origin_price",class:"form-label"},"原價",-1),at={class:"form-group col-md-6"},ut=t("label",{for:"price",class:"form-label"},"售價",-1),pt=t("hr",null,null,-1),mt={class:"form-group mb-3"},ht=t("label",{for:"description",class:"form-label"},"產品描述",-1),_t={class:"form-group mb-3"},gt=t("label",{for:"content",class:"form-label"},"說明內容",-1),bt={class:"form-group mb-3"},ft={class:"form-check"},Pt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),vt={class:"modal-footer"},yt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Ut(i,e,r,p,o,n){return d(),l("div",$,[t("div",E,[t("div",A,[t("div",I,[t("h5",T,[r.isNew?(d(),l("span",N,"新增產品")):(d(),l("span",R,"編輯產品"))]),S]),t("div",B,[t("div",F,[t("div",H,[t("div",O,[j,c(t("input",{id:"imageUrl","onUpdate:modelValue":e[0]||(e[0]=s=>o.editProduct.imageUrl=s),type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,512),[[u,o.editProduct.imageUrl]]),t("img",{class:"img-fluid",src:o.editProduct.imageUrl},null,8,z)]),Array.isArray(o.editProduct.imagesUrl)?(d(),l("div",q,[(d(!0),l(v,null,U(o.editProduct.imagesUrl,(s,m)=>(d(),l("div",{class:"mb-1",key:m},[t("div",G,[t("label",{for:`imagesUrl${m}`,class:"form-label"},"圖片網址",8,J),c(t("input",{id:`imagesUrl${m}`,"onUpdate:modelValue":b=>o.editProduct.imagesUrl[m]=b,type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,8,K),[[u,o.editProduct.imagesUrl[m]]])]),t("img",{class:"img-fluid",src:s},null,8,Q)]))),128)),!o.editProduct.imagesUrl.length||o.editProduct.imagesUrl[o.editProduct.imagesUrl.length-1]?(d(),l("div",W,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[1]||(e[1]=s=>o.editProduct.imagesUrl.push(""))}," 新增圖片 ")])):(d(),l("div",X,[t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[2]||(e[2]=s=>o.editProduct.imagesUrl.pop())}," 刪除圖片 ")]))])):(d(),l("div",Y,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[3]||(e[3]=(...s)=>n.createImages&&n.createImages(...s))}," 新增圖片 ")]))]),t("div",Z,[t("div",tt,[et,c(t("input",{id:"title","onUpdate:modelValue":e[4]||(e[4]=s=>o.editProduct.title=s),type:"text",class:"form-control",placeholder:"請輸入標題"},null,512),[[u,o.editProduct.title]])]),t("div",ot,[t("div",st,[it,c(t("input",{id:"category","onUpdate:modelValue":e[5]||(e[5]=s=>o.editProduct.category=s),type:"text",class:"form-control",placeholder:"請輸入分類"},null,512),[[u,o.editProduct.category]])]),t("div",dt,[lt,c(t("input",{id:"unit","onUpdate:modelValue":e[6]||(e[6]=s=>o.editProduct.unit=s),type:"text",class:"form-control",placeholder:"請輸入單位"},null,512),[[u,o.editProduct.unit]])])]),t("div",nt,[t("div",rt,[ct,c(t("input",{id:"origin_price","onUpdate:modelValue":e[7]||(e[7]=s=>o.editProduct.origin_price=s),type:"number",min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[u,o.editProduct.origin_price,void 0,{number:!0}]])]),t("div",at,[ut,c(t("input",{id:"price","onUpdate:modelValue":e[8]||(e[8]=s=>o.editProduct.price=s),type:"number",min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[u,o.editProduct.price,void 0,{number:!0}]])])]),pt,t("div",mt,[ht,c(t("textarea",{id:"description","onUpdate:modelValue":e[9]||(e[9]=s=>o.editProduct.description=s),type:"text",class:"form-control",placeholder:"請輸入產品描述"},`\r
                    `,512),[[u,o.editProduct.description]])]),t("div",_t,[gt,c(t("textarea",{id:"content","onUpdate:modelValue":e[10]||(e[10]=s=>o.editProduct.content=s),type:"text",class:"form-control",placeholder:"請輸入說明內容"},`\r
                    `,512),[[u,o.editProduct.content]])]),t("div",bt,[t("div",ft,[c(t("input",{id:"is_enabled","onUpdate:modelValue":e[11]||(e[11]=s=>o.editProduct.is_enabled=s),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[k,o.editProduct.is_enabled]]),Pt])])])])]),t("div",vt,[yt,t("button",{type:"button",class:"btn btn-primary",onClick:e[12]||(e[12]=s=>i.$emit("update-product",o.editProduct))}," 確認 ")])])])],512)}const Mt=y(L,[["render",Ut]]);var kt={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"yuetin-hexschool",BASE_URL:"/FinalMission-Edtion1/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:h,VITE_PATH:g}=kt,xt={data(){return{products:[],tempProduct:{imagesUrl:[]},pagination:{},isNew:!1,isLoading:!1,status:{fileUploading:!1},modal:{editModal:"",delModal:""},currentPage:1}},components:{PaginationComponent:C,ProductModalComponent:Mt,DelProductModalComponent:D},mounted(){const i=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=i,this.checkAdmin()},methods:{...x(w,["pushMessage"]),checkAdmin(){const i=`${h}/api/user/check`;this.$http.post(i).then(()=>{this.getData()}).catch(e=>{alert(e.response.data.message),this.$router.push("/login")})},getData(i=1){this.currentPage=i;const e=`${h}/api/${g}/admin/products?page=${i}`;this.isLoading=!0,this.$http.get(e).then(r=>{const{products:p,pagination:o}=r.data;this.products=p,this.pagination=o,this.isLoading=!1,this.pushMessage({style:"success",title:"成功取得產品資訊",content:r.data.message})}).catch(r=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"取得產品資訊失敗",content:r.response.data.message})})},updateProduct(i){this.tempProduct=i;let e=`${h}/api/${g}/admin/product`;this.isLoading=!0;let r="post",p="新增產品";this.isNew||(e=`${h}/api/${g}/admin/product/${this.tempProduct.id}`,r="put",p="更新產品");const o=this.$refs.product;this.$http[r](e,{data:this.tempProduct}).then(n=>{this.isLoading=!1,this.pushMessage({style:"success",title:p,content:n.data.message}),o.hideModal(),this.getData(this.currentPage)}).catch(n=>{this.isLoading=!1,this.pushMessage({style:"danger",title:p,content:n.response.data.message})})},delProduct(){const i=`${h}/api/${g}/admin/product/${this.tempProduct.id}`;this.isLoading=!0,this.$http.delete(i).then(e=>{this.isLoading=!1,this.pushMessage({style:"success",title:"刪除產品",content:e.data.message}),this.$refs.delProduct.hideModal(),this.getData(this.currentPage)}).catch(e=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"刪除產品",content:e.response.data.message})})},openModal(i,e){i==="new"?(this.tempProduct={imagesUrl:[]},this.isNew=!0,this.$refs.product.openModal()):i==="edit"?(this.tempProduct={...e},this.isNew=!1,this.$refs.product.openModal()):i==="delete"&&(this.tempProduct={...e},this.$refs.delProduct.openModal())}}},wt={class:"container"},Ct={class:"text-end mt-4"},Vt={class:"table mt-4"},Dt=t("thead",null,[t("tr",null,[t("th",{width:"120"}," 分類 "),t("th",null,"產品名稱"),t("th",{width:"120"}," 原價 "),t("th",{width:"120"}," 售價 "),t("th",{width:"100"}," 是否啟用 "),t("th",{width:"120"}," 編輯 ")])],-1),Lt={class:"text"},$t={class:"text"},Et={key:0,class:"text-success"},At={key:1},It={class:"btn-group"},Tt=["onClick"],Nt=["onClick"];function Rt(i,e,r,p,o,n){const s=f("PaginationComponent"),m=f("ProductModalComponent"),b=f("DelProductModalComponent");return d(),l(v,null,[t("div",wt,[t("div",Ct,[t("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=a=>n.openModal("new"))}," 建立新的產品 ")]),t("table",Vt,[Dt,t("tbody",null,[(d(!0),l(v,null,U(o.products,a=>(d(),l("tr",{key:a.id},[t("td",null,_(a.category),1),t("td",null,_(a.title),1),t("td",Lt,_(a.origin_price),1),t("td",$t,_(a.price),1),t("td",null,[a.is_enabled?(d(),l("span",Et,"啟用")):(d(),l("span",At,"未啟用"))]),t("td",null,[t("div",It,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:M=>n.openModal("edit",a)}," 編輯 ",8,Tt),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:M=>n.openModal("delete",a)}," 刪除 ",8,Nt)])])]))),128))])]),P(s,{pages:o.pagination,onEmitPages:n.getData},null,8,["pages","onEmitPages"])]),P(m,{ref:"product",product:o.tempProduct,"is-new":o.isNew,onUpdateProduct:n.updateProduct},null,8,["product","is-new","onUpdateProduct"]),P(b,{ref:"delProduct",item:o.tempProduct,onDelItem:n.delProduct},null,8,["item","onDelItem"])],64)}const Ot=y(xt,[["render",Rt]]);export{Ot as default};
