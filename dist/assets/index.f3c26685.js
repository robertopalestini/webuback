import{r as l,o as h,c as g,a as _,u as f,R as E,F as v,b as p,d as P,e as w,f as I,i as O,T as L,v as T,V as A,g as R,h as V,C as D}from"./vendor.3ce90362.js";const y=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function m(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=m(e);fetch(e.href,a)}};y();var b="/assets/whatsapp.358794dc.svg";const x=p("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""},null,-1),k=p("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap",rel:"stylesheet"},null,-1),S=p("a",{href:"https://wa.me/5493518604251?text=",class:"whatsapp",target:"_blank"},[p("img",{src:b,style:{height:"30px",width:"30px",filter:"invert()"}})],-1),C={watch:{$route:{deep:!0,handler(s,i){s.meta.auth&&(localStorage.getItem("auth")==null||localStorage.getItem("auth")==""||localStorage.getItem("auth")==" "||localStorage.getItem("auth")==null)&&(window.location.href="/")}}},setup(){}},N=Object.assign(C,{setup(s){return(i,m)=>{const o=l("vue-progress-bar");return h(),g(v,null,[x,k,_(o),_(f(E)),S],64)}}}),B="modulepreload",u={},$="/",t=function(i,m){return!m||m.length===0?i():Promise.all(m.map(o=>{if(o=`${$}${o}`,o in u)return;u[o]=!0;const e=o.endsWith(".css"),a=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${a}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":B,e||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),e)return new Promise((c,d)=>{r.addEventListener("load",c),r.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>i())},F=P({history:w("/"),routes:[{path:"/",name:"home",component:()=>t(()=>import("./ladingpage.2282b23f.js"),["assets/ladingpage.2282b23f.js","assets/ladingpage.1ca65ba6.css","assets/index.f2e8f42a.js","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/Logocompleto.3df4452e.js","assets/bibliotecacola.cd6453ac.js"])},{path:"/login",name:"login",component:()=>t(()=>import("./login.8cc4a209.js"),["assets/login.8cc4a209.js","assets/login.c903c972.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/Logocompleto.3df4452e.js","assets/index.f2e8f42a.js","assets/vue-facebook-login-component-next.es.8eb78c34.js"])},{path:"/login/password",name:"login-change-password-step-1",component:()=>t(()=>import("./change-password-step-1.06e89433.js"),["assets/change-password-step-1.06e89433.js","assets/change-password-step-1.31cdb149.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/logo-transparent.fd165a9a.js","assets/index.f2e8f42a.js"])},{path:"/login/lost/password/step/2",name:"login-change-password-step-2",component:()=>t(()=>import("./change-password-step-2.11b65d6f.js"),["assets/change-password-step-2.11b65d6f.js","assets/change-password-step-2.6066c44d.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/logo-transparent.fd165a9a.js","assets/index.f2e8f42a.js"])},{path:"/register",name:"register",component:()=>t(()=>import("./register.c9eed237.js"),["assets/register.c9eed237.js","assets/register.9c02a793.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/Logocompleto.3df4452e.js","assets/index.f2e8f42a.js","assets/vue-facebook-login-component-next.es.8eb78c34.js"])},{path:"/change/points",name:"change-points",component:()=>t(()=>import("./change-points.1a989d92.js"),["assets/change-points.1a989d92.js","assets/change-points.914a7f78.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css"]),meta:{auth:!0}},{path:"/platform/dashboard",name:"dashboard",component:()=>t(()=>import("./dashboard.6bf1ed2e.js"),["assets/dashboard.6bf1ed2e.js","assets/dashboard.ec2a4b28.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/Logocompleto.3df4452e.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css"]),meta:{auth:!0}},{path:"/platform/shared-with-me",name:"compartidos-conmigo",component:()=>t(()=>import("./shared-with-me.6a1cb988.js"),["assets/shared-with-me.6a1cb988.js","assets/shared-with-me.6a97df66.css","assets/vue-quill.snow.972c7f4f.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/admin-add.c0a05d7b.js","assets/boligrafo.1cbc6d81.js","assets/expandir.532577ce.js","assets/descargar.fa43ec5f.js","assets/boton-agregar.c9c97214.js","assets/index.90840984.js","assets/DocumentDropdown.3ac4bf8a.js","assets/edit.dc69b3f2.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js","assets/quill-table.54d5d997.js","assets/vuejs-tree.common.02dd7996.js","assets/share-button-writting-private.46cbf0eb.js","assets/share-button-writting-private.ec7935bb.css","assets/cuota.edac84f3.js","assets/Editor.e4eec21a.js"])},{path:"/platform/formar-parte",name:"formar-parte",component:()=>t(()=>import("./formar-parte.5474a0e1.js"),["assets/formar-parte.5474a0e1.js","assets/formar-parte.dd71d6ab.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/flecha-izquierda.f982a190.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js"])},{path:"/platform/como-funciona",name:"como-funciona",component:()=>t(()=>import("./como-funciona.437173c9.js"),["assets/como-funciona.437173c9.js","assets/formar-parte.dd71d6ab.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/flecha-izquierda.f982a190.js","assets/bibliotecacola.cd6453ac.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js"])},{path:"/platform/dejanos-tu-opinion",name:"dejanos-tu-opinion",component:()=>t(()=>import("./dejanos-tu-opinion.2e634dff.js"),["assets/dejanos-tu-opinion.2e634dff.js","assets/formar-parte.dd71d6ab.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/flecha-izquierda.f982a190.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js","assets/index.f2e8f42a.js"])},{path:"/platform/recompensas",name:"recompensas",component:()=>t(()=>import("./recompensas.f90ccb19.js"),["assets/recompensas.f90ccb19.js","assets/formar-parte.dd71d6ab.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/flecha-izquierda.f982a190.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js"])},{path:"/platform/document/automatic/:id",name:"view-automatic-document",component:()=>t(()=>import("./single-automatic.625cc5c6.js"),["assets/single-automatic.625cc5c6.js","assets/single-automatic.31880174.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/flecha-izquierda.f982a190.js","assets/etiqueta.f26d8a8f.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js","assets/toolbar-writings-comunity.edad3899.js","assets/toolbar-writings-comunity.8c80957d.css","assets/cuota.edac84f3.js"]),meta:{auth:!0}},{path:"/platform/document/:id",name:"view-document",component:()=>t(()=>import("./single-document.e231035d.js"),["assets/single-document.e231035d.js","assets/single-document.cbabc648.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/flecha-izquierda.f982a190.js","assets/etiqueta.f26d8a8f.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js","assets/toolbar-document-comunity.d85733d3.js","assets/toolbar-writings-comunity.8c80957d.css","assets/cuota.edac84f3.js"]),meta:{auth:!0}},{path:"/platform/librarie",name:"librarie",component:()=>t(()=>import("./folders.24af77b1.js"),["assets/folders.24af77b1.js","assets/folders.2332b2c4.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/admin-add.c0a05d7b.js","assets/boligrafo.1cbc6d81.js","assets/expandir.532577ce.js","assets/descargar.fa43ec5f.js","assets/boton-agregar.c9c97214.js","assets/Editor.e4eec21a.js","assets/index.90840984.js","assets/DocumentDropdown.3ac4bf8a.js","assets/edit.dc69b3f2.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js","assets/vuejs-tree.common.02dd7996.js","assets/share-button-document-private.64c6d8db.js","assets/toolbar-writings-comunity.8c80957d.css","assets/cuota.edac84f3.js"]),meta:{auth:!0}},{path:"/platform/librarie/tags",name:"librarie-tags",component:()=>t(()=>import("./tags.4a3b3af5.js"),["assets/tags.4a3b3af5.js","assets/tags.b26442fc.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/boligrafo.1cbc6d81.js","assets/expandir.532577ce.js","assets/index.90840984.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js","assets/share-button-document-private.64c6d8db.js","assets/toolbar-writings-comunity.8c80957d.css","assets/cuota.edac84f3.js"]),meta:{auth:!0}},{path:"/platform/documents/new",name:"document-new",component:()=>t(()=>import("./create.2a082a7e.js"),["assets/create.2a082a7e.js","assets/create.0c89d00a.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/flecha-izquierda.f982a190.js","assets/striptags.65da94af.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js","assets/core.77a31e8a.js"]),meta:{auth:!0}},{path:"/platform/documents/edit/:id",name:"document-edit",component:()=>t(()=>import("./create.2a082a7e.js"),["assets/create.2a082a7e.js","assets/create.0c89d00a.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/flecha-izquierda.f982a190.js","assets/striptags.65da94af.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js","assets/core.77a31e8a.js"]),props:!0,meta:{auth:!0}},{path:"/platform/documents/organize/:id",name:"document-organize",component:()=>t(()=>import("./organize.c9b8cc77.js"),["assets/organize.c9b8cc77.js","assets/organize.c3b706be.css","assets/new-tags-suggest.vue_vue_type_style_index_0_scoped_true_lang.00f0732d.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/flecha-izquierda.f982a190.js","assets/cerrar-simbolo-de-boton-circular.c7ee96d7.js","assets/boton-agregar.c9c97214.js","assets/new-tags-suggest.36b6f8fc.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js","assets/core.77a31e8a.js","assets/vuejs-tree.common.02dd7996.js"]),meta:{auth:!0}},{path:"/platform/documents/automatic/new",name:"autowriting-new",component:()=>t(()=>import("./create.a8fe505e.js"),["assets/create.a8fe505e.js","assets/create.3194a4db.css","assets/vue-quill.snow.972c7f4f.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/flecha-izquierda.f982a190.js","assets/cerrar-simbolo-de-boton-circular.c7ee96d7.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js","assets/core.77a31e8a.js","assets/striptags.65da94af.js"]),meta:{auth:!0}},{path:"/platform/documents/automatic/organize/:id",name:"autowriting-organize",component:()=>t(()=>import("./organize.ddb2deb0.js"),["assets/organize.ddb2deb0.js","assets/organize.4ce99886.css","assets/new-tags-suggest.vue_vue_type_style_index_0_scoped_true_lang.00f0732d.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/flecha-izquierda.f982a190.js","assets/cerrar-simbolo-de-boton-circular.c7ee96d7.js","assets/boton-agregar.c9c97214.js","assets/new-tags-suggest.36b6f8fc.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js","assets/core.77a31e8a.js","assets/vuejs-tree.common.02dd7996.js"]),meta:{auth:!0}},{path:"/platform/autowriting/new",name:"autowriting-new",component:()=>t(()=>import("./create.a8fe505e.js"),["assets/create.a8fe505e.js","assets/create.3194a4db.css","assets/vue-quill.snow.972c7f4f.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/flecha-izquierda.f982a190.js","assets/cerrar-simbolo-de-boton-circular.c7ee96d7.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js","assets/core.77a31e8a.js","assets/striptags.65da94af.js"]),props:!0,meta:{auth:!0}},{path:"/platform/autowriting/edit/:id",name:"autowriting-edit",component:()=>t(()=>import("./create.a8fe505e.js"),["assets/create.a8fe505e.js","assets/create.3194a4db.css","assets/vue-quill.snow.972c7f4f.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/flecha-izquierda.f982a190.js","assets/cerrar-simbolo-de-boton-circular.c7ee96d7.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js","assets/core.77a31e8a.js","assets/striptags.65da94af.js"]),props:!0,meta:{auth:!0}},{path:"/platform/search",name:"search",component:()=>t(()=>import("./results.c49c4f04.js"),["assets/results.c49c4f04.js","assets/results-writings.7b2cfe19.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/flecha-izquierda.f982a190.js","assets/vuejs-tree.common.02dd7996.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js"]),meta:{auth:!0}},{path:"/platform/search/writings",name:"search-writings",component:()=>t(()=>import("./results-writings.f11e1d0c.js"),["assets/results-writings.f11e1d0c.js","assets/results-writings.7b2cfe19.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/flecha-izquierda.f982a190.js","assets/vuejs-tree.common.02dd7996.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js"]),meta:{auth:!0}},{path:"/platform/my-writings",name:"my-writings-folders",component:()=>t(()=>import("./folders.18b5d4aa.js"),["assets/folders.18b5d4aa.js","assets/folders.4b8cc017.css","assets/vue-quill.snow.972c7f4f.css","assets/new-tags-suggest.vue_vue_type_style_index_0_scoped_true_lang.00f0732d.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/admin-add.c0a05d7b.js","assets/boligrafo.1cbc6d81.js","assets/expandir.532577ce.js","assets/descargar.fa43ec5f.js","assets/boton-agregar.c9c97214.js","assets/index.90840984.js","assets/Editor.e4eec21a.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js","assets/vuejs-tree.common.02dd7996.js","assets/share-button-writting-private.46cbf0eb.js","assets/share-button-writting-private.ec7935bb.css","assets/cuota.edac84f3.js"]),meta:{auth:!0}},{path:"/platform/my-writings/migration",name:"my-writings-migration",component:()=>t(()=>import("./migrated.d4107d70.js"),["assets/migrated.d4107d70.js","assets/formar-parte.dd71d6ab.css","assets/vue-quill.snow.972c7f4f.css","assets/new-tags-suggest.vue_vue_type_style_index_0_scoped_true_lang.00f0732d.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js","assets/admin-add.c0a05d7b.js","assets/vuejs-tree.common.02dd7996.js","assets/new-tags-suggest.36b6f8fc.js","assets/boligrafo.1cbc6d81.js","assets/expandir.532577ce.js","assets/descargar.fa43ec5f.js","assets/DocumentDropdown.3ac4bf8a.js","assets/edit.dc69b3f2.js","assets/share-button-writting-private.46cbf0eb.js","assets/share-button-writting-private.ec7935bb.css","assets/cuota.edac84f3.js","assets/quill-table.54d5d997.js"]),meta:{auth:!0}},{path:"/platform/my-writings/tags",name:"my-writings-tags",component:()=>t(()=>import("./tags.155dbc7e.js"),["assets/tags.155dbc7e.js","assets/tags.950dd4a4.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/boligrafo.1cbc6d81.js","assets/expandir.532577ce.js","assets/descargar.fa43ec5f.js","assets/index.90840984.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js","assets/share-button-writting-private.46cbf0eb.js","assets/share-button-writting-private.ec7935bb.css","assets/cuota.edac84f3.js"]),meta:{auth:!0}},{path:"/platform/my-writings/document/automatic/:id",name:"my-writings-view-automatic-document",component:()=>t(()=>import("./single-automatic.8d2149b8.js"),["assets/single-automatic.8d2149b8.js","assets/single-automatic.6d1fcff9.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js"]),meta:{auth:!0}},{path:"/platform/admin/activity",name:"admin-activity",component:()=>t(()=>import("./activity.dad14b63.js"),["assets/activity.dad14b63.js","assets/activity.cb5f6fdf.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js"])},{path:"/platform/admin/comments/documents",name:"admin-comments-documents",component:()=>t(()=>import("./comments.d02461a5.js"),["assets/comments.d02461a5.js","assets/activity.cb5f6fdf.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/trash.123024ab.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js"])},{path:"/platform/admin/payments/suscriptions",name:"admin-index",component:()=>t(()=>import("./remove-suscription.cc158504.js"),["assets/remove-suscription.cc158504.js","assets/activity.cb5f6fdf.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js"])},{path:"/platform/admin/payments",name:"admin-payments",component:()=>t(()=>import("./list.2ecd8c4b.js"),["assets/list.2ecd8c4b.js","assets/activity.cb5f6fdf.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/edit.dc69b3f2.js","assets/trash.123024ab.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js"])},{path:"/platform/admin/payments/code",name:"admin-payments-code",component:()=>t(()=>import("./codes.45368592.js"),["assets/codes.45368592.js","assets/activity.cb5f6fdf.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/edit.dc69b3f2.js","assets/trash.123024ab.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js"])},{path:"/platform/admin/users",name:"admin-users",component:()=>t(()=>import("./users.f6471745.js"),["assets/users.f6471745.js","assets/points.7a1c4ee2.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/edit.dc69b3f2.js","assets/trash.123024ab.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js"])},{path:"/platform/admin/users/:id",name:"admin-users-edit",component:()=>t(()=>import("./edit.a9e8ccac.js"),["assets/edit.a9e8ccac.js","assets/activity.cb5f6fdf.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js"])},{path:"/platform/admin/folders/documents",name:"admin-categories",component:()=>t(()=>import("./root.a64ee332.js"),["assets/root.a64ee332.js","assets/root.767d5e55.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/admin-add.c0a05d7b.js","assets/delete.89e1e206.js","assets/boligrafo.1cbc6d81.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js","assets/core.77a31e8a.js","assets/vuejs-tree.common.02dd7996.js"])},{path:"/platform/admin/folders/v2/documents",name:"admin-categories-v2",component:()=>t(()=>import("./rootv2.05fa98ae.js"),["assets/rootv2.05fa98ae.js","assets/root.767d5e55.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/admin-add.c0a05d7b.js","assets/delete.89e1e206.js","assets/boligrafo.1cbc6d81.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js","assets/core.77a31e8a.js","assets/vuejs-tree.common.02dd7996.js"])},{path:"/platform/admin/folders/writings",name:"admin-folders-writings",component:()=>t(()=>import("./root.4f04f64e.js"),["assets/root.4f04f64e.js","assets/root.19288b56.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/admin-add.c0a05d7b.js","assets/delete.89e1e206.js","assets/boligrafo.1cbc6d81.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js","assets/core.77a31e8a.js","assets/vuejs-tree.common.02dd7996.js"])},{path:"/platform/admin/folders/v2/writings",name:"admin-folders-writings-v2",component:()=>t(()=>import("./rootv2.232e4d0b.js"),["assets/rootv2.232e4d0b.js","assets/root.767d5e55.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/admin-add.c0a05d7b.js","assets/delete.89e1e206.js","assets/boligrafo.1cbc6d81.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js","assets/core.77a31e8a.js","assets/vuejs-tree.common.02dd7996.js"])},{path:"/platform/admin/tags",name:"admin-tags",component:()=>t(()=>import("./tags.1e11fb68.js"),["assets/tags.1e11fb68.js","assets/points.7a1c4ee2.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/trash.123024ab.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js"])},{path:"/platform/admin/suggest/reports",name:"admin-suggest-reports",component:()=>t(()=>import("./reports.5275aef3.js"),["assets/reports.5275aef3.js","assets/points.7a1c4ee2.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/trash.123024ab.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js"])},{path:"/platform/admin/suggest/reports/comments",name:"admin-suggest-reports-comments",component:()=>t(()=>import("./reports-comments.cf9ea3a1.js"),["assets/reports-comments.cf9ea3a1.js","assets/points.7a1c4ee2.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/trash.123024ab.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js"])},{path:"/platform/admin/suggest/feedback",name:"admin-suggest-feedback",component:()=>t(()=>import("./feedback.66c63391.js"),["assets/feedback.66c63391.js","assets/points.7a1c4ee2.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/trash.123024ab.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js"])},{path:"/platform/admin/suggest/tags",name:"admin-suggest-tags",component:()=>t(()=>import("./tags.66330040.js"),["assets/tags.66330040.js","assets/points.7a1c4ee2.css","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/Logocompleto.3df4452e.js"])},{path:"/platform/admin/suggest/folders",name:"admin-suggest-folders",component:()=>t(()=>import("./folders.f1a43d0a.js"),["assets/folders.f1a43d0a.js","assets/points.7a1c4ee2.css","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/Logocompleto.3df4452e.js"])},{path:"/platform/admin/suggest/points",name:"admin-suggest-points",component:()=>t(()=>import("./points.9133a342.js"),["assets/points.9133a342.js","assets/points.7a1c4ee2.css","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/Logocompleto.3df4452e.js"])},{path:"/platform/account",name:"account",component:()=>t(()=>import("./account.b361f9d1.js"),["assets/account.b361f9d1.js","assets/account.b82b98c4.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/flecha-izquierda.f982a190.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js"])},{path:"/share/w/:id",name:"view-automatic-document-share",component:()=>t(()=>import("./share-single-automatic.0068b7e8.js"),["assets/share-single-automatic.0068b7e8.js","assets/single-automatic.31880174.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/flecha-izquierda.f982a190.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js","assets/toolbar-writings-comunity.edad3899.js","assets/toolbar-writings-comunity.8c80957d.css","assets/etiqueta.f26d8a8f.js","assets/cuota.edac84f3.js"]),meta:{}},{path:"/share/d/:id",name:"view-document-share",component:()=>t(()=>import("./share-single-document.8f210502.js"),["assets/share-single-document.8f210502.js","assets/single-document.cbabc648.css","assets/vendor.3ce90362.js","assets/vendor.e11b6f39.css","assets/flecha-izquierda.f982a190.js","assets/navbar.3dc83e26.js","assets/navbar.4d3882df.css","assets/Logocompleto.3df4452e.js","assets/toolbar-document-comunity.d85733d3.js","assets/toolbar-writings-comunity.8c80957d.css","assets/etiqueta.f26d8a8f.js","assets/cuota.edac84f3.js"]),meta:{}}]});const n=I(N),z={show:!1,color:"#0C00FF",failedColor:"#B62B2B",thickness:"3px",transition:{speed:"0.2s",opacity:"0.6s"},autoRevert:!0,location:"top",inverse:!1};window.ENDPOINT="http://localhost:4000/api";window.PATHUPLOAD="http://localhost:4000/uploads/";window.ENDPOINTEXPORTS="http://localhost:4000/exports/";window.BASEURL="http://localhost:4000";n.use(O,{apiKey:"8df19e66ae3486207a156237c15ede31adef0fa1",clientId:"105288870070967819657.apps.googleusercontent.com",discoveryDocs:["https://docs.googleapis.com/$discovery/rest?version=v1"],scope:"https://www.googleapis.com/auth/documents.readonly"});n.use(L);n.use(T,{clientId:"873163088650-rdtnllo0415r64pdgi4gilgnghgr5soc.apps.googleusercontent.com",buttonConfig:{theme:"outline",shape:"circle",locale:"es"}});n.directive("tooltip",A);n.use(R());n.use(V,z);n.use(F);n.use(D);n.mount("#app");export{F as r};