import{_ as l,o as p,c,b as e,k as n,l as u,m,F as h,n as a,q as g,s as b}from"./vendor.3ce90362.js";/* empty css                                                                     */const _={data(){return{temp:{input:null},endpoint:window.ENDPOINT+"/requests/new/tag"}},created(){},mounted(){},computed:{},methods:{open(){$("#newTagSuggest").modal("show")},save(){const o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rol:"writings",message:this.temp.input,auth:localStorage.getItem("auth")})};fetch(this.endpoint,o).then(t=>t.json()).then(t=>{this.$toast.success("Tu solicitud ha sido procesada. Muchas gracias por ayudarnos a mejorar.",{position:"bottom-right"}),$("#newTagSuggest").modal("hide"),this.temp.input=null})}}},r=o=>(g("data-v-7290be06"),o=o(),b(),o),x={class:"popNewTag"},v=a(" Si consideras que es necesario una nueva etiqueta,podes solicitarla "),y=a(". "),w={class:"modal fade",id:"newTagSuggest",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true",style:{"z-index":"1000"}},f={class:"modal-dialog modal-dialog-centered modal-sm",role:"document",style:{"z-index":"1000"}},S={class:"modal-content",style:{"border-radius":"10px",border:"none","z-index":"1000"}},T=r(()=>e("div",{class:"modal-header text-center",style:{background:"#dedcdc",color:"#454545","border-top-left-radius":"10px","border-top-right-radius":"10px"}},[e("h5",{class:"modal-title",style:{"font-size":"15px","font-weight":"600","text-align":"center !important",display:"block !important",width:"100%"}},"Agregar etiqueta"),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"\xD7")])],-1)),N=a(" Escrib\xED el nombre de la nueva etiqueta. "),k={class:"col-md-12",style:{"margin-top":"20px"}},q=r(()=>e("div",{class:"col-md-12 text-center",style:{"margin-top":"20px"}},[e("button",{type:"submit",class:"btn btn-primary",style:{width:"120px",position:"relative"}},"Solicitar")],-1));function I(o,t,M,z,i,d){return p(),c(h,null,[e("div",x,[v,e("a",{href:"#",onClick:t[0]||(t[0]=n(s=>d.open(),["prevent"]))},"ac\xE1"),y]),e("div",w,[e("div",f,[e("div",S,[T,e("form",{onSubmit:t[2]||(t[2]=n(s=>d.save(),["prevent"])),class:"modal-body"},[N,e("div",k,[u(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=s=>i.temp.input=s),style:{height:"30px","min-height":"33px","border-radius":"30px",border:"1px solid rgb(199, 199, 199)",background:"rgb(231, 231, 231)"}},null,512),[[m,i.temp.input]])]),q],32)])])])],64)}var B=l(_,[["render",I],["__scopeId","data-v-7290be06"]]);export{B as N};
