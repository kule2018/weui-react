(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"8nBe":function(e,t,n){},ECzo:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("TSYQ"),l=n.n(o),c=(n("ZLMm"),n("plWM"));t.a=r.a.memo((function(e){var t=e.prefixCls,n=void 0===t?"weui-cells":t,a=e.className,o=e.style,i=e.title,u=e.children,s=e.formMode,m=void 0===s||s;return r.a.createElement("div",{className:l()(n+"__group",a,m?"weui-cells__group_form":""),style:o},r.a.createElement(c.a,{className:m?"weui-cells_form":"",title:i},u))}))},RvQ8:function(e,t,n){"use strict";var a=n("mrSG"),r=n("TSYQ"),o=n.n(r),l=n("q1tI"),c=n.n(l),i=n("6yG6"),u=n("b0S1"),s=n("mcfo"),m=n("d8CH");n("3mje");t.a=c.a.memo((function(e){var t,n=e.prefixCls,r=void 0===n?"form-item":n,d=e.className,p=e.style,f=e.label,b=e.required,v=e.footer,y=e.arrow,C=e.onClick,h=e.children,g=e.head,E=(e.disabled,Object(a.c)(e,["prefixCls","className","style","label","required","footer","arrow","onClick","children","head","disabled"])),j=Object(l.useState)([]),w=j[0],O=j[1],N=Object(l.useContext)(i.a).disabled||e.disabled,x=Object(l.useRef)(w),S=o()(r,d,((t={})[r+"-required"]=b,t[r+"-error"]=x.current.length>0,t["weui-cell_disabled"]=N,t)),V=Object(l.useState)("string"==typeof e.label?e.label:null),k=V[0],q=V[1];return c.a.createElement(m.a,{className:S,style:p,arrow:y,footer:v,onClick:C,head:g||c.a.createElement("label",{className:"weui-label",ref:function(e){!k&&e&&q(e.textContent||e.innerText)}},f)},c.a.createElement(u.a.Provider,{value:{onValidateChange:function(e,t){var n=x.current,r=n.findIndex((function(t){return t.prop===e}));t.status?-1!==r&&(x.current=n.filter((function(t){return t.prop!==e})),O(x.current)):-1!==r?(n[r].msg=t.msg,O(Object(a.d)(n))):(x.current=Object(a.d)(n,[Object(a.a)({prop:e},t)]),O(x.current))},label:k}},"prop"in e?c.a.createElement(s.a,Object(a.a)({},E),h):h))}))},V3xl:function(e,t,n){},Vy3d:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("TSYQ"),l=n.n(o);n("0CdP");t.a=r.a.memo((function(e){var t=e.prefixCls,n=void 0===t?"weui-icon":t,a=e.className,o=e.style,c=e.onClick,i=e.icon,u=e.spin,s=void 0!==u&&u,m=e.children,d="string"==typeof i,p=i;return r.a.createElement("i",{className:l()(n,a,d?n+"-"+i:null,{spin:s}),style:o,onClick:c},!d&&r.a.createElement(p,null),m)}))},gKhg:function(e,t,n){"use strict";var a=n("mrSG"),r=n("TSYQ"),o=n.n(r),l=n("q1tI"),c=n.n(l),i=n("Vy3d"),u=n("LDgl"),s=n("bR3w");n("V3xl");var m=c.a.memo((function(e){var t=e.prefixCls,n=void 0===t?"xy-toast":t,r=e.className,l=e.style,m=e.type,d=void 0===m?"success":m,p=e.children,f=e.duration,b=void 0===f?3e3:f,v=Object(a.c)(e,["prefixCls","className","style","type","children","duration"]);return c.a.createElement(s.a,Object(a.a)({},v,{duration:b,mask:!1,maskClose:!1,popupClassName:n+"-popup",popupContentCLassName:n+"-wrapper"}),c.a.createElement("div",{className:o()(n,r),style:l,"data-type":d},c.a.createElement("div",{className:n+"-icon"},function(e){switch(e){case"error":return c.a.createElement(i.a,{icon:"warn"});case"info":return c.a.createElement(i.a,{icon:"info"});case"loading":return c.a.createElement(u.b,null);default:return c.a.createElement(i.a,{icon:"success"})}}(d)),c.a.createElement("div",{className:n+"-msg"},p)))})),d=n("Qn9w"),p=function(){function e(){}return e.success=function(e,t,n){return Object(d.a)(m,Object.assign({},n,{children:e,duration:t,type:"success"}))},e.fail=function(e,t,n){return Object(d.a)(m,Object.assign({},n,{children:e,duration:t,type:"error"}))},e.info=function(e,t,n){return Object(d.a)(m,Object.assign({},n,{children:e,duration:t,type:"info"}))},e.loading=function(e,t,n){return Object(d.a)(m,Object.assign({},n,{children:e,duration:t,type:"loading"}))},e}();t.a=p},lf5R:function(e,t,n){"use strict";var a=n("mrSG"),r=n("TSYQ"),o=n.n(r),l=n("q1tI"),c=n.n(l),i=n("ReSL"),u=n("6yG6"),s=n("RvQ8"),m=n("Vy3d"),d=(n("8nBe"),c.a.forwardRef((function(e,t){var n=e.prefixCls,r=void 0===n?"weui-input":n,l=e.className,u=e.style,s=e.type,m=void 0===s?"text":s,d=(e.defaultValue,e.onBlur),p=e.onChange,f=Object(a.c)(e,["prefixCls","className","style","type","defaultValue","onBlur","onChange"]),b=o()(r,l),v=Object(i.c)(e,"value","defaultValue"),y=v[0],C=v[1],h=v[2];return f.style=u,f.ref=t,c.a.createElement("input",Object(a.a)({},f,{type:m},h?{value:y||""}:{defaultValue:y},{"aria-disabled":e.disabled,className:b,onChange:function(t){var n;n=t.target.value,e.disabled||(h||C(n),p&&p(n))},onBlur:function(e){d&&d(e),document.body.scrollTop=0,document.documentElement.scrollTop=0}}))}))),p=c.a.memo(d);function f(e){return e?parseFloat(e):null}t.a=c.a.memo((function(e){var t=Object(l.useContext)(u.a),n=t&&t.formMethods,r=e.type,d=e.prefixCls,b=e.className,v=e.style,y=e.id,C=e.name,h=e.value,g=e.defaultValue,E=e.placeholder,j=e.autoFocus,w=e.tabIndex,O=e.onFocus,N=e.onBlur,x=e.onKeyDown,S=e.onChange,V=e.onCompositionStart,k=e.onCompositionEnd,q=e.pattern,T=e.maxLength,R=e.clearable,F=void 0!==R&&R,I=e.converNumber,M=void 0!==I&&I,_=Object(a.c)(e,["type","prefixCls","className","style","id","name","value","defaultValue","placeholder","autoFocus","tabIndex","onFocus","onBlur","onKeyDown","onChange","onCompositionStart","onCompositionEnd","pattern","maxLength","clearable","converNumber"]),B=Object(l.useState)(!1),L=B[0],Q=B[1],D=Object(l.useRef)(null),G={type:r,prefixCls:d,style:v,id:y,name:C,value:h,defaultValue:g,placeholder:E,autoFocus:j,tabIndex:w,onFocus:function(t){window.clearTimeout(D.current),O&&O(t);n&&e.prop&&n.getFieldValue(e.prop)&&!L&&Q(!0)},onBlur:function(e){N&&N(e);D.current=setTimeout((function(){L&&Q(!1)}),50)},onKeyDown:x,onChange:function(e){e?L||Q(!0):L&&Q(!1);S&&S(e)},onCompositionStart:V,onCompositionEnd:k,pattern:q,maxLength:T};"disabled"in e&&(G.disabled=e.disabled),M&&"number"===e.type&&!e.normalize&&(_.normalize=f);var K=c.a.createElement("a",{className:o()("weui-btn_reset weui-btn_icon weui-btn_input-clear",{visible:L&&F}),onClick:function(){n&&e.prop&&n.setFieldValue(e.prop,"")}},c.a.createElement(m.a,{icon:"clear"}));return Object(i.e)((function(){window.clearTimeout(D.current)})),c.a.createElement(s.a,Object(a.a)({},_,{className:o()(b,"input-item"),footer:_.footer||K}),c.a.createElement(p,Object(a.a)({},G)))}))},mHR9:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("Ty5D"),l=n("gKhg"),c=n("lp3i"),i=n("bVAN"),u=n("qqMo"),s=n("ECzo"),m=n("lf5R"),d=n("6yG6");function p(e){var t=e.children,n=Object(a.useContext)(d.a),o=Object(a.useState)(null),l=o[0],c=o[1];return r.a.cloneElement(t,{onClick:function(e){c(!0),n.formMethods.submit(!0).then((function(){c(!1)})).catch((function(){c(!1)})),e.stopPropagation(),e.preventDefault()},loading:l})}var f={phone:[{name:"Required",errMsg:"{{NAME}}必填"},{name:"PhoneNo"}],name:[{name:"Required",errMsg:"{{NAME}}必填"}]};t.default=Object(o.f)((function(e){var t=e.history;return r.a.createElement(i.a,{title:"表单标题",desc:"表单说明",validConfig:f,onSubmit:function(e){console.log(e);var t=l.a.loading("登录中...",0);return new Promise((function(e,n){setTimeout((function(){t(),Object(c.a)({type:"success",children:"登陆成功"}),e()}),600)}))},opr:r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null,r.a.createElement(u.a,{type:"primary"},"登 录")),r.a.createElement(u.a,{onClick:function(){return t.goBack()}},"返回"))},r.a.createElement(s.a,null,r.a.createElement(m.a,{prop:"phone",label:"手机号",type:"number",clearable:!0,placeholder:"请输入11位手机号",pattern:"[0-9]*",maxLength:11}),r.a.createElement(m.a,{prop:"name",label:"姓名",placeholder:"请输入您的真实姓名"})))}))}}]);
//# sourceMappingURL=11.chunk.js.map