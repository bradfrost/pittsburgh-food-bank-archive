/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);
/*! jQuery Mobile v1.3.2 | Copyright 2010, 2013 jQuery Foundation, Inc. | jquery.org/license */

(function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(e){e.mobile={}})(e),function(e,t,r){var i={};e.mobile=e.extend(e.mobile,{version:"1.3.2",ns:"",subPageUrlKey:"ui-page",activePageClass:"ui-page-active",activeBtnClass:"ui-btn-active",focusClass:"ui-focus",ajaxEnabled:!0,hashListeningEnabled:!0,linkBindingEnabled:!0,defaultPageTransition:"fade",maxTransitionWidth:!1,minScrollBack:250,touchOverflowEnabled:!1,defaultDialogTransition:"pop",pageLoadErrorMessage:"Error Loading Page",pageLoadErrorMessageTheme:"e",phonegapNavigationEnabled:!1,autoInitializePage:!0,pushStateEnabled:!0,ignoreContentEnabled:!1,orientationChangeEnabled:!0,buttonMarkup:{hoverDelay:200},window:e(t),document:e(n),keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},behaviors:{},silentScroll:function(n){e.type(n)!=="number"&&(n=e.mobile.defaultHomeScroll),e.event.special.scrollstart.enabled=!1,setTimeout(function(){t.scrollTo(0,n),e.mobile.document.trigger("silentscroll",{x:0,y:n})},20),setTimeout(function(){e.event.special.scrollstart.enabled=!0},150)},nsNormalizeDict:i,nsNormalize:function(t){if(!t)return;return i[t]||(i[t]=e.camelCase(e.mobile.ns+t))},getInheritedTheme:function(e,t){var n=e[0],r="",i=/ui-(bar|body|overlay)-([a-z])\b/,s,o;while(n){s=n.className||"";if(s&&(o=i.exec(s))&&(r=o[2]))break;n=n.parentNode}return r||t||"a"},closestPageData:function(e){return e.closest(':jqmData(role="page"), :jqmData(role="dialog")').data("mobile-page")},enhanceable:function(e){return this.haveParents(e,"enhance")},hijackable:function(e){return this.haveParents(e,"ajax")},haveParents:function(t,n){if(!e.mobile.ignoreContentEnabled)return t;var r=t.length,i=e(),s,o,u;for(var a=0;a<r;a++){o=t.eq(a),u=!1,s=t[a];while(s){var f=s.getAttribute?s.getAttribute("data-"+e.mobile.ns+n):"";if(f==="false"){u=!0;break}s=s.parentNode}u||(i=i.add(o))}return i},getScreenHeight:function(){return t.innerHeight||e.mobile.window.height()}},e.mobile),e.fn.jqmData=function(t,n){var i;return typeof t!="undefined"&&(t&&(t=e.mobile.nsNormalize(t)),arguments.length<2||n===r?i=this.data(t):i=this.data(t,n)),i},e.jqmData=function(t,n,r){var i;return typeof n!="undefined"&&(i=e.data(t,n?e.mobile.nsNormalize(n):n,r)),i},e.fn.jqmRemoveData=function(t){return this.removeData(e.mobile.nsNormalize(t))},e.jqmRemoveData=function(t,n){return e.removeData(t,e.mobile.nsNormalize(n))},e.fn.removeWithDependents=function(){e.removeWithDependents(this)},e.removeWithDependents=function(t){var n=e(t);(n.jqmData("dependents")||e()).remove(),n.remove()},e.fn.addDependents=function(t){e.addDependents(e(this),t)},e.addDependents=function(t,n){var r=e(t).jqmData("dependents")||e();e(t).jqmData("dependents",e.merge(r,n))},e.fn.getEncodedText=function(){return e("<div/>").text(e(this).text()).html()},e.fn.jqmEnhanceable=function(){return e.mobile.enhanceable(this)},e.fn.jqmHijackable=function(){return e.mobile.hijackable(this)};var s=e.find,o=/:jqmData\(([^)]*)\)/g;e.find=function(t,n,r,i){return t=t.replace(o,"[data-"+(e.mobile.ns||"")+"$1]"),s.call(this,t,n,r,i)},e.extend(e.find,s),e.find.matches=function(t,n){return e.find(t,null,null,n)},e.find.matchesSelector=function(t,n){return e.find(n,null,null,[t]).length>0}}(e,this),function(e,t,n,r){function x(e){while(e&&typeof e.originalEvent!="undefined")e=e.originalEvent;return e}function T(t,n){var i=t.type,s,o,a,l,c,h,p,d,v;t=e.Event(t),t.type=n,s=t.originalEvent,o=e.event.props,i.search(/^(mouse|click)/)>-1&&(o=f);if(s)for(p=o.length,l;p;)l=o[--p],t[l]=s[l];i.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(i.search(/^touch/)!==-1){a=x(s),i=a.touches,c=a.changedTouches,h=i&&i.length?i[0]:c&&c.length?c[0]:r;if(h)for(d=0,v=u.length;d<v;d++)l=u[d],t[l]=h[l]}return t}function N(t){var n={},r,s;while(t){r=e.data(t,i);for(s in r)r[s]&&(n[s]=n.hasVirtualBinding=!0);t=t.parentNode}return n}function C(t,n){var r;while(t){r=e.data(t,i);if(r&&(!n||r[n]))return t;t=t.parentNode}return null}function k(){g=!1}function L(){g=!0}function A(){E=0,v.length=0,m=!1,L()}function O(){k()}function M(){_(),c=setTimeout(function(){c=0,A()},e.vmouse.resetTimerDuration)}function _(){c&&(clearTimeout(c),c=0)}function D(t,n,r){var i;if(r&&r[t]||!r&&C(n.target,t))i=T(n,t),e(n.target).trigger(i);return i}function P(t){var n=e.data(t.target,s);if(!m&&(!E||E!==n)){var r=D("v"+t.type,t);r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation())}}function H(t){var n=x(t).touches,r,i;if(n&&n.length===1){r=t.target,i=N(r);if(i.hasVirtualBinding){E=w++,e.data(r,s,E),_(),O(),d=!1;var o=x(t).touches[0];h=o.pageX,p=o.pageY,D("vmouseover",t,i),D("vmousedown",t,i)}}}function B(e){if(g)return;d||D("vmousecancel",e,N(e.target)),d=!0,M()}function j(t){if(g)return;var n=x(t).touches[0],r=d,i=e.vmouse.moveDistanceThreshold,s=N(t.target);d=d||Math.abs(n.pageX-h)>i||Math.abs(n.pageY-p)>i,d&&!r&&D("vmousecancel",t,s),D("vmousemove",t,s),M()}function F(e){if(g)return;L();var t=N(e.target),n;D("vmouseup",e,t);if(!d){var r=D("vclick",e,t);r&&r.isDefaultPrevented()&&(n=x(e).changedTouches[0],v.push({touchID:E,x:n.clientX,y:n.clientY}),m=!0)}D("vmouseout",e,t),d=!1,M()}function I(t){var n=e.data(t,i),r;if(n)for(r in n)if(n[r])return!0;return!1}function q(){}function R(t){var n=t.substr(1);return{setup:function(r,s){I(this)||e.data(this,i,{});var o=e.data(this,i);o[t]=!0,l[t]=(l[t]||0)+1,l[t]===1&&b.bind(n,P),e(this).bind(n,q),y&&(l.touchstart=(l.touchstart||0)+1,l.touchstart===1&&b.bind("touchstart",H).bind("touchend",F).bind("touchmove",j).bind("scroll",B))},teardown:function(r,s){--l[t],l[t]||b.unbind(n,P),y&&(--l.touchstart,l.touchstart||b.unbind("touchstart",H).unbind("touchmove",j).unbind("touchend",F).unbind("scroll",B));var o=e(this),u=e.data(this,i);u&&(u[t]=!1),o.unbind(n,q),I(this)||o.removeData(i)}}}var i="virtualMouseBindings",s="virtualTouchID",o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),u="clientX clientY pageX pageY screenX screenY".split(" "),a=e.event.mouseHooks?e.event.mouseHooks.props:[],f=e.event.props.concat(a),l={},c=0,h=0,p=0,d=!1,v=[],m=!1,g=!1,y="addEventListener"in n,b=e(n),w=1,E=0,S;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(var U=0;U<o.length;U++)e.event.special[o[U]]=R(o[U]);y&&n.addEventListener("click",function(t){var n=v.length,r=t.target,i,o,u,a,f,l;if(n){i=t.clientX,o=t.clientY,S=e.vmouse.clickDistanceThreshold,u=r;while(u){for(a=0;a<n;a++){f=v[a],l=0;if(u===r&&Math.abs(f.x-i)<S&&Math.abs(f.y-o)<S||e.data(u,s)===f.touchID){t.preventDefault(),t.stopPropagation();return}}u=u.parentNode}}},!0)}(e,t,n),function(e,t){function i(e){var t;while(e){t=typeof e.className=="string"&&e.className+" ";if(t&&t.indexOf("ui-btn ")>-1&&t.indexOf("ui-disabled ")<0)break;e=e.parentNode}return e}function s(r,i,s,o,u){var a=e.data(r[0],"buttonElements");r.removeClass(i).addClass(s),a&&(a.bcls=e(n.createElement("div")).addClass(a.bcls+" "+s).removeClass(i).attr("class"),o!==t&&(a.hover=o),a.state=u)}var r=function(e,n){var r=e.getAttribute(n);return r==="true"?!0:r==="false"?!1:r===null?t:r};e.fn.buttonMarkup=function(i){var s=this,u="data-"+e.mobile.ns,a;i=i&&e.type(i)==="object"?i:{};for(var f=0;f<s.length;f++){var l=s.eq(f),c=l[0],h=e.extend({},e.fn.buttonMarkup.defaults,{icon:i.icon!==t?i.icon:r(c,u+"icon"),iconpos:i.iconpos!==t?i.iconpos:r(c,u+"iconpos"),theme:i.theme!==t?i.theme:r(c,u+"theme")||e.mobile.getInheritedTheme(l,"c"),inline:i.inline!==t?i.inline:r(c,u+"inline"),shadow:i.shadow!==t?i.shadow:r(c,u+"shadow"),corners:i.corners!==t?i.corners:r(c,u+"corners"),iconshadow:i.iconshadow!==t?i.iconshadow:r(c,u+"iconshadow"),mini:i.mini!==t?i.mini:r(c,u+"mini")},i),p="ui-btn-inner",d="ui-btn-text",v,m,g=!1,y="up",b,w,E,S;for(a in h)h[a]===t||h[a]===null?l.removeAttr(u+a):c.setAttribute(u+a,h[a]);S=e.data(c.tagName==="INPUT"||c.tagName==="BUTTON"?c.parentNode:c,"buttonElements"),S?(c=S.outer,l=e(c),b=S.inner,w=S.text,e(S.icon).remove(),S.icon=null,g=S.hover,y=S.state):(b=n.createElement(h.wrapperEls),w=n.createElement(h.wrapperEls)),E=h.icon?n.createElement("span"):null,o&&!S&&o(),h.theme||(h.theme=e.mobile.getInheritedTheme(l,"c")),v="ui-btn ",v+=g?"ui-btn-hover-"+h.theme:"",v+=y?" ui-btn-"+y+"-"+h.theme:"",v+=h.shadow?" ui-shadow":"",v+=h.corners?" ui-btn-corner-all":"",h.mini!==t&&(v+=h.mini===!0?" ui-mini":" ui-fullsize"),h.inline!==t&&(v+=h.inline===!0?" ui-btn-inline":" ui-btn-block"),h.icon&&(h.icon="ui-icon-"+h.icon,h.iconpos=h.iconpos||"left",m="ui-icon "+h.icon,h.iconshadow&&(m+=" ui-icon-shadow")),h.iconpos&&(v+=" ui-btn-icon-"+h.iconpos,h.iconpos==="notext"&&!l.attr("title")&&l.attr("title",l.getEncodedText())),S&&l.removeClass(S.bcls||""),l.removeClass("ui-link").addClass(v),b.className=p,w.className=d,S||b.appendChild(w);if(E){E.className=m;if(!S||!S.icon)E.innerHTML="&#160;",b.appendChild(E)}while(c.firstChild&&!S)w.appendChild(c.firstChild);S||c.appendChild(b),S={hover:g,state:y,bcls:v,outer:c,inner:b,text:w,icon:E},e.data(c,"buttonElements",S),e.data(b,"buttonElements",S),e.data(w,"buttonElements",S),E&&e.data(E,"buttonElements",S)}return this},e.fn.buttonMarkup.defaults={corners:!0,shadow:!0,iconshadow:!0,wrapperEls:"span"};var o=function(){var n=e.mobile.buttonMarkup.hoverDelay,r,u;e.mobile.document.bind({"vmousedown vmousecancel vmouseup vmouseover vmouseout focus blur scrollstart":function(o){var a,f=e(i(o.target)),l=o.originalEvent&&/^touch/.test(o.originalEvent.type),c=o.type;if(f.length){a=f.attr("data-"+e.mobile.ns+"theme");if(c==="vmousedown")l?r=setTimeout(function(){s(f,"ui-btn-up-"+a,"ui-btn-down-"+a,t,"down")},n):s(f,"ui-btn-up-"+a,"ui-btn-down-"+a,t,"down");else if(c==="vmousecancel"||c==="vmouseup")s(f,"ui-btn-down-"+a,"ui-btn-up-"+a,t,"up");else if(c==="vmouseover"||c==="focus")l?u=setTimeout(function(){s(f,"ui-btn-up-"+a,"ui-btn-hover-"+a,!0,"")},n):s(f,"ui-btn-up-"+a,"ui-btn-hover-"+a,!0,"");else if(c==="vmouseout"||c==="blur"||c==="scrollstart")s(f,"ui-btn-hover-"+a+" ui-btn-down-"+a,"ui-btn-up-"+a,!1,"up"),r&&clearTimeout(r),u&&clearTimeout(u)}},"focusin focus":function(t){e(i(t.target)).addClass(e.mobile.focusClass)},"focusout blur":function(t){e(i(t.target)).removeClass(e.mobile.focusClass)}}),o=null};e.mobile.document.bind("pagecreate create",function(t){e(":jqmData(role='button'), .ui-bar > a, .ui-header > a, .ui-footer > a, .ui-bar > :jqmData(role='controlgroup') > a",t.target).jqmEnhanceable().not("button, input, .ui-btn, :jqmData(role='none'), :jqmData(role='nojs')").buttonMarkup()})}(e),function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(t,n,r){var i,s,o,u,a=t.split(".")[0];t=t.split(".")[1],i=a+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[a]=e[a]||{},s=e[a][t],o=e[a][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,i){e.isFunction(i)&&(r[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},r=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=r,s=i.apply(this,arguments),this._super=t,this._superApply=n,s}}())}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix:t},r,{constructor:o,namespace:a,widgetName:t,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o)},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName||n;e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.jquery?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():e.data(this,s,new i(o,this))}),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,n,r){var i,s=this;typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;return(typeof o=="string"?s[o]:o).apply(s,arguments)}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);var a=r.match(/^(\w+)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];l?i.delegate(l,f,u):n.bind(f,u)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&e.effects.effect[u]?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}})}(e),function(e,t){e.widget("mobile.widget",{_createWidget:function(){e.Widget.prototype._createWidget.apply(this,arguments),this._trigger("init")},_getCreateOptions:function(){var n=this.element,r={};return e.each(this.options,function(e){var i=n.jqmData(e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}));i!==t&&(r[e]=i)}),r},enhanceWithin:function(t,n){this.enhance(e(this.options.initSelector,e(t)),n)},enhance:function(t,n){var r,i,s=e(t),o=this;s=e.mobile.enhanceable(s),n&&s.length&&(r=e.mobile.closestPageData(s),i=r&&r.keepNativeSelector()||"",s=s.not(i)),s[this.widgetName]()},raise:function(e){throw"Widget ["+this.widgetName+"]: "+e}})}(e),function(e,t){e.widget("mobile.page",e.mobile.widget,{options:{theme:"c",domCache:!1,keepNativeDefault:":jqmData(role='none'), :jqmData(role='nojs')"},_create:function(){if(this._trigger("beforecreate")===!1)return!1;this.element.attr("tabindex","0").addClass("ui-page ui-body-"+this.options.theme),this._on(this.element,{pagebeforehide:"removeContainerBackground",pagebeforeshow:"_handlePageBeforeShow"})},_handlePageBeforeShow:function(e){this.setContainerBackground()},removeContainerBackground:function(){e.mobile.pageContainer.removeClass("ui-overlay-"+e.mobile.getInheritedTheme(this.element.parent()))},setContainerBackground:function(t){this.options.theme&&e.mobile.pageContainer.addClass("ui-overlay-"+(t||this.options.theme))},keepNativeSelector:function(){var t=this.options,n=t.keepNative&&e.trim(t.keepNative);return n&&t.keepNative!==t.keepNativeDefault?[t.keepNative,t.keepNativeDefault].join(", "):t.keepNativeDefault}})}(e),function(e,t){e.mobile.page.prototype.options.degradeInputs={color:!1,date:!1,datetime:!1,"datetime-local":!1,email:!1,month:!1,number:!1,range:"number",search:"text",tel:!1,time:!1,url:!1,week:!1},e.mobile.document.bind("pagecreate create",function(t){var n=e.mobile.closestPageData(e(t.target)),r;if(!n)return;r=n.options,e(t.target).find("input").not(n.keepNativeSelector()).each(function(){var t=e(this),n=this.getAttribute("type"),i=r.degradeInputs[n]||"text";if(r.degradeInputs[n]){var s=e("<div>").html(t.clone()).html(),o=s.indexOf(" type=")>-1,u=o?/\s+type=["']?\w+['"]?/:/\/?>/,a=' type="'+i+'" data-'+e.mobile.ns+'type="'+n+'"'+(o?"":">");t.replaceWith(s.replace(u,a))}})})}(e),function(e){var t=e("meta[name=viewport]"),n=t.attr("content"),r=n+",maximum-scale=1, user-scalable=no",i=n+",maximum-scale=10, user-scalable=yes",s=/(user-scalable[\s]*=[\s]*no)|(maximum-scale[\s]*=[\s]*1)[$,\s]/.test(n);e.mobile.zoom=e.extend({},{enabled:!s,locked:!1,disable:function(n){!s&&!e.mobile.zoom.locked&&(t.attr("content",r),e.mobile.zoom.enabled=!1,e.mobile.zoom.locked=n||!1)},enable:function(n){!s&&(!e.mobile.zoom.locked||n===!0)&&(t.attr("content",i),e.mobile.zoom.enabled=!0,e.mobile.zoom.locked=!1)},restore:function(){s||(t.attr("content",n),e.mobile.zoom.enabled=!0)}})}(e),function(e,t){e.widget("mobile.textinput",e.mobile.widget,{options:{theme:null,mini:!1,preventFocusZoom:/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1,initSelector:"input[type='text'], input[type='search'], :jqmData(type='search'), input[type='number'], :jqmData(type='number'), input[type='password'], input[type='email'], input[type='url'], input[type='tel'], textarea, input[type='time'], input[type='date'], input[type='month'], input[type='week'], input[type='datetime'], input[type='datetime-local'], input[type='color'], input:not([type]), input[type='file']",clearBtn:!1,clearSearchButtonText:null,clearBtnText:"clear text",disabled:!1},_create:function(){function d(){setTimeout(function(){f.toggleClass("ui-input-clear-hidden",!n.val())},0)}var t=this,n=this.element,r=this.options,i=r.theme||e.mobile.getInheritedTheme(this.element,"c"),s=" ui-body-"+i,o=r.mini?" ui-mini":"",u=n.is("[type='search'], :jqmData(type='search')"),a,f,l=r.clearSearchButtonText||r.clearBtnText,c=n.is("textarea, :jqmData(type='range')"),h=!!r.clearBtn&&!c,p=n.is("input")&&!n.is(":jqmData(type='range')");e("label[for='"+n.attr("id")+"']").addClass("ui-input-text"),a=n.addClass("ui-input-text ui-body-"+i),typeof n[0].autocorrect!="undefined"&&!e.support.touchOverflow&&(n[0].setAttribute("autocorrect","off"),n[0].setAttribute("autocomplete","off")),u?a=n.wrap("<div class='ui-input-search ui-shadow-inset ui-btn-corner-all ui-btn-shadow ui-icon-searchfield"+s+o+"'></div>").parent():p&&(a=n.wrap("<div class='ui-input-text ui-shadow-inset ui-corner-all ui-btn-shadow"+s+o+"'></div>").parent()),h||u?(f=e("<a href='#' class='ui-input-clear' title='"+l+"'>"+l+"</a>").bind("click",function(e){n.val("").focus().trigger("change"),f.addClass("ui-input-clear-hidden"),e.preventDefault()}).appendTo(a).buttonMarkup({icon:"delete",iconpos:"notext",corners:!0,shadow:!0,mini:r.mini}),u||a.addClass("ui-input-has-clear"),d(),n.bind("paste cut keyup input focus change blur",d)):!p&&!u&&n.addClass("ui-corner-all ui-shadow-inset"+s+o),n.focus(function(){r.preventFocusZoom&&e.mobile.zoom.disable(!0),a.addClass(e.mobile.focusClass)}).blur(function(){a.removeClass(e.mobile.focusClass),r.preventFocusZoom&&e.mobile.zoom.enable(!0)});if(n.is("textarea")){var v=15,m=100,g;this._keyup=function(){var e=n[0].scrollHeight,t=n[0].clientHeight;if(t<e){var r=parseFloat(n.css("padding-top")),i=parseFloat(n.css("padding-bottom")),s=r+i;n.height(e-s+v)}},n.on("keyup change input paste",function(){clearTimeout(g),g=setTimeout(t._keyup,m)}),this._on(!0,e.mobile.document,{pagechange:"_keyup"}),e.trim(n.val())&&this._on(!0,e.mobile.window,{load:"_keyup"})}n.attr("disabled")&&this.disable()},disable:function(){var e,t=this.element.is("[type='search'], :jqmData(type='search')"),n=this.element.is("input")&&!this.element.is(":jqmData(type='range')"),r=this.element.attr("disabled",!0)&&(n||t);return r?e=this.element.parent():e=this.element,e.addClass("ui-disabled"),this._setOption("disabled",!0)},enable:function(){var e,t=this.element.is("[type='search'], :jqmData(type='search')"),n=this.element.is("input")&&!this.element.is(":jqmData(type='range')"),r=this.element.attr("disabled",!1)&&(n||t);return r?e=this.element.parent():e=this.element,e.removeClass("ui-disabled"),this._setOption("disabled",!1)}}),e.mobile.document.bind("pagecreate create",function(t){e.mobile.textinput.prototype.enhanceWithin(t.target,!0)})}(e),function(e,t){e.mobile.behaviors.formReset={_handleFormReset:function(){this._on(this.element.closest("form"),{reset:function(){this._delay("_reset")}})}}}(e),function(e,r){e.widget("mobile.slider",e.mobile.widget,e.extend({widgetEventPrefix:"slide",options:{theme:null,trackTheme:null,disabled:!1,initSelector:"input[type='range'], :jqmData(type='range'), :jqmData(role='slider')",mini:!1,highlight:!1},_create:function(){var i=this,s=this.element,o=e.mobile.getInheritedTheme(s,"c"),u=this.options.theme||o,a=this.options.trackTheme||o,f=s[0].nodeName.toLowerCase(),l=this.isToggleSwitch=f==="select",c=s.parent().is(":jqmData(role='rangeslider')"),h=this.isToggleSwitch?"ui-slider-switch":"",p=s.attr("id"),d=e("[for='"+p+"']"),v=d.attr("id")||p+"-label",m=d.attr("id",v),g=this.isToggleSwitch?0:parseFloat(s.attr("min")),y=this.isToggleSwitch?s.find("option").length-1:parseFloat(s.attr("max")),b=t.parseFloat(s.attr("step")||1),w=this.options.mini||s.jqmData("mini")?" ui-mini":"",E=n.createElement("a"),S=e(E),x=n.createElement("div"),T=e(x),N=this.options.highlight&&!this.isToggleSwitch?function(){var t=n.createElement("div");return t.className="ui-slider-bg "+e.mobile.activeBtnClass+" ui-btn-corner-all",e(t).prependTo(T)}():!1,C,k;E.setAttribute("href","#"),x.setAttribute("role","application"),x.className=[this.isToggleSwitch?"ui-slider ":"ui-slider-track ",h," ui-btn-down-",a," ui-btn-corner-all",w].join(""),E.className="ui-slider-handle",x.appendChild(E),S.buttonMarkup({corners:!0,theme:u,shadow:!0}).attr({role:"slider","aria-valuemin":g,"aria-valuemax":y,"aria-valuenow":this._value(),"aria-valuetext":this._value(),title:this._value(),"aria-labelledby":v}),e.extend(this,{slider:T,handle:S,type:f,step:b,max:y,min:g,valuebg:N,isRangeslider:c,dragging:!1,beforeStart:null,userModified:!1,mouseMoved:!1});if(this.isToggleSwitch){k=n.createElement("div"),k.className="ui-slider-inneroffset";for(var L=0,A=x.childNodes.length;L<A;L++)k.appendChild(x.childNodes[L]);x.appendChild(k),S.addClass("ui-slider-handle-snapping"),C=s.find("option");for(var O=0,M=C.length;O<M;O++){var _=O?"a":"b",D=O?" "+e.mobile.activeBtnClass:" ui-btn-down-"+a,P=n.createElement("div"),H=n.createElement("span");H.className=["ui-slider-label ui-slider-label-",_,D," ui-btn-corner-all"].join(""),H.setAttribute("role","img"),H.appendChild(n.createTextNode(C[O].innerHTML)),e(H).prependTo(T)}i._labels=e(".ui-slider-label",T)}m.addClass("ui-slider"),s.addClass(this.isToggleSwitch?"ui-slider-switch":"ui-slider-input"),this._on(s,{change:"_controlChange",keyup:"_controlKeyup",blur:"_controlBlur",vmouseup:"_controlVMouseUp"}),T.bind("vmousedown",e.proxy(this._sliderVMouseDown,this)).bind("vclick",!1),this._on(n,{vmousemove:"_preventDocumentDrag"}),this._on(T.add(n),{vmouseup:"_sliderVMouseUp"}),T.insertAfter(s),!this.isToggleSwitch&&!c&&(k=this.options.mini?"<div class='ui-slider ui-mini'>":"<div class='ui-slider'>",s.add(T).wrapAll(k)),this.isToggleSwitch&&this.handle.bind({focus:function(){T.addClass(e.mobile.focusClass)},blur:function(){T.removeClass(e.mobile.focusClass)}}),this._on(this.handle,{vmousedown:"_handleVMouseDown",keydown:"_handleKeydown",keyup:"_handleKeyup"}),this.handle.bind("vclick",!1),this._handleFormReset(),this.refresh(r,r,!0)},_controlChange:function(e){if(this._trigger("controlchange",e)===!1)return!1;this.mouseMoved||this.refresh(this._value(),!0)},_controlKeyup:function(e){this.refresh(this._value(),!0,!0)},_controlBlur:function(e){this.refresh(this._value(),!0)},_controlVMouseUp:function(e){this._checkedRefresh()},_handleVMouseDown:function(e){this.handle.focus()},_handleKeydown:function(t){var n=this._value();if(this.options.disabled)return;switch(t.keyCode){case e.mobile.keyCode.HOME:case e.mobile.keyCode.END:case e.mobile.keyCode.PAGE_UP:case e.mobile.keyCode.PAGE_DOWN:case e.mobile.keyCode.UP:case e.mobile.keyCode.RIGHT:case e.mobile.keyCode.DOWN:case e.mobile.keyCode.LEFT:t.preventDefault(),this._keySliding||(this._keySliding=!0,this.handle.addClass("ui-state-active"))}switch(t.keyCode){case e.mobile.keyCode.HOME:this.refresh(this.min);break;case e.mobile.keyCode.END:this.refresh(this.max);break;case e.mobile.keyCode.PAGE_UP:case e.mobile.keyCode.UP:case e.mobile.keyCode.RIGHT:this.refresh(n+this.step);break;case e.mobile.keyCode.PAGE_DOWN:case e.mobile.keyCode.DOWN:case e.mobile.keyCode.LEFT:this.refresh(n-this.step)}},_handleKeyup:function(e){this._keySliding&&(this._keySliding=!1,this.handle.removeClass("ui-state-active"))},_sliderVMouseDown:function(e){return this.options.disabled||e.which!==1&&e.which!==0&&e.which!==r?!1:this._trigger("beforestart",e)===!1?!1:(this.dragging=!0,this.userModified=!1,this.mouseMoved=!1,this.isToggleSwitch&&(this.beforeStart=this.element[0].selectedIndex),this.refresh(e),this._trigger("start"),!1)},_sliderVMouseUp:function(){if(this.dragging)return this.dragging=!1,this.isToggleSwitch&&(this.handle.addClass("ui-slider-handle-snapping"),this.mouseMoved?this.userModified?this.refresh(this.beforeStart===0?1:0):this.refresh(this.beforeStart):this.refresh(this.beforeStart===0?1:0)),this.mouseMoved=!1,this._trigger("stop"),!1},_preventDocumentDrag:function(e){if(this._trigger("drag",e)===!1)return!1;if(this.dragging&&!this.options.disabled)return this.mouseMoved=!0,this.isToggleSwitch&&this.handle.removeClass("ui-slider-handle-snapping"),this.refresh(e),this.userModified=this.beforeStart!==this.element[0].selectedIndex,!1},_checkedRefresh:function(){this.value!==this._value()&&this.refresh(this._value())},_value:function(){return this.isToggleSwitch?this.element[0].selectedIndex:parseFloat(this.element.val())},_reset:function(){this.refresh(r,!1,!0)},refresh:function(t,r,i){var s=this,o=e.mobile.getInheritedTheme(this.element,"c"),u=this.options.theme||o,a=this.options.trackTheme||o,f,l,c,h;s.slider[0].className=[this.isToggleSwitch?"ui-slider ui-slider-switch":"ui-slider-track"," ui-btn-down-"+a," ui-btn-corner-all",this.options.mini?" ui-mini":""].join(""),(this.options.disabled||this.element.attr("disabled"))&&this.disable(),this.value=this._value(),this.options.highlight&&!this.isToggleSwitch&&this.slider.find(".ui-slider-bg").length===0&&(this.valuebg=function(){var t=n.createElement("div");return t.className="ui-slider-bg "+e.mobile.activeBtnClass+" ui-btn-corner-all",e(t).prependTo(s.slider)}()),this.handle.buttonMarkup({corners:!0,theme:u,shadow:!0});var p,d,v=this.element,m=!this.isToggleSwitch,g=m?[]:v.find("option"),y=m?parseFloat(v.attr("min")):0,b=m?parseFloat(v.attr("max")):g.length-1,w=m&&parseFloat(v.attr("step"))>0?parseFloat(v.attr("step")):1;if(typeof t=="object"){c=t,h=8,f=this.slider.offset().left,l=this.slider.width(),p=l/((b-y)/w);if(!this.dragging||c.pageX<f-h||c.pageX>f+l+h)return;p>1?d=(c.pageX-f)/l*100:d=Math.round((c.pageX-f)/l*100)}else t==null&&(t=m?parseFloat(v.val()||0):v[0].selectedIndex),d=(parseFloat(t)-y)/(b-y)*100;if(isNaN(d))return;var E=d/100*(b-y)+y,S=(E-y)%w,x=E-S;Math.abs(S)*2>=w&&(x+=S>0?w:-w);var T=100/((b-y)/w);E=parseFloat(x.toFixed(5)),typeof p=="undefined"&&(p=l/((b-y)/w)),p>1&&m&&(d=(E-y)*T*(1/w)),d<0&&(d=0),d>100&&(d=100),E<y&&(E=y),E>b&&(E=b),this.handle.css("left",d+"%"),this.handle[0].setAttribute("aria-valuenow",m?E:g.eq(E).attr("value")),this.handle[0].setAttribute("aria-valuetext",m?E:g.eq(E).getEncodedText()),this.handle[0].setAttribute("title",m?E:g.eq(E).getEncodedText()),this.valuebg&&this.valuebg.css("width",d+"%");if(this._labels){var N=this.handle.width()/this.slider.width()*100,C=d&&N+(100-N)*d/100,k=d===100?0:Math.min(N+100-C,100);this._labels.each(function(){var t=e(this).is(".ui-slider-label-a");e(this).width((t?C:k)+"%")})}if(!i){var L=!1;m?(L=v.val()!==E,v.val(E)):(L=v[0].selectedIndex!==E,v[0].selectedIndex=E);if(this._trigger("beforechange",t)===!1)return!1;!r&&L&&v.trigger("change")}},enable:function(){return this.element.attr("disabled",!1),this.slider.removeClass("ui-disabled").attr("aria-disabled",!1),this._setOption("disabled",!1)},disable:function(){return this.element.attr("disabled",!0),this.slider.addClass("ui-disabled").attr("aria-disabled",!0),this._setOption("disabled",!0)}},e.mobile.behaviors.formReset)),e.mobile.document.bind("pagecreate create",function(t){e.mobile.slider.prototype.enhanceWithin(t.target,!0)})}(e),function(e,t){e.widget("mobile.rangeslider",e.mobile.widget,{options:{theme:null,trackTheme:null,disabled:!1,initSelector:":jqmData(role='rangeslider')",mini:!1,highlight:!0},_create:function(){var t,n=this.element,r=this.options.mini?"ui-rangeslider ui-mini":"ui-rangeslider",i=n.find("input").first(),s=n.find("input").last(),o=n.find("label").first(),u=e.data(i.get(0),"mobileSlider").slider,a=e.data(s.get(0),"mobileSlider").slider,f=e.data(i.get(0),"mobileSlider").handle,l=e('<div class="ui-rangeslider-sliders" />').appendTo(n);n.find("label").length>1&&(t=n.find("label").last().hide()),i.addClass("ui-rangeslider-first"),s.addClass("ui-rangeslider-last"),n.addClass(r),u.appendTo(l),a.appendTo(l),o.prependTo(n),f.prependTo(a),e.extend(this,{_inputFirst:i,_inputLast:s,_sliderFirst:u,_sliderLast:a,_targetVal:null,_sliderTarget:!1,_sliders:l,_proxy:!1}),this.refresh(),this._on(this.element.find("input.ui-slider-input"),{slidebeforestart:"_slidebeforestart",slidestop:"_slidestop",slidedrag:"_slidedrag",slidebeforechange:"_change",blur:"_change",keyup:"_change"}),this._on({mousedown:"_change"}),this._on(this.element.closest("form"),{reset:"_handleReset"}),this._on(f,{vmousedown:"_dragFirstHandle"})},_handleReset:function(){var e=this;setTimeout(function(){e._updateHighlight()},0)},_dragFirstHandle:function(t){return e.data(this._inputFirst.get(0),"mobileSlider").dragging=!0,e.data(this._inputFirst.get(0),"mobileSlider").refresh(t),!1},_slidedrag:function(t){var n=e(t.target).is(this._inputFirst),r=n?this._inputLast:this._inputFirst;this._sliderTarget=!1;if(this._proxy==="first"&&n||this._proxy==="last"&&!n)return e.data(r.get(0),"mobileSlider").dragging=!0,e.data(r.get(0),"mobileSlider").refresh(t),!1},_slidestop:function(t){var n=e(t.target).is(this._inputFirst);this._proxy=!1,this.element.find("input").trigger("vmouseup"),this._sliderFirst.css("z-index",n?1:"")},_slidebeforestart:function(t){this._sliderTarget=!1,e(t.originalEvent.target).hasClass("ui-slider-track")&&(this._sliderTarget=!0,this._targetVal=e(t.target).val())},_setOption:function(e){this._superApply(e),this.refresh()},refresh:function(){var e=this.element,t=this.options;e.find("input").slider({theme:t.theme,trackTheme:t.trackTheme,disabled:t.disabled,mini:t.mini,highlight:t.highlight}).slider("refresh"),this._updateHighlight()},_change:function(t){if(t.type==="keyup")return this._updateHighlight(),!1;var n=this,r=parseFloat(this._inputFirst.val(),10),i=parseFloat(this._inputLast.val(),10),s=e(t.target).hasClass("ui-rangeslider-first"),o=s?this._inputFirst:this._inputLast,u=s?this._inputLast:this._inputFirst;if(this._inputFirst.val()>this._inputLast.val()&&t.type==="mousedown"&&!e(t.target).hasClass("ui-slider-handle"))o.blur();else if(t.type==="mousedown")return;r>i&&!this._sliderTarget?(o.val(s?i:r).slider("refresh"),this._trigger("normalize")):r>i&&(o.val(this._targetVal).slider("refresh"),setTimeout(function(){u.val(s?r:i).slider("refresh"),e.data(u.get(0),"mobileSlider").handle.focus(),n._sliderFirst.css("z-index",s?"":1),n._trigger("normalize")},0),this._proxy=s?"first":"last"),r===i?(e.data(o.get(0),"mobileSlider").handle.css("z-index",1),e.data(u.get(0),"mobileSlider").handle.css("z-index",0)):(e.data(u.get(0),"mobileSlider").handle.css("z-index",""),e.data(o.get(0),"mobileSlider").handle.css("z-index","")),this._updateHighlight();if(r>=i)return!1},_updateHighlight:function(){var t=parseInt(e.data(this._inputFirst.get(0),"mobileSlider").handle.get(0).style.left,10),n=parseInt(e.data(this._inputLast.get(0),"mobileSlider").handle.get(0).style.left,10),r=n-t;this.element.find(".ui-slider-bg").css({"margin-left":t+"%",width:r+"%"})},_destroy:function(){this.element.removeClass("ui-rangeslider ui-mini").find("label").show(),this._inputFirst.after(this._sliderFirst),this._inputLast.after(this._sliderLast),this._sliders.remove(),this.element.find("input").removeClass("ui-rangeslider-first ui-rangeslider-last").slider("destroy")}}),e.widget("mobile.rangeslider",e.mobile.rangeslider,e.mobile.behaviors.formReset),e(n).bind("pagecreate create",function(t){e.mobile.rangeslider.prototype.enhanceWithin(t.target,!0)})}(e)});
/**
* @license Input Mask plugin for jquery
* http://github.com/RobinHerbots/jquery.inputmask
* Copyright (c) 2010 - 2012 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 1.2.4
*/

