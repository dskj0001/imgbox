﻿(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-pay-detail"],{"1fe8":function(t,e,n){"use strict";n.r(e);var r=n("65da"),o=n("a615");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("9d81");var a,c=n("f0c5"),u=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,"7e0d7107",null,!1,r["a"],a);e["default"]=u.exports},"3d97":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".pay[data-v-7e0d7107]{width:100%;height:100vh}.pay .money[data-v-7e0d7107]{color:#ffdeb3;z-index:3;font-size:17px;text-align:center;margin-top:150px;margin-bottom:100px}.pay .buttons[data-v-7e0d7107]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.pay .button[data-v-7e0d7107]{background:#fae2b2;border-radius:17px;color:#d35b4d;display:inline-block;width:50%;height:35px;font-weight:bolder;font-size:15px;margin-bottom:6px;line-height:2.3}",""]),t.exports=e},"65da":function(t,e,n){"use strict";var r,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"pay",style:t.style},[n("v-uni-view",{staticClass:"buttons"},[n("v-uni-view",{staticClass:"money"}),n("v-uni-button",{staticClass:"button",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pay()}}},[t._v(t._s(t.price)+"元单片观看")]),t.sponsorship?n("v-uni-button",{staticClass:"button",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.paySponsorship()}}},[t._v(t._s(t.sponsorshipPrice)+"元包天观看")]):t._e(),t.monthly?n("v-uni-button",{staticClass:"button",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.payMonthly()}}},[t._v(t._s(t.monthlyPrice)+"元包月观看")]):t._e(),n("v-uni-button",{staticClass:"button",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jumpIndex()}}},[t._v("更多视频")])],1)],1)},i=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}))},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"===typeof t,h=e.regeneratorRuntime;if(h)s&&(t.exports=h);else{h=e.regeneratorRuntime=s?t.exports:{},h.wrap=x;var l="suspendedStart",f="suspendedYield",d="executing",p="completed",y={},v={};v[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(M([])));m&&m!==r&&o.call(m,a)&&(v=m);var w=k.prototype=L.prototype=Object.create(v);_.prototype=w.constructor=k,k.constructor=_,k[u]=_.displayName="GeneratorFunction",h.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},h.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},h.awrap=function(t){return{__await:t}},E(P.prototype),P.prototype[c]=function(){return this},h.AsyncIterator=P,h.async=function(t,e,n,r){var o=new P(x(t,e,n,r));return h.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},E(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},h.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},h.values=M,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:M(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),y}}}function x(t,e,n,r){var o=e&&e.prototype instanceof L?e:L,i=Object.create(o.prototype),a=new N(r||[]);return i._invoke=j(t,n,a),i}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function L(){}function _(){}function k(){}function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function P(t){function e(n,r,i,a){var c=b(t[n],t,r);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"===typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(s).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}var n;function r(t,r){function o(){return new Promise((function(n,o){e(t,r,n,o)}))}return n=n?n.then(o,o):o()}this._invoke=r}function j(t,e,n){var r=l;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return G()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var c=S(a,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=b(t,e,n);if("normal"===u.type){if(r=n.done?p:f,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}function S(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,S(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=b(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function M(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:G}}function G(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9d81":function(t,e,n){"use strict";var r=n("f8a0"),o=n.n(r);o.a},a615:function(t,e,n){"use strict";n.r(e);var r=n("b2ed"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},b2ed:function(t,e,n){"use strict";(function(t){var r=n("ee27");n("c975"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var o=r(n("c964")),i={data:function(){return{tag:"",sponsorship:!1,monthly:!1,sponsorshipPrice:0,monthlyPrice:0,price:0,style:"",payment:1,payDomain:"",executeName:"",executeMenthod:""}},onLoad:function(t){this.tag=t.zykey,this.loadDetails(),this.loadPayDomain(),this.style="background: url(http://cdnzhuque.wanghongxi666.com/paylogo.jpg) center center / cover  no-repeat;"},methods:{loadDetails:function(){var e=this;return(0,o.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e,e.$api.post("/v1/api/video/details",{videoId:e.tag,agentId:uni.getStorageSync("agentId")}).then((function(t){var n=t.data.code,r=t.data.data;0==n&&(e.sponsorship=0==r.sponsorship,e.monthly=0==r.monthly,e.sponsorshipPrice=r.sponsorshipPrice,e.monthlyPrice=r.monthlyPrice,e.price=r.price,e.payment=r.payment,e.executeName=r.executeName,e.executeMenthod=r.executeMenthod)})).catch((function(e){t.log(e)}));case 2:case"end":return n.stop()}}),n)})))()},loadPayDomain:function(){var e=this;this.$api.post("/v1/api/pay/domain",{}).then((function(t){var n=t.data.code,r=t.data.data;0==n&&(e.payDomain=r)})).catch((function(e){t.log(e)}))},jumpIndex:function(){uni.reLaunch({url:"/pages/index/index"})},pay:function(){uni.showLoading({title:"生成订单中"});var t=window.location.href.substring(0,window.location.href.indexOf("pages"))+"pages/detail/detail";this.paymethod(1,t)},paySponsorship:function(){uni.showLoading({title:"生成订单中"});var t=window.location.href.substring(0,window.location.href.indexOf("pages"))+"pages/detail/detail";this.paymethod(2,t)},payMonthly:function(){uni.showLoading({title:"生成订单中"});var t=window.location.href.substring(0,window.location.href.indexOf("pages"))+"pages/detail/detail";this.paymethod(3,t)},paymethod:function(e,n){if(t.log(1111),t.log(this.payment),"native"==this.executeName)uni.navigateTo({url:"/pages/pay/wxpay?videoId="+this.tag+"&category="+e});else if("Get"==this.executeMenthod){var r="http://"+this.payDomain+"/v1/api/pay/"+this.executeName+"?videoId="+this.tag+"&agentId="+uni.getStorageSync("agentId")+"&userId="+uni.getStorageSync("userid")+"&category="+e+"&domain="+n;window.location=r}else if("Post"==this.executeMenthod){var o="/v1/api/pay/"+this.executeName;this.$api.post(o,{videoId:this.tag,agentId:uni.getStorageSync("agentId"),userId:uni.getStorageSync("userid"),category:e,domain:n}).then((function(t){uni.hideLoading();var e=t.data.code,n=t.data.data;0==e&&(window.location.href=n.pay_url)})).catch((function(e){uni.hideLoading(),t.log(e)}))}}}};e.default=i}).call(this,n("5a52")["default"])},c964:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));n("d3b7"),n("e6cf");function r(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}},f8a0:function(t,e,n){var r=n("3d97");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("4f06").default;o("27612cd7",r,!0,{sourceMap:!1,shadowMode:!1})}}]);