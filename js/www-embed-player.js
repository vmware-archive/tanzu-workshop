(function(){var k,aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba;
if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var ea={wa:!0},fa={};try{fa.__proto__=ea;ca=fa.wa;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=ba;
function n(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.w=b.prototype}
var ia="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ja="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ka(a,b){if(b){for(var c=ja,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ia(c,d,{configurable:!0,writable:!0,value:f})}}
function la(){la=function(){};
ja.Symbol||(ja.Symbol=ma)}
var ma=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function na(){la();var a=ja.Symbol.iterator;a||(a=ja.Symbol.iterator=ja.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ia(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return oa(this)}});
na=function(){}}
function oa(a){var b=0;return pa(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}
function pa(a){na();a={next:a};a[ja.Symbol.iterator]=function(){return this};
return a}
function qa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ra="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)qa(d,e)&&(a[e]=d[e])}return a};
ka("Object.assign",function(a){return a||ra});
function sa(a){na();var b=a[Symbol.iterator];return b?b.call(a):oa(a)}
ka("WeakMap",function(a){function b(a){this.b=(f+=Math.random()+1).toString();if(a){la();na();a=sa(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){qa(a,e)||ia(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(m){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random();d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!qa(a,e))throw Error("WeakMap key fail: "+a);a[e][this.b]=b;return this};
b.prototype.get=function(a){return qa(a,e)?a[e][this.b]:void 0};
b.prototype.has=function(a){return qa(a,e)&&qa(a[e],this.b)};
b.prototype["delete"]=function(a){return qa(a,e)&&qa(a[e],this.b)?delete a[e][this.b]:!1};
return b});
ka("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.b;return pa(function(){if(c){for(;c.head!=a.b;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.f[c];if(d&&qa(a.f,c))for(var e=0;e<d.length;e++){var h=d[e];if(b!==b&&h.key!==h.key||b===h.key)return{id:c,list:d,index:e,o:h}}return{id:c,list:d,index:-1,o:void 0}}
function e(a){this.f={};this.b=b();this.size=0;if(a){a=sa(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(sa([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(G){return!1}}())return a;
la();na();var f=new WeakMap;e.prototype.set=function(a,b){a=0===a?0:a;var c=d(this,a);c.list||(c.list=this.f[c.id]=[]);c.o?c.o.value=b:(c.o={next:this.b,previous:this.b.previous,head:this.b,key:a,value:b},c.list.push(c.o),this.b.previous.next=c.o,this.b.previous=c.o,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.o&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.f[a.id],a.o.previous.next=a.o.next,a.o.next.previous=a.o.previous,a.o.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.f={};this.b=this.b.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).o};
e.prototype.get=function(a){return(a=d(this,a).o)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
ka("Set",function(a){function b(a){this.b=new Map;if(a){a=sa(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.b.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(sa([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
la();na();b.prototype.add=function(a){a=0===a?0:a;this.b.set(a,a);this.size=this.b.size;return this};
b.prototype["delete"]=function(a){a=this.b["delete"](a);this.size=this.b.size;return a};
b.prototype.clear=function(){this.b.clear();this.size=0};
b.prototype.has=function(a){return this.b.has(a)};
b.prototype.entries=function(){return this.b.entries()};
b.prototype.values=function(){return this.b.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.b.forEach(function(d){return a.call(b,d,d,c)})};
return b});
ka("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
ka("String.prototype.includes",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(a,c||0)}});
(function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}})();
var p=this;function q(a){return void 0!==a}
function r(a){return"string"==typeof a}
function ta(a){return"boolean"==typeof a}
function ua(a){return"number"==typeof a}
function u(a,b,c){a=a.split(".");c=c||p;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&q(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function va(){if(null===wa){a:{var a=p.document;if((a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&xa.test(a))break a;a=null}wa=a||""}return wa}
var xa=/^[\w+/_-]+[=]{0,2}$/,wa=null;function v(a,b){for(var c=a.split("."),d=b||p,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function ya(){}
function za(a){a.ga=void 0;a.getInstance=function(){return a.ga?a.ga:a.ga=new a}}
function Aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function w(a){return"array"==Aa(a)}
function Ba(a){var b=Aa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ca(a){return"function"==Aa(a)}
function Da(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var Ea="closure_uid_"+(1E9*Math.random()>>>0),Fa=0;function Ga(a,b,c){return a.call.apply(a.bind,arguments)}
function Ha(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function x(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?x=Ga:x=Ha;return x.apply(null,arguments)}
function y(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var z=Date.now||function(){return+new Date};
function Ia(a,b){u(a,b,void 0)}
function A(a,b){function c(){}
c.prototype=b.prototype;a.w=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.qb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var Ka=document,B=window;function C(a){if(Error.captureStackTrace)Error.captureStackTrace(this,C);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
A(C,Error);C.prototype.name="CustomError";var La=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(r(a))return r(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Na=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=r(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Oa=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=r(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Pa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
D(a,function(c,f){d=b.call(void 0,d,c,f,a)});
return d};
function Qa(a,b){a:{var c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function Ra(a,b){var c=La(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Sa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ta(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ba(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Ua=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Va(a){if(!Wa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Xa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ya,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Za,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace($a,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(ab,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(bb,"&#0;"));return a}
var Xa=/&/g,Ya=/</g,Za=/>/g,$a=/"/g,ab=/'/g,bb=/\x00/g,Wa=/[\x00&<>"']/;function cb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var db;a:{var fb=p.navigator;if(fb){var gb=fb.userAgent;if(gb){db=gb;break a}}db=""}function E(a){return-1!=db.indexOf(a)}
;function hb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function ib(a,b){var c=Ba(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function jb(a){var b=kb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function lb(a){for(var b in a)return!1;return!0}
function mb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function nb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
function ob(a){var b={},c;for(c in a)b[c]=a[c];return b}
var pb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<pb.length;f++)c=pb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function rb(a){rb[" "](a);return a}
rb[" "]=ya;var sb=E("Opera"),tb=E("Trident")||E("MSIE"),ub=E("Edge"),vb=E("Gecko")&&!(-1!=db.toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),wb=-1!=db.toLowerCase().indexOf("webkit")&&!E("Edge");function xb(){var a=p.document;return a?a.documentMode:void 0}
var yb;a:{var zb="",Ab=function(){var a=db;if(vb)return/rv:([^\);]+)(\)|;)/.exec(a);if(ub)return/Edge\/([\d\.]+)/.exec(a);if(tb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(wb)return/WebKit\/(\S+)/.exec(a);if(sb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Ab&&(zb=Ab?Ab[1]:"");if(tb){var Bb=xb();if(null!=Bb&&Bb>parseFloat(zb)){yb=String(Bb);break a}}yb=zb}var Cb=yb,Db;var Eb=p.document;Db=Eb&&tb?xb()||("CSS1Compat"==Eb.compatMode?parseInt(Cb,10):5):void 0;var Fb=null,Gb=null;function Hb(a){this.b=a||{cookie:""}}
k=Hb.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');q(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(z()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ua(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=q(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.b.cookie};
k.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Ua(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Ib=new Hb("undefined"==typeof document?null:document);Ib.f=3950;function Jb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Kb=!tb||9<=Number(Db);function Lb(){this.b="";this.f=Mb}
Lb.prototype.J=!0;Lb.prototype.I=function(){return this.b};
Lb.prototype.fa=!0;Lb.prototype.ba=function(){return 1};
function Nb(a){return a instanceof Lb&&a.constructor===Lb&&a.f===Mb?a.b:"type_error:TrustedResourceUrl"}
var Mb={};function F(){this.b="";this.f=Ob}
F.prototype.J=!0;F.prototype.I=function(){return this.b};
F.prototype.fa=!0;F.prototype.ba=function(){return 1};
function Pb(a){return a instanceof F&&a.constructor===F&&a.f===Ob?a.b:"type_error:SafeUrl"}
var Qb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Rb(a){if(a instanceof F)return a;a=a.J?a.I():String(a);Qb.test(a)||(a="about:invalid#zClosurez");return Sb(a)}
var Ob={};function Sb(a){var b=new F;b.b=a;return b}
Sb("about:blank");function Tb(){this.b="";this.g=Ub;this.f=null}
Tb.prototype.fa=!0;Tb.prototype.ba=function(){return this.f};
Tb.prototype.J=!0;Tb.prototype.I=function(){return this.b};
var Ub={};function Vb(a,b){var c=new Tb;c.b=a;c.f=b;return c}
Vb("<!DOCTYPE html>",0);Vb("",0);Vb("<br>",0);function Wb(a,b){var c=b instanceof F?b:Rb(b);a.href=Pb(c)}
function Xb(a,b,c){a.rel=c;a.href=-1!=c.toLowerCase().indexOf("stylesheet")?Nb(b):b instanceof Lb?Nb(b):b instanceof F?Pb(b):Rb(b).I()}
function Yb(a,b){a.src=Nb(b);var c=va();c&&a.setAttribute("nonce",c)}
;function Zb(a,b){this.x=q(a)?a:0;this.y=q(b)?b:0}
k=Zb.prototype;k.clone=function(){return new Zb(this.x,this.y)};
k.equals=function(a){return a instanceof Zb&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
k.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
k.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
k.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function $b(a,b){this.width=a;this.height=b}
k=$b.prototype;k.clone=function(){return new $b(this.width,this.height)};
k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ac(a){var b=document;return r(a)?b.getElementById(a):a}
function bc(a,b){hb(b,function(b,d){b&&b.J&&(b=b.I());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:cc.hasOwnProperty(d)?a.setAttribute(cc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var cc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function dc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Kb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Va(g.name),'"');if(g.type){f.push(' type="',Va(g.type),'"');var h={};qb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(r(g)?f.className=g:w(g)?f.className=g.join(" "):bc(f,g));2<d.length&&ec(e,f,d);return f}
function ec(a,b,c){function d(c){c&&b.appendChild(r(c)?a.createTextNode(c):c)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ba(f)||Da(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Da(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if(Ca(f)){g="function"==typeof f.item;break a}}g=!1}D(g?Sa(f):f,d)}}}
function fc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function gc(a){hc();var b=new Lb;b.b=a;return b}
var hc=ya;function ic(){var a=jc;try{var b;if(b=!!a&&null!=a.location.href)a:{try{rb(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}
function kc(a){var b=lc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function mc(){var a=[];kc(function(b){a.push(b)});
return a}
var lc={eb:"allow-forms",fb:"allow-modals",gb:"allow-orientation-lock",hb:"allow-pointer-lock",ib:"allow-popups",jb:"allow-popups-to-escape-sandbox",kb:"allow-presentation",lb:"allow-same-origin",mb:"allow-scripts",nb:"allow-top-navigation",ob:"allow-top-navigation-by-user-activation"},nc=Jb(function(){return mc()});
function oc(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};D(nc(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;function pc(a,b,c){a.addEventListener?a.addEventListener(b,c,void 0):a.attachEvent&&a.attachEvent("on"+b,c)}
function qc(a,b,c){a.removeEventListener?a.removeEventListener(b,c,void 0):a.detachEvent&&a.detachEvent("on"+b,c)}
;function rc(a){var b=!1,c=!1;c=void 0===c?!1:c;b=void 0===b?!1:b;p.google_image_requests||(p.google_image_requests=[]);var d=p.document.createElement("img");if(b){var e=function(){b&&Ra(p.google_image_requests,d);qc(d,"load",e);qc(d,"error",e)};
pc(d,"load",e);pc(d,"error",e)}c&&(d.referrerPolicy="no-referrer");d.src=a;p.google_image_requests.push(d)}
;function sc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var tc=!!window.google_async_iframe_id,jc=tc&&window.parent||window;var uc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function H(a){return a.match(uc)}
function vc(a){return a?decodeURI(a):a}
function wc(a,b,c){if(w(b))for(var d=0;d<b.length;d++)wc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function xc(a){var b=[],c;for(c in a)wc(c,a[c],b);return b.join("&")}
function yc(a,b){var c=xc(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;var zc=null;function Ac(){var a=p.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):z()}
function Bc(){var a=void 0===a?p:a;return(a=a.performance)&&a.now?a.now():null}
;function Cc(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0}
;var I=p.performance,Dc=!!(I&&I.mark&&I.measure&&I.clearMarks),Ec=Jb(function(){var a;if(a=Dc){var b;if(null===zc){zc="";try{a="";try{a=p.top.location.hash}catch(c){a=p.location.hash}a&&(zc=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=zc;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
function Fc(){var a=Gc;this.events=[];this.f=a||p;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.b=Ec()||(null!=b?b:1>Math.random())}
Fc.prototype.disable=function(){this.b=!1;this.events!=this.f.google_js_reporting_queue&&(Ec()&&D(this.events,Hc),this.events.length=0)};
function Hc(a){a&&I&&Ec()&&(I.clearMarks("goog_"+a.uniqueId+"_start"),I.clearMarks("goog_"+a.uniqueId+"_end"))}
Fc.prototype.start=function(a,b){if(!this.b)return null;var c=Bc()||Ac();c=new Cc(a,b,c);var d="goog_"+c.uniqueId+"_start";I&&Ec()&&I.mark(d);return c};
Fc.prototype.end=function(a){if(this.b&&ua(a.value)){var b=Bc()||Ac();a.duration=b-a.value;b="goog_"+a.uniqueId+"_end";I&&Ec()&&I.mark(b);this.b&&this.events.push(a)}};if(tc&&!ic()){var Ic="."+Ka.domain;try{for(;2<Ic.split(".").length&&!ic();)Ka.domain=Ic=Ic.substr(Ic.indexOf(".")+1),jc=window.parent}catch(a){}ic()||(jc=window)}var Gc=jc,Jc=new Fc;"complete"==Gc.document.readyState?Gc.google_measure_js_timing||Jc.disable():Jc.b&&pc(Gc,"load",function(){Gc.google_measure_js_timing||Jc.disable()});var Kc=(new Date).getTime();function Lc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Mc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;t=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],l=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=h^d&(f^h);var t=1518500249}else m=d^f^h,t=1859775393;else 60>c?(m=d&f|h&(d|f),t=2400959708):(m=d^f^h,t=3395469782);m=((a<<5|a>>>27)&4294967295)+m+l+t+b[c]&4294967295;l=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,t+=64;for(;d<c;)if(f[m++]=a[d++],t++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,t+=64}
function d(){var a=[],d=8*t;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,t;a();return{reset:a,update:c,digest:d,ya:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Nc(a,b,c){var d=[],e=[];if(1==(w(c)?2:1))return e=[b,a],D(d,function(a){e.push(a)}),Oc(e.join(" "));
var f=[],g=[];D(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(a){e.push(a)});
a=Oc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Oc(a){var b=Mc();b.update(a);return b.ya().toLowerCase()}
;function Pc(a){var b=Lc(String(p.location.href)),c=p.__OVERRIDE_SID;null==c&&(c=(new Hb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?p.__SAPISID:p.__APISID,null==b&&(b=(new Hb(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(p.location.href);return d&&b&&c?[c,Nc(Lc(d),b,a||null)].join(" "):null}return null}
;function Qc(a,b){this.g=a;this.h=b;this.f=0;this.b=null}
Qc.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};
function Rc(a,b){a.h(b);100>a.f&&(a.f++,b.next=a.b,a.b=b)}
;function Sc(a){p.setTimeout(function(){throw a;},0)}
var Tc;
function Uc(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=x(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!E("Trident")&&!E("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(q(c.next)){c=c.next;var a=c.ma;c.ma=null;a()}};
return function(a){d.next={ma:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;function Vc(){this.f=this.b=null}
var Xc=new Qc(function(){return new Wc},function(a){a.reset()});
Vc.prototype.add=function(a,b){var c=Xc.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};
Vc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Wc(){this.next=this.scope=this.b=null}
Wc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Wc.prototype.reset=function(){this.next=this.scope=this.b=null};function Yc(a,b){Zc||$c();ad||(Zc(),ad=!0);bd.add(a,b)}
var Zc;function $c(){if(p.Promise&&p.Promise.resolve){var a=p.Promise.resolve(void 0);Zc=function(){a.then(cd)}}else Zc=function(){var a=cd;
!Ca(p.setImmediate)||p.Window&&p.Window.prototype&&!E("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(Tc||(Tc=Uc()),Tc(a)):p.setImmediate(a)}}
var ad=!1,bd=new Vc;function cd(){for(var a;a=bd.remove();){try{a.b.call(a.scope)}catch(b){Sc(b)}Rc(Xc,a)}ad=!1}
;function dd(){this.f=-1}
;function ed(){this.f=64;this.b=[];this.j=[];this.l=[];this.h=[];this.h[0]=128;for(var a=1;a<this.f;++a)this.h[a]=0;this.i=this.g=0;this.reset()}
A(ed,dd);ed.prototype.reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.i=this.g=0};
function fd(a,b,c){c||(c=0);var d=a.l;if(r(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];var g=a.b[2],h=a.b[3],l=a.b[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):(f=c^g^h,m=
3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+h&4294967295;a.b[4]=a.b[4]+l&4294967295}
ed.prototype.update=function(a,b){if(null!=a){q(b)||(b=a.length);for(var c=b-this.f,d=0,e=this.j,f=this.g;d<b;){if(0==f)for(;d<=c;)fd(this,a,d),d+=this.f;if(r(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.f){fd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.f){fd(this,e);f=0;break}}this.g=f;this.i+=b}};
ed.prototype.digest=function(){var a=[],b=8*this.i;56>this.g?this.update(this.h,56-this.g):this.update(this.h,this.f-(this.g-56));for(var c=this.f-1;56<=c;c--)this.j[c]=b&255,b/=256;fd(this,this.j);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.b[c]>>d&255,++b;return a};function J(){this.g=this.g;this.C=this.C}
J.prototype.g=!1;J.prototype.dispose=function(){this.g||(this.g=!0,this.m())};
function gd(a,b){a.g?q(void 0)?b.call(void 0):b():(a.C||(a.C=[]),a.C.push(q(void 0)?x(b,void 0):b))}
J.prototype.m=function(){if(this.C)for(;this.C.length;)this.C.shift()()};
function hd(a){a&&"function"==typeof a.dispose&&a.dispose()}
function id(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ba(d)?id.apply(null,d):hd(d)}}
;function jd(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function kd(a,b){if(a.classList)var c=a.classList.contains(b);else c=jd(a),c=0<=La(c,b);return c}
function ld(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):kd(a,"inverted-hdpi")&&(a.className=Na(jd(a),function(a){return"inverted-hdpi"!=a}).join(" "))}
;var md="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""};function nd(){}
nd.prototype.next=function(){throw md;};
nd.prototype.F=function(){return this};
function od(a){if(a instanceof nd)return a;if("function"==typeof a.F)return a.F(!1);if(Ba(a)){var b=0,c=new nd;c.next=function(){for(;;){if(b>=a.length)throw md;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function pd(a,b){if(Ba(a))try{D(a,b,void 0)}catch(c){if(c!==md)throw c;}else{a=od(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==md)throw c;}}}
function qd(a){if(Ba(a))return Sa(a);a=od(a);var b=[];pd(a,function(a){b.push(a)});
return b}
;function rd(a,b){this.g={};this.b=[];this.h=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof rd)for(c=sd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function sd(a){td(a);return a.b.concat()}
k=rd.prototype;k.equals=function(a,b){if(this===a)return!0;if(this.f!=a.f)return!1;var c=b||ud;td(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function ud(a,b){return a===b}
k.isEmpty=function(){return 0==this.f};
k.clear=function(){this.g={};this.h=this.f=this.b.length=0};
k.remove=function(a){return Object.prototype.hasOwnProperty.call(this.g,a)?(delete this.g[a],this.f--,this.h++,this.b.length>2*this.f&&td(this),!0):!1};
function td(a){if(a.f!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Object.prototype.hasOwnProperty.call(a.g,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.f!=a.b.length){var e={};for(c=b=0;b<a.b.length;)d=a.b[b],Object.prototype.hasOwnProperty.call(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
k.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.g,a)?this.g[a]:b};
k.set=function(a,b){Object.prototype.hasOwnProperty.call(this.g,a)||(this.f++,this.b.push(a),this.h++);this.g[a]=b};
k.forEach=function(a,b){for(var c=sd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
k.clone=function(){return new rd(this)};
k.F=function(a){td(this);var b=0,c=this.h,d=this,e=new nd;e.next=function(){if(c!=d.h)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw md;var e=d.b[b++];return a?e:d.g[e]};
return e};function vd(a){var b=[];wd(new xd,a,b);return b.join("")}
function xd(){}
function wd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(w(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),wd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),yd(d,c),c.push(":"),wd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":yd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var zd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ad=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function yd(a,b){b.push('"',a.replace(Ad,function(a){var b=zd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),zd[a]=b);return b}),'"')}
;function Bd(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
function Cd(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function K(a,b){this.b=0;this.l=void 0;this.h=this.f=this.g=null;this.i=this.j=!1;if(a!=ya)try{var c=this;a.call(b,function(a){Dd(c,2,a)},function(a){Dd(c,3,a)})}catch(d){Dd(this,3,d)}}
function Ed(){this.next=this.context=this.onRejected=this.g=this.b=null;this.f=!1}
Ed.prototype.reset=function(){this.context=this.onRejected=this.g=this.b=null;this.f=!1};
var Fd=new Qc(function(){return new Ed},function(a){a.reset()});
function Gd(a,b,c){var d=Fd.get();d.g=a;d.onRejected=b;d.context=c;return d}
function Hd(a){return new K(function(b,c){c(a)})}
function Id(a,b,c){Jd(a,b,c,null)||Yc(y(b,a))}
function Kd(a){return new K(function(b,c){a.length||b(void 0);for(var d=0,e;d<a.length;d++)e=a[d],Id(e,b,c)})}
function Ld(a){return new K(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{aa:!0,value:f}:{aa:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Id(g,y(e,f,!0),y(e,f,!1));
else b(d)})}
K.prototype.then=function(a,b,c){return Md(this,Ca(a)?a:null,Ca(b)?b:null,c)};
Bd(K);function Nd(a,b){var c=Gd(b,b,void 0);c.f=!0;Od(a,c);return a}
function Pd(a,b){return Md(a,null,b,void 0)}
K.prototype.cancel=function(a){0==this.b&&Yc(function(){var b=new Qd(a);Rd(this,b)},this)};
function Rd(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.f||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Rd(c,b):(f?(d=f,d.next==c.h&&(c.h=d),d.next=d.next.next):Sd(c),Td(c,e,3,b)))}a.g=null}else Dd(a,3,b)}
function Od(a,b){a.f||2!=a.b&&3!=a.b||Ud(a);a.h?a.h.next=b:a.f=b;a.h=b}
function Md(a,b,c,d){var e=Gd(null,null,null);e.b=new K(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.onRejected=c?function(b){try{var e=c.call(d,b);!q(e)&&b instanceof Qd?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;Od(a,e);return e.b}
K.prototype.u=function(a){this.b=0;Dd(this,2,a)};
K.prototype.A=function(a){this.b=0;Dd(this,3,a)};
function Dd(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,Jd(c,a.u,a.A,a)||(a.l=c,a.b=b,a.g=null,Ud(a),3!=b||c instanceof Qd||Vd(a,c)))}
function Jd(a,b,c,d){if(a instanceof K)return Od(a,Gd(b||ya,c||null,d)),!0;if(Cd(a))return a.then(b,c,d),!0;if(Da(a))try{var e=a.then;if(Ca(e))return Wd(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function Wd(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Ud(a){a.j||(a.j=!0,Yc(a.C,a))}
function Sd(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.h=null);return b}
K.prototype.C=function(){for(var a;a=Sd(this);)Td(this,a,this.b,this.l);this.j=!1};
function Td(a,b,c,d){if(3==c&&b.onRejected&&!b.f)for(;a&&a.i;a=a.g)a.i=!1;if(b.b)b.b.g=null,Xd(b,c,d);else try{b.f?b.g.call(b.context):Xd(b,c,d)}catch(e){Yd.call(null,e)}Rc(Fd,b)}
function Xd(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Vd(a,b){a.i=!0;Yc(function(){a.i&&Yd.call(null,b)})}
var Yd=Sc;function Qd(a){C.call(this,a)}
A(Qd,C);Qd.prototype.name="cancel";function L(a){J.call(this);this.j=1;this.h=[];this.i=0;this.b=[];this.f={};this.l=!!a}
A(L,J);k=L.prototype;k.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function Zd(a,b,c,d){if(b=a.f[b]){var e=a.b;(b=Qa(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.L(b)}}
k.L=function(a){var b=this.b[a];if(b){var c=this.f[b];0!=this.i?(this.h.push(a),this.b[a+1]=ya):(c&&Ra(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
k.K=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.l)for(e=0;e<c.length;e++){var g=c[e];$d(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.L(c)}}return 0!=e}return!1};
function $d(a,b,c){Yc(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.f[a];b&&(D(b,this.L,this),delete this.f[a])}else this.b.length=0,this.f={}};
k.m=function(){L.w.m.call(this);this.clear();this.h.length=0};function ae(a){this.b=a}
ae.prototype.set=function(a,b){q(b)?this.b.set(a,vd(b)):this.b.remove(a)};
ae.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ae.prototype.remove=function(a){this.b.remove(a)};function be(a){this.b=a}
A(be,ae);function ce(a){this.data=a}
function de(a){return!q(a)||a instanceof ce?a:new ce(a)}
be.prototype.set=function(a,b){be.w.set.call(this,a,de(b))};
be.prototype.f=function(a){a=be.w.get.call(this,a);if(!q(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
be.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!q(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ee(a){this.b=a}
A(ee,be);ee.prototype.set=function(a,b,c){if(b=de(b)){if(c){if(c<z()){ee.prototype.remove.call(this,a);return}b.expiration=c}b.creation=z()}ee.w.set.call(this,a,b)};
ee.prototype.f=function(a){var b=ee.w.f.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<z()||c&&c>z())ee.prototype.remove.call(this,a);else return b}};function fe(a){this.b=a}
A(fe,ee);function ge(){}
;function he(){}
A(he,ge);he.prototype.clear=function(){var a=qd(this.F(!0)),b=this;D(a,function(a){b.remove(a)})};function ie(a){this.b=a}
A(ie,he);k=ie.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.F=function(a){var b=0,c=this.b,d=new nd;d.next=function(){if(b>=c.length)throw md;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function je(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
A(je,ie);function ke(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
A(ke,ie);function le(a,b){this.f=a;this.b=null;if(tb&&!(9<=Number(Db))){me||(me=new rd);this.b=me.get(a);this.b||(b?this.b=document.getElementById(b):(this.b=document.createElement("userdata"),this.b.addBehavior("#default#userData"),document.body.appendChild(this.b)),me.set(a,this.b));try{this.b.load(this.f)}catch(c){this.b=null}}}
A(le,he);var ne={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},me=null;function oe(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return ne[a]})}
k=le.prototype;k.isAvailable=function(){return!!this.b};
k.set=function(a,b){this.b.setAttribute(oe(a),b);pe(this)};
k.get=function(a){a=this.b.getAttribute(oe(a));if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeAttribute(oe(a));pe(this)};
k.F=function(a){var b=0,c=this.b.XMLDocument.documentElement.attributes,d=new nd;d.next=function(){if(b>=c.length)throw md;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){for(var a=this.b.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);pe(this)};
function pe(a){try{a.b.save(a.f)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function qe(a,b){this.f=a;this.b=b+"::"}
A(qe,he);qe.prototype.set=function(a,b){this.f.set(this.b+a,b)};
qe.prototype.get=function(a){return this.f.get(this.b+a)};
qe.prototype.remove=function(a){this.f.remove(this.b+a)};
qe.prototype.F=function(a){var b=this.f.F(!0),c=this,d=new nd;d.next=function(){for(var d=b.next();d.substr(0,c.b.length)!=c.b;)d=b.next();return a?d.substr(c.b.length):c.f.get(d)};
return d};function se(a){if(!Ca(a))if(a&&"function"==typeof a.handleEvent)a=x(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(5E3)?-1:p.setTimeout(a,5E3)}
function te(){var a=null;return Pd(new K(function(b,c){a=se(function(){b(void 0)});
-1==a&&c(Error("Failed to schedule timer."))}),function(b){p.clearTimeout(a);
throw b;})}
;function ue(){this.f=[];this.b=-1}
ue.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.f[a]!=b&&(this.f[a]=b,this.b=-1)};
ue.prototype.get=function(a){return!!this.f[a]};
function ve(a){-1==a.b&&(a.b=Pa(a.f,function(a,c,d){return c?a+Math.pow(2,d):a},0));
return a.b}
;function we(a,b,c){var d="script";d=void 0===d?"":d;var e=a.createElement("link");try{Xb(e,b,"preload")}catch(f){return}d&&(e.as=d);c&&(e.nonce=c);if(a=a.getElementsByTagName("head")[0])try{a.appendChild(e)}catch(f){}}
;var xe=/^\.google\.(com?\.)?[a-z]{2,3}$/,ye=/\.(cn|com\.bi|do|sl|ba|by|ma|am)$/;function ze(a){return xe.test(a)&&!ye.test(a)}
var Ae=p;function Be(a){a="https://"+("adservice"+a+"/adsid/integrator.js");var b=["domain="+encodeURIComponent(p.location.hostname)];M[3]>=z()&&b.push("adsid="+encodeURIComponent(M[1]));return a+"?"+b.join("&")}
var M,N;function Ce(){Ae=p;M=Ae.googleToken=Ae.googleToken||{};var a=z();M[1]&&M[3]>a&&0<M[2]||(M[1]="",M[2]=-1,M[3]=-1,M[4]="",M[6]="");N=Ae.googleIMState=Ae.googleIMState||{};ze(N[1])||(N[1]=".google.com");w(N[5])||(N[5]=[]);ta(N[6])||(N[6]=!1);w(N[7])||(N[7]=[]);ua(N[8])||(N[8]=0)}
function De(){Ce();return M[1]}
var O={ea:function(){return 0<N[8]},
Qa:function(){N[8]++},
Ra:function(){0<N[8]&&N[8]--},
Sa:function(){N[8]=0},
shouldRetry:function(){return!1},
na:function(){return N[5]},
la:function(a){try{a()}catch(b){p.setTimeout(function(){throw b;},0)}},
ja:function(){if(!O.ea()){var a=p.document,b=function(b){b=Be(b);a:{try{var c=va();break a}catch(h){}c=void 0}var d=c;we(a,b,d);c=a.createElement("script");c.type="text/javascript";d&&(c.nonce=d);c.onerror=function(){return p.processGoogleToken({},2)};
b=gc(b);Yb(c,b);try{(a.head||a.body||a.documentElement).appendChild(c),O.Qa()}catch(h){}},c=N[1];
b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);p.setTimeout(function(){return p.processGoogleToken(d,1)},1E3)}}};
function Ee(a){Ce();var b=Ae.googleToken[5]||0;a&&(0!=b||M[3]>=z()?O.la(a):(O.na().push(a),O.ja()));M[3]>=z()&&M[2]>=z()||O.ja()}
function Fe(a){p.processGoogleToken=p.processGoogleToken||function(a,c){var b=a,e=c;b=void 0===b?{}:b;e=void 0===e?0:e;var f=b.newToken||"",g="NT"==f,h=parseInt(b.freshLifetimeSecs||"",10),l=parseInt(b.validLifetimeSecs||"",10),m=b["1p_jar"]||"";b=b.pucrd||"";Ce();1==e?O.Sa():O.Ra();if(!f&&O.shouldRetry())ze(".google.com")&&(N[1]=".google.com"),O.ja();else{var t=Ae.googleToken=Ae.googleToken||{},G=0==e&&f&&r(f)&&!g&&ua(h)&&0<h&&ua(l)&&0<l&&r(m);g=g&&!O.ea()&&(!(M[3]>=z())||"NT"==M[1]);var Ja=!(M[3]>=
z())&&0!=e;if(G||g||Ja)g=z(),h=g+1E3*h,l=g+1E3*l,1E-5>Math.random()&&rc("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+e),t[5]=e,t[1]=f,t[2]=h,t[3]=l,t[4]=m,t[6]=b,Ce();if(G||!O.ea()){e=O.na();for(f=0;f<e.length;f++)O.la(e[f]);e.length=0}}};
Ee(a)}
;function Ge(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var P=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var He=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};u("yt.config_",He,void 0);function Q(a){Ge(He,arguments)}
function R(a,b){return a in He?He[a]:b}
function Ie(a){return R(a,void 0)}
function Je(){return R("PLAYER_CONFIG",{})}
;z();function Ke(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){S(b)}}:a}
function S(a,b,c,d,e){var f=v("yt.logging.errors.log");f?f(a,b,c,d,e):(f=R("ERRORS",[]),f.push([a,b,c,d,e]),Q("ERRORS",f))}
function Le(a){S(a,"WARNING",void 0,void 0,void 0)}
;var Me=q(XMLHttpRequest)?function(){return new XMLHttpRequest}:q(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Ne(){if(!Me)return null;var a=Me();return"open"in a?a:null}
function Oe(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function T(a,b){Ca(a)&&(a=Ke(a));return window.setTimeout(a,b)}
function Pe(a){window.clearTimeout(a)}
;function Qe(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?w(b[f])?Ta(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
;var Re={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Se=!1;
function Te(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=H(a)[1]||null,e=vc(H(a)[3]||null);d&&e?(d=c,c=H(a),d=H(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?vc(H(c)[3]||null)==e&&(Number(H(c)[4]||null)||null)==(Number(H(a)[4]||null)||null):!0;for(var f in Re)(d=R(Re[f]))&&(c||Ue(a,f))&&(b[f]=d);if(c||Ue(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();return b}
function Ue(a,b){var c=R("CORS_HEADER_WHITELIST")||{},d=vc(H(a)[3]||null);return d?(c=c[d])?0<=La(c,b):!1:!0}
function Ve(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=We(a,b);var d=Xe(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&Pe(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||p;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.ia&&b.ia.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.pa&&0<b.timeout&&(f=T(function(){e||(e=!0,Pe(f),b.pa.call(b.context||p))},b.timeout))}else Ye(a,b)}
function Ye(a,b){var c=b.format||"JSON";a=We(a,b);var d=Xe(a,b),e=!1,f,g=Ze(a,function(a){if(!e){e=!0;f&&Pe(f);var d=Oe(a),g=null;if(d||400<=a.status&&500>a.status)g=$e(c,a,b.sb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};var h=b.context||p;d?b.onSuccess&&b.onSuccess.call(h,a,g):b.onError&&b.onError.call(h,a,g);b.ia&&b.ia.call(h,a,g)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.M&&0<b.timeout&&(f=T(function(){e||(e=!0,g.abort(),Pe(f),b.M.call(b.context||p,g))},b.timeout));
return g}
function We(a,b){b.Da&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME",void 0),d=b.cb;if(d){d[c]&&delete d[c];d=d||{};var e=a.split("#",2);c=e[0];e=1<e.length?"#"+e[1]:"";var f=c.split("?",2);c=f[0];f=Qe(f[1]||"");for(var g in d)f[g]=d[g];a=yc(c,f)+e}return a}
function Xe(a,b){var c=R("XSRF_FIELD_NAME",void 0),d=R("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.B,g=Ie("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.tb||vc(H(a)[3]||null)&&!b.withCredentials&&vc(H(a)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.B&&b.B[g]||(f||(f={}),f[c]=d);f&&r(e)&&(e=Qe(e),qb(e,f),e=b.qa&&"JSON"==b.qa?JSON.stringify(e):xc(e));f=e||f&&!lb(f);!Se&&f&&"POST"!=b.method&&(Se=!0,S(Error("AJAX request with postData should use POST")));
return e}
function $e(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?af(b):null)d={},D(b.getElementsByTagName("*"),function(a){d[a.tagName]=bf(a)})}c&&cf(d);
return d}
function cf(a){if(Da(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Vb(a[b],null);a[c]=d}else cf(a[b])}}
function af(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function bf(a){var b="";D(a.childNodes,function(a){b+=a.nodeValue});
return b}
function df(a,b){b.method="POST";b.B||(b.B={});Ye(a,b)}
function Ze(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Ke(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=Ne();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Te(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
;var ef={},ff=0;
function gf(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=db,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof F||(a=a.J?a.I():String(a),Qb.test(a)||(a="about:invalid#zClosurez"),a=Sb(a)),b=Pb(a),"about:invalid#zClosurez"===b?a="":(b instanceof Tb?a=b:(a=null,b.fa&&(a=b.ba()),b=Va(b.J?b.I():String(b)),a=Vb(b,a)),a=encodeURIComponent(String(vd(a instanceof Tb&&a.constructor===Tb&&a.g===Ub?a.b:"type_error:SafeHtml")))),/^[\s\xa0]*$/.test(a)||(a=dc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+
'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?Ze(a,b,"POST",e,d):R("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Ze(a,b,"GET","",d):hf(a,b))}
function hf(a,b){var c=new Image,d=""+ff++;ef[d]=c;c.onload=c.onerror=function(){b&&ef[d]&&b();delete ef[d]};
c.src=a}
;var jf={},kf=0;
function lf(a,b,c,d,e,f){f=f||{};f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=kf)){e=a.stacktrace;c=a.columnNumber;a.hasOwnProperty("params")&&(f.params=JSON.stringify(a.params));d=v("window.location.href");if(r(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:d,stack:"Not available"};else{var g=
!1;try{var h=a.lineNumber||a.line||"Not available"}catch(G){h="Not available",g=!0}try{var l=a.fileName||a.filename||a.sourceURL||p.$googDebugFname||d}catch(G){l="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:l,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(c)||(h=h+":"+c);if(!(jf[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){l=
e;h={cb:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:h,level:b,"client.name":f.name},B:{url:R("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(h["client.version"]=f.version);l&&(h.B.stack=l);for(var m in f)h.B["client."+m]=f[m];if(m=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var t in m)h.B[t]=m[t];Ye(R("ECATCHER_REPORT_HOST","")+"/error_204",h);jf[a.message]=!0;kf++}}}
;var mf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};u("yt.msgs_",mf,void 0);function nf(a){Ge(mf,arguments)}
;function of(a){a&&(a.dataset?a.dataset[pf("loaded")]="true":a.setAttribute("data-loaded","true"))}
function qf(a,b){return a?a.dataset?a.dataset[pf(b)]:a.getAttribute("data-"+b):null}
var rf={};function pf(a){return rf[a]||(rf[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;var sf=v("ytPubsubPubsubInstance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.L;L.prototype.publish=L.prototype.K;L.prototype.clear=L.prototype.clear;u("ytPubsubPubsubInstance",sf,void 0);var tf=v("ytPubsubPubsubSubscribedKeys")||{};u("ytPubsubPubsubSubscribedKeys",tf,void 0);var uf=v("ytPubsubPubsubTopicToKeys")||{};u("ytPubsubPubsubTopicToKeys",uf,void 0);var vf=v("ytPubsubPubsubIsSynchronous")||{};u("ytPubsubPubsubIsSynchronous",vf,void 0);
function wf(a,b){var c=xf();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){tf[d]&&b.apply(window,c)};
try{vf[a]?f():T(f,0)}catch(g){S(g)}},void 0);
tf[d]=!0;uf[a]||(uf[a]=[]);uf[a].push(d);return d}return 0}
function yf(a){var b=xf();b&&(ua(a)?a=[a]:r(a)&&(a=[parseInt(a,10)]),D(a,function(a){b.unsubscribeByKey(a);delete tf[a]}))}
function zf(a,b){var c=xf();c&&c.publish.apply(c,arguments)}
function Af(a){var b=xf();if(b)if(b.clear(a),a)Bf(a);else for(var c in uf)Bf(c)}
function xf(){return v("ytPubsubPubsubInstance")}
function Bf(a){uf[a]&&(a=uf[a],D(a,function(a){tf[a]&&delete tf[a]}),a.length=0)}
;var Cf=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Df=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Ef(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Cf,""),c=c.replace(Df,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Ff(a,b)}
function Ff(a,b){var c=Gf(a),d=document.getElementById(c),e=d&&qf(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){e=wf(c,b);var g=""+(b[Ea]||(b[Ea]=++Fa));Hf[g]=e}f||(d=If(a,c,function(){qf(d,"loaded")||(of(d),zf(c),T(y(Af,c),0))}))}}
function If(a,b,c){var d=document.createElement("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
Yb(d,gc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Jf(a){a=Gf(a);var b=document.getElementById(a);b&&(Af(a),b.parentNode.removeChild(b))}
function Kf(a,b){if(a&&b){var c=""+(b[Ea]||(b[Ea]=++Fa));(c=Hf[c])&&yf(c)}}
function Gf(a){var b=document.createElement("a");Wb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+cb(a)}
var Hf={};function Lf(){}
function Mf(a,b){return Nf(a,1,b)}
;function Of(){}
n(Of,Lf);function Nf(a,b,c){isNaN(c)&&(c=void 0);var d=v("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):T(a,c||0)}
function Pf(a){if(!isNaN(a)){var b=v("yt.scheduler.instance.cancelJob");b?b(a):Pe(a)}}
Of.prototype.start=function(){var a=v("yt.scheduler.instance.start");a&&a()};
Of.prototype.pause=function(){var a=v("yt.scheduler.instance.pause");a&&a()};
za(Of);Of.getInstance();var Qf=[],Rf=!1;function Sf(){if("1"!=ib(Je(),"args","privembed")){var a=function(){Rf=!0;"google_ad_status"in window?Q("DCLKSTAT",1):Q("DCLKSTAT",2)};
Ef("//static.doubleclick.net/instream/ad_status.js",a);Qf.push(Mf(function(){Rf||"google_ad_status"in window||(Kf("//static.doubleclick.net/instream/ad_status.js",a),Q("DCLKSTAT",3))},5E3))}}
function Tf(){return parseInt(R("DCLKSTAT",0),10)}
;function Uf(){this.f=!1;this.b=null}
Uf.prototype.initialize=function(a,b,c,d){b?(this.f=!0,Ef(b,function(){this.f=!1;window.botguard?Vf(this,c,d):(Jf(b),S(Error("Unable to load Botguard from "+b),"WARNING"))}.bind(this))):a&&(eval(a),window.botguard?Vf(this,c,d):S(Error("Unable to load Botguard from JS"),"WARNING"))};
function Vf(a,b,c){try{a.b=new window.botguard.bg(b)}catch(d){Le(d)}c&&c(b)}
Uf.prototype.invoke=function(){return this.b?this.b.invoke():null};
Uf.prototype.dispose=function(){this.b=null};function U(a){return R("EXPERIMENT_FLAGS",{})[a]}
;var Wf=new Uf,Xf=!1,Yf=0,Zf="";function $f(a){U("botguard_periodic_refresh")?Yf=P():U("botguard_always_refresh")&&(Zf=a)}
function ag(a){if(a){if(Wf.f)return!1;if(U("botguard_periodic_refresh"))return 72E5<P()-Yf;if(U("botguard_always_refresh"))return Zf!=a}else return!1;return!Xf}
function bg(){return null!==Wf.b}
function cg(){return Wf.invoke()}
;var dg=0;u("ytDomDomGetNextId",v("ytDomDomGetNextId")||function(){return++dg},void 0);var eg={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function fg(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in eg||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?
b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.b=a.pageX;this.f=a.pageY}}
function gg(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.b=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.f=a.clientY+b}}
fg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
fg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
fg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var kb=v("ytEventsEventsListeners")||{};u("ytEventsEventsListeners",kb,void 0);var hg=v("ytEventsEventsCounter")||{count:0};u("ytEventsEventsCounter",hg,void 0);
function ig(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return jb(function(e){var f=ta(e[4])&&e[4]==!!d,g=Da(e[4])&&Da(d)&&nb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var jg=Jb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function W(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=ig(a,b,c,d);if(e)return e;e=++hg.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new fg(d);if(!fc(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new fg(b);
b.currentTarget=a;return c.call(a,b)};
g=Ke(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),jg()||ta(d)?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);kb[e]=[a,b,c,g,d];return e}
function kg(a){a&&("string"==typeof a&&(a=[a]),D(a,function(a){if(a in kb){var b=kb[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?jg()||ta(b)?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete kb[a]}}))}
;function lg(a){this.u=a;this.b=null;this.i=0;this.l=null;this.j=0;this.f=[];for(a=0;4>a;a++)this.f.push(0);this.h=0;this.D=W(window,"mousemove",x(this.G,this));a=x(this.A,this);Ca(a)&&(a=Ke(a));this.H=window.setInterval(a,25)}
A(lg,J);lg.prototype.G=function(a){q(a.b)||gg(a);var b=a.b;q(a.f)||gg(a);this.b=new Zb(b,a.f)};
lg.prototype.A=function(){if(this.b){var a=P();if(0!=this.i){var b=this.l,c=this.b,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.i);this.f[this.h]=.5<Math.abs((d-this.j)/this.j)?1:0;for(c=b=0;4>c;c++)b+=this.f[c]||0;3<=b&&this.u();this.j=d}this.i=a;this.l=this.b;this.h=(this.h+1)%4}};
lg.prototype.m=function(){window.clearInterval(this.H);kg(this.D)};var mg={};
function ng(a){var b=void 0===a?{}:a;a=void 0===b.Ea?!0:b.Ea;b=void 0===b.Oa?!1:b.Oa;if(null==v("_lact",window)){var c=parseInt(R("LACT"),10);c=isFinite(c)?z()-Math.max(c,0):-1;u("_lact",c,window);u("_fact",c,window);-1==c&&og();W(document,"keydown",og);W(document,"keyup",og);W(document,"mousedown",og);W(document,"mouseup",og);a&&(b?W(window,"touchmove",function(){pg("touchmove",200)},{passive:!0}):(W(window,"resize",function(){pg("resize",200)}),W(window,"scroll",function(){pg("scroll",200)})));
new lg(function(){pg("mouse",100)});
W(document,"touchstart",og,{passive:!0});W(document,"touchend",og,{passive:!0})}}
function pg(a,b){mg[a]||(mg[a]=!0,Mf(function(){og();mg[a]=!1},b))}
function og(){null==v("_lact",window)&&ng();var a=z();u("_lact",a,window);-1==v("_fact",window)&&u("_fact",a,window);(a=v("ytglobal.ytUtilActivityCallback_"))&&a()}
function qg(){var a=v("_lact",window);return null==a?-1:Math.max(z()-a,0)}
;var rg=Math.pow(2,16)-1,sg={log_event:"events",log_interaction:"interactions"},tg=Object.create(null);tg.log_event="GENERIC_EVENT_LOGGING";tg.log_interaction="INTERACTION_LOGGING";var ug=new Set(["log_event"]),vg={},wg=0,X=v("ytLoggingTransportLogPayloadsQueue_")||{};u("ytLoggingTransportLogPayloadsQueue_",X,void 0);var xg=v("ytLoggingTransportTokensToCttTargetIds_")||{};u("ytLoggingTransportTokensToCttTargetIds_",xg,void 0);var yg=v("ytLoggingTransportDispatchedStats_")||{};
u("ytLoggingTransportDispatchedStats_",yg,void 0);u("ytytLoggingTransportCapturedTime_",v("ytLoggingTransportCapturedTime_")||{},void 0);function zg(a,b){if(a.X){var c=a.X;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);xg[a.X.token]=d;c=Ag(a.endpoint,a.X.token)}else c=Ag(a.endpoint);c.push(a.payload);vg[a.endpoint]=new b;c.length>=(Number(U("web_logging_max_batch")||0)||20)?Bg():Cg()}
function Bg(){Pe(wg);if(!lb(X)){for(var a in X){var b=vg[a];if(b){var c=void 0,d=a,e=b,f=sg[d],g=yg[d]||{};yg[d]=g;b=Math.round(P());for(c in X[d]){var h=e.b;h={client:{hl:h.Ha,gl:h.Ga,clientName:h.Fa,clientVersion:h.innertubeContextClientVersion}};var l=window.devicePixelRatio;l&&1!=l&&(h.client.screenDensityFloat=String(l));R("DELEGATED_SESSION_ID")&&(h.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});h={context:h};h[f]=Ag(d,c);g.dispatchedEventCount=g.dispatchedEventCount||0;g.dispatchedEventCount+=
h[f].length;if(l=xg[c])a:{var m=h,t=c;if(l.videoId)var G="VIDEO";else if(l.playlistId)G="PLAYLIST";else break a;m.credentialTransferTokenTargetId=l;m.context=m.context||{};m.context.user=m.context.user||{};m.context.user.credentialTransferTokens=[{token:t,scope:G}]}delete xg[c];l=h;l.requestTimeMs=b;(G=R("EVENT_ID",void 0))&&U("enable_gel_web_client_event_id")&&(m=(R("BATCH_CLIENT_COUNTER",void 0)||0)+1,m>rg&&(m=1),Q("BATCH_CLIENT_COUNTER",m),l.serializedClientEventId={serializedEventId:G,clientCounter:m});
Dg(e,d,h,{retry:ug.has(d)})}c=g;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete X[a]}}lb(X)||Cg()}}
function Cg(){Pe(wg);wg=T(Bg,R("LOGGING_BATCH_TIMEOUT",1E4))}
function Ag(a,b){b=void 0===b?"":b;X[a]=X[a]||{};X[a][b]=X[a][b]||[];return X[a][b]}
;function Eg(a,b,c,d){var e=Fg,f={};f.eventTimeMs=Math.round(c||P());f[a]=b;f.context={lastActivityMs:String(c?-1:qg())};zg({endpoint:"log_event",payload:f,X:d},e)}
;function Gg(a,b){var c={"X-Goog-Visitor-Id":R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return c;var d;a?d="Bearer "+v("gapi.auth.getToken")().pb:d=Pc([]);d&&(c.Authorization=d,c["X-Goog-AuthUser"]=R("SESSION_INDEX",0));return c}
function Hg(a){a=Object.assign({},a);delete a.Authorization;var b=Pc();if(b){var c=new ed;c.update(R("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();if(!Fb)for(Fb={},Gb={},c=0;65>c;c++)Fb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),Gb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=Gb;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],g=e+1<b.length,h=g?b[e+1]:0,l=e+2<b.length,m=l?b[e+2]:0,t=f>>2;f=(f&3)<<4|h>>4;h=(h&15)<<2|m>>
6;m&=63;l||(m=64,g||(h=64));d.push(c[t],c[f],c[h],c[m])}a.hash=d.join("")}return a}
;function Ig(a,b,c,d){Ib.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)}
;function Jg(){var a=new je;(a=a.isAvailable()?new qe(a,"yt.innertube"):null)||(a=new le("yt.innertube"),a=a.isAvailable()?a:null);this.b=a?new ee(a):null;this.f=document.domain||window.location.hostname}
Jg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.b)try{this.b.set(a,b,z()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(vd(b))}catch(f){return}else e=escape(b);Ig(a,e,c,this.f)};
Jg.prototype.get=function(a,b){var c=void 0,d=!this.b;if(!d)try{c=this.b.get(a)}catch(e){d=!0}if(d&&(c=Ib.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Jg.prototype.remove=function(a){this.b&&this.b.remove(a);var b=this.f;Ib.remove(""+a,"/",void 0===b?"youtube.com":b)};var Kg=new Jg;function Lg(a,b,c,d){if(d)return null;d=Kg.get("nextId",!0)||1;var e=Kg.get("requests",!0)||{};e[d]={method:a,request:b,authState:Hg(c),requestTime:Math.round(P())};Kg.set("nextId",d+1,86400,!0);Kg.set("requests",e,86400,!0);return d}
function Mg(a){var b=Kg.get("requests",!0)||{};delete b[a];Kg.set("requests",b,86400,!0)}
function Ng(a){var b=Kg.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=Hg(Gg(!1));nb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),Dg(a,d.method,e,{}));delete b[c]}}Kg.set("requests",b,86400,!0)}}
;function Fg(a){var b=this;this.b=a||{innertubeApiKey:Ie("INNERTUBE_API_KEY"),innertubeApiVersion:Ie("INNERTUBE_API_VERSION"),Fa:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:Ie("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ha:Ie("INNERTUBE_CONTEXT_HL"),Ga:Ie("INNERTUBE_CONTEXT_GL"),Ia:Ie("INNERTUBE_HOST_OVERRIDE")||"",Ja:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};Nf(function(){Ng(b)},0,5E3)}
function Dg(a,b,c,d){!R("VISITOR_DATA")&&.01>Math.random()&&S(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",B:c,qa:"JSON",M:function(){d.M()},
pa:d.M,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
oa:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
ub:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f="",g=a.b.Ia;g&&(f=g);g=a.b.Ja||!1;var h=Gg(g,f);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var l=""+f+("/youtubei/"+a.b.innertubeApiVersion+"/"+b)+"?alt=json&key="+a.b.innertubeApiKey,m;if(d.retry&&U("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(m=Lg(b,c,h,g))){var t=e.onSuccess,G=e.oa;e.onSuccess=function(a,b){Mg(m);t(a,b)};
c.oa=function(a,b){Mg(m);G(a,b)}}try{U("use_fetch_for_op_xhr")?Ve(l,e):df(l,e)}catch(Ja){if("InvalidAccessError"==Ja)m&&(Mg(m),m=0),S(Error("An extension is blocking network request."),"WARNING");
else throw Ja;}m&&Nf(function(){Ng(a)},0,5E3)}
;var Og=z().toString();
function Pg(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=z();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Og)for(a=1,b=0;b<Og.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Og.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Qg=Pg();function Rg(a){this.b=a}
function Sg(a){var b={};void 0!==a.b.trackingParams?b.trackingParams=a.b.trackingParams:(b.veType=a.b.veType,null!=a.b.veCounter&&(b.veCounter=a.b.veCounter),null!=a.b.elementIndex&&(b.elementIndex=a.b.elementIndex));void 0!==a.b.dataElement&&(b.dataElement=Sg(a.b.dataElement));void 0!==a.b.youtubeData&&(b.youtubeData=a.b.youtubeData);return b}
var Tg=1;function Ug(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Vg(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Wg(a){return R(Vg(void 0===a?0:a),void 0)}
u("yt.logging.screen.getRootVeType",Wg,void 0);function Xg(){var a=Wg(0),b;a?b=new Rg({veType:a,youtubeData:void 0}):b=null;return b}
function Yg(a){a=void 0===a?0:a;var b=R(Ug(a));b||0!=a||(b=R("EVENT_ID"));return b?b:null}
u("yt.logging.screen.getCurrentCsn",Yg,void 0);function Zg(a,b){var c=void 0===c?0:c;Q(Ug(c),a);Q(Vg(c),b);0==c&&(c=function(){setTimeout(function(){a&&Eg("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Qg,clientScreenNonce:a})},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(c):c())}
;function $g(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=vc(H(window.location.href)[3]||null);f&&e.push(f);f=vc(H(d)[3]||null);if(0<=La(e,f)||!f&&0==d.lastIndexOf("/",0))if(U("autoescape_tempdata_url")&&(e=document.createElement("a"),Wb(e,d),d=e.href),d){f=H(d);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
Yg();if(h){var h=parseInt(h,10);isFinite(h)&&0<h&&(d="ST-"+cb(d).toString(36),b=b?xc(b):"",Ig(d,b,h||5))}else h="ST-"+cb(d).toString(36),b=b?xc(b):"",Ig(h,b,5)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var t=void 0===t?window:t;c=t.location;a=yc(a,l)+m;a=a instanceof F?a:Rb(a);c.href=Pb(a)}return!0}
;function ah(a,b,c){a={attachChild:{csn:a,parentVisualElement:Sg(b),visualElements:[Sg(c)]}};a.eventTimeMs=Math.round(P());a.lactMs=qg();zg({endpoint:"log_interaction",payload:a},Fg)}
;function bh(a){a=a||{};this.url=a.url||"";this.args=a.args||ob(ch);this.assets=a.assets||{};this.attrs=a.attrs||ob(dh);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var ch={enablejsapi:1},dh={};bh.prototype.clone=function(){var a=new bh,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];a[b]="object"==Aa(c)?ob(c):c}return a};function eh(){J.call(this);this.b=[]}
n(eh,J);eh.prototype.m=function(){for(;this.b.length;){var a=this.b.pop();a.target.removeEventListener(a.name,a.rb)}J.prototype.m.call(this)};var fh=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function gh(a){a=a||"";if(window.spf){var b=a.match(fh);spf.style.load(a,b?b[1]:"",void 0)}else hh(a)}
function hh(a){var b=ih(a),c=document.getElementById(b),d=c&&qf(c,"loaded");d||c&&!d||(c=jh(a,b,function(){qf(c,"loaded")||(of(c),zf(b),T(y(Af,b),0))}))}
function jh(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=gc(a);Xb(d,a,"stylesheet");(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function ih(a){var b=document.createElement("A");a=Sb(a);Wb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+cb(b)}
;var kh=v("ytLoggingLatencyUsageStats_")||{};u("ytLoggingLatencyUsageStats_",kh,void 0);var lh=0;function mh(a){kh[a]=kh[a]||{count:0};var b=kh[a];b.count++;b.time=P();lh||(lh=Nf(nh,0,5E3));return 10<b.count?(11==b.count&&lf(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1}
function nh(){var a=P(),b;for(b in kh)6E4<a-kh[b].time&&delete kh[b];lh=0}
;function oh(a,b){this.version=a;this.args=b}
;function ph(a){this.topic=a}
ph.prototype.toString=function(){return this.topic};var qh=v("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.L;L.prototype.publish=L.prototype.K;L.prototype.clear=L.prototype.clear;u("ytPubsub2Pubsub2Instance",qh,void 0);u("ytPubsub2Pubsub2SubscribedKeys",v("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);u("ytPubsub2Pubsub2TopicToKeys",v("ytPubsub2Pubsub2TopicToKeys")||{},void 0);u("ytPubsub2Pubsub2IsAsync",v("ytPubsub2Pubsub2IsAsync")||{},void 0);
u("ytPubsub2Pubsub2SkipSubKey",null,void 0);function rh(a,b){var c=v("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var sh=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function th(){var a=R("TIMING_TICK_EXPIRATION");a||(a={},Q("TIMING_TICK_EXPIRATION",a));return a}
function uh(){var a=th(),b;for(b in a)Pf(a[b]);Q("TIMING_TICK_EXPIRATION",{})}
;function vh(a,b){oh.call(this,1,arguments)}
n(vh,oh);function wh(a,b){oh.call(this,1,arguments)}
n(wh,oh);var xh=new ph("aft-recorded"),yh=new ph("timing-sent");var zh={vc:!0},Y={},Ah=(Y.ad_allowed="adTypesAllowed",Y.ad_at="adType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.csn="clientScreenNonce",Y.docid="videoId",Y.is_nav="isNavigation",Y.yt_lt="loadType",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.paused="playerInfo.isPausedOnLoad",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_ad_pr=
"prerollAllowed",Y.yt_red="isRedSubscriber",Y.st="serverTimeMs",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y),Bh="ap c cver ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),Eh="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),
Fh=!1;function Gh(){var a=Hh().info.yt_lt="hot_bg";Ih().info_yt_lt=a;if(Jh())if("yt_lt"in Ah){var b=Ah.yt_lt;0<=La(Eh,b)&&(a=!!a);var c=a;if(Jh()){a={};b=b.split(".");for(var d=a,e=0;e<b.length-1;e++)d[b[e]]=d[b[e]]||{},d=d[b[e]];d[b[b.length-1]]=c;c=Kh();b=Object.keys(a).join("");mh("info_"+b+"_"+c)||(a.clientActionNonce=c,Eg("latencyActionInfo",a,void 0,void 0))}}else 0<=La(Bh,"yt_lt")||S(Error("Unknown label yt_lt logged with GEL CSI."))}
function Lh(){var a=Mh();if(a.aft)return a.aft;for(var b=R("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
var Nh=x(sh.clearResourceTimings||sh.webkitClearResourceTimings||sh.mozClearResourceTimings||sh.msClearResourceTimings||sh.oClearResourceTimings||ya,sh);function Kh(){var a=Hh().nonce;a||(a=Pg(),Hh().nonce=a);return a}
function Mh(){return Hh().tick}
function Ih(){var a=Hh();"gel"in a||(a.gel={});return a.gel}
function Hh(){return v("ytcsi.data_")||Oh()}
function Oh(){var a={tick:{},info:{}};u("ytcsi.data_",a,void 0);return a}
function Ph(a,b){u("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Qh(){var a=Mh(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Hh().info.yt_pvis}
function Jh(){return!!U("csi_on_gel")||!!Hh().useGel}
function Rh(){uh();if(!Jh()){var a=Mh(),b=Hh().info,c=a._start;for(f in a)if(0==f.lastIndexOf("_",0)&&w(a[f])){var d=f.slice(1);if(d in zh){var e=Oa(a[f],function(a){return Math.round(a-c)});
b["all_"+d]=e.join()}delete a[f]}var f=!!b.ap;if(d=v("ytglobal.timingReportbuilder_")){if(a=d(a,b,void 0))Sh(a,f),Oh(),Nh(),Ph(!1,void 0),R("TIMING_ACTION")&&Q("PREVIOUS_ACTION",R("TIMING_ACTION")),Q("TIMING_ACTION","")}else{var g=R("CSI_SERVICE_NAME","youtube");d={v:2,s:g,action:R("TIMING_ACTION",void 0)};e=Gh.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var h=window.location.protocol+v("ytplayer.config.assets.js");(h=sh.getEntriesByName?sh.getEntriesByName(h)[0]:null)?b.h5jse=Math.round(b.h5jse-
h.responseEnd):delete b.h5jse}a.aft=Lh();Qh()&&"youtube"==g&&(Gh(),g=a.vc,h=a.pbs,delete a.aft,b.aft=Math.round(h-g));for(var l in b)"_"!=l.charAt(0)&&(d[l]=b[l]);a.ps=P();b={};l=[];for(var m in a)"_"!=m.charAt(0)&&(g=Math.round(a[m]-c),b[m]=g,l.push(m+"."+g));d.rt=l.join(",");(a=v("ytdebug.logTiming"))&&a(d,b);Sh(d,f,void 0);rh(yh,new wh(b.aft+(e||0),void 0))}}}
function Sh(a,b,c){if(U("debug_csi_data")){var d=v("yt.timing.csiData");d||(d=[],u("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||gf(a,void 0,void 0,void 0,f)}catch(g){gf(a,void 0,void 0,void 0,f)}}else gf(a);Ph(!0,c)}
function Th(a){if("_"!=a[0]){var b=a;sh.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),sh.mark(b))}b=Mh();var c=P();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;b=th();if(c=b[a])Pf(c),b[a]=0;Ih()["tick_"+a]=void 0;P();Jh()?(b=Kh(),"_start"==a?mh("baseline_"+b)||Eg("latencyActionBaselined",{clientActionNonce:b},void 0,void 0):mh("tick_"+a+"_"+b)||Eg("latencyActionTicked",{tickName:a,clientActionNonce:b},void 0,void 0),a=!0):a=!1;if(a=!a)a=!v("yt.timing.pingSent_");if(a&&(b=Ie("TIMING_ACTION"),
a=Mh(),v("ytglobal.timingready_")&&b&&a._start&&(b=Lh()))){Fh||(rh(xh,new vh(Math.round(b-a._start),void 0)),Fh=!0);b=!0;c=R("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Rh()}}
;function Uh(a,b){J.call(this);this.l=this.U=a;this.G=b;this.u=!1;this.f={};this.R=this.D=null;this.H=new L;gd(this,y(hd,this.H));this.i={};this.O=this.T=this.h=this.Z=this.b=null;this.N=!1;this.j=this.A=null;this.V={};this.ua=["onReady"];this.Y=null;this.ka=NaN;this.P={};Vh(this);this.W("WATCH_LATER_VIDEO_ADDED",this.La.bind(this));this.W("WATCH_LATER_VIDEO_REMOVED",this.Ma.bind(this));this.W("onAdAnnounce",this.xa.bind(this));this.va=new eh(this);gd(this,y(hd,this.va))}
n(Uh,J);k=Uh.prototype;
k.ha=function(a){if(!this.g){a instanceof bh||(a=new bh(a));this.Z=a;this.b=a.clone();this.h=this.b.attrs.id||this.h;"video-player"==this.h&&(this.h=this.G,this.b.attrs.id=this.G);this.l.id==this.h&&(this.h+="-player",this.b.attrs.id=this.h);this.b.args.enablejsapi="1";this.b.args.playerapiid=this.G;this.T||(this.T=Wh(this,this.b.args.jsapicallback||"onYouTubePlayerReady"));this.b.args.jsapicallback=null;if(a=this.b.attrs.width)this.l.style.width=sc(Number(a)||a);if(a=this.b.attrs.height)this.l.style.height=sc(Number(a)||
a);Xh(this);this.u&&Yh(this)}};
k.Aa=function(){return this.Z};
function Yh(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function Zh(a){var b=!0,c=$h(a);c&&a.b&&(a=a.b,b=qf(c,"version")==a.assets.js);return b&&!!v("yt.player.Application.create")}
function Xh(a){if(!a.g&&!a.N){var b=Zh(a);if(b&&"html5"==($h(a)?"html5":null))a.O="html5",a.u||ai(a);else if(bi(a),a.O="html5",b&&a.j)a.U.appendChild(a.j),ai(a);else{a.b.loaded=!0;var c=!1;a.A=function(){c=!0;var b=a.b.clone();v("yt.player.Application.create")(a.U,b);ai(a)};
a.N=!0;b?a.A():(Ef(a.b.assets.js,a.A),gh(a.b.assets.css),ci(a)&&!c&&u("yt.player.Application.create",null,void 0))}}}
function $h(a){var b=ac(a.h);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.h));return b}
function ai(a){if(!a.g){var b=$h(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.N=!1,b.isNotServable&&b.isNotServable(a.b.args.video_id)||di(a)):a.ka=T(function(){ai(a)},50)}}
function di(a){Vh(a);a.u=!0;var b=$h(a);b.addEventListener&&(a.D=ei(a,b,"addEventListener"));b.removeEventListener&&(a.R=ei(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.f[e]||(a.f[e]=ei(a,b,e))}for(var f in a.i)a.D(f,a.i[f]);Yh(a);a.T&&a.T(a.f);a.H.K("onReady",a.f)}
function ei(a,b,c){var d=b[c];return function(){try{return a.Y=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Y=e,Le(e))}}}
function Vh(a){a.u=!1;if(a.R)for(var b in a.i)a.R(b,a.i[b]);for(var c in a.P)Pe(parseInt(c,10));a.P={};a.D=null;a.R=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=a.W.bind(a);a.f.removeEventListener=a.Ta.bind(a);a.f.destroy=a.dispose.bind(a);a.f.getLastError=a.Ba.bind(a);a.f.getPlayerType=a.Ca.bind(a);a.f.getCurrentVideoConfig=a.Aa.bind(a);a.f.loadNewVideoConfig=a.ha.bind(a);a.f.isReady=a.Ka.bind(a)}
k.Ka=function(){return this.u};
k.W=function(a,b){var c=this,d=Wh(this,b);if(d){if(!(0<=La(this.ua,a)||this.i[a])){var e=fi(this,a);this.D&&this.D(a,e)}this.H.subscribe(a,d);"onReady"==a&&this.u&&T(function(){d(c.f)},0)}};
k.Ta=function(a,b){if(!this.g){var c=Wh(this,b);c&&Zd(this.H,a,c)}};
function Wh(a,b){var c=b;if("string"==typeof b){if(a.V[b])return a.V[b];c=function(){var a=v(b);a&&a.apply(p,arguments)};
a.V[b]=c}return c?c:null}
function fi(a,b){var c="ytPlayer"+b+a.G;a.i[b]=c;p[c]=function(c){var d=T(function(){if(!a.g){a.H.K(b,c);var e=a.P,g=String(d);g in e&&delete e[g]}},0);
mb(a.P,String(d))};
return c}
k.xa=function(a){zf("a11y-announce",a)};
k.La=function(a){zf("WATCH_LATER_VIDEO_ADDED",a)};
k.Ma=function(a){zf("WATCH_LATER_VIDEO_REMOVED",a)};
k.Ca=function(){return this.O||($h(this)?"html5":null)};
k.Ba=function(){return this.Y};
function bi(a){Th("dcp");a.cancel();Vh(a);a.O=null;a.b&&(a.b.loaded=!1);var b=$h(a);b&&(Zh(a)||!ci(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));for(a=a.U;b=a.firstChild;)a.removeChild(b)}
k.cancel=function(){this.A&&Kf(this.b.assets.js,this.A);Pe(this.ka);this.N=!1};
k.m=function(){bi(this);if(this.j&&this.b&&this.j.destroy)try{this.j.destroy()}catch(b){S(b)}this.V=null;for(var a in this.i)p[this.i[a]]=null;this.Z=this.b=this.f=null;delete this.U;delete this.l;J.prototype.m.call(this)};
function ci(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var gi={},hi="player_uid_"+(1E9*Math.random()>>>0);function ii(a){var b="player";b=r(b)?ac(b):b;var c=hi+"_"+(b[Ea]||(b[Ea]=++Fa)),d=gi[c];if(d)return d.ha(a),d.f;d=new Uh(b,c);gi[c]=d;zf("player-added",d.f);gd(d,y(ji,d));T(function(){d.ha(a)},0);
return d.f}
function ji(a){delete gi[a.G]}
;function ki(){var a=li(),b=mi();if(!a&&!b||!window.JSON)return null;try{var c=a.get("yt-player-two-stage-token")}catch(d){}if(!r(c))try{c=b.get("yt-player-two-stage-token")}catch(d){}if(!r(c))return null;try{c=JSON.parse(c,void 0)}catch(d){}return c}
var mi=Jb(function(){var a=new je;return a.isAvailable()?new fe(a):null}),li=Jb(function(){var a=new ke;
return a.isAvailable()?new fe(a):null});function ni(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function oi(a,b,c){r(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return pi(a)}
function pi(a,b,c){if(Da(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function qi(a,b,c,d){if(Da(a)&&!w(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};r(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function ri(a){var b=a.video_id||a.videoId;if(r(b)){var c=ki()||{},d=ki()||{};q(void 0)?d[b]=void 0:delete d[b];var e=z()+3E5,f=mi();if(f&&window.JSON){r(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function si(a){J.call(this);this.b=a;this.b.subscribe("command",this.ra,this);this.f={};this.i=!1}
A(si,J);k=si.prototype;k.start=function(){this.i||this.g||(this.i=!0,ti(this.b,"RECEIVING"))};
k.ra=function(a,b,c){if(this.i&&!this.g){var d=b||{};switch(a){case "addEventListener":r(d.event)&&(a=d.event,a in this.f||(c=x(this.Va,this,a),this.f[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":r(d.event)&&ui(this,d.event);break;default:this.h.isReady()&&this.h[a]&&(b=vi(a,b||{}),c=this.h.handleExternalCall(a,b,c||null),(c=wi(a,c))&&this.i&&!this.g&&ti(this.b,a,c))}}};
k.Va=function(a,b){this.i&&!this.g&&ti(this.b,a,this.ca(a,b))};
k.ca=function(a,b){if(null!=b)return{value:b}};
function ui(a,b){b in a.f&&(a.removeEventListener(b,a.f[b]),delete a.f[b])}
k.m=function(){var a=this.b;a.g||Zd(a.b,"command",this.ra,this);this.b=null;for(var b in this.f)ui(this,b);si.w.m.call(this)};function xi(a,b){si.call(this,b);this.h=a;this.start()}
A(xi,si);xi.prototype.addEventListener=function(a,b){this.h.addEventListener(a,b)};
xi.prototype.removeEventListener=function(a,b){this.h.removeEventListener(a,b)};
function vi(a,b){switch(a){case "loadVideoById":return b=pi(b),ri(b),[b];case "cueVideoById":return b=pi(b),ri(b),[b];case "loadVideoByPlayerVars":return ri(b),[b];case "cueVideoByPlayerVars":return ri(b),[b];case "loadPlaylist":return b=qi(b),ri(b),[b];case "cuePlaylist":return b=qi(b),ri(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function wi(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
xi.prototype.ca=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return xi.w.ca.call(this,a,b)};
xi.prototype.m=function(){xi.w.m.call(this);delete this.h};function yi(a,b,c,d){J.call(this);this.f=b||null;this.u="*";this.h=c||null;this.sessionId=null;this.channel=d||null;this.D=!!a;this.l=x(this.A,this);window.addEventListener("message",this.l)}
n(yi,J);yi.prototype.A=function(a){if(!("*"!=this.h&&a.origin!=this.h||this.f&&a.source!=this.f)&&r(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.D&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.h=this.u=a.origin);this.f=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.i&&(!this.j||0<=La(this.j,b.func))&&this.i(b.func,b.args,a.origin)}}};
yi.prototype.sendMessage=function(a,b){var c=b||this.f;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=vd(a);c.postMessage(d,this.u)}catch(e){S(e,"WARNING")}}};
yi.prototype.m=function(){window.removeEventListener("message",this.l);J.prototype.m.call(this)};function zi(a,b,c){yi.call(this,a,b,c||R("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.j=this.b=this.i=null}
n(zi,yi);function Ai(){var a=this.f=new zi(!!R("WIDGET_ID_ENFORCE")),b=x(this.Pa,this);a.i=b;a.j=null;this.f.channel="widget";if(a=R("WIDGET_ID"))this.f.sessionId=a;this.h=[];this.j=!1;this.i={}}
k=Ai.prototype;k.Pa=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.i[a]||"onReady"==a||(this.addEventListener(a,Bi(this,a)),this.i[a]=!0)):this.ta(a,b,c)};
k.ta=function(){};
function Bi(a,b){return x(function(a){this.sendMessage(b,a)},a)}
k.addEventListener=function(){};
k.za=function(){this.j=!0;this.sendMessage("initialDelivery",this.da());this.sendMessage("onReady");D(this.h,this.sa,this);this.h=[]};
k.da=function(){return null};
function Ci(a,b){a.sendMessage("infoDelivery",b)}
k.sa=function(a){this.j?this.f.sendMessage(a):this.h.push(a)};
k.sendMessage=function(a,b){this.sa({event:a,info:void 0==b?null:b})};
k.dispose=function(){this.f=null};function Di(a){Ai.call(this);this.b=a;this.g=[];this.addEventListener("onReady",x(this.Na,this));this.addEventListener("onVideoProgress",x(this.Za,this));this.addEventListener("onVolumeChange",x(this.ab,this));this.addEventListener("onApiChange",x(this.Ua,this));this.addEventListener("onPlaybackQualityChange",x(this.Wa,this));this.addEventListener("onPlaybackRateChange",x(this.Xa,this));this.addEventListener("onStateChange",x(this.Ya,this));this.addEventListener("onWebglSettingsChanged",x(this.bb,
this))}
A(Di,Ai);k=Di.prototype;k.ta=function(a,b,c){if(this.b[a]){b=b||[];if(0<b.length&&ni(a)){var d=b;if(Da(d[0])&&!w(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=pi.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=oi.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=qi.apply(window,d)}d=e}ri(d);b.length=1;b[0]=d}this.b.handleExternalCall(a,b,c);ni(a)&&Ci(this,this.da())}};
k.Na=function(){var a=x(this.za,this);this.f.b=a};
k.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
k.da=function(){if(!this.b)return null;var a=this.b.getApiInterface();Ra(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(l){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=z()/1E3;return b};
k.Ya=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getVideoContentRect&&(a.videoContentRect=this.b.getVideoContentRect());this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());Ci(this,a)};
k.Wa=function(a){Ci(this,{playbackQuality:a})};
k.Xa=function(a){Ci(this,{playbackRate:a})};
k.Ua=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var l=f[g],m=this.b.getOption(e,l);b[e][l]=m}}this.sendMessage("apiInfoDelivery",b)};
k.ab=function(){Ci(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
k.Za=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());Ci(this,a)};
k.bb=function(){if(this.b.getSphericalProperties){var a={sphericalProperties:this.b.getSphericalProperties()};Ci(this,a)}};
k.dispose=function(){Di.w.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function Ei(a){a=void 0===a?!1:a;J.call(this);this.b=new L(a);gd(this,y(hd,this.b))}
A(Ei,J);Ei.prototype.subscribe=function(a,b,c){return this.g?0:this.b.subscribe(a,b,c)};
Ei.prototype.i=function(a,b){this.g||this.b.K.apply(this.b,arguments)};function Fi(a,b,c){Ei.call(this);this.f=a;this.h=b;this.j=c}
A(Fi,Ei);function ti(a,b,c){if(!a.g){var d=a.f;d.g||a.h!=d.b||(a={id:a.j,command:b},c&&(a.data=c),d.b.postMessage(vd(a),d.h))}}
Fi.prototype.m=function(){this.h=this.f=null;Fi.w.m.call(this)};function Gi(a,b,c){J.call(this);this.b=a;this.h=c;this.i=W(window,"message",x(this.j,this));this.f=new Fi(this,a,b);gd(this,y(hd,this.f))}
A(Gi,J);Gi.prototype.j=function(a){var b;if(b=!this.g)if(b=a.origin==this.h)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,r(b))){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.f,c.g||c.i("command",b.command,b.data,a.origin))}};
Gi.prototype.m=function(){kg(this.i);this.b=null;Gi.w.m.call(this)};function Hi(){var a=ob(Ii),b;return Pd(new K(function(c,d){a.onSuccess=function(a){Oe(a)?c(a):d(new Ji("Request failed, status="+a.status,"net.badstatus",a))};
a.onError=function(a){d(new Ji("Unknown request error","net.unknown",a))};
a.M=function(a){d(new Ji("Request timed out","net.timeout",a))};
b=Ye("//googleads.g.doubleclick.net/pagead/id",a)}),function(a){a instanceof Qd&&b.abort();
return Hd(a)})}
function Ji(a,b){C.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(Ji,C);function Ki(a){this.g=void 0===a?null:a;this.f=0;this.b=null}
Ki.prototype.then=function(a,b,c){return this.g?this.g.then(a,b,c):1===this.f&&a?(a=a.call(c,this.b),Cd(a)?a:Li(a)):2===this.f&&b?(a=b.call(c,this.b),Cd(a)?a:Mi(a)):this};
Ki.prototype.getValue=function(){return this.b};
Bd(Ki);function Mi(a){var b=new Ki;a=void 0===a?null:a;b.f=2;b.b=void 0===a?null:a;return b}
function Li(a){var b=new Ki;a=void 0===a?null:a;b.f=1;b.b=void 0===a?null:a;return b}
;function Ni(a){C.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Oi;this.isTimeout=a instanceof Ji&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Qd}
n(Ni,C);Ni.prototype.name="BiscottiError";function Oi(){C.call(this,"Biscotti ID is missing from server")}
n(Oi,C);Oi.prototype.name="BiscottiMissingError";var Ii={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Pi=null;function Qi(){if("1"===ib(Je(),"args","privembed"))return Hd(Error("Biscotti ID is not available in private embed mode"));Pi||(Pi=Pd(Hi().then(Ri),function(a){return Si(2,a)}));
return Pi}
function Ri(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Oi;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Oi;a=a.id;Ti(a);Pi=Li(a);Ui(18E5,2);return a}
function Si(a,b){var c=new Ni(b);Ti("");Pi=Mi(c);0<a&&Ui(12E4,a-1);throw c;}
function Ui(a,b){T(function(){Pd(Hi().then(Ri,function(a){return Si(b,a)}),ya)},a)}
function Ti(a){u("yt.ads.biscotti.lastId_",a,void 0)}
function Vi(){try{var a=v("yt.ads.biscotti.getId_");return a?a():Qi()}catch(b){return Hd(b)}}
;function Wi(a){C.apply(this,arguments)}
n(Wi,C);Wi.prototype.name="YuzuError";function Xi(){var a=new Wi("ID is missing"),b=new Wi("Timeout"),c=null,d=!1;Fe(function(){c=De();d=!0});
if(d)return c?Li(c):Mi(a);var e=new K(function(b,c){Fe(function(){var d=De();d?b(d):c(a)})}),f=te().then(function(){return Hd(b)});
return Nd(Kd([e,f]),function(){return f.cancel()})}
;function Yi(a){if("1"!==ib(Je(),"args","privembed")){a&&(v("yt.ads.biscotti.getId_")||Ia("yt.ads.biscotti.getId_",Qi));try{var b=Vi();if(U("enable_yuzu")){v("yt.ads.yuzu.getId_")||u("yt.ads.yuzu.getId_",Xi,void 0);try{var c=v("yt.ads.yuzu.getId_")()}catch(d){c=Hd(d)}}else c=Hd(new Wi("unimplemented"));Ld([b,c]).then(function(a){var b=a[0];a=a[1];if(b.aa||a.aa){b=b.value;a=a.value;var c={};c.dt=Kc;c.flash="0";a:{try{var d=window.top.location.href}catch(eb){d=2;break a}d=null!=d?d==window.document.location.href?
0:1:2}d=(c.frm=d,c);d.u_tz=-(new Date).getTimezoneOffset();var h=void 0===h?B:h;try{var l=h.history.length}catch(eb){l=0}d.u_his=l;d.u_java=!!B.navigator&&"unknown"!==typeof B.navigator.javaEnabled&&!!B.navigator.javaEnabled&&B.navigator.javaEnabled();B.screen&&(d.u_h=B.screen.height,d.u_w=B.screen.width,d.u_ah=B.screen.availHeight,d.u_aw=B.screen.availWidth,d.u_cd=B.screen.colorDepth);B.navigator&&B.navigator.plugins&&(d.u_nplug=B.navigator.plugins.length);B.navigator&&B.navigator.mimeTypes&&(d.u_nmime=
B.navigator.mimeTypes.length);d.ca_type="image";if(U("enable_server_side_search_pyv")||U("enable_server_side_mweb_search_pyv")){l=window;try{var m=l.screenX;var t=l.screenY}catch(eb){}try{var G=l.outerWidth;var Ja=l.outerHeight}catch(eb){}try{var Ch=l.innerWidth;var Dh=l.innerHeight}catch(eb){}m=[l.screenLeft,l.screenTop,m,t,l.screen?l.screen.availWidth:void 0,l.screen?l.screen.availTop:void 0,G,Ja,Ch,Dh];t=window.top;try{var V=(t||window).document,da="CSS1Compat"==V.compatMode?V.documentElement:
V.body;var Ma=(new $b(da.clientWidth,da.clientHeight)).round()}catch(eb){Ma=new $b(-12245933,-12245933)}V={};da=new ue;p.SVGElement&&p.document.createElementNS&&da.set(0);t=oc();t["allow-top-navigation-by-user-activation"]&&da.set(1);t["allow-popups-to-escape-sandbox"]&&da.set(2);da=ve(da);V.bc=da;V.bih=Ma.height;V.biw=Ma.width;V.brdim=m.join();Ma=(V.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[Ka.visibilityState||Ka.webkitVisibilityState||Ka.mozVisibilityState||""]||0,V.wgl=!!B.WebGLRenderingContext,
V);for(var re in Ma)d[re]=Ma[re]}void 0!==b&&(d.bid=b);void 0!==a&&(d.anid=a);d.bsq=Zi++;df("//www.youtube.com/ad_data_204",{Da:!1,B:d,withCredentials:!0})}});
T(Yi,18E5)}catch(d){S(d)}}}
var Zi=0;var Z=v("ytglobal.prefsUserPrefsPrefs_")||{};u("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function $i(){this.b=R("ALT_PREF_COOKIE_NAME","PREF");var a=Ib.get(""+this.b,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
k=$i.prototype;k.get=function(a,b){aj(a);bj(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
k.set=function(a,b){aj(a);bj(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
k.remove=function(a){aj(a);bj(a);delete Z[a]};
k.save=function(){Ig(this.b,this.dump(),63072E3)};
k.clear=function(){for(var a in Z)delete Z[a]};
k.dump=function(){var a=[],b;for(b in Z)a.push(b+"="+encodeURIComponent(String(Z[b])));return a.join("&")};
function bj(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function aj(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function cj(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
za($i);var dj=null,ej=null,fj=null,gj={};function hj(a){Eg(a.payload_name,a.payload,void 0,void 0)}
function ij(a){var b=a.id;a=a.ve_type;var c=Tg++;a=new Rg({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});gj[b]=a;b=Yg();c=Xg();b&&c&&ah(b,c,a)}
function jj(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(Zg(b,a),a=Xg()))for(var c in gj){var d=gj[c];d&&ah(b,a,d)}}
function kj(a){gj[a.id]=new Rg({trackingParams:a.tracking_params})}
function lj(a){var b=Yg();a=gj[a.id];b&&a&&Eg("visualElementGestured",{csn:b,ve:Sg(a),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"})}
function mj(a){a=a.ids;var b=Yg();if(b)for(var c=0;c<a.length;c++){var d=gj[a[c]];d&&Eg("visualElementShown",{csn:b,ve:Sg(d),eventType:1})}}
function nj(){var a=dj;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;u("yt.setConfig",Q,void 0);u("yt.config.set",Q,void 0);u("yt.setMsg",nf,void 0);u("yt.msgs.set",nf,void 0);u("yt.logging.errors.log",lf,void 0);
u("writeEmbed",function(){var a=R("PLAYER_CONFIG",void 0);Yi(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=R("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);R("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&ri(a.args);dj=a=ii(a);a.addEventListener("onScreenChanged",jj);a.addEventListener("onLogClientVeCreated",ij);a.addEventListener("onLogServerVeCreated",kj);a.addEventListener("onLogToGel",hj);
a.addEventListener("onLogVeClicked",lj);a.addEventListener("onLogVesShown",mj);a.addEventListener("onReady",nj);b=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?fj=new Di(a):R("ENABLE_POST_API")&&r(b)&&r(c)&&(ej=new Gi(window.parent,b,c),fj=new xi(a,ej.f));c=Ie("BG_P");ag(c)&&(R("BG_I")||R("BG_IU"))&&(Xf=!0,Wf.initialize(R("BG_I",null),R("BG_IU",null),c,$f));Sf()},void 0);
u("yt.www.watch.ads.restrictioncookie.spr",function(a){gf(a+"mac_204?action_fcts=1");return!0},void 0);
var oj=Ke(function(){Th("ol");var a=$i.getInstance(),b=!!((cj("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&kd(document.body,"exp-invert-logo"))if(c&&!kd(document.body,"inverted-hdpi")){var d=document.body;d.classList?d.classList.add("inverted-hdpi"):kd(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")}else!c&&kd(document.body,"inverted-hdpi")&&ld();b!=c&&(b="f"+(Math.floor(119/31)+1),d=cj(b)||0,d=c?d|67108864:d&-67108865,
0==d?delete Z[b]:Z[b]=d.toString(16).toString(),a.save())}),pj=Ke(function(){var a=dj;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();R("PL_ATT")&&Wf.dispose();a=0;for(var b=Qf.length;a<b;a++)Pf(Qf[a]);Qf.length=0;Jf("//static.doubleclick.net/instream/ad_status.js");Rf=!1;Q("DCLKSTAT",0);id(fj,ej);if(a=dj)a.removeEventListener("onScreenChanged",jj),a.removeEventListener("onLogClientVeCreated",ij),a.removeEventListener("onLogServerVeCreated",kj),a.removeEventListener("onLogToGel",hj),a.removeEventListener("onLogVeClicked",lj),a.removeEventListener("onLogVesShown",mj),a.removeEventListener("onReady",
nj),a.destroy();gj={}});
window.addEventListener?(window.addEventListener("load",oj),window.addEventListener("unload",pj)):window.attachEvent&&(window.attachEvent("onload",oj),window.attachEvent("onunload",pj));Ia("yt.abuse.player.botguardInitialized",v("yt.abuse.player.botguardInitialized")||bg);Ia("yt.abuse.player.invokeBotguard",v("yt.abuse.player.invokeBotguard")||cg);Ia("yt.abuse.dclkstatus.checkDclkStatus",v("yt.abuse.dclkstatus.checkDclkStatus")||Tf);
Ia("yt.player.exports.navigate",v("yt.player.exports.navigate")||$g);Ia("yt.util.activity.init",v("yt.util.activity.init")||ng);Ia("yt.util.activity.getTimeSinceActive",v("yt.util.activity.getTimeSinceActive")||qg);Ia("yt.util.activity.setTimestamp",v("yt.util.activity.setTimestamp")||og);}).call(this);
