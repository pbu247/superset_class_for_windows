"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4109],{76499:(t,e,n)=>{n.r(e),n.d(e,{ChartCreation:()=>V,default:()=>L});var i=n(78580),a=n.n(i),s=n(67294),o=n(15926),r=n.n(o),l=n(17563),d=n(93185),c=n(51995),p=n(55867),h=n(37731),g=n(31069),u=n(23525),b=n(27600),m=n(73727),x=n(16550),y=n(35932),f=n(4715),$=n(58593),v=n(14114),w=n(13284),Z=n(12617),D=n(20292),z=n(11965);const T=(0,D.Z)().common.conf.VIZ_TYPE_DENYLIST||[];(0,d.cr)(d.TT.DASHBOARD_NATIVE_FILTERS)&&!a()(T).call(T,"filter_box")&&T.push("filter_box");const U=c.iK.div`
  ${t=>{let{theme:e}=t;return`\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 100%;\n    max-width: ${w.UB}px;\n    max-height: calc(100vh - 56px);\n    border-radius: ${e.gridUnit}px;\n    background-color: ${e.colors.grayscale.light5};\n    margin-left: auto;\n    margin-right: auto;\n    padding-left: ${4*e.gridUnit}px;\n    padding-right: ${4*e.gridUnit}px;\n    padding-bottom: ${4*e.gridUnit}px;\n\n    h3 {\n      padding-bottom: ${3*e.gridUnit}px;\n    }\n\n    & .dataset {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n\n      & > div {\n        min-width: 200px;\n        width: 300px;\n      }\n\n      & > span {\n        color: ${e.colors.grayscale.light1};\n        margin-left: ${4*e.gridUnit}px;\n      }\n    }\n\n    & .viz-gallery {\n      border: 1px solid ${e.colors.grayscale.light2};\n      border-radius: ${e.gridUnit}px;\n      margin: ${e.gridUnit}px 0px;\n      max-height: calc(100vh - 306px);\n      flex: 1;\n    }\n\n    & .footer {\n      flex: 1;\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-end;\n      align-items: center;\n\n      & > span {\n        color: ${e.colors.grayscale.light1};\n        margin-right: ${4*e.gridUnit}px;\n      }\n    }\n\n    /* The following extra ampersands (&&&&) are used to boost selector specificity */\n\n    &&&& .ant-steps-item-tail {\n      display: none;\n    }\n\n    &&&& .ant-steps-item-icon {\n      margin-right: ${2*e.gridUnit}px;\n      width: ${5*e.gridUnit}px;\n      height: ${5*e.gridUnit}px;\n      line-height: ${5*e.gridUnit}px;\n    }\n\n    &&&& .ant-steps-item-title {\n      line-height: ${5*e.gridUnit}px;\n    }\n\n    &&&& .ant-steps-item-content {\n      overflow: unset;\n\n      .ant-steps-item-description {\n        margin-top: ${e.gridUnit}px;\n      }\n    }\n\n    &&&& .ant-tooltip-open {\n      display: inline;\n    }\n\n    &&&& .ant-select-selector {\n      padding: 0;\n    }\n\n    &&&& .ant-select-selection-placeholder {\n      padding-left: ${3*e.gridUnit}px;\n    }\n  `}}
`,_=c.iK.div`
  ${t=>{let{theme:e,hasDescription:n}=t;return`\n    .tooltip-header {\n      font-size: ${n?e.typography.sizes.l:e.typography.sizes.s}px;\n      font-weight: ${n?e.typography.weights.bold:e.typography.weights.normal};\n    }\n\n    .tooltip-description {\n      margin-top: ${2*e.gridUnit}px;\n      display: -webkit-box;\n      -webkit-line-clamp: 20;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n  `}}
`,C=c.iK.span`
  ${t=>{let{theme:e}=t;return`\n    position: absolute;\n    left: ${3*e.gridUnit}px;\n    right: ${3*e.gridUnit}px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  `}}
`,k=c.iK.span`
  ${t=>{let{theme:{typography:{sizes:e,weights:n}}}=t;return`\n      font-size: ${e.m}px;\n      font-weight: ${n.bold};\n    `}}
`,S=c.iK.div`
  ${t=>{let{theme:{gridUnit:e}}=t;return`\n    margin-top: ${4*e}px;\n    margin-bottom: ${3*e}px;\n  `}}
