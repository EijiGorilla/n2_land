"use strict";(self.webpackChunkn2_land=self.webpackChunkn2_land||[]).push([[7171],{97171:(e,t,i)=>{i.r(t),i.d(t,{default:()=>A});var a=i(72791),l=i(36494),n=i(47443),r=i(18661),s=i(21149),o=i(36801),u=i(59181),c=i(66817),d=i(97304),f=i(70565),h=i(54797),v=i(27663),m=i(82308),p=i(80659),g=i(91934),x=i(77066),w=i(85580),y=i(26877),b=i(80184);const A=(0,a.memo)((e=>{let{municipal:t,barangay:i}=e;const A=(0,a.useRef)({}),k=(0,a.useRef)({}),E=(0,a.useRef)({}),[R,L]=(0,a.useState)([{category:String,value:Number,sliceSettings:{fill:c.$_("#00c5ff")}}]),[T,N]=(0,a.useState)(0),S="nlo-chart",_="Municipality = '"+t+"'",j=_+" AND "+("Barangay = '"+i+"'");return t&&!i?(l.vx.definitionExpression=_,l.tP.definitionExpression=_):i&&(l.vx.definitionExpression=j,l.tP.definitionExpression=j),(0,a.useEffect)((()=>{(0,x.nf)(t,i).then((e=>{L(e)})),(0,x.wU)().then((e=>{N(e)}))}),[t,i]),(0,a.useEffect)((()=>{var e,t;t=S,o.S6(u.i_.rootElements,(function(e){e.dom.id===t&&e.dispose()}));var i=d.f.new(S);i.container.children.clear(),null===(e=i._logo)||void 0===e||e.dispose(),i.setThemes([p.Z.new(i),g.Z.new(i)]);var a=i.container.children.push(v.u.new(i,{layout:i.verticalLayout}));E.current=a;var x=a.series.push(m.f.new(i,{name:"Series",categoryField:"category",valueField:"value",legendValueText:"{valuePercentTotal.formatNumber('#.')}% ({value})",radius:f.aQ(45),innerRadius:f.aQ(20),scale:1.8}));A.current=x,a.series.push(x),x.slices.template.setAll({fillOpacity:.9,stroke:c.$_("#ffffff"),strokeWidth:.5,strokeOpacity:1,templateField:"sliceSettings"}),x.labels.template.set("visible",!1),x.ticks.template.set("visible",!1),x.slices.template.events.on("click",(e=>{var t,i=(null===(t=e.target.dataItem)||void 0===t?void 0:t.dataContext).category;const a=y.Rg.find((e=>e.category===i)),o=null===a||void 0===a?void 0:a.value;var u,c=l.vx.createQuery();n.ei.when((function(){n.ei.whenLayerView(l.vx).then((e=>{l.vx.queryFeatures(c).then((function(t){const i=t.features.length;let a=[];for(var o=0;o<i;o++){var c=t.features[o].attributes.OBJECTID;a.push(c)}var d=new s.Z({objectIds:a});l.vx.queryExtent(d).then((function(e){e.extent&&n.ei.goTo(e.extent)})),u&&u.remove(),u=e.highlight(a),n.ei.on("click",(function(){e.filter=new r.Z({where:void 0}),u.remove()}))})),e.filter=new r.Z({where:y.D6+" = "+o})}))}))})),x.data.setAll(R);var w=a.children.push(h.D.new(i,{centerX:f.aQ(50),x:f.aQ(50)}));k.current=w,w.data.setAll(x.dataItems),w.markers.template.setAll({width:18,height:18}),w.markerRectangles.template.setAll({cornerRadiusTL:10,cornerRadiusTR:10,cornerRadiusBL:10,cornerRadiusBR:10}),a.onPrivate("width",(function(e){var t=Math.max(e-a.height()-190,190);w.labels.template.setAll({width:t,maxWidth:t})}));return w.labels.template.setAll({oversizedBehavior:"truncate",fill:c.$_("#ffffff")}),w.valueLabels.template.setAll({textAlign:"right",width:50,fill:c.$_("#ffffff")}),w.itemContainers.template.setAll({paddingTop:3,paddingBottom:1}),x.appear(1e3,100),()=>{i.dispose()}}),[S,R]),(0,a.useEffect)((()=>{var e,t;null===(e=A.current)||void 0===e||e.data.setAll(R),null===(t=k.current)||void 0===t||t.data.setAll(A.current.dataItems)})),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(w.ZK,{children:"TOTAL NON-LAND OWNERS"}),(0,b.jsx)(w.ZK,{layout:"inline",children:(0,b.jsxs)("b",{className:"permitToEnterNumber",children:[(0,x.oc)(T),(0,b.jsx)("img",{src:"https://EijiGorilla.github.io/Symbols/NLO_Logo.svg",alt:"NLO Logo",height:"55%",width:"55%",style:{marginLeft:"200%",display:"flex",marginTop:"-17%"}})]})}),(0,b.jsx)("div",{id:S,style:{height:"40vh",backgroundColor:"rgb(0,0,0,0)",color:"white"}})]})}))}}]);
//# sourceMappingURL=7171.72b9f9c5.chunk.js.map