import{o as i,c as r,a as d,b as t,A as c,F as h,D as m,H as s,n,k as _}from"./vendor.3ce90362.js";import{_ as p}from"./trash.123024ab.js";import{n as u,c as g}from"./navbar.3dc83e26.js";import"./Logocompleto.3df4452e.js";const f={class:"container-fluid"},y={class:"row"},b={class:"col-md-2",style:{height:"calc(100vh - 70px)",overflow:"hidden","overflow-y":"auto",padding:"0"}},x={class:"col-md-10 text-center",style:{padding:"20px",border:"1px solid #F3F3F3",background:"rgb(255,255,255,0.1)",height:"calc(100vh - 70px)",overflow:"hidden","overflow-y":"auto",position:"relative"}},v=t("div",{class:"col-md-12",style:{"margin-bottom":"30px"}},[t("h4",{style:{"font-weight":"bold","text-align":"left","font-size":"17px"}},"Reportes de comentarios")],-1),w={key:0,class:"text-center col-md-12"},N=t("div",{class:"col-md-12 text-left",style:{"border-radius":"8px",color:"white","font-weight":"500",background:"#5D5D5D",padding:"15px"}}," No se encontraron registros. ",-1),k=[N],S={class:"col-md-12 text-left",style:{padding:"15px","font-size":"12px","margin-bottom":"15px",border:"1px solid #E7E7E7"}},C=["src"],O=n(),T={style:{"font-weight":"600","font-size":"14px"}},E=t("hr",null,null,-1),D=t("b",null,"Mensaje",-1),I=t("hr",null,null,-1),j={style:{"margin-top":"5px","margin-bottom":"0"}},A=t("b",null,"Comentario",-1),P={style:{"margin-top":"5px","margin-bottom":"0"}},F=t("b",null,"Publicado en ",-1),q={style:{"margin-top":"5px","margin-bottom":"0"}},B=t("b",null,"Publicado por ",-1),V={style:{"margin-top":"5px","margin-bottom":"0"}},z=t("b",null,"Id",-1),L=t("hr",null,null,-1),J=["onClick"],M=t("img",{src:p,style:{width:"14px",height:"14px","margin-right":"5px"}},null,-1),R=n(" Eliminar comentario y reporte"),$=[M,R],H={data(){return{currentType:0,currentName:null,saveCreateLoading:!1,loadingStart:!0,data:[],auth:localStorage.getItem("auth"),endpoint:window.ENDPOINT+"/requests/get/all/comments",inputCreate:null,tags:[],history:[],searchTarget:null,searchResults:!1}},created(){},mounted(){this.getAll()},computed:{},methods:{removeAction(a,o){const l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth:localStorage.getItem("auth"),id:a,id_report:o})};fetch(window.ENDPOINT+"/admin/requests/delete/comments",l).then(e=>e.json()).then(e=>{this.$toast.success("El registro fue eliminado correctamente..",{position:"bottom-right"}),this.getAll()})},getAll(){localStorage.getItem("auth");const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth:localStorage.getItem("auth")})};fetch(this.endpoint,a).then(o=>o.json()).then(o=>{o.empty?this.data=[]:this.data=o})}}},X=Object.assign(H,{setup(a){return(o,l)=>(i(),r(h,null,[d(u),t("main",null,[t("div",f,[t("div",y,[t("div",b,[d(g)]),t("div",x,[v,o.data.length==0?(i(),r("div",w,k)):c("",!0),o.data.length>0?(i(!0),r(h,{key:1},m(o.data,e=>(i(),r("div",S,[t("img",{src:"https://ui-avatars.com/api/?background=000000&color=fff&name="+e.data.user.firstname+e.data.user.lastname,style:{height:"30px","border-radius":"100%"}},null,8,C),O,t("span",T,s(e.data.user.firstname)+" "+s(e.data.user.lastname),1),n(" "+s(e.data.user.email)+" ",1),E,t("p",null,[D,n(" : "+s(e.data.message),1)]),I,t("p",j,[A,n(" : "+s(e.data.comment.comment),1)]),t("p",P,[F,n(" : "+s(e.data.comment.document_title),1)]),t("p",q,[B,n(" : "+s(e.data.comment.user.firstname)+" "+s(e.data.comment.user.lastname),1)]),t("p",V,[z,n(" : "+s(e.data.comment._id),1)]),L,t("a",{href:"#",onClick:_(G=>o.removeAction(e.data.comment._id,e._id),["prevent"]),style:{"font-weight":"500","margin-left":"15px"}},$,8,J)]))),256)):c("",!0)])])])])],64))}});export{X as default};
