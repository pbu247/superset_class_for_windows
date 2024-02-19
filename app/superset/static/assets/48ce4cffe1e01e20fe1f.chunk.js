"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3208],{19936:(e,t,n)=>{n.d(t,{h:()=>r});var a=n(38550),i=n(70050);function r(e,t){const n=function(e,t){const{data:n=[],cellSize:r}=e,{attributes:s,viewport:o,projectPoints:u,numInstances:g}=t,f=s.positions.value,{size:l}=s.positions.getAccessor(),c=t.boundingBox||function(e,t){const n=e.value,{size:a}=e.getAccessor();let i,r,s=1/0,o=-1/0,u=1/0,g=-1/0;for(let e=0;e<t;e++)r=n[e*a],i=n[e*a+1],Number.isFinite(r)&&Number.isFinite(i)&&(s=i<s?i:s,o=i>o?i:o,u=r<u?r:u,g=r>g?r:g);return{xMin:u,xMax:g,yMin:s,yMax:o}}(s.positions,g),d=t.posOffset||[180,90],x=t.gridOffset||(0,i.wc)(c,r);if(x.xOffset<=0||x.yOffset<=0)return{gridHash:{},gridOffset:x};const{width:p,height:m}=o,h=Math.ceil(p/x.xOffset),_=Math.ceil(m/x.yOffset),v={},{iterable:M,objectInfo:b}=(0,a.jB)(n),A=new Array(3);for(const e of M){b.index++,A[0]=f[b.index*l],A[1]=f[b.index*l+1],A[2]=l>=3?f[b.index*l+2]:0;const[t,n]=u?o.project(A):A;if(Number.isFinite(t)&&Number.isFinite(n)){const a=Math.floor((n+d[1])/x.yOffset),i=Math.floor((t+d[0])/x.xOffset);if(!u||i>=0&&i<h&&a>=0&&a<_){const t="".concat(a,"-").concat(i);v[t]=v[t]||{count:0,points:[],lonIdx:i,latIdx:a},v[t].count+=1,v[t].points.push({source:e,index:b.index})}}}return{gridHash:v,gridOffset:x,offsets:[-1*d[0],-1*d[1]]}}(e,t),r=function({gridHash:e,gridOffset:t,offsets:n}){const a=new Array(Object.keys(e).length);let i=0;for(const r in e){const s=r.split("-"),o=parseInt(s[0],10),u=parseInt(s[1],10),g=i++;a[g]={index:g,position:[n[0]+t.xOffset*u,n[1]+t.yOffset*o],...e[r]}}return a}(n);return{gridHash:n.gridHash,gridOffset:n.gridOffset,data:r}}},13208:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(63295),i=n(78651),r=n(53478),s=n(80744),o=n(98014),u=n(19936);class g extends a.Z{initializeState({dimensions:e}){const{gl:t}=this.context;super.initializeState(e),this.setState({layerData:{},gpuGridAggregator:new i.Z(t,{id:"".concat(this.id,"-gpu-aggregator")}),cpuGridAggregator:u.h})}updateState(e){super.updateState(e),this.updateAggregationState(e);const{aggregationDataDirty:t,aggregationWeightsDirty:n,gpuAggregation:a}=this.state;if(this.getNumInstances()<=0)return;let i=!1;(t||a&&n)&&(this._updateAggregation(e),i=!0),a||!t&&!n||(this._updateWeightBins(),this._uploadAggregationResults(),i=!0),this.setState({aggregationDirty:i})}finalizeState(){var e;const{count:t}=this.state.weights;t&&t.aggregationBuffer&&t.aggregationBuffer.delete(),null===(e=this.state.gpuGridAggregator)||void 0===e||e.delete(),super.finalizeState()}updateShaders(e){this.state.gpuAggregation&&this.state.gpuGridAggregator.updateShaders(e)}updateAggregationState(e){s.Z.assert(!1)}allocateResources(e,t){if(this.state.numRow!==e||this.state.numCol!==t){const n=t*e*4*4,a=this.context.gl,{weights:i}=this.state;for(const e in i){const t=i[e];t.aggregationBuffer&&t.aggregationBuffer.delete(),t.aggregationBuffer=new r.Z(a,{byteLength:n,accessor:{size:4,type:5126,divisor:1}})}}}updateResults({aggregationData:e,maxMinData:t,maxData:n,minData:a}){const{count:i}=this.state.weights;i&&(i.aggregationData=e,i.maxMinData=t,i.maxData=n,i.minData=a)}_updateAggregation(e){const{cpuGridAggregator:t,gpuGridAggregator:n,gridOffset:a,posOffset:i,translation:r=[0,0],scaling:s=[0,0,0],boundingBox:o,projectPoints:u,gpuAggregation:g,numCol:f,numRow:l}=this.state,{props:c}=e,{viewport:d}=this.context,x=this.getAttributes(),p=this.getNumInstances();if(g){const{weights:e}=this.state;n.run({weights:e,cellSize:[a.xOffset,a.yOffset],numCol:f,numRow:l,translation:r,scaling:s,vertexCount:p,projectPoints:u,attributes:x,moduleSettings:this.getModuleSettings()})}else{const e=t(c,{gridOffset:a,projectPoints:u,attributes:x,viewport:d,posOffset:i,boundingBox:o});this.setState({layerData:e})}}_updateWeightBins(){const{getValue:e}=this.state,t=new o.Z(this.state.layerData.data||[],{getValue:e});this.setState({sortedBins:t})}_uploadAggregationResults(){const{numCol:e,numRow:t}=this.state,{data:n}=this.state.layerData,{aggregatedBins:a,minValue:i,maxValue:r,totalCount:s}=this.state.sortedBins,o=new Float32Array(e*t*4).fill(0);for(const t of a){const{lonIdx:a,latIdx:i}=n[t.i],{value:r,counts:s}=t,u=4*(a+i*e);o[u]=r,o[u+4-1]=s}const u=new Float32Array([r,0,0,i]),g=new Float32Array([r,0,0,s]),f=new Float32Array([i,0,0,s]);this.updateResults({aggregationData:o,maxMinData:u,maxData:g,minData:f})}}g.layerName="GridAggregationLayer"},78651:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(6948),i=n(44211),r=n(39450),s=n(1953),o=n(1113),u=n(63346),g=n(41083),f=n(80744),l=n(27870),c=n(93844),d=n(15614);const x={projectPoints:!1,viewport:null,createBufferObjects:!0,moduleSettings:{}},p=3402823466e29,m=[32775,32774],h=[32776,32774],_=[32776,32775],v={[d.KM.SUM]:32774,[d.KM.MEAN]:32774,[d.KM.MIN]:m,[d.KM.MAX]:h},M={size:1,operation:d.KM.SUM,needMin:!1,needMax:!1,combineMaxMin:!1};var b=n(92637);const A=["aggregationBuffer","maxMinBuffer","minBuffer","maxBuffer"],y={maxData:"maxBuffer",minData:"minBuffer",maxMinData:"maxMinBuffer"},O=[a.h.WEBGL2,a.h.COLOR_ATTACHMENT_RGBA32F,a.h.BLEND_EQUATION_MINMAX,a.h.FLOAT_BLEND,a.h.TEXTURE_FLOAT];class w{static getAggregationData({aggregationData:e,maxData:t,minData:n,maxMinData:a,pixelIndex:i}){const r=4*i,s={};return e&&(s.cellCount=e[r+3],s.cellWeight=e[r]),a?(s.maxCellWieght=a[0],s.minCellWeight=a[3]):(t&&(s.maxCellWieght=t[0],s.totalCount=t[3]),n&&(s.minCellWeight=n[0],s.totalCount=t[3])),s}static getCellData({countsData:e,size:t=1}){const n=e.length/4,a=new Float32Array(n*t),i=new Uint32Array(n);for(let r=0;r<n;r++){for(let n=0;n<t;n++)a[r*t+n]=e[4*r+n];i[r]=e[4*r+3]}return{cellCounts:i,cellWeights:a}}static isSupported(e){return(0,i.ag)(e,O)}constructor(e,t={}){this.id=t.id||"gpu-grid-aggregator",this.gl=e,this.state={weightAttributes:{},textures:{},meanTextures:{},buffers:{},framebuffers:{},maxMinFramebuffers:{},minFramebuffers:{},maxFramebuffers:{},equations:{},resources:{},results:{}},this._hasGPUSupport=(0,r.D0)(e)&&(0,i.ag)(this.gl,a.h.BLEND_EQUATION_MINMAX,a.h.COLOR_ATTACHMENT_RGBA32F,a.h.TEXTURE_FLOAT),this._hasGPUSupport&&this._setupModels()}delete(){const{gridAggregationModel:e,allAggregationModel:t,meanTransform:n}=this,{textures:a,framebuffers:i,maxMinFramebuffers:r,minFramebuffers:s,maxFramebuffers:o,meanTextures:u,resources:g}=this.state;null==e||e.delete(),null==t||t.delete(),null==n||n.delete(),function(e){(e=Array.isArray(e)?e:[e]).forEach((e=>{for(const t in e)e[t].delete()}))}([i,a,r,s,o,u,g])}run(e={}){this.setState({results:{}});const t=this._normalizeAggregationParams(e);return this._hasGPUSupport||f.Z.log(1,"GPUGridAggregator: not supported")(),this._runAggregation(t)}getData(e){const t={},n=this.state.results;n[e].aggregationData||(n[e].aggregationData=n[e].aggregationBuffer.getData()),t.aggregationData=n[e].aggregationData;for(const a in y){const i=y[a];(n[e][a]||n[e][i])&&(n[e][a]=n[e][a]||n[e][i].getData(),t[a]=n[e][a])}return t}updateShaders(e={}){this.setState({shaderOptions:e,modelDirty:!0})}_normalizeAggregationParams(e){const t={...x,...e},{weights:n}=t;return n&&(t.weights=function(e){const t={};for(const n in e)t[n]={...M,...e[n]};return t}(n)),t}setState(e){Object.assign(this.state,e)}_getAggregateData(e){const t={},{textures:n,framebuffers:a,maxMinFramebuffers:i,minFramebuffers:r,maxFramebuffers:o,resources:u}=this.state,{weights:g}=e;for(const e in g){t[e]={};const{needMin:f,needMax:l,combineMaxMin:c}=g[e];t[e].aggregationTexture=n[e],t[e].aggregationBuffer=(0,s.Jb)(a[e],{target:g[e].aggregationBuffer,sourceType:5126}),f&&l&&c?(t[e].maxMinBuffer=(0,s.Jb)(i[e],{target:g[e].maxMinBuffer,sourceType:5126}),t[e].maxMinTexture=u["".concat(e,"-maxMinTexture")]):(f&&(t[e].minBuffer=(0,s.Jb)(r[e],{target:g[e].minBuffer,sourceType:5126}),t[e].minTexture=u["".concat(e,"-minTexture")]),l&&(t[e].maxBuffer=(0,s.Jb)(o[e],{target:g[e].maxBuffer,sourceType:5126}),t[e].maxTexture=u["".concat(e,"-maxTexture")]))}return this._trackGPUResultBuffers(t,g),t}_renderAggregateData(e){const{cellSize:t,projectPoints:n,attributes:a,moduleSettings:i,numCol:r,numRow:s,weights:o,translation:u,scaling:g}=e,{maxMinFramebuffers:f,minFramebuffers:l,maxFramebuffers:c}=this.state,d=[r,s],x={blend:!0,depthTest:!1,blendFunc:[1,1]},v={cellSize:t,gridSize:d,projectPoints:n,translation:u,scaling:g};for(const e in o){const{needMin:t,needMax:n}=o[e],r=t&&n&&o[e].combineMaxMin;this._renderToWeightsTexture({id:e,parameters:x,moduleSettings:i,uniforms:v,gridSize:d,attributes:a,weights:o}),r?this._renderToMaxMinTexture({id:e,parameters:{...x,blendEquation:_},gridSize:d,minOrMaxFb:f[e],clearParams:{clearColor:[0,0,0,p]},combineMaxMin:r}):(t&&this._renderToMaxMinTexture({id:e,parameters:{...x,blendEquation:m},gridSize:d,minOrMaxFb:l[e],clearParams:{clearColor:[p,p,p,0]},combineMaxMin:r}),n&&this._renderToMaxMinTexture({id:e,parameters:{...x,blendEquation:h},gridSize:d,minOrMaxFb:c[e],clearParams:{clearColor:[0,0,0,0]},combineMaxMin:r}))}}_renderToMaxMinTexture(e){const{id:t,parameters:n,gridSize:a,minOrMaxFb:i,combineMaxMin:s,clearParams:o={}}=e,{framebuffers:u}=this.state,{gl:g,allAggregationModel:f}=this;(0,r.s8)(g,{...o,framebuffer:i,viewport:[0,0,a[0],a[1]]},(()=>{g.clear(16384),f.draw({parameters:n,uniforms:{uSampler:u[t].texture,gridSize:a,combineMaxMin:s}})}))}_renderToWeightsTexture(e){const{id:t,parameters:n,moduleSettings:a,uniforms:i,gridSize:s,weights:o}=e,{framebuffers:g,equations:f,weightAttributes:l}=this.state,{gl:c,gridAggregationModel:x}=this,{operation:m}=o[t],h=m===d.KM.MIN?[p,p,p,0]:[0,0,0,0];if((0,r.s8)(c,{framebuffer:g[t],viewport:[0,0,s[0],s[1]],clearColor:h},(()=>{c.clear(16384);const e={weights:l[t]};x.draw({parameters:{...n,blendEquation:f[t]},moduleSettings:a,uniforms:i,attributes:e})})),m===d.KM.MEAN){const{meanTextures:e,textures:n}=this.state,a={_sourceTextures:{aggregationValues:e[t]},_targetTexture:n[t],elementCount:n[t].width*n[t].height};this.meanTransform?this.meanTransform.update(a):this.meanTransform=function(e,t){return new u.Z(e,{vs:"#define SHADER_NAME gpu-aggregation-transform-mean-vs\nattribute vec4 aggregationValues;\nvarying vec4 meanValues;\n\nvoid main()\n{\n  bool isCellValid = bool(aggregationValues.w > 0.);\n  meanValues.xyz = isCellValid ? aggregationValues.xyz/aggregationValues.w : vec3(0, 0, 0);\n  meanValues.w = aggregationValues.w;\n  gl_PointSize = 1.0;\n}\n",_targetTextureVarying:"meanValues",...t})}(c,a),this.meanTransform.run({parameters:{blend:!1,depthTest:!1}}),g[t].attach({36064:n[t]})}}_runAggregation(e){this._updateModels(e),this._setupFramebuffers(e),this._renderAggregateData(e);const t=this._getAggregateData(e);return this.setState({results:t}),t}_setupFramebuffers(e){const{textures:t,framebuffers:n,maxMinFramebuffers:a,minFramebuffers:i,maxFramebuffers:r,meanTextures:s,equations:o}=this.state,{weights:u}=e,{numCol:g,numRow:f}=e,l={width:g,height:f};for(const e in u){const{needMin:c,needMax:x,combineMaxMin:p,operation:m}=u[e];t[e]=u[e].aggregationTexture||t[e]||(0,b.hq)(this.gl,{id:"".concat(e,"-texture"),width:g,height:f}),t[e].resize(l);let h=t[e];m===d.KM.MEAN&&(s[e]=s[e]||(0,b.hq)(this.gl,{id:"".concat(e,"-mean-texture"),width:g,height:f}),s[e].resize(l),h=s[e]),n[e]?n[e].attach({36064:h}):n[e]=(0,b._w)(this.gl,{id:"".concat(e,"-fb"),width:g,height:f,texture:h}),n[e].resize(l),o[e]=v[m]||v.SUM,(c||x)&&(c&&x&&p?a[e]||(h=u[e].maxMinTexture||this._getMinMaxTexture("".concat(e,"-maxMinTexture")),a[e]=(0,b._w)(this.gl,{id:"".concat(e,"-maxMinFb"),texture:h})):(c&&(i[e]||(h=u[e].minTexture||this._getMinMaxTexture("".concat(e,"-minTexture")),i[e]=(0,b._w)(this.gl,{id:"".concat(e,"-minFb"),texture:h}))),x&&(r[e]||(h=u[e].maxTexture||this._getMinMaxTexture("".concat(e,"-maxTexture")),r[e]=(0,b._w)(this.gl,{id:"".concat(e,"-maxFb"),texture:h})))))}}_getMinMaxTexture(e){const{resources:t}=this.state;return t[e]||(t[e]=(0,b.hq)(this.gl,{id:"resourceName"})),t[e]}_setupModels({numCol:e=0,numRow:t=0}={}){var n;const{gl:a}=this,{shaderOptions:i}=this.state;if(null===(n=this.gridAggregationModel)||void 0===n||n.delete(),this.gridAggregationModel=function(e,t){const n=(0,l.l)({vs:"#define SHADER_NAME gpu-aggregation-to-grid-vs\n\nattribute vec3 positions;\nattribute vec3 positions64Low;\nattribute vec3 weights;\nuniform vec2 cellSize;\nuniform vec2 gridSize;\nuniform bool projectPoints;\nuniform vec2 translation;\nuniform vec3 scaling;\n\nvarying vec3 vWeights;\n\nvec2 project_to_pixel(vec4 pos) {\n  vec4 result;\n  pos.xy = pos.xy/pos.w;\n  result = pos + vec4(translation, 0., 0.);\n  result.xy = scaling.z > 0. ? result.xy * scaling.xy : result.xy;\n  return result.xy;\n}\n\nvoid main(void) {\n\n  vWeights = weights;\n\n  vec4 windowPos = vec4(positions, 1.);\n  if (projectPoints) {\n    windowPos = project_position_to_clipspace(positions, positions64Low, vec3(0));\n  }\n\n  vec2 pos = project_to_pixel(windowPos);\n\n  vec2 pixelXY64[2];\n  pixelXY64[0] = vec2(pos.x, 0.);\n  pixelXY64[1] = vec2(pos.y, 0.);\n  vec2 gridXY64[2];\n  gridXY64[0] = div_fp64(pixelXY64[0], vec2(cellSize.x, 0));\n  gridXY64[1] = div_fp64(pixelXY64[1], vec2(cellSize.y, 0));\n  float x = floor(gridXY64[0].x);\n  float y = floor(gridXY64[1].x);\n  pos = vec2(x, y);\n  pos = (pos * (2., 2.) / (gridSize)) - (1., 1.);\n  vec2 offset = 1.0 / gridSize;\n  pos = pos + offset;\n\n  gl_Position = vec4(pos, 0.0, 1.0);\n  gl_PointSize = 1.0;\n}\n",fs:"#define SHADER_NAME gpu-aggregation-to-grid-fs\n\nprecision highp float;\n\nvarying vec3 vWeights;\n\nvoid main(void) {\n  gl_FragColor = vec4(vWeights, 1.0);\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n",modules:[g.n2,c.Z]},t);return new o.Z(e,{id:"Gird-Aggregation-Model",vertexCount:1,drawMode:0,...n})}(a,i),!this.allAggregationModel){const n=e*t;this.allAggregationModel=function(e,t){return new o.Z(e,{id:"All-Aggregation-Model",vs:"#version 300 es\n#define SHADER_NAME gpu-aggregation-all-vs-64\n\nin vec2 position;\nuniform ivec2 gridSize;\nout vec2 vTextureCoord;\n\nvoid main(void) {\n  vec2 pos = vec2(-1.0, -1.0);\n  vec2 offset = 1.0 / vec2(gridSize);\n  pos = pos + offset;\n\n  gl_Position = vec4(pos, 0.0, 1.0);\n\n  int yIndex = gl_InstanceID / gridSize[0];\n  int xIndex = gl_InstanceID - (yIndex * gridSize[0]);\n\n  vec2 yIndexFP64 = vec2(float(yIndex), 0.);\n  vec2 xIndexFP64 = vec2(float(xIndex), 0.);\n  vec2 gridSizeYFP64 = vec2(gridSize[1], 0.);\n  vec2 gridSizeXFP64 = vec2(gridSize[0], 0.);\n\n  vec2 texCoordXFP64 = div_fp64(yIndexFP64, gridSizeYFP64);\n  vec2 texCoordYFP64 = div_fp64(xIndexFP64, gridSizeXFP64);\n\n  vTextureCoord = vec2(texCoordYFP64.x, texCoordXFP64.x);\n  gl_PointSize = 1.0;\n}\n",fs:"#version 300 es\n#define SHADER_NAME gpu-aggregation-all-fs\n\nprecision highp float;\n\nin vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform bool combineMaxMin;\nout vec4 fragColor;\nvoid main(void) {\n  vec4 textureColor = texture(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n  if (textureColor.a == 0.) {\n    discard;\n  }\n  fragColor.rgb = textureColor.rgb;\n  fragColor.a = combineMaxMin ? textureColor.r : textureColor.a;\n}\n",modules:[g.n2],vertexCount:1,drawMode:0,isInstanced:!0,instanceCount:t,attributes:{position:[0,0]}})}(a,n)}}_setupWeightAttributes(e){const{weightAttributes:t}=this.state,{weights:n}=e;for(const a in n)t[a]=e.attributes[a]}_trackGPUResultBuffers(e,t){const{resources:n}=this.state;for(const a in e)if(e[a])for(const i of A)if(e[a][i]&&t[a][i]!==e[a][i]){const t="gpu-result-".concat(a,"-").concat(i);n[t]&&n[t].delete(),n[t]=e[a][i]}}_updateModels(e){const{vertexCount:t,attributes:n,numCol:a,numRow:i}=e,{modelDirty:r}=this.state;r&&(this._setupModels(e),this.setState({modelDirty:!1})),this._setupWeightAttributes(e),this.gridAggregationModel.setVertexCount(t),this.gridAggregationModel.setAttributes(n),this.allAggregationModel.setInstanceCount(a*i)}}},70050:(e,t,n)=>{n.d(t,{A5:()=>o,PQ:()=>f,wc:()=>g});var a=n(24088),i=n(80744);const r=6378e3;function s(e){return Number.isFinite(e)?e:0}function o(e,t){const n=e.positions.value;let a,i,r=1/0,o=-1/0,u=1/0,g=-1/0;for(let e=0;e<t;e++)i=n[3*e],a=n[3*e+1],r=a<r?a:r,o=a>o?a:o,u=i<u?i:u,g=i>g?i:g;return{xMin:s(u),xMax:s(g),yMin:s(r),yMax:s(o)}}function u(e,t){const n=e<0?-1:1;let a=n<0?Math.abs(e)+t:Math.abs(e);return a=Math.floor(a/t)*t,a*n}function g(e,t,n=!0){if(!n)return{xOffset:t,yOffset:t};const{yMin:a,yMax:i}=e;return function(e,t){var n;return{yOffset:e/r*(180/Math.PI),xOffset:(n=t,e/r*(180/Math.PI)/Math.cos(n*Math.PI/180))}}(t,(a+i)/2)}function f(e,t,n,r){const s=g(e,t,r!==a.Df.CARTESIAN),o=function(e,t,n,r){const{width:s,height:o}=r,g=n===a.Df.CARTESIAN?[-s/2,-o/2]:[-180,-90];i.Z.assert(n===a.Df.CARTESIAN||n===a.Df.LNGLAT||n===a.Df.DEFAULT);const{xMin:f,yMin:l}=e;return[-1*(u(f-g[0],t.xOffset)+g[0]),-1*(u(l-g[1],t.yOffset)+g[1])]}(e,s,r,n),{xMin:f,yMin:l,xMax:c,yMax:d}=e,x=c-f+s.xOffset,p=d-l+s.yOffset;return{gridOffset:s,translation:o,width:x,height:p,numCol:Math.ceil(x/s.xOffset),numRow:Math.ceil(p/s.yOffset)}}},92637:(e,t,n)=>{n.d(t,{_w:()=>u,hq:()=>o});var a=n(4912),i=n(39450),r=n(53849);const s={10240:9728,10241:9728};function o(e,t={}){const{width:n=1,height:r=1,data:o=null,unpackFlipY:u=!0,parameters:g=s}=t;return new a.Z(e,{data:o,format:(0,i.D0)(e)?34836:6408,type:5126,border:0,mipmaps:!1,parameters:g,dataFormat:6408,width:n,height:r,unpackFlipY:u})}function u(e,t){const{id:n,width:a=1,height:i=1,texture:s}=t;return new r.Z(e,{id:n,width:a,height:i,attachments:{36064:s}})}},41083:(e,t,n)=>{function a(e,t=[],n=0){const a=Math.fround(e),i=e-a;return t[n]=a,t[n+1]=i,t}n.d(t,{n2:()=>r});const i={ONE:1},r={name:"fp64-arithmetic",vs:"uniform float ONE;\nvec2 split(float a) {\n  const float SPLIT = 4097.0;\n  float t = a * SPLIT;\n#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)\n  float a_hi = t * ONE - (t - a);\n  float a_lo = a * ONE - a_hi;\n#else\n  float a_hi = t - (t - a);\n  float a_lo = a - a_hi;\n#endif\n  return vec2(a_hi, a_lo);\n}\nvec2 split2(vec2 a) {\n  vec2 b = split(a.x);\n  b.y += a.y;\n  return b;\n}\nvec2 quickTwoSum(float a, float b) {\n#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)\n  float sum = (a + b) * ONE;\n  float err = b - (sum - a) * ONE;\n#else\n  float sum = a + b;\n  float err = b - (sum - a);\n#endif\n  return vec2(sum, err);\n}\nvec2 twoSum(float a, float b) {\n  float s = (a + b);\n#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)\n  float v = (s * ONE - a) * ONE;\n  float err = (a - (s - v) * ONE) * ONE * ONE * ONE + (b - v);\n#else\n  float v = s - a;\n  float err = (a - (s - v)) + (b - v);\n#endif\n  return vec2(s, err);\n}\n\nvec2 twoSub(float a, float b) {\n  float s = (a - b);\n#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)\n  float v = (s * ONE - a) * ONE;\n  float err = (a - (s - v) * ONE) * ONE * ONE * ONE - (b + v);\n#else\n  float v = s - a;\n  float err = (a - (s - v)) - (b + v);\n#endif\n  return vec2(s, err);\n}\n\nvec2 twoSqr(float a) {\n  float prod = a * a;\n  vec2 a_fp64 = split(a);\n#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)\n  float err = ((a_fp64.x * a_fp64.x - prod) * ONE + 2.0 * a_fp64.x *\n    a_fp64.y * ONE * ONE) + a_fp64.y * a_fp64.y * ONE * ONE * ONE;\n#else\n  float err = ((a_fp64.x * a_fp64.x - prod) + 2.0 * a_fp64.x * a_fp64.y) + a_fp64.y * a_fp64.y;\n#endif\n  return vec2(prod, err);\n}\n\nvec2 twoProd(float a, float b) {\n  float prod = a * b;\n  vec2 a_fp64 = split(a);\n  vec2 b_fp64 = split(b);\n  float err = ((a_fp64.x * b_fp64.x - prod) + a_fp64.x * b_fp64.y +\n    a_fp64.y * b_fp64.x) + a_fp64.y * b_fp64.y;\n  return vec2(prod, err);\n}\n\nvec2 sum_fp64(vec2 a, vec2 b) {\n  vec2 s, t;\n  s = twoSum(a.x, b.x);\n  t = twoSum(a.y, b.y);\n  s.y += t.x;\n  s = quickTwoSum(s.x, s.y);\n  s.y += t.y;\n  s = quickTwoSum(s.x, s.y);\n  return s;\n}\n\nvec2 sub_fp64(vec2 a, vec2 b) {\n  vec2 s, t;\n  s = twoSub(a.x, b.x);\n  t = twoSub(a.y, b.y);\n  s.y += t.x;\n  s = quickTwoSum(s.x, s.y);\n  s.y += t.y;\n  s = quickTwoSum(s.x, s.y);\n  return s;\n}\n\nvec2 mul_fp64(vec2 a, vec2 b) {\n  vec2 prod = twoProd(a.x, b.x);\n  prod.y += a.x * b.y;\n#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)\n  prod = split2(prod);\n#endif\n  prod = quickTwoSum(prod.x, prod.y);\n  prod.y += a.y * b.x;\n#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)\n  prod = split2(prod);\n#endif\n  prod = quickTwoSum(prod.x, prod.y);\n  return prod;\n}\n\nvec2 div_fp64(vec2 a, vec2 b) {\n  float xn = 1.0 / b.x;\n#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)\n  vec2 yn = mul_fp64(a, vec2(xn, 0));\n#else\n  vec2 yn = a * xn;\n#endif\n  float diff = (sub_fp64(a, mul_fp64(b, yn))).x;\n  vec2 prod = twoProd(xn, diff);\n  return sum_fp64(yn, prod);\n}\n\nvec2 sqrt_fp64(vec2 a) {\n  if (a.x == 0.0 && a.y == 0.0) return vec2(0.0, 0.0);\n  if (a.x < 0.0) return vec2(0.0 / 0.0, 0.0 / 0.0);\n\n  float x = 1.0 / sqrt(a.x);\n  float yn = a.x * x;\n#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)\n  vec2 yn_sqr = twoSqr(yn) * ONE;\n#else\n  vec2 yn_sqr = twoSqr(yn);\n#endif\n  float diff = sub_fp64(a, yn_sqr).x;\n  vec2 prod = twoProd(x * 0.5, diff);\n#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)\n  return sum_fp64(split(yn), prod);\n#else\n  return sum_fp64(vec2(yn, 0.0), prod);\n#endif\n}\n",fs:null,getUniforms:function(){return i},fp64ify:a,fp64LowPart:function(e){return e-Math.fround(e)},fp64ifyMatrix4:function(e){const t=new Float32Array(32);for(let n=0;n<4;++n)for(let i=0;i<4;++i){const r=4*n+i;a(e[4*i+n],t,2*r)}return t}}}}]);
//# sourceMappingURL=48ce4cffe1e01e20fe1f.chunk.js.map