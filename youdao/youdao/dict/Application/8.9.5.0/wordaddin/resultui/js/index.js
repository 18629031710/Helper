/* generated @ 2018-11-1 14:16:32*/
"use strict";require.config({paths:{common:"methods/common",methods:"methods/index"}}),require(["common"],function(e){require(["methods"],function(e){var o=!1,n=1,t=null;window.SetPage=function(t,i,r){var d=$.parseJSON(i)||{};$("#app").css({zoom:r||1}),1==t&&(window.allStart=0,window.allEnd=0,window.sumText="",n=1,$("#app").empty(),$("#app_original").empty()),d.remain<=0?o=!0:n+=1,$("#loader").hide(),e.render(d)},$(window).on("scroll",function(){var e=$(window).scrollTop()+$(window).height(),i=document.documentElement.scrollHeight;if(e>=i-10){if(t&&(clearTimeout(t),t=""),o)return;n>=2&&($(".loader-start").text(1e4*(n-1)),$(".loader-end").text(1e4*n),$("#loader").show()),t=setTimeout(function(){window.external.GetPage(n)},50)}})})});