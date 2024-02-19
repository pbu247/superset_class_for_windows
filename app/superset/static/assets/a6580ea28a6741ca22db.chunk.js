"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8774],{27989:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(67294),r=a(51995),s=a(55867),n=a(35932),i=a(74069),o=a(4715),d=a(34858),u=a(60972),c=a(11965);const h=r.iK.div`
  display: block;
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
`,p=r.iK.div`
  padding-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  padding-top: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;

  & > div {
    margin: ${e=>{let{theme:t}=e;return t.gridUnit}}px 0;
  }

  &.extra-container {
    padding-top: 8px;
  }

  .confirm-overwrite {
    margin-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }

  .input-container {
    display: flex;
    align-items: center;

    label {
      display: flex;
      margin-right: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    }

    i {
      margin: 0 ${e=>{let{theme:t}=e;return t.gridUnit}}px;
    }
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  textarea {
    height: 160px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light1}};
  }

  textarea,
  input[type='text'],
  input[type='number'] {
    padding: ${e=>{let{theme:t}=e;return 1.5*t.gridUnit}}px
      ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    border-style: none;
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    border-radius: ${e=>{let{theme:t}=e;return t.gridUnit}}px;

    &[name='name'] {
      flex: 0 1 auto;
      width: 40%;
    }

    &[name='sqlalchemy_uri'] {
      margin-right: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
    }
  }
