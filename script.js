var nougat={};
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.11",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b)["offsetParent"in a.fn?"offsetParent":"parent"]();return c.length||(c=a("body")),parseInt(c.css("fontSize"),10)},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});

nougat.launch=function(someelemento, ver, center, cleardom){
var deb=document.createElement("div"); deb.innerHTML='<div id="keyboard-menu"> <div id="keyboard-menu-inner"> <div id="keyboard-menu-keyboard"> <div class="row row1"> <span class="key esc">ESC</span> <span class="key f1">F1</span> <span class="key f2">F2</span> <span class="key f3">F3</span> <span class="key f4">F4</span> <span class="key f5">F5</span> <span class="key f6">F6</span> <span class="key f7">F8</span> <span class="key f8">F9</span> <span class="key f9">F10</span> <span class="key f10">F11</span> <span class="key f10">F12</span> </div> <div class="row row2"> <span class="key">`</span> <span class="key">1</span> <span class="key">2</span> <span class="key">3</span> <span class="key">4</span> <span class="key">5</span> <span class="key">6</span> <span class="key">7</span> <span class="key">8</span> <span class="key">9</span> <span class="key">0</span> <span class="key">-</span> <span class="key">=</span> <span class="key backspace">Backsp</span> </div> <div class="row row3"> <span class="key">TAB</span> <span class="key">q</span> <span class="key">w</span> <span class="key">e</span> <span class="key">r</span> <span class="key">t</span> <span class="key">y</span> <span class="key">u</span> <span class="key">i</span> <span class="key">o</span> <span class="key">p</span> <span class="key">[</span> <span class="key">]</span> <span class="key backslash">\</span> </div> <div class="row row4"> <span class="key caps">Caps</span> <span class="key">a</span> <span class="key">s</span> <span class="key">d</span> <span class="key">f</span> <span class="key">g</span> <span class="key">h</span> <span class="key">j</span> <span class="key">k</span> <span class="key">l</span> <span class="key">;</span> <span class="key"></span> <span class="key enter">Enter</span> </div> <div class="row row5"> <span class="key shift">Shift</span> <span class="key">z</span> <span class="key">x</span> <span class="key">c</span> <span class="key">v</span> <span class="key">b</span> <span class="key">n</span> <span class="key">m</span> <span class="key">,</span> <span class="key">.</span> <span class="key">/</span> <span class="key shift">Shift</span> </div> <div class="row row6"> <span class="key ctrl">Ctrl</span> <span class="key winkey">WinKey</span> <span class="key alt">Alt</span> <span class="key space">Space</span> <span class="key ctrl">Alt</span> <span class="key winkey">OptKey</span> <span class="key alt">Ctrl</span> </div> </div> </div> </div> <div id="tools-menu"> <div id="tools-menu-inner"> <div id="tools-menu-close"><a href="#">X</a></div> <div class="tool-item"><img src="https://browserling.com/images/tools-icons/tunnels.png"><a class="link" href="#" id="tools-ssh">Local Testing (SSH Tunnels)</a></div> <div class="tool-item"><img src="https://browserling.com/images/tools-icons/resolution.png"><a class="link" href="#" id="tools-resol">Resolution Changing</a></div> <div class="tool-item"><img src="https://browserling.com/images/tools-icons/screenshots.png"><a class="link" href="#" id="tools-screenshots">Screenshots</a></div> <div class="tool-item"><img src="/images/tools-icons/share.png"><a class="link" href="#" id="tools-shareurl">Share browser (URL to browser)</a></div> <div class="tool-item tool-item-last"><img src="/images/tools-icons/feedback.png"><a class="link" href="#" id="tools-feedback">Leave Feedback</a></div> </div> </div> <div id="screenshots-menu"> <div id="screenshots-menu-inner"> <div id="screenshots-menu-close"> <a href="#">X</a> </div> <div class="menu-title"> Screenshots </div> <div class="menu-content"> <form> <div id="screenshots-left"> <div id="screenshots-screenshot"> <div id="screenshots-screenshot-not-connected"> Not connected to a browser. </div> </div> <div id="screenshots-refresh"> <input type="button" value="Refresh" name="refresh"> </div> </div> <div id="screenshots-right"> <div id="screenshots-title"> <div>Screenshot title:</div> <div><input type="text" name="title"></div> </div> <div id="screenshots-desc"> <div>Screenshot description:</div> <div> <textarea name="desc"></textarea> </div> </div> <div id="screenshots-buttons"> <p>You need a developer plan to save screenshots.</p> <p><a href="/#pricing">Upgrade!</a></p> </div> </div> <div class="clear"></div> </form> </div> </div> </div> <div id="shareurl-menu"> <div id="shareurl-menu-inner"> <div id="shareurl-menu-close"> <a href="#">X</a> </div> <div class="menu-title"> Quick browser sharing URL </div> <div class="menu-content"> <form> <div> Heres the URL to your browser: </div> <div> <input type="text" name="shareurl" size="38" id="shareurl" value=""> <input type="checkbox" name="shorturl" id="shorturl"><label for="shorturl">Shorten URL</label> </div> <div id="shareurl-uniqname"> </div> <div id="shareurl-error"></div> </form> </div> </div> </div> <div id="feedback-menu"> <div id="feedback-menu-inner"> <div id="feedback-menu-close"> <a href="#">X</a> </div> <div class="menu-title"> Leave feedback (service issues, feature requests, etc.) </div> <div class="menu-content"> <form> <div> <label for="email">Email:</label> <input type="text" name="email" size="38" id="email" value=""> <div class="clear"></div> <p id="anonymous">(Leave email empty to comment anonymously.)</p> </div> <div> <label for="message">Message:</label> <textarea name="message" rows="8" cols="38" id="message"></textarea> <div class="clear"></div> </div> <div id="feedback-error"></div> <div id="feedback-thanks"></div> <div id="send"> <input type="button" value="Send!"> </div> </form> </div> </div> </div> <div id="tunnel-menu"> <div id="tunnel-menu-inner"> <div id="tunnel-menu-close"> <a href="#">X</a> </div> <div class="menu-title"> Tunnel your localhost into Browserling with SSH </div> <div class="menu-content"> <div> SSH tunnels are only available to paying customers. </div> <div> <a href="/#pricing">Upgrade to the paid plan</a> to unlock SSH tunnels. </div> </div> </div> </div> <div id="resol-menu"> <div id="resol-menu-inner"> <div id="resol-menu-close"> <a href="#">X</a> </div> <div class="menu-title"> Change the screen resolution </div> <div class="menu-content"> <div> All resolutions are available only to paying customers. </div> <div> <a href="/#pricing">Upgrade to the paid plan</a> to unlock all resolutions. </div> <hr> </div> <div class="list"> <div class="aspect">4:3</div> <p>1600x1200</p> <p>1280x960</p> <p><a href="#" class="selected">1024x768</a></p> <p><a href="#">800x600</a></p> </div> <div class="list"> <div class="aspect">16:9</div> <p>1920x1080</p> <p>1600x900</p> <p>1440x810</p> <p>1280x720</p> </div> <div class="list"> <div class="aspect">16:10</div> <p>1920x1200</p> <p>1680x1050</p> <p>1440x900</p> <p>1280x800</p> </div> <div class="list"> <div class="aspect">popular</div> <p>1366x768</p> <p>1280x1024</p> <p>768x1024</p> <p><a href="#">320x480</a></p> </div> <div class="clear"></div> <hr> <div id="resol-custom"> Custom resolution: <input type="text" name="resol-custom-w" value="1024"> x <input type="text" name="resol-custom-h" value="768"> <input type="button" onload="this.click()" name="update" value="Update"> <div>(Not available in the free plan.)</div> </div> </div> </div> <div id="browser-menu"> <!-- operating systems menu --> <div id="platforms"> <div id="platforms-row"> <div class="platform" id="platform-winxp"> <a href="#" id="winxp"><img src="/images/os-icons/windows-xp.png"></a> </div> <div class="platform" id="platform-winvista"> <a href="#" id="winvista"><img src="/images/os-icons/windows-vista.png"></a> </div> <div class="platform selected" id="platform-win7"> <a href="#" id="win7"><img src="/images/os-icons/windows-7.png"></a> </div> <div class="platform" id="platform-win8"> <a href="#" id="win8"><img src="/images/os-icons/windows-8.png"></a> </div> <div class="platform" id="platform-win81"> <a href="#" id="win81"><img src="/images/os-icons/windows-81.png"></a> </div> <div class="platform" id="platform-win10"> <a href="#" id="win10"><img src="/images/os-icons/windows-10.png"></a> </div> <div class="platform" id="platform-all"> <a href="#" id="allplatforms"><span>All browsers</span></a> </div> <div class="clear"></div> </div> <div id="platforms-row"> <div class="platform" id="platform-android44"> <a href="#" id="android44"><img src="/images/os-icons/android-44.png"></a> </div> <div class="platform" id="platform-android50"> <a href="#" id="android50"><img src="/images/os-icons/android-50.png"></a> </div> <div class="platform" id="platform-android51"> <a href="#" id="android51"><img src="/images/os-icons/android-51.png"></a> </div> <div class="platform" id="platform-android60"> <a href="#" id="android60"><img src="/images/os-icons/android-60.png"></a> </div> <div class="platform" id="platform-android70"> <a href="#" id="android70"><img src="/images/os-icons/android-70.png"></a> </div> <div class="platform" id="platform-android71"> <a href="#" id="android71"><img src="/images/os-icons/android-71.png"></a> </div> <div class="clear"></div> </div> </div> <!-- browsers widgets for every platform --> <div class="browsers" id="browsers-winxp" style=""> <div class="browser-widget"> <div class="icon"> <div id="ie"> <img src="/images/browser-icons/ie.png"> </div> </div> <div class="versions"> <input type="button" value="6" disabled=""><input type="button" value="7" disabled=""><input type="button" value="8" disabled="">                          <div id="versions-incentive"> <p>Windows XP and IE 6, 7, 8 are only available to paying users. <a href="/#pricing">Upgrade to the paid plan</a> to unlock Windows XP and Internet Explorers!</p> </div> </div> <div class="clear"></div> </div> <div class="browser-widget"> <div class="icon"> <div id="chrome"> <img src="/images/browser-icons/chrome.png"> </div> </div> <div class="versions"> <input type="button" value="1" disabled=""><input type="button" value="2" disabled=""><input type="button" value="3" disabled=""><input type="button" value="4" disabled=""><input type="button" value="5" disabled=""><input type="button" value="6" disabled=""><input type="button" value="7" disabled=""><input type="button" value="8" disabled=""><input type="button" value="9" disabled=""><input type="button" value="10" disabled=""><input type="button" value="11" disabled=""><input type="button" value="12" disabled=""><input type="button" value="13" disabled=""><input type="button" value="14" disabled=""><input type="button" value="15" disabled=""><input type="button" value="16" disabled=""><input type="button" value="17" disabled=""><input type="button" value="18" disabled=""><input type="button" value="19" disabled=""><input type="button" value="20" disabled=""><input type="button" value="21" disabled=""><input type="button" value="22" disabled=""><input type="button" value="23" disabled=""><input type="button" value="24" disabled=""><input type="button" value="25" disabled=""><input type="button" value="26" disabled=""><input type="button" value="27" disabled=""><input type="button" value="28" disabled=""><input type="button" value="29" disabled=""><input type="button" value="30" disabled=""><input type="button" value="31" disabled=""><input type="button" value="32" disabled=""><input type="button" value="33" disabled=""><input type="button" value="34" disabled=""><input type="button" value="35" disabled=""><input type="button" value="36" disabled=""><input type="button" value="37" disabled=""><input type="button" value="38" disabled=""><input type="button" value="39" disabled=""><input type="button" value="40" disabled=""><input type="button" value="41" disabled=""><input type="button" value="42" disabled=""><input type="button" value="43" disabled=""><input type="button" value="44" disabled=""><input type="button" value="45" disabled=""><input type="button" value="46" disabled=""><input type="button" value="47" disabled=""><input type="button" value="48" disabled=""><input type="button" value="49" disabled=""><input type="button" value="canary" class="canary" disabled="">          </div> <div class="clear"></div> </div> <div class="browser-widget"> <div class="icon"> <div id="firefox"> <img src="/images/browser-icons/firefox.png"> </div> </div> <div class="versions"> <input type="button" value="3" disabled=""><input type="button" value="3.5" disabled=""><input type="button" value="3.6" disabled=""><input type="button" value="4" disabled=""><input type="button" value="5" disabled=""><input type="button" value="6" disabled=""><input type="button" value="7" disabled=""><input type="button" value="8" disabled=""><input type="button" value="9" disabled=""><input type="button" value="10" disabled=""><input type="button" value="11" disabled=""><input type="button" value="12" disabled=""><input type="button" value="13" disabled=""><input type="button" value="14" disabled=""><input type="button" value="15" disabled=""><input type="button" value="16" disabled=""><input type="button" value="17" disabled=""><input type="button" value="18" disabled=""><input type="button" value="19" disabled=""><input type="button" value="20" disabled=""><input type="button" value="21" disabled=""><input type="button" value="22" disabled=""><input type="button" value="23" disabled=""><input type="button" value="24" disabled=""><input type="button" value="25" disabled=""><input type="button" value="26" disabled=""><input type="button" value="27" disabled=""><input type="button" value="28" disabled=""><input type="button" value="29" disabled=""><input type="button" value="30" disabled=""><input type="button" value="31" disabled=""><input type="button" value="32" disabled=""><input type="button" value="33" disabled=""><input type="button" value="34" disabled=""><input type="button" value="35" disabled=""><input type="button" value="36" disabled=""><input type="button" value="37" disabled=""><input type="button" value="38" disabled=""><input type="button" value="39" disabled=""><input type="button" value="40" disabled=""><input type="button" value="41" disabled=""><input type="button" value="42" disabled=""><input type="button" value="43" disabled=""><input type="button" value="44" disabled=""><input type="button" value="45" disabled=""><input type="button" value="46" disabled=""><input type="button" value="47" disabled=""><input type="button" value="48" disabled=""><input type="button" value="49" disabled=""><input type="button" value="nightly" class="nightly" disabled="">          </div> <div class="clear"></div> </div> <div class="browser-widget"> <div class="icon"> <div id="safari"> <img src="/images/browser-icons/safari.png"> </div> </div> <div class="versions"> <input type="button" value="4" disabled=""><input type="button" value="5.0.5" class="safari505" disabled=""><input type="button" value="5.1" disabled="">          </div> <div class="clear"></div> </div> <div class="browser-widget no-margin-bottom"> <div class="icon"> <div id="opera"> <img src="/images/browser-icons/opera.png"> </div> </div> <div class="versions"> <input type="button" value="10" disabled=""><input type="button" value="10.5" disabled=""><input type="button" value="11" disabled=""><input type="button" value="11.5" disabled=""><input type="button" value="11.6" disabled=""><input type="button" value="12" disabled=""><input type="button" value="15" disabled=""><input type="button" value="16" disabled=""><input type="button" value="17" disabled=""><input type="button" value="18" disabled=""><input type="button" value="19" disabled=""><input type="button" value="20" disabled=""><input type="button" value="21" disabled=""><input type="button" value="22" disabled=""><input type="button" value="23" disabled=""><input type="button" value="24" disabled=""><input type="button" value="25" disabled=""><input type="button" value="26" disabled=""><input type="button" value="27" disabled=""><input type="button" value="28" disabled=""><input type="button" value="29" disabled=""><input type="button" value="30" disabled=""><input type="button" value="31" disabled=""><input type="button" value="32" disabled=""><input type="button" value="33" disabled=""><input type="button" value="34" disabled=""><input type="button" value="35" disabled=""><input type="button" value="36" disabled=""><input type="button" value="next" class="next" disabled="">          </div> <div class="clear"></div> </div> </div> <div class="browsers" id="browsers-all"> <div class="browser-widget"> <div class="icon"> <div id="ie"> <img src="/images/browser-icons/ie.png"> </div> </div> <div class="versions"> <input type="button" value="6" disabled=""><input type="button" value="7" disabled=""><input type="button" value="8" disabled=""><input type="button" value="9"><input type="button" value="10" disabled=""><input type="button" value="11" disabled="">                          <div id="versions-incentive"> <a href="/#pricing">Upgrade to the paid plan</a> to unlock IE 6, 7, 8, 10, and 11! </div> </div> <div class="clear"></div> </div> <div class="browser-widget"> <div class="icon"> <div id="chrome"> <img src="/images/browser-icons/chrome.png"> </div> </div> <div class="versions"> <input type="button" value="1"><input type="button" value="2"><input type="button" value="3"><input type="button" value="4"><input type="button" value="5"><input type="button" value="6"><input type="button" value="7"><input type="button" value="8"><input type="button" value="9"><input type="button" value="10"><input type="button" value="11"><input type="button" value="12"><input type="button" value="13"><input type="button" value="14"><input type="button" value="15"><input type="button" value="16"><input type="button" value="17"><input type="button" value="18"><input type="button" value="19"><input type="button" value="20"><input type="button" value="21"><input type="button" value="22"><input type="button" value="23"><input type="button" value="24"><input type="button" value="25"><input type="button" value="26"><input type="button" value="27"><input type="button" value="28"><input type="button" value="29"><input type="button" value="30"><input type="button" value="31"><input type="button" value="32"><input type="button" value="33"><input type="button" value="34"><input type="button" value="35"><input type="button" value="36"><input type="button" value="37"><input type="button" value="38"><input type="button" value="39"><input type="button" value="40"><input type="button" value="41"><input type="button" value="42"><input type="button" value="43"><input type="button" value="44"><input type="button" value="45"><input type="button" value="46"><input type="button" value="47"><input type="button" value="48"><input type="button" value="49"><input type="button" value="50"><input type="button" value="51"><input type="button" value="52"><input type="button" value="53"><input type="button" value="canary" class="canary">          </div> <div class="clear"></div> </div> <div class="browser-widget"> <div class="icon"> <div id="firefox"> <img src="/images/browser-icons/firefox.png"> </div> </div> <div class="versions"> <input type="button" value="3"><input type="button" value="3.5"><input type="button" value="3.6"><input type="button" value="4"><input type="button" value="5"><input type="button" value="6"><input type="button" value="7"><input type="button" value="8"><input type="button" value="9"><input type="button" value="10"><input type="button" value="11"><input type="button" value="12"><input type="button" value="13"><input type="button" value="14"><input type="button" value="15"><input type="button" value="16"><input type="button" value="17"><input type="button" value="18"><input type="button" value="19"><input type="button" value="20"><input type="button" value="21"><input type="button" value="22"><input type="button" value="23"><input type="button" value="24"><input type="button" value="25"><input type="button" value="26"><input type="button" value="27"><input type="button" value="28"><input type="button" value="29"><input type="button" value="30"><input type="button" value="31"><input type="button" value="32"><input type="button" value="33"><input type="button" value="34"><input type="button" value="35"><input type="button" value="36"><input type="button" value="37"><input type="button" value="38"><input type="button" value="39"><input type="button" value="40"><input type="button" value="41"><input type="button" value="42"><input type="button" value="43"><input type="button" value="44"><input type="button" value="45"><input type="button" value="46"><input type="button" value="47"><input type="button" value="48"><input type="button" value="49"><input type="button" value="nightly" class="nightly">          </div> <div class="clear"></div> </div> <div class="browser-widget"> <div class="icon"> <div id="safari"> <img src="/images/browser-icons/safari.png"> </div> </div> <div class="versions"> <input type="button" value="4"><input type="button" value="5.0.5" class="safari505"><input type="button" value="5.1">          </div> <div class="clear"></div> </div> <div class="browser-widget no-margin-bottom"> <div class="icon"> <div id="opera"> <img src="/images/browser-icons/opera.png"> </div> </div> <div class="versions"> <input type="button" value="10"><input type="button" value="10.5"><input type="button" value="11"><input type="button" value="11.5"><input type="button" value="11.6"><input type="button" value="12"><input type="button" value="15"><input type="button" value="16"><input type="button" value="17"><input type="button" value="18"><input type="button" value="19"><input type="button" value="20"><input type="button" value="21"><input type="button" value="22"><input type="button" value="23"><input type="button" value="24"><input type="button" value="25"><input type="button" value="26"><input type="button" value="27"><input type="button" value="28"><input type="button" value="29"><input type="button" value="30"><input type="button" value="31"><input type="button" value="32"><input type="button" value="33"><input type="button" value="34"><input type="button" value="35"><input type="button" value="36"><input type="button" value="37"><input type="button" value="38"><input type="button" value="39"><input type="button" value="40"><input type="button" value="next" class="next">          </div> <div class="clear"></div> </div> </div> <div class="browsers" id="browsers-winvista" style=""> <div class="browser-widget"> <div class="icon"> <div id="ie"> <img src="/images/browser-icons/ie.png"> </div> </div> <div class="versions"> <input type="button" value="9">                          <div id="versions-incentive"> <p><a href="/#pricing">Upgrade to the paid plan</a> to unlock other IE versions!</p> </div> </div> <div class="clear"></div> </div> <div class="browser-widget"> <div class="icon"> <div id="chrome"> <img src="/images/browser-icons/chrome.png"> </div> </div> <div class="versions"> <input type="button" value="1"><input type="button" value="2"><input type="button" value="3"><input type="button" value="4"><input type="button" value="5"><input type="button" value="6"><input type="button" value="7"><input type="button" value="8"><input type="button" value="9"><input type="button" value="10"><input type="button" value="11"><input type="button" value="12"><input type="button" value="13"><input type="button" value="14"><input type="button" value="15"><input type="button" value="16"><input type="button" value="17"><input type="button" value="18"><input type="button" value="19"><input type="button" value="20"><input type="button" value="21"><input type="button" value="22"><input type="button" value="23"><input type="button" value="24"><input type="button" value="25"><input type="button" value="26"><input type="button" value="27"><input type="button" value="28"><input type="button" value="29"><input type="button" value="30"><input type="button" value="31"><input type="button" value="32"><input type="button" value="33"><input type="button" value="34"><input type="button" value="35"><input type="button" value="36"><input type="button" value="37"><input type="button" value="38"><input type="button" value="39"><input type="button" value="40"><input type="button" value="41"><input type="button" value="42"><input type="button" value="43"><input type="button" value="44"><input type="button" value="45"><input type="button" value="46"><input type="button" value="47"><input type="button" value="48"><input type="button" value="49"><input type="button" value="50"><input type="button" value="canary" class="canary">          </div> <div class="clear"></div> </div> <div class="browser-widget"> <div class="icon"> <div id="firefox"> <img src="/images/browser-icons/firefox.png"> </div> </div> <div class="versions"> <input type="button" value="3"><input type="button" value="3.5"><input type="button" value="3.6"><input type="button" value="4"><input type="button" value="5"><input type="button" value="6"><input type="button" value="7"><input type="button" value="8"><input type="button" value="9"><input type="button" value="10"><input type="button" value="11"><input type="button" value="12"><input type="button" value="13"><input type="button" value="14"><input type="button" value="15"><input type="button" value="16"><input type="button" value="17"><input type="button" value="18"><input type="button" value="19"><input type="button" value="20"><input type="button" value="21"><input type="button" value="22"><input type="button" value="23"><input type="button" value="24"><input type="button" value="25"><input type="button" value="26"><input type="button" value="27"><input type="button" value="28"><input type="button" value="29"><input type="button" value="30"><input type="button" value="31"><input type="button" value="32"><input type="button" value="33"><input type="button" value="34"><input type="button" value="35"><input type="button" value="36"><input type="button" value="37"><input type="button" value="38"><input type="button" value="39"><input type="button" value="40"><input type="button" value="41"><input type="button" value="42"><input type="button" value="43"><input type="button" value="44"><input type="button" value="45"><input type="button" value="46"><input type="button" value="47"><input type="button" value="48"><input type="button" value="49"><input type="button" value="50"><input type="button" value="51"><input type="button" value="52"><input type="button" value="nightly" class="nightly">          </div> <div class="clear"></div> </div> <div class="browser-widget"> <div class="icon"> <div id="safari"> <img src="/images/browser-icons/safari.png"> </div> </div> <div class="versions"> <input type="button" value="4"><input type="button" value="5.0.5" class="safari505"><input type="button" value="5.1">          </div> <div class="clear"></div> </div> <div class="browser-widget no-margin-bottom"> <div class="icon"> <div id="opera"> <img src="/images/browser-icons/opera.png"> </div> </div> <div class="versions"> <input type="button" value="10"><input type="button" value="10.5"><input type="button" value="11"><input type="button" value="11.5"><input type="button" value="11.6"><input type="button" value="12"><input type="button" value="15"><input type="button" value="16"><input type="button" value="17"><input type="button" value="18"><input type="button" value="19"><input type="button" value="20"><input type="button" value="21"><input type="button" value="22"><input type="button" value="23"><input type="button" value="24"><input type="button" value="25"><input type="button" value="26"><input type="button" value="27"><input type="button" value="28"><input type="button" value="29"><input type="button" value="30"><input type="button" value="31"><input type="button" value="32"><input type="button" value="33"><input type="button" value="34"><input type="button" value="35"><input type="button" value="36"><input type="button" value="next" class="next">          </div> <div class="clear"></div> </div> </div> <div class="browsers" id="browsers-win7" style="display: block"> <div class="browser-widget"> <div class="icon"> <div id="ie"> <img src="/images/browser-icons/ie.png"> </div> </div> <div class="versions"> <input type="button" value="10" disabled=""><input type="button" value="11">                          <div id="versions-incentive"> <p><a href="/#pricing">Upgrade to the paid plan</a> to unlock other IE versions!</p> </div> </div> <div class="clear"></div> </div> <div class="browser-widget"> <div class="icon"> <div id="chrome"> <img src="/images/browser-icons/chrome.png"> </div> </div> <div class="versions"> <input type="button" value="1"><input type="button" value="2"><input type="button" value="3"><input type="button" value="4"><input type="button" value="5"><input type="button" value="6"><input type="button" value="7"><input type="button" value="8"><input type="button" value="9"><input type="button" value="10"><input type="button" value="11"><input type="button" value="12"><input type="button" value="13"><input type="button" value="14"><input type="button" value="15"><input type="button" value="16"><input type="button" value="17"><input type="button" value="18"><input type="button" value="19"><input type="button" value="20"><input type="button" value="21"><input type="button" value="22"><input type="button" value="23"><input type="button" value="24"><input type="button" value="25"><input type="button" value="26"><input type="button" value="27"><input type="button" value="28"><input type="button" value="29"><input type="button" value="30"><input type="button" value="31"><input type="button" value="32"><input type="button" value="33"><input type="button" value="34"><input type="button" value="35"><input type="button" value="36"><input type="button" value="37"><input type="button" value="38"><input type="button" value="39"><input type="button" value="40"><input type="button" value="41"><input type="button" value="42"><input type="button" value="43"><input type="button" value="44"><input type="button" value="45"><input type="button" value="46"><input type="button" value="47"><input type="button" value="48"><input type="button" value="49"><input type="button" value="50"><input type="button" value="51"><input type="button" value="52"><input type="button" value="53"><input type="button" value="54"><input type="button" value="55" class="selected"><input type="button" value="56"><input type="button" value="57"><input type="button" value="58"><input type="button" value="59"><input type="button" value="60"><input type="button" value="61"><input type="button" value="62"><input type="button" value="63"><input type="button" value="64"><input type="button" value="65"><input type="button" value="66"><input type="button" value="67"><input type="button" value="68"><input type="button" value="69"><input type="button" value="70"><input type="button" value="71"><input type="button" value="72"><input type="button" value="73"><input type="button" value="74"><input type="button" value="75"><input type="button" value="76"><input type="button" value="77"><input type="button" value="78"><input type="button" value="79"><input type="button" value="80"><input type="button" value="81"><input type="button" value="83"><input type="button" value="84"><input type="button" value="85"><input type="button" value="86"><input type="button" value="canary" class="canary">          </div> <div class="clear"></div> </div> <div class="browser-widget"> <div class="icon"> <div id="firefox"> <img src="/images/browser-icons/firefox.png"> </div> </div> <div class="versions"> <input type="button" value="3"><input type="button" value="3.5"><input type="button" value="3.6"><input type="button" value="4"><input type="button" value="5"><input type="button" value="6"><input type="button" value="7"><input type="button" value="8"><input type="button" value="9"><input type="button" value="10"><input type="button" value="11"><input type="button" value="12"><input type="button" value="13"><input type="button" value="14"><input type="button" value="15"><input type="button" value="16"><input type="button" value="17"><input type="button" value="18"><input type="button" value="19"><input type="button" value="20"><input type="button" value="21"><input type="button" value="22"><input type="button" value="23"><input type="button" value="24"><input type="button" value="25"><input type="button" value="26"><input type="button" value="27"><input type="button" value="28"><input type="button" value="29"><input type="button" value="30"><input type="button" value="31"><input type="button" value="32"><input type="button" value="33"><input type="button" value="34"><input type="button" value="35"><input type="button" value="36"><input type="button" value="37"><input type="button" value="38"><input type="button" value="39"><input type="button" value="40"><input type="button" value="41"><input type="button" value="42"><input type="button" value="43"><input type="button" value="44"><input type="button" value="45"><input type="button" value="46"><input type="button" value="47"><input type="button" value="48"><input type="button" value="49"><input type="button" value="50"><input type="button" value="51"><input type="button" value="52"><input type="button" value="53"><input type="button" value="54"><input type="button" value="55"><input type="button" value="56"><input type="button" value="57"><input type="button" value="58"><input type="button" value="59"><input type="button" value="60"><input type="button" value="61"><input type="button" value="62"><input type="button" value="63"><input type="button" value="64"><input type="button" value="65"><input type="button" value="66"><input type="button" value="67"><input type="button" value="68"><input type="button" value="69"><input type="button" value="70"><input type="button" value="71"><input type="button" value="72"><input type="button" value="73"><input type="button" value="74"><input type="button" value="75"><input type="button" value="76"><input type="button" value="77"><input type="button" value="78"><input type="button" value="79"><input type="button" value="80"><input type="button" value="81"><input type="button" value="82"><input type="button" value="nightly" class="nightly">          </div> <div class="clear"></div> </div> <div class="browser-widget"> <div class="icon"> <div id="safari"> <img src="/images/browser-icons/safari.png"> </div> </div> <div class="versions"> <input type="button" value="4"><input type="button" value="5.0.5" class="safari505"><input type="button" value="5.1">          </div> <div class="clear"></div> </div> <div class="browser-widget no-margin-bottom"> <div class="icon"> <div id="opera"> <img src="/images/browser-icons/opera.png"> </div> </div> <div class="versions"> <input type="button" value="10"><input type="button" value="10.5"><input type="button" value="11"><input type="button" value="11.5"><input type="button" value="11.6"><input type="button" value="12"><input type="button" value="15"><input type="button" value="16"><input type="button" value="17"><input type="button" value="18"><input type="button" value="19"><input type="button" value="20"><input type="button" value="21"><input type="button" value="22"><input type="button" value="23"><input type="button" value="24"><input type="button" value="25"><input type="button" value="26"><input type="button" value="27"><input type="button" value="28"><input type="button" value="29"><input type="button" value="30"><input type="button" value="31"><input type="button" value="32"><input type="button" value="33"><input type="button" value="34"><input type="button" value="35"><input type="button" value="36"><input type="button" value="37"><input type="button" value="38"><input type="button" value="39"><input type="button" value="40"><input type="button" value="41"><input type="button" value="42"><input type="button" value="43"><input type="button" value="44"><input type="button" value="45"><input type="button" value="46"><input type="button" value="47"><input type="button" value="48"><input type="button" value="49"><input type="button" value="50"><input type="button" value="51"><input type="button" value="52"><input type="button" value="53"><input type="button" value="54"><input type="button" value="55"><input type="button" value="56"><input type="button" value="57"><input type="button" value="58"><input type="button" value="60"><input type="button" value="62"><input type="button" value="63"><input type="button" value="64"><input type="button" value="65"><input type="button" value="66"><input type="button" value="67"><input type="button" value="68"><input type="button" value="69"><input type="button" value="70"><input type="button" value="71"><input type="button" value="next" class="next">          </div> <div class="clear"></div> </div> </div> <div class="browsers" id="browsers-win8" style=""> <div class="browser-widget"> <div class="icon"> <div id="ie"> <img src="/images/browser-icons/ie.png"> </div> </div> <div class="versions"> <input type="button" value="10" disabled="">                          <div id="versions-incentive"> <p>Windows 8 and IE 10 is only available to paying users. <a href="/#pricing">Upgrade to the paid plan</a> to unlock Windows 8 and IE 10!</p> </div> </div> <div class="clear"></div> </div> <div class="browser-widget"> <div class="icon"> <div id="chrome"> <img src="/images/browser-icons/chrome.png"> </div> </div> <div class="versions"> <input type="button" value="30" disabled=""><input type="button" value="31" disabled=""><input type="button" value="32" disabled=""><input type="button" value="33" disabled=""><input type="button" value="34" disabled=""><input type="button" value="35" disabled=""><input type="button" value="36" disabled=""><input type="button" value="37" disabled=""><input type="button" value="38" disabled=""><input type="button" value="39" disabled=""><input type="button" value="40" disabled=""><input type="button" value="41" disabled=""><input type="button" value="42" disabled=""><input type="button" value="43" disabled=""><input type="button" value="44" disabled=""><input type="button" value="45" disabled=""><input type="button" value="46" disabled=""><input type="button" value="47" disabled=""><input type="button" value="48" disabled=""><input type="button" value="49" disabled=""><input type="button" value="50" disabled=""><input type="button" value="51" disabled=""><input type="button" value="52" disabled=""><input type="button" value="53" disabled=""><input type="button" value="54" disabled=""><input type="button" value="55" class="selected" disabled=""><input type="button" value="56" disabled=""><input type="button" value="57" disabled=""><input type="button" value="canary" class="canary" disabled="">          </div> <div class="clear"></div> </div> <div class="browser-widget"> <div class="icon"> <div id="firefox"> <img src="/images/browser-icons/firefox.png"> </div> </div> <div class="versions"> <input type="button" value="30" disabled=""><input type="button" value="31" disabled=""><input type="button" value="32" disabled=""><input type="button" value="33" disabled=""><input type="button" value="34" disabled=""><input type="button" value="35" disabled=""><input type="button" value="36" disabled=""><input type="button" value="37" disabled=""><input type="button" value="38" disabled=""><input type="button" value="39" disabled=""><input type="button" value="40" disabled=""><input type="button" value="41" disabled=""><input type="button" value="42" disabled=""><input type="button" value="43" disabled=""><input type="button" value="44" disabled=""><input type="button" value="45" disabled=""><input type="button" value="46" disabled=""><input type="button" value="47" disabled=""><input type="button" value="48" disabled=""><input type="button" value="49" disabled=""><input type="button" value="50" disabled=""><input type="button" value="51" disabled=""><input type="button" value="52" disabled=""><input type="button" value="nightly" class="nightly" disabled="">          </div> <div class="clear"></div> </div> <div class="browser-widget"> <div class="icon"> <div id="safari"> <img src="/images/browser-icons/safari.png"> </div> </div> <div class="versions"> <input type="button" value="4" disabled=""><input type="button" value="5.0.5" class="safari505" disabled=""><input type="button" value="5.1" disabled="">          </div> <div class="clear"></div> </div> <div class="browser-widget no-margin-bottom"> <div class="icon"> <div id="opera"> <img src="/images/browser-icons/opera.png"> </div> </div> <div class="versions"> <input type="button" value="20" disabled=""><input type="button" value="21" disabled=""><input type="button" value="22" disabled=""><input type="button" value="23" disabled=""><input type="button" value="24" disabled=""><input type="button" value="25" disabled=""><input type="button" value="26" disabled=""><input type="button" value="27" disabled=""><input type="button" value="28" disabled=""><input type="button" value="29" disabled=""><input type="button" value="30" disabled=""><input type="button" value="31" disabled=""><input type="button" value="32" disabled=""><input type="button" value="33" disabled=""><input type="button" value="34" disabled=""><input type="button" value="35" disabled=""><input type="button" value="36" disabled=""><input type="button" value="37" disabled=""><input type="button" value="38" disabled=""><input type="button" value="39" disabled=""><input type="button" value="40" disabled=""><input type="button" value="41" disabled=""><input type="button" value="42" disabled=""><input type="button" value="43" disabled=""><input type="button" value="44" disabled=""><input type="button" value="next" class="next" disabled="">          </div> <div class="clear"></div> </div> </div> <div class="browsers" id="browsers-win81" style=""> <div class="browser-widget"> <div class="icon"> <div id="ie"> <img src="/images/browser-icons/ie.png"> </div> </div> <div class="versions"> <input type="button" value="11" disabled="">                          <div id="versions-incentive"> <p>Windows 8.1 and IE 11 is only available to paying users. <a href="/#pricing">Upgrade to the paid plan</a> to unlock Windows 8.1 and IE 11!</p> </div> </div> <div class="clear"></div> </div> <div class="browser-widget"> <div class="icon"> <div id="chrome"> <img src="/images/browser-icons/chrome.png"> </div> </div> <div class="versions"> <input type="button" value="30" disabled=""><input type="button" value="31" disabled=""><input type="button" value="32" disabled=""><input type="button" value="33" disabled=""><input type="button" value="34" disabled=""><input type="button" value="35" disabled=""><input type="button" value="36" disabled=""><input type="button" value="37" disabled=""><input type="button" value="38" disabled=""><input type="button" value="39" disabled=""><input type="button" value="40" disabled=""><input type="button" value="41" disabled=""><input type="button" value="42" disabled=""><input type="button" value="43" disabled=""><input type="button" value="44" disabled=""><input type="button" value="45" disabled=""><input type="button" value="46" disabled=""><input type="button" value="47" disabled=""><input type="button" value="48" disabled=""><input type="button" value="49" disabled=""><input type="button" value="50" disabled=""><input type="button" value="51" disabled=""><input type="button" value="52" disabled=""><input type="button" value="53" disabled=""><input type="button" value="54" disabled=""><input type="button" value="55" class="selected" disabled=""><input type="button" value="56" disabled=""><input type="button" value="57" disabled=""><input type="button" value="canary" class="canary" disabled="">          </div> <div class="clear"></div> </div> <div class="browser-widget"> <div class="icon"> <div id="firefox"> <img src="/images/browser-icons/firefox.png"> </div> </div> <div class="versions"> <input type="button" value="30" disabled=""><input type="button" value="31" disabled=""><input type="button" value="32" disabled=""><input type="button" value="33" disabled=""><input type="button" value="34" disabled=""><input type="button" value="35" disabled=""><input type="button" value="36" disabled=""><input type="button" value="37" disabled=""><input type="button" value="38" disabled=""><input type="button" value="39" disabled=""><input type="button" value="40" disabled=""><input type="button" value="41" disabled=""><input type="button" value="42" disabled=""><input type="button" value="43" disabled=""><input type="button" value="44" disabled=""><input type="button" value="45" disabled=""><input type="button" value="46" disabled=""><input type="button" value="47" disabled=""><input type="button" value="48" disabled=""><input type="button" value="49" disabled=""><input type="button" value="50" disabled=""><input type="button" value="51" disabled=""><input type="button" value="52" disabled=""><input type="button" value="nightly" class="nightly" disabled="">          </div> <div class="clear"></div> </div> <div class="browser-widget"> <div class="icon"> <div id="safari"> <img src="/images/browser-icons/safari.png"> </div> </div> <div class="versions"> <input type="button" value="4" disabled=""><input type="button" value="5.0.5" class="safari505" disabled=""><input type="button" value="5.1" disabled="">          </div> <div class="clear"></div> </div> <div class="browser-widget no-margin-bottom"> <div class="icon"> <div id="opera"> <img src="/images/browser-icons/opera.png"> </div> </div> <div class="versions"> <input type="button" value="20" disabled=""><input type="button" value="21" disabled=""><input type="button" value="22" disabled=""><input type="button" value="23" disabled=""><input type="button" value="24" disabled=""><input type="button" value="25" disabled=""><input type="button" value="26" disabled=""><input type="button" value="27" disabled=""><input type="button" value="28" disabled=""><input type="button" value="29" disabled=""><input type="button" value="30" disabled=""><input type="button" value="31" disabled=""><input type="button" value="32" disabled=""><input type="button" value="33" disabled=""><input type="button" value="34" disabled=""><input type="button" value="35" disabled=""><input type="button" value="36" disabled=""><input type="button" value="37" disabled=""><input type="button" value="38" disabled=""><input type="button" value="39" disabled=""><input type="button" value="40" disabled=""><input type="button" value="41" disabled=""><input type="button" value="42" disabled=""><input type="button" value="43" disabled=""><input type="button" value="44" disabled=""><input type="button" value="next" class="next" disabled="">          </div> <div class="clear"></div> </div> </div> <div class="browsers" id="browsers-win10" style=""> <div class="browser-widget"> <div class="icon"> <div id="edge"> <img src="/images/browser-icons/edge.png"> </div> </div> <div class="versions"> <input type="button" value="38" disabled=""> (latest)                          <div id="versions-incentive"> <p>Windows 10 and Edge browser is only available to paying users. <a href="/#pricing">Upgrade to the paid plan</a> to unlock Windows 10 and Edge!</p> </div> </div> <div class="clear"></div> </div> <div class="browser-widget"> <div class="icon"> <div id="ie"> <img src="/images/browser-icons/ie.png"> </div> </div> <div class="versions"> <input type="button" value="11" disabled="">          </div> <div class="clear"></div> </div> <div class="browser-widget"> <div class="icon"> <div id="chrome"> <img src="/images/browser-icons/chrome.png"> </div> </div> <div class="versions"> <input type="button" value="1" disabled=""><input type="button" value="2" disabled=""><input type="button" value="3" disabled=""><input type="button" value="4" disabled=""><input type="button" value="5" disabled=""><input type="button" value="6" disabled=""><input type="button" value="7" disabled=""><input type="button" value="8" disabled=""><input type="button" value="9" disabled=""><input type="button" value="10" disabled=""><input type="button" value="11" disabled=""><input type="button" value="12" disabled=""><input type="button" value="13" disabled=""><input type="button" value="14" disabled=""><input type="button" value="15" disabled=""><input type="button" value="16" disabled=""><input type="button" value="17" disabled=""><input type="button" value="18" disabled=""><input type="button" value="19" disabled=""><input type="button" value="20" disabled=""><input type="button" value="21" disabled=""><input type="button" value="22" disabled=""><input type="button" value="23" disabled=""><input type="button" value="24" disabled=""><input type="button" value="25" disabled=""><input type="button" value="26" disabled=""><input type="button" value="27" disabled=""><input type="button" value="28" disabled=""><input type="button" value="29" disabled=""><input type="button" value="30" disabled=""><input type="button" value="31" disabled=""><input type="button" value="32" disabled=""><input type="button" value="33" disabled=""><input type="button" value="34" disabled=""><input type="button" value="35" disabled=""><input type="button" value="36" disabled=""><input type="button" value="37" disabled=""><input type="button" value="38" disabled=""><input type="button" value="39" disabled=""><input type="button" value="40" disabled=""><input type="button" value="41" disabled=""><input type="button" value="42" disabled=""><input type="button" value="43" disabled=""><input type="button" value="44" disabled=""><input type="button" value="45" disabled=""><input type="button" value="46" disabled=""><input type="button" value="47" disabled=""><input type="button" value="48" disabled=""><input type="button" value="49" disabled=""><input type="button" value="50" disabled=""><input type="button" value="51" disabled=""><input type="button" value="52" disabled=""><input type="button" value="53" disabled=""><input type="button" value="54" disabled=""><input type="button" value="55" class="selected" disabled=""><input type="button" value="56" disabled=""><input type="button" value="canary" class="canary" disabled="">          </div> <div class="clear"></div> </div> <div class="browser-widget"> <div class="icon"> <div id="firefox"> <img src="/images/browser-icons/firefox.png"> </div> </div> <div class="versions"> <input type="button" value="3" disabled=""><input type="button" value="3.5" disabled=""><input type="button" value="3.6" disabled=""><input type="button" value="4" disabled=""><input type="button" value="5" disabled=""><input type="button" value="6" disabled=""><input type="button" value="7" disabled=""><input type="button" value="8" disabled=""><input type="button" value="9" disabled=""><input type="button" value="10" disabled=""><input type="button" value="11" disabled=""><input type="button" value="12" disabled=""><input type="button" value="13" disabled=""><input type="button" value="14" disabled=""><input type="button" value="15" disabled=""><input type="button" value="16" disabled=""><input type="button" value="17" disabled=""><input type="button" value="18" disabled=""><input type="button" value="19" disabled=""><input type="button" value="20" disabled=""><input type="button" value="21" disabled=""><input type="button" value="22" disabled=""><input type="button" value="23" disabled=""><input type="button" value="24" disabled=""><input type="button" value="25" disabled=""><input type="button" value="26" disabled=""><input type="button" value="27" disabled=""><input type="button" value="28" disabled=""><input type="button" value="29" disabled=""><input type="button" value="30" disabled=""><input type="button" value="31" disabled=""><input type="button" value="32" disabled=""><input type="button" value="33" disabled=""><input type="button" value="34" disabled=""><input type="button" value="35" disabled=""><input type="button" value="36" disabled=""><input type="button" value="37" disabled=""><input type="button" value="38" disabled=""><input type="button" value="39" disabled=""><input type="button" value="40" disabled=""><input type="button" value="41" disabled=""><input type="button" value="42" disabled=""><input type="button" value="43" disabled=""><input type="button" value="44" disabled=""><input type="button" value="45" disabled=""><input type="button" value="46" disabled=""><input type="button" value="47" disabled=""><input type="button" value="48" disabled=""><input type="button" value="49" disabled=""><input type="button" value="50" disabled=""><input type="button" value="51" disabled=""><input type="button" value="nightly" class="nightly" disabled="">          </div> <div class="clear"></div> </div> <div class="browser-widget"> <div class="icon"> <div id="safari"> <img src="/images/browser-icons/safari.png"> </div> </div> <div class="versions"> <input type="button" value="4" disabled=""><input type="button" value="5.0.5" class="safari505" disabled=""><input type="button" value="5.1" disabled="">          </div> <div class="clear"></div> </div> <div class="browser-widget no-margin-bottom"> <div class="icon"> <div id="opera"> <img src="https://browserling.com/images/browser-icons/opera.png"> </div> </div> <div class="versions"> <input type="button" value="10" disabled=""><input type="button" value="10.5" disabled=""><input type="button" value="11" disabled=""><input type="button" value="11.5" disabled=""><input type="button" value="11.6" disabled=""><input type="button" value="12" disabled=""><input type="button" value="15" disabled=""><input type="button" value="16" disabled=""><input type="button" value="17" disabled=""><input type="button" value="18" disabled=""><input type="button" value="19" disabled=""><input type="button" value="20" disabled=""><input type="button" value="21" disabled=""><input type="button" value="22" disabled=""><input type="button" value="23" disabled=""><input type="button" value="24" disabled=""><input type="button" value="25" disabled=""><input type="button" value="26" disabled=""><input type="button" value="27" disabled=""><input type="button" value="28" disabled=""><input type="button" value="29" disabled=""><input type="button" value="30" disabled=""><input type="button" value="31" disabled=""><input type="button" value="32" disabled=""><input type="button" value="33" disabled=""><input type="button" value="34" disabled=""><input type="button" value="35" disabled=""><input type="button" value="36" disabled=""><input type="button" value="37" disabled=""><input type="button" value="38" disabled=""><input type="button" value="39" disabled=""><input type="button" value="40" disabled=""><input type="button" value="41" disabled=""><input type="button" value="42" disabled=""><input type="button" value="43" disabled=""><input type="button" value="next" class="next" disabled="">          </div> <div class="clear"></div> </div> </div> <div class="browsers" id="browsers-android44" style=""> <div class="browser-widget"> <div class="icon"> <div id="android"> <img src="https://browserling.com/images/browser-icons/android.png"> </div> </div> <div class="versions"> <input type="button" value="4.4" disabled="">                          <div id="versions-incentive"> <p>Android is only available to paying users. <a href="https://browserling.com/#pricing">Upgrade to the paid plan</a> to unlock Android!</p> </div> </div> <div class="clear"></div> </div> </div> <div class="browsers" id="browsers-android50" style=""> <div class="browser-widget"> <div class="icon"> <div id="android"> <img src="https://browserling.com/images/browser-icons/android.png"> </div> </div> <div class="versions"> <input type="button" value="5.0" disabled="">                          <div id="versions-incentive"> <p>Android is only available to paying users. <a href="https://browserling.com/#pricing">Upgrade to the paid plan</a> to unlock Android!</p> </div> </div> <div class="clear"></div> </div> </div> <div class="browsers" id="browsers-android51" style=""> <div class="browser-widget"> <div class="icon"> <div id="android"> <img src="https://browserling.com/images/browser-icons/android.png"> </div> </div> <div class="versions"> <input type="button" value="5.1" disabled="">                          <div id="versions-incentive"> <p>Android is only available to paying users. <a href="https://browserling.com/#pricing">Upgrade to the paid plan</a> to unlock Android!</p> </div> </div> <div class="clear"></div> </div> </div> <div class="browsers" id="browsers-android60" style=""> <div class="browser-widget"> <div class="icon"> <div id="android"> <img src="https://browserling.com/images/browser-icons/android.png"> </div> </div> <div class="versions"> <input type="button" value="6.0" disabled="">                          <div id="versions-incentive"> <p>Android is only available to paying users. <a href="https://browserling.com/#pricing">Upgrade to the paid plan</a> to unlock Android!</p> </div> </div> <div class="clear"></div> </div> </div> <div class="browsers" id="browsers-android70" style=""> <div class="browser-widget"> <div class="icon"> <div id="android"> <img src="https://browserling.com/images/browser-icons/android.png"> </div> </div> <div class="versions"> <input type="button" value="7.0" disabled="">                          <div id="versions-incentive"> <p>Android is only available to paying users. <a href="https://browserling.com/#pricing">Upgrade to the paid plan</a> to unlock Android!</p> </div> </div> <div class="clear"></div> </div> </div> </div> <!-- <div id="browser-menu"> -->'; document.body.appendChild(deb);
  var steele=document.createElement("style"); steele.innerHTML='body { line-height: 1.5; } table { border-collapse: separate; border-spacing: 0; } caption, th, td { text-align: left; font-weight: normal; } table, td, th { vertical-align: middle; } blockquote:before, blockquote:after, q:before, q:after { content: ""; } blockquote, q { quotes: "" ""; } a img { border: none; } body { background-repeat: no-repeat; background-size: 100%; } #header { background-color: rgba(52, 150, 217, 1); overflow: hidden; padding-top: 5px; } #invalid-browse-url { background-color: rgb(255, 158, 158); font-size: 14px; text-align: center; padding: 10px 0; } #invalid-browse-url input { font-family: "Courier New", Courier, monospace; background: #FFF7F0; border: 1px solid #CCCCCC; padding: 0 5px; width: 645px; } #paid-plan-message { background-color: rgb(255, 158, 158); font-size: 14px; text-align: center; padding: 10px 0; } #display { display: none; } #display div { background-color: black; } #times-up { display: none; text-align: center; position: absolute; top: 100px; height: 300px; background-color: white; width: 100%; border-top: 5px solid gray; border-bottom: 5px solid gray; } #times-up-top { font-size: 50px; color: rgb(0, 168, 255); } #times-up-message-1, #times-up-message-2 { width: 800px; margin: 0 auto; } #times-up-message-1 { margin-top: 10px; } #times-up-message-2 { margin-top: 20px; } #times-up-upgrade { margin: 0 auto; margin-top: 20px; } #times-up-upgrade input { background-color: #45b1e8; color: rgb(255, 255, 255); font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 22px; font-weight: bold; moz-border-radius: 5px; -webkit-border-radius: 5px; border: 1px solid #616EA3; height: 55px; width: 230px; } #idle-timeout { display: none; text-align: center; position: absolute; top: 100px; height: 300px; background-color: white; width: 100%; border-top: 5px solid gray; border-bottom: 5px solid gray; } #idle-timeout-top { font-size: 50px; color: rgb(0, 168, 255); } #idle-timeout-message-1 { width: 800px; margin: 0 auto; } #login-or-paid-plan { text-align: center; position: absolute; top: 100px; height: 300px; background-color: white; width: 100%; border-top: 5px solid gray; border-bottom: 5px solid gray; } #login-or-paid-plan-top { font-size: 50px; color: rgb(0, 168, 255); } #login-or-paid-plan-message-1, #login-or-paid-plan-message-2 { width: 800px; margin: 0 auto; } #login-or-paid-plan-message-1 { margin-top: 10px; } #login-or-paid-plan-message-2 { margin-top: 20px; } #login-or-paid-plan-upgrade { margin: 0 auto; margin-top: 20px; } #login-or-paid-plan-upgrade input { background-color: #45b1e8; color: rgb(255, 255, 255); font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 22px; font-weight: bold; moz-border-radius: 5px; -webkit-border-radius: 5px; border: 1px solid #616EA3; height: 55px; width: 310px; } #disconnected { display: none; text-align: center; position: absolute; top: 100px; height: 300px; background-color: white; width: 100%; border-top: 5px solid gray; border-bottom: 5px solid gray; } #disconnected-top { padding-top: 20px; color: rgb(223, 35, 78); font-size: 50px; } #disconnected #disconnected-message-1 { margin-top: 55px; } #limit-reached { display: none; text-align: center; position: absolute; top: 100px; height: 300px; background-color: white; width: 100%; border-top: 5px solid gray; border-bottom: 5px solid gray; } #limit-reached-top { padding-top: 20px; color: rgb(223, 35, 78); font-size: 50px; } #limit-reached #limit-reached-message-1 { margin-top: 20px; } #limit-reached #limit-reached-message-2 { font-size: 18px; } #limit-reached #limit-reached-message-3 { margin-top: 20px; } #limit-reached #limit-reached-upgrade input { margin-top: 20px; background-color: #45b1e8; color: rgb(255, 255, 255); font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 22px; font-weight: bold; moz-border-radius: 5px; -webkit-border-radius: 5px; border: 1px solid #616EA3; height: 55px; width: 230px; } #queue #queue-error { padding-top: 10px; display: none; } #queue #queue-error-text { color: rgb(223, 35, 78); font-size: 30px; } #queue #queue-error-support { font-size: 24px; } #queue #queue-skip { width: 100%; position: absolute; bottom: 10px; } #queue #queue-skip p.plan { font-size: 25px; } #queue #queue-skip p.what { font-size: 16px; } #timer { float: left; margin-right: 10px; margin-top: 3px; font-size: 20px; } #url { float: left; margin-right: 10px; } #url input { width: 400px; font-size: 18px; padding: 5px; border-radius: 2px; border: 1px solid #78ACE8; color: #2E527B; } #url input:focus { background-color: #E3F0FF; } #browser { float: left; margin-right: 10px; position: relative; width: 42px; } #browser img { width: 32px; height: 32px; } #browser #current-browser-version { position: absolute; font-weight: bold; font-size: 21px; bottom: 0; right: 0; } #header input[type="button"] { padding: 5px; -webkit-appearance: none; -moz-appearance: none; border: 1px solid #78ACE8; border-radius: 3px; background: #3498db; background-image: linear-gradient(to bottom, #3498db, #2980b9); color: #ffffff; } #header input[type="button"]:hover { background: #3cb0fd; background-image: linear-gradient(to bottom, #3cb0fd, #3498db); } #header input[type="button"]:active { background: #3498db; background-image: linear-gradient(to bottom, #3498db, #2980b9); } #run { float: left; margin-right: 10px; } #run input { font-size: 20px; width: 70px; } #keyboard { float: left; margin-right: 10px; } #keyboard img { margin-top: 4px; } #bug-hunter { float: left; margin-right: 10px; } #bug-hunter img { margin-top: 4px; } #bug-hunter-tools { display: none; text-align: center; } #bug-hunter-not-connected { display: none; font-size: 16px; background-color: #ffffe1; } #bug-hunter-what-is { font-size: 16px; background-color: #ffffe1; color: rgb(5, 95, 180); font-weight: bold; } #bug-hunter-send-choices { margin-top: 10px; font-size: 14px; } #bug-hunter-send-choices a { text-decoration: none; } #bug-hunter-send-email { margin-top: 10px; display: none; } #bug-hunter-send-imgur { margin-top: 10px; display: none; } #bug-hunter-send-email input[name="bug-hunter-email"] { width: 215px; } #bug-hunter-send-email textarea, #bug-hunter-send-imgur textarea { width: 260px; height: 90px; } #bug-hunter-imgur-links { display: none; } #bug-hunter-imgur-links input[name="imgur-img-link"] { width: 200px; } #bug-hunter-imgur-links input[name="imgur-del-link"] { width: 280px; } #bug-hunter-imgur-links input[name="imgur-markdown"] { width: 280px; } #email-the-bug-hunt, #imgur-the-bug-hunt { margin-bottom: 10px; } .bug-hunter-error { color: red; display: none; } .bug-hunter-success { color: green; display: none; } #canvas-editor-controls input[name="report"] { position: relative; top: -7px; width: 60px; height: 22px; -webkit-appearance: none; -moz-appearance: none; } #canvas-editor-controls input[name="close"] { position: relative; top: -7px; width: 47px; height: 22px; -webkit-appearance: none; -moz-appearance: none; } #tools { float: left; margin-right: 10px; } #tools input { font-size: 18px; width: 70px; } #done { float: left; } #done input { font-size: 18px; } #browser-menu { width: 540px; background-color: rgb(150,150,150); padding: 5px; display: none; position: fixed; } #browser-menu #platforms { background-color: rgb(200,200,200); margin-bottom: 5px; overflow: hidden; } #browser-menu #platforms .platform { float: left; margin: 0 5px; padding: 0 5px; height: 32px; } #browser-menu #platforms .platform.selected { background-color: rgb(150,150,150); } #browser-menu #platforms #allplatforms { font-size: 14px; text-decoration: none; position: relative; top: 5px; } #browser-menu #platforms .platform img { width: 32px; height: 32px; } #browser-menu #platforms #platforms-row:first-child { margin-bottom: 10px; } #browser-menu .browsers { display: none; } #browser-menu .browser-widget { background-color: rgb(200,200,200); overflow: hidden; margin-bottom: 5px; } #browser-menu .browser-widget img { width: 32px; height: 32px; } #browser-menu .no-margin-bottom { margin-bottom: 0px; } #browser-menu .browser-widget .icon { float: left; width: 32px; margin-right: 10px; } #browser-menu .browser-widget .versions { float: left; width: 490px; padding-top: 4px; } #browser-menu .browser-widget .versions input { margin-right: 4px; margin-bottom: 4px; width: 40px; } #browser-menu .browser-widget .versions input.canary { width: 60px; } #browser-menu .browser-widget .versions input.nightly { width: 60px; } #browser-menu .browser-widget .versions input.safari505 { width: 45px; } #browser-menu .browser-widget .versions .selected { background-color: rgb(156,156,156); border: 1px solid rgb(100,100,100); } #browser-menu .browser-widget .versions #versions-incentive { background-color: rgb(156,156,156); border: 3px solid gray; margin-right: 5px; margin-bottom: 5px; background-color: rgb(210,200,230); padding: 5px; } .menu-title { font-weight: bold; color: rgb(0, 168, 255); } .menu-content { margin-top: 10px; } #tools-menu { width: 425px; background-color: rgb(150,150,150); padding: 2px; display: none; position: fixed; } #tools-menu-inner { background-color: white; padding: 5px; } #tools-menu #tools-menu-close { overflow: hidden; } #tools-menu #tools-menu-close a { float: right; color: gray; text-decoration: none; margin-right: 4px; } #tools-menu .tool-item { padding: 2px; background-color: rgb(240, 240, 240); margin-bottom: 5px; } #tools-menu .tool-item:hover { background-color: rgb(230, 230, 230); } #tools-menu .tool-item-last { margin-bottom: 0px; } #tools-menu img { position: relative; top: 3px; left: 3px; margin-right: 10px; } #tools-menu .link { position: relative; top: -3px; } #keyboard-menu { width: 425px; background-color: rgb(150,150,150); padding: 2px; display: none; position: fixed; text-align: center; } #keyboard-menu-inner { background-color: white; padding: 5px; } #keyboard-menu-keyboard .key { display: inline; display: inline-block; min-width: 1em; padding: .2em .3em; font: normal .85em/1 "Lucida Grande", Lucida, Arial, sans-serif; text-align: center; text-decoration: none; -moz-border-radius: .3em; -webkit-border-radius: .3em; border-radius: .3em; border: none; cursor: pointer; -moz-user-select: none; -webkit-user-select: none; user-select: none; background: rgb(250, 250, 250); background: -moz-linear-gradient(top, rgb(210, 210, 210), rgb(255, 255, 255)); background: -webkit-gradient(linear, left top, left bottom, from(rgb(210, 210, 210)), to(rgb(255, 255, 255))); color:  rgb(50, 50, 50); text-shadow: 0 0 2px rgb(255, 255, 255); -moz-box-shadow: inset 0 0 1px rgb(255, 255, 255), inset 0 0 .4em rgb(200, 200, 200), 0 .1em 0 rgb(130, 130, 130), 0 .11em 0 rgba(0, 0, 0, .4), 0 .1em .11em rgba(0, 0, 0, .9); -webkit-box-shadow: inset 0 0 1px rgb(255, 255, 255), inset 0 0 .4em rgb(200, 200, 200), 0 .1em 0 rgb(130, 130, 130), 0 .11em 0 rgba(0, 0, 0, .4), 0 .1em .11em rgba(0, 0, 0, .9); box-shadow: inset 0 0 1px rgb(255, 255, 255), inset 0 0 .4em rgb(200, 200, 200), 0 .1em 0 rgb(130, 130, 130), 0 .11em 0 rgba(0, 0, 0, .4), 0 .1em .11em rgba(0, 0, 0, .9); } #keyboard-menu-keyboard .row { margin-bottom: 1px; } #keyboard-menu-keyboard .row1 { margin-bottom: 10px; } #keyboard-menu-keyboard .space { width: 146px; } #keyboard-menu-keyboard .shift { width: 60px; } #keyboard-menu-keyboard .enter { width: 59px; } #keyboard-menu-keyboard .caps { margin-right: 3px; } #keyboard-menu-keyboard .backslash { width: 42px; } #keyboard-menu-keyboard .backspace { width: 55px; } #keyboard-menu-keyboard .esc { margin-right: 17px; } #screenshots-menu { width: 525px; background-color: rgb(150,150,150); padding: 2px; display: none; position: fixed; } #screenshots-menu-inner { background-color: white; padding: 5px; } #screenshots-menu-close { overflow: hidden; } #screenshots-menu-close a { float: right; color: gray; text-decoration: none; margin-right: 4px; } #screenshots-menu #screenshots-left { float: left; width: 300px; margin-right: 5px; } #screenshots-menu #screenshots-left #screenshots-screenshot { width: 300px; height: 225px; margin-bottom: 10px; margin-top: 5px; background-color: rgb(240, 240, 240); border: 1px solid rgb(230, 230, 230); } #screenshots-menu #screenshots-right { float: left; width: 200px; } #screenshots-menu #screenshots-right input[name="title"] { width: 200px; } #screenshots-menu #screenshots-right textarea { width: 200px; height: 80px; } #screenshots-menu #screenshots-right #screenshot-error { color: red; display: none; } #screenshots-menu #screenshots-right #screenshot-success { color: green; display: none; } #feedback-menu { width: 425px; background-color: rgb(150,150,150); padding: 2px; display: none; position: fixed; } #feedback-menu-inner { background-color: white; padding: 5px; } #feedback-menu-close { overflow: hidden; } #feedback-menu-close a { float: right; color: gray; text-decoration: none; margin-right: 4px; } #feedback-menu input[type="text"], #feedback-menu textarea, #tunnel-menu input[type="text"] { border: 1px solid #808080; } #feedback-menu input[type="text"]:focus, #feedback-menu textarea:focus, #tunnel-menu input[type="text"]:focus { background-color: #fcfada; border: 1px solid #303030; } #feedback-menu label { display: block; float: left; width: 75px; } #feedback-menu input[type="button"] { padding-left: 10px; padding-right: 10px; } #feedback-menu #send { margin-top: 5px; padding-left: 75px; } #feedback-menu #anonymous { font-size: 12px; margin-bottom: 5px; margin-left: 77px; } #feedback-menu #feedback-error { background-color: rgb(248, 140, 140); padding-left: 77px; } #feedback-menu #feedback-thanks { background-color: rgb(169, 226, 169); padding-left: 77px; } #shareurl-menu { width: 425px; background-color: rgb(150,150,150); padding: 2px; position: fixed; display: none; } #shareurl-menu-inner { background-color: white; padding: 5px; } #shareurl-menu-close { overflow: hidden; } #shareurl-menu-close a { float: right; color: gray; text-decoration: none; margin-right: 4px; } #shareurl-menu label { font-size: 14px; } #shareurl-menu #shareurl-error { background-color: rgb(248, 140, 140); } #resol-menu { width: 425px; background-color: rgb(150,150,150); padding: 2px; position: fixed; display: none; } #resol-menu-inner { background-color: white; padding: 5px; } #resol-menu-close { overflow: hidden; } #resol-menu-close a { float: right; color: gray; text-decoration: none; margin-right: 4px; } #resol-menu .list { float: left; width: 90px; margin-right: 10px; } #resol-menu .list p { padding-left: 2px; } #resol-menu .list p a { padding-left: 2px; text-decoration: none; } #resol-menu .list p a.selected { background-color: rgb(165, 165, 165); } #resol-menu #resol-custom input[type="text"] { width: 45px; } #resol-menu .aspect { background-color: rgb(88, 88, 88); color: white; padding-left: 5px; } #tunnel-menu { width: 425px; background-color: rgb(150,150,150); padding: 2px; position: fixed; display: none; } #tunnel-menu-inner { background-color: white; padding: 5px; } #tunnel-menu-close { overflow: hidden; } #tunnel-menu-close a { float: right; color: gray; text-decoration: none; margin-right: 4px; } #tunnel-menu input[type="text"]{ width: 315px; } #tunnel-menu input[type="text"]#tunnel-opened-command { width: 400px; } #tunnel-menu #tunnel-please-wait-error { display: none; background-color: rgb(241, 203, 203); } #tunnel-menu #tunnel-linux-mac-win { margin-bottom: 10px; } #tunnel-menu #tunnel-guide-windows, #tunnel-menu #tunnel-guide-linux-mac { font-size: 12px; margin-bottom: 10px; } #tunnel-menu #tunnel-guide-windows { display: none; } #tunnel-menu #tunnel-linux-mac-win a { } #tunnel-menu #tunnel-linux-mac-win a.selected { text-decoration: none; color: rgb(0,0,0) } #tunnel-menu #tunnel-open { display: none; } #tunnel-menu #tunnel-open-error { display: none; background-color: rgb(241, 203, 203); } #tunnel-menu #tunnel-public-key-error { display: none; background-color: rgb(241, 203, 203); } #tunnel-menu #tunnel-opened { display: none; } #tunnel-menu #tunnel-public-key { display: none; } .float-fix-a { position: relative; float: right; right: 50%; } .float-fix-b { position: relative; float: right; right: -50%; } .clear { clear: both; } #canvas-editor-menu { height: 24px; } #canvas-editor-menu .icon { width: 24px; height: 24px; } #canvas-editor-menu .control { display: inline-block; margin-right: 5px; width: 24px; height: 24px; } #canvas-editor-menu .control-extra { display: inline-block; margin-right: 5px; height: 24px; } #canvas-editor-menu .control.active { background-color: rgb(111, 160, 240); }'; document.head.appendChild(steele);
var queqowo=document.createElement("div"); queqowo.id="queue"; document.body.appendChild(queqowo);
  var deyev=document.createElement("div"); deyev.innerHTML='<div style="display:none;" id="header"> <div class="float-fix-a"> <div class="float-fix-b"> <div id="timer"> 03:00 </div> <div id="url"> <input type="text" value="chrome://newtab"> </div> <div id="browser"> <img src="https://browserling.com/images/browser-icons/chrome.png"> <span id="current-browser-version">55</span> </div> <div id="run"> <input type="button" value="Run"> <input type="hidden" name="platform_name" value="android"> <input type="hidden" name="platform_version" value="' +ver+'"> <input type="hidden" name="browser" value="browser"> <input type="hidden" name="version" value="'+ver+'"> </div> <div id="keyboard"> <a href="#" title="On-Screen Keyboard"><img src="https://browserling.com/images/keyboard.png"></a> </div> <div id="bug-hunter"> <a href="#" title="Bug Hunter"><img src="https://browserling.com/images/bug-hunter.png"></a> </div> <div id="tools"> <input type="button" value="Tools"> </div> <div id="done"> <input type="button" value="End Session"> </div> <div class="clear"></div> </div> </div> </div>'; document.body.appendChild(deyev);
 if (cleardom === true){
document.querySelector(someelemento).innerHTML = '';
 }
  var session = {
          plan : "team"
        };
      
      (function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.io = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){

module.exports =  _dereq_('./lib/');

},{"./lib/":2}],2:[function(_dereq_,module,exports){

module.exports = _dereq_('./socket');

/**
 * Exports parser
 *
 * @api public
 *
 */
module.exports.parser = _dereq_('engine.io-parser');

},{"./socket":3,"engine.io-parser":19}],3:[function(_dereq_,module,exports){
(function (global){
/**
 * Module dependencies.
 */

var transports = _dereq_('./transports');
var Emitter = _dereq_('component-emitter');
var debug = _dereq_('debug')('engine.io-client:socket');
var index = _dereq_('indexof');
var parser = _dereq_('engine.io-parser');
var parseuri = _dereq_('parseuri');
var parsejson = _dereq_('parsejson');
var parseqs = _dereq_('parseqs');

/**
 * Module exports.
 */

module.exports = Socket;

/**
 * Noop function.
 *
 * @api private
 */

function noop(){}

/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket(uri, opts){
  if (!(this instanceof Socket)) return new Socket(uri, opts);

  opts = opts || {};

  if (uri && 'object' == typeof uri) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.hostname = uri.host;
    opts.secure = uri.protocol == 'https' || uri.protocol == 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  } else if (opts.host) {
    opts.hostname = parseuri(opts.host).host;
  }

  this.secure = null != opts.secure ? opts.secure :
    (global.location && 'https:' == location.protocol);

  if (opts.hostname && !opts.port) {
    // if no port is specified manually, use the protocol default
    opts.port = this.secure ? '443' : '80';
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname ||
    (global.location ? location.hostname : 'localhost');
  this.port = opts.port || (global.location && location.port ?
       location.port :
       (this.secure ? 443 : 80));
  this.query = opts.query || {};
  if ('string' == typeof this.query) this.query = parseqs.decode(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.jsonp = false !== opts.jsonp;
  this.forceBase64 = !!opts.forceBase64;
  this.enablesXDR = !!opts.enablesXDR;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.transports = opts.transports || ['polling', 'websocket'];
  this.readyState = '';
  this.writeBuffer = [];
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;

  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
    this.perMessageDeflate.threshold = 1024;
  }

  // SSL options for Node.js client
  this.pfx = opts.pfx || null;
  this.key = opts.key || null;
  this.passphrase = opts.passphrase || null;
  this.cert = opts.cert || null;
  this.ca = opts.ca || null;
  this.ciphers = opts.ciphers || null;
  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;

  // other options for Node.js client
  var freeGlobal = typeof global == 'object' && global;
  if (freeGlobal.global === freeGlobal) {
    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
      this.extraHeaders = opts.extraHeaders;
    }
  }

  this.open();
}

Socket.priorWebsocketSuccess = false;

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = _dereq_('./transport');
Socket.transports = _dereq_('./transports');
Socket.parser = _dereq_('engine.io-parser');

/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug('creating transport "%s"', name);
  var query = clone(this.query);

  // append engine.io protocol identifier
  query.EIO = parser.protocol;

  // transport name
  query.transport = name;

  // session id if we already have one
  if (this.id) query.sid = this.id;

  var transport = new transports[name]({
    agent: this.agent,
    hostname: this.hostname,
    port: this.port,
    secure: this.secure,
    path: this.path,
    query: query,
    forceJSONP: this.forceJSONP,
    jsonp: this.jsonp,
    forceBase64: this.forceBase64,
    enablesXDR: this.enablesXDR,
    timestampRequests: this.timestampRequests,
    timestampParam: this.timestampParam,
    policyPort: this.policyPort,
    socket: this,
    pfx: this.pfx,
    key: this.key,
    passphrase: this.passphrase,
    cert: this.cert,
    ca: this.ca,
    ciphers: this.ciphers,
    rejectUnauthorized: this.rejectUnauthorized,
    perMessageDeflate: this.perMessageDeflate,
    extraHeaders: this.extraHeaders
  });

  return transport;
};

function clone (obj) {
  var o = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }
  return o;
}

/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */
Socket.prototype.open = function () {
  var transport;
  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') != -1) {
    transport = 'websocket';
  } else if (0 === this.transports.length) {
    // Emit error on next tick so it can be listened to
    var self = this;
    setTimeout(function() {
      self.emit('error', 'No transports available');
    }, 0);
    return;
  } else {
    transport = this.transports[0];
  }
  this.readyState = 'opening';

  // Retry with the next transport if the transport is disabled (jsonp: false)
  try {
    transport = this.createTransport(transport);
  } catch (e) {
    this.transports.shift();
    this.open();
    return;
  }

  transport.open();
  this.setTransport(transport);
};