(function ($) {
    if ($.fn.inputmask == undefined) {
        $.inputmask = {
            //options default
            defaults: {
                placeholder: "_",
                optionalmarker: {
                    start: "[",
                    end: "]"
                },
                escapeChar: "\\",
                mask: null,
                oncomplete: $.noop, //executes when the mask is complete
                onincomplete: $.noop, //executes when the mask is incomplete and focus is lost
                oncleared: $.noop, //executes when the mask is cleared
                overrideFocus: false, // override the default behavior for the focus event. Allows better interactions with native HTML placeholders
                repeat: 0, //repetitions of the mask
                greedy: true, //true: allocated buffer for the mask and repetitions - false: allocate only if needed
                autoUnmask: false, //automatically unmask when retrieving the value with $.fn.val or value if the browser supports __lookupGetter__ or getOwnPropertyDescriptor
                clearMaskOnLostFocus: true,
                insertMode: true, //insert the input or overwrite the input
                clearIncomplete: false, //clear the incomplete input on blur
                aliases: {}, //aliases definitions => see jquery.inputmask.extensions.js
                onKeyUp: $.noop, //override to implement autocomplete on certain keys for example
                onKeyDown: $.noop, //override to implement autocomplete on certain keys for example
                showMaskOnHover: true, //show the mask-placeholder when hovering the empty input
                onKeyValidation: $.noop, //executes on every key-press with the result of isValid
                //numeric basic properties
                numericInput: false, //numericInput input direction style (input shifts to the left while holding the caret position)
                radixPoint: ".", // | ","
                //numeric basic properties
                definitions: {
                    '9': {
                        validator: "[0-9]",
                        cardinality: 1
                    },
                    'a': {
                        validator: "[A-Za-z\u0410-\u044F\u0401\u0451]",
                        cardinality: 1
                    },
                    '*': {
                        validator: "[A-Za-z\u0410-\u044F\u0401\u04510-9]",
                        cardinality: 1
                    }
                },
                keyCode: { ALT: 18, BACKSPACE: 8, CAPS_LOCK: 20, COMMA: 188, COMMAND: 91, COMMAND_LEFT: 91, COMMAND_RIGHT: 93, CONTROL: 17, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, INSERT: 45, LEFT: 37, MENU: 93, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108,
                    NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SHIFT: 16, SPACE: 32, TAB: 9, UP: 38, WINDOWS: 91
                },
                ignorables: [8, 9, 13, 16, 17, 18, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 46, 91, 93, 108]
            },
            val: $.fn.val //store the original jquery val function
        };

        $.fn.inputmask = function (fn, options) {
            var opts = $.extend(true, {}, $.inputmask.defaults, options);
            var pasteEvent = isInputEventSupported('paste') ? 'paste' : 'input';

            var iphone = navigator.userAgent.match(/iphone/i) != null;
            var android = navigator.userAgent.match(/android.*mobile safari.*/i) != null;
            if (android) {
                var browser = navigator.userAgent.match(/mobile safari.*/i);
                var version = parseInt(new RegExp(/[0-9]+/).exec(browser));
                android = version <= 533;
            }
            var caretposCorrection = null;

            if (typeof fn == "string") {
                switch (fn) {
                    case "mask":
                        //init buffer
                        var _buffer = getMaskTemplate();
                        var tests = getTestingChain();

                        return this.each(function () {
                            mask(this);
                        });
                        break;
                    case "unmaskedvalue":
                        var tests = this.data('inputmask')['tests'];
                        var _buffer = this.data('inputmask')['_buffer'];
                        opts.greedy = this.data('inputmask')['greedy'];
                        opts.repeat = this.data('inputmask')['repeat'];
                        opts.definitions = this.data('inputmask')['definitions'];
                        return unmaskedvalue(this);
                        break;
                    case "remove":
                        var tests, _buffer;
                        return this.each(function () {
                            var $input = $(this), input = this;
                            setTimeout(function () {
                                if ($input.data('inputmask')) {
                                    tests = $input.data('inputmask')['tests'];
                                    _buffer = $input.data('inputmask')['_buffer'];
                                    opts.greedy = $input.data('inputmask')['greedy'];
                                    opts.repeat = $input.data('inputmask')['repeat'];
                                    opts.definitions = $input.data('inputmask')['definitions'];
                                    //writeout the unmaskedvalue
                                    input._valueSet(unmaskedvalue($input, true));
                                    //clear data
                                    $input.removeData('inputmask');
                                    //unbind all events
                                    $input.unbind(".inputmask");
                                    $input.removeClass('focus.inputmask');
                                    //restore the value property
                                    var valueProperty;
                                    if (Object.getOwnPropertyDescriptor)
                                        valueProperty = Object.getOwnPropertyDescriptor(input, "value");
                                    if (valueProperty && valueProperty.get) {
                                        if (input._valueGet) {
                                            Object.defineProperty(input, "value", {
                                                get: input._valueGet,
                                                set: input._valueSet
                                            });
                                        }
                                    } else if (document.__lookupGetter__ && input.__lookupGetter__("value")) {
                                        if (input._valueGet) {
                                            input.__defineGetter__("value", input._valueGet);
                                            input.__defineSetter__("value", input._valueSet);
                                        }
                                    }
                                    delete input._valueGet;
                                    delete input._valueSet;
                                }
                            }, 0);
                        });
                        break;
                    case "getemptymask": //return the default (empty) mask value, usefull for setting the default value in validation
                        if (this.data('inputmask'))
                            return this.data('inputmask')['_buffer'].join('');
                        else return "";
                    case "hasMaskedValue": //check wheter the returned value is masked or not; currently only works reliable when using jquery.val fn to retrieve the value
                        return this.data('inputmask') ? !this.data('inputmask')['autoUnmask'] : false;
                    default:
                        //check if the fn is an alias
                        if (!resolveAlias(fn)) {
                            //maybe fn is a mask so we try
                            //set mask
                            opts.mask = fn;
                        }
                        //init buffer
                        var _buffer = getMaskTemplate();
                        var tests = getTestingChain();

                        return this.each(function () {
                            mask(this);
                        });

                        break;
                }
            } if (typeof fn == "object") {
                opts = $.extend(true, {}, $.inputmask.defaults, fn);
                resolveAlias(opts.alias); //resolve aliases
                //init buffer
                var _buffer = getMaskTemplate();
                var tests = getTestingChain();

                return this.each(function () {
                    mask(this);
                });
            }

            //helper     functions
            function isInputEventSupported(eventName) {
                var el = document.createElement('input'),
                eventName = 'on' + eventName,
                isSupported = (eventName in el);
                if (!isSupported) {
                    el.setAttribute(eventName, 'return;');
                    isSupported = typeof el[eventName] == 'function';
                }
                el = null;
                return isSupported;
            }

            function resolveAlias(aliasStr) {
                var aliasDefinition = opts.aliases[aliasStr];
                if (aliasDefinition) {
                    if (aliasDefinition.alias) resolveAlias(aliasDefinition.alias); //alias is another alias
                    $.extend(true, opts, aliasDefinition);  //merge alias definition in the options
                    $.extend(true, opts, options);  //reapply extra given options
                    return true;
                }
                return false;
            }

            function getMaskTemplate() {
                var escaped = false, outCount = 0;
                if (opts.mask.length == 1 && opts.greedy == false) { opts.placeholder = ""; } //hide placeholder with single non-greedy mask
                var singleMask = $.map(opts.mask.split(""), function (element, index) {
                    var outElem = [];
                    if (element == opts.escapeChar) {
                        escaped = true;
                    }
                    else if ((element != opts.optionalmarker.start && element != opts.optionalmarker.end) || escaped) {
                        var maskdef = opts.definitions[element];
                        if (maskdef && !escaped) {
                            for (var i = 0; i < maskdef.cardinality; i++) {
                                outElem.push(getPlaceHolder(outCount + i));
                            }
                        } else {
                            outElem.push(element);
                            escaped = false;
                        }
                        outCount += outElem.length;
                        return outElem;
                    }
                });

                //allocate repetitions
                var repeatedMask = singleMask.slice();
                for (var i = 1; i < opts.repeat && opts.greedy; i++) {
                    repeatedMask = repeatedMask.concat(singleMask.slice());
                }

                return repeatedMask;
            }

            //test definition => {fn: RegExp/function, cardinality: int, optionality: bool, newBlockMarker: bool, offset: int, casing: null/upper/lower, def: definitionSymbol}
            function getTestingChain() {
                var isOptional = false, escaped = false;
                var newBlockMarker = false; //indicates wheter the begin/ending of a block should be indicated

                return $.map(opts.mask.split(""), function (element, index) {
                    var outElem = [];

                    if (element == opts.escapeChar) {
                        escaped = true;
                    } else if (element == opts.optionalmarker.start && !escaped) {
                        isOptional = true;
                        newBlockMarker = true;
                    }
                    else if (element == opts.optionalmarker.end && !escaped) {
                        isOptional = false;
                        newBlockMarker = true;
                    }
                    else {
                        var maskdef = opts.definitions[element];
                        if (maskdef && !escaped) {
                            var prevalidators = maskdef["prevalidator"], prevalidatorsL = prevalidators ? prevalidators.length : 0;
                            for (var i = 1; i < maskdef.cardinality; i++) {
                                var prevalidator = prevalidatorsL >= i ? prevalidators[i - 1] : [], validator = prevalidator["validator"], cardinality = prevalidator["cardinality"];
                                outElem.push({ fn: validator ? typeof validator == 'string' ? new RegExp(validator) : new function () { this.test = validator; } : new RegExp("."), cardinality: cardinality ? cardinality : 1, optionality: isOptional, newBlockMarker: isOptional == true ? newBlockMarker : false, offset: 0, casing: maskdef["casing"], def: element });
                                if (isOptional == true) //reset newBlockMarker
                                    newBlockMarker = false;
                            }
                            outElem.push({ fn: maskdef.validator ? typeof maskdef.validator == 'string' ? new RegExp(maskdef.validator) : new function () { this.test = maskdef.validator; } : new RegExp("."), cardinality: maskdef.cardinality, optionality: isOptional, newBlockMarker: newBlockMarker, offset: 0, casing: maskdef["casing"], def: element });
                        } else {
                            outElem.push({ fn: null, cardinality: 0, optionality: isOptional, newBlockMarker: newBlockMarker, offset: 0, casing: null, def: element });
                            escaped = false;
                        }
                        //reset newBlockMarker
                        newBlockMarker = false;
                        return outElem;
                    }
                });
            }

            function isValid(pos, c, buffer, strict) { //strict true ~ no correction or autofill
                var result = false;
                if (pos >= 0 && pos < getMaskLength()) {
                    var testPos = determineTestPosition(pos), loopend = c ? 1 : 0, chrs = '';
                    for (var i = tests[testPos].cardinality; i > loopend; i--) {
                        chrs += getBufferElement(buffer, testPos - (i - 1));
                    }

                    if (c) {
                        chrs += c;
                    }
                    //return is false or a json object => { pos: ??, c: ??}
                    result = tests[testPos].fn != null ? tests[testPos].fn.test(chrs, buffer, pos, strict, opts) : false;
                }
                setTimeout(opts.onKeyValidation.call(this, result, opts), 0); //extra stuff to execute on keydown
                return result;
            }

            function isMask(pos) {
                var testPos = determineTestPosition(pos);
                var test = tests[testPos];

                return test != undefined ? test.fn : false;
            }

            function determineTestPosition(pos) {
                return pos % tests.length;
            }

            function getPlaceHolder(pos) {
                return opts.placeholder.charAt(pos % opts.placeholder.length);
            }

            function getMaskLength() {
                var calculatedLength = _buffer.length;
                if (!opts.greedy && opts.repeat > 1) {
                    calculatedLength += (_buffer.length * (opts.repeat - 1));
                }
                return calculatedLength;
            }

            //pos: from position
            function seekNext(buffer, pos) {
                var maskL = getMaskLength();
                if (pos >= maskL) return maskL;
                var position = pos;
                while (++position < maskL && !isMask(position)) { };
                return position;
            }
            //pos: from position
            function seekPrevious(buffer, pos) {
                var position = pos;
                if (position <= 0) return 0;

                while (--position > 0 && !isMask(position)) { };
                return position;
            }

            function setBufferElement(buffer, position, element) {
                //position = prepareBuffer(buffer, position);

                var test = tests[determineTestPosition(position)];
                var elem = element;
                if (elem != undefined) {
                    switch (test.casing) {
                        case "upper":
                            elem = element.toUpperCase();
                            break;
                        case "lower":
                            elem = element.toLowerCase();
                            break;
                    }
                }

                buffer[position] = elem;
            }
            function getBufferElement(buffer, position, autoPrepare) {
                if (autoPrepare) position = prepareBuffer(buffer, position);
                return buffer[position];
            }

            //needed to handle the non-greedy mask repetitions
            function prepareBuffer(buffer, position, isRTL) {
                var j;
                if (isRTL) {
                    while (position < 0 && buffer.length < getMaskLength()) {
                        j = _buffer.length - 1;
                        position = _buffer.length;
                        while (_buffer[j] !== undefined) {
                            buffer.unshift(_buffer[j--]);
                        }
                    }
                } else {
                    while (buffer[position] == undefined && buffer.length < getMaskLength()) {
                        j = 0;
                        while (_buffer[j] !== undefined) { //add a new buffer
                            buffer.push(_buffer[j++]);
                        }
                    }
                }

                return position;
            }

            function writeBuffer(input, buffer, caretPos) {
                input._valueSet(buffer.join(''));
                if (caretPos != undefined) {
                    if (android) {
                        setTimeout(function () {
                            caret(input, caretPos);
                        }, 100);
                    }
                    else caret(input, caretPos);
                }
            };
            function clearBuffer(buffer, start, end) {
                for (var i = start, maskL = getMaskLength(); i < end && i < maskL; i++) {
                    setBufferElement(buffer, i, getBufferElement(_buffer.slice(), i));
                }
            };

            function setReTargetPlaceHolder(buffer, pos) {
                var testPos = determineTestPosition(pos);
                setBufferElement(buffer, pos, getBufferElement(_buffer, testPos));
            }

            function checkVal(input, buffer, clearInvalid, skipRadixHandling) {
                var isRTL = $(input).data('inputmask')['isRTL'],
                    inputValue = truncateInput(input._valueGet(), isRTL).split('');

                if (isRTL) { //align inputValue for RTL/numeric input
                    var maskL = getMaskLength();
                    var inputValueRev = inputValue.reverse(); inputValueRev.length = maskL;

                    for (var i = 0; i < maskL; i++) {
                        var targetPosition = determineTestPosition(maskL - (i + 1));
                        if (tests[targetPosition].fn == null && inputValueRev[i] != getBufferElement(_buffer, targetPosition)) {
                            inputValueRev.splice(i, 0, getBufferElement(_buffer, targetPosition));
                            inputValueRev.length = maskL;
                        } else {
                            inputValueRev[i] = inputValueRev[i] || getBufferElement(_buffer, targetPosition);
                        }
                    }
                    inputValue = inputValueRev.reverse();
                }
                clearBuffer(buffer, 0, buffer.length);
                buffer.length = _buffer.length;
                var lastMatch = -1, checkPosition = -1, np, maskL = getMaskLength(), ivl = inputValue.length, rtlMatch = ivl == 0 ? maskL : -1;
                for (var i = 0; i < ivl; i++) {
                    for (var pos = checkPosition + 1; pos < maskL; pos++) {
                        if (isMask(pos)) {
                            var c = inputValue[i];
                            if ((np = isValid(pos, c, buffer, !clearInvalid)) !== false) {
                                if (np !== true) {
                                    pos = np.pos || pos; //set new position from isValid
                                    c = np.c || c; //set new char from isValid
                                }
                                setBufferElement(buffer, pos, c);
                                lastMatch = checkPosition = pos;
                            } else {
                                setReTargetPlaceHolder(buffer, pos);
                                if (c == getPlaceHolder(pos)) {
                                    checkPosition = pos;
                                    rtlMatch = pos;
                                }
                            }
                            break;
                        } else {   //nonmask
                            setReTargetPlaceHolder(buffer, pos);
                            if (lastMatch == checkPosition) //once outsync the nonmask cannot be the lastmatch
                                lastMatch = pos;
                            checkPosition = pos;
                            if (inputValue[i] == getBufferElement(buffer, pos))
                                break;
                        }
                    }
                }
                //Truncate buffer when using non-greedy masks
                if (opts.greedy == false) {
                    var newBuffer = truncateInput(buffer.join(''), isRTL).split('');
                    while (buffer.length != newBuffer.length) {  //map changes into the original buffer
                        isRTL ? buffer.shift() : buffer.pop();
                    }
                }

                if (clearInvalid) {
                    writeBuffer(input, buffer);
                }
                return isRTL ? (opts.numericInput ? ($.inArray(opts.radixPoint, buffer) != -1 && skipRadixHandling !== true ? $.inArray(opts.radixPoint, buffer) : seekNext(buffer, maskL)) : seekNext(buffer, rtlMatch)) : seekNext(buffer, lastMatch);
            }

            function escapeRegex(str) {
                var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];
                return str.replace(new RegExp('(\\' + specials.join('|\\') + ')', 'gim'), '\\$1');
            }
            function truncateInput(inputValue, rtl) {
                return rtl ? inputValue.replace(new RegExp("^(" + escapeRegex(_buffer.join('')) + ")*"), "") : inputValue.replace(new RegExp("(" + escapeRegex(_buffer.join('')) + ")*$"), "");
            }

            function clearOptionalTail(input, buffer) {
                checkVal(input, buffer, false);
                var tmpBuffer = buffer.slice();
                if ($(input).data('inputmask')['isRTL']) {
                    for (var pos = 0; pos <= tmpBuffer.length - 1; pos++) {
                        var testPos = determineTestPosition(pos);
                        if (tests[testPos].optionality) {
                            if (getPlaceHolder(pos) == buffer[pos] || !isMask(pos))
                                tmpBuffer.splice(0, 1);
                            else break;
                        } else break;
                    }
                } else {
                    for (var pos = tmpBuffer.length - 1; pos >= 0; pos--) {
                        var testPos = determineTestPosition(pos);
                        if (tests[testPos].optionality) {
                            if (getPlaceHolder(pos) == buffer[pos] || !isMask(pos))
                                tmpBuffer.pop();
                            else break;
                        } else break;
                    }
                }
                writeBuffer(input, tmpBuffer);
            }

            //functionality fn
            function unmaskedvalue($input, skipDatepickerCheck) {
                var input = $input[0];
                if (tests && (skipDatepickerCheck === true || !$input.hasClass('hasDatepicker'))) {
                    var buffer = _buffer.slice();
                    checkVal(input, buffer);
                    return $.map(buffer, function (element, index) {
                        return isMask(index) && element != getBufferElement(_buffer.slice(), index) ? element : null;
                    }).join('');
                }
                else {
                    return input._valueGet();
                }
            }

            function caret(input, begin, end) {
                var npt = input.jquery && input.length > 0 ? input[0] : input;
                if (typeof begin == 'number') {
                    end = (typeof end == 'number') ? end : begin;
                    if (opts.insertMode == false && begin == end) end++; //set visualization for insert/overwrite mode
                    if (npt.setSelectionRange) {
                        npt.setSelectionRange(begin, end);
                    } else if (npt.createTextRange) {
                        var range = npt.createTextRange();
                        range.collapse(true);
                        range.moveEnd('character', end);
                        range.moveStart('character', begin);
                        range.select();
                    }
                    npt.focus();
                    if (android && end != npt.selectionEnd) caretposCorrection = { begin: begin, end: end };
                } else {
                    var caretpos = android ? caretposCorrection : null, caretposCorrection = null;
                    if (caretpos == null) {
                        if (npt.setSelectionRange) {
                            begin = npt.selectionStart;
                            end = npt.selectionEnd;
                        } else if (document.selection && document.selection.createRange) {
                            var range = document.selection.createRange();
                            begin = 0 - range.duplicate().moveStart('character', -100000);
                            end = begin + range.text.length;
                        }
                        caretpos = { begin: begin, end: end };
                    }
                    return caretpos;
                }
            };

            function mask(el) {
                var $input = $(el);
                if (!$input.is(":input")) return;

                //correct greedy setting if needed
                opts.greedy = opts.greedy ? opts.greedy : opts.repeat == 0;

                //handle maxlength attribute
                var maxLength = $input.prop('maxLength');
                if (getMaskLength() > maxLength && maxLength > -1) { //FF sets no defined max length to -1
                    if (maxLength < _buffer.length) _buffer.length = maxLength;
                    if (opts.greedy == false) {
                        opts.repeat = Math.round(maxLength / _buffer.length);
                    }
                }
                $input.prop('maxLength', getMaskLength() * 2);

                //store tests & original buffer in the input element - used to get the unmasked value
                $input.data('inputmask', {
                    'tests': tests,
                    '_buffer': _buffer,
                    'greedy': opts.greedy,
                    'repeat': opts.repeat,
                    'autoUnmask': opts.autoUnmask,
                    'definitions': opts.definitions,
                    'isRTL': false
                });

                patchValueProperty(el);

                //init vars
                var buffer = _buffer.slice(),
                undoBuffer = el._valueGet(),
                skipKeyPressEvent = false, //Safari 5.1.x - modal dialog fires keypress twice workaround
                ignorable = false,
                lastPosition = -1,
                firstMaskPos = seekNext(buffer, -1),
                lastMaskPos = seekPrevious(buffer, getMaskLength()),
                isRTL = false;
                if (el.dir == "rtl" || opts.numericInput) {
                    el.dir = "ltr"
                    $input.css("text-align", "right");
                    $input.removeAttr("dir");
                    var inputData = $input.data('inputmask');
                    inputData['isRTL'] = true;
                    $input.data('inputmask', inputData);
                    isRTL = true;
                }

                //unbind all events - to make sure that no other mask will interfere when re-masking
                $input.unbind(".inputmask");
                $input.removeClass('focus.inputmask');
                //bind events
                $input.bind("mouseenter.inputmask", function () {
                    var $input = $(this), input = this;
                    if (!$input.hasClass('focus.inputmask') && opts.showMaskOnHover) {
                        var nptL = input._valueGet().length;
                        if (nptL < buffer.length) {
                            if (nptL == 0)
                                buffer = _buffer.slice();
                            writeBuffer(input, buffer);
                        }
                    }
                }).bind("blur.inputmask", function () {
                    var $input = $(this), input = this, nptValue = input._valueGet();
                    $input.removeClass('focus.inputmask');
                    if (nptValue != undoBuffer) {
                        $input.change();
                    }
                    if (opts.clearMaskOnLostFocus) {
                        if (nptValue == _buffer.join(''))
                            input._valueSet('');
                        else { //clearout optional tail of the mask
                            clearOptionalTail(input, buffer);
                        }
                    }
                    if (!isComplete(input)) {
                        $input.trigger("incomplete");
                        if (opts.clearIncomplete) {
                            if (opts.clearMaskOnLostFocus)
                                input._valueSet('');
                            else {
                                buffer = _buffer.slice();
                                writeBuffer(input, buffer);
                            }
                        }
                    }
                }).bind("focus.inputmask", function () {
                    var $input = $(this), input = this;
                    if (!opts.overrideFocus) {
                        if (!$input.hasClass('focus.inputmask') && !opts.showMaskOnHover) {
                            var nptL = input._valueGet().length;
                            if (nptL < buffer.length) {
                                if (nptL == 0)
                                    buffer = _buffer.slice();
                                caret(input, checkVal(input, buffer, true));
                            }
                        }
                    }
                    $input.addClass('focus.inputmask');
                    undoBuffer = input._valueGet();
                }).bind("mouseleave.inputmask", function () {
                    var $input = $(this), input = this;
                    if (opts.clearMaskOnLostFocus) {
                        if (!$input.hasClass('focus.inputmask')) {
                            if (input._valueGet() == _buffer.join('') || input._valueGet() == '')
                                input._valueSet('');
                            else { //clearout optional tail of the mask
                                clearOptionalTail(input, buffer);
                            }
                        }
                    }
                }).bind("click.inputmask", function () {
                    var input = this;
                    setTimeout(function () {
                        var selectedCaret = caret(input);
                        if (selectedCaret.begin == selectedCaret.end) {
                            var clickPosition = selectedCaret.begin;
                            lastPosition = checkVal(input, buffer, false);
                            if (isRTL)
                                caret(input, clickPosition > lastPosition && (isValid(clickPosition, buffer[clickPosition], buffer, true) !== false || !isMask(clickPosition)) ? clickPosition : lastPosition);
                            else
                                caret(input, clickPosition < lastPosition && (isValid(clickPosition, buffer[clickPosition], buffer, true) !== false || !isMask(clickPosition)) ? clickPosition : lastPosition);
                        }
                    }, 0);
                }).bind('dblclick.inputmask', function () {
                    var input = this;
                    setTimeout(function () {
                        caret(input, 0, lastPosition);
                    }, 0);
                }).bind("keydown.inputmask", keydownEvent
                ).bind("keypress.inputmask", keypressEvent
                ).bind("keyup.inputmask", keyupEvent
                ).bind(pasteEvent + ".inputmask, dragdrop.inputmask, drop.inputmask", function () {
                    var input = this;
                    setTimeout(function () {
                        caret(input, checkVal(input, buffer, true));
                    }, 0);
                }).bind('setvalue.inputmask', function () {
                    var input = this;
                    undoBuffer = input._valueGet();
                    checkVal(input, buffer, true);
                    if (input._valueGet() == _buffer.join(''))
                        input._valueSet('');
                }).bind('complete.inputmask', opts.oncomplete)
                .bind('incomplete.inputmask', opts.onincomplete)
                .bind('cleared.inputmask', opts.oncleared);

                //apply mask
                lastPosition = checkVal(el, buffer, true);

                // Wrap document.activeElement in a try/catch block since IE9 throw "Unspecified error" if document.activeElement is undefined when we are in an IFrame.
                var activeElement;
                try {
                    activeElement = document.activeElement;
                } catch (e) { }
                if (activeElement === el) { //position the caret when in focus
                    $input.addClass('focus.inputmask');
                    caret(el, lastPosition);
                } else if (opts.clearMaskOnLostFocus) {
                    if (el._valueGet() == _buffer.join('')) {
                        el._valueSet('');
                    } else {
                        clearOptionalTail(el, buffer);
                    }
                }

                installEventRuler(el);

                //private functions
                function isComplete(npt) {
                    var complete = true, nptValue = npt._valueGet(), ml = nptValue.length;
                    for (var i = 0; i < ml; i++) {
                        if (isMask(i) && nptValue.charAt(i) == getPlaceHolder(i)) {
                            complete = false;
                            break;
                        }
                    }
                    return complete;
                }


                function installEventRuler(npt) {
                    var events = $._data(npt).events;

                    $.each(events, function (eventType, eventHandlers) {
                        $(npt).bind(eventType + ".inputmask", function (event) {
                            if (this.readOnly || this.disabled) {
                                event.stopPropagation();
                                event.stopImmediatePropagation();
                                event.preventDefault();
                                return false;
                            }
                        });
                        //!! the bound handlers are executed in the order they where bound
                        //reorder the events
                        var ourHandler = eventHandlers[eventHandlers.length - 1];
                        for (var i = eventHandlers.length - 1; i > 0; i--) {
                            eventHandlers[i] = eventHandlers[i - 1];
                        }
                        eventHandlers[0] = ourHandler;
                    });
                }

                function patchValueProperty(npt) {
                    var valueProperty;
                    if (Object.getOwnPropertyDescriptor)
                        valueProperty = Object.getOwnPropertyDescriptor(npt, "value");
                    if (valueProperty && valueProperty.get) {
                        if (!npt._valueGet) {

                            npt._valueGet = valueProperty.get;
                            npt._valueSet = valueProperty.set;

                            Object.defineProperty(npt, "value", {
                                get: function () {
                                    var $self = $(this), inputData = $(this).data('inputmask');
                                    return inputData && inputData['autoUnmask'] ? $self.inputmask('unmaskedvalue') : this._valueGet() != inputData['_buffer'].join('') ? this._valueGet() : '';
                                },
                                set: function (value) {
                                    this._valueSet(value); $(this).triggerHandler('setvalue.inputmask');
                                }
                            });
                        }
                    } else if (document.__lookupGetter__ && npt.__lookupGetter__("value")) {
                        if (!npt._valueGet) {
                            npt._valueGet = npt.__lookupGetter__("value");
                            npt._valueSet = npt.__lookupSetter__("value");

                            npt.__defineGetter__("value", function () {
                                var $self = $(this), inputData = $(this).data('inputmask');
                                return inputData && inputData['autoUnmask'] ? $self.inputmask('unmaskedvalue') : this._valueGet() != inputData['_buffer'].join('') ? this._valueGet() : '';
                            });
                            npt.__defineSetter__("value", function (value) {
                                this._valueSet(value); $(this).triggerHandler('setvalue.inputmask');
                            });
                        }
                    } else {
                        if (!npt._valueGet) {
                            npt._valueGet = function () { return this.value; }
                            npt._valueSet = function (value) { this.value = value; }
                        }
                        if ($.fn.val.inputmaskpatch != true) {
                            $.fn.val = function () {
                                if (arguments.length == 0) {
                                    var $self = $(this);
                                    if ($self.data('inputmask')) {
                                        if ($self.data('inputmask')['autoUnmask'])
                                            return $self.inputmask('unmaskedvalue');
                                        else {
                                            var result = $.inputmask.val.apply($self);
                                            return result != $self.data('inputmask')['_buffer'].join('') ? result : '';
                                        }
                                    } else return $.inputmask.val.apply($self);
                                } else {
                                    var args = arguments;
                                    return this.each(function () {
                                        var $self = $(this);
                                        var result = $.inputmask.val.apply($self, args);
                                        if ($self.data('inputmask')) $self.triggerHandler('setvalue.inputmask');
                                        return result;
                                    });
                                }
                            };
                            $.extend($.fn.val, {
                                inputmaskpatch: true
                            });
                        }
                    }
                }
                //shift chars to left from start to end and put c at end position if defined
                function shiftL(start, end, c) {
                    while (!isMask(start) && start - 1 >= 0) start--;
                    for (var i = start; i < end && i < getMaskLength(); i++) {
                        if (isMask(i)) {
                            setReTargetPlaceHolder(buffer, i);
                            var j = seekNext(buffer, i);
                            var p = getBufferElement(buffer, j);
                            if (p != getPlaceHolder(j)) {
                                if (j < getMaskLength() && isValid(i, p, buffer, true) !== false && tests[determineTestPosition(i)].def == tests[determineTestPosition(j)].def) {
                                    setBufferElement(buffer, i, getBufferElement(buffer, j));
                                    setReTargetPlaceHolder(buffer, j); //cleanup next position
                                } else {
                                    if (isMask(i))
                                        break;
                                }
                            } else if (c == undefined) break;
                        } else {
                            setReTargetPlaceHolder(buffer, i);
                        }
                    }
                    if (c != undefined)
                        setBufferElement(buffer, isRTL ? end : seekPrevious(buffer, end), c);

                    buffer = truncateInput(buffer.join(''), isRTL).split('');
                    if (buffer.length == 0) buffer = _buffer.slice();

                    return start; //return the used start position
                }
                function shiftR(start, end, c, full) { //full => behave like a push right ~ do not stop on placeholders
                    for (var i = start; i <= end && i < getMaskLength(); i++) {
                        if (isMask(i)) {
                            var t = getBufferElement(buffer, i);
                            setBufferElement(buffer, i, c);
                            if (t != getPlaceHolder(i)) {
                                var j = seekNext(buffer, i);
                                if (j < getMaskLength()) {
                                    if (isValid(j, t, buffer, true) !== false && tests[determineTestPosition(i)].def == tests[determineTestPosition(j)].def)
                                        c = t;
                                    else {
                                        if (isMask(j))
                                            break;
                                        else c = t;
                                    }
                                } else break;
                            } else if (full !== true) break;
                        } else
                            setReTargetPlaceHolder(buffer, i);
                    }
                    var lengthBefore = buffer.length;
                    buffer = truncateInput(buffer.join(''), isRTL).split('');
                    if (buffer.length == 0) buffer = _buffer.slice();

                    return end - (lengthBefore - buffer.length);  //return new start position
                };

                function keydownEvent(e) {
                    //Safari 5.1.x - modal dialog fires keypress twice workaround
                    skipKeyPressEvent = false;

                    var input = this, k = e.keyCode, pos = caret(input);

                    //set input direction according the position to the radixPoint
                    if (opts.numericInput) {
                        var nptStr = input._valueGet();
                        var radixPosition = nptStr.indexOf(opts.radixPoint);
                        if (radixPosition != -1) {
                            isRTL = pos.begin <= radixPosition || pos.end <= radixPosition;
                        }
                    }

                    //backspace, delete, and escape get special treatment
                    if (k == opts.keyCode.BACKSPACE || k == opts.keyCode.DELETE || (iphone && k == 127)) {//backspace/delete
                        var maskL = getMaskLength();
                        if (pos.begin == 0 && pos.end == maskL) {
                            buffer = _buffer.slice();
                            writeBuffer(input, buffer);
                            caret(input, checkVal(input, buffer, false));
                        } else if ((pos.end - pos.begin) > 1 || ((pos.end - pos.begin) == 1 && opts.insertMode)) {
                            clearBuffer(buffer, pos.begin, pos.end);
                            writeBuffer(input, buffer, isRTL ? checkVal(input, buffer, false) : pos.begin);
                        } else {
                            var beginPos = pos.begin - (k == opts.keyCode.DELETE ? 0 : 1);
                            if (beginPos < firstMaskPos && k == opts.keyCode.DELETE) {
                                beginPos = firstMaskPos;
                            }
                            if (beginPos >= firstMaskPos) {
                                if (opts.numericInput && opts.greedy && k == opts.keyCode.DELETE && buffer[beginPos] == opts.radixPoint) {
                                    beginPos = seekNext(buffer, beginPos);
                                    isRTL = false;
                                }
                                if (isRTL) {
                                    beginPos = shiftR(firstMaskPos, beginPos, getPlaceHolder(beginPos), true);
                                    beginPos = (opts.numericInput && opts.greedy && k == opts.keyCode.BACKSPACE && buffer[beginPos + 1] == opts.radixPoint) ? beginPos + 1 : seekNext(buffer, beginPos);
                                } else beginPos = shiftL(beginPos, maskL);
                                writeBuffer(input, buffer, beginPos);
                            }
                        }
                        if (input._valueGet() == _buffer.join(''))
                            $(input).trigger('cleared');

                        return false;
                    } else if (k == opts.keyCode.END || k == opts.keyCode.PAGE_DOWN) { //when END or PAGE_DOWN pressed set position at lastmatch
                        setTimeout(function () {
                            var caretPos = checkVal(input, buffer, false, true);
                            if (!opts.insertMode && caretPos == getMaskLength() && !e.shiftKey) caretPos--;
                            caret(input, e.shiftKey ? pos.begin : caretPos, caretPos);
                        }, 0);
                        return false;
                    } else if (k == opts.keyCode.HOME || k == opts.keyCode.PAGE_UP) {//Home or page_up
                        caret(input, 0, e.shiftKey ? pos.begin : 0);
                        return false;
                    }
                    else if (k == opts.keyCode.ESCAPE) {//escape
                        input._valueSet(undoBuffer);
                        caret(input, 0, checkVal(input, buffer));
                        return false;
                    } else if (k == opts.keyCode.INSERT) {//insert
                        opts.insertMode = !opts.insertMode;
                        caret(input, !opts.insertMode && pos.begin == getMaskLength() ? pos.begin - 1 : pos.begin);
                        return false;
                    } else if (e.ctrlKey && k == 88) {
                        setTimeout(function () {
                            caret(input, checkVal(input, buffer, true));
                        }, 0);
                    } else if (!opts.insertMode) { //overwritemode
                        if (k == opts.keyCode.RIGHT) {//right
                            var caretPos = pos.begin == pos.end ? pos.end + 1 : pos.end;
                            caretPos = caretPos < getMaskLength() ? caretPos : pos.end;
                            caret(input, e.shiftKey ? pos.begin : caretPos, e.shiftKey ? caretPos + 1 : caretPos);
                            return false;
                        } else if (k == opts.keyCode.LEFT) {//left
                            var caretPos = pos.begin - 1;
                            caretPos = caretPos > 0 ? caretPos : 0;
                            caret(input, caretPos, e.shiftKey ? pos.end : caretPos);
                            return false;
                        }
                    }

                    opts.onKeyDown.call(this, e, opts); //extra stuff to execute on keydown
                    ignorable = $.inArray(k, opts.ignorables) != -1;
                }

                function keypressEvent(e) {
                    //Safari 5.1.x - modal dialog fires keypress twice workaround
                    if (skipKeyPressEvent) return false;
                    skipKeyPressEvent = true;

                    var input = this, $input = $(input);

                    e = e || window.event;
                    var k = e.which || e.charCode || e.keyCode;

                    if (opts.numericInput && k == opts.radixPoint.charCodeAt(opts.radixPoint.length - 1)) {
                        var nptStr = input._valueGet();
                        var radixPosition = nptStr.indexOf(opts.radixPoint);
                        caret(input, seekNext(buffer, radixPosition != -1 ? radixPosition : getMaskLength()));
                    }

                    if (e.ctrlKey || e.altKey || e.metaKey || ignorable) {//Ignore
                        return true;
                    } else {
                        if (k) {
                            $input.trigger('input');

                            var pos = caret(input), c = String.fromCharCode(k), maskL = getMaskLength();
                            clearBuffer(buffer, pos.begin, pos.end);

                            if (isRTL) {
                                var p = opts.numericInput ? pos.end : seekPrevious(buffer, pos.end), np;
                                if ((np = isValid(p == maskL || getBufferElement(buffer, p) == opts.radixPoint ? seekPrevious(buffer, p) : p, c, buffer, false)) !== false) {
                                    if (np !== true) {
                                        p = np.pos || pos; //set new position from isValid
                                        c = np.c || c; //set new char from isValid
                                    }

                                    var firstUnmaskedPosition = firstMaskPos;
                                    if (opts.insertMode == true) {
                                        if (opts.greedy == true) {
                                            var bfrClone = buffer.slice();
                                            while (getBufferElement(bfrClone, firstUnmaskedPosition, true) != getPlaceHolder(firstUnmaskedPosition) && firstUnmaskedPosition <= p) {
                                                firstUnmaskedPosition = firstUnmaskedPosition == maskL ? (maskL + 1) : seekNext(buffer, firstUnmaskedPosition);
                                            }
                                        }

                                        if (firstUnmaskedPosition <= p && (opts.greedy || buffer.length < maskL)) {
                                            if (buffer[firstMaskPos] != getPlaceHolder(firstMaskPos) && buffer.length < maskL) {
                                                var offset = prepareBuffer(buffer, -1, isRTL);
                                                if (pos.end != 0) p = p + offset;
                                                maskL = buffer.length;
                                            }
                                            shiftL(firstUnmaskedPosition, opts.numericInput ? seekPrevious(buffer, p) : p, c);
                                        } else return false;
                                    } else setBufferElement(buffer, opts.numericInput ? seekPrevious(buffer, p) : p, c);
                                    writeBuffer(input, buffer, opts.numericInput && p == 0 ? seekNext(buffer, p) : p);
                                    setTimeout(function () { //timeout needed for IE
                                        if (isComplete(input))
                                            $input.trigger("complete");
                                    }, 0);
                                } else if (android) writeBuffer(input, buffer, pos.begin);
                            }
                            else {
                                var p = seekNext(buffer, pos.begin - 1), np;
                                prepareBuffer(buffer, p, isRTL);
                                if ((np = isValid(p, c, buffer, false)) !== false) {
                                    if (np !== true) {
                                        p = np.pos || p; //set new position from isValid
                                        c = np.c || c; //set new char from isValid
                                    }
                                    if (opts.insertMode == true) {
                                        var lastUnmaskedPosition = getMaskLength();
                                        var bfrClone = buffer.slice();
                                        while (getBufferElement(bfrClone, lastUnmaskedPosition, true) != getPlaceHolder(lastUnmaskedPosition) && lastUnmaskedPosition >= p) {
                                            lastUnmaskedPosition = lastUnmaskedPosition == 0 ? -1 : seekPrevious(buffer, lastUnmaskedPosition);
                                        }
                                        if (lastUnmaskedPosition >= p)
                                            shiftR(p, buffer.length, c);
                                        else return false;
                                    }
                                    else setBufferElement(buffer, p, c);
                                    var next = seekNext(buffer, p);
                                    writeBuffer(input, buffer, next);

                                    setTimeout(function () { //timeout needed for IE
                                        if (isComplete(input))
                                            $input.trigger("complete");
                                    }, 0);
                                } else if (android) writeBuffer(input, buffer, pos.begin);
                            }
                            return false;
                        }
                    }
                }

                function keyupEvent(e) {
                    var $input = $(this), input = this;
                    var k = e.keyCode;
                    opts.onKeyUp.call(this, e, opts); //extra stuff to execute on keyup
                    if (k == opts.keyCode.TAB && $input.hasClass('focus.inputmask') && input._valueGet().length == 0) {
                        buffer = _buffer.slice();
                        writeBuffer(input, buffer);
                        if (!isRTL) caret(input, 0);
                        undoBuffer = input._valueGet();
                    }
                }
            }

            return this; //return this to expose publics
        };
    }
})(jQuery);
/*
Input Mask plugin extensions
http://github.com/RobinHerbots/jquery.inputmask
Copyright (c) 2010 - 2012 Robin Herbots
Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
Version: 1.2.0

Optional extensions on the jquery.inputmask base
*/
(function($) {
    //date & time aliases
    $.extend($.inputmask.defaults.definitions, {
        'h': { //hours
            validator: "[01][0-9]|2[0-3]",
            cardinality: 2,
            prevalidator: [{ validator: "[0-2]", cardinality: 1}]
        },
        's': { //seconds || minutes
            validator: "[0-5][0-9]",
            cardinality: 2,
            prevalidator: [{ validator: "[0-5]", cardinality: 1}]
        },
        'd': { //basic day
            validator: "0[1-9]|[12][0-9]|3[01]",
            cardinality: 2,
            prevalidator: [{ validator: "[0-3]", cardinality: 1}]
        },
        'm': { //basic month
            validator: "0[1-9]|1[012]",
            cardinality: 2,
            prevalidator: [{ validator: "[01]", cardinality: 1}]
        },
        'y': { //basic year
            validator: "(19|20)\\d{2}",
            cardinality: 4,
            prevalidator: [
                        { validator: "[12]", cardinality: 1 },
                        { validator: "(19|20)", cardinality: 2 },
                        { validator: "(19|20)\\d", cardinality: 3 }
                        ]
        },
        // Two digit year (12-29)
        // Is this better left to validation? Otherwise we would have to update every year.
        'q': {
            validator: "(1[2-9])|(2[0-9])",
            cardinality: 2,
            prevalidator: [
                { validator: "[12]", cardinality: 1 }
            ]
        }
    });
    $.extend($.inputmask.defaults.aliases, {
        'dd/mm/yyyy': {
            mask: "1/2/y",
            placeholder: "dd/mm/yyyy",
            regex: {
                val1pre: new RegExp("[0-3]"), //daypre
                val1: new RegExp("0[1-9]|[12][0-9]|3[01]"), //day
                val2pre: function(separator) { return new RegExp("((0[1-9]|[12][0-9]|3[01])\\" + separator + "[01])"); }, //monthpre
                val2: function(separator) { return new RegExp("((0[1-9]|[12][0-9])\\" + separator + "(0[1-9]|1[012]))|(30\\" + separator + "(0[13-9]|1[012]))|(31\\" + separator + "(0[13578]|1[02]))"); },//month
                yearpre1: new RegExp("[12]"),
                yearpre2: new RegExp("(19|20)"),
                yearpre3: new RegExp("(19|20)\\d"),
                year: new RegExp("(19|20)\\d{2}")
            },
            leapday: "29/02/",
            separator: '/',
            onKeyUp: function(e, opts) {
                var $input = $(this), input = this;
                if (e.ctrlKey && e.keyCode == opts.keyCode.RIGHT) {
                    var today = new Date();
                    $input.val(today.getDate().toString() + (today.getMonth() + 1).toString() + today.getFullYear().toString());
                }
            },
            definitions: {
                '1': { //val1 ~ day or month
                    validator: function(chrs, buffer, pos, strict, opts) {
                        var isValid = opts.regex.val1.test(chrs);
                        if (!strict && !isValid) {
                            if (chrs.charAt(1) == opts.separator.charAt(opts.separator.length - 1) || "-./".indexOf(chrs.charAt(1)) != -1 ) {
                                isValid = opts.regex.val1.test("0" + chrs.charAt(0));
                                if (isValid) {
                                    buffer[pos - 1] = "0";
                                    return { "pos": pos ,"c": chrs.charAt(0) };
                                }
                            }
                        }
                        return isValid;
                    },
                    cardinality: 2,
                    prevalidator: [{ validator: function(chrs, buffer, pos, strict, opts) {
                        var isValid = opts.regex.val1pre.test(chrs);
                        if (!strict && !isValid) {
                            isValid = opts.regex.val1.test("0" + chrs);
                            if (isValid) {
                                buffer[pos] = "0";
                                pos++;
                                return { "pos": pos };
                            }
                        }
                        return isValid;
                    }, cardinality: 1}]
                    },
                    '2': { //val2 ~ day or month
                        validator: function(chrs, buffer, pos, strict, opts) {
                            var frontValue = buffer.join('').substr(0, 3);
                            var isValid = opts.regex.val2(opts.separator).test(frontValue + chrs);
                            if (!strict && !isValid) {
                                if (chrs.charAt(1) == opts.separator.charAt(opts.separator.length - 1) || "-./".indexOf(chrs.charAt(1)) != -1 ) {
                                    isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs.charAt(0));
                                    if (isValid) {
                                        buffer[pos - 1] = "0";
                                        return { "pos": pos, "c": chrs.charAt(0) };
                                    }
                                }
                            }
                            return isValid;
                        },
                        cardinality: 2,
                        prevalidator: [{ validator: function(chrs, buffer, pos, strict, opts) {
                            var frontValue = buffer.join('').substr(0, 3);
                            var isValid = opts.regex.val2pre(opts.separator).test(frontValue + chrs);
                            if (!strict && !isValid) {
                                isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs);
                                if (isValid) {
                                    buffer[pos] = "0";
                                    pos++;
                                    return { "pos": pos };
                                }
                            }
                            return isValid;
                        }, cardinality: 1}]
                        },
                        'y': { //year
                            validator: function(chrs, buffer, pos, strict, opts) {
                                if (opts.regex.year.test(chrs)) {
                                    var dayMonthValue = buffer.join('').substr(0, 6);
                                    if (dayMonthValue != opts.leapday)
                                        return true;
                                    else {
                                        var year = parseInt(chrs,10);//detect leap year
                                        if (year % 4 === 0)
                                            if (year % 100 === 0)
                                            if (year % 400 === 0)
                                            return true;
                                        else return false;
                                        else return true;
                                        else return false;
                                    }
                                } else return false;
                            },
                            cardinality: 4,
                            prevalidator: [
                        { validator: function(chrs, buffer, pos, strict, opts) {
                            var isValid = opts.regex.yearpre1.test(chrs);
                            if (!strict && !isValid) {
                                var yearPrefix = (new Date()).getFullYear().toString().slice(0, 2);

                                isValid = opts.regex.yearpre3.test(yearPrefix + chrs);
                                if (isValid) {
                                    buffer[pos++] = yearPrefix[0];
                                    buffer[pos++] = yearPrefix[1];
                                    return { "pos": pos };
                                }
                            }
                            return isValid;
                        },
                            cardinality: 1
                        },
                        { validator: function(chrs, buffer, pos, strict, opts) {
                            var isValid = opts.regex.yearpre2.test(chrs);
                            if (!strict && !isValid) {
                                var yearPrefix = (new Date()).getFullYear().toString().slice(0, 2);
                                if (opts.regex.year.test(yearPrefix + chrs)) {
                                    var dayMonthValue = buffer.join('').substr(0, 6);
                                    if (dayMonthValue != opts.leapday)
                                        isValid = true;
                                    else {
                                        var year = parseInt(chrs,10);//detect leap year
                                        if (year % 4 === 0)
                                            if (year % 100 === 0)
                                            if (year % 400 === 0)
                                            isValid = true;
                                        else isValid = false;
                                        else isValid = true;
                                        else isValid = false;
                                    }
                                } else isValid = false;
                                if (isValid) {
                                    buffer[pos-1] = yearPrefix[0];
                                    buffer[pos++] = yearPrefix[1];
                                    buffer[pos++] = chrs[0];
                                    return { "pos": pos };
                                }
                            }
                            return isValid;
                        }, cardinality: 2 },
                        { validator: "(19|20)\\d", cardinality: 3 }
                        ]
                        }
                    },
                    insertMode: false,
                    autoUnmask: false
                },
                'mm/dd/yyyy': {
                    placeholder: "mm/dd/yyyy",
                    alias: "dd/mm/yyyy", //reuse functionality of dd/mm/yyyy alias
                    regex: {
                        val2pre: function(separator) { return new RegExp("((0[13-9]|1[012])\\" + separator + "[0-3])|(02\\" + separator + "[0-2])"); }, //daypre
                        val2: function(separator) { return new RegExp("((0[1-9]|1[012])\\" + separator + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])\\" + separator + "30)|((0[13578]|1[02])\\" + separator + "31)"); }, //day
                        val1pre: new RegExp("[01]"), //monthpre
                        val1: new RegExp("0[1-9]|1[012]") //month
                    },
                    leapday: "02/29/",
                    onKeyUp: function(e, opts) {
                        var $input = $(this), input = this;
                        if (e.ctrlKey && e.keyCode == opts.keyCode.RIGHT) {
                            var today = new Date();
                            $input.val((today.getMonth() + 1).toString() + today.getDate().toString() + today.getFullYear().toString());
                        }
                    }
                },
                'yyyy/mm/dd': {
                    mask: "y/1/2",
                    placeholder: "yyyy/mm/dd",
                    alias: "mm/dd/yyyy",
                    leapday: "/02/29",
                    onKeyUp: function(e, opts) {
                        var $input = $(this), input = this;
                        if (e.ctrlKey && e.keyCode == opts.keyCode.RIGHT) {
                            var today = new Date();
                            $input.val(today.getFullYear().toString() + (today.getMonth() + 1).toString() + today.getDate().toString());
                        }
                    },
                    definitions: {
                        '2': { //val2 ~ day or month
                            validator: function(chrs, buffer, pos, strict, opts) {
                                var frontValue = buffer.join('').substr(5, 3);
                                var isValid = opts.regex.val2(opts.separator).test(frontValue + chrs);
                                if (!strict && !isValid) {
                                    if (chrs.charAt(1) == opts.separator.charAt(opts.separator.length - 1) || "-./".indexOf(chrs.charAt(1)) != -1 ) {
                                        isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs.charAt(0));
                                        if (isValid) {
                                            buffer[pos - 1] = "0";
                                            return { "pos": pos, "c": chrs.charAt(0) };
                                        }
                                    }
                                }

                                //check leap yeap
                                if (isValid) {
                                    var dayMonthValue = buffer.join('').substr(4, 4) + chrs;
                                    if (dayMonthValue != opts.leapday)
                                        return true;
                                    else {
                                        var year = parseInt(buffer.join('').substr(0, 4),10);  //detect leap year
                                        if (year % 4 === 0)
                                            if (year % 100 === 0)
                                            if (year % 400 === 0)
                                            return true;
                                        else return false;
                                        else return true;
                                        else return false;
                                    }
                                }

                                return isValid;
                            },
                            cardinality: 2,
                            prevalidator: [{ validator: function(chrs, buffer, pos, strict, opts) {
                                var frontValue = buffer.join('').substr(5, 3);
                                var isValid = opts.regex.val2pre(opts.separator).test(frontValue + chrs);
                                if (!strict && !isValid) {
                                    isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs);
                                    if (isValid) {
                                        buffer[pos] = "0";
                                        pos++;
                                        return { "pos": pos };
                                    }
                                }
                                return isValid;
                            }, cardinality: 1}]
                            }
                        }
                    },
                    'dd.mm.yyyy': {
                        mask: "1.2.y",
                        placeholder: "dd.mm.yyyy",
                        leapday: "29.02.",
                        separator: '\.',
                        alias: "dd/mm/yyyy"
                    },
                    'dd-mm-yyyy': {
                        mask: "1-2-y",
                        placeholder: "dd-mm-yyyy",
                        leapday: "29-02-",
                        separator: '\-',
                        alias: "dd/mm/yyyy"
                    },
                    'mm.dd.yyyy': {
                        mask: "1.2.y",
                        placeholder: "mm.dd.yyyy",
                        leapday: "02.29.",
                        separator: '\.',
                        alias: "mm/dd/yyyy"
                    },
                    'mm-dd-yyyy': {
                        mask: "1-2-y",
                        placeholder: "mm-dd-yyyy",
                        leapday: "02-29-",
                        separator: '\-',
                        alias: "mm/dd/yyyy"
                    },
                    'yyyy.mm.dd': {
                        mask: "y.1.2",
                        placeholder: "yyyy.mm.dd",
                        leapday: ".02.29",
                        separator: '\.',
                        alias: "yyyy/mm/dd"
                    },
                    'yyyy-mm-dd': {
                        mask: "y-1-2",
                        placeholder: "yyyy-mm-dd",
                        leapday: "-02-29",
                        separator: '\-',
                        alias: "yyyy/mm/dd"
                    },
                    'hh:mm:ss': {
                        mask: "h:s:s",
                        autoUnmask: false
                    },
                    'hh:mm': {
                        mask: "h:s",
                        autoUnmask: false
                    },
                    'date': {
                        alias: "dd/mm/yyyy" // "mm/dd/yyyy"
                    },
                    'datetime': {
                        mask: "1/2/y h:s",
                        placeholder: "dd/mm/yyyy hh:mm",
                        alias: "date"
                    }
                });
            })(jQuery);
