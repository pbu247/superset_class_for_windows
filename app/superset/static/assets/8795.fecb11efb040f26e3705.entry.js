"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8795],{48805:(e,t,r)=>{r.d(t,{Z:()=>o});class o{constructor(e){this.name=void 0,this.canBeAnnotationTypes=void 0,this.canBeAnnotationTypesLookup=void 0,this.credits=void 0,this.description=void 0,this.show=void 0,this.supportedAnnotationTypes=void 0,this.thumbnail=void 0,this.useLegacyApi=void 0,this.behaviors=void 0,this.datasourceCount=void 0,this.enableNoResults=void 0,this.exampleGallery=void 0,this.tags=void 0,this.category=void 0,this.deprecated=void 0,this.label=void 0,this.labelExplanation=void 0,this.queryObjectCount=void 0,this.parseMethod=void 0;const{name:t,canBeAnnotationTypes:r=[],credits:o=[],description:i="",show:n=!0,supportedAnnotationTypes:s=[],thumbnail:a,useLegacyApi:d=!1,behaviors:l=[],datasourceCount:u=1,enableNoResults:c=!0,exampleGallery:h=[],tags:p=[],category:y=null,deprecated:m=!1,label:v=null,labelExplanation:g=null,queryObjectCount:f=1,parseMethod:b="json-bigint"}=e;this.name=t,this.credits=o,this.description=i,this.show=n,this.canBeAnnotationTypes=r,this.canBeAnnotationTypesLookup=r.reduce(((e,t)=>{const r=e;return r[t]=!0,r}),{}),this.supportedAnnotationTypes=s,this.thumbnail=a,this.useLegacyApi=d,this.behaviors=l,this.datasourceCount=u,this.enableNoResults=c,this.exampleGallery=h,this.tags=p,this.category=y,this.deprecated=m,this.label=v,this.labelExplanation=g,this.queryObjectCount=f,this.parseMethod=b}canBeAnnotationType(e){return this.canBeAnnotationTypesLookup[e]||!1}clone(){return new o(this)}}},84912:(e,t,r)=>{r.d(t,{Z:()=>p});var o=r(91189),i=r(49714),n=r(11064),s=r(19427),a=r(54085),d=r(37687),l=r(74464);function u(e){return e}const c={};function h(e){return()=>{const t=e();return t instanceof Promise?t.then((e=>"default"in e&&e.default||e)):t}}class p extends o.Z{constructor(e){super(),this.controlPanel=void 0,this.metadata=void 0,this.loadBuildQuery=void 0,this.loadTransformProps=void 0,this.loadChart=void 0;const{metadata:t,buildQuery:r,loadBuildQuery:o,transformProps:i=u,loadTransformProps:n,Chart:s,loadChart:a,controlPanel:d=c}=e;if(this.controlPanel=d,this.metadata=t,this.loadBuildQuery=o&&h(o)||r&&h((()=>r))||void 0,this.loadTransformProps=h(null!=n?n:()=>i),a)this.loadChart=h(a);else{if(!s)throw new Error("Chart or loadChart is required");this.loadChart=()=>s}}register(){const e=this.config.key||(0,i.Z)("config.key");return(0,n.Z)().registerValue(e,this.metadata),(0,a.Z)().registerLoader(e,this.loadChart),(0,d.Z)().registerValue(e,this.controlPanel),(0,l.Z)().registerLoader(e,this.loadTransformProps),this.loadBuildQuery&&(0,s.Z)().registerLoader(e,this.loadBuildQuery),this}unregister(){const e=this.config.key||(0,i.Z)("config.key");return(0,n.Z)().remove(e),(0,a.Z)().remove(e),(0,d.Z)().remove(e),(0,l.Z)().remove(e),(0,s.Z)().remove(e),this}configure(e,t){return super.configure(e,t),this}}},54085:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(90537),i=r(1875);class n extends o.Z{constructor(){super({name:"ChartComponent",overwritePolicy:o.r.WARN})}}const s=(0,i.Z)(n)},74464:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(90537),i=r(1875);class n extends o.Z{constructor(){super({name:"ChartTransformProps",overwritePolicy:o.r.WARN})}}const s=(0,i.Z)(n)},1819:(e,t,r)=>{r.d(t,{So:()=>d,kZ:()=>l,zn:()=>a});var o=r(55786),i=r(62446),n=r(37208),s=r(67190);const a=(e,t,r,a,d)=>(0,o.Z)(e).reduce(((e,o)=>{if((0,i.AG)(o)){const i=null!=a?a:r[o],l=null!=d&&d.symbol?d:t[o];return l?{...e,[o]:new n.Z({d3Format:i,currency:l})}:{...e,[o]:(0,s.JB)(i)}}return e}),{}),d=(e,t,r)=>{const n=(0,o.Z)(t);return 1===n.length&&(0,i.AG)(n[0])?e[n[0]]:r?e[r]:void 0},l=(e,t,r,o,i,l)=>d(a(e,t,r,o,i),e,l)||(null!=i&&i.symbol?new n.Z({currency:i,d3Format:o}):(0,s.JB)(o))},60524:(e,t,r)=>{r.d(t,{$:()=>d,f:()=>a});var o=r(22087),i=r.n(o);const n=[[new RegExp(/==/g),"Eq"],[new RegExp(/>=/g),"Gte"],[new RegExp(/<=/g),"Lte"],[new RegExp(/>/g),"Gt"],[new RegExp(/</g),"Lt"]],s=[{type:3,token:"x",show:"x",value:"x"},{type:2,token:"&",show:"&",value:(e,t)=>e&t},{type:2,token:"|",show:"|",value:(e,t)=>e|t},{type:2,token:"and",show:"and",value:(e,t)=>e&&t},{type:2,token:"xor",show:"xor",value:(e,t)=>e^t},{type:2,token:"or",show:"or",value:(e,t)=>Number(e||t)},{type:2,token:"Eq",show:"Eq",value:(e,t)=>Number(e===t)},{type:2,token:"Lt",show:"Lt",value:(e,t)=>Number(e<t)},{type:2,token:"Lte",show:"Lte",value:(e,t)=>Number(e<=t)},{type:2,token:"Gt",show:"Gt",value:(e,t)=>Number(e>t)},{type:2,token:"Gte",show:"Gte",value:(e,t)=>Number(e>=t)}];function a(e,t){var r;let o=e;n.forEach((e=>{let[t,r]=e;o=o.replace(t,r)}));const a=String(o).split("=");return o=null!=(r=a[1])?r:a[0],Number(i().eval(o,s,{x:t}))}function d(e){try{a(e,0)}catch(e){return!1}return!0}},91189:(e,t,r)=>{r.d(t,{Z:()=>o});class o{constructor(){this.config=void 0,this.config={}}resetConfig(){return this.config={},this}configure(e,t){return void 0===t&&(t=!1),this.config=t?e:{...this.config,...e},this}register(){return this}unregister(){return this}}},46449:(e,t,r)=>{r.d(t,{Z:()=>o});class o{constructor(e){void 0===e&&(e={}),this.name=void 0,this.description=void 0,this.presets=void 0,this.plugins=void 0;const{name:t="",description:r="",presets:o=[],plugins:i=[]}=e;this.name=t,this.description=r,this.presets=o,this.plugins=i}register(){return this.presets.forEach((e=>{e.register()})),this.plugins.forEach((e=>{e.register()})),this}}},5031:(e,t,r)=>{function o(e){const{time_grain_sqla:t,extra_filters:r,extra_form_data:o}=e;if(null!=o&&o.time_grain_sqla)return o.time_grain_sqla;const i=(r||[]).filter((e=>"__time_grain"===e.col));return i.length?i[0].val:t}r.d(t,{Z:()=>o})},82028:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(41609),i=r.n(o),n=r(51584),s=r.n(n);function a(e){if(Array.isArray(e.orderby)&&e.orderby.length>0){const t=e.orderby[0];if(Array.isArray(t)&&2===t.length&&!i()(t[0])&&s()(t[1]))return e}const t={...e};delete t.series_limit_metric,delete t.legacy_order_by,delete t.order_desc,delete t.orderby;const r=!e.order_desc;return void 0===e.series_limit_metric||null===e.series_limit_metric||i()(e.series_limit_metric)?void 0===e.legacy_order_by||null===e.legacy_order_by||i()(e.legacy_order_by)?Array.isArray(e.metrics)&&e.metrics.length>0?{...t,orderby:[[e.metrics[0],r]]}:t:{...t,orderby:[[e.legacy_order_by,r]]}:{...t,orderby:[[e.series_limit_metric,r]]}}},34804:(e,t,r)=>{var o,i,n,s;function a(e){return e.annotationType===o.Formula}function d(e){return e.annotationType===o.Event}function l(e){return e.annotationType===o.Interval}function u(e){return e.annotationType===o.Timeseries}function c(e){return e.sourceType===i.Table}function h(e){return Array.isArray(e)}function p(e){return Array.isArray(null==e?void 0:e.records)}r.d(t,{$c:()=>p,JJ:()=>o,QW:()=>s,Ry:()=>l,TJ:()=>n,b4:()=>h,mn:()=>c,nl:()=>u,pD:()=>d,u$:()=>i,x5:()=>a}),function(e){e.Event="EVENT",e.Formula="FORMULA",e.Interval="INTERVAL",e.Timeseries="TIME_SERIES"}(o||(o={})),function(e){e.Line="line",e.Native="NATIVE",e.Table="table",e.Undefined=""}(i||(i={})),function(e){e.High="opacityHigh",e.Low="opacityLow",e.Medium="opacityMedium",e.Undefined=""}(n||(n={})),function(e){e.Dashed="dashed",e.Dotted="dotted",e.Solid="solid",e.LongDashed="longDashed"}(s||(s={}))},62720:(e,t,r)=>{r.d(t,{Z:()=>o});const o=(0,r(25778).Z)({id:"smart_date_detailed",label:"Detailed adaptive formatter",formats:{millisecond:"%Y-%m-%d %H:%M:%S.%L",second:"%Y-%m-%d %H:%M:%S",minute:"%Y-%m-%d %H:%M",hour:"%Y-%m-%d %H:%M",day:"%Y-%m-%d",week:"%Y-%m-%d",month:"%Y-%m-%d",year:"%Y"}})},88484:(e,t,r)=>{r.d(t,{Z:()=>i,t:()=>o});const o=/(\d{4}-\d{2}-\d{2})[\sT](\d{2}:\d{2}:\d{2}\.?\d*).*/;function i(e){const t=e.match(o);return t?`${t[1]}T${t[2]}Z`:e}}}]);
//# sourceMappingURL=8795.fecb11efb040f26e3705.entry.js.map