`;class V extends s.PureComponent{constructor(t){super(t),this.state={vizType:null,canCreateDataset:(0,Z.R)("can_write","Dataset",t.user.roles)},this.changeDatasource=this.changeDatasource.bind(this),this.changeVizType=this.changeVizType.bind(this),this.gotoSlice=this.gotoSlice.bind(this),this.newLabel=this.newLabel.bind(this),this.loadDatasources=this.loadDatasources.bind(this),this.onVizTypeDoubleClick=this.onVizTypeDoubleClick.bind(this)}componentDidMount(){var t;const e=null==(t=l.parse(window.location.search))?void 0:t.dataset;e&&(this.loadDatasources(e,0,1).then((t=>{const e=t.data[0];e.label=e.customLabel,this.setState({datasource:e})})),this.props.addSuccessToast((0,p.t)("The dataset has been saved")))}exploreUrl(){var t;const e=(0,u.eY)(b.KD.dashboardId);let n=`/explore/?viz_type=${this.state.vizType}&datasource=${null==(t=this.state.datasource)?void 0:t.value}`;return(0,h.Z)(e)&&(n+=`&dashboard_id=${e}`),n}gotoSlice(){this.props.history.push(this.exploreUrl())}changeDatasource(t){this.setState({datasource:t})}changeVizType(t){this.setState({vizType:t})}isBtnDisabled(){var t;return!(null!=(t=this.state.datasource)&&t.value&&this.state.vizType)}onVizTypeDoubleClick(){this.isBtnDisabled()||this.gotoSlice()}newLabel(t){return(0,z.tZ)($.u,{mouseEnterDelay:1,placement:"right",title:(0,z.tZ)(_,{hasDescription:!!t.description},(0,z.tZ)("div",{className:"tooltip-header"},t.table_name),t.description&&(0,z.tZ)("div",{className:"tooltip-description"},t.description))},(0,z.tZ)(C,null,t.table_name))}loadDatasources(t,e,n){const i=r().encode({columns:["id","table_name","description","datasource_type"],filters:[{col:"table_name",opr:"ct",value:t}],page:e,page_size:n,order_column:"table_name",order_direction:"asc"});return g.Z.get({endpoint:`/api/v1/dataset/?q=${i}`}).then((t=>({data:t.json.result.map((t=>({id:t.id,value:`${t.id}__${t.datasource_type}`,customLabel:this.newLabel(t),label:t.table_name}))),totalCount:t.json.count})))}render(){var t;const e=this.isBtnDisabled(),n=(0,p.t)("view instructions"),i=this.state.canCreateDataset?(0,z.tZ)("span",null,(0,z.tZ)(m.rU,{to:"/dataset/add/"},(0,p.t)("Add a dataset")," "),(0,p.t)("or")," ",(0,z.tZ)("a",{href:"https://superset.apache.org/docs/creating-charts-dashboards/creating-your-first-dashboard/#registering-a-new-table",rel:"noopener noreferrer",target:"_blank"},`${n} `,(0,z.tZ)("i",{className:"fa fa-external-link"})),"."):(0,z.tZ)("span",null,(0,z.tZ)("a",{href:"https://superset.apache.org/docs/creating-charts-dashboards/creating-your-first-dashboard/#registering-a-new-table",rel:"noopener noreferrer",target:"_blank"},`${n} `,(0,z.tZ)("i",{className:"fa fa-external-link"})),".");return(0,z.tZ)(U,null,(0,z.tZ)("h3",null,(0,p.t)("Create a new chart")),(0,z.tZ)(f.Rg,{direction:"vertical",size:"small"},(0,z.tZ)(f.Rg.Step,{title:(0,z.tZ)(k,null,(0,p.t)("Choose a dataset")),status:null!=(t=this.state.datasource)&&t.value?"finish":"process",description:(0,z.tZ)(S,{className:"dataset"},(0,z.tZ)(f.qb,{autoFocus:!0,ariaLabel:(0,p.t)("Dataset"),name:"select-datasource",onChange:this.changeDatasource,options:this.loadDatasources,optionFilterProps:["id","label"],placeholder:(0,p.t)("Choose a dataset"),showSearch:!0,value:this.state.datasource}),i)}),(0,z.tZ)(f.Rg.Step,{title:(0,z.tZ)(k,null,(0,p.t)("Choose chart type")),status:this.state.vizType?"finish":"process",description:(0,z.tZ)(S,null,(0,z.tZ)(w.ZP,{denyList:T,className:"viz-gallery",onChange:this.changeVizType,onDoubleClick:this.onVizTypeDoubleClick,selectedViz:this.state.vizType}))})),(0,z.tZ)("div",{className:"footer"},e&&(0,z.tZ)("span",null,(0,p.t)("Please select both a Dataset and a Chart type to proceed")),(0,z.tZ)(y.Z,{buttonStyle:"primary",disabled:e,onClick:this.gotoSlice},(0,p.t)("Create new chart"))))}}const L=(0,x.EN)((0,v.ZP)(V))}}]);
//# sourceMappingURL=035f7392bcf26e318c4b.chunk.js.map