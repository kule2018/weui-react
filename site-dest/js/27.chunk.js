(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{Vy3d:function(e,n,t){"use strict";var a=t("q1tI"),c=t.n(a),o=t("TSYQ"),r=t.n(o);t("0CdP");n.a=c.a.memo((function(e){var n=e.prefixCls,t=void 0===n?"weui-icon":n,a=e.className,o=e.style,i=e.onClick,l=e.icon,u=e.spin,s=void 0!==u&&u,f=e.children,m="string"==typeof l,d=l;return c.a.createElement("i",{className:r()(t,a,m?t+"-"+l:null,{spin:s}),style:o,onClick:i},!m&&c.a.createElement(d,null),f)}))},"c+ia":function(e,n,t){"use strict";t.r(n);var a=t("mrSG"),c=t("q1tI"),o=t.n(c),r=t("a9X4"),i=t("TSYQ"),l=t.n(i),u=t("ReSL"),s=t("plWM"),f=t("d8CH"),m=t("Vy3d"),d=(t("e52A"),o.a.forwardRef((function(e,n){var t=e.prefixCls,a=void 0===t?"weui-search-bar":t,r=e.className,i=e.style,s=e.placeholder,f=void 0===s?"搜索":s,d=e.onChange,b=e.onConfirm,v=e.autoFocus,C=void 0!==v&&v,p=e.onCancel,h=e.onSearch,E=e.delay,j=void 0===E?200:E,O=e.backfill,k=void 0===O||O,y=Object(u.c)(e,"value","defaultValue"),g=y[0],N=y[1],S=y[2],w=Object(c.useRef)(!1),_=Object(c.useRef)(""),V=Object(c.useState)(C),R=V[0],F=V[1],P=n||Object(c.useRef)(null);function x(e){S||N(e),d&&d(e)}function T(e){void 0===e&&(e=!1);var n=P.current;n&&(e?n.blur():n.focus())}return Object(u.d)((function(){h&&(k?!1===w.current&&h(g):h(g))}),j,[_.current]),Object(c.useEffect)((function(){C&&T()}),[C]),Object(c.useEffect)((function(){R&&T()}),[R,P.current]),o.a.createElement("div",{className:l()(a,r,{focus:R}),style:i},o.a.createElement("form",{className:a+"__form",onSubmit:function(e){return b&&b(g),e.stopPropagation(),e.preventDefault(),!1}},o.a.createElement("div",{className:a+"__box"},o.a.createElement(m.a,{icon:"search"}),o.a.createElement("input",{ref:P,type:"search",className:a+"__input",placeholder:f,autoFocus:C,onChange:function(e){var n=e.target.value;_.current=n,x(n)},onFocus:function(e){F(!0)},value:g||"",onCompositionStart:function(e){w.current=!0},onCompositionEnd:function(e){w.current=!1}}),o.a.createElement(m.a,{icon:"clear",onClick:function(e){x(null),T()}})),o.a.createElement("label",{className:a+"__label",onClick:function(){return F(!0)}},o.a.createElement(m.a,{icon:"search"}),o.a.createElement("span",null,f))),o.a.createElement("a",{className:a+"__cancel-btn",onClick:function(){p&&p(),F(!1),x(null)}},"取消"))}))),b=o.a.memo(d);var v=o.a.memo((function(e){var n=e.data,t=void 0===n?[]:n,c=e.children,r=(e.visible,e.defaultVisible,e.onVisibleChange),i=e.onPicker,m=e.conver,d=Object(a.c)(e,["data","children","visible","defaultVisible","onVisibleChange","onPicker","conver"]),v=Object(u.c)(e,"visible","defaultVisible"),C=v[0],p=v[1],h=v[2],E=Object(u.c)(e,"value","defaultValue"),j=E[0],O=E[1],k=E[2];function y(n){k||O(n),e.onChange&&e.onChange(n)}function g(e){h||p(e),r&&r(e)}function N(n){y(m?m(n):n+""),i&&i(n),e.onConfirm&&e.onConfirm(n),g(!1)}return o.a.createElement("div",{className:l()("container search-panel",{show:C})},o.a.createElement(b,Object(a.a)({},d,{value:j,autoFocus:C,onChange:y,onCancel:function(){return g(!1)},onConfirm:N})),o.a.createElement(s.a,{className:"searchbar-result"},t.map((function(e,n){return o.a.createElement(f.a,{key:n,onClick:function(){return N(e)}},c(e,n))}))))})),C=t("Ty5D"),p=["建设银行","农业银行"];n.default=Object(C.f)((function(e){var n=e.history,t=Object(c.useState)(p),i=t[0],l=t[1];return o.a.createElement(r.a,{title:"Search",introduce:"搜索"},o.a.createElement(v,{visible:!0,data:i,onSearch:function(e){l(e?Object(a.d)([e+"银行"],p):p)},onConfirm:function(){return n.goBack()}},(function(e){return o.a.createElement("span",null,e)})))}))},e52A:function(e,n,t){}}]);
//# sourceMappingURL=27.chunk.js.map