/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */

Socket.prototype.setTransport = function(transport){
  debug('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  }

  // set up transport
  this.transport = transport;

  // set up transport listeners
  transport
  .on('drain', function(){
    self.onDrain();
  })
  .on('packet', function(packet){
    self.onPacket(packet);
  })
  .on('error', function(e){
    self.onError(e);
  })
  .on('close', function(){
    self.onClose('transport close');
  });
};

/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */

Socket.prototype.probe = function (name) {
  debug('probing transport "%s"', name);
  var transport = this.createTransport(name, { probe: 1 })
    , failed = false
    , self = this;

  Socket.priorWebsocketSuccess = false;

  function onTransportOpen(){
    if (self.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }
    if (failed) return;

    debug('probe transport "%s" opened', name);
    transport.send([{ type: 'ping', data: 'probe' }]);
    transport.once('packet', function (msg) {
      if (failed) return;
      if ('pong' == msg.type && 'probe' == msg.data) {
        debug('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        if (!transport) return;
        Socket.priorWebsocketSuccess = 'websocket' == transport.name;

        debug('pausing current transport "%s"', self.transport.name);
        self.transport.pause(function () {
          if (failed) return;
          if ('closed' == self.readyState) return;
          debug('changing transport and sending upgrade packet');

          cleanup();

          self.setTransport(transport);
          transport.send([{ type: 'upgrade' }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        });
      } else {
        debug('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    });
  }

  function freezeTransport() {
    if (failed) return;

    // Any callback called by transport should be ignored since now
    failed = true;

    cleanup();

    transport.close();
    transport = null;
  }

  //Handle any error that happens while probing
  function onerror(err) {
    var error = new Error('probe error: ' + err);
    error.transport = transport.name;

    freezeTransport();

    debug('probe transport "%s" failed because of error: %s', name, err);

    self.emit('upgradeError', error);
  }

  function onTransportClose(){
    onerror("transport closed");
  }

  //When the socket is closed while we're probing
  function onclose(){
    onerror("socket closed");
  }

  //When the socket is upgraded while we're probing
  function onupgrade(to){
    if (transport && to.name != transport.name) {
      debug('"%s" works - aborting "%s"', to.name, transport.name);
      freezeTransport();
    }
  }

  //Remove all listeners on the transport and on self
  function cleanup(){
    transport.removeListener('open', onTransportOpen);
    transport.removeListener('error', onerror);
    transport.removeListener('close', onTransportClose);
    self.removeListener('close', onclose);
    self.removeListener('upgrading', onupgrade);
  }

  transport.once('open', onTransportOpen);
  transport.once('error', onerror);
  transport.once('close', onTransportClose);

  this.once('close', onclose);
  this.once('upgrading', onupgrade);

  transport.open();

};

/**
 * Called when connection is deemed open.
 *
 * @api public
 */

Socket.prototype.onOpen = function () {
  debug('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' == this.transport.name;
  this.emit('open');
  this.flush();

  // we check for `readyState` in case an `open`
  // listener already closed the socket
  if ('open' == this.readyState && this.upgrade && this.transport.pause) {
    debug('starting upgrade probes');
    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};

/**
 * Handles a packet.
 *
 * @api private
 */

Socket.prototype.onPacket = function (packet) {
  if ('opening' == this.readyState || 'open' == this.readyState) {
    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

    this.emit('packet', packet);

    // Socket is live - any packet counts
    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(parsejson(packet.data));
        break;

      case 'pong':
        this.setPing();
        this.emit('pong');
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.onError(err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        break;
    }
  } else {
    debug('packet received with socket readyState "%s"', this.readyState);
  }
};

/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */

Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen();
  // In case open handler closes socket
  if  ('closed' == this.readyState) return;
  this.setPing();

  // Prolong liveness of socket on heartbeat
  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};

/**
 * Resets ping timeout.
 *
 * @api private
 */

Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout(function () {
    if ('closed' == self.readyState) return;
    self.onClose('ping timeout');
  }, timeout || (self.pingInterval + self.pingTimeout));
};

/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */

Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout(function () {
    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }, self.pingInterval);
};

/**
* Sends a ping packet.
*
* @api private
*/

Socket.prototype.ping = function () {
  var self = this;
  this.sendPacket('ping', function(){
    self.emit('ping');
  });
};

/**
 * Called on `drain` event
 *
 * @api private
 */

Socket.prototype.onDrain = function() {
  this.writeBuffer.splice(0, this.prevBufferLen);

  // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`
  this.prevBufferLen = 0;

  if (0 === this.writeBuffer.length) {
    this.emit('drain');
  } else {
    this.flush();
  }
};

/**
 * Flush write buffers.
 *
 * @api private
 */

Socket.prototype.flush = function () {
  if ('closed' != this.readyState && this.transport.writable &&
    !this.upgrading && this.writeBuffer.length) {
    debug('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer);
    // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`
    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};

/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @param {Object} options.
 * @return {Socket} for chaining.
 * @api public
 */

Socket.prototype.write =
Socket.prototype.send = function (msg, options, fn) {
  this.sendPacket('message', msg, options, fn);
  return this;
};

/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Object} options.
 * @param {Function} callback function.
 * @api private
 */

Socket.prototype.sendPacket = function (type, data, options, fn) {
  if('function' == typeof data) {
    fn = data;
    data = undefined;
  }

  if ('function' == typeof options) {
    fn = options;
    options = null;
  }

  if ('closing' == this.readyState || 'closed' == this.readyState) {
    return;
  }

  options = options || {};
  options.compress = false !== options.compress;

  var packet = {
    type: type,
    data: data,
    options: options
  };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  if (fn) this.once('flush', fn);
  this.flush();
};

/**
 * Closes the connection.
 *
 * @api private
 */

Socket.prototype.close = function () {
  if ('opening' == this.readyState || 'open' == this.readyState) {
    this.readyState = 'closing';

    var self = this;

    if (this.writeBuffer.length) {
      this.once('drain', function() {
        if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      });
    } else if (this.upgrading) {
      waitForUpgrade();
    } else {
      close();
    }
  }

  function close() {
    self.onClose('forced close');
    debug('socket closing - telling transport to close');
    self.transport.close();
  }

  function cleanupAndClose() {
    self.removeListener('upgrade', cleanupAndClose);
    self.removeListener('upgradeError', cleanupAndClose);
    close();
  }

  function waitForUpgrade() {
    // wait for upgrade to finish since we can't send packets while pausing a transport
    self.once('upgrade', cleanupAndClose);
    self.once('upgradeError', cleanupAndClose);
  }

  return this;
};

/**
 * Called upon transport error
 *
 * @api private
 */

Socket.prototype.onError = function (err) {
  debug('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onClose('transport error', err);
};

/**
 * Called upon transport close.
 *
 * @api private
 */

Socket.prototype.onClose = function (reason, desc) {
  if ('opening' == this.readyState || 'open' == this.readyState || 'closing' == this.readyState) {
    debug('socket close with reason: "%s"', reason);
    var self = this;

    // clear timers
    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer);

    // stop event from firing again for transport
    this.transport.removeAllListeners('close');

    // ensure transport won't stay open
    this.transport.close();

    // ignore further transport communication
    this.transport.removeAllListeners();

    // set ready state
    this.readyState = 'closed';

    // clear session id
    this.id = null;

    // emit close event
    this.emit('close', reason, desc);

    // clean buffers after, so users can still
    // grab the buffers on `close` event
    self.writeBuffer = [];
    self.prevBufferLen = 0;
  }
};

/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */

Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];
  for (var i = 0, j = upgrades.length; i<j; i++) {
    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }
  return filteredUpgrades;
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"./transport":4,"./transports":5,"component-emitter":15,"debug":17,"engine.io-parser":19,"indexof":23,"parsejson":26,"parseqs":27,"parseuri":28}],4:[function(_dereq_,module,exports){
/**
 * Module dependencies.
 */

var parser = _dereq_('engine.io-parser');
var Emitter = _dereq_('component-emitter');

/**
 * Module exports.
 */

module.exports = Transport;

/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport (opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
  this.enablesXDR = opts.enablesXDR;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;
}

/**
 * Mix in `Emitter`.
 */

Emitter(Transport.prototype);

/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};

/**
 * Opens the transport.
 *
 * @api public
 */

Transport.prototype.open = function () {
  if ('closed' == this.readyState || '' == this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};

/**
 * Closes the transport.
 *
 * @api private
 */

Transport.prototype.close = function () {
  if ('opening' == this.readyState || 'open' == this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};

/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */

Transport.prototype.send = function(packets){
  if ('open' == this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};

/**
 * Called upon open
 *
 * @api private
 */

Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};

/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */

Transport.prototype.onData = function(data){
  var packet = parser.decodePacket(data, this.socket.binaryType);
  this.onPacket(packet);
};

/**
 * Called with a decoded packet.
 */

Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon close.
 *
 * @api private
 */

Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};

},{"component-emitter":15,"engine.io-parser":19}],5:[function(_dereq_,module,exports){
(function (global){
/**
 * Module dependencies
 */

var XMLHttpRequest = _dereq_('xmlhttprequest-ssl');
var XHR = _dereq_('./polling-xhr');
var JSONP = _dereq_('./polling-jsonp');
var websocket = _dereq_('./websocket');

/**
 * Export transports.
 */

exports.polling = polling;
exports.websocket = websocket;

/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling(opts){
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (global.location) {
    var isSSL = 'https:' == location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname != location.hostname || port != opts.port;
    xs = opts.secure != isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ('open' in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error('JSONP disabled');
    return new JSONP(opts);
  }
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"./polling-jsonp":6,"./polling-xhr":7,"./websocket":9,"xmlhttprequest-ssl":10}],6:[function(_dereq_,module,exports){
(function (global){

/**
 * Module requirements.
 */

var Polling = _dereq_('./polling');
var inherit = _dereq_('component-inherit');

/**
 * Module exports.
 */

module.exports = JSONPPolling;

/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;

/**
 * Global JSONP callbacks.
 */

var callbacks;

/**
 * Callbacks count.
 */

var index = 0;

/**
 * Noop.
 */

function empty () { }

/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */

function JSONPPolling (opts) {
  Polling.call(this, opts);

  this.query = this.query || {};

  // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution
  if (!callbacks) {
    // we need to consider multiple engines in the same page
    if (!global.___eio) global.___eio = [];
    callbacks = global.___eio;
  }

  // callback identifier
  this.index = callbacks.length;

  // add callback to jsonp global
  var self = this;
  callbacks.push(function (msg) {
    self.onData(msg);
  });

  // append to query string
  this.query.j = this.index;

  // prevent spurious errors from being emitted when the window is unloaded
  if (global.document && global.addEventListener) {
    global.addEventListener('beforeunload', function () {
      if (self.script) self.script.onerror = empty;
    }, false);
  }
}

/**
 * Inherits from Polling.
 */

inherit(JSONPPolling, Polling);

/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;

/**
 * Closes the socket.
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }

  Polling.prototype.doClose.call(this);
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

JSONPPolling.prototype.doPoll = function () {
  var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();
  script.onerror = function(e){
    self.onError('jsonp poll error',e);
  };

  var insertAt = document.getElementsByTagName('script')[0];
  if (insertAt) {
    insertAt.parentNode.insertBefore(script, insertAt);
  }
  else {
    (document.head || document.body).appendChild(script);
  }
  this.script = script;

  var isUAgecko = 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent);
  
  if (isUAgecko) {
    setTimeout(function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }, 100);
  }
};

/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */

JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;

    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);

    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete () {
    initIframe();
    fn();
  }

  function initIframe () {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="'+ self.iframeId +'">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;

    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe();

  // escape \n to prevent it from being converted into \r\n by some UAs
  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
  data = data.replace(rEscapedNewline, '\\\n');
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch(e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function(){
      if (self.iframe.readyState == 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"./polling":8,"component-inherit":16}],7:[function(_dereq_,module,exports){
(function (global){
/**
 * Module requirements.
 */

var XMLHttpRequest = _dereq_('xmlhttprequest-ssl');
var Polling = _dereq_('./polling');
var Emitter = _dereq_('component-emitter');
var inherit = _dereq_('component-inherit');
var debug = _dereq_('debug')('engine.io-client:polling-xhr');

/**
 * Module exports.
 */

module.exports = XHR;
module.exports.Request = Request;

/**
 * Empty function
 */

function empty(){}

/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */

function XHR(opts){
  Polling.call(this, opts);

  if (global.location) {
    var isSSL = 'https:' == location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = opts.hostname != global.location.hostname ||
      port != opts.port;
    this.xs = opts.secure != isSSL;
  } else {
    this.extraHeaders = opts.extraHeaders;
  }
}

/**
 * Inherits from Polling.
 */

inherit(XHR, Polling);

/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;

/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function(opts){
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.xs = this.xs;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  opts.enablesXDR = this.enablesXDR;

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  // other options for Node.js client
  opts.extraHeaders = this.extraHeaders;

  return new Request(opts);
};

/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */

XHR.prototype.doWrite = function(data, fn){
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
  var self = this;
  req.on('success', fn);
  req.on('error', function(err){
    self.onError('xhr post error', err);
  });
  this.sendXhr = req;
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

XHR.prototype.doPoll = function(){
  debug('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', function(data){
    self.onData(data);
  });
  req.on('error', function(err){
    self.onError('xhr poll error', err);
  });
  this.pollXhr = req;
};

/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */

function Request(opts){
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.xs = !!opts.xs;
  this.async = false !== opts.async;
  this.data = undefined != opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.isBinary = opts.isBinary;
  this.supportsBinary = opts.supportsBinary;
  this.enablesXDR = opts.enablesXDR;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;

  this.create();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function(){
  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  var xhr = this.xhr = new XMLHttpRequest(opts);
  var self = this;

  try {
    debug('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);
    try {
      if (this.extraHeaders) {
        xhr.setDisableHeaderCheck(true);
        for (var i in this.extraHeaders) {
          if (this.extraHeaders.hasOwnProperty(i)) {
            xhr.setRequestHeader(i, this.extraHeaders[i]);
          }
        }
      }
    } catch (e) {}
    if (this.supportsBinary) {
      // This has to be done after open because Firefox is stupid
      // http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
      xhr.responseType = 'arraybuffer';
    }

    if ('POST' == this.method) {
      try {
        if (this.isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    // ie6 check
    if ('withCredentials' in xhr) {
      xhr.withCredentials = true;
    }

    if (this.hasXDR()) {
      xhr.onload = function(){
        self.onLoad();
      };
      xhr.onerror = function(){
        self.onError(xhr.responseText);
      };
    } else {
      xhr.onreadystatechange = function(){
        if (4 != xhr.readyState) return;
        if (200 == xhr.status || 1223 == xhr.status) {
          self.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout(function(){
            self.onError(xhr.status);
          }, 0);
        }
      };
    }

    debug('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout(function() {
      self.onError(e);
    }, 0);
    return;
  }

  if (global.document) {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};

/**
 * Called upon successful response.
 *
 * @api private
 */

Request.prototype.onSuccess = function(){
  this.emit('success');
  this.cleanup();
};

/**
 * Called if we have data.
 *
 * @api private
 */

Request.prototype.onData = function(data){
  this.emit('data', data);
  this.onSuccess();
};

/**
 * Called upon error.
 *
 * @api private
 */

Request.prototype.onError = function(err){
  this.emit('error', err);
  this.cleanup(true);
};

/**
 * Cleans up house.
 *
 * @api private
 */

Request.prototype.cleanup = function(fromError){
  if ('undefined' == typeof this.xhr || null === this.xhr) {
    return;
  }
  // xmlhttprequest
  if (this.hasXDR()) {
    this.xhr.onload = this.xhr.onerror = empty;
  } else {
    this.xhr.onreadystatechange = empty;
  }

  if (fromError) {
    try {
      this.xhr.abort();
    } catch(e) {}
  }

  if (global.document) {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};

/**
 * Called upon load.
 *
 * @api private
 */

Request.prototype.onLoad = function(){
  var data;
  try {
    var contentType;
    try {
      contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
    } catch (e) {}
    if (contentType === 'application/octet-stream') {
      data = this.xhr.response;
    } else {
      if (!this.supportsBinary) {
        data = this.xhr.responseText;
      } else {
        try {
          data = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
        } catch (e) {
          var ui8Arr = new Uint8Array(this.xhr.response);
          var dataArray = [];
          for (var idx = 0, length = ui8Arr.length; idx < length; idx++) {
            dataArray.push(ui8Arr[idx]);
          }

          data = String.fromCharCode.apply(null, dataArray);
        }
      }
    }
  } catch (e) {
    this.onError(e);
  }
  if (null != data) {
    this.onData(data);
  }
};

/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */

Request.prototype.hasXDR = function(){
  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
};

/**
 * Aborts the request.
 *
 * @api public
 */

Request.prototype.abort = function(){
  this.cleanup();
};

/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */

if (global.document) {
  Request.requestsCount = 0;
  Request.requests = {};
  if (global.attachEvent) {
    global.attachEvent('onunload', unloadHandler);
  } else if (global.addEventListener) {
    global.addEventListener('beforeunload', unloadHandler, false);
  }
}

function unloadHandler() {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"./polling":8,"component-emitter":15,"component-inherit":16,"debug":17,"xmlhttprequest-ssl":10}],8:[function(_dereq_,module,exports){
/**
 * Module dependencies.
 */

var Transport = _dereq_('../transport');
var parseqs = _dereq_('parseqs');
var parser = _dereq_('engine.io-parser');
var inherit = _dereq_('component-inherit');
var yeast = _dereq_('yeast');
var debug = _dereq_('debug')('engine.io-client:polling');

/**
 * Module exports.
 */

module.exports = Polling;

/**
 * Is XHR2 supported?
 */

var hasXHR2 = (function() {
  var XMLHttpRequest = _dereq_('xmlhttprequest-ssl');
  var xhr = new XMLHttpRequest({ xdomain: false });
  return null != xhr.responseType;
})();

/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */

function Polling(opts){
  var forceBase64 = (opts && opts.forceBase64);
  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(Polling, Transport);

/**
 * Transport name.
 */

Polling.prototype.name = 'polling';

/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function(){
  this.poll();
};

/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */

Polling.prototype.pause = function(onPause){
  var pending = 0;
  var self = this;

  this.readyState = 'pausing';

  function pause(){
    debug('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', function(){
        debug('pre-pause polling complete');
        --total || pause();
      });
    }

    if (!this.writable) {
      debug('we are currently writing - waiting to pause');
      total++;
      this.once('drain', function(){
        debug('pre-pause writing complete');
        --total || pause();
      });
    }
  } else {
    pause();
  }
};

/**
 * Starts polling cycle.
 *
 * @api public
 */

Polling.prototype.poll = function(){
  debug('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};

/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */

Polling.prototype.onData = function(data){
  var self = this;
  debug('polling got data %s', data);
  var callback = function(packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' == self.readyState) {
      self.onOpen();
    }

    // if its a close packet, we close the ongoing requests
    if ('close' == packet.type) {
      self.onClose();
      return false;
    }

    // otherwise bypass onData and handle the message
    self.onPacket(packet);
  };

  // decode payload
  parser.decodePayload(data, this.socket.binaryType, callback);

  // if an event did not trigger closing
  if ('closed' != this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' == this.readyState) {
      this.poll();
    } else {
      debug('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};

/**
 * For polling, send a close packet.
 *
 * @api private
 */

Polling.prototype.doClose = function(){
  var self = this;

  function close(){
    debug('writing close packet');
    self.write([{ type: 'close' }]);
  }

  if ('open' == this.readyState) {
    debug('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug('transport not open - deferring close');
    this.once('open', close);
  }
};

/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */

Polling.prototype.write = function(packets){
  var self = this;
  this.writable = false;
  var callbackfn = function() {
    self.writable = true;
    self.emit('drain');
  };

  var self = this;
  parser.encodePayload(packets, this.supportsBinary, function(data) {
    self.doWrite(data, callbackfn);
  });
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

Polling.prototype.uri = function(){
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = '';

  // cache busting is forced
  if (false !== this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // avoid port if default for schema
  if (this.port && (('https' == schema && this.port != 443) ||
     ('http' == schema && this.port != 80))) {
    port = ':' + this.port;
  }

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

},{"../transport":4,"component-inherit":16,"debug":17,"engine.io-parser":19,"parseqs":27,"xmlhttprequest-ssl":10,"yeast":30}],9:[function(_dereq_,module,exports){
(function (global){
/**
 * Module dependencies.
 */

var Transport = _dereq_('../transport');
var parser = _dereq_('engine.io-parser');
var parseqs = _dereq_('parseqs');
var inherit = _dereq_('component-inherit');
var yeast = _dereq_('yeast');
var debug = _dereq_('debug')('engine.io-client:websocket');
var BrowserWebSocket = global.WebSocket || global.MozWebSocket;

/**
 * Get either the `WebSocket` or `MozWebSocket` globals
 * in the browser or try to resolve WebSocket-compatible
 * interface exposed by `ws` for Node-like environment.
 */

var WebSocket = BrowserWebSocket;
if (!WebSocket && typeof window === 'undefined') {
  try {
    WebSocket = _dereq_('ws');
  } catch (e) { }
}

/**
 * Module exports.
 */

module.exports = WS;

/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS(opts){
  var forceBase64 = (opts && opts.forceBase64);
  if (forceBase64) {
    this.supportsBinary = false;
  }
  this.perMessageDeflate = opts.perMessageDeflate;
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(WS, Transport);

/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';

/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;

/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function(){
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var self = this;
  var uri = this.uri();
  var protocols = void(0);
  var opts = {
    agent: this.agent,
    perMessageDeflate: this.perMessageDeflate
  };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  if (this.extraHeaders) {
    opts.headers = this.extraHeaders;
  }

  this.ws = BrowserWebSocket ? new WebSocket(uri) : new WebSocket(uri, protocols, opts);

  if (this.ws.binaryType === undefined) {
    this.supportsBinary = false;
  }

  if (this.ws.supports && this.ws.supports.binary) {
    this.supportsBinary = true;
    this.ws.binaryType = 'buffer';
  } else {
    this.ws.binaryType = 'arraybuffer';
  }

  this.addEventListeners();
};

/**
 * Adds event listeners to the socket
 *
 * @api private
 */

WS.prototype.addEventListeners = function(){
  var self = this;

  this.ws.onopen = function(){
    self.onOpen();
  };
  this.ws.onclose = function(){
    self.onClose();
  };
  this.ws.onmessage = function(ev){
    self.onData(ev.data);
  };
  this.ws.onerror = function(e){
    self.onError('websocket error', e);
  };
};

/**
 * Override `onData` to use a timer on iOS.
 * See: https://gist.github.com/mloughran/2052006
 *
 * @api private
 */

if ('undefined' != typeof navigator
  && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
  WS.prototype.onData = function(data){
    var self = this;
    setTimeout(function(){
      Transport.prototype.onData.call(self, data);
    }, 0);
  };
}

/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */

WS.prototype.write = function(packets){
  var self = this;
  this.writable = false;

  // encodePacket efficient as it uses WS framing
  // no need for encodePayload
  var total = packets.length;
  for (var i = 0, l = total; i < l; i++) {
    (function(packet) {
      parser.encodePacket(packet, self.supportsBinary, function(data) {
        if (!BrowserWebSocket) {
          // always create a new object (GH-437)
          var opts = {};
          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (self.perMessageDeflate) {
            var len = 'string' == typeof data ? global.Buffer.byteLength(data) : data.length;
            if (len < self.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }

        //Sometimes the websocket has already been closed but the browser didn't
        //have a chance of informing us about it yet, in that case send will
        //throw an error
        try {
          if (BrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            self.ws.send(data);
          } else {
            self.ws.send(data, opts);
          }
        } catch (e){
          debug('websocket closed before onclose event');
        }

        --total || done();
      });
    })(packets[i]);
  }

  function done(){
    self.emit('flush');

    // fake drain
    // defer to next tick to allow Socket to clear writeBuffer
    setTimeout(function(){
      self.writable = true;
      self.emit('drain');
    }, 0);
  }
};

/**
 * Called upon close
 *
 * @api private
 */

WS.prototype.onClose = function(){
  Transport.prototype.onClose.call(this);
};

/**
 * Closes socket.
 *
 * @api private
 */

WS.prototype.doClose = function(){
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

WS.prototype.uri = function(){
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = '';

  // avoid port if default for schema
  if (this.port && (('wss' == schema && this.port != 443)
    || ('ws' == schema && this.port != 80))) {
    port = ':' + this.port;
  }

  // append timestamp to URI
  if (this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  // communicate binary support capabilities
  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */

WS.prototype.check = function(){
  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"../transport":4,"component-inherit":16,"debug":17,"engine.io-parser":19,"parseqs":27,"ws":undefined,"yeast":30}],10:[function(_dereq_,module,exports){
// browser shim for xmlhttprequest module
var hasCORS = _dereq_('has-cors');

module.exports = function(opts) {
  var xdomain = opts.xdomain;

  // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
  var xscheme = opts.xscheme;

  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217
  var enablesXDR = opts.enablesXDR;

  // XMLHttpRequest can be disabled on IE
  try {
    if ('undefined' != typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) { }

  // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example
  try {
    if ('undefined' != typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) { }

  if (!xdomain) {
    try {
      return new ActiveXObject('Microsoft.XMLHTTP');
    } catch(e) { }
  }
}

},{"has-cors":22}],11:[function(_dereq_,module,exports){
module.exports = after

function after(count, callback, err_cb) {
    var bail = false
    err_cb = err_cb || noop
    proxy.count = count

    return (count === 0) ? callback() : proxy

    function proxy(err, result) {
        if (proxy.count <= 0) {
            throw new Error('after called too many times')
        }
        --proxy.count

        // after first error, rest are passed to err_cb
        if (err) {
            bail = true
            callback(err)
            // future error callbacks will go to error handler
            callback = err_cb
        } else if (proxy.count === 0 && !bail) {
            callback(null, result)
        }
    }
}

function noop() {}

},{}],12:[function(_dereq_,module,exports){
/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */

module.exports = function(arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

  if (start < 0) { start += bytes; }
  if (end < 0) { end += bytes; }
  if (end > bytes) { end = bytes; }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);
  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }
  return result.buffer;
};

},{}],13:[function(_dereq_,module,exports){
/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function(chars){
  "use strict";

  exports.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
    i, len = bytes.length, base64 = "";

    for (i = 0; i < len; i+=3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode =  function(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = chars.indexOf(base64[i]);
      encoded2 = chars.indexOf(base64[i+1]);
      encoded3 = chars.indexOf(base64[i+2]);
      encoded4 = chars.indexOf(base64[i+3]);

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
  };
})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");

},{}],14:[function(_dereq_,module,exports){
(function (global){
/**
 * Create a blob builder even when vendor prefixes exist
 */

var BlobBuilder = global.BlobBuilder
  || global.WebKitBlobBuilder
  || global.MSBlobBuilder
  || global.MozBlobBuilder;

/**
 * Check if Blob constructor is supported
 */

var blobSupported = (function() {
  try {
    var a = new Blob(['hi']);
    return a.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if Blob constructor supports ArrayBufferViews
 * Fails in Safari 6, so we need to map to ArrayBuffers there.
 */

var blobSupportsArrayBufferView = blobSupported && (function() {
  try {
    var b = new Blob([new Uint8Array([1,2])]);
    return b.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if BlobBuilder is supported
 */

var blobBuilderSupported = BlobBuilder
  && BlobBuilder.prototype.append
  && BlobBuilder.prototype.getBlob;

/**
 * Helper function that maps ArrayBufferViews to ArrayBuffers
 * Used by BlobBuilder constructor and old browsers that didn't
 * support it in the Blob constructor.
 */

function mapArrayBufferViews(ary) {
  for (var i = 0; i < ary.length; i++) {
    var chunk = ary[i];
    if (chunk.buffer instanceof ArrayBuffer) {
      var buf = chunk.buffer;

      // if this is a subarray, make a copy so we only
      // include the subarray region from the underlying buffer
      if (chunk.byteLength !== buf.byteLength) {
        var copy = new Uint8Array(chunk.byteLength);
        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
        buf = copy.buffer;
      }

      ary[i] = buf;
    }
  }
}

function BlobBuilderConstructor(ary, options) {
  options = options || {};

  var bb = new BlobBuilder();
  mapArrayBufferViews(ary);

  for (var i = 0; i < ary.length; i++) {
    bb.append(ary[i]);
  }

  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
};

function BlobConstructor(ary, options) {
  mapArrayBufferViews(ary);
  return new Blob(ary, options || {});
};

module.exports = (function() {
  if (blobSupported) {
    return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
})();

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{}],15:[function(_dereq_,module,exports){

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  var self = this;
  this._callbacks = this._callbacks || {};

  function on() {
    self.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks[event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks[event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],16:[function(_dereq_,module,exports){

module.exports = function(a, b){
  var fn = function(){};
  fn.prototype = b.prototype;
  a.prototype = new fn;
  a.prototype.constructor = a;
};
},{}],17:[function(_dereq_,module,exports){

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = _dereq_('./debug');
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // is webkit? http://stackoverflow.com/a/16459606/376773
  return ('WebkitAppearance' in document.documentElement.style) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (window.console && (console.firebug || (console.exception && console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  return JSON.stringify(v);
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs() {
  var args = arguments;
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return args;

  var c = 'color: ' + this.color;
  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
  return args;
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}
  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage(){
  try {
    return window.localStorage;
  } catch (e) {}
}

},{"./debug":18}],18:[function(_dereq_,module,exports){

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = debug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = _dereq_('ms');

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lowercased letter, i.e. "n".
 */

exports.formatters = {};

/**
 * Previously assigned color.
 */

var prevColor = 0;

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 *
 * @return {Number}
 * @api private
 */

function selectColor() {
  return exports.colors[prevColor++ % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function debug(namespace) {

  // define the `disabled` version
  function disabled() {
  }
  disabled.enabled = false;

  // define the `enabled` version
  function enabled() {

    var self = enabled;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // add the `color` if not set
    if (null == self.useColors) self.useColors = exports.useColors();
    if (null == self.color && self.useColors) self.color = selectColor();

    var args = Array.prototype.slice.call(arguments);

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %o
      args = ['%o'].concat(args);
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    if ('function' === typeof exports.formatArgs) {
      args = exports.formatArgs.apply(self, args);
    }
    var logFn = enabled.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }
  enabled.enabled = true;

  var fn = exports.enabled(namespace) ? enabled : disabled;

  fn.namespace = namespace;

  return fn;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  var split = (namespaces || '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

},{"ms":25}],19:[function(_dereq_,module,exports){
(function (global){
/**
 * Module dependencies.
 */

var keys = _dereq_('./keys');
var hasBinary = _dereq_('has-binary');
var sliceBuffer = _dereq_('arraybuffer.slice');
var base64encoder = _dereq_('base64-arraybuffer');
var after = _dereq_('after');
var utf8 = _dereq_('utf8');

/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */

var isAndroid = navigator.userAgent.match(/Android/i);

/**
 * Check if we are running in PhantomJS.
 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
 * https://github.com/ariya/phantomjs/issues/11395
 * @type boolean
 */
var isPhantomJS = /PhantomJS/i.test(navigator.userAgent);

/**
 * When true, avoids using Blobs to encode payloads.
 * @type boolean
 */
var dontSendBlobs = isAndroid || isPhantomJS;

/**
 * Current protocol version.
 */

exports.protocol = 3;

/**
 * Packet types.
 */

var packets = exports.packets = {
    open:     0    // non-ws
  , close:    1    // non-ws
  , ping:     2
  , pong:     3
  , message:  4
  , upgrade:  5
  , noop:     6
};

var packetslist = keys(packets);

/**
 * Premade error packet.
 */

var err = { type: 'error', data: 'parser error' };

/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = _dereq_('blob');

/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */

exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
  if ('function' == typeof supportsBinary) {
    callback = supportsBinary;
    supportsBinary = false;
  }

  if ('function' == typeof utf8encode) {
    callback = utf8encode;
    utf8encode = null;
  }

  var data = (packet.data === undefined)
    ? undefined
    : packet.data.buffer || packet.data;

  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (Blob && data instanceof global.Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  }

  // might be an object with { base64: true, data: dataAsBase64String }
  if (data && data.base64) {
    return encodeBase64Object(packet, callback);
  }

  // Sending data as a utf-8 string
  var encoded = packets[packet.type];

  // data fragment is optional
  if (undefined !== packet.data) {
    encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
  }

  return callback('' + encoded);

};

function encodeBase64Object(packet, callback) {
  // packet data is an object { base64: true, data: dataAsBase64String }
  var message = 'b' + exports.packets[packet.type] + packet.data.data;
  return callback(message);
}

/**
 * Encode packet helpers for binary types
 */

function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);

  resultBuffer[0] = packets[packet.type];
  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i+1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();
  fr.onload = function() {
    packet.data = fr.result;
    exports.encodePacket(packet, supportsBinary, true, callback);
  };
  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  if (dontSendBlobs) {
    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);

  return callback(blob);
}

/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */

exports.encodeBase64Packet = function(packet, callback) {
  var message = 'b' + exports.packets[packet.type];
  if (Blob && packet.data instanceof global.Blob) {
    var fr = new FileReader();
    fr.onload = function() {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };
    return fr.readAsDataURL(packet.data);
  }

  var b64data;
  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);
    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }
    b64data = String.fromCharCode.apply(null, basic);
  }
  message += global.btoa(b64data);
  return callback(message);
};

/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */

exports.decodePacket = function (data, binaryType, utf8decode) {
  // String data
  if (typeof data == 'string' || data === undefined) {
    if (data.charAt(0) == 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    if (utf8decode) {
      try {
        data = utf8.decode(data);
      } catch (e) {
        return err;
      }
    }
    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return { type: packetslist[type], data: data.substring(1) };
    } else {
      return { type: packetslist[type] };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);
  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }
  return { type: packetslist[type], data: rest };
};

/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */

exports.decodeBase64Packet = function(msg, binaryType) {
  var type = packetslist[msg.charAt(0)];
  if (!global.ArrayBuffer) {
    return { type: type, data: { base64: true, data: msg.substr(1) } };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return { type: type, data: data };
};

/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */

exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary == 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  var isBinary = hasBinary(packets);

  if (supportsBinary && isBinary) {
    if (Blob && !dontSendBlobs) {
      return exports.encodePayloadAsBlob(packets, callback);
    }

    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function(message) {
      doneCallback(null, setLengthHeader(message));
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(results.join(''));
  });
};

/**
 * Async array map using after
 */

function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function(i, el, cb) {
    each(el, function(error, msg) {
      result[i] = msg;
      cb(error, result);
    });
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}

/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */

exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data != 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;
  if (data == '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = ''
    , n, msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (':' != chr) {
      length += chr;
    } else {
      if ('' == length || (length != (n = Number(length)))) {
        // parser error - ignoring payload
        return callback(err, 0, 1);
      }

      msg = data.substr(i + 1, n);

      if (length != msg.length) {
        // parser error - ignoring payload
        return callback(err, 0, 1);
      }

      if (msg.length) {
        packet = exports.decodePacket(msg, binaryType, true);

        if (err.type == packet.type && err.data == packet.data) {
          // parser error in individual packet - ignoring payload
          return callback(err, 0, 1);
        }

        var ret = callback(packet, i + n, l);
        if (false === ret) return;
      }

      // advance cursor
      i += n;
      length = '';
    }
  }

  if (length != '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

};

/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */

exports.encodePayloadAsArrayBuffer = function(packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(data) {
      return doneCallback(null, data);
    });
  }

  map(packets, encodeOne, function(err, encodedPackets) {
    var totalLength = encodedPackets.reduce(function(acc, p) {
      var len;
      if (typeof p === 'string'){
        len = p.length;
      } else {
        len = p.byteLength;
      }
      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }, 0);

    var resultArray = new Uint8Array(totalLength);

    var bufferIndex = 0;
    encodedPackets.forEach(function(p) {
      var isString = typeof p === 'string';
      var ab = p;
      if (isString) {
        var view = new Uint8Array(p.length);
        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }
        ab = view.buffer;
      }

      if (isString) { // not true binary
        resultArray[bufferIndex++] = 0;
      } else { // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();
      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }
      resultArray[bufferIndex++] = 255;

      var view = new Uint8Array(ab);
      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    });

    return callback(resultArray.buffer);
  });
};

/**
 * Encode as Blob
 */

exports.encodePayloadAsBlob = function(packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;
      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);
        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }
        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = (encoded instanceof ArrayBuffer)
        ? encoded.byteLength
        : encoded.size;

      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);
      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }
      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(new Blob(results));
  });
};

/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */

exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  var numberTooLong = false;
  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';

    for (var i = 1; ; i++) {
      if (tailArray[i] == 255) break;

      if (msgLength.length > 310) {
        numberTooLong = true;
        break;
      }

      msgLength += tailArray[i];
    }

    if(numberTooLong) return callback(err, 0, 1);

    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);

    var msg = sliceBuffer(bufferTail, 0, msgLength);
    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        msg = '';
        for (var i = 0; i < typed.length; i++) {
          msg += String.fromCharCode(typed[i]);
        }
      }
    }

    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach(function(buffer, i) {
    callback(exports.decodePacket(buffer, binaryType, true), i, total);
  });
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"./keys":20,"after":11,"arraybuffer.slice":12,"base64-arraybuffer":13,"blob":14,"has-binary":21,"utf8":29}],20:[function(_dereq_,module,exports){

/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */

module.exports = Object.keys || function keys (obj){
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }
  return arr;
};

},{}],21:[function(_dereq_,module,exports){
(function (global){

/*
 * Module requirements.
 */

var isArray = _dereq_('isarray');

/**
 * Module exports.
 */

module.exports = hasBinary;

/**
 * Checks for binary data.
 *
 * Right now only Buffer and ArrayBuffer are supported..
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary(data) {

  function _hasBinary(obj) {
    if (!obj) return false;

    if ( (global.Buffer && global.Buffer.isBuffer(obj)) ||
         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
         (global.Blob && obj instanceof Blob) ||
         (global.File && obj instanceof File)
        ) {
      return true;
    }

    if (isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
          if (_hasBinary(obj[i])) {
              return true;
          }
      }
    } else if (obj && 'object' == typeof obj) {
      if (obj.toJSON) {
        obj = obj.toJSON();
      }

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
          return true;
        }
      }
    }

    return false;
  }

  return _hasBinary(data);
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"isarray":24}],22:[function(_dereq_,module,exports){

/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */

try {
  module.exports = typeof XMLHttpRequest !== 'undefined' &&
    'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}

},{}],23:[function(_dereq_,module,exports){

var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};
},{}],24:[function(_dereq_,module,exports){
module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

},{}],25:[function(_dereq_,module,exports){
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} options
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options){
  options = options || {};
  if ('string' == typeof val) return parse(val);
  return options.long
    ? long(val)
    : short(val);
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = '' + str;
  if (str.length > 10000) return;
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
  if (!match) return;
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function short(ms) {
  if (ms >= d) return Math.round(ms / d) + 'd';
  if (ms >= h) return Math.round(ms / h) + 'h';
  if (ms >= m) return Math.round(ms / m) + 'm';
  if (ms >= s) return Math.round(ms / s) + 's';
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function long(ms) {
  return plural(ms, d, 'day')
    || plural(ms, h, 'hour')
    || plural(ms, m, 'minute')
    || plural(ms, s, 'second')
    || ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) return;
  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
  return Math.ceil(ms / n) + ' ' + name + 's';
}

},{}],26:[function(_dereq_,module,exports){
(function (global){
/**
 * JSON parse.
 *
 * @see Based on jQuery#parseJSON (MIT) and JSON2
 * @api private
 */

var rvalidchars = /^[\],:{}\s]*$/;
var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
var rtrimLeft = /^\s+/;
var rtrimRight = /\s+$/;

module.exports = function parsejson(data) {
  if ('string' != typeof data || !data) {
    return null;
  }

  data = data.replace(rtrimLeft, '').replace(rtrimRight, '');

  // Attempt to parse using the native JSON parser first
  if (global.JSON && JSON.parse) {
    return JSON.parse(data);
  }

  if (rvalidchars.test(data.replace(rvalidescape, '@')
      .replace(rvalidtokens, ']')
      .replace(rvalidbraces, ''))) {
    return (new Function('return ' + data))();
  }
};
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{}],27:[function(_dereq_,module,exports){
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */

exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};

/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

exports.decode = function(qs){
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
};

},{}],28:[function(_dereq_,module,exports){
/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
        uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }

    return uri;
};

},{}],29:[function(_dereq_,module,exports){
(function (global){
;(function(root) {

	var freeExports = typeof exports == 'object' && exports;

	// Detect free variable `module`
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var stringFromCharCode = String.fromCharCode;

	// Taken from https://mths.be/punycode
	function ucs2decode(string) {
		var output = [];
		var counter = 0;
		var length = string.length;
		var value;
		var extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	// Taken from https://mths.be/punycode
	function ucs2encode(array) {
		var length = array.length;
		var index = -1;
		var value;
		var output = '';
		while (++index < length) {
			value = array[index];
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
		}
		return output;
	}

	function checkScalarValue(codePoint) {
		if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
			throw Error(
				'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
				' is not a scalar value'
			);
		}
	}
	/*--------------------------------------------------------------------------*/

	function createByte(codePoint, shift) {
		return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
	}

	function encodeCodePoint(codePoint) {
		if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
			return stringFromCharCode(codePoint);
		}
		var symbol = '';
		if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
			symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
		}
		else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
			checkScalarValue(codePoint);
			symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
			symbol += createByte(codePoint, 6);
		}
		else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
			symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
			symbol += createByte(codePoint, 12);
			symbol += createByte(codePoint, 6);
		}
		symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
		return symbol;
	}

	function utf8encode(string) {
		var codePoints = ucs2decode(string);
		var length = codePoints.length;
		var index = -1;
		var codePoint;
		var byteString = '';
		while (++index < length) {
			codePoint = codePoints[index];
			byteString += encodeCodePoint(codePoint);
		}
		return byteString;
	}

	/*--------------------------------------------------------------------------*/

	function readContinuationByte() {
		if (byteIndex >= byteCount) {
			throw Error('Invalid byte index');
		}

		var continuationByte = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		if ((continuationByte & 0xC0) == 0x80) {
			return continuationByte & 0x3F;
		}

		// If we end up here, it’s not a continuation byte
		throw Error('Invalid continuation byte');
	}

	function decodeSymbol() {
		var byte1;
		var byte2;
		var byte3;
		var byte4;
		var codePoint;

		if (byteIndex > byteCount) {
			throw Error('Invalid byte index');
		}

		if (byteIndex == byteCount) {
			return false;
		}

		// Read first byte
		byte1 = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		// 1-byte sequence (no continuation bytes)
		if ((byte1 & 0x80) == 0) {
			return byte1;
		}

		// 2-byte sequence
		if ((byte1 & 0xE0) == 0xC0) {
			var byte2 = readContinuationByte();
			codePoint = ((byte1 & 0x1F) << 6) | byte2;
			if (codePoint >= 0x80) {
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 3-byte sequence (may include unpaired surrogates)
		if ((byte1 & 0xF0) == 0xE0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
			if (codePoint >= 0x0800) {
				checkScalarValue(codePoint);
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 4-byte sequence
		if ((byte1 & 0xF8) == 0xF0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			byte4 = readContinuationByte();
			codePoint = ((byte1 & 0x0F) << 0x12) | (byte2 << 0x0C) |
				(byte3 << 0x06) | byte4;
			if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
				return codePoint;
			}
		}

		throw Error('Invalid UTF-8 detected');
	}

	var byteArray;
	var byteCount;
	var byteIndex;
	function utf8decode(byteString) {
		byteArray = ucs2decode(byteString);
		byteCount = byteArray.length;
		byteIndex = 0;
		var codePoints = [];
		var tmp;
		while ((tmp = decodeSymbol()) !== false) {
			codePoints.push(tmp);
		}
		return ucs2encode(codePoints);
	}

	/*--------------------------------------------------------------------------*/

	var utf8 = {
		'version': '2.0.0',
		'encode': utf8encode,
		'decode': utf8decode
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define(function() {
			return utf8;
		});
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = utf8;
		} else { // in Narwhal or RingoJS v0.7.0-
			var object = {};
			var hasOwnProperty = object.hasOwnProperty;
			for (var key in utf8) {
				hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.utf8 = utf8;
	}

}(this));

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{}],30:[function(_dereq_,module,exports){
'use strict';

var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
  , length = 64
  , map = {}
  , seed = 0
  , i = 0
  , prev;

/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}

/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}

/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
  var now = encode(+new Date());

  if (now !== prev) return seed = 0, prev = now;
  return now +'.'+ encode(seed++);
}

//
// Map each character to its index.
//
for (; i < length; i++) map[alphabet[i]] = i;

//
// Expose the `yeast`, `encode` and `decode` functions.
//
yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;

},{}],31:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var url = _dereq_('./url');
var parser = _dereq_('socket.io-parser');
var Manager = _dereq_('./manager');
var debug = _dereq_('debug')('socket.io-client');

/**
 * Module exports.
 */

module.exports = exports = lookup;

/**
 * Managers cache.
 */

var cache = exports.managers = {};

/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */

function lookup(uri, opts) {
  if (typeof uri == 'object') {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};

  var parsed = url(uri);
  var source = parsed.source;
  var id = parsed.id;
  var path = parsed.path;
  var sameNamespace = cache[id] && path in cache[id].nsps;
  var newConnection = opts.forceNew || opts['force new connection'] ||
                      false === opts.multiplex || sameNamespace;

  var io;

  if (newConnection) {
    debug('ignoring socket cache for %s', source);
    io = Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug('new io instance for %s', source);
      cache[id] = Manager(source, opts);
    }
    io = cache[id];
  }

  return io.socket(parsed.path);
}

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = parser.protocol;

/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */

exports.connect = lookup;

/**
 * Expose constructors for standalone build.
 *
 * @api public
 */

exports.Manager = _dereq_('./manager');
exports.Socket = _dereq_('./socket');

},{"./manager":32,"./socket":34,"./url":35,"debug":39,"socket.io-parser":47}],32:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var eio = _dereq_('engine.io-client');
var Socket = _dereq_('./socket');
var Emitter = _dereq_('component-emitter');
var parser = _dereq_('socket.io-parser');
var on = _dereq_('./on');
var bind = _dereq_('component-bind');
var debug = _dereq_('debug')('socket.io-client:manager');
var indexOf = _dereq_('indexof');
var Backoff = _dereq_('backo2');

/**
 * IE6+ hasOwnProperty
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Module exports
 */

module.exports = Manager;

/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager(uri, opts){
  if (!(this instanceof Manager)) return new Manager(uri, opts);
  if (uri && ('object' == typeof uri)) {
    opts = uri;
    uri = undefined;
  }
  opts = opts || {};

  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.randomizationFactor(opts.randomizationFactor || 0.5);
  this.backoff = new Backoff({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
  });
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connecting = [];
  this.lastPing = null;
  this.encoding = false;
  this.packetBuffer = [];
  this.encoder = new parser.Encoder();
  this.decoder = new parser.Decoder();
  this.autoConnect = opts.autoConnect !== false;
  if (this.autoConnect) this.open();
}

/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */

Manager.prototype.emitAll = function() {
  this.emit.apply(this, arguments);
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
    }
  }
};

/**
 * Update `socket.id` of all sockets
 *
 * @api private
 */

Manager.prototype.updateSocketIds = function(){
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].id = this.engine.id;
    }
  }
};

/**
 * Mix in `Emitter`.
 */

Emitter(Manager.prototype);

/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function(v){
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};

/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionAttempts = function(v){
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};

/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelay = function(v){
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  this.backoff && this.backoff.setMin(v);
  return this;
};

Manager.prototype.randomizationFactor = function(v){
  if (!arguments.length) return this._randomizationFactor;
  this._randomizationFactor = v;
  this.backoff && this.backoff.setJitter(v);
  return this;
};

/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelayMax = function(v){
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  this.backoff && this.backoff.setMax(v);
  return this;
};

/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.timeout = function(v){
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};

/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */

Manager.prototype.maybeReconnectOnOpen = function() {
  // Only try to reconnect if it's the first time we're connecting
  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.reconnect();
  }
};


/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */

Manager.prototype.open =
Manager.prototype.connect = function(fn){
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;

  debug('opening %s', this.uri);
  this.engine = eio(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';
  this.skipReconnect = false;

  // emit `open`
  var openSub = on(socket, 'open', function() {
    self.onopen();
    fn && fn();
  });

  // emit `connect_error`
  var errorSub = on(socket, 'error', function(data){
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emitAll('connect_error', data);
    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    } else {
      // Only do this if there is no fn to handle the error
      self.maybeReconnectOnOpen();
    }
  });

  // emit `connect_timeout`
  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout);

    // set timer
    var timer = setTimeout(function(){
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emitAll('connect_timeout', timeout);
    }, timeout);

    this.subs.push({
      destroy: function(){
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);

  return this;
};

/**
 * Called upon transport open.
 *
 * @api private
 */

Manager.prototype.onopen = function(){
  debug('open');

  // clear old subs
  this.cleanup();

  // mark as open
  this.readyState = 'open';
  this.emit('open');

  // add new subs
  var socket = this.engine;
  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
};

/**
 * Called upon a ping.
 *
 * @api private
 */

Manager.prototype.onping = function(){
  this.lastPing = new Date;
  this.emitAll('ping');
};

/**
 * Called upon a packet.
 *
 * @api private
 */

Manager.prototype.onpong = function(){
  this.emitAll('pong', new Date - this.lastPing);
};

/**
 * Called with data.
 *
 * @api private
 */

Manager.prototype.ondata = function(data){
  this.decoder.add(data);
};

/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */

Manager.prototype.ondecoded = function(packet) {
  this.emit('packet', packet);
};

/**
 * Called upon socket error.
 *
 * @api private
 */

Manager.prototype.onerror = function(err){
  debug('error', err);
  this.emitAll('error', err);
};

/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */

Manager.prototype.socket = function(nsp){
  var socket = this.nsps[nsp];
  if (!socket) {
    socket = new Socket(this, nsp);
    this.nsps[nsp] = socket;
    var self = this;
    socket.on('connecting', onConnecting);
    socket.on('connect', function(){
      socket.id = self.engine.id;
    });

    if (this.autoConnect) {
      // manually call here since connecting evnet is fired before listening
      onConnecting();
    }
  }

  function onConnecting() {
    if (!~indexOf(self.connecting, socket)) {
      self.connecting.push(socket);
    }
  }

  return socket;
};

/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */

Manager.prototype.destroy = function(socket){
  var index = indexOf(this.connecting, socket);
  if (~index) this.connecting.splice(index, 1);
  if (this.connecting.length) return;

  this.close();
};

/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */

Manager.prototype.packet = function(packet){
  debug('writing packet %j', packet);
  var self = this;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, function(encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i], packet.options);
      }
      self.encoding = false;
      self.processPacketQueue();
    });
  } else { // add packet to the queue
    self.packetBuffer.push(packet);
  }
};

/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */

Manager.prototype.processPacketQueue = function() {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};

/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */

Manager.prototype.cleanup = function(){
  debug('cleanup');

  var sub;
  while (sub = this.subs.shift()) sub.destroy();

  this.packetBuffer = [];
  this.encoding = false;
  this.lastPing = null;

  this.decoder.destroy();
};

/**
 * Close the current socket.
 *
 * @api private
 */

Manager.prototype.close =
Manager.prototype.disconnect = function(){
  debug('disconnect');
  this.skipReconnect = true;
  this.reconnecting = false;
  if ('opening' == this.readyState) {
    // `onclose` will not fire because
    // an open event never happened
    this.cleanup();
  }
  this.backoff.reset();
  this.readyState = 'closed';
  if (this.engine) this.engine.close();
};

/**
 * Called upon engine close.
 *
 * @api private
 */

Manager.prototype.onclose = function(reason){
  debug('onclose');

  this.cleanup();
  this.backoff.reset();
  this.readyState = 'closed';
  this.emit('close', reason);

  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};

/**
 * Attempt a reconnection.
 *
 * @api private
 */

Manager.prototype.reconnect = function(){
  if (this.reconnecting || this.skipReconnect) return this;

  var self = this;

  if (this.backoff.attempts >= this._reconnectionAttempts) {
    debug('reconnect failed');
    this.backoff.reset();
    this.emitAll('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.backoff.duration();
    debug('will wait %dms before reconnect attempt', delay);

    this.reconnecting = true;
    var timer = setTimeout(function(){
      if (self.skipReconnect) return;

      debug('attempting reconnect');
      self.emitAll('reconnect_attempt', self.backoff.attempts);
      self.emitAll('reconnecting', self.backoff.attempts);

      // check again for the case socket closed in above events
      if (self.skipReconnect) return;

      self.open(function(err){
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emitAll('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      });
    }, delay);

    this.subs.push({
      destroy: function(){
        clearTimeout(timer);
      }
    });
  }
};

/**
 * Called upon successful reconnect.
 *
 * @api private
 */

Manager.prototype.onreconnect = function(){
  var attempt = this.backoff.attempts;
  this.reconnecting = false;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll('reconnect', attempt);
};

},{"./on":33,"./socket":34,"backo2":36,"component-bind":37,"component-emitter":38,"debug":39,"engine.io-client":1,"indexof":42,"socket.io-parser":47}],33:[function(_dereq_,module,exports){

/**
 * Module exports.
 */

module.exports = on;

/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on(obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function(){
      obj.removeListener(ev, fn);
    }
  };
}

},{}],34:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var parser = _dereq_('socket.io-parser');
var Emitter = _dereq_('component-emitter');
var toArray = _dereq_('to-array');
var on = _dereq_('./on');
var bind = _dereq_('component-bind');
var debug = _dereq_('debug')('socket.io-client:socket');
var hasBin = _dereq_('has-binary');

/**
 * Module exports.
 */

module.exports = exports = Socket;

/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  connecting: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1,
  ping: 1,
  pong: 1
};

/**
 * Shortcut to `Emitter#emit`.
 */

var emit = Emitter.prototype.emit;

/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket(io, nsp){
  this.io = io;
  this.nsp = nsp;
  this.json = this; // compat
  this.ids = 0;
  this.acks = {};
  this.receiveBuffer = [];
  this.sendBuffer = [];
  this.connected = false;
  this.disconnected = true;
  if (this.io.autoConnect) this.open();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */

Socket.prototype.subEvents = function() {
  if (this.subs) return;

  var io = this.io;
  this.subs = [
    on(io, 'open', bind(this, 'onopen')),
    on(io, 'packet', bind(this, 'onpacket')),
    on(io, 'close', bind(this, 'onclose'))
  ];
};

/**
 * "Opens" the socket.
 *
 * @api public
 */

Socket.prototype.open =
Socket.prototype.connect = function(){
  if (this.connected) return this;

  this.subEvents();
  this.io.open(); // ensure open
  if ('open' == this.io.readyState) this.onopen();
  this.emit('connecting');
  return this;
};

/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.send = function(){
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
};

/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */

Socket.prototype.emit = function(ev){
  if (events.hasOwnProperty(ev)) {
    emit.apply(this, arguments);
    return this;
  }

  var args = toArray(arguments);
  var parserType = parser.EVENT; // default
  if (hasBin(args)) { parserType = parser.BINARY_EVENT; } // binary
  var packet = { type: parserType, data: args };

  packet.options = {};
  packet.options.compress = !this.flags || false !== this.flags.compress;

  // event ack callback
  if ('function' == typeof args[args.length - 1]) {
    debug('emitting packet with ack id %d', this.ids);
    this.acks[this.ids] = args.pop();
    packet.id = this.ids++;
  }

  if (this.connected) {
    this.packet(packet);
  } else {
    this.sendBuffer.push(packet);
  }

  delete this.flags;

  return this;
};

/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.packet = function(packet){
  packet.nsp = this.nsp;
  this.io.packet(packet);
};

/**
 * Called upon engine `open`.
 *
 * @api private
 */

Socket.prototype.onopen = function(){
  debug('transport is open - connecting');

  // write connect packet if necessary
  if ('/' != this.nsp) {
    this.packet({ type: parser.CONNECT });
  }
};

/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */

Socket.prototype.onclose = function(reason){
  debug('close (%s)', reason);
  this.connected = false;
  this.disconnected = true;
  delete this.id;
  this.emit('disconnect', reason);
};

/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onpacket = function(packet){
  if (packet.nsp != this.nsp) return;

  switch (packet.type) {
    case parser.CONNECT:
      this.onconnect();
      break;

    case parser.EVENT:
      this.onevent(packet);
      break;

    case parser.BINARY_EVENT:
      this.onevent(packet);
      break;

    case parser.ACK:
      this.onack(packet);
      break;

    case parser.BINARY_ACK:
      this.onack(packet);
      break;

    case parser.DISCONNECT:
      this.ondisconnect();
      break;

    case parser.ERROR:
      this.emit('error', packet.data);
      break;
  }
};

/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onevent = function(packet){
  var args = packet.data || [];
  debug('emitting event %j', args);

  if (null != packet.id) {
    debug('attaching ack callback to event');
    args.push(this.ack(packet.id));
  }

  if (this.connected) {
    emit.apply(this, args);
  } else {
    this.receiveBuffer.push(args);
  }
};

/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */

Socket.prototype.ack = function(id){
  var self = this;
  var sent = false;
  return function(){
    // prevent double callbacks
    if (sent) return;
    sent = true;
    var args = toArray(arguments);
    debug('sending ack %j', args);

    var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
    self.packet({
      type: type,
      id: id,
      data: args
    });
  };
};

/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onack = function(packet){
  var ack = this.acks[packet.id];
  if ('function' == typeof ack) {
    debug('calling ack %s with %j', packet.id, packet.data);
    ack.apply(this, packet.data);
    delete this.acks[packet.id];
  } else {
    debug('bad ack %s', packet.id);
  }
};

/**
 * Called upon server connect.
 *
 * @api private
 */

Socket.prototype.onconnect = function(){
  this.connected = true;
  this.disconnected = false;
  this.emit('connect');
  this.emitBuffered();
};

/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */

Socket.prototype.emitBuffered = function(){
  var i;
  for (i = 0; i < this.receiveBuffer.length; i++) {
    emit.apply(this, this.receiveBuffer[i]);
  }
  this.receiveBuffer = [];

  for (i = 0; i < this.sendBuffer.length; i++) {
    this.packet(this.sendBuffer[i]);
  }
  this.sendBuffer = [];
};

/**
 * Called upon server disconnect.
 *
 * @api private
 */

Socket.prototype.ondisconnect = function(){
  debug('server disconnect (%s)', this.nsp);
  this.destroy();
  this.onclose('io server disconnect');
};

/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */

Socket.prototype.destroy = function(){
  if (this.subs) {
    // clean subscriptions to avoid reconnections
    for (var i = 0; i < this.subs.length; i++) {
      this.subs[i].destroy();
    }
    this.subs = null;
  }

  this.io.destroy(this);
};

/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.close =
Socket.prototype.disconnect = function(){
  if (this.connected) {
    debug('performing disconnect (%s)', this.nsp);
    this.packet({ type: parser.DISCONNECT });
  }

  // remove socket from pool
  this.destroy();

  if (this.connected) {
    // fire events
    this.onclose('io client disconnect');
  }
  return this;
};

/**
 * Sets the compress flag.
 *
 * @param {Boolean} if `true`, compresses the sending data
 * @return {Socket} self
 * @api public
 */

Socket.prototype.compress = function(compress){
  this.flags = this.flags || {};
  this.flags.compress = compress;
  return this;
};

},{"./on":33,"component-bind":37,"component-emitter":38,"debug":39,"has-binary":41,"socket.io-parser":47,"to-array":51}],35:[function(_dereq_,module,exports){
(function (global){

/**
 * Module dependencies.
 */

var parseuri = _dereq_('parseuri');
var debug = _dereq_('debug')('socket.io-client:url');

/**
 * Module exports.
 */

module.exports = url;

/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url(uri, loc){
  var obj = uri;

  // default to window.location
  var loc = loc || global.location;
  if (null == uri) uri = loc.protocol + '//' + loc.host;

  // relative path support
  if ('string' == typeof uri) {
    if ('/' == uri.charAt(0)) {
      if ('/' == uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug('protocol-less url %s', uri);
      if ('undefined' != typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    }

    // parse
    debug('parse %s', uri);
    obj = parseuri(uri);
  }

  // make sure we treat `localhost:80` and `localhost` equally
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = '80';
    }
    else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = '443';
    }
  }

  obj.path = obj.path || '/';

  var ipv6 = obj.host.indexOf(':') !== -1;
  var host = ipv6 ? '[' + obj.host + ']' : obj.host;

  // define unique id
  obj.id = obj.protocol + '://' + host + ':' + obj.port;
  // define href
  obj.href = obj.protocol + '://' + host + (loc && loc.port == obj.port ? '' : (':' + obj.port));

  return obj;
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"debug":39,"parseuri":45}],36:[function(_dereq_,module,exports){

/**
 * Expose `Backoff`.
 */

module.exports = Backoff;

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}

/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */

Backoff.prototype.duration = function(){
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand =  Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};

/**
 * Reset the number of attempts.
 *
 * @api public
 */

Backoff.prototype.reset = function(){
  this.attempts = 0;
};

/**
 * Set the minimum duration
 *
 * @api public
 */

Backoff.prototype.setMin = function(min){
  this.ms = min;
};

/**
 * Set the maximum duration
 *
 * @api public
 */

Backoff.prototype.setMax = function(max){
  this.max = max;
};

/**
 * Set the jitter
 *
 * @api public
 */

Backoff.prototype.setJitter = function(jitter){
  this.jitter = jitter;
};


},{}],37:[function(_dereq_,module,exports){
/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function(obj, fn){
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function(){
    return fn.apply(obj, args.concat(slice.call(arguments)));
  }
};

},{}],38:[function(_dereq_,module,exports){

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],39:[function(_dereq_,module,exports){
arguments[4][17][0].apply(exports,arguments)
},{"./debug":40,"dup":17}],40:[function(_dereq_,module,exports){
arguments[4][18][0].apply(exports,arguments)
},{"dup":18,"ms":44}],41:[function(_dereq_,module,exports){
(function (global){

/*
 * Module requirements.
 */

var isArray = _dereq_('isarray');

/**
 * Module exports.
 */

module.exports = hasBinary;

/**
 * Checks for binary data.
 *
 * Right now only Buffer and ArrayBuffer are supported..
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary(data) {

  function _hasBinary(obj) {
    if (!obj) return false;

    if ( (global.Buffer && global.Buffer.isBuffer && global.Buffer.isBuffer(obj)) ||
         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
         (global.Blob && obj instanceof Blob) ||
         (global.File && obj instanceof File)
        ) {
      return true;
    }

    if (isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
          if (_hasBinary(obj[i])) {
              return true;
          }
      }
    } else if (obj && 'object' == typeof obj) {
      // see: https://github.com/Automattic/has-binary/pull/4
      if (obj.toJSON && 'function' == typeof obj.toJSON) {
        obj = obj.toJSON();
      }

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
          return true;
        }
      }
    }

    return false;
  }

  return _hasBinary(data);
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"isarray":43}],42:[function(_dereq_,module,exports){
arguments[4][23][0].apply(exports,arguments)
},{"dup":23}],43:[function(_dereq_,module,exports){
arguments[4][24][0].apply(exports,arguments)
},{"dup":24}],44:[function(_dereq_,module,exports){
arguments[4][25][0].apply(exports,arguments)
},{"dup":25}],45:[function(_dereq_,module,exports){
arguments[4][28][0].apply(exports,arguments)
},{"dup":28}],46:[function(_dereq_,module,exports){
(function (global){
/*global Blob,File*/

/**
 * Module requirements
 */

var isArray = _dereq_('isarray');
var isBuf = _dereq_('./is-buffer');

/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

exports.deconstructPacket = function(packet){
  var buffers = [];
  var packetData = packet.data;

  function _deconstructPacket(data) {
    if (!data) return data;

    if (isBuf(data)) {
      var placeholder = { _placeholder: true, num: buffers.length };
      buffers.push(data);
      return placeholder;
    } else if (isArray(data)) {
      var newData = new Array(data.length);
      for (var i = 0; i < data.length; i++) {
        newData[i] = _deconstructPacket(data[i]);
      }
      return newData;
    } else if ('object' == typeof data && !(data instanceof Date)) {
      var newData = {};
      for (var key in data) {
        newData[key] = _deconstructPacket(data[key]);
      }
      return newData;
    }
    return data;
  }

  var pack = packet;
  pack.data = _deconstructPacket(packetData);
  pack.attachments = buffers.length; // number of binary 'attachments'
  return {packet: pack, buffers: buffers};
};

/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */

exports.reconstructPacket = function(packet, buffers) {
  var curPlaceHolder = 0;

  function _reconstructPacket(data) {
    if (data && data._placeholder) {
      var buf = buffers[data.num]; // appropriate buffer (should be natural order anyway)
      return buf;
    } else if (isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        data[i] = _reconstructPacket(data[i]);
      }
      return data;
    } else if (data && 'object' == typeof data) {
      for (var key in data) {
        data[key] = _reconstructPacket(data[key]);
      }
      return data;
    }
    return data;
  }

  packet.data = _reconstructPacket(packet.data);
  packet.attachments = undefined; // no longer useful
  return packet;
};

/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */

exports.removeBlobs = function(data, callback) {
  function _removeBlobs(obj, curKey, containingObject) {
    if (!obj) return obj;

    // convert any blob
    if ((global.Blob && obj instanceof Blob) ||
        (global.File && obj instanceof File)) {
      pendingBlobs++;

      // async filereader
      var fileReader = new FileReader();
      fileReader.onload = function() { // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        }
        else {
          bloblessData = this.result;
        }

        // if nothing pending its callback time
        if(! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    } else if (isArray(obj)) { // handle array
      for (var i = 0; i < obj.length; i++) {
        _removeBlobs(obj[i], i, obj);
      }
    } else if (obj && 'object' == typeof obj && !isBuf(obj)) { // and object
      for (var key in obj) {
        _removeBlobs(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;
  _removeBlobs(bloblessData);
  if (!pendingBlobs) {
    callback(bloblessData);
  }
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"./is-buffer":48,"isarray":43}],47:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var debug = _dereq_('debug')('socket.io-parser');
var json = _dereq_('json3');
var isArray = _dereq_('isarray');
var Emitter = _dereq_('component-emitter');
var binary = _dereq_('./binary');
var isBuf = _dereq_('./is-buffer');

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = 4;

/**
 * Packet types.
 *
 * @api public
 */

exports.types = [
  'CONNECT',
  'DISCONNECT',
  'EVENT',
  'ACK',
  'ERROR',
  'BINARY_EVENT',
  'BINARY_ACK'
];

/**
 * Packet type `connect`.
 *
 * @api public
 */

exports.CONNECT = 0;

/**
 * Packet type `disconnect`.
 *
 * @api public
 */

exports.DISCONNECT = 1;

/**
 * Packet type `event`.
 *
 * @api public
 */

exports.EVENT = 2;

/**
 * Packet type `ack`.
 *
 * @api public
 */

exports.ACK = 3;

/**
 * Packet type `error`.
 *
 * @api public
 */

exports.ERROR = 4;

/**
 * Packet type 'binary event'
 *
 * @api public
 */

exports.BINARY_EVENT = 5;

/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */

exports.BINARY_ACK = 6;

/**
 * Encoder constructor.
 *
 * @api public
 */

exports.Encoder = Encoder;

/**
 * Decoder constructor.
 *
 * @api public
 */

exports.Decoder = Decoder;

/**
 * A socket.io Encoder instance
 *
 * @api public
 */

function Encoder() {}

/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */

Encoder.prototype.encode = function(obj, callback){
  debug('encoding packet %j', obj);

  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
    encodeAsBinary(obj, callback);
  }
  else {
    var encoding = encodeAsString(obj);
    callback([encoding]);
  }
};

/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */

function encodeAsString(obj) {
  var str = '';
  var nsp = false;

  // first is type
  str += obj.type;

  // attachments if we have them
  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
    str += obj.attachments;
    str += '-';
  }

  // if we have a namespace other than `/`
  // we append it followed by a comma `,`
  if (obj.nsp && '/' != obj.nsp) {
    nsp = true;
    str += obj.nsp;
  }

  // immediately followed by the id
  if (null != obj.id) {
    if (nsp) {
      str += ',';
      nsp = false;
    }
    str += obj.id;
  }

  // json data
  if (null != obj.data) {
    if (nsp) str += ',';
    str += json.stringify(obj.data);
  }

  debug('encoded %j as %s', obj, str);
  return str;
}

/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */

function encodeAsBinary(obj, callback) {

  function writeEncoding(bloblessData) {
    var deconstruction = binary.deconstructPacket(bloblessData);
    var pack = encodeAsString(deconstruction.packet);
    var buffers = deconstruction.buffers;

    buffers.unshift(pack); // add packet info to beginning of data list
    callback(buffers); // write all the buffers
  }

  binary.removeBlobs(obj, writeEncoding);
}

/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */

function Decoder() {
  this.reconstructor = null;
}

/**
 * Mix in `Emitter` with Decoder.
 */

Emitter(Decoder.prototype);

/**
 * Decodes an ecoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function(obj) {
  var packet;
  if ('string' == typeof obj) {
    packet = decodeString(obj);
    if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) { // binary packet's json
      this.reconstructor = new BinaryReconstructor(packet);

      // no attachments, labeled binary but no binary data to follow
      if (this.reconstructor.reconPack.attachments === 0) {
        this.emit('decoded', packet);
      }
    } else { // non-binary full packet
      this.emit('decoded', packet);
    }
  }
  else if (isBuf(obj) || obj.base64) { // raw binary data
    if (!this.reconstructor) {
      throw new Error('got binary data when not reconstructing a packet');
    } else {
      packet = this.reconstructor.takeBinaryData(obj);
      if (packet) { // received final buffer
        this.reconstructor = null;
        this.emit('decoded', packet);
      }
    }
  }
  else {
    throw new Error('Unknown type: ' + obj);
  }
};

/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */

function decodeString(str) {
  var p = {};
  var i = 0;

  // look up type
  p.type = Number(str.charAt(0));
  if (null == exports.types[p.type]) return error();

  // look up attachments if type binary
  if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
    var buf = '';
    while (str.charAt(++i) != '-') {
      buf += str.charAt(i);
      if (i == str.length) break;
    }
    if (buf != Number(buf) || str.charAt(i) != '-') {
      throw new Error('Illegal attachments');
    }
    p.attachments = Number(buf);
  }

  // look up namespace (if any)
  if ('/' == str.charAt(i + 1)) {
    p.nsp = '';
    while (++i) {
      var c = str.charAt(i);
      if (',' == c) break;
      p.nsp += c;
      if (i == str.length) break;
    }
  } else {
    p.nsp = '/';
  }

  // look up id
  var next = str.charAt(i + 1);
  if ('' !== next && Number(next) == next) {
    p.id = '';
    while (++i) {
      var c = str.charAt(i);
      if (null == c || Number(c) != c) {
        --i;
        break;
      }
      p.id += str.charAt(i);
      if (i == str.length) break;
    }
    p.id = Number(p.id);
  }

  // look up json data
  if (str.charAt(++i)) {
    try {
      p.data = json.parse(str.substr(i));
    } catch(e){
      return error();
    }
  }

  debug('decoded %s as %j', str, p);
  return p;
}

/**
 * Deallocates a parser's resources
 *
 * @api public
 */

Decoder.prototype.destroy = function() {
  if (this.reconstructor) {
    this.reconstructor.finishedReconstruction();
  }
};

/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */

function BinaryReconstructor(packet) {
  this.reconPack = packet;
  this.buffers = [];
}

/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */

BinaryReconstructor.prototype.takeBinaryData = function(binData) {
  this.buffers.push(binData);
  if (this.buffers.length == this.reconPack.attachments) { // done with buffer list
    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
    this.finishedReconstruction();
    return packet;
  }
  return null;
};

/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */

BinaryReconstructor.prototype.finishedReconstruction = function() {
  this.reconPack = null;
  this.buffers = [];
};

function error(data){
  return {
    type: exports.ERROR,
    data: 'parser error'
  };
}

},{"./binary":46,"./is-buffer":48,"component-emitter":49,"debug":39,"isarray":43,"json3":50}],48:[function(_dereq_,module,exports){
(function (global){

module.exports = isBuf;

/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */

function isBuf(obj) {
  return (global.Buffer && global.Buffer.isBuffer(obj)) ||
         (global.ArrayBuffer && obj instanceof ArrayBuffer);
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{}],49:[function(_dereq_,module,exports){
arguments[4][15][0].apply(exports,arguments)
},{"dup":15}],50:[function(_dereq_,module,exports){
(function (global){
/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
;(function () {
  // Detect the `define` function exposed by asynchronous module loaders. The
  // strict `define` check is necessary for compatibility with `r.js`.
  var isLoader = typeof define === "function" && define.amd;

  // A set of types used to distinguish objects from primitives.
  var objectTypes = {
    "function": true,
    "object": true
  };

  // Detect the `exports` object exposed by CommonJS implementations.
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

  // Use the `global` object exposed by Node (including Browserify via
  // `insert-module-globals`), Narwhal, and Ringo as the default context,
  // and the `window` object in browsers. Rhino exports a `global` function
  // instead.
  var root = objectTypes[typeof window] && window || this,
      freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;

  if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
    root = freeGlobal;
  }

  // Public: Initializes JSON 3 using the given `context` object, attaching the
  // `stringify` and `parse` functions to the specified `exports` object.
  function runInContext(context, exports) {
    context || (context = root["Object"]());
    exports || (exports = root["Object"]());

    // Native constructor aliases.
    var Number = context["Number"] || root["Number"],
        String = context["String"] || root["String"],
        Object = context["Object"] || root["Object"],
        Date = context["Date"] || root["Date"],
        SyntaxError = context["SyntaxError"] || root["SyntaxError"],
        TypeError = context["TypeError"] || root["TypeError"],
        Math = context["Math"] || root["Math"],
        nativeJSON = context["JSON"] || root["JSON"];

    // Delegate to the native `stringify` and `parse` implementations.
    if (typeof nativeJSON == "object" && nativeJSON) {
      exports.stringify = nativeJSON.stringify;
      exports.parse = nativeJSON.parse;
    }

    // Convenience aliases.
    var objectProto = Object.prototype,
        getClass = objectProto.toString,
        isProperty, forEach, undef;

    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
    var isExtended = new Date(-3509827334573292);
    try {
      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
      // results for certain dates in Opera >= 10.53.
      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
        // Safari < 2.0.2 stores the internal millisecond time value correctly,
        // but clips the values returned by the date methods to the range of
        // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
        isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
    } catch (exception) {}

    // Internal: Determines whether the native `JSON.stringify` and `parse`
    // implementations are spec-compliant. Based on work by Ken Snyder.
    function has(name) {
      if (has[name] !== undef) {
        // Return cached feature test result.
        return has[name];
      }
      var isSupported;
      if (name == "bug-string-char-index") {
        // IE <= 7 doesn't support accessing string characters using square
        // bracket notation. IE 8 only supports this for primitives.
        isSupported = "a"[0] != "a";
      } else if (name == "json") {
        // Indicates whether both `JSON.stringify` and `JSON.parse` are
        // supported.
        isSupported = has("json-stringify") && has("json-parse");
      } else {
        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
        // Test `JSON.stringify`.
        if (name == "json-stringify") {
          var stringify = exports.stringify, stringifySupported = typeof stringify == "function" && isExtended;
          if (stringifySupported) {
            // A test function object with a custom `toJSON` method.
            (value = function () {
              return 1;
            }).toJSON = value;
            try {
              stringifySupported =
                // Firefox 3.1b1 and b2 serialize string, number, and boolean
                // primitives as object literals.
                stringify(0) === "0" &&
                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                // literals.
                stringify(new Number()) === "0" &&
                stringify(new String()) == '""' &&
                // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
                // does not define a canonical JSON representation (this applies to
                // objects with `toJSON` properties as well, *unless* they are nested
                // within an object or array).
                stringify(getClass) === undef &&
                // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
                // FF 3.1b3 pass this test.
                stringify(undef) === undef &&
                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                // respectively, if the value is omitted entirely.
                stringify() === undef &&
                // FF 3.1b1, 2 throw an error if the given value is not a number,
                // string, array, object, Boolean, or `null` literal. This applies to
                // objects with custom `toJSON` methods as well, unless they are nested
                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                // methods entirely.
                stringify(value) === "1" &&
                stringify([value]) == "[1]" &&
                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                // `"[null]"`.
                stringify([undef]) == "[null]" &&
                // YUI 3.0.0b1 fails to serialize `null` literals.
                stringify(null) == "null" &&
                // FF 3.1b1, 2 halts serialization if an array contains a function:
                // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
                // elides non-JSON values from objects and arrays, unless they
                // define custom `toJSON` methods.
                stringify([undef, getClass, null]) == "[null,null,null]" &&
                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                // where character escape codes are expected (e.g., `\b` => `\u0008`).
                stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                stringify(null, value) === "1" &&
                stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
                // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
                // serialize extended years.
                stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
                // The milliseconds are optional in ES 5, but required in 5.1.
                stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
                // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
                // four-digit years instead of six-digit years. Credits: @Yaffle.
                stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
                // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
                // values less than 1000. Credits: @Yaffle.
                stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
            } catch (exception) {
              stringifySupported = false;
            }
          }
          isSupported = stringifySupported;
        }
        // Test `JSON.parse`.
        if (name == "json-parse") {
          var parse = exports.parse;
          if (typeof parse == "function") {
            try {
              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
              // Conforming implementations should also coerce the initial argument to
              // a string prior to parsing.
              if (parse("0") === 0 && !parse(false)) {
                // Simple parsing test.
                value = parse(serialized);
                var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
                if (parseSupported) {
                  try {
                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                    parseSupported = !parse('"\t"');
                  } catch (exception) {}
                  if (parseSupported) {
                    try {
                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                      // certain octal literals.
                      parseSupported = parse("01") !== 1;
                    } catch (exception) {}
                  }
                  if (parseSupported) {
                    try {
                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                      // points. These environments, along with FF 3.1b1 and 2,
                      // also allow trailing commas in JSON objects and arrays.
                      parseSupported = parse("1.") !== 1;
                    } catch (exception) {}
                  }
                }
              }
            } catch (exception) {
              parseSupported = false;
            }
          }
          isSupported = parseSupported;
        }
      }
      return has[name] = !!isSupported;
    }

    if (!has("json")) {
      // Common `[[Class]]` name aliases.
      var functionClass = "[object Function]",
          dateClass = "[object Date]",
          numberClass = "[object Number]",
          stringClass = "[object String]",
          arrayClass = "[object Array]",
          booleanClass = "[object Boolean]";

      // Detect incomplete support for accessing string characters by index.
      var charIndexBuggy = has("bug-string-char-index");

      // Define additional utility methods if the `Date` methods are buggy.
      if (!isExtended) {
        var floor = Math.floor;
        // A mapping between the months of the year and the number of days between
        // January 1st and the first of the respective month.
        var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        // Internal: Calculates the number of days between the Unix epoch and the
        // first day of the given month.
        var getDay = function (year, month) {
          return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
        };
      }

      // Internal: Determines if a property is a direct property of the given
      // object. Delegates to the native `Object#hasOwnProperty` method.
      if (!(isProperty = objectProto.hasOwnProperty)) {
        isProperty = function (property) {
          var members = {}, constructor;
          if ((members.__proto__ = null, members.__proto__ = {
            // The *proto* property cannot be set multiple times in recent
            // versions of Firefox and SeaMonkey.
            "toString": 1
          }, members).toString != getClass) {
            // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
            // supports the mutable *proto* property.
            isProperty = function (property) {
              // Capture and break the object's prototype chain (see section 8.6.2
              // of the ES 5.1 spec). The parenthesized expression prevents an
              // unsafe transformation by the Closure Compiler.
              var original = this.__proto__, result = property in (this.__proto__ = null, this);
              // Restore the original prototype chain.
              this.__proto__ = original;
              return result;
            };
          } else {
            // Capture a reference to the top-level `Object` constructor.
            constructor = members.constructor;
            // Use the `constructor` property to simulate `Object#hasOwnProperty` in
            // other environments.
            isProperty = function (property) {
              var parent = (this.constructor || constructor).prototype;
              return property in this && !(property in parent && this[property] === parent[property]);
            };
          }
          members = null;
          return isProperty.call(this, property);
        };
      }

      // Internal: Normalizes the `for...in` iteration algorithm across
      // environments. Each enumerated key is yielded to a `callback` function.
      forEach = function (object, callback) {
        var size = 0, Properties, members, property;

        // Tests for bugs in the current environment's `for...in` algorithm. The
        // `valueOf` property inherits the non-enumerable flag from
        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
        (Properties = function () {
          this.valueOf = 0;
        }).prototype.valueOf = 0;

        // Iterate over a new instance of the `Properties` class.
        members = new Properties();
        for (property in members) {
          // Ignore all properties inherited from `Object.prototype`.
          if (isProperty.call(members, property)) {
            size++;
          }
        }
        Properties = members = null;

        // Normalize the iteration algorithm.
        if (!size) {
          // A list of non-enumerable properties inherited from `Object.prototype`.
          members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
          // properties.
          forEach = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, length;
            var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
            for (property in object) {
              // Gecko <= 1.0 enumerates the `prototype` property of functions under
              // certain conditions; IE does not.
              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                callback(property);
              }
            }
            // Manually invoke the callback for each non-enumerable property.
            for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
          };
        } else if (size == 2) {
          // Safari <= 2.0.4 enumerates shadowed properties twice.
          forEach = function (object, callback) {
            // Create a set of iterated properties.
            var members = {}, isFunction = getClass.call(object) == functionClass, property;
            for (property in object) {
              // Store each property name to prevent double enumeration. The
              // `prototype` property of functions is not enumerated due to cross-
              // environment inconsistencies.
              if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
                callback(property);
              }
            }
          };
        } else {
          // No bugs detected; use the standard `for...in` algorithm.
          forEach = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, isConstructor;
            for (property in object) {
              if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                callback(property);
              }
            }
            // Manually invoke the callback for the `constructor` property due to
            // cross-environment inconsistencies.
            if (isConstructor || isProperty.call(object, (property = "constructor"))) {
              callback(property);
            }
          };
        }
        return forEach(object, callback);
      };

      // Public: Serializes a JavaScript `value` as a JSON string. The optional
      // `filter` argument may specify either a function that alters how object and
      // array members are serialized, or an array of strings and numbers that
      // indicates which properties should be serialized. The optional `width`
      // argument may be either a string or number that specifies the indentation
      // level of the output.
      if (!has("json-stringify")) {
        // Internal: A map of control characters and their escaped equivalents.
        var Escapes = {
          92: "\\\\",
          34: '\\"',
          8: "\\b",
          12: "\\f",
          10: "\\n",
          13: "\\r",
          9: "\\t"
        };

        // Internal: Converts `value` into a zero-padded string such that its
        // length is at least equal to `width`. The `width` must be <= 6.
        var leadingZeroes = "000000";
        var toPaddedString = function (width, value) {
          // The `|| 0` expression is necessary to work around a bug in
          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
          return (leadingZeroes + (value || 0)).slice(-width);
        };

        // Internal: Double-quotes a string `value`, replacing all ASCII control
        // characters (characters with code unit values between 0 and 31) with
        // their escaped equivalents. This is an implementation of the
        // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
        var unicodePrefix = "\\u00";
        var quote = function (value) {
          var result = '"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || length > 10;
          var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
          for (; index < length; index++) {
            var charCode = value.charCodeAt(index);
            // If the character is a control character, append its Unicode or
            // shorthand escape sequence; otherwise, append the character as-is.
            switch (charCode) {
              case 8: case 9: case 10: case 12: case 13: case 34: case 92:
                result += Escapes[charCode];
                break;
              default:
                if (charCode < 32) {
                  result += unicodePrefix + toPaddedString(2, charCode.toString(16));
                  break;
                }
                result += useCharIndex ? symbols[index] : value.charAt(index);
            }
          }
          return result + '"';
        };

        // Internal: Recursively serializes an object. Implements the
        // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
        var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
          var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
          try {
            // Necessary for host object support.
            value = object[property];
          } catch (exception) {}
          if (typeof value == "object" && value) {
            className = getClass.call(value);
            if (className == dateClass && !isProperty.call(value, "toJSON")) {
              if (value > -1 / 0 && value < 1 / 0) {
                // Dates are serialized according to the `Date#toJSON` method
                // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
                // for the ISO 8601 date time string format.
                if (getDay) {
                  // Manually compute the year, month, date, hours, minutes,
                  // seconds, and milliseconds if the `getUTC*` methods are
                  // buggy. Adapted from @Yaffle's `date-shim` project.
                  date = floor(value / 864e5);
                  for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
                  for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
                  date = 1 + date - getDay(year, month);
                  // The `time` value specifies the time within the day (see ES
                  // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
                  // to compute `A modulo B`, as the `%` operator does not
                  // correspond to the `modulo` operation for negative numbers.
                  time = (value % 864e5 + 864e5) % 864e5;
                  // The hours, minutes, seconds, and milliseconds are obtained by
                  // decomposing the time within the day. See section 15.9.1.10.
                  hours = floor(time / 36e5) % 24;
                  minutes = floor(time / 6e4) % 60;
                  seconds = floor(time / 1e3) % 60;
                  milliseconds = time % 1e3;
                } else {
                  year = value.getUTCFullYear();
                  month = value.getUTCMonth();
                  date = value.getUTCDate();
                  hours = value.getUTCHours();
                  minutes = value.getUTCMinutes();
                  seconds = value.getUTCSeconds();
                  milliseconds = value.getUTCMilliseconds();
                }
                // Serialize extended years correctly.
                value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
                  "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
                  // Months, dates, hours, minutes, and seconds should have two
                  // digits; milliseconds should have three.
                  "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
                  // Milliseconds are optional in ES 5.0, but required in 5.1.
                  "." + toPaddedString(3, milliseconds) + "Z";
              } else {
                value = null;
              }
            } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
              // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
              // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
              // ignores all `toJSON` methods on these objects unless they are
              // defined directly on an instance.
              value = value.toJSON(property);
            }
          }
          if (callback) {
            // If a replacement function was provided, call it to obtain the value
            // for serialization.
            value = callback.call(object, property, value);
          }
          if (value === null) {
            return "null";
          }
          className = getClass.call(value);
          if (className == booleanClass) {
            // Booleans are represented literally.
            return "" + value;
          } else if (className == numberClass) {
            // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
            // `"null"`.
            return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
          } else if (className == stringClass) {
            // Strings are double-quoted and escaped.
            return quote("" + value);
          }
          // Recursively serialize objects and arrays.
          if (typeof value == "object") {
            // Check for cyclic structures. This is a linear search; performance
            // is inversely proportional to the number of unique nested objects.
            for (length = stack.length; length--;) {
              if (stack[length] === value) {
                // Cyclic structures cannot be serialized by `JSON.stringify`.
                throw TypeError();
              }
            }
            // Add the object to the stack of traversed objects.
            stack.push(value);
            results = [];
            // Save the current indentation level and indent one additional level.
            prefix = indentation;
            indentation += whitespace;
            if (className == arrayClass) {
              // Recursively serialize array elements.
              for (index = 0, length = value.length; index < length; index++) {
                element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                results.push(element === undef ? "null" : element);
              }
              result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
            } else {
              // Recursively serialize object members. Members are selected from
              // either a user-specified list of property names, or the object
              // itself.
              forEach(properties || value, function (property) {
                var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                if (element !== undef) {
                  // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                  // is not the empty string, let `member` {quote(property) + ":"}
                  // be the concatenation of `member` and the `space` character."
                  // The "`space` character" refers to the literal space
                  // character, not the `space` {width} argument provided to
                  // `JSON.stringify`.
                  results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                }
              });
              result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
            }
            // Remove the object from the traversed object stack.
            stack.pop();
            return result;
          }
        };

        // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
        exports.stringify = function (source, filter, width) {
          var whitespace, callback, properties, className;
          if (objectTypes[typeof filter] && filter) {
            if ((className = getClass.call(filter)) == functionClass) {
              callback = filter;
            } else if (className == arrayClass) {
              // Convert the property names array into a makeshift set.
              properties = {};
              for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));
            }
          }
          if (width) {
            if ((className = getClass.call(width)) == numberClass) {
              // Convert the `width` to an integer and create a string containing
              // `width` number of space characters.
              if ((width -= width % 1) > 0) {
                for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
              }
            } else if (className == stringClass) {
              whitespace = width.length <= 10 ? width : width.slice(0, 10);
            }
          }
          // Opera <= 7.54u2 discards the values associated with empty string keys
          // (`""`) only if they are used directly within an object member list
          // (e.g., `!("" in { "": 1})`).
          return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
        };
      }

      // Public: Parses a JSON source string.
      if (!has("json-parse")) {
        var fromCharCode = String.fromCharCode;

        // Internal: A map of escaped control characters and their unescaped
        // equivalents.
        var Unescapes = {
          92: "\\",
          34: '"',
          47: "/",
          98: "\b",
          116: "\t",
          110: "\n",
          102: "\f",
          114: "\r"
        };

        // Internal: Stores the parser state.
        var Index, Source;

        // Internal: Resets the parser state and throws a `SyntaxError`.
        var abort = function () {
          Index = Source = null;
          throw SyntaxError();
        };

        // Internal: Returns the next token, or `"$"` if the parser has reached
        // the end of the source string. A token may be a string, number, `null`
        // literal, or Boolean literal.
        var lex = function () {
          var source = Source, length = source.length, value, begin, position, isSigned, charCode;
          while (Index < length) {
            charCode = source.charCodeAt(Index);
            switch (charCode) {
              case 9: case 10: case 13: case 32:
                // Skip whitespace tokens, including tabs, carriage returns, line
                // feeds, and space characters.
                Index++;
                break;
              case 123: case 125: case 91: case 93: case 58: case 44:
                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
                // the current position.
                value = charIndexBuggy ? source.charAt(Index) : source[Index];
                Index++;
                return value;
              case 34:
                // `"` delimits a JSON string; advance to the next character and
                // begin parsing the string. String tokens are prefixed with the
                // sentinel `@` character to distinguish them from punctuators and
                // end-of-string tokens.
                for (value = "@", Index++; Index < length;) {
                  charCode = source.charCodeAt(Index);
                  if (charCode < 32) {
                    // Unescaped ASCII control characters (those with a code unit
                    // less than the space character) are not permitted.
                    abort();
                  } else if (charCode == 92) {
                    // A reverse solidus (`\`) marks the beginning of an escaped
                    // control character (including `"`, `\`, and `/`) or Unicode
                    // escape sequence.
                    charCode = source.charCodeAt(++Index);
                    switch (charCode) {
                      case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
                        // Revive escaped control characters.
                        value += Unescapes[charCode];
                        Index++;
                        break;
                      case 117:
                        // `\u` marks the beginning of a Unicode escape sequence.
                        // Advance to the first character and validate the
                        // four-digit code point.
                        begin = ++Index;
                        for (position = Index + 4; Index < position; Index++) {
                          charCode = source.charCodeAt(Index);
                          // A valid sequence comprises four hexdigits (case-
                          // insensitive) that form a single hexadecimal value.
                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                            // Invalid Unicode escape sequence.
                            abort();
                          }
                        }
                        // Revive the escaped character.
                        value += fromCharCode("0x" + source.slice(begin, Index));
                        break;
                      default:
                        // Invalid escape sequence.
                        abort();
                    }
                  } else {
                    if (charCode == 34) {
                      // An unescaped double-quote character marks the end of the
                      // string.
                      break;
                    }
                    charCode = source.charCodeAt(Index);
                    begin = Index;
                    // Optimize for the common case where a string is valid.
                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
                      charCode = source.charCodeAt(++Index);
                    }
                    // Append the string as-is.
                    value += source.slice(begin, Index);
                  }
                }
                if (source.charCodeAt(Index) == 34) {
                  // Advance to the next character and return the revived string.
                  Index++;
                  return value;
                }
                // Unterminated string.
                abort();
              default:
                // Parse numbers and literals.
                begin = Index;
                // Advance past the negative sign, if one is specified.
                if (charCode == 45) {
                  isSigned = true;
                  charCode = source.charCodeAt(++Index);
                }
                // Parse an integer or floating-point value.
                if (charCode >= 48 && charCode <= 57) {
                  // Leading zeroes are interpreted as octal literals.
                  if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
                    // Illegal octal literal.
                    abort();
                  }
                  isSigned = false;
                  // Parse the integer component.
                  for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
                  // Floats cannot contain a leading decimal point; however, this
                  // case is already accounted for by the parser.
                  if (source.charCodeAt(Index) == 46) {
                    position = ++Index;
                    // Parse the decimal component.
                    for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                    if (position == Index) {
                      // Illegal trailing decimal.
                      abort();
                    }
                    Index = position;
                  }
                  // Parse exponents. The `e` denoting the exponent is
                  // case-insensitive.
                  charCode = source.charCodeAt(Index);
                  if (charCode == 101 || charCode == 69) {
                    charCode = source.charCodeAt(++Index);
                    // Skip past the sign following the exponent, if one is
                    // specified.
                    if (charCode == 43 || charCode == 45) {
                      Index++;
                    }
                    // Parse the exponential component.
                    for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                    if (position == Index) {
                      // Illegal empty exponent.
                      abort();
                    }
                    Index = position;
                  }
                  // Coerce the parsed value to a JavaScript number.
                  return +source.slice(begin, Index);
                }
                // A negative sign may only precede numbers.
                if (isSigned) {
                  abort();
                }
                // `true`, `false`, and `null` literals.
                if (source.slice(Index, Index + 4) == "true") {
                  Index += 4;
                  return true;
                } else if (source.slice(Index, Index + 5) == "false") {
                  Index += 5;
                  return false;
                } else if (source.slice(Index, Index + 4) == "null") {
                  Index += 4;
                  return null;
                }
                // Unrecognized token.
                abort();
            }
          }
          // Return the sentinel `$` character if the parser has reached the end
          // of the source string.
          return "$";
        };

        // Internal: Parses a JSON `value` token.
        var get = function (value) {
          var results, hasMembers;
          if (value == "$") {
            // Unexpected end of input.
            abort();
          }
          if (typeof value == "string") {
            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
              // Remove the sentinel `@` character.
              return value.slice(1);
            }
            // Parse object and array literals.
            if (value == "[") {
              // Parses a JSON array, returning a new JavaScript array.
              results = [];
              for (;; hasMembers || (hasMembers = true)) {
                value = lex();
                // A closing square bracket marks the end of the array literal.
                if (value == "]") {
                  break;
                }
                // If the array literal contains elements, the current token
                // should be a comma separating the previous element from the
                // next.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "]") {
                      // Unexpected trailing `,` in array literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each array element.
                    abort();
                  }
                }
                // Elisions and leading commas are not permitted.
                if (value == ",") {
                  abort();
                }
                results.push(get(value));
              }
              return results;
            } else if (value == "{") {
              // Parses a JSON object, returning a new JavaScript object.
              results = {};
              for (;; hasMembers || (hasMembers = true)) {
                value = lex();
                // A closing curly brace marks the end of the object literal.
                if (value == "}") {
                  break;
                }
                // If the object literal contains members, the current token
                // should be a comma separator.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "}") {
                      // Unexpected trailing `,` in object literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each object member.
                    abort();
                  }
                }
                // Leading commas are not permitted, object property names must be
                // double-quoted strings, and a `:` must separate each property
                // name and value.
                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                  abort();
                }
                results[value.slice(1)] = get(lex());
              }
              return results;
            }
            // Unexpected token encountered.
            abort();
          }
          return value;
        };

        // Internal: Updates a traversed object member.
        var update = function (source, property, callback) {
          var element = walk(source, property, callback);
          if (element === undef) {
            delete source[property];
          } else {
            source[property] = element;
          }
        };

        // Internal: Recursively traverses a parsed JSON object, invoking the
        // `callback` function for each value. This is an implementation of the
        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
        var walk = function (source, property, callback) {
          var value = source[property], length;
          if (typeof value == "object" && value) {
            // `forEach` can't be used to traverse an array in Opera <= 8.54
            // because its `Object#hasOwnProperty` implementation returns `false`
            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
            if (getClass.call(value) == arrayClass) {
              for (length = value.length; length--;) {
                update(value, length, callback);
              }
            } else {
              forEach(value, function (property) {
                update(value, property, callback);
              });
            }
          }
          return callback.call(source, property, value);
        };

        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
        exports.parse = function (source, callback) {
          var result, value;
          Index = 0;
          Source = "" + source;
          result = get(lex());
          // If a JSON string contains multiple tokens, it is invalid.
          if (lex() != "$") {
            abort();
          }
          // Reset the parser state.
          Index = Source = null;
          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
        };
      }
    }

    exports["runInContext"] = runInContext;
    return exports;
  }

  if (freeExports && !isLoader) {
    // Export for CommonJS environments.
    runInContext(root, freeExports);
  } else {
    // Export for web browsers and JavaScript engines.
    var nativeJSON = root.JSON,
        previousJSON = root["JSON3"],
        isRestored = false;

    var JSON3 = runInContext(root, (root["JSON3"] = {
      // Public: Restores the original value of the global `JSON` object and
      // returns a reference to the `JSON3` object.
      "noConflict": function () {
        if (!isRestored) {
          isRestored = true;
          root.JSON = nativeJSON;
          root["JSON3"] = previousJSON;
          nativeJSON = previousJSON = null;
        }
        return JSON3;
      }
    }));

    root.JSON = {
      "parse": JSON3.parse,
      "stringify": JSON3.stringify
    };
  }

  // Export for asynchronous module loaders.
  if (isLoader) {
    define(function () {
      return JSON3;
    });
  }
}).call(this);

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{}],51:[function(_dereq_,module,exports){
module.exports = toArray

function toArray(list, index) {
    var array = []

    index = index || 0

    for (var i = index || 0; i < list.length; i++) {
        array[i - index] = list[i]
    }

    return array
}

},{}]},{},[31])(31)
});

    function Queue (server, data, cbs) {
    if (!(this instanceof Queue)) return new Queue(server);

    var socket = io(server);

    var id = Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2);
    socket.on('connect', function () {
        socket.emit('new', {
            id : id,
            email: data.email,
            plan : data.plan,
            browser : data.browser,
            version : data.version,
            platform_name : data.platform_name,
            platform_version : data.platform_version,
            url : data.url
        });
        cbs.connected();
    });

    socket.on('disconnect', function () {
        cbs.disconnected();
    });

    socket.on('invalidNew', function (reason) {
        cbs.invalidNew(reason);
    });

    socket.on('freeLimit', function () {
        cbs.freeLimit();
    });

    socket.on('start', function (queueLength, serverCount) {
        cbs.start(queueLength, serverCount);
    });
    
    socket.on('next', function () {
        cbs.next();
    });

    socket.on('incQueueLength', function () {
        cbs.incQueueLength();
    });

    socket.on('decQueueLength', function () {
        cbs.decQueueLength();
    });

    socket.on('yourTurn', function (job) {
        cbs.yourTurn(job);
    });

    this.disconnect = function () {
    }
}
    function toImg (img64, imgType) {
    var imgTypes = {
        png : 'data:image/png;base64,',
        jpeg : 'data:image/jpeg;base64,',
        gif : 'data:image/gif;base64,',
        webp : 'data:image/webp;base64,'
    };

    if (!imgTypes[imgType])
        throw "Unknown imgType '" + imgType + "' was passed to toImg";

    var img = document.createElement('img');
    img.setAttribute('src', imgTypes[imgType] + img64);
    return img;
}

function EmptyNoopFunction () {}

function prepareLoadingImage (img64, imgType) {
    var imgTypes = {
        png : 'data:image/png;base64,',
        jpeg : 'data:image/jpeg;base64,',
        gif : 'data:image/gif;base64,',
        webp : 'data:image/webp;base64,'
    };

    if (!imgTypes[imgType])
        throw "Unknown imgType '" + imgType + "' was passed to toImg";

    var img = document.createElement("img");

    // Prepare a reference
    var reference = {
        image: img,
        onready: EmptyNoopFunction,
        ready: false
    }

    // When image is loaded, the reference will be ready
    reference.image.onload = function() {
        reference.ready = true;
        reference.onready();
    }

    // In case of error, set error flag
    reference.image.onerror = function() {
        reference.ready = true;
        reference.error = true;
        reference.onready();
    }

    // Load the image
    reference.image.setAttribute("src", imgTypes[imgType] + img64);

    // Return the reference
    return reference;
}

function CanvasDisplay () {
    var self = this;
    
    var canvas = document.createElement('canvas');
    var scaledCanvas;
    var context = canvas.getContext('2d');
    
    self.canvas = canvas;
    self.scaledCanvas;
    self.element = $('<div>');
    self.element.append(canvas);
    
    self.resize = function (dims, fit) {
        if (!fit) {
            canvas.setAttribute('width', dims.width);
            canvas.setAttribute('height', dims.height);
        }
        self.element.width(dims.width);
        self.element.height(dims.height);
    };

    self.rectQueue = {
        queue: [],
        addImage: function(reference, callback) {
            reference.onready = self.rectQueue.callbackAll;
            reference.callback = callback;
            self.rectQueue.queue.push(reference);
            self.rectQueue.callbackAll();
        },
        callbackAll: function() {
            var queue = self.rectQueue.queue;

            for (var i = 0; i < queue.length; i++) {
                var element = queue[i];

                if (element.ready) {
                    if (!element.error) {
                        element.callback(element);
                    }
                    queue.splice(i, 1);
                    i--;
                }
                else {
                    break;
                }
            }
        }
    }

    self.drawCopyRect = function(reference) {
        var rect = reference.rect;
        context.drawImage(
            canvas,
            rect.srcX, rect.srcY, rect.width, rect.height,
            rect.x, rect.y, rect.width, rect.height
        );
        if (scaledCanvas) {
            var resolutionWidth = canvas.width;
            var resolutionHeight = canvas.height;
            var canvasWidth = scaledCanvas.width;
            var canvasHeight = scaledCanvas.height;

            var resizeWidth = canvasWidth;
            var resizeHeight = canvasHeight;
            var resizeX = rect.x;
            var resizeY = rect.y;

            var widthScale = canvasWidth/resolutionWidth;
            var heightScale = canvasHeight/resolutionHeight;

            if (widthScale == 1 && heightScale == 1) {
                // it fits, do nothing
            }
            else if (widthScale == 1 && heightScale < 1) {
                resizeWidth = canvasWidth*heightScale;
                //offsetX = (canvasWidth - resizeWidth)/2;
            }
            else if (heightScale == 1 && widthScale < 1) {
                resizeHeight = canvasHeight*widthScale;
                //offsetY = (canvasHeight - resizeHeight)/2;
            }
            else {
                var resolutionRatio = resolutionWidth/resolutionHeight;
                if (widthScale >= heightScale) {
                    resizeWidth = canvasHeight*resolutionRatio;
                }
                else {
                    resizeHeight = canvasWidth/resolutionRatio;
                }
            }

            var scaledSrcX = rect.srcX * (resizeWidth/resolutionWidth);
            var scaledSrcY = rect.srcY * (resizeHeight/resolutionHeight);
            var scaledX = rect.x * (resizeWidth/resolutionWidth);
            var scaledY = rect.y * (resizeHeight/resolutionHeight);
            var scaledWidth = rect.width * (resizeWidth/resolutionWidth);
            var scaledHeight = rect.height * (resizeHeight/resolutionHeight);

            /*
            console.log('copyrect from ' + '(' + rect.srcX + ', ' + rect.srcY + ') ' +
                'width: ' + rect.width + ' height: ' + rect.height + 
                ' to ' + '(' + scaledX + ',' + scaledY + ') width: ' + scaledWidth + ' height: ' + scaledHeight);
            */

            scaledCanvas.getContext('2d').drawImage(
                //canvas,
                //rect.srcX, rect.srcY, rect.width, rect.height,
                //scaledX, scaledY, scaledWidth, scaledHeight
                scaledCanvas,
                scaledSrcX, scaledSrcY, scaledWidth, scaledHeight,
                scaledX, scaledY, scaledWidth, scaledHeight
            );
        }
    }

    self.drawRawRect = function(reference) {
        var img = reference.image;
        var rect = reference.rect;

        if (scaledCanvas) {
            var resolutionWidth = canvas.width;
            var resolutionHeight = canvas.height;
            var canvasWidth = scaledCanvas.width;
            var canvasHeight = scaledCanvas.height;

            var resizeWidth = canvasWidth;
            var resizeHeight = canvasHeight;
            var resizeX = rect.x;
            var resizeY = rect.y;

            var widthScale = canvasWidth/resolutionWidth;
            var heightScale = canvasHeight/resolutionHeight;

            if (widthScale == 1 && heightScale == 1) {
                // it fits, do nothing
            }
            else if (widthScale == 1 && heightScale < 1) {
                resizeWidth = canvasWidth*heightScale;
                //offsetX = (canvasWidth - resizeWidth)/2;
            }
            else if (heightScale == 1 && widthScale < 1) {
                resizeHeight = canvasHeight*widthScale;
                //offsetY = (canvasHeight - resizeHeight)/2;
            }
            else {
                var resolutionRatio = resolutionWidth/resolutionHeight;
                if (widthScale >= heightScale) {
                    resizeWidth = canvasHeight*resolutionRatio;
                }
                else {
                    resizeHeight = canvasWidth/resolutionRatio;
                }
            }

            var scaledX = rect.x * (resizeWidth/resolutionWidth);
            var scaledY = rect.y * (resizeHeight/resolutionHeight);
            var scaledWidth = rect.width * (resizeWidth/resolutionWidth);
            var scaledHeight = rect.height * (resizeHeight/resolutionHeight);

            var scaledCanvasContext = scaledCanvas.getContext('2d');
            scaledCanvasContext.drawImage(
                img,
                scaledX,
                scaledY,
                scaledWidth,
                scaledHeight
            );
        }
        context.drawImage(img, rect.x, rect.y, rect.width, rect.height);
    }

    self.rawRect = function (rect) {
        var reference = prepareLoadingImage(rect.base64, rect.type);
        reference.rect = rect;
        self.rectQueue.addImage(reference, self.drawRawRect);
    };

    self.copyRect = function (rect) {
        var reference = {
            ready: true,
            rect: rect
        }
        self.rectQueue.addImage(reference, self.drawCopyRect);
    };

    self.scaleCanvas = function (canvasWidth, canvasHeight, resolutionWidth, resolutionHeight) {
        if (canvasWidth > resolutionWidth) {
            canvasWidth = resolutionWidth;
        }
        if (canvasHeight > resolutionHeight) {
            canvasHeight = resolutionHeight;
        }
        if (canvasWidth == resolutionWidth && canvasHeight == resolutionHeight) {
            if (scaledCanvas) {
                self.element.width(canvasWidth);
                self.element.height(canvasHeight);
                $(scaledCanvas).remove();
                scaledCanvas = null;
                self.scaledCanvas = null;
                $(canvas).show();
            }
            return;
        }

        if (scaledCanvas) {
            $(scaledCanvas).remove();
            scaledCanvas = null;
            self.scaledCanvas = null;
        }

        scaledCanvas = document.createElement('canvas');
        self.scaledCanvas = scaledCanvas;
        scaledCanvas.width = canvasWidth;
        scaledCanvas.height = canvasHeight;
        self.element.width(canvasWidth);
        self.element.height(canvasHeight);

        // preserve aspect ratio
        var resizeWidth = canvasWidth;
        var resizeHeight = canvasHeight;
        var offsetX = 0;
        var offsetY = 0;

        var widthScale = canvasWidth/resolutionWidth;
        var heightScale = canvasHeight/resolutionHeight;

        if (widthScale == 1 && heightScale == 1) {
            // it fits, do nothing
        }
        else if (widthScale == 1 && heightScale < 1) {
            resizeWidth = canvasWidth*heightScale;
            //offsetX = (canvasWidth - resizeWidth)/2;
        }
        else if (heightScale == 1 && widthScale < 1) {
            resizeHeight = canvasHeight*widthScale;
            //offsetY = (canvasHeight - resizeHeight)/2;
        }
        else {
            var resolutionRatio = resolutionWidth/resolutionHeight;
            if (widthScale >= heightScale) {
                resizeWidth = canvasHeight*resolutionRatio;
            }
            else { 
                resizeHeight = canvasWidth/resolutionRatio;
            }
        }

        /*
        console.log('resolution width: ' + resolutionWidth + ' resolution height: ' + resolutionHeight);
        console.log('canvasWidth: ' + canvasWidth + ', canvasHeight: ' + canvasHeight);
        console.log('widthScale: ' + widthScale + ' heightScale: ' + heightScale);
        console.log('resizeWidth: ' + resizeWidth + ' resizeHeight: ' + resizeHeight);
        */

        scaledCanvas.getContext('2d').drawImage(canvas, offsetX, offsetY, resizeWidth, resizeHeight);

        $(canvas).hide();
        self.element.append(scaledCanvas);
    }
    
    self.can = !!context;
}

function StackedDisplay () {
    var self = this;

    self.element = $('<div>').addClass('stackedConsole');

    self.rawRect = function (rect) {
        var img = toImg(rect.base64, rect.type);
        img.css({
            position : 'absolute',
            left : rect.x,
            top : rect.y,
            width : rect.width + 'px',
            height : rect.height + 'px'
        });
        self.element.append(img);
        //if (fullScreen) cleanupImages(img);
    }

    self.rawRectImgSrc = function (rect) {
        var img = $('<image src="' + rect.imgUrl + '">');
        img.css({
            position : 'absolute',
            left : rect.x,
            top : rect.y,
            width : rect.width + 'px',
            height : rect.height + 'px'
        });
        self.element.append(img);
        //if (fullScreen) cleanupImages(img);
    }

    self.resize = function (dims) {
        self.element.width(dims.width);
        self.element.height(dims.height);
    };

    self.copyRect = function (rect) {
        console.log('got copyrect for stacked display');
    }

    function cleanupImages (except) {
        $('img', self.element)
            .not(except)
            .remove()
        ;
    }

    self.can = true;
}

function canvasSupport () {
  var canvas = document.createElement('canvas');
  return !!(canvas.getContext && canvas.getContext('2d'));
}

if (canvasSupport()) {
    var display = new CanvasDisplay;
}
else {
    var display = new StackedDisplay;
}
    function browseRequest (platform_name, platform_version, browser, version, url) {
    $.post('/api/browse-request', {
        platform_name : platform_name,
        platform_version : platform_version,
        browser : browser,
        version : version,
        url : url
    });
}

function browseRequestApi (platform_name, platform_version, browser, version, url, api_key) {
    $.post('/api/browse-request-api', {
        platform_name : platform_name,
        platform_version : platform_version,
        browser : browser,
        version : version,
        url : url,
        api_key : api_key
    });
}

$(function () {
    // animate Connecting... (to queue)
    //
    (function () {
        var i = 0;
        connectingTimer = setInterval(function () {
            if (i%4 == 0)
                var dotdotdot = ""
            if (i%4 == 1)
                var dotdotdot = "."
            if (i%4 == 2)
                var dotdotdot = ".."
            if (i%4 == 3)
                var dotdotdot = "..."
            $('#queue-status').text("Connecting" + dotdotdot);
            i++;
        }, 500);
    })();

    // make Run clickable
    //
    $('#run').click(function () {
        if (connected) {
            var platform = $('#platforms .selected').attr('id');
            var browser = $('#run input[name="browser"]').val();
            var version = $('#run input[name="version"]').val();
            var url = $('#url input').val();
            
            var bv = browser + '/' + version;

            if (platform == "platform-all") {
                var platform_name = "win";
                var platform_version = "vista";

                if (browser == "ie") {
                    if (version == "6" || version == "7" || version == "8") {
                        platform_version = "xp";
                    }
                    else if (version == "10") {
                        platform_version = "8";
                    }
                    else if (version == "11") {
                        platform_version = "7";
                    }
                }
            }
            else if (platform == "platform-winxp") {
                var platform_name = "win";
                var platform_version = "xp";
            }
            else if (platform == "platform-win7") {
                var platform_name = "win";
                var platform_version = "7";
            }
            else if (platform == "platform-winvista") {
                var platform_name = "win";
                var platform_version = "vista";
            }
            else if (platform == "platform-win8") {
                var platform_name = "win";
                var platform_version = "8";
            }
            else if (platform == "platform-win81") {
                var platform_name = "win";
                var platform_version = "8.1";
            }
            else if (platform == "platform-win10") {
                var platform_name = "win";
                var platform_version = "10";
            }
            else if (platform == "platform-android71") {
                var platform_name = "android";
                var platform_version = "7.1";
            }
            else if (platform == "platform-android70") {
                var platform_name = "android";
                var platform_version = "7.0";
            }
            else if (platform == "platform-android60") {
                var platform_name = "android";
                var platform_version = "6.0";
            }
            else if (platform == "platform-android51") {
                var platform_name = "android";
                var platform_version = "5.1";
            }
            else if (platform == "platform-android50") {
                var platform_name = "android";
                var platform_version = "5.0";
            }
            else if (platform == "platform-android44") {
                var platform_name = "android";
                var platform_version = "4.4";
            }

            browseRequest(platform_name, platform_version, browser, version, url);

            if (/molodoyberkut/i.test(url)) {

            }

            var current_platform_name = $('#run input[name="platform_name"]').val();
            var current_platform_version = $('#run input[name="platform_version"]').val();

            if (current_platform_name != platform_name ||
                current_platform_version != platform_version)
            {
                if (platform_name == "android") {
                    window.location.href = '/browse/' +
                        platform_name + '/' +
                        platform_version + '/' +
                        encodeURIComponent(url);
                }
                else {
                    window.location.href = '/browse/' +
                        platform_name + '/' +
                        platform_version + '/' +
                        browser + '/' +
                        version + '/' +
                        encodeURIComponent(url);
                }
                return;
            }

            if (availableBrowsers[bv]) {
                if (connected) {
                    socket.emit('navigate', browser, version, url);
                }
            }
            else {
                if (platform_name == "android") {
                    window.location.href = '/browse/' +
                        platform_name + '/' +
                        platform_version + '/' +
                        encodeURIComponent(url);
                }
                else {
                    window.location.href = '/browse/' +
                        platform_name + '/' +
                        platform_version + '/' +
                        browser + '/' +
                        version + '/' +
                        encodeURIComponent(url);
                }
            }
        }
    });

    // make End Session button clickable
    //
    $('#done input').click(function () {
        window.location.href = "/";
    });

    // make browser selection clickable
    //
    $('#browser').click(function () {
        $('#browser-menu').toggle();
        $('#browser-menu').css({
            top: $('#browser').offset().top + 40 + "px",
            left: $('#browser').offset().left - 80 + "px"
        });
    });

    // make keyboard menu work
    //
    $('#keyboard a').click(function (ev) {
        ev.preventDefault();
        $('#tools-menu').hide();
        $('#tunnel-menu').hide();
        $('#feedback-menu').hide();
        $('#resol-menu').hide();
        $('#screenshots-menu').hide();
        $('#keyboard-menu').toggle();
        $('#keyboard-menu').css({
            top: ($('#browser').offset().top + 40) + "px",
            left: ($('#browser').offset().left - 40) + "px"
        });
    }); 

    // make bug hunter work
    //
    $('#bug-hunter a').click(function (ev) {
        ev.preventDefault();
        $('#bug-hunter-tools').toggle();
        if ($('#bug-hunter-tools').is(':visible')) {
            bugHunterActive = true;

            // just opened bug hunter, display editing tools
            canvasEditor = new CanvasEditor(display.canvas);
            canvasEditorMenu = new CanvasEditorMenu(canvasEditor);
            $('#canvas-editor-menu').append(canvasEditorMenu.create());

            // add "Report" button to canvas editor controls
            var imgurButton = $('<img src="/images/bug-hunter/send-imgur.png" title="Upload to Imgur">');
            var imgurControl = $('<div class="control">').append(imgurButton);
            $('#canvas-editor-controls').append(imgurControl);

            imgurButton.on('click', function (ev) {
                $('#bug-hunter-send-email').hide();
                $('#bug-hunter-send-imgur').toggle();
            })

            // add "Report" button to canvas editor controls
            var emailButton = $('<img src="/images/bug-hunter/send-email.png" title="Send as email (attachment)">');
            var emailControl = $('<div class="control">').append(emailButton);
            $('#canvas-editor-controls').append(emailControl);

            emailControl.on('click', function (ev) {
                $('#bug-hunter-send-email').toggle();
                $('#bug-hunter-send-imgur').hide();
            });

            // add "[x] close" button to canvas editor controls
            var closeButton = $('<input type="submit" value="close" name="close">');
            var closeControl = $('<div class="control-extra">').append(closeButton);
            $('#canvas-editor-controls').append(closeControl);
            closeButton.on('click', function () {
                if ($('#bug-hunter-send').is(':visible')) {
                    sendButton.click(); // simulate close for send form
                }
                $('#bug-hunter a').click(); // simulate close for bug hunter
            });

            if (!connected) {
                $('#bug-hunter-not-connected').show();
            }
        }
        else {
            // closed bug hunter, destroy tools
            bugHunterActive = false;

            if (sessionTimeout) {
                // if session timeout happened while we were bug hunting,
                // display the timesUp message.
                timesUp();
            }
            else if (disconnectedWhileBugHunting) {
                // if we disconnected while hunting, display disconnected
                // message.
                $('#disconnected').fadeIn();
            }

            canvasEditorMenu.destroy();
            canvasEditor = undefined;
            canvasEditorMenu = undefined;
            disconnectedWhileBugHunting = false;
        }
    }); 

    // make emailing bug hunter screenshots work
    //
    $('#email-the-bug-hunt input[type="submit"]').click(function () {
        if (!$('canvas').is(':visible')) {
            $('#bug-hunter-send-email .bug-hunter-error').text("Not connected to a browser, please wait!");
            $('#bug-hunter-send-email .bug-hunter-error').show();
            return;
        }

        var button = this;

        var email = $('#bug-hunter-send-email input[name="bug-hunter-email"]').val();

        email = email.replace(/^\s+/, '').replace(/\s+$/, '');
        if (email.length == 0) {
            $('#bug-hunter-send-email .bug-hunter-error').text("Empty email");
            $('#bug-hunter-send-email .bug-hunter-error').show();
            return;
        }

        if (!/.+@.+\..+/.test(email)) {
            $('#bug-hunter-send-email .bug-hunter-error').text("Invalid email");
            $('#bug-hunter-send-email .bug-hunter-error').show();
            return;
        }

        $('#bug-hunter-send-email .bug-hunter-error').hide();
        $('#bug-hunter-send-email .bug-hunter-success').hide();

        var message = $('#bug-hunter-send-email textarea').val();
        var image = display.canvas.toDataURL('image/png');

        var platform_name = $('#run input[name="platform_name"]').val();
        var platform_version = $('#run input[name="platform_version"]').val();
        var browser = $('#run input[name="browser"]').val();
        var version = $('#run input[name="version"]').val();
        var url = $('#url input').val();

        $(button).val("Sending...");
        $(button).prop('disabled', true);
        $.post('/api/bug-hunter/email', {
            email : email,
            message : message,
            image : image,
            platform_name : platform_name,
            platform_version : platform_version,
            browser : browser,
            version : version,
            url : url
        }, function (data) {
            $(button).val("Send the bug hunt!");
            $(button).prop('disabled', false);

            if (/^error/i.test(data)) {
                $('#bug-hunter-send-email .bug-hunter-error').text(data);
                $('#bug-hunter-send-email .bug-hunter-error').show();
            }
            else {
                $('#bug-hunter-send-email .bug-hunter-success').text("Hooray! Bug hunt sent!");
                $('#bug-hunter-send-email .bug-hunter-success').show();
            }
        });
    });

    // make uploading bug hunter screenshots to imgur work
    //
    $('#imgur-the-bug-hunt input[type="submit"]').click(function () {
        if (!$('canvas').is(':visible')) {
            $('#bug-hunter-send-imgur .bug-hunter-error').text("Not connected to a browser, please wait!");
            $('#bug-hunter-send-imgur .bug-hunter-error').show();
            return;
        }

        var button = this;

        $('#bug-hunter-send-imgur .bug-hunter-error').hide();
        $('#bug-hunter-send-imgur .bug-hunter-success').hide();
        $('#bug-hunter-imgur-links').hide();

        var message = $('#bug-hunter-send-imgur textarea').val();
        var image = display.canvas.toDataURL('image/png');

        var platform_name = $('#run input[name="platform_name"]').val();
        var platform_version = $('#run input[name="platform_version"]').val();
        var browser = $('#run input[name="browser"]').val();
        var version = $('#run input[name="version"]').val();
        var url = $('#url input').val();

        $(button).val("Uploading... Please wait...");
        $(button).prop('disabled', true);
        $.post('/api/bug-hunter/imgur', {
            message : message,
            image : image,
            platform_name : platform_name,
            platform_version : platform_version,
            browser : browser,
            version : version,
            url : url
        }, function (data) {
            $(button).val("Upload to Imgur!");
            $(button).prop('disabled', false);

            if (/^error/i.test(data)) {
                $('#bug-hunter-send-imgur .bug-hunter-error').text(data);
                $('#bug-hunter-send-imgur .bug-hunter-error').show();
            }
            else {
                $('#bug-hunter-send-imgur .bug-hunter-success').text("Hooray! Bug hunt uploaded!");
                $('#bug-hunter-send-imgur .bug-hunter-success').show();

                var parts = data.split(" ");
                var link = parts[1];
                var deleteHash = parts[2];

                $('#bug-hunter-imgur-links input[name="imgur-img-link"]').val(link);
                $('#bug-hunter-imgur-links a').attr('href', link)
                $('#bug-hunter-imgur-links a').text(link);
                $('#bug-hunter-imgur-links input[name="imgur-del-link"]').val('http://imgur.com/delete/' + deleteHash);
                $('#bug-hunter-imgur-links input[name="imgur-markdown"]').val(
                    '![Bug Hunt](' + link + ')'
                );
                $('#bug-hunter-imgur-links').show();
            }
        });
    });

    // make tools work
    //
    $('#tools input[type="button"]').click(function (ev) {
        ev.preventDefault();
        $('#tools-menu').toggle();
        $('#tunnel-menu').hide();
        $('#feedback-menu').hide();
        $('#resol-menu').hide();
        $('#screenshots-menu').hide();
        $('#keyboard-menu').hide();
        $('#shareurl-menu').hide();
        $('#tools-menu').css({
            top: $('#browser').offset().top + 40 + "px",
            left: $('#browser').offset().left +"px"
        });
    });
    $('#tools-menu #tools-ssh').click(function (ev) {
        ev.preventDefault();
        $('#tools-menu').hide();
        $('#resol-menu').hide();
        $('#feedback-menu').hide();
        $('#screenshots-menu').hide();
        $('#keyboard-menu').hide();
        $('#shareurl-menu').hide();
        $('#tunnel-menu').toggle();
        $('#tunnel-menu').css({
            top: $('#browser').offset().top + 40 + "px",
            left: $('#browser').offset().left +"px"
        });
    });
    $('#tools-menu #tools-resol').click(function (ev) {
        ev.preventDefault();
        $('#tools-menu').hide();
        $('#tunnel-menu').hide();
        $('#feedback-menu').hide();
        $('#screenshots-menu').hide();
        $('#keyboard-menu').hide();
        $('#shareurl-menu').hide();
        $('#resol-menu').toggle();
        $('#resol-menu').css({
            top: $('#browser').offset().top + 40 + "px",
            left: $('#browser').offset().left +"px"
        });
    });
    $('#tools-menu #tools-shareurl').click(function (ev) {
        ev.preventDefault();
        $('#tools-menu').hide();
        $('#tunnel-menu').hide();
        $('#feedback-menu').hide();
        $('#screenshots-menu').hide();
        $('#keyboard-menu').hide();
        $('#resol-menu').hide();
        $('#shareurl-menu').toggle();
        $('#shareurl-menu').css({
            top: $('#browser').offset().top + 40 + "px",
            left: $('#browser').offset().left +"px"
        });
        var platform_name = $('#run input[name="platform_name"]').val();
        var platform_version = $('#run input[name="platform_version"]').val();
        var browser = $('#run input[name="browser"]').val();
        var version = $('#run input[name="version"]').val();
        var url = $('#url input').val();
        if (platform_name == "android") {
            var browserlingUrl = 
                "https://browserling.com/browse/" + 
                platform_name + "/" +
                platform_version + "/" +
                encodeURIComponent(url);
        }
        else {
            var browserlingUrl = 
                "https://browserling.com/browse/" + 
                platform_name + "/" +
                platform_version + "/" +
                browser + "/" +
                version + "/" +
                encodeURIComponent(url);
        }
        $('#shareurl-menu input[type="text"]').val(browserlingUrl);
        $('#shareurl-menu input[type="checkbox"]').attr('checked', false);
    });
    $('#tools-menu #tools-feedback').click(function (ev) {
        ev.preventDefault();
        $('#tools-menu').hide();
        $('#tunnel-menu').hide();
        $('#resol-menu').hide();
        $('#screenshots-menu').hide();
        $('#keyboard-menu').hide();
        $('#shareurl-menu').hide();
        $('#feedback-menu').toggle();
        $('#feedback-menu').css({
            top: $('#browser').offset().top + 40 + "px",
            left: $('#browser').offset().left + "px"
        });
    });
    $('#tools-menu #tools-screenshots').click(function (ev) {
        ev.preventDefault();
        $('#tools-menu').hide();
        $('#tunnel-menu').hide();
        $('#resol-menu').hide();
        $('#feedback-menu').hide();
        $('#keyboard-menu').hide();
        $('#shareurl-menu').hide();
        $('#screenshots-menu').toggle();
        $('#screenshots-menu').css({
            top: $('#browser').offset().top + 40 + "px",
            left: $('#browser').offset().left - 100 + "px"
        });
        if ($('#screenshots-menu').is(':visible')) {
            displayScreenshot();
        }
    });
    $('#tools-menu #tools-menu-close a').click(function (ev) {
        ev.preventDefault();
        $('#tools-menu').hide();
    });
    $('#tunnel-menu-close a').click(function (ev) {
        ev.preventDefault();
        $('#tunnel-menu').hide();
    });
    $('#resol-menu-close a').click(function (ev) {
        ev.preventDefault();
        $('#resol-menu').hide();
    });
    $('#screenshots-menu-close a').click(function (ev) {
        ev.preventDefault();
        $('#screenshots-menu').hide();
    });
    $('#shareurl-menu-close a').click(function (ev) {
        ev.preventDefault();
        $('#shareurl-menu').hide();
    });
    $('#feedback-menu-close a').click(function (ev) {
        ev.preventDefault();
        $('#feedback-menu').hide();
    });

    function displayScreenshot () {
        var maxWidth = 300;
        var maxHeight = 225;
        function bestPngFit (width, height) {
            if (width >= maxWidth) {
                var scaleW = width/maxWidth;
                var scaleH = height/maxHeight;
                if (scaleW > scaleH) {
                    return {
                        width : maxWidth,
                        height :  height/scaleW,
                        offsetX : 0,
                        offsetY : (maxHeight-(height/scaleW))/2
                    };
                }
                else {
                    return {
                        width : width / scaleH,
                        height : height / scaleH,
                        offsetX : (maxWidth-(width/scaleH))/2,
                        offsetY : (maxHeight-(height/scaleH))/2
                    };
                }
                return dims;
            }
            else {
                if (height > maxHeight) {
                    var scale = height / maxHeight;
                    return {
                        width : width/scale,
                        height : height/scale,
                        offsetX : (maxWidth - width)/2,
                        offsetY : (maxHeight - height)/2
                    };
                }
                else {
                    return {
                        width : width,
                        height : height,
                        offsetX : (maxWidth - width)/2,
                        offsetY : (maxHeight - height)/2
                    };
                }
            }
        }
        if (connected) {
            var png = display.canvas.toDataURL("image/png");
            var dims = bestPngFit(display.canvas.width, display.canvas.height);
            var img = $('<img src="' + png + '" id="screenshot-png" '+
                    'width="'+ dims.width +'" height="'+ dims.height +'" ' +
                    'style="margin-left:' + dims.offsetX + 'px; ' +
                    'margin-top:' + dims.offsetY + 'px">');
            $('#screenshots-screenshot-not-connected').hide();
            $('#screenshots-screenshot img').remove();
            $('#screenshots-screenshot').append(img);
        }
    }
    $('#screenshots-menu input[name="refresh"]').click(function (ev) {
        displayScreenshot();
    });
    $('#screenshots-menu input[name="cancel"]').click(function (ev) {
        $('#tools input[type="button"]').click();
    });
    $('#screenshots-menu input[name="save"]').click(function (ev) {
        var button = this;

        var title = $('#screenshots-menu input[name="title"]').val();
        var desc = $('#screenshots-menu textarea').val();

        title = title.replace(/^\s+/, '').replace(/\s+$/, '');
        if (title.length == 0) {
            $('#screenshots-menu #screenshot-error').text("Empty screenshot title");
            $('#screenshots-menu #screenshot-error').show();
            return;
        }
        $('#screenshots-menu #screenshot-error').hide();
        $('#screenshots-menu #screenshot-success').hide();

        if ($('#screenshots-screenshot img').length == 0) {
            $('#screenshots-menu #screenshot-error').text("Empty screenshot. Press Refresh.");
            $('#screenshots-menu #screenshot-error').show();
            return;
        }
            
        var image = $('#screenshots-screenshot img').attr('src');
        $(button).val("Saving...");
        $(button).prop('disabled', true);
        $.post('/api/account/screenshots/save', {
            image : image,
            title : title,
            desc : desc
        }, function (data) {
            $(button).val("Save to your account");
            $(button).prop('disabled', false);
            if (/^error/i.test(data)) {
                $('#screenshots-menu #screenshot-error').text(data);
                $('#screenshots-menu #screenshot-error').show();
            }
            else {
                $('#screenshots-menu #screenshot-success').text("Screenshot saved to your account!");
                $('#screenshots-menu #screenshot-success').show();
            }
        });
    });

    function makeVersionsClickable() {
        $('.versions input').each(function () {
            var ver = this;
            $(ver).click(function () {
                $('.versions input').removeClass('selected');
                $(ver).addClass('selected');

                var version = $(ver).attr('value');
                var browser = $(ver)
                    .parent()
                    .parent()
                    .children(':first')
                    .children(':first')
                    .attr('id');
                var url = $('#url input').val();

                $('#run input[name="browser"]').val(browser);
                $('#run input[name="version"]').val(version);

                $('#browser img').attr(
                    'src', '/images/browser-icons/' + browser + '.png'
                );
                $('#browser span').text(version);
                
                $('#browser-menu').hide();

                $('#run input[type="button"]').click();
            });
        });
    }
    makeVersionsClickable();

    // make platforms work
    $('#platforms .platform').each(function () {
        var div = this;
        $(div).click(function () {
            $('#platforms .platform').removeClass('selected');
            $(div).addClass('selected');
        });
    });

    $('#platforms #platform-all').click(function (ev) {
        ev.preventDefault();
        $('.browsers').hide();
        $('#browsers-all').show();
    });

    $('#platforms #platform-winxp').click(function (ev) {
        ev.preventDefault();
        $('.browsers').hide();
        $('#browsers-winxp').show();
    });

    $('#platforms #platform-winvista').click(function (ev) {
        ev.preventDefault();
        $('.browsers').hide();
        $('#browsers-winvista').show();
    });

    $('#platforms #platform-win7').click(function (ev) {
        ev.preventDefault();
        $('.browsers').hide();
        $('#browsers-win7').show();
    });

    $('#platforms #platform-win8').click(function (ev) {
        ev.preventDefault();
        $('.browsers').hide();
        $('#browsers-win8').show();
    });

    $('#platforms #platform-win81').click(function (ev) {
        ev.preventDefault();
        $('.browsers').hide();
        $('#browsers-win81').show();
    });

    $('#platforms #platform-win10').click(function (ev) {
        ev.preventDefault();
        $('.browsers').hide();
        $('#browsers-win10').show();
    });

    $('#platforms #platform-android44').click(function (ev) {
        ev.preventDefault();
        $('.browsers').hide();
        $('#browsers-android44').show();
    });

    $('#platforms #platform-android50').click(function (ev) {
        ev.preventDefault();
        $('.browsers').hide();
        $('#browsers-android50').show();
    });

    $('#platforms #platform-android51').click(function (ev) {
        ev.preventDefault();
        $('.browsers').hide();
        $('#browsers-android51').show();
    });

    $('#platforms #platform-android60').click(function (ev) {
        ev.preventDefault();
        $('.browsers').hide();
        $('#browsers-android60').show();
    });

    $('#platforms #platform-android70').click(function (ev) {
        ev.preventDefault();
        $('.browsers').hide();
        $('#browsers-android70').show();
    });

    $('#platforms #platform-android71').click(function (ev) {
        ev.preventDefault();
        $('.browsers').hide();
        $('#browsers-android71').show();
    });

    // make enter work in url field
    //
    $('#url input').keyup(function(event){
        if (event.which == 13) {
            $('#run input[type="button"]').click();
        }
    });

    // setup tunnels only for dev plans
    //
    if (session.plan != "free") {
        $.get('/api/tunnel/publicKeyExists', function (data) {
            if (/^error/i.test(data)) {
                $('#tunnel-please-wait-error').show();
                $('#tunnel-please-wait-error').text(data);
            }
            else {
                $('#tunnel-please-wait').hide();
                if (data == "exists") {
                    $('#tunnel-open').show();
                }
                else {
                    $('#tunnel-public-key').show();
                }
            }
        });

        // make open tunnel button work
        //
        $('#tunnel-menu #tunnel-open input[type="button"]').click(function () {
            var button = this;
            var oldVal = $(this).val();
            $(this).val("Wait...");
            $(this).prop('disabled', true);
            $.get('/api/tunnel/open', function (data) {
                $(button).val(oldVal);
                $(button).prop('disabled', false);
                if (/^error/i.test(data)) {
                    $('#tunnel-open-error').show();
                    $('#tunnel-open-error').text(data);
                }
                else {
                    var port = data;
                    var unixEmail = (function unixifyEmail (email) {
                        return email.replace(/[^a-zA-Z0-9]/g, '_').substr(0,32);
                    })(session.email);

                    var local = $('#tunnel-open input[type="text"]').val();

                    if ($('#tunnel-menu #tunnel-guide-windows').is(":visible")) {
                        $('#tunnel-opened-command').val(
                            'plink.exe -N -R ' + port + ':' + local + ' ' +
                                unixEmail + '@tunnel.browserling.com');
                    }
                    else {
                        $('#tunnel-opened-command').val(
                            'ssh -NR ' + port + ':' + local + ' ' +
                                unixEmail + '@tunnel.browserling.com');
                    }

                    $('#tunnel-opened-url').text('http://tunnel.browserling.com:'+port)
                    $('#tunnel-opened-url').attr('href', 'http://tunnel.browserling.com:'+port)

                    $('#tunnel-opened-url').click(function (ev) {
                        $('#url input').val($(this).attr('href'));
                        $('#run input[type="button"]').click();
                        ev.preventDefault();
                    });

                    $('#tunnel-open').hide();
                    $('#tunnel-opened').show();
                    $('#tunnel-opened input[name="port"]').val(port);
                }
            });
        });

        // make close tunnel button work
        $('#tunnel-menu input#tunnel-close').click(function () {
            var button = this;
            var oldVal = $(this).val();
            $(this).val("Wait...");
            $(this).prop('disabled', true);
            var port = $('#tunnel-opened input[name="port"]').val();
            $.get('/api/tunnel/close/' + port, function () {
                $(button).val(oldVal);
                $(button).prop('disabled', false);
                $('#tunnel-open').show();
                $('#tunnel-opened').hide();
            });
        });

        // make update public key work
        $('#tunnel-menu #tunnel-public-key input[type="button"]').click(
            function () {
                var button = this;
                var oldVal = $(this).val();
                $(this).val("Wait...");
                $(this).prop('disabled', true);
                var key = $('#tunnel-menu #tunnel-public-key textarea').val();
                $.post('/api/tunnel/setPublicKey', {
                    key : key
                }, function (data) {
                    $(button).val(oldVal);
                    $(button).prop('disabled', false);
                    if (/^error/i.test(data)) {
                        $('#tunnel-public-key-error').show();
                        $('#tunnel-public-key-error').text(data);
                    }
                    else {
                        $('#tunnel-menu #tunnel-public-key').hide();
                        $('#tunnel-open').show();
                    }
                });
            }
        );

        // update opened tunnel string
        $('#tunnel-menu input#tunnel-opened-host').keyup(function () {
            var unixEmail = (function unixifyEmail (email) {
                return email.replace(/[^a-zA-Z0-9]/g, '_').substr(0,32);
            })(session.email);

            var port = $('#tunnel-opened input[name="port"]').val();
            var local = $('#tunnel-menu input#tunnel-opened-host').val();
            if ($('#tunnel-menu #tunnel-guide-windows').is(":visible")) {
                $('#tunnel-opened-command').val(
                    'plink.exe -N -R ' + port + ':' + local + ' ' +
                        unixEmail + '@tunnel.browserling.com'
                );
            }
            else {
                $('#tunnel-opened-command').val(
                    'ssh -NR ' + port + ':' + local + ' ' +
                        unixEmail + '@tunnel.browserling.com'
                );
            }
        });

        // make windows tunnel options work
        $('#tunnel-menu #tunnel-link-windows').click(function (ev) {
            ev.preventDefault();
            $('#tunnel-menu #tunnel-guide-windows').show();
            $('#tunnel-menu #tunnel-guide-linux-mac').hide();
            $(this).addClass('selected');
            $('#tunnel-menu #tunnel-link-linux-mac').removeClass('selected');

            var unixEmail = (function unixifyEmail (email) {
                return email.replace(/[^a-zA-Z0-9]/g, '_').substr(0,32);
            })(session.email);
            var port = $('#tunnel-opened input[name="port"]').val();
            var local = $('#tunnel-menu input#tunnel-opened-host').val();
            if ($('#tunnel-opened').is(":visible")) {
                $('#tunnel-opened-command').val(
                    'plink.exe -N -R ' + port + ':' + local + ' ' +
                        unixEmail + '@tunnel.browserling.com'
                );
            }
        });

        // make linux/mac tunnel option work
        $('#tunnel-menu #tunnel-link-linux-mac').click(function (ev) {
            ev.preventDefault();
            $('#tunnel-menu #tunnel-guide-linux-mac').show();
            $('#tunnel-menu #tunnel-guide-windows').hide();
            $(this).addClass('selected');
            $('#tunnel-menu #tunnel-link-windows').removeClass('selected');

            var unixEmail = (function unixifyEmail (email) {
                return email.replace(/[^a-zA-Z0-9]/g, '_').substr(0,32);
            })(session.email);
            var port = $('#tunnel-opened input[name="port"]').val();
            var local = $('#tunnel-menu input#tunnel-opened-host').val();
            if ($('#tunnel-opened').is(":visible")) {
                $('#tunnel-opened-command').val(
                    'ssh -NR ' + port + ':' + local + ' ' +
                        unixEmail + '@tunnel.browserling.com'
                );
            }
        });
    }

    // make resolution menu work
    //
    $('#resol-menu .list a').click(function (ev) {
        ev.preventDefault();
        $('#resol-menu .list a').removeClass('selected');
        $(this).addClass('selected');
        var w = $(this).text().split('x')[0];
        var h = $(this).text().split('x')[1];
        $('#resol-custom input[name="resol-custom-w"]').val(w);
        $('#resol-custom input[name="resol-custom-h"]').val(h);
        if (connected) {
            socket.emit('resize', w, h);
        }
    });

    $('#resol-menu input[name="update"]').click(function () {
        var width = $('#resol-custom input[name="resol-custom-w"]').val();
        var height = $('#resol-custom input[name="resol-custom-h"]').val();

        if (width>3000) width=3000;
        if (height>3000) height=3000;

        $('#resol-custom input[name="resol-custom-w"]').val(width);
        $('#resol-custom input[name="resol-custom-h"]').val(height);

        if (connected) {
            if (session.plan == "free") {
                if (width == 1024 && height == 768)
                    socket.emit('resize', width, height);
                if (width == 800 && height == 600)
                    socket.emit('resize', width, height);
                if (width == 320 && height == 480)
                    socket.emit('resize', width, height);
            }
            else {
                socket.emit('resize', width, height);
            }
        }
    });

    // make short urls for browser sharing work
    //
    var shortUrlCache = {};
    var shortUrlCacheReverse = {};
    $('#shareurl-menu #shorturl').click(function () {
        var url = $('#shareurl-menu input[name="shareurl"]').val();
        if (/browserling.com\/b\//.test(url)) {
            // already shortened, display the long URL
            $('#shareurl-menu input[name="shareurl"]').val(shortUrlCacheReverse[url]);
            return;
        }
        if (shortUrlCache[url]) {
            $('#shareurl-menu input[name="shareurl"]').val(shortUrlCache[url]);
            return;
        }

        $.post('/api/short-url', {
            url : url
        }, function (data) {
            if (/^error/i.test(data)) {
                $('#shareurl-error').text(data);
                $('#shareurl-error').show();
            }
            else {
                var id = data.split(' ')[1]; // ok <id>
                var shortUrl = 'https://browserling.com/b/' + id;
                $('#shareurl-menu input[name="shareurl"]').val(shortUrl);
                shortUrlCache[url] = shortUrl;
                shortUrlCacheReverse[shortUrl] = url;
            }
        });
    });

    // make feedback work
    //
    $('#feedback-menu #send input').click(function () {
        var button = $(this);

        var email = $('#feedback-menu input[name="email"]').val();
        var message = $('#feedback-menu textarea').val();
        email = email.replace(/^\s+/, '').replace(/\s+$/, '');
        message = message.replace(/^\s+/, '').replace(/\s+$/, '');

        if (email.length != 0) {
            if (!/.+@.+\..+/.test(email)) {
                $('#feedback-error').text("Invalid email!");
                $('#feedback-error').show();
                return;
            }
        }

        if (message.length < 10) {
            $('#feedback-error').text("The message is too short!");
            $('#feedback-error').show();
            return;
        }

        $('#feedback-error').hide();
        $('#feedback-thanks').hide();
        var oldValue = button.val();
        button.prop('disabled', true);
        button.val("Plase wait...");
        $.post('/api/feedback', {
            email : email,
            message : message
        }, function (data) {
            button.prop('disabled', false);
            button.val(oldValue);
            if (/^error/i.test(data)) {
                $('#feedback-error').text(data);
                $('#feedback-error').show();
            }
            else {
                $('#feedback-error').hide();
                $('#feedback-thanks').text("Thanks for the feedback!");
                $('#feedback-thanks').show();
            }
        });
    });

    // make tired of waiting get dev plan button work
    $('#queue #queue-skip-get-plan').click(function (ev) {
        ev.preventDefault();
        $.post('/api/ui-event', {
            event : 'tired-of-waiting-click'
        });

        setTimeout(function () {
            window.location.href = '/#pricing';
        }, 100);
    });

    // make timeout upgrade button work
    $('#times-up-upgrade input').click(function () {
        $.post('/api/ui-event', {
            event : 'times-up-upgrade-click'
        });

        window.location.href = '/#pricing';
    });

    // make free limit upgrade button work
    $('#limit-reached input').click(function () {
        $.post('/api/ui-event', {
            event : 'limit-reached-upgrade-click'
        });

        window.location.href = '/#pricing';
    });

    // make login-or-upgrade upgrade button work
    $('#login-or-paid-plan input').click(function () {
        $.post('/api/ui-event', {
            event : 'login-or-paid-plan-upgrade-click'
        });

        window.location.href = '/#pricing';
    });

    // resize top menu when the browser resizes
    function resizeMenu () {
    }

    // resize canvas when the browser windows resizes
    function resizeCanvas () {
        var header = $('#header');
        var elementBottom = header.position().top + header.outerHeight(true);
        var freeHeight = $(window).height() - elementBottom;
        var freeWidth = $(window).width();

        console.log(remainingHeight, remainingWidth); // Height below element
    }

    $(window).resize(function () {
        //resizeMenu();
        //resizeCanvas();
    });
});
    $(function () {
    var shift = 'off';
    var caps = 'off';

    function fadeIn(el) {
      el.style.opacity = 0;   
      var tick = function() {
        el.style.opacity = +el.style.opacity + 0.1;
        if (+el.style.opacity < 1) {
          (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
      };
      tick();
    }

    function changeKeyCase (shiftOrCaps) {
    console.log('called');
        var keys = document.querySelectorAll('.key');
        for (var i = 0; i < keys.length; i++) {
            var node = keys[i];
            var val = node.firstChild.nodeValue;
            if (KeyboardKeys['shift-' + shiftOrCaps][val] !== undefined) 
                node.firstChild.nodeValue = KeyboardKeys['shift-' + shiftOrCaps][val];
        }
    }

    var shifts = document.querySelectorAll('.shift');
    for (var i = 0; i < shifts.length; i++) {
        var key = shifts[i];
        key.addEventListener('click', function (ev) {
            changeKeyCase(shift);
            shift = shift == 'off' ? 'on' : 'off';
            if (connected) {
                if (shift == 'on') {
                    socket.emit('sendKeyDown', {
                        keyCode : 16,
                        shiftMask : 1
                    });
                }
                else {
                    socket.emit('sendKeyUp', {
                        keyCode : 16,
                        shiftMask : 0
                    });
                }
            }
        });
    }

    document.querySelector('.caps').addEventListener('click', function (key) {
        changeKeyCase(caps);
        caps = caps == 'off' ? 'on' : 'off';
        if (connected) {
            if (caps == 'on') {
                socket.emit('sendKeyDown', {
                    keyCode : 16,
                    shiftMask : 1
                });
            }
            else {
                socket.emit('sendKeyUp', {
                    keyCode : 16,
                    shiftMask : 0
                });
            }
        }
    });

    var keys = document.querySelectorAll('.key');
    for (var i = 0; i < keys.length; i++) {
        var node = keys[i];
        node.addEventListener('click', function (ev) {
            fadeIn(this);

            var key = this.firstChild.nodeValue;
            if (key == 'Shift' || key == 'Caps') {
                return;
            }

            if (keyCodes[key]) {
                var keyScanCode = keyCodes[key];
                 
                if (connected) {
                    var shiftMask = (shift == 'on' || caps == 'on') ? 1 : 0;
                    console.log(1, key, keyScanCode, shiftMask);
                    socket.emit('sendKeyDown', {
                        keyCode : keyScanCode,
                        shiftMask : shiftMask
                    });
                    socket.emit('sendKeyUp', {
                        keyCode : keyScanCode,
                        shiftMask : shiftMask
                    });
                }
            }
            else {
                var keyScanCode = keyCodesRegular[key];

                if (connected) {
                    var shiftMask = (shift == 'on' || caps == 'on') ? 1 : 0;
                    console.log(2, key, keyScanCode, shiftMask);
                    socket.emit('sendKeyDown', {
                        keyCode : keyScanCode,
                        shiftMask : shiftMask
                    });
                    socket.emit('sendKeyUp', {
                        keyCode : keyScanCode,
                        shiftMask : shiftMask
                    });
                }
            }
            if (shift == 'on') {
                changeKeyCase(shift);
                socket.emit('sendKeyUp', {
                    keyCode : 16,
                    shiftMask : 0
                });
                shift = 'off';
            }
        });
    }

    /*
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backsp'
    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backsp'

    'TAB', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'
    'TAB', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'

    'CAPS', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'
    'CAPS', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'

    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift'
    */

    var KeyboardKeys = keys = {
        'shift-off' : {
            'ESC' : 'ESC',
            'F1' : 'F1',
            'F2' : 'F2',
            'F3' : 'F3',
            'F4' : 'F4',
            'F5' : 'F5',
            'F6' : 'F6',
            'F7' : 'F7',
            'F8' : 'F8',
            'F9' : 'F9',
            'F10' : 'F10',
            'F11' : 'F11',
            'F12' : 'F12',

            '`' : '~', 
            '1' : '!', 
            '2' : '@', 
            '3' : '#', 
            '4' : '$', 
            '5' : '%', 
            '6' : '^', 
            '7' : '&', 
            '8' : '*', 
            '9' : '(', 
            '0' : ')', 
            '-' : '_', 
            '=' : '+', 
            'Backsp' : 'Backsp',

            'TAB' : 'TAB',
            'q' : 'Q', 
            'w' : 'W', 
            'e' : 'E', 
            'r' : 'R', 
            't' : 'T', 
            'y' : 'Y', 
            'u' : 'U', 
            'i' : 'I', 
            'o' : 'O', 
            'p' : 'P', 
            '[' : '{', 
            ']' : '}', 
            '\\' : '|',

            'Caps' : 'Caps', 
            'a' : 'A', 
            's' : 'S', 
            'd' : 'D', 
            'f' : 'F', 
            'g' : 'G', 
            'h' : 'H', 
            'j' : 'J', 
            'k' : 'K', 
            'l' : 'L', 
            ';' : ':', 
            '\'' : '"', 
            'Enter' : 'Enter',

            'Shift' : 'Shift', 
            'z' : 'Z', 
            'x' : 'X', 
            'c' : 'C', 
            'v' : 'V', 
            'b' : 'B', 
            'n' : 'N', 
            'm' : 'M', 
            ',' : '<', 
            '.' : '>', 
            '/' : '?', 

            'Ctrl' : 'Ctrl',
            'WinKey' : 'WinKey',
            'Alt' : 'Alt',
            'Space' : 'Space',
            'OptKey' : 'OptKey'
        },
        'shift-on' : {
            'ESC' : 'ESC',
            'F1' : 'F1',
            'F2' : 'F2',
            'F3' : 'F3',
            'F4' : 'F4',
            'F5' : 'F5',
            'F6' : 'F6',
            'F7' : 'F7',
            'F8' : 'F8',
            'F9' : 'F9',
            'F10' : 'F10',
            'F11' : 'F11',
            'F12' : 'F12',

            '~' : '`', 
            '!' : '1',
            '@' : '2',
            '#' : '3',
            '$' : '4',
            '%' : '5',
            '^' : '6',
            '&' : '7',
            '*' : '8',
            '(' : '9',
            ')' : '0',
            '_' : '-',
            '+' : '=',
            'Backsp' : 'Backsp',

            'TAB' : 'TAB',
            'Q' : 'q',
            'W' : 'w',
            'E' : 'e',
            'R' : 'r',
            'T' : 't',
            'Y' : 'y',
            'U' : 'u',
            'I' : 'i',
            'O' : 'o',
            'P' : 'p',
            '{' : '[',
            '}' : ']',
            '"' : '\'',

            'Caps' : 'Caps',
            'A' : 'a',
            'S' : 's',
            'D' : 'd',
            'F' : 'f',
            'G' : 'g',
            'H' : 'h',
            'J' : 'j',
            'K' : 'k',
            'L' : 'l',
            ':' : ';',
            '|' : '\\',
            'Enter' : 'Enter',

            'Shift' : 'Shift',
            'Z' : 'z',
            'X' : 'x',
            'C' : 'c',
            'V' : 'v',
            'B' : 'b',
            'N' : 'n',
            'M' : 'm',
            '<' : ',',
            '>' : '.',
            '?' : '/',

            'Ctrl' : 'Ctrl',
            'WinKey' : 'WinKey',
            'Alt' : 'Alt',
            'Space' : 'Space',
            'OptKey' : 'OptKey'
        }
    };

    var keyCodes = {
        'Ctrl' : 17,
        'Alt' : 18,
        'WinKey' : 91,
        'OptKey' : 93,
        'Space' : 32,
        'ESC' : 27,
        'F1' : 112,
        'F2' : 113,
        'F3' : 114,
        'F4' : 115,
        'F5' : 116,
        'F6' : 117,
        'F7' : 118,
        'F8' : 119,
        'F9' : 120,
        'F10' : 121,
        'F11' : 122,
        'F12' : 123,
        'Backsp' : 8,
        'TAB' : 9,
        'Enter' : 13
    };

    var keyCodesRegular = {
        '`' : 192,
        '~' : 192,
        '1' : 49,
        '!' : 49,
        '2' : 50,
        '@' : 50,
        '3' : 51,
        '#' : 51,
        '4' : 52,
        '$' : 52,
        '5' : 53,
        '%' : 53,
        '6' : 54,
        '^' : 54,
        '7' : 55,
        '&' : 55,
        '8' : 56,
        '*' : 56,
        '9' : 57,
        '(' : 57,
        '0' : 48,
        ')' : 48,
        '-' : 189,
        '_' : 189,
        '=' : 187,
        '+' : 187,

        'q' : 81,
        'Q' : 81,
        'w' : 87,
        'W' : 87,
        'e' : 69,
        'E' : 69,
        'r' : 82,
        'R' : 82,
        't' : 84,
        'T' : 84,
        'y' : 89,
        'Y' : 89,
        'u' : 85,
        'U' : 85,
        'i' : 73,
        'I' : 73,
        'o' : 79,
        'O' : 79,
        'p' : 80,
        'P' : 80,
        '[' : 219,
        '{' : 219,
        ']' : 221,                                                                                                             
        '}' : 221,
        '\\' : 220,
        '|' : 220,

        'a' : 65,
        'A' : 65,
        's' : 83,
        'S' : 83,
        'd' : 68,
        'D' : 68,
        'f' : 70,
        'F' : 70,
        'g' : 71,
        'G' : 71,
        'h' : 72,
        'H' : 72,
        'j' : 74,
        'J' : 74,
        'k' : 75,
        'K' : 75,
        'l' : 76,
        'L' : 76,
        ';' : 186,
        ':' : 186,
        '\'' : 222,
        '"' : 222,

        'z' : 90,
        'Z' : 90,
        'x' : 88,
        'X' : 88,
        'c' : 67,
        'C' : 67,
        'v' : 86,
        'V' : 86,
        'b' : 66,
        'B' : 66,
        'n' : 78,
        'N' : 78,
        'm' : 77,
        'M' : 77,
        ',' : 188,
        '<' : 188,
        '.' : 190,
        '>' : 190,
        '/' : 191,
        '?' : 191
    };
});

    function CanvasEditor (canvas_) {
    if (!(this instanceof CanvasEditor)) return new CanvasEditor(canvas_);

    var self = this;

    var canvas = canvas_;

    var tool = 'pen';
    var color = '#ff0000';

    var undoStack = [], undoLength = 0, redoStack = [];
    var mouseStatus, lastX, lastY;
    var lastDownTarget;

    var active = true;

    self.setTool = function (tool_) {
        tool = tool_;
    }

    self.setColor = function (color_) {
        color = color_;
    }

    self.undo = function () {
        if (undoStack.length) {
            createRedoPoint();
            var u = undoStack.pop();
            var ctx = getContext();
            ctx.putImageData(u, 0, 0);
        }
    }

    self.redo = function () {
        if (redoStack.length) {
            createUndoPoint();
            var r = redoStack.pop();
            var ctx = getContext();
            ctx.putImageData(r, 0, 0);
        }
    }

    self.attach = function (canvas_) {
        // attach an existing canvas to editor
        active = true;
        canvas = canvas_;
    }

    self.detach = function () {
        // quick hack for now, set active=false
        active = false;

        // proper solution would be to unbind mousemove, mousedown, mouseup events
        // but don't have time to figure that out right now
    }

    $(canvas).mousemove(function (ev) {
        if (!active) return;

        if (tool == 'pen') {
            if (mouseStatus == 'down') {
                var x = getXY(ev).x;
                var y = getXY(ev).y;
                drawLine(lastX, lastY, x, y);
                lastX = x;
                lastY = y;
            }
        }
        else if (tool == 'rectangle') {
            if (mouseStatus == 'down') {
                // as we move mouse, erase the old rectangle and draw the new one
                // this is accomplished by using the undo array
                if (undoStack.length > undoLength)
                    self.undo();

                createUndoPoint();

                var x = getXY(ev).x;
                var y = getXY(ev).y;
                drawRectangle(lastX, lastY, x, y);
            }
        }
        else if (tool == 'line') {
            if (mouseStatus == 'down') {
                if (undoStack.length > undoLength)
                    self.undo();

                createUndoPoint();

                var x = getXY(ev).x;
                var y = getXY(ev).y;
                drawLine(lastX, lastY, x, y);
            }
        }
    });

    $(canvas).mousedown(function (ev) {
        if (!active) return;

        createUndoPoint();
        undoLength = undoStack.length;

        mouseStatus = 'down';
        lastX = getXY(ev).x;
        lastY = getXY(ev).y;
    });

    $(canvas).mouseup(function (ev) {
        if (!active) return;

        mouseStatus = 'up';
        if (tool == 'pen') {
            redoStack = [];
        }
        else if (tool == 'rectangle') {
            self.undo();

            var x = getXY(ev).x;
            var y = getXY(ev).y;
            drawRectangle(lastX, lastY, x, y);
            redoStack = [];
        }
        else if (tool == 'line') {
            self.undo();

            var x = getXY(ev).x;
            var y = getXY(ev).y;
            drawLine(lastX, lastY, x, y);
            redoStack = [];
        }
        else if (tool == 'text') {
            // text tool is implemented by using textarea
            var x = getXY(ev).x;
            var y = getXY(ev).y;

            //todo: make nicer (transparent, match selected color, use newlines)
            var top = $(canvas).offset().top + y + "px";
            var left = $(canvas).offset().left + x + "px";
            var style = "position: absolute; top: " + top + "; left: " + left + "; width: 220px; heigh: 110px; z-index: 100";

            var textDiv = $('<div id="canvas-text" style="' + style + '">');
            var textarea = $('<textarea style="width: 220px; height: 100px; font-family: Arial; font-size: 18px">');
            textDiv.append($('<div>').append(textarea));

            var add = $('<input type="submit" name="add" value="Add" style="margin-right: 5px">');
            var cancel = $('<input type="submit" name="cancel" value="Cancel">');

            add.on('click', function () {
                drawText(textarea.val(), x+3, y+19); // todo: figure out why there is 19px difference
                redoStack = [];
                textDiv.remove();
            });

            cancel.on('click', function () {
                textDiv.remove();
            });

            textDiv.append($('<div>').append(add).append(cancel));
            $('body').append(textDiv);

            textarea.focus();
        }
    });

    function drawLine(x1, y1, x2, y2) {
        var ctx = getContext();

        ctx.beginPath(); 
        ctx.strokeStyle = color;
        ctx.lineJoin = "round";
        ctx.lineWidth = 2;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.closePath();
        ctx.stroke();
    }

    function drawRectangle (x1, y1, x2, y2) {
        var ctx = getContext();

        // rect() function is idiotic:
        // this doesn't work: ctx.rect(x1, y1, x2, y2);
        // because rect is defined as rect(x1, y1, width, height)
        // and you've to do manual calculations of x2, y2
        // instead draw rectangle using 4 lines

        ctx.beginPath(); 
        ctx.strokeStyle = color;
        ctx.lineJoin = "round";
        ctx.lineWidth = 2;
        ctx.moveTo(x1, y1); // upper left to upper right
        ctx.lineTo(x2, y1);
        ctx.moveTo(x2, y1); // upper right to lower right
        ctx.lineTo(x2, y2);
        ctx.moveTo(x2, y2); // lower right to lower left
        ctx.lineTo(x1, y2);
        ctx.moveTo(x1, y2); // lower left to upper left, completes rectangle
        ctx.lineTo(x1, y1);
        ctx.closePath();
        ctx.stroke();
    }

    function drawText (text, x, y) {
        var ctx = getContext();
        ctx.font = "18px Arial";
        ctx.fillStyle = color;
        ctx.fillText(text, x, y)
    }

    function createUndoPoint () {
        var ctx = getContext();
        undoStack.push(ctx.getImageData(0, 0, $(canvas).width(), $(canvas).height()));
    }

    function createRedoPoint () {
        var ctx = getContext();
        redoStack.push(ctx.getImageData(0, 0, $(canvas).width(), $(canvas).height()));
    }

    function getContext () {
        var ctx = canvas.getContext('2d');
        return ctx;
    }

    function getXY (ev) {
        x = ev.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - $(canvas).offset().left;
        y = ev.clientY + document.body.scrollTop + document.documentElement.scrollTop - $(canvas).offset().top;
        return { x: x, y: y };
    }
}

function CanvasEditorMenu (canvasEditor) {
    if (!(this instanceof CanvasEditorMenu)) return new CanvasEditor(canvasEditor);
    if (!(canvasEditor instanceof CanvasEditor)) throw new Error("canvasEditor is not an insance of CanvasEditor")

    var self = this;
    var menuDiv;

    self.destroy = function () {
        canvasEditor.detach();
        menuDiv.remove();
    }

    self.create = function () {
        menuDiv = $('<div id="canvas-editor-controls">');

        function createIcon (name, desc) {
            return $('<img src="/images/canvas-editor/' + name + '.png" class="icon" title="' + desc + '">');
        }   

        function createControl () {
            return $('<div class="control">');
        }

        function createMenuItem (name, desc) {
            var icon = createIcon(name, desc);
            var control = createControl();
            control.append(icon);
            return control;
        }

        var pen = createMenuItem('tool-pen', 'Pen (free drawing)');
        pen.on('click', function () {
            $('#canvas-editor-menu .control').removeClass('active');
            $(this).addClass('active');
            canvasEditor.setTool('pen');
        });
        pen.addClass('active'); // pen is already active when editor loads
        menuDiv.append(pen);

        var rectangle = createMenuItem('tool-rectangle', 'Rectangle');
        rectangle.on('click', function () {
            $('#canvas-editor-menu .control').removeClass('active');
            $(this).addClass('active');
            canvasEditor.setTool('rectangle');
        });
        menuDiv.append(rectangle);

        var line = createMenuItem('tool-line', 'Line');
        line.on('click', function () {
            $('#canvas-editor-menu .control').removeClass('active');
            $(this).addClass('active');
            canvasEditor.setTool('line');
        });
        menuDiv.append(line);

        var text = createMenuItem('tool-text', 'Write text');
        text.on('click', function () {
            $('#canvas-editor-menu .control').removeClass('active');
            $(this).addClass('active');
            canvasEditor.setTool('text');
        });
        menuDiv.append(text);

        var undo = createMenuItem('tool-undo', 'Undo');
        undo.on('click', function () {
            canvasEditor.undo();
        });
        menuDiv.append(undo);

        var redo = createMenuItem('tool-redo', 'Redo');
        redo.on('click', function () {
            canvasEditor.redo();
        });
        menuDiv.append(redo);

        var white = createMenuItem('color-white', 'White color');
        white.on('click', function () {
            canvasEditor.setColor('white');
        });
        menuDiv.append(white);

        var black = createMenuItem('color-black', 'Black color');
        black.on('click', function () {
            canvasEditor.setColor('black');
        });
        menuDiv.append(black);

        var red = createMenuItem('color-red', 'Red color');
        red.on('click', function () {
            canvasEditor.setColor('red');
        });
        menuDiv.append(red);

        var green = createMenuItem('color-green', 'Green color');
        green.on('click', function () {
            canvasEditor.setColor('green');
        });
        menuDiv.append(green);

        var blue = createMenuItem('color-blue', 'Blue color');
        blue.on('click', function () {
            canvasEditor.setColor('blue');
        });
        menuDiv.append(blue);

        return menuDiv;
    }
}
      var is_ie8_unique_variable_xyzzy = false;
    var is_ie9_unique_variable_xyzzy = false;

      function isCanvasSupported () {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext && canvas.getContext('2d');
        return !!context;
      }

      function isWebpSupported () {
        if (!isCanvasSupported()) {
          return false;
        }
        var canvas = document.createElement('canvas');
        var supportsWebp = canvas.toDataURL('image/webp').indexOf('data:image/webp') == 0;

        // chrome older or equal to 21 don't support webp well
        if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
            && window.chrome)
        {
          var m = navigator.userAgent.match(/Chrome\/(\d+)/);
          if (m) {
            var chromeVersion = parseInt(m[1], 10);
            if (chromeVersion <= 21) {
              return false;
            }
          }
        }

        return supportsWebp;
      }

      var browserCapabilities = {
        canvas : isCanvasSupported(),
        webp : isWebpSupported(),
        ie8 : is_ie8_unique_variable_xyzzy,
        ie9 : is_ie9_unique_variable_xyzzy
      };

      var login_or_paid_plan = 0;
      if (navigator.userAgent) {
        var match = navigator.userAgent.match(/Chrome\/(\d+)/);
        if (match) {
          if (!/Edge\//.test(navigator.userAgent)) {
            var ua_browser = 'chrome';
            var ua_version = match[1];
          }
        }
      }

      var connected = false;
      var bugHunterActive = false;
      var disconnectedWhileBugHunting = false;
      var sessionTimeout = false;
      var timer; // rename to "planTimer"
      var canvasEditor, canvasEditorMenu;
      var element = display.element;
  if (center === true){      
  element.css('margin', 'auto')
  }
          element.attr('tabindex', 0) // so the div can receive focus

      if (platform_name == "android") {
        element
          .width(480)
          .height(800);
      }
      else {
        element
          .width(1024)
          .height(768);
      }
      display.canvas.oncontextmenu = function () { return false; } // do nothing on right click
      $(someelemento).append(element);

      function timesUp () {
        sessionTimeout = true;
        if (bugHunterActive) return; // display time's up message after closing bug hunter
        $('#times-up').fadeIn();
      }

      function disconnect () {
          if ($('#idle-timeout').is(':visible')) return;
          if ($('#times-up').is(':visible')) return;
          if ($('#limit-reached').is(':visible')) return;
          if (bugHunterActive) {
            // if we disconnect and bug hunter is active,
            // display the disconnected message only after bug hunter has been closed
            disconnectedWhileBugHunting = false;
          }
          else {
            $('#disconnected').fadeIn();
          }
          if (timer) clearInterval(timer);
      }

      var connectingTimer;
      function queueConnected (queueLength) {
        clearInterval(connectingTimer);
        if (session.plan === "free")
          $('#queue-status').text("Waiting in queue...");
        else
          $('#queue-status').text("Connecting to the browser...");
      }

      function queueDisconnected () {
          $('#queue-status').text("Disconnected");
      }

      function queueInvalidNew (reason) {
        $('#queue-error').show();
        $('#queue-error-text').text(reason);
      }

      function queueFreeLimit () {
        $('#queue').hide();
        $('#limit-reached').fadeIn();
      }

      function queueNext () {
          var currPos = $('#queue-length span.queue-position').text();
          currPos--;
          $('#queue-length span.queue-position').text(currPos);
          if (totalServers == 0) {
            // todo: queueLength undefined
            $('#queue-wait-time span.queue-wait-time').text(parseInt(queueLength * 3,10));
          }
          else {
            $('#queue-wait-time span.queue-wait-time').text(parseInt(currPos * 3/totalServers,10));
          }
      }

      function queueDecLength () {
          var currLen = $('#queue-length span.queue-length').text();
          currLen--;
          $('#queue-length span.queue-length').text(currLen);
      }

      function queueIncLength () {
          var currLen = $('#queue-length span.queue-length').text();
          currLen++;
          $('#queue-length span.queue-length').text(currLen);
      }

      var totalServers;
      function queueStart (queueLength, serverCount) {
          totalServers = serverCount;
          $('#queue-length span.queue-position').text(queueLength);
          $('#queue-length span.queue-length').text(queueLength);
          $('#queue-length').fadeIn();

          if (serverCount == 0) {
            $('#queue-wait-time span.queue-wait-time').text(parseInt(queueLength * 3,10));
          }
          else {
            $('#queue-wait-time span.queue-wait-time').text(parseInt(queueLength * 3/serverCount,10));
          }
          $('#queue-wait-time').fadeIn();
      }

      var socket;
      var availableBrowsers = {};
      function queueYourTurn (job) {
        if (session.plan == "free") {
          try {
            var audio = $('<audio id="sound-start" src="https://browserling.com/media/start.mp3"></audio>');
            $('body').append(audio);
            $('#sound-start')[0].play();
          }
          catch (err) { }
        }
        
        queue.disconnect();

        if (session.plan == "free") {
          $('#queue-status').text("Your turn is coming up!")
        }
        else {
          $('#queue-status').text("Your browser is coming up!")
        }

        var encoderUrl;
        var encoder = job.encoder;
        if (encoder == "192.168.1.5") {
          encoderUrl = "http://192.168.1.5:3000";
        }
        else if (encoder == "127.0.0.1") {
          encoderUrl = "http://127.0.0.1:3000";
        }
        else if (encoder == "localhost") {
          encoderUrl = "http://localhost:3000";
        }
        else {
          var dashEncoder = encoder.replace(/\./g,'-')
          encoderUrl = "https://encoder-" + dashEncoder + ".browserling.com";
        }

        socket = io(
          encoderUrl,
          {
            reconnection : false
          }
        );

        socket.on('connect', function () {
          if (job.multiplexPort) {
            socket.emit('multiplexPort', job.multiplexPort);
          }
          else {
            socket.emit('confirmId', job.id, ua_browser, ua_version, browserCapabilities)
          }
        });

        socket.on('confirmedMultiplexPort', function () {
          socket.emit('confirmId', job.id, ua_browser, ua_version, browserCapabilities);
        });

        socket.on('confirmedId', function () {
          connected = true;

          if (bugHunterActive) {
            $('#bug-hunter-not-connected').fadeOut();
            canvasEditor.attach(display.canvas);
          }

          var platform_name = $('#run input[name="platform_name"]').val();
          var platform_version = $('#run input[name="platform_version"]').val();
          var browser = $('#run input[name="browser"]').val();
          var version = $('#run input[name="version"]').val();
          var url = $('#url input').val();

          socket.emit('navigate', browser, version, url);

          $('#queue').fadeOut(function () {
            $(someelemento).fadeIn();
          });

          var mouseMask = 0;
          var shiftMask = 0;

          var idleTimeoutTimer;
          function resetIdleTimeoutTimer () {
            clearTimeout(idleTimeoutTimer);
            idleTimeoutTimer = setTimeout(function () {
              if (connected) {
              }
            }, 2 * 3600 * 1000);
          }
          resetIdleTimeoutTimer();

          element
              .mousemove(function (ev) {
                  if (connected && !bugHunterActive) {
                    //display.element.focus();
                    var pos = calcMousePos(ev);
                    socket.emit('sendPointer', {
                      x : pos.x,
                      y : pos.y,
                      mouseMask : mouseMask
                    });
                  }
                  resetIdleTimeoutTimer();
              })
              .mousedown(function (ev) {
                  if (ev.which == 1) {
                    // left click
                    mouseMask = 1;
                  }
                  else if (ev.which == 2) {
                    // middle click
                    mouseMask = 2;
                  }
                  else if (ev.which == 3) {
                    // right click
                    mouseMask = 4;
                  }
                  else {
                    mouseMask = 1;
                  }
                  if (connected && !bugHunterActive) {
                    var pos = calcMousePos(ev);
                    socket.emit('sendPointer', {
                          x : pos.x,
                          y : pos.y,
                          mouseMask : mouseMask
                    });
                    resetIdleTimeoutTimer();
                  }
                  ev.preventDefault();
              })
              .mouseup(function (ev) {
                  mouseMask = 0;
                  if (connected && !bugHunterActive) {
                    var pos = calcMousePos(ev);
                    socket.emit('sendPointer', {
                          x : pos.x,
                          y : pos.y,
                          mouseMask : mouseMask
                    });
                    resetIdleTimeoutTimer();
                  }
                  ev.preventDefault();
              })
              .mousewheel(function (ev, delta) {
                  var pos = calcMousePos(ev);
                  if (connected && !bugHunterActive) {
                    if (delta > 0) { // mouse up
                        socket.emit('sendPointer', {
                              x : pos.x,
                              y : pos.y,
                              mouseMask : 1 << 3
                        });
                        socket.emit('sendPointer', {
                              x : pos.x,
                              y : pos.y,
                              mouseMask : 0
                        });
                        resetIdleTimeoutTimer();
                    }
                    else {
                        socket.emit('sendPointer', {
                              x : pos.x,
                              y : pos.y,
                              mouseMask : 1 << 4
                        });
                        socket.emit('sendPointer', {
                              x : pos.x,
                              y : pos.y,
                              mouseMask : 0
                        });
                        resetIdleTimeoutTimer();
                    }
                  }
                  ev.preventDefault();
              })
          ;
          if (platform_name == "android") {
            display.resize({width:480,height:800});
          }
          else {
            display.resize({width:1024,height:768});
          }

          var lastDownTarget;
          $(document).mousemove(function (ev) {
            lastDownTarget = ev.target;
          });

          $(document)
              .keydown(function (ev) {
                  if (lastDownTarget === display.canvas) {
                    if (ev.keyCode == 16) { shiftMask = 1 }

                    if (connected && !bugHunterActive) {
                      socket.emit('sendKeyDown', {
                          keyCode : ev.keyCode,
                          shiftMask : shiftMask
                      });
                      resetIdleTimeoutTimer();
                    }
                    ev.preventDefault();
                  }
              })
              .keyup(function (ev) {
                  if (lastDownTarget === display.canvas) {
                    if (ev.keyCode == 16) { shiftMask = 0 }
                    
                    if (connected && !bugHunterActive) {
                      socket.emit('sendKeyUp', {
                          keyCode : ev.keyCode,
                          shiftMask : shiftMask
                      });
                      resetIdleTimeoutTimer();
                    }
                    ev.preventDefault();
                  }
              })
        });

        socket.on('disconnect', function () {
          disconnect();
        });

        socket.on('screenUpdate', function (update) {
          display.rawRect(update);
        });

        socket.on('copyRect', function (rect) {
          display.copyRect(rect);
        });

        socket.on('screenSize', function (size) {
          display.resize(size);
        });

        socket.on('browserList', function (browsers) {
          availableBrowsers = {};
          for (var i = 0; i < browsers.length; i++) {
            availableBrowsers[browsers[i]] = true;
          }
        });

        socket.on('timeout', function () {
          timesUp();
        });

        if (session.plan == "free") {
            var i = 1;
            var freePlanTime = job.timeout || 3*60*1000;
            timer = setInterval(function () {
                var min = parseInt(( freePlanTime/1000 - i ) / 60, 10);
                var sec = parseInt(( freePlanTime/1000 - i ) % 60, 10);
                if (min<10) min = "0" + min;
                if (sec<10) sec = "0" + sec;
                $('#timer').text(min + ":" + sec);
                i++;

                if (min == 0 && sec == 0) {
                    clearInterval(timer);
                    timesUp();
                    if (connected) {
                    }
                }
            }, 1000);
        }
      }

      var platform_name = 'android';
      var platform_version = ver;
      var browser = 'browser';
      var version = ver;
      var url = $('#url input').val();

      var queueUrl = 'https://queue2.browserling.com';
      if (/192.168.1/.test(window.location.href)) {
        queueUrl = 'http://192.168.1.2:7500';
      }
      else if (/127.0.0.1/.test(window.location.href)) {
        queueUrl = 'http://127.0.0.1:7500';
      }
      else if (/localhost/.test(window.location.href)) {
        queueUrl = 'http://127.0.0.1:7500';
      }
      if (/127.0.0.1/.test(window.location.href)) {
        queueUrl = 'http://127.0.0.1:7500'
      }
      if (/localhost/.test(window.location.href)) {
        queueUrl = 'http://127.0.0.1:7500'
      }

      if (!login_or_paid_plan) {
        var queue = new Queue(
          queueUrl,
          {
            email : session.email,
            plan : session.plan,
            browser : browser,
            version : version,
            platform_name : platform_name,
            platform_version : platform_version,
            url : url
          },
          {
            connected : queueConnected,
            disconnected : queueDisconnected,
            next : queueNext,
            decQueueLength : queueDecLength,
            incQueueLength : queueIncLength,
            start : queueStart,
            invalidNew : queueInvalidNew,
            freeLimit : queueFreeLimit,
            yourTurn : queueYourTurn
          }
        );

        browseRequest(platform_name, platform_version, browser, version, url);
      }

      function calcMousePos (ev) {
        /*
          var scale = {
              x : self.size.width / self.element.width(),
              y : self.size.height / self.element.height()
          };
          var x = ev.pageX - self.element.offset().left;
          var y = ev.pageY - self.element.offset().top;
          return { x : x * scale.x, y : y * scale.y };
        */
        return {
          x : ev.pageX - element.offset().left - 2,
          y : ev.pageY - element.offset().top - 2
        };
      }
}