`,m=e=>{let{resourceName:t,resourceLabel:a,passwordsNeededMessage:r,confirmOverwriteMessage:m,onModelImport:b,show:g,onHide:y,passwordFields:f=[],setPasswordFields:Z=(()=>{}),sshTunnelPasswordFields:_=[],setSSHTunnelPasswordFields:w=(()=>{}),sshTunnelPrivateKeyFields:S=[],setSSHTunnelPrivateKeyFields:v=(()=>{}),sshTunnelPrivateKeyPasswordFields:T=[],setSSHTunnelPrivateKeyPasswordFields:x=(()=>{})}=e;const[k,C]=(0,l.useState)(!0),[P,$]=(0,l.useState)({}),[N,E]=(0,l.useState)(!1),[F,H]=(0,l.useState)(!1),[I,D]=(0,l.useState)([]),[A,M]=(0,l.useState)(!1),[O,U]=(0,l.useState)(),[R,z]=(0,l.useState)({}),[L,B]=(0,l.useState)({}),[K,q]=(0,l.useState)({}),V=()=>{D([]),Z([]),$({}),E(!1),H(!1),M(!1),U(""),w([]),v([]),x([]),z({}),B({}),q({})},{state:{alreadyExists:W,passwordsNeeded:Y,sshPasswordNeeded:j,sshPrivateKeyNeeded:G,sshPrivateKeyPasswordNeeded:X},importResource:J}=(0,d.PW)(t,a,(e=>{U(e)}));(0,l.useEffect)((()=>{Z(Y),Y.length>0&&M(!1)}),[Y,Z]),(0,l.useEffect)((()=>{E(W.length>0),W.length>0&&M(!1)}),[W,E]),(0,l.useEffect)((()=>{w(j),j.length>0&&M(!1)}),[j,w]),(0,l.useEffect)((()=>{v(G),G.length>0&&M(!1)}),[G,v]),(0,l.useEffect)((()=>{x(X),X.length>0&&M(!1)}),[X,x]);return k&&g&&C(!1),(0,c.tZ)(i.Z,{name:"model",className:"import-model-modal",disablePrimaryButton:0===I.length||N&&!F||A,onHandledPrimaryAction:()=>{var e;(null==(e=I[0])?void 0:e.originFileObj)instanceof File&&(M(!0),J(I[0].originFileObj,P,R,L,K,F).then((e=>{e&&(V(),b())})))},onHide:()=>{C(!0),y(),V()},primaryButtonName:N?(0,s.t)("Overwrite"):(0,s.t)("Import"),primaryButtonType:N?"danger":"primary",width:"750px",show:g,title:(0,c.tZ)("h4",null,(0,s.t)("Import %s",a))},(0,c.tZ)(p,null,(0,c.tZ)(o.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:I,onChange:e=>{D([{...e.file,status:"done"}])},onRemove:e=>(D(I.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:A},(0,c.tZ)(n.Z,{loading:A},(0,s.t)("Select file")))),O&&(0,c.tZ)(u.Z,{errorMessage:O,showDbInstallInstructions:f.length>0||_.length>0||S.length>0||T.length>0}),(()=>{if(0===f.length&&0===_.length&&0===S.length&&0===T.length)return null;const e=[...new Set([...f,..._,...S,...T])];return(0,c.tZ)(l.Fragment,null,(0,c.tZ)("h5",null,(0,s.t)("Database passwords")),(0,c.tZ)(h,null,r),e.map((e=>(0,c.tZ)(l.Fragment,null,(null==f?void 0:f.indexOf(e))>=0&&(0,c.tZ)(p,{key:`password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,s.t)("%s PASSWORD",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:P[e],onChange:t=>$({...P,[e]:t.target.value})})),(null==_?void 0:_.indexOf(e))>=0&&(0,c.tZ)(p,{key:`ssh_tunnel_password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,s.t)("%s SSH TUNNEL PASSWORD",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`ssh_tunnel_password-${e}`,autoComplete:`ssh_tunnel_password-${e}`,type:"password",value:R[e],onChange:t=>z({...R,[e]:t.target.value})})),(null==S?void 0:S.indexOf(e))>=0&&(0,c.tZ)(p,{key:`ssh_tunnel_private_key-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,s.t)("%s SSH TUNNEL PRIVATE KEY",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("textarea",{name:`ssh_tunnel_private_key-${e}`,autoComplete:`ssh_tunnel_private_key-${e}`,value:L[e],onChange:t=>B({...L,[e]:t.target.value})})),(null==T?void 0:T.indexOf(e))>=0&&(0,c.tZ)(p,{key:`ssh_tunnel_private_key_password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,s.t)("%s SSH TUNNEL PRIVATE KEY PASSWORD",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`ssh_tunnel_private_key_password-${e}`,autoComplete:`ssh_tunnel_private_key_password-${e}`,type:"password",value:K[e],onChange:t=>q({...K,[e]:t.target.value})}))))))})(),N?(0,c.tZ)(l.Fragment,null,(0,c.tZ)(p,null,(0,c.tZ)("div",{className:"confirm-overwrite"},m),(0,c.tZ)("div",{className:"control-label"},(0,s.t)('Type "%s" to confirm',(0,s.t)("OVERWRITE"))),(0,c.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const l=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";H(l.toUpperCase()===(0,s.t)("OVERWRITE"))}}))):null)}},83556:(e,t,a)=>{a.d(t,{P:()=>c});var l=a(67294),r=a(51995),s=a(59361),n=a(58593),i=a(11965);const o=(0,r.iK)(s.Z)`
  ${e=>{let{theme:t}=e;return`\n  margin-top: ${t.gridUnit}px;\n  margin-bottom: ${t.gridUnit}px;\n  font-size: ${t.typography.sizes.s}px;\n  `}};
`,d=e=>{let{name:t,id:a,index:r,onDelete:s,editable:d=!1,onClick:u}=e;const c=(0,l.useMemo)((()=>t.length>20),[t]),h=(0,i.tZ)(l.Fragment,null,d?(0,i.tZ)(o,{key:a,closable:d,onClose:()=>r?null==s?void 0:s(r):null,color:"blue"},c?`${t.slice(0,20)}...`:t):(0,i.tZ)(o,{role:"link",key:a,onClick:u},a?(0,i.tZ)("a",{href:`/superset/all_entities/?tags=${t}`,target:"_blank",rel:"noreferrer"},c?`${t.slice(0,20)}...`:t):c?`${t.slice(0,20)}...`:t));return c?(0,i.tZ)(n.u,{title:t,key:t},h):h},u=r.iK.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,c=e=>{let{tags:t,editable:a=!1,onDelete:r,maxTags:s}=e;const[n,o]=(0,l.useState)(s),c=e=>{null==r||r(e)},h=(0,l.useMemo)((()=>n?t.length>n:null),[t.length,n]),p=(0,l.useMemo)((()=>"number"==typeof n?t.length-n+1:null),[h,t.length,n]);return(0,i.tZ)(u,{className:"tag-list"},h&&"number"==typeof n?(0,i.tZ)(l.Fragment,null,t.slice(0,n-1).map(((e,t)=>(0,i.tZ)(d,{id:e.id,key:e.id,name:e.name,index:t,onDelete:c,editable:a}))),t.length>n?(0,i.tZ)(d,{name:`+${p}...`,onClick:()=>o(void 0)}):null):(0,i.tZ)(l.Fragment,null,t.map(((e,t)=>(0,i.tZ)(d,{id:e.id,key:e.id,name:e.name,index:t,onDelete:c,editable:a}))),s&&t.length>s?(0,i.tZ)(d,{name:"...",onClick:()=>o(s)}):null))}},18510:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var l,r=a(55867),s=a(51995),n=a(93185),i=a(31069),o=a(67294),d=a(73727),u=a(15926),c=a.n(u),h=a(40768),p=a(34858),m=a(19259),b=a(83556),g=a(32228),y=a(38703),f=a(86074),Z=a(18782),_=a(61337),w=a(14114),S=a(34581),v=a(70163),T=a(17198),x=a(36674),k=a(20818),C=a(58593),P=a(27989),$=a(79789),N=a(60718),E=a(65043);!function(e){e.PUBLISHED="published",e.DRAFT="draft"}(l||(l={}));var F=a(11965);const H=(0,r.t)('The passwords for the databases below are needed in order to import them together with the dashboards. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),I=(0,r.t)("You are importing one or more dashboards that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),D=s.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
`,A=(0,w.ZP)((function(e){const{addDangerToast:t,addSuccessToast:a,user:{userId:s}}=e,{state:{loading:u,resourceCount:w,resourceCollection:A,bulkSelectEnabled:M},setResourceCollection:O,hasPerm:U,fetchData:R,toggleBulkSelect:z,refreshData:L}=(0,p.Yi)("dashboard",(0,r.t)("dashboard"),t),B=(0,o.useMemo)((()=>A.map((e=>e.id))),[A]),[K,q]=(0,p.NE)("dashboard",B,t),[V,W]=(0,o.useState)(null),[Y,j]=(0,o.useState)(null),[G,X]=(0,o.useState)(!1),[J,Q]=(0,o.useState)([]),[ee,te]=(0,o.useState)(!1),[ae,le]=(0,o.useState)([]),[re,se]=(0,o.useState)([]),[ne,ie]=(0,o.useState)([]),oe=(0,_.OH)(null==s?void 0:s.toString(),null),de=U("can_write"),ue=U("can_write"),ce=U("can_write"),he=U("can_export")&&(0,n.cr)(n.TT.VERSIONED_EXPORT),pe=[{id:"changed_on_delta_humanized",desc:!0}];function me(e){W(e)}function be(e){return i.Z.get({endpoint:`/api/v1/dashboard/${e.id}`}).then((e=>{let{json:t={}}=e;O(A.map((e=>{var a;if(e.id===(null==t||null==(a=t.result)?void 0:a.id)){const{changed_by_name:a,changed_by:l,dashboard_title:r="",slug:s="",json_metadata:n="",changed_on_delta_humanized:i,url:o="",certified_by:d="",certification_details:u="",owners:c,tags:h}=t.result;return{...e,changed_by_name:a,changed_by:l,dashboard_title:r,slug:s,json_metadata:n,changed_on_delta_humanized:i,url:o,certified_by:d,certification_details:u,owners:c,tags:h}}return e})))}),(0,h.v$)((e=>t((0,r.t)("An error occurred while fetching dashboards: %s",e)))))}const ge=e=>{const t=e.map((e=>{let{id:t}=e;return t}));(0,g.Z)("dashboard",t,(()=>{te(!1)})),te(!0)},ye=(0,o.useMemo)((()=>[{Cell:e=>{let{row:{original:{id:t}}}=e;return s&&(0,F.tZ)(x.Z,{itemId:t,saveFaveStar:K,isStarred:q[t]})},Header:"",id:"id",disableSortBy:!0,size:"xs",hidden:!s},{Cell:e=>{let{row:{original:{url:t,dashboard_title:a,certified_by:l,certification_details:r}}}=e;return(0,F.tZ)(d.rU,{to:t},l&&(0,F.tZ)(o.Fragment,null,(0,F.tZ)($.Z,{certifiedBy:l,details:r})," "),a)},Header:(0,r.t)("Title"),accessor:"dashboard_title"},{Cell:e=>{let{row:{original:{changed_by_name:t}}}=e;return(0,F.tZ)(o.Fragment,null,t)},Header:(0,r.t)("Modified by"),accessor:"changed_by.first_name",size:"xl"},{Cell:e=>{let{row:{original:{status:t}}}=e;return t===l.PUBLISHED?(0,r.t)("Published"):(0,r.t)("Draft")},Header:(0,r.t)("Status"),accessor:"published",size:"xl"},{Cell:e=>{let{row:{original:{changed_on_delta_humanized:t}}}=e;return(0,F.tZ)("span",{className:"no-wrap"},t)},Header:(0,r.t)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:e=>{let{row:{original:{created_by:t}}}=e;return t?`${t.first_name} ${t.last_name}`:""},Header:(0,r.t)("Created by"),accessor:"created_by",disableSortBy:!0,size:"xl"},{Cell:e=>{let{row:{original:{owners:t=[]}}}=e;return(0,F.tZ)(S.Z,{users:t})},Header:(0,r.t)("Owners"),accessor:"owners",disableSortBy:!0,size:"xl"},{Cell:e=>{let{row:{original:{tags:t=[]}}}=e;return(0,F.tZ)(b.P,{tags:t.filter((e=>"TagTypes.custom"===e.type||1===e.type)),maxTags:3})},Header:(0,r.t)("Tags"),accessor:"tags",disableSortBy:!0,hidden:!(0,n.cr)(n.TT.TAGGING_SYSTEM)},{Cell:e=>{let{row:{original:l}}=e;return(0,F.tZ)(D,{className:"actions"},ce&&(0,F.tZ)(m.Z,{title:(0,r.t)("Please confirm"),description:(0,F.tZ)(o.Fragment,null,(0,r.t)("Are you sure you want to delete")," ",(0,F.tZ)("b",null,l.dashboard_title),"?"),onConfirm:()=>(0,h.Iu)(l,L,a,t)},(e=>(0,F.tZ)(C.u,{id:"delete-action-tooltip",title:(0,r.t)("Delete"),placement:"bottom"},(0,F.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,F.tZ)(v.Z.Trash,null))))),he&&(0,F.tZ)(C.u,{id:"export-action-tooltip",title:(0,r.t)("Export"),placement:"bottom"},(0,F.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>ge([l])},(0,F.tZ)(v.Z.Share,null))),ue&&(0,F.tZ)(C.u,{id:"edit-action-tooltip",title:(0,r.t)("Edit"),placement:"bottom"},(0,F.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>me(l)},(0,F.tZ)(v.Z.EditAlt,null))))},Header:(0,r.t)("Actions"),id:"actions",hidden:!ue&&!ce&&!he,disableSortBy:!0}]),[s,ue,ce,he,K,q,L,a,t]),fe=(0,o.useMemo)((()=>({Header:(0,r.t)("Favorite"),key:"favorite",id:"id",urlDisplay:"favorite",input:"select",operator:Z.p.dashboardIsFav,unfilteredLabel:(0,r.t)("Any"),selects:[{label:(0,r.t)("Yes"),value:!0},{label:(0,r.t)("No"),value:!1}]})),[]),Ze=(0,o.useMemo)((()=>{const a=[{Header:(0,r.t)("Search"),key:"search",id:"dashboard_title",input:"search",operator:Z.p.titleOrSlug},{Header:(0,r.t)("Owner"),key:"owner",id:"owners",input:"select",operator:Z.p.relationManyMany,unfilteredLabel:(0,r.t)("All"),fetchSelects:(0,h.tm)("dashboard","owners",(0,h.v$)((e=>t((0,r.t)("An error occurred while fetching dashboard owner values: %s",e)))),e.user),paginate:!0},{Header:(0,r.t)("Created by"),key:"created_by",id:"created_by",input:"select",operator:Z.p.relationOneMany,unfilteredLabel:(0,r.t)("All"),fetchSelects:(0,h.tm)("dashboard","created_by",(0,h.v$)((e=>t((0,r.t)("An error occurred while fetching dashboard created by values: %s",e)))),e.user),paginate:!0},{Header:(0,r.t)("Status"),key:"published",id:"published",input:"select",operator:Z.p.equals,unfilteredLabel:(0,r.t)("Any"),selects:[{label:(0,r.t)("Published"),value:!0},{label:(0,r.t)("Draft"),value:!1}]},...s?[fe]:[],{Header:(0,r.t)("Certified"),key:"certified",id:"id",urlDisplay:"certified",input:"select",operator:Z.p.dashboardIsCertified,unfilteredLabel:(0,r.t)("Any"),selects:[{label:(0,r.t)("Yes"),value:!0},{label:(0,r.t)("No"),value:!1}]}];return(0,n.cr)(n.TT.TAGGING_SYSTEM)&&a.push({Header:(0,r.t)("Tags"),key:"tags",id:"tags",input:"select",operator:Z.p.dashboardTags,unfilteredLabel:(0,r.t)("All"),fetchSelects:N.m}),a}),[t,fe,e.user]),_e=[{desc:!1,id:"dashboard_title",label:(0,r.t)("Alphabetical"),value:"alphabetical"},{desc:!0,id:"changed_on_delta_humanized",label:(0,r.t)("Recently modified"),value:"recently_modified"},{desc:!1,id:"changed_on_delta_humanized",label:(0,r.t)("Least recently modified"),value:"least_recently_modified"}],we=(0,o.useCallback)((e=>(0,F.tZ)(E.Z,{dashboard:e,hasPerm:U,bulkSelectEnabled:M,showThumbnails:oe?oe.thumbnails:(0,n.cr)(n.TT.THUMBNAILS),userId:s,loading:u,openDashboardEditModal:me,saveFavoriteStatus:K,favoriteStatus:q[e.id],handleBulkDashboardExport:ge,onDelete:e=>j(e)})),[M,q,U,u,s,K,oe]),Se=[];return(ce||he)&&Se.push({name:(0,r.t)("Bulk select"),buttonStyle:"secondary","data-test":"bulk-select",onClick:z}),de&&(Se.push({name:(0,F.tZ)(o.Fragment,null,(0,F.tZ)("i",{className:"fa fa-plus"})," ",(0,r.t)("Dashboard")),buttonStyle:"primary",onClick:()=>{window.location.assign("/dashboard/new")}}),(0,n.cr)(n.TT.VERSIONED_EXPORT)&&Se.push({name:(0,F.tZ)(C.u,{id:"import-tooltip",title:(0,r.t)("Import dashboards"),placement:"bottomRight"},(0,F.tZ)(v.Z.Import,null)),buttonStyle:"link",onClick:()=>{X(!0)}})),(0,F.tZ)(o.Fragment,null,(0,F.tZ)(f.Z,{name:(0,r.t)("Dashboards"),buttons:Se}),(0,F.tZ)(m.Z,{title:(0,r.t)("Please confirm"),description:(0,r.t)("Are you sure you want to delete the selected dashboards?"),onConfirm:function(e){return i.Z.delete({endpoint:`/api/v1/dashboard/?q=${c().encode(e.map((e=>{let{id:t}=e;return t})))}`}).then((e=>{let{json:t={}}=e;L(),a(t.message)}),(0,h.v$)((e=>t((0,r.t)("There was an issue deleting the selected dashboards: ",e)))))}},(e=>{const l=[];return ce&&l.push({key:"delete",name:(0,r.t)("Delete"),type:"danger",onSelect:e}),he&&l.push({key:"export",name:(0,r.t)("Export"),type:"primary",onSelect:ge}),(0,F.tZ)(o.Fragment,null,V&&(0,F.tZ)(k.Z,{dashboardId:V.id,show:!0,onHide:()=>W(null),onSubmit:be}),Y&&(0,F.tZ)(T.Z,{description:(0,F.tZ)(o.Fragment,null,(0,r.t)("Are you sure you want to delete")," ",(0,F.tZ)("b",null,Y.dashboard_title),"?"),onConfirm:()=>{(0,h.Iu)(Y,L,a,t,void 0,s),j(null)},onHide:()=>j(null),open:!!Y,title:(0,r.t)("Please confirm")}),(0,F.tZ)(Z.Z,{bulkActions:l,bulkSelectEnabled:M,cardSortSelectOptions:_e,className:"dashboard-list-view",columns:ye,count:w,data:A,disableBulkSelect:z,fetchData:R,filters:Ze,initialSort:pe,loading:u,pageSize:25,showThumbnails:oe?oe.thumbnails:(0,n.cr)(n.TT.THUMBNAILS),renderCard:we,defaultViewMode:(0,n.cr)(n.TT.LISTVIEWS_DEFAULT_CARD_VIEW)?"card":"table"}))})),(0,F.tZ)(P.Z,{resourceName:"dashboard",resourceLabel:(0,r.t)("dashboard"),passwordsNeededMessage:H,confirmOverwriteMessage:I,addDangerToast:t,addSuccessToast:a,onModelImport:()=>{X(!1),L(),a((0,r.t)("Dashboard imported"))},show:G,onHide:()=>{X(!1)},passwordFields:J,setPasswordFields:Q,sshTunnelPasswordFields:ae,setSSHTunnelPasswordFields:le,sshTunnelPrivateKeyFields:re,setSSHTunnelPrivateKeyFields:se,sshTunnelPrivateKeyPasswordFields:ne,setSSHTunnelPrivateKeyPasswordFields:ie}),ee&&(0,F.tZ)(y.Z,null))}))}}]);
//# sourceMappingURL=a6580ea28a6741ca22db.chunk.js.map