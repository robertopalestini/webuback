import{o as s,c as n,a as d,b as t,A as r,F as c,D as h,H as i,k as _,n as u}from"./vendor.3ce90362.js";import{_ as g}from"./trash.123024ab.js";import{n as p,c as m}from"./navbar.3dc83e26.js";import"./Logocompleto.3df4452e.js";const f={class:"container-fluid"},y={class:"row"},v={class:"col-md-2",style:{height:"calc(100vh - 70px)",overflow:"hidden","overflow-y":"auto",padding:"0"}},b={class:"col-md-10 text-center",style:{padding:"20px",border:"1px solid #F3F3F3",background:"rgb(255,255,255,0.1)",height:"calc(100vh - 70px)",overflow:"hidden","overflow-y":"auto",position:"relative"}},w=t("div",{class:"col-md-12",style:{"margin-bottom":"30px"}},[t("h4",{style:{"font-weight":"bold","text-align":"left","font-size":"17px"}},"Feedback")],-1),x={key:0,class:"text-center col-md-12"},N=t("div",{class:"col-md-12 text-left",style:{"border-radius":"8px",color:"white","font-weight":"500",background:"#5D5D5D",padding:"15px"}}," No se encontraron registros. ",-1),k=[N],O={key:1,class:"table table-inverse",style:{"font-size":"13px !important"}},S=t("thead",null,[t("tr",null,[t("th",null,"Identificador"),t("th",null,"E-Mail"),t("th",null,"Nombre"),t("th",null,"Comentario"),t("th",null,"Acciones")])],-1),T={width:"200"},C={style:{opacity:"0.5"}},A={width:"200"},D={width:"200"},E={width:"200"},F={width:"200"},I=["onClick"],j=t("img",{src:g,style:{width:"14px",height:"14px","margin-right":"5px"}},null,-1),q=u(" Eliminar"),B=[j,q],P={data(){return{currentType:0,currentName:null,saveCreateLoading:!1,loadingStart:!0,data:[],auth:localStorage.getItem("auth"),endpoint:window.ENDPOINT+"/requests/get/all/feedback",inputCreate:null,tags:[],history:[],searchTarget:null,searchResults:!1}},created(){},mounted(){this.getAll()},computed:{},methods:{removeAction(a){const e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth:localStorage.getItem("auth"),id:a})};fetch(window.ENDPOINT+"/admin/requests/delete/single",e).then(l=>l.json()).then(l=>{this.$toast.success("El registro fue eliminado correctamente..",{position:"bottom-right"}),this.getAll()})},getAll(){const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth:localStorage.getItem("auth")})};fetch(this.endpoint,a).then(e=>e.json()).then(e=>{console.log(e),e.length==0?this.data=[]:this.data=e})}}},$=Object.assign(P,{setup(a){return(e,l)=>(s(),n(c,null,[d(p),t("main",null,[t("div",f,[t("div",y,[t("div",v,[d(m)]),t("div",b,[w,e.data.length==0?(s(),n("div",x,k)):r("",!0),e.data.length>0?(s(),n("table",O,[S,t("tbody",null,[(s(!0),n(c,null,h(e.data,o=>(s(),n("tr",null,[t("td",T,[t("span",C,i(o._id),1)]),t("td",A,[t("b",null,i(o.data.email),1)]),t("td",D,[t("b",null,i(o.data.name),1)]),t("td",E,[t("b",null,i(o.data.message),1)]),t("td",F,[t("a",{href:"#",onClick:_(V=>e.removeAction(o._id),["prevent"]),style:{"font-weight":"500","margin-left":"15px"}},B,8,I)])]))),256))])])):r("",!0)])])])])],64))}});export{$ as default};
