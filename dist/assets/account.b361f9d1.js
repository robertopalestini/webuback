import{o as a,c as n,a as c,b as t,k as u,l,m as r,a5 as m,A as d,F as h,n as p}from"./vendor.3ce90362.js";import{_}from"./flecha-izquierda.f982a190.js";import{n as v,c as y}from"./navbar.3dc83e26.js";import"./Logocompleto.3df4452e.js";const b={class:"container-fluid"},f={class:"row"},g={class:"col-md-2",style:{height:"calc(100vh - 70px)",overflow:"hidden","overflow-y":"auto",padding:"0"}},w={class:"col-md-10 text-left",style:{padding:"20px",border:"1px solid #E2E2E2",background:"white",height:"calc(100vh - 70px)",overflow:"hidden","overflow-y":"auto","border-bottom":"1px solid #E5E5E5"}},x={class:"row"},S={class:"col-12 text-left",style:{"padding-top":"20px","padding-bottom":"50px"}},k=t("img",{src:_,style:{height:"20px",width:"20px"}},null,-1),T=[k],N=p(),C=t("span",{style:{"font-weight":"600",color:"black"}},"Mi cuenta",-1),O={class:"col-6"},E={class:"row"},j=t("div",{class:"col-md-4"},[t("label",null,"Nombre")],-1),q={class:"col-md-8"},I=t("div",{class:"col-12",style:{"margin-bottom":"30px"}},null,-1),M={class:"col-6"},P={class:"row"},V=t("div",{class:"col-md-4"},[t("label",null,"Apellido")],-1),$={class:"col-md-8"},A=t("div",{class:"col-12",style:{"margin-bottom":"30px"}},null,-1),D={class:"col-6"},U={class:"row"},B=t("div",{class:"col-md-4"},[t("label",null,"Mail")],-1),R={class:"col-md-8"},J=t("div",{class:"col-12",style:{"margin-bottom":"30px"}},null,-1),z={class:"col-6"},F={class:"row"},G=t("div",{class:"col-md-4"},[t("label",null,"Contrase\xF1a")],-1),L={class:"col-md-3"},H=["type","readonly"],K={class:"col-md-5"},Q=t("div",{class:"col-12",style:{"margin-bottom":"30px"}},null,-1),W={key:0,class:"col-6"},X=t("div",{class:"row"},[t("div",{class:"col-md-4"},[t("label",null,"Suscripci\xF3n")]),t("div",{class:"col-md-8"},[t("b",null,"PRUEBA GRATUITA")])],-1),Y=[X],Z=t("div",{class:"col-12",style:{"margin-bottom":"30px"}},null,-1),tt={key:1,class:"col-6"},st={class:"row"},ot=t("div",{class:"col-md-4"},[t("label",null,"Suscripci\xF3n")],-1),et=t("div",{class:"col-md-2"},[t("b",null,"ACTIVA")],-1),it={class:"col-md-6"},at={key:2,class:"col-12",style:{"margin-bottom":"30px"}},nt={class:"col-md-12 text-center",style:{"margin-top":"100px"}},lt={key:0,style:{display:"flex",top:"0px",left:"0px",right:"0px",position:"fixed",bottom:"0","align-content":"center","justify-content":"center","align-items":"center"}},dt={style:{color:"rgb(52, 52, 52)",width:"355px",right:"180px","font-size":"14px","border-radius":"8px","font-weight":"600",background:"#e7e7e7",padding:"15px"}},rt=p(" \xBFEstas seguro que quer\xE9s darle de baja a tu suscripci\xF3n? "),ct={class:"col-12 text-right",style:{display:"flex"}},pt={data(){return{removeSuscriptionModal:!1,type_input_password:"password",active_password:!0,auth:localStorage.getItem("auth"),endpointRemove:window.ENDPOINT+"/users/suscription/remove",endpoint:window.ENDPOINT+"/users/auth",endpointSave:window.ENDPOINT+"/users/account/edit",user:{data:{role:"user",email:null}}}},created(){const i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth:localStorage.getItem("auth")})};fetch(this.endpoint,i).then(s=>s.json()).then(s=>{this.user=s,s.data.sucription_pay==null&&(this.user.data.sucription_pay=!1)})},mounted(){},computed:{},methods:{removeSuscription(){const i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth:localStorage.getItem("auth")})};fetch(this.endpointRemove,i).then(s=>s.json()).then(s=>{this.$toast.success("Tu suscripcion fue eliminada.",{position:"bottom-right"}),window.location.href="/platform/dashboard"})},save(){const i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth:localStorage.getItem("auth"),data:this.user.data})};fetch(this.endpointSave,i).then(s=>s.json()).then(s=>{this.$toast.success("Tu perfil fue actualizado con exito.",{position:"bottom-right"})})},changePassword(){this.active_password=!1,this.type_input_password="text"}}},vt=Object.assign(pt,{setup(i){return(s,o)=>(a(),n(h,null,[c(v),t("main",null,[t("div",b,[t("div",f,[t("div",g,[c(y)]),t("div",w,[t("div",x,[t("div",S,[t("a",{href:"@",onClick:o[0]||(o[0]=u(e=>s.$router.go(-1),["prevent"])),style:{"margin-right":"20px"}},T),N,C]),t("div",O,[t("div",E,[j,t("div",q,[l(t("input",{type:"text",class:"form-control type-input-2",required:"","onUpdate:modelValue":o[1]||(o[1]=e=>s.user.data.profile.firstname=e)},null,512),[[r,s.user.data.profile.firstname]])])])]),I,t("div",M,[t("div",P,[V,t("div",$,[l(t("input",{type:"text",class:"form-control type-input-2",required:"","onUpdate:modelValue":o[2]||(o[2]=e=>s.user.data.profile.lastname=e)},null,512),[[r,s.user.data.profile.lastname]])])])]),A,t("div",D,[t("div",U,[B,t("div",R,[l(t("input",{type:"email",class:"form-control type-input-2",required:"","onUpdate:modelValue":o[3]||(o[3]=e=>s.user.data.email=e),disabled:"true"},null,512),[[r,s.user.data.email]])])])]),J,t("div",z,[t("div",F,[G,t("div",L,[l(t("input",{type:s.type_input_password,class:"form-control type-input-2",required:"true",readonly:s.active_password,"onUpdate:modelValue":o[4]||(o[4]=e=>s.user.data.password=e)},null,8,H),[[m,s.user.data.password]])]),t("div",K,[t("button",{type:"submit",class:"btn btn-primary",style:{width:"auto",position:"relative"},onClick:o[5]||(o[5]=e=>s.changePassword())},"Cambiar contrase\xF1a")])])]),Q,s.user.data.sucription_pay==!1?(a(),n("div",W,Y)):d("",!0),Z,s.user.data.sucription_pay==!0?(a(),n("div",tt,[t("div",st,[ot,et,t("div",it,[t("button",{type:"submit",class:"btn btn-primary",style:{width:"auto",position:"relative"},onClick:o[6]||(o[6]=e=>s.removeSuscriptionModal=!0)},"Dar de baja suscripcion")])])])):d("",!0),s.user.data.sucription_pay==!0?(a(),n("div",at)):d("",!0),t("div",nt,[t("button",{type:"submit",class:"btn btn-primary",style:{width:"auto",position:"relative"},onClick:o[7]||(o[7]=e=>s.save())},"Guardar cambios")])])])])])]),s.removeSuscriptionModal?(a(),n("div",lt,[t("div",dt,[rt,t("div",ct,[t("button",{class:"btn btn-primary",style:{margin:"5px"},onClick:o[8]||(o[8]=e=>s.removeSuscription())}," Si "),t("button",{href:"#",class:"btn btn-primary",style:{margin:"5px"},onClick:o[9]||(o[9]=e=>s.removeSuscriptionModal=!1)}," No ")])])])):d("",!0)],64))}});export{vt as default};
