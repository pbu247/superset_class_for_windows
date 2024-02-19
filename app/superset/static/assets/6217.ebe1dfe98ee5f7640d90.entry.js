"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6217],{82607:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(5872),s=a.n(n),r=(a(67294),a(51995)),l=a(62529),o=a(11965);const i=(0,r.iK)((e=>{let{textColor:t,color:a,text:n,...r}=e;return(0,o.tZ)(l.Z,s()({text:n,color:n?a:void 0},r))}))`
  & > sup {
    padding: 0 ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    background: ${e=>{let{theme:t,color:a}=e;return a||t.colors.primary.base}};
    color: ${e=>{let{theme:t,textColor:a}=e;return a||t.colors.grayscale.light5}};
  }
`},73995:(e,t,a)=>{a.d(t,{Z:()=>Z});var n=a(67294),s=a(51995),r=a(31069),l=a(55867),o=a(15926),i=a.n(o),d=a(4715),c=a(37921),u=a(49238),m=a(40277),h=a(14114),p=a(67417),b=a(11965);const f=s.iK.div`
  ${e=>{let{theme:t}=e;return`\n    .refresh {\n      display: flex;\n      align-items: center;\n      width: 30px;\n      margin-left: ${t.gridUnit}px;\n      margin-top: ${5*t.gridUnit}px;\n    }\n\n    .section {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n    }\n\n    .select {\n      width: calc(100% - 30px - ${t.gridUnit}px);\n      flex: 1;\n    }\n\n    & > div {\n      margin-bottom: ${4*t.gridUnit}px;\n    }\n  `}}
`,v=s.iK.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: ${e=>{let{theme:t}=e;return t.gridUnit-2}}px;

  .backend {
    overflow: visible;
  }

  .name {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,g=e=>{let{backend:t,databaseName:a}=e;return(0,b.tZ)(v,null,(0,b.tZ)(c.Z,{className:"backend"},t),(0,b.tZ)("span",{className:"name",title:a},a))},y=[];function Z(e){let{db:t,formMode:a=!1,emptyState:s,getDbList:o,handleError:c,isDatabaseSelectEnabled:v=!0,onDbChange:Z,onEmptyResults:S,onSchemaChange:x,readOnly:C=!1,schema:$,sqlLabMode:w=!1}=e;const[_,E]=(0,n.useState)(),[I,R]=(0,n.useState)($?{label:$,value:$,title:$}:void 0),{addSuccessToast:k}=(0,h.e1)(),q=(0,n.useMemo)((()=>async(e,t,n)=>{const s=`/api/v1/database/?q=${i().encode({order_columns:"database_name",order_direction:"asc",page:t,page_size:n,...a||!w?{filters:[{col:"database_name",opr:"ct",value:e}]}:{filters:[{col:"database_name",opr:"ct",value:e},{col:"expose_in_sqllab",opr:"eq",value:!0}]}})}`;return r.Z.get({endpoint:s}).then((t=>{let{json:a}=t;const{result:n}=a;o&&o(n),0===n.length&&S&&S(e);const s=n.map((e=>({label:(0,b.tZ)(g,{backend:e.backend,databaseName:e.database_name}),value:e.id,id:e.id,database_name:e.database_name,backend:e.backend})));return{data:s,totalCount:s.length}}))}),[a,o,w]);function L(e){R(e),x&&x(null==e?void 0:e.value)}(0,n.useEffect)((()=>{E((e=>(null==e?void 0:e.id)!==(null==t?void 0:t.id)?t?{label:(0,b.tZ)(g,{backend:t.backend,databaseName:t.database_name}),value:t.id,...t}:void 0:e))}),[t]);const{data:T,isFetching:N,refetch:M}=(0,p.Xx)({dbId:null==_?void 0:_.value,onSuccess:(e,t)=>{1===e.length?L(e[0]):e.find((e=>$===e.value))||L(void 0),t&&k("List refreshed")},onError:()=>c((0,l.t)("There was an error loading the schemas"))}),U=T||y;function z(e,t){return(0,b.tZ)("div",{className:"section"},(0,b.tZ)("span",{className:"select"},e),(0,b.tZ)("span",{className:"refresh"},t))}return(0,b.tZ)(f,null,z((0,b.tZ)(d.qb,{ariaLabel:(0,l.t)("Select database or type to search databases"),optionFilterProps:["database_name","value"],header:(0,b.tZ)(u.lX,null,(0,l.t)("Database")),lazyLoading:!1,notFoundContent:s,onChange:function(e,t){E(t),R(void 0),Z&&Z(t),x&&x(void 0)},value:_,placeholder:(0,l.t)("Select database or type to search databases"),disabled:!v||C,options:q}),null),function(){const e=!C&&(0,b.tZ)(m.Z,{onClick:()=>M(),tooltipContent:(0,l.t)("Force refresh schema list")});return z((0,b.tZ)(d.Ph,{ariaLabel:(0,l.t)("Select schema or type to search schemas"),disabled:!_||C,header:(0,b.tZ)(u.lX,null,(0,l.t)("Schema")),labelInValue:!0,loading:N,name:"select-schema",notFoundContent:(0,l.t)("No compatible schema found"),placeholder:(0,l.t)("Select schema or type to search schemas"),onChange:e=>L(e),options:U,showSearch:!0,value:I}),e)}())}},40277:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),s=a(58593),r=a(70163),l=a(11965);const o=e=>{let{onClick:t,tooltipContent:a}=e;const o=(0,n.forwardRef)(((e,t)=>(0,l.tZ)(r.Z.Refresh,e)));return(0,l.tZ)(s.u,{title:a},(0,l.tZ)(o,{role:"button",onClick:t,css:e=>({cursor:"pointer",color:e.colors.grayscale.base,"&:hover":{color:e.colors.primary.base}})}))}},17982:(e,t,a)=>{a.d(t,{PH:()=>w,ZP:()=>_,ez:()=>C});var n=a(5872),s=a.n(n),r=a(78580),l=a.n(r),o=a(67294),i=a(51995),d=a(55867),c=a(4715),u=a(49238),m=a(70163),h=a(73995),p=a(40277),b=a(79789),f=a(86057),v=a(14114),g=a(67417),y=a(98286),Z=a(11965);const S=i.iK.div`
  ${e=>{let{theme:t}=e;return`\n    .refresh {\n      display: flex;\n      align-items: center;\n      width: 30px;\n      margin-left: ${t.gridUnit}px;\n      margin-top: ${5*t.gridUnit}px;\n    }\n\n    .section {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n    }\n\n    .divider {\n      border-bottom: 1px solid ${t.colors.secondary.light5};\n      margin: 15px 0;\n    }\n\n    .table-length {\n      color: ${t.colors.grayscale.light1};\n    }\n\n    .select {\n      flex: 1;\n      max-width: calc(100% - ${t.gridUnit+30}px)\n    }\n  `}}
