import{n as u,c as g}from"./navbar.3dc83e26.js";import{o,c as n,a as d,b as t,A as c,F as h,D as p,H as r,n as i}from"./vendor.3ce90362.js";import"./Logocompleto.3df4452e.js";const m={class:"container-fluid"},_={class:"row"},f={class:"col-md-2",style:{height:"calc(100vh - 70px)",overflow:"hidden","overflow-y":"auto",padding:"0"}},y={class:"col-md-10 text-center",style:{padding:"20px",border:"1px solid #F3F3F3",background:"rgb(255,255,255,0.1)",height:"calc(100vh - 70px)",overflow:"hidden","overflow-y":"auto",position:"relative"}},v=t("div",{class:"col-md-12",style:{"margin-bottom":"30px"}},[t("h4",{style:{"font-weight":"bold","text-align":"left","font-size":"17px"}},"Solicitudes de etiquetas")],-1),x={key:0,class:"text-center col-md-12"},b=t("div",{class:"col-md-12 text-left",style:{"border-radius":"8px",color:"white","font-weight":"500",background:"#5D5D5D",padding:"15px"}}," No se encontraron registros. ",-1),w=[b],N={class:"col-md-12 text-left",style:{padding:"15px","font-size":"12px","margin-bottom":"15px",border:"1px solid #E7E7E7"}},S=["src"],O=i(),T={style:{"font-weight":"600","font-size":"14px"}},k=t("hr",null,null,-1),D=t("b",null,"Mensaje",-1),E={data(){return{currentType:0,currentName:null,saveCreateLoading:!1,loadingStart:!0,data:[],auth:localStorage.getItem("auth"),endpoint:window.ENDPOINT+"/requests/get/all/tag",inputCreate:null,tags:[],history:[],searchTarget:null,searchResults:!1}},created(){},mounted(){this.getAll()},computed:{},methods:{removeAction(a){const e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth:localStorage.getItem("auth"),id:a})};fetch(window.ENDPOINT+"/admin/requests/delete",e).then(l=>l.json()).then(l=>{this.$toast.success("El registro fue eliminado correctamente..",{position:"bottom-right"}),this.getAll()})},getAll(){localStorage.getItem("auth");const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth:localStorage.getItem("auth")})};fetch(this.endpoint,a).then(e=>e.json()).then(e=>{e.empty?this.data=[]:this.data=e})}}},A=Object.assign(E,{setup(a){return(e,l)=>(o(),n(h,null,[d(u),t("main",null,[t("div",m,[t("div",_,[t("div",f,[d(g)]),t("div",y,[v,e.data.length==0?(o(),n("div",x,w)):c("",!0),e.data.length>0?(o(!0),n(h,{key:1},p(e.data,s=>(o(),n("div",N,[t("img",{src:"https://ui-avatars.com/api/?background=000000&color=fff&name="+s.data.user.firstname+s.data.user.lastname,style:{height:"30px","border-radius":"100%"}},null,8,S),O,t("span",T,r(s.data.user.firstname)+" "+r(s.data.user.lastname),1),i(" "+r(s.data.user.email)+" ",1),k,t("p",null,[D,i(" : "+r(s.data.message),1)])]))),256)):c("",!0)])])])])],64))}});export{A as default};
