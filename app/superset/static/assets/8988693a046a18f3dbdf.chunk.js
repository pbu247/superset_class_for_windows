"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9877],{51535:(n,t,e)=>{e.r(t),e.d(t,{default:()=>W});var r=e(67294),a=e(45697),o=e.n(a);function i(n,t){let e,r;if(void 0===t)for(const t of n)null!=t&&(void 0===e?t>=t&&(e=r=t):(e>t&&(e=t),r<t&&(r=t)));else{let a=-1;for(let o of n)null!=(o=t(o,++a,n))&&(void 0===e?o>=o&&(e=r=o):(e>o&&(e=o),r<o&&(r=o)))}return[e,r]}var s=e(51995),l=e(55786),u=Math.sqrt(50),c=Math.sqrt(10),h=Math.sqrt(2);function f(n,t,e){var r=(t-n)/Math.max(0,e),a=Math.floor(Math.log(r)/Math.LN10),o=r/Math.pow(10,a);return a>=0?(o>=u?10:o>=c?5:o>=h?2:1)*Math.pow(10,a):-Math.pow(10,-a)/(o>=u?10:o>=c?5:o>=h?2:1)}function d(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}function g(n){let t=n,e=n;function r(n,t,r,a){for(null==r&&(r=0),null==a&&(a=n.length);r<a;){const o=r+a>>>1;e(n[o],t)<0?r=o+1:a=o}return r}return 1===n.length&&(t=(t,e)=>n(t)-e,e=function(n){return(t,e)=>d(n(t),e)}(n)),{left:r,center:function(n,e,a,o){null==a&&(a=0),null==o&&(o=n.length);const i=r(n,e,a,o-1);return i>a&&t(n[i-1],e)>-t(n[i],e)?i-1:i},right:function(n,t,r,a){for(null==r&&(r=0),null==a&&(a=n.length);r<a;){const o=r+a>>>1;e(n[o],t)>0?a=o:r=o+1}return r}}}const m=g(d),p=m.right,y=(m.left,g((function(n){return null===n?NaN:+n})).center,p);var v=e(15744),M=e(73626),b=e(55720);function w(n){return+n}var N=[0,1];function k(n){return n}function x(n,t){return(t-=n=+n)?function(e){return(e-n)/t}:(e=isNaN(t)?NaN:.5,function(){return e});var e}function S(n,t,e){var r=n[0],a=n[1],o=t[0],i=t[1];return a<r?(r=x(a,r),o=e(i,o)):(r=x(r,a),o=e(o,i)),function(n){return o(r(n))}}function z(n,t,e){var r=Math.min(n.length,t.length)-1,a=new Array(r),o=new Array(r),i=-1;for(n[r]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++i<r;)a[i]=x(n[i],n[i+1]),o[i]=e(t[i],t[i+1]);return function(t){var e=y(n,t,1,r)-1;return o[e](a[e](t))}}function Z(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function C(){return function(){var n,t,e,r,a,o,i=N,s=N,l=v.Z,u=k;function c(){var n,t,e,l=Math.min(i.length,s.length);return u!==k&&(n=i[0],t=i[l-1],n>t&&(e=n,n=t,t=e),u=function(e){return Math.max(n,Math.min(t,e))}),r=l>2?z:S,a=o=null,h}function h(t){return null==t||isNaN(t=+t)?e:(a||(a=r(i.map(n),s,l)))(n(u(t)))}return h.invert=function(e){return u(t((o||(o=r(s,i.map(n),M.Z)))(e)))},h.domain=function(n){return arguments.length?(i=Array.from(n,w),c()):i.slice()},h.range=function(n){return arguments.length?(s=Array.from(n),c()):s.slice()},h.rangeRound=function(n){return s=Array.from(n),l=b.Z,c()},h.clamp=function(n){return arguments.length?(u=!!n||k,c()):u!==k},h.interpolate=function(n){return arguments.length?(l=n,c()):l},h.unknown=function(n){return arguments.length?(e=n,h):e},function(e,r){return n=e,t=r,c()}}()(k,k)}function A(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n)}return this}var O=e(16722);function X(n){var t=n.domain;return n.ticks=function(n){var e=t();return function(n,t,e){var r,a,o,i,s=-1;if(e=+e,(n=+n)==(t=+t)&&e>0)return[n];if((r=t<n)&&(a=n,n=t,t=a),0===(i=f(n,t,e))||!isFinite(i))return[];if(i>0){let e=Math.round(n/i),r=Math.round(t/i);for(e*i<n&&++e,r*i>t&&--r,o=new Array(a=r-e+1);++s<a;)o[s]=(e+s)*i}else{i=-i;let e=Math.round(n*i),r=Math.round(t*i);for(e/i<n&&++e,r/i>t&&--r,o=new Array(a=r-e+1);++s<a;)o[s]=(e+s)/i}return r&&o.reverse(),o}(e[0],e[e.length-1],null==n?10:n)},n.tickFormat=function(n,e){var r=t();return function(n,t,e,r){var a,o=function(n,t,e){var r=Math.abs(t-n)/Math.max(0,e),a=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/a;return o>=u?a*=10:o>=c?a*=5:o>=h&&(a*=2),t<n?-a:a}(n,t,e);switch((r=(0,O.YQ)(null==r?",f":r)).type){case"s":var i=Math.max(Math.abs(n),Math.abs(t));return null!=r.precision||isNaN(a=(0,O.S5)(o,i))||(r.precision=a),(0,O.jH)(r,i);case"":case"e":case"g":case"p":case"r":null!=r.precision||isNaN(a=(0,O.F0)(o,Math.max(Math.abs(n),Math.abs(t))))||(r.precision=a-("e"===r.type));break;case"f":case"%":null!=r.precision||isNaN(a=(0,O.zB)(o))||(r.precision=a-2*("%"===r.type))}return(0,O.WU)(r)}(r[0],r[r.length-1],null==n?10:n,e)},n.nice=function(e){null==e&&(e=10);var r,a,o=t(),i=0,s=o.length-1,l=o[i],u=o[s],c=10;for(u<l&&(a=l,l=u,u=a,a=i,i=s,s=a);c-- >0;){if((a=f(l,u,e))===r)return o[i]=l,o[s]=u,t(o);if(a>0)l=Math.floor(l/a)*a,u=Math.ceil(u/a)*a;else{if(!(a<0))break;l=Math.ceil(l*a)/a,u=Math.floor(u*a)/a}r=a}return n},n}function D(){var n=C();return n.copy=function(){return Z(n,D())},A.apply(n,arguments),X(n)}var R=e(11965);const $=["#313695","#4575b4","#74add1","#abd9e9","#fee090","#fdae61","#f46d43","#d73027"],q={className:o().string,width:o().number,height:o().number,data:o().arrayOf(o().shape({y:o().number})).isRequired,bands:o().number,colors:o().arrayOf(o().string),colorScale:o().string,mode:o().string,offsetX:o().number,title:o().string,yDomain:o().arrayOf(o().number)},T={className:"",width:800,height:20,bands:$.length>>1,colors:$,colorScale:"series",mode:"offset",offsetX:0,title:"",yDomain:void 0};class H extends r.PureComponent{componentDidMount(){this.drawChart()}componentDidUpdate(){this.drawChart()}componentWillUnmount(){this.canvas=null}drawChart(){if(this.canvas){const{data:n,yDomain:t,width:e,height:r,bands:a,colors:o,colorScale:s,offsetX:l,mode:u}=this.props,c="change"===s?n.map((t=>({...t,y:t.y-n[0].y}))):n,h=this.canvas.getContext("2d");h.imageSmoothingEnabled=!1,h.clearRect(0,0,e,r),h.setTransform(1,0,0,1,0,0),h.translate(.5,.5);const f=e/c.length,d=Math.floor(Math.max(0,-l/f)),g=Math.floor(Math.min(c.length,d+e/f));if(d>c.length)return;const[m,p]=t||i(c,(n=>n.y)),y=D().domain([0,Math.max(-m,p)]).range([0,r]);let v,M,b=!1;for(let n=0;n<a;n+=1){h.fillStyle=o[a+n],M=(n+1-a)*r,y.range([a*r+M,M]);for(let n=d;n<g;n+=1)v=c[n].y,v<=0?b=!0:void 0!==v&&h.fillRect(l+n*f,y(v),f+1,y(0)-y(v))}if(b){"offset"===u&&(h.translate(0,r),h.scale(1,-1));for(let n=0;n<a;n+=1){h.fillStyle=o[a-n-1],M=(n+1-a)*r,y.range([a*r+M,M]);for(let n=d;n<g;n+=1)v=c[n].y,v>=0||h.fillRect(l+n*f,y(-v),f+1,y(0)-y(-v))}}}}render(){const{className:n,title:t,width:e,height:r}=this.props;return(0,R.tZ)("div",{className:`horizon-row ${n}`},(0,R.tZ)("span",{className:"title"},t),(0,R.tZ)("canvas",{ref:n=>{this.canvas=n},width:e,height:r}))}}H.propTypes=q,H.defaultProps=T;const P=H,F={className:o().string,width:o().number,height:o().number,seriesHeight:o().number,data:o().arrayOf(o().shape({key:o().arrayOf(o().string),values:o().arrayOf(o().shape({y:o().number}))})).isRequired,bands:o().number,colors:o().arrayOf(o().string),colorScale:o().string,mode:o().string,offsetX:o().number},U={className:"",width:800,height:600,seriesHeight:20,bands:Math.floor($.length/2),colors:$,colorScale:"series",mode:"offset",offsetX:0},j=s.iK.div`
  ${n=>{let{theme:t}=n;return`\n    .superset-legacy-chart-horizon {\n      overflow: auto;\n      position: relative;\n    }\n\n    .superset-legacy-chart-horizon .horizon-row {\n      border-bottom: solid 1px ${t.colors.grayscale.light2};\n      border-top: 0;\n      padding: 0;\n      margin: 0;\n    }\n\n    .superset-legacy-chart-horizon .horizon-row span.title {\n      position: absolute;\n      color: ${t.colors.grayscale.dark1};\n      font-size: ${t.typography.sizes.s}px;\n      margin: 0;\n    }\n  `}}
`;class L extends r.PureComponent{render(){const{className:n,width:t,height:e,data:r,seriesHeight:a,bands:o,colors:s,colorScale:u,mode:c,offsetX:h}=this.props;let f;if("overall"===u){const n=r.reduce(((n,t)=>n.concat(t.values)),[]);f=i(n,(n=>n.y))}return(0,R.tZ)(j,null,(0,R.tZ)("div",{className:`superset-legacy-chart-horizon ${n}`,style:{height:e}},r.map((n=>(0,R.tZ)(P,{key:n.key,width:t,height:a,title:(0,l.Z)(n.key).join(", "),data:n.values,bands:o,colors:s,colorScale:u,mode:c,offsetX:h,yDomain:f})))))}}L.propTypes=F,L.defaultProps=U;const W=L}}]);
//# sourceMappingURL=8988693a046a18f3dbdf.chunk.js.map