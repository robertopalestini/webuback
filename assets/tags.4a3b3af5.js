import{o as n,c as l,a as _,b as s,l as u,m,A as d,k as h,F as p,D as g,H as c,x as y,n as f,G as x}from"./vendor.3ce90362.js";import{_ as v}from"./boligrafo.1cbc6d81.js";import{_ as w,a as D,b as T}from"./expandir.532577ce.js";import{a as S}from"./index.90840984.js";import{n as k,c as P}from"./navbar.3dc83e26.js";import{b}from"./share-button-document-private.64c6d8db.js";import"./Logocompleto.3df4452e.js";import"./cuota.edac84f3.js";var O="/assets/acortar.4f9d8431.svg";const N={class:"container-fluid"},C={class:"row"},j={class:"col-md-2",style:{height:"calc(100vh - 70px)",overflow:"hidden","overflow-y":"auto",padding:"0"}},I={class:"col-md-10",style:{height:"calc(100vh - 70px)",border:"1px solid #e2e2e2"}},E={class:"row"},F={class:"col-md-3",style:{height:"calc(100vh - 70px)",overflow:"hidden","overflow-y":"auto"}},q=s("div",{class:"col-12",style:{"font-weight":"600",color:"black","padding-top":"2.5px","padding-bottom":"2.5px","border-bottom":"1px solid #e6e6e6"}}," Etiquetas ",-1),M={class:"col-12 text-center",style:{"padding-top":"8.5px","padding-bottom":"8.5px","border-bottom":"1px solid #e5e5e5"}},A={class:"col-12",style:{"padding-top":"10px","padding-bottom":"10px"}},z={key:0,class:"spinner-border spinner-border-sm",role:"status"},B=s("span",{class:"sr-only"},"Loading...",-1),L=[B],J=s("hr",null,null,-1),V={key:1,class:"col-12 text-left",style:{padding:"0"}},H=s("p",{style:{"font-size":"13px","font-weight":"600"}},"Filtros :",-1),R={style:{padding:"0px","list-style":"none",width:"100%",display:"flex","justify-content":"flex-start","align-items":"center","flex-direction":"column","align-content":"flex-start"}},U={style:{width:"100%",display:"flex","justify-content":"flex-start","align-items":"flex-start","flex-direction":"column","align-content":"flex-start","margin-bottom":"5px"}},G={href:"#",style:{"font-size":"12px","padding-top":"5px","padding-bottom":"5px",background:"rgb(206, 206, 206)","border-radius":"30px",display:"flex","place-content":"flex-start","align-items":"center","flex-direction":"row","font-weight":"600","padding-left":"10px","padding-right":"10px"}},W=["onClick"],X=s("i",{class:"fas fa-times"},null,-1),K=[X],Q=s("hr",null,null,-1),Y={key:2,style:{padding:"0",margin:"0",width:"100%","list-style":"none"}},Z=["onClick"],tt={href:"#",style:{color:"black","font-weight":"600","font-size":"12px"}},et={class:"col-md-3",style:{"border-left":"1px solid #e6e6e6","border-right":"1px solid #e6e6e6",padding:"0",height:"calc(100vh - 70px)",overflow:"hidden","overflow-y":"auto",position:"relative"}},st=["onClick"],ot={key:0,class:"col-12",style:{padding:"0"}},it={class:"edit-mode"},nt=["onClick"],lt=["onSubmit"],dt=["onUpdate:modelValue"],rt=s("button",{type:"submit",hidden:"true"},null,-1),at={key:2,class:"edit-mode",style:{color:"#525252","font-size":"12px"}},ht=["onClick"],ct=["onSubmit"],pt=["onUpdate:modelValue"],ut=s("button",{type:"submit",hidden:"true"},null,-1),mt={style:{position:"absolute:top:0:right:0",height:"100%"}},gt={key:0,src:w,style:{height:"20px",width:"20px"}},ft={key:1,src:D,style:{height:"20px",width:"20px"}},_t={key:2,src:O,style:{height:"20px",width:"20px"}},yt={class:"col-md-6 scroll-size-medium",style:{"border-left":"1px solid #e6e6e6","border-right":"1px solid #e6e6e6",padding:"0",height:"calc(100vh - 70px)",overflow:"hidden","overflow-y":"auto",position:"relative"}},vt={key:0,class:"spinner-border spinner-border-sm",role:"status",style:{position:"absolute"}},bt=s("span",{class:"sr-only"},"Loading...",-1),xt=[bt],wt={key:1,class:"col-12",style:{padding:"10px"}},Dt={class:"row"},Tt={class:"col-md-8"},St={class:"col-md-4 text-right"},kt=s("img",{src:T,style:{width:"14px",height:"14px","margin-right":"5px"}},null,-1),Pt=[kt],Ot=["innerHTML"],$t={class:"modal fade FullScreenModal",id:"FullScreenModal",tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"},Nt={class:"modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable",role:"document"},Ct={class:"modal-content"},jt={class:"modal-body"},It={class:"container-fluid"},Et={key:0,class:"col-12",style:{padding:"10px"}},Ft={class:"row"},qt={class:"col-md-8"},Mt={class:"col-md-4 text-right"},At=["innerHTML"],zt={data(){return{auth:localStorage.getItem("auth"),endpoint:window.ENDPOINT+"/library/get/tags",endpointDocuments:window.ENDPOINT+"/library/get/tags/documents",endpointDocument:window.ENDPOINT+"/library/get/document",endpointGetAll:window.ENDPOINT+"/library/get/documents",items:[],documentsSearch:[],documents:[],loadingFolders:!0,loadingDocument:!1,tagsSelected:[],contentDocument:null,activeDocumentId:null,document:null,searchTarget:{target:null},temp:{editFont:"Arial"}}},created(){},mounted(){this.loadAllDocuments(),this.loadTags(),this.$route.query.id&&(this.activeDocumentId=this.$route.query.id,this.getDocument(this.activeDocumentId))},computed:{searchTagsInResults(){return this.documentsSearch.filter(i=>{if(this.tagsSelected.length>0)for(var t=i.data.tags.length-1;t>=0;t--)for(var o=i.data.tags[t],t=this.tagsSelected.length-1;t>=0;t--){var e=this.tagsSelected[t];if(o._id==e.id)return i}else return i})},filteredResources(){return console.log("filterresources"),this.searchTarget.target?(this.searchDocuments(),this.items.filter(i=>i.data.title.toLowerCase().startsWith(this.searchTarget.target.toLowerCase()))):this.items}},methods:{openFullScreen(){$(".FullScreenModal").modal("show")},searchDocuments(){const i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth:this.auth,target:this.searchTarget.target})};fetch(window.ENDPOINT+"/library/search",i).then(t=>t.json()).then(t=>{if(t.length>0){if(t.length>0)for(var o=t.length-1;o>=0;o--)t[o]._ext={edit_title:!1,edit_description:!1};this.documents=t}this.$Progress.finish()})},saveEditMode(i,t){const o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth:this.auth,id:i,data:{title:this.documents[t].data.title,description:this.documents[t].data.description}})};fetch(window.ENDPOINT+"/library/edit",o).then(e=>e.json()).then(e=>{this.documents[t]._ext.edit_title=!1,this.documents[t]._ext.edit_description=!1,this.$Progress.finish(),this.$toast.success("Documento editado...",{position:"bottom-right"}),this.document._id==i&&(this.document.data.title=this.documents[t].data.title,this.document.data.description=this.documents[t].data.description)})},actionTeste(i,t){if(t=="font"){document.execCommand("fontName",!1,this.temp.editFont);return}switch(t){case"h1":case"h2":case"p":document.execCommand("formatBlock",!1,t);break;default:document.execCommand(t,!1,null);break}},download(i,t,o){var e=document.createElement("a");e.setAttribute("href",i),e.setAttribute("download",t),e.setAttribute("target","_blank"),document.body.appendChild(e),e.click(),document.body.removeChild(e)},exportPDF(){this.$Progress.start();const i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth:this.auth,id:this.activeDocumentId})};fetch(window.ENDPOINT+"/library/export/pdf",i).then(t=>t.json()).then(t=>{this.$toast.show("Descargando...",{position:"bottom-right"}),this.download(window.ENDPOINTEXPORTS+"/"+t.name,t.name,"data:application/pdf"),this.$Progress.finish(),console.log(t)})},exportWord(){this.$Progress.start();const i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth:this.auth,id:this.activeDocumentId})};fetch(window.ENDPOINT+"/library/export/word",i).then(t=>t.json()).then(t=>{this.$toast.show("Descargando...",{position:"bottom-right"}),this.download(window.ENDPOINTEXPORTS+"/"+t.name,t.name,"data:application/vnd.openxmlformats-officedocument.wordprocessingml.document"),this.$Progress.finish(),console.log(t)})},loadTags(){this.$Progress.start();const i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth:this.auth})};fetch(this.endpoint,i).then(t=>t.json()).then(t=>{if(t.empty){this.tags=[],this.loadingFolders=!1,this.$Progress.finish();return}t.error==!0||(S("data.title",t),this.items=t,this.loadingFolders=!1,this.$Progress.finish())})},loadAllDocuments(){this.$Progress.start();const i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth:this.auth})};fetch(this.endpointGetAll,i).then(t=>t.json()).then(t=>{if(t.empty){this.documents=[],this.loadingDocuments=!1,this.$Progress.finish();return}if(t.length>0)for(var o=t.length-1;o>=0;o--)t[o]._ext={edit_title:!1,edit_description:!1};this.documents=t,this.$Progress.finish()})},search(){console.log(this.searchTarget)},removeFilterTag(i,t){if(this.$Progress.start(),delete this.tagsSelected[i],this.tagsSelected=this.tagsSelected.filter(function(e){return typeof e!="undefined"}),this.tagsSelected.length==0){this.loadAllDocuments();return}const o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth:this.auth,tags:this.tagsSelected})};fetch(this.endpointDocuments,o).then(e=>e.json()).then(e=>{if(e.empty){this.documents=[],this.loadingDocuments=!1,this.$Progress.finish();return}if(e.error!=!0){if(e.length>0)for(var r=e.length-1;r>=0;r--)e[r]._ext={edit_title:!1,edit_description:!1};this.documents=e,this.$Progress.finish()}})},getDocument(i){this.$Progress.start(),this.activeDocumentId=i,this.loadingDocument=!0;const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth:this.auth,id:i})};fetch(this.endpointDocument,t).then(o=>o.json()).then(o=>{o.error==!0||(this.document=o,this.contentDocument=o.data.content,this.contentDocument=o.data.content.replace("http://","https://"),this.loadingDocument=!1,this.$Progress.finish())})},getDocumentsByTag(i,t){this.$Progress.start(),this.tagsSelected.push({title:t,id:i}),this.loadingDocuments=!0;const o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth:this.auth,tags:this.tagsSelected})};fetch(this.endpointDocuments,o).then(e=>e.json()).then(e=>{if(e.empty){this.documents=[],this.loadingDocuments=!1,this.$Progress.finish();return}if(e.error!=!0){if(e.length>0)for(var r=e.length-1;r>=0;r--)e[r]._ext={edit_title:!1,edit_description:!1};this.documents=e,this.loadingDocuments=!1,this.$Progress.finish()}})},pause(){},hover(){}}},Wt=Object.assign(zt,{setup(i){return(t,o)=>(n(),l(p,null,[_(k),s("main",null,[s("div",N,[s("div",C,[s("div",j,[_(P)]),s("div",I,[s("div",E,[s("div",F,[q,s("div",M,[u(s("input",{type:"text",class:"form-control type-input-3","onUpdate:modelValue":o[0]||(o[0]=e=>t.searchTarget.target=e),onKeyup:o[1]||(o[1]=e=>t.search()),placeholder:"Buscar etiqueta..."},null,544),[[m,t.searchTarget.target]])]),s("div",A,[t.loadingFolders?(n(),l("div",z,L)):d("",!0),s("a",{href:"#",style:{"font-size":"13px","font-weight":"600"},onClick:o[2]||(o[2]=h(e=>t.loadAllDocuments(),["prevent"]))}," Todos los documentos"),J,t.tagsSelected.length>0?(n(),l("div",V,[H,s("ul",R,[(n(!0),l(p,null,g(t.tagsSelected,(e,r)=>(n(),l("li",U,[s("a",G,[f(c(e.title)+" ",1),s("a",{href:"#",style:{"margin-left":"10px"},onClick:a=>t.removeFilterTag(r,e.title)},K,8,W)])]))),256))]),Q])):d("",!0),t.items.length>0?(n(),l("ul",Y,[(n(!0),l(p,null,g(t.filteredResources,e=>(n(),l("li",{style:{padding:"0",margin:"0",width:"100%","list-style":"none","line-height":"15px","margin-bottom":"15px"},key:t.index,onClick:h(r=>t.getDocumentsByTag(e._id,e.data.title),["prevent"])},[s("a",tt,c(e.data.title),1)],8,Z))),128))])):d("",!0)])]),s("div",et,[(n(!0),l(p,null,g(t.documents,(e,r)=>(n(),l("div",{class:x(["col-12",{activeDocument:e._id===t.activeDocumentId}]),style:{padding:"15px","border-bottom":"1px solid #e6e6e6",cursor:"pointer"},key:r,onClick:a=>t.getDocument(e._id)},[e._ext.edit_title==!1?(n(),l("div",ot,[s("span",it,[f(c(e.data.title)+" ",1),s("img",{src:v,onClick:h(a=>e._ext.edit_title=!0,["prevent"])},null,8,nt)])])):d("",!0),e._ext.edit_title?(n(),l("form",{key:1,onSubmit:h(a=>t.saveEditMode(e._id,r),["prevent"]),class:"col-12",style:{padding:"0",display:"flex","margin-bottom":"10px"}},[u(s("input",{type:"text",class:"form-control col-12","onUpdate:modelValue":a=>e.data.title=a,style:{"font-size":"13px","border-radius":"30px",height:"30px","min-height":"30px","max-height":"30px",background:"white","font-weight":"700"}},null,8,dt),[[m,e.data.title]]),rt],40,lt)):d("",!0),e._ext.edit_description?d("",!0):(n(),l("p",at,[f(c(e.data.description)+" ",1),s("img",{src:v,onClick:h(a=>e._ext.edit_description=!0,["prevent"])},null,8,ht)])),e._ext.edit_description?(n(),l("form",{key:3,onSubmit:h(a=>t.saveEditMode(e._id,r),["prevent"]),class:"col-12",style:{padding:"0px",display:"flex","flex-direction":"row","flex-wrap":"wrap","margin-bottom":"10px"}},[u(s("input",{type:"text",class:"form-control","onUpdate:modelValue":a=>e.data.description=a,style:{"font-size":"12px","border-radius":"8px",height:"fit-content","min-height":"fit-content","max-height":"fit-content",background:"white","margin-bottom":"5px"}},null,8,pt),[[m,e.data.description]]),ut],40,ct)):d("",!0),s("div",mt,[e.data.share==0?(n(),l("img",gt)):d("",!0),e.data.share==1?(n(),l("img",ft)):d("",!0),e.data.attachment.length>0?(n(),l("img",_t)):d("",!0)])],10,st))),128))]),s("div",yt,[t.loadingDocument?(n(),l("div",vt,xt)):d("",!0),t.document?(n(),l("div",wt,[s("div",Dt,[s("div",Tt,[s("b",null,c(t.document.data.title),1)]),s("div",St,[s("a",{href:"#",style:{margin:"5px"},onClick:o[3]||(o[3]=e=>t.openFullScreen())},Pt),t.document.data.share==1?(n(),y(b,{key:0,id:t.document.data.id_share_comuniy},null,8,["id"])):d("",!0)])])])):d("",!0),s("div",{id:"editor2",style:{width:"100%",padding:"20px",color:"black"},innerHTML:t.contentDocument},null,8,Ot)])])])])])]),s("div",$t,[s("div",Nt,[s("div",Ct,[s("div",jt,[s("div",It,[t.document?(n(),l("div",Et,[s("div",Ft,[s("div",qt,[s("b",null,c(t.document.data.title),1)]),s("div",Mt,[t.document.data.share==1?(n(),y(b,{key:0,id:t.document.data.id_share_comuniy},null,8,["id"])):d("",!0)])])])):d("",!0),s("div",{style:{width:"100%",padding:"20px",color:"black"},innerHTML:t.contentDocument},null,8,At)])])])])])],64))}});export{Wt as default};
