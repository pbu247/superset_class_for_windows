"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[373],{87827:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var l=a(78580),n=a.n(l),r=a(55867),o=a(93185),s=a(67294),i=a(40768),d=a(34858),c=a(19259),u=a(86074),m=a(18782),b=a(61337),h=a(14114),g=a(70163),Z=a(58593),p=a(34581),_=a(73727),f=a(48273),T=a(60331),y=a(51995),S=a(4715),k=a(83862),C=a(21742),w=a(11965);const v=function(e){let{tag:t,hasPerm:a,bulkSelectEnabled:l,tagFilter:n,refreshData:d,userId:u,addDangerToast:m,addSuccessToast:b,showThumbnails:h}=e;const Z=a("can_write"),p=(0,y.Fg)(),T=(0,w.tZ)(k.v,null,Z&&(0,w.tZ)(k.v.Item,null,(0,w.tZ)(c.Z,{title:(0,r.t)("Please confirm"),description:(0,w.tZ)(s.Fragment,null,(0,r.t)("Are you sure you want to delete")," ",(0,w.tZ)("b",null,t.name),"?"),onConfirm:()=>(e=>{(0,f.Qz)([e],b,m),d()})(t)},(e=>(0,w.tZ)("div",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,w.tZ)(g.Z.Trash,{iconSize:"l"})," ",(0,r.t)("Delete"))))));return(0,w.tZ)(i.ZB,null,(0,w.tZ)(C.Z,{title:t.name,cover:(0,o.cr)(o.TT.THUMBNAILS)&&h?null:(0,w.tZ)(s.Fragment,null),url:void 0,linkComponent:_.rU,imgFallbackURL:"/static/assets/images/dashboard-card-fallback.svg",description:(0,r.t)("Modified %s",t.changed_on_delta_humanized),actions:(0,w.tZ)(C.Z.Actions,{onClick:e=>{e.stopPropagation(),e.preventDefault()}},(0,w.tZ)(S.Gj,{overlay:T},(0,w.tZ)(g.Z.MoreVert,{iconColor:p.colors.grayscale.base})))}))},A=(0,h.ZP)((function(e){const{addDangerToast:t,addSuccessToast:a,user:{userId:l}}=e,{state:{loading:h,resourceCount:y,resourceCollection:S,bulkSelectEnabled:k},hasPerm:C,fetchData:A,toggleBulkSelect:D,refreshData:z}=(0,d.Yi)("tag",(0,r.t)("tag"),t),I=(0,b.OH)(null==l?void 0:l.toString(),null),H=C("can_write"),M=[{id:"changed_on_delta_humanized",desc:!0}];function B(e,t,a){(0,f.Qz)(e,t,a),z()}const F=(0,s.useMemo)((()=>[{Cell:e=>{let{row:{original:{name:t}}}=e;return(0,w.tZ)(T.Z,null,(0,w.tZ)(_.rU,{to:`/superset/all_entities/?tags=${t}`},t))},Header:(0,r.t)("Name"),accessor:"name"},{Cell:e=>{let{row:{original:{changed_on_delta_humanized:t}}}=e;return(0,w.tZ)("span",{className:"no-wrap"},t)},Header:(0,r.t)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:e=>{let{row:{original:{created_by:t}}}=e;return t?(0,w.tZ)(p.Z,{users:[t]}):""},Header:(0,r.t)("Created by"),accessor:"created_by",disableSortBy:!0,size:"xl"},{Cell:e=>{let{row:{original:l}}=e;return(0,w.tZ)(i.eX,{className:"actions"},H&&(0,w.tZ)(c.Z,{title:(0,r.t)("Please confirm"),description:(0,w.tZ)(s.Fragment,null,(0,r.t)("Are you sure you want to delete")," ",(0,w.tZ)("b",null,l.dashboard_title),"?"),onConfirm:()=>B([l],a,t)},(e=>(0,w.tZ)(Z.u,{id:"delete-action-tooltip",title:(0,r.t)("Delete"),placement:"bottom"},(0,w.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,w.tZ)(g.Z.Trash,null))))))},Header:(0,r.t)("Actions"),id:"actions",hidden:!H,disableSortBy:!0}]),[l,H,z,a,t]),N=(0,s.useMemo)((()=>[{Header:(0,r.t)("Created by"),id:"created_by",input:"select",operator:m.p.relationOneMany,unfilteredLabel:(0,r.t)("All"),fetchSelects:(0,i.tm)("tag","created_by",(0,i.v$)((e=>t((0,r.t)("An error occurred while fetching tag created by values: %s",e)))),e.user),paginate:!0},{Header:(0,r.t)("Search"),id:"name",input:"search",operator:m.p.contains}]),[t,e.user]),L=[{desc:!1,id:"name",label:(0,r.t)("Alphabetical"),value:"alphabetical"},{desc:!0,id:"changed_on_delta_humanized",label:(0,r.t)("Recently modified"),value:"recently_modified"},{desc:!1,id:"changed_on_delta_humanized",label:(0,r.t)("Least recently modified"),value:"least_recently_modified"}],P=(0,s.useCallback)((e=>(0,w.tZ)(v,{tag:e,hasPerm:C,bulkSelectEnabled:k,refreshData:z,showThumbnails:I?I.thumbnails:(0,o.cr)(o.TT.THUMBNAILS),userId:l,loading:h,addDangerToast:t,addSuccessToast:a})),[t,a,k,C,h,l,z,I]),E=[];return H&&E.push({name:(0,r.t)("Bulk select"),buttonStyle:"secondary","data-test":"bulk-select",onClick:D}),(0,w.tZ)(s.Fragment,null,(0,w.tZ)(u.Z,{name:(0,r.t)("Tags"),buttons:E}),(0,w.tZ)(c.Z,{title:(0,r.t)("Please confirm"),description:(0,r.t)("Are you sure you want to delete the selected tags?"),onConfirm:e=>B(e,a,t)},(e=>{const t=[];return H&&t.push({key:"delete",name:(0,r.t)("Delete"),type:"danger",onSelect:e}),(0,w.tZ)(s.Fragment,null,(0,w.tZ)(m.Z,{bulkActions:t,bulkSelectEnabled:k,cardSortSelectOptions:L,className:"dashboard-list-view",columns:F,count:y,data:S.filter((e=>{var t;return!n()(t=e.name).call(t,":")})),disableBulkSelect:D,fetchData:A,filters:N,initialSort:M,loading:h,pageSize:25,showThumbnails:I?I.thumbnails:(0,o.cr)(o.TT.THUMBNAILS),renderCard:P,defaultViewMode:(0,o.cr)(o.TT.LISTVIEWS_DEFAULT_CARD_VIEW)?"card":"table"}))})))}))}}]);
//# sourceMappingURL=cdf79ec133c460ebf576.chunk.js.map