// Payment Info Component
// Author: Zachary Forrest, modified by Brad Frost
// Requires: jQuery, Modernizer, jQuery.inputmask

(function ($) {

	"use strict";

	$.fn.paymentInfo = function (method) {

		// Global variables.
		var methods,
			helpers,
			events,
			ccDefinitions,
			opts,
			pluginName = "paymentInfo";

		// Events map for the matchNumbers() function.
		events = $.map(['change', 'blur', 'keyup', 'keypress', 'keydown'], function (v) {
			return v + '.' + pluginName;
		}).join(' ');

		// Credit card regex patterns.
		ccDefinitions = {
			'visa': /^4/,
			'mc': /^5[1-5]/,
			'amex': /^3(4|7)/,
			'disc': /^6011/
		};

		helpers = {

			// Determine if the number being give corresponds to a credit card
			// regex pattern. If it does, break the loop and return the credit card type.

			getCreditCardType: function (number) {

				var ccType;

				$.each(ccDefinitions, function (i, v) {

					if (v.test(number)) {
						ccType = i;
						return false;
					}

				});

				return ccType;

			},

			// Our matchNumbers function. Probably does more than it should.
			// Will revisit.

			matchNumbers: function (el) {

				// Check to see if the the credit card number stored in data(). If not,
				// grab the current value of the credit card field and then get the type
				// of the card.

				var cardNumber = el.data("ccNumber") || el.val(),
					ccType = helpers.getCreditCardType(cardNumber);

				// If the credit card field has a value and we know what type of card it is,
				// then add the appropriate class to the card image <span>. This will allow us
				// to see the correct card. If we don't know the type, then revert back to the
				// default image. If the credit card field doesn't have a value, then we revert
				// back to the default image and erase any credit card number we might have stored.

				if (el.val() !== "") {
					if (ccType !== "") {
						$("." + opts.cardImageClass)
							.addClass(ccType);
					} else {
						$("." + opts.cardImageClass)
							.removeClass()
							.addClass(opts.cardImageClass);
					}
				} else {
					$("." + opts.cardImageClass)
						.removeClass()
						.addClass(opts.cardImageClass)
						.data("ccNumber", "");
				}

				// Check the card type to see if it's an Amex. If it is, update the mask to reflect
				// the number groupings that Amex uses. Also update the CVV. Amex requires four digits
				// instead of three. We have to reinitialize the inputmask() plugin, especially useful
				// if the user is switching our the number they want to use more than once.

				if (ccType === "amex") {
					el.inputmask({ mask: "9999 999999 99999", oncomplete: helpers.creditCardComplete });
					$("." + opts.cardCvvClass).inputmask({ mask: "9999", oncomplete: helpers.cvvComplete });
				} else {
					el.inputmask({ mask: "9999 9999 9999 9999", oncomplete: helpers.creditCardComplete });
					$("." + opts.cardCvvClass).inputmask({ mask: "999", oncomplete: helpers.cvvComplete });
				}

				// If the credit card value ever becomes empty, make sure the corresponding expiration date,
				// CVV, and Zip Code values are also empty.

				if (el.val() === "") {
					$("." + opts.fieldsetClass)
						.find("input:gt(0)")
						.val("");
				}

				if (ccType !== undefined) {
					$(el)
						.parents("." + opts.fieldsetClass)
						.removeClass("invalid shake");

					$('.' + opts.cardInstructionClass).removeClass("invalid");
				}

			},

			creditCardComplete: function () {

				// We need to get the credit card field and the unmasked value of the field.
				var element = $("." + opts.cardNumberClass),
					uvalue = element.inputmask("unmaskedvalue"),
					ccType = helpers.getCreditCardType(uvalue);

				// Let's make sure the card is valid
				if (ccType === undefined) {
					$(element)
						.parents("." + opts.fieldsetClass)
						.addClass("invalid shake");
					
					// Update instruction class to reflect the error
					$('.' + opts.cardInstructionClass).addClass("invalid");

					// Update instruction message
					helpers.updateInstruction(opts.messageCardNumberError);

					return;
				}

				// Store the credit card value in data(). Replace the value with the last
				// four numbers of the card.

				element.bind("saveValues", function () {

					if ((ccType === "amex" && uvalue.length === 15) || (ccType !== "amex" && uvalue.length === 16)) {

						element
							.data("ccNumber", uvalue)
							.val(uvalue.substr(uvalue.length - 4, uvalue.length));

					}

				});

				// Once this function is fired, we need to add a "transitioning" class to credit
				// card element so that we can take advantage of our CSS animations.

				element.addClass("transitioning-out");

				// We have to set a timeout so that we give our animations time to finish. We have to
				// blur the element as well to fix a bug where our credit card field was losing its
				// value prematurely.

				setTimeout(function () {

					element.removeClass("transitioning-out");

					if (!Modernizr.touch) {

						element.bind("blur", function () {
							element.trigger("saveValues");
						}).blur();

					} else {
						element
							.trigger("saveValues")
							.blur(function () {
								element.trigger("saveValues");
							});
					}

					element.addClass("full");

				}, opts.animationWait);

				// Setting another timeout so that we can wait for CSS animations to finish.
				setTimeout(function () {

					// Expose the rest of the payment info fields now that the credit card
					// has been filled out.
					$("." + opts.fieldsetClass)
						.find("input:gt(0)")
						.removeClass("hide");

				}, opts.animationWait);

				// After the credit card field is initially filled out, bind a click event
				// that will allow us to edit the number again if we want to. We also bind
				// a focus event (for mobile) and a keydown event in case of shift + tab

				$(element)
					.unbind("blur focus click keydown keypress")
					.bind("focus click keydown", function (e) {
						if (e.type === "focus" || e.type === "click" || (e.shiftKey && e.keyCode === 9)) {
							helpers.beginCreditCard($(element));

							// Update instruction message
							helpers.updateInstruction(opts.messageEnterCardNumber);
						}
					});

				if (window.navigator.standalone || !Modernizr.touch) {
					// Focus on the credit card expiration input.
					$("." + opts.cardExpirationClass).focus().val($.trim($("." + opts.cardExpirationClass).val()));

					// Update instruction message
					helpers.updateInstruction(opts.messageExpiration);
				}

			},

			// This function is fired  when the credit card expiration field's mask has been
			// satisfied. We trigger an animation for CVV card, wait for it to finish, and then
			// focus on the CVV field.

			expirationComplete: function () {

				$("." + opts.cardImageClass).addClass("cvv2");

				$("." + opts.cardExpirationClass)
					.addClass("full")
					.unbind("keydown blur")
					.bind("keydown", function (e) {
						if (e.keyCode === 8 && $(this).val() === "") {
							$(this).removeClass("full");
							if (window.navigator.standalone || !Modernizr.touch) {
								$("." + opts.cardNumberClass).focus();

								// Update instruction message
								helpers.updateInstruction(opts.messageEnterCardNumber);
							}
						}
					});

				if (window.navigator.standalone || !Modernizr.touch) {
					setTimeout(function () {
						$("." + opts.cardCvvClass).focus();

						// Update instruction message
						helpers.updateInstruction(opts.messageCVV);
					}, 220);
				}

				// Update instruction message
				helpers.updateInstruction(opts.messageCVV);

			},

			// This function is fired when the mask for CVV field is satisfied. We animate
			// the credit card back from the CVV card image to the appropriate card type.
			// We wait for the animation to finish and then focus on the zip field.

			cvvComplete: function () {

				$("." + opts.cardImageClass).removeClass("cvv2");

				$("." + opts.cardCvvClass)
					.addClass("full")
					.unbind("keydown blur")
					.bind("keydown", function (e) {
						if (e.keyCode === 8 || e.keyCode === 9) {
							if ($(this).val() === "") {
								$(this).removeClass("full");
								if (window.navigator.standalone || !Modernizr.touch) {
									$("." + opts.cardExpirationClass).focus();

									// Update instruction message
									helpers.updateInstruction(opts.messageExpiration);
								}
							}
							$("." + opts.cardImageClass).removeClass("cvv2");
						}
					});

				if (window.navigator.standalone || !Modernizr.touch) {
					// Focus on the credit card expiration input.
					$("." + opts.cardZipClass).focus();

					// Update instruction message
					helpers.updateInstruction(opts.messageZip);
				}

				


			},

			zipComplete: function () {

				$("." + opts.cardZipClass)
					.addClass("full")
					.unbind("keydown blur")
					.bind("keydown", function (e) {
						if (e.keyCode === 8 && $(this).val() === "") {
							$(this).removeClass("full");
							if (window.navigator.standalone || !Modernizr.touch) {
								$("." + opts.cardCvvClass).focus();

								// Update instruction message
								helpers.updateInstruction(opts.messageCVV);
							}
						}
					})
					.inputmask({ mask: "99999" });

				$("." + opts.fieldsetClass)
					.addClass('valid');

				$("." + opts.cardInstructionClass)
					.addClass('valid');

				// Update instruction message with success message
				helpers.updateInstruction(opts.messageSuccess);

			},

			// This function allows us to edit the credit card number once it's been entered.
			beginCreditCard: function (element) {

				// Set the value of the field to the original card number and apply our
				// transition state.

				$(element)
					.val($(element).data("ccNumber"))
					.addClass("transitioning-in");

				// Wait for the animation to complete and then remove our classes.
				setTimeout(function () {
					element.removeClass("transitioning-in full");
				}, 150);

				// Attach a keypress handler that listens for the "enter" key. If the user
				// clicks enter, then fire off our creditCardComplete() event.

				$(element)
					.unbind("keypress blur")
					.bind("keypress blur", function (e) {

						// Is it the enter key?
						if (e.keyCode === 13 || e.type === "blur") {

							var uvalue = $(element).inputmask("unmaskedvalue"),
								ccType = helpers.getCreditCardType(uvalue);

							// Make sure the number length is valid
							if ((ccType === "amex" && uvalue.length === 15) || (ccType !== "amex" && uvalue.length === 16)) {
								helpers.creditCardComplete();
							}

						}

					})
					.unbind("focus click keydown");

				// Hide the extraneous inputs until the credit card is filled out again.
				$("." + opts.fieldsetClass)
					.find("input:gt(0)")
					.addClass("hide");

			},

			updateInstruction: function (message) {
				$('.card-instruction').html(message);
			}

		};

		methods = {

			init: function (options) {

				// Get a copy of our configuration options
				opts = $.extend({}, $.fn.paymentInfo.defaults, options);

				// Configure the jQuery.inputmask plugin
				$.extend($.inputmask.defaults, {
					placeholder: " ",
					showMaskOnHover: false,
					overrideFocus: true
				});

				// Loop through our fieldset, find our inputs and initialize them.
				return this.each(function () {

					$(this)
						.find("label")
							.addClass("hide")
						.end()
						.find("." + opts.cardNumberClass)
							.inputmask({ mask: "9999 9999 9999 9999" })
							.before("<span class='" + opts.cardImageClass + "'></span>")
						.end()
						.find("." + opts.cardExpirationClass)
							.inputmask({
								mask: "m/q",
								clearIncomplete: true,
								oncomplete: helpers.expirationComplete
							})
							.addClass("hide")
						.end()
						.find("." + opts.cardCvvClass)
							.inputmask({ mask: "999" })
							.addClass("hide")
							.focus(function () {
								$("." + opts.cardImageClass).addClass("cvv2");
							})
							.blur(function () {
								$("." + opts.cardImageClass).removeClass("cvv2");
							})
						.end()
						.find("." + opts.cardZipClass)
							.inputmask({
								mask: "99999",
								oncomplete: helpers.zipComplete
							})
							.addClass("hide")
						.end();

						if(opts.cardInstruction) {
							$(this).
								after("<span class='" + opts.cardInstructionClass + "'>"+ opts.messageEnterCardNumber + "</span>");
						}

						helpers.matchNumbers($(this).find("." + opts.cardNumberClass).eq(0));

				}).unbind('.' + pluginName).bind(events, function () {
					helpers.matchNumbers($(this).find("." + opts.cardNumberClass).eq(0));
				});
			},

			// Need to add this later.
			destroy: function () {
				return this.unbind('.' + pluginName);
			}

		};

		// Plugin methods API
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		if (typeof method === "object" || !method) {
			return methods.init.apply(this, arguments);
		}
		return $.error("Method does not exist in plugin");

	};

	// Plugin config options.
	$.fn.paymentInfo.defaults = {
		fieldsetClass: "credit-card-group",
		cardImageClass: "card-image",
		cardCvvClass: "card-cvv",
		cardExpirationClass: "card-expiration",
		cardZipClass: "card-zip",
		cardNumberClass: "card-number",
		cardInstruction : true,
		cardInstructionClass: "card-instruction",
		animationWait: 600,
		focusDelay: 200,
		messageEnterCardNumber : "Please enter your credit card number",
		messageCardNumberError : "Please enter a valid credit card number",
		messageExpiration : "Please enter your card's expiration month and year",
		messageExpirationError : "Please enter a valid month and year",
		messageCVV : "Please enter the three-digit CVV number found on the back of your card",
		messageCVVAmEx : "Please enter your four-digit CVV number on the front of your card",
		messageZip : "Please enter your billing zip code",
		messageSuccess : "Hooray! You've successfully filled out your credit card information."
	};

}(jQuery));