`,x=i.iK.span`
  align-items: center;
  display: flex;
  white-space: nowrap;

  svg,
  small {
    margin-right: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
`,C=e=>{let{table:t}=e;const{value:a,type:n,extra:s}=t;return(0,Z.tZ)(x,{title:a},"view"===n?(0,Z.tZ)(m.Z.Eye,{iconSize:"m"}):(0,Z.tZ)(m.Z.Table,{iconSize:"m"}),(null==s?void 0:s.certification)&&(0,Z.tZ)(b.Z,{certifiedBy:s.certification.certified_by,details:s.certification.details,size:"l"}),(null==s?void 0:s.warning_markdown)&&(0,Z.tZ)(f.Z,{warningMarkdown:s.warning_markdown,size:"l",marginRight:4}),a)},$=e=>{let{database:t,emptyState:a,formMode:n=!1,getDbList:s,handleError:r,isDatabaseSelectEnabled:i=!0,onDbChange:m,onSchemaChange:b,readOnly:f=!1,onEmptyResults:x,schema:$,sqlLabMode:w=!0,tableSelectMode:_="single",tableValue:E,onTableSelectChange:I,customTableOptionLabelRenderer:R}=e;const{addSuccessToast:k}=(0,v.e1)(),[q,L]=(0,o.useState)($),[T,N]=(0,o.useState)(void 0),{data:M,isFetching:U,refetch:z}=(0,g.zA)({dbId:null==t?void 0:t.id,schema:q,onSuccess:(e,t)=>{t&&k((0,d.t)("List updated"))},onError:e=>{(0,y.O$)(e).then((e=>{r((0,y.d7)((0,d.t)("There was an error loading the tables"),e))}))}}),Q=(0,o.useMemo)((()=>M?M.options.map((e=>({value:e.value,label:(0,Z.tZ)(C,{table:e}),text:e.value,...R&&{customLabel:R(e)}}))):[]),[M,R]);(0,o.useEffect)((()=>{void 0===t&&(L(void 0),N(void 0))}),[t,_]),(0,o.useEffect)((()=>{N("single"===_?Q.find((e=>e.value===E)):(null==Q?void 0:Q.filter((e=>e&&(null==E?void 0:l()(E).call(E,e.value)))))||[])}),[Q,E,_]);const j=e=>{q?null==I||I(Array.isArray(e)?e.map((e=>null==e?void 0:e.value)):null==e?void 0:e.value,q):N(e)},A=(0,o.useMemo)((()=>(e,t)=>{var a;const n=e.trim().toLowerCase(),{value:s}=t;return l()(a=s.toLowerCase()).call(a,n)}),[]);return(0,Z.tZ)(S,null,(0,Z.tZ)(h.Z,{db:t,emptyState:a,formMode:n,getDbList:s,handleError:r,onDbChange:f?void 0:e=>{m&&m(e)},onEmptyResults:x,onSchemaChange:f?void 0:e=>{L(e),b&&b(e),j("single"===_?void 0:[])},schema:q,sqlLabMode:w,isDatabaseSelectEnabled:i&&!f,readOnly:f}),w&&!n&&(0,Z.tZ)("div",{className:"divider"}),function(){const e=q&&!n&&f||!q,t=w?(0,Z.tZ)(u.lX,null,(0,d.t)("See table schema")):(0,Z.tZ)(u.lX,null,(0,d.t)("Table"));return a=(0,Z.tZ)(c.Ph,{ariaLabel:(0,d.t)("Select table or type to search tables"),disabled:e,filterOption:A,header:t,labelInValue:!0,loading:U,name:"select-table",onChange:e=>j(e),options:Q,placeholder:(0,d.t)("Select table or type to search tables"),showSearch:!0,mode:_,value:T,allowClear:"multiple"===_,allowSelectAll:!1}),s=!f&&(0,Z.tZ)(p.Z,{onClick:()=>z(),tooltipContent:(0,d.t)("Force refresh table list")}),(0,Z.tZ)("div",{className:"section"},(0,Z.tZ)("span",{className:"select"},a),(0,Z.tZ)("span",{className:"refresh"},s));var a,s}())},w=e=>(0,Z.tZ)($,s()({tableSelectMode:"multiple"},e)),_=$},67417:(e,t,a)=>{a.d(t,{Kt:()=>h.Kt,CN:()=>n.CN,QD:()=>m.QD,hb:()=>i,QU:()=>d,Es:()=>c,JL:()=>u,L8:()=>b,Xx:()=>h.Xx,SJ:()=>m.SJ,uY:()=>m.uY,zA:()=>m.zA});var n=a(45673),s=a(42190),r=a(15926);function l(e){let{owners:t}=e;return t?t.map((e=>`${e.first_name} ${e.last_name}`)):null}const o=a.n(r)().encode({columns:["owners.first_name","owners.last_name"],keys:["none"]});function i(e){return(0,s.l6)((0,s.s_)(`/api/v1/chart/${e}?q=${o}`),l)}const d=e=>(0,s.l6)((0,s.s_)(`/api/v1/dashboard/${e}`),(e=>({...e,metadata:e.json_metadata&&JSON.parse(e.json_metadata)||{},position_data:e.position_json&&JSON.parse(e.position_json)}))),c=e=>(0,s.s_)(`/api/v1/dashboard/${e}/charts`),u=e=>(0,s.s_)(`/api/v1/dashboard/${e}/datasets`);var m=a(23936),h=a(69279);const p=a(10362).h.injectEndpoints({endpoints:e=>({queryValidations:e.query({providesTags:["QueryValidations"],query:e=>{let{dbId:t,schema:a,sql:n,templateParams:s}=e,r=s;try{r=JSON.parse(s||"")}catch(e){r=void 0}const l={schema:a,sql:n,...r&&{template_params:r}};return{method:"post",endpoint:`/api/v1/database/${t}/validate_sql/`,headers:{"Content-Type":"application/json"},body:JSON.stringify(l),transformResponse:e=>{let{json:t}=e;return t.result}}}})})}),{useQueryValidationsQuery:b}=p},69279:(e,t,a)=>{a.d(t,{Kt:()=>i,Xx:()=>u});var n=a(67294),s=a(38325);const r=a(10362).h.injectEndpoints({endpoints:e=>({schemas:e.query({providesTags:[{type:"Schemas",id:"LIST"}],query:e=>{let{dbId:t,forceRefresh:a}=e;return{endpoint:`/api/v1/database/${t}/schemas/`,urlParams:{force:a},transformResponse:e=>{let{json:t}=e;return t.result.map((e=>({value:e,label:e,title:e})))}}},serializeQueryArgs:e=>{let{queryArgs:{dbId:t}}=e;return{dbId:t}}})})}),{useLazySchemasQuery:l,useSchemasQuery:o,endpoints:i,util:d}=r,c=[];function u(e){const t=(0,n.useRef)(!1),{dbId:a,onSuccess:r,onError:i}=e||{},[d]=l(),u=o({dbId:a,forceRefresh:!1},{skip:!a}),m=(0,s.Z)(((e,t)=>{null==r||r(e,t)})),h=(0,s.Z)((()=>{null==i||i()})),p=(0,n.useCallback)((()=>{a&&d({dbId:a,forceRefresh:!0}).then((e=>{let{isSuccess:t,isError:a,data:n}=e;t&&m(n||c,!0),a&&h()}))}),[a,h,m,d]);return(0,n.useEffect)((()=>{if(t.current){const{requestId:e,isSuccess:t,isError:a,isFetching:n,data:s,originalArgs:r}=u;null!=r&&r.forceRefresh||!e||n||(t&&m(s||c,!1),a&&h())}else t.current=!0}),[u,m,h]),{...u,refetch:p}}},23936:(e,t,a)=>{a.d(t,{$K:()=>h,QD:()=>m,SJ:()=>u,uY:()=>c,zA:()=>p});var n=a(67294),s=a(38325),r=a(10362),l=a(69279);const o=r.h.injectEndpoints({endpoints:e=>({tables:e.query({providesTags:["Tables"],query:e=>{let{dbId:t,schema:a,forceRefresh:n}=e;return{endpoint:`/api/v1/database/${null!=t?t:"undefined"}/tables/`,urlParams:{force:n,schema_name:a?encodeURIComponent(a):""},transformResponse:e=>{let{json:t}=e;return{options:t.result,hasMore:t.count>t.result.length}}}},serializeQueryArgs:e=>{let{queryArgs:{dbId:t,schema:a}}=e;return{dbId:t,schema:a}}}),tableMetadata:e.query({query:e=>{let{dbId:t,schema:a,table:n}=e;return{endpoint:`/api/v1/database/${t}/table/${encodeURIComponent(n)}/${encodeURIComponent(a)}/`,transformResponse:e=>{let{json:t}=e;return t}}}}),tableExtendedMetadata:e.query({query:e=>{let{dbId:t,schema:a,table:n}=e;return{endpoint:`/api/v1/database/${t}/table_extra/${encodeURIComponent(n)}/${encodeURIComponent(a)}/`,transformResponse:e=>{let{json:t}=e;return t}}}})})}),{useLazyTablesQuery:i,useTablesQuery:d,useTableMetadataQuery:c,useTableExtendedMetadataQuery:u,endpoints:m,util:h}=o;function p(e){const t=(0,n.useRef)(!1),{data:a,isFetching:r}=(0,l.Xx)({dbId:e.dbId}),o=(0,n.useMemo)((()=>new Set(null==a?void 0:a.map((e=>{let{value:t}=e;return t})))),[a]),{dbId:c,schema:u,onSuccess:m,onError:h}=e||{},p=Boolean(c&&u&&!r&&o.has(u)),b=d({dbId:c,schema:u,forceRefresh:!1},{skip:!p}),[f]=i(),v=(0,s.Z)(((e,t)=>{null==m||m(e,t)})),g=(0,s.Z)((e=>{null==h||h(e)})),y=(0,n.useCallback)((()=>{p&&f({dbId:c,schema:u,forceRefresh:!0}).then((e=>{let{isSuccess:t,isError:a,data:n,error:s}=e;t&&n&&v(n,!0),a&&g(s)}))}),[c,u,p,v,g,f]);return(0,n.useEffect)((()=>{if(t.current){const{requestId:e,isSuccess:t,isError:a,isFetching:n,data:s,error:r,originalArgs:l}=b;null!=l&&l.forceRefresh||!e||n||(t&&s&&v(s,!1),a&&g(r))}else t.current=!0}),[b,v,g]),{...b,refetch:y}}}}]);
//# sourceMappingURL=6217.ebe1dfe98ee5f7640d90.entry.js.map