(this["webpackJsonpspa-complementaire"]=this["webpackJsonpspa-complementaire"]||[]).push([[0],{56:function(e,t,a){e.exports=a(91)},61:function(e,t,a){},62:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),i=a(39),c=a.n(i),s=(a(61),a(50)),l=a(20),m=a(9),u=a(38),p=a(46),b=a.n(p),h=a(49),f=a.n(h),d=a(45),g=a.n(d),w=a(4),E=a.n(w),x=a(105),y=a(47),O=a.n(y),j=a(48),v=a.n(j),k=(a(62),a(41)),N=a.n(k),S=Object(x.a)((function(e){var t,a;return{form:(t={fontFamily:"monospace",boxSizing:"border-box"},Object(m.a)(t,e.breakpoints.up("xs"),{maxWidth:"4rem"}),Object(m.a)(t,e.breakpoints.up("sm"),{maxWidth:"7rem"}),Object(m.a)(t,e.breakpoints.up("lg"),{maxWidth:"12rem"}),t),textfield:(a={fontFamily:"'Roboto Mono', monospace"},Object(m.a)(a,e.breakpoints.up("xs"),{fontSize:"1rem"}),Object(m.a)(a,e.breakpoints.up("sm"),{fontSize:"2rem"}),Object(m.a)(a,e.breakpoints.up("lg"),{fontSize:"3rem"}),Object(m.a)(a,"& input[type=number]::-webkit-inner-spin-button",{WebkitAppearance:"none",margin:0}),a)}})),A=function(e){var t=e.giveAnswer,a=S(),n=Object(r.useState)(""),i=Object(l.a)(n,2),c=i[0],s=i[1];return o.a.createElement("form",{className:a.form,onSubmit:function(e){""!==c&&t(c),s(""),e.preventDefault()}},o.a.createElement(N.a,{className:a.textfield,type:"number",onChange:function(e){var t=parseInt(e.currentTarget.value);s(isNaN(t)?"":t)},placeholder:"???",labelWidth:0,value:c}))},M=a(43),z=a(44);function T(e){switch(e){case n.Plus:return"+";case n.Minus:return"\u2212";case n.Obelus:return"\xf7";case n.Times:return"\xd7"}}!function(e){e[e.Plus=0]="Plus",e[e.Minus=1]="Minus",e[e.Obelus=2]="Obelus",e[e.Times=3]="Times"}(n||(n={}));var W=function(){function e(t,a,n){Object(M.a)(this,e),this.x=t,this.y=a,this.operator=n}return Object(z.a)(e,[{key:"output",value:function(){switch(this.operator){case n.Plus:return this.x+this.y;case n.Minus:return this.x-this.y;case n.Times:return this.x*this.y;case n.Obelus:return this.x/this.y}}},{key:"toString",value:function(){return"".concat(this.x," ").concat(T(this.operator)," ").concat(this.y)}}]),e}(),C=Object(x.a)((function(e){return{root:{fontFamily:"Monospace"},box3ch:{width:"3ch",textAlign:"center"},operator:{textAlign:"center"},answer:{borderRadius:4,textAlign:"center",width:"6ch"},correct:{backgroundColor:"rgba(0, 255, 0, 0.5)"},incorrect:{backgroundColor:"rgba(255, 0, 0, 0.5)"}}})),P=function(e){var t=e.operation.output()===e.answer,a=C(),n=t?a.correct:a.incorrect,r=e.operation,i=T(r.operator);return o.a.createElement(E.a,{container:!0,style:{height:"100%"},justify:"center",alignItems:"center",alignContent:"center",wrap:"nowrap"},o.a.createElement(E.a,{item:!0,className:a.box3ch},r.x),o.a.createElement(E.a,{item:!0,className:a.box3ch},i),o.a.createElement(E.a,{item:!0,className:a.box3ch},r.y),o.a.createElement(E.a,{item:!0,className:a.box3ch},"="),void 0!==e.answer&&o.a.createElement(E.a,{xs:!0,item:!0,className:"".concat(a.answer," ").concat(n," ").concat(a.box3ch)},e.answer))},F=Object(x.a)((function(e){var t;return{root:{fontFamily:"monospace",flexGrow:1},appBar:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main},previousAnswer:{textAlign:"center"},hidden:{visibility:"hidden"},question:(t={fontFamily:"'Roboto Mono', monospace"},Object(m.a)(t,e.breakpoints.up("xs"),{fontSize:"1rem"}),Object(m.a)(t,e.breakpoints.up("sm"),{fontSize:"2rem"}),Object(m.a)(t,e.breakpoints.up("lg"),{fontSize:"3rem"}),Object(m.a)(t,"margin",e.spacing(2)),Object(m.a)(t,"padding",e.spacing(2)),t),stats:{fontSize:"0.7rem",height:"100%",paddingLeft:e.spacing(2)}}}));function B(e,t){if(e>t){var a=[t,e];e=a[0],t=a[1]}return e+Math.round(Math.random()*(t-e))}function I(){var e=[n.Plus,n.Minus,n.Obelus,n.Times][B(0,1)],t=B(1,10),a=B(1,10);return new W(t,a,e)}var R={operation:new W(1,1,n.Plus),answer:1};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement((function(){var e=F(),t=Object(r.useState)(I()),a=Object(l.a)(t,2),n=a[0],i=a[1],c=Object(r.useState)(Array(30).fill(1).map((function(){return{operation:I(),answer:B(0,10)}}))),m=Object(l.a)(c,2),p=m[0],h=m[1],d=Object(r.useState)(0),w=Object(l.a)(d,2),x=w[0],y=w[1];return o.a.createElement("div",{className:e.root},o.a.createElement(g.a,null),o.a.createElement(b.a,{className:e.appBar,position:"relative"},o.a.createElement(O.a,null,o.a.createElement(v.a,{variant:"h6",color:"inherit"},"Compl\xe9mentaires"))),o.a.createElement(f.a,{maxWidth:"xl"},o.a.createElement(E.a,{container:!0},o.a.createElement(E.a,{container:!0,item:!0,justify:"center"},o.a.createElement(E.a,{item:!0},o.a.createElement(u.a,{className:e.question},o.a.createElement(E.a,{container:!0,wrap:"nowrap"},o.a.createElement(E.a,{item:!0},o.a.createElement(E.a,{container:!0,justify:"flex-end",wrap:"nowrap"},o.a.createElement(E.a,{item:!0},o.a.createElement(P,{operation:n})),o.a.createElement(E.a,{item:!0},o.a.createElement(A,{giveAnswer:function(e){var t={operation:n,answer:e};h([].concat(Object(s.a)(p),[t])),n.output()===e&&(i(I()),y(x+1))}})))),o.a.createElement(E.a,{item:!0},o.a.createElement(E.a,{container:!0,className:e.stats,alignContent:"center"},o.a.createElement(E.a,{item:!0},"Total: ",x,"/",p.length))))))),o.a.createElement(E.a,{container:!0,item:!0,justify:"center",spacing:2},p.map((function(t,a){return o.a.createElement(E.a,{item:!0,key:a,className:e.previousAnswer},o.a.createElement(u.a,{style:{padding:8}},o.a.createElement(P,{operation:t.operation,answer:t.answer})))})),Array(12).fill(1).map((function(){return o.a.createElement(E.a,{item:!0,className:e.hidden},o.a.createElement(u.a,{style:{padding:8}},o.a.createElement(P,{operation:R.operation,answer:R.answer})))}))))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[56,1,2]]]);
//# sourceMappingURL=main.f3962aef.chunk.js.map