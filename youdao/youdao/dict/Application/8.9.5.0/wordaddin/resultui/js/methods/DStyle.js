/* generated @ 2018-11-1 14:16:32*/
"use strict";require.config({paths:{cssProperties:"methods/cssProperties"}}),define(["cssProperties"],function(e){function t(){this.css=s()}var s=function(){var e=document.createElement("p").style;e=$.extend({},e);for(var t in e){var s=t.replace(/([A-Z])/g,"-$1").toLowerCase();e[s]="",delete e[t],-1!=s.indexOf("webkit")&&delete e[s]}return e};return t.prototype.getCss=function(t){var s=this.css;if(!t)return void this.clear();for(var r=0;r<e.length;r++){var i=e[r],n=i.key,o=i.pro,c=i.unit,a=i.ratio,l=i.subs,u=i.value,p=[];if(l.length>1){for(var v=0;v<l.length;v++)if(t[n]&&t[n][l[v]]){var u=t[n][l[v]];p.push(u);var f=p.join(",").replace(/"/gi,'"');s[o]=""+f}}else t[n]&&void 0!==t[n][l[0]]&&(s[o]=t[n][l[0]]+c,"sz"==n&&(s[o]=Math.max(t[n][l[0]]*a,12)+c),"ind"==n&&(s[o]=t[n][l[0]]*a+c),("u"==n||"i"==n||"b"==n||"strike"==n)&&(s[o]=u),("color"==n||"shd"==n)&&(s[o]="#"+t[n][l[0]]),"vertAlign"==n&&(s[o]="superscript"==t[n][l[0]]?"super":"sub"))}this.css=s,this.clear()},t.prototype.clear=function(){var e=this.css;for(var t in e)""==e[t]&&delete e[t];this.css=e},t.prototype.textVal=function(){$("#cssP").attr("style","");var e=$("#cssP").css(this.css),t=e.attr("style")||"";return t.replace(/"/gi,"'")},t});