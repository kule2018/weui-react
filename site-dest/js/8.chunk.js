(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"8nBe":function(e,t,n){},ECzo:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),c=n("TSYQ"),r=n.n(c),o=(n("ZLMm"),n("plWM"));t.a=l.a.memo((function(e){var t=e.prefixCls,n=void 0===t?"weui-cells":t,a=e.className,c=e.style,i=e.title,u=e.children,s=e.formMode,d=void 0===s||s;return l.a.createElement("div",{className:r()(n+"__group",a,d?"weui-cells__group_form":""),style:c},l.a.createElement(o.a,{className:d?"weui-cells_form":"",title:i},u))}))},RvQ8:function(e,t,n){"use strict";var a=n("mrSG"),l=n("TSYQ"),c=n.n(l),r=n("q1tI"),o=n.n(r),i=n("6yG6"),u=n("b0S1"),s=n("mcfo"),d=n("d8CH");n("3mje");t.a=o.a.memo((function(e){var t,n=e.prefixCls,l=void 0===n?"form-item":n,m=e.className,f=e.style,p=e.label,b=e.required,C=e.footer,h=e.arrow,v=e.onClick,O=e.children,E=e.head,N=(e.disabled,Object(a.c)(e,["prefixCls","className","style","label","required","footer","arrow","onClick","children","head","disabled"])),y=Object(r.useState)([]),w=y[0],j=y[1],x=Object(r.useContext)(i.a).disabled||e.disabled,g=Object(r.useRef)(w),k=c()(l,m,((t={})[l+"-required"]=b,t[l+"-error"]=g.current.length>0,t["weui-cell_disabled"]=x,t)),S=Object(r.useState)("string"==typeof e.label?e.label:null),T=S[0],R=S[1];return o.a.createElement(d.a,{className:k,style:f,arrow:h,footer:C,onClick:v,head:E||o.a.createElement("label",{className:"weui-label",ref:function(e){!T&&e&&R(e.textContent||e.innerText)}},p)},o.a.createElement(u.a.Provider,{value:{onValidateChange:function(e,t){var n=g.current,l=n.findIndex((function(t){return t.prop===e}));t.status?-1!==l&&(g.current=n.filter((function(t){return t.prop!==e})),j(g.current)):-1!==l?(n[l].msg=t.msg,j(Object(a.d)(n))):(g.current=Object(a.d)(n,[Object(a.a)({prop:e},t)]),j(g.current))},label:T}},"prop"in e?o.a.createElement(s.a,Object(a.a)({},N),O):O))}))},Vy3d:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),c=n("TSYQ"),r=n.n(c);n("0CdP");t.a=l.a.memo((function(e){var t=e.prefixCls,n=void 0===t?"weui-icon":t,a=e.className,c=e.style,o=e.onClick,i=e.icon,u=e.spin,s=void 0!==u&&u,d=e.children,m="string"==typeof i,f=i;return l.a.createElement("i",{className:r()(n,a,m?n+"-"+i:null,{spin:s}),style:c,onClick:o},!m&&l.a.createElement(f,null),d)}))},cIhF:function(e,t,n){},fBAX:function(e,t,n){"use strict";n.r(t);var a,l=n("q1tI"),c=n.n(l),r=n("Ty5D"),o=n("bVAN"),i=n("qqMo"),u=n("tlGR"),s=n("ECzo"),d=n("lf5R"),m=n("TSYQ"),f=n.n(m),p=n("ReSL");n("cIhF");!function(e){e[e.NORMAL=0]="NORMAL",e[e.COUNTDOWN=1]="COUNTDOWN",e[e.COMPLETE=2]="COMPLETE"}(a||(a={}));var b=c.a.memo((function(e){var t,n,r=e.prefixCls,o=void 0===r?"xy-count-down":r,i=e.className,u=e.style,s=e.children,d=e.disabled,m=void 0!==d&&d,b=e.onStart,C=e.finish,h=void 0===C?"再次发送":C,v=e.time,O=void 0===v?60:v,E=Object(l.useState)(0),N=E[0],y=E[1],w=Object(l.useState)(a.NORMAL),j=w[0],x=w[1],g=Object(l.useRef)(null),k=Object(l.useState)(!1),S=k[0],T=k[1],R=Object(l.useRef)(0);function L(){S||j===a.COUNTDOWN||(b?(T(!0),b(m).then((function(e){T(!1),e&&_()})).catch((function(e){T(!1)}))):_())}function _(){m||(I(),y(O),R.current=O,x(a.COUNTDOWN))}function I(){clearInterval(g.current)}return Object(l.useEffect)((function(){if(j===a.COUNTDOWN)return g.current=window.setInterval((function(){R.current<=0?(I(),x(a.COMPLETE)):(R.current=R.current-1,y((function(e){return--e})))}),1e3),I}),[j,N]),Object(p.h)((function(){I()})),c.a.createElement("span",{className:f()(o,i,(t={},t[o+"--disabled"]=m,t)),style:u},(n=j===a.COUNTDOWN?c.a.createElement("span",null,"剩余",c.a.createElement("span",{className:o+"_timer_text"},N),"秒"):S?"发送中":j===a.COMPLETE?h:s.props.children,c.a.cloneElement(s,{loading:S,disabled:m,onClick:L,className:"weui-vcode-btn",children:n})))}));t.default=Object(r.f)((function(e){var t=e.history;return c.a.createElement(o.a,{title:"表单标题",desc:"表单说明",opr:c.a.createElement(i.a,{type:"primary",onClick:function(){return t.goBack()}},"返回"),tips:c.a.createElement(u.a,{className:"weui-agree"},c.a.createElement("span",{className:"weui-agree__text"},"阅读并同意",c.a.createElement("a",null,"《相关条款》")))},c.a.createElement(s.a,null,c.a.createElement(d.a,{prop:"phone",label:"手机号",type:"number",clearable:!0,placeholder:"请输入11位手机号",pattern:"[0-9]*",maxLength:11}),c.a.createElement(d.a,{prop:"code",className:"weui-cell_vcode",label:"验证码",type:"number",pattern:"[0-9]*",clearable:!0,placeholder:"请输入验证码",maxLength:6,footer:c.a.createElement(b,{onStart:function(){return new Promise((function(e,t){setTimeout((function(){e(!0)}),600)}))}},c.a.createElement(i.a,null,"获取验证码"))}),c.a.createElement(d.a,{prop:"name",label:"姓名",placeholder:"请输入您的真实姓名"})))}))},lf5R:function(e,t,n){"use strict";var a=n("mrSG"),l=n("TSYQ"),c=n.n(l),r=n("q1tI"),o=n.n(r),i=n("ReSL"),u=n("6yG6"),s=n("RvQ8"),d=n("Vy3d"),m=(n("8nBe"),o.a.forwardRef((function(e,t){var n=e.prefixCls,l=void 0===n?"weui-input":n,r=e.className,u=e.style,s=e.type,d=void 0===s?"text":s,m=(e.defaultValue,e.onBlur),f=e.onChange,p=Object(a.c)(e,["prefixCls","className","style","type","defaultValue","onBlur","onChange"]),b=c()(l,r),C=Object(i.c)(e,"value","defaultValue"),h=C[0],v=C[1],O=C[2];return p.style=u,p.ref=t,o.a.createElement("input",Object(a.a)({},p,{type:d},O?{value:h||""}:{defaultValue:h},{"aria-disabled":e.disabled,className:b,onChange:function(t){var n;n=t.target.value,e.disabled||(O||v(n),f&&f(n))},onBlur:function(e){m&&m(e),document.body.scrollTop=0,document.documentElement.scrollTop=0}}))}))),f=o.a.memo(m);function p(e){return e?parseFloat(e):null}t.a=o.a.memo((function(e){var t=Object(r.useContext)(u.a),n=t&&t.formMethods,l=e.type,m=e.prefixCls,b=e.className,C=e.style,h=e.id,v=e.name,O=e.value,E=e.defaultValue,N=e.placeholder,y=e.autoFocus,w=e.tabIndex,j=e.onFocus,x=e.onBlur,g=e.onKeyDown,k=e.onChange,S=e.onCompositionStart,T=e.onCompositionEnd,R=e.pattern,L=e.maxLength,_=e.clearable,I=void 0!==_&&_,V=e.converNumber,M=void 0!==V&&V,q=Object(a.c)(e,["type","prefixCls","className","style","id","name","value","defaultValue","placeholder","autoFocus","tabIndex","onFocus","onBlur","onKeyDown","onChange","onCompositionStart","onCompositionEnd","pattern","maxLength","clearable","converNumber"]),F=Object(r.useState)(!1),B=F[0],D=F[1],Q=Object(r.useRef)(null),G={type:l,prefixCls:m,style:C,id:h,name:v,value:O,defaultValue:E,placeholder:N,autoFocus:y,tabIndex:w,onFocus:function(t){window.clearTimeout(Q.current),j&&j(t);n&&e.prop&&n.getFieldValue(e.prop)&&!B&&D(!0)},onBlur:function(e){x&&x(e);Q.current=setTimeout((function(){B&&D(!1)}),50)},onKeyDown:g,onChange:function(e){e?B||D(!0):B&&D(!1);k&&k(e)},onCompositionStart:S,onCompositionEnd:T,pattern:R,maxLength:L};"disabled"in e&&(G.disabled=e.disabled),M&&"number"===e.type&&!e.normalize&&(q.normalize=p);var P=o.a.createElement("a",{className:c()("weui-btn_reset weui-btn_icon weui-btn_input-clear",{visible:B&&I}),onClick:function(){n&&e.prop&&n.setFieldValue(e.prop,"")}},o.a.createElement(d.a,{icon:"clear"}));return Object(i.e)((function(){window.clearTimeout(Q.current)})),o.a.createElement(s.a,Object(a.a)({},q,{className:c()(b,"input-item"),footer:q.footer||P}),o.a.createElement(f,Object(a.a)({},G)))}))},tlGR:function(e,t,n){"use strict";var a=n("mrSG"),l=n("TSYQ"),c=n.n(l),r=n("q1tI"),o=n.n(r),i=n("ReSL"),u=n("Vy3d"),s=(n("ujKk"),o.a.forwardRef((function(e,t){var n,l=e.prefixCls,r=void 0===l?"weui-check":l,s=e.className,d=(e.style,e.defaultChecked,e.children),m=e.stand,f=void 0!==m&&m,p=Object(a.c)(e,["prefixCls","className","style","defaultChecked","children","stand"]),b=Object(i.c)(e,"checked","defaultChecked",!1),C=b[0],h=b[1],v=b[2],O=c()(r,((n={})[r+"-checked"]=C,n[r+"-disabled"]=e.disabled,n));function E(t){e.disabled||(v||h(t),e.onChange&&e.onChange(t,e.value))}function N(){"checked"in e&&!f||E(!C)}return o.a.createElement("span",{className:c()("checkbox-wrap",s)},o.a.createElement("input",Object(a.a)({},p,{value:p.value||""},v?{checked:C}:{defaultChecked:C},{type:"checkbox","aria-disabled":e.disabled,className:O,onChange:function(e){E(e.target.checked)},ref:t})),o.a.createElement(u.a,{icon:"checked",onClick:N}),d&&o.a.cloneElement(d,{onClick:N}))})));t.a=o.a.memo(s)},ujKk:function(e,t,n){}}]);
//# sourceMappingURL=8.chunk.js.map