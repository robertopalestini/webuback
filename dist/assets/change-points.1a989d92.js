import{r as n}from"./index.f3c26685.js";import{_ as i,o as d,c as r,b as t,q as p,s as c,n as _}from"./vendor.3ce90362.js";var u="/assets/canje-render.ff70ed87.png";const s=e=>(p("data-v-788d4d56"),e=e(),c(),e),l={style:{height:"100%",background:"white"}},m={class:"container",style:{width:"100%",height:"100%",background:"white","padding-top":"100px"}},h={class:"row justify-content-center"},g={class:"col-md-4"},f=s(()=>t("h4",{style:{"font-weight":"900","font-size":"45px"}},"Recompensas",-1)),v=s(()=>t("p",{style:{"font-size":"18px","margin-bottom":"28px","margin-top":"28px"}},"En nuestra comunidad legal fomentamos la colaboratividad.",-1)),x=s(()=>t("p",{style:{"font-size":"18px","margin-bottom":"28px","margin-top":"28px"}},"Cada vez que un usuario valide algo que hayas compartido , sumas 10 puntos.",-1)),y=s(()=>t("p",{style:{"font-size":"18px","margin-bottom":"28px","margin-top":"28px"}},[_("A medida que vayas sumando puntos los podes canjear por diferentes premios. Por ejemplo, "),t("b",null,"cuando alcanzas los 1000 puntos , obtenes 3 meses de suscripcion gratis.")],-1)),b={class:"col-md-12"},w=s(()=>t("p",{style:{"font-size":"14px","margin-bottom":"28px","margin-top":"28px"}},"Proximamente podras canjear tus puntos por cupones de descuentos en aplicaciones de delivery y por criptomonedas , con la creacion de webu token.",-1)),j=s(()=>t("div",{class:"col-md-5"},[t("img",{class:"img-fluid",src:u})],-1)),P={data(){return{endpoint:window.ENDPOINT+"/requests/points"}},created(){},mounted(){},methods:{submit(){this.$Progress.start();const e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth:localStorage.getItem("auth")})};fetch(this.endpoint,e).then(o=>o.json()).then(o=>{this.$toast.show("Tu solicitud ha sido procesada.",{position:"bottom-right"}),n.push("/platform/dashboard"),this.$Progress.finish()})},pause(){},hover(){}}},z=Object.assign(P,{setup(e){return(o,a)=>(d(),r("div",l,[t("div",m,[t("div",h,[t("div",g,[f,v,x,y,t("div",b,[t("button",{class:"btn btn-primary",style:{"font-size":"20px"},onClick:a[0]||(a[0]=k=>o.submit())},"Canjear")]),w]),j])])]))}});var S=i(z,[["__scopeId","data-v-788d4d56"]]);export{S as default};