(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{279:function(t,r,e){},302:function(t,r,e){"use strict";var o=e(279);e.n(o).a},323:function(t,r,e){"use strict";e.r(r);e(79);var o=e(34),n={components:{QrcodeStream:e(272).QrcodeStream},data:function(){return{torchActive:!1,torchNotSupported:!1}},computed:{icon:function(){return this.torchActive?"/flash-off.svg":"/flash-on.svg"}},methods:{onInit:function(t){var r=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t;case 3:o=e.sent,n=o.capabilities,console.log(n),r.torchNotSupported=!n.torch,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},c=(e(302),e(33)),a=Object(c.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[t.torchNotSupported?e("p",{staticClass:"error"},[t._v("\n    Torch not supported for active camera\n  ")]):t._e(),t._v(" "),e("qrcode-stream",{attrs:{torch:t.torchActive},on:{init:t.onInit}},[e("button",{attrs:{disabled:t.torchNotSupported},on:{click:function(r){t.torchActive=!t.torchActive}}},[e("img",{attrs:{src:t.$withBase(t.icon),alt:"toggle torch"}})])])],1)}),[],!1,null,"c94b3070",null);r.default=a.exports}}]);