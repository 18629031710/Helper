/* generated @ 2018-01-17 16:21:10*/
!function(e){function t(n){if(o[n])return o[n].exports;var a=o[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}({0:function(e,t,o){e.exports=o(363)},2:function(e,t,o){"use strict";o(3),o(8),o(10),o(11),o(12),o(14)},3:function(e,t){},8:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t;e.jquery?(t=e,e=e[0]):t=$(e);var o={keyfrom:"deskdict.main"};_.each(e.attributes,function(e){var n=e.name;if(/^data-log-/.test(n)){var a=e.value;if(!a)return;var r=n.substring(9);if("^"==a){var i=t.parents("["+n+"]");if(0==i.length)return void(e.value="");a=i[0].getAttribute(n),e.value=a,o[r]=a}else o[r]=a}}),ydk.rlog(o)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var r=o(9),i=n(r);$(document).on("click","[data-log-action]",function(){a(this)}),$(function(){i["default"].pageId&&setTimeout(function(){ydk.rlog({show:i["default"].pageId,version:new Date(i["default"].version).format("yyyy-MM-dd HH:mm:ss")})},100)})},9:function(e,t){"use strict";e.exports={version:1516177272813,debug:!1,platform:"win",serverInfoLine:"http://dict.youdao.com/infoline",swPathPrefix:"frame:mainFrame://",vipUrl:"https://dict.youdao.com/vip"}},10:function(e,t){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e){return _.omit(e,function(e){return _.isFunction(e)})};ydk.extend({rlog:function(e){ydk._invoke("rlog",n(e),e)},getInfoLineData:function(e){ydk._invoke("getInfoLineData",e.data,e)},setKeyword:function(e){ydk._invoke("setKeyword",e,e)},getKeyword:function(e){ydk._invoke("getKeyword",e,e)},onKeywordChanged:function(e){ydk._on("onKeywordChanged",{},e)},onKeywordSubmit:function(e){ydk._on("onKeywordSubmit",{},e)},getDictResult:function(e){ydk._invoke("getDictResult",e.data,e)},getTranslateResult:function(e){ydk._invoke("getTranslateResult",e.data,e)},getSimsentResult:function(e){ydk._invoke("getSimsentResult",e.data,e)},onTriggerNativeEvent:function(e){ydk._on("onTriggerNativeEvent",{},e)},getSetting:function(e){ydk._invoke("getSetting",{},e)},saveSetting:function(e){ydk._invoke("saveSetting",{setting:e.setting},e)},closeSuggest:function(e){ydk._invoke("closeSuggest",{},e)},onNativeKeyDown:function(e){ydk._on("onNativeKeyDown",{},e)},copyToClipboard:function(e){ydk._invoke("copyToClipboard",{content:e.content},e)},onBroadcast:function(e){e._complete=function(e){"json"==e.data.format&&"string"==typeof e.data.data&&(e.data.data=JSON.parse(e.data.data))},ydk._on("onBroadcast",{},e)},broadcast:function(e){var t=e.data,n="string";"object"==("undefined"==typeof t?"undefined":o(t))&&(t=JSON.stringify(t),n="json"),ydk._invoke("broadcast",{type:e.type,format:n,data:t},e)},onHistory:function(e){ydk._on("onHistory",{},e)},setHasHistory:function(e){ydk._invoke("setHasHistory",{has:e.has},e)},onCornerPopupShow:function(e){ydk._on("onCornerPopupShow",{},e)},showCornerPopup:function(e){ydk._invoke("showCornerPopup",{},e)},onStrokeResult:function(e){ydk._on("onStrokeResult",{},e)},setStroke:function(e){ydk._invoke("setStroke",n(e),e)},closeWin:function(e){ydk._invoke("closeWin",n(e),e)},checkUpdate:function(e){ydk._invoke("checkUpdate",{},e)},setWinHeight:function(e){ydk._invoke("setWinHeight",n(e),e)},setWinSize:function(e){ydk._invoke("setWinSize",n(e),e)},onSettingChange:function(e){ydk._on("onSettingChange",{},e)},setTop:function(e){ydk._invoke("setTop",{},e)},checkWordBook:function(e){ydk._invoke("checkWordBook",{word:e.word,lang:e.lang},e)},removeFromWordBook:function(e){ydk._invoke("removeFromWordBook",n(e),e)},addToWordBook:function(e){ydk._invoke("addToWordBook",n(e),e)},updateToWordBook:function(e){ydk._invoke("updateToWordBook",n(e),e)},syncWordBook:function(e){ydk._invoke("syncWordBook",{},e)},queryWordBook:function(e){ydk._invoke("queryWordBook",n(e),e)},onWordBookChanged:function(e){ydk._on("onWordBookChanged",{},e)},queryWordBookCategory:function(e){ydk._invoke("queryWordBookCategory",n(e),e)},addWordBookCategory:function(e){ydk._invoke("addWordBookCategory",n(e),e)},updateWordBookCategory:function(e){ydk._invoke("updateWordBookCategory",n(e),e)},removeWordBookCategory:function(e){ydk._invoke("removeWordBookCategory",n(e),e)},importToWordBook:function(e){ydk._invoke("importToWordBook",n(e),e)},queryWordBookForReview:function(e){ydk._invoke("queryWordBookForReview",n(e),e)},reviewWordBook:function(e){ydk._invoke("reviewWordBook",n(e),e)},exportFromWordBook:function(e){ydk._invoke("exportFromWordBook",n(e),e)},cancleExportFromWordBook:function(e){ydk._invoke("cancleExportFromWordBook",n(e),e)},setWordBookCategory:function(e){ydk._invoke("setWordBookCategory",n(e),e)},setWordBookPlan:function(e){ydk._invoke("setWordBookPlan",n(e),e)},minimizeWin:function(){ydk._invoke("minimizeWin",{},{})},setDebug:function(e){ydk._invoke("setDebug",n(e),e)},setWinMove:function(e){ydk._invoke("setWinMove",{},e)},showWin:function(e){ydk._invoke("showWin",{},e)},getOcrModelList:function(e){ydk._invoke("getOcrModelList",{},e)},downloadOcrModel:function(e){ydk._invoke("downloadOcrModel",n(e),e)},removeOcrModel:function(e){e=n(e),ydk._invoke("removeOcrModel",e,e)},onDownloadProgress:function(e){ydk._on("onDownloadProgress",{},e)},downloadBrowserPlugin:function(e){e=n(e),ydk._invoke("downloadBrowserPlugin",e,e)},onPageLoadStart:function(e){ydk._on("onPageLoadStart",{},e)},saveCache:function(e){e=n(e),ydk._invoke("saveCache",n(e),e)},getCache:function(e){ydk._invoke("getCache",n(e),e)},removeCache:function(e){e=n(e),ydk._invoke("removeCache",e,e)},clearCache:function(e){e=n(e),ydk._invoke("clearCache",e,e)},openWin:function(e){e=n(e),ydk._invoke("openWin",e,e)},playNativeVoice:function(e){e=n(e),ydk._invoke("playNativeVoice",e,e)},stopNativeVoice:function(e){ydk._invoke("stopNativeVoice",{},{})},setQueryFocus:function(e){ydk._invoke("setQueryFocus",{},{})},setQuerySelectAll:function(e){ydk._invoke("setQuerySelectAll",{},{})},onLoginStatusChanged:function(e){ydk._on("onLoginStatusChanged",{},e)},onHotKey:function(e){ydk._on("onHotKey",{},e)},updateWinZOrder:function(e){ydk._invoke("updateWinZOrder",{},e)},getOfflineLexiconList:function(e){ydk._invoke("getOfflineLexiconList",{},e)},downloadOfflineLexicon:function(e){ydk._invoke("downloadOfflineLexicon",n(e),e)},removeOfflineLexicon:function(e){ydk._invoke("removeOfflineLexicon",n(e),e)},onLoadOfflineLexiconProgress:function(e){ydk._on("onLoadOfflineLexiconProgress",{},e)},stopLoadOfflineLexicon:function(e){ydk._invoke("stopLoadOfflineLexicon",e,e)},onVipInfoGot:function(e){ydk._on("onVipInfoGot",{},e)},refreshVipInfo:function(e){ydk._invoke("refreshVipInfo",{},e)},getProfile:function(e){ydk._invoke("getProfile",{},e)},setProfile:function(e){ydk._invoke("setProfile",n(e),e)},checkNickname:function(e){ydk._invoke("checkNickname",n(e),e)},getNickname:function(e){ydk._invoke("getNickname",{},e)},clearHistory:function(e){ydk._invoke("clearHistory",{},e)},addHistory:function(e){ydk._invoke("addHistory",n(e),e)},setNickname:function(e){ydk._invoke("setNickname",n(e),e)}})},11:function(e,t){"use strict";ydk.onPageVisibilityChange({success:function(e){e.hidden&&ydk.stopVoice({})}})},12:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var a=o(13),r=n(a),i=o(9),d=n(i);ydk.config({debug:!1,jsApiList:["checkJsApi","getClientInfo","getNetworkType","getOrientationStatus","onOrientationChange","share","playVoice","pauseVoice","stopVoice","onVoicePlayEnd","onVoicePlayProgress","downloadImage","ajax","isLogin","login","getUserInfo","onVipInfoGot","rlog","onPageVisibilityChange","onKeywordChanged","onNativeKeyDown","copyToClipboard","getNetworkType","onNetStatusChange","broadcast","onBroadcast","setHasHistory","onHistory","onCornerPopupShow","onStrokeResult","onSettingChange","onPageLoadStart","openWin","playNativeVoice","stopNativeVoice"]}),ydk.getClientInfo({success:function(e){d["default"].debug&&(e.debug=!0),ydk.client=e,r["default"].trigger("ydk.ready",e)}})},13:function(e,t){"use strict";var o={},n=function(e,t){for(var o=e.length,n=[],a=t;a<o;a++)n.push(e[a]);return n};e.exports={one:function(e,t){o[e]?o[e][0].push(t):o[e]=[[t],[]]},bind:function(e,t){o[e]?o[e][1].push(t):o[e]=[[],[t]]},trigger:function(e){var t=n(arguments,1),a=o[e];if(a){var r=this;$.each(a[0],function(e,o){o.apply(r,t)}),$.each(a[1],function(e,o){o.apply(r,t)}),a[0]=[]}}}},14:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){if(e.debug){var t=$('<a href="frame:mainFrame://ydk.html" class="_dev_flag"></a>');t.text(new Date(u["default"].version).format("yyyy-MM-dd HH:mm:ss")).appendTo(document.body)}}var r=o(13),i=n(r),d=o(9),u=n(d);i["default"].one("ydk.ready",a)},16:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){return!!e&&c.test(e)}function r(e){return a(e)?e.replace(/\?/,"&").replace(c,u["default"].swPathPrefix+"sw/pc.html?pid="):e}function i(e){return a(e)?e.replace(/\?/,"&").replace(c,"sw://?pid="):e}Object.defineProperty(t,"__esModule",{value:!0}),t.prefix=void 0,t.is=a,t.toNative=r,t.toProtocol=i;var d=o(9),u=n(d),c=t.prefix=new RegExp("^http[s]?://[a-zA-Z0-9]+.youdao.com/sw/m/")},32:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o(33),t["default"]=function(e){return{props:{filter:Function,data:Object},template:"<template-scope>"+e()+"</template-scope>",created:function(){var e=this,t=e._scope||e.$parent,o=e.data;if(e.$refs=t.$refs,e.$els=t.$els,o){e.filter&&(o=e.filter(o));var n=Object.create(t);n.$refs=Object.create(t.$refs),n.$els=Object.create(t.$els),n.$parent=t,n=_.extend(n,o),e._scope=n}else o=t;o&&(Vue["delete"](e,"data"),Vue["delete"](e,"filter"),e.$data=o)}}}},33:function(e,t){"use strict";var o=Vue.FragmentFactory,n=(Vue.util.remove,Vue.util.before,Vue.util.replace),a=(Vue.util.defineReactive,Vue.util.createAnchor),r=(Vue.util.extractContent,Vue.elementDirective("slot"));Vue.directive("if");Vue.elementDirective("template-scope",{priority:r.priority,bind:function(){var e=this;e._html=e.el.innerHTML,e.anchor=a("v-template-scope"),n(e.el,e.anchor),e.insert()},unbind:function(){var e=this;e.unlink&&e.unlink(),e.frag&&e.frag.destroy()},insert:function(){var e=this;e.factory=new o(e.vm,e._html);var t=e.vm._scope;e.frag=e.factory.create(e._host,t,e._frag),e.frag.before(e.anchor)}})},50:function(e,t){"use strict";function o(e){var t=e,o={};if(!t)return o;t=t.replace(/^[?]{1}|[#]{1}.*$/g,"").split("&");for(var n=0,a=t.length;n<a;n++){var r=t[n].split("=");o[r[0]]=decodeURIComponent(r[1])}return o}Object.defineProperty(t,"__esModule",{value:!0});var n=o(window.location.search);t.get=o;t["default"]=n},51:function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"local";switch(o){case"local":c["default"].trigger("modules/broadcast/"+e,t);break;case"frame":l.trigger("modules/broadcast/"+e,t);break;case"top":l.triggerTop("modules/broadcast/"+e,t);break;case"all":p.trigger("modules/broadcast/"+e,t)}}function i(e,t){c["default"].bind("modules/broadcast/"+e,t)}function d(e,t){c["default"].one("modules/broadcast/"+e,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.emit=r,t.on=i,t.one=d;var u=o(13),c=a(u),s=o(52),l=n(s),f=o(53),p=n(f)},52:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(){var e=l(arguments);d["default"].trigger.apply(this,e),c?f(JSON.stringify(e)):top.postMessage({_seq:++s,dictbroadcast:JSON.stringify(e)},"/")}function r(){var e=l(arguments);top!=u&&top.postMessage({_seq:++s,scope:"top",dictbroadcast:JSON.stringify(e)},"/")}Object.defineProperty(t,"__esModule",{value:!0}),t.trigger=a,t.triggerTop=r;var i=o(13),d=n(i),u=window,c=u==top,s=(new Date).getTime()+1e5*Math.random(),l=function(e){for(var t=e.length,o=new Array(t);t--;)o[t]=e[t];return o},f=function(e){for(var t=u.frames.length,o=0;o<t;o++)try{u.frames[o].postMessage({_seq:++s,dictbroadcast:e},"/")}catch(n){console.error(n)}};u.addEventListener("message",function(e){if(e.data.dictbroadcast){var t=u.frames.length;if(c){for(var o=!1,n=0;n<t;n++)if(e.source==u.frames[n]){o=!0;break}if(!o&&location.protocol!=e.source.location.protocol)return}else if(e.source!=top&&location.protocol!=e.source.location.protocol)return;try{d["default"].trigger.apply(this,JSON.parse(e.data.dictbroadcast))}catch(e){console.error(e)}"top"!=e.data.scope&&f(e.data.dictbroadcast)}},!1)},53:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var a=o(13),r=n(a);t.trigger=function(e,t){ydk.broadcast({type:e,data:t})},$(function(){ydk.onBroadcast({success:function(e){r["default"].trigger.call(null,e.data.type,e.data.data)}})})},60:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){ydk.client?e(ydk.client):i["default"].one("ydk.ready",e)}Object.defineProperty(t,"__esModule",{value:!0}),t.autoHeight=t.autoSize=void 0,t.ready=a;var r=o(13),i=n(r),d=$("html"),u=window.devicePixelRatio||1;t.autoSize=_.throttle(function(){Vue.nextTick(function(){ydk.setWinSize({width:Math.ceil(d.width()*u),height:Math.ceil(d.height()*u)})})},100),t.autoHeight=_.throttle(function(){Vue.nextTick(function(){ydk.setWinHeight({height:Math.ceil(d.height()*u)})})},100)},63:function(e,t,o){"use strict";o(64)},64:function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}var a=o(65),r=n(a);Vue.directive("img",{bind:function(){},update:function(e){var t=this.el;Vue.nextTick(function(){r.isVaild(t,e)&&r.load(t,e)})},unbind:function(){var e=this;e.frag&&e.frag.destroy()}})},65:function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){var o=$(e);return!/^http[s]?:/.test(t)&&t?(o.attr("src",t),!1):(e.src=p,o.width()/o.height()>2?o.attr("src",l):o.attr("src",f),!0)}function i(e,t){t&&ydk.downloadImage({serverId:t,success:function(o){e.src=o.localId?o.localId:t,e.onload=k,e.onerror=g},fail:function(o){s.log(["ydk.downloadImage失败["+o.code+"]：<em>",t,"</em>"]),ydk.rlog({action:"img_load_error",keyfrom:"deskdict.main",page:u["default"].pageId,type:"ydk",des:[o.code,o.errMsg||""].join(",")}),e.src=t,e.onload=k,e.onerror=g}})}Object.defineProperty(t,"__esModule",{value:!0}),t.isVaild=r,t.load=i;var d=o(9),u=a(d),c=o(66),s=n(c),l=o(69),f=o(70),p="data:image/gif;base64,R0lGODlhyAABAIAAAP///wAAACH5BAEAAAAALAAAAADIAAEAAAIMhI+py+0Po5y02usKADs=",g=function(){var e=this,t=$(e);e.onload=e.onerror=null,s.log(["图片加载失败：<em>",e.src,"</em>"]),ydk.rlog({action:"img_load_error",keyfrom:"deskdict.main",page:u["default"].pageId,type:"error",des:e.src}),t.width()/t.height()>2?e.src=l:e.src=f},k=function(){this.onload=this.onerror=null}},66:function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function a(){$("._debug_msg").empty()}Object.defineProperty(t,"__esModule",{value:!0}),t.log=t.stop=t.start=void 0,t.clear=a;var r=o(60),i=n(r);o(67);var d,u,c=function(e){clearTimeout(d),d=setTimeout(function(){e.fadeOut(500,function(){e.remove()})},5e3)},s=(t.start=function(){u=_.now()},t.stop=function(e,t){s([e,"：<em>",_.now()-(t||u),"</em> ms"])},t.log=function(e){i.ready(function(t){if(t.debug){var o=$("._debug_msg");0==o.length&&(o=$('<div class="_debug_msg"></div>'),$("body").append(o)),o.append("<p>"+(_.isArray(e)?e.join(""):e)+"</p>"),c(o)}})});$(function(){i.ready(function(e){e.debug&&$("body").on("mouseenter","._debug_msg",function(){clearTimeout(d)}).on("mouseleave","._debug_msg",function(){c($(this))})})})},67:function(e,t){},69:function(e,t){e.exports="../imgs/iGSrxd_lazy-load-big.jpg"},70:function(e,t){e.exports="../imgs/2ncraS_lazy-load-small.jpg"},123:function(e,t){"use strict";var o=function(e){var t=_.pick(e.params,function(e){return e});ydk.rlog(t)},n=Vue.extend({props:["params"],template:"",watch:{params:_.debounce(function(e){o(this)},1e3)},ready:function(){o(this)}});Vue.component("rlog",n)},138:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}var r=o(51),i=a(r),d=o(9),u=n(d),c=o(50),s=a(c);$(function(){var e=function(e){var t=$(this),o=t.attr("href"),n=o.match(/^(sw|dict|fanyi)\:\/\//);if(n){var a,r,d,c=o.substring(o.indexOf("?"));switch(n[1]){case"dict":r="dict/result",d=s.get(c);break;case"fanyi":r="fanyi",d=s.get(c);break;case"sw":a="sw/pc.html",d=s.get(c);break;default:return}i.emit("open",{url:a,target:r,from:u["default"].pageId,params:d},"all"),ydk.setTop(),e.preventDefault()}};$("body").on("click","a",e)})},177:function(e,t,o){"use strict";o(178)},178:function(e,t){"use strict";!function(e,t){function o(e){for(var t,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n="",a=0;e>a;a++)t=Math.floor(Math.random()*o.length),n+=o[t];return n}function n(){P||(P=o(32),S.setCookie(u,P,365,"/"))}function a(e){return e>20?20:0>=e?1:e}function r(e,t){e=e+(/\?/.test(e)?"&":"?")+"t="+ +new Date;var o=new Image;o.onload=o.onerror=function(){this.onload=this.onerror=null,o=null,k(t)&&t("success")},o.src=e}function i(e){var t=V,o=e?y(e)?e:j(e):"";return o&&(t+=(/\?/.test(t)?"&":"?")+o),t}if(!e.yadk){var d=e.yadk={version:"1.0.5"},u="__yadk_uid",c=window,s=document,l=[],f={},p=f.toString,g=f.hasOwnProperty,k=function(e){return"[object Function]"===p.call(e)},y=function(e){return"[object String]"===p.call(e)},v=function(e){return"[object Object]"===p.call(e)},m=function(e){return"[object Number]"===p.call(e)},_=function(e){return"[object Date]"===p.call(e)},h=function(e,t){return g.call(e,t)},b=l.forEach?function(e,t){e||(e=[]),e.forEach(t)}:function(e,t){e||(e=[]);for(var o=0,n=e.length;n>o;o++)t(e[o],o,e)},w=Object.keys||function(e){var t=[];for(var o in e)h(e,o)&&t.push(o);return t},x=d.formatString=function(e){var o=[].slice.call(arguments,1);return e.replace(/\{(\d+)\}/gi,function(e,n){var a=o[0|n];return a===t?"":a})},O=d.formatDate=function(e,t){if(null==e||!_(e))return e;var o={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),S:e.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in o)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?o[n]:("00"+o[n]).substr((""+o[n]).length)));return t},S={getCookie:function(e){var t=new RegExp("(?:(?:^|.*;\\s*)"+e+"\\s*=\\s*([^;]*).*$)|^.*$"),o=t.exec(document.cookie);return o[1]&&unescape(o[1])},setCookie:function(e,t,o,n){n||(n="/");var a;if(o){var r=new Date;r.setTime(r.getTime()+24*o*60*60*1e3),a=r.toGMTString()}var i=x("{0}={1};expires={2};path={3}",e,escape(t),a,n);document.cookie=i},delCookie:function(e){var t=S.getCookie(e);if(t){var o=new Date;o.setTime(o.getTime()-1),document.cookie=x("{0}={1};expires={2}",e,escape(t),o.toGMTString())}}},j=function(e){if(!v(e))return"";var t=[];return b(w(e),function(o,n){t.push(o+"="+encodeURIComponent(e[o]))}),t.join("&")},C=function(){var e=navigator.userAgent.toLowerCase()||"",t={iphone:0,ipad:1,mac:2,android:3,android_tablet:4,win_tablet:5,windows:6,win_phone:7,linux:8,other:9},o={};o.iphone=/iphone/.test(e),o.ipad=/ipad/.test(e),o.mac=/mac/.test(e),o.mobile=/mobile/.test(e),o.android=/android/.test(e),o.android_tablet=o.android&&!o.mobile,o.windows=/windows/.test(e),o.win_phone=o.windows&&/phone/.test(e),o.win_tablet=o.windows&&!o.win_phone&&/touch/.test(e),o.linux=/linux/.test(e);var n="";switch(!0){case o.iphone:n="iphone";break;case o.ipad:n="ipad";break;case o.mac:n="mac";break;case o.android_tablet:n="android_tablet";break;case o.android:n="android";break;case o.win_phone:n="win_phone";break;case o.win_tablet:n="win_tablet";break;case o.windows:n="windows";break;case o.linux:n="linux";break;default:n="other"}return{name:n,value:t[n],isIOS:o.iphone||o.ipad,isAndroid:o.android||o.android_tablet}}(),M=function(e){return function(t){var o=arguments.length;if(2>o||null==t)return t;for(var n=1;o>n;n++)for(var a=arguments[n],r=w(a),i=r.length,d=0;i>d;d++){var u=r[d];e&&void 0!==t[u]||(t[u]=a[u])}return t}},W=M(),I=d.jsonp=function(){function e(){}function t(e){d=[e]}function o(e,t,o){return e&&e.apply&&e.apply(t.context||t,o)}function n(e){return/\?/.test(e)?"&":"?"}function a(e){return s.createElement(e||"div")}function r(e,t){return t||(t=s),t.getElementsByTagName(e)}function i(r){function i(e){Q++||(X(),K&&(I[q]={s:[e]}),F&&(e=F.apply(r,[e])),o(D,r,[e,S,r]),o(H,r,[r,S,e]))}function s(e){Q++||(X(),K&&e!=C&&(I[q]=e),o(L,r,[r,e]),o(H,r,[r,e]))}r=W({},A,r);var k,v,V,T,$,D=r.success,L=r.error,H=r.complete,F=r.dataFilter,U=r.jsonp,R=r.jsonpCallback+"_"+P++,E=r.cache,K=r.pageCache,G=r.charset,q=r.url,z=r.data,J=r.timeout,Q=0,X=e;return r.abort=function(){!Q++&&X()},q=q||f,z=z?y(z)?z:j(z):f,q+=z?n(q)+z:f,q+=n(q)+U+"="+R,E||K||(q+=n(q)+"_"+(new Date).getTime()),K&&(k=I[q])?k.s?i(k.s[0]):s(k):(c[R]=t,V=a(O),V.id=R,G&&(V[l]=G),B&&B.version()<11.6?(T=a(O)).text="document.getElementById('"+V.id+"')."+_+"()":V[u]=u,N&&(V.htmlFor=V.id,V.event=m),V[h]=V[_]=V[b]=function(e){if(!V[w]||!/i/.test(V[w])){try{V[m]&&V[m]()}catch(t){}e=d,d=0,e?i(e[0]):s(p)}},V.src=q,X=function(e){$&&clearTimeout($),V[b]=V[h]=V[_]=null,M[x](V),T&&M[x](T),c[R]=null},M[g](V,v=M.firstChild),T&&M[g](T,v),$=J>0&&setTimeout(function(){s(C)},J)),r}var d,u="async",l="charset",f="",p="error",g="insertBefore",k="_yad_jsonp",v="on",m=v+"click",_=v+p,h=v+"load",b=v+"readystatechange",w="readyState",x="removeChild",O="script",S="success",C="timeout",M=s.head||r("head")[0],I={},P=0,A={url:location.href,cache:!1,pageCache:!1,charset:"UTF-8",jsonp:"callback",jsonpCallback:k,timeout:0},B=c.opera,N=function(){var e=a();return e.innerHTML="<!--[if IE]><i></i><![endif]-->",!!r("i",e).length}();return i}(),P=S.getCookie(u);n();var A="https:"===location.protocol?"https:":"http:",B=A+"//gorgon.youdao.com/gorgon/request.s",N=A+"//gorgon.youdao.com/gorgon/mimpr.s",V=A+"//conv.youdao.com/api/push/youdao",T={reqfrom:"web",webos:C.value,nsv:d.version},$={},D={UNKNOWN:"UNKNOWN",WIFI:"WIFI","3G":"3G","4G":"4G"},L={UNKNOWN:0,WIFI:2,"3G":3,"4G":3};d.config=function(e){var t=e.nt&&e.nt.replace(/^\s+|\s+$/g,"");if(t)switch(delete e.dct,delete e.ct,delete e.nt,t=t.toUpperCase()){case D["3G"]:case D["4G"]:e.ct=L[t],e.dct="3G"===t?12:13;break;case D.WIFI:case D.UNKNOWN:e.ct=L[t],delete e.dct,delete $.dct;break;default:e.ct=L[D.UNKNOWN],delete e.dct,delete $.dct}return"brandFirst"in e&&(e.brandFirst&&(e.MAGIC_NO=0),delete e.brandFirst),"debug"in e&&e.debug===!0&&(delete e.debug,"reqUrl"in e&&(B=e.reqUrl,delete e.reqUrl),"brandShowedUrl"in e&&(N=e.brandShowedUrl,delete e.brandShowedUrl)),W($,{udid:P},e,T),C.isIOS?($.id=$.iosAdID||$.id,delete $.imei):C.isAndroid?$.id=$.andAdID||$.id:delete $.imei,$},d.fetch=function(e,t){if($.id){k(e)&&(t=e,e=1),!m(e)&&(e=1),e=a(e);var o=W({},$,{ran:e});o.iosAdID&&delete o.iosAdID,o.andAdID&&delete o.andAdID,$.imei&&delete $.udid,I({url:B,data:o,complete:function(e,o,n){!n&&(n=[]),"brand"===(n["X-Cost-Type"]||"").toLowerCase()?(n.isBrand=!0,delete n["X-Cost-Type"]):n.isBrand=!1,k(t)&&t.call(d,n)}})}},d.showed=function(e,t){function o(){++n===e.length&&t&&t()}e||(e=[]);var n=0;b(e,function(e){if("?"===e[0]){var t={type:"brandImpr",imptracker:[e.substr(1)+"#@$"+O(new Date,"yyyyMMddhhmmss")]},n=d.formatString("{0}?s={1}",N,encodeURIComponent(JSON.stringify(t)));r(n,o)}else r(e,o)})},d.downloadStarted=function(e,t){if($.id){var o={slotId:$.id,os:C.name,varaiantId:0};$.imei?o.imei=glboal_config.imei:$.udid&&(o.udid=$.udid),W(o,e,{IDS:0}),r(i(o),t)}},d.downloadEnded=function(e,t){if($.id){var o={slotId:$.id,os:C.name,varaiantId:0};$.imei?o.imei=glboal_config.imei:$.udid&&(o.udid=$.udid),W(o,e,{IDS:1}),r(i(o),t)}}}}(window)},363:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}o(2),o(8),o(138);var r=o(16),i=a(r),d=o(60),u=a(d),c=o(9),s=n(c),l=o(364),f=n(l),p=o(365),g=n(p);o(366),o(374),s["default"].pageId="popup/corner";var k={el:"#main",template:(0,g["default"])(),data:{data:null},methods:{imgloaded:u.autoHeight}};$(function(){var e=new Vue(k);ydk.onCornerPopupShow({complete:u.autoSize,success:function(t){e.data=(0,f["default"])(t),Vue.nextTick(function(){_.delay(function(){ydk.showWin()},500)})}})}),Vue.filter("toNativeUrl",function(e){return i.toProtocol(e)})},364:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t,o=$.parseXML(e.data),i=$("json-result",o).text(),d=$("this-type",o).text();switch(i=JSON.parse(i),d){case"0":t=n(i);break;case"1":t=a(i);break;case"2":t=r(i)}return{type:d,data:t}};var o=function(e){for(var t=[],o=0,n=e.length/3;o<n;o++){var a=3*o,r=e[a],i=e[++a],d=e[++a];t.push({link:r,title:i,sub:d})}return t},n=function(e){return{sw:o(e.titleAndUrls),huihui:e.huihui}},a=function(e){return e},r=function(e){return{title:e.titleAndUrls[0],summary:e.titleAndUrls[1],url:e.titleAndUrls[2]}}},365:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+="<div>\r\n  <template v-if=\"data && data.type == '0'\">\r\n    <card></card>\r\n  </template>\r\n\r\n  <template v-if=\"data && data.type == '1'\">\r\n    <news></news>\r\n  </template> \r\n\r\n  <template v-if=\"data && data.type == '2'\">\r\n    <push></push>\r\n  </template>\r\n</div>";return __p}},366:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}o(123),o(63);var a=o(32),r=n(a),i=o(367),d=n(i),u=o(368),c=n(u),s=o(369),l=n(s);o(370),Vue.component("news",(0,r["default"])(d["default"])),Vue.component("card",(0,r["default"])(c["default"])),Vue.component("push",(0,r["default"])(l["default"]))},367:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<div class="news">\r\n  <h1 class="ellipsis"><a :href="data.data.url" target="_blank" data-log-action="newspop_click" data-log-keyfrom="newspop" :data-log-url="data.data.url" :data-log-des="data.data.title">{{data.data.title}}</h1>\r\n  <p><a :href="data.data.url" target="_blank" data-log-action="newspop_click" data-log-keyfrom="newspop" :data-log-url="data.data.url" :data-log-des="data.data.title">{{data.data.summary}}</a></p>\r\n  <a :href="data.data.url" target="_blank" class="btn" data-log-action="pushpop_click" data-log-keyfrom="pushpop" :data-log-url="data.data.url" :data-log-des="data.data.title">查看详情</a>\r\n</div>\r\n<rlog :params="{\r\n  show : \'newspop_show\' , \r\n  keyfrom : \'newspop\',\r\n  url : data.data.url,\r\n  des : data.data.title\r\n}"></rlog>';return __p}},368:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<promote></promote>\r\n<div class="card" v-if="data">\r\n  <div class="title">双语阅读</div>\r\n  <ol>\r\n    <li v-for="(index,item) in data.data.sw">\r\n      <em>{{index + 1}}.</em>\r\n      <p class="original ellipsis"><a href="{{item.link | toNativeUrl}}" title="{{item.title}}" target="_blank" \r\n      data-index="{{index}}" \r\n      data-log-action="rightpop_detail" \r\n      data-log-keyfrom="rightpop" \r\n      data-log-url="{{item.link}}"\r\n      data-log-des="{{item.title}}"\r\n      data-log-type="kantianxia"\r\n      >{{item.title}}</a></p>\r\n      <p class="sub ellipsis" v-show="item.sub">{{item.sub}}</p>\r\n    </li>\r\n  </ol>\r\n</div>\r\n<div class="card" v-if="data">\r\n  <div class="title">海淘资讯</div>\r\n  <a href="{{data.data.huihui.url}}" target="_blank" data-log-action="rightpop_huihui_click" data-log-keyfrom="rightpop"><img v-img="data.data.huihui.imgUrl" title="{{data.data.huihui.title}}" @load="imgloaded"></a>\r\n</div>\r\n<rlog :params="{\r\n  show : \'rightpop_show\' , \r\n  keyfrom : \'rightpop\'\r\n}"></rlog>';return __p}},369:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<div class="push">\r\n  <h1 class="ellipsis"><a :href="data.data.url" target="_blank" data-log-action="pushpop_click" data-log-keyfrom="pushpop" :data-log-url="data.data.url" :data-log-des="data.data.title">{{data.data.title}}</h1>\r\n  <p><a :href="data.data.url" target="_blank" data-log-action="pushpop_click" data-log-keyfrom="pushpop" :data-log-url="data.data.url" :data-log-des="data.data.title">{{{data.data.summary}}}</a></p>\r\n  <a :href="data.data.url" target="_blank" class="btn" data-log-action="pushpop_click" data-log-keyfrom="pushpop" :data-log-url="data.data.url" :data-log-des="data.data.title">查看详情</a>\r\n</div>\r\n<rlog :params="{\r\n  show : \'push_show\' , \r\n  keyfrom : \'pushpop\',\r\n  url : data.data.url,\r\n  des : data.data.title\r\n}"></rlog>';return __p}},370:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}o(177);var r=o(60),i=a(r),d=o(371),u=n(d);o(372),Vue.component("promote",function(e,t){i.ready(function(t){yadk.config({id:"00d4be7a949d5e9f4af1816d84cb8d79",udid:t.imei||"",brandFirst:1}),yadk.fetch(function(t){e({template:(0,u["default"])(),data:function(){return t},methods:{imgloaded:i.autoHeight}}),yadk.showed(t.imptracker)})})})},371:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<div class="promote" v-if="mainimage || image">\r\n  <a href="{{clktracker}}" target="_blank">\r\n    <img v-img="mainimage || image" @load="imgloaded">\r\n    <span class="tag">广告</span>\r\n  </a>\r\n</div>';return __p}},372:function(e,t){},374:function(e,t){}});