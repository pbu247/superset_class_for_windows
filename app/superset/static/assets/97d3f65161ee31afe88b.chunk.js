"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5378],{78918:(t,e,r)=>{r.d(e,{Z:()=>n});var o=r(95772),s=r(63803),i=r(61855);class n extends o.Z{get isComposite(){return!0}get isLoaded(){return super.isLoaded&&this.getSubLayers().every((t=>t.isLoaded))}getSubLayers(){return this.internalState&&this.internalState.subLayers||[]}initializeState(){}setState(t){super.setState(t),this.setNeedsUpdate()}getPickingInfo({info:t}){const{object:e}=t;return e&&e.__source&&e.__source.parent&&e.__source.parent.id===this.id?(t.object=e.__source.object,t.index=e.__source.index,t):t}renderLayers(){return null}filterSubLayer(t){return!0}shouldRenderSubLayer(t,e){const{_subLayerProps:r}=this.props;return e&&e.length||r&&r[t]}getSubLayerClass(t,e){const{_subLayerProps:r}=this.props;return r&&r[t]&&r[t].type||e}getSubLayerRow(t,e,r){return t.__source={parent:this,object:e,index:r},t}getSubLayerAccessor(t){if("function"==typeof t){const e={data:this.props.data,target:[]};return(r,o)=>r&&r.__source?(e.index=r.__source.index,t(r.__source.object,e)):t(r,o)}return t}getSubLayerProps(t={}){const{opacity:e,pickable:r,visible:o,parameters:s,getPolygonOffset:i,highlightedObjectIndex:n,autoHighlight:a,highlightColor:p,coordinateSystem:l,coordinateOrigin:g,wrapLongitude:c,positionFormat:u,modelMatrix:h,extensions:d,fetch:y,_subLayerProps:b}=this.props,f={opacity:e,pickable:r,visible:o,parameters:s,getPolygonOffset:i,highlightedObjectIndex:n,autoHighlight:a,highlightColor:p,coordinateSystem:l,coordinateOrigin:g,wrapLongitude:c,positionFormat:u,modelMatrix:h,extensions:d,fetch:y},m=b&&b[t.id],L=m&&m.updateTriggers,x=t.id||"sublayer";if(m){const e=this.constructor._propTypes,r=t.type?t.type._propTypes:{};for(const t in m){const o=r[t]||e[t];o&&"accessor"===o.type&&(m[t]=this.getSubLayerAccessor(m[t]))}}Object.assign(f,t,m),f.id="".concat(this.props.id,"-").concat(x),f.updateTriggers={all:this.props.updateTriggers.all,...t.updateTriggers,...L};for(const t of d){const e=t.getSubLayerProps.call(this,t);e&&Object.assign(f,e,{updateTriggers:Object.assign(f.updateTriggers,e.updateTriggers)})}return f}_updateAutoHighlight(t){for(const e of this.getSubLayers())e.updateAutoHighlight(t)}_getAttributeManager(){return null}_renderLayers(){let{subLayers:t}=this.internalState;const e=!t||this.needsUpdate();e&&(t=this.renderLayers(),t=(0,i.x)(t,Boolean),this.internalState.subLayers=t),(0,s.Z)("compositeLayer.renderLayers",this,e,t);for(const e of t)e.parent=this}}n.layerName="CompositeLayer"},36665:(t,e,r)=>{r.d(e,{Z:()=>d});var o=r(78580),s=r.n(o),i=r(67294),n=r(45697),a=r.n(n),p=r(51995),l=r(67190),g=r(11965);const c=p.iK.div`
  ${t=>{let{theme:e}=t;return`\n    font-size: ${e.typography.sizes.s}px;\n    position: absolute;\n    background: ${e.colors.grayscale.light5};\n    box-shadow: 0 0 ${e.gridUnit}px ${e.colors.grayscale.light2};\n    margin: ${6*e.gridUnit}px;\n    padding: ${3*e.gridUnit}px ${5*e.gridUnit}px;\n    outline: none;\n    overflow-y: scroll;\n    max-height: 200px;\n\n    & ul {\n      list-style: none;\n      padding-left: 0;\n      margin: 0;\n\n      & li a {\n        color: ${e.colors.grayscale.base};\n        text-decoration: none;\n\n        & span {\n          margin-right: ${3*e.gridUnit}px;\n        }\n      }\n    }\n  `}}
`,u=" - ",h={categories:a().object,forceCategorical:a().bool,format:a().string,position:a().oneOf([null,"tl","tr","bl","br"]),showSingleCategory:a().func,toggleCategory:a().func};class d extends i.PureComponent{format(t){if(!this.props.format||this.props.forceCategorical)return t;const e=parseFloat(t);return(0,l.uf)(this.props.format,e)}formatCategoryLabel(t){if(!this.props.format)return t;if(s()(t).call(t,u)){const e=t.split(u);return this.format(e[0])+u+this.format(e[1])}return this.format(t)}render(){if(0===Object.keys(this.props.categories).length||null===this.props.position)return null;const t=Object.entries(this.props.categories).map((t=>{let[e,r]=t;const o={color:`rgba(${r.color.join(", ")})`},s=r.enabled?"◼":"◻";return(0,g.tZ)("li",{key:e},(0,g.tZ)("a",{href:"#",onClick:()=>this.props.toggleCategory(e),onDoubleClick:()=>this.props.showSingleCategory(e)},(0,g.tZ)("span",{style:o},s)," ",this.formatCategoryLabel(e)))})),e={position:"absolute",["t"===this.props.position.charAt(0)?"top":"bottom"]:"0px",["r"===this.props.position.charAt(1)?"right":"left"]:"10px"};return(0,g.tZ)(c,{style:e},(0,g.tZ)("ul",null,t))}}d.propTypes=h,d.defaultProps={categories:{},forceCategorical:!1,format:null,position:"tr",showSingleCategory:()=>{},toggleCategory:()=>{}}}}]);
//# sourceMappingURL=97d3f65161ee31afe88b.chunk.js.map