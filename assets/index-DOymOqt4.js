(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();function $h(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ls={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var zh=Ls.exports,hu;function Wh(){return hu||(hu=1,function(n){(function(e,t){n.exports=e.document?t(e,!0):function(r){if(!r.document)throw new Error("jQuery requires a window with a document");return t(r)}})(typeof window<"u"?window:zh,function(e,t){var r=[],i=Object.getPrototypeOf,a=r.slice,h=r.flat?function(s){return r.flat.call(s)}:function(s){return r.concat.apply([],s)},g=r.push,_=r.indexOf,E={},R=E.toString,O=E.hasOwnProperty,L=O.toString,G=L.call(Object),z={},Q=function(u){return typeof u=="function"&&typeof u.nodeType!="number"&&typeof u.item!="function"},ee=function(u){return u!=null&&u===u.window},te=e.document,we={type:!0,src:!0,nonce:!0,noModule:!0};function be(s,u,l){l=l||te;var d,m,y=l.createElement("script");if(y.text=s,u)for(d in we)m=u[d]||u.getAttribute&&u.getAttribute(d),m&&y.setAttribute(d,m);l.head.appendChild(y).parentNode.removeChild(y)}function De(s){return s==null?s+"":typeof s=="object"||typeof s=="function"?E[R.call(s)]||"object":typeof s}var ct="3.7.1",Me=/HTML$/i,c=function(s,u){return new c.fn.init(s,u)};c.fn=c.prototype={jquery:ct,constructor:c,length:0,toArray:function(){return a.call(this)},get:function(s){return s==null?a.call(this):s<0?this[s+this.length]:this[s]},pushStack:function(s){var u=c.merge(this.constructor(),s);return u.prevObject=this,u},each:function(s){return c.each(this,s)},map:function(s){return this.pushStack(c.map(this,function(u,l){return s.call(u,l,u)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(c.grep(this,function(s,u){return(u+1)%2}))},odd:function(){return this.pushStack(c.grep(this,function(s,u){return u%2}))},eq:function(s){var u=this.length,l=+s+(s<0?u:0);return this.pushStack(l>=0&&l<u?[this[l]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:r.sort,splice:r.splice},c.extend=c.fn.extend=function(){var s,u,l,d,m,y,v=arguments[0]||{},S=1,I=arguments.length,k=!1;for(typeof v=="boolean"&&(k=v,v=arguments[S]||{},S++),typeof v!="object"&&!Q(v)&&(v={}),S===I&&(v=this,S--);S<I;S++)if((s=arguments[S])!=null)for(u in s)d=s[u],!(u==="__proto__"||v===d)&&(k&&d&&(c.isPlainObject(d)||(m=Array.isArray(d)))?(l=v[u],m&&!Array.isArray(l)?y=[]:!m&&!c.isPlainObject(l)?y={}:y=l,m=!1,v[u]=c.extend(k,y,d)):d!==void 0&&(v[u]=d));return v},c.extend({expando:"jQuery"+(ct+Math.random()).replace(/\D/g,""),isReady:!0,error:function(s){throw new Error(s)},noop:function(){},isPlainObject:function(s){var u,l;return!s||R.call(s)!=="[object Object]"?!1:(u=i(s),u?(l=O.call(u,"constructor")&&u.constructor,typeof l=="function"&&L.call(l)===G):!0)},isEmptyObject:function(s){var u;for(u in s)return!1;return!0},globalEval:function(s,u,l){be(s,{nonce:u&&u.nonce},l)},each:function(s,u){var l,d=0;if(C(s))for(l=s.length;d<l&&u.call(s[d],d,s[d])!==!1;d++);else for(d in s)if(u.call(s[d],d,s[d])===!1)break;return s},text:function(s){var u,l="",d=0,m=s.nodeType;if(!m)for(;u=s[d++];)l+=c.text(u);return m===1||m===11?s.textContent:m===9?s.documentElement.textContent:m===3||m===4?s.nodeValue:l},makeArray:function(s,u){var l=u||[];return s!=null&&(C(Object(s))?c.merge(l,typeof s=="string"?[s]:s):g.call(l,s)),l},inArray:function(s,u,l){return u==null?-1:_.call(u,s,l)},isXMLDoc:function(s){var u=s&&s.namespaceURI,l=s&&(s.ownerDocument||s).documentElement;return!Me.test(u||l&&l.nodeName||"HTML")},merge:function(s,u){for(var l=+u.length,d=0,m=s.length;d<l;d++)s[m++]=u[d];return s.length=m,s},grep:function(s,u,l){for(var d,m=[],y=0,v=s.length,S=!l;y<v;y++)d=!u(s[y],y),d!==S&&m.push(s[y]);return m},map:function(s,u,l){var d,m,y=0,v=[];if(C(s))for(d=s.length;y<d;y++)m=u(s[y],y,l),m!=null&&v.push(m);else for(y in s)m=u(s[y],y,l),m!=null&&v.push(m);return h(v)},guid:1,support:z}),typeof Symbol=="function"&&(c.fn[Symbol.iterator]=r[Symbol.iterator]),c.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(s,u){E["[object "+u+"]"]=u.toLowerCase()});function C(s){var u=!!s&&"length"in s&&s.length,l=De(s);return Q(s)||ee(s)?!1:l==="array"||u===0||typeof u=="number"&&u>0&&u-1 in s}function b(s,u){return s.nodeName&&s.nodeName.toLowerCase()===u.toLowerCase()}var D=r.pop,x=r.sort,V=r.splice,A="[\\x20\\t\\r\\n\\f]",lt=new RegExp("^"+A+"+|((?:^|[^\\\\])(?:\\\\.)*)"+A+"+$","g");c.contains=function(s,u){var l=u&&u.parentNode;return s===l||!!(l&&l.nodeType===1&&(s.contains?s.contains(l):s.compareDocumentPosition&&s.compareDocumentPosition(l)&16))};var Kn=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function wo(s,u){return u?s==="\0"?"�":s.slice(0,-1)+"\\"+s.charCodeAt(s.length-1).toString(16)+" ":"\\"+s}c.escapeSelector=function(s){return(s+"").replace(Kn,wo)};var ht=te,nn=g;(function(){var s,u,l,d,m,y=nn,v,S,I,k,B,q=c.expando,F=0,W=0,ue=pn(),ve=pn(),ce=pn(),ze=pn(),Ue=function(w,P){return w===P&&(m=!0),0},It="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",At="(?:\\\\[\\da-fA-F]{1,6}"+A+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",me="\\["+A+"*("+At+")(?:"+A+"*([*^$|!~]?=)"+A+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+At+"))|)"+A+"*\\]",Be=":("+At+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+me+")*)|.*)\\)|)",Ie=new RegExp(A+"+","g"),Le=new RegExp("^"+A+"*,"+A+"*"),Dt=new RegExp("^"+A+"*([>+~]|"+A+")"+A+"*"),o=new RegExp(A+"|>"),f=new RegExp(Be),p=new RegExp("^"+At+"$"),T={ID:new RegExp("^#("+At+")"),CLASS:new RegExp("^\\.("+At+")"),TAG:new RegExp("^("+At+"|[*])"),ATTR:new RegExp("^"+me),PSEUDO:new RegExp("^"+Be),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+A+"*(even|odd|(([+-]|)(\\d*)n|)"+A+"*(?:([+-]|)"+A+"*(\\d+)|))"+A+"*\\)|)","i"),bool:new RegExp("^(?:"+It+")$","i"),needsContext:new RegExp("^"+A+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+A+"*((?:-\\d)?\\d*)"+A+"*\\)|)(?=[^-]|$)","i")},N=/^(?:input|select|textarea|button)$/i,U=/^h\d$/i,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ke=/[+~]/,Ne=new RegExp("\\\\[\\da-fA-F]{1,6}"+A+"?|\\\\([^\\r\\n\\f])","g"),pe=function(w,P){var M="0x"+w.slice(1)-65536;return P||(M<0?String.fromCharCode(M+65536):String.fromCharCode(M>>10|55296,M&1023|56320))},Je=function(){kn()},Ye=Rs(function(w){return w.disabled===!0&&b(w,"fieldset")},{dir:"parentNode",next:"legend"});function Pn(){try{return v.activeElement}catch{}}try{y.apply(r=a.call(ht.childNodes),ht.childNodes),r[ht.childNodes.length].nodeType}catch{y={apply:function(P,M){nn.apply(P,a.call(M))},call:function(P){nn.apply(P,a.call(arguments,1))}}}function ye(w,P,M,j){var H,X,Y,ie,Z,Te,le,fe=P&&P.ownerDocument,Ee=P?P.nodeType:9;if(M=M||[],typeof w!="string"||!w||Ee!==1&&Ee!==9&&Ee!==11)return M;if(!j&&(kn(P),P=P||v,I)){if(Ee!==11&&(Z=K.exec(w)))if(H=Z[1]){if(Ee===9)if(Y=P.getElementById(H)){if(Y.id===H)return y.call(M,Y),M}else return M;else if(fe&&(Y=fe.getElementById(H))&&ye.contains(P,Y)&&Y.id===H)return y.call(M,Y),M}else{if(Z[2])return y.apply(M,P.getElementsByTagName(w)),M;if((H=Z[3])&&P.getElementsByClassName)return y.apply(M,P.getElementsByClassName(H)),M}if(!ze[w+" "]&&(!k||!k.test(w))){if(le=w,fe=P,Ee===1&&(o.test(w)||Dt.test(w))){for(fe=ke.test(w)&&Lo(P.parentNode)||P,(fe!=P||!z.scope)&&((ie=P.getAttribute("id"))?ie=c.escapeSelector(ie):P.setAttribute("id",ie=q)),Te=xi(w),X=Te.length;X--;)Te[X]=(ie?"#"+ie:":scope")+" "+Ss(Te[X]);le=Te.join(",")}try{return y.apply(M,fe.querySelectorAll(le)),M}catch{ze(w,!0)}finally{ie===q&&P.removeAttribute("id")}}}return lu(w.replace(lt,"$1"),P,M,j)}function pn(){var w=[];function P(M,j){return w.push(M+" ")>u.cacheLength&&delete P[w.shift()],P[M+" "]=j}return P}function gt(w){return w[q]=!0,w}function qr(w){var P=v.createElement("fieldset");try{return!!w(P)}catch{return!1}finally{P.parentNode&&P.parentNode.removeChild(P),P=null}}function jh(w){return function(P){return b(P,"input")&&P.type===w}}function Bh(w){return function(P){return(b(P,"input")||b(P,"button"))&&P.type===w}}function uu(w){return function(P){return"form"in P?P.parentNode&&P.disabled===!1?"label"in P?"label"in P.parentNode?P.parentNode.disabled===w:P.disabled===w:P.isDisabled===w||P.isDisabled!==!w&&Ye(P)===w:P.disabled===w:"label"in P?P.disabled===w:!1}}function ar(w){return gt(function(P){return P=+P,gt(function(M,j){for(var H,X=w([],M.length,P),Y=X.length;Y--;)M[H=X[Y]]&&(M[H]=!(j[H]=M[H]))})})}function Lo(w){return w&&typeof w.getElementsByTagName<"u"&&w}function kn(w){var P,M=w?w.ownerDocument||w:ht;return M==v||M.nodeType!==9||!M.documentElement||(v=M,S=v.documentElement,I=!c.isXMLDoc(v),B=S.matches||S.webkitMatchesSelector||S.msMatchesSelector,S.msMatchesSelector&&ht!=v&&(P=v.defaultView)&&P.top!==P&&P.addEventListener("unload",Je),z.getById=qr(function(j){return S.appendChild(j).id=c.expando,!v.getElementsByName||!v.getElementsByName(c.expando).length}),z.disconnectedMatch=qr(function(j){return B.call(j,"*")}),z.scope=qr(function(){return v.querySelectorAll(":scope")}),z.cssHas=qr(function(){try{return v.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),z.getById?(u.filter.ID=function(j){var H=j.replace(Ne,pe);return function(X){return X.getAttribute("id")===H}},u.find.ID=function(j,H){if(typeof H.getElementById<"u"&&I){var X=H.getElementById(j);return X?[X]:[]}}):(u.filter.ID=function(j){var H=j.replace(Ne,pe);return function(X){var Y=typeof X.getAttributeNode<"u"&&X.getAttributeNode("id");return Y&&Y.value===H}},u.find.ID=function(j,H){if(typeof H.getElementById<"u"&&I){var X,Y,ie,Z=H.getElementById(j);if(Z){if(X=Z.getAttributeNode("id"),X&&X.value===j)return[Z];for(ie=H.getElementsByName(j),Y=0;Z=ie[Y++];)if(X=Z.getAttributeNode("id"),X&&X.value===j)return[Z]}return[]}}),u.find.TAG=function(j,H){return typeof H.getElementsByTagName<"u"?H.getElementsByTagName(j):H.querySelectorAll(j)},u.find.CLASS=function(j,H){if(typeof H.getElementsByClassName<"u"&&I)return H.getElementsByClassName(j)},k=[],qr(function(j){var H;S.appendChild(j).innerHTML="<a id='"+q+"' href='' disabled='disabled'></a><select id='"+q+"-\r\\' disabled='disabled'><option selected=''></option></select>",j.querySelectorAll("[selected]").length||k.push("\\["+A+"*(?:value|"+It+")"),j.querySelectorAll("[id~="+q+"-]").length||k.push("~="),j.querySelectorAll("a#"+q+"+*").length||k.push(".#.+[+~]"),j.querySelectorAll(":checked").length||k.push(":checked"),H=v.createElement("input"),H.setAttribute("type","hidden"),j.appendChild(H).setAttribute("name","D"),S.appendChild(j).disabled=!0,j.querySelectorAll(":disabled").length!==2&&k.push(":enabled",":disabled"),H=v.createElement("input"),H.setAttribute("name",""),j.appendChild(H),j.querySelectorAll("[name='']").length||k.push("\\["+A+"*name"+A+"*="+A+`*(?:''|"")`)}),z.cssHas||k.push(":has"),k=k.length&&new RegExp(k.join("|")),Ue=function(j,H){if(j===H)return m=!0,0;var X=!j.compareDocumentPosition-!H.compareDocumentPosition;return X||(X=(j.ownerDocument||j)==(H.ownerDocument||H)?j.compareDocumentPosition(H):1,X&1||!z.sortDetached&&H.compareDocumentPosition(j)===X?j===v||j.ownerDocument==ht&&ye.contains(ht,j)?-1:H===v||H.ownerDocument==ht&&ye.contains(ht,H)?1:d?_.call(d,j)-_.call(d,H):0:X&4?-1:1)}),v}ye.matches=function(w,P){return ye(w,null,null,P)},ye.matchesSelector=function(w,P){if(kn(w),I&&!ze[P+" "]&&(!k||!k.test(P)))try{var M=B.call(w,P);if(M||z.disconnectedMatch||w.document&&w.document.nodeType!==11)return M}catch{ze(P,!0)}return ye(P,v,null,[w]).length>0},ye.contains=function(w,P){return(w.ownerDocument||w)!=v&&kn(w),c.contains(w,P)},ye.attr=function(w,P){(w.ownerDocument||w)!=v&&kn(w);var M=u.attrHandle[P.toLowerCase()],j=M&&O.call(u.attrHandle,P.toLowerCase())?M(w,P,!I):void 0;return j!==void 0?j:w.getAttribute(P)},ye.error=function(w){throw new Error("Syntax error, unrecognized expression: "+w)},c.uniqueSort=function(w){var P,M=[],j=0,H=0;if(m=!z.sortStable,d=!z.sortStable&&a.call(w,0),x.call(w,Ue),m){for(;P=w[H++];)P===w[H]&&(j=M.push(H));for(;j--;)V.call(w,M[j],1)}return d=null,w},c.fn.uniqueSort=function(){return this.pushStack(c.uniqueSort(a.apply(this)))},u=c.expr={cacheLength:50,createPseudo:gt,match:T,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(w){return w[1]=w[1].replace(Ne,pe),w[3]=(w[3]||w[4]||w[5]||"").replace(Ne,pe),w[2]==="~="&&(w[3]=" "+w[3]+" "),w.slice(0,4)},CHILD:function(w){return w[1]=w[1].toLowerCase(),w[1].slice(0,3)==="nth"?(w[3]||ye.error(w[0]),w[4]=+(w[4]?w[5]+(w[6]||1):2*(w[3]==="even"||w[3]==="odd")),w[5]=+(w[7]+w[8]||w[3]==="odd")):w[3]&&ye.error(w[0]),w},PSEUDO:function(w){var P,M=!w[6]&&w[2];return T.CHILD.test(w[0])?null:(w[3]?w[2]=w[4]||w[5]||"":M&&f.test(M)&&(P=xi(M,!0))&&(P=M.indexOf(")",M.length-P)-M.length)&&(w[0]=w[0].slice(0,P),w[2]=M.slice(0,P)),w.slice(0,3))}},filter:{TAG:function(w){var P=w.replace(Ne,pe).toLowerCase();return w==="*"?function(){return!0}:function(M){return b(M,P)}},CLASS:function(w){var P=ue[w+" "];return P||(P=new RegExp("(^|"+A+")"+w+"("+A+"|$)"))&&ue(w,function(M){return P.test(typeof M.className=="string"&&M.className||typeof M.getAttribute<"u"&&M.getAttribute("class")||"")})},ATTR:function(w,P,M){return function(j){var H=ye.attr(j,w);return H==null?P==="!=":P?(H+="",P==="="?H===M:P==="!="?H!==M:P==="^="?M&&H.indexOf(M)===0:P==="*="?M&&H.indexOf(M)>-1:P==="$="?M&&H.slice(-M.length)===M:P==="~="?(" "+H.replace(Ie," ")+" ").indexOf(M)>-1:P==="|="?H===M||H.slice(0,M.length+1)===M+"-":!1):!0}},CHILD:function(w,P,M,j,H){var X=w.slice(0,3)!=="nth",Y=w.slice(-4)!=="last",ie=P==="of-type";return j===1&&H===0?function(Z){return!!Z.parentNode}:function(Z,Te,le){var fe,Ee,se,Oe,vt,it=X!==Y?"nextSibling":"previousSibling",xt=Z.parentNode,Gt=ie&&Z.nodeName.toLowerCase(),Hr=!le&&!ie,mt=!1;if(xt){if(X){for(;it;){for(se=Z;se=se[it];)if(ie?b(se,Gt):se.nodeType===1)return!1;vt=it=w==="only"&&!vt&&"nextSibling"}return!0}if(vt=[Y?xt.firstChild:xt.lastChild],Y&&Hr){for(Ee=xt[q]||(xt[q]={}),fe=Ee[w]||[],Oe=fe[0]===F&&fe[1],mt=Oe&&fe[2],se=Oe&&xt.childNodes[Oe];se=++Oe&&se&&se[it]||(mt=Oe=0)||vt.pop();)if(se.nodeType===1&&++mt&&se===Z){Ee[w]=[F,Oe,mt];break}}else if(Hr&&(Ee=Z[q]||(Z[q]={}),fe=Ee[w]||[],Oe=fe[0]===F&&fe[1],mt=Oe),mt===!1)for(;(se=++Oe&&se&&se[it]||(mt=Oe=0)||vt.pop())&&!((ie?b(se,Gt):se.nodeType===1)&&++mt&&(Hr&&(Ee=se[q]||(se[q]={}),Ee[w]=[F,mt]),se===Z)););return mt-=H,mt===j||mt%j===0&&mt/j>=0}}},PSEUDO:function(w,P){var M,j=u.pseudos[w]||u.setFilters[w.toLowerCase()]||ye.error("unsupported pseudo: "+w);return j[q]?j(P):j.length>1?(M=[w,w,"",P],u.setFilters.hasOwnProperty(w.toLowerCase())?gt(function(H,X){for(var Y,ie=j(H,P),Z=ie.length;Z--;)Y=_.call(H,ie[Z]),H[Y]=!(X[Y]=ie[Z])}):function(H){return j(H,0,M)}):j}},pseudos:{not:gt(function(w){var P=[],M=[],j=jo(w.replace(lt,"$1"));return j[q]?gt(function(H,X,Y,ie){for(var Z,Te=j(H,null,ie,[]),le=H.length;le--;)(Z=Te[le])&&(H[le]=!(X[le]=Z))}):function(H,X,Y){return P[0]=H,j(P,null,Y,M),P[0]=null,!M.pop()}}),has:gt(function(w){return function(P){return ye(w,P).length>0}}),contains:gt(function(w){return w=w.replace(Ne,pe),function(P){return(P.textContent||c.text(P)).indexOf(w)>-1}}),lang:gt(function(w){return p.test(w||"")||ye.error("unsupported lang: "+w),w=w.replace(Ne,pe).toLowerCase(),function(P){var M;do if(M=I?P.lang:P.getAttribute("xml:lang")||P.getAttribute("lang"))return M=M.toLowerCase(),M===w||M.indexOf(w+"-")===0;while((P=P.parentNode)&&P.nodeType===1);return!1}}),target:function(w){var P=e.location&&e.location.hash;return P&&P.slice(1)===w.id},root:function(w){return w===S},focus:function(w){return w===Pn()&&v.hasFocus()&&!!(w.type||w.href||~w.tabIndex)},enabled:uu(!1),disabled:uu(!0),checked:function(w){return b(w,"input")&&!!w.checked||b(w,"option")&&!!w.selected},selected:function(w){return w.parentNode&&w.parentNode.selectedIndex,w.selected===!0},empty:function(w){for(w=w.firstChild;w;w=w.nextSibling)if(w.nodeType<6)return!1;return!0},parent:function(w){return!u.pseudos.empty(w)},header:function(w){return U.test(w.nodeName)},input:function(w){return N.test(w.nodeName)},button:function(w){return b(w,"input")&&w.type==="button"||b(w,"button")},text:function(w){var P;return b(w,"input")&&w.type==="text"&&((P=w.getAttribute("type"))==null||P.toLowerCase()==="text")},first:ar(function(){return[0]}),last:ar(function(w,P){return[P-1]}),eq:ar(function(w,P,M){return[M<0?M+P:M]}),even:ar(function(w,P){for(var M=0;M<P;M+=2)w.push(M);return w}),odd:ar(function(w,P){for(var M=1;M<P;M+=2)w.push(M);return w}),lt:ar(function(w,P,M){var j;for(M<0?j=M+P:M>P?j=P:j=M;--j>=0;)w.push(j);return w}),gt:ar(function(w,P,M){for(var j=M<0?M+P:M;++j<P;)w.push(j);return w})}},u.pseudos.nth=u.pseudos.eq;for(s in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})u.pseudos[s]=jh(s);for(s in{submit:!0,reset:!0})u.pseudos[s]=Bh(s);function cu(){}cu.prototype=u.filters=u.pseudos,u.setFilters=new cu;function xi(w,P){var M,j,H,X,Y,ie,Z,Te=ve[w+" "];if(Te)return P?0:Te.slice(0);for(Y=w,ie=[],Z=u.preFilter;Y;){(!M||(j=Le.exec(Y)))&&(j&&(Y=Y.slice(j[0].length)||Y),ie.push(H=[])),M=!1,(j=Dt.exec(Y))&&(M=j.shift(),H.push({value:M,type:j[0].replace(lt," ")}),Y=Y.slice(M.length));for(X in u.filter)(j=T[X].exec(Y))&&(!Z[X]||(j=Z[X](j)))&&(M=j.shift(),H.push({value:M,type:X,matches:j}),Y=Y.slice(M.length));if(!M)break}return P?Y.length:Y?ye.error(w):ve(w,ie).slice(0)}function Ss(w){for(var P=0,M=w.length,j="";P<M;P++)j+=w[P].value;return j}function Rs(w,P,M){var j=P.dir,H=P.next,X=H||j,Y=M&&X==="parentNode",ie=W++;return P.first?function(Z,Te,le){for(;Z=Z[j];)if(Z.nodeType===1||Y)return w(Z,Te,le);return!1}:function(Z,Te,le){var fe,Ee,se=[F,ie];if(le){for(;Z=Z[j];)if((Z.nodeType===1||Y)&&w(Z,Te,le))return!0}else for(;Z=Z[j];)if(Z.nodeType===1||Y)if(Ee=Z[q]||(Z[q]={}),H&&b(Z,H))Z=Z[j]||Z;else{if((fe=Ee[X])&&fe[0]===F&&fe[1]===ie)return se[2]=fe[2];if(Ee[X]=se,se[2]=w(Z,Te,le))return!0}return!1}}function Mo(w){return w.length>1?function(P,M,j){for(var H=w.length;H--;)if(!w[H](P,M,j))return!1;return!0}:w[0]}function qh(w,P,M){for(var j=0,H=P.length;j<H;j++)ye(w,P[j],M);return M}function Ps(w,P,M,j,H){for(var X,Y=[],ie=0,Z=w.length,Te=P!=null;ie<Z;ie++)(X=w[ie])&&(!M||M(X,j,H))&&(Y.push(X),Te&&P.push(ie));return Y}function Fo(w,P,M,j,H,X){return j&&!j[q]&&(j=Fo(j)),H&&!H[q]&&(H=Fo(H,X)),gt(function(Y,ie,Z,Te){var le,fe,Ee,se,Oe=[],vt=[],it=ie.length,xt=Y||qh(P||"*",Z.nodeType?[Z]:Z,[]),Gt=w&&(Y||!P)?Ps(xt,Oe,w,Z,Te):xt;if(M?(se=H||(Y?w:it||j)?[]:ie,M(Gt,se,Z,Te)):se=Gt,j)for(le=Ps(se,vt),j(le,[],Z,Te),fe=le.length;fe--;)(Ee=le[fe])&&(se[vt[fe]]=!(Gt[vt[fe]]=Ee));if(Y){if(H||w){if(H){for(le=[],fe=se.length;fe--;)(Ee=se[fe])&&le.push(Gt[fe]=Ee);H(null,se=[],le,Te)}for(fe=se.length;fe--;)(Ee=se[fe])&&(le=H?_.call(Y,Ee):Oe[fe])>-1&&(Y[le]=!(ie[le]=Ee))}}else se=Ps(se===ie?se.splice(it,se.length):se),H?H(null,ie,se,Te):y.apply(ie,se)})}function Uo(w){for(var P,M,j,H=w.length,X=u.relative[w[0].type],Y=X||u.relative[" "],ie=X?1:0,Z=Rs(function(fe){return fe===P},Y,!0),Te=Rs(function(fe){return _.call(P,fe)>-1},Y,!0),le=[function(fe,Ee,se){var Oe=!X&&(se||Ee!=l)||((P=Ee).nodeType?Z(fe,Ee,se):Te(fe,Ee,se));return P=null,Oe}];ie<H;ie++)if(M=u.relative[w[ie].type])le=[Rs(Mo(le),M)];else{if(M=u.filter[w[ie].type].apply(null,w[ie].matches),M[q]){for(j=++ie;j<H&&!u.relative[w[j].type];j++);return Fo(ie>1&&Mo(le),ie>1&&Ss(w.slice(0,ie-1).concat({value:w[ie-2].type===" "?"*":""})).replace(lt,"$1"),M,ie<j&&Uo(w.slice(ie,j)),j<H&&Uo(w=w.slice(j)),j<H&&Ss(w))}le.push(M)}return Mo(le)}function Hh(w,P){var M=P.length>0,j=w.length>0,H=function(X,Y,ie,Z,Te){var le,fe,Ee,se=0,Oe="0",vt=X&&[],it=[],xt=l,Gt=X||j&&u.find.TAG("*",Te),Hr=F+=xt==null?1:Math.random()||.1,mt=Gt.length;for(Te&&(l=Y==v||Y||Te);Oe!==mt&&(le=Gt[Oe])!=null;Oe++){if(j&&le){for(fe=0,!Y&&le.ownerDocument!=v&&(kn(le),ie=!I);Ee=w[fe++];)if(Ee(le,Y||v,ie)){y.call(Z,le);break}Te&&(F=Hr)}M&&((le=!Ee&&le)&&se--,X&&vt.push(le))}if(se+=Oe,M&&Oe!==se){for(fe=0;Ee=P[fe++];)Ee(vt,it,Y,ie);if(X){if(se>0)for(;Oe--;)vt[Oe]||it[Oe]||(it[Oe]=D.call(Z));it=Ps(it)}y.apply(Z,it),Te&&!X&&it.length>0&&se+P.length>1&&c.uniqueSort(Z)}return Te&&(F=Hr,l=xt),vt};return M?gt(H):H}function jo(w,P){var M,j=[],H=[],X=ce[w+" "];if(!X){for(P||(P=xi(w)),M=P.length;M--;)X=Uo(P[M]),X[q]?j.push(X):H.push(X);X=ce(w,Hh(H,j)),X.selector=w}return X}function lu(w,P,M,j){var H,X,Y,ie,Z,Te=typeof w=="function"&&w,le=!j&&xi(w=Te.selector||w);if(M=M||[],le.length===1){if(X=le[0]=le[0].slice(0),X.length>2&&(Y=X[0]).type==="ID"&&P.nodeType===9&&I&&u.relative[X[1].type]){if(P=(u.find.ID(Y.matches[0].replace(Ne,pe),P)||[])[0],P)Te&&(P=P.parentNode);else return M;w=w.slice(X.shift().value.length)}for(H=T.needsContext.test(w)?0:X.length;H--&&(Y=X[H],!u.relative[ie=Y.type]);)if((Z=u.find[ie])&&(j=Z(Y.matches[0].replace(Ne,pe),ke.test(X[0].type)&&Lo(P.parentNode)||P))){if(X.splice(H,1),w=j.length&&Ss(X),!w)return y.apply(M,j),M;break}}return(Te||jo(w,le))(j,P,!I,M,!P||ke.test(w)&&Lo(P.parentNode)||P),M}z.sortStable=q.split("").sort(Ue).join("")===q,kn(),z.sortDetached=qr(function(w){return w.compareDocumentPosition(v.createElement("fieldset"))&1}),c.find=ye,c.expr[":"]=c.expr.pseudos,c.unique=c.uniqueSort,ye.compile=jo,ye.select=lu,ye.setDocument=kn,ye.tokenize=xi,ye.escape=c.escapeSelector,ye.getText=c.text,ye.isXML=c.isXMLDoc,ye.selectors=c.expr,ye.support=c.support,ye.uniqueSort=c.uniqueSort})();var Ft=function(s,u,l){for(var d=[],m=l!==void 0;(s=s[u])&&s.nodeType!==9;)if(s.nodeType===1){if(m&&c(s).is(l))break;d.push(s)}return d},pi=function(s,u){for(var l=[];s;s=s.nextSibling)s.nodeType===1&&s!==u&&l.push(s);return l},ss=c.expr.match.needsContext,Nt=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function $e(s,u,l){return Q(u)?c.grep(s,function(d,m){return!!u.call(d,m,d)!==l}):u.nodeType?c.grep(s,function(d){return d===u!==l}):typeof u!="string"?c.grep(s,function(d){return _.call(u,d)>-1!==l}):c.filter(u,s,l)}c.filter=function(s,u,l){var d=u[0];return l&&(s=":not("+s+")"),u.length===1&&d.nodeType===1?c.find.matchesSelector(d,s)?[d]:[]:c.find.matches(s,c.grep(u,function(m){return m.nodeType===1}))},c.fn.extend({find:function(s){var u,l,d=this.length,m=this;if(typeof s!="string")return this.pushStack(c(s).filter(function(){for(u=0;u<d;u++)if(c.contains(m[u],this))return!0}));for(l=this.pushStack([]),u=0;u<d;u++)c.find(s,m[u],l);return d>1?c.uniqueSort(l):l},filter:function(s){return this.pushStack($e(this,s||[],!1))},not:function(s){return this.pushStack($e(this,s||[],!0))},is:function(s){return!!$e(this,typeof s=="string"&&ss.test(s)?c(s):s||[],!1).length}});var os,Qn=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Io=c.fn.init=function(s,u,l){var d,m;if(!s)return this;if(l=l||os,typeof s=="string")if(s[0]==="<"&&s[s.length-1]===">"&&s.length>=3?d=[null,s,null]:d=Qn.exec(s),d&&(d[1]||!u))if(d[1]){if(u=u instanceof c?u[0]:u,c.merge(this,c.parseHTML(d[1],u&&u.nodeType?u.ownerDocument||u:te,!0)),Nt.test(d[1])&&c.isPlainObject(u))for(d in u)Q(this[d])?this[d](u[d]):this.attr(d,u[d]);return this}else return m=te.getElementById(d[2]),m&&(this[0]=m,this.length=1),this;else return!u||u.jquery?(u||l).find(s):this.constructor(u).find(s);else{if(s.nodeType)return this[0]=s,this.length=1,this;if(Q(s))return l.ready!==void 0?l.ready(s):s(c)}return c.makeArray(s,this)};Io.prototype=c.fn,os=c(te);var vr=/^(?:parents|prev(?:Until|All))/,Ao={children:!0,contents:!0,next:!0,prev:!0};c.fn.extend({has:function(s){var u=c(s,this),l=u.length;return this.filter(function(){for(var d=0;d<l;d++)if(c.contains(this,u[d]))return!0})},closest:function(s,u){var l,d=0,m=this.length,y=[],v=typeof s!="string"&&c(s);if(!ss.test(s)){for(;d<m;d++)for(l=this[d];l&&l!==u;l=l.parentNode)if(l.nodeType<11&&(v?v.index(l)>-1:l.nodeType===1&&c.find.matchesSelector(l,s))){y.push(l);break}}return this.pushStack(y.length>1?c.uniqueSort(y):y)},index:function(s){return s?typeof s=="string"?_.call(c(s),this[0]):_.call(this,s.jquery?s[0]:s):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(s,u){return this.pushStack(c.uniqueSort(c.merge(this.get(),c(s,u))))},addBack:function(s){return this.add(s==null?this.prevObject:this.prevObject.filter(s))}});function as(s,u){for(;(s=s[u])&&s.nodeType!==1;);return s}c.each({parent:function(s){var u=s.parentNode;return u&&u.nodeType!==11?u:null},parents:function(s){return Ft(s,"parentNode")},parentsUntil:function(s,u,l){return Ft(s,"parentNode",l)},next:function(s){return as(s,"nextSibling")},prev:function(s){return as(s,"previousSibling")},nextAll:function(s){return Ft(s,"nextSibling")},prevAll:function(s){return Ft(s,"previousSibling")},nextUntil:function(s,u,l){return Ft(s,"nextSibling",l)},prevUntil:function(s,u,l){return Ft(s,"previousSibling",l)},siblings:function(s){return pi((s.parentNode||{}).firstChild,s)},children:function(s){return pi(s.firstChild)},contents:function(s){return s.contentDocument!=null&&i(s.contentDocument)?s.contentDocument:(b(s,"template")&&(s=s.content||s),c.merge([],s.childNodes))}},function(s,u){c.fn[s]=function(l,d){var m=c.map(this,u,l);return s.slice(-5)!=="Until"&&(d=l),d&&typeof d=="string"&&(m=c.filter(d,m)),this.length>1&&(Ao[s]||c.uniqueSort(m),vr.test(s)&&m.reverse()),this.pushStack(m)}});var ft=/[^\x20\t\r\n\f]+/g;function Tr(s){var u={};return c.each(s.match(ft)||[],function(l,d){u[d]=!0}),u}c.Callbacks=function(s){s=typeof s=="string"?Tr(s):c.extend({},s);var u,l,d,m,y=[],v=[],S=-1,I=function(){for(m=m||s.once,d=u=!0;v.length;S=-1)for(l=v.shift();++S<y.length;)y[S].apply(l[0],l[1])===!1&&s.stopOnFalse&&(S=y.length,l=!1);s.memory||(l=!1),u=!1,m&&(l?y=[]:y="")},k={add:function(){return y&&(l&&!u&&(S=y.length-1,v.push(l)),function B(q){c.each(q,function(F,W){Q(W)?(!s.unique||!k.has(W))&&y.push(W):W&&W.length&&De(W)!=="string"&&B(W)})}(arguments),l&&!u&&I()),this},remove:function(){return c.each(arguments,function(B,q){for(var F;(F=c.inArray(q,y,F))>-1;)y.splice(F,1),F<=S&&S--}),this},has:function(B){return B?c.inArray(B,y)>-1:y.length>0},empty:function(){return y&&(y=[]),this},disable:function(){return m=v=[],y=l="",this},disabled:function(){return!y},lock:function(){return m=v=[],!l&&!u&&(y=l=""),this},locked:function(){return!!m},fireWith:function(B,q){return m||(q=q||[],q=[B,q.slice?q.slice():q],v.push(q),u||I()),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k};function Ut(s){return s}function In(s){throw s}function Er(s,u,l,d){var m;try{s&&Q(m=s.promise)?m.call(s).done(u).fail(l):s&&Q(m=s.then)?m.call(s,u,l):u.apply(void 0,[s].slice(d))}catch(y){l.apply(void 0,[y])}}c.extend({Deferred:function(s){var u=[["notify","progress",c.Callbacks("memory"),c.Callbacks("memory"),2],["resolve","done",c.Callbacks("once memory"),c.Callbacks("once memory"),0,"resolved"],["reject","fail",c.Callbacks("once memory"),c.Callbacks("once memory"),1,"rejected"]],l="pending",d={state:function(){return l},always:function(){return m.done(arguments).fail(arguments),this},catch:function(y){return d.then(null,y)},pipe:function(){var y=arguments;return c.Deferred(function(v){c.each(u,function(S,I){var k=Q(y[I[4]])&&y[I[4]];m[I[1]](function(){var B=k&&k.apply(this,arguments);B&&Q(B.promise)?B.promise().progress(v.notify).done(v.resolve).fail(v.reject):v[I[0]+"With"](this,k?[B]:arguments)})}),y=null}).promise()},then:function(y,v,S){var I=0;function k(B,q,F,W){return function(){var ue=this,ve=arguments,ce=function(){var Ue,It;if(!(B<I)){if(Ue=F.apply(ue,ve),Ue===q.promise())throw new TypeError("Thenable self-resolution");It=Ue&&(typeof Ue=="object"||typeof Ue=="function")&&Ue.then,Q(It)?W?It.call(Ue,k(I,q,Ut,W),k(I,q,In,W)):(I++,It.call(Ue,k(I,q,Ut,W),k(I,q,In,W),k(I,q,Ut,q.notifyWith))):(F!==Ut&&(ue=void 0,ve=[Ue]),(W||q.resolveWith)(ue,ve))}},ze=W?ce:function(){try{ce()}catch(Ue){c.Deferred.exceptionHook&&c.Deferred.exceptionHook(Ue,ze.error),B+1>=I&&(F!==In&&(ue=void 0,ve=[Ue]),q.rejectWith(ue,ve))}};B?ze():(c.Deferred.getErrorHook?ze.error=c.Deferred.getErrorHook():c.Deferred.getStackHook&&(ze.error=c.Deferred.getStackHook()),e.setTimeout(ze))}}return c.Deferred(function(B){u[0][3].add(k(0,B,Q(S)?S:Ut,B.notifyWith)),u[1][3].add(k(0,B,Q(y)?y:Ut)),u[2][3].add(k(0,B,Q(v)?v:In))}).promise()},promise:function(y){return y!=null?c.extend(y,d):d}},m={};return c.each(u,function(y,v){var S=v[2],I=v[5];d[v[1]]=S.add,I&&S.add(function(){l=I},u[3-y][2].disable,u[3-y][3].disable,u[0][2].lock,u[0][3].lock),S.add(v[3].fire),m[v[0]]=function(){return m[v[0]+"With"](this===m?void 0:this,arguments),this},m[v[0]+"With"]=S.fireWith}),d.promise(m),s&&s.call(m,m),m},when:function(s){var u=arguments.length,l=u,d=Array(l),m=a.call(arguments),y=c.Deferred(),v=function(S){return function(I){d[S]=this,m[S]=arguments.length>1?a.call(arguments):I,--u||y.resolveWith(d,m)}};if(u<=1&&(Er(s,y.done(v(l)).resolve,y.reject,!u),y.state()==="pending"||Q(m[l]&&m[l].then)))return y.then();for(;l--;)Er(m[l],v(l),y.reject);return y.promise()}});var gi=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;c.Deferred.exceptionHook=function(s,u){e.console&&e.console.warn&&s&&gi.test(s.name)&&e.console.warn("jQuery.Deferred exception: "+s.message,s.stack,u)},c.readyException=function(s){e.setTimeout(function(){throw s})};var wr=c.Deferred();c.fn.ready=function(s){return wr.then(s).catch(function(u){c.readyException(u)}),this},c.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--c.readyWait:c.isReady)||(c.isReady=!0,!(s!==!0&&--c.readyWait>0)&&wr.resolveWith(te,[c]))}}),c.ready.then=wr.then;function Ir(){te.removeEventListener("DOMContentLoaded",Ir),e.removeEventListener("load",Ir),c.ready()}te.readyState==="complete"||te.readyState!=="loading"&&!te.documentElement.doScroll?e.setTimeout(c.ready):(te.addEventListener("DOMContentLoaded",Ir),e.addEventListener("load",Ir));var Ot=function(s,u,l,d,m,y,v){var S=0,I=s.length,k=l==null;if(De(l)==="object"){m=!0;for(S in l)Ot(s,u,S,l[S],!0,y,v)}else if(d!==void 0&&(m=!0,Q(d)||(v=!0),k&&(v?(u.call(s,d),u=null):(k=u,u=function(B,q,F){return k.call(c(B),F)})),u))for(;S<I;S++)u(s[S],l,v?d:d.call(s[S],S,u(s[S],l)));return m?s:k?u.call(s):I?u(s[0],l):y},us=/^-ms-/,mi=/-([a-z])/g;function cs(s,u){return u.toUpperCase()}function bt(s){return s.replace(us,"ms-").replace(mi,cs)}var rn=function(s){return s.nodeType===1||s.nodeType===9||!+s.nodeType};function sn(){this.expando=c.expando+sn.uid++}sn.uid=1,sn.prototype={cache:function(s){var u=s[this.expando];return u||(u={},rn(s)&&(s.nodeType?s[this.expando]=u:Object.defineProperty(s,this.expando,{value:u,configurable:!0}))),u},set:function(s,u,l){var d,m=this.cache(s);if(typeof u=="string")m[bt(u)]=l;else for(d in u)m[bt(d)]=u[d];return m},get:function(s,u){return u===void 0?this.cache(s):s[this.expando]&&s[this.expando][bt(u)]},access:function(s,u,l){return u===void 0||u&&typeof u=="string"&&l===void 0?this.get(s,u):(this.set(s,u,l),l!==void 0?l:u)},remove:function(s,u){var l,d=s[this.expando];if(d!==void 0){if(u!==void 0)for(Array.isArray(u)?u=u.map(bt):(u=bt(u),u=u in d?[u]:u.match(ft)||[]),l=u.length;l--;)delete d[u[l]];(u===void 0||c.isEmptyObject(d))&&(s.nodeType?s[this.expando]=void 0:delete s[this.expando])}},hasData:function(s){var u=s[this.expando];return u!==void 0&&!c.isEmptyObject(u)}};var re=new sn,Pe=new sn,et=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ar=/[A-Z]/g;function ls(s){return s==="true"?!0:s==="false"?!1:s==="null"?null:s===+s+""?+s:et.test(s)?JSON.parse(s):s}function yi(s,u,l){var d;if(l===void 0&&s.nodeType===1)if(d="data-"+u.replace(Ar,"-$&").toLowerCase(),l=s.getAttribute(d),typeof l=="string"){try{l=ls(l)}catch{}Pe.set(s,u,l)}else l=void 0;return l}c.extend({hasData:function(s){return Pe.hasData(s)||re.hasData(s)},data:function(s,u,l){return Pe.access(s,u,l)},removeData:function(s,u){Pe.remove(s,u)},_data:function(s,u,l){return re.access(s,u,l)},_removeData:function(s,u){re.remove(s,u)}}),c.fn.extend({data:function(s,u){var l,d,m,y=this[0],v=y&&y.attributes;if(s===void 0){if(this.length&&(m=Pe.get(y),y.nodeType===1&&!re.get(y,"hasDataAttrs"))){for(l=v.length;l--;)v[l]&&(d=v[l].name,d.indexOf("data-")===0&&(d=bt(d.slice(5)),yi(y,d,m[d])));re.set(y,"hasDataAttrs",!0)}return m}return typeof s=="object"?this.each(function(){Pe.set(this,s)}):Ot(this,function(S){var I;if(y&&S===void 0)return I=Pe.get(y,s),I!==void 0||(I=yi(y,s),I!==void 0)?I:void 0;this.each(function(){Pe.set(this,s,S)})},null,u,arguments.length>1,null,!0)},removeData:function(s){return this.each(function(){Pe.remove(this,s)})}}),c.extend({queue:function(s,u,l){var d;if(s)return u=(u||"fx")+"queue",d=re.get(s,u),l&&(!d||Array.isArray(l)?d=re.access(s,u,c.makeArray(l)):d.push(l)),d||[]},dequeue:function(s,u){u=u||"fx";var l=c.queue(s,u),d=l.length,m=l.shift(),y=c._queueHooks(s,u),v=function(){c.dequeue(s,u)};m==="inprogress"&&(m=l.shift(),d--),m&&(u==="fx"&&l.unshift("inprogress"),delete y.stop,m.call(s,v,y)),!d&&y&&y.empty.fire()},_queueHooks:function(s,u){var l=u+"queueHooks";return re.get(s,l)||re.access(s,l,{empty:c.Callbacks("once memory").add(function(){re.remove(s,[u+"queue",l])})})}}),c.fn.extend({queue:function(s,u){var l=2;return typeof s!="string"&&(u=s,s="fx",l--),arguments.length<l?c.queue(this[0],s):u===void 0?this:this.each(function(){var d=c.queue(this,s,u);c._queueHooks(this,s),s==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,s)})},dequeue:function(s){return this.each(function(){c.dequeue(this,s)})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,u){var l,d=1,m=c.Deferred(),y=this,v=this.length,S=function(){--d||m.resolveWith(y,[y])};for(typeof s!="string"&&(u=s,s=void 0),s=s||"fx";v--;)l=re.get(y[v],s+"queueHooks"),l&&l.empty&&(d++,l.empty.add(S));return S(),m.promise(u)}});var hs=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Vt=new RegExp("^(?:([+-])=|)("+hs+")([a-z%]*)$","i"),Ct=["Top","Right","Bottom","Left"],jt=te.documentElement,Bt=function(s){return c.contains(s.ownerDocument,s)},bo={composed:!0};jt.getRootNode&&(Bt=function(s){return c.contains(s.ownerDocument,s)||s.getRootNode(bo)===s.ownerDocument});var br=function(s,u){return s=u||s,s.style.display==="none"||s.style.display===""&&Bt(s)&&c.css(s,"display")==="none"};function Cr(s,u,l,d){var m,y,v=20,S=d?function(){return d.cur()}:function(){return c.css(s,u,"")},I=S(),k=l&&l[3]||(c.cssNumber[u]?"":"px"),B=s.nodeType&&(c.cssNumber[u]||k!=="px"&&+I)&&Vt.exec(c.css(s,u));if(B&&B[3]!==k){for(I=I/2,k=k||B[3],B=+I||1;v--;)c.style(s,u,B+k),(1-y)*(1-(y=S()/I||.5))<=0&&(v=0),B=B/y;B=B*2,c.style(s,u,B+k),l=l||[]}return l&&(B=+B||+I||0,m=l[1]?B+(l[1]+1)*l[2]:+l[2],d&&(d.unit=k,d.start=B,d.end=m)),m}var _i={};function fs(s){var u,l=s.ownerDocument,d=s.nodeName,m=_i[d];return m||(u=l.body.appendChild(l.createElement(d)),m=c.css(u,"display"),u.parentNode.removeChild(u),m==="none"&&(m="block"),_i[d]=m,m)}function St(s,u){for(var l,d,m=[],y=0,v=s.length;y<v;y++)d=s[y],d.style&&(l=d.style.display,u?(l==="none"&&(m[y]=re.get(d,"display")||null,m[y]||(d.style.display="")),d.style.display===""&&br(d)&&(m[y]=fs(d))):l!=="none"&&(m[y]="none",re.set(d,"display",l)));for(y=0;y<v;y++)m[y]!=null&&(s[y].style.display=m[y]);return s}c.fn.extend({show:function(){return St(this,!0)},hide:function(){return St(this)},toggle:function(s){return typeof s=="boolean"?s?this.show():this.hide():this.each(function(){br(this)?c(this).show():c(this).hide()})}});var on=/^(?:checkbox|radio)$/i,Sr=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,qt=/^$|^module$|\/(?:java|ecma)script/i;(function(){var s=te.createDocumentFragment(),u=s.appendChild(te.createElement("div")),l=te.createElement("input");l.setAttribute("type","radio"),l.setAttribute("checked","checked"),l.setAttribute("name","t"),u.appendChild(l),z.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,u.innerHTML="<textarea>x</textarea>",z.noCloneChecked=!!u.cloneNode(!0).lastChild.defaultValue,u.innerHTML="<option></option>",z.option=!!u.lastChild})();var dt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};dt.tbody=dt.tfoot=dt.colgroup=dt.caption=dt.thead,dt.th=dt.td,z.option||(dt.optgroup=dt.option=[1,"<select multiple='multiple'>","</select>"]);function Ge(s,u){var l;return typeof s.getElementsByTagName<"u"?l=s.getElementsByTagName(u||"*"):typeof s.querySelectorAll<"u"?l=s.querySelectorAll(u||"*"):l=[],u===void 0||u&&b(s,u)?c.merge([s],l):l}function Rr(s,u){for(var l=0,d=s.length;l<d;l++)re.set(s[l],"globalEval",!u||re.get(u[l],"globalEval"))}var Xn=/<|&#?\w+;/;function vi(s,u,l,d,m){for(var y,v,S,I,k,B,q=u.createDocumentFragment(),F=[],W=0,ue=s.length;W<ue;W++)if(y=s[W],y||y===0)if(De(y)==="object")c.merge(F,y.nodeType?[y]:y);else if(!Xn.test(y))F.push(u.createTextNode(y));else{for(v=v||q.appendChild(u.createElement("div")),S=(Sr.exec(y)||["",""])[1].toLowerCase(),I=dt[S]||dt._default,v.innerHTML=I[1]+c.htmlPrefilter(y)+I[2],B=I[0];B--;)v=v.lastChild;c.merge(F,v.childNodes),v=q.firstChild,v.textContent=""}for(q.textContent="",W=0;y=F[W++];){if(d&&c.inArray(y,d)>-1){m&&m.push(y);continue}if(k=Bt(y),v=Ge(q.appendChild(y),"script"),k&&Rr(v),l)for(B=0;y=v[B++];)qt.test(y.type||"")&&l.push(y)}return q}var Xe=/^([^.]*)(?:\.(.+)|)/;function an(){return!0}function Rt(){return!1}function un(s,u,l,d,m,y){var v,S;if(typeof u=="object"){typeof l!="string"&&(d=d||l,l=void 0);for(S in u)un(s,S,l,d,u[S],y);return s}if(d==null&&m==null?(m=l,d=l=void 0):m==null&&(typeof l=="string"?(m=d,d=void 0):(m=d,d=l,l=void 0)),m===!1)m=Rt;else if(!m)return s;return y===1&&(v=m,m=function(I){return c().off(I),v.apply(this,arguments)},m.guid=v.guid||(v.guid=c.guid++)),s.each(function(){c.event.add(this,u,m,d,l)})}c.event={global:{},add:function(s,u,l,d,m){var y,v,S,I,k,B,q,F,W,ue,ve,ce=re.get(s);if(rn(s))for(l.handler&&(y=l,l=y.handler,m=y.selector),m&&c.find.matchesSelector(jt,m),l.guid||(l.guid=c.guid++),(I=ce.events)||(I=ce.events=Object.create(null)),(v=ce.handle)||(v=ce.handle=function(ze){return typeof c<"u"&&c.event.triggered!==ze.type?c.event.dispatch.apply(s,arguments):void 0}),u=(u||"").match(ft)||[""],k=u.length;k--;)S=Xe.exec(u[k])||[],W=ve=S[1],ue=(S[2]||"").split(".").sort(),W&&(q=c.event.special[W]||{},W=(m?q.delegateType:q.bindType)||W,q=c.event.special[W]||{},B=c.extend({type:W,origType:ve,data:d,handler:l,guid:l.guid,selector:m,needsContext:m&&c.expr.match.needsContext.test(m),namespace:ue.join(".")},y),(F=I[W])||(F=I[W]=[],F.delegateCount=0,(!q.setup||q.setup.call(s,d,ue,v)===!1)&&s.addEventListener&&s.addEventListener(W,v)),q.add&&(q.add.call(s,B),B.handler.guid||(B.handler.guid=l.guid)),m?F.splice(F.delegateCount++,0,B):F.push(B),c.event.global[W]=!0)},remove:function(s,u,l,d,m){var y,v,S,I,k,B,q,F,W,ue,ve,ce=re.hasData(s)&&re.get(s);if(!(!ce||!(I=ce.events))){for(u=(u||"").match(ft)||[""],k=u.length;k--;){if(S=Xe.exec(u[k])||[],W=ve=S[1],ue=(S[2]||"").split(".").sort(),!W){for(W in I)c.event.remove(s,W+u[k],l,d,!0);continue}for(q=c.event.special[W]||{},W=(d?q.delegateType:q.bindType)||W,F=I[W]||[],S=S[2]&&new RegExp("(^|\\.)"+ue.join("\\.(?:.*\\.|)")+"(\\.|$)"),v=y=F.length;y--;)B=F[y],(m||ve===B.origType)&&(!l||l.guid===B.guid)&&(!S||S.test(B.namespace))&&(!d||d===B.selector||d==="**"&&B.selector)&&(F.splice(y,1),B.selector&&F.delegateCount--,q.remove&&q.remove.call(s,B));v&&!F.length&&((!q.teardown||q.teardown.call(s,ue,ce.handle)===!1)&&c.removeEvent(s,W,ce.handle),delete I[W])}c.isEmptyObject(I)&&re.remove(s,"handle events")}},dispatch:function(s){var u,l,d,m,y,v,S=new Array(arguments.length),I=c.event.fix(s),k=(re.get(this,"events")||Object.create(null))[I.type]||[],B=c.event.special[I.type]||{};for(S[0]=I,u=1;u<arguments.length;u++)S[u]=arguments[u];if(I.delegateTarget=this,!(B.preDispatch&&B.preDispatch.call(this,I)===!1)){for(v=c.event.handlers.call(this,I,k),u=0;(m=v[u++])&&!I.isPropagationStopped();)for(I.currentTarget=m.elem,l=0;(y=m.handlers[l++])&&!I.isImmediatePropagationStopped();)(!I.rnamespace||y.namespace===!1||I.rnamespace.test(y.namespace))&&(I.handleObj=y,I.data=y.data,d=((c.event.special[y.origType]||{}).handle||y.handler).apply(m.elem,S),d!==void 0&&(I.result=d)===!1&&(I.preventDefault(),I.stopPropagation()));return B.postDispatch&&B.postDispatch.call(this,I),I.result}},handlers:function(s,u){var l,d,m,y,v,S=[],I=u.delegateCount,k=s.target;if(I&&k.nodeType&&!(s.type==="click"&&s.button>=1)){for(;k!==this;k=k.parentNode||this)if(k.nodeType===1&&!(s.type==="click"&&k.disabled===!0)){for(y=[],v={},l=0;l<I;l++)d=u[l],m=d.selector+" ",v[m]===void 0&&(v[m]=d.needsContext?c(m,this).index(k)>-1:c.find(m,this,null,[k]).length),v[m]&&y.push(d);y.length&&S.push({elem:k,handlers:y})}}return k=this,I<u.length&&S.push({elem:k,handlers:u.slice(I)}),S},addProp:function(s,u){Object.defineProperty(c.Event.prototype,s,{enumerable:!0,configurable:!0,get:Q(u)?function(){if(this.originalEvent)return u(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[s]},set:function(l){Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:l})}})},fix:function(s){return s[c.expando]?s:new c.Event(s)},special:{load:{noBubble:!0},click:{setup:function(s){var u=this||s;return on.test(u.type)&&u.click&&b(u,"input")&&Pr(u,"click",!0),!1},trigger:function(s){var u=this||s;return on.test(u.type)&&u.click&&b(u,"input")&&Pr(u,"click"),!0},_default:function(s){var u=s.target;return on.test(u.type)&&u.click&&b(u,"input")&&re.get(u,"click")||b(u,"a")}},beforeunload:{postDispatch:function(s){s.result!==void 0&&s.originalEvent&&(s.originalEvent.returnValue=s.result)}}}};function Pr(s,u,l){if(!l){re.get(s,u)===void 0&&c.event.add(s,u,an);return}re.set(s,u,!1),c.event.add(s,u,{namespace:!1,handler:function(d){var m,y=re.get(this,u);if(d.isTrigger&1&&this[u]){if(y)(c.event.special[u]||{}).delegateType&&d.stopPropagation();else if(y=a.call(arguments),re.set(this,u,y),this[u](),m=re.get(this,u),re.set(this,u,!1),y!==m)return d.stopImmediatePropagation(),d.preventDefault(),m}else y&&(re.set(this,u,c.event.trigger(y[0],y.slice(1),this)),d.stopPropagation(),d.isImmediatePropagationStopped=an)}})}c.removeEvent=function(s,u,l){s.removeEventListener&&s.removeEventListener(u,l)},c.Event=function(s,u){if(!(this instanceof c.Event))return new c.Event(s,u);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.defaultPrevented===void 0&&s.returnValue===!1?an:Rt,this.target=s.target&&s.target.nodeType===3?s.target.parentNode:s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget):this.type=s,u&&c.extend(this,u),this.timeStamp=s&&s.timeStamp||Date.now(),this[c.expando]=!0},c.Event.prototype={constructor:c.Event,isDefaultPrevented:Rt,isPropagationStopped:Rt,isImmediatePropagationStopped:Rt,isSimulated:!1,preventDefault:function(){var s=this.originalEvent;this.isDefaultPrevented=an,s&&!this.isSimulated&&s.preventDefault()},stopPropagation:function(){var s=this.originalEvent;this.isPropagationStopped=an,s&&!this.isSimulated&&s.stopPropagation()},stopImmediatePropagation:function(){var s=this.originalEvent;this.isImmediatePropagationStopped=an,s&&!this.isSimulated&&s.stopImmediatePropagation(),this.stopPropagation()}},c.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},c.event.addProp),c.each({focus:"focusin",blur:"focusout"},function(s,u){function l(d){if(te.documentMode){var m=re.get(this,"handle"),y=c.event.fix(d);y.type=d.type==="focusin"?"focus":"blur",y.isSimulated=!0,m(d),y.target===y.currentTarget&&m(y)}else c.event.simulate(u,d.target,c.event.fix(d))}c.event.special[s]={setup:function(){var d;if(Pr(this,s,!0),te.documentMode)d=re.get(this,u),d||this.addEventListener(u,l),re.set(this,u,(d||0)+1);else return!1},trigger:function(){return Pr(this,s),!0},teardown:function(){var d;if(te.documentMode)d=re.get(this,u)-1,d?re.set(this,u,d):(this.removeEventListener(u,l),re.remove(this,u));else return!1},_default:function(d){return re.get(d.target,s)},delegateType:u},c.event.special[u]={setup:function(){var d=this.ownerDocument||this.document||this,m=te.documentMode?this:d,y=re.get(m,u);y||(te.documentMode?this.addEventListener(u,l):d.addEventListener(s,l,!0)),re.set(m,u,(y||0)+1)},teardown:function(){var d=this.ownerDocument||this.document||this,m=te.documentMode?this:d,y=re.get(m,u)-1;y?re.set(m,u,y):(te.documentMode?this.removeEventListener(u,l):d.removeEventListener(s,l,!0),re.remove(m,u))}}}),c.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(s,u){c.event.special[s]={delegateType:u,bindType:u,handle:function(l){var d,m=this,y=l.relatedTarget,v=l.handleObj;return(!y||y!==m&&!c.contains(m,y))&&(l.type=v.origType,d=v.handler.apply(this,arguments),l.type=u),d}}}),c.fn.extend({on:function(s,u,l,d){return un(this,s,u,l,d)},one:function(s,u,l,d){return un(this,s,u,l,d,1)},off:function(s,u,l){var d,m;if(s&&s.preventDefault&&s.handleObj)return d=s.handleObj,c(s.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if(typeof s=="object"){for(m in s)this.off(m,u,s[m]);return this}return(u===!1||typeof u=="function")&&(l=u,u=void 0),l===!1&&(l=Rt),this.each(function(){c.event.remove(this,s,l,u)})}});var Co=/<script|<style|<link/i,An=/checked\s*(?:[^=]|=\s*.checked.)/i,So=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function ds(s,u){return b(s,"table")&&b(u.nodeType!==11?u:u.firstChild,"tr")&&c(s).children("tbody")[0]||s}function kr(s){return s.type=(s.getAttribute("type")!==null)+"/"+s.type,s}function ps(s){return(s.type||"").slice(0,5)==="true/"?s.type=s.type.slice(5):s.removeAttribute("type"),s}function Dr(s,u){var l,d,m,y,v,S,I;if(u.nodeType===1){if(re.hasData(s)&&(y=re.get(s),I=y.events,I)){re.remove(u,"handle events");for(m in I)for(l=0,d=I[m].length;l<d;l++)c.event.add(u,m,I[m][l])}Pe.hasData(s)&&(v=Pe.access(s),S=c.extend({},v),Pe.set(u,S))}}function xr(s,u){var l=u.nodeName.toLowerCase();l==="input"&&on.test(s.type)?u.checked=s.checked:(l==="input"||l==="textarea")&&(u.defaultValue=s.defaultValue)}function pt(s,u,l,d){u=h(u);var m,y,v,S,I,k,B=0,q=s.length,F=q-1,W=u[0],ue=Q(W);if(ue||q>1&&typeof W=="string"&&!z.checkClone&&An.test(W))return s.each(function(ve){var ce=s.eq(ve);ue&&(u[0]=W.call(this,ve,ce.html())),pt(ce,u,l,d)});if(q&&(m=vi(u,s[0].ownerDocument,!1,s,d),y=m.firstChild,m.childNodes.length===1&&(m=y),y||d)){for(v=c.map(Ge(m,"script"),kr),S=v.length;B<q;B++)I=m,B!==F&&(I=c.clone(I,!0,!0),S&&c.merge(v,Ge(I,"script"))),l.call(s[B],I,B);if(S)for(k=v[v.length-1].ownerDocument,c.map(v,ps),B=0;B<S;B++)I=v[B],qt.test(I.type||"")&&!re.access(I,"globalEval")&&c.contains(k,I)&&(I.src&&(I.type||"").toLowerCase()!=="module"?c._evalUrl&&!I.noModule&&c._evalUrl(I.src,{nonce:I.nonce||I.getAttribute("nonce")},k):be(I.textContent.replace(So,""),I,k))}return s}function Ti(s,u,l){for(var d,m=u?c.filter(u,s):s,y=0;(d=m[y])!=null;y++)!l&&d.nodeType===1&&c.cleanData(Ge(d)),d.parentNode&&(l&&Bt(d)&&Rr(Ge(d,"script")),d.parentNode.removeChild(d));return s}c.extend({htmlPrefilter:function(s){return s},clone:function(s,u,l){var d,m,y,v,S=s.cloneNode(!0),I=Bt(s);if(!z.noCloneChecked&&(s.nodeType===1||s.nodeType===11)&&!c.isXMLDoc(s))for(v=Ge(S),y=Ge(s),d=0,m=y.length;d<m;d++)xr(y[d],v[d]);if(u)if(l)for(y=y||Ge(s),v=v||Ge(S),d=0,m=y.length;d<m;d++)Dr(y[d],v[d]);else Dr(s,S);return v=Ge(S,"script"),v.length>0&&Rr(v,!I&&Ge(s,"script")),S},cleanData:function(s){for(var u,l,d,m=c.event.special,y=0;(l=s[y])!==void 0;y++)if(rn(l)){if(u=l[re.expando]){if(u.events)for(d in u.events)m[d]?c.event.remove(l,d):c.removeEvent(l,d,u.handle);l[re.expando]=void 0}l[Pe.expando]&&(l[Pe.expando]=void 0)}}}),c.fn.extend({detach:function(s){return Ti(this,s,!0)},remove:function(s){return Ti(this,s)},text:function(s){return Ot(this,function(u){return u===void 0?c.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=u)})},null,s,arguments.length)},append:function(){return pt(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=ds(this,s);u.appendChild(s)}})},prepend:function(){return pt(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=ds(this,s);u.insertBefore(s,u.firstChild)}})},before:function(){return pt(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this)})},after:function(){return pt(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this.nextSibling)})},empty:function(){for(var s,u=0;(s=this[u])!=null;u++)s.nodeType===1&&(c.cleanData(Ge(s,!1)),s.textContent="");return this},clone:function(s,u){return s=s??!1,u=u??s,this.map(function(){return c.clone(this,s,u)})},html:function(s){return Ot(this,function(u){var l=this[0]||{},d=0,m=this.length;if(u===void 0&&l.nodeType===1)return l.innerHTML;if(typeof u=="string"&&!Co.test(u)&&!dt[(Sr.exec(u)||["",""])[1].toLowerCase()]){u=c.htmlPrefilter(u);try{for(;d<m;d++)l=this[d]||{},l.nodeType===1&&(c.cleanData(Ge(l,!1)),l.innerHTML=u);l=0}catch{}}l&&this.empty().append(u)},null,s,arguments.length)},replaceWith:function(){var s=[];return pt(this,arguments,function(u){var l=this.parentNode;c.inArray(this,s)<0&&(c.cleanData(Ge(this)),l&&l.replaceChild(u,this))},s)}}),c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,u){c.fn[s]=function(l){for(var d,m=[],y=c(l),v=y.length-1,S=0;S<=v;S++)d=S===v?this:this.clone(!0),c(y[S])[u](d),g.apply(m,d.get());return this.pushStack(m)}});var Nr=new RegExp("^("+hs+")(?!px)[a-z%]+$","i"),Jn=/^--/,bn=function(s){var u=s.ownerDocument.defaultView;return(!u||!u.opener)&&(u=e),u.getComputedStyle(s)},Ei=function(s,u,l){var d,m,y={};for(m in u)y[m]=s.style[m],s.style[m]=u[m];d=l.call(s);for(m in u)s.style[m]=y[m];return d},gs=new RegExp(Ct.join("|"),"i");(function(){function s(){if(k){I.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",k.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",jt.appendChild(I).appendChild(k);var B=e.getComputedStyle(k);l=B.top!=="1%",S=u(B.marginLeft)===12,k.style.right="60%",y=u(B.right)===36,d=u(B.width)===36,k.style.position="absolute",m=u(k.offsetWidth/3)===12,jt.removeChild(I),k=null}}function u(B){return Math.round(parseFloat(B))}var l,d,m,y,v,S,I=te.createElement("div"),k=te.createElement("div");k.style&&(k.style.backgroundClip="content-box",k.cloneNode(!0).style.backgroundClip="",z.clearCloneStyle=k.style.backgroundClip==="content-box",c.extend(z,{boxSizingReliable:function(){return s(),d},pixelBoxStyles:function(){return s(),y},pixelPosition:function(){return s(),l},reliableMarginLeft:function(){return s(),S},scrollboxSize:function(){return s(),m},reliableTrDimensions:function(){var B,q,F,W;return v==null&&(B=te.createElement("table"),q=te.createElement("tr"),F=te.createElement("div"),B.style.cssText="position:absolute;left:-11111px;border-collapse:separate",q.style.cssText="box-sizing:content-box;border:1px solid",q.style.height="1px",F.style.height="9px",F.style.display="block",jt.appendChild(B).appendChild(q).appendChild(F),W=e.getComputedStyle(q),v=parseInt(W.height,10)+parseInt(W.borderTopWidth,10)+parseInt(W.borderBottomWidth,10)===q.offsetHeight,jt.removeChild(B)),v}}))})();function Yn(s,u,l){var d,m,y,v,S=Jn.test(u),I=s.style;return l=l||bn(s),l&&(v=l.getPropertyValue(u)||l[u],S&&v&&(v=v.replace(lt,"$1")||void 0),v===""&&!Bt(s)&&(v=c.style(s,u)),!z.pixelBoxStyles()&&Nr.test(v)&&gs.test(u)&&(d=I.width,m=I.minWidth,y=I.maxWidth,I.minWidth=I.maxWidth=I.width=v,v=l.width,I.width=d,I.minWidth=m,I.maxWidth=y)),v!==void 0?v+"":v}function Zn(s,u){return{get:function(){if(s()){delete this.get;return}return(this.get=u).apply(this,arguments)}}}var wi=["Webkit","Moz","ms"],Or=te.createElement("div").style,Cn={};function cn(s){for(var u=s[0].toUpperCase()+s.slice(1),l=wi.length;l--;)if(s=wi[l]+u,s in Or)return s}function er(s){var u=c.cssProps[s]||Cn[s];return u||(s in Or?s:Cn[s]=cn(s)||s)}var Ro=/^(none|table(?!-c[ea]).+)/,ms={position:"absolute",visibility:"hidden",display:"block"},Ii={letterSpacing:"0",fontWeight:"400"};function Ai(s,u,l){var d=Vt.exec(u);return d?Math.max(0,d[2]-(l||0))+(d[3]||"px"):u}function tr(s,u,l,d,m,y){var v=u==="width"?1:0,S=0,I=0,k=0;if(l===(d?"border":"content"))return 0;for(;v<4;v+=2)l==="margin"&&(k+=c.css(s,l+Ct[v],!0,m)),d?(l==="content"&&(I-=c.css(s,"padding"+Ct[v],!0,m)),l!=="margin"&&(I-=c.css(s,"border"+Ct[v]+"Width",!0,m))):(I+=c.css(s,"padding"+Ct[v],!0,m),l!=="padding"?I+=c.css(s,"border"+Ct[v]+"Width",!0,m):S+=c.css(s,"border"+Ct[v]+"Width",!0,m));return!d&&y>=0&&(I+=Math.max(0,Math.ceil(s["offset"+u[0].toUpperCase()+u.slice(1)]-y-I-S-.5))||0),I+k}function Vr(s,u,l){var d=bn(s),m=!z.boxSizingReliable()||l,y=m&&c.css(s,"boxSizing",!1,d)==="border-box",v=y,S=Yn(s,u,d),I="offset"+u[0].toUpperCase()+u.slice(1);if(Nr.test(S)){if(!l)return S;S="auto"}return(!z.boxSizingReliable()&&y||!z.reliableTrDimensions()&&b(s,"tr")||S==="auto"||!parseFloat(S)&&c.css(s,"display",!1,d)==="inline")&&s.getClientRects().length&&(y=c.css(s,"boxSizing",!1,d)==="border-box",v=I in s,v&&(S=s[I])),S=parseFloat(S)||0,S+tr(s,u,l||(y?"border":"content"),v,d,S)+"px"}c.extend({cssHooks:{opacity:{get:function(s,u){if(u){var l=Yn(s,"opacity");return l===""?"1":l}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(s,u,l,d){if(!(!s||s.nodeType===3||s.nodeType===8||!s.style)){var m,y,v,S=bt(u),I=Jn.test(u),k=s.style;if(I||(u=er(S)),v=c.cssHooks[u]||c.cssHooks[S],l!==void 0){if(y=typeof l,y==="string"&&(m=Vt.exec(l))&&m[1]&&(l=Cr(s,u,m),y="number"),l==null||l!==l)return;y==="number"&&!I&&(l+=m&&m[3]||(c.cssNumber[S]?"":"px")),!z.clearCloneStyle&&l===""&&u.indexOf("background")===0&&(k[u]="inherit"),(!v||!("set"in v)||(l=v.set(s,l,d))!==void 0)&&(I?k.setProperty(u,l):k[u]=l)}else return v&&"get"in v&&(m=v.get(s,!1,d))!==void 0?m:k[u]}},css:function(s,u,l,d){var m,y,v,S=bt(u),I=Jn.test(u);return I||(u=er(S)),v=c.cssHooks[u]||c.cssHooks[S],v&&"get"in v&&(m=v.get(s,!0,l)),m===void 0&&(m=Yn(s,u,d)),m==="normal"&&u in Ii&&(m=Ii[u]),l===""||l?(y=parseFloat(m),l===!0||isFinite(y)?y||0:m):m}}),c.each(["height","width"],function(s,u){c.cssHooks[u]={get:function(l,d,m){if(d)return Ro.test(c.css(l,"display"))&&(!l.getClientRects().length||!l.getBoundingClientRect().width)?Ei(l,ms,function(){return Vr(l,u,m)}):Vr(l,u,m)},set:function(l,d,m){var y,v=bn(l),S=!z.scrollboxSize()&&v.position==="absolute",I=S||m,k=I&&c.css(l,"boxSizing",!1,v)==="border-box",B=m?tr(l,u,m,k,v):0;return k&&S&&(B-=Math.ceil(l["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(v[u])-tr(l,u,"border",!1,v)-.5)),B&&(y=Vt.exec(d))&&(y[3]||"px")!=="px"&&(l.style[u]=d,d=c.css(l,u)),Ai(l,d,B)}}}),c.cssHooks.marginLeft=Zn(z.reliableMarginLeft,function(s,u){if(u)return(parseFloat(Yn(s,"marginLeft"))||s.getBoundingClientRect().left-Ei(s,{marginLeft:0},function(){return s.getBoundingClientRect().left}))+"px"}),c.each({margin:"",padding:"",border:"Width"},function(s,u){c.cssHooks[s+u]={expand:function(l){for(var d=0,m={},y=typeof l=="string"?l.split(" "):[l];d<4;d++)m[s+Ct[d]+u]=y[d]||y[d-2]||y[0];return m}},s!=="margin"&&(c.cssHooks[s+u].set=Ai)}),c.fn.extend({css:function(s,u){return Ot(this,function(l,d,m){var y,v,S={},I=0;if(Array.isArray(d)){for(y=bn(l),v=d.length;I<v;I++)S[d[I]]=c.css(l,d[I],!1,y);return S}return m!==void 0?c.style(l,d,m):c.css(l,d)},s,u,arguments.length>1)}});function tt(s,u,l,d,m){return new tt.prototype.init(s,u,l,d,m)}c.Tween=tt,tt.prototype={constructor:tt,init:function(s,u,l,d,m,y){this.elem=s,this.prop=l,this.easing=m||c.easing._default,this.options=u,this.start=this.now=this.cur(),this.end=d,this.unit=y||(c.cssNumber[l]?"":"px")},cur:function(){var s=tt.propHooks[this.prop];return s&&s.get?s.get(this):tt.propHooks._default.get(this)},run:function(s){var u,l=tt.propHooks[this.prop];return this.options.duration?this.pos=u=c.easing[this.easing](s,this.options.duration*s,0,1,this.options.duration):this.pos=u=s,this.now=(this.end-this.start)*u+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),l&&l.set?l.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(s){var u;return s.elem.nodeType!==1||s.elem[s.prop]!=null&&s.elem.style[s.prop]==null?s.elem[s.prop]:(u=c.css(s.elem,s.prop,""),!u||u==="auto"?0:u)},set:function(s){c.fx.step[s.prop]?c.fx.step[s.prop](s):s.elem.nodeType===1&&(c.cssHooks[s.prop]||s.elem.style[er(s.prop)]!=null)?c.style(s.elem,s.prop,s.now+s.unit):s.elem[s.prop]=s.now}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(s){s.elem.nodeType&&s.elem.parentNode&&(s.elem[s.prop]=s.now)}},c.easing={linear:function(s){return s},swing:function(s){return .5-Math.cos(s*Math.PI)/2},_default:"swing"},c.fx=tt.prototype.init,c.fx.step={};var ln,Lr,Po=/^(?:toggle|show|hide)$/,ys=/queueHooks$/;function Mr(){Lr&&(te.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Mr):e.setTimeout(Mr,c.fx.interval),c.fx.tick())}function _s(){return e.setTimeout(function(){ln=void 0}),ln=Date.now()}function Pt(s,u){var l,d=0,m={height:s};for(u=u?1:0;d<4;d+=2-u)l=Ct[d],m["margin"+l]=m["padding"+l]=s;return u&&(m.opacity=m.width=s),m}function kt(s,u,l){for(var d,m=(_t.tweeners[u]||[]).concat(_t.tweeners["*"]),y=0,v=m.length;y<v;y++)if(d=m[y].call(l,u,s))return d}function Fr(s,u,l){var d,m,y,v,S,I,k,B,q="width"in u||"height"in u,F=this,W={},ue=s.style,ve=s.nodeType&&br(s),ce=re.get(s,"fxshow");l.queue||(v=c._queueHooks(s,"fx"),v.unqueued==null&&(v.unqueued=0,S=v.empty.fire,v.empty.fire=function(){v.unqueued||S()}),v.unqueued++,F.always(function(){F.always(function(){v.unqueued--,c.queue(s,"fx").length||v.empty.fire()})}));for(d in u)if(m=u[d],Po.test(m)){if(delete u[d],y=y||m==="toggle",m===(ve?"hide":"show"))if(m==="show"&&ce&&ce[d]!==void 0)ve=!0;else continue;W[d]=ce&&ce[d]||c.style(s,d)}if(I=!c.isEmptyObject(u),!(!I&&c.isEmptyObject(W))){q&&s.nodeType===1&&(l.overflow=[ue.overflow,ue.overflowX,ue.overflowY],k=ce&&ce.display,k==null&&(k=re.get(s,"display")),B=c.css(s,"display"),B==="none"&&(k?B=k:(St([s],!0),k=s.style.display||k,B=c.css(s,"display"),St([s]))),(B==="inline"||B==="inline-block"&&k!=null)&&c.css(s,"float")==="none"&&(I||(F.done(function(){ue.display=k}),k==null&&(B=ue.display,k=B==="none"?"":B)),ue.display="inline-block")),l.overflow&&(ue.overflow="hidden",F.always(function(){ue.overflow=l.overflow[0],ue.overflowX=l.overflow[1],ue.overflowY=l.overflow[2]})),I=!1;for(d in W)I||(ce?"hidden"in ce&&(ve=ce.hidden):ce=re.access(s,"fxshow",{display:k}),y&&(ce.hidden=!ve),ve&&St([s],!0),F.done(function(){ve||St([s]),re.remove(s,"fxshow");for(d in W)c.style(s,d,W[d])})),I=kt(ve?ce[d]:0,d,F),d in ce||(ce[d]=I.start,ve&&(I.end=I.start,I.start=0))}}function Ur(s,u){var l,d,m,y,v;for(l in s)if(d=bt(l),m=u[d],y=s[l],Array.isArray(y)&&(m=y[1],y=s[l]=y[0]),l!==d&&(s[d]=y,delete s[l]),v=c.cssHooks[d],v&&"expand"in v){y=v.expand(y),delete s[d];for(l in y)l in s||(s[l]=y[l],u[l]=m)}else u[d]=m}function _t(s,u,l){var d,m,y=0,v=_t.prefilters.length,S=c.Deferred().always(function(){delete I.elem}),I=function(){if(m)return!1;for(var q=ln||_s(),F=Math.max(0,k.startTime+k.duration-q),W=F/k.duration||0,ue=1-W,ve=0,ce=k.tweens.length;ve<ce;ve++)k.tweens[ve].run(ue);return S.notifyWith(s,[k,ue,F]),ue<1&&ce?F:(ce||S.notifyWith(s,[k,1,0]),S.resolveWith(s,[k]),!1)},k=S.promise({elem:s,props:c.extend({},u),opts:c.extend(!0,{specialEasing:{},easing:c.easing._default},l),originalProperties:u,originalOptions:l,startTime:ln||_s(),duration:l.duration,tweens:[],createTween:function(q,F){var W=c.Tween(s,k.opts,q,F,k.opts.specialEasing[q]||k.opts.easing);return k.tweens.push(W),W},stop:function(q){var F=0,W=q?k.tweens.length:0;if(m)return this;for(m=!0;F<W;F++)k.tweens[F].run(1);return q?(S.notifyWith(s,[k,1,0]),S.resolveWith(s,[k,q])):S.rejectWith(s,[k,q]),this}}),B=k.props;for(Ur(B,k.opts.specialEasing);y<v;y++)if(d=_t.prefilters[y].call(k,s,B,k.opts),d)return Q(d.stop)&&(c._queueHooks(k.elem,k.opts.queue).stop=d.stop.bind(d)),d;return c.map(B,kt,k),Q(k.opts.start)&&k.opts.start.call(s,k),k.progress(k.opts.progress).done(k.opts.done,k.opts.complete).fail(k.opts.fail).always(k.opts.always),c.fx.timer(c.extend(I,{elem:s,anim:k,queue:k.opts.queue})),k}c.Animation=c.extend(_t,{tweeners:{"*":[function(s,u){var l=this.createTween(s,u);return Cr(l.elem,s,Vt.exec(u),l),l}]},tweener:function(s,u){Q(s)?(u=s,s=["*"]):s=s.match(ft);for(var l,d=0,m=s.length;d<m;d++)l=s[d],_t.tweeners[l]=_t.tweeners[l]||[],_t.tweeners[l].unshift(u)},prefilters:[Fr],prefilter:function(s,u){u?_t.prefilters.unshift(s):_t.prefilters.push(s)}}),c.speed=function(s,u,l){var d=s&&typeof s=="object"?c.extend({},s):{complete:l||!l&&u||Q(s)&&s,duration:s,easing:l&&u||u&&!Q(u)&&u};return c.fx.off?d.duration=0:typeof d.duration!="number"&&(d.duration in c.fx.speeds?d.duration=c.fx.speeds[d.duration]:d.duration=c.fx.speeds._default),(d.queue==null||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){Q(d.old)&&d.old.call(this),d.queue&&c.dequeue(this,d.queue)},d},c.fn.extend({fadeTo:function(s,u,l,d){return this.filter(br).css("opacity",0).show().end().animate({opacity:u},s,l,d)},animate:function(s,u,l,d){var m=c.isEmptyObject(s),y=c.speed(u,l,d),v=function(){var S=_t(this,c.extend({},s),y);(m||re.get(this,"finish"))&&S.stop(!0)};return v.finish=v,m||y.queue===!1?this.each(v):this.queue(y.queue,v)},stop:function(s,u,l){var d=function(m){var y=m.stop;delete m.stop,y(l)};return typeof s!="string"&&(l=u,u=s,s=void 0),u&&this.queue(s||"fx",[]),this.each(function(){var m=!0,y=s!=null&&s+"queueHooks",v=c.timers,S=re.get(this);if(y)S[y]&&S[y].stop&&d(S[y]);else for(y in S)S[y]&&S[y].stop&&ys.test(y)&&d(S[y]);for(y=v.length;y--;)v[y].elem===this&&(s==null||v[y].queue===s)&&(v[y].anim.stop(l),m=!1,v.splice(y,1));(m||!l)&&c.dequeue(this,s)})},finish:function(s){return s!==!1&&(s=s||"fx"),this.each(function(){var u,l=re.get(this),d=l[s+"queue"],m=l[s+"queueHooks"],y=c.timers,v=d?d.length:0;for(l.finish=!0,c.queue(this,s,[]),m&&m.stop&&m.stop.call(this,!0),u=y.length;u--;)y[u].elem===this&&y[u].queue===s&&(y[u].anim.stop(!0),y.splice(u,1));for(u=0;u<v;u++)d[u]&&d[u].finish&&d[u].finish.call(this);delete l.finish})}}),c.each(["toggle","show","hide"],function(s,u){var l=c.fn[u];c.fn[u]=function(d,m,y){return d==null||typeof d=="boolean"?l.apply(this,arguments):this.animate(Pt(u,!0),d,m,y)}}),c.each({slideDown:Pt("show"),slideUp:Pt("hide"),slideToggle:Pt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,u){c.fn[s]=function(l,d,m){return this.animate(u,l,d,m)}}),c.timers=[],c.fx.tick=function(){var s,u=0,l=c.timers;for(ln=Date.now();u<l.length;u++)s=l[u],!s()&&l[u]===s&&l.splice(u--,1);l.length||c.fx.stop(),ln=void 0},c.fx.timer=function(s){c.timers.push(s),c.fx.start()},c.fx.interval=13,c.fx.start=function(){Lr||(Lr=!0,Mr())},c.fx.stop=function(){Lr=null},c.fx.speeds={slow:600,fast:200,_default:400},c.fn.delay=function(s,u){return s=c.fx&&c.fx.speeds[s]||s,u=u||"fx",this.queue(u,function(l,d){var m=e.setTimeout(l,s);d.stop=function(){e.clearTimeout(m)}})},function(){var s=te.createElement("input"),u=te.createElement("select"),l=u.appendChild(te.createElement("option"));s.type="checkbox",z.checkOn=s.value!=="",z.optSelected=l.selected,s=te.createElement("input"),s.value="t",s.type="radio",z.radioValue=s.value==="t"}();var xe,Ht=c.expr.attrHandle;c.fn.extend({attr:function(s,u){return Ot(this,c.attr,s,u,arguments.length>1)},removeAttr:function(s){return this.each(function(){c.removeAttr(this,s)})}}),c.extend({attr:function(s,u,l){var d,m,y=s.nodeType;if(!(y===3||y===8||y===2)){if(typeof s.getAttribute>"u")return c.prop(s,u,l);if((y!==1||!c.isXMLDoc(s))&&(m=c.attrHooks[u.toLowerCase()]||(c.expr.match.bool.test(u)?xe:void 0)),l!==void 0){if(l===null){c.removeAttr(s,u);return}return m&&"set"in m&&(d=m.set(s,l,u))!==void 0?d:(s.setAttribute(u,l+""),l)}return m&&"get"in m&&(d=m.get(s,u))!==null?d:(d=c.find.attr(s,u),d??void 0)}},attrHooks:{type:{set:function(s,u){if(!z.radioValue&&u==="radio"&&b(s,"input")){var l=s.value;return s.setAttribute("type",u),l&&(s.value=l),u}}}},removeAttr:function(s,u){var l,d=0,m=u&&u.match(ft);if(m&&s.nodeType===1)for(;l=m[d++];)s.removeAttribute(l)}}),xe={set:function(s,u,l){return u===!1?c.removeAttr(s,l):s.setAttribute(l,l),l}},c.each(c.expr.match.bool.source.match(/\w+/g),function(s,u){var l=Ht[u]||c.find.attr;Ht[u]=function(d,m,y){var v,S,I=m.toLowerCase();return y||(S=Ht[I],Ht[I]=v,v=l(d,m,y)!=null?I:null,Ht[I]=S),v}});var nr=/^(?:input|select|textarea|button)$/i,rr=/^(?:a|area)$/i;c.fn.extend({prop:function(s,u){return Ot(this,c.prop,s,u,arguments.length>1)},removeProp:function(s){return this.each(function(){delete this[c.propFix[s]||s]})}}),c.extend({prop:function(s,u,l){var d,m,y=s.nodeType;if(!(y===3||y===8||y===2))return(y!==1||!c.isXMLDoc(s))&&(u=c.propFix[u]||u,m=c.propHooks[u]),l!==void 0?m&&"set"in m&&(d=m.set(s,l,u))!==void 0?d:s[u]=l:m&&"get"in m&&(d=m.get(s,u))!==null?d:s[u]},propHooks:{tabIndex:{get:function(s){var u=c.find.attr(s,"tabindex");return u?parseInt(u,10):nr.test(s.nodeName)||rr.test(s.nodeName)&&s.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),z.optSelected||(c.propHooks.selected={get:function(s){var u=s.parentNode;return u&&u.parentNode&&u.parentNode.selectedIndex,null},set:function(s){var u=s.parentNode;u&&(u.selectedIndex,u.parentNode&&u.parentNode.selectedIndex)}}),c.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){c.propFix[this.toLowerCase()]=this});function hn(s){var u=s.match(ft)||[];return u.join(" ")}function $t(s){return s.getAttribute&&s.getAttribute("class")||""}function bi(s){return Array.isArray(s)?s:typeof s=="string"?s.match(ft)||[]:[]}c.fn.extend({addClass:function(s){var u,l,d,m,y,v;return Q(s)?this.each(function(S){c(this).addClass(s.call(this,S,$t(this)))}):(u=bi(s),u.length?this.each(function(){if(d=$t(this),l=this.nodeType===1&&" "+hn(d)+" ",l){for(y=0;y<u.length;y++)m=u[y],l.indexOf(" "+m+" ")<0&&(l+=m+" ");v=hn(l),d!==v&&this.setAttribute("class",v)}}):this)},removeClass:function(s){var u,l,d,m,y,v;return Q(s)?this.each(function(S){c(this).removeClass(s.call(this,S,$t(this)))}):arguments.length?(u=bi(s),u.length?this.each(function(){if(d=$t(this),l=this.nodeType===1&&" "+hn(d)+" ",l){for(y=0;y<u.length;y++)for(m=u[y];l.indexOf(" "+m+" ")>-1;)l=l.replace(" "+m+" "," ");v=hn(l),d!==v&&this.setAttribute("class",v)}}):this):this.attr("class","")},toggleClass:function(s,u){var l,d,m,y,v=typeof s,S=v==="string"||Array.isArray(s);return Q(s)?this.each(function(I){c(this).toggleClass(s.call(this,I,$t(this),u),u)}):typeof u=="boolean"&&S?u?this.addClass(s):this.removeClass(s):(l=bi(s),this.each(function(){if(S)for(y=c(this),m=0;m<l.length;m++)d=l[m],y.hasClass(d)?y.removeClass(d):y.addClass(d);else(s===void 0||v==="boolean")&&(d=$t(this),d&&re.set(this,"__className__",d),this.setAttribute&&this.setAttribute("class",d||s===!1?"":re.get(this,"__className__")||""))}))},hasClass:function(s){var u,l,d=0;for(u=" "+s+" ";l=this[d++];)if(l.nodeType===1&&(" "+hn($t(l))+" ").indexOf(u)>-1)return!0;return!1}});var ko=/\r/g;c.fn.extend({val:function(s){var u,l,d,m=this[0];return arguments.length?(d=Q(s),this.each(function(y){var v;this.nodeType===1&&(d?v=s.call(this,y,c(this).val()):v=s,v==null?v="":typeof v=="number"?v+="":Array.isArray(v)&&(v=c.map(v,function(S){return S==null?"":S+""})),u=c.valHooks[this.type]||c.valHooks[this.nodeName.toLowerCase()],(!u||!("set"in u)||u.set(this,v,"value")===void 0)&&(this.value=v))})):m?(u=c.valHooks[m.type]||c.valHooks[m.nodeName.toLowerCase()],u&&"get"in u&&(l=u.get(m,"value"))!==void 0?l:(l=m.value,typeof l=="string"?l.replace(ko,""):l??"")):void 0}}),c.extend({valHooks:{option:{get:function(s){var u=c.find.attr(s,"value");return u??hn(c.text(s))}},select:{get:function(s){var u,l,d,m=s.options,y=s.selectedIndex,v=s.type==="select-one",S=v?null:[],I=v?y+1:m.length;for(y<0?d=I:d=v?y:0;d<I;d++)if(l=m[d],(l.selected||d===y)&&!l.disabled&&(!l.parentNode.disabled||!b(l.parentNode,"optgroup"))){if(u=c(l).val(),v)return u;S.push(u)}return S},set:function(s,u){for(var l,d,m=s.options,y=c.makeArray(u),v=m.length;v--;)d=m[v],(d.selected=c.inArray(c.valHooks.option.get(d),y)>-1)&&(l=!0);return l||(s.selectedIndex=-1),y}}}}),c.each(["radio","checkbox"],function(){c.valHooks[this]={set:function(s,u){if(Array.isArray(u))return s.checked=c.inArray(c(s).val(),u)>-1}},z.checkOn||(c.valHooks[this].get=function(s){return s.getAttribute("value")===null?"on":s.value})});var ir=e.location,vs={guid:Date.now()},fn=/\?/;c.parseXML=function(s){var u,l;if(!s||typeof s!="string")return null;try{u=new e.DOMParser().parseFromString(s,"text/xml")}catch{}return l=u&&u.getElementsByTagName("parsererror")[0],(!u||l)&&c.error("Invalid XML: "+(l?c.map(l.childNodes,function(d){return d.textContent}).join(`
`):s)),u};var Lt=/^(?:focusinfocus|focusoutblur)$/,Ci=function(s){s.stopPropagation()};c.extend(c.event,{trigger:function(s,u,l,d){var m,y,v,S,I,k,B,q,F=[l||te],W=O.call(s,"type")?s.type:s,ue=O.call(s,"namespace")?s.namespace.split("."):[];if(y=q=v=l=l||te,!(l.nodeType===3||l.nodeType===8)&&!Lt.test(W+c.event.triggered)&&(W.indexOf(".")>-1&&(ue=W.split("."),W=ue.shift(),ue.sort()),I=W.indexOf(":")<0&&"on"+W,s=s[c.expando]?s:new c.Event(W,typeof s=="object"&&s),s.isTrigger=d?2:3,s.namespace=ue.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+ue.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=l),u=u==null?[s]:c.makeArray(u,[s]),B=c.event.special[W]||{},!(!d&&B.trigger&&B.trigger.apply(l,u)===!1))){if(!d&&!B.noBubble&&!ee(l)){for(S=B.delegateType||W,Lt.test(S+W)||(y=y.parentNode);y;y=y.parentNode)F.push(y),v=y;v===(l.ownerDocument||te)&&F.push(v.defaultView||v.parentWindow||e)}for(m=0;(y=F[m++])&&!s.isPropagationStopped();)q=y,s.type=m>1?S:B.bindType||W,k=(re.get(y,"events")||Object.create(null))[s.type]&&re.get(y,"handle"),k&&k.apply(y,u),k=I&&y[I],k&&k.apply&&rn(y)&&(s.result=k.apply(y,u),s.result===!1&&s.preventDefault());return s.type=W,!d&&!s.isDefaultPrevented()&&(!B._default||B._default.apply(F.pop(),u)===!1)&&rn(l)&&I&&Q(l[W])&&!ee(l)&&(v=l[I],v&&(l[I]=null),c.event.triggered=W,s.isPropagationStopped()&&q.addEventListener(W,Ci),l[W](),s.isPropagationStopped()&&q.removeEventListener(W,Ci),c.event.triggered=void 0,v&&(l[I]=v)),s.result}},simulate:function(s,u,l){var d=c.extend(new c.Event,l,{type:s,isSimulated:!0});c.event.trigger(d,null,u)}}),c.fn.extend({trigger:function(s,u){return this.each(function(){c.event.trigger(s,u,this)})},triggerHandler:function(s,u){var l=this[0];if(l)return c.event.trigger(s,u,l,!0)}});var Ts=/\[\]$/,Si=/\r?\n/g,Sn=/^(?:submit|button|image|reset|file)$/i,Do=/^(?:input|select|textarea|keygen)/i;function Ri(s,u,l,d){var m;if(Array.isArray(u))c.each(u,function(y,v){l||Ts.test(s)?d(s,v):Ri(s+"["+(typeof v=="object"&&v!=null?y:"")+"]",v,l,d)});else if(!l&&De(u)==="object")for(m in u)Ri(s+"["+m+"]",u[m],l,d);else d(s,u)}c.param=function(s,u){var l,d=[],m=function(y,v){var S=Q(v)?v():v;d[d.length]=encodeURIComponent(y)+"="+encodeURIComponent(S??"")};if(s==null)return"";if(Array.isArray(s)||s.jquery&&!c.isPlainObject(s))c.each(s,function(){m(this.name,this.value)});else for(l in s)Ri(l,s[l],u,m);return d.join("&")},c.fn.extend({serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var s=c.prop(this,"elements");return s?c.makeArray(s):this}).filter(function(){var s=this.type;return this.name&&!c(this).is(":disabled")&&Do.test(this.nodeName)&&!Sn.test(s)&&(this.checked||!on.test(s))}).map(function(s,u){var l=c(this).val();return l==null?null:Array.isArray(l)?c.map(l,function(d){return{name:u.name,value:d.replace(Si,`\r
`)}}):{name:u.name,value:l.replace(Si,`\r
`)}}).get()}});var xo=/%20/g,zt=/#.*$/,No=/([?&])_=[^&]*/,Oo=/^(.*?):[ \t]*([^\r\n]*)$/mg,jr=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Br=/^(?:GET|HEAD)$/,Es=/^\/\//,Rn={},dn={},Pi="*/".concat("*"),sr=te.createElement("a");sr.href=ir.href;function Ve(s){return function(u,l){typeof u!="string"&&(l=u,u="*");var d,m=0,y=u.toLowerCase().match(ft)||[];if(Q(l))for(;d=y[m++];)d[0]==="+"?(d=d.slice(1)||"*",(s[d]=s[d]||[]).unshift(l)):(s[d]=s[d]||[]).push(l)}}function ws(s,u,l,d){var m={},y=s===dn;function v(S){var I;return m[S]=!0,c.each(s[S]||[],function(k,B){var q=B(u,l,d);if(typeof q=="string"&&!y&&!m[q])return u.dataTypes.unshift(q),v(q),!1;if(y)return!(I=q)}),I}return v(u.dataTypes[0])||!m["*"]&&v("*")}function ki(s,u){var l,d,m=c.ajaxSettings.flatOptions||{};for(l in u)u[l]!==void 0&&((m[l]?s:d||(d={}))[l]=u[l]);return d&&c.extend(!0,s,d),s}function Is(s,u,l){for(var d,m,y,v,S=s.contents,I=s.dataTypes;I[0]==="*";)I.shift(),d===void 0&&(d=s.mimeType||u.getResponseHeader("Content-Type"));if(d){for(m in S)if(S[m]&&S[m].test(d)){I.unshift(m);break}}if(I[0]in l)y=I[0];else{for(m in l){if(!I[0]||s.converters[m+" "+I[0]]){y=m;break}v||(v=m)}y=y||v}if(y)return y!==I[0]&&I.unshift(y),l[y]}function As(s,u,l,d){var m,y,v,S,I,k={},B=s.dataTypes.slice();if(B[1])for(v in s.converters)k[v.toLowerCase()]=s.converters[v];for(y=B.shift();y;)if(s.responseFields[y]&&(l[s.responseFields[y]]=u),!I&&d&&s.dataFilter&&(u=s.dataFilter(u,s.dataType)),I=y,y=B.shift(),y){if(y==="*")y=I;else if(I!=="*"&&I!==y){if(v=k[I+" "+y]||k["* "+y],!v){for(m in k)if(S=m.split(" "),S[1]===y&&(v=k[I+" "+S[0]]||k["* "+S[0]],v)){v===!0?v=k[m]:k[m]!==!0&&(y=S[0],B.unshift(S[1]));break}}if(v!==!0)if(v&&s.throws)u=v(u);else try{u=v(u)}catch(q){return{state:"parsererror",error:v?q:"No conversion from "+I+" to "+y}}}}return{state:"success",data:u}}c.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ir.href,type:"GET",isLocal:jr.test(ir.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Pi,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":c.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(s,u){return u?ki(ki(s,c.ajaxSettings),u):ki(c.ajaxSettings,s)},ajaxPrefilter:Ve(Rn),ajaxTransport:Ve(dn),ajax:function(s,u){typeof s=="object"&&(u=s,s=void 0),u=u||{};var l,d,m,y,v,S,I,k,B,q,F=c.ajaxSetup({},u),W=F.context||F,ue=F.context&&(W.nodeType||W.jquery)?c(W):c.event,ve=c.Deferred(),ce=c.Callbacks("once memory"),ze=F.statusCode||{},Ue={},It={},At="canceled",me={readyState:0,getResponseHeader:function(Ie){var Le;if(I){if(!y)for(y={};Le=Oo.exec(m);)y[Le[1].toLowerCase()+" "]=(y[Le[1].toLowerCase()+" "]||[]).concat(Le[2]);Le=y[Ie.toLowerCase()+" "]}return Le==null?null:Le.join(", ")},getAllResponseHeaders:function(){return I?m:null},setRequestHeader:function(Ie,Le){return I==null&&(Ie=It[Ie.toLowerCase()]=It[Ie.toLowerCase()]||Ie,Ue[Ie]=Le),this},overrideMimeType:function(Ie){return I==null&&(F.mimeType=Ie),this},statusCode:function(Ie){var Le;if(Ie)if(I)me.always(Ie[me.status]);else for(Le in Ie)ze[Le]=[ze[Le],Ie[Le]];return this},abort:function(Ie){var Le=Ie||At;return l&&l.abort(Le),Be(0,Le),this}};if(ve.promise(me),F.url=((s||F.url||ir.href)+"").replace(Es,ir.protocol+"//"),F.type=u.method||u.type||F.method||F.type,F.dataTypes=(F.dataType||"*").toLowerCase().match(ft)||[""],F.crossDomain==null){S=te.createElement("a");try{S.href=F.url,S.href=S.href,F.crossDomain=sr.protocol+"//"+sr.host!=S.protocol+"//"+S.host}catch{F.crossDomain=!0}}if(F.data&&F.processData&&typeof F.data!="string"&&(F.data=c.param(F.data,F.traditional)),ws(Rn,F,u,me),I)return me;k=c.event&&F.global,k&&c.active++===0&&c.event.trigger("ajaxStart"),F.type=F.type.toUpperCase(),F.hasContent=!Br.test(F.type),d=F.url.replace(zt,""),F.hasContent?F.data&&F.processData&&(F.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(F.data=F.data.replace(xo,"+")):(q=F.url.slice(d.length),F.data&&(F.processData||typeof F.data=="string")&&(d+=(fn.test(d)?"&":"?")+F.data,delete F.data),F.cache===!1&&(d=d.replace(No,"$1"),q=(fn.test(d)?"&":"?")+"_="+vs.guid+++q),F.url=d+q),F.ifModified&&(c.lastModified[d]&&me.setRequestHeader("If-Modified-Since",c.lastModified[d]),c.etag[d]&&me.setRequestHeader("If-None-Match",c.etag[d])),(F.data&&F.hasContent&&F.contentType!==!1||u.contentType)&&me.setRequestHeader("Content-Type",F.contentType),me.setRequestHeader("Accept",F.dataTypes[0]&&F.accepts[F.dataTypes[0]]?F.accepts[F.dataTypes[0]]+(F.dataTypes[0]!=="*"?", "+Pi+"; q=0.01":""):F.accepts["*"]);for(B in F.headers)me.setRequestHeader(B,F.headers[B]);if(F.beforeSend&&(F.beforeSend.call(W,me,F)===!1||I))return me.abort();if(At="abort",ce.add(F.complete),me.done(F.success),me.fail(F.error),l=ws(dn,F,u,me),!l)Be(-1,"No Transport");else{if(me.readyState=1,k&&ue.trigger("ajaxSend",[me,F]),I)return me;F.async&&F.timeout>0&&(v=e.setTimeout(function(){me.abort("timeout")},F.timeout));try{I=!1,l.send(Ue,Be)}catch(Ie){if(I)throw Ie;Be(-1,Ie)}}function Be(Ie,Le,Dt,o){var f,p,T,N,U,K=Le;I||(I=!0,v&&e.clearTimeout(v),l=void 0,m=o||"",me.readyState=Ie>0?4:0,f=Ie>=200&&Ie<300||Ie===304,Dt&&(N=Is(F,me,Dt)),!f&&c.inArray("script",F.dataTypes)>-1&&c.inArray("json",F.dataTypes)<0&&(F.converters["text script"]=function(){}),N=As(F,N,me,f),f?(F.ifModified&&(U=me.getResponseHeader("Last-Modified"),U&&(c.lastModified[d]=U),U=me.getResponseHeader("etag"),U&&(c.etag[d]=U)),Ie===204||F.type==="HEAD"?K="nocontent":Ie===304?K="notmodified":(K=N.state,p=N.data,T=N.error,f=!T)):(T=K,(Ie||!K)&&(K="error",Ie<0&&(Ie=0))),me.status=Ie,me.statusText=(Le||K)+"",f?ve.resolveWith(W,[p,K,me]):ve.rejectWith(W,[me,K,T]),me.statusCode(ze),ze=void 0,k&&ue.trigger(f?"ajaxSuccess":"ajaxError",[me,F,f?p:T]),ce.fireWith(W,[me,K]),k&&(ue.trigger("ajaxComplete",[me,F]),--c.active||c.event.trigger("ajaxStop")))}return me},getJSON:function(s,u,l){return c.get(s,u,l,"json")},getScript:function(s,u){return c.get(s,void 0,u,"script")}}),c.each(["get","post"],function(s,u){c[u]=function(l,d,m,y){return Q(d)&&(y=y||m,m=d,d=void 0),c.ajax(c.extend({url:l,type:u,dataType:y,data:d,success:m},c.isPlainObject(l)&&l))}}),c.ajaxPrefilter(function(s){var u;for(u in s.headers)u.toLowerCase()==="content-type"&&(s.contentType=s.headers[u]||"")}),c._evalUrl=function(s,u,l){return c.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(d){c.globalEval(d,u,l)}})},c.fn.extend({wrapAll:function(s){var u;return this[0]&&(Q(s)&&(s=s.call(this[0])),u=c(s,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&u.insertBefore(this[0]),u.map(function(){for(var l=this;l.firstElementChild;)l=l.firstElementChild;return l}).append(this)),this},wrapInner:function(s){return Q(s)?this.each(function(u){c(this).wrapInner(s.call(this,u))}):this.each(function(){var u=c(this),l=u.contents();l.length?l.wrapAll(s):u.append(s)})},wrap:function(s){var u=Q(s);return this.each(function(l){c(this).wrapAll(u?s.call(this,l):s)})},unwrap:function(s){return this.parent(s).not("body").each(function(){c(this).replaceWith(this.childNodes)}),this}}),c.expr.pseudos.hidden=function(s){return!c.expr.pseudos.visible(s)},c.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)},c.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var bs={0:200,1223:204},Wt=c.ajaxSettings.xhr();z.cors=!!Wt&&"withCredentials"in Wt,z.ajax=Wt=!!Wt,c.ajaxTransport(function(s){var u,l;if(z.cors||Wt&&!s.crossDomain)return{send:function(d,m){var y,v=s.xhr();if(v.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(y in s.xhrFields)v[y]=s.xhrFields[y];s.mimeType&&v.overrideMimeType&&v.overrideMimeType(s.mimeType),!s.crossDomain&&!d["X-Requested-With"]&&(d["X-Requested-With"]="XMLHttpRequest");for(y in d)v.setRequestHeader(y,d[y]);u=function(S){return function(){u&&(u=l=v.onload=v.onerror=v.onabort=v.ontimeout=v.onreadystatechange=null,S==="abort"?v.abort():S==="error"?typeof v.status!="number"?m(0,"error"):m(v.status,v.statusText):m(bs[v.status]||v.status,v.statusText,(v.responseType||"text")!=="text"||typeof v.responseText!="string"?{binary:v.response}:{text:v.responseText},v.getAllResponseHeaders()))}},v.onload=u(),l=v.onerror=v.ontimeout=u("error"),v.onabort!==void 0?v.onabort=l:v.onreadystatechange=function(){v.readyState===4&&e.setTimeout(function(){u&&l()})},u=u("abort");try{v.send(s.hasContent&&s.data||null)}catch(S){if(u)throw S}},abort:function(){u&&u()}}}),c.ajaxPrefilter(function(s){s.crossDomain&&(s.contents.script=!1)}),c.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(s){return c.globalEval(s),s}}}),c.ajaxPrefilter("script",function(s){s.cache===void 0&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),c.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var u,l;return{send:function(d,m){u=c("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",l=function(y){u.remove(),l=null,y&&m(y.type==="error"?404:200,y.type)}),te.head.appendChild(u[0])},abort:function(){l&&l()}}}});var Di=[],wt=/(=)\?(?=&|$)|\?\?/;c.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var s=Di.pop()||c.expando+"_"+vs.guid++;return this[s]=!0,s}}),c.ajaxPrefilter("json jsonp",function(s,u,l){var d,m,y,v=s.jsonp!==!1&&(wt.test(s.url)?"url":typeof s.data=="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&wt.test(s.data)&&"data");if(v||s.dataTypes[0]==="jsonp")return d=s.jsonpCallback=Q(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,v?s[v]=s[v].replace(wt,"$1"+d):s.jsonp!==!1&&(s.url+=(fn.test(s.url)?"&":"?")+s.jsonp+"="+d),s.converters["script json"]=function(){return y||c.error(d+" was not called"),y[0]},s.dataTypes[0]="json",m=e[d],e[d]=function(){y=arguments},l.always(function(){m===void 0?c(e).removeProp(d):e[d]=m,s[d]&&(s.jsonpCallback=u.jsonpCallback,Di.push(d)),y&&Q(m)&&m(y[0]),y=m=void 0}),"script"}),z.createHTMLDocument=function(){var s=te.implementation.createHTMLDocument("").body;return s.innerHTML="<form></form><form></form>",s.childNodes.length===2}(),c.parseHTML=function(s,u,l){if(typeof s!="string")return[];typeof u=="boolean"&&(l=u,u=!1);var d,m,y;return u||(z.createHTMLDocument?(u=te.implementation.createHTMLDocument(""),d=u.createElement("base"),d.href=te.location.href,u.head.appendChild(d)):u=te),m=Nt.exec(s),y=!l&&[],m?[u.createElement(m[1])]:(m=vi([s],u,y),y&&y.length&&c(y).remove(),c.merge([],m.childNodes))},c.fn.load=function(s,u,l){var d,m,y,v=this,S=s.indexOf(" ");return S>-1&&(d=hn(s.slice(S)),s=s.slice(0,S)),Q(u)?(l=u,u=void 0):u&&typeof u=="object"&&(m="POST"),v.length>0&&c.ajax({url:s,type:m||"GET",dataType:"html",data:u}).done(function(I){y=arguments,v.html(d?c("<div>").append(c.parseHTML(I)).find(d):I)}).always(l&&function(I,k){v.each(function(){l.apply(this,y||[I.responseText,k,I])})}),this},c.expr.pseudos.animated=function(s){return c.grep(c.timers,function(u){return s===u.elem}).length},c.offset={setOffset:function(s,u,l){var d,m,y,v,S,I,k,B=c.css(s,"position"),q=c(s),F={};B==="static"&&(s.style.position="relative"),S=q.offset(),y=c.css(s,"top"),I=c.css(s,"left"),k=(B==="absolute"||B==="fixed")&&(y+I).indexOf("auto")>-1,k?(d=q.position(),v=d.top,m=d.left):(v=parseFloat(y)||0,m=parseFloat(I)||0),Q(u)&&(u=u.call(s,l,c.extend({},S))),u.top!=null&&(F.top=u.top-S.top+v),u.left!=null&&(F.left=u.left-S.left+m),"using"in u?u.using.call(s,F):q.css(F)}},c.fn.extend({offset:function(s){if(arguments.length)return s===void 0?this:this.each(function(m){c.offset.setOffset(this,s,m)});var u,l,d=this[0];if(d)return d.getClientRects().length?(u=d.getBoundingClientRect(),l=d.ownerDocument.defaultView,{top:u.top+l.pageYOffset,left:u.left+l.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var s,u,l,d=this[0],m={top:0,left:0};if(c.css(d,"position")==="fixed")u=d.getBoundingClientRect();else{for(u=this.offset(),l=d.ownerDocument,s=d.offsetParent||l.documentElement;s&&(s===l.body||s===l.documentElement)&&c.css(s,"position")==="static";)s=s.parentNode;s&&s!==d&&s.nodeType===1&&(m=c(s).offset(),m.top+=c.css(s,"borderTopWidth",!0),m.left+=c.css(s,"borderLeftWidth",!0))}return{top:u.top-m.top-c.css(d,"marginTop",!0),left:u.left-m.left-c.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent;s&&c.css(s,"position")==="static";)s=s.offsetParent;return s||jt})}}),c.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,u){var l=u==="pageYOffset";c.fn[s]=function(d){return Ot(this,function(m,y,v){var S;if(ee(m)?S=m:m.nodeType===9&&(S=m.defaultView),v===void 0)return S?S[u]:m[y];S?S.scrollTo(l?S.pageXOffset:v,l?v:S.pageYOffset):m[y]=v},s,d,arguments.length)}}),c.each(["top","left"],function(s,u){c.cssHooks[u]=Zn(z.pixelPosition,function(l,d){if(d)return d=Yn(l,u),Nr.test(d)?c(l).position()[u]+"px":d})}),c.each({Height:"height",Width:"width"},function(s,u){c.each({padding:"inner"+s,content:u,"":"outer"+s},function(l,d){c.fn[d]=function(m,y){var v=arguments.length&&(l||typeof m!="boolean"),S=l||(m===!0||y===!0?"margin":"border");return Ot(this,function(I,k,B){var q;return ee(I)?d.indexOf("outer")===0?I["inner"+s]:I.document.documentElement["client"+s]:I.nodeType===9?(q=I.documentElement,Math.max(I.body["scroll"+s],q["scroll"+s],I.body["offset"+s],q["offset"+s],q["client"+s])):B===void 0?c.css(I,k,S):c.style(I,k,B,S)},u,v?m:void 0,v)}})}),c.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,u){c.fn[u]=function(l){return this.on(u,l)}}),c.fn.extend({bind:function(s,u,l){return this.on(s,null,u,l)},unbind:function(s,u){return this.off(s,null,u)},delegate:function(s,u,l,d){return this.on(u,s,l,d)},undelegate:function(s,u,l){return arguments.length===1?this.off(s,"**"):this.off(u,s||"**",l)},hover:function(s,u){return this.on("mouseenter",s).on("mouseleave",u||s)}}),c.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,u){c.fn[u]=function(l,d){return arguments.length>0?this.on(u,null,l,d):this.trigger(u)}});var Cs=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;c.proxy=function(s,u){var l,d,m;if(typeof u=="string"&&(l=s[u],u=s,s=l),!!Q(s))return d=a.call(arguments,2),m=function(){return s.apply(u||this,d.concat(a.call(arguments)))},m.guid=s.guid=s.guid||c.guid++,m},c.holdReady=function(s){s?c.readyWait++:c.ready(!0)},c.isArray=Array.isArray,c.parseJSON=JSON.parse,c.nodeName=b,c.isFunction=Q,c.isWindow=ee,c.camelCase=bt,c.type=De,c.now=Date.now,c.isNumeric=function(s){var u=c.type(s);return(u==="number"||u==="string")&&!isNaN(s-parseFloat(s))},c.trim=function(s){return s==null?"":(s+"").replace(Cs,"$1")};var Vo=e.jQuery,or=e.$;return c.noConflict=function(s){return e.$===c&&(e.$=or),s&&e.jQuery===c&&(e.jQuery=Vo),c},typeof t>"u"&&(e.jQuery=e.$=c),c})}(Ls)),Ls.exports}var Gh=Wh();const Kh=$h(Gh),Qh=()=>{};var fu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Xh=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=n[t++];e[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=n[t++],h=n[t++],g=n[t++],_=((i&7)<<18|(a&63)<<12|(h&63)<<6|g&63)-65536;e[r++]=String.fromCharCode(55296+(_>>10)),e[r++]=String.fromCharCode(56320+(_&1023))}else{const a=n[t++],h=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|h&63)}}return e.join("")},Uc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const a=n[i],h=i+1<n.length,g=h?n[i+1]:0,_=i+2<n.length,E=_?n[i+2]:0,R=a>>2,O=(a&3)<<4|g>>4;let L=(g&15)<<2|E>>6,G=E&63;_||(G=64,h||(L=64)),r.push(t[R],t[O],t[L],t[G])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Fc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Xh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const a=t[n.charAt(i++)],g=i<n.length?t[n.charAt(i)]:0;++i;const E=i<n.length?t[n.charAt(i)]:64;++i;const O=i<n.length?t[n.charAt(i)]:64;if(++i,a==null||g==null||E==null||O==null)throw new Jh;const L=a<<2|g>>4;if(r.push(L),E!==64){const G=g<<4&240|E>>2;if(r.push(G),O!==64){const z=E<<6&192|O;r.push(z)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Jh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yh=function(n){const e=Fc(n);return Uc.encodeByteArray(e,!0)},zs=function(n){return Yh(n).replace(/\./g,"")},jc=function(n){try{return Uc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=()=>Zh().__FIREBASE_DEFAULTS__,tf=()=>{if(typeof process>"u"||typeof fu>"u")return;const n=fu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},nf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&jc(n[1]);return e&&JSON.parse(e)},ao=()=>{try{return Qh()||ef()||tf()||nf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Bc=n=>{var e,t;return(t=(e=ao())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},rf=n=>{const e=Bc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},qc=()=>{var n;return(n=ao())===null||n===void 0?void 0:n.config},Hc=n=>{var e;return(e=ao())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(n){return n.endsWith(".cloudworkstations.dev")}async function $c(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[zs(JSON.stringify(t)),zs(JSON.stringify(h)),""].join(".")}const Li={};function af(){const n={prod:[],emulator:[]};for(const e of Object.keys(Li))Li[e]?n.emulator.push(e):n.prod.push(e);return n}function uf(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let du=!1;function zc(n,e){if(typeof window>"u"||typeof document>"u"||!Qi(window.location.host)||Li[n]===e||Li[n]||du)return;Li[n]=e;function t(L){return`__firebase__banner__${L}`}const r="__firebase__banner",a=af().prod.length>0;function h(){const L=document.getElementById(r);L&&L.remove()}function g(L){L.style.display="flex",L.style.background="#7faaf0",L.style.position="fixed",L.style.bottom="5px",L.style.left="5px",L.style.padding=".5em",L.style.borderRadius="5px",L.style.alignItems="center"}function _(L,G){L.setAttribute("width","24"),L.setAttribute("id",G),L.setAttribute("height","24"),L.setAttribute("viewBox","0 0 24 24"),L.setAttribute("fill","none"),L.style.marginLeft="-6px"}function E(){const L=document.createElement("span");return L.style.cursor="pointer",L.style.marginLeft="16px",L.style.fontSize="24px",L.innerHTML=" &times;",L.onclick=()=>{du=!0,h()},L}function R(L,G){L.setAttribute("id",G),L.innerText="Learn more",L.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",L.setAttribute("target","__blank"),L.style.paddingLeft="5px",L.style.textDecoration="underline"}function O(){const L=uf(r),G=t("text"),z=document.getElementById(G)||document.createElement("span"),Q=t("learnmore"),ee=document.getElementById(Q)||document.createElement("a"),te=t("preprendIcon"),we=document.getElementById(te)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(L.created){const be=L.element;g(be),R(ee,Q);const De=E();_(we,te),be.append(we,z,ee,De),document.body.appendChild(be)}a?(z.innerText="Preview backend disconnected.",we.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(we.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,z.innerText="Preview backend running in this workspace."),z.setAttribute("id",G)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",O):O()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function lf(){var n;const e=(n=ao())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ff(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function df(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pf(){const n=ut();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function gf(){return!lf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mf(){try{return typeof indexedDB=="object"}catch{return!1}}function yf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var a;e(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f="FirebaseError";class wn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=_f,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xi.prototype.create)}}class Xi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,a=this.errors[e],h=a?vf(a,r):"Error",g=`${this.serviceName}: ${h} (${i}).`;return new wn(i,g,r)}}function vf(n,e){return n.replace(Tf,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Tf=/\{\$([^}]+)}/g;function Ef(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function dr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const a=n[i],h=e[i];if(pu(a)&&pu(h)){if(!dr(a,h))return!1}else if(a!==h)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function pu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function wf(n,e){const t=new If(n,e);return t.subscribe.bind(t)}class If{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Af(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Bo),i.error===void 0&&(i.error=Bo),i.complete===void 0&&(i.complete=Bo);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Af(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Bo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(n){return n&&n._delegate?n._delegate:n}class pr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new sf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sf(e))try{this.getOrInitializeService({instanceIdentifier:ur})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(e=ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ur){return this.instances.has(e)}getOptions(e=ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,h]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(a);r===g&&h.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(i,a);const h=this.instances.get(i);return h&&e(h,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Cf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ur){return this.component?this.component.multipleInstances?e:ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cf(n){return n===ur?void 0:n}function Sf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new bf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ae||(Ae={}));const Pf={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},kf=Ae.INFO,Df={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},xf=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Df[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ca{constructor(e){this.name=e,this._logLevel=kf,this._logHandler=xf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const Nf=(n,e)=>e.some(t=>n instanceof t);let gu,mu;function Of(){return gu||(gu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vf(){return mu||(mu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wc=new WeakMap,Zo=new WeakMap,Gc=new WeakMap,qo=new WeakMap,Sa=new WeakMap;function Lf(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",a),n.removeEventListener("error",h)},a=()=>{t(Fn(n.result)),i()},h=()=>{r(n.error),i()};n.addEventListener("success",a),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Wc.set(t,n)}).catch(()=>{}),Sa.set(e,n),e}function Mf(n){if(Zo.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",h),n.removeEventListener("abort",h)},a=()=>{t(),i()},h=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",a),n.addEventListener("error",h),n.addEventListener("abort",h)});Zo.set(n,e)}let ea={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Zo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Gc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Fn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ff(n){ea=n(ea)}function Uf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ho(this),e,...t);return Gc.set(r,e.sort?e.sort():[e]),Fn(r)}:Vf().includes(n)?function(...e){return n.apply(Ho(this),e),Fn(Wc.get(this))}:function(...e){return Fn(n.apply(Ho(this),e))}}function jf(n){return typeof n=="function"?Uf(n):(n instanceof IDBTransaction&&Mf(n),Nf(n,Of())?new Proxy(n,ea):n)}function Fn(n){if(n instanceof IDBRequest)return Lf(n);if(qo.has(n))return qo.get(n);const e=jf(n);return e!==n&&(qo.set(n,e),Sa.set(e,n)),e}const Ho=n=>Sa.get(n);function Bf(n,e,{blocked:t,upgrade:r,blocking:i,terminated:a}={}){const h=indexedDB.open(n,e),g=Fn(h);return r&&h.addEventListener("upgradeneeded",_=>{r(Fn(h.result),_.oldVersion,_.newVersion,Fn(h.transaction),_)}),t&&h.addEventListener("blocked",_=>t(_.oldVersion,_.newVersion,_)),g.then(_=>{a&&_.addEventListener("close",()=>a()),i&&_.addEventListener("versionchange",E=>i(E.oldVersion,E.newVersion,E))}).catch(()=>{}),g}const qf=["get","getKey","getAll","getAllKeys","count"],Hf=["put","add","delete","clear"],$o=new Map;function yu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if($o.get(e))return $o.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Hf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qf.includes(t)))return;const a=async function(h,...g){const _=this.transaction(h,i?"readwrite":"readonly");let E=_.store;return r&&(E=E.index(g.shift())),(await Promise.all([E[t](...g),i&&_.done]))[0]};return $o.set(e,a),a}Ff(n=>({...n,get:(e,t,r)=>yu(e,t)||n.get(e,t,r),has:(e,t)=>!!yu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function zf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ta="@firebase/app",_u="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new Ca("@firebase/app"),Wf="@firebase/app-compat",Gf="@firebase/analytics-compat",Kf="@firebase/analytics",Qf="@firebase/app-check-compat",Xf="@firebase/app-check",Jf="@firebase/auth",Yf="@firebase/auth-compat",Zf="@firebase/database",ed="@firebase/data-connect",td="@firebase/database-compat",nd="@firebase/functions",rd="@firebase/functions-compat",id="@firebase/installations",sd="@firebase/installations-compat",od="@firebase/messaging",ad="@firebase/messaging-compat",ud="@firebase/performance",cd="@firebase/performance-compat",ld="@firebase/remote-config",hd="@firebase/remote-config-compat",fd="@firebase/storage",dd="@firebase/storage-compat",pd="@firebase/firestore",gd="@firebase/ai",md="@firebase/firestore-compat",yd="firebase",_d="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na="[DEFAULT]",vd={[ta]:"fire-core",[Wf]:"fire-core-compat",[Kf]:"fire-analytics",[Gf]:"fire-analytics-compat",[Xf]:"fire-app-check",[Qf]:"fire-app-check-compat",[Jf]:"fire-auth",[Yf]:"fire-auth-compat",[Zf]:"fire-rtdb",[ed]:"fire-data-connect",[td]:"fire-rtdb-compat",[nd]:"fire-fn",[rd]:"fire-fn-compat",[id]:"fire-iid",[sd]:"fire-iid-compat",[od]:"fire-fcm",[ad]:"fire-fcm-compat",[ud]:"fire-perf",[cd]:"fire-perf-compat",[ld]:"fire-rc",[hd]:"fire-rc-compat",[fd]:"fire-gcs",[dd]:"fire-gcs-compat",[pd]:"fire-fst",[md]:"fire-fst-compat",[gd]:"fire-vertex","fire-js":"fire-js",[yd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=new Map,Td=new Map,ra=new Map;function vu(n,e){try{n.container.addComponent(e)}catch(t){_n.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ei(n){const e=n.name;if(ra.has(e))return _n.debug(`There were multiple attempts to register component ${e}.`),!1;ra.set(e,n);for(const t of Ws.values())vu(t,n);for(const t of Td.values())vu(t,n);return!0}function Ra(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Qt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Un=new Xi("app","Firebase",Ed);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=_d;function Kc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:na,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Un.create("bad-app-name",{appName:String(i)});if(t||(t=qc()),!t)throw Un.create("no-options");const a=Ws.get(i);if(a){if(dr(t,a.options)&&dr(r,a.config))return a;throw Un.create("duplicate-app",{appName:i})}const h=new Rf(i);for(const _ of ra.values())h.addComponent(_);const g=new wd(t,r,h);return Ws.set(i,g),g}function Qc(n=na){const e=Ws.get(n);if(!e&&n===na&&qc())return Kc();if(!e)throw Un.create("no-app",{appName:n});return e}function jn(n,e,t){var r;let i=(r=vd[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const a=i.match(/\s|\//),h=e.match(/\s|\//);if(a||h){const g=[`Unable to register library "${i}" with version "${e}":`];a&&g.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&h&&g.push("and"),h&&g.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_n.warn(g.join(" "));return}ei(new pr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="firebase-heartbeat-database",Ad=1,qi="firebase-heartbeat-store";let zo=null;function Xc(){return zo||(zo=Bf(Id,Ad,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(qi)}catch(t){console.warn(t)}}}}).catch(n=>{throw Un.create("idb-open",{originalErrorMessage:n.message})})),zo}async function bd(n){try{const t=(await Xc()).transaction(qi),r=await t.objectStore(qi).get(Jc(n));return await t.done,r}catch(e){if(e instanceof wn)_n.warn(e.message);else{const t=Un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_n.warn(t.message)}}}async function Tu(n,e){try{const r=(await Xc()).transaction(qi,"readwrite");await r.objectStore(qi).put(e,Jc(n)),await r.done}catch(t){if(t instanceof wn)_n.warn(t.message);else{const r=Un.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});_n.warn(r.message)}}}function Jc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd=1024,Sd=30;class Rd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new kd(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Eu();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(h=>h.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>Sd){const h=Dd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){_n.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Eu(),{heartbeatsToSend:r,unsentEntries:i}=Pd(this._heartbeatsCache.heartbeats),a=zs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return _n.warn(t),""}}}function Eu(){return new Date().toISOString().substring(0,10)}function Pd(n,e=Cd){const t=[];let r=n.slice();for(const i of n){const a=t.find(h=>h.agent===i.agent);if(a){if(a.dates.push(i.date),wu(t)>e){a.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),wu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class kd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mf()?yf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await bd(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function wu(n){return zs(JSON.stringify({version:2,heartbeats:n})).length}function Dd(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(n){ei(new pr("platform-logger",e=>new $f(e),"PRIVATE")),ei(new pr("heartbeat",e=>new Rd(e),"PRIVATE")),jn(ta,_u,n),jn(ta,_u,"esm2017"),jn("fire-js","")}xd("");var Iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bn,Yc;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(c,C){function b(){}b.prototype=C.prototype,c.D=C.prototype,c.prototype=new b,c.prototype.constructor=c,c.C=function(D,x,V){for(var A=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)A[lt-2]=arguments[lt];return C.prototype[x].apply(D,A)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(c,C,b){b||(b=0);var D=Array(16);if(typeof C=="string")for(var x=0;16>x;++x)D[x]=C.charCodeAt(b++)|C.charCodeAt(b++)<<8|C.charCodeAt(b++)<<16|C.charCodeAt(b++)<<24;else for(x=0;16>x;++x)D[x]=C[b++]|C[b++]<<8|C[b++]<<16|C[b++]<<24;C=c.g[0],b=c.g[1],x=c.g[2];var V=c.g[3],A=C+(V^b&(x^V))+D[0]+3614090360&4294967295;C=b+(A<<7&4294967295|A>>>25),A=V+(x^C&(b^x))+D[1]+3905402710&4294967295,V=C+(A<<12&4294967295|A>>>20),A=x+(b^V&(C^b))+D[2]+606105819&4294967295,x=V+(A<<17&4294967295|A>>>15),A=b+(C^x&(V^C))+D[3]+3250441966&4294967295,b=x+(A<<22&4294967295|A>>>10),A=C+(V^b&(x^V))+D[4]+4118548399&4294967295,C=b+(A<<7&4294967295|A>>>25),A=V+(x^C&(b^x))+D[5]+1200080426&4294967295,V=C+(A<<12&4294967295|A>>>20),A=x+(b^V&(C^b))+D[6]+2821735955&4294967295,x=V+(A<<17&4294967295|A>>>15),A=b+(C^x&(V^C))+D[7]+4249261313&4294967295,b=x+(A<<22&4294967295|A>>>10),A=C+(V^b&(x^V))+D[8]+1770035416&4294967295,C=b+(A<<7&4294967295|A>>>25),A=V+(x^C&(b^x))+D[9]+2336552879&4294967295,V=C+(A<<12&4294967295|A>>>20),A=x+(b^V&(C^b))+D[10]+4294925233&4294967295,x=V+(A<<17&4294967295|A>>>15),A=b+(C^x&(V^C))+D[11]+2304563134&4294967295,b=x+(A<<22&4294967295|A>>>10),A=C+(V^b&(x^V))+D[12]+1804603682&4294967295,C=b+(A<<7&4294967295|A>>>25),A=V+(x^C&(b^x))+D[13]+4254626195&4294967295,V=C+(A<<12&4294967295|A>>>20),A=x+(b^V&(C^b))+D[14]+2792965006&4294967295,x=V+(A<<17&4294967295|A>>>15),A=b+(C^x&(V^C))+D[15]+1236535329&4294967295,b=x+(A<<22&4294967295|A>>>10),A=C+(x^V&(b^x))+D[1]+4129170786&4294967295,C=b+(A<<5&4294967295|A>>>27),A=V+(b^x&(C^b))+D[6]+3225465664&4294967295,V=C+(A<<9&4294967295|A>>>23),A=x+(C^b&(V^C))+D[11]+643717713&4294967295,x=V+(A<<14&4294967295|A>>>18),A=b+(V^C&(x^V))+D[0]+3921069994&4294967295,b=x+(A<<20&4294967295|A>>>12),A=C+(x^V&(b^x))+D[5]+3593408605&4294967295,C=b+(A<<5&4294967295|A>>>27),A=V+(b^x&(C^b))+D[10]+38016083&4294967295,V=C+(A<<9&4294967295|A>>>23),A=x+(C^b&(V^C))+D[15]+3634488961&4294967295,x=V+(A<<14&4294967295|A>>>18),A=b+(V^C&(x^V))+D[4]+3889429448&4294967295,b=x+(A<<20&4294967295|A>>>12),A=C+(x^V&(b^x))+D[9]+568446438&4294967295,C=b+(A<<5&4294967295|A>>>27),A=V+(b^x&(C^b))+D[14]+3275163606&4294967295,V=C+(A<<9&4294967295|A>>>23),A=x+(C^b&(V^C))+D[3]+4107603335&4294967295,x=V+(A<<14&4294967295|A>>>18),A=b+(V^C&(x^V))+D[8]+1163531501&4294967295,b=x+(A<<20&4294967295|A>>>12),A=C+(x^V&(b^x))+D[13]+2850285829&4294967295,C=b+(A<<5&4294967295|A>>>27),A=V+(b^x&(C^b))+D[2]+4243563512&4294967295,V=C+(A<<9&4294967295|A>>>23),A=x+(C^b&(V^C))+D[7]+1735328473&4294967295,x=V+(A<<14&4294967295|A>>>18),A=b+(V^C&(x^V))+D[12]+2368359562&4294967295,b=x+(A<<20&4294967295|A>>>12),A=C+(b^x^V)+D[5]+4294588738&4294967295,C=b+(A<<4&4294967295|A>>>28),A=V+(C^b^x)+D[8]+2272392833&4294967295,V=C+(A<<11&4294967295|A>>>21),A=x+(V^C^b)+D[11]+1839030562&4294967295,x=V+(A<<16&4294967295|A>>>16),A=b+(x^V^C)+D[14]+4259657740&4294967295,b=x+(A<<23&4294967295|A>>>9),A=C+(b^x^V)+D[1]+2763975236&4294967295,C=b+(A<<4&4294967295|A>>>28),A=V+(C^b^x)+D[4]+1272893353&4294967295,V=C+(A<<11&4294967295|A>>>21),A=x+(V^C^b)+D[7]+4139469664&4294967295,x=V+(A<<16&4294967295|A>>>16),A=b+(x^V^C)+D[10]+3200236656&4294967295,b=x+(A<<23&4294967295|A>>>9),A=C+(b^x^V)+D[13]+681279174&4294967295,C=b+(A<<4&4294967295|A>>>28),A=V+(C^b^x)+D[0]+3936430074&4294967295,V=C+(A<<11&4294967295|A>>>21),A=x+(V^C^b)+D[3]+3572445317&4294967295,x=V+(A<<16&4294967295|A>>>16),A=b+(x^V^C)+D[6]+76029189&4294967295,b=x+(A<<23&4294967295|A>>>9),A=C+(b^x^V)+D[9]+3654602809&4294967295,C=b+(A<<4&4294967295|A>>>28),A=V+(C^b^x)+D[12]+3873151461&4294967295,V=C+(A<<11&4294967295|A>>>21),A=x+(V^C^b)+D[15]+530742520&4294967295,x=V+(A<<16&4294967295|A>>>16),A=b+(x^V^C)+D[2]+3299628645&4294967295,b=x+(A<<23&4294967295|A>>>9),A=C+(x^(b|~V))+D[0]+4096336452&4294967295,C=b+(A<<6&4294967295|A>>>26),A=V+(b^(C|~x))+D[7]+1126891415&4294967295,V=C+(A<<10&4294967295|A>>>22),A=x+(C^(V|~b))+D[14]+2878612391&4294967295,x=V+(A<<15&4294967295|A>>>17),A=b+(V^(x|~C))+D[5]+4237533241&4294967295,b=x+(A<<21&4294967295|A>>>11),A=C+(x^(b|~V))+D[12]+1700485571&4294967295,C=b+(A<<6&4294967295|A>>>26),A=V+(b^(C|~x))+D[3]+2399980690&4294967295,V=C+(A<<10&4294967295|A>>>22),A=x+(C^(V|~b))+D[10]+4293915773&4294967295,x=V+(A<<15&4294967295|A>>>17),A=b+(V^(x|~C))+D[1]+2240044497&4294967295,b=x+(A<<21&4294967295|A>>>11),A=C+(x^(b|~V))+D[8]+1873313359&4294967295,C=b+(A<<6&4294967295|A>>>26),A=V+(b^(C|~x))+D[15]+4264355552&4294967295,V=C+(A<<10&4294967295|A>>>22),A=x+(C^(V|~b))+D[6]+2734768916&4294967295,x=V+(A<<15&4294967295|A>>>17),A=b+(V^(x|~C))+D[13]+1309151649&4294967295,b=x+(A<<21&4294967295|A>>>11),A=C+(x^(b|~V))+D[4]+4149444226&4294967295,C=b+(A<<6&4294967295|A>>>26),A=V+(b^(C|~x))+D[11]+3174756917&4294967295,V=C+(A<<10&4294967295|A>>>22),A=x+(C^(V|~b))+D[2]+718787259&4294967295,x=V+(A<<15&4294967295|A>>>17),A=b+(V^(x|~C))+D[9]+3951481745&4294967295,c.g[0]=c.g[0]+C&4294967295,c.g[1]=c.g[1]+(x+(A<<21&4294967295|A>>>11))&4294967295,c.g[2]=c.g[2]+x&4294967295,c.g[3]=c.g[3]+V&4294967295}r.prototype.u=function(c,C){C===void 0&&(C=c.length);for(var b=C-this.blockSize,D=this.B,x=this.h,V=0;V<C;){if(x==0)for(;V<=b;)i(this,c,V),V+=this.blockSize;if(typeof c=="string"){for(;V<C;)if(D[x++]=c.charCodeAt(V++),x==this.blockSize){i(this,D),x=0;break}}else for(;V<C;)if(D[x++]=c[V++],x==this.blockSize){i(this,D),x=0;break}}this.h=x,this.o+=C},r.prototype.v=function(){var c=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);c[0]=128;for(var C=1;C<c.length-8;++C)c[C]=0;var b=8*this.o;for(C=c.length-8;C<c.length;++C)c[C]=b&255,b/=256;for(this.u(c),c=Array(16),C=b=0;4>C;++C)for(var D=0;32>D;D+=8)c[b++]=this.g[C]>>>D&255;return c};function a(c,C){var b=g;return Object.prototype.hasOwnProperty.call(b,c)?b[c]:b[c]=C(c)}function h(c,C){this.h=C;for(var b=[],D=!0,x=c.length-1;0<=x;x--){var V=c[x]|0;D&&V==C||(b[x]=V,D=!1)}this.g=b}var g={};function _(c){return-128<=c&&128>c?a(c,function(C){return new h([C|0],0>C?-1:0)}):new h([c|0],0>c?-1:0)}function E(c){if(isNaN(c)||!isFinite(c))return O;if(0>c)return ee(E(-c));for(var C=[],b=1,D=0;c>=b;D++)C[D]=c/b|0,b*=4294967296;return new h(C,0)}function R(c,C){if(c.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(c.charAt(0)=="-")return ee(R(c.substring(1),C));if(0<=c.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=E(Math.pow(C,8)),D=O,x=0;x<c.length;x+=8){var V=Math.min(8,c.length-x),A=parseInt(c.substring(x,x+V),C);8>V?(V=E(Math.pow(C,V)),D=D.j(V).add(E(A))):(D=D.j(b),D=D.add(E(A)))}return D}var O=_(0),L=_(1),G=_(16777216);n=h.prototype,n.m=function(){if(Q(this))return-ee(this).m();for(var c=0,C=1,b=0;b<this.g.length;b++){var D=this.i(b);c+=(0<=D?D:4294967296+D)*C,C*=4294967296}return c},n.toString=function(c){if(c=c||10,2>c||36<c)throw Error("radix out of range: "+c);if(z(this))return"0";if(Q(this))return"-"+ee(this).toString(c);for(var C=E(Math.pow(c,6)),b=this,D="";;){var x=De(b,C).g;b=te(b,x.j(C));var V=((0<b.g.length?b.g[0]:b.h)>>>0).toString(c);if(b=x,z(b))return V+D;for(;6>V.length;)V="0"+V;D=V+D}},n.i=function(c){return 0>c?0:c<this.g.length?this.g[c]:this.h};function z(c){if(c.h!=0)return!1;for(var C=0;C<c.g.length;C++)if(c.g[C]!=0)return!1;return!0}function Q(c){return c.h==-1}n.l=function(c){return c=te(this,c),Q(c)?-1:z(c)?0:1};function ee(c){for(var C=c.g.length,b=[],D=0;D<C;D++)b[D]=~c.g[D];return new h(b,~c.h).add(L)}n.abs=function(){return Q(this)?ee(this):this},n.add=function(c){for(var C=Math.max(this.g.length,c.g.length),b=[],D=0,x=0;x<=C;x++){var V=D+(this.i(x)&65535)+(c.i(x)&65535),A=(V>>>16)+(this.i(x)>>>16)+(c.i(x)>>>16);D=A>>>16,V&=65535,A&=65535,b[x]=A<<16|V}return new h(b,b[b.length-1]&-2147483648?-1:0)};function te(c,C){return c.add(ee(C))}n.j=function(c){if(z(this)||z(c))return O;if(Q(this))return Q(c)?ee(this).j(ee(c)):ee(ee(this).j(c));if(Q(c))return ee(this.j(ee(c)));if(0>this.l(G)&&0>c.l(G))return E(this.m()*c.m());for(var C=this.g.length+c.g.length,b=[],D=0;D<2*C;D++)b[D]=0;for(D=0;D<this.g.length;D++)for(var x=0;x<c.g.length;x++){var V=this.i(D)>>>16,A=this.i(D)&65535,lt=c.i(x)>>>16,Kn=c.i(x)&65535;b[2*D+2*x]+=A*Kn,we(b,2*D+2*x),b[2*D+2*x+1]+=V*Kn,we(b,2*D+2*x+1),b[2*D+2*x+1]+=A*lt,we(b,2*D+2*x+1),b[2*D+2*x+2]+=V*lt,we(b,2*D+2*x+2)}for(D=0;D<C;D++)b[D]=b[2*D+1]<<16|b[2*D];for(D=C;D<2*C;D++)b[D]=0;return new h(b,0)};function we(c,C){for(;(c[C]&65535)!=c[C];)c[C+1]+=c[C]>>>16,c[C]&=65535,C++}function be(c,C){this.g=c,this.h=C}function De(c,C){if(z(C))throw Error("division by zero");if(z(c))return new be(O,O);if(Q(c))return C=De(ee(c),C),new be(ee(C.g),ee(C.h));if(Q(C))return C=De(c,ee(C)),new be(ee(C.g),C.h);if(30<c.g.length){if(Q(c)||Q(C))throw Error("slowDivide_ only works with positive integers.");for(var b=L,D=C;0>=D.l(c);)b=ct(b),D=ct(D);var x=Me(b,1),V=Me(D,1);for(D=Me(D,2),b=Me(b,2);!z(D);){var A=V.add(D);0>=A.l(c)&&(x=x.add(b),V=A),D=Me(D,1),b=Me(b,1)}return C=te(c,x.j(C)),new be(x,C)}for(x=O;0<=c.l(C);){for(b=Math.max(1,Math.floor(c.m()/C.m())),D=Math.ceil(Math.log(b)/Math.LN2),D=48>=D?1:Math.pow(2,D-48),V=E(b),A=V.j(C);Q(A)||0<A.l(c);)b-=D,V=E(b),A=V.j(C);z(V)&&(V=L),x=x.add(V),c=te(c,A)}return new be(x,c)}n.A=function(c){return De(this,c).h},n.and=function(c){for(var C=Math.max(this.g.length,c.g.length),b=[],D=0;D<C;D++)b[D]=this.i(D)&c.i(D);return new h(b,this.h&c.h)},n.or=function(c){for(var C=Math.max(this.g.length,c.g.length),b=[],D=0;D<C;D++)b[D]=this.i(D)|c.i(D);return new h(b,this.h|c.h)},n.xor=function(c){for(var C=Math.max(this.g.length,c.g.length),b=[],D=0;D<C;D++)b[D]=this.i(D)^c.i(D);return new h(b,this.h^c.h)};function ct(c){for(var C=c.g.length+1,b=[],D=0;D<C;D++)b[D]=c.i(D)<<1|c.i(D-1)>>>31;return new h(b,c.h)}function Me(c,C){var b=C>>5;C%=32;for(var D=c.g.length-b,x=[],V=0;V<D;V++)x[V]=0<C?c.i(V+b)>>>C|c.i(V+b+1)<<32-C:c.i(V+b);return new h(x,c.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Yc=r,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=E,h.fromString=R,Bn=h}).apply(typeof Iu<"u"?Iu:typeof self<"u"?self:typeof window<"u"?window:{});var ks=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zc,Ni,el,Ms,ia,tl,nl,rl;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,f,p){return o==Array.prototype||o==Object.prototype||(o[f]=p.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ks=="object"&&ks];for(var f=0;f<o.length;++f){var p=o[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function i(o,f){if(f)e:{var p=r;o=o.split(".");for(var T=0;T<o.length-1;T++){var N=o[T];if(!(N in p))break e;p=p[N]}o=o[o.length-1],T=p[o],f=f(T),f!=T&&f!=null&&e(p,o,{configurable:!0,writable:!0,value:f})}}function a(o,f){o instanceof String&&(o+="");var p=0,T=!1,N={next:function(){if(!T&&p<o.length){var U=p++;return{value:f(U,o[U]),done:!1}}return T=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(o){return o||function(){return a(this,function(f,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},g=this||self;function _(o){var f=typeof o;return f=f!="object"?f:o?Array.isArray(o)?"array":f:"null",f=="array"||f=="object"&&typeof o.length=="number"}function E(o){var f=typeof o;return f=="object"&&o!=null||f=="function"}function R(o,f,p){return o.call.apply(o.bind,arguments)}function O(o,f,p){if(!o)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,T),o.apply(f,N)}}return function(){return o.apply(f,arguments)}}function L(o,f,p){return L=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?R:O,L.apply(null,arguments)}function G(o,f){var p=Array.prototype.slice.call(arguments,1);return function(){var T=p.slice();return T.push.apply(T,arguments),o.apply(this,T)}}function z(o,f){function p(){}p.prototype=f.prototype,o.aa=f.prototype,o.prototype=new p,o.prototype.constructor=o,o.Qb=function(T,N,U){for(var K=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)K[ke-2]=arguments[ke];return f.prototype[N].apply(T,K)}}function Q(o){const f=o.length;if(0<f){const p=Array(f);for(let T=0;T<f;T++)p[T]=o[T];return p}return[]}function ee(o,f){for(let p=1;p<arguments.length;p++){const T=arguments[p];if(_(T)){const N=o.length||0,U=T.length||0;o.length=N+U;for(let K=0;K<U;K++)o[N+K]=T[K]}else o.push(T)}}class te{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function we(o){return/^[\s\xa0]*$/.test(o)}function be(){var o=g.navigator;return o&&(o=o.userAgent)?o:""}function De(o){return De[" "](o),o}De[" "]=function(){};var ct=be().indexOf("Gecko")!=-1&&!(be().toLowerCase().indexOf("webkit")!=-1&&be().indexOf("Edge")==-1)&&!(be().indexOf("Trident")!=-1||be().indexOf("MSIE")!=-1)&&be().indexOf("Edge")==-1;function Me(o,f,p){for(const T in o)f.call(p,o[T],T,o)}function c(o,f){for(const p in o)f.call(void 0,o[p],p,o)}function C(o){const f={};for(const p in o)f[p]=o[p];return f}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(o,f){let p,T;for(let N=1;N<arguments.length;N++){T=arguments[N];for(p in T)o[p]=T[p];for(let U=0;U<b.length;U++)p=b[U],Object.prototype.hasOwnProperty.call(T,p)&&(o[p]=T[p])}}function x(o){var f=1;o=o.split(":");const p=[];for(;0<f&&o.length;)p.push(o.shift()),f--;return o.length&&p.push(o.join(":")),p}function V(o){g.setTimeout(()=>{throw o},0)}function A(){var o=Ft;let f=null;return o.g&&(f=o.g,o.g=o.g.next,o.g||(o.h=null),f.next=null),f}class lt{constructor(){this.h=this.g=null}add(f,p){const T=Kn.get();T.set(f,p),this.h?this.h.next=T:this.g=T,this.h=T}}var Kn=new te(()=>new wo,o=>o.reset());class wo{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ht,nn=!1,Ft=new lt,pi=()=>{const o=g.Promise.resolve(void 0);ht=()=>{o.then(ss)}};var ss=()=>{for(var o;o=A();){try{o.h.call(o.g)}catch(p){V(p)}var f=Kn;f.j(o),100>f.h&&(f.h++,o.next=f.g,f.g=o)}nn=!1};function Nt(){this.s=this.s,this.C=this.C}Nt.prototype.s=!1,Nt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Nt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $e(o,f){this.type=o,this.g=this.target=f,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};var os=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var o=!1,f=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const p=()=>{};g.addEventListener("test",p,f),g.removeEventListener("test",p,f)}catch{}return o}();function Qn(o,f){if($e.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var p=this.type=o.type,T=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=f,f=o.relatedTarget){if(ct){e:{try{De(f.nodeName);var N=!0;break e}catch{}N=!1}N||(f=null)}}else p=="mouseover"?f=o.fromElement:p=="mouseout"&&(f=o.toElement);this.relatedTarget=f,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Io[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Qn.aa.h.call(this)}}z(Qn,$e);var Io={2:"touch",3:"pen",4:"mouse"};Qn.prototype.h=function(){Qn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var vr="closure_listenable_"+(1e6*Math.random()|0),Ao=0;function as(o,f,p,T,N){this.listener=o,this.proxy=null,this.src=f,this.type=p,this.capture=!!T,this.ha=N,this.key=++Ao,this.da=this.fa=!1}function ft(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Tr(o){this.src=o,this.g={},this.h=0}Tr.prototype.add=function(o,f,p,T,N){var U=o.toString();o=this.g[U],o||(o=this.g[U]=[],this.h++);var K=In(o,f,T,N);return-1<K?(f=o[K],p||(f.fa=!1)):(f=new as(f,this.src,U,!!T,N),f.fa=p,o.push(f)),f};function Ut(o,f){var p=f.type;if(p in o.g){var T=o.g[p],N=Array.prototype.indexOf.call(T,f,void 0),U;(U=0<=N)&&Array.prototype.splice.call(T,N,1),U&&(ft(f),o.g[p].length==0&&(delete o.g[p],o.h--))}}function In(o,f,p,T){for(var N=0;N<o.length;++N){var U=o[N];if(!U.da&&U.listener==f&&U.capture==!!p&&U.ha==T)return N}return-1}var Er="closure_lm_"+(1e6*Math.random()|0),gi={};function wr(o,f,p,T,N){if(Array.isArray(f)){for(var U=0;U<f.length;U++)wr(o,f[U],p,T,N);return null}return p=re(p),o&&o[vr]?o.K(f,p,E(T)?!!T.capture:!1,N):Ir(o,f,p,!1,T,N)}function Ir(o,f,p,T,N,U){if(!f)throw Error("Invalid event type");var K=E(N)?!!N.capture:!!N,ke=rn(o);if(ke||(o[Er]=ke=new Tr(o)),p=ke.add(f,p,T,K,U),p.proxy)return p;if(T=Ot(),p.proxy=T,T.src=o,T.listener=p,o.addEventListener)os||(N=K),N===void 0&&(N=!1),o.addEventListener(f.toString(),T,N);else if(o.attachEvent)o.attachEvent(cs(f.toString()),T);else if(o.addListener&&o.removeListener)o.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Ot(){function o(p){return f.call(o.src,o.listener,p)}const f=bt;return o}function us(o,f,p,T,N){if(Array.isArray(f))for(var U=0;U<f.length;U++)us(o,f[U],p,T,N);else T=E(T)?!!T.capture:!!T,p=re(p),o&&o[vr]?(o=o.i,f=String(f).toString(),f in o.g&&(U=o.g[f],p=In(U,p,T,N),-1<p&&(ft(U[p]),Array.prototype.splice.call(U,p,1),U.length==0&&(delete o.g[f],o.h--)))):o&&(o=rn(o))&&(f=o.g[f.toString()],o=-1,f&&(o=In(f,p,T,N)),(p=-1<o?f[o]:null)&&mi(p))}function mi(o){if(typeof o!="number"&&o&&!o.da){var f=o.src;if(f&&f[vr])Ut(f.i,o);else{var p=o.type,T=o.proxy;f.removeEventListener?f.removeEventListener(p,T,o.capture):f.detachEvent?f.detachEvent(cs(p),T):f.addListener&&f.removeListener&&f.removeListener(T),(p=rn(f))?(Ut(p,o),p.h==0&&(p.src=null,f[Er]=null)):ft(o)}}}function cs(o){return o in gi?gi[o]:gi[o]="on"+o}function bt(o,f){if(o.da)o=!0;else{f=new Qn(f,this);var p=o.listener,T=o.ha||o.src;o.fa&&mi(o),o=p.call(T,f)}return o}function rn(o){return o=o[Er],o instanceof Tr?o:null}var sn="__closure_events_fn_"+(1e9*Math.random()>>>0);function re(o){return typeof o=="function"?o:(o[sn]||(o[sn]=function(f){return o.handleEvent(f)}),o[sn])}function Pe(){Nt.call(this),this.i=new Tr(this),this.M=this,this.F=null}z(Pe,Nt),Pe.prototype[vr]=!0,Pe.prototype.removeEventListener=function(o,f,p,T){us(this,o,f,p,T)};function et(o,f){var p,T=o.F;if(T)for(p=[];T;T=T.F)p.push(T);if(o=o.M,T=f.type||f,typeof f=="string")f=new $e(f,o);else if(f instanceof $e)f.target=f.target||o;else{var N=f;f=new $e(T,o),D(f,N)}if(N=!0,p)for(var U=p.length-1;0<=U;U--){var K=f.g=p[U];N=Ar(K,T,!0,f)&&N}if(K=f.g=o,N=Ar(K,T,!0,f)&&N,N=Ar(K,T,!1,f)&&N,p)for(U=0;U<p.length;U++)K=f.g=p[U],N=Ar(K,T,!1,f)&&N}Pe.prototype.N=function(){if(Pe.aa.N.call(this),this.i){var o=this.i,f;for(f in o.g){for(var p=o.g[f],T=0;T<p.length;T++)ft(p[T]);delete o.g[f],o.h--}}this.F=null},Pe.prototype.K=function(o,f,p,T){return this.i.add(String(o),f,!1,p,T)},Pe.prototype.L=function(o,f,p,T){return this.i.add(String(o),f,!0,p,T)};function Ar(o,f,p,T){if(f=o.i.g[String(f)],!f)return!0;f=f.concat();for(var N=!0,U=0;U<f.length;++U){var K=f[U];if(K&&!K.da&&K.capture==p){var ke=K.listener,Ne=K.ha||K.src;K.fa&&Ut(o.i,K),N=ke.call(Ne,T)!==!1&&N}}return N&&!T.defaultPrevented}function ls(o,f,p){if(typeof o=="function")p&&(o=L(o,p));else if(o&&typeof o.handleEvent=="function")o=L(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:g.setTimeout(o,f||0)}function yi(o){o.g=ls(()=>{o.g=null,o.i&&(o.i=!1,yi(o))},o.l);const f=o.h;o.h=null,o.m.apply(null,f)}class hs extends Nt{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:yi(this)}N(){super.N(),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vt(o){Nt.call(this),this.h=o,this.g={}}z(Vt,Nt);var Ct=[];function jt(o){Me(o.g,function(f,p){this.g.hasOwnProperty(p)&&mi(f)},o),o.g={}}Vt.prototype.N=function(){Vt.aa.N.call(this),jt(this)},Vt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bt=g.JSON.stringify,bo=g.JSON.parse,br=class{stringify(o){return g.JSON.stringify(o,void 0)}parse(o){return g.JSON.parse(o,void 0)}};function Cr(){}Cr.prototype.h=null;function _i(o){return o.h||(o.h=o.i())}function fs(){}var St={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function on(){$e.call(this,"d")}z(on,$e);function Sr(){$e.call(this,"c")}z(Sr,$e);var qt={},dt=null;function Ge(){return dt=dt||new Pe}qt.La="serverreachability";function Rr(o){$e.call(this,qt.La,o)}z(Rr,$e);function Xn(o){const f=Ge();et(f,new Rr(f))}qt.STAT_EVENT="statevent";function vi(o,f){$e.call(this,qt.STAT_EVENT,o),this.stat=f}z(vi,$e);function Xe(o){const f=Ge();et(f,new vi(f,o))}qt.Ma="timingevent";function an(o,f){$e.call(this,qt.Ma,o),this.size=f}z(an,$e);function Rt(o,f){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return g.setTimeout(function(){o()},f)}function un(){this.g=!0}un.prototype.xa=function(){this.g=!1};function Pr(o,f,p,T,N,U){o.info(function(){if(o.g)if(U)for(var K="",ke=U.split("&"),Ne=0;Ne<ke.length;Ne++){var pe=ke[Ne].split("=");if(1<pe.length){var Je=pe[0];pe=pe[1];var Ye=Je.split("_");K=2<=Ye.length&&Ye[1]=="type"?K+(Je+"="+pe+"&"):K+(Je+"=redacted&")}}else K=null;else K=U;return"XMLHTTP REQ ("+T+") [attempt "+N+"]: "+f+`
`+p+`
`+K})}function Co(o,f,p,T,N,U,K){o.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+N+"]: "+f+`
`+p+`
`+U+" "+K})}function An(o,f,p,T){o.info(function(){return"XMLHTTP TEXT ("+f+"): "+ds(o,p)+(T?" "+T:"")})}function So(o,f){o.info(function(){return"TIMEOUT: "+f})}un.prototype.info=function(){};function ds(o,f){if(!o.g)return f;if(!f)return null;try{var p=JSON.parse(f);if(p){for(o=0;o<p.length;o++)if(Array.isArray(p[o])){var T=p[o];if(!(2>T.length)){var N=T[1];if(Array.isArray(N)&&!(1>N.length)){var U=N[0];if(U!="noop"&&U!="stop"&&U!="close")for(var K=1;K<N.length;K++)N[K]=""}}}}return Bt(p)}catch{return f}}var kr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ps={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Dr;function xr(){}z(xr,Cr),xr.prototype.g=function(){return new XMLHttpRequest},xr.prototype.i=function(){return{}},Dr=new xr;function pt(o,f,p,T){this.j=o,this.i=f,this.l=p,this.R=T||1,this.U=new Vt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ti}function Ti(){this.i=null,this.g="",this.h=!1}var Nr={},Jn={};function bn(o,f,p){o.L=1,o.v=Ht(kt(f)),o.m=p,o.P=!0,Ei(o,null)}function Ei(o,f){o.F=Date.now(),Zn(o),o.A=kt(o.v);var p=o.A,T=o.R;Array.isArray(T)||(T=[String(T)]),Si(p.i,"t",T),o.C=0,p=o.j.J,o.h=new Ti,o.g=It(o.j,p?f:null,!o.m),0<o.O&&(o.M=new hs(L(o.Y,o,o.g),o.O)),f=o.U,p=o.g,T=o.ca;var N="readystatechange";Array.isArray(N)||(N&&(Ct[0]=N.toString()),N=Ct);for(var U=0;U<N.length;U++){var K=wr(p,N[U],T||f.handleEvent,!1,f.h||f);if(!K)break;f.g[K.key]=K}f=o.H?C(o.H):{},o.m?(o.u||(o.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,f)):(o.u="GET",o.g.ea(o.A,o.u,null,f)),Xn(),Pr(o.i,o.u,o.A,o.l,o.R,o.m)}pt.prototype.ca=function(o){o=o.target;const f=this.M;f&&wt(o)==3?f.j():this.Y(o)},pt.prototype.Y=function(o){try{if(o==this.g)e:{const Ye=wt(this.g);var f=this.g.Ba();const Pn=this.g.Z();if(!(3>Ye)&&(Ye!=3||this.g&&(this.h.h||this.g.oa()||Cs(this.g)))){this.J||Ye!=4||f==7||(f==8||0>=Pn?Xn(3):Xn(2)),Or(this);var p=this.g.Z();this.X=p;t:if(gs(this)){var T=Cs(this.g);o="";var N=T.length,U=wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cn(this),Cn(this);var K="";break t}this.h.i=new g.TextDecoder}for(f=0;f<N;f++)this.h.h=!0,o+=this.h.i.decode(T[f],{stream:!(U&&f==N-1)});T.length=0,this.h.g+=o,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=p==200,Co(this.i,this.u,this.A,this.l,this.R,Ye,p),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,Ne=this.g;if((ke=Ne.g?Ne.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!we(ke)){var pe=ke;break t}}pe=null}if(p=pe)An(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,er(this,p);else{this.o=!1,this.s=3,Xe(12),cn(this),Cn(this);break e}}if(this.P){p=!0;let ye;for(;!this.J&&this.C<K.length;)if(ye=Yn(this,K),ye==Jn){Ye==4&&(this.s=4,Xe(14),p=!1),An(this.i,this.l,null,"[Incomplete Response]");break}else if(ye==Nr){this.s=4,Xe(15),An(this.i,this.l,K,"[Invalid Chunk]"),p=!1;break}else An(this.i,this.l,ye,null),er(this,ye);if(gs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ye!=4||K.length!=0||this.h.h||(this.s=1,Xe(16),p=!1),this.o=this.o&&p,!p)An(this.i,this.l,K,"[Invalid Chunked Response]"),cn(this),Cn(this);else if(0<K.length&&!this.W){this.W=!0;var Je=this.j;Je.g==this&&Je.ba&&!Je.M&&(Je.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),q(Je),Je.M=!0,Xe(11))}}else An(this.i,this.l,K,null),er(this,K);Ye==4&&cn(this),this.o&&!this.J&&(Ye==4?ue(this.j,this):(this.o=!1,Zn(this)))}else Vo(this.g),p==400&&0<K.indexOf("Unknown SID")?(this.s=3,Xe(12)):(this.s=0,Xe(13)),cn(this),Cn(this)}}}catch{}finally{}};function gs(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Yn(o,f){var p=o.C,T=f.indexOf(`
`,p);return T==-1?Jn:(p=Number(f.substring(p,T)),isNaN(p)?Nr:(T+=1,T+p>f.length?Jn:(f=f.slice(T,T+p),o.C=T+p,f)))}pt.prototype.cancel=function(){this.J=!0,cn(this)};function Zn(o){o.S=Date.now()+o.I,wi(o,o.I)}function wi(o,f){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Rt(L(o.ba,o),f)}function Or(o){o.B&&(g.clearTimeout(o.B),o.B=null)}pt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(So(this.i,this.A),this.L!=2&&(Xn(),Xe(17)),cn(this),this.s=2,Cn(this)):wi(this,this.S-o)};function Cn(o){o.j.G==0||o.J||ue(o.j,o)}function cn(o){Or(o);var f=o.M;f&&typeof f.ma=="function"&&f.ma(),o.M=null,jt(o.U),o.g&&(f=o.g,o.g=null,f.abort(),f.ma())}function er(o,f){try{var p=o.j;if(p.G!=0&&(p.g==o||tr(p.h,o))){if(!o.K&&tr(p.h,o)&&p.G==3){try{var T=p.Da.g.parse(f)}catch{T=null}if(Array.isArray(T)&&T.length==3){var N=T;if(N[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<o.F)W(p),l(p);else break e;B(p),Xe(18)}}else p.za=N[1],0<p.za-p.T&&37500>N[2]&&p.F&&p.v==0&&!p.C&&(p.C=Rt(L(p.Za,p),6e3));if(1>=Ai(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else ce(p,11)}else if((o.K||p.g==o)&&W(p),!we(f))for(N=p.Da.g.parse(f),f=0;f<N.length;f++){let pe=N[f];if(p.T=pe[0],pe=pe[1],p.G==2)if(pe[0]=="c"){p.K=pe[1],p.ia=pe[2];const Je=pe[3];Je!=null&&(p.la=Je,p.j.info("VER="+p.la));const Ye=pe[4];Ye!=null&&(p.Aa=Ye,p.j.info("SVER="+p.Aa));const Pn=pe[5];Pn!=null&&typeof Pn=="number"&&0<Pn&&(T=1.5*Pn,p.L=T,p.j.info("backChannelRequestTimeoutMs_="+T)),T=p;const ye=o.g;if(ye){const pn=ye.g?ye.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(pn){var U=T.h;U.g||pn.indexOf("spdy")==-1&&pn.indexOf("quic")==-1&&pn.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Vr(U,U.h),U.h=null))}if(T.D){const gt=ye.g?ye.g.getResponseHeader("X-HTTP-Session-Id"):null;gt&&(T.ya=gt,xe(T.I,T.D,gt))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-o.F,p.j.info("Handshake RTT: "+p.R+"ms")),T=p;var K=o;if(T.qa=Ue(T,T.J?T.ia:null,T.W),K.K){tt(T.h,K);var ke=K,Ne=T.L;Ne&&(ke.I=Ne),ke.B&&(Or(ke),Zn(ke)),T.g=K}else k(T);0<p.i.length&&m(p)}else pe[0]!="stop"&&pe[0]!="close"||ce(p,7);else p.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?ce(p,7):u(p):pe[0]!="noop"&&p.l&&p.l.ta(pe),p.v=0)}}Xn(4)}catch{}}var Ro=class{constructor(o,f){this.g=o,this.map=f}};function ms(o){this.l=o||10,g.PerformanceNavigationTiming?(o=g.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(g.chrome&&g.chrome.loadTimes&&g.chrome.loadTimes()&&g.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ii(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ai(o){return o.h?1:o.g?o.g.size:0}function tr(o,f){return o.h?o.h==f:o.g?o.g.has(f):!1}function Vr(o,f){o.g?o.g.add(f):o.h=f}function tt(o,f){o.h&&o.h==f?o.h=null:o.g&&o.g.has(f)&&o.g.delete(f)}ms.prototype.cancel=function(){if(this.i=ln(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ln(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let f=o.i;for(const p of o.g.values())f=f.concat(p.D);return f}return Q(o.i)}function Lr(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(_(o)){for(var f=[],p=o.length,T=0;T<p;T++)f.push(o[T]);return f}f=[],p=0;for(T in o)f[p++]=o[T];return f}function Po(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(_(o)||typeof o=="string"){var f=[];o=o.length;for(var p=0;p<o;p++)f.push(p);return f}f=[],p=0;for(const T in o)f[p++]=T;return f}}}function ys(o,f){if(o.forEach&&typeof o.forEach=="function")o.forEach(f,void 0);else if(_(o)||typeof o=="string")Array.prototype.forEach.call(o,f,void 0);else for(var p=Po(o),T=Lr(o),N=T.length,U=0;U<N;U++)f.call(void 0,T[U],p&&p[U],o)}var Mr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _s(o,f){if(o){o=o.split("&");for(var p=0;p<o.length;p++){var T=o[p].indexOf("="),N=null;if(0<=T){var U=o[p].substring(0,T);N=o[p].substring(T+1)}else U=o[p];f(U,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Pt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Pt){this.h=o.h,Fr(this,o.j),this.o=o.o,this.g=o.g,Ur(this,o.s),this.l=o.l;var f=o.i,p=new fn;p.i=f.i,f.g&&(p.g=new Map(f.g),p.h=f.h),_t(this,p),this.m=o.m}else o&&(f=String(o).match(Mr))?(this.h=!1,Fr(this,f[1]||"",!0),this.o=nr(f[2]||""),this.g=nr(f[3]||"",!0),Ur(this,f[4]),this.l=nr(f[5]||"",!0),_t(this,f[6]||"",!0),this.m=nr(f[7]||"")):(this.h=!1,this.i=new fn(null,this.h))}Pt.prototype.toString=function(){var o=[],f=this.j;f&&o.push(rr(f,$t,!0),":");var p=this.g;return(p||f=="file")&&(o.push("//"),(f=this.o)&&o.push(rr(f,$t,!0),"@"),o.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&o.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&o.push("/"),o.push(rr(p,p.charAt(0)=="/"?ko:bi,!0))),(p=this.i.toString())&&o.push("?",p),(p=this.m)&&o.push("#",rr(p,vs)),o.join("")};function kt(o){return new Pt(o)}function Fr(o,f,p){o.j=p?nr(f,!0):f,o.j&&(o.j=o.j.replace(/:$/,""))}function Ur(o,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);o.s=f}else o.s=null}function _t(o,f,p){f instanceof fn?(o.i=f,Do(o.i,o.h)):(p||(f=rr(f,ir)),o.i=new fn(f,o.h))}function xe(o,f,p){o.i.set(f,p)}function Ht(o){return xe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function nr(o,f){return o?f?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function rr(o,f,p){return typeof o=="string"?(o=encodeURI(o).replace(f,hn),p&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function hn(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var $t=/[#\/\?@]/g,bi=/[#\?:]/g,ko=/[#\?]/g,ir=/[#\?@]/g,vs=/#/g;function fn(o,f){this.h=this.g=null,this.i=o||null,this.j=!!f}function Lt(o){o.g||(o.g=new Map,o.h=0,o.i&&_s(o.i,function(f,p){o.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}n=fn.prototype,n.add=function(o,f){Lt(this),this.i=null,o=Sn(this,o);var p=this.g.get(o);return p||this.g.set(o,p=[]),p.push(f),this.h+=1,this};function Ci(o,f){Lt(o),f=Sn(o,f),o.g.has(f)&&(o.i=null,o.h-=o.g.get(f).length,o.g.delete(f))}function Ts(o,f){return Lt(o),f=Sn(o,f),o.g.has(f)}n.forEach=function(o,f){Lt(this),this.g.forEach(function(p,T){p.forEach(function(N){o.call(f,N,T,this)},this)},this)},n.na=function(){Lt(this);const o=Array.from(this.g.values()),f=Array.from(this.g.keys()),p=[];for(let T=0;T<f.length;T++){const N=o[T];for(let U=0;U<N.length;U++)p.push(f[T])}return p},n.V=function(o){Lt(this);let f=[];if(typeof o=="string")Ts(this,o)&&(f=f.concat(this.g.get(Sn(this,o))));else{o=Array.from(this.g.values());for(let p=0;p<o.length;p++)f=f.concat(o[p])}return f},n.set=function(o,f){return Lt(this),this.i=null,o=Sn(this,o),Ts(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[f]),this.h+=1,this},n.get=function(o,f){return o?(o=this.V(o),0<o.length?String(o[0]):f):f};function Si(o,f,p){Ci(o,f),0<p.length&&(o.i=null,o.g.set(Sn(o,f),Q(p)),o.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],f=Array.from(this.g.keys());for(var p=0;p<f.length;p++){var T=f[p];const U=encodeURIComponent(String(T)),K=this.V(T);for(T=0;T<K.length;T++){var N=U;K[T]!==""&&(N+="="+encodeURIComponent(String(K[T]))),o.push(N)}}return this.i=o.join("&")};function Sn(o,f){return f=String(f),o.j&&(f=f.toLowerCase()),f}function Do(o,f){f&&!o.j&&(Lt(o),o.i=null,o.g.forEach(function(p,T){var N=T.toLowerCase();T!=N&&(Ci(this,T),Si(this,N,p))},o)),o.j=f}function Ri(o,f){const p=new un;if(g.Image){const T=new Image;T.onload=G(zt,p,"TestLoadImage: loaded",!0,f,T),T.onerror=G(zt,p,"TestLoadImage: error",!1,f,T),T.onabort=G(zt,p,"TestLoadImage: abort",!1,f,T),T.ontimeout=G(zt,p,"TestLoadImage: timeout",!1,f,T),g.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=o}else f(!1)}function xo(o,f){const p=new un,T=new AbortController,N=setTimeout(()=>{T.abort(),zt(p,"TestPingServer: timeout",!1,f)},1e4);fetch(o,{signal:T.signal}).then(U=>{clearTimeout(N),U.ok?zt(p,"TestPingServer: ok",!0,f):zt(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(N),zt(p,"TestPingServer: error",!1,f)})}function zt(o,f,p,T,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),T(p)}catch{}}function No(){this.g=new br}function Oo(o,f,p){const T=p||"";try{ys(o,function(N,U){let K=N;E(N)&&(K=Bt(N)),f.push(T+U+"="+encodeURIComponent(K))})}catch(N){throw f.push(T+"type="+encodeURIComponent("_badmap")),N}}function jr(o){this.l=o.Ub||null,this.j=o.eb||!1}z(jr,Cr),jr.prototype.g=function(){return new Br(this.l,this.j)},jr.prototype.i=function(o){return function(){return o}}({});function Br(o,f){Pe.call(this),this.D=o,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}z(Br,Pe),n=Br.prototype,n.open=function(o,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=f,this.readyState=1,dn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(f.body=o),(this.D||g).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,dn(this)),this.g&&(this.readyState=3,dn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof g.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Es(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Es(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var f=o.value?o.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!o.done}))&&(this.response=this.responseText+=f)}o.done?Rn(this):dn(this),this.readyState==3&&Es(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Rn(this))},n.Qa=function(o){this.g&&(this.response=o,Rn(this))},n.ga=function(){this.g&&Rn(this)};function Rn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,dn(o)}n.setRequestHeader=function(o,f){this.u.append(o,f)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,o.push(p[0]+": "+p[1]),p=f.next();return o.join(`\r
`)};function dn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Br.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Pi(o){let f="";return Me(o,function(p,T){f+=T,f+=":",f+=p,f+=`\r
`}),f}function sr(o,f,p){e:{for(T in p){var T=!1;break e}T=!0}T||(p=Pi(p),typeof o=="string"?p!=null&&encodeURIComponent(String(p)):xe(o,f,p))}function Ve(o){Pe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}z(Ve,Pe);var ws=/^https?$/i,ki=["POST","PUT"];n=Ve.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,f,p,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);f=f?f.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Dr.g(),this.v=this.o?_i(this.o):_i(Dr),this.g.onreadystatechange=L(this.Ea,this);try{this.B=!0,this.g.open(f,String(o),!0),this.B=!1}catch(U){Is(this,U);return}if(o=p||"",p=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var N in T)p.set(N,T[N]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const U of T.keys())p.set(U,T.get(U));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(p.keys()).find(U=>U.toLowerCase()=="content-type"),N=g.FormData&&o instanceof g.FormData,!(0<=Array.prototype.indexOf.call(ki,f,void 0))||T||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,K]of p)this.g.setRequestHeader(U,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Di(this),this.u=!0,this.g.send(o),this.u=!1}catch(U){Is(this,U)}};function Is(o,f){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=f,o.m=5,As(o),Wt(o)}function As(o){o.A||(o.A=!0,et(o,"complete"),et(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,et(this,"complete"),et(this,"abort"),Wt(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wt(this,!0)),Ve.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?bs(this):this.bb())},n.bb=function(){bs(this)};function bs(o){if(o.h&&typeof h<"u"&&(!o.v[1]||wt(o)!=4||o.Z()!=2)){if(o.u&&wt(o)==4)ls(o.Ea,0,o);else if(et(o,"readystatechange"),wt(o)==4){o.h=!1;try{const K=o.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var T;if(T=K===0){var N=String(o.D).match(Mr)[1]||null;!N&&g.self&&g.self.location&&(N=g.self.location.protocol.slice(0,-1)),T=!ws.test(N?N.toLowerCase():"")}p=T}if(p)et(o,"complete"),et(o,"success");else{o.m=6;try{var U=2<wt(o)?o.g.statusText:""}catch{U=""}o.l=U+" ["+o.Z()+"]",As(o)}}finally{Wt(o)}}}}function Wt(o,f){if(o.g){Di(o);const p=o.g,T=o.v[0]?()=>{}:null;o.g=null,o.v=null,f||et(o,"ready");try{p.onreadystatechange=T}catch{}}}function Di(o){o.I&&(g.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function wt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<wt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var f=this.g.responseText;return o&&f.indexOf(o)==0&&(f=f.substring(o.length)),bo(f)}};function Cs(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Vo(o){const f={};o=(o.g&&2<=wt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<o.length;T++){if(we(o[T]))continue;var p=x(o[T]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const U=f[N]||[];f[N]=U,U.push(p)}c(f,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function or(o,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[o]||f}function s(o){this.Aa=0,this.i=[],this.j=new un,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=or("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=or("baseRetryDelayMs",5e3,o),this.cb=or("retryDelaySeedMs",1e4,o),this.Wa=or("forwardChannelMaxRetries",2,o),this.wa=or("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ms(o&&o.concurrentRequestLimit),this.Da=new No,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=s.prototype,n.la=8,n.G=1,n.connect=function(o,f,p,T){Xe(0),this.W=o,this.H=f||{},p&&T!==void 0&&(this.H.OSID=p,this.H.OAID=T),this.F=this.X,this.I=Ue(this,null,this.W),m(this)};function u(o){if(d(o),o.G==3){var f=o.U++,p=kt(o.I);if(xe(p,"SID",o.K),xe(p,"RID",f),xe(p,"TYPE","terminate"),S(o,p),f=new pt(o,o.j,f),f.L=2,f.v=Ht(kt(p)),p=!1,g.navigator&&g.navigator.sendBeacon)try{p=g.navigator.sendBeacon(f.v.toString(),"")}catch{}!p&&g.Image&&(new Image().src=f.v,p=!0),p||(f.g=It(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Zn(f)}ze(o)}function l(o){o.g&&(q(o),o.g.cancel(),o.g=null)}function d(o){l(o),o.u&&(g.clearTimeout(o.u),o.u=null),W(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&g.clearTimeout(o.s),o.s=null)}function m(o){if(!Ii(o.h)&&!o.s){o.s=!0;var f=o.Ga;ht||pi(),nn||(ht(),nn=!0),Ft.add(f,o),o.B=0}}function y(o,f){return Ai(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=f.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Rt(L(o.Ga,o,f),ve(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const N=new pt(this,this.j,o);let U=this.o;if(this.S&&(U?(U=C(U),D(U,this.S)):U=this.S),this.m!==null||this.O||(N.H=U,U=null),this.P)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var T=this.i[p];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(f+=T,4096<f){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=I(this,N,f),p=kt(this.I),xe(p,"RID",o),xe(p,"CVER",22),this.D&&xe(p,"X-HTTP-Session-Id",this.D),S(this,p),U&&(this.O?f="headers="+encodeURIComponent(String(Pi(U)))+"&"+f:this.m&&sr(p,this.m,U)),Vr(this.h,N),this.Ua&&xe(p,"TYPE","init"),this.P?(xe(p,"$req",f),xe(p,"SID","null"),N.T=!0,bn(N,p,null)):bn(N,p,f),this.G=2}}else this.G==3&&(o?v(this,o):this.i.length==0||Ii(this.h)||v(this))};function v(o,f){var p;f?p=f.l:p=o.U++;const T=kt(o.I);xe(T,"SID",o.K),xe(T,"RID",p),xe(T,"AID",o.T),S(o,T),o.m&&o.o&&sr(T,o.m,o.o),p=new pt(o,o.j,p,o.B+1),o.m===null&&(p.H=o.o),f&&(o.i=f.D.concat(o.i)),f=I(o,p,1e3),p.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Vr(o.h,p),bn(p,T,f)}function S(o,f){o.H&&Me(o.H,function(p,T){xe(f,T,p)}),o.l&&ys({},function(p,T){xe(f,T,p)})}function I(o,f,p){p=Math.min(o.i.length,p);var T=o.l?L(o.l.Na,o.l,o):null;e:{var N=o.i;let U=-1;for(;;){const K=["count="+p];U==-1?0<p?(U=N[0].g,K.push("ofs="+U)):U=0:K.push("ofs="+U);let ke=!0;for(let Ne=0;Ne<p;Ne++){let pe=N[Ne].g;const Je=N[Ne].map;if(pe-=U,0>pe)U=Math.max(0,N[Ne].g-100),ke=!1;else try{Oo(Je,K,"req"+pe+"_")}catch{T&&T(Je)}}if(ke){T=K.join("&");break e}}}return o=o.i.splice(0,p),f.D=o,T}function k(o){if(!o.g&&!o.u){o.Y=1;var f=o.Fa;ht||pi(),nn||(ht(),nn=!0),Ft.add(f,o),o.v=0}}function B(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Rt(L(o.Fa,o),ve(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,F(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Rt(L(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Xe(10),l(this),F(this))};function q(o){o.A!=null&&(g.clearTimeout(o.A),o.A=null)}function F(o){o.g=new pt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var f=kt(o.qa);xe(f,"RID","rpc"),xe(f,"SID",o.K),xe(f,"AID",o.T),xe(f,"CI",o.F?"0":"1"),!o.F&&o.ja&&xe(f,"TO",o.ja),xe(f,"TYPE","xmlhttp"),S(o,f),o.m&&o.o&&sr(f,o.m,o.o),o.L&&(o.g.I=o.L);var p=o.g;o=o.ia,p.L=1,p.v=Ht(kt(f)),p.m=null,p.P=!0,Ei(p,o)}n.Za=function(){this.C!=null&&(this.C=null,l(this),B(this),Xe(19))};function W(o){o.C!=null&&(g.clearTimeout(o.C),o.C=null)}function ue(o,f){var p=null;if(o.g==f){W(o),q(o),o.g=null;var T=2}else if(tr(o.h,f))p=f.D,tt(o.h,f),T=1;else return;if(o.G!=0){if(f.o)if(T==1){p=f.m?f.m.length:0,f=Date.now()-f.F;var N=o.B;T=Ge(),et(T,new an(T,p)),m(o)}else k(o);else if(N=f.s,N==3||N==0&&0<f.X||!(T==1&&y(o,f)||T==2&&B(o)))switch(p&&0<p.length&&(f=o.h,f.i=f.i.concat(p)),N){case 1:ce(o,5);break;case 4:ce(o,10);break;case 3:ce(o,6);break;default:ce(o,2)}}}function ve(o,f){let p=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(p*=2),p*f}function ce(o,f){if(o.j.info("Error code "+f),f==2){var p=L(o.fb,o),T=o.Xa;const N=!T;T=new Pt(T||"//www.google.com/images/cleardot.gif"),g.location&&g.location.protocol=="http"||Fr(T,"https"),Ht(T),N?Ri(T.toString(),p):xo(T.toString(),p)}else Xe(2);o.G=0,o.l&&o.l.sa(f),ze(o),d(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Xe(2)):(this.j.info("Failed to ping google.com"),Xe(1))};function ze(o){if(o.G=0,o.ka=[],o.l){const f=ln(o.h);(f.length!=0||o.i.length!=0)&&(ee(o.ka,f),ee(o.ka,o.i),o.h.i.length=0,Q(o.i),o.i.length=0),o.l.ra()}}function Ue(o,f,p){var T=p instanceof Pt?kt(p):new Pt(p);if(T.g!="")f&&(T.g=f+"."+T.g),Ur(T,T.s);else{var N=g.location;T=N.protocol,f=f?f+"."+N.hostname:N.hostname,N=+N.port;var U=new Pt(null);T&&Fr(U,T),f&&(U.g=f),N&&Ur(U,N),p&&(U.l=p),T=U}return p=o.D,f=o.ya,p&&f&&xe(T,p,f),xe(T,"VER",o.la),S(o,T),T}function It(o,f,p){if(f&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=o.Ca&&!o.pa?new Ve(new jr({eb:p})):new Ve(o.pa),f.Ha(o.J),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function At(){}n=At.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function me(){}me.prototype.g=function(o,f){return new Be(o,f)};function Be(o,f){Pe.call(this),this.g=new s(f),this.l=o,this.h=f&&f.messageUrlParams||null,o=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(o?o["X-WebChannel-Content-Type"]=f.messageContentType:o={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(o?o["X-WebChannel-Client-Profile"]=f.va:o={"X-WebChannel-Client-Profile":f.va}),this.g.S=o,(o=f&&f.Sb)&&!we(o)&&(this.g.m=o),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!we(f)&&(this.g.D=f,o=this.h,o!==null&&f in o&&(o=this.h,f in o&&delete o[f])),this.j=new Dt(this)}z(Be,Pe),Be.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Be.prototype.close=function(){u(this.g)},Be.prototype.o=function(o){var f=this.g;if(typeof o=="string"){var p={};p.__data__=o,o=p}else this.u&&(p={},p.__data__=Bt(o),o=p);f.i.push(new Ro(f.Ya++,o)),f.G==3&&m(f)},Be.prototype.N=function(){this.g.l=null,delete this.j,u(this.g),delete this.g,Be.aa.N.call(this)};function Ie(o){on.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var f=o.__sm__;if(f){e:{for(const p in f){o=p;break e}o=void 0}(this.i=o)&&(o=this.i,f=f!==null&&o in f?f[o]:void 0),this.data=f}else this.data=o}z(Ie,on);function Le(){Sr.call(this),this.status=1}z(Le,Sr);function Dt(o){this.g=o}z(Dt,At),Dt.prototype.ua=function(){et(this.g,"a")},Dt.prototype.ta=function(o){et(this.g,new Ie(o))},Dt.prototype.sa=function(o){et(this.g,new Le)},Dt.prototype.ra=function(){et(this.g,"b")},me.prototype.createWebChannel=me.prototype.g,Be.prototype.send=Be.prototype.o,Be.prototype.open=Be.prototype.m,Be.prototype.close=Be.prototype.close,rl=function(){return new me},nl=function(){return Ge()},tl=qt,ia={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},kr.NO_ERROR=0,kr.TIMEOUT=8,kr.HTTP_ERROR=6,Ms=kr,ps.COMPLETE="complete",el=ps,fs.EventType=St,St.OPEN="a",St.CLOSE="b",St.ERROR="c",St.MESSAGE="d",Pe.prototype.listen=Pe.prototype.K,Ni=fs,Ve.prototype.listenOnce=Ve.prototype.L,Ve.prototype.getLastError=Ve.prototype.Ka,Ve.prototype.getLastErrorCode=Ve.prototype.Ba,Ve.prototype.getStatus=Ve.prototype.Z,Ve.prototype.getResponseJson=Ve.prototype.Oa,Ve.prototype.getResponseText=Ve.prototype.oa,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Ha,Zc=Ve}).apply(typeof ks<"u"?ks:typeof self<"u"?self:typeof window<"u"?window:{});const Au="@firebase/firestore",bu="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Ca("@firebase/firestore");function $r(){return gr.logLevel}function ne(n,...e){if(gr.logLevel<=Ae.DEBUG){const t=e.map(Pa);gr.debug(`Firestore (${li}): ${n}`,...t)}}function vn(n,...e){if(gr.logLevel<=Ae.ERROR){const t=e.map(Pa);gr.error(`Firestore (${li}): ${n}`,...t)}}function ti(n,...e){if(gr.logLevel<=Ae.WARN){const t=e.map(Pa);gr.warn(`Firestore (${li}): ${n}`,...t)}}function Pa(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,il(n,r,t)}function il(n,e,t){let r=`FIRESTORE (${li}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw vn(r),new Error(r)}function Fe(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||il(e,i,r)}function Se(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends wn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Nd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ot.UNAUTHENTICATED))}shutdown(){}}class Od{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Vd{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0,42304);let r=this.i;const i=_=>this.i!==r?(r=this.i,t(_)):Promise.resolve();let a=new lr;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new lr,e.enqueueRetryable(()=>i(this.currentUser))};const h=()=>{const _=a;e.enqueueRetryable(async()=>{await _.promise,await i(this.currentUser)})},g=_=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(_=>g(_)),setTimeout(()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?g(_):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new lr)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Fe(typeof r.accessToken=="string",31837,{l:r}),new sl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new ot(e)}}class Ld{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Md{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Ld(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Cu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fd{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Qt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0,3512);const r=a=>{a.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const h=a.token!==this.m;return this.m=a.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>r(a))};const i=a=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(a=>i(a)),setTimeout(()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?i(a):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Cu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Cu(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Ud(40);for(let a=0;a<i.length;++a)r.length<20&&i[a]<t&&(r+=e.charAt(i[a]%62))}return r}}function _e(n,e){return n<e?-1:n>e?1:0}function sa(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return _e(r,i);{const a=ol(),h=jd(a.encode(Su(n,t)),a.encode(Su(e,t)));return h!==0?h:_e(r,i)}}t+=r>65535?2:1}return _e(n.length,e.length)}function Su(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function jd(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return _e(n[t],e[t]);return _e(n.length,e.length)}function ni(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=-62135596800,Pu=1e6;class Et{static now(){return Et.fromMillis(Date.now())}static fromDate(e){return Et.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Pu);return new Et(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new oe(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new oe(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ru)throw new oe(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Pu}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Ru;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{static fromTimestamp(e){return new de(e)}static min(){return new de(new Et(0,0))}static max(){return new de(new Et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="__name__";class Kt{constructor(e,t,r){t===void 0?t=0:t>e.length&&ge(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ge(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Kt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Kt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const a=Kt.compareSegments(e.get(i),t.get(i));if(a!==0)return a}return _e(e.length,t.length)}static compareSegments(e,t){const r=Kt.isNumericId(e),i=Kt.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Kt.extractNumericId(e).compare(Kt.extractNumericId(t)):sa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Bn.fromString(e.substring(4,e.length-2))}}class je extends Kt{construct(e,t,r){return new je(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new oe(J.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new je(t)}static emptyPath(){return new je([])}}const Bd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends Kt{construct(e,t,r){return new yt(e,t,r)}static isValidIdentifier(e){return Bd.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ku}static keyField(){return new yt([ku])}static fromServerFormat(e){const t=[];let r="",i=0;const a=()=>{if(r.length===0)throw new oe(J.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let h=!1;for(;i<e.length;){const g=e[i];if(g==="\\"){if(i+1===e.length)throw new oe(J.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const _=e[i+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new oe(J.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=_,i+=2}else g==="`"?(h=!h,i++):g!=="."||h?(r+=g,i++):(a(),i++)}if(a(),h)throw new oe(J.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(t)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(je.fromString(e))}static fromName(e){return new ae(je.fromString(e).popFirst(5))}static empty(){return new ae(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return je.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new je(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=-1;function qd(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=de.fromTimestamp(r===1e9?new Et(t+1,0):new Et(t,r));return new qn(i,ae.empty(),e)}function Hd(n){return new qn(n.readTime,n.key,Hi)}class qn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new qn(de.min(),ae.empty(),Hi)}static max(){return new qn(de.max(),ae.empty(),Hi)}}function $d(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ae.comparator(n.documentKey,e.documentKey),t!==0?t:_e(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uo(n){if(n.code!==J.FAILED_PRECONDITION||n.message!==zd)throw n;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ge(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,i)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):$.reject(t)}static resolve(e){return new $((t,r)=>{t(e)})}static reject(e){return new $((t,r)=>{r(e)})}static waitFor(e){return new $((t,r)=>{let i=0,a=0,h=!1;e.forEach(g=>{++i,g.next(()=>{++a,h&&a===i&&t()},_=>r(_))}),h=!0,a===i&&t()})}static or(e){let t=$.resolve(!1);for(const r of e)t=t.next(i=>i?$.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,a)=>{r.push(t.call(this,i,a))}),this.waitFor(r)}static mapArray(e,t){return new $((r,i)=>{const a=e.length,h=new Array(a);let g=0;for(let _=0;_<a;_++){const E=_;t(e[E]).next(R=>{h[E]=R,++g,g===a&&r(h)},R=>i(R))}})}static doWhile(e,t){return new $((r,i)=>{const a=()=>{e()===!0?t().next(()=>{a()},i):r()};a()})}}function Gd(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function hi(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}co.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=-1;function lo(n){return n==null}function oa(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul="";function Qd(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Du(e)),e=Xd(n.get(t),e);return Du(e)}function Xd(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const a=n.charAt(i);switch(a){case"\0":t+="";break;case ul:t+="";break;default:t+=a}}return t}function Du(n){return n+ul+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Yi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Jd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t){this.comparator=e,this.root=t||nt.EMPTY}insert(e,t){return new He(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ds(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ds(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ds(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ds(this.root,e,this.comparator,!0)}}class Ds{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&i&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nt{constructor(e,t,r,i,a){this.key=e,this.value=t,this.color=r??nt.RED,this.left=i??nt.EMPTY,this.right=a??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,a){return new nt(e??this.key,t??this.value,r??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const a=r(e,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(e,t,r),null):a===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return nt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ge(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ge(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ge(27949);return e+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw ge(57766)}get value(){throw ge(16141)}get color(){throw ge(16727)}get left(){throw ge(29726)}get right(){throw ge(36894)}copy(e,t,r,i,a){return this}insert(e,t,r){return new nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Nu(this.data.getIterator())}getIteratorFrom(e){return new Nu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(this.comparator(i,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Qe(this.comparator);return t.data=e,t}}class Nu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new Ln([])}unionWith(e){let t=new Qe(yt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ln(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ni(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new cl("Invalid base64 string: "+a):a}}(e);return new rt(t)}static fromUint8Array(e){const t=function(i){let a="";for(let h=0;h<i.length;++h)a+=String.fromCharCode(i[h]);return a}(e);return new rt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const Yd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hn(n){if(Fe(!!n,39018),typeof n=="string"){let e=0;const t=Yd.exec(n);if(Fe(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(n.seconds),nanos:qe(n.nanos)}}function qe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function $n(n){return typeof n=="string"?rt.fromBase64String(n):rt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="server_timestamp",hl="__type__",fl="__previous_value__",dl="__local_write_time__";function ka(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[hl])===null||t===void 0?void 0:t.stringValue)===ll}function ho(n){const e=n.mapValue.fields[fl];return ka(e)?ho(e):e}function $i(n){const e=Hn(n.mapValue.fields[dl].timestampValue);return new Et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,t,r,i,a,h,g,_,E,R){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=a,this.forceLongPolling=h,this.autoDetectLongPolling=g,this.longPollingOptions=_,this.useFetchStreams=E,this.isUsingEmulator=R}}const Gs="(default)";class zi{constructor(e,t){this.projectId=e,this.database=t||Gs}static empty(){return new zi("","")}get isDefaultDatabase(){return this.database===Gs}isEqual(e){return e instanceof zi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="__type__",tp="__max__",xs={mapValue:{}},np="__vector__",aa="value";function zn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ka(n)?4:ip(n)?9007199254740991:rp(n)?10:11:ge(28295,{value:n})}function en(n,e){if(n===e)return!0;const t=zn(n);if(t!==zn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return $i(n).isEqual($i(e));case 3:return function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const h=Hn(i.timestampValue),g=Hn(a.timestampValue);return h.seconds===g.seconds&&h.nanos===g.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,a){return $n(i.bytesValue).isEqual($n(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,a){return qe(i.geoPointValue.latitude)===qe(a.geoPointValue.latitude)&&qe(i.geoPointValue.longitude)===qe(a.geoPointValue.longitude)}(n,e);case 2:return function(i,a){if("integerValue"in i&&"integerValue"in a)return qe(i.integerValue)===qe(a.integerValue);if("doubleValue"in i&&"doubleValue"in a){const h=qe(i.doubleValue),g=qe(a.doubleValue);return h===g?oa(h)===oa(g):isNaN(h)&&isNaN(g)}return!1}(n,e);case 9:return ni(n.arrayValue.values||[],e.arrayValue.values||[],en);case 10:case 11:return function(i,a){const h=i.mapValue.fields||{},g=a.mapValue.fields||{};if(xu(h)!==xu(g))return!1;for(const _ in h)if(h.hasOwnProperty(_)&&(g[_]===void 0||!en(h[_],g[_])))return!1;return!0}(n,e);default:return ge(52216,{left:n})}}function Wi(n,e){return(n.values||[]).find(t=>en(t,e))!==void 0}function ri(n,e){if(n===e)return 0;const t=zn(n),r=zn(e);if(t!==r)return _e(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return _e(n.booleanValue,e.booleanValue);case 2:return function(a,h){const g=qe(a.integerValue||a.doubleValue),_=qe(h.integerValue||h.doubleValue);return g<_?-1:g>_?1:g===_?0:isNaN(g)?isNaN(_)?0:-1:1}(n,e);case 3:return Ou(n.timestampValue,e.timestampValue);case 4:return Ou($i(n),$i(e));case 5:return sa(n.stringValue,e.stringValue);case 6:return function(a,h){const g=$n(a),_=$n(h);return g.compareTo(_)}(n.bytesValue,e.bytesValue);case 7:return function(a,h){const g=a.split("/"),_=h.split("/");for(let E=0;E<g.length&&E<_.length;E++){const R=_e(g[E],_[E]);if(R!==0)return R}return _e(g.length,_.length)}(n.referenceValue,e.referenceValue);case 8:return function(a,h){const g=_e(qe(a.latitude),qe(h.latitude));return g!==0?g:_e(qe(a.longitude),qe(h.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Vu(n.arrayValue,e.arrayValue);case 10:return function(a,h){var g,_,E,R;const O=a.fields||{},L=h.fields||{},G=(g=O[aa])===null||g===void 0?void 0:g.arrayValue,z=(_=L[aa])===null||_===void 0?void 0:_.arrayValue,Q=_e(((E=G==null?void 0:G.values)===null||E===void 0?void 0:E.length)||0,((R=z==null?void 0:z.values)===null||R===void 0?void 0:R.length)||0);return Q!==0?Q:Vu(G,z)}(n.mapValue,e.mapValue);case 11:return function(a,h){if(a===xs.mapValue&&h===xs.mapValue)return 0;if(a===xs.mapValue)return 1;if(h===xs.mapValue)return-1;const g=a.fields||{},_=Object.keys(g),E=h.fields||{},R=Object.keys(E);_.sort(),R.sort();for(let O=0;O<_.length&&O<R.length;++O){const L=sa(_[O],R[O]);if(L!==0)return L;const G=ri(g[_[O]],E[R[O]]);if(G!==0)return G}return _e(_.length,R.length)}(n.mapValue,e.mapValue);default:throw ge(23264,{Pe:t})}}function Ou(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return _e(n,e);const t=Hn(n),r=Hn(e),i=_e(t.seconds,r.seconds);return i!==0?i:_e(t.nanos,r.nanos)}function Vu(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const a=ri(t[i],r[i]);if(a)return a}return _e(t.length,r.length)}function ii(n){return ua(n)}function ua(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Hn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return $n(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ae.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const a of t.values||[])i?i=!1:r+=",",r+=ua(a);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",a=!0;for(const h of r)a?a=!1:i+=",",i+=`${h}:${ua(t.fields[h])}`;return i+"}"}(n.mapValue):ge(61005,{value:n})}function Fs(n){switch(zn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ho(n);return e?16+Fs(e):16;case 5:return 2*n.stringValue.length;case 6:return $n(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,a)=>i+Fs(a),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Yi(r.fields,(a,h)=>{i+=a.length+Fs(h)}),i}(n.mapValue);default:throw ge(13486,{value:n})}}function ca(n){return!!n&&"integerValue"in n}function Da(n){return!!n&&"arrayValue"in n}function Lu(n){return!!n&&"nullValue"in n}function Mu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Wo(n){return!!n&&"mapValue"in n}function rp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[ep])===null||t===void 0?void 0:t.stringValue)===np}function Mi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Yi(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Mi(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Mi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function ip(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===tp}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.value=e}static empty(){return new Xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Wo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mi(t)}setAll(e){let t=yt.emptyPath(),r={},i=[];e.forEach((h,g)=>{if(!t.isImmediateParentOf(g)){const _=this.getFieldsMap(t);this.applyChanges(_,r,i),r={},i=[],t=g.popLast()}h?r[g.lastSegment()]=Mi(h):i.push(g.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,r,i)}delete(e){const t=this.field(e.popLast());Wo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return en(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Wo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Yi(t,(i,a)=>e[i]=a);for(const i of r)delete e[i]}clone(){return new Xt(Mi(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t,r,i,a,h,g){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=a,this.data=h,this.documentState=g}static newInvalidDocument(e){return new at(e,0,de.min(),de.min(),de.min(),Xt.empty(),0)}static newFoundDocument(e,t,r,i){return new at(e,1,t,de.min(),r,i,0)}static newNoDocument(e,t){return new at(e,2,t,de.min(),de.min(),Xt.empty(),0)}static newUnknownDocument(e,t){return new at(e,3,t,de.min(),de.min(),Xt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t){this.position=e,this.inclusive=t}}function Fu(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const a=e[i],h=n.position[i];if(a.field.isKeyField()?r=ae.comparator(ae.fromName(h.referenceValue),t.key):r=ri(h,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function Uu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!en(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,t="asc"){this.field=e,this.dir=t}}function sp(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{}class Ke extends pl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new ap(e,t,r):t==="array-contains"?new lp(e,r):t==="in"?new hp(e,r):t==="not-in"?new fp(e,r):t==="array-contains-any"?new dp(e,r):new Ke(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new up(e,r):new cp(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ri(t,this.value)):t!==null&&zn(this.value)===zn(t)&&this.matchesComparison(ri(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tn extends pl{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new tn(e,t)}matches(e){return gl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function gl(n){return n.op==="and"}function ml(n){return op(n)&&gl(n)}function op(n){for(const e of n.filters)if(e instanceof tn)return!1;return!0}function la(n){if(n instanceof Ke)return n.field.canonicalString()+n.op.toString()+ii(n.value);if(ml(n))return n.filters.map(e=>la(e)).join(",");{const e=n.filters.map(t=>la(t)).join(",");return`${n.op}(${e})`}}function yl(n,e){return n instanceof Ke?function(r,i){return i instanceof Ke&&r.op===i.op&&r.field.isEqual(i.field)&&en(r.value,i.value)}(n,e):n instanceof tn?function(r,i){return i instanceof tn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((a,h,g)=>a&&yl(h,i.filters[g]),!0):!1}(n,e):void ge(19439)}function _l(n){return n instanceof Ke?function(t){return`${t.field.canonicalString()} ${t.op} ${ii(t.value)}`}(n):n instanceof tn?function(t){return t.op.toString()+" {"+t.getFilters().map(_l).join(" ,")+"}"}(n):"Filter"}class ap extends Ke{constructor(e,t,r){super(e,t,r),this.key=ae.fromName(r.referenceValue)}matches(e){const t=ae.comparator(e.key,this.key);return this.matchesComparison(t)}}class up extends Ke{constructor(e,t){super(e,"in",t),this.keys=vl("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class cp extends Ke{constructor(e,t){super(e,"not-in",t),this.keys=vl("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function vl(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ae.fromName(r.referenceValue))}class lp extends Ke{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Da(t)&&Wi(t.arrayValue,this.value)}}class hp extends Ke{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Wi(this.value.arrayValue,t)}}class fp extends Ke{constructor(e,t){super(e,"not-in",t)}matches(e){if(Wi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Wi(this.value.arrayValue,t)}}class dp extends Ke{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Da(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Wi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,t=null,r=[],i=[],a=null,h=null,g=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=a,this.startAt=h,this.endAt=g,this.Ie=null}}function ju(n,e=null,t=[],r=[],i=null,a=null,h=null){return new pp(n,e,t,r,i,a,h)}function xa(n){const e=Se(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>la(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(a){return a.field.canonicalString()+a.dir}(r)).join(","),lo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ii(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ii(r)).join(",")),e.Ie=t}return e.Ie}function Na(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!sp(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!yl(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Uu(n.startAt,e.startAt)&&Uu(n.endAt,e.endAt)}function ha(n){return ae.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t=null,r=[],i=[],a=null,h="F",g=null,_=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=a,this.limitType=h,this.startAt=g,this.endAt=_,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function gp(n,e,t,r,i,a,h,g){return new fo(n,e,t,r,i,a,h,g)}function Oa(n){return new fo(n)}function Bu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function mp(n){return n.collectionGroup!==null}function Fi(n){const e=Se(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const a of e.explicitOrderBy)e.Ee.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let g=new Qe(yt.comparator);return h.filters.forEach(_=>{_.getFlattenedFilters().forEach(E=>{E.isInequality()&&(g=g.add(E.field))})}),g})(e).forEach(a=>{t.has(a.canonicalString())||a.isKeyField()||e.Ee.push(new Qs(a,r))}),t.has(yt.keyField().canonicalString())||e.Ee.push(new Qs(yt.keyField(),r))}return e.Ee}function Jt(n){const e=Se(n);return e.de||(e.de=yp(e,Fi(n))),e.de}function yp(n,e){if(n.limitType==="F")return ju(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const a=i.dir==="desc"?"asc":"desc";return new Qs(i.field,a)});const t=n.endAt?new Ks(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ks(n.startAt.position,n.startAt.inclusive):null;return ju(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function fa(n,e,t){return new fo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function po(n,e){return Na(Jt(n),Jt(e))&&n.limitType===e.limitType}function Tl(n){return`${xa(Jt(n))}|lt:${n.limitType}`}function zr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>_l(i)).join(", ")}]`),lo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>ii(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>ii(i)).join(",")),`Target(${r})`}(Jt(n))}; limitType=${n.limitType})`}function go(n,e){return e.isFoundDocument()&&function(r,i){const a=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):ae.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)}(n,e)&&function(r,i){for(const a of Fi(r))if(!a.field.isKeyField()&&i.data.field(a.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const a of r.filters)if(!a.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(h,g,_){const E=Fu(h,g,_);return h.inclusive?E<=0:E<0}(r.startAt,Fi(r),i)||r.endAt&&!function(h,g,_){const E=Fu(h,g,_);return h.inclusive?E>=0:E>0}(r.endAt,Fi(r),i))}(n,e)}function _p(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function El(n){return(e,t)=>{let r=!1;for(const i of Fi(n)){const a=vp(i,e,t);if(a!==0)return a;r=r||i.field.isKeyField()}return 0}}function vp(n,e,t){const r=n.field.isKeyField()?ae.comparator(e.key,t.key):function(a,h,g){const _=h.data.field(a),E=g.data.field(a);return _!==null&&E!==null?ri(_,E):ge(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ge(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,a]of r)if(this.equalsFn(i,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return void(i[a]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yi(this.inner,(t,r)=>{for(const[i,a]of r)e(i,a)})}isEmpty(){return Jd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp=new He(ae.comparator);function Wn(){return Tp}const wl=new He(ae.comparator);function Oi(...n){let e=wl;for(const t of n)e=e.insert(t.key,t);return e}function Ep(n){let e=wl;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function cr(){return Ui()}function Il(){return Ui()}function Ui(){return new _r(n=>n.toString(),(n,e)=>n.isEqual(e))}const wp=new Qe(ae.comparator);function Re(...n){let e=wp;for(const t of n)e=e.add(t);return e}const Ip=new Qe(_e);function Ap(){return Ip}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oa(e)?"-0":e}}function Cp(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this._=void 0}}function Sp(n,e,t){return n instanceof da?function(i,a){const h={fields:{[hl]:{stringValue:ll},[dl]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return a&&ka(a)&&(a=ho(a)),a&&(h.fields[fl]=a),{mapValue:h}}(t,e):n instanceof Xs?Al(n,e):n instanceof Js?bl(n,e):function(i,a){const h=Pp(i,a),g=qu(h)+qu(i.Re);return ca(h)&&ca(i.Re)?Cp(g):bp(i.serializer,g)}(n,e)}function Rp(n,e,t){return n instanceof Xs?Al(n,e):n instanceof Js?bl(n,e):t}function Pp(n,e){return n instanceof pa?function(r){return ca(r)||function(a){return!!a&&"doubleValue"in a}(r)}(e)?e:{integerValue:0}:null}class da extends mo{}class Xs extends mo{constructor(e){super(),this.elements=e}}function Al(n,e){const t=Cl(e);for(const r of n.elements)t.some(i=>en(i,r))||t.push(r);return{arrayValue:{values:t}}}class Js extends mo{constructor(e){super(),this.elements=e}}function bl(n,e){let t=Cl(e);for(const r of n.elements)t=t.filter(i=>!en(i,r));return{arrayValue:{values:t}}}class pa extends mo{constructor(e,t){super(),this.serializer=e,this.Re=t}}function qu(n){return qe(n.integerValue||n.doubleValue)}function Cl(n){return Da(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function kp(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Xs&&i instanceof Xs||r instanceof Js&&i instanceof Js?ni(r.elements,i.elements,en):r instanceof pa&&i instanceof pa?en(r.Re,i.Re):r instanceof da&&i instanceof da}(n.transform,e.transform)}class hr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new hr}static exists(e){return new hr(void 0,e)}static updateTime(e){return new hr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Us(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Va{}function Sl(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new xp(n.key,hr.none()):new La(n.key,n.data,hr.none());{const t=n.data,r=Xt.empty();let i=new Qe(yt.comparator);for(let a of e.fields)if(!i.has(a)){let h=t.field(a);h===null&&a.length>1&&(a=a.popLast(),h=t.field(a)),h===null?r.delete(a):r.set(a,h),i=i.add(a)}return new yo(n.key,r,new Ln(i.toArray()),hr.none())}}function Dp(n,e,t){n instanceof La?function(i,a,h){const g=i.value.clone(),_=$u(i.fieldTransforms,a,h.transformResults);g.setAll(_),a.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(n,e,t):n instanceof yo?function(i,a,h){if(!Us(i.precondition,a))return void a.convertToUnknownDocument(h.version);const g=$u(i.fieldTransforms,a,h.transformResults),_=a.data;_.setAll(Rl(i)),_.setAll(g),a.convertToFoundDocument(h.version,_).setHasCommittedMutations()}(n,e,t):function(i,a,h){a.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function ji(n,e,t,r){return n instanceof La?function(a,h,g,_){if(!Us(a.precondition,h))return g;const E=a.value.clone(),R=zu(a.fieldTransforms,_,h);return E.setAll(R),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),null}(n,e,t,r):n instanceof yo?function(a,h,g,_){if(!Us(a.precondition,h))return g;const E=zu(a.fieldTransforms,_,h),R=h.data;return R.setAll(Rl(a)),R.setAll(E),h.convertToFoundDocument(h.version,R).setHasLocalMutations(),g===null?null:g.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(O=>O.field))}(n,e,t,r):function(a,h,g){return Us(a.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):g}(n,e,t)}function Hu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ni(r,i,(a,h)=>kp(a,h))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class La extends Va{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class yo extends Va{constructor(e,t,r,i,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function Rl(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function $u(n,e,t){const r=new Map;Fe(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let i=0;i<t.length;i++){const a=n[i],h=a.transform,g=e.data.field(a.field);r.set(a.field,Rp(h,g,t[i]))}return r}function zu(n,e,t){const r=new Map;for(const i of n){const a=i.transform,h=t.data.field(i.field);r.set(i.field,Sp(a,h,e))}return r}class xp extends Va{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const a=this.mutations[i];a.key.isEqual(e.key)&&Dp(a,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ji(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ji(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Il();return this.mutations.forEach(i=>{const a=e.get(i.key),h=a.overlayedDocument;let g=this.applyToLocalView(h,a.mutatedFields);g=t.has(i.key)?null:g;const _=Sl(h,g);_!==null&&r.set(i.key,_),h.isValidDocument()||h.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Re())}isEqual(e){return this.batchId===e.batchId&&ni(this.mutations,e.mutations,(t,r)=>Hu(t,r))&&ni(this.baseMutations,e.baseMutations,(t,r)=>Hu(t,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,Ce;function Pl(n){if(n===void 0)return vn("GRPC error has no .code"),J.UNKNOWN;switch(n){case We.OK:return J.OK;case We.CANCELLED:return J.CANCELLED;case We.UNKNOWN:return J.UNKNOWN;case We.DEADLINE_EXCEEDED:return J.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return J.RESOURCE_EXHAUSTED;case We.INTERNAL:return J.INTERNAL;case We.UNAVAILABLE:return J.UNAVAILABLE;case We.UNAUTHENTICATED:return J.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return J.INVALID_ARGUMENT;case We.NOT_FOUND:return J.NOT_FOUND;case We.ALREADY_EXISTS:return J.ALREADY_EXISTS;case We.PERMISSION_DENIED:return J.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return J.FAILED_PRECONDITION;case We.ABORTED:return J.ABORTED;case We.OUT_OF_RANGE:return J.OUT_OF_RANGE;case We.UNIMPLEMENTED:return J.UNIMPLEMENTED;case We.DATA_LOSS:return J.DATA_LOSS;default:return ge(39323,{code:n})}}(Ce=We||(We={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp=new Bn([4294967295,4294967295],0);function Wu(n){const e=ol().encode(n),t=new Yc;return t.update(e),new Uint8Array(t.digest())}function Gu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Bn([t,r],0),new Bn([i,a],0)]}class Ma{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Vi(`Invalid padding: ${t}`);if(r<0)throw new Vi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Vi(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Vi(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=Bn.fromNumber(this.pe)}we(e,t,r){let i=e.add(t.multiply(Bn.fromNumber(r)));return i.compare(Lp)===1&&(i=new Bn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Wu(e),[r,i]=Gu(t);for(let a=0;a<this.hashCount;a++){const h=this.we(r,i,a);if(!this.Se(h))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),h=new Ma(a,i,t);return r.forEach(g=>h.insert(g)),h}insert(e){if(this.pe===0)return;const t=Wu(e),[r,i]=Gu(t);for(let a=0;a<this.hashCount;a++){const h=this.we(r,i,a);this.be(h)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Vi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,t,r,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Zi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new _o(de.min(),i,new He(_e),Wn(),Re())}}class Zi{constructor(e,t,r,i,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Zi(r,t,Re(),Re(),Re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t,r,i){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=i}}class kl{constructor(e,t){this.targetId=e,this.Ce=t}}class Dl{constructor(e,t,r=rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Ku{constructor(){this.Fe=0,this.Me=Qu(),this.xe=rt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Re(),t=Re(),r=Re();return this.Me.forEach((i,a)=>{switch(a){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:ge(38017,{changeType:a})}}),new Zi(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=Qu()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Fe(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class Mp{constructor(e){this.ze=e,this.je=new Map,this.He=Wn(),this.Je=Ns(),this.Ye=Ns(),this.Ze=new He(_e)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:ge(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,i)=>{this.it(i)&&t(i)})}ot(e){const t=e.targetId,r=e.Ce.count,i=this._t(t);if(i){const a=i.target;if(ha(a))if(r===0){const h=new ae(a.path);this.tt(t,h,at.newNoDocument(h,de.min()))}else Fe(r===1,20013,{expectedCount:r});else{const h=this.ut(t);if(h!==r){const g=this.ct(e),_=g?this.lt(g,e,h):1;if(_!==0){this.st(t);const E=_===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,E)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:a=0}=t;let h,g;try{h=$n(r).toUint8Array()}catch(_){if(_ instanceof cl)return ti("Decoding the base64 bloom filter in existence filter failed ("+_.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw _}try{g=new Ma(h,i,a)}catch(_){return ti(_ instanceof Vi?"BloomFilter error: ":"Applying bloom filter failed: ",_),null}return g.pe===0?null:g}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let i=0;return r.forEach(a=>{const h=this.ze.Pt(),g=`projects/${h.projectId}/databases/${h.database}/documents/${a.path.canonicalString()}`;e.mightContain(g)||(this.tt(t,a,null),i++)}),i}It(e){const t=new Map;this.je.forEach((a,h)=>{const g=this._t(h);if(g){if(a.current&&ha(g.target)){const _=new ae(g.target.path);this.Et(_).has(h)||this.dt(h,_)||this.tt(h,_,at.newNoDocument(_,e))}a.Le&&(t.set(h,a.qe()),a.Qe())}});let r=Re();this.Ye.forEach((a,h)=>{let g=!0;h.forEachWhile(_=>{const E=this._t(_);return!E||E.purpose==="TargetPurposeLimboResolution"||(g=!1,!1)}),g&&(r=r.add(a))}),this.He.forEach((a,h)=>h.setReadTime(e));const i=new _o(e,t,this.Ze,this.He,r);return this.He=Wn(),this.Je=Ns(),this.Ye=Ns(),this.Ze=new He(_e),i}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const i=this.rt(e);this.dt(e,t)?i.$e(t,1):i.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Ku,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new Qe(_e),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Qe(_e),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Ku),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Ns(){return new He(ae.comparator)}function Qu(){return new He(ae.comparator)}const Fp={asc:"ASCENDING",desc:"DESCENDING"},Up={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jp={and:"AND",or:"OR"};class Bp{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ga(n,e){return n.useProto3Json||lo(e)?e:{value:e}}function qp(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Hp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Qr(n){return Fe(!!n,49232),de.fromTimestamp(function(t){const r=Hn(t);return new Et(r.seconds,r.nanos)}(n))}function $p(n,e){return ma(n,e).canonicalString()}function ma(n,e){const t=function(i){return new je(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function xl(n){const e=je.fromString(n);return Fe(Ml(e),10190,{key:e.toString()}),e}function Go(n,e){const t=xl(e);if(t.get(1)!==n.databaseId.projectId)throw new oe(J.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new oe(J.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ae(Ol(t))}function Nl(n,e){return $p(n.databaseId,e)}function zp(n){const e=xl(n);return e.length===4?je.emptyPath():Ol(e)}function Xu(n){return new je(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ol(n){return Fe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Wp(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(E){return E==="NO_CHANGE"?0:E==="ADD"?1:E==="REMOVE"?2:E==="CURRENT"?3:E==="RESET"?4:ge(39313,{state:E})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],a=function(E,R){return E.useProto3Json?(Fe(R===void 0||typeof R=="string",58123),rt.fromBase64String(R||"")):(Fe(R===void 0||R instanceof Buffer||R instanceof Uint8Array,16193),rt.fromUint8Array(R||new Uint8Array))}(n,e.targetChange.resumeToken),h=e.targetChange.cause,g=h&&function(E){const R=E.code===void 0?J.UNKNOWN:Pl(E.code);return new oe(R,E.message||"")}(h);t=new Dl(r,i,a,g||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Go(n,r.document.name),a=Qr(r.document.updateTime),h=r.document.createTime?Qr(r.document.createTime):de.min(),g=new Xt({mapValue:{fields:r.document.fields}}),_=at.newFoundDocument(i,a,h,g),E=r.targetIds||[],R=r.removedTargetIds||[];t=new js(E,R,_.key,_)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Go(n,r.document),a=r.readTime?Qr(r.readTime):de.min(),h=at.newNoDocument(i,a),g=r.removedTargetIds||[];t=new js([],g,h.key,h)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Go(n,r.document),a=r.removedTargetIds||[];t=new js([],a,i,null)}else{if(!("filter"in e))return ge(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:a}=r,h=new Vp(i,a),g=r.targetId;t=new kl(g,h)}}return t}function Gp(n,e){return{documents:[Nl(n,e.path)]}}function Kp(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Nl(n,i);const a=function(E){if(E.length!==0)return Ll(tn.create(E,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const h=function(E){if(E.length!==0)return E.map(R=>function(L){return{field:Wr(L.field),direction:Jp(L.dir)}}(R))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const g=ga(n,e.limit);return g!==null&&(t.structuredQuery.limit=g),e.startAt&&(t.structuredQuery.startAt=function(E){return{before:E.inclusive,values:E.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(E){return{before:!E.inclusive,values:E.position}}(e.endAt)),{gt:t,parent:i}}function Qp(n){let e=zp(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Fe(r===1,65062);const R=t.from[0];R.allDescendants?i=R.collectionId:e=e.child(R.collectionId)}let a=[];t.where&&(a=function(O){const L=Vl(O);return L instanceof tn&&ml(L)?L.getFilters():[L]}(t.where));let h=[];t.orderBy&&(h=function(O){return O.map(L=>function(z){return new Qs(Gr(z.field),function(ee){switch(ee){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(z.direction))}(L))}(t.orderBy));let g=null;t.limit&&(g=function(O){let L;return L=typeof O=="object"?O.value:O,lo(L)?null:L}(t.limit));let _=null;t.startAt&&(_=function(O){const L=!!O.before,G=O.values||[];return new Ks(G,L)}(t.startAt));let E=null;return t.endAt&&(E=function(O){const L=!O.before,G=O.values||[];return new Ks(G,L)}(t.endAt)),gp(e,i,h,a,g,"F",_,E)}function Xp(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Vl(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Gr(t.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Gr(t.unaryFilter.field);return Ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Gr(t.unaryFilter.field);return Ke.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Gr(t.unaryFilter.field);return Ke.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ge(61313);default:return ge(60726)}}(n):n.fieldFilter!==void 0?function(t){return Ke.create(Gr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ge(58110);default:return ge(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return tn.create(t.compositeFilter.filters.map(r=>Vl(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ge(1026)}}(t.compositeFilter.op))}(n):ge(30097,{filter:n})}function Jp(n){return Fp[n]}function Yp(n){return Up[n]}function Zp(n){return jp[n]}function Wr(n){return{fieldPath:n.canonicalString()}}function Gr(n){return yt.fromServerFormat(n.fieldPath)}function Ll(n){return n instanceof Ke?function(t){if(t.op==="=="){if(Mu(t.value))return{unaryFilter:{field:Wr(t.field),op:"IS_NAN"}};if(Lu(t.value))return{unaryFilter:{field:Wr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Mu(t.value))return{unaryFilter:{field:Wr(t.field),op:"IS_NOT_NAN"}};if(Lu(t.value))return{unaryFilter:{field:Wr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wr(t.field),op:Yp(t.op),value:t.value}}}(n):n instanceof tn?function(t){const r=t.getFilters().map(i=>Ll(i));return r.length===1?r[0]:{compositeFilter:{op:Zp(t.op),filters:r}}}(n):ge(54877,{filter:n})}function Ml(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,t,r,i,a=de.min(),h=de.min(),g=rt.EMPTY_BYTE_STRING,_=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=g,this.expectedCount=_}withSequenceNumber(e){return new Mn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e){this.wt=e}}function tg(n){const e=Qp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?fa(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(){this.Cn=new rg}addToCollectionParentIndex(e,t){return this.Cn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(qn.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(qn.min())}updateCollectionGroup(e,t,r){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class rg{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Qe(je.comparator),a=!i.has(r);return this.index[t]=i.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Qe(je.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Fl=41943040;class Tt{static withCacheSize(e){return new Tt(e,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(Fl,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new si(0)}static lr(){return new si(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu="LruGarbageCollector",ig=1048576;function Zu([n,e],[t,r]){const i=_e(n,t);return i===0?_e(e,r):i}class sg{constructor(e){this.Er=e,this.buffer=new Qe(Zu),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Zu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class og{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){ne(Yu,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){hi(t)?ne(Yu,"Ignoring IndexedDB error during garbage collection: ",t):await uo(t)}await this.mr(3e5)})}}class ag{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return $.resolve(co.le);const r=new sg(t);return this.gr.forEachTarget(e,i=>r.Rr(i.sequenceNumber)).next(()=>this.gr.yr(e,i=>r.Rr(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Ju)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ju):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,i,a,h,g,_,E;const R=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(O=>(O>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${O}`),i=this.params.maximumSequenceNumbersToCollect):i=O,h=Date.now(),this.nthSequenceNumber(e,i))).next(O=>(r=O,g=Date.now(),this.removeTargets(e,r,t))).next(O=>(a=O,_=Date.now(),this.removeOrphanedDocuments(e,r))).next(O=>(E=Date.now(),$r()<=Ae.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-R}ms
	Determined least recently used ${i} in `+(g-h)+`ms
	Removed ${a} targets in `+(_-g)+`ms
	Removed ${O} documents in `+(E-_)+`ms
Total Duration: ${E-R}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:a,documentsRemoved:O})))}}function ug(n,e){return new ag(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(){this.changes=new _r(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?$.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&ji(r.mutation,i,Ln.empty(),Et.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Re()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Re()){const i=cr();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(a=>{let h=Oi();return a.forEach((g,_)=>{h=h.insert(g,_.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const r=cr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Re()))}populateOverlays(e,t,r){const i=[];return r.forEach(a=>{t.has(a)||i.push(a)}),this.documentOverlayCache.getOverlays(e,i).next(a=>{a.forEach((h,g)=>{t.set(h,g)})})}computeViews(e,t,r,i){let a=Wn();const h=Ui(),g=function(){return Ui()}();return t.forEach((_,E)=>{const R=r.get(E.key);i.has(E.key)&&(R===void 0||R.mutation instanceof yo)?a=a.insert(E.key,E):R!==void 0?(h.set(E.key,R.mutation.getFieldMask()),ji(R.mutation,E,R.mutation.getFieldMask(),Et.now())):h.set(E.key,Ln.empty())}),this.recalculateAndSaveOverlays(e,a).next(_=>(_.forEach((E,R)=>h.set(E,R)),t.forEach((E,R)=>{var O;return g.set(E,new lg(R,(O=h.get(E))!==null&&O!==void 0?O:null))}),g))}recalculateAndSaveOverlays(e,t){const r=Ui();let i=new He((h,g)=>h-g),a=Re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const g of h)g.keys().forEach(_=>{const E=t.get(_);if(E===null)return;let R=r.get(_)||Ln.empty();R=g.applyToLocalView(E,R),r.set(_,R);const O=(i.get(g.batchId)||Re()).add(_);i=i.insert(g.batchId,O)})}).next(()=>{const h=[],g=i.getReverseIterator();for(;g.hasNext();){const _=g.getNext(),E=_.key,R=_.value,O=Il();R.forEach(L=>{if(!a.has(L)){const G=Sl(t.get(L),r.get(L));G!==null&&O.set(L,G),a=a.add(L)}}),h.push(this.documentOverlayCache.saveOverlays(e,E,O))}return $.waitFor(h)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(h){return ae.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):mp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(a=>{const h=i-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-a.size):$.resolve(cr());let g=Hi,_=a;return h.next(E=>$.forEach(E,(R,O)=>(g<O.largestBatchId&&(g=O.largestBatchId),a.get(R)?$.resolve():this.remoteDocumentCache.getEntry(e,R).next(L=>{_=_.insert(R,L)}))).next(()=>this.populateOverlays(e,E,a)).next(()=>this.computeViews(e,_,E,Re())).next(R=>({batchId:g,changes:Ep(R)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ae(t)).next(r=>{let i=Oi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const a=t.collectionGroup;let h=Oi();return this.indexManager.getCollectionParents(e,a).next(g=>$.forEach(g,_=>{const E=function(O,L){return new fo(L,null,O.explicitOrderBy.slice(),O.filters.slice(),O.limit,O.limitType,O.startAt,O.endAt)}(t,_.child(a));return this.getDocumentsMatchingCollectionQuery(e,E,r,i).next(R=>{R.forEach((O,L)=>{h=h.insert(O,L)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,r,i){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(h=>(a=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,i))).next(h=>{a.forEach((_,E)=>{const R=E.getKey();h.get(R)===null&&(h=h.insert(R,at.newInvalidDocument(R)))});let g=Oi();return h.forEach((_,E)=>{const R=a.get(_);R!==void 0&&ji(R.mutation,E,Ln.empty(),Et.now()),go(t,E)&&(g=g.insert(_,E))}),g})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return $.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Qr(i.createTime)}}(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(i){return{name:i.name,query:tg(i.bundledQuery),readTime:Qr(i.readTime)}}(t)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(){this.overlays=new He(ae.comparator),this.Qr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const r=cr();return $.forEach(t,i=>this.getOverlay(e,i).next(a=>{a!==null&&r.set(i,a)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,a)=>{this.bt(e,t,a)}),$.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Qr.get(r);return i!==void 0&&(i.forEach(a=>this.overlays=this.overlays.remove(a)),this.Qr.delete(r)),$.resolve()}getOverlaysForCollection(e,t,r){const i=cr(),a=t.length+1,h=new ae(t.child("")),g=this.overlays.getIteratorFrom(h);for(;g.hasNext();){const _=g.getNext().value,E=_.getKey();if(!t.isPrefixOf(E.path))break;E.path.length===a&&_.largestBatchId>r&&i.set(_.getKey(),_)}return $.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let a=new He((E,R)=>E-R);const h=this.overlays.getIterator();for(;h.hasNext();){const E=h.getNext().value;if(E.getKey().getCollectionGroup()===t&&E.largestBatchId>r){let R=a.get(E.largestBatchId);R===null&&(R=cr(),a=a.insert(E.largestBatchId,R)),R.set(E.getKey(),E)}}const g=cr(),_=a.getIterator();for(;_.hasNext()&&(_.getNext().value.forEach((E,R)=>g.set(E,R)),!(g.size()>=i)););return $.resolve(g)}bt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const h=this.Qr.get(i.largestBatchId).delete(r.key);this.Qr.set(i.largestBatchId,h)}this.overlays=this.overlays.insert(r.key,new Op(t,r));let a=this.Qr.get(t);a===void 0&&(a=Re(),this.Qr.set(t,a)),this.Qr.set(t,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(){this.$r=new Qe(Ze.Ur),this.Kr=new Qe(Ze.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new Ze(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new Ze(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new ae(new je([])),r=new Ze(t,e),i=new Ze(t,e+1),a=[];return this.Kr.forEachInRange([r,i],h=>{this.zr(h),a.push(h.key)}),a}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new ae(new je([])),r=new Ze(t,e),i=new Ze(t,e+1);let a=Re();return this.Kr.forEachInRange([r,i],h=>{a=a.add(h.key)}),a}containsKey(e){const t=new Ze(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return ae.comparator(e.key,t.key)||_e(e.Zr,t.Zr)}static Wr(e,t){return _e(e.Zr,t.Zr)||ae.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new Qe(Ze.Ur)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const a=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new Np(a,t,r,i);this.mutationQueue.push(h);for(const g of i)this.Xr=this.Xr.add(new Ze(g.key,a)),this.indexManager.addToCollectionParentIndex(e,g.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ti(r),a=i<0?0:i;return $.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Kd:this.nr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ze(t,0),i=new Ze(t,Number.POSITIVE_INFINITY),a=[];return this.Xr.forEachInRange([r,i],h=>{const g=this.ei(h.Zr);a.push(g)}),$.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Qe(_e);return t.forEach(i=>{const a=new Ze(i,0),h=new Ze(i,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([a,h],g=>{r=r.add(g.Zr)})}),$.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let a=r;ae.isDocumentKey(a)||(a=a.child(""));const h=new Ze(new ae(a),0);let g=new Qe(_e);return this.Xr.forEachWhile(_=>{const E=_.key.path;return!!r.isPrefixOf(E)&&(E.length===i&&(g=g.add(_.Zr)),!0)},h),$.resolve(this.ni(g))}ni(e){const t=[];return e.forEach(r=>{const i=this.ei(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Fe(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return $.forEach(t.mutations,i=>{const a=new Ze(i.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new Ze(t,0),i=this.Xr.firstAfterOrEqual(r);return $.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e){this.ii=e,this.docs=function(){return new He(ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),a=i?i.size:0,h=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:h}),this.size+=h-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return $.resolve(r?r.document.mutableCopy():at.newInvalidDocument(t))}getEntries(e,t){let r=Wn();return t.forEach(i=>{const a=this.docs.get(i);r=r.insert(i,a?a.document.mutableCopy():at.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let a=Wn();const h=t.path,g=new ae(h.child("__id-9223372036854775808__")),_=this.docs.getIteratorFrom(g);for(;_.hasNext();){const{key:E,value:{document:R}}=_.getNext();if(!h.isPrefixOf(E.path))break;E.path.length>h.length+1||$d(Hd(R),r)<=0||(i.has(R.key)||go(t,R))&&(a=a.insert(R.key,R.mutableCopy()))}return $.resolve(a)}getAllFromCollectionGroup(e,t,r,i){ge(9500)}si(e,t){return $.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new yg(this)}getSize(e){return $.resolve(this.size)}}class yg extends cg{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Br.addEntry(e,i)):this.Br.removeEntry(r)}),$.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e){this.persistence=e,this.oi=new _r(t=>xa(t),Na),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this._i=0,this.ai=new Fa,this.targetCount=0,this.ui=si.cr()}forEachTarget(e,t){return this.oi.forEach((r,i)=>t(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),$.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new si(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.Tr(t),$.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,r){let i=0;const a=[];return this.oi.forEach((h,g)=>{g.sequenceNumber<=t&&r.get(g.targetId)===null&&(this.oi.delete(h),a.push(this.removeMatchingKeysForTargetId(e,g.targetId)),i++)}),$.waitFor(a).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return $.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),$.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const i=this.persistence.referenceDelegate,a=[];return i&&t.forEach(h=>{a.push(i.markPotentiallyOrphaned(e,h))}),$.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return $.resolve(r)}containsKey(e,t){return $.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,t){this.ci={},this.overlays={},this.li=new co(0),this.hi=!1,this.hi=!0,this.Pi=new pg,this.referenceDelegate=e(this),this.Ti=new _g(this),this.indexManager=new ng,this.remoteDocumentCache=function(i){return new mg(i)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new eg(t),this.Ei=new fg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new dg,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new gg(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){ne("MemoryPersistence","Starting transaction:",e);const i=new vg(this.li.next());return this.referenceDelegate.di(),r(i).next(a=>this.referenceDelegate.Ai(i).next(()=>a)).toPromise().then(a=>(i.raiseOnCommittedEvent(),a))}Ri(e,t){return $.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class vg extends Wd{constructor(e){super(),this.currentSequenceNumber=e}}class Ua{constructor(e){this.persistence=e,this.Vi=new Fa,this.mi=null}static fi(e){return new Ua(e)}get gi(){if(this.mi)return this.mi;throw ge(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),$.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),$.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(i=>this.gi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(a=>this.gi.add(a.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.gi,r=>{const i=ae.fromPath(r);return this.pi(e,i).next(a=>{a||t.removeEntry(i,de.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return $.or([()=>$.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class Ys{constructor(e,t){this.persistence=e,this.yi=new _r(r=>Qd(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=ug(this,t)}static fi(e,t){return new Ys(e,t)}di(){}Ai(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Sr(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return $.forEach(this.yi,(r,i)=>this.Dr(e,r,i).next(a=>a?$.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),a=i.newChangeBuffer();return i.si(e,h=>this.Dr(e,h,t).next(g=>{g||(r++,a.removeEntry(h,de.min()))})).next(()=>a.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),$.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Fs(e.data.value)),t}Dr(e,t,r){return $.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.yi.get(t);return $.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.ds=r,this.As=i}static Rs(e,t){let r=Re(),i=Re();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:i=i.add(a.doc.key)}return new ja(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return gf()?8:Gd(ut())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,i){const a={result:null};return this.ws(e,t).next(h=>{a.result=h}).next(()=>{if(!a.result)return this.Ss(e,t,i,r).next(h=>{a.result=h})}).next(()=>{if(a.result)return;const h=new Tg;return this.bs(e,t,h).next(g=>{if(a.result=g,this.fs)return this.Ds(e,t,h,g.size)})}).next(()=>a.result)}Ds(e,t,r,i){return r.documentReadCount<this.gs?($r()<=Ae.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",zr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),$.resolve()):($r()<=Ae.DEBUG&&ne("QueryEngine","Query:",zr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ps*i?($r()<=Ae.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",zr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Jt(t))):$.resolve())}ws(e,t){if(Bu(t))return $.resolve(null);let r=Jt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=fa(t,null,"F"),r=Jt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(a=>{const h=Re(...a);return this.ys.getDocuments(e,h).next(g=>this.indexManager.getMinOffset(e,r).next(_=>{const E=this.vs(t,g);return this.Cs(t,E,h,_.readTime)?this.ws(e,fa(t,null,"F")):this.Fs(e,E,t,_)}))})))}Ss(e,t,r,i){return Bu(t)||i.isEqual(de.min())?$.resolve(null):this.ys.getDocuments(e,r).next(a=>{const h=this.vs(t,a);return this.Cs(t,h,r,i)?$.resolve(null):($r()<=Ae.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),zr(t)),this.Fs(e,h,t,qd(i,Hi)).next(g=>g))})}vs(e,t){let r=new Qe(El(e));return t.forEach((i,a)=>{go(e,a)&&(r=r.add(a))}),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(i)>0)}bs(e,t,r){return $r()<=Ae.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",zr(t)),this.ys.getDocumentsMatchingQuery(e,t,qn.min(),r)}Fs(e,t,r,i){return this.ys.getDocumentsMatchingQuery(e,r,i).next(a=>(t.forEach(h=>{a=a.insert(h.key,h)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="LocalStore",wg=3e8;class Ig{constructor(e,t,r,i){this.persistence=e,this.Ms=t,this.serializer=i,this.xs=new He(_e),this.Os=new _r(a=>xa(a),Na),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hg(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function Ag(n,e,t,r){return new Ig(n,e,t,r)}async function jl(n,e){const t=Se(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(a=>(i=a,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(a=>{const h=[],g=[];let _=Re();for(const E of i){h.push(E.batchId);for(const R of E.mutations)_=_.add(R.key)}for(const E of a){g.push(E.batchId);for(const R of E.mutations)_=_.add(R.key)}return t.localDocuments.getDocuments(r,_).next(E=>({ks:E,removedBatchIds:h,addedBatchIds:g}))})})}function Bl(n){const e=Se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function bg(n,e){const t=Se(n),r=e.snapshotVersion;let i=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const h=t.Bs.newChangeBuffer({trackRemovals:!0});i=t.xs;const g=[];e.targetChanges.forEach((R,O)=>{const L=i.get(O);if(!L)return;g.push(t.Ti.removeMatchingKeys(a,R.removedDocuments,O).next(()=>t.Ti.addMatchingKeys(a,R.addedDocuments,O)));let G=L.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(O)!==null?G=G.withResumeToken(rt.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):R.resumeToken.approximateByteSize()>0&&(G=G.withResumeToken(R.resumeToken,r)),i=i.insert(O,G),function(Q,ee,te){return Q.resumeToken.approximateByteSize()===0||ee.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=wg?!0:te.addedDocuments.size+te.modifiedDocuments.size+te.removedDocuments.size>0}(L,G,R)&&g.push(t.Ti.updateTargetData(a,G))});let _=Wn(),E=Re();if(e.documentUpdates.forEach(R=>{e.resolvedLimboDocuments.has(R)&&g.push(t.persistence.referenceDelegate.updateLimboDocument(a,R))}),g.push(Cg(a,h,e.documentUpdates).next(R=>{_=R.qs,E=R.Qs})),!r.isEqual(de.min())){const R=t.Ti.getLastRemoteSnapshotVersion(a).next(O=>t.Ti.setTargetsMetadata(a,a.currentSequenceNumber,r));g.push(R)}return $.waitFor(g).next(()=>h.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,_,E)).next(()=>_)}).then(a=>(t.xs=i,a))}function Cg(n,e,t){let r=Re(),i=Re();return t.forEach(a=>r=r.add(a)),e.getEntries(n,r).next(a=>{let h=Wn();return t.forEach((g,_)=>{const E=a.get(g);_.isFoundDocument()!==E.isFoundDocument()&&(i=i.add(g)),_.isNoDocument()&&_.version.isEqual(de.min())?(e.removeEntry(g,_.readTime),h=h.insert(g,_)):!E.isValidDocument()||_.version.compareTo(E.version)>0||_.version.compareTo(E.version)===0&&E.hasPendingWrites?(e.addEntry(_),h=h.insert(g,_)):ne(Ba,"Ignoring outdated watch update for ",g,". Current version:",E.version," Watch version:",_.version)}),{qs:h,Qs:i}})}function Sg(n,e){const t=Se(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ti.getTargetData(r,e).next(a=>a?(i=a,$.resolve(i)):t.Ti.allocateTargetId(r).next(h=>(i=new Mn(e,h,"TargetPurposeListen",r.currentSequenceNumber),t.Ti.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.xs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.xs=t.xs.insert(r.targetId,r),t.Os.set(e,r.targetId)),r})}async function ya(n,e,t){const r=Se(n),i=r.xs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,h=>r.persistence.referenceDelegate.removeTarget(h,i))}catch(h){if(!hi(h))throw h;ne(Ba,`Failed to update sequence numbers for target ${e}: ${h}`)}r.xs=r.xs.remove(e),r.Os.delete(i.target)}function ec(n,e,t){const r=Se(n);let i=de.min(),a=Re();return r.persistence.runTransaction("Execute query","readwrite",h=>function(_,E,R){const O=Se(_),L=O.Os.get(R);return L!==void 0?$.resolve(O.xs.get(L)):O.Ti.getTargetData(E,R)}(r,h,Jt(e)).next(g=>{if(g)return i=g.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(h,g.targetId).next(_=>{a=_})}).next(()=>r.Ms.getDocumentsMatchingQuery(h,e,t?i:de.min(),t?a:Re())).next(g=>(Rg(r,_p(e),g),{documents:g,$s:a})))}function Rg(n,e,t){let r=n.Ns.get(e)||de.min();t.forEach((i,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)}),n.Ns.set(e,r)}class tc{constructor(){this.activeTargetIds=Ap()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Pg{constructor(){this.xo=new tc,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new tc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="ConnectivityMonitor";class rc{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){ne(nc,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){ne(nc,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os=null;function _a(){return Os===null?Os=function(){return 268435456+Math.round(2147483648*Math.random())}():Os++,"0x"+Os.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko="RestConnection",Dg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class xg{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${i}`,this.Go=this.databaseId.database===Gs?`project_id=${r}`:`project_id=${r}&database_id=${i}`}zo(e,t,r,i,a){const h=_a(),g=this.jo(e,t.toUriEncodedString());ne(Ko,`Sending RPC '${e}' ${h}:`,g,r);const _={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(_,i,a);const{host:E}=new URL(g),R=Qi(E);return this.Jo(e,g,_,r,R).then(O=>(ne(Ko,`Received RPC '${e}' ${h}: `,O),O),O=>{throw ti(Ko,`RPC '${e}' ${h} failed with error: `,O,"url: ",g,"request:",r),O})}Yo(e,t,r,i,a,h){return this.zo(e,t,r,i,a)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+li}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,a)=>e[a]=i),r&&r.headers.forEach((i,a)=>e[a]=i)}jo(e,t){const r=Dg[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection";class Og extends xg{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,a){const h=_a();return new Promise((g,_)=>{const E=new Zc;E.setWithCredentials(!0),E.listenOnce(el.COMPLETE,()=>{try{switch(E.getLastErrorCode()){case Ms.NO_ERROR:const O=E.getResponseJson();ne(st,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(O)),g(O);break;case Ms.TIMEOUT:ne(st,`RPC '${e}' ${h} timed out`),_(new oe(J.DEADLINE_EXCEEDED,"Request time out"));break;case Ms.HTTP_ERROR:const L=E.getStatus();if(ne(st,`RPC '${e}' ${h} failed with status:`,L,"response text:",E.getResponseText()),L>0){let G=E.getResponseJson();Array.isArray(G)&&(G=G[0]);const z=G==null?void 0:G.error;if(z&&z.status&&z.message){const Q=function(te){const we=te.toLowerCase().replace(/_/g,"-");return Object.values(J).indexOf(we)>=0?we:J.UNKNOWN}(z.status);_(new oe(Q,z.message))}else _(new oe(J.UNKNOWN,"Server responded with status "+E.getStatus()))}else _(new oe(J.UNAVAILABLE,"Connection failed."));break;default:ge(9055,{l_:e,streamId:h,h_:E.getLastErrorCode(),P_:E.getLastError()})}}finally{ne(st,`RPC '${e}' ${h} completed.`)}});const R=JSON.stringify(i);ne(st,`RPC '${e}' ${h} sending request:`,i),E.send(t,"POST",R,r,15)})}T_(e,t,r){const i=_a(),a=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=rl(),g=nl(),_={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},E=this.longPollingOptions.timeoutSeconds;E!==void 0&&(_.longPollingTimeout=Math.round(1e3*E)),this.useFetchStreams&&(_.useFetchStreams=!0),this.Ho(_.initMessageHeaders,t,r),_.encodeInitMessageHeaders=!0;const R=a.join("");ne(st,`Creating RPC '${e}' stream ${i}: ${R}`,_);const O=h.createWebChannel(R,_);let L=!1,G=!1;const z=new Ng({Zo:ee=>{G?ne(st,`Not sending because RPC '${e}' stream ${i} is closed:`,ee):(L||(ne(st,`Opening RPC '${e}' stream ${i} transport.`),O.open(),L=!0),ne(st,`RPC '${e}' stream ${i} sending:`,ee),O.send(ee))},Xo:()=>O.close()}),Q=(ee,te,we)=>{ee.listen(te,be=>{try{we(be)}catch(De){setTimeout(()=>{throw De},0)}})};return Q(O,Ni.EventType.OPEN,()=>{G||(ne(st,`RPC '${e}' stream ${i} transport opened.`),z.__())}),Q(O,Ni.EventType.CLOSE,()=>{G||(G=!0,ne(st,`RPC '${e}' stream ${i} transport closed`),z.u_())}),Q(O,Ni.EventType.ERROR,ee=>{G||(G=!0,ti(st,`RPC '${e}' stream ${i} transport errored. Name:`,ee.name,"Message:",ee.message),z.u_(new oe(J.UNAVAILABLE,"The operation could not be completed")))}),Q(O,Ni.EventType.MESSAGE,ee=>{var te;if(!G){const we=ee.data[0];Fe(!!we,16349);const be=we,De=(be==null?void 0:be.error)||((te=be[0])===null||te===void 0?void 0:te.error);if(De){ne(st,`RPC '${e}' stream ${i} received error:`,De);const ct=De.status;let Me=function(b){const D=We[b];if(D!==void 0)return Pl(D)}(ct),c=De.message;Me===void 0&&(Me=J.INTERNAL,c="Unknown error status: "+ct+" with message "+De.message),G=!0,z.u_(new oe(Me,c)),O.close()}else ne(st,`RPC '${e}' stream ${i} received:`,we),z.c_(we)}}),Q(g,tl.STAT_EVENT,ee=>{ee.stat===ia.PROXY?ne(st,`RPC '${e}' stream ${i} detected buffering proxy`):ee.stat===ia.NOPROXY&&ne(st,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{z.a_()},0),z}}function Qo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(n){return new Bp(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,t,r=1e3,i=1.5,a=6e4){this.xi=e,this.timerId=t,this.I_=r,this.E_=i,this.d_=a,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),i=Math.max(0,t-r);i>0&&ne("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,i,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic="PersistentStream";class Vg{constructor(e,t,r,i,a,h,g,_){this.xi=e,this.y_=r,this.w_=i,this.connection=a,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=g,this.listener=_,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new Hl(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===J.RESOURCE_EXHAUSTED?(vn(t.toString()),vn("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===J.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.S_===t&&this.K_(r,i)},r=>{e(()=>{const i=new oe(J.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(i)})})}K_(e,t){const r=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(i=>{r(()=>this.W_(i))}),this.stream.onMessage(i=>{r(()=>++this.v_==1?this.z_(i):this.onNext(i))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return ne(ic,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(ne(ic,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Lg extends Vg{constructor(e,t,r,i,a,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,h),this.serializer=a}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=Wp(this.serializer,e),r=function(a){if(!("targetChange"in a))return de.min();const h=a.targetChange;return h.targetIds&&h.targetIds.length?de.min():h.readTime?Qr(h.readTime):de.min()}(e);return this.listener.j_(t,r)}H_(e){const t={};t.database=Xu(this.serializer),t.addTarget=function(a,h){let g;const _=h.target;if(g=ha(_)?{documents:Gp(a,_)}:{query:Kp(a,_).gt},g.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){g.resumeToken=Hp(a,h.resumeToken);const E=ga(a,h.expectedCount);E!==null&&(g.expectedCount=E)}else if(h.snapshotVersion.compareTo(de.min())>0){g.readTime=qp(a,h.snapshotVersion.toTimestamp());const E=ga(a,h.expectedCount);E!==null&&(g.expectedCount=E)}return g}(this.serializer,e);const r=Xp(this.serializer,e);r&&(t.labels=r),this.L_(t)}J_(e){const t={};t.database=Xu(this.serializer),t.removeTarget=e,this.L_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{}class Fg extends Mg{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.na=!1}ra(){if(this.na)throw new oe(J.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,h])=>this.connection.zo(e,ma(t,r),i,a,h)).catch(a=>{throw a.name==="FirebaseError"?(a.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new oe(J.UNKNOWN,a.toString())})}Yo(e,t,r,i,a){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,g])=>this.connection.Yo(e,ma(t,r),i,h,g,a)).catch(h=>{throw h.name==="FirebaseError"?(h.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new oe(J.UNKNOWN,h.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class Ug{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(vn(t),this.oa=!1):ne("OnlineStateTracker",t)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi="RemoteStore";class jg{constructor(e,t,r,i,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=a,this.Ea.No(h=>{r.enqueueAndForget(async()=>{ts(this)&&(ne(oi,"Restarting streams for network reachability change."),await async function(_){const E=Se(_);E.Ta.add(4),await es(E),E.da.set("Unknown"),E.Ta.delete(4),await vo(E)}(this))})}),this.da=new Ug(r,i)}}async function vo(n){if(ts(n))for(const e of n.Ia)await e(!0)}async function es(n){for(const e of n.Ia)await e(!1)}function $l(n,e){const t=Se(n);t.Pa.has(e.targetId)||(t.Pa.set(e.targetId,e),za(t)?$a(t):fi(t).M_()&&Ha(t,e))}function qa(n,e){const t=Se(n),r=fi(t);t.Pa.delete(e),r.M_()&&zl(t,e),t.Pa.size===0&&(r.M_()?r.N_():ts(t)&&t.da.set("Unknown"))}function Ha(n,e){if(n.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}fi(n).H_(e)}function zl(n,e){n.Aa.Ke(e),fi(n).J_(e)}function $a(n){n.Aa=new Mp({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Pa.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),fi(n).start(),n.da._a()}function za(n){return ts(n)&&!fi(n).F_()&&n.Pa.size>0}function ts(n){return Se(n).Ta.size===0}function Wl(n){n.Aa=void 0}async function Bg(n){n.da.set("Online")}async function qg(n){n.Pa.forEach((e,t)=>{Ha(n,e)})}async function Hg(n,e){Wl(n),za(n)?(n.da.ca(e),$a(n)):n.da.set("Unknown")}async function $g(n,e,t){if(n.da.set("Online"),e instanceof Dl&&e.state===2&&e.cause)try{await async function(i,a){const h=a.cause;for(const g of a.targetIds)i.Pa.has(g)&&(await i.remoteSyncer.rejectListen(g,h),i.Pa.delete(g),i.Aa.removeTarget(g))}(n,e)}catch(r){ne(oi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await sc(n,r)}else if(e instanceof js?n.Aa.Xe(e):e instanceof kl?n.Aa.ot(e):n.Aa.nt(e),!t.isEqual(de.min()))try{const r=await Bl(n.localStore);t.compareTo(r)>=0&&await function(a,h){const g=a.Aa.It(h);return g.targetChanges.forEach((_,E)=>{if(_.resumeToken.approximateByteSize()>0){const R=a.Pa.get(E);R&&a.Pa.set(E,R.withResumeToken(_.resumeToken,h))}}),g.targetMismatches.forEach((_,E)=>{const R=a.Pa.get(_);if(!R)return;a.Pa.set(_,R.withResumeToken(rt.EMPTY_BYTE_STRING,R.snapshotVersion)),zl(a,_);const O=new Mn(R.target,_,E,R.sequenceNumber);Ha(a,O)}),a.remoteSyncer.applyRemoteEvent(g)}(n,t)}catch(r){ne(oi,"Failed to raise snapshot:",r),await sc(n,r)}}async function sc(n,e,t){if(!hi(e))throw e;n.Ta.add(1),await es(n),n.da.set("Offline"),t||(t=()=>Bl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ne(oi,"Retrying IndexedDB access"),await t(),n.Ta.delete(1),await vo(n)})}async function oc(n,e){const t=Se(n);t.asyncQueue.verifyOperationInProgress(),ne(oi,"RemoteStore received new credentials");const r=ts(t);t.Ta.add(3),await es(t),r&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await vo(t)}async function zg(n,e){const t=Se(n);e?(t.Ta.delete(2),await vo(t)):e||(t.Ta.add(2),await es(t),t.da.set("Unknown"))}function fi(n){return n.Ra||(n.Ra=function(t,r,i){const a=Se(t);return a.ra(),new Lg(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)}(n.datastore,n.asyncQueue,{e_:Bg.bind(null,n),n_:qg.bind(null,n),i_:Hg.bind(null,n),j_:$g.bind(null,n)}),n.Ia.push(async e=>{e?(n.Ra.O_(),za(n)?$a(n):n.da.set("Unknown")):(await n.Ra.stop(),Wl(n))})),n.Ra}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,t,r,i,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=a,this.deferred=new lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,a){const h=Date.now()+r,g=new Wa(e,t,h,i,a);return g.start(r),g}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gl(n,e){if(vn("AsyncQueue",`${e}: ${n}`),hi(n))return new oe(J.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{static emptySet(e){return new Xr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ae.comparator(t.key,r.key):(t,r)=>ae.comparator(t.key,r.key),this.keyedMap=Oi(),this.sortedSet=new He(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Xr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Xr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(){this.ma=new He(ae.comparator)}track(e){const t=e.doc.key,r=this.ma.get(t);r?e.type!==0&&r.type===3?this.ma=this.ma.insert(t,e):e.type===3&&r.type!==1?this.ma=this.ma.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ma=this.ma.remove(t):e.type===1&&r.type===2?this.ma=this.ma.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):ge(63341,{Vt:e,fa:r}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal((t,r)=>{e.push(r)}),e}}class ai{constructor(e,t,r,i,a,h,g,_,E){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=a,this.fromCache=h,this.syncStateChanged=g,this.excludesMetadataChanges=_,this.hasCachedResults=E}static fromInitialDocuments(e,t,r,i,a){const h=[];return t.forEach(g=>{h.push({type:0,doc:g})}),new ai(e,t,Xr.emptySet(t),h,r,i,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&po(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class Gg{constructor(){this.queries=uc(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,r){const i=Se(t),a=i.queries;i.queries=uc(),a.forEach((h,g)=>{for(const _ of g.ya)_.onError(r)})})(this,new oe(J.ABORTED,"Firestore shutting down"))}}function uc(){return new _r(n=>Tl(n),po)}async function Kg(n,e){const t=Se(n);let r=3;const i=e.query;let a=t.queries.get(i);a?!a.wa()&&e.Sa()&&(r=2):(a=new Wg,r=e.Sa()?0:1);try{switch(r){case 0:a.pa=await t.onListen(i,!0);break;case 1:a.pa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(h){const g=Gl(h,`Initialization of query '${zr(e.query)}' failed`);return void e.onError(g)}t.queries.set(i,a),a.ya.push(e),e.Da(t.onlineState),a.pa&&e.va(a.pa)&&Ga(t)}async function Qg(n,e){const t=Se(n),r=e.query;let i=3;const a=t.queries.get(r);if(a){const h=a.ya.indexOf(e);h>=0&&(a.ya.splice(h,1),a.ya.length===0?i=e.Sa()?0:1:!a.wa()&&e.Sa()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Xg(n,e){const t=Se(n);let r=!1;for(const i of e){const a=i.query,h=t.queries.get(a);if(h){for(const g of h.ya)g.va(i)&&(r=!0);h.pa=i}}r&&Ga(t)}function Jg(n,e,t){const r=Se(n),i=r.queries.get(e);if(i)for(const a of i.ya)a.onError(t);r.queries.delete(e)}function Ga(n){n.ba.forEach(e=>{e.next()})}var va,cc;(cc=va||(va={})).Ca="default",cc.Cache="cache";class Yg{constructor(e,t,r){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=r||{}}va(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ai(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache||!this.Sa())return!0;const r=t!=="Offline";return(!this.options.La||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ba(e){e=ai.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==va.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e){this.key=e}}class Ql{constructor(e){this.key=e}}class Zg{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=Re(),this.mutatedKeys=Re(),this.Ha=El(e),this.Ja=new Xr(this.Ha)}get Ya(){return this.Ga}Za(e,t){const r=t?t.Xa:new ac,i=t?t.Ja:this.Ja;let a=t?t.mutatedKeys:this.mutatedKeys,h=i,g=!1;const _=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,E=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((R,O)=>{const L=i.get(R),G=go(this.query,O)?O:null,z=!!L&&this.mutatedKeys.has(L.key),Q=!!G&&(G.hasLocalMutations||this.mutatedKeys.has(G.key)&&G.hasCommittedMutations);let ee=!1;L&&G?L.data.isEqual(G.data)?z!==Q&&(r.track({type:3,doc:G}),ee=!0):this.eu(L,G)||(r.track({type:2,doc:G}),ee=!0,(_&&this.Ha(G,_)>0||E&&this.Ha(G,E)<0)&&(g=!0)):!L&&G?(r.track({type:0,doc:G}),ee=!0):L&&!G&&(r.track({type:1,doc:L}),ee=!0,(_||E)&&(g=!0)),ee&&(G?(h=h.add(G),a=Q?a.add(R):a.delete(R)):(h=h.delete(R),a=a.delete(R)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const R=this.query.limitType==="F"?h.last():h.first();h=h.delete(R.key),a=a.delete(R.key),r.track({type:1,doc:R})}return{Ja:h,Xa:r,Cs:g,mutatedKeys:a}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const a=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const h=e.Xa.ga();h.sort((R,O)=>function(G,z){const Q=ee=>{switch(ee){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge(20277,{Vt:ee})}};return Q(G)-Q(z)}(R.type,O.type)||this.Ha(R.doc,O.doc)),this.tu(r),i=i!=null&&i;const g=t&&!i?this.nu():[],_=this.ja.size===0&&this.current&&!i?1:0,E=_!==this.za;return this.za=_,h.length!==0||E?{snapshot:new ai(this.query,e.Ja,a,h,e.mutatedKeys,_===0,E,!1,!!r&&r.resumeToken.approximateByteSize()>0),ru:g}:{ru:g}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new ac,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(t=>this.Ga=this.Ga.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ga=this.Ga.delete(t)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=Re(),this.Ja.forEach(r=>{this.iu(r.key)&&(this.ja=this.ja.add(r.key))});const t=[];return e.forEach(r=>{this.ja.has(r)||t.push(new Ql(r))}),this.ja.forEach(r=>{e.has(r)||t.push(new Kl(r))}),t}su(e){this.Ga=e.$s,this.ja=Re();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return ai.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const Ka="SyncEngine";class em{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class tm{constructor(e){this.key=e,this._u=!1}}class nm{constructor(e,t,r,i,a,h){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=a,this.maxConcurrentLimboResolutions=h,this.au={},this.uu=new _r(g=>Tl(g),po),this.cu=new Map,this.lu=new Set,this.hu=new He(ae.comparator),this.Pu=new Map,this.Tu=new Fa,this.Iu={},this.Eu=new Map,this.du=si.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function rm(n,e,t=!0){const r=eh(n);let i;const a=r.uu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.ou()):i=await Xl(r,e,t,!0),i}async function im(n,e){const t=eh(n);await Xl(t,e,!0,!1)}async function Xl(n,e,t,r){const i=await Sg(n.localStore,Jt(e)),a=i.targetId,h=n.sharedClientState.addLocalQueryTarget(a,t);let g;return r&&(g=await sm(n,e,a,h==="current",i.resumeToken)),n.isPrimaryClient&&t&&$l(n.remoteStore,i),g}async function sm(n,e,t,r,i){n.Ru=(O,L,G)=>async function(Q,ee,te,we){let be=ee.view.Za(te);be.Cs&&(be=await ec(Q.localStore,ee.query,!1).then(({documents:c})=>ee.view.Za(c,be)));const De=we&&we.targetChanges.get(ee.targetId),ct=we&&we.targetMismatches.get(ee.targetId)!=null,Me=ee.view.applyChanges(be,Q.isPrimaryClient,De,ct);return hc(Q,ee.targetId,Me.ru),Me.snapshot}(n,O,L,G);const a=await ec(n.localStore,e,!0),h=new Zg(e,a.$s),g=h.Za(a.documents),_=Zi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),E=h.applyChanges(g,n.isPrimaryClient,_);hc(n,t,E.ru);const R=new em(e,t,h);return n.uu.set(e,R),n.cu.has(t)?n.cu.get(t).push(e):n.cu.set(t,[e]),E.snapshot}async function om(n,e,t){const r=Se(n),i=r.uu.get(e),a=r.cu.get(i.targetId);if(a.length>1)return r.cu.set(i.targetId,a.filter(h=>!po(h,e))),void r.uu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ya(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&qa(r.remoteStore,i.targetId),Ta(r,i.targetId)}).catch(uo)):(Ta(r,i.targetId),await ya(r.localStore,i.targetId,!0))}async function am(n,e){const t=Se(n),r=t.uu.get(e),i=t.cu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),qa(t.remoteStore,r.targetId))}async function Jl(n,e){const t=Se(n);try{const r=await bg(t.localStore,e);e.targetChanges.forEach((i,a)=>{const h=t.Pu.get(a);h&&(Fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?h._u=!0:i.modifiedDocuments.size>0?Fe(h._u,14607):i.removedDocuments.size>0&&(Fe(h._u,42227),h._u=!1))}),await Zl(t,r,e)}catch(r){await uo(r)}}function lc(n,e,t){const r=Se(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.uu.forEach((a,h)=>{const g=h.view.Da(e);g.snapshot&&i.push(g.snapshot)}),function(h,g){const _=Se(h);_.onlineState=g;let E=!1;_.queries.forEach((R,O)=>{for(const L of O.ya)L.Da(g)&&(E=!0)}),E&&Ga(_)}(r.eventManager,e),i.length&&r.au.j_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function um(n,e,t){const r=Se(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Pu.get(e),a=i&&i.key;if(a){let h=new He(ae.comparator);h=h.insert(a,at.newNoDocument(a,de.min()));const g=Re().add(a),_=new _o(de.min(),new Map,new He(_e),h,g);await Jl(r,_),r.hu=r.hu.remove(a),r.Pu.delete(e),Qa(r)}else await ya(r.localStore,e,!1).then(()=>Ta(r,e,t)).catch(uo)}function Ta(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.cu.get(e))n.uu.delete(r),t&&n.au.Vu(r,t);n.cu.delete(e),n.isPrimaryClient&&n.Tu.Hr(e).forEach(r=>{n.Tu.containsKey(r)||Yl(n,r)})}function Yl(n,e){n.lu.delete(e.path.canonicalString());const t=n.hu.get(e);t!==null&&(qa(n.remoteStore,t),n.hu=n.hu.remove(e),n.Pu.delete(t),Qa(n))}function hc(n,e,t){for(const r of t)r instanceof Kl?(n.Tu.addReference(r.key,e),cm(n,r)):r instanceof Ql?(ne(Ka,"Document no longer in limbo: "+r.key),n.Tu.removeReference(r.key,e),n.Tu.containsKey(r.key)||Yl(n,r.key)):ge(19791,{mu:r})}function cm(n,e){const t=e.key,r=t.path.canonicalString();n.hu.get(t)||n.lu.has(r)||(ne(Ka,"New document in limbo: "+t),n.lu.add(r),Qa(n))}function Qa(n){for(;n.lu.size>0&&n.hu.size<n.maxConcurrentLimboResolutions;){const e=n.lu.values().next().value;n.lu.delete(e);const t=new ae(je.fromString(e)),r=n.du.next();n.Pu.set(r,new tm(t)),n.hu=n.hu.insert(t,r),$l(n.remoteStore,new Mn(Jt(Oa(t.path)),r,"TargetPurposeLimboResolution",co.le))}}async function Zl(n,e,t){const r=Se(n),i=[],a=[],h=[];r.uu.isEmpty()||(r.uu.forEach((g,_)=>{h.push(r.Ru(_,e,t).then(E=>{var R;if((E||t)&&r.isPrimaryClient){const O=E?!E.fromCache:(R=t==null?void 0:t.targetChanges.get(_.targetId))===null||R===void 0?void 0:R.current;r.sharedClientState.updateQueryState(_.targetId,O?"current":"not-current")}if(E){i.push(E);const O=ja.Rs(_.targetId,E);a.push(O)}}))}),await Promise.all(h),r.au.j_(i),await async function(_,E){const R=Se(_);try{await R.persistence.runTransaction("notifyLocalViewChanges","readwrite",O=>$.forEach(E,L=>$.forEach(L.ds,G=>R.persistence.referenceDelegate.addReference(O,L.targetId,G)).next(()=>$.forEach(L.As,G=>R.persistence.referenceDelegate.removeReference(O,L.targetId,G)))))}catch(O){if(!hi(O))throw O;ne(Ba,"Failed to update sequence numbers: "+O)}for(const O of E){const L=O.targetId;if(!O.fromCache){const G=R.xs.get(L),z=G.snapshotVersion,Q=G.withLastLimboFreeSnapshotVersion(z);R.xs=R.xs.insert(L,Q)}}}(r.localStore,a))}async function lm(n,e){const t=Se(n);if(!t.currentUser.isEqual(e)){ne(Ka,"User change. New user:",e.toKey());const r=await jl(t.localStore,e);t.currentUser=e,function(a,h){a.Eu.forEach(g=>{g.forEach(_=>{_.reject(new oe(J.CANCELLED,h))})}),a.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zl(t,r.ks)}}function hm(n,e){const t=Se(n),r=t.Pu.get(e);if(r&&r._u)return Re().add(r.key);{let i=Re();const a=t.cu.get(e);if(!a)return i;for(const h of a){const g=t.uu.get(h);i=i.unionWith(g.view.Ya)}return i}}function eh(n){const e=Se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Jl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hm.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=um.bind(null,e),e.au.j_=Xg.bind(null,e.eventManager),e.au.Vu=Jg.bind(null,e.eventManager),e}class Zs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ql(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return Ag(this.persistence,new Eg,e.initialUser,this.serializer)}yu(e){return new Ul(Ua.fi,this.serializer)}pu(e){return new Pg}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zs.provider={build:()=>new Zs};class fm extends Zs{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){Fe(this.persistence.referenceDelegate instanceof Ys,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new og(r,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new Ul(r=>Ys.fi(r,t),this.serializer)}}class Ea{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lm.bind(null,this.syncEngine),await zg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Gg}()}createDatastore(e){const t=ql(e.databaseInfo.databaseId),r=function(a){return new Og(a)}(e.databaseInfo);return function(a,h,g,_){return new Fg(a,h,g,_)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,a,h,g){return new jg(r,i,a,h,g)}(this.localStore,this.datastore,e.asyncQueue,t=>lc(this.syncEngine,t,0),function(){return rc.C()?new rc:new kg}())}createSyncEngine(e,t){return function(i,a,h,g,_,E,R){const O=new nm(i,a,h,g,_,E);return R&&(O.Au=!0),O}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const a=Se(i);ne(oi,"RemoteStore shutting down."),a.Ta.add(5),await es(a),a.Ea.shutdown(),a.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ea.provider={build:()=>new Ea};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):vn("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="FirestoreClient";class pm{constructor(e,t,r,i,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ot.UNAUTHENTICATED,this.clientId=al.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,async h=>{ne(Gn,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(r,h=>(ne(Gn,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Gl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Xo(n,e){n.asyncQueue.verifyOperationInProgress(),ne(Gn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await jl(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function fc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await gm(n);ne(Gn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>oc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>oc(e.remoteStore,i)),n._onlineComponents=e}async function gm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ne(Gn,"Using user provided OfflineComponentProvider");try{await Xo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===J.FAILED_PRECONDITION||i.code===J.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;ti("Error using user provided cache. Falling back to memory cache: "+t),await Xo(n,new Zs)}}else ne(Gn,"Using default OfflineComponentProvider"),await Xo(n,new fm(void 0));return n._offlineComponents}async function mm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ne(Gn,"Using user provided OnlineComponentProvider"),await fc(n,n._uninitializedComponentsProvider._online)):(ne(Gn,"Using default OnlineComponentProvider"),await fc(n,new Ea))),n._onlineComponents}async function ym(n){const e=await mm(n),t=e.eventManager;return t.onListen=rm.bind(null,e.syncEngine),t.onUnlisten=om.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=im.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=am.bind(null,e.syncEngine),t}function _m(n,e,t={}){const r=new lr;return n.asyncQueue.enqueueAndForget(async()=>function(a,h,g,_,E){const R=new dm({next:L=>{R.Cu(),h.enqueueAndForget(()=>Qg(a,O));const G=L.docs.has(g);!G&&L.fromCache?E.reject(new oe(J.UNAVAILABLE,"Failed to get document because the client is offline.")):G&&L.fromCache&&_&&_.source==="server"?E.reject(new oe(J.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):E.resolve(L)},error:L=>E.reject(L)}),O=new Yg(Oa(g.path),R,{includeMetadataChanges:!0,La:!0});return Kg(a,O)}(await ym(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(n,e,t){if(!t)throw new oe(J.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Tm(n,e,t,r){if(e===!0&&r===!0)throw new oe(J.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function pc(n){if(!ae.isDocumentKey(n))throw new oe(J.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Em(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ge(12329,{type:typeof n})}function wa(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new oe(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Em(n);throw new oe(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh="firestore.googleapis.com",gc=!0;class mc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=nh,this.ssl=gc}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:gc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Fl;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ig)throw new oe(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Tm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=th((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new oe(J.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new oe(J.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new oe(J.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xa{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Nd;switch(r.type){case"firstParty":return new Md(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new oe(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=dc.get(t);r&&(ne("ComponentProvider","Removing Datastore"),dc.delete(t),r.terminate())}(this),Promise.resolve()}}function wm(n,e,t,r={}){var i;n=wa(n,Xa);const a=Qi(e),h=n._getSettings(),g=Object.assign(Object.assign({},h),{emulatorOptions:n._getEmulatorOptions()}),_=`${e}:${t}`;a&&($c(`https://${_}`),zc("Firestore",!0)),h.host!==nh&&h.host!==_&&ti("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const E=Object.assign(Object.assign({},h),{host:_,ssl:a,emulatorOptions:r});if(!dr(E,g)&&(n._setSettings(E),r.mockUserToken)){let R,O;if(typeof r.mockUserToken=="string")R=r.mockUserToken,O=ot.MOCK_USER;else{R=of(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const L=r.mockUserToken.sub||r.mockUserToken.user_id;if(!L)throw new oe(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");O=new ot(L)}n._authCredentials=new Od(new sl(R,O))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ja(this.firestore,e,this._query)}}class yn{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yn(this.firestore,e,this._key)}}class Gi extends Ja{constructor(e,t,r){super(e,t,Oa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yn(this.firestore,null,new ae(e))}withConverter(e){return new Gi(this.firestore,e,this._path)}}function Im(n,e,...t){if(n=yr(n),arguments.length===1&&(e=al.newId()),vm("doc","path",e),n instanceof Xa){const r=je.fromString(e,...t);return pc(r),new yn(n,null,new ae(r))}{if(!(n instanceof yn||n instanceof Gi))throw new oe(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(je.fromString(e,...t));return pc(r),new yn(n.firestore,n instanceof Gi?n.converter:null,new ae(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc="AsyncQueue";class _c{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new Hl(this,"async_queue_retry"),this.ec=()=>{const r=Qo();r&&ne(yc,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const t=Qo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=Qo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new lr;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!hi(e))throw e;ne(yc,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,vn("INTERNAL UNHANDLED ERROR: ",vc(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=t,t}enqueueAfterDelay(e,t,r){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const i=Wa.createAndSchedule(this,e,t,r,a=>this.oc(a));return this.Hu.push(i),i}nc(){this.Ju&&ge(47125,{_c:vc(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function vc(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class rh extends Xa{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new _c,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _c(e),this._firestoreClient=void 0,await e}}}function Am(n,e){const t=typeof n=="object"?n:Qc(),r=typeof n=="string"?n:Gs,i=Ra(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const a=rf("firestore");a&&wm(i,...a)}return i}function bm(n){if(n._terminated)throw new oe(J.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Cm(n),n._firestoreClient}function Cm(n){var e,t,r;const i=n._freezeSettings(),a=function(g,_,E,R){return new Zd(g,_,E,R.host,R.ssl,R.experimentalForceLongPolling,R.experimentalAutoDetectLongPolling,th(R.experimentalLongPollingOptions),R.useFetchStreams,R.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new pm(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&function(g){const _=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(_),_online:_}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new eo(rt.fromBase64String(e))}catch(t){throw new oe(J.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new eo(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new oe(J.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new oe(J.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new oe(J.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==i[a])return!1;return!0}(this._values,e._values)}}const Pm=new RegExp("[~\\*/\\[\\]]");function km(n,e,t){if(e.search(Pm)>=0)throw Tc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new ih(...e.split("."))._internalPath}catch{throw Tc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Tc(n,e,t,r,i){let a=`Function ${e}() called with invalid data`;a+=". ";let h="";return new oe(J.INVALID_ARGUMENT,a+n+h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,t,r,i,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new yn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Dm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(oh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Dm extends sh{data(){return super.data()}}function oh(n,e){return typeof e=="string"?km(n,e):e instanceof ih?e._internalPath:e._delegate._internalPath}class xm{convertValue(e,t="none"){switch(zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes($n(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ge(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Yi(e,(i,a)=>{r[i]=this.convertValue(a,t)}),r}convertVectorValue(e){var t,r,i;const a=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[aa].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(h=>qe(h.doubleValue));return new Rm(a)}convertGeoPoint(e){return new Sm(qe(e.latitude),qe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ho(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp($i(e));default:return null}}convertTimestamp(e){const t=Hn(e);return new Et(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=je.fromString(e);Fe(Ml(r),9688,{name:e});const i=new zi(r.get(1),r.get(3)),a=new ae(r.popFirst(5));return i.isEqual(t)||vn(`Document ${a} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ah extends sh{constructor(e,t,r,i,a,h){super(e,t,r,i,h),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Om(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(oh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Om extends ah{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(n){n=wa(n,yn);const e=wa(n.firestore,rh);return _m(bm(e),n._key).then(t=>Mm(e,n,t))}class Lm extends xm{constructor(e){super(),this.firestore=e}convertBytes(e){return new eo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new yn(this.firestore,null,t)}}function Mm(n,e,t){const r=t.docs.get(e._key),i=new Lm(n);return new ah(n,i,e._key,r,new Nm(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){li=i})(ci),ei(new pr("firestore",(r,{instanceIdentifier:i,options:a})=>{const h=r.getProvider("app").getImmediate(),g=new rh(new Vd(r.getProvider("auth-internal")),new Fd(h,r.getProvider("app-check-internal")),function(E,R){if(!Object.prototype.hasOwnProperty.apply(E.options,["projectId"]))throw new oe(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zi(E.options.projectId,R)}(h,i),h);return a=Object.assign({useFetchStreams:t},a),g._setSettings(a),g},"PUBLIC").setMultipleInstances(!0)),jn(Au,bu,e),jn(Au,bu,"esm2017")})();function Ya(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function uh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fm=uh,ch=new Xi("auth","Firebase",uh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=new Ca("@firebase/auth");function Um(n,...e){to.logLevel<=Ae.WARN&&to.warn(`Auth (${ci}): ${n}`,...e)}function Bs(n,...e){to.logLevel<=Ae.ERROR&&to.error(`Auth (${ci}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(n,...e){throw Za(n,...e)}function Yt(n,...e){return Za(n,...e)}function lh(n,e,t){const r=Object.assign(Object.assign({},Fm()),{[e]:t});return new Xi("auth","Firebase",r).create(e,{appName:n.name})}function fr(n){return lh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Za(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ch.create(n,...e)}function he(n,e,...t){if(!n)throw Za(e,...t)}function gn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Bs(e),new Error(e)}function En(n,e){n||gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function jm(){return Ec()==="http:"||Ec()==="https:"}function Ec(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jm()||ff()||"connection"in navigator)?navigator.onLine:!0}function qm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t){this.shortDelay=e,this.longDelay=t,En(t>e,"Short delay should be less than long delay!"),this.isMobile=cf()||df()}get(){return Bm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(n,e){En(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zm=new ns(3e4,6e4);function tu(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function di(n,e,t,r,i={}){return fh(n,i,async()=>{let a={},h={};r&&(e==="GET"?h=r:a={body:JSON.stringify(r)});const g=Ji(Object.assign({key:n.config.apiKey},h)).slice(1),_=await n._getAdditionalHeaders();_["Content-Type"]="application/json",n.languageCode&&(_["X-Firebase-Locale"]=n.languageCode);const E=Object.assign({method:e,headers:_},a);return hf()||(E.referrerPolicy="no-referrer"),n.emulatorConfig&&Qi(n.emulatorConfig.host)&&(E.credentials="include"),hh.fetch()(await dh(n,n.config.apiHost,t,g),E)})}async function fh(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Hm),e);try{const i=new Gm(n),a=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const h=await a.json();if("needConfirmation"in h)throw Vs(n,"account-exists-with-different-credential",h);if(a.ok&&!("errorMessage"in h))return h;{const g=a.ok?h.errorMessage:h.error.message,[_,E]=g.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vs(n,"credential-already-in-use",h);if(_==="EMAIL_EXISTS")throw Vs(n,"email-already-in-use",h);if(_==="USER_DISABLED")throw Vs(n,"user-disabled",h);const R=r[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw lh(n,R,E);Tn(n,R)}}catch(i){if(i instanceof wn)throw i;Tn(n,"network-request-failed",{message:String(i)})}}async function Wm(n,e,t,r,i={}){const a=await di(n,e,t,r,i);return"mfaPendingCredential"in a&&Tn(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function dh(n,e,t,r){const i=`${e}${t}?${r}`,a=n,h=a.config.emulator?eu(n.config,i):`${n.config.apiScheme}://${i}`;return $m.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(h).toString():h}class Gm{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Yt(this.auth,"network-request-failed")),zm.get())})}}function Vs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Yt(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Km(n,e){return di(n,"POST","/v1/accounts:delete",e)}async function no(n,e){return di(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qm(n,e=!1){const t=yr(n),r=await t.getIdToken(e),i=nu(r);he(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,h=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:Bi(Jo(i.auth_time)),issuedAtTime:Bi(Jo(i.iat)),expirationTime:Bi(Jo(i.exp)),signInProvider:h||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Jo(n){return Number(n)*1e3}function nu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Bs("JWT malformed, contained fewer than 3 sections"),null;try{const i=jc(t);return i?JSON.parse(i):(Bs("Failed to decode base64 JWT payload"),null)}catch(i){return Bs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function wc(n){const e=nu(n);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof wn&&Xm(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Xm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bi(this.lastLoginAt),this.creationTime=Bi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Ki(n,no(t,{idToken:r}));he(i==null?void 0:i.users.length,t,"internal-error");const a=i.users[0];n._notifyReloadListener(a);const h=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?ph(a.providerUserInfo):[],g=Zm(n.providerData,h),_=n.isAnonymous,E=!(n.email&&a.passwordHash)&&!(g!=null&&g.length),R=_?E:!1,O={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:g,metadata:new Aa(a.createdAt,a.lastLoginAt),isAnonymous:R};Object.assign(n,O)}async function Ym(n){const e=yr(n);await ro(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zm(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ph(n){return n.map(e=>{var{providerId:t}=e,r=Ya(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ey(n,e){const t=await fh(n,{},async()=>{const r=Ji({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=n.config,h=await dh(n,i,"/v1/token",`key=${a}`),g=await n._getAdditionalHeaders();return g["Content-Type"]="application/x-www-form-urlencoded",hh.fetch()(h,{method:"POST",headers:g,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ty(n,e){return di(n,"POST","/v2/accounts:revokeToken",tu(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){he(e.length!==0,"internal-error");const t=wc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:a}=await ey(e,t);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:a}=t,h=new Jr;return r&&(he(typeof r=="string","internal-error",{appName:e}),h.refreshToken=r),i&&(he(typeof i=="string","internal-error",{appName:e}),h.accessToken=i),a&&(he(typeof a=="number","internal-error",{appName:e}),h.expirationTime=a),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jr,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(n,e){he(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Mt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,a=Ya(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Aa(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Ki(this,this.stsTokenManager.getToken(this.auth,e));return he(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Qm(this,e)}reload(){return Ym(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Mt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ro(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qt(this.auth.app))return Promise.reject(fr(this.auth));const e=await this.getIdToken();return await Ki(this,Km(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,a,h,g,_,E,R;const O=(r=t.displayName)!==null&&r!==void 0?r:void 0,L=(i=t.email)!==null&&i!==void 0?i:void 0,G=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,z=(h=t.photoURL)!==null&&h!==void 0?h:void 0,Q=(g=t.tenantId)!==null&&g!==void 0?g:void 0,ee=(_=t._redirectEventId)!==null&&_!==void 0?_:void 0,te=(E=t.createdAt)!==null&&E!==void 0?E:void 0,we=(R=t.lastLoginAt)!==null&&R!==void 0?R:void 0,{uid:be,emailVerified:De,isAnonymous:ct,providerData:Me,stsTokenManager:c}=t;he(be&&c,e,"internal-error");const C=Jr.fromJSON(this.name,c);he(typeof be=="string",e,"internal-error"),Dn(O,e.name),Dn(L,e.name),he(typeof De=="boolean",e,"internal-error"),he(typeof ct=="boolean",e,"internal-error"),Dn(G,e.name),Dn(z,e.name),Dn(Q,e.name),Dn(ee,e.name),Dn(te,e.name),Dn(we,e.name);const b=new Mt({uid:be,auth:e,email:L,emailVerified:De,displayName:O,isAnonymous:ct,photoURL:z,phoneNumber:G,tenantId:Q,stsTokenManager:C,createdAt:te,lastLoginAt:we});return Me&&Array.isArray(Me)&&(b.providerData=Me.map(D=>Object.assign({},D))),ee&&(b._redirectEventId=ee),b}static async _fromIdTokenResponse(e,t,r=!1){const i=new Jr;i.updateFromServerResponse(t);const a=new Mt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ro(a),a}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];he(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?ph(i.providerUserInfo):[],h=!(i.email&&i.passwordHash)&&!(a!=null&&a.length),g=new Jr;g.updateFromIdToken(r);const _=new Mt({uid:i.localId,auth:e,stsTokenManager:g,isAnonymous:h}),E={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Aa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(a!=null&&a.length)};return Object.assign(_,E),_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=new Map;function mn(n){En(n instanceof Function,"Expected a class definition");let e=Ic.get(n);return e?(En(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ic.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}gh.type="NONE";const Ac=gh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(n,e,t){return`firebase:${n}:${e}:${t}`}class Yr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=qs(this.userKey,i.apiKey,a),this.fullPersistenceKey=qs("persistence",i.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await no(this.auth,{idToken:e}).catch(()=>{});return t?Mt._fromGetAccountInfoResponse(this.auth,t,e):null}return Mt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Yr(mn(Ac),e,r);const i=(await Promise.all(t.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let a=i[0]||mn(Ac);const h=qs(r,e.config.apiKey,e.name);let g=null;for(const E of t)try{const R=await E._get(h);if(R){let O;if(typeof R=="string"){const L=await no(e,{idToken:R}).catch(()=>{});if(!L)break;O=await Mt._fromGetAccountInfoResponse(e,L,R)}else O=Mt._fromJSON(e,R);E!==a&&(g=O),a=E;break}}catch{}const _=i.filter(E=>E._shouldAllowMigration);return!a._shouldAllowMigration||!_.length?new Yr(a,e,r):(a=_[0],g&&await a._set(h,g.toJSON()),await Promise.all(t.map(async E=>{if(E!==a)try{await E._remove(h)}catch{}})),new Yr(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Eh(e))return"Blackberry";if(wh(e))return"Webos";if(yh(e))return"Safari";if((e.includes("chrome/")||_h(e))&&!e.includes("edge/"))return"Chrome";if(Th(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mh(n=ut()){return/firefox\//i.test(n)}function yh(n=ut()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _h(n=ut()){return/crios\//i.test(n)}function vh(n=ut()){return/iemobile/i.test(n)}function Th(n=ut()){return/android/i.test(n)}function Eh(n=ut()){return/blackberry/i.test(n)}function wh(n=ut()){return/webos/i.test(n)}function ru(n=ut()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ny(n=ut()){var e;return ru(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ry(){return pf()&&document.documentMode===10}function Ih(n=ut()){return ru(n)||Th(n)||wh(n)||Eh(n)||/windows phone/i.test(n)||vh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(n,e=[]){let t;switch(n){case"Browser":t=bc(ut());break;case"Worker":t=`${bc(ut())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ci}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((h,g)=>{try{const _=e(a);h(_)}catch(_){g(_)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sy(n,e={}){return di(n,"GET","/v2/passwordPolicy",tu(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=6;class ay{constructor(e){var t,r,i,a;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:oy,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,a,h,g;const _={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,_),this.validatePasswordCharacterOptions(e,_),_.isValid&&(_.isValid=(t=_.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),_.isValid&&(_.isValid=(r=_.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),_.isValid&&(_.isValid=(i=_.containsLowercaseLetter)!==null&&i!==void 0?i:!0),_.isValid&&(_.isValid=(a=_.containsUppercaseLetter)!==null&&a!==void 0?a:!0),_.isValid&&(_.isValid=(h=_.containsNumericCharacter)!==null&&h!==void 0?h:!0),_.isValid&&(_.isValid=(g=_.containsNonAlphanumericCharacter)!==null&&g!==void 0?g:!0),_}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cc(this),this.idTokenSubscription=new Cc(this),this.beforeStateQueue=new iy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ch,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=mn(t)),this._initializationPromise=this.queue(async()=>{var r,i,a;if(!this._deleted&&(this.persistenceManager=await Yr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await no(this,{idToken:e}),r=await Mt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Qt(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(g=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(g,g))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,g=i==null?void 0:i._redirectEventId,_=await this.tryRedirectSignIn(e);(!h||h===g)&&(_!=null&&_.user)&&(i=_.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(h){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ro(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qt(this.app))return Promise.reject(fr(this));const t=e?yr(e):null;return t&&he(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qt(this.app)?Promise.reject(fr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qt(this.app)?Promise.reject(fr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sy(this),t=new ay(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Xi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ty(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&mn(e)||this._popupRedirectResolver;he(t,this,"argument-error"),this.redirectPersistenceManager=await Yr.create(this,[mn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let h=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(g,this,"internal-error"),g.then(()=>{h||a(this.currentUser)}),typeof t=="function"){const _=e.addObserver(t,r,i);return()=>{h=!0,_()}}else{const _=e.addObserver(t);return()=>{h=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ah(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Um(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function iu(n){return yr(n)}class Cc{constructor(e){this.auth=e,this.observer=null,this.addObserver=wf(t=>this.observer=t)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let su={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cy(n){su=n}function ly(n){return su.loadJS(n)}function hy(){return su.gapiScript}function fy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(n,e){const t=Ra(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),a=t.getOptions();if(dr(a,e??{}))return i;Tn(i,"already-initialized")}return t.initialize({options:e})}function py(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(mn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gy(n,e,t){const r=iu(n);he(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,a=bh(e),{host:h,port:g}=my(e),_=g===null?"":`:${g}`,E={url:`${a}//${h}${_}/`},R=Object.freeze({host:h,port:g,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){he(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),he(dr(E,r.config.emulator)&&dr(R,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=E,r.emulatorConfig=R,r.settings.appVerificationDisabledForTesting=!0,Qi(h)?($c(`${a}//${h}${_}`),zc("Auth",!0)):yy()}function bh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function my(n){const e=bh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:Sc(r.substr(a.length+1))}}else{const[a,h]=r.split(":");return{host:a,port:Sc(h)}}}function Sc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function yy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,t){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr(n,e){return Wm(n,"POST","/v1/accounts:signInWithIdp",tu(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y="http://localhost";class mr extends Ch{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Tn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,a=Ya(t,["providerId","signInMethod"]);if(!r||!i)return null;const h=new mr(r,i);return h.idToken=a.idToken||void 0,h.accessToken=a.accessToken||void 0,h.secret=a.secret,h.nonce=a.nonce,h.pendingToken=a.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Zr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Zr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Zr(e,t)}buildRequest(){const e={requestUri:_y,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ji(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs extends Sh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends rs{constructor(){super("facebook.com")}static credential(e){return mr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends rs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return mr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Nn.credential(t,r)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends rs{constructor(){super("github.com")}static credential(e){return mr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.GITHUB_SIGN_IN_METHOD="github.com";On.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends rs{constructor(){super("twitter.com")}static credential(e,t){return mr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Vn.credential(t,r)}catch{return null}}}Vn.TWITTER_SIGN_IN_METHOD="twitter.com";Vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const a=await Mt._fromIdTokenResponse(e,r,i),h=Rc(r);return new ui({user:a,providerId:h,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Rc(r);return new ui({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Rc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io extends wn{constructor(e,t,r,i){var a;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,io.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new io(e,t,r,i)}}function Rh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?io._fromErrorAndOperation(n,a,e,r):a})}async function vy(n,e,t=!1){const r=await Ki(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ui._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ty(n,e,t=!1){const{auth:r}=n;if(Qt(r.app))return Promise.reject(fr(r));const i="reauthenticate";try{const a=await Ki(n,Rh(r,i,e,n),t);he(a.idToken,r,"internal-error");const h=nu(a.idToken);he(h,r,"internal-error");const{sub:g}=h;return he(n.uid===g,r,"user-mismatch"),ui._forOperation(n,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Tn(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ey(n,e,t=!1){if(Qt(n.app))return Promise.reject(fr(n));const r="signIn",i=await Rh(n,r,e),a=await ui._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(a.user),a}function wy(n,e,t,r){return yr(n).onIdTokenChanged(e,t,r)}function Iy(n,e,t){return yr(n).beforeAuthStateChanged(e,t)}const so="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(so,"1"),this.storage.removeItem(so),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=1e3,by=10;class kh extends Ph{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ih(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,g,_)=>{this.notifyListeners(h,_)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const h=this.storage.getItem(r);!t&&this.localCache[r]===h||this.notifyListeners(r,h)},a=this.storage.getItem(r);ry()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,by):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Ay)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}kh.type="LOCAL";const Cy=kh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh extends Ph{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Dh.type="SESSION";const xh=Dh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new To(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:a}=t.data,h=this.handlersMap[i];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const g=Array.from(h).map(async E=>E(t.origin,a)),_=await Sy(g);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:_})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}To.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,h;return new Promise((g,_)=>{const E=ou("",20);i.port1.start();const R=setTimeout(()=>{_(new Error("unsupported_event"))},r);h={messageChannel:i,onMessage(O){const L=O;if(L.data.eventId===E)switch(L.data.status){case"ack":clearTimeout(R),a=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),g(L.data.response);break;default:clearTimeout(R),clearTimeout(a),_(new Error("invalid_response"));break}}},this.handlers.add(h),i.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:E,data:t},[i.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return window}function Py(n){Zt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(){return typeof Zt().WorkerGlobalScope<"u"&&typeof Zt().importScripts=="function"}async function ky(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Dy(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function xy(){return Nh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="firebaseLocalStorageDb",Ny=1,oo="firebaseLocalStorage",Vh="fbase_key";class is{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Eo(n,e){return n.transaction([oo],e?"readwrite":"readonly").objectStore(oo)}function Oy(){const n=indexedDB.deleteDatabase(Oh);return new is(n).toPromise()}function ba(){const n=indexedDB.open(Oh,Ny);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(oo,{keyPath:Vh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(oo)?e(r):(r.close(),await Oy(),e(await ba()))})})}async function Pc(n,e,t){const r=Eo(n,!0).put({[Vh]:e,value:t});return new is(r).toPromise()}async function Vy(n,e){const t=Eo(n,!1).get(e),r=await new is(t).toPromise();return r===void 0?null:r.value}function kc(n,e){const t=Eo(n,!0).delete(e);return new is(t).toPromise()}const Ly=800,My=3;class Lh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ba(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>My)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=To._getInstance(xy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ky(),!this.activeServiceWorker)return;this.sender=new Ry(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Dy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ba();return await Pc(e,so,"1"),await kc(e,so),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Vy(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>kc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=Eo(i,!1).getAll();return new is(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ly)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lh.type="LOCAL";const Fy=Lh;new ns(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(n,e){return e?mn(e):(he(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au extends Ch{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Zr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function jy(n){return Ey(n.auth,new au(n),n.bypassAuthState)}function By(n){const{auth:e,user:t}=n;return he(t,e,"internal-error"),Ty(t,new au(n),n.bypassAuthState)}async function qy(n){const{auth:e,user:t}=n;return he(t,e,"internal-error"),vy(t,new au(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,t,r,i,a=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:a,error:h,type:g}=e;if(h){this.reject(h);return}const _={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(_))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jy;case"linkViaPopup":case"linkViaRedirect":return qy;case"reauthViaPopup":case"reauthViaRedirect":return By;default:Tn(this.auth,"internal-error")}}resolve(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=new ns(2e3,1e4);class Kr extends Mh{constructor(e,t,r,i,a){super(e,t,i,a),this.provider=r,this.authWindow=null,this.pollId=null,Kr.currentPopupAction&&Kr.currentPopupAction.cancel(),Kr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){En(this.filter.length===1,"Popup operations only handle one event");const e=ou();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Hy.get())};e()}}Kr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y="pendingRedirect",Hs=new Map;class zy extends Mh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Hs.get(this.auth._key());if(!e){try{const r=await Wy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Hs.set(this.auth._key(),e)}return this.bypassAuthState||Hs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Wy(n,e){const t=Qy(e),r=Ky(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Gy(n,e){Hs.set(n._key(),e)}function Ky(n){return mn(n._redirectPersistence)}function Qy(n){return qs($y,n.config.apiKey,n.name)}async function Xy(n,e,t=!1){if(Qt(n.app))return Promise.reject(fr(n));const r=iu(n),i=Uy(r,e),h=await new zy(r,i,t).execute();return h&&!t&&(delete h.user._redirectEventId,await r._persistUserIfCurrent(h.user),await r._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy=10*60*1e3;class Yy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Fh(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Yt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dc(e))}saveEventToCache(e){this.cachedEventUids.add(Dc(e)),this.lastProcessedEventTime=Date.now()}}function Dc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Fh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Zy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e_(n,e={}){return di(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,n_=/^https?/;async function r_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await e_(n);for(const t of e)try{if(i_(t))return}catch{}Tn(n,"unauthorized-domain")}function i_(n){const e=Ia(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===r}if(!n_.test(t))return!1;if(t_.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=new ns(3e4,6e4);function xc(){const n=Zt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function o_(n){return new Promise((e,t)=>{var r,i,a;function h(){xc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xc(),t(Yt(n,"network-request-failed"))},timeout:s_.get()})}if(!((i=(r=Zt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((a=Zt().gapi)===null||a===void 0)&&a.load)h();else{const g=fy("iframefcb");return Zt()[g]=()=>{gapi.load?h():t(Yt(n,"network-request-failed"))},ly(`${hy()}?onload=${g}`).catch(_=>t(_))}}).catch(e=>{throw $s=null,e})}let $s=null;function a_(n){return $s=$s||o_(n),$s}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=new ns(5e3,15e3),c_="__/auth/iframe",l_="emulator/auth/iframe",h_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},f_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function d_(n){const e=n.config;he(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?eu(e,l_):`https://${n.config.authDomain}/${c_}`,r={apiKey:e.apiKey,appName:n.name,v:ci},i=f_.get(n.config.apiHost);i&&(r.eid=i);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${Ji(r).slice(1)}`}async function p_(n){const e=await a_(n),t=Zt().gapi;return he(t,n,"internal-error"),e.open({where:document.body,url:d_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:h_,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const h=Yt(n,"network-request-failed"),g=Zt().setTimeout(()=>{a(h)},u_.get());function _(){Zt().clearTimeout(g),i(r)}r.ping(_).then(_,()=>{a(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},m_=500,y_=600,__="_blank",v_="http://localhost";class Nc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function T_(n,e,t,r=m_,i=y_){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),h=Math.max((window.screen.availWidth-r)/2,0).toString();let g="";const _=Object.assign(Object.assign({},g_),{width:r.toString(),height:i.toString(),top:a,left:h}),E=ut().toLowerCase();t&&(g=_h(E)?__:t),mh(E)&&(e=e||v_,_.scrollbars="yes");const R=Object.entries(_).reduce((L,[G,z])=>`${L}${G}=${z},`,"");if(ny(E)&&g!=="_self")return E_(e||"",g),new Nc(null);const O=window.open(e||"",g,R);he(O,n,"popup-blocked");try{O.focus()}catch{}return new Nc(O)}function E_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_="__/auth/handler",I_="emulator/auth/handler",A_=encodeURIComponent("fac");async function Oc(n,e,t,r,i,a){he(n.config.authDomain,n,"auth-domain-config-required"),he(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ci,eventId:i};if(e instanceof Sh){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",Ef(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[R,O]of Object.entries({}))h[R]=O}if(e instanceof rs){const R=e.getScopes().filter(O=>O!=="");R.length>0&&(h.scopes=R.join(","))}n.tenantId&&(h.tid=n.tenantId);const g=h;for(const R of Object.keys(g))g[R]===void 0&&delete g[R];const _=await n._getAppCheckToken(),E=_?`#${A_}=${encodeURIComponent(_)}`:"";return`${b_(n)}?${Ji(g).slice(1)}${E}`}function b_({config:n}){return n.emulator?eu(n,I_):`https://${n.authDomain}/${w_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="webStorageSupport";class C_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xh,this._completeRedirectFn=Xy,this._overrideRedirectResult=Gy}async _openPopup(e,t,r,i){var a;En((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const h=await Oc(e,t,r,Ia(),i);return T_(e,h,ou())}async _openRedirect(e,t,r,i){await this._originValidation(e);const a=await Oc(e,t,r,Ia(),i);return Py(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:a}=this.eventManagers[t];return i?Promise.resolve(i):(En(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await p_(e),r=new Yy(e);return t.register("authEvent",i=>(he(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Yo,{type:Yo},i=>{var a;const h=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[Yo];h!==void 0&&t(!!h),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=r_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ih()||yh()||ru()}}const S_=C_;var Vc="@firebase/auth",Lc="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function k_(n){ei(new pr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:h,authDomain:g}=r.options;he(h&&!h.includes(":"),"invalid-api-key",{appName:r.name});const _={apiKey:h,authDomain:g,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ah(n)},E=new uy(r,i,a,_);return py(E,t),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ei(new pr("auth-internal",e=>{const t=iu(e.getProvider("auth").getImmediate());return(r=>new R_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(Vc,Lc,P_(n)),jn(Vc,Lc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=5*60,x_=Hc("authIdTokenMaxAge")||D_;let Mc=null;const N_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>x_)return;const i=t==null?void 0:t.token;Mc!==i&&(Mc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function O_(n=Qc()){const e=Ra(n,"auth");if(e.isInitialized())return e.getImmediate();const t=dy(n,{popupRedirectResolver:S_,persistence:[Fy,Cy,xh]}),r=Hc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const h=N_(a.toString());Iy(t,h,()=>h(t.currentUser)),wy(t,g=>h(g))}}const i=Bc("auth");return i&&gy(t,`http://${i}`),t}function V_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}cy({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const a=Yt("internal-error");a.customData=i,t(a)},r.type="text/javascript",r.charset="UTF-8",V_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});k_("Browser");var L_="firebase",M_="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jn(L_,M_,"app");const F_={apiKey:"AIzaSyApY6GJA-usnLjgFx3UMODAE6JhdKJuIVI",authDomain:"witime.firebaseapp.com",projectId:"witime",storageBucket:"witime.firebasestorage.app",messagingSenderId:"51383625352",appId:"1:51383625352:web:0e8b19e836d70ba55f613d"},Uh=Kc(F_);O_(Uh);const U_=Am(Uh);Kh(document).click(async function(){console.log("Generando consulta, espere... ");try{const n=Im(U_,"smiles","wilder"),e=await Vm(n);if(e.exists()){const t=e.data();console.log("📧 Mensaje desde base de datos:",t.mensaje)}else console.log("Error en consulta, revisa el nombre")}catch(n){console.error(n)}});