$(".credit-card-group").paymentInfo();
/*!
* Parsleyjs
* Guillaume Potier - <guillaume@wisembly.com>
* Version 2.0.0-rc5 - built Sat Mar 29 2014 12:48:27
* MIT Licensed
*
*/
!(function($) {
  var ParsleyUtils = {
    // Parsley DOM-API
    // returns object from dom attributes and values
    // if attr is given, returns bool if attr present in DOM or not
    attr: function ($element, namespace, checkAttr) {
      var attribute,
        obj = {},
        regex = new RegExp('^' + namespace, 'i');
      if ('undefined' === typeof $element || 'undefined' === typeof $element[0])
        return {};
      for (var i in $element[0].attributes) {
        attribute = $element[0].attributes[i];
        if ('undefined' !== typeof attribute && null !== attribute && attribute.specified && regex.test(attribute.name)) {
          if ('undefined' !== typeof checkAttr && new RegExp(checkAttr + '$', 'i').test(attribute.name))
            return true;
          obj[this.camelize(attribute.name.replace(namespace, ''))] = this.deserializeValue(attribute.value);
        }
      }
      return 'undefined' === typeof checkAttr ? obj : false;
    },
    setAttr: function ($element, namespace, attr, value) {
      $element[0].setAttribute(this.dasherize(namespace + attr), String(value));
    },
    // Recursive object / array getter
    get: function (obj, path) {
      var i = 0,
      paths = (path || '').split('.');
      while (this.isObject(obj) || this.isArray(obj)) {
        obj = obj[paths[i++]];
        if (i === paths.length)
          return obj;
      }
      return undefined;
    },
    hash: function (length) {
      return String(Math.random()).substring(2, length ? length + 2 : 9);
    },
    /** Third party functions **/
    // Underscore isArray
    isArray: function (mixed) {
      return Object.prototype.toString.call(mixed) === '[object Array]';
    },
    // Underscore isObject
    isObject: function (mixed) {
      return mixed === Object(mixed);
    },
    // Zepto deserialize function
    deserializeValue: function (value) {
      var num;
      try {
        return value ?
          value == "true" ||
          (value == "false" ? false :
          value == "null" ? null :
          !isNaN(num = Number(value)) ? num :
          /^[\[\{]/.test(value) ? $.parseJSON(value) :
          value)
          : value;
      } catch (e) { return value; }
    },
    // Zepto camelize function
    camelize: function (str) {
      return str.replace(/-+(.)?/g, function(match, chr) {
        return chr ? chr.toUpperCase() : '';
      });
    },
    // Zepto dasherize function
    dasherize: function (str) {
      return str.replace(/::/g, '/')
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
        .replace(/([a-z\d])([A-Z])/g, '$1_$2')
        .replace(/_/g, '-')
        .toLowerCase();
    }
  };
// All these options could be overriden and specified directly in DOM using
// `data-parsley-` default DOM-API
// eg: `inputs` can be set in DOM using `data-parsley-inputs="input, textarea"`
// eg: `data-parsley-stop-on-first-failing-constraint="false"`
  var ParsleyDefaults = {
    // ### General
    // Default data-namespace for DOM API
    namespace: 'data-parsley-',
    // Supported inputs by default
    inputs: 'input, textarea, select',
    // Excluded inputs by default
    excluded: 'input[type=button], input[type=submit], input[type=reset], input[type=hidden]',
    // Stop validating field on highest priority failing constraint
    priorityEnabled: true,
    // ### UI
    // Enable\Disable error messages
    uiEnabled: true,
    // Key events threshold before validation
    validationThreshold: 3,
    // Focused field on form validation error. 'fist'|'last'|'none'
    focus: 'first',
    // `$.Event()` that will trigger validation. eg: `keyup`, `change`..
    trigger: false,
    // Class that would be added on every failing validation Parsley field
    errorClass: 'parsley-error',
    // Same for success validation
    successClass: 'parsley-success',
    // Return the `$element` that will receive these above success or error classes
    // Could also be (and given directly from DOM) a valid selector like `'#div'`
    classHandler: function (ParsleyField) {},
    // Return the `$element` where errors will be appended
    // Could also be (and given directly from DOM) a valid selector like `'#div'`
    errorsContainer: function (ParsleyField) {},
    // ul elem that would receive errors' list
    errorsWrapper: '<ul class="parsley-errors-list"></ul>',
    // li elem that would receive error message
    errorTemplate: '<li></li>'
  };

  var ParsleyAbstract = function() {};
  ParsleyAbstract.prototype = {
    asyncSupport: false,
    actualizeOptions: function () {
      this.options = this.parsleyInstance.OptionsFactory.get(this);
      return this;
    },
    // ParsleyValidator validate proxy function . Could be replaced by third party scripts
    validateThroughValidator: function (value, constraints, priority) {
      return window.ParsleyValidator.validate.apply(window.ParsleyValidator, [value, constraints, priority]);
    },
    // Subscribe an event and a handler for a specific field or a specific form
    // If on a ParsleyForm instance, it will be attached to form instance and also
    // To every field instance for this form
    subscribe: function (name, fn) {
      $.listenTo(this, name.toLowerCase(), fn);
      return this;
    },
    // Same as subscribe above. Unsubscribe an event for field, or form + its fields
    unsubscribe: function (name) {
      $.unsubscribeTo(this, name.toLowerCase());
      return this;
    },
    // Reset UI
    reset: function () {
      // Field case: just emit a reset event for UI
      if ('ParsleyForm' !== this.__class__)
        return $.emit('parsley:field:reset', this);
      // Form case: emit a reset event for each field
      for (var i = 0; i < this.fields.length; i++)
        $.emit('parsley:field:reset', this.fields[i]);
      $.emit('parsley:form:reset', this);
    },
    // Destroy Parsley instance (+ UI)
    destroy: function () {
      // Field case: emit destroy event to clean UI and then destroy stored instance
      if ('ParsleyForm' !== this.__class__) {
        $.emit('parsley:field:destroy', this);
        this.$element.removeData('Parsley');
        return;
      }
      // Form case: destroy all its fields and then destroy stored instance
      for (var i = 0; i < this.fields.length; i++)
        this.fields[i].destroy();
      $.emit('parsley:form:destroy', this);
      this.$element.removeData('Parsley');
    }
  };
/*!
* validator.js
* Guillaume Potier - <guillaume@wisembly.com>
* Version 0.5.5 - built Fri Feb 07 2014 16:52:20
* MIT Licensed
*
*/
( function ( exports ) {
  /**
  * Validator
  */
  var Validator = function ( options ) {
    this.__class__ = 'Validator';
    this.__version__ = '0.5.5';
    this.options = options || {};
    this.bindingKey = this.options.bindingKey || '_validatorjsConstraint';
    return this;
  };
  Validator.prototype = {
    constructor: Validator,
    /*
    * Validate string: validate( string, Assert, string ) || validate( string, [ Assert, Assert ], [ string, string ] )
    * Validate object: validate( object, Constraint, string ) || validate( object, Constraint, [ string, string ] )
    * Validate binded object: validate( object, string ) || validate( object, [ string, string ] )
    */
    validate: function ( objectOrString, AssertsOrConstraintOrGroup, group ) {
      if ( 'string' !== typeof objectOrString && 'object' !== typeof objectOrString )
        throw new Error( 'You must validate an object or a string' );
      // string / array validation
      if ( 'string' === typeof objectOrString || _isArray(objectOrString) )
        return this._validateString( objectOrString, AssertsOrConstraintOrGroup, group );
      // binded object validation
      if ( this.isBinded( objectOrString ) )
        return this._validateBindedObject( objectOrString, AssertsOrConstraintOrGroup );
      // regular object validation
      return this._validateObject( objectOrString, AssertsOrConstraintOrGroup, group );
    },
    bind: function ( object, constraint ) {
      if ( 'object' !== typeof object )
        throw new Error( 'Must bind a Constraint to an object' );
      object[ this.bindingKey ] = new Constraint( constraint );
      return this;
    },
    unbind: function ( object ) {
      if ( 'undefined' === typeof object._validatorjsConstraint )
        return this;
      delete object[ this.bindingKey ];
      return this;
    },
    isBinded: function ( object ) {
      return 'undefined' !== typeof object[ this.bindingKey ];
    },
    getBinded: function ( object ) {
      return this.isBinded( object ) ? object[ this.bindingKey ] : null;
    },
    _validateString: function ( string, assert, group ) {
      var result, failures = [];
      if ( !_isArray( assert ) )
        assert = [ assert ];
      for ( var i = 0; i < assert.length; i++ ) {
        if ( ! ( assert[ i ] instanceof Assert) )
          throw new Error( 'You must give an Assert or an Asserts array to validate a string' );
        result = assert[ i ].check( string, group );
        if ( result instanceof Violation )
          failures.push( result );
      }
      return failures.length ? failures : true;
    },
    _validateObject: function ( object, constraint, group ) {
      if ( 'object' !== typeof constraint )
        throw new Error( 'You must give a constraint to validate an object' );
      if ( constraint instanceof Constraint )
        return constraint.check( object, group );
      return new Constraint( constraint ).check( object, group );
    },
    _validateBindedObject: function ( object, group ) {
      return object[ this.bindingKey ].check( object, group );
    }
  };
  Validator.errorCode = {
    must_be_a_string: 'must_be_a_string',
    must_be_an_array: 'must_be_an_array',
    must_be_a_number: 'must_be_a_number',
    must_be_a_string_or_array: 'must_be_a_string_or_array'
  };
  /**
  * Constraint
  */
  var Constraint = function ( data, options ) {
    this.__class__ = 'Constraint';
    this.options = options || {};
    this.nodes = {};
    if ( data ) {
      try {
        this._bootstrap( data );
      } catch ( err ) {
        throw new Error( 'Should give a valid mapping object to Constraint', err, data );
      }
    }
    return this;
  };
  Constraint.prototype = {
    constructor: Constraint,
    check: function ( object, group ) {
      var result, failures = {};
      // check all constraint nodes if strict validation enabled. Else, only object nodes that have a constraint
      for ( var property in this.options.strict ? this.nodes : object ) {
        if ( this.options.strict ? this.has( property, object ) : this.has( property ) ) {
          result = this._check( property, object[ property ], group );
          // check returned an array of Violations or an object mapping Violations
          if ( ( _isArray( result ) && result.length > 0 ) || ( !_isArray( result ) && !_isEmptyObject( result ) ) )
            failures[ property ] = result;
        // in strict mode, get a violation for each constraint node not in object
        } else if ( this.options.strict ) {
          try {
            // we trigger here a HaveProperty Assert violation to have uniform Violation object in the end
            new Assert().HaveProperty( property ).validate( object );
          } catch ( violation ) {
            failures[ property ] = violation;
          }
        }
      }
      return _isEmptyObject(failures) ? true : failures;
    },
    add: function ( node, object ) {
      if ( object instanceof Assert  || ( _isArray( object ) && object[ 0 ] instanceof Assert ) ) {
        this.nodes[ node ] = object;
        return this;
      }
      if ( 'object' === typeof object && !_isArray( object ) ) {
        this.nodes[ node ] = object instanceof Constraint ? object : new Constraint( object );
        return this;
      }
      throw new Error( 'Should give an Assert, an Asserts array, a Constraint', object );
    },
    has: function ( node, nodes ) {
      var nodes = 'undefined' !== typeof nodes ? nodes : this.nodes;
      return 'undefined' !== typeof nodes[ node ];
    },
    get: function ( node, placeholder ) {
      return this.has( node ) ? this.nodes[ node ] : placeholder || null;
    },
    remove: function ( node ) {
      var _nodes = [];
      for ( var i in this.nodes )
        if ( i !== node )
          _nodes[ i ] = this.nodes[ i ];
      this.nodes = _nodes;
      return this;
    },
    _bootstrap: function ( data ) {
      if ( data instanceof Constraint )
        return this.nodes = data.nodes;
      for ( var node in data )
        this.add( node, data[ node ] );
    },
    _check: function ( node, value, group ) {
      // Assert
      if ( this.nodes[ node ] instanceof Assert )
        return this._checkAsserts( value, [ this.nodes[ node ] ], group );
      // Asserts
      if ( _isArray( this.nodes[ node ] ) )
        return this._checkAsserts( value, this.nodes[ node ], group );
      // Constraint -> check api
      if ( this.nodes[ node ] instanceof Constraint )
        return this.nodes[ node ].check( value, group );
      throw new Error( 'Invalid node', this.nodes[ node ] );
    },
    _checkAsserts: function ( value, asserts, group ) {
      var result, failures = [];
      for ( var i = 0; i < asserts.length; i++ ) {
        result = asserts[ i ].check( value, group );
        if ( 'undefined' !== typeof result && true !== result )
          failures.push( result );
        // Some asserts (Collection for example) could return an object
        // if ( result && ! ( result instanceof Violation ) )
        //   return result;
        //
        // // Vast assert majority return Violation
        // if ( result instanceof Violation )
        //   failures.push( result );
      }
      return failures;
    }
  };
  /**
  * Violation
  */
  var Violation = function ( assert, value, violation ) {
    this.__class__ = 'Violation';
    if ( ! ( assert instanceof Assert ) )
      throw new Error( 'Should give an assertion implementing the Assert interface' );
    this.assert = assert;
    this.value = value;
    if ( 'undefined' !== typeof violation )
      this.violation = violation;
  };
  Violation.prototype = {
    show: function () {
      var show =  {
        assert: this.assert.__class__,
        value: this.value
      };
      if ( this.violation )
        show.violation = this.violation;
      return show;
    },
    __toString: function () {
      if ( 'undefined' !== typeof this.violation )
        var violation = '", ' + this.getViolation().constraint + ' expected was ' + this.getViolation().expected;
      return this.assert.__class__ + ' assert failed for "' + this.value + violation || '';
    },
    getViolation: function () {
      var constraint, expected;
      for ( constraint in this.violation )
        expected = this.violation[ constraint ];
      return { constraint: constraint, expected: expected };
    }
  };
  /**
  * Assert
  */
  var Assert = function ( group ) {
    this.__class__ = 'Assert';
    this.__parentClass__ = this.__class__;
    this.groups = [];
    if ( 'undefined' !== typeof group )
      this.addGroup( group );
    return this;
  };
  Assert.prototype = {
    construct: Assert,
    check: function ( value, group ) {
      if ( group && !this.hasGroup( group ) )
        return;
      if ( !group && this.hasGroups() )
        return;
      try {
        return this.validate( value, group );
      } catch ( violation ) {
        return violation;
      }
    },
    hasGroup: function ( group ) {
      if ( _isArray( group ) )
        return this.hasOneOf( group );
      // All Asserts respond to "Any" group
      if ( 'Any' === group )
        return true;
      // Asserts with no group also respond to "Default" group. Else return false
      if ( !this.hasGroups() )
        return 'Default' === group;
      return -1 !== this.groups.indexOf( group );
    },
    hasOneOf: function ( groups ) {
      for ( var i = 0; i < groups.length; i++ )
        if ( this.hasGroup( groups[ i ] ) )
          return true;
      return false;
    },
    hasGroups: function () {
      return this.groups.length > 0;
    },
    addGroup: function ( group ) {
      if ( _isArray( group ) )
        return this.addGroups( group );
      if ( !this.hasGroup( group ) )
        this.groups.push( group );
      return this;
    },
    removeGroup: function ( group ) {
      var _groups = [];
      for ( var i = 0; i < this.groups.length; i++ )
        if ( group !== this.groups[ i ] )
          _groups.push( this.groups[ i ] );
      this.groups = _groups;
      return this;
    },
    addGroups: function ( groups ) {
      for ( var i = 0; i < groups.length; i++ )
        this.addGroup( groups[ i ] );
      return this;
    },
    /**
    * Asserts definitions
    */
    HaveProperty: function ( node ) {
      this.__class__ = 'HaveProperty';
      this.node = node;
      this.validate = function ( object ) {
        if ( 'undefined' === typeof object[ this.node ] )
          throw new Violation( this, object, { value: this.node } );
        return true;
      };
      return this;
    },
    Blank: function () {
      this.__class__ = 'Blank';
      this.validate = function ( value ) {
        if ( 'string' !== typeof value )
          throw new Violation( this, value, { value: Validator.errorCode.must_be_a_string } );
        if ( '' !== value.replace( /^\s+/g, '' ).replace( /\s+$/g, '' ) )
          throw new Violation( this, value );
        return true;
      };
      return this;
    },
    Callback: function ( fn ) {
      this.__class__ = 'Callback';
      this.arguments = Array.prototype.slice.call( arguments );
      if ( 1 === this.arguments.length )
        this.arguments = []
      else
        this.arguments.splice( 0, 1 );
      if ( 'function' !== typeof fn )
        throw new Error( 'Callback must be instanciated with a function' );
      this.fn = fn;
      this.validate = function ( value ) {
        var arguments = [ value ].concat( this.arguments) ;
        var result = this.fn.apply( this, arguments );
        if ( true !== result )
          throw new Violation( this, value, { result: result } );
        return true;
      };
      return this;
    },
    Choice: function ( list ) {
      this.__class__ = 'Choice';
      if ( !_isArray( list ) && 'function' !== typeof list )
        throw new Error( 'Choice must be instanciated with an array or a function' );
      this.list = list;
      this.validate = function ( value ) {
        var list = 'function' === typeof this.list ? this.list() : this.list;
        for ( var i = 0; i < list.length; i++ )
          if ( value === list[ i ] )
            return true;
        throw new Violation( this, value, { choices: list } );
      };
      return this;
    },
    Collection: function ( constraint ) {
      this.__class__ = 'Collection';
      this.constraint = 'undefined' !== typeof constraint ? new Constraint( constraint ) : false;
      this.validate = function ( collection, group ) {
        var result, validator = new Validator(), count = 0, failures = {}, groups = this.groups.length ? this.groups : group;
        if ( !_isArray( collection ) )
          throw new Violation( this, array, { value: Validator.errorCode.must_be_an_array } );
        for ( var i = 0; i < collection.length; i++ ) {
          result = this.constraint ?
            validator.validate( collection[ i ], this.constraint, groups ) :
            validator.validate( collection[ i ], groups );
          if ( !_isEmptyObject( result ) )
            failures[ count ] = result;
          count++;
        }
        return !_isEmptyObject( failures ) ? failures : true;
      };
      return this;
    },
    Count: function ( count ) {
      this.__class__ = 'Count';
      this.count = count;
      this.validate = function ( array ) {
        if ( !_isArray( array ) )
          throw new Violation( this, array, { value: Validator.errorCode.must_be_an_array } );
        var count = 'function' === typeof this.count ? this.count( array ) : this.count;
        if ( isNaN( Number( count ) ) )
          throw new Error( 'Count must be a valid interger', count );
        if ( count !== array.length )
          throw new Violation( this, array, { count: count } );
        return true;
      };
      return this;
    },
    Email: function () {
      this.__class__ = 'Email';
      this.validate = function ( value ) {
        var regExp = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
        if ( 'string' !== typeof value )
          throw new Violation( this, value, { value: Validator.errorCode.must_be_a_string } );
        if ( !regExp.test( value ) )
          throw new Violation( this, value );
        return true;
      };
      return this;
    },
    Eql: function ( eql ) {
      this.__class__ = 'Eql';
      if ( 'undefined' === typeof eql )
        throw new Error( 'Equal must be instanciated with an Array or an Object' );
      this.eql = eql;
      this.validate = function ( value ) {
        var eql = 'function' === typeof this.eql ? this.eql( value ) : this.eql;
        if ( !expect.eql( eql, value ) )
          throw new Violation( this, value, { eql: eql } );
        return true;
      };
      return this;
    },
    EqualTo: function ( reference ) {
      this.__class__ = 'EqualTo';
      if ( 'undefined' === typeof reference )
        throw new Error( 'EqualTo must be instanciated with a value or a function' );
      this.reference = reference;
      this.validate = function ( value ) {
        var reference = 'function' === typeof this.reference ? this.reference( value ) : this.reference;
        if ( reference !== value )
          throw new Violation( this, value, { value: reference } );
        return true;
      };
      return this;
    },
    GreaterThan: function ( threshold ) {
      this.__class__ = 'GreaterThan';
      if ( 'undefined' === typeof threshold )
        throw new Error( 'Should give a threshold value' );
      this.threshold = threshold;
      this.validate = function ( value ) {
        if ( '' === value || isNaN( Number( value ) ) )
          throw new Violation( this, value, { value: Validator.errorCode.must_be_a_number } );
        if ( this.threshold >= value )
          throw new Violation( this, value, { threshold: this.threshold } );
        return true;
      };
      return this;
    },
    GreaterThanOrEqual: function ( threshold ) {
      this.__class__ = 'GreaterThanOrEqual';
      if ( 'undefined' === typeof threshold )
        throw new Error( 'Should give a threshold value' );
      this.threshold = threshold;
      this.validate = function ( value ) {
        if ( '' === value || isNaN( Number( value ) ) )
          throw new Violation( this, value, { value: Validator.errorCode.must_be_a_number } );
        if ( this.threshold > value )
          throw new Violation( this, value, { threshold: this.threshold } );
        return true;
      };
      return this;
    },
    InstanceOf: function ( classRef ) {
      this.__class__ = 'InstanceOf';
      if ( 'undefined' === typeof classRef )
        throw new Error( 'InstanceOf must be instanciated with a value' );
      this.classRef = classRef;
      this.validate = function ( value ) {
        if ( true !== (value instanceof this.classRef) )
          throw new Violation( this, value, { classRef: this.classRef } );
        return true;
      };
      return this;
    },
    IPv4: function () {
      this.__class__ = 'IPv4';
      this.validate = function ( value ) {
        var regExp = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        if ( 'string' !== typeof value )
          throw new Violation( this, value, { value: Validator.errorCode.must_be_a_string } );
        if ( !regExp.test( value ) )
          throw new Violation( this, value );
        return true;
      };
      return this;
    },
    Length: function ( boundaries ) {
      this.__class__ = 'Length';
      if ( !boundaries.min && !boundaries.max )
        throw new Error( 'Lenth assert must be instanciated with a { min: x, max: y } object' );
      this.min = boundaries.min;
      this.max = boundaries.max;
      this.validate = function ( value ) {
        if ( 'string' !== typeof value && !_isArray( value ) )
          throw new Violation( this, value, { value: Validator.errorCode.must_be_a_string_or_array } );
        if ( 'undefined' !== typeof this.min && this.min === this.max && value.length !== this.min )
          throw new Violation( this, value, { min: this.min, max: this.max } );
        if ( 'undefined' !== typeof this.max && value.length > this.max )
          throw new Violation( this, value, { max: this.max } );
        if ( 'undefined' !== typeof this.min && value.length < this.min )
          throw new Violation( this, value, { min: this.min } );
        return true;
      };
      return this;
    },
    LessThan: function ( threshold ) {
      this.__class__ = 'LessThan';
      if ( 'undefined' === typeof threshold )
        throw new Error( 'Should give a threshold value' );
      this.threshold = threshold;
      this.validate = function ( value ) {
        if ( '' === value || isNaN( Number( value ) ) )
          throw new Violation( this, value, { value: Validator.errorCode.must_be_a_number } );
        if ( this.threshold <= value )
          throw new Violation( this, value, { threshold: this.threshold } );
        return true;
      };
      return this;
    },
    LessThanOrEqual: function ( threshold ) {
      this.__class__ = 'LessThanOrEqual';
      if ( 'undefined' === typeof threshold )
        throw new Error( 'Should give a threshold value' );
      this.threshold = threshold;
      this.validate = function ( value ) {
        if ( '' === value || isNaN( Number( value ) ) )
          throw new Violation( this, value, { value: Validator.errorCode.must_be_a_number } );
        if ( this.threshold < value )
          throw new Violation( this, value, { threshold: this.threshold } );
        return true;
      };
      return this;
    },
    Mac: function () {
      this.__class__ = 'Mac';
      this.validate = function ( value ) {
        var regExp = /^(?:[0-9A-F]{2}:){5}[0-9A-F]{2}$/i;
        if ( 'string' !== typeof value )
          throw new Violation( this, value, { value: Validator.errorCode.must_be_a_string } );
        if ( !regExp.test( value ) )
          throw new Violation( this, value );
        return true;
      };
      return this;
    },
    NotNull: function () {
      this.__class__ = 'NotNull';
      this.validate = function ( value ) {
        if ( null === value || 'undefined' === typeof value )
          throw new Violation( this, value );
        return true;
      };
      return this;
    },
    NotBlank: function () {
      this.__class__ = 'NotBlank';
      this.validate = function ( value ) {
        if ( 'string' !== typeof value )
          throw new Violation( this, value, { value: Validator.errorCode.must_be_a_string } );
        if ( '' === value.replace( /^\s+/g, '' ).replace( /\s+$/g, '' ) )
          throw new Violation( this, value );
        return true;
      };
      return this;
    },
    Null: function () {
      this.__class__ = 'Null';
      this.validate = function ( value ) {
        if ( null !== value )
          throw new Violation( this, value );
        return true;
      };
      return this;
    },
    Range: function ( min, max ) {
      this.__class__ = 'Range';
      if ( !min || !max )
        throw new Error( 'Range assert expects min and max values' );
      this.min = min;
      this.max = max;
      this.validate = function ( value ) {
          try {
            // validate strings and objects with their Length
            if ( ( 'string' === typeof value && isNaN( Number( value ) ) ) || _isArray( value ) )
              new Assert().Length( { min: this.min, max: this.max } ).validate( value );
            // validate numbers with their value
            else
              new Assert().GreaterThanOrEqual( this.min ).validate( value ) && new Assert().LessThanOrEqual( this.max ).validate( value );
            return true;
          } catch ( violation ) {
            throw new Violation( this, value, violation.violation );
          }
        return true;
      };
      return this;
    },
    Regexp: function ( regexp, flag ) {
      this.__class__ = 'Regexp';
      if ( 'undefined' === typeof regexp )
        throw new Error( 'You must give a regexp' );
      this.regexp = regexp;
      this.flag = flag || '';
      this.validate = function ( value ) {
        if ( 'string' !== typeof value )
          throw new Violation( this, value, { value: Validator.errorCode.must_be_a_string } );
        if ( !new RegExp( this.regexp ).test( value, this.flag ) )
          throw new Violation( this, value, { regexp: this.regexp, flag: this.flag } );
        return true;
      };
      return this;
    },
    Required: function () {
      this.__class__ = 'Required';
      this.validate = function ( value ) {
        if ( 'undefined' === typeof value )
          throw new Violation( this, value );
        if ( 'string' === typeof value )
          try {
            new Assert().NotNull().validate( value ) && new Assert().NotBlank().validate( value );
          } catch ( violation ) {
            throw new Violation( this, value );
          }
        return true;
      };
      return this;
    },
    // Unique() or Unique ( { key: foo } )
    Unique: function ( object ) {
      this.__class__ = 'Unique';
      if ( 'object' === typeof object )
        this.key = object.key;
      this.validate = function ( array ) {
        var value, store = [];
        if ( !_isArray( array ) )
          throw new Violation( this, array, { value: Validator.errorCode.must_be_an_array } );
        for ( var i = 0; i < array.length; i++ ) {
          value = 'object' === typeof array[ i ] ? array[ i ][ this.key ] : array[ i ];
          if ( 'undefined' === typeof value )
            continue;
          if ( -1 !== store.indexOf( value ) )
            throw new Violation( this, array, { value: value } );
          store.push( value );
        }
        return true;
      };
      return this;
    }
  };
  // expose to the world these awesome classes
  exports.Assert = Assert;
  exports.Validator = Validator;
  exports.Violation = Violation;
  exports.Constraint = Constraint;
  /**
  * Some useful object prototypes / functions here
  */
  // IE8<= compatibility
  // https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf
  if (!Array.prototype.indexOf)
    Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
        
        if (this == null) {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = 0;
        if (arguments.length > 1) {
            n = Number(arguments[1]);
            if (n != n) { // shortcut for verifying if it's NaN
                n = 0;
            } else if (n != 0 && n != Infinity && n != -Infinity) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        for (; k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    };
  // Test if object is empty, useful for Constraint violations check
  var _isEmptyObject = function ( obj ) {
    for ( var property in obj )
      return false;
    return true;
  };
  var _isArray = function ( obj ) {
    return Object.prototype.toString.call( obj ) === '[object Array]';
  }
  // https://github.com/LearnBoost/expect.js/blob/master/expect.js
  var expect = {
    eql: function ( actual, expected ) {
      if ( actual === expected ) {
        return true;
      } else if ( 'undefined' !== typeof Buffer
          && Buffer.isBuffer( actual ) && Buffer.isBuffer( expected ) ) {
        if ( actual.length !== expected.length ) return false;
        for ( var i = 0; i < actual.length; i++ )
          if ( actual[i] !== expected[i] ) return false;
        return true;
      } else if ( actual instanceof Date && expected instanceof Date ) {
        return actual.getTime() === expected.getTime();
      } else if ( typeof actual !== 'object' && typeof expected !== 'object' ) {
        // loosy ==
        return actual == expected;
      } else {
        return this.objEquiv(actual, expected);
      }
    },
    isUndefinedOrNull: function ( value ) {
      return value === null || typeof value === 'undefined';
    },
    isArguments: function ( object ) {
      return Object.prototype.toString.call(object) == '[object Arguments]';
    },
    keys: function ( obj ) {
      if ( Object.keys )
        return Object.keys( obj );
      var keys = [];
      for ( var i in obj )
        if ( Object.prototype.hasOwnProperty.call( obj, i ) )
          keys.push(i);
      return keys;
    },
    objEquiv: function ( a, b ) {
      if ( this.isUndefinedOrNull( a ) || this.isUndefinedOrNull( b ) )
        return false;
      if ( a.prototype !== b.prototype ) return false;
      if ( this.isArguments( a ) ) {
        if ( !this.isArguments( b ) )
          return false;
        return eql( pSlice.call( a ) , pSlice.call( b ) );
      }
      try {
        var ka = this.keys( a ), kb = this.keys( b ), key, i;
      } catch ( e ) {
        return false;
      }
      if ( ka.length !== kb.length )
        return false;
      ka.sort();
      kb.sort();
      for ( i = ka.length - 1; i >= 0; i-- )
        if ( ka[ i ] != kb[ i ] )
          return false;
      for ( i = ka.length - 1; i >= 0; i-- ) {
        key = ka[i];
        if ( !this.eql( a[ key ], b[ key ] ) )
           return false;
      }
      return true;
    }
  };
  // AMD Compliance
  if ( "function" === typeof define && define.amd ) {
    define( 'validator', [],function() { return exports; } );
  }
} )( 'undefined' === typeof exports ? this[ 'undefined' !== typeof validatorjs_ns ? validatorjs_ns : 'Validator' ] = {} : exports );


  var ParsleyValidator = function (validators, catalog) {
    this.__class__ = 'ParsleyValidator';
    this.Validator = Validator;
    // Default Parsley locale is en
    this.locale = 'en';
    this.init(validators || {}, catalog || {});
  };
  ParsleyValidator.prototype = {
    init: function (validators, catalog) {
      this.catalog = catalog;
      for (var name in validators)
        this.addValidator(name, validators[name].fn, validators[name].priority);
      $.emit('parsley:validator:init');
    },
    // Set new messages locale if we have dictionary loaded in ParsleyConfig.i18n
    setLocale: function (locale) {
      if ('undefined' === typeof this.catalog[locale])
        throw new Error(locale + ' is not available in the catalog');
      this.locale = locale;
      return this;
    },
    // Add a new messages catalog for a given locale. Set locale for this catalog if set === `true`
    addCatalog: function (locale, messages, set) {
      if ('object' === typeof messages)
        this.catalog[locale] = messages;
      if (true === set)
        return this.setLocale(locale);
      return this;
    },
    // Add a specific message for a given constraint in a given locale
    addMessage: function (locale, name, message) {
      if (undefined === typeof this.catalog[locale])
        this.catalog[locale] = {};
      this.catalog[locale][name.toLowerCase()] = message;
      return this;
    },
    validate: function (value, constraints, priority) {
      return new this.Validator.Validator().validate.apply(new Validator.Validator(), arguments);
    },
    // Add a new validator
    addValidator: function (name, fn, priority) {
      this.validators[name.toLowerCase()] = function (requirements) {
        return $.extend(new Validator.Assert().Callback(fn, requirements), { priority: priority });
      };
      return this;
    },
    updateValidator: function (name, fn, priority) {
      return addValidator(name, fn, priority);
    },
    removeValidator: function (name) {
      delete this.validators[name];
      return this;
    },
    getErrorMessage: function (constraint) {
      var message;
      // Type constraints are a bit different, we have to match their requirements too to find right error message
      if ('type' === constraint.name)
        message = this.catalog[this.locale][constraint.name][constraint.requirements];
      else
        message = this.formatMesssage(this.catalog[this.locale][constraint.name], constraint.requirements);
      return '' !== message ? message : this.catalog[this.locale].defaultMessage;
    },
    // Kind of light `sprintf()` implementation
    formatMesssage: function (string, parameters) {
      if ('object' === typeof parameters) {
        for (var i in parameters)
          string = this.formatMesssage(string, parameters[i]);
        return string;
      }
      return 'string' === typeof string ? string.replace(new RegExp('%s', 'i'), parameters) : '';
    },
    // Here is the Parsley default validators list.
    // This is basically Validatorjs validators, with different API for some of them
    // and a Parsley priority set
    validators: {
      notblank: function () {
        return $.extend(new Validator.Assert().NotBlank(), { priority: 2 });
      },
      required: function () {
        return $.extend(new Validator.Assert().Required(), { priority: 512 });
      },
      type: function (type) {
        var assert;
        switch (type) {
          case 'email':
            assert = new Validator.Assert().Email();
            break;
          case 'number':
            assert = new Validator.Assert().Regexp('^-?(?:\\d+|\\d{1,3}(?:,\\d{3})+)?(?:\\.\\d+)?$');
            break;
          case 'integer':
            assert = new Validator.Assert().Regexp('^-?\\d+$');
            break;
          case 'digits':
            assert = new Validator.Assert().Regexp('^\\d+$');
            break;
          case 'alphanum':
            assert = new Validator.Assert().Regexp('^\\w+$', 'i');
            break;
          case 'url':
            assert = new Validator.Assert().Regexp('(https?:\\/\\/)?(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,4}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)', 'i');
            break;
          default:
            throw new Error('validator type `' + type + '` is not supported');
        }
        return $.extend(assert, { priority: 256 });
      },
      pattern: function (regexp) {
        var flags = '';
        // Test if RegExp is literal, if not, nothing to be done, otherwise, we need to isolate flags and pattern
        if (!!(/^\/.*\/(?:[gimy]*)$/.test(regexp))) {
          // Replace the regexp literal string with the first match group: ([gimy]*)
          // If no flag is present, this will be a blank string
          flags = regexp.replace(/.*\/([gimy]*)$/, '$1');
          // Again, replace the regexp literal string with the first match group:
          // everything excluding the opening and closing slashes and the flags
          regexp = regexp.replace(new RegExp('^/(.*?)/' + flags + '$'), '$1');
        }
        return $.extend(new Validator.Assert().Regexp(regexp, flags), { priority: 64 });
      },
      minlength: function (value) {
        return $.extend(new Validator.Assert().Length({ min: value }), {
          priority: 30,
          requirementsTransformer: function () {
            return 'string' === typeof value && !isNaN(value) ? parseInt(value, 10) : value;
          }
        });
      },
      maxlength: function (value) {
        return $.extend(new Validator.Assert().Length({ max: value }), {
        priority: 30,
        requirementsTransformer: function () {
            return 'string' === typeof value && !isNaN(value) ? parseInt(value, 10) : value;
          }
      });
      },
      length: function (array) {
        return $.extend(new Validator.Assert().Length({ min: array[0], max: array[1] }), { priority: 32 });
      },
      mincheck: function (length) {
        return this.minlength(length);
      },
      maxcheck: function (length) {
        return this.maxlength(length);
      },
      check: function (array) {
        return this.length(array);
      },
      min: function (value) {
        return $.extend(new Validator.Assert().GreaterThanOrEqual(value), {
          priority: 30,
          requirementsTransformer: function () {
            return 'string' === typeof value && !isNaN(value) ? parseInt(value, 10) : value;
          }
        });
      },
      max: function (value) {
        return $.extend(new Validator.Assert().LessThanOrEqual(value), {
          priority: 30,
          requirementsTransformer: function () {
            return 'string' === typeof value && !isNaN(value) ? parseInt(value, 10) : value;
          }
        });
      },
      range: function (array) {
        return $.extend(new Validator.Assert().Range(array[0], array[1]), {
          priority: 32,
          requirementsTransformer: function () {
            for (var i = 0; i < array.length; i++)
              array[i] = 'string' === typeof array[i] && !isNaN(array[i]) ? parseInt(array[i], 10) : array[i];
            return array;
          }
        });
      },
      equalto: function (value) {
        return $.extend(new Validator.Assert().EqualTo(value), {
          priority: 256,
          requirementsTransformer: function () {
            return $(value).length ? $(value).val() : value;
          }
        });
      }
    }
  };

  var ParsleyUI = function (options) {
    this.__class__ = 'ParsleyUI';
  };
  ParsleyUI.prototype = {
    listen: function () {
      $.listen('parsley:form:init', this, this.setupForm);
      $.listen('parsley:field:init', this, this.setupField);
      $.listen('parsley:field:validated', this, this.reflow);
      $.listen('parsley:form:validated', this, this.focus);
      $.listen('parsley:field:reset', this, this.reset);
      $.listen('parsley:form:destroy', this, this.destroy);
      $.listen('parsley:field:destroy', this, this.destroy);
      return this;
    },
    reflow: function (fieldInstance) {
      // If this field has not an active UI (case for multiples) don't bother doing something
      if ('undefined' === typeof fieldInstance._ui || false === fieldInstance._ui.active)
        return;
      // Diff between two validation results
      var diff = this._diff(fieldInstance.validationResult, fieldInstance._ui.lastValidationResult);
      // Then store current validation result for next reflow
      fieldInstance._ui.lastValidationResult = fieldInstance.validationResult;
      // Field have been validated at least once if here. Useful for binded key events..
      fieldInstance._ui.validatedOnce = true;
      // Handle valid / invalid / none field class
      this.manageStatusClass(fieldInstance);
      // Add, remove, updated errors messages
      this.manageErrorsMessages(fieldInstance, diff);
      // Triggers impl
      this.actualizeTriggers(fieldInstance);
      // If field is not valid for the first time, bind keyup trigger to ease UX and quickly inform user
      if ((diff.kept.length || diff.added.length) && 'undefined' === typeof fieldInstance._ui.failedOnce)
        this.manageFailingFieldTrigger(fieldInstance);
    },
    manageStatusClass: function (fieldInstance) {
      if (true === fieldInstance.validationResult)
        this._successClass(fieldInstance);
      else if (fieldInstance.validationResult.length > 0)
        this._errorClass(fieldInstance);
      else
        this._resetClass(fieldInstance);
    },
    manageErrorsMessages: function (fieldInstance, diff) {
      if ('undefined' !== typeof fieldInstance.options.errorsMessagesDisabled)
        return;
      // Case where we have errorMessage option that configure an unique field error message, regardless failing validators
      if ('undefined' !== typeof fieldInstance.options.errorMessage) {
        if ((diff.added.length || diff.kept.length)) {
          if (0 === fieldInstance._ui.$errorsWrapper.find('.parsley-custom-error-message').length)
            fieldInstance._ui.$errorsWrapper
              .append($(fieldInstance.options.errorTemplate)
              .addClass('parsley-custom-error-message'));
          fieldInstance._ui.$errorsWrapper
            .addClass('filled')
            .find('.parsley-custom-error-message')
            .html(fieldInstance.options.errorMessage);
        } else {
          fieldInstance._ui.$errorsWrapper
            .removeClass('filled')
            .find('.parsley-custom-error-message')
            .remove();
        }
        return;
      }
      // Show, hide, update failing constraints messages
      for (var i = 0; i < diff.removed.length; i++)
        this.removeError(fieldInstance, diff.removed[i].assert.name, true);
      for (i = 0; i < diff.added.length; i++)
        this.addError(fieldInstance, diff.added[i].assert.name, undefined, diff.added[i].assert, true);
      for (i = 0; i < diff.kept.length; i++)
        this.updateError(fieldInstance, diff.kept[i].assert.name, undefined, diff.kept[i].assert, true);
    },
    // TODO: strange API here, intuitive for manual usage with addError(pslyInstance, 'foo', 'bar')
    // but a little bit complex for above internal usage, with forced undefined parametter..
    addError: function (fieldInstance, name, message, assert, doNotUpdateClass) {
      fieldInstance._ui.$errorsWrapper
        .addClass('filled')
        .append($(fieldInstance.options.errorTemplate)
        .addClass('parsley-' + name)
        .html(message || this._getErrorMessage(fieldInstance, assert)));
      if (true !== doNotUpdateClass)
        this._errorClass(fieldInstance);
    },
    // Same as above
    updateError: function (fieldInstance, name, message, assert, doNotUpdateClass) {
      fieldInstance._ui.$errorsWrapper
        .addClass('filled')
        .find('.parsley-' + name)
        .html(message || this._getErrorMessage(fieldInstance, assert));
      if (true !== doNotUpdateClass)
        this._errorClass(fieldInstance);
    },
    // Same as above twice
    removeError: function (fieldInstance, name, doNotUpdateClass) {
      fieldInstance._ui.$errorsWrapper
        .removeClass('filled')
        .find('.parsley-' + name)
        .remove();
      // edge case possible here: remove a standard Parsley error that is still failing in fieldInstance.validationResult
      // but highly improbable cuz' manually removing a well Parsley handled error makes no sense.
      if (true !== doNotUpdateClass)
        this.manageStatusClass(fieldInstance);
    },
    focus: function (formInstance) {
      if (true === formInstance.validationResult || 'none' === formInstance.options.focus)
        return formInstance._focusedField = null;
      formInstance._focusedField = null;
      for (var i = 0; i < formInstance.fields.length; i++)
        if (true !== formInstance.fields[i].validationResult && formInstance.fields[i].validationResult.length > 0 && 'undefined' === typeof formInstance.fields[i].options.noFocus) {
          if ('first' === formInstance.options.focus) {
            formInstance._focusedField = formInstance.fields[i].$element;
            return formInstance._focusedField.focus();
          }
          formInstance._focusedField = formInstance.fields[i].$element;
        }
      if (null === formInstance._focusedField)
        return null;
      return formInstance._focusedField.focus();
    },
    _getErrorMessage: function (fieldInstance, constraint) {
      var customConstraintErrorMessage = constraint.name + 'Message';
      if ('undefined' !== typeof fieldInstance.options[customConstraintErrorMessage])
        return fieldInstance.options[customConstraintErrorMessage];
      return window.ParsleyValidator.getErrorMessage(constraint);
    },
    _diff: function (newResult, oldResult, deep) {
      var added = [],
        kept = [];
      for (var i = 0; i < newResult.length; i++) {
        var found = false;
        for (var j = 0; j < oldResult.length; j++)
          if (newResult[i].assert.name === oldResult[j].assert.name) {
            found = true;
            break;
          }
        if (found)
          kept.push(newResult[i]);
        else
          added.push(newResult[i]);
      }
      return {
        kept: kept,
        added: added,
        removed: !deep ? this._diff(oldResult, newResult, true).added : []
      };
    },
    setupForm: function (formInstance) {
      formInstance.$element.on('submit.Parsley', false, $.proxy(formInstance.onSubmitValidate, formInstance));
      // UI could be disabled
      if (false === formInstance.options.uiEnabled)
        return;
      formInstance.$element.attr('novalidate', '');
    },
    setupField: function (fieldInstance) {
      var _ui = { active: false };
      // UI could be disabled
      if (false === fieldInstance.options.uiEnabled)
        return;
      _ui.active = true;
      // Give field its Parsley id in DOM
      fieldInstance.$element.attr(fieldInstance.options.namespace + 'id', fieldInstance.__id__);
      /** Generate important UI elements and store them in fieldInstance **/
      // $errorClassHandler is the $element that woul have parsley-error and parsley-success classes
      _ui.$errorClassHandler = this._manageClassHandler(fieldInstance);
      // $errorsWrapper is a div that would contain the various field errors, it will be appended into $errorsContainer
      _ui.errorsWrapperId = 'parsley-id-' + ('undefined' !== typeof fieldInstance.options.multiple ? 'multiple-' + fieldInstance.options.multiple : fieldInstance.__id__);
      _ui.$errorsWrapper = $(fieldInstance.options.errorsWrapper).attr('id', _ui.errorsWrapperId);
      // ValidationResult UI storage to detect what have changed bwt two validations, and update DOM accordingly
      _ui.lastValidationResult = [];
      _ui.validatedOnce = false;
      _ui.validationInformationVisible = false;
      // Store it in fieldInstance for later
      fieldInstance._ui = _ui;
      /** Mess with DOM now **/
      this._insertErrorWrapper(fieldInstance);
      // Bind triggers first time
      this.actualizeTriggers(fieldInstance);
    },
    // Determine which element will have `parsley-error` and `parsley-success` classes
    _manageClassHandler: function (fieldInstance) {
      // An element selector could be passed through DOM with `data-parsley-class-handler=#foo`
      if ('string' === typeof fieldInstance.options.classHandler && $(fieldInstance.options.classHandler).length)
        return $(fieldInstance.options.classHandler);
      // Class handled could also be determined by function given in Parsley options
      var $handler = fieldInstance.options.classHandler(fieldInstance);
      // If this function returned a valid existing DOM element, go for it
      if ('undefined' !== typeof $handler && $handler.length)
        return $handler;
      // Otherwise, if simple element (input, texatrea, select..) it will perfectly host the classes
      if ('undefined' === typeof fieldInstance.options.multiple || fieldInstance.$element.is('select'))
        return fieldInstance.$element;
      // But if multiple element (radio, checkbox), that would be their parent
      return fieldInstance.$element.parent();
    },
    _insertErrorWrapper: function (fieldInstance) {
      var $errorsContainer;
      if ('string' === typeof fieldInstance.options.errorsContainer )
        if ($(fieldInstance.options.errorsContainer + '').length)
          return $(fieldInstance.options.errorsContainer).append(fieldInstance._ui.$errorsWrapper);
        else if (window.console && window.console.warn)
          window.console.warn('The errors container `' + fieldInstance.options.errorsContainer + '` does not exist in DOM');

      if ('function' === typeof fieldInstance.options.errorsContainer)
        $errorsContainer = fieldInstance.options.errorsContainer(fieldInstance);
      if ('undefined' !== typeof $errorsContainer && $errorsContainer.length)
        return $errorsContainer.append(fieldInstance._ui.$errorsWrapper);
      return 'undefined' === typeof fieldInstance.options.multiple ? fieldInstance.$element.after(fieldInstance._ui.$errorsWrapper) : fieldInstance.$element.parent().after(fieldInstance._ui.$errorsWrapper);
    },
    actualizeTriggers: function (fieldInstance) {
      var that = this;
      // Remove Parsley events already binded on this field
      if (fieldInstance.options.multiple)
        $('[' + fieldInstance.options.namespace + 'multiple="' + fieldInstance.options.multiple + '"]').each(function () {
          $(this).off('.Parsley');
        });
      else
        fieldInstance.$element.off('.Parsley');
      // If no trigger is set, all good
      if (false === fieldInstance.options.trigger)
        return;
      var triggers = fieldInstance.options.trigger.replace(/^\s+/g , '').replace(/\s+$/g , '');
      if ('' === triggers)
        return;
      // Bind fieldInstance.eventValidate if exists (for parsley.ajax for example), ParsleyUI.eventValidate otherwise
      if (fieldInstance.options.multiple)
        $('[' + fieldInstance.options.namespace + 'multiple="' + fieldInstance.options.multiple + '"]').each(function () {
          $(this).on(
            triggers.split(' ').join('.Parsley ') + '.Parsley',
            false,
            $.proxy('function' === typeof fieldInstance.eventValidate ? fieldInstance.eventValidate : that.eventValidate, fieldInstance));
        });
      else
        fieldInstance.$element
          .on(
            triggers.split(' ').join('.Parsley ') + '.Parsley',
            false,
            $.proxy('function' === typeof fieldInstance.eventValidate ? fieldInstance.eventValidate : this.eventValidate, fieldInstance));
    },
    // Called through $.proxy with fieldInstance. `this` context is ParsleyField
    eventValidate: function(event) {
      // For keyup, keypress, keydown.. events that could be a little bit obstrusive
      // do not validate if val length < min threshold on first validation. Once field have been validated once and info
      // about success or failure have been displayed, always validate with this trigger to reflect every yalidation change.
      if (new RegExp('key').test(event.type))
        if (!this._ui.validationInformationVisible && this.getValue().length <= this.options.validationThreshold)
          return;
      this._ui.validatedOnce = true;
      this.validate();
    },
    manageFailingFieldTrigger: function (fieldInstance) {
      fieldInstance._ui.failedOnce = true;
      // Radio and checkboxes fields must bind every field multiple
      if (fieldInstance.options.multiple)
        $('[' + fieldInstance.options.namespace + 'multiple="' + fieldInstance.options.multiple + '"]').each(function () {
          if (!new RegExp('change', 'i').test($(this).parsley().options.trigger || ''))
            return $(this).on('change.ParsleyFailedOnce', false, $.proxy(fieldInstance.validate, fieldInstance));
        });
      // Select case
      if (fieldInstance.$element.is('select'))
        if (!new RegExp('change', 'i').test(fieldInstance.options.trigger || ''))
          return fieldInstance.$element.on('change.ParsleyFailedOnce', false, $.proxy(fieldInstance.validate, fieldInstance));
      // All other inputs fields
      if (!new RegExp('keyup', 'i').test(fieldInstance.options.trigger || ''))
        return fieldInstance.$element.on('keyup.ParsleyFailedOnce', false, $.proxy(fieldInstance.validate, fieldInstance));
    },
    reset: function (parsleyInstance) {
      // Nothing to do if UI never initialized for this field
      if ('undefined' === typeof parsleyInstance._ui)
        return;
      // Reset all event listeners
      parsleyInstance.$element.off('.Parsley');
      parsleyInstance.$element.off('.ParsleyFailedOnce');
      if ('ParsleyForm' === parsleyInstance.__class__)
        return;
      // Reset all errors' li
      parsleyInstance._ui.$errorsWrapper.children().each(function () {
        $(this).remove();
      });
      // Reset validation class
      this._resetClass(parsleyInstance);
      // Reset validation flags and last validation result
      parsleyInstance._ui.validatedOnce = false;
      parsleyInstance._ui.lastValidationResult = [];
      parsleyInstance._ui.validationInformationVisible = false;
    },
    destroy: function (parsleyInstance) {
      // Nothing to do if UI never initialized for this field
      if ('undefined' === typeof parsleyInstance._ui)
        return;
      this.reset(parsleyInstance);
      if ('ParsleyForm' === parsleyInstance.__class__)
        return;
      parsleyInstance._ui.$errorsWrapper.remove();
      delete parsleyInstance._ui;
    },
    _successClass: function (fieldInstance) {
      fieldInstance._ui.validationInformationVisible = true;
      fieldInstance._ui.$errorClassHandler.removeClass(fieldInstance.options.errorClass).addClass(fieldInstance.options.successClass);
    },
    _errorClass: function (fieldInstance) {
      fieldInstance._ui.validationInformationVisible = true;
      fieldInstance._ui.$errorClassHandler.removeClass(fieldInstance.options.successClass).addClass(fieldInstance.options.errorClass);
    },
    _resetClass: function (fieldInstance) {
      fieldInstance._ui.$errorClassHandler.removeClass(fieldInstance.options.successClass).removeClass(fieldInstance.options.errorClass);
    }
  };

  var ParsleyOptionsFactory = function (defaultOptions, globalOptions, userOptions, namespace) {
    this.__class__ = 'OptionsFactory';
    this.__id__ = ParsleyUtils.hash(4);
    this.formOptions = null;
    this.fieldOptions = null;
    this.staticOptions = $.extend(true, {}, defaultOptions, globalOptions, userOptions, { namespace: namespace });
  };
  ParsleyOptionsFactory.prototype = {
    get: function (parsleyInstance) {
      if ('undefined' === typeof parsleyInstance.__class__)
        throw new Error('Parsley Instance expected');
      switch (parsleyInstance.__class__) {
        case 'Parsley':
          return this.staticOptions;
        case 'ParsleyForm':
          return this.getFormOptions(parsleyInstance);
        case 'ParsleyField':
        case 'ParsleyFieldMultiple':
          return this.getFieldOptions(parsleyInstance);
        default:
          throw new Error('Instance ' + parsleyInstance.__class__ + ' is not supported');
      }
    },
    getFormOptions: function (formInstance) {
      this.formOptions = ParsleyUtils.attr(formInstance.$element, this.staticOptions.namespace);
      // not deep extend, since formOptions is a 1 level deep object
      return $.extend({}, this.staticOptions, this.formOptions);
    },
    getFieldOptions: function (fieldInstance) {
      this.fieldOptions = ParsleyUtils.attr(fieldInstance.$element, this.staticOptions.namespace);
      if (null === this.formOptions && 'ParsleyForm' === fieldInstance.parsleyInstance.__proxy__)
        this.formOptions = getFormOptions(fieldInstance.parsleyInstance);
      // not deep extend, since formOptions and fieldOptions is a 1 level deep object
      return $.extend({}, this.staticOptions, this.formOptions, this.fieldOptions);
    }
  };

  var ParsleyForm = function(element, parsleyInstance) {
    this.__class__ = 'ParsleyForm';
    this.__id__ = ParsleyUtils.hash(4);
    if ('Parsley' !== ParsleyUtils.get(parsleyInstance, '__class__'))
      throw new Error('You must give a Parsley instance');
    this.parsleyInstance = parsleyInstance;
    this.$element = $(element);
  };
  ParsleyForm.prototype = {
    init: function () {
      this.validationResult = null;
      this.options = this.parsleyInstance.OptionsFactory.get(this);
      this._bindFields();
      return this;
    },
    onSubmitValidate: function (event) {
      this.validate(undefined, undefined, event);
      // prevent form submission if validation fails
      if (false === this.validationResult && event instanceof $.Event) {
        event.stopImmediatePropagation();
        event.preventDefault();
      }
      return this;
    },
    // @returns boolean
    validate: function (group, force, event) {
      this.submitEvent = event;
      this.validationResult = true;
      var fieldValidationResult = [];
      // Refresh form DOM options and form's fields that could have changed
      this._refreshFields();
      $.emit('parsley:form:validate', this);
      // loop through fields to validate them one by one
      for (var i = 0; i < this.fields.length; i++) {
        // do not validate a field if not the same as given validation group
        if (group && group !== this.fields[i].options.group)
          continue;
        fieldValidationResult = this.fields[i].validate(force);
        if (true !== fieldValidationResult && fieldValidationResult.length > 0 && this.validationResult)
          this.validationResult = false;
      }
      $.emit('parsley:form:validated', this);
      return this.validationResult;
    },
    // Iterate over refreshed fields, and stop on first failure
    isValid: function (group, force) {
      this._refreshFields();
      for (var i = 0; i < this.fields.length; i++) {
        // do not validate a field if not the same as given validation group
        if (group && group !== this.fields[i].options.group)
          continue;
        if (false === this.fields[i].isValid(force))
          return false;
      }
      return true;
    },
    _refreshFields: function () {
      return this.actualizeOptions()._bindFields();
    },
    _bindFields: function () {
      var self = this;
      this.fields = [];
      this.fieldsMappedById = {};
      this.$element.find(this.options.inputs).each(function () {
        var fieldInstance = new window.Parsley(this, {}, self.parsleyInstance);
        // Only add valid and not excluded `ParsleyField` and `ParsleyFieldMultiple` children
        if (('ParsleyField' === fieldInstance.__class__ || 'ParsleyFieldMultiple' === fieldInstance.__class__) && !fieldInstance.$element.is(fieldInstance.options.excluded))
          if ('undefined' === typeof self.fieldsMappedById[fieldInstance.__class__ + '-' + fieldInstance.__id__]) {
            self.fieldsMappedById[fieldInstance.__class__ + '-' + fieldInstance.__id__] = fieldInstance;
            self.fields.push(fieldInstance);
          }
      });
      return this;
    }
  };

  var ConstraintFactory = function (parsleyField, name, requirements, priority, isDomConstraint) {
    if (!new RegExp('ParsleyField').test(ParsleyUtils.get(parsleyField, '__class__')))
      throw new Error('ParsleyField or ParsleyFieldMultiple instance expected');
    if ('function' !== typeof window.ParsleyValidator.validators[name] &&
      'Assert' !== window.ParsleyValidator.validators[name](requirements).__parentClass__)
      throw new Error('Valid validator expected');
    var getPriority = function (parsleyField, name) {
      if ('undefined' !== typeof parsleyField.options[name + 'Priority'])
        return parsleyField.options[name + 'Priority'];
      return ParsleyUtils.get(window.ParsleyValidator.validators[name](requirements), 'priority') || 2;
    };
    priority = priority || getPriority(parsleyField, name);
    // If validator have a requirementsTransformer, execute it
    if ('function' === typeof window.ParsleyValidator.validators[name](requirements).requirementsTransformer)
      requirements = window.ParsleyValidator.validators[name](requirements).requirementsTransformer();
    return $.extend(window.ParsleyValidator.validators[name](requirements), {
      name: name,
      requirements: requirements,
      priority: priority,
      groups: [priority],
      isDomConstraint: isDomConstraint || ParsleyUtils.attr(parsleyField.$element, parsleyField.options.namespace, name)
    });
  };

  var ParsleyField = function(field, parsleyInstance) {
    this.__class__ = 'ParsleyField';
    this.__id__ = ParsleyUtils.hash(4);
    if ('Parsley' !== ParsleyUtils.get(parsleyInstance, '__class__'))
      throw new Error('You must give a Parsley instance');
    this.parsleyInstance = parsleyInstance;
    this.$element = $(field);
    this.options = this.parsleyInstance.OptionsFactory.get(this);
  };
  ParsleyField.prototype = {
    init: function () {
      this.constraints = [];
      this.constraintsByName = {};
      this.validationResult = [];
      this.bindConstraints();
      return this;
    },
    // Returns validationResult. For field, it could be:
    //  - `true` if all green
    //  - `[]` if non required field and empty
    //  - `[Violation, [Violation..]]` if errors
    validate: function (force) {
      this.value = this.getValue();
      // Field Validate event. `this.value` could be altered for custom needs
      $.emit('parsley:field:validate', this);
      $.emit('parsley:field:' + (this.isValid(force, this.value) ? 'success' : 'error'), this);
      // Field validated event. `this.validationResult` could be altered for custom needs too
      $.emit('parsley:field:validated', this);
      return this.validationResult;
    },
    getConstraintsSortedPriorities: function () {
      var priorities = [];
      // Create array unique of priorities
      for (var i = 0; i < this.constraints.length; i++)
        if (-1 === priorities.indexOf(this.constraints[i].priority))
          priorities.push(this.constraints[i].priority);
      // Sort them by priority DESC
      priorities.sort(function (a, b) { return b - a; });
      return priorities;
    },
    // Same @return as `validate()`
    isValid: function (force, value) {
      // Recompute options and rebind constraints to have latest changes
      this.refreshConstraints();
      // Sort priorities to validate more important first
      var priorities = this.getConstraintsSortedPriorities();
      // Value could be passed as argument, needed to add more power to 'parsley:field:validate'
      value = value || this.getValue();
      // If a field is empty and not required, leave it alone, it's just fine
      // Except if `data-parsley-validate-if-empty` explicitely added, useful for some custom validators
      if (0 === value.length && !this.isRequired() && 'undefined' === typeof this.options.validateIfEmpty && true !== force)
        return this.validationResult = [];
      // If we want to validate field against all constraints, just call Validator and let it do the job
      if (false === this.options.priorityEnabled)
        return true === (this.validationResult = this.validateThroughValidator(value, this.constraints, 'Any'));
      // Else, iterate over priorities one by one, and validate related asserts one by one
      for (var i = 0; i < priorities.length; i++)
        if (true !== (this.validationResult = this.validateThroughValidator(value, this.constraints, priorities[i])))
          return false;
      return true;
    },
    // Field is required if have required constraint without `false` value
    isRequired: function () {
      if ('undefined' === typeof this.constraintsByName.required)
        return false;
      return false !== this.constraintsByName.required.requirements;
    },
    getValue: function () {
      var value;
      // Value could be overriden in DOM
      if ('undefined' !== typeof this.options.value)
        value = this.options.value;
      else
        value = this.$element.val();
      // Use `data-parsley-trim-value="true"` to auto trim inputs entry
      if (true === this.options.trimValue)
        return value.replace(/^\s+|\s+$/g, '');
      return value;
    },
    refreshConstraints: function () {
      this.actualizeOptions().bindConstraints();
      return this;
    },
    bindConstraints: function () {
      var constraints = [];
      // clean all existing DOM constraints to only keep javascript user constraints
      for (var i = 0; i < this.constraints.length; i++)
        if (false === this.constraints[i].isDomConstraint)
          constraints.push(this.constraints[i]);
      this.constraints = constraints;
      // then re-add Parsley DOM-API constraints
      for (var name in this.options)
        this.addConstraint(name, this.options[name]);
      // finally, bind special HTML5 constraints
      return this.bindHtml5Constraints();
    },
    bindHtml5Constraints: function () {
      // html5 required
      if (this.$element.hasClass('required') || this.$element.attr('required'))
        this.addConstraint('required', true, undefined, true);
      // html5 pattern
      if ('string' === typeof this.$element.attr('pattern'))
        this.addConstraint('pattern', this.$element.attr('pattern'), undefined, true);
      // range
      if ('undefined' !== typeof this.$element.attr('min') && 'undefined' !== typeof this.$element.attr('max'))
        this.addConstraint('range', [this.$element.attr('min'), this.$element.attr('max')], undefined, true);
      // HTML5 min
      else if ('undefined' !== typeof this.$element.attr('min'))
        this.addConstraint('min', this.$element.attr('min'), undefined, true);
      // HTML5 max
      else if ('undefined' !== typeof this.$element.attr('max'))
        this.addConstraint('max', this.$element.attr('max'), undefined, true);
      // html5 types
      var type = this.$element.attr('type');
      if ('undefined' === typeof type)
        return this;
      // Small special case here for HTML5 number, that is in fact an integer validator
      if ('number' === type)
        return this.addConstraint('type', 'integer', undefined, true);
      // Regular other HTML5 supported types
      else if (new RegExp(type, 'i').test('email url range'))
        return this.addConstraint('type', type, undefined, true);
    },
    /**
    * Add a new constraint to a field
    *
    * @method addConstraint
    * @param {String}   name
    * @param {Mixed}    requirements      optional
    * @param {Number}   priority          optional
    * @param {Boolean}  isDomConstraint   optional
    */
    addConstraint: function (name, requirements, priority, isDomConstraint) {
      name = name.toLowerCase();
      if ('function' === typeof window.ParsleyValidator.validators[name]) {
        var constraint = new ConstraintFactory(this, name, requirements, priority, isDomConstraint);
        // if constraint already exist, delete it and push new version
        if ('undefined' !== this.constraintsByName[constraint.name])
          this.removeConstraint(constraint.name);
        this.constraints.push(constraint);
        this.constraintsByName[constraint.name] = constraint;
      }
      return this;
    },
    removeConstraint: function (name) {
      for (var i = 0; i < this.constraints.length; i++)
        if (name === this.constraints[i].name) {
          this.constraints.splice(i, 1);
          break;
        }
      return this;
    },
    updateConstraint: function (name, parameters, priority) {
      return this.removeConstraint(name)
        .addConstraint(name, parameters, priority);
    }
  };

  var ParsleyMultiple = function() {
    this.__class__ = 'ParsleyFieldMultiple';
  };
  ParsleyMultiple.prototype = {
    init: function (multiple) {
      this.$elements = [this.$element];
      this.options.multiple = multiple;
      return this;
    },
    addElement: function ($element) {
      this.$elements.push($element);
      return this;
    },
    refreshConstraints: function () {
      var fieldConstraints;
      this.constraints = [];
      // Select multiple special treatment
      if (this.$element.is('select')) {
        this.actualizeOptions().bindConstraints();
        return this;
      }
      // Gather all constraints for each input in the multiple group
      for (var i = 0; i < this.$elements.length; i++) {
        fieldConstraints = this.$elements[i].data('ParsleyFieldMultiple').refreshConstraints().constraints;
        for (var j = 0; j < fieldConstraints.length; j++)
          this.addConstraint(fieldConstraints[j].name, fieldConstraints[j].requirements, fieldConstraints[j].priority, fieldConstraints[j].isDomConstraint);
      }
      return this;
    },
    getValue: function () {
      // Value could be overriden in DOM
      if ('undefined' !== typeof this.options.value)
        return this.options.value;
      // Radio input case
      if (this.$element.is('input[type=radio]'))
        return $('[' + this.options.namespace + 'multiple="' + this.options.multiple + '"]:checked').val() || '';
      // checkbox input case
      if (this.$element.is('input[type=checkbox]')) {
        var values = [];
        $('[' + this.options.namespace + 'multiple="' + this.options.multiple + '"]:checked').each(function () {
          values.push($(this).val());
        });
        return values.length ? values : [];
      }
      // Select multiple case
      if (this.$element.is('select'))
        return null === this.$element.val() ? [] : this.$element.val();
    }
  };

  var o = $({}), subscribed = {};
  // $.listen(name, callback);
  // $.listen(name, context, callback);
  $.listen = function (name) {
    if ('undefined' === typeof subscribed[name])
      subscribed[name] = [];
    if ('function' === typeof arguments[1])
      return subscribed[name].push({ fn: arguments[1] });
    if ('object' === typeof arguments[1] && 'function' === typeof arguments[2])
      return subscribed[name].push({ fn: arguments[2], ctxt: arguments[1] });
    throw new Error('Wrong parameters');
  };
  $.listenTo = function (instance, name, fn) {
    if ('undefined' === typeof subscribed[name])
      subscribed[name] = [];
    if (!(instance instanceof ParsleyField) && !(instance instanceof ParsleyForm))
      throw new Error('Must give Parsley instance');
    if ('string' !== typeof name || 'function' !== typeof fn)
      throw new Error('Wrong parameters');
    subscribed[name].push({ instance: instance, fn: fn });
  };
  $.unsubscribe = function (name, fn) {
    if ('undefined' === typeof subscribed[name])
      return;
    if ('string' !== typeof name || 'function' !== typeof fn)
      throw new Error('Wrong arguments');
    for (var i = 0; i < subscribed[name].length; i++)
      if (subscribed[name][i].fn === fn)
        return subscribed[name].splice(i, 1);
  };
  $.unsubscribeTo = function (instance, name) {
    if ('undefined' === typeof subscribed[name])
      return;
    if (!(instance instanceof ParsleyField) && !(instance instanceof ParsleyForm))
      throw new Error('Must give Parsley instance');
    for (var i = 0; i < subscribed[name].length; i++)
      if ('undefined' !== typeof subscribed[name][i].instance && subscribed[name][i].instance.__id__ === instance.__id__)
        return subscribed[name].splice(i, 1);
  };
  $.unsubscribeAll = function (name) {
    if ('undefined' === typeof subscribed[name])
      return;
    delete subscribed[name];
  };
  // $.emit(name [, arguments...]);
  // $.emit(name, instance [, arguments..]);
  $.emit = function (name, instance) {
    if ('undefined' === typeof subscribed[name])
      return;
    // loop through registered callbacks for this event
    for (var i = 0; i < subscribed[name].length; i++) {
      // if instance is not registered, simple emit
      if ('undefined' === typeof subscribed[name][i].instance) {
        subscribed[name][i].fn.apply('undefined' !== typeof subscribed[name][i].ctxt ? subscribed[name][i].ctxt : o, Array.prototype.slice.call(arguments, 1));
        continue;
      }
      // if instance registered but no instance given for the emit, continue
      if (!(instance instanceof ParsleyField) && !(instance instanceof ParsleyForm))
        continue;
      // if instance is registered and same id, emit
      if (subscribed[name][i].instance.__id__ === instance.__id__) {
        subscribed[name][i].fn.apply(o, Array.prototype.slice.call(arguments, 1));
        continue;
      }
      // if registered instance is a Form and fired one is a Field, loop over all its fields and emit if field found
      if (subscribed[name][i].instance instanceof ParsleyForm && instance instanceof ParsleyField)
        for (var j = 0; j < subscribed[name][i].instance.fields.length; j++)
          if (subscribed[name][i].instance.fields[j].__id__ === instance.__id__) {
            subscribed[name][i].fn.apply(o, Array.prototype.slice.call(arguments, 1));
            continue;
          }
    }
  };
  $.subscribed = function () { return subscribed; };

// ParsleyConfig definition if not already set
window.ParsleyConfig = window.ParsleyConfig || {};
window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {};
// Define then the messages
window.ParsleyConfig.i18n.en = $.extend(window.ParsleyConfig.i18n.en || {}, {
  defaultMessage: "This value seems to be invalid.",
  type: {
    email:        "This value should be a valid email.",
    url:          "This value should be a valid url.",
    number:       "This value should be a valid number.",
    integer:      "This value should be a valid integer.",
    digits:       "This value should be digits.",
    alphanum:     "This value should be alphanumeric."
  },
  notblank:       "This value should not be blank.",
  required:       "This value is required.",
  pattern:        "This value seems to be invalid.",
  min:            "This value should be greater than or equal to %s.",
  max:            "This value should be lower than or equal to %s.",
  range:          "This value should be between %s and %s.",
  minlength:      "This value is too short. It should have %s characters or more.",
  maxlength:      "This value is too long. It should have %s characters or less.",
  length:         "This value length is invalid. It should be between %s and %s characters long.",
  mincheck:       "You must select at least %s choices.",
  maxcheck:       "You must select %s choices or less.",
  check:          "You must select between %s and %s choices.",
  equalto:        "This value should be the same."
});
// If file is loaded after Parsley main file, auto-load locale
if ('undefined' !== typeof window.ParsleyValidator)
  window.ParsleyValidator.addCatalog('en', window.ParsleyConfig.i18n.en, true);

//     Parsley.js 2.0.0-rc5
//     http://parsleyjs.org
//     (c) 20012-2014 Guillaume Potier, Wisembly
//     Parsley may be freely distributed under the MIT license.

  // ### Parsley factory
  var Parsley = function (element, options, parsleyInstance) {
    this.__class__ = 'Parsley';
    this.__version__ = '2.0.0-rc5';
    this.__id__ = ParsleyUtils.hash(4);
    // Parsley must be instanciated with a DOM element or jQuery $element
    if ('undefined' === typeof element)
      throw new Error('You must give an element');
    return this.init($(element), options, parsleyInstance);
  };
  Parsley.prototype = {
    init: function ($element, options, parsleyInstance) {
      if (!$element.length)
        throw new Error('You must bind Parsley on an existing element.');
      this.$element = $element;
      // If element have already been binded, returns its saved Parsley instance
      if (this.$element.data('Parsley')) {
        var savedParsleyInstance = this.$element.data('Parsley');
        // If saved instance have been binded without a ParsleyForm parent and there is one given in this call, add it
        if ('undefined' !== typeof parsleyInstance && 'ParsleyField' === savedParsleyInstance.parsleyInstance.__proxy__)
          savedParsleyInstance.parsleyInstance = parsleyInstance;
        return savedParsleyInstance;
      }
      // Handle 'static' options
      this.OptionsFactory = new ParsleyOptionsFactory(ParsleyDefaults, ParsleyUtils.get(window, 'ParsleyConfig') || {}, options, this.getNamespace(options));
      this.options = this.OptionsFactory.get(this);
      // A ParsleyForm instance is obviously a `<form>` elem but also every node that is not an input and have `data-parsley-validate` attribute
      if (this.$element.is('form') || (ParsleyUtils.attr(this.$element, this.options.namespace, 'validate') && !this.$element.is(this.options.inputs)))
        return this.bind('parsleyForm', parsleyInstance);
      // Every other supported element and not excluded element is binded as a `ParsleyField` or `ParsleyFieldMultiple`
      else if (this.$element.is(this.options.inputs) && !this.$element.is(this.options.excluded))
        return this.isMultiple() ? this.handleMultiple(parsleyInstance) : this.bind('parsleyField', parsleyInstance);
      return this;
    },
    isMultiple: function () {
      return (this.$element.is('input[type=radio], input[type=checkbox]') && 'undefined' === typeof this.options.multiple) || (this.$element.is('select') && 'undefined' !== typeof this.$element.attr('multiple'));
    },
    // Multiples fields are a real nightmare :(
    handleMultiple: function (parsleyInstance) {
      var that = this,
        name,
        multiple,
        parsleyMultipleInstance;
      this.options = $.extend(this.options, ParsleyUtils.attr(this.$element, this.options.namespace));
      if (this.options.multiple) {
        multiple = this.options.multiple;
      } else if ('undefined' !== typeof this.$element.attr('name') && this.$element.attr('name').length) {
        multiple = name = this.$element.attr('name');
      } else if ('undefined' !== typeof this.$element.attr('id') && this.$element.attr('id').length) {
        multiple = this.$element.attr('id');
      }
      // Special select multiple input
      if (this.$element.is('select') && 'undefined' !== typeof this.$element.attr('multiple')) {
        return this.bind('parsleyFieldMultiple', parsleyInstance, multiple || this.__id__);
      // Else for radio / checkboxes, we need a `name` or `data-parsley-multiple` to properly bind it
      } else if ('undefined' === typeof multiple) {
        if (window.console && window.console.warn)
          window.console.warn('To be binded by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.', this.$element);
        return this;
      }
      // Remove special chars
      multiple = multiple.replace(/(:|\.|\[|\]|\$)/g, '');
      // Add proper `data-parsley-multiple` to siblings if we had a name
      if ('undefined' !== typeof name)
        $('input[name="' + name + '"]').each(function () {
          if ($(this).is('input[type=radio], input[type=checkbox]'))
            $(this).attr(that.options.namespace + 'multiple', multiple);
        });
      // Check here if we don't already have a related multiple instance saved
      if ($('[' + this.options.namespace + 'multiple=' + multiple +']').length)
        for (var i = 0; i < $('[' + this.options.namespace + 'multiple=' + multiple +']').length; i++)
          if ('undefined' !== typeof $($('[' + this.options.namespace + 'multiple=' + multiple +']').get(i)).data('Parsley')) {
            parsleyMultipleInstance = $($('[' + this.options.namespace + 'multiple=' + multiple +']').get(i)).data('Parsley');
            if (!this.$element.data('ParsleyFieldMultiple')) {
              parsleyMultipleInstance.addElement(this.$element);
              this.$element.attr(this.options.namespace + 'id', parsleyMultipleInstance.__id__);
            }
            break;
          }
      // Create a secret ParsleyField instance for every multiple field. It would be stored in `data('ParsleyFieldMultiple')`
      // And would be useful later to access classic `ParsleyField` stuff while being in a `ParsleyFieldMultiple` instance
      this.bind('parsleyField', parsleyInstance, multiple, true);
      return parsleyMultipleInstance || this.bind('parsleyFieldMultiple', parsleyInstance, multiple);
    },
    // Retrieve namespace used for DOM-API
    getNamespace: function (options) {
      // `data-parsley-namespace=<namespace>`
      if ('undefined' !== typeof this.$element.data('parsleyNamespace'))
        return this.$element.data('parsleyNamespace');
      if ('undefined' !== typeof ParsleyUtils.get(options, 'namespace'))
        return options.namespace;
      if ('undefined' !== typeof ParsleyUtils.get(window, 'ParsleyConfig.namespace'))
        return window.ParsleyConfig.namespace;
      return ParsleyDefaults.namespace;
    },
    // Return proper `ParsleyForm`, `ParsleyField` or `ParsleyFieldMultiple`
    bind: function (type, parentParsleyInstance, multiple, doNotStore) {
      var parsleyInstance;
      switch (type) {
        case 'parsleyForm':
          parsleyInstance = $.extend(
            new ParsleyForm(this.$element, parentParsleyInstance || this),
            new ParsleyAbstract(),
            window.ParsleyExtend
          ).init();
          break;
        case 'parsleyField':
          parsleyInstance = $.extend(
            new ParsleyField(this.$element, parentParsleyInstance || this),
            new ParsleyAbstract(),
            window.ParsleyExtend
          ).init();
          break;
        case 'parsleyFieldMultiple':
          parsleyInstance = $.extend(
            new ParsleyField(this.$element, parentParsleyInstance || this).init(),
            new ParsleyAbstract(),
            new ParsleyMultiple(),
            window.ParsleyExtend
          ).init(multiple);
          break;
        default:
          throw new Error(type + 'is not a supported Parsley type');
      }
      if ('undefined' !== typeof multiple)
        ParsleyUtils.setAttr(this.$element, this.options.namespace, 'multiple', multiple);
      if ('undefined' !== typeof doNotStore) {
        this.$element.data('ParsleyFieldMultiple', parsleyInstance);
        return parsleyInstance;
      }
      // Store instance if `ParsleyForm`, `ParsleyField` or `ParsleyFieldMultiple`
      if (new RegExp('ParsleyF', 'i').test(parsleyInstance.__class__)) {
        // Store for later access the freshly binded instance in DOM element itself using jQuery `data()`
        this.$element.data('Parsley', parsleyInstance);
        this.__proxy__ = parsleyInstance.__class__;
        // Tell the world we got a new ParsleyForm or ParsleyField instance!
        $.emit('parsley:' + ('parsleyForm' === type ? 'form' : 'field') + ':init', parsleyInstance);
      }
      return parsleyInstance;
    }
  };
  // ### jQuery API
  // `$('.elem').parsley(options)` or `$('.elem').psly(options)`
  $.fn.parsley = $.fn.psly = function (options) {
    if (this.length > 1) {
      var instances = [];
      this.each(function () {
        instances.push($(this).parsley(options));
      });
      return instances;
    }
    // Return undefined if applied to non existing DOM element
    if (!$(this).length) {
      if (window.console && window.console.warn)
        window.console.warn('You must bind Parsley on an existing element.');
      return;
    }
    return new Parsley(this, options);
  };
  // ### ParsleyUI
  // UI is a class apart that only listen to some events and them modify DOM accordingly
  // Could be overriden by defining a `window.ParsleyConfig.ParsleyUI` appropriate class (with `listen()` method basically)
  window.ParsleyUI = 'function' === typeof ParsleyUtils.get(window, 'ParsleyConfig.ParsleyUI') ?
    new window.ParsleyConfig.ParsleyUI().listen() : new ParsleyUI().listen();
  // ### ParsleyField and ParsleyForm extension
  // Ensure that defined if not already the case
  if ('undefined' === typeof window.ParsleyExtend)
    window.ParsleyExtend = {};
  // ### ParsleyConfig
  // Ensure that defined if not already the case
  if ('undefined' === typeof window.ParsleyConfig)
    window.ParsleyConfig = {};
  // ### Globals
  window.Parsley = window.psly = Parsley;
  window.ParsleyUtils = ParsleyUtils;
  window.ParsleyValidator = new ParsleyValidator(window.ParsleyConfig.validators, window.ParsleyConfig.i18n);
  // ### PARSLEY auto-binding
  // Prevent it by setting `ParsleyConfig.autoBind` to `false`
  if (false !== ParsleyUtils.get(window, 'ParsleyConfig.autoBind'))
    $(document).ready(function () {
      // Works only on `data-parsley-validate`.
      if ($('[data-parsley-validate]').length)
        $('[data-parsley-validate]').parsley();
    });
})(window.jQuery);
(function(w){
	var sw = document.body.clientWidth;

	//On Window Resize
	$(w).resize(function(){
		sw = document.body.clientWidth; //Update screen width
	});

	//Navigation toggle for small screens
	$('.nav-toggle-menu').click(function() {
		$(this).toggleClass('active');
		$('.nav').toggleClass('active');
		$('.header .search-form').removeClass('active');
		$('.nav-toggle-search').removeClass('active');
		return false;
	});
	
	//Search form toggle for small screens
	$('.nav-toggle-search').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.header .search-form').toggleClass('active');
		$('.nav').removeClass('active');
		$('.nav-toggle-menu').removeClass('active');
		if($('.header .search-form').hasClass('active')) {
			$('.header .search-field').focus();
		}
	});

	//Primary Navigation
	$('body').on('click',function() {
		$('.nav-subnav-link, .nav-subnav').removeClass('active');
	});

	//Append icon after subnav items
	$('.menu-item-has-children > a').append('<span class="icon-arrow-down5"></span>');
	
	$('.menu-item-has-children > a').on('click',function(){
		var $this = $(this),
			$panel = $this.next('.sub-menu');

		//Close other panels if link isn't a subnavigation item
		$('.menu-item-has-children > a').not($this).removeClass('active');
		$('.sub-menu').not($panel).removeClass('active');

		//Toggle Class
		$this.toggleClass('active');
		$panel.toggleClass('active');

		return false;
	});



	//
	// Donate Form
	//

	//Set initial donate Step
	var donateStep = 1;

	//Hide steps 2 and 3
	$('.donate-step').not('#donate-step-1').addClass('closed');
	$('.field-container-city, .field-container-state').addClass('is-vishidden');
	$('.donate-submit-text').text('Next Step');
	
	//Donation form submit action
	$(".donate-submit").on('click',function(e){
		e.preventDefault();

		//If user is on the first step, advance to step two
		if(donateStep === 1) {
			donateStep++;
			updateDonateStep();
			$('#donate-name').focus();
			smoothScroll($('#donate-step-2'));
		}
		//If user is on the second step, advance to step three
		else if (donateStep === 2) {
			donateStep++;
			updateDonateStep();
			$('#payment-cc-num').focus();
			$('.donate-submit-text').text('Complete Donation');
			smoothScroll($('#donate-step-3'));
		}
		//If user is on the final step, submit the form
		else if (donateStep === 3) {
			$('#donate-form').submit();
		}
	});

	//Advance the form to next major section
	function updateDonateStep() {
		$('#donate-step-'+donateStep).removeClass('closed');
	}

	//Form Validation
	$('.donate-form input').focusout(function() {
		$(this).parsley().validate();
	});

	$('.donate-form').parsley();
	
	$('#donate-name').focusout(function(){
		var $thisVal = $(this).val().split(' '),
			$first = $thisVal.shift(),
			$last = $thisVal.join(' ');
		
		$('#billing-first-name').val($first);
		$('#billing-last-name').val($last);
	});
	
	$('.amount-container').hide();
	
	//Update message on hover
	$('.chicklet-list label, .chicklet-list .input-container').hover(function(){
		var $this = $(this),
			$thisMessage = $this.attr('data-message'),
			$messageContainer = $('#donate-step-1 .donate-step-message');
			
		$messageContainer.text($thisMessage);
	},
	function(){
		var $activeMessage = $('.chicklet-list input:checked').next('label').attr('data-message'),
			$messageContainer = $('#donate-step-1 .donate-step-message');
		
		if($('#other-amount').val()!=="") {
			$messageContainer.text();
		} else {
			$messageContainer.text($activeMessage);
		}
		
	});
	
	//Donate button list
	$('.chicklet-list input:radio').change(function(){
		var $this = $(this),
			$thisMessage = $this.next('label').attr('data-message'),
			$thisAmount = $this.next('label').attr('data-amount'),
			$messageContainer = $('#donate-step-1 .donate-step-message');
			
		$('#other-amount').val("");
		$('#donation-amount').val($thisAmount);
		$messageContainer.text($thisMessage);
	});
	
	$('#other-amount').focus(function(){
		$('.chicklet-list input').prop('checked', false);
	});
	
	$('#other-amount').blur(function(){
		$thisAmount = $(this).val();
		if($thisAmount!=="") {
			$('#donation-amount').val($thisAmount);
		}
	});
	
	
	//Payment Type Radio
	$('#payment-type-radio').change(function() {
		var $paymentTypeTarget = $(this).find('input:checked').attr('data-payment-type');
		
		$('.payment-type').removeClass('active');
		$('#'+$paymentTypeTarget).addClass('active');
	});

	//Scroll the body of an 
	function smoothScroll(el) {
		var target = el;
		$('html,body').animate({
			scrollTop: target.offset().top
		}, 1000);
		return false;
	}
	
	function is_int(value){
      if((parseFloat(value) == parseInt(value)) && !isNaN(value)){
        return true;
      } else {
        return false;
      }
    }

	
	$("#donate-zip").keyup(function() {
	  var el = $(this);
	
	  if ((el.val().length == 5) && (is_int(el.val()))) {
	   
	    // Make Ajax call to Ziptastic
	    $.ajax({
		  url: "http://zip.elevenbasetwo.com/v2",
		  cache: false,
		  dataType: "json",
		  type: "GET",
		  data: "zip=" + el.val(),
		  success: function(result, success) {
		    $('.field-container-city, .field-container-state').removeClass('is-vishidden'); /* Show the fields */
		
		    $("#donate-city").val(result.city).parsley(); /* Fill the data */
		    $("#donate-state").val(result.state).parsley();
		
		    $(".zip-error").hide(); /* In case they failed once before */
		
		    $(".donate-submit").focus(); /* Put cursor where they need it */
		
		  },
		  error: function(result, success) {
			
		    $('.field-container-city, .field-container-state').removeClass('is-vishidden');
		
		  }
		
		});
	 
	  }
	
	});

	//Prevent links appearing within an accordion handle from firing
	$('.acc-handle a').on('click',function(){
		if (window.matchMedia("(max-width: 46.8em)").matches) {
			$(this).parent().toggleClass('active');
			$(this).parent().next('.acc-panel').toggleClass('active');
			return false;
		}
	});

	//Accordion
	$('.acc-handle').on('click',function(){
		if (window.matchMedia("(max-width: 46.8em)").matches) {
			$(this).toggleClass('active');
			$(this).next('.acc-panel').toggleClass('active');
			return false;
		}
	});
    
    //Fix text widows http:/justinhileman.info/article/a-jquery-widont-snippet/
	$('h1, .page-title, .page-intro, .b-title, .b-excerpt').each(function() {
        $(this).html($(this).html().replace(/\s([^\s<]+)\s*$/,'&nbsp;$1'));
    });

})(this);