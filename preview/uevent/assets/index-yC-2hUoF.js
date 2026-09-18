import{m as Vr,_ as An,o as ft,s as O,v as tt,w as Xr,r as qr,n as Rt,z as ut}from"./toggle-group-pCGnzXWB.js";import{r as X,R as ne}from"./index-CwrEZka8.js";import{P as me}from"./index-DzhbD_Zd.js";class Qr extends Vr{async getAll(i){const a={page:i?.page??1,limit:i?.limit??20,...i};return(await this.http.get(this.basePath,{params:a})).data}async getOne(i){return(await this.http.get(`${this.basePath}/${i}`)).data}async create(i){return(await this.http.post(this.basePath,i)).data}async update(i,a){return(await this.http.patch(`${this.basePath}/${i}`,a)).data}async patch(i,a){return(await this.http.patch(`${this.basePath}/${i}`,a)).data}async remove(i){await this.http.delete(`${this.basePath}/${i}`)}async setBookmark(i,a){a?await this.http.post(`${this.basePath}/${i}/bookmark`):await this.http.delete(`${this.basePath}/${i}/bookmark`)}async uploadImages(i,a){const o=new FormData;for(const u of a)o.append("images",u);return(await this.http.post(`${this.basePath}/${i}/cover`,o,{headers:{"Content-Type":"multipart/form-data"}})).data}async subscribe(i){await this.http.post(`${this.basePath}/${i}/subscribe`)}async unsubscribe(i){await this.http.delete(`${this.basePath}/${i}/subscribe`)}async getSubscription(i){return(await this.http.get(`${this.basePath}/${i}/subscription`)).data}async getByOrganization(i,a){return this.getAll({...a,organization_id:i})}async getComments(i,a=1,o=20){return(await this.http.get(`${this.basePath}/${i}/comments`,{params:{page:a,limit:o}})).data}async createComment(i,a){return(await this.http.post(`${this.basePath}/${i}/comments`,{content:a})).data}async deleteComment(i,a){await this.http.delete(`${this.basePath}/${i}/comments/${a}`)}}const Li=new Qr("/events"),qt=An(["online","offline"]),Jr=ft({src:O().url(),msrc:O().url().optional(),w:tt(),h:tt(),title:O().optional()}),ei=ft({id:O(),avatarUrl:O().url().optional(),name:O(),username:O().nullable().optional()}),ti=ft({id:O(),ticketType:qr,price:tt(),datetimeStart:O().optional(),datetimeEnd:O().optional(),currency:O().optional(),seat:O().optional(),quantityLimited:Rt().optional(),quantityTotal:tt().optional(),quantitySold:tt().optional(),status:Xr});ft({id:O(),title:O(),imageUrl:O().url().optional(),date:O(),time:O(),format:qt,location:O().optional(),googleMapsUrl:O().url().optional(),onlineUrl:O().url().optional(),locationFrom:O().optional(),locationTo:O().optional(),organizer:O(),organizerOrgId:O().optional(),attendeeCount:tt(),attendeesPublic:Rt().optional(),attendees:ut(ei).optional(),isBookmarked:Rt().optional(),description:O(),tags:ut(O()),tickets:ut(ti),gallery:ut(Jr).optional()});const ct=O().trim().optional().transform(l=>l||void 0).pipe(O().url().optional()),Ui=ft({title:O().min(1),description:O().min(1),date:O().min(1),time:O().min(1),format:qt,location:O().optional(),googleMapsUrl:ct,onlineUrl:ct,organizationId:O().min(1),tags:ut(O()).optional(),imageUrl:ct,attendeesPublic:Rt().optional(),notifyNewAttendees:Rt().optional(),redirectUrl:ct,publishAt:O().optional()});ft({title:O().min(1).optional(),description:O().optional(),date:O().optional(),time:O().optional(),format:qt.optional(),location:O().optional(),googleMapsUrl:ct,onlineUrl:ct,tags:ut(O()).optional(),imageUrl:ct});ft({search:O().optional(),format:qt.optional(),organization_id:O().uuid().optional(),tags:ut(O()).optional(),date_from:O().optional(),date_to:O().optional(),location:O().optional(),location_from:O().optional(),location_to:O().optional(),page:tt().int().positive().optional(),limit:tt().int().positive().optional(),user_id:O().uuid().optional(),sort_by:An(["date","name","attendees"]).optional(),sort_order:An(["asc","desc"]).optional()});function ni(l,i,a){return i in l?Object.defineProperty(l,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):l[i]=a,l}function ar(l,i){var a=Object.keys(l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(l);i&&(o=o.filter(function(u){return Object.getOwnPropertyDescriptor(l,u).enumerable})),a.push.apply(a,o)}return a}function sr(l){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?ar(Object(a),!0).forEach(function(o){ni(l,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(a)):ar(Object(a)).forEach(function(o){Object.defineProperty(l,o,Object.getOwnPropertyDescriptor(a,o))})}return l}function ri(l,i){return i||(i=l.slice(0)),Object.freeze(Object.defineProperties(l,{raw:{value:Object.freeze(i)}}))}function ii(l,i){return oi(l)||ai(l,i)||si(l,i)||li()}function oi(l){if(Array.isArray(l))return l}function ai(l,i){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(l)))){var a=[],o=!0,u=!1,d=void 0;try{for(var w=l[Symbol.iterator](),p;!(o=(p=w.next()).done)&&(a.push(p.value),!(i&&a.length===i));o=!0);}catch(s){u=!0,d=s}finally{try{!o&&w.return!=null&&w.return()}finally{if(u)throw d}}return a}}function si(l,i){if(l){if(typeof l=="string")return lr(l,i);var a=Object.prototype.toString.call(l).slice(8,-1);if(a==="Object"&&l.constructor&&(a=l.constructor.name),a==="Map"||a==="Set")return Array.from(a);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return lr(l,i)}}function lr(l,i){(i==null||i>l.length)&&(i=l.length);for(var a=0,o=new Array(i);a<i;a++)o[a]=l[a];return o}function li(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vr(l,i){return i={exports:{}},l(i,i.exports),i.exports}var ui=vr(function(l,i){(function(a,o){l.exports=o()})(gr,function(){var a=function(o,u,d,w){var p={features:null,bind:function(e,t,n,r){var h=(r?"remove":"add")+"EventListener";t=t.split(" ");for(var g=0;g<t.length;g++)t[g]&&e[h](t[g],n,!1)},isArray:function(e){return e instanceof Array},createEl:function(e,t){var n=document.createElement(t||"div");return e&&(n.className=e),n},getScrollY:function(){var e=window.pageYOffset;return e!==void 0?e:document.documentElement.scrollTop},unbind:function(e,t,n){p.bind(e,t,n,!0)},removeClass:function(e,t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(e,t){p.hasClass(e,t)||(e.className+=(e.className?" ":"")+t)},hasClass:function(e,t){return e.className&&new RegExp("(^|\\s)"+t+"(\\s|$)").test(e.className)},getChildByClass:function(e,t){for(var n=e.firstChild;n;){if(p.hasClass(n,t))return n;n=n.nextSibling}},arraySearch:function(e,t,n){for(var r=e.length;r--;)if(e[r][n]===t)return r;return-1},extend:function(e,t,n){for(var r in t)if(t.hasOwnProperty(r)){if(n&&e.hasOwnProperty(r))continue;e[r]=t[r]}},easing:{sine:{out:function(e){return Math.sin(e*(Math.PI/2))},inOut:function(e){return-(Math.cos(Math.PI*e)-1)/2}},cubic:{out:function(e){return--e*e*e+1}}},detectFeatures:function(){if(p.features)return p.features;var e=p.createEl(),t=e.style,n="",r={};if(r.oldIE=document.all&&!document.addEventListener,r.touch="ontouchstart"in window,window.requestAnimationFrame&&(r.raf=window.requestAnimationFrame,r.caf=window.cancelAnimationFrame),r.pointerEvent=!!window.PointerEvent||navigator.msPointerEnabled,!r.pointerEvent){var h=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var g=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);g&&g.length>0&&(g=parseInt(g[1],10),g>=1&&g<8&&(r.isOldIOSPhone=!0))}var k=h.match(/Android\s([0-9\.]*)/),Z=k?k[1]:0;Z=parseFloat(Z),Z>=1&&(Z<4.4&&(r.isOldAndroid=!0),r.androidVersion=Z),r.isMobileOpera=/opera mini|opera mobi/i.test(h)}for(var D=["transform","perspective","animationName"],j=["","webkit","Moz","ms","O"],le,$e,Ge=0;Ge<4;Ge++){n=j[Ge];for(var bt=0;bt<3;bt++)le=D[bt],$e=n+(n?le.charAt(0).toUpperCase()+le.slice(1):le),!r[le]&&$e in t&&(r[le]=$e);n&&!r.raf&&(n=n.toLowerCase(),r.raf=window[n+"RequestAnimationFrame"],r.raf&&(r.caf=window[n+"CancelAnimationFrame"]||window[n+"CancelRequestAnimationFrame"]))}if(!r.raf){var Dt=0;r.raf=function(He){var Cn=new Date().getTime(),Sn=Math.max(0,16-(Cn-Dt)),Yr=window.setTimeout(function(){He(Cn+Sn)},Sn);return Dt=Cn+Sn,Yr},r.caf=function(He){clearTimeout(He)}}return r.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,p.features=r,r}};p.detectFeatures(),p.features.oldIE&&(p.bind=function(e,t,n,r){t=t.split(" ");for(var h=(r?"detach":"attach")+"Event",g,k=function(){n.handleEvent.call(n)},Z=0;Z<t.length;Z++)if(g=t[Z],g)if(typeof n=="object"&&n.handleEvent){if(!r)n["oldIE"+g]=k;else if(!n["oldIE"+g])return!1;e[h]("on"+g,n["oldIE"+g])}else e[h]("on"+g,n)});var s=this,P=25,L=3,m={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(e){return e.tagName==="A"},getDoubleTapZoom:function(e,t){return e||t.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};p.extend(m,w);var $=function(){return{x:0,y:0}},B,z,K,I,ue,W,ce=$(),Ee=$(),b=$(),Fe,M,ae,re={},N,De,oe,ge,ve,ie,_e=0,Oe={},q=$(),J,Be,se=0,S,C,T,R,c,H,_=!0,Q,G=[],ee,f,v,U,A,Y,y,V={},fe=!1,te,ze=function(e,t){p.extend(s,t.publicMethods),G.push(e)},Ne=function(e){var t=Ae();return e>t-1?e-t:e<0?t+e:e},pe={},x=function(e,t){return pe[e]||(pe[e]=[]),pe[e].push(t)},E=function(e){var t=pe[e];if(t){var n=Array.prototype.slice.call(arguments);n.shift();for(var r=0;r<t.length;r++)t[r].apply(s,n)}},we=function(){return new Date().getTime()},Te=function(e){Ht=e,s.bg.style.opacity=e*m.bgOpacity},Re=function(e,t,n,r,h){(!fe||h&&h!==s.currItem)&&(r=r/(h?h.fitRatio:s.currItem.fitRatio)),e[c]=oe+t+"px, "+n+"px"+ge+" scale("+r+")"},de=function(e){Ue&&(e&&(N>s.currItem.fitRatio?fe||(lt(s.currItem,!1,!0),fe=!0):fe&&(lt(s.currItem),fe=!1)),Re(Ue,b.x,b.y,N))},xt=function(e){e.container&&Re(e.container.style,e.initialPosition.x,e.initialPosition.y,e.initialZoomLevel,e)},pt=function(e,t){t[c]=oe+e+"px, 0px"+ge},zt=function(e,t){if(!m.loop&&t){var n=I+(q.x*_e-e)/q.x,r=Math.round(e-je.x);(n<0&&r>0||n>=Ae()-1&&r<0)&&(e=je.x+r*m.mainScrollEndFriction)}je.x=e,pt(e,ue)},Jt=function(e,t){var n=kt[e]-Oe[e];return Ee[e]+ce[e]+n-n*(t/De)},be=function(e,t){e.x=t.x,e.y=t.y,t.id&&(e.id=t.id)},Fn=function(e){e.x=Math.round(e.x),e.y=Math.round(e.y)},en=null,tn=function(){en&&(p.unbind(document,"mousemove",tn),p.addClass(o,"pswp--has_mouse"),m.mouseUsed=!0,E("mouseUsed")),en=setTimeout(function(){en=null},100)},Er=function(){p.bind(document,"keydown",s),y.transform&&p.bind(s.scrollWrap,"click",s),m.mouseUsed||p.bind(document,"mousemove",tn),p.bind(window,"resize scroll orientationchange",s),E("bindEvents")},Tr=function(){p.unbind(window,"resize scroll orientationchange",s),p.unbind(window,"scroll",ae.scroll),p.unbind(document,"keydown",s),p.unbind(document,"mousemove",tn),y.transform&&p.unbind(s.scrollWrap,"click",s),Le&&p.unbind(window,Fe,s),clearTimeout(te),E("unbindEvents")},nn=function(e,t){var n=Pt(s.currItem,re,e);return t&&(F=n),n},zn=function(e){return e||(e=s.currItem),e.initialZoomLevel},Nn=function(e){return e||(e=s.currItem),e.w>0?m.maxSpreadZoom:1},Ln=function(e,t,n,r){return r===s.currItem.initialZoomLevel?(n[e]=s.currItem.initialPosition[e],!0):(n[e]=Jt(e,r),n[e]>t.min[e]?(n[e]=t.min[e],!0):n[e]<t.max[e]?(n[e]=t.max[e],!0):!1)},Ir=function(){if(c){var e=y.perspective&&!Q;oe="translate"+(e?"3d(":"("),ge=y.perspective?", 0px)":")";return}c="left",p.addClass(o,"pswp--ie"),pt=function(t,n){n.left=t+"px"},xt=function(t){var n=t.fitRatio>1?1:t.fitRatio,r=t.container.style,h=n*t.w,g=n*t.h;r.width=h+"px",r.height=g+"px",r.left=t.initialPosition.x+"px",r.top=t.initialPosition.y+"px"},de=function(){if(Ue){var t=Ue,n=s.currItem,r=n.fitRatio>1?1:n.fitRatio,h=r*n.w,g=r*n.h;t.width=h+"px",t.height=g+"px",t.left=b.x+"px",t.top=b.y+"px"}}},Ar=function(e){var t="";m.escKey&&e.keyCode===27?t="close":m.arrowKeys&&(e.keyCode===37?t="prev":e.keyCode===39&&(t="next")),t&&!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey&&(e.preventDefault?e.preventDefault():e.returnValue=!1,s[t]())},kr=function(e){e&&(gt||ot||Se||It)&&(e.preventDefault(),e.stopPropagation())},Un=function(){s.setScrollOffset(0,p.getScrollY())},Ie={},dt=0,Ct=function(e){Ie[e]&&(Ie[e].raf&&f(Ie[e].raf),dt--,delete Ie[e])},rn=function(e){Ie[e]&&Ct(e),Ie[e]||(dt++,Ie[e]={})},St=function(){for(var e in Ie)Ie.hasOwnProperty(e)&&Ct(e)},Et=function(e,t,n,r,h,g,k){var Z=we(),D;rn(e);var j=function(){if(Ie[e]){if(D=we()-Z,D>=r){Ct(e),g(n),k&&k();return}g((n-t)*h(D/r)+t),Ie[e].raf=ee(j)}};j()},Or={shout:E,listen:x,viewportSize:re,options:m,isMainScrollAnimating:function(){return Se},getZoomLevel:function(){return N},getCurrentIndex:function(){return I},isDragging:function(){return Le},isZooming:function(){return We},setScrollOffset:function(e,t){Oe.x=e,Y=Oe.y=t,E("updateScrollOffset",Oe)},applyZoomPan:function(e,t,n,r){b.x=t,b.y=n,N=e,de(r)},init:function(){if(!(B||z)){var e;s.framework=p,s.template=o,s.bg=p.getChildByClass(o,"pswp__bg"),v=o.className,B=!0,y=p.detectFeatures(),ee=y.raf,f=y.caf,c=y.transform,A=y.oldIE,s.scrollWrap=p.getChildByClass(o,"pswp__scroll-wrap"),s.container=p.getChildByClass(s.scrollWrap,"pswp__container"),ue=s.container.style,s.itemHolders=J=[{el:s.container.children[0],wrap:0,index:-1},{el:s.container.children[1],wrap:0,index:-1},{el:s.container.children[2],wrap:0,index:-1}],J[0].el.style.display=J[2].el.style.display="none",Ir(),ae={resize:s.updateSize,orientationchange:function(){clearTimeout(te),te=setTimeout(function(){re.x!==s.scrollWrap.clientWidth&&s.updateSize()},500)},scroll:Un,keydown:Ar,click:kr};var t=y.isOldIOSPhone||y.isOldAndroid||y.isMobileOpera;for((!y.animationName||!y.transform||t)&&(m.showAnimationDuration=m.hideAnimationDuration=0),e=0;e<G.length;e++)s["init"+G[e]]();if(u){var n=s.ui=new u(s,p);n.init()}E("firstUpdate"),I=I||m.index||0,(isNaN(I)||I<0||I>=Ae())&&(I=0),s.currItem=Qe(I),(y.isOldIOSPhone||y.isOldAndroid)&&(_=!1),o.setAttribute("aria-hidden","false"),m.modal&&(_?o.style.position="fixed":(o.style.position="absolute",o.style.top=p.getScrollY()+"px")),Y===void 0&&(E("initialLayout"),Y=U=p.getScrollY());var r="pswp--open ";for(m.mainClass&&(r+=m.mainClass+" "),m.showHideOpacity&&(r+="pswp--animate_opacity "),r+=Q?"pswp--touch":"pswp--notouch",r+=y.animationName?" pswp--css_animation":"",r+=y.svg?" pswp--svg":"",p.addClass(o,r),s.updateSize(),W=-1,se=null,e=0;e<L;e++)pt((e+W)*q.x,J[e].el.style);A||p.bind(s.scrollWrap,M,s),x("initialZoomInEnd",function(){s.setContent(J[0],I-1),s.setContent(J[2],I+1),J[0].el.style.display=J[2].el.style.display="block",m.focus&&o.focus(),Er()}),s.setContent(J[1],I),s.updateCurrItem(),E("afterInit"),_||(ve=setInterval(function(){!dt&&!Le&&!We&&N===s.currItem.initialZoomLevel&&s.updateSize()},1e3)),p.addClass(o,"pswp--visible")}},close:function(){B&&(B=!1,z=!0,E("close"),Tr(),qn(s.currItem,null,!0,s.destroy))},destroy:function(){E("destroy"),at&&clearTimeout(at),o.setAttribute("aria-hidden","true"),o.className=v,ve&&clearInterval(ve),p.unbind(s.scrollWrap,M,s),p.unbind(window,"scroll",s),cn(),St(),pe=null},panTo:function(e,t,n){n||(e>F.min.x?e=F.min.x:e<F.max.x&&(e=F.max.x),t>F.min.y?t=F.min.y:t<F.max.y&&(t=F.max.y)),b.x=e,b.y=t,de()},handleEvent:function(e){e=e||window.event,ae[e.type]&&ae[e.type](e)},goTo:function(e){e=Ne(e);var t=e-I;se=t,I=e,s.currItem=Qe(I),_e-=t,zt(q.x*_e),St(),Se=!1,s.updateCurrItem()},next:function(){s.goTo(I+1)},prev:function(){s.goTo(I-1)},updateCurrZoomItem:function(e){if(e&&E("beforeChange",0),J[1].el.children.length){var t=J[1].el.children[0];p.hasClass(t,"pswp__zoom-wrap")?Ue=t.style:Ue=null}else Ue=null;F=s.currItem.bounds,De=N=s.currItem.initialZoomLevel,b.x=F.center.x,b.y=F.center.y,e&&E("afterChange")},invalidateCurrItems:function(){ie=!0;for(var e=0;e<L;e++)J[e].item&&(J[e].item.needsUpdate=!0)},updateCurrItem:function(e){if(se!==0){var t=Math.abs(se),n;if(!(e&&t<2)){s.currItem=Qe(I),fe=!1,E("beforeChange",se),t>=L&&(W+=se+(se>0?-L:L),t=L);for(var r=0;r<t;r++)se>0?(n=J.shift(),J[L-1]=n,W++,pt((W+2)*q.x,n.el.style),s.setContent(n,I-t+r+1+1)):(n=J.pop(),J.unshift(n),W--,pt(W*q.x,n.el.style),s.setContent(n,I+t-r-1-1));if(Ue&&Math.abs(se)===1){var h=Qe(Be);h.initialZoomLevel!==N&&(Pt(h,re),lt(h),xt(h))}se=0,s.updateCurrZoomItem(),Be=I,E("afterChange")}}},updateSize:function(e){if(!_&&m.modal){var t=p.getScrollY();if(Y!==t&&(o.style.top=t+"px",Y=t),!e&&V.x===window.innerWidth&&V.y===window.innerHeight)return;V.x=window.innerWidth,V.y=window.innerHeight,o.style.height=V.y+"px"}if(re.x=s.scrollWrap.clientWidth,re.y=s.scrollWrap.clientHeight,Un(),q.x=re.x+Math.round(re.x*m.spacing),q.y=re.y,zt(q.x*_e),E("beforeResize"),W!==void 0){for(var n,r,h,g=0;g<L;g++)n=J[g],pt((g+W)*q.x,n.el.style),h=I+g-1,m.loop&&Ae()>2&&(h=Ne(h)),r=Qe(h),r&&(ie||r.needsUpdate||!r.bounds)?(s.cleanSlide(r),s.setContent(n,h),g===1&&(s.currItem=r,s.updateCurrZoomItem(!0)),r.needsUpdate=!1):n.index===-1&&h>=0&&s.setContent(n,h),r&&r.container&&(Pt(r,re),lt(r),xt(r));ie=!1}De=N=s.currItem.initialZoomLevel,F=s.currItem.bounds,F&&(b.x=F.center.x,b.y=F.center.y,de(!0)),E("resize")},zoomTo:function(e,t,n,r,h){t&&(De=N,kt.x=Math.abs(t.x)-b.x,kt.y=Math.abs(t.y)-b.y,be(Ee,b));var g=nn(e,!1),k={};Ln("x",g,k,e),Ln("y",g,k,e);var Z=N,D={x:b.x,y:b.y};Fn(k);var j=function(le){le===1?(N=e,b.x=k.x,b.y=k.y):(N=(e-Z)*le+Z,b.x=(k.x-D.x)*le+D.x,b.y=(k.y-D.y)*le+D.y),h&&h(le),de(le===1)};n?Et("customZoomTo",0,1,n,r||p.easing.sine.inOut,j):j(1)}},Zn=30,on=10,$n,Nt,ye={},nt={},xe={},Ce={},ht={},Ke=[],rt={},Tt,it=[],mt={},an,It,At,Lt=0,Ut=$(),sn=0,Le,ln,ot,gt,Zt,Ye,Pe,We,Hn,F,je=$(),Ue,Se,kt=$(),vt=$(),Ve,un,$t,Ht,Bt,Pr=function(e,t){return e.x===t.x&&e.y===t.y},Mr=function(e,t){return Math.abs(e.x-t.x)<P&&Math.abs(e.y-t.y)<P},Bn=function(e,t){return mt.x=Math.abs(e.x-t.x),mt.y=Math.abs(e.y-t.y),Math.sqrt(mt.x*mt.x+mt.y*mt.y)},cn=function(){Zt&&(f(Zt),Zt=null)},Wn=function(){Le&&(Zt=ee(Wn),Lr())},Dr=function(){return!(m.scaleMode==="fit"&&N===s.currItem.initialZoomLevel)},jn=function(e,t){return!e||e===document||e.getAttribute("class")&&e.getAttribute("class").indexOf("pswp__scroll-wrap")>-1?!1:t(e)?e:jn(e.parentNode,t)},fn={},Gn=function(e,t){return fn.prevent=!jn(e.target,m.isClickableElement),E("preventDragEvent",e,t,fn),fn.prevent},Kn=function(e,t){return t.x=e.pageX,t.y=e.pageY,t.id=e.identifier,t},Yn=function(e,t,n){n.x=(e.x+t.x)*.5,n.y=(e.y+t.y)*.5},Rr=function(e,t,n){if(e-Nt>50){var r=it.length>2?it.shift():{};r.x=t,r.y=n,it.push(r),Nt=e}},Vn=function(){var e=b.y-s.currItem.initialPosition.y;return 1-Math.abs(e/(re.y/2))},Ot={},Fr={},Xe=[],Wt,pn=function(e){for(;Xe.length>0;)Xe.pop();return H?(Wt=0,Ke.forEach(function(t){Wt===0?Xe[0]=t:Wt===1&&(Xe[1]=t),Wt++})):e.type.indexOf("touch")>-1?e.touches&&e.touches.length>0&&(Xe[0]=Kn(e.touches[0],Ot),e.touches.length>1&&(Xe[1]=Kn(e.touches[1],Fr))):(Ot.x=e.pageX,Ot.y=e.pageY,Ot.id="",Xe[0]=Ot),Xe},Xn=function(e,t){var n,r=b[e]+t[e],h,g=t[e]>0,k=je.x+t.x,Z=je.x-rt.x,D,j;if(r>F.min[e]||r<F.max[e]?n=m.panEndFriction:n=1,r=b[e]+t[e]*n,(m.allowPanToNext||N===s.currItem.initialZoomLevel)&&(Ue?Ve==="h"&&e==="x"&&!ot&&(g?(r>F.min[e]&&(n=m.panEndFriction,F.min[e]-r,h=F.min[e]-Ee[e]),(h<=0||Z<0)&&Ae()>1?(j=k,Z<0&&k>rt.x&&(j=rt.x)):F.min.x!==F.max.x&&(D=r)):(r<F.max[e]&&(n=m.panEndFriction,r-F.max[e],h=Ee[e]-F.max[e]),(h<=0||Z>0)&&Ae()>1?(j=k,Z>0&&k<rt.x&&(j=rt.x)):F.min.x!==F.max.x&&(D=r))):j=k,e==="x"))return j!==void 0&&(zt(j,!0),j===rt.x?Ye=!1:Ye=!0),F.min.x!==F.max.x&&(D!==void 0?b.x=D:Ye||(b.x+=t.x*n)),j!==void 0;Se||Ye||N>s.currItem.fitRatio&&(b[e]+=t[e]*n)},zr=function(e){if(!(e.type==="mousedown"&&e.button>0)){if(_t){e.preventDefault();return}if(!(At&&e.type==="mousedown")){if(Gn(e,!0)&&e.preventDefault(),E("pointerDown"),H){var t=p.arraySearch(Ke,e.pointerId,"id");t<0&&(t=Ke.length),Ke[t]={x:e.pageX,y:e.pageY,id:e.pointerId}}var n=pn(e),r=n.length;Pe=null,St(),(!Le||r===1)&&(Le=un=!0,p.bind(window,Fe,s),an=Bt=$t=It=Ye=gt=ln=ot=!1,Ve=null,E("firstTouchStart",n),be(Ee,b),ce.x=ce.y=0,be(Ce,n[0]),be(ht,Ce),rt.x=q.x*_e,it=[{x:Ce.x,y:Ce.y}],Nt=$n=we(),nn(N,!0),cn(),Wn()),!We&&r>1&&!Se&&!Ye&&(De=N,ot=!1,We=ln=!0,ce.y=ce.x=0,be(Ee,b),be(ye,n[0]),be(nt,n[1]),Yn(ye,nt,vt),kt.x=Math.abs(vt.x)-b.x,kt.y=Math.abs(vt.y)-b.y,Hn=Bn(ye,nt))}}},Nr=function(e){if(e.preventDefault(),H){var t=p.arraySearch(Ke,e.pointerId,"id");if(t>-1){var n=Ke[t];n.x=e.pageX,n.y=e.pageY}}if(Le){var r=pn(e);if(!Ve&&!gt&&!We)if(je.x!==q.x*_e)Ve="h";else{var h=Math.abs(r[0].x-Ce.x)-Math.abs(r[0].y-Ce.y);Math.abs(h)>=on&&(Ve=h>0?"h":"v",Pe=r)}else Pe=r}},Lr=function(){if(Pe){var e=Pe.length;if(e!==0)if(be(ye,Pe[0]),xe.x=ye.x-Ce.x,xe.y=ye.y-Ce.y,We&&e>1){if(Ce.x=ye.x,Ce.y=ye.y,!xe.x&&!xe.y&&Pr(Pe[1],nt))return;be(nt,Pe[1]),ot||(ot=!0,E("zoomGestureStarted"));var t=Bn(ye,nt),n=Br(t);n>s.currItem.initialZoomLevel+s.currItem.initialZoomLevel/15&&(Bt=!0);var r=1,h=zn(),g=Nn();if(n<h)if(m.pinchToClose&&!Bt&&De<=s.currItem.initialZoomLevel){var k=h-n,Z=1-k/(h/1.2);Te(Z),E("onPinchClose",Z),$t=!0}else r=(h-n)/h,r>1&&(r=1),n=h-r*(h/3);else n>g&&(r=(n-g)/(h*6),r>1&&(r=1),n=g+r*h);r<0&&(r=0),Yn(ye,nt,Ut),ce.x+=Ut.x-vt.x,ce.y+=Ut.y-vt.y,be(vt,Ut),b.x=Jt("x",n),b.y=Jt("y",n),an=n>N,N=n,de()}else{if(!Ve||(un&&(un=!1,Math.abs(xe.x)>=on&&(xe.x-=Pe[0].x-ht.x),Math.abs(xe.y)>=on&&(xe.y-=Pe[0].y-ht.y)),Ce.x=ye.x,Ce.y=ye.y,xe.x===0&&xe.y===0))return;if(Ve==="v"&&m.closeOnVerticalDrag&&!Dr()){ce.y+=xe.y,b.y+=xe.y;var D=Vn();It=!0,E("onVerticalDrag",D),Te(D),de();return}Rr(we(),ye.x,ye.y),gt=!0,F=s.currItem.bounds;var j=Xn("x",xe);j||(Xn("y",xe),Fn(b),de())}}},Ur=function(e){if(y.isOldAndroid){if(At&&e.type==="mouseup")return;e.type.indexOf("touch")>-1&&(clearTimeout(At),At=setTimeout(function(){At=0},600))}E("pointerUp"),Gn(e,!1)&&e.preventDefault();var t;if(H){var n=p.arraySearch(Ke,e.pointerId,"id");if(n>-1)if(t=Ke.splice(n,1)[0],navigator.msPointerEnabled){var r={4:"mouse",2:"touch",3:"pen"};t.type=r[e.pointerType],t.type||(t.type=e.pointerType||"mouse")}else t.type=e.pointerType||"mouse"}var h=pn(e),g,k=h.length;if(e.type==="mouseup"&&(k=0),k===2)return Pe=null,!0;k===1&&be(ht,h[0]),k===0&&!Ve&&!Se&&(t||(e.type==="mouseup"?t={x:e.pageX,y:e.pageY,type:"mouse"}:e.changedTouches&&e.changedTouches[0]&&(t={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,type:"touch"})),E("touchRelease",e,t));var Z=-1;if(k===0&&(Le=!1,p.unbind(window,Fe,s),cn(),We?Z=0:sn!==-1&&(Z=we()-sn)),sn=k===1?we():-1,Z!==-1&&Z<150?g="zoom":g="swipe",We&&k<2&&(We=!1,k===1&&(g="zoomPointerUp"),E("zoomGestureEnded")),Pe=null,!(!gt&&!ot&&!Se&&!It)){if(St(),Tt||(Tt=Zr()),Tt.calculateSwipeSpeed("x"),It){var D=Vn();if(D<m.verticalDragRange)s.close();else{var j=b.y,le=Ht;Et("verticalDrag",0,1,300,p.easing.cubic.out,function(Ge){b.y=(s.currItem.initialPosition.y-j)*Ge+j,Te((1-le)*Ge+le),de()}),E("onVerticalDrag",1)}return}if((Ye||Se)&&k===0){var $e=Hr(g,Tt);if($e)return;g="zoomPointerUp"}if(!Se){if(g!=="swipe"){Wr();return}!Ye&&N>s.currItem.fitRatio&&$r(Tt)}}},Zr=function(){var e,t,n={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(r){it.length>1?(e=we()-Nt+50,t=it[it.length-2][r]):(e=we()-$n,t=ht[r]),n.lastFlickOffset[r]=Ce[r]-t,n.lastFlickDist[r]=Math.abs(n.lastFlickOffset[r]),n.lastFlickDist[r]>20?n.lastFlickSpeed[r]=n.lastFlickOffset[r]/e:n.lastFlickSpeed[r]=0,Math.abs(n.lastFlickSpeed[r])<.1&&(n.lastFlickSpeed[r]=0),n.slowDownRatio[r]=.95,n.slowDownRatioReverse[r]=1-n.slowDownRatio[r],n.speedDecelerationRatio[r]=1},calculateOverBoundsAnimOffset:function(r,h){n.backAnimStarted[r]||(b[r]>F.min[r]?n.backAnimDestination[r]=F.min[r]:b[r]<F.max[r]&&(n.backAnimDestination[r]=F.max[r]),n.backAnimDestination[r]!==void 0&&(n.slowDownRatio[r]=.7,n.slowDownRatioReverse[r]=1-n.slowDownRatio[r],n.speedDecelerationRatioAbs[r]<.05&&(n.lastFlickSpeed[r]=0,n.backAnimStarted[r]=!0,Et("bounceZoomPan"+r,b[r],n.backAnimDestination[r],h||300,p.easing.sine.out,function(g){b[r]=g,de()}))))},calculateAnimOffset:function(r){n.backAnimStarted[r]||(n.speedDecelerationRatio[r]=n.speedDecelerationRatio[r]*(n.slowDownRatio[r]+n.slowDownRatioReverse[r]-n.slowDownRatioReverse[r]*n.timeDiff/10),n.speedDecelerationRatioAbs[r]=Math.abs(n.lastFlickSpeed[r]*n.speedDecelerationRatio[r]),n.distanceOffset[r]=n.lastFlickSpeed[r]*n.speedDecelerationRatio[r]*n.timeDiff,b[r]+=n.distanceOffset[r])},panAnimLoop:function(){if(Ie.zoomPan&&(Ie.zoomPan.raf=ee(n.panAnimLoop),n.now=we(),n.timeDiff=n.now-n.lastNow,n.lastNow=n.now,n.calculateAnimOffset("x"),n.calculateAnimOffset("y"),de(),n.calculateOverBoundsAnimOffset("x"),n.calculateOverBoundsAnimOffset("y"),n.speedDecelerationRatioAbs.x<.05&&n.speedDecelerationRatioAbs.y<.05)){b.x=Math.round(b.x),b.y=Math.round(b.y),de(),Ct("zoomPan");return}}};return n},$r=function(e){if(e.calculateSwipeSpeed("y"),F=s.currItem.bounds,e.backAnimDestination={},e.backAnimStarted={},Math.abs(e.lastFlickSpeed.x)<=.05&&Math.abs(e.lastFlickSpeed.y)<=.05)return e.speedDecelerationRatioAbs.x=e.speedDecelerationRatioAbs.y=0,e.calculateOverBoundsAnimOffset("x"),e.calculateOverBoundsAnimOffset("y"),!0;rn("zoomPan"),e.lastNow=we(),e.panAnimLoop()},Hr=function(e,t){var n;Se||(Lt=I);var r;if(e==="swipe"){var h=Ce.x-ht.x,g=t.lastFlickDist.x<10;h>Zn&&(g||t.lastFlickOffset.x>20)?r=-1:h<-Zn&&(g||t.lastFlickOffset.x<-20)&&(r=1)}var k;r&&(I+=r,I<0?(I=m.loop?Ae()-1:0,k=!0):I>=Ae()&&(I=m.loop?0:Ae()-1,k=!0),(!k||m.loop)&&(se+=r,_e-=r,n=!0));var Z=q.x*_e,D=Math.abs(Z-je.x),j;return!n&&Z>je.x!=t.lastFlickSpeed.x>0?j=333:(j=Math.abs(t.lastFlickSpeed.x)>0?D/Math.abs(t.lastFlickSpeed.x):333,j=Math.min(j,400),j=Math.max(j,250)),Lt===I&&(n=!1),Se=!0,E("mainScrollAnimStart"),Et("mainScroll",je.x,Z,j,p.easing.cubic.out,zt,function(){St(),Se=!1,Lt=-1,(n||Lt!==I)&&s.updateCurrItem(),E("mainScrollAnimComplete")}),n&&s.updateCurrItem(!0),n},Br=function(e){return 1/Hn*e*De},Wr=function(){var e=N,t=zn(),n=Nn();N<t?e=t:N>n&&(e=n);var r=1,h,g=Ht;return $t&&!an&&!Bt&&N<t?(s.close(),!0):($t&&(h=function(k){Te((r-g)*k+g)}),s.zoomTo(e,0,200,p.easing.cubic.out,h),!0)};ze("Gestures",{publicMethods:{initGestures:function(){var e=function(t,n,r,h,g){S=t+n,C=t+r,T=t+h,g?R=t+g:R=""};H=y.pointerEvent,H&&y.touch&&(y.touch=!1),H?navigator.msPointerEnabled?e("MSPointer","Down","Move","Up","Cancel"):e("pointer","down","move","up","cancel"):y.touch?(e("touch","start","move","end","cancel"),Q=!0):e("mouse","down","move","up"),Fe=C+" "+T+" "+R,M=S,H&&!Q&&(Q=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1),s.likelyTouchDevice=Q,ae[S]=zr,ae[C]=Nr,ae[T]=Ur,R&&(ae[R]=ae[T]),y.touch&&(M+=" mousedown",Fe+=" mousemove mouseup",ae.mousedown=ae[S],ae.mousemove=ae[C],ae.mouseup=ae[T]),Q||(m.allowPanToNext=!1)}}});var at,qn=function(e,t,n,r){at&&clearTimeout(at),_t=!0,dn=!0;var h;e.initialLayout?(h=e.initialLayout,e.initialLayout=null):h=m.getThumbBoundsFn&&m.getThumbBoundsFn(I);var g=n?m.hideAnimationDuration:m.showAnimationDuration,k=function(){Ct("initialZoom"),n?(s.template.removeAttribute("style"),s.bg.removeAttribute("style")):(Te(1),t&&(t.style.display="block"),p.addClass(o,"pswp--animated-in"),E("initialZoom"+(n?"OutEnd":"InEnd"))),r&&r(),_t=!1};if(!g||!h||h.x===void 0){E("initialZoom"+(n?"Out":"In")),N=e.initialZoomLevel,be(b,e.initialPosition),de(),o.style.opacity=n?0:1,Te(1),g?setTimeout(function(){k()},g):k();return}var Z=function(){var D=K,j=!s.currItem.src||s.currItem.loadError||m.showHideOpacity;e.miniImg&&(e.miniImg.style.webkitBackfaceVisibility="hidden"),n||(N=h.w/e.w,b.x=h.x,b.y=h.y-U,s[j?"template":"bg"].style.opacity=.001,de()),rn("initialZoom"),n&&!D&&p.removeClass(o,"pswp--animated-in"),j&&(n?p[(D?"remove":"add")+"Class"](o,"pswp--animate_opacity"):setTimeout(function(){p.addClass(o,"pswp--animate_opacity")},30)),at=setTimeout(function(){if(E("initialZoom"+(n?"Out":"In")),!n)N=e.initialZoomLevel,be(b,e.initialPosition),de(),Te(1),j?o.style.opacity=1:Te(1),at=setTimeout(k,g+20);else{var le=h.w/e.w,$e={x:b.x,y:b.y},Ge=N,bt=Ht,Dt=function(He){He===1?(N=le,b.x=h.x,b.y=h.y-Y):(N=(le-Ge)*He+Ge,b.x=(h.x-$e.x)*He+$e.x,b.y=(h.y-Y-$e.y)*He+$e.y),de(),j?o.style.opacity=1-He:Te(bt-He*bt)};D?Et("initialZoom",0,1,g,p.easing.cubic.out,Dt,k):(Dt(1),at=setTimeout(k,g+20))}},n?25:90)};Z()},qe,Me={},st=[],dn,_t,jr={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return qe.length}},Qe,Ae,Qn=function(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}}},Gr=function(e,t,n){var r=e.bounds;r.center.x=Math.round((Me.x-t)/2),r.center.y=Math.round((Me.y-n)/2)+e.vGap.top,r.max.x=t>Me.x?Math.round(Me.x-t):r.center.x,r.max.y=n>Me.y?Math.round(Me.y-n)+e.vGap.top:r.center.y,r.min.x=t>Me.x?0:r.center.x,r.min.y=n>Me.y?e.vGap.top:r.center.y},Pt=function(e,t,n){if(e.src&&!e.loadError){var r=!n;if(r&&(e.vGap||(e.vGap={top:0,bottom:0}),E("parseVerticalMargin",e)),Me.x=t.x,Me.y=t.y-e.vGap.top-e.vGap.bottom,r){var h=Me.x/e.w,g=Me.y/e.h;e.fitRatio=h<g?h:g;var k=m.scaleMode;k==="orig"?n=1:k==="fit"&&(n=e.fitRatio),n>1&&(n=1),e.initialZoomLevel=n,e.bounds||(e.bounds=Qn())}return n?(Gr(e,e.w*n,e.h*n),r&&n===e.initialZoomLevel&&(e.initialPosition=e.bounds.center),e.bounds):void 0}else return e.w=e.h=0,e.initialZoomLevel=e.fitRatio=1,e.bounds=Qn(),e.initialPosition=e.bounds.center,e.bounds},jt=function(e,t,n,r,h,g){t.loadError||r&&(t.imageAppended=!0,lt(t,r,t===s.currItem&&fe),n.appendChild(r),g&&setTimeout(function(){t&&t.loaded&&t.placeholder&&(t.placeholder.style.display="none",t.placeholder=null)},500))},Jn=function(e){e.loading=!0,e.loaded=!1;var t=e.img=p.createEl("pswp__img","img"),n=function(){e.loading=!1,e.loaded=!0,e.loadComplete?e.loadComplete(e):e.img=null,t.onload=t.onerror=null,t=null};return t.onload=n,t.onerror=function(){e.loadError=!0,n()},t.src=e.src,t},er=function(e,t){if(e.src&&e.loadError&&e.container)return t&&(e.container.innerHTML=""),e.container.innerHTML=m.errorMsg.replace("%url%",e.src),!0},lt=function(e,t,n){if(e.src){t||(t=e.container.lastChild);var r=n?e.w:Math.round(e.w*e.fitRatio),h=n?e.h:Math.round(e.h*e.fitRatio);e.placeholder&&!e.loaded&&(e.placeholder.style.width=r+"px",e.placeholder.style.height=h+"px"),t.style.width=r+"px",t.style.height=h+"px"}},tr=function(){if(st.length){for(var e,t=0;t<st.length;t++)e=st[t],e.holder.index===e.index&&jt(e.index,e.item,e.baseDiv,e.img,!1,e.clearPlaceholder);st=[]}};ze("Controller",{publicMethods:{lazyLoadItem:function(e){e=Ne(e);var t=Qe(e);!t||(t.loaded||t.loading)&&!ie||(E("gettingData",e,t),t.src&&Jn(t))},initController:function(){p.extend(m,jr,!0),s.items=qe=d,Qe=s.getItemAt,Ae=m.getNumItemsFn,Ae()<3&&(m.loop=!1),x("beforeChange",function(e){var t=m.preload,n=e===null?!0:e>=0,r=Math.min(t[0],Ae()),h=Math.min(t[1],Ae()),g;for(g=1;g<=(n?h:r);g++)s.lazyLoadItem(I+g);for(g=1;g<=(n?r:h);g++)s.lazyLoadItem(I-g)}),x("initialLayout",function(){s.currItem.initialLayout=m.getThumbBoundsFn&&m.getThumbBoundsFn(I)}),x("mainScrollAnimComplete",tr),x("initialZoomInEnd",tr),x("destroy",function(){for(var e,t=0;t<qe.length;t++)e=qe[t],e.container&&(e.container=null),e.placeholder&&(e.placeholder=null),e.img&&(e.img=null),e.preloader&&(e.preloader=null),e.loadError&&(e.loaded=e.loadError=!1);st=null})},getItemAt:function(e){return e>=0&&qe[e]!==void 0?qe[e]:!1},allowProgressiveImg:function(){return m.forceProgressiveLoading||!Q||m.mouseUsed||screen.width>1200},setContent:function(e,t){m.loop&&(t=Ne(t));var n=s.getItemAt(e.index);n&&(n.container=null);var r=s.getItemAt(t),h;if(!r){e.el.innerHTML="";return}E("gettingData",t,r),e.index=t,e.item=r;var g=r.container=p.createEl("pswp__zoom-wrap");if(!r.src&&r.html&&(r.html.tagName?g.appendChild(r.html):g.innerHTML=r.html),er(r),Pt(r,re),r.src&&!r.loadError&&!r.loaded){if(r.loadComplete=function(D){if(B){if(e&&e.index===t){if(er(D,!0)){D.loadComplete=D.img=null,Pt(D,re),xt(D),e.index===I&&s.updateCurrZoomItem();return}D.imageAppended?!_t&&D.placeholder&&(D.placeholder.style.display="none",D.placeholder=null):y.transform&&(Se||_t)?st.push({item:D,baseDiv:g,img:D.img,index:t,holder:e,clearPlaceholder:!0}):jt(t,D,g,D.img,Se||_t,!0)}D.loadComplete=null,D.img=null,E("imageLoadComplete",t,D)}},p.features.transform){var k="pswp__img pswp__img--placeholder";k+=r.msrc?"":" pswp__img--placeholder--blank";var Z=p.createEl(k,r.msrc?"img":"");r.msrc&&(Z.src=r.msrc),lt(r,Z),g.appendChild(Z),r.placeholder=Z}r.loading||Jn(r),s.allowProgressiveImg()&&(!dn&&y.transform?st.push({item:r,baseDiv:g,img:r.img,index:t,holder:e}):jt(t,r,g,r.img,!0,!0))}else r.src&&!r.loadError&&(h=p.createEl("pswp__img","img"),h.style.opacity=1,h.src=r.src,lt(r,h),jt(t,r,g,h));!dn&&t===I?(Ue=g.style,qn(r,h||r.img)):xt(r),e.el.innerHTML="",e.el.appendChild(g)},cleanSlide:function(e){e.img&&(e.img.onload=e.img.onerror=null),e.loaded=e.loading=e.img=e.imageAppended=!1}}});var Je,hn={},mn=function(e,t,n){var r=document.createEvent("CustomEvent"),h={origEvent:e,target:e.target,releasePoint:t,pointerType:n||"touch"};r.initCustomEvent("pswpTap",!0,!0,h),e.target.dispatchEvent(r)};ze("Tap",{publicMethods:{initTap:function(){x("firstTouchStart",s.onTapStart),x("touchRelease",s.onTapRelease),x("destroy",function(){hn={},Je=null})},onTapStart:function(e){e.length>1&&(clearTimeout(Je),Je=null)},onTapRelease:function(e,t){if(t&&!gt&&!ln&&!dt){var n=t;if(Je&&(clearTimeout(Je),Je=null,Mr(n,hn))){E("doubleTap",n);return}if(t.type==="mouse"){mn(e,t,"mouse");return}var r=e.target.tagName.toUpperCase();if(r==="BUTTON"||p.hasClass(e.target,"pswp__single-tap")){mn(e,t);return}be(hn,n),Je=setTimeout(function(){mn(e,t),Je=null},300)}}}});var ke;ze("DesktopZoom",{publicMethods:{initDesktopZoom:function(){A||(Q?x("mouseUsed",function(){s.setupDesktopZoom()}):s.setupDesktopZoom(!0))},setupDesktopZoom:function(e){ke={};var t="wheel mousewheel DOMMouseScroll";x("bindEvents",function(){p.bind(o,t,s.handleMouseWheel)}),x("unbindEvents",function(){ke&&p.unbind(o,t,s.handleMouseWheel)}),s.mouseZoomedIn=!1;var n,r=function(){s.mouseZoomedIn&&(p.removeClass(o,"pswp--zoomed-in"),s.mouseZoomedIn=!1),N<1?p.addClass(o,"pswp--zoom-allowed"):p.removeClass(o,"pswp--zoom-allowed"),h()},h=function(){n&&(p.removeClass(o,"pswp--dragging"),n=!1)};x("resize",r),x("afterChange",r),x("pointerDown",function(){s.mouseZoomedIn&&(n=!0,p.addClass(o,"pswp--dragging"))}),x("pointerUp",h),e||r()},handleMouseWheel:function(e){if(N<=s.currItem.fitRatio)return m.modal&&(!m.closeOnScroll||dt||Le?e.preventDefault():c&&Math.abs(e.deltaY)>2&&(K=!0,s.close())),!0;if(e.stopPropagation(),ke.x=0,"deltaX"in e)e.deltaMode===1?(ke.x=e.deltaX*18,ke.y=e.deltaY*18):(ke.x=e.deltaX,ke.y=e.deltaY);else if("wheelDelta"in e)e.wheelDeltaX&&(ke.x=-.16*e.wheelDeltaX),e.wheelDeltaY?ke.y=-.16*e.wheelDeltaY:ke.y=-.16*e.wheelDelta;else if("detail"in e)ke.y=e.detail;else return;nn(N,!0);var t=b.x-ke.x,n=b.y-ke.y;(m.modal||t<=F.min.x&&t>=F.max.x&&n<=F.min.y&&n>=F.max.y)&&e.preventDefault(),s.panTo(t,n)},toggleDesktopZoom:function(e){e=e||{x:re.x/2+Oe.x,y:re.y/2+Oe.y};var t=m.getDoubleTapZoom(!0,s.currItem),n=N===t;s.mouseZoomedIn=!n,s.zoomTo(n?s.currItem.initialZoomLevel:t,e,333),p[(n?"remove":"add")+"Class"](o,"pswp--zoomed-in")}}});var Kr={history:!0,galleryUID:1},gn,nr,Mt,Gt,vn,rr,he,wt,_n,wn,Ze,bn,yn=function(){return Ze.hash.substring(1)},ir=function(){gn&&clearTimeout(gn),Mt&&clearTimeout(Mt)},or=function(){var e=yn(),t={};if(e.length<5)return t;var n,r=e.split("&");for(n=0;n<r.length;n++)if(r[n]){var h=r[n].split("=");h.length<2||(t[h[0]]=h[1])}if(m.galleryPIDs){var g=t.pid;for(t.pid=0,n=0;n<qe.length;n++)if(qe[n].pid===g){t.pid=n;break}}else t.pid=parseInt(t.pid,10)-1;return t.pid<0&&(t.pid=0),t},xn=function(){if(Mt&&clearTimeout(Mt),dt||Le){Mt=setTimeout(xn,500);return}Gt?clearTimeout(nr):Gt=!0;var e=I+1,t=Qe(I);t.hasOwnProperty("pid")&&(e=t.pid);var n=he+"&gid="+m.galleryUID+"&pid="+e;wt||Ze.hash.indexOf(n)===-1&&(wn=!0);var r=Ze.href.split("#")[0]+"#"+n;bn?"#"+n!==window.location.hash&&history[wt?"replaceState":"pushState"]("",document.title,r):wt?Ze.replace(r):Ze.hash=n,wt=!0,nr=setTimeout(function(){Gt=!1},60)};ze("History",{publicMethods:{initHistory:function(){if(p.extend(m,Kr,!0),!!m.history){Ze=window.location,wn=!1,_n=!1,wt=!1,he=yn(),bn="pushState"in history,he.indexOf("gid=")>-1&&(he=he.split("&gid=")[0],he=he.split("?gid=")[0]),x("afterChange",s.updateURL),x("unbindEvents",function(){p.unbind(window,"hashchange",s.onHashChange)});var e=function(){rr=!0,_n||(wn?history.back():he?Ze.hash=he:bn?history.pushState("",document.title,Ze.pathname+Ze.search):Ze.hash=""),ir()};x("unbindEvents",function(){K&&e()}),x("destroy",function(){rr||e()}),x("firstUpdate",function(){I=or().pid});var t=he.indexOf("pid=");t>-1&&(he=he.substring(0,t),he.slice(-1)==="&"&&(he=he.slice(0,-1))),setTimeout(function(){B&&p.bind(window,"hashchange",s.onHashChange)},40)}},onHashChange:function(){if(yn()===he){_n=!0,s.close();return}Gt||(vn=!0,s.goTo(or().pid),vn=!1)},updateURL:function(){ir(),!vn&&(wt?gn=setTimeout(xn,800):xn())}}}),p.extend(s,Or)};return a})}),ci=vr(function(l,i){(function(a,o){l.exports=o()})(gr,function(){var a=function(o,u){var d=this,w=!1,p=!0,s,P,L,m,$,B,z,K=!0,I,ue,W,ce,Ee,b,Fe,M,ae={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(f,v){return f.title?(v.children[0].innerHTML=f.title,!0):(v.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return o.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return o.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},re,N=function(f){if(re)return!0;f=f||window.event,M.timeToIdle&&M.mouseUsed&&!ue&&S();for(var v=f.target||f.srcElement,U,A=v.getAttribute("class")||"",Y,y=0;y<G.length;y++)U=G[y],U.onTap&&A.indexOf("pswp__"+U.name)>-1&&(U.onTap(),Y=!0);if(Y){f.stopPropagation&&f.stopPropagation(),re=!0;var V=u.features.isOldAndroid?600:30;setTimeout(function(){re=!1},V)}},De=function(){return!o.likelyTouchDevice||M.mouseUsed||screen.width>M.fitControlsWidth},oe=function(f,v,U){u[(U?"add":"remove")+"Class"](f,"pswp__"+v)},ge=function(){var f=M.getNumItemsFn()===1;f!==Fe&&(oe(P,"ui--one-slide",f),Fe=f)},ve=function(){oe(z,"share-modal--hidden",K)},ie=function(){return K=!K,K?(u.removeClass(z,"pswp__share-modal--fade-in"),setTimeout(function(){K&&ve()},300)):(ve(),setTimeout(function(){K||u.addClass(z,"pswp__share-modal--fade-in")},30)),K||Oe(),!1},_e=function(f){f=f||window.event;var v=f.target||f.srcElement;return o.shout("shareLinkClick",f,v),v.href?v.hasAttribute("download")?!0:(window.open(v.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),K||ie(),!1):!1},Oe=function(){for(var f="",v,U,A,Y,y,V=0;V<M.shareButtons.length;V++)v=M.shareButtons[V],A=M.getImageURLForShare(v),Y=M.getPageURLForShare(v),y=M.getTextForShare(v),U=v.url.replace("{{url}}",encodeURIComponent(Y)).replace("{{image_url}}",encodeURIComponent(A)).replace("{{raw_image_url}}",A).replace("{{text}}",encodeURIComponent(y)),f+='<a href="'+U+'" target="_blank" class="pswp__share--'+v.id+'"'+(v.download?"download":"")+">"+v.label+"</a>",M.parseShareButtonOut&&(f=M.parseShareButtonOut(v,f));z.children[0].innerHTML=f,z.children[0].onclick=_e},q=function(f){for(var v=0;v<M.closeElClasses.length;v++)if(u.hasClass(f,"pswp__"+M.closeElClasses[v]))return!0},J,Be,se=0,S=function(){clearTimeout(Be),se=0,ue&&d.setIdle(!1)},C=function(f){f=f||window.event;var v=f.relatedTarget||f.toElement;(!v||v.nodeName==="HTML")&&(clearTimeout(Be),Be=setTimeout(function(){d.setIdle(!0)},M.timeToIdleOutside))},T=function(){M.fullscreenEl&&!u.features.isOldAndroid&&(s||(s=d.getFullscreenAPI()),s?(u.bind(document,s.eventK,d.updateFullscreen),d.updateFullscreen(),u.addClass(o.template,"pswp--supports-fs")):u.removeClass(o.template,"pswp--supports-fs"))},R=function(){M.preloaderEl&&(c(!0),W("beforeChange",function(){clearTimeout(b),b=setTimeout(function(){o.currItem&&o.currItem.loading?(!o.allowProgressiveImg()||o.currItem.img&&!o.currItem.img.naturalWidth)&&c(!1):c(!0)},M.loadingIndicatorDelay)}),W("imageLoadComplete",function(f,v){o.currItem===v&&c(!0)}))},c=function(f){Ee!==f&&(oe(ce,"preloader--active",!f),Ee=f)},H=function(f){var v=f.vGap;if(De()){var U=M.barsSize;if(M.captionEl&&U.bottom==="auto")if(m||(m=u.createEl("pswp__caption pswp__caption--fake"),m.appendChild(u.createEl("pswp__caption__center")),P.insertBefore(m,L),u.addClass(P,"pswp__ui--fit")),M.addCaptionHTMLFn(f,m,!0)){var A=m.clientHeight;v.bottom=parseInt(A,10)||44}else v.bottom=U.top;else v.bottom=U.bottom==="auto"?0:U.bottom;v.top=U.top}else v.top=v.bottom=0},_=function(){M.timeToIdle&&W("mouseUsed",function(){u.bind(document,"mousemove",S),u.bind(document,"mouseout",C),J=setInterval(function(){se++,se===2&&d.setIdle(!0)},M.timeToIdle/2)})},Q=function(){W("onVerticalDrag",function(v){p&&v<.95?d.hideControls():!p&&v>=.95&&d.showControls()});var f;W("onPinchClose",function(v){p&&v<.9?(d.hideControls(),f=!0):f&&!p&&v>.9&&d.showControls()}),W("zoomGestureEnded",function(){f=!1,f&&!p&&d.showControls()})},G=[{name:"caption",option:"captionEl",onInit:function(f){L=f}},{name:"share-modal",option:"shareEl",onInit:function(f){z=f},onTap:function(){ie()}},{name:"button--share",option:"shareEl",onInit:function(f){B=f},onTap:function(){ie()}},{name:"button--zoom",option:"zoomEl",onTap:o.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(f){$=f}},{name:"button--close",option:"closeEl",onTap:o.close},{name:"button--arrow--left",option:"arrowEl",onTap:o.prev},{name:"button--arrow--right",option:"arrowEl",onTap:o.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){s.isFullscreen()?s.exit():s.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(f){ce=f}}],ee=function(){var f,v,U,A=function(y){if(y)for(var V=y.length,fe=0;fe<V;fe++){f=y[fe],v=f.className;for(var te=0;te<G.length;te++)U=G[te],v.indexOf("pswp__"+U.name)>-1&&(M[U.option]?(u.removeClass(f,"pswp__element--disabled"),U.onInit&&U.onInit(f)):u.addClass(f,"pswp__element--disabled"))}};A(P.children);var Y=u.getChildByClass(P,"pswp__top-bar");Y&&A(Y.children)};d.init=function(){u.extend(o.options,ae,!0),M=o.options,P=u.getChildByClass(o.scrollWrap,"pswp__ui"),W=o.listen,Q(),W("beforeChange",d.update),W("doubleTap",function(f){var v=o.currItem.initialZoomLevel;o.getZoomLevel()!==v?o.zoomTo(v,f,333):o.zoomTo(M.getDoubleTapZoom(!1,o.currItem),f,333)}),W("preventDragEvent",function(f,v,U){var A=f.target||f.srcElement;A&&A.getAttribute("class")&&f.type.indexOf("mouse")>-1&&(A.getAttribute("class").indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(A.tagName))&&(U.prevent=!1)}),W("bindEvents",function(){u.bind(P,"pswpTap click",N),u.bind(o.scrollWrap,"pswpTap",d.onGlobalTap),o.likelyTouchDevice||u.bind(o.scrollWrap,"mouseover",d.onMouseOver)}),W("unbindEvents",function(){K||ie(),J&&clearInterval(J),u.unbind(document,"mouseout",C),u.unbind(document,"mousemove",S),u.unbind(P,"pswpTap click",N),u.unbind(o.scrollWrap,"pswpTap",d.onGlobalTap),u.unbind(o.scrollWrap,"mouseover",d.onMouseOver),s&&(u.unbind(document,s.eventK,d.updateFullscreen),s.isFullscreen()&&(M.hideAnimationDuration=0,s.exit()),s=null)}),W("destroy",function(){M.captionEl&&(m&&P.removeChild(m),u.removeClass(L,"pswp__caption--empty")),z&&(z.children[0].onclick=null),u.removeClass(P,"pswp__ui--over-close"),u.addClass(P,"pswp__ui--hidden"),d.setIdle(!1)}),M.showAnimationDuration||u.removeClass(P,"pswp__ui--hidden"),W("initialZoomIn",function(){M.showAnimationDuration&&u.removeClass(P,"pswp__ui--hidden")}),W("initialZoomOut",function(){u.addClass(P,"pswp__ui--hidden")}),W("parseVerticalMargin",H),ee(),M.shareEl&&B&&z&&(K=!0),ge(),_(),T(),R()},d.setIdle=function(f){ue=f,oe(P,"ui--idle",f)},d.update=function(){p&&o.currItem?(d.updateIndexIndicator(),M.captionEl&&(M.addCaptionHTMLFn(o.currItem,L),oe(L,"caption--empty",!o.currItem.title)),w=!0):w=!1,K||ie(),ge()},d.updateFullscreen=function(f){f&&setTimeout(function(){o.setScrollOffset(0,u.getScrollY())},50),u[(s.isFullscreen()?"add":"remove")+"Class"](o.template,"pswp--fs")},d.updateIndexIndicator=function(){M.counterEl&&($.innerHTML=o.getCurrentIndex()+1+M.indexIndicatorSep+M.getNumItemsFn())},d.onGlobalTap=function(f){f=f||window.event;var v=f.target||f.srcElement;if(!re){if(f.detail&&f.detail.pointerType==="mouse"){if(q(v)){o.close();return}u.hasClass(v,"pswp__img")&&(o.getZoomLevel()===1&&o.getZoomLevel()<=o.currItem.fitRatio?M.clickToCloseNonZoomable&&o.close():o.toggleDesktopZoom(f.detail.releasePoint))}else if(M.tapToToggleControls&&(p?d.hideControls():d.showControls()),M.tapToClose&&(u.hasClass(v,"pswp__img")||q(v))){o.close();return}}},d.onMouseOver=function(f){f=f||window.event;var v=f.target||f.srcElement;oe(P,"ui--over-close",q(v))},d.hideControls=function(){u.addClass(P,"pswp__ui--hidden"),p=!1},d.showControls=function(){p=!0,w||d.update(),u.removeClass(P,"pswp__ui--hidden")},d.supportsFullscreen=function(){var f=document;return!!(f.exitFullscreen||f.mozCancelFullScreen||f.webkitExitFullscreen||f.msExitFullscreen)},d.getFullscreenAPI=function(){var f=document.documentElement,v,U="fullscreenchange";return f.requestFullscreen?v={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:U}:f.mozRequestFullScreen?v={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+U}:f.webkitRequestFullscreen?v={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+U}:f.msRequestFullscreen&&(v={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),v&&(v.enter=function(){if(I=M.closeOnScroll,M.closeOnScroll=!1,this.enterK==="webkitRequestFullscreen")o.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);else return o.template[this.enterK]()},v.exit=function(){return M.closeOnScroll=I,document[this.exitK]()},v.isFullscreen=function(){return document[this.elementK]}),v}};return a})});function fi(l,i){l.prototype=Object.create(i.prototype),l.prototype.constructor=l,l.__proto__=i}var _r=fi;function pi(l){if(l.sheet)return l.sheet;for(var i=0;i<document.styleSheets.length;i++)if(document.styleSheets[i].ownerNode===l)return document.styleSheets[i]}function di(l){var i=document.createElement("style");return i.setAttribute("data-emotion",l.key),l.nonce!==void 0&&i.setAttribute("nonce",l.nonce),i.appendChild(document.createTextNode("")),i}var wr=(function(){function l(a){this.isSpeedy=a.speedy===void 0?!0:a.speedy,this.tags=[],this.ctr=0,this.nonce=a.nonce,this.key=a.key,this.container=a.container,this.before=null}var i=l.prototype;return i.insert=function(o){if(this.ctr%(this.isSpeedy?65e3:1)===0){var u=di(this),d;this.tags.length===0?d=this.before:d=this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(u,d),this.tags.push(u)}var w=this.tags[this.tags.length-1];if(this.isSpeedy){var p=pi(w);try{var s=o.charCodeAt(1)===105&&o.charCodeAt(0)===64;p.insertRule(o,s?0:p.cssRules.length)}catch{}}else w.appendChild(document.createTextNode(o));this.ctr++},i.flush=function(){this.tags.forEach(function(o){return o.parentNode.removeChild(o)}),this.tags=[],this.ctr=0},l})();function hi(l){function i(S,C,T,R,c){for(var H=0,_=0,Q=0,G=0,ee,f,v=0,U=0,A,Y=A=ee=0,y=0,V=0,fe=0,te=0,ze=T.length,Ne=ze-1,pe,x="",E="",we="",Te="",Re;y<ze;){if(f=T.charCodeAt(y),y===Ne&&_+G+Q+H!==0&&(_!==0&&(f=_===47?10:47),G=Q=H=0,ze++,Ne++),_+G+Q+H===0){if(y===Ne&&(0<V&&(x=x.replace($,"")),0<x.trim().length)){switch(f){case 32:case 9:case 59:case 13:case 10:break;default:x+=T.charAt(y)}f=59}switch(f){case 123:for(x=x.trim(),ee=x.charCodeAt(0),A=1,te=++y;y<ze;){switch(f=T.charCodeAt(y)){case 123:A++;break;case 125:A--;break;case 47:switch(f=T.charCodeAt(y+1)){case 42:case 47:e:{for(Y=y+1;Y<Ne;++Y)switch(T.charCodeAt(Y)){case 47:if(f===42&&T.charCodeAt(Y-1)===42&&y+2!==Y){y=Y+1;break e}break;case 10:if(f===47){y=Y+1;break e}}y=Y}}break;case 91:f++;case 40:f++;case 34:case 39:for(;y++<Ne&&T.charCodeAt(y)!==f;);}if(A===0)break;y++}switch(A=T.substring(te,y),ee===0&&(ee=(x=x.replace(m,"").trim()).charCodeAt(0)),ee){case 64:switch(0<V&&(x=x.replace($,"")),f=x.charCodeAt(1),f){case 100:case 109:case 115:case 45:V=C;break;default:V=_e}if(A=i(C,V,A,f,c+1),te=A.length,0<q&&(V=a(_e,x,fe),Re=p(3,A,V,C,ge,oe,te,f,c,R),x=V.join(""),Re!==void 0&&(te=(A=Re.trim()).length)===0&&(f=0,A="")),0<te)switch(f){case 115:x=x.replace(Fe,w);case 100:case 109:case 45:A=x+"{"+A+"}";break;case 107:x=x.replace(W,"$1 $2"),A=x+"{"+A+"}",A=ie===1||ie===2&&d("@"+A,3)?"@-webkit-"+A+"@"+A:"@"+A;break;default:A=x+A,R===112&&(A=(E+=A,""))}else A="";break;default:A=i(C,a(C,x,fe),A,R,c+1)}we+=A,A=fe=V=Y=ee=0,x="",f=T.charCodeAt(++y);break;case 125:case 59:if(x=(0<V?x.replace($,""):x).trim(),1<(te=x.length))switch(Y===0&&(ee=x.charCodeAt(0),ee===45||96<ee&&123>ee)&&(te=(x=x.replace(" ",":")).length),0<q&&(Re=p(1,x,C,S,ge,oe,E.length,R,c,R))!==void 0&&(te=(x=Re.trim()).length)===0&&(x="\0\0"),ee=x.charCodeAt(0),f=x.charCodeAt(1),ee){case 0:break;case 64:if(f===105||f===99){Te+=x+T.charAt(y);break}default:x.charCodeAt(te-1)!==58&&(E+=u(x,ee,f,x.charCodeAt(2)))}fe=V=Y=ee=0,x="",f=T.charCodeAt(++y)}}switch(f){case 13:case 10:_===47?_=0:1+ee===0&&R!==107&&0<x.length&&(V=1,x+="\0"),0<q*Be&&p(0,x,C,S,ge,oe,E.length,R,c,R),oe=1,ge++;break;case 59:case 125:if(_+G+Q+H===0){oe++;break}default:switch(oe++,pe=T.charAt(y),f){case 9:case 32:if(G+H+_===0)switch(v){case 44:case 58:case 9:case 32:pe="";break;default:f!==32&&(pe=" ")}break;case 0:pe="\\0";break;case 12:pe="\\f";break;case 11:pe="\\v";break;case 38:G+_+H===0&&(V=fe=1,pe="\f"+pe);break;case 108:if(G+_+H+ve===0&&0<Y)switch(y-Y){case 2:v===112&&T.charCodeAt(y-3)===58&&(ve=v);case 8:U===111&&(ve=U)}break;case 58:G+_+H===0&&(Y=y);break;case 44:_+Q+G+H===0&&(V=1,pe+="\r");break;case 34:case 39:_===0&&(G=G===f?0:G===0?f:G);break;case 91:G+_+Q===0&&H++;break;case 93:G+_+Q===0&&H--;break;case 41:G+_+H===0&&Q--;break;case 40:G+_+H===0&&(ee===0&&(2*v+3*U===533||(ee=1)),Q++);break;case 64:_+Q+G+H+Y+A===0&&(A=1);break;case 42:case 47:if(!(0<G+H+Q))switch(_){case 0:switch(2*f+3*T.charCodeAt(y+1)){case 235:_=47;break;case 220:te=y,_=42}break;case 42:f===47&&v===42&&te+2!==y&&(T.charCodeAt(te+2)===33&&(E+=T.substring(te,y+1)),pe="",_=0)}}_===0&&(x+=pe)}U=v,v=f,y++}if(te=E.length,0<te){if(V=C,0<q&&(Re=p(2,E,V,S,ge,oe,te,R,c,R),Re!==void 0&&(E=Re).length===0))return Te+E+we;if(E=V.join(",")+"{"+E+"}",ie*ve!==0){switch(ie!==2||d(E,2)||(ve=0),ve){case 111:E=E.replace(Ee,":-moz-$1")+E;break;case 112:E=E.replace(ce,"::-webkit-input-$1")+E.replace(ce,"::-moz-$1")+E.replace(ce,":-ms-input-$1")+E}ve=0}}return Te+E+we}function a(S,C,T){var R=C.trim().split(I);C=R;var c=R.length,H=S.length;switch(H){case 0:case 1:var _=0;for(S=H===0?"":S[0]+" ";_<c;++_)C[_]=o(S,C[_],T).trim();break;default:var Q=_=0;for(C=[];_<c;++_)for(var G=0;G<H;++G)C[Q++]=o(S[G]+" ",R[_],T).trim()}return C}function o(S,C,T){var R=C.charCodeAt(0);switch(33>R&&(R=(C=C.trim()).charCodeAt(0)),R){case 38:return C.replace(ue,"$1"+S.trim());case 58:return S.trim()+C.replace(ue,"$1"+S.trim());default:if(0<1*T&&0<C.indexOf("\f"))return C.replace(ue,(S.charCodeAt(0)===58?"":"$1")+S.trim())}return S+C}function u(S,C,T,R){var c=S+";",H=2*C+3*T+4*R;if(H===944){S=c.indexOf(":",9)+1;var _=c.substring(S,c.length-1).trim();return _=c.substring(0,S).trim()+_+";",ie===1||ie===2&&d(_,1)?"-webkit-"+_+_:_}if(ie===0||ie===2&&!d(c,1))return c;switch(H){case 1015:return c.charCodeAt(10)===97?"-webkit-"+c+c:c;case 951:return c.charCodeAt(3)===116?"-webkit-"+c+c:c;case 963:return c.charCodeAt(5)===110?"-webkit-"+c+c:c;case 1009:if(c.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+c+c;case 978:return"-webkit-"+c+"-moz-"+c+c;case 1019:case 983:return"-webkit-"+c+"-moz-"+c+"-ms-"+c+c;case 883:if(c.charCodeAt(8)===45)return"-webkit-"+c+c;if(0<c.indexOf("image-set(",11))return c.replace(De,"$1-webkit-$2")+c;break;case 932:if(c.charCodeAt(4)===45)switch(c.charCodeAt(5)){case 103:return"-webkit-box-"+c.replace("-grow","")+"-webkit-"+c+"-ms-"+c.replace("grow","positive")+c;case 115:return"-webkit-"+c+"-ms-"+c.replace("shrink","negative")+c;case 98:return"-webkit-"+c+"-ms-"+c.replace("basis","preferred-size")+c}return"-webkit-"+c+"-ms-"+c+c;case 964:return"-webkit-"+c+"-ms-flex-"+c+c;case 1023:if(c.charCodeAt(8)!==99)break;return _=c.substring(c.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+_+"-webkit-"+c+"-ms-flex-pack"+_+c;case 1005:return z.test(c)?c.replace(B,":-webkit-")+c.replace(B,":-moz-")+c:c;case 1e3:switch(_=c.substring(13).trim(),C=_.indexOf("-")+1,_.charCodeAt(0)+_.charCodeAt(C)){case 226:_=c.replace(b,"tb");break;case 232:_=c.replace(b,"tb-rl");break;case 220:_=c.replace(b,"lr");break;default:return c}return"-webkit-"+c+"-ms-"+_+c;case 1017:if(c.indexOf("sticky",9)===-1)break;case 975:switch(C=(c=S).length-10,_=(c.charCodeAt(C)===33?c.substring(0,C):c).substring(S.indexOf(":",7)+1).trim(),H=_.charCodeAt(0)+(_.charCodeAt(7)|0)){case 203:if(111>_.charCodeAt(8))break;case 115:c=c.replace(_,"-webkit-"+_)+";"+c;break;case 207:case 102:c=c.replace(_,"-webkit-"+(102<H?"inline-":"")+"box")+";"+c.replace(_,"-webkit-"+_)+";"+c.replace(_,"-ms-"+_+"box")+";"+c}return c+";";case 938:if(c.charCodeAt(5)===45)switch(c.charCodeAt(6)){case 105:return _=c.replace("-items",""),"-webkit-"+c+"-webkit-box-"+_+"-ms-flex-"+_+c;case 115:return"-webkit-"+c+"-ms-flex-item-"+c.replace(ae,"")+c;default:return"-webkit-"+c+"-ms-flex-line-pack"+c.replace("align-content","").replace(ae,"")+c}break;case 973:case 989:if(c.charCodeAt(3)!==45||c.charCodeAt(4)===122)break;case 931:case 953:if(N.test(S)===!0)return(_=S.substring(S.indexOf(":")+1)).charCodeAt(0)===115?u(S.replace("stretch","fill-available"),C,T,R).replace(":fill-available",":stretch"):c.replace(_,"-webkit-"+_)+c.replace(_,"-moz-"+_.replace("fill-",""))+c;break;case 962:if(c="-webkit-"+c+(c.charCodeAt(5)===102?"-ms-"+c:"")+c,T+R===211&&c.charCodeAt(13)===105&&0<c.indexOf("transform",10))return c.substring(0,c.indexOf(";",27)+1).replace(K,"$1-webkit-$2")+c}return c}function d(S,C){var T=S.indexOf(C===1?":":"{"),R=S.substring(0,C!==3?T:10);return T=S.substring(T+1,S.length-1),J(C!==2?R:R.replace(re,"$1"),T,C)}function w(S,C){var T=u(C,C.charCodeAt(0),C.charCodeAt(1),C.charCodeAt(2));return T!==C+";"?T.replace(M," or ($1)").substring(4):"("+C+")"}function p(S,C,T,R,c,H,_,Q,G,ee){for(var f=0,v=C,U;f<q;++f)switch(U=Oe[f].call(L,S,v,T,R,c,H,_,Q,G,ee)){case void 0:case!1:case!0:case null:break;default:v=U}if(v!==C)return v}function s(S){switch(S){case void 0:case null:q=Oe.length=0;break;default:if(typeof S=="function")Oe[q++]=S;else if(typeof S=="object")for(var C=0,T=S.length;C<T;++C)s(S[C]);else Be=!!S|0}return s}function P(S){return S=S.prefix,S!==void 0&&(J=null,S?typeof S!="function"?ie=1:(ie=2,J=S):ie=0),P}function L(S,C){var T=S;if(33>T.charCodeAt(0)&&(T=T.trim()),se=T,T=[se],0<q){var R=p(-1,C,T,T,ge,oe,0,0,0,0);R!==void 0&&typeof R=="string"&&(C=R)}var c=i(_e,T,C,0,0);return 0<q&&(R=p(-2,c,T,T,ge,oe,c.length,0,0,0),R!==void 0&&(c=R)),se="",ve=0,oe=ge=1,c}var m=/^\0+/g,$=/[\0\r\f]/g,B=/: */g,z=/zoo|gra/,K=/([,: ])(transform)/g,I=/,\r+?/g,ue=/([\t\r\n ])*\f?&/g,W=/@(k\w+)\s*(\S*)\s*/,ce=/::(place)/g,Ee=/:(read-only)/g,b=/[svh]\w+-[tblr]{2}/,Fe=/\(\s*(.*)\s*\)/g,M=/([\s\S]*?);/g,ae=/-self|flex-/g,re=/[^]*?(:[rp][el]a[\w-]+)[^]*/,N=/stretch|:\s*\w+\-(?:conte|avail)/,De=/([^-])(image-set\()/,oe=1,ge=1,ve=0,ie=1,_e=[],Oe=[],q=0,J=null,Be=0,se="";return L.use=s,L.set=P,l!==void 0&&P(l),L}var ur=function(i){var a=new WeakMap;return function(o){if(a.has(o))return a.get(o);var u=i(o);return a.set(o,u),u}},kn="/*|*/",mi=kn+"}";function gi(l){l&&Kt.current.insert(l+"}")}var Kt={current:null},vi=function(i,a,o,u,d,w,p,s,P,L){switch(i){case 1:{switch(a.charCodeAt(0)){case 64:return Kt.current.insert(a+";"),"";case 108:if(a.charCodeAt(2)===98)return""}break}case 2:{if(s===0)return a+kn;break}case 3:switch(s){case 102:case 112:return Kt.current.insert(o[0]+a),"";default:return a+(L===0?kn:"")}case-2:a.split(mi).forEach(gi)}},_i=function(i,a){if(i===1&&a.charCodeAt(0)===108&&a.charCodeAt(2)===98)return""},On=typeof document<"u",cr={},wi=On?void 0:ur(function(){var l=ur(function(){return{}}),i={},a={};return function(o){return o===void 0||o===!0?i:o===!1?a:l(o)}}),br=function(i){i===void 0&&(i={});var a=i.key||"css",o;i.prefix!==void 0&&(o={prefix:i.prefix});var u=new hi(o),d={},w;if(On){w=i.container||document.head;var p=document.querySelectorAll("style[data-emotion-"+a+"]");Array.prototype.forEach.call(p,function($){var B=$.getAttribute("data-emotion-"+a);B.split(" ").forEach(function(z){d[z]=!0}),$.parentNode!==w&&w.appendChild($)})}var s;if(On)u.use(i.stylisPlugins)(vi),s=function(B,z,K,I){var ue=z.name;Kt.current=K,u(B,z.styles),I&&(m.inserted[ue]=!0)};else{u.use(_i);var P=cr;(i.stylisPlugins||i.prefix!==void 0)&&(u.use(i.stylisPlugins),P=wi(i.stylisPlugins||cr)(i.prefix));var L=function(B,z){var K=z.name;return P[K]===void 0&&(P[K]=u(B,z.styles)),P[K]};s=function(B,z,K,I){var ue=z.name,W=L(B,z);if(m.compat===void 0)return I&&(m.inserted[ue]=!0),W;if(I)m.inserted[ue]=W;else return W}}var m={key:a,sheet:new wr({key:a,container:w,nonce:i.nonce,speedy:i.speedy}),nonce:i.nonce,inserted:d,registered:{},insert:s};return m},En=typeof document<"u";function yr(l,i,a){var o="";return a.split(" ").forEach(function(u){l[u]!==void 0?i.push(l[u]):o+=u+" "}),o}var Yt=function(i,a,o){var u=i.key+"-"+a.name;if((o===!1||En===!1&&i.compat!==void 0)&&i.registered[u]===void 0&&(i.registered[u]=a.styles),i.inserted[a.name]===void 0){var d="",w=a;do{var p=i.insert("."+u,w,i.sheet,!0);!En&&p!==void 0&&(d+=p),w=w.next}while(w!==void 0);if(!En&&d.length!==0)return d}};function bi(l){for(var i=0,a,o=0,u=l.length;u>=4;++o,u-=4)a=l.charCodeAt(o)&255|(l.charCodeAt(++o)&255)<<8|(l.charCodeAt(++o)&255)<<16|(l.charCodeAt(++o)&255)<<24,a=(a&65535)*1540483477+((a>>>16)*59797<<16),a^=a>>>24,i=(a&65535)*1540483477+((a>>>16)*59797<<16)^(i&65535)*1540483477+((i>>>16)*59797<<16);switch(u){case 3:i^=(l.charCodeAt(o+2)&255)<<16;case 2:i^=(l.charCodeAt(o+1)&255)<<8;case 1:i^=l.charCodeAt(o)&255,i=(i&65535)*1540483477+((i>>>16)*59797<<16)}return i^=i>>>13,i=(i&65535)*1540483477+((i>>>16)*59797<<16),((i^i>>>15)>>>0).toString(36)}var yi={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function xi(l){var i={};return function(a){return i[a]===void 0&&(i[a]=l(a)),i[a]}}var Ci=/[A-Z]|^ms/g,Si=/_EMO_([^_]+?)_([^]*?)_EMO_/g,xr=function(i){return i.charCodeAt(1)===45},fr=function(i){return i!=null&&typeof i!="boolean"},Tn=xi(function(l){return xr(l)?l:l.replace(Ci,"-$&").toLowerCase()}),pr=function(i,a){switch(i){case"animation":case"animationName":if(typeof a=="string")return a.replace(Si,function(o,u,d){return et={name:u,styles:d,next:et},u})}return yi[i]!==1&&!xr(i)&&typeof a=="number"&&a!==0?a+"px":a};function Vt(l,i,a,o){if(a==null)return"";if(a.__emotion_styles!==void 0)return a;switch(typeof a){case"boolean":return"";case"object":{if(a.anim===1)return et={name:a.name,styles:a.styles,next:et},a.name;if(a.styles!==void 0){var u=a.next;if(u!==void 0)for(;u!==void 0;)et={name:u.name,styles:u.styles,next:et},u=u.next;var d=a.styles+";";return d}return Ei(l,i,a)}}if(i==null)return a;var w=i[a];return w!==void 0&&!o?w:a}function Ei(l,i,a){var o="";if(Array.isArray(a))for(var u=0;u<a.length;u++)o+=Vt(l,i,a[u],!1);else for(var d in a){var w=a[d];if(typeof w!="object")i!=null&&i[w]!==void 0?o+=d+"{"+i[w]+"}":fr(w)&&(o+=Tn(d)+":"+pr(d,w)+";");else if(Array.isArray(w)&&typeof w[0]=="string"&&(i==null||i[w[0]]===void 0))for(var p=0;p<w.length;p++)fr(w[p])&&(o+=Tn(d)+":"+pr(d,w[p])+";");else{var s=Vt(l,i,w,!1);switch(d){case"animation":case"animationName":{o+=Tn(d)+":"+s+";";break}default:o+=d+"{"+s+"}"}}}return o}var dr=/label:\s*([^\s;\n{]+)\s*;/g,et,Ft=function(i,a,o){if(i.length===1&&typeof i[0]=="object"&&i[0]!==null&&i[0].styles!==void 0)return i[0];var u=!0,d="";et=void 0;var w=i[0];w==null||w.raw===void 0?(u=!1,d+=Vt(o,a,w,!1)):d+=w[0];for(var p=1;p<i.length;p++)d+=Vt(o,a,i[p],d.charCodeAt(d.length-1)===46),u&&(d+=w[p]);dr.lastIndex=0;for(var s="",P;(P=dr.exec(d))!==null;)s+="-"+P[1];var L=bi(d)+s;return{name:L,styles:d,next:et}};function Ti(){for(var l=arguments.length,i=new Array(l),a=0;a<l;a++)i[a]=arguments[a];return Ft(i)}var yt=typeof document<"u",Xt=X.createContext(typeof HTMLElement<"u"?br():null),Dn=X.createContext({});Xt.Provider;var Qt=function(i){var a=function(u,d){return X.createElement(Xt.Consumer,null,function(w){return i(u,w,d)})};return X.forwardRef(a)};if(!yt){var Ii=(function(l){_r(i,l);function i(o,u,d){var w;return w=l.call(this,o,u,d)||this,w.state={value:br()},w}var a=i.prototype;return a.render=function(){return X.createElement(Xt.Provider,this.state,this.props.children(this.state.value))},i})(X.Component);Qt=function(i){return function(a){return X.createElement(Xt.Consumer,null,function(o){return o===null?X.createElement(Ii,null,function(u){return i(a,u)}):i(a,o)})}}}var Pn="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Mn=Object.prototype.hasOwnProperty,hr=function(i,a,o,u){var d=o===null?a.css:a.css(o);typeof d=="string"&&i.registered[d]!==void 0&&(d=i.registered[d]);var w=a[Pn],p=[d],s="";typeof a.className=="string"?s=yr(i.registered,p,a.className):a.className!=null&&(s=a.className+" ");var P=Ft(p),L=Yt(i,P,typeof w=="string");s+=i.key+"-"+P.name;var m={};for(var $ in a)Mn.call(a,$)&&$!=="css"&&$!==Pn&&(m[$]=a[$]);m.ref=u,m.className=s;var B=X.createElement(w,m);if(!yt&&L!==void 0){for(var z,K=P.name,I=P.next;I!==void 0;)K+=" "+I.name,I=I.next;return X.createElement(X.Fragment,null,X.createElement("style",(z={},z["data-emotion-"+i.key]=K,z.dangerouslySetInnerHTML={__html:L},z.nonce=i.sheet.nonce,z)),B)}return B},Ai=Qt(function(l,i,a){return typeof l.css=="function"?X.createElement(Dn.Consumer,null,function(o){return hr(i,l,o,a)}):hr(i,l,null,a)}),In=function(i,a){var o=arguments;if(a==null||!Mn.call(a,"css"))return X.createElement.apply(void 0,o);var u=o.length,d=new Array(u);d[0]=Ai;var w={};for(var p in a)Mn.call(a,p)&&(w[p]=a[p]);w[Pn]=i,d[1]=w;for(var s=2;s<u;s++)d[s]=o[s];return X.createElement.apply(null,d)},ki=Qt(function(l,i){var a=l.styles;if(typeof a=="function")return X.createElement(Dn.Consumer,null,function(u){var d=Ft([a(u)]);return X.createElement(mr,{serialized:d,cache:i})});var o=Ft([a]);return X.createElement(mr,{serialized:o,cache:i})}),mr=(function(l){_r(i,l);function i(o,u,d){return l.call(this,o,u,d)||this}var a=i.prototype;return a.componentDidMount=function(){this.sheet=new wr({key:this.props.cache.key+"-global",nonce:this.props.cache.sheet.nonce,container:this.props.cache.sheet.container});var u=document.querySelector("style[data-emotion-"+this.props.cache.key+'="'+this.props.serialized.name+'"]');u!==null&&this.sheet.tags.push(u),this.props.cache.sheet.tags.length&&(this.sheet.before=this.props.cache.sheet.tags[0]),this.insertStyles()},a.componentDidUpdate=function(u){u.serialized.name!==this.props.serialized.name&&this.insertStyles()},a.insertStyles=function(){if(this.props.serialized.next!==void 0&&Yt(this.props.cache,this.props.serialized.next,!0),this.sheet.tags.length){var u=this.sheet.tags[this.sheet.tags.length-1].nextElementSibling;this.sheet.before=u,this.sheet.flush()}this.props.cache.insert("",this.props.serialized,this.sheet,!1)},a.componentWillUnmount=function(){this.sheet.flush()},a.render=function(){if(!yt){for(var u=this.props.serialized,d=u.name,w=u.styles,p=u.next;p!==void 0;)d+=" "+p.name,w+=p.styles,p=p.next;var s=this.props.cache.compat===!0,P=this.props.cache.insert("",{name:d,styles:w},this.sheet,s);if(!s){var L;return X.createElement("style",(L={},L["data-emotion-"+this.props.cache.key]=d,L.dangerouslySetInnerHTML={__html:P},L.nonce=this.props.cache.sheet.nonce,L))}}return null},i})(X.Component),Oi=function l(i){for(var a=i.length,o=0,u="";o<a;o++){var d=i[o];if(d!=null){var w=void 0;switch(typeof d){case"boolean":break;case"object":{if(Array.isArray(d))w=l(d);else{w="";for(var p in d)d[p]&&p&&(w&&(w+=" "),w+=p)}break}default:w=d}w&&(u&&(u+=" "),u+=w)}}return u};function Pi(l,i,a){var o=[],u=yr(l,o,a);return o.length<2?a:u+i(o)}Qt(function(l,i){return X.createElement(Dn.Consumer,null,function(a){var o="",u="",d=function(){for(var m=arguments.length,$=new Array(m),B=0;B<m;B++)$[B]=arguments[B];var z=Ft($,i.registered);if(yt)Yt(i,z,!1);else{var K=Yt(i,z,!1);K!==void 0&&(o+=K)}return yt||(u+=" "+z.name),i.key+"-"+z.name},w=function(){for(var m=arguments.length,$=new Array(m),B=0;B<m;B++)$[B]=arguments[B];return Pi(i.registered,d,Oi($))},p={css:d,cx:w,theme:a},s=l.children(p);if(!yt&&o.length!==0){var P;return X.createElement(X.Fragment,null,X.createElement("style",(P={},P["data-emotion-"+i.key]=u.substring(1),P.dangerouslySetInnerHTML={__html:o},P.nonce=i.sheet.nonce,P)),s)}return s})});var Rn=function(i){var a=i.setRef,o=i.children,u=i.transition;return ne.createElement("div",{ref:a,className:"pswp",id:"pswp",tabIndex:"-1",role:"dialog","aria-hidden":"true"},ne.createElement("div",{className:"pswp__bg"}),o,ne.createElement("div",{className:"pswp__scroll-wrap"},ne.createElement("div",{className:"pswp__container ".concat(u?"pswp__container_transition":"")},ne.createElement("div",{className:"pswp__item"}),ne.createElement("div",{className:"pswp__item"}),ne.createElement("div",{className:"pswp__item"})),ne.createElement("div",{className:"pswp__ui pswp__ui--hidden"},ne.createElement("div",{className:"pswp__top-bar"},ne.createElement("div",{className:"pswp__counter"}),ne.createElement("button",{type:"button",className:"pswp__button pswp__button--close",title:"Close (Esc)"}),ne.createElement("button",{type:"button",className:"pswp__button pswp__button--zoom",title:"Zoom in/out"}),ne.createElement("button",{type:"button",className:"pswp__button pswp__button--fs",title:"Toggle fullscreen"}),ne.createElement("div",{className:"pswp__preloader"},ne.createElement("div",{className:"pswp__preloader__icn"},ne.createElement("div",{className:"pswp__preloader__cut"},ne.createElement("div",{className:"pswp__preloader__donut"}))))),ne.createElement("div",{className:"pswp__share-modal pswp__share-modal--hidden pswp__single-tap"},ne.createElement("div",{className:"pswp__share-tooltip"})),ne.createElement("button",{type:"button",className:"pswp__button pswp__button--arrow--left",title:"Previous (arrow left)"}),ne.createElement("button",{type:"button",className:"pswp__button pswp__button--arrow--right",title:"Next (arrow right)"}),ne.createElement("div",{className:"pswp__caption"},ne.createElement("div",{className:"pswp__caption__center"})))))};Rn.propTypes={setRef:me.object.isRequired,children:me.element,transition:me.bool};Rn.defaultProps={transition:!1};var Mi=(function(l){return`
<svg
  width="264"
  height="88"
  viewBox="0 0 264 88"
  xmlns="http://www.w3.org/2000/svg"
>
  <title>default-skin 2</title>
  <g
    fill="none"
    fill-rule="evenodd"
  >
    <g>
      <path
        d="M67.002 59.5v3.768c-6.307.84-9.184 5.75-10.002 9.732 2.22-2.83 5.564-5.098 10.002-5.098V71.5L73 65.585 67.002 59.5z"
        id="Shape"
        fill="`.concat(l,`"
      />
      <g fill="`).concat(l,`">
        <path
          d="M13 29v-5h2v3h3v2h-5zM13 15h5v2h-3v3h-2v-5zM31 15v5h-2v-3h-3v-2h5zM31 29h-5v-2h3v-3h2v5z"
          id="Shape"
        />
      </g>
      <g fill="`).concat(l,`">
        <path d="M62 24v5h-2v-3h-3v-2h5zM62 20h-5v-2h3v-3h2v5zM70 20v-5h2v3h3v2h-5zM70 24h5v2h-3v3h-2v-5z" />
      </g>
      <path
        d="M20.586 66l-5.656-5.656 1.414-1.414L22 64.586l5.656-5.656 1.414 1.414L23.414 66l5.656 5.656-1.414 1.414L22 67.414l-5.656 5.656-1.414-1.414L20.586 66z"
        fill="`).concat(l,`"
      />
      <path
        d="M111.785 65.03L110 63.5l3-3.5h-10v-2h10l-3-3.5 1.785-1.468L117 59l-5.215 6.03z"
        fill="`).concat(l,`"
      />
      <path
        d="M152.215 65.03L154 63.5l-3-3.5h10v-2h-10l3-3.5-1.785-1.468L147 59l5.215 6.03z"
        fill="`).concat(l,`"
      />
      <g>
        <path
          id="Rectangle-11"
          fill="`).concat(l,`"
          d="M160.957 28.543l-3.25-3.25-1.413 1.414 3.25 3.25z"
        />
        <path
          d="M152.5 27c3.038 0 5.5-2.462 5.5-5.5s-2.462-5.5-5.5-5.5-5.5 2.462-5.5 5.5 2.462 5.5 5.5 5.5z"
          id="Oval-1"
          stroke="`).concat(l,`"
          stroke-width="1.5"
        />
        <path
          fill="`).concat(l,`"
          d="M150 21h5v1h-5z"
        />
      </g>
      <g>
        <path
          d="M116.957 28.543l-1.414 1.414-3.25-3.25 1.414-1.414 3.25 3.25z"
          fill="`).concat(l,`"
        />
        <path
          d="M108.5 27c3.038 0 5.5-2.462 5.5-5.5s-2.462-5.5-5.5-5.5-5.5 2.462-5.5 5.5 2.462 5.5 5.5 5.5z"
          stroke="`).concat(l,`"
          stroke-width="1.5"
        />
        <path
          fill="`).concat(l,`"
          d="M106 21h5v1h-5z"
        />
        <path
          fill="`).concat(l,`"
          d="M109.043 19.008l-.085 5-1-.017.085-5z"
        />
      </g>
    </g>
  </g>
</svg>
`).replace(/"/g,"'").replace(/>\s{1,}</g,"><").replace(/\s{2,}/g," ").replace(/[\r\n%#()<>?[\\\]^`{|}]/g,encodeURIComponent)});function Cr(){var l=ri([`
  .pswp__bg {
    background: `,`;
  }

  .pswp__container_transition {
    transition: transform 333ms cubic-bezier(0.4, 0, 0.22, 1);
  }

  /*
	1. Buttons
	2. Share modal and links
	3. Index indicator ("1 of X" counter)
	4. Caption
	5. Loading indicator
	6. Additional styles (root element, top bar, idle state, hidden state, etc.)
*/

  /* 1. Buttons */

  /* <button> css reset */
  .pswp__button {
    display: block;
    position: relative;
    float: right;
    width: 44px;
    height: 44px;
    margin: 0;
    padding: 0;
    background: none;
    border: 0;
    transition: opacity 0.2s;
    cursor: pointer;
    overflow: visible;
    opacity: 0.75;
    box-shadow: none;
  }

  .pswp__button:focus,
  .pswp__button:hover {
    opacity: 1;
  }

  .pswp__button:active {
    outline: none;
    opacity: 0.9;
  }

  /* pswp__ui--over-close class it added when mouse is over element that should close gallery */
  .pswp__ui--over-close .pswp__button--close {
    opacity: 1;
  }

  .pswp__button,
  .pswp__button--arrow--left:before,
  .pswp__button--arrow--right:before {
    width: 44px;
    height: 44px;
    background: url("data:image/svg+xml,`,`") 0 0 no-repeat;
    background-size: 264px 88px;
  }

  .pswp__button--close {
    background-position: 0 -44px;
  }

  .pswp__button--share {
    background-position: -44px -44px;
  }

  .pswp__button--fs {
    display: none;
  }

  .pswp--supports-fs .pswp__button--fs {
    display: block;
  }

  .pswp--fs .pswp__button--fs {
    background-position: -44px 0;
  }

  .pswp__button--zoom {
    display: none;
    background-position: -88px 0;
  }

  .pswp--zoom-allowed .pswp__button--zoom {
    display: block;
  }

  .pswp--zoomed-in .pswp__button--zoom {
    background-position: -132px 0;
  }

  /* no arrows on touch screens */
  .pswp--touch .pswp__button--arrow--left,
  .pswp--touch .pswp__button--arrow--right {
    visibility: hidden;
  }

  /*
	Arrow buttons hit area
	(icon is added to :before pseudo-element)
*/
  .pswp__button--arrow--left,
  .pswp__button--arrow--right {
    position: absolute;
    top: 50%;
    width: 70px;
    height: 100px;
    background: none;
    margin-top: -50px;
  }

  .pswp__button--arrow--left {
    left: 0;
  }

  .pswp__button--arrow--right {
    right: 0;
  }

  .pswp__button--arrow--left:before,
  .pswp__button--arrow--right:before {
    content: '';
    position: absolute;
    top: 35px;
    width: 32px;
    height: 30px;
    background-color: `,`;
  }

  .pswp__button--arrow--left:before {
    left: 6px;
    background-position: -138px -44px;
  }

  .pswp__button--arrow--right:before {
    right: 6px;
    background-position: -94px -44px;
  }

  /* 2. Share modal/popup and links */
  .pswp__counter,
  .pswp__share-modal {
    user-select: none;
  }

  .pswp__share-modal {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10px;
    background: `,`;
    transition: opacity 0.25s ease-out;
    z-index: 1600;
    opacity: 0;
    will-change: opacity;
  }

  .pswp__share-modal--hidden {
    display: none;
  }

  .pswp__share-tooltip {
    display: block;
    position: absolute;
    top: 56px;
    right: 44px;
    width: auto;
    background: `,`;
    transform: translateY(6px);
    transition: transform 0.25s;
    z-index: 1620;
    border-radius: 2px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
    will-change: transform;
  }

  .pswp__share-tooltip a {
    display: block;
    padding: 8px 12px;
    font-size: 14px;
    line-height: 18px;
    color: `,`;
    text-decoration: none;
  }

  .pswp__share-tooltip a:hover {
    text-decoration: none;
    color: `,`;
  }

  .pswp__share-tooltip a:first-of-type {
    /* round corners on the first/last list item */
    border-radius: 2px 2px 0 0;
  }

  .pswp__share-tooltip a:last-child {
    border-radius: 0 0 2px 2px;
  }

  .pswp__share-modal--fade-in {
    opacity: 1;
  }

  .pswp__share-modal--fade-in .pswp__share-tooltip {
    transform: translateY(0);
  }

  /* increase size of share links on touch devices */
  .pswp--touch .pswp__share-tooltip a {
    padding: 16px 12px;
  }

  a.pswp__share--facebook:before {
    content: '';
    display: block;
    position: absolute;
    top: -12px;
    right: 15px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-bottom-color: `,`;
    pointer-events: none;
  }

  a.pswp__share--download:hover {
    background: `,`;
  }

  /* 3. Index indicator ("1 of X" counter) */
  .pswp__counter {
    position: absolute;
    top: 0;
    left: 0;
    height: 44px;
    padding: 0 10px;
    font-size: 13px;
    line-height: 44px;
    color: `,`;
    opacity: 0.75;
  }

  /* 4. Caption */
  .pswp__caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 44px;
  }

  .pswp__caption small {
    font-size: 11px;
    color: `,`;
  }

  .pswp__caption__center {
    margin: 0 auto;
    padding: 10px;
    font-size: 13px;
    line-height: 20px;
    color: `,`;
    text-align: left;
    max-width: 420px;
    text-align: center;
  }

  .pswp__caption--empty {
    display: none;
  }

  /* Fake caption element, used to calculate height of next/prev image */
  .pswp__caption--fake {
    visibility: hidden;
  }

  /* 5. Loading indicator (preloader)	You can play with it here - http://codepen.io/dimsemenov/pen/yyBWoR

 */
  .pswp__preloader {
    position: absolute;
    top: 0;
    left: 50%;
    width: 44px;
    height: 44px;
    transition: opacity 0.25s ease-out;
    margin-left: -22px;
    opacity: 0;
    will-change: opacity;
    direction: ltr;
  }

  .pswp__preloader__icn {
    width: 20px;
    height: 20px;
    margin: 12px;
  }

  .pswp__preloader--active {
    opacity: 1;
  }

  .pswp--css_animation .pswp__preloader--active {
    opacity: 1;
  }

  .pswp--css_animation .pswp__preloader--active .pswp__preloader__icn {
    animation: clockwise 500ms linear infinite;
  }

  .pswp--css_animation .pswp__preloader--active .pswp__preloader__donut {
    animation: donut-rotate 1000ms cubic-bezier(0.4, 0, 0.22, 1) infinite;
  }

  .pswp--css_animation .pswp__preloader__icn {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 14px;
    height: 14px;
    margin: 0;
    background: none;
    opacity: 0.75;
  }

  .pswp--css_animation .pswp__preloader__cut {
    /*
			The idea of animating inner circle is based on Polymer ("material") loading indicator
			 by Keanu Lee https://blog.keanulee.com/2014/10/20/the-tale-of-three-spinners.html
		*/
    position: relative;
    width: 7px;
    height: 14px;
    overflow: hidden;
  }

  .pswp--css_animation .pswp__preloader__donut {
    position: absolute;
    top: 0;
    left: 0;
    width: 14px;
    height: 14px;
    margin: 0;
    background: none;
    border: 2px solid `,`;
    box-sizing: border-box;
    border-radius: 50%;
    border-left-color: transparent;
    border-bottom-color: transparent;
  }

  @media screen and (max-width: 1024px) {
    .pswp__preloader {
      position: relative;
      top: auto;
      left: auto;
      float: right;
      margin: 0;
    }
  }

  @keyframes clockwise {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes donut-rotate {
    0% {
      transform: rotate(0);
    }

    50% {
      transform: rotate(-140deg);
    }

    100% {
      transform: rotate(0);
    }
  }

  /* 6. Additional styles */

  /* root element of UI */
  .pswp__ui {
    visibility: visible;
    opacity: 1;
    z-index: 1550;
  }

  /* top background bar with buttons and "1 of X" indicator */
  .pswp__top-bar {
    background: `,` !important;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
  }

  .pswp__caption,
  .pswp__top-bar,
  .pswp--has_mouse .pswp__button--arrow--left,
  .pswp--has_mouse .pswp__button--arrow--right {
    will-change: opacity;
    transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);
  }

  /* pswp--has_mouse class is added only when two subsequent mousemove events occur */
  .pswp--has_mouse .pswp__button--arrow--left,
  .pswp--has_mouse .pswp__button--arrow--right {
    visibility: visible;
  }

  .pswp__top-bar,
  .pswp__caption {
    background-color: `,`;
  }

  /* pswp__ui--fit class is added when main image "fits" between top bar and bottom bar (caption) */
  .pswp__ui--fit .pswp__top-bar,
  .pswp__ui--fit .pswp__caption {
    background-color: `,`;
  }

  /* pswp__ui--idle class is added when mouse isn't moving for several seconds (JS option timeToIdle) */
  .pswp__ui--idle .pswp__top-bar {
    opacity: 0;
  }

  .pswp__ui--idle .pswp__button--arrow--left,
  .pswp__ui--idle .pswp__button--arrow--right {
    opacity: 0;
  }

  /*
	pswp__ui--hidden class is added when controls are hidden
	e.g. when user taps to toggle visibility of controls
*/
  .pswp__ui--hidden .pswp__top-bar,
  .pswp__ui--hidden .pswp__caption,
  .pswp__ui--hidden .pswp__button--arrow--left,
  .pswp__ui--hidden .pswp__button--arrow--right {
    /* Force paint & create composition layer for controls. */
    opacity: 0.001;
  }

  /* pswp__ui--one-slide class is added when there is just one item in gallery */
  .pswp__ui--one-slide .pswp__button--arrow--left,
  .pswp__ui--one-slide .pswp__button--arrow--right,
  .pswp__ui--one-slide .pswp__counter {
    display: none;
  }

  .pswp__element--disabled {
    display: none !important;
  }

  .pswp--minimal--dark .pswp__top-bar {
    background: none;
  }
`]);return Cr=function(){return l},l}var Di={foreground:"#000",background:"#fff"},Ri=(function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Di;return Ti(Cr(),l.background,Mi(l.foreground),l.background,l.background,l.background,l.background,l.background,l.foreground,l.foreground,l.foreground,l.foreground,l.foreground,l.foreground,l.background,l.background,l.background)}),Sr=function(i){var a=i.children,o=i.container,u=i.index,d=i.open,w=i.onIndexChange,p=i.onOpenChange,s=i.options,P=s===void 0?{}:s,L=i.theme,m=X.useRef(null),$=X.useRef(null),B=X.useState(u),z=ii(B,2),K=z[0],I=z[1],ue=sr({bgOpacity:1,showHideOpacity:!0,history:!1,preload:[1,1]},P),W=function(b){m.current=new ui($.current,ci,o,sr({},ue,{index:b})),m.current.init(),m.current.listen("close",function(){return p(!1)}),m.current.listen("beforeChange",function(){return I(m.current?m.current.getCurrentIndex():0)}),m.current.listen("destroy",function(){m.current=null})},ce=function(b){m.current.goTo(b)};return X.useEffect(function(){return d&&W(),function(){m.current=null}},[]),X.useEffect(function(){d&&m.current===null&&W(u),m.current!==null&&u!==m.current.getCurrentIndex()&&ce(u)},[u,d]),X.useEffect(function(){w(K)},[K]),In(ne.Fragment,null,In(ki,{styles:Ri(L)}),In(Rn,{setRef:$},a))};Sr.propTypes={children:me.element,container:me.array.isRequired,index:me.number,onIndexChange:me.func,onOpenChange:me.func,open:me.bool,theme:me.object,options:me.object};Sr.defaultProps={index:0,onIndexChange:function(i){return console.log(i)},onOpenChange:function(i){return console.log(i)},open:!1,options:{}};me.array,me.func,me.string,me.string,me.string;export{Sr as P,Ui as c,Li as e};
