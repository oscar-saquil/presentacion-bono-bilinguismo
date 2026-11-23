(()=>{var Fg=Object.defineProperty;var Og=(i,e,t)=>e in i?Fg(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var wt=(i,e,t)=>Og(i,typeof e!="symbol"?e+"":e,t);var Ks=(i,e)=>{for(let t in e)i[t]=e[t];return i},Ge=(i,e)=>Array.from(i.querySelectorAll(e)),jc=(i,e,t)=>{t?i.classList.add(e):i.classList.remove(e)},Js=i=>{if(typeof i=="string"){if(i==="null")return null;if(i==="true")return!0;if(i==="false")return!1;if(i.match(/^-?[\d\.]+$/))return parseFloat(i)}return i},Hi=(i,e)=>{i.style.transform=e},_o=(i,e)=>{let t=i.matches||i.matchesSelector||i.msMatchesSelector;return!!(t&&t.call(i,e))},Jt=(i,e)=>{if(i&&typeof i.closest=="function")return i.closest(e);for(;i;){if(_o(i,e))return i;i=i.parentElement}return null},jd=i=>{i=i||document.documentElement;let e=i.requestFullscreen||i.webkitRequestFullscreen||i.webkitRequestFullScreen||i.mozRequestFullScreen||i.msRequestFullscreen;e&&e.apply(i)},Bg=(i,e,t,n="")=>{let s=i.querySelectorAll("."+t);for(let a=0;a<s.length;a++){let o=s[a];if(o.parentNode===i)return o}let r=document.createElement(e);return r.className=t,r.innerHTML=n,i.appendChild(r),r},th=i=>{let e=document.createElement("style");return i&&i.length>0&&e.appendChild(document.createTextNode(i)),document.head.appendChild(e),e},Wd=()=>{let i={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,e=>{let t=e.split("=").shift(),n=e.split("=").pop();return t&&n!==void 0&&(i[t]=n),e});for(let e in i){let t=i[e];i[e]=Js(unescape(t))}return i.dependencies!==void 0&&delete i.dependencies,i},zg=(i,e=0)=>{if(i){var t;let n,s=i.style.height;return i.style.height="0px",i.parentElement&&(i.parentElement.style.height="auto"),n=e-(((t=i.parentElement)==null?void 0:t.offsetHeight)||0),i.style.height=s+"px",i.parentElement&&i.parentElement.style.removeProperty("height"),n}return e},Vg={mp4:"video/mp4",m4a:"video/mp4",ogv:"video/ogg",mpeg:"video/mpeg",webm:"video/webm"},Hg=(i="")=>{let e=i.split(".").pop();return e?Vg[e]:void 0},Gg=(i="")=>encodeURI(i).replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),yo=navigator.userAgent,vs=/(iphone|ipod|ipad|android)/gi.test(yo)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;/chrome/i.test(yo)&&/edge/i.test(yo);var Qd=/android/gi.test(yo),Wg=(function(i){if(i){var e=function(R){return[].slice.call(R)},t=0,n=1,s=2,r=3,a=[],o=null,l="requestAnimationFrame"in i?function(){var R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{sync:!1};i.cancelAnimationFrame(o);var L=function(){return h(a.filter((function(F){return F.dirty&&F.active})))};if(R.sync)return L();o=i.requestAnimationFrame(L)}:function(){},c=function(R){return function(L){a.forEach((function(F){return F.dirty=R})),l(L)}},h=function(R){R.filter((function(F){return!F.styleComputed})).forEach((function(F){F.styleComputed=f(F)})),R.filter(g).forEach(m);var L=R.filter(p);L.forEach(d),L.forEach((function(F){m(F),u(F)})),L.forEach(v)},u=function(R){return R.dirty=t},d=function(R){R.availableWidth=R.element.parentNode.clientWidth,R.currentWidth=R.element.scrollWidth,R.previousFontSize=R.currentFontSize,R.currentFontSize=Math.min(Math.max(R.minSize,R.availableWidth/R.currentWidth*R.previousFontSize),R.maxSize),R.whiteSpace=R.multiLine&&R.currentFontSize===R.minSize?"normal":"nowrap"},p=function(R){return R.dirty!==s||R.dirty===s&&R.element.parentNode.clientWidth!==R.availableWidth},f=function(R){var L=i.getComputedStyle(R.element,null);return R.currentFontSize=parseFloat(L.getPropertyValue("font-size")),R.display=L.getPropertyValue("display"),R.whiteSpace=L.getPropertyValue("white-space"),!0},g=function(R){var L=!1;return!R.preStyleTestCompleted&&(/inline-/.test(R.display)||(L=!0,R.display="inline-block"),R.whiteSpace!=="nowrap"&&(L=!0,R.whiteSpace="nowrap"),R.preStyleTestCompleted=!0,L)},m=function(R){R.element.style.whiteSpace=R.whiteSpace,R.element.style.display=R.display,R.element.style.fontSize=R.currentFontSize+"px"},v=function(R){R.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:R.previousFontSize,newValue:R.currentFontSize,scaleFactor:R.currentFontSize/R.previousFontSize}}))},x=function(R,L){return function(F){R.dirty=L,R.active&&l(F)}},E=function(R){return function(){a=a.filter((function(L){return L.element!==R.element})),R.observeMutations&&R.observer.disconnect(),R.element.style.whiteSpace=R.originalStyle.whiteSpace,R.element.style.display=R.originalStyle.display,R.element.style.fontSize=R.originalStyle.fontSize}},y=function(R){return function(){R.active||(R.active=!0,l())}},M=function(R){return function(){return R.active=!1}},w=function(R){R.observeMutations&&(R.observer=new MutationObserver(x(R,n)),R.observer.observe(R.element,R.observeMutations))},_={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in i&&{subtree:!0,childList:!0,characterData:!0}},b=null,C=function(){i.clearTimeout(b),b=i.setTimeout(c(s),N.observeWindowDelay)},T=["resize","orientationchange"];return Object.defineProperty(N,"observeWindow",{set:function(R){var L=`${R?"add":"remove"}EventListener`;T.forEach((function(F){i[L](F,C)}))}}),N.observeWindow=!0,N.observeWindowDelay=100,N.fitAll=c(r),N}function P(R,L){var F=Object.assign({},_,L),G=R.map((function(B){var K=Object.assign({},F,{element:B,active:!0});return(function(V){V.originalStyle={whiteSpace:V.element.style.whiteSpace,display:V.element.style.display,fontSize:V.element.style.fontSize},w(V),V.newbie=!0,V.dirty=!0,a.push(V)})(K),{element:B,fit:x(K,r),unfreeze:y(K),freeze:M(K),unsubscribe:E(K)}}));return l(),G}function N(R){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return typeof R=="string"?P(e(document.querySelectorAll(R)),L):P([R],L)[0]}})(typeof window>"u"?null:window);function Kr(i){"@babel/helpers - typeof";return Kr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Kr(i)}function Xg(i,e){if(Kr(i)!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(Kr(n)!="object")return n;throw TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function qg(i){var e=Xg(i,"string");return Kr(e)=="symbol"?e:e+""}function ih(i,e,t){return(e=qg(e))in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var $g=class{constructor(i){ih(this,"allowedToPlayAudio",null),this.Reveal=i,this.startEmbeddedMedia=this.startEmbeddedMedia.bind(this),this.startEmbeddedIframe=this.startEmbeddedIframe.bind(this),this.preventIframeAutoFocus=this.preventIframeAutoFocus.bind(this),this.ensureMobileMediaPlaying=this.ensureMobileMediaPlaying.bind(this),this.failedAudioPlaybackTargets=new Set,this.failedVideoPlaybackTargets=new Set,this.failedMutedVideoPlaybackTargets=new Set,this.renderMediaPlayButton()}renderMediaPlayButton(){this.mediaPlayButton=document.createElement("button"),this.mediaPlayButton.className="r-overlay-button r-media-play-button",this.mediaPlayButton.addEventListener("click",()=>{this.resetTemporarilyMutedMedia(),new Set([...this.failedAudioPlaybackTargets,...this.failedVideoPlaybackTargets,...this.failedMutedVideoPlaybackTargets]).forEach(i=>{this.startEmbeddedMedia({target:i})}),this.clearMediaPlaybackErrors()})}shouldPreload(i){if(this.Reveal.isScrollView())return!0;let e=this.Reveal.getConfig().preloadIframes;return typeof e!="boolean"&&(e=i.hasAttribute("data-preload")),e}load(i,e={}){let t=this.Reveal.getConfig().display;if(t.includes("!important")){let s=t.replace(/\s*!important\s*$/,"").trim();i.style.setProperty("display",s,"important")}else i.style.display=t;Ge(i,"img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach(s=>{let r=s.tagName==="IFRAME";(!r||this.shouldPreload(s))&&(s.setAttribute("src",s.getAttribute("data-src")),s.setAttribute("data-lazy-loaded",""),s.removeAttribute("data-src"),r&&s.addEventListener("load",this.preventIframeAutoFocus))}),Ge(i,"video, audio").forEach(s=>{let r=0;Ge(s,"source[data-src]").forEach(a=>{a.setAttribute("src",a.getAttribute("data-src")),a.removeAttribute("data-src"),a.setAttribute("data-lazy-loaded",""),r+=1}),vs&&s.tagName==="VIDEO"&&s.setAttribute("playsinline",""),r>0&&s.load()});let n=i.slideBackgroundElement;if(n){n.style.display="block";let s=i.slideBackgroundContentElement,r=i.getAttribute("data-background-iframe");if(n.hasAttribute("data-loaded")===!1){n.setAttribute("data-loaded","true");let o=i.getAttribute("data-background-image"),l=i.getAttribute("data-background-video"),c=i.hasAttribute("data-background-video-loop"),h=i.hasAttribute("data-background-video-muted");if(o)/^data:/.test(o.trim())?s.style.backgroundImage=`url(${o.trim()})`:s.style.backgroundImage=o.split(",").map(u=>`url(${Gg(decodeURI(u.trim()))})`).join(",");else if(l){let u=document.createElement("video");c&&u.setAttribute("loop",""),(h||this.Reveal.isSpeakerNotes())&&(u.muted=!0),vs&&u.setAttribute("playsinline",""),l.split(",").forEach(d=>{let p=document.createElement("source");p.setAttribute("src",d);let f=Hg(d);f&&p.setAttribute("type",f),u.appendChild(p)}),s.appendChild(u)}else if(r&&e.excludeIframes!==!0){let u=document.createElement("iframe");u.setAttribute("allowfullscreen",""),u.setAttribute("mozallowfullscreen",""),u.setAttribute("webkitallowfullscreen",""),u.setAttribute("allow","autoplay"),u.setAttribute("data-src",r),u.style.width="100%",u.style.height="100%",u.style.maxHeight="100%",u.style.maxWidth="100%",s.appendChild(u)}}let a=s.querySelector("iframe[data-src]");a&&this.shouldPreload(n)&&!/autoplay=(1|true|yes)/gi.test(r)&&a.getAttribute("src")!==r&&a.setAttribute("src",r)}this.layout(i)}layout(i){Array.from(i.querySelectorAll(".r-fit-text")).forEach(e=>{Wg(e,{minSize:24,maxSize:this.Reveal.getConfig().height*.8,observeMutations:!1,observeWindow:!1})})}unload(i){i.style.display="none";let e=this.Reveal.getSlideBackground(i);e&&(e.style.display="none",Ge(e,"iframe[src]").forEach(t=>{t.removeAttribute("src")})),Ge(i,"video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach(t=>{t.setAttribute("data-src",t.getAttribute("src")),t.removeAttribute("src")}),Ge(i,"video[data-lazy-loaded] source[src], audio source[src]").forEach(t=>{t.setAttribute("data-src",t.getAttribute("src")),t.removeAttribute("src")})}formatEmbeddedContent(){let i=(e,t,n)=>{Ge(this.Reveal.getSlidesElement(),"iframe["+e+'*="'+t+'"]').forEach(s=>{let r=s.getAttribute(e);r&&r.indexOf(n)===-1&&s.setAttribute(e,r+(/\?/.test(r)?"&":"?")+n)})};i("src","youtube.com/embed/","enablejsapi=1"),i("data-src","youtube.com/embed/","enablejsapi=1"),i("src","player.vimeo.com/","api=1"),i("data-src","player.vimeo.com/","api=1")}startEmbeddedContent(i){if(i){let e=this.Reveal.isSpeakerNotes();Ge(i,'img[src$=".gif"]').forEach(t=>{t.setAttribute("src",t.getAttribute("src"))}),Ge(i,"video, audio").forEach(t=>{if(Jt(t,".fragment")&&!Jt(t,".fragment.visible"))return;let n=this.Reveal.getConfig().autoPlayMedia;if(typeof n!="boolean"&&(n=t.hasAttribute("data-autoplay")||!!Jt(t,".slide-background")),n&&typeof t.play=="function"){if(e&&!t.muted)return;t.readyState>1?this.startEmbeddedMedia({target:t}):vs?(t.addEventListener("canplay",this.ensureMobileMediaPlaying),this.playMediaElement(t)):(t.removeEventListener("loadeddata",this.startEmbeddedMedia),t.addEventListener("loadeddata",this.startEmbeddedMedia))}}),e||(Ge(i,"iframe[src]").forEach(t=>{Jt(t,".fragment")&&!Jt(t,".fragment.visible")||this.startEmbeddedIframe({target:t})}),Ge(i,"iframe[data-src]").forEach(t=>{Jt(t,".fragment")&&!Jt(t,".fragment.visible")||t.getAttribute("src")!==t.getAttribute("data-src")&&(t.removeEventListener("load",this.startEmbeddedIframe),t.addEventListener("load",this.startEmbeddedIframe),t.setAttribute("src",t.getAttribute("data-src")))}))}}ensureMobileMediaPlaying(i){let e=i.target;typeof e.getVideoPlaybackQuality=="function"&&setTimeout(()=>{let t=e.paused===!1,n=e.getVideoPlaybackQuality().totalVideoFrames;t&&n===0&&(e.load(),e.play())},1e3)}startEmbeddedMedia(i){let e=!!Jt(i.target,"html"),t=!!Jt(i.target,".present");e&&t&&(i.target.paused||i.target.ended)&&(i.target.currentTime=0,this.playMediaElement(i.target)),i.target.removeEventListener("loadeddata",this.startEmbeddedMedia)}playMediaElement(i){let e=i.play();e&&typeof e.catch=="function"&&e.then(()=>{i.muted||(this.allowedToPlayAudio=!0)}).catch(t=>{if(t.name==="NotAllowedError")if(this.allowedToPlayAudio=!1,i.tagName==="VIDEO"){this.onVideoPlaybackNotAllowed(i);let n=!!Jt(i,"html"),s=!!Jt(i,".present"),r=i.muted;n&&s&&!r&&(i.setAttribute("data-muted-by-reveal","true"),i.muted=!0,i.play().catch(()=>{this.onMutedVideoPlaybackNotAllowed(i)}))}else i.tagName==="AUDIO"&&this.onAudioPlaybackNotAllowed(i)})}startEmbeddedIframe(i){let e=i.target;if(this.preventIframeAutoFocus(i),e&&e.contentWindow){let t=!!Jt(i.target,"html"),n=!!Jt(i.target,".present");if(t&&n){let s=this.Reveal.getConfig().autoPlayMedia;typeof s!="boolean"&&(s=e.hasAttribute("data-autoplay")||!!Jt(e,".slide-background")),/youtube\.com\/embed\//.test(e.getAttribute("src"))&&s?e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):/player\.vimeo\.com\//.test(e.getAttribute("src"))&&s?e.contentWindow.postMessage('{"method":"play"}',"*"):e.contentWindow.postMessage("slide:start","*")}}}stopEmbeddedContent(i,e={}){e=Ks({unloadIframes:!0},e),i&&i.parentNode&&(Ge(i,"video, audio").forEach(t=>{!t.hasAttribute("data-ignore")&&typeof t.pause=="function"&&(t.setAttribute("data-paused-by-reveal",""),t.pause(),vs&&t.removeEventListener("canplay",this.ensureMobileMediaPlaying))}),Ge(i,"iframe").forEach(t=>{t.contentWindow&&t.contentWindow.postMessage("slide:stop","*"),t.removeEventListener("load",this.preventIframeAutoFocus),t.removeEventListener("load",this.startEmbeddedIframe)}),Ge(i,'iframe[src*="youtube.com/embed/"]').forEach(t=>{!t.hasAttribute("data-ignore")&&t.contentWindow&&typeof t.contentWindow.postMessage=="function"&&t.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}),Ge(i,'iframe[src*="player.vimeo.com/"]').forEach(t=>{!t.hasAttribute("data-ignore")&&t.contentWindow&&typeof t.contentWindow.postMessage=="function"&&t.contentWindow.postMessage('{"method":"pause"}',"*")}),e.unloadIframes===!0&&Ge(i,"iframe[data-src]").forEach(t=>{t.setAttribute("src","about:blank"),t.removeAttribute("src")}))}isAllowedToPlayAudio(){return this.allowedToPlayAudio}showPlayOrUnmuteButton(){let i=this.failedAudioPlaybackTargets.size,e=this.failedVideoPlaybackTargets.size,t=this.failedMutedVideoPlaybackTargets.size,n="Play media";t>0?n="Play video":e>0?n="Unmute video":i>0&&(n="Play audio"),this.mediaPlayButton.textContent=n,this.Reveal.getRevealElement().appendChild(this.mediaPlayButton)}onAudioPlaybackNotAllowed(i){this.failedAudioPlaybackTargets.add(i),this.showPlayOrUnmuteButton(i)}onVideoPlaybackNotAllowed(i){this.failedVideoPlaybackTargets.add(i),this.showPlayOrUnmuteButton()}onMutedVideoPlaybackNotAllowed(i){this.failedMutedVideoPlaybackTargets.add(i),this.showPlayOrUnmuteButton()}resetTemporarilyMutedMedia(){new Set([...this.failedAudioPlaybackTargets,...this.failedVideoPlaybackTargets,...this.failedMutedVideoPlaybackTargets]).forEach(i=>{i.hasAttribute("data-muted-by-reveal")&&(i.muted=!1,i.removeAttribute("data-muted-by-reveal"))})}clearMediaPlaybackErrors(){this.resetTemporarilyMutedMedia(),this.failedAudioPlaybackTargets.clear(),this.failedVideoPlaybackTargets.clear(),this.failedMutedVideoPlaybackTargets.clear(),this.mediaPlayButton&&this.mediaPlayButton.parentNode&&this.mediaPlayButton.remove()}preventIframeAutoFocus(i){let e=i.target;if(e&&this.Reveal.getConfig().preventIframeAutoFocus){let t=0,n=()=>{document.activeElement===e?document.activeElement.blur():t<1e3&&(t+=100,setTimeout(n,100))};setTimeout(n,100)}}afterSlideChanged(){this.clearMediaPlaybackErrors()}},Gi=".slides section",bi=".slides>section",Qc=".slides>section.present>section",Yg=".backgrounds>.slide-background",Zg=/registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview|previewIframe/,Jg=class{constructor(i){this.Reveal=i}render(){this.element=document.createElement("div"),this.element.className="slide-number",this.Reveal.getRevealElement().appendChild(this.element)}configure(i,e){let t="none";i.slideNumber&&!this.Reveal.isPrintView()&&(i.showSlideNumber==="all"||i.showSlideNumber==="speaker"&&this.Reveal.isSpeakerNotes())&&(t="block"),this.element.style.display=t}update(){this.Reveal.getConfig().slideNumber&&this.element&&(this.element.innerHTML=this.getSlideNumber())}getSlideNumber(i=this.Reveal.getCurrentSlide()){let e=this.Reveal.getConfig(),t,n="h.v";if(typeof e.slideNumber=="function")t=e.slideNumber(i);else{typeof e.slideNumber=="string"&&(n=e.slideNumber),!/c/.test(n)&&this.Reveal.getHorizontalSlides().length===1&&(n="c");let r=i&&i.dataset.visibility==="uncounted"?0:1;switch(t=[],n){case"c":t.push(this.Reveal.getSlidePastCount(i)+r);break;case"c/t":t.push(this.Reveal.getSlidePastCount(i)+r,"/",this.Reveal.getTotalSlides());break;default:let a=this.Reveal.getIndices(i);t.push(a.h+r);let o=n==="h/v"?"/":".";this.Reveal.isVerticalSlide(i)&&t.push(o,a.v+1)}}let s="#"+this.Reveal.location.getHash(i);return this.formatNumber(t[0],t[1],t[2],s)}formatNumber(i,e,t,n="#"+this.Reveal.location.getHash()){return typeof t=="number"&&!isNaN(t)?`<a href="${n}">
					<span class="slide-number-a">${i}</span>
					<span class="slide-number-delimiter">${e}</span>
					<span class="slide-number-b">${t}</span>
					</a>`:`<a href="${n}">
					<span class="slide-number-a">${i}</span>
					</a>`}destroy(){this.element.remove()}},Kg=class{constructor(i){this.Reveal=i,this.onInput=this.onInput.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this)}render(){this.element=document.createElement("div"),this.element.className="jump-to-slide",this.jumpInput=document.createElement("input"),this.jumpInput.type="text",this.jumpInput.className="jump-to-slide-input",this.jumpInput.placeholder="Jump to slide",this.jumpInput.addEventListener("input",this.onInput),this.jumpInput.addEventListener("keydown",this.onKeyDown),this.jumpInput.addEventListener("blur",this.onBlur),this.element.appendChild(this.jumpInput)}show(){this.indicesOnShow=this.Reveal.getIndices(),this.Reveal.getRevealElement().appendChild(this.element),this.jumpInput.focus()}hide(){this.isVisible()&&(this.element.remove(),this.jumpInput.value="",clearTimeout(this.jumpTimeout),delete this.jumpTimeout)}isVisible(){return!!this.element.parentNode}jump(){clearTimeout(this.jumpTimeout),delete this.jumpTimeout;let i=this.jumpInput.value.trim(""),e;if(/^\d+$/.test(i)){let t=this.Reveal.getConfig().slideNumber;if(t==="c"||t==="c/t"){let n=this.Reveal.getSlides()[parseInt(i,10)-1];n&&(e=this.Reveal.getIndices(n))}}return e||(/^\d+\.\d+$/.test(i)&&(i=i.replace(".","/")),e=this.Reveal.location.getIndicesFromHash(i,{oneBasedIndex:!0})),!e&&/\S+/i.test(i)&&i.length>1&&(e=this.search(i)),e&&i!==""?(this.Reveal.slide(e.h,e.v,e.f),!0):(this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),!1)}jumpAfter(i){clearTimeout(this.jumpTimeout),this.jumpTimeout=setTimeout(()=>this.jump(),i)}search(i){let e=RegExp("\\b"+i.trim()+"\\b","i"),t=this.Reveal.getSlides().find(n=>e.test(n.innerText));return t?this.Reveal.getIndices(t):null}cancel(){this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),this.hide()}confirm(){this.jump(),this.hide()}destroy(){this.jumpInput.removeEventListener("input",this.onInput),this.jumpInput.removeEventListener("keydown",this.onKeyDown),this.jumpInput.removeEventListener("blur",this.onBlur),this.element.remove()}onKeyDown(i){i.keyCode===13?this.confirm():i.keyCode===27&&(this.cancel(),i.stopImmediatePropagation())}onInput(i){this.jumpAfter(200)}onBlur(){setTimeout(()=>this.hide(),1)}},nh=i=>{let e=i.match(/^#([0-9a-f]{3})$/i);if(e&&e[1]){let r=e[1];return{r:parseInt(r.charAt(0),16)*17,g:parseInt(r.charAt(1),16)*17,b:parseInt(r.charAt(2),16)*17}}let t=i.match(/^#([0-9a-f]{6})$/i);if(t&&t[1]){let r=t[1];return{r:parseInt(r.slice(0,2),16),g:parseInt(r.slice(2,4),16),b:parseInt(r.slice(4,6),16)}}let n=i.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);if(n)return{r:parseInt(n[1],10),g:parseInt(n[2],10),b:parseInt(n[3],10)};let s=i.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);return s?{r:parseInt(s[1],10),g:parseInt(s[2],10),b:parseInt(s[3],10),a:parseFloat(s[4])}:null},jg=i=>(typeof i=="string"&&(i=nh(i)),i?(i.r*299+i.g*587+i.b*114)/1e3:null),Qg=class{constructor(i){this.Reveal=i}render(){this.element=document.createElement("div"),this.element.className="backgrounds",this.Reveal.getRevealElement().appendChild(this.element)}create(){this.element.innerHTML="",this.element.classList.add("no-transition"),this.Reveal.getHorizontalSlides().forEach(i=>{let e=this.createBackground(i,this.element);Ge(i,"section").forEach(t=>{this.createBackground(t,e),e.classList.add("stack")})}),this.Reveal.getConfig().parallaxBackgroundImage?(this.element.style.backgroundImage='url("'+this.Reveal.getConfig().parallaxBackgroundImage+'")',this.element.style.backgroundSize=this.Reveal.getConfig().parallaxBackgroundSize,this.element.style.backgroundRepeat=this.Reveal.getConfig().parallaxBackgroundRepeat,this.element.style.backgroundPosition=this.Reveal.getConfig().parallaxBackgroundPosition,setTimeout(()=>{this.Reveal.getRevealElement().classList.add("has-parallax-background")},1)):(this.element.style.backgroundImage="",this.Reveal.getRevealElement().classList.remove("has-parallax-background"))}createBackground(i,e){let t=document.createElement("div");t.className="slide-background "+i.className.replace(/present|past|future/,"");let n=document.createElement("div");return n.className="slide-background-content",t.appendChild(n),e.appendChild(t),i.slideBackgroundElement=t,i.slideBackgroundContentElement=n,this.sync(i),t}sync(i){let e=i.slideBackgroundElement,t=i.slideBackgroundContentElement,n={background:i.getAttribute("data-background"),backgroundSize:i.getAttribute("data-background-size"),backgroundImage:i.getAttribute("data-background-image"),backgroundVideo:i.getAttribute("data-background-video"),backgroundIframe:i.getAttribute("data-background-iframe"),backgroundColor:i.getAttribute("data-background-color"),backgroundGradient:i.getAttribute("data-background-gradient"),backgroundRepeat:i.getAttribute("data-background-repeat"),backgroundPosition:i.getAttribute("data-background-position"),backgroundTransition:i.getAttribute("data-background-transition"),backgroundOpacity:i.getAttribute("data-background-opacity")},s=i.hasAttribute("data-preload");i.classList.remove("has-dark-background"),i.classList.remove("has-light-background"),e.removeAttribute("data-loaded"),e.removeAttribute("data-background-hash"),e.removeAttribute("data-background-size"),e.removeAttribute("data-background-transition"),e.style.backgroundColor="",t.style.backgroundSize="",t.style.backgroundRepeat="",t.style.backgroundPosition="",t.style.backgroundImage="",t.style.opacity="",t.innerHTML="",n.background&&(/^(http|file|\/\/)/gi.test(n.background)||/\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(n.background)?i.setAttribute("data-background-image",n.background):e.style.background=n.background),(n.background||n.backgroundColor||n.backgroundGradient||n.backgroundImage||n.backgroundVideo||n.backgroundIframe)&&e.setAttribute("data-background-hash",n.background+n.backgroundSize+n.backgroundImage+n.backgroundVideo+n.backgroundIframe+n.backgroundColor+n.backgroundGradient+n.backgroundRepeat+n.backgroundPosition+n.backgroundTransition+n.backgroundOpacity),n.backgroundSize&&e.setAttribute("data-background-size",n.backgroundSize),n.backgroundColor&&(e.style.backgroundColor=n.backgroundColor),n.backgroundGradient&&(e.style.backgroundImage=n.backgroundGradient),n.backgroundTransition&&e.setAttribute("data-background-transition",n.backgroundTransition),s&&e.setAttribute("data-preload",""),n.backgroundSize&&(t.style.backgroundSize=n.backgroundSize),n.backgroundRepeat&&(t.style.backgroundRepeat=n.backgroundRepeat),n.backgroundPosition&&(t.style.backgroundPosition=n.backgroundPosition),n.backgroundOpacity&&(t.style.opacity=n.backgroundOpacity);let r=this.getContrastClass(i);typeof r=="string"&&i.classList.add(r)}getContrastClass(i){let e=i.slideBackgroundElement,t=i.getAttribute("data-background-color");if(!t||!nh(t)){let n=window.getComputedStyle(e);n&&n.backgroundColor&&(t=n.backgroundColor)}if(t){let n=nh(t);if(n&&n.a!==0)return jg(t)<128?"has-dark-background":"has-light-background"}return null}bubbleSlideContrastClassToElement(i,e){["has-light-background","has-dark-background"].forEach(t=>{i.classList.contains(t)?e.classList.add(t):e.classList.remove(t)},this)}update(i=!1){let e=this.Reveal.getConfig(),t=this.Reveal.getCurrentSlide(),n=this.Reveal.getIndices(),s=null,r=e.rtl?"future":"past",a=e.rtl?"past":"future";if(Array.from(this.element.childNodes).forEach((l,c)=>{l.classList.remove("past","present","future"),c<n.h?l.classList.add(r):c>n.h?l.classList.add(a):(l.classList.add("present"),s=l),(i||c===n.h)&&Ge(l,".slide-background").forEach((h,u)=>{h.classList.remove("past","present","future");let d=typeof n.v=="number"?n.v:0;u<d?h.classList.add("past"):u>d?h.classList.add("future"):(h.classList.add("present"),c===n.h&&(s=h))})}),this.previousBackground&&!this.previousBackground.closest("body")&&(this.previousBackground=null),s&&this.previousBackground){let l=this.previousBackground.getAttribute("data-background-hash"),c=s.getAttribute("data-background-hash");if(c&&c===l&&s!==this.previousBackground){this.element.classList.add("no-transition");let h=s.querySelector("video"),u=this.previousBackground.querySelector("video");if(h&&u){let d=h.parentNode;u.parentNode.appendChild(h),d.appendChild(u)}}}let o=s!==this.previousBackground;if(o&&this.previousBackground&&this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground,{unloadIframes:!this.Reveal.slideContent.shouldPreload(this.previousBackground)}),o&&s){this.Reveal.slideContent.startEmbeddedContent(s);let l=s.querySelector(".slide-background-content");if(l){let c=l.style.backgroundImage||"";/\.gif/i.test(c)&&(l.style.backgroundImage="",window.getComputedStyle(l).opacity,l.style.backgroundImage=c)}this.previousBackground=s}t&&this.bubbleSlideContrastClassToElement(t,this.Reveal.getRevealElement()),setTimeout(()=>{this.element.classList.remove("no-transition")},10)}updateParallax(){let i=this.Reveal.getIndices();if(this.Reveal.getConfig().parallaxBackgroundImage){let e=this.Reveal.getHorizontalSlides(),t=this.Reveal.getVerticalSlides(),n=this.element.style.backgroundSize.split(" "),s,r;n.length===1?s=r=parseInt(n[0],10):(s=parseInt(n[0],10),r=parseInt(n[1],10));let a=this.element.offsetWidth,o=e.length,l,c;l=typeof this.Reveal.getConfig().parallaxBackgroundHorizontal=="number"?this.Reveal.getConfig().parallaxBackgroundHorizontal:o>1?(s-a)/(o-1):0,c=l*i.h*-1;let h=this.element.offsetHeight,u=t.length,d,p;d=typeof this.Reveal.getConfig().parallaxBackgroundVertical=="number"?this.Reveal.getConfig().parallaxBackgroundVertical:(r-h)/(u-1),p=u>0?d*i.v:0,this.element.style.backgroundPosition=c+"px "+-p+"px"}}destroy(){this.element.remove()}},Xd=0,e0=class{constructor(i){this.Reveal=i}run(i,e){this.reset();let t=this.Reveal.getSlides(),n=t.indexOf(e),s=t.indexOf(i);if(i&&e&&i.hasAttribute("data-auto-animate")&&e.hasAttribute("data-auto-animate")&&i.getAttribute("data-auto-animate-id")===e.getAttribute("data-auto-animate-id")&&!(n>s?e:i).hasAttribute("data-auto-animate-restart")){this.autoAnimateStyleSheet=this.autoAnimateStyleSheet||th();let r=this.getAutoAnimateOptions(e);i.dataset.autoAnimate="pending",e.dataset.autoAnimate="pending",r.slideDirection=n>s?"forward":"backward";let a=i.style.display==="none";a&&(i.style.display=this.Reveal.getConfig().display);let o=this.getAutoAnimatableElements(i,e).map(l=>this.autoAnimateElements(l.from,l.to,l.options||{},r,Xd++));if(a&&(i.style.display="none"),e.dataset.autoAnimateUnmatched!=="false"&&this.Reveal.getConfig().autoAnimateUnmatched===!0){let l=r.duration*.8,c=r.duration*.2;this.getUnmatchedAutoAnimateElements(e).forEach(h=>{let u=this.getAutoAnimateOptions(h,r),d="unmatched";(u.duration!==r.duration||u.delay!==r.delay)&&(d="unmatched-"+Xd++,o.push(`[data-auto-animate="running"] [data-auto-animate-target="${d}"] { transition: opacity ${u.duration}s ease ${u.delay}s; }`)),h.dataset.autoAnimateTarget=d},this),o.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${l}s ease ${c}s; }`)}this.autoAnimateStyleSheet.innerHTML=o.join(""),requestAnimationFrame(()=>{this.autoAnimateStyleSheet&&(getComputedStyle(this.autoAnimateStyleSheet).fontWeight,e.dataset.autoAnimate="running")}),this.Reveal.dispatchEvent({type:"autoanimate",data:{fromSlide:i,toSlide:e,sheet:this.autoAnimateStyleSheet}})}}reset(){Ge(this.Reveal.getRevealElement(),'[data-auto-animate]:not([data-auto-animate=""])').forEach(i=>{i.dataset.autoAnimate=""}),Ge(this.Reveal.getRevealElement(),"[data-auto-animate-target]").forEach(i=>{delete i.dataset.autoAnimateTarget}),this.autoAnimateStyleSheet&&this.autoAnimateStyleSheet.parentNode&&(this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet),this.autoAnimateStyleSheet=null)}autoAnimateElements(i,e,t,n,s){i.dataset.autoAnimateTarget="",e.dataset.autoAnimateTarget=s;let r=this.getAutoAnimateOptions(e,n);t.delay!==void 0&&(r.delay=t.delay),t.duration!==void 0&&(r.duration=t.duration),t.easing!==void 0&&(r.easing=t.easing);let a=this.getAutoAnimatableProperties("from",i,t),o=this.getAutoAnimatableProperties("to",e,t);if(e.classList.contains("fragment")&&delete o.styles.opacity,t.translate!==!1||t.scale!==!1){let h=this.Reveal.getScale(),u={x:(a.x-o.x)/h,y:(a.y-o.y)/h,scaleX:a.width/o.width,scaleY:a.height/o.height};u.x=Math.round(u.x*1e3)/1e3,u.y=Math.round(u.y*1e3)/1e3,u.scaleX=Math.round(u.scaleX*1e3)/1e3,u.scaleX=Math.round(u.scaleX*1e3)/1e3;let d=t.translate!==!1&&(u.x!==0||u.y!==0),p=t.scale!==!1&&(u.scaleX!==0||u.scaleY!==0);if(d||p){let f=[];d&&f.push(`translate(${u.x}px, ${u.y}px)`),p&&f.push(`scale(${u.scaleX}, ${u.scaleY})`),a.styles.transform=f.join(" "),a.styles["transform-origin"]="top left",o.styles.transform="none"}}for(let h in o.styles){let u=o.styles[h],d=a.styles[h];u===d?delete o.styles[h]:(u.explicitValue===!0&&(o.styles[h]=u.value),d.explicitValue===!0&&(a.styles[h]=d.value))}let l="",c=Object.keys(o.styles);if(c.length>0){a.styles.transition="none",o.styles.transition=`all ${r.duration}s ${r.easing} ${r.delay}s`,o.styles["transition-property"]=c.join(", "),o.styles["will-change"]=c.join(", ");let h=Object.keys(a.styles).map(d=>d+": "+a.styles[d]+" !important;").join(""),u=Object.keys(o.styles).map(d=>d+": "+o.styles[d]+" !important;").join("");l='[data-auto-animate-target="'+s+'"] {'+h+'}[data-auto-animate="running"] [data-auto-animate-target="'+s+'"] {'+u+"}"}return l}getAutoAnimateOptions(i,e){let t={easing:this.Reveal.getConfig().autoAnimateEasing,duration:this.Reveal.getConfig().autoAnimateDuration,delay:0};if(t=Ks(t,e),i.parentNode){let n=Jt(i.parentNode,"[data-auto-animate-target]");n&&(t=this.getAutoAnimateOptions(n,t))}return i.dataset.autoAnimateEasing&&(t.easing=i.dataset.autoAnimateEasing),i.dataset.autoAnimateDuration&&(t.duration=parseFloat(i.dataset.autoAnimateDuration)),i.dataset.autoAnimateDelay&&(t.delay=parseFloat(i.dataset.autoAnimateDelay)),t}getAutoAnimatableProperties(i,e,t){let n=this.Reveal.getConfig(),s={styles:[]};if(t.translate!==!1||t.scale!==!1){let a;if(typeof t.measure=="function")a=t.measure(e);else if(n.center)a=e.getBoundingClientRect();else{let o=this.Reveal.getScale();a={x:e.offsetLeft*o,y:e.offsetTop*o,width:e.offsetWidth*o,height:e.offsetHeight*o}}s.x=a.x,s.y=a.y,s.width=a.width,s.height=a.height}let r=getComputedStyle(e);return(t.styles||n.autoAnimateStyles).forEach(a=>{let o;typeof a=="string"&&(a={property:a}),a.from!==void 0&&i==="from"?o={value:a.from,explicitValue:!0}:a.to!==void 0&&i==="to"?o={value:a.to,explicitValue:!0}:(a.property==="line-height"&&(o=parseFloat(r["line-height"])/parseFloat(r["font-size"])),isNaN(o)&&(o=r[a.property])),o!==""&&(s.styles[a.property]=o)}),s}getAutoAnimatableElements(i,e){let t=(typeof this.Reveal.getConfig().autoAnimateMatcher=="function"?this.Reveal.getConfig().autoAnimateMatcher:this.getAutoAnimatePairs).call(this,i,e),n=[];return t.filter((s,r)=>{if(n.indexOf(s.to)===-1)return n.push(s.to),!0})}getAutoAnimatePairs(i,e){let t=[],n="h1, h2, h3, h4, h5, h6, p, li";return this.findAutoAnimateMatches(t,i,e,"[data-id]",s=>s.nodeName+":::"+s.getAttribute("data-id")),this.findAutoAnimateMatches(t,i,e,n,s=>s.nodeName+":::"+s.textContent.trim()),this.findAutoAnimateMatches(t,i,e,"img, video, iframe",s=>s.nodeName+":::"+(s.getAttribute("src")||s.getAttribute("data-src"))),this.findAutoAnimateMatches(t,i,e,"pre",s=>s.nodeName+":::"+s.textContent.trim()),t.forEach(s=>{_o(s.from,n)?s.options={scale:!1}:_o(s.from,"pre")&&(s.options={scale:!1,styles:["width","height"]},this.findAutoAnimateMatches(t,s.from,s.to,".hljs .hljs-ln-code",r=>r.textContent,{scale:!1,styles:[],measure:this.getLocalBoundingBox.bind(this)}),this.findAutoAnimateMatches(t,s.from,s.to,".hljs .hljs-ln-numbers[data-line-number]",r=>r.getAttribute("data-line-number"),{scale:!1,styles:["width"],measure:this.getLocalBoundingBox.bind(this)}))},this),t}getLocalBoundingBox(i){let e=this.Reveal.getScale();return{x:Math.round(i.offsetLeft*e*100)/100,y:Math.round(i.offsetTop*e*100)/100,width:Math.round(i.offsetWidth*e*100)/100,height:Math.round(i.offsetHeight*e*100)/100}}findAutoAnimateMatches(i,e,t,n,s,r){let a={},o={};[].slice.call(e.querySelectorAll(n)).forEach((l,c)=>{let h=s(l);typeof h=="string"&&h.length&&(a[h]=a[h]||[],a[h].push(l))}),[].slice.call(t.querySelectorAll(n)).forEach((l,c)=>{let h=s(l);o[h]=o[h]||[],o[h].push(l);let u;if(a[h]){let d=o[h].length-1,p=a[h].length-1;a[h][d]?(u=a[h][d],a[h][d]=null):a[h][p]&&(u=a[h][p],a[h][p]=null)}u&&i.push({from:u,to:l,options:r})})}getUnmatchedAutoAnimateElements(i){return[].slice.call(i.children).reduce((e,t)=>{let n=t.querySelector("[data-auto-animate-target]");return!t.hasAttribute("data-auto-animate-target")&&!n&&e.push(t),t.querySelector("[data-auto-animate-target]")&&(e=e.concat(this.getUnmatchedAutoAnimateElements(t))),e},[])}},t0=500,n0=4,i0=6,s0=8,r0=class{constructor(i){this.Reveal=i,this.active=!1,this.activeProgressBarPage=null,this.activeProgressBarTrigger=null,this.activatedCallbacks=[],this.onScroll=this.onScroll.bind(this)}activate(){if(this.active)return;let i=this.Reveal.getState();this.active=!0,this.slideHTMLBeforeActivation=this.Reveal.getSlidesElement().innerHTML;let e=Ge(this.Reveal.getRevealElement(),bi),t=Ge(this.Reveal.getRevealElement(),Yg);this.viewportElement.classList.add("loading-scroll-mode","reveal-scroll");let n,s=window.getComputedStyle(this.viewportElement);s&&s.background&&(n=s.background);let r=[],a=e[0].parentNode,o,l=(c,h,u,d)=>{let p;if(o&&this.Reveal.shouldAutoAnimateBetween(o,c))p=document.createElement("div"),p.className="scroll-page-content scroll-auto-animate-page",p.style.display="none",o.closest(".scroll-page-content").parentNode.appendChild(p);else{let f=document.createElement("div");if(f.className="scroll-page",r.push(f),d&&t.length>h){let m=t[h],v=window.getComputedStyle(m);v&&v.background?f.style.background=v.background:n&&(f.style.background=n)}else n&&(f.style.background=n);let g=document.createElement("div");g.className="scroll-page-sticky",f.appendChild(g),p=document.createElement("div"),p.className="scroll-page-content",g.appendChild(p)}p.appendChild(c),c.classList.remove("past","future"),c.removeAttribute("inert"),c.setAttribute("data-index-h",h),c.setAttribute("data-index-v",u),c.slideBackgroundElement&&(c.slideBackgroundElement.remove("past","future"),p.insertBefore(c.slideBackgroundElement,c)),o=c};e.forEach((c,h)=>{this.Reveal.isVerticalStack(c)?c.querySelectorAll("section").forEach((u,d)=>{l(u,h,d,!0)}):l(c,h,0)},this),this.createProgressBar(),Ge(this.Reveal.getRevealElement(),".stack").forEach(c=>c.remove()),r.forEach(c=>a.appendChild(c)),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.layout(),this.Reveal.setState(i),this.activatedCallbacks.forEach(c=>c()),this.activatedCallbacks=[],this.restoreScrollPosition(),this.viewportElement.classList.remove("loading-scroll-mode"),this.viewportElement.addEventListener("scroll",this.onScroll,{passive:!0})}deactivate(){if(!this.active)return;let i=this.Reveal.getState();this.active=!1,this.viewportElement.removeEventListener("scroll",this.onScroll),this.viewportElement.classList.remove("reveal-scroll"),this.pendingScrollRaf&&(cancelAnimationFrame(this.pendingScrollRaf),this.pendingScrollRaf=0),this.removeProgressBar(),this.Reveal.getSlidesElement().innerHTML=this.slideHTMLBeforeActivation,this.Reveal.sync(),this.Reveal.setState(i),this.slideHTMLBeforeActivation=null}toggle(i){typeof i=="boolean"?i?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}createProgressBar(){this.progressBar=document.createElement("div"),this.progressBar.className="scrollbar",this.progressBarInner=document.createElement("div"),this.progressBarInner.className="scrollbar-inner",this.progressBar.appendChild(this.progressBarInner),this.progressBarPlayhead=document.createElement("div"),this.progressBarPlayhead.className="scrollbar-playhead",this.progressBarInner.appendChild(this.progressBarPlayhead),this.viewportElement.insertBefore(this.progressBar,this.viewportElement.firstChild);let i=t=>{let n=(t.clientY-this.progressBarInner.getBoundingClientRect().top)/this.progressBarHeight;n=Math.max(Math.min(n,1),0),this.viewportElement.scrollTop=n*(this.viewportElement.scrollHeight-this.viewportElement.offsetHeight)},e=t=>{this.draggingProgressBar=!1,this.showProgressBar(),document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",e)};this.progressBarInner.addEventListener("mousedown",t=>{t.preventDefault(),this.draggingProgressBar=!0,document.addEventListener("mousemove",i),document.addEventListener("mouseup",e),i(t)})}removeProgressBar(){this.progressBar&&(this.progressBar.remove(),this.progressBar=null),this.activeProgressBarPage=null,this.activeProgressBarTrigger=null}layout(){this.isActive()&&(this.syncPages(),this.syncScrollPosition())}syncPages(){let i=this.Reveal.getConfig(),e=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),t=this.Reveal.getScale(),n=i.scrollLayout==="compact",s=this.viewportElement.offsetHeight,r=e.height*t,a=n?r:s;this.scrollTriggerHeight=n?r:s,this.viewportElement.style.setProperty("--page-height",a+"px"),this.viewportElement.style.scrollSnapType=typeof i.scrollSnap=="string"?`y ${i.scrollSnap}`:"",this.slideTriggers=[];let o=Array.from(this.Reveal.getRevealElement().querySelectorAll(".scroll-page"));this.pages=o.map(l=>{let c=this.createPage({pageElement:l,slideElement:l.querySelector("section"),stickyElement:l.querySelector(".scroll-page-sticky"),contentElement:l.querySelector(".scroll-page-content"),backgroundElement:l.querySelector(".slide-background"),autoAnimateElements:l.querySelectorAll(".scroll-auto-animate-page"),autoAnimatePages:[]});c.pageElement.style.setProperty("--slide-height",i.center===!0?"auto":e.height+"px"),this.slideTriggers.push({page:c,activate:()=>this.activatePage(c),deactivate:()=>this.deactivatePage(c)}),this.createFragmentTriggersForPage(c),c.autoAnimateElements.length>0&&this.createAutoAnimateTriggersForPage(c);let h=Math.max(c.scrollTriggers.length-1,0);h+=c.autoAnimatePages.reduce((u,d)=>u+Math.max(d.scrollTriggers.length-1,0),c.autoAnimatePages.length),c.pageElement.querySelectorAll(".scroll-snap-point").forEach(u=>u.remove());for(let u=0;u<h+1;u++){let d=document.createElement("div");d.className="scroll-snap-point",d.style.height=this.scrollTriggerHeight+"px",d.style.scrollSnapAlign=n?"center":"start",c.pageElement.appendChild(d),u===0&&(d.style.marginTop=-this.scrollTriggerHeight+"px")}return n&&c.scrollTriggers.length>0?(c.pageHeight=s,c.pageElement.style.setProperty("--page-height",s+"px")):(c.pageHeight=a,c.pageElement.style.removeProperty("--page-height")),c.scrollPadding=this.scrollTriggerHeight*h,c.totalHeight=c.pageHeight+c.scrollPadding,c.pageElement.style.setProperty("--page-scroll-padding",c.scrollPadding+"px"),h>0?(c.stickyElement.style.position="sticky",c.stickyElement.style.top=Math.max((s-c.pageHeight)/2,0)+"px"):(c.stickyElement.style.position="relative",c.pageElement.style.scrollSnapAlign=c.pageHeight<s?"center":"start"),c}),this.setTriggerRanges(),this.viewportElement.setAttribute("data-scrollbar",i.scrollProgress),i.scrollProgress&&this.totalScrollTriggerCount>1?(this.progressBar||this.createProgressBar(),this.syncProgressBar()):this.removeProgressBar()}setTriggerRanges(){this.totalScrollTriggerCount=this.slideTriggers.reduce((e,t)=>e+Math.max(t.page.scrollTriggers.length,1),0);let i=0;this.slideTriggers.forEach((e,t)=>{e.range=[i,i+Math.max(e.page.scrollTriggers.length,1)/this.totalScrollTriggerCount];let n=(e.range[1]-e.range[0])/e.page.scrollTriggers.length;e.page.scrollTriggers.forEach((s,r)=>{s.range=[i+r*n,i+(r+1)*n]}),i=e.range[1]}),this.slideTriggers[this.slideTriggers.length-1].range[1]=1}createFragmentTriggersForPage(i,e){e=e||i.slideElement;let t=this.Reveal.fragments.sort(e.querySelectorAll(".fragment"),!0);return t.length&&(i.fragments=this.Reveal.fragments.sort(e.querySelectorAll(".fragment:not(.disabled)")),i.scrollTriggers.push({activate:()=>{this.Reveal.fragments.update(-1,i.fragments,e)}}),t.forEach((n,s)=>{i.scrollTriggers.push({activate:()=>{this.Reveal.fragments.update(s,i.fragments,e)}})})),i.scrollTriggers.length}createAutoAnimateTriggersForPage(i){i.autoAnimateElements.length>0&&this.slideTriggers.push(...Array.from(i.autoAnimateElements).map((e,t)=>{let n=this.createPage({slideElement:e.querySelector("section"),contentElement:e,backgroundElement:e.querySelector(".slide-background")});return this.createFragmentTriggersForPage(n,n.slideElement),i.autoAnimatePages.push(n),{page:n,activate:()=>this.activatePage(n),deactivate:()=>this.deactivatePage(n)}}))}createPage(i){return i.scrollTriggers=[],i.indexh=parseInt(i.slideElement.getAttribute("data-index-h"),10),i.indexv=parseInt(i.slideElement.getAttribute("data-index-v"),10),i}syncProgressBar(){this.progressBarInner.querySelectorAll(".scrollbar-slide").forEach(r=>r.remove()),this.activeProgressBarPage=null,this.activeProgressBarTrigger=null,this.getAllPages().forEach(r=>{r.progressBarSlide=null,r.scrollTriggers.forEach(a=>a.progressBarElement=null)});let i=this.viewportElement.scrollHeight,e=this.viewportElement.offsetHeight,t=e/i;this.progressBarHeight=this.progressBarInner.offsetHeight,this.playheadHeight=Math.max(t*this.progressBarHeight,s0),this.progressBarScrollableHeight=this.progressBarHeight-this.playheadHeight;let n=e/i*this.progressBarHeight,s=Math.min(n/8,n0);this.progressBarPlayhead.style.height=this.playheadHeight-s+"px",n>i0&&this.slideTriggers.forEach(r=>{let{page:a}=r;a.progressBarSlide=document.createElement("div"),a.progressBarSlide.className="scrollbar-slide",a.progressBarSlide.style.top=r.range[0]*this.progressBarHeight+"px",a.progressBarSlide.style.height=(r.range[1]-r.range[0])*this.progressBarHeight-s+"px",a.progressBarSlide.classList.toggle("has-triggers",a.scrollTriggers.length>0),this.progressBarInner.appendChild(a.progressBarSlide),a.scrollTriggers.forEach((o,l)=>{let c=document.createElement("div");c.className="scrollbar-trigger",c.style.top=(o.range[0]-r.range[0])*this.progressBarHeight+"px",c.style.height=(o.range[1]-o.range[0])*this.progressBarHeight-s+"px",a.progressBarSlide.appendChild(c),l===0&&(c.style.display="none"),o.progressBarElement=c})})}syncScrollPosition(){let i=this.viewportElement.offsetHeight,e=i/this.viewportElement.scrollHeight,t=this.viewportElement.scrollTop,n=this.viewportElement.scrollHeight-i,s=Math.max(Math.min(t/n,1),0),r=Math.max(Math.min((t+i/2)/this.viewportElement.scrollHeight,1),0),a,o=null;this.slideTriggers.forEach(l=>{let{page:c}=l,h=s>=l.range[0]-e*2&&s<=l.range[1]+e*2;h&&!c.loaded?(c.loaded=!0,this.Reveal.slideContent.load(c.slideElement)):!h&&c.loaded&&(c.loaded=!1,this.Reveal.slideContent.unload(c.slideElement)),s>=l.range[0]&&s<=l.range[1]?(this.activateTrigger(l),a=l.page):l.active&&this.deactivateTrigger(l)}),a&&a.scrollTriggers.forEach(l=>{r>=l.range[0]&&r<=l.range[1]?(this.activateTrigger(l),o=l):l.active&&this.deactivateTrigger(l)}),this.setProgressBarValue(t/(this.viewportElement.scrollHeight-i),a,o)}setProgressBarValue(i,e=null,t=null){if(this.progressBar){if(this.progressBarPlayhead.style.transform=`translateY(${i*this.progressBarScrollableHeight}px)`,this.activeProgressBarPage!==e){var n,s;(n=this.activeProgressBarPage)==null||(n=n.progressBarSlide)==null||n.classList.remove("active"),e==null||(s=e.progressBarSlide)==null||s.classList.add("active"),this.activeProgressBarPage=e}if(this.activeProgressBarTrigger!==t){var r,a;(r=this.activeProgressBarTrigger)==null||(r=r.progressBarElement)==null||r.classList.remove("active"),t==null||(a=t.progressBarElement)==null||a.classList.add("active"),this.activeProgressBarTrigger=t}this.showProgressBar()}}showProgressBar(){this.progressBar.classList.add("visible"),clearTimeout(this.hideProgressBarTimeout),this.Reveal.getConfig().scrollProgress==="auto"&&!this.draggingProgressBar&&(this.hideProgressBarTimeout=setTimeout(()=>{this.progressBar&&this.progressBar.classList.remove("visible")},t0))}prev(){this.viewportElement.scrollTop-=this.scrollTriggerHeight}next(){this.viewportElement.scrollTop+=this.scrollTriggerHeight}scrollToSlide(i){if(!this.active)this.activatedCallbacks.push(()=>this.scrollToSlide(i));else{let e=this.getScrollTriggerBySlide(i);e&&(this.viewportElement.scrollTop=e.range[0]*(this.viewportElement.scrollHeight-this.viewportElement.offsetHeight))}}storeScrollPosition(){clearTimeout(this.storeScrollPositionTimeout),this.storeScrollPositionTimeout=setTimeout(()=>{sessionStorage.setItem("reveal-scroll-top",this.viewportElement.scrollTop),sessionStorage.setItem("reveal-scroll-origin",location.origin+location.pathname),this.storeScrollPositionTimeout=null},50)}restoreScrollPosition(){let i=sessionStorage.getItem("reveal-scroll-top"),e=sessionStorage.getItem("reveal-scroll-origin");i&&e===location.origin+location.pathname&&(this.viewportElement.scrollTop=parseInt(i,10))}activatePage(i){if(!i.active){i.active=!0;let{slideElement:e,backgroundElement:t,contentElement:n,indexh:s,indexv:r}=i;n.style.display="block",e.classList.add("present"),t&&t.classList.add("present"),this.Reveal.setCurrentScrollPage(e,s,r),this.Reveal.backgrounds.bubbleSlideContrastClassToElement(e,this.viewportElement),Array.from(n.parentNode.querySelectorAll(".scroll-page-content")).forEach(a=>{a!==n&&(a.style.display="none")})}}deactivatePage(i){i.active&&(i.active=!1,i.slideElement&&i.slideElement.classList.remove("present"),i.backgroundElement&&i.backgroundElement.classList.remove("present"))}activateTrigger(i){i.active||(i.active=!0,i.activate())}deactivateTrigger(i){i.active&&(i.active=!1,i.deactivate&&i.deactivate())}getSlideByIndices(i,e){let t=this.getAllPages().find(n=>n.indexh===i&&n.indexv===e);return t?t.slideElement:null}getScrollTriggerBySlide(i){return this.slideTriggers.find(e=>e.page.slideElement===i)}getAllPages(){return this.pages.flatMap(i=>[i,...i.autoAnimatePages||[]])}onScroll(){this.pendingScrollRaf||(this.pendingScrollRaf=requestAnimationFrame(()=>{this.pendingScrollRaf=0,this.syncScrollPosition(),this.storeScrollPosition()}))}get viewportElement(){return this.Reveal.getViewportElement()}};function qd(i,e,t,n,s,r,a){try{var o=i[r](a),l=o.value}catch(c){t(c);return}o.done?e(l):Promise.resolve(l).then(n,s)}function a0(i){return function(){var e=this,t=arguments;return new Promise(function(n,s){var r=i.apply(e,t);function a(l){qd(r,n,s,a,o,"next",l)}function o(l){qd(r,n,s,a,o,"throw",l)}a(void 0)})}}var o0=class{constructor(i){this.Reveal=i}activate(){var i=this;return a0(function*(){let e=i.Reveal.getConfig(),t=Ge(i.Reveal.getRevealElement(),Gi),n=e.slideNumber&&/all|print/i.test(e.showSlideNumber),s=i.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),r=Math.floor(s.width*(1+e.margin)),a=Math.floor(s.height*(1+e.margin)),o=s.width,l=s.height;yield new Promise(requestAnimationFrame),th("@page{size:"+r+"px "+a+"px; margin: 0px;}"),th(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: "+o+"px; max-height:"+l+"px}"),document.documentElement.classList.add("reveal-print","print-pdf"),document.body.style.width=r+"px",document.body.style.height=a+"px";let c=i.Reveal.getViewportElement(),h;if(c){let g=window.getComputedStyle(c);g&&g.background&&(h=g.background)}yield new Promise(requestAnimationFrame),i.Reveal.layoutSlideContents(o,l),yield new Promise(requestAnimationFrame);let u=t.map(g=>g.scrollHeight),d=[],p=t[0].parentNode,f=1;t.forEach(function(g,m){if(g.classList.contains("stack")===!1){let v=(r-o)/2,x=(a-l)/2,E=u[m],y=Math.max(Math.ceil(E/a),1);y=Math.min(y,e.pdfMaxPagesPerSlide),(y===1&&e.center||g.classList.contains("center"))&&(x=Math.max((a-E)/2,0));let M=document.createElement("div");if(d.push(M),M.className="pdf-page",M.style.height=(a+e.pdfPageHeightOffset)*y+"px",h&&(M.style.background=h),M.appendChild(g),g.style.left=v+"px",g.style.top=x+"px",g.style.width=o+"px",this.Reveal.slideContent.layout(g),g.slideBackgroundElement&&M.insertBefore(g.slideBackgroundElement,g),e.showNotes){let w=this.Reveal.getSlideNotes(g);if(w){let _=typeof e.showNotes=="string"?e.showNotes:"inline",b=document.createElement("div");b.classList.add("speaker-notes"),b.classList.add("speaker-notes-pdf"),b.setAttribute("data-layout",_),b.innerHTML=w,_==="separate-page"?d.push(b):(b.style.left="8px",b.style.bottom="8px",b.style.width=r-16+"px",M.appendChild(b))}}if(n){let w=document.createElement("div");w.classList.add("slide-number"),w.classList.add("slide-number-pdf"),w.innerHTML=f++,M.appendChild(w)}if(e.pdfSeparateFragments){let w=this.Reveal.fragments.sort(M.querySelectorAll(".fragment"),!0),_;w.forEach(function(b,C){_&&_.forEach(function(P){P.classList.remove("current-fragment")}),b.forEach(function(P){P.classList.add("visible","current-fragment")},this);let T=M.cloneNode(!0);if(n){let P=T.querySelector(".slide-number-pdf"),N=C+1;P.innerHTML+="."+N}d.push(T),_=b},this),w.forEach(function(b){b.forEach(function(C){C.classList.remove("visible","current-fragment")})})}else Ge(M,".fragment:not(.fade-out)").forEach(function(w){w.classList.add("visible")})}},i),yield new Promise(requestAnimationFrame),d.forEach(g=>p.appendChild(g)),i.Reveal.slideContent.layout(i.Reveal.getSlidesElement()),i.Reveal.dispatchEvent({type:"pdf-ready"}),c.classList.remove("loading-scroll-mode")})()}isActive(){return this.Reveal.getConfig().view==="print"}},l0=class{constructor(i){this.Reveal=i}configure(i,e){i.fragments===!1?this.disable():e.fragments===!1&&this.enable()}disable(){Ge(this.Reveal.getSlidesElement(),".fragment").forEach(i=>{i.classList.add("visible"),i.classList.remove("current-fragment")})}enable(){Ge(this.Reveal.getSlidesElement(),".fragment").forEach(i=>{i.classList.remove("visible"),i.classList.remove("current-fragment")})}availableRoutes(){let i=this.Reveal.getCurrentSlide();if(i&&this.Reveal.getConfig().fragments){let e=i.querySelectorAll(".fragment:not(.disabled)"),t=i.querySelectorAll(".fragment:not(.disabled):not(.visible)");return{prev:e.length-t.length>0,next:!!t.length}}return{prev:!1,next:!1}}sort(i,e=!1){i=Array.from(i);let t=[],n=[],s=[];i.forEach(a=>{if(a.hasAttribute("data-fragment-index")){let o=parseInt(a.getAttribute("data-fragment-index"),10);t[o]||(t[o]=[]),t[o].push(a)}else n.push([a])}),t=t.concat(n);let r=0;return t.forEach(a=>{a.forEach(o=>{s.push(o),o.setAttribute("data-fragment-index",r)}),r++}),e===!0?t:s}sortAll(){this.Reveal.getHorizontalSlides().forEach(i=>{let e=Ge(i,"section");e.forEach((t,n)=>{this.sort(t.querySelectorAll(".fragment"))},this),e.length===0&&this.sort(i.querySelectorAll(".fragment"))})}update(i,e,t=this.Reveal.getCurrentSlide()){let n={shown:[],hidden:[]};if(t&&this.Reveal.getConfig().fragments&&(e=e||this.sort(t.querySelectorAll(".fragment")),e.length)){let s=0;if(typeof i!="number"){let r=this.sort(t.querySelectorAll(".fragment.visible")).pop();r&&(i=parseInt(r.getAttribute("data-fragment-index")||0,10))}Array.from(e).forEach((r,a)=>{if(r.hasAttribute("data-fragment-index")&&(a=parseInt(r.getAttribute("data-fragment-index"),10)),s=Math.max(s,a),a<=i){let o=r.classList.contains("visible");r.classList.add("visible"),r.classList.remove("current-fragment"),a===i&&(this.Reveal.announceStatus(this.Reveal.getStatusText(r)),r.classList.add("current-fragment"),this.Reveal.slideContent.startEmbeddedContent(r)),o||(n.shown.push(r),this.Reveal.dispatchEvent({target:r,type:"visible",bubbles:!1}))}else{let o=r.classList.contains("visible");r.classList.remove("visible"),r.classList.remove("current-fragment"),o&&(this.Reveal.slideContent.stopEmbeddedContent(r),n.hidden.push(r),this.Reveal.dispatchEvent({target:r,type:"hidden",bubbles:!1}))}}),i=typeof i=="number"?i:-1,i=Math.max(Math.min(i,s),-1),t.setAttribute("data-fragment",i)}return n.hidden.length&&this.Reveal.dispatchEvent({type:"fragmenthidden",data:{fragment:n.hidden[0],fragments:n.hidden}}),n.shown.length&&this.Reveal.dispatchEvent({type:"fragmentshown",data:{fragment:n.shown[0],fragments:n.shown}}),n}sync(i=this.Reveal.getCurrentSlide()){return this.sort(i.querySelectorAll(".fragment"))}goto(i,e=0){let t=this.Reveal.getCurrentSlide();if(t&&this.Reveal.getConfig().fragments){let n=this.sort(t.querySelectorAll(".fragment:not(.disabled)"));if(n.length){if(typeof i!="number"){let r=this.sort(t.querySelectorAll(".fragment:not(.disabled).visible")).pop();i=r?parseInt(r.getAttribute("data-fragment-index")||0,10):-1}i+=e;let s=this.update(i,n);return this.Reveal.controls.update(),this.Reveal.progress.update(),this.Reveal.getConfig().fragmentInURL&&this.Reveal.location.writeURL(),!!(s.shown.length||s.hidden.length)}}return!1}next(){return this.goto(null,1)}prev(){return this.goto(null,-1)}},c0=class{constructor(i){this.Reveal=i,this.active=!1,this.onSlideClicked=this.onSlideClicked.bind(this)}activate(){if(this.Reveal.getConfig().overview&&!this.Reveal.isScrollView()&&!this.isActive()){this.active=!0,this.Reveal.getRevealElement().classList.add("overview"),this.Reveal.cancelAutoSlide(),this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()),Ge(this.Reveal.getRevealElement(),Gi).forEach(t=>{t.classList.contains("stack")||t.addEventListener("click",this.onSlideClicked,!0)});let i=this.Reveal.getComputedSlideSize();this.overviewSlideWidth=i.width+70,this.overviewSlideHeight=i.height+70,this.Reveal.getConfig().rtl&&(this.overviewSlideWidth=-this.overviewSlideWidth),this.Reveal.updateSlidesVisibility(),this.layout(),this.update(),this.Reveal.layout();let e=this.Reveal.getIndices();this.Reveal.dispatchEvent({type:"overviewshown",data:{indexh:e.h,indexv:e.v,currentSlide:this.Reveal.getCurrentSlide()}})}}layout(){this.Reveal.getHorizontalSlides().forEach((i,e)=>{i.setAttribute("data-index-h",e),Hi(i,"translate3d("+e*this.overviewSlideWidth+"px, 0, 0)"),i.classList.contains("stack")&&Ge(i,"section").forEach((t,n)=>{t.setAttribute("data-index-h",e),t.setAttribute("data-index-v",n),Hi(t,"translate3d(0, "+n*this.overviewSlideHeight+"px, 0)")})}),Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((i,e)=>{Hi(i,"translate3d("+e*this.overviewSlideWidth+"px, 0, 0)"),Ge(i,".slide-background").forEach((t,n)=>{Hi(t,"translate3d(0, "+n*this.overviewSlideHeight+"px, 0)")})})}update(){let i=Math.min(window.innerWidth,window.innerHeight),e=Math.max(i/5,150)/i,t=this.Reveal.getIndices();this.Reveal.transformSlides({overview:["scale("+e+")","translateX("+-t.h*this.overviewSlideWidth+"px)","translateY("+-t.v*this.overviewSlideHeight+"px)"].join(" ")})}deactivate(){if(this.Reveal.getConfig().overview){this.active=!1,this.Reveal.getRevealElement().classList.remove("overview"),this.Reveal.getRevealElement().classList.add("overview-deactivating"),setTimeout(()=>{this.Reveal.getRevealElement().classList.remove("overview-deactivating")},1),this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()),Ge(this.Reveal.getRevealElement(),Gi).forEach(e=>{Hi(e,""),e.removeEventListener("click",this.onSlideClicked,!0)}),Ge(this.Reveal.getBackgroundsElement(),".slide-background").forEach(e=>{Hi(e,"")}),this.Reveal.transformSlides({overview:""});let i=this.Reveal.getIndices();this.Reveal.slide(i.h,i.v),this.Reveal.layout(),this.Reveal.cueAutoSlide(),this.Reveal.dispatchEvent({type:"overviewhidden",data:{indexh:i.h,indexv:i.v,currentSlide:this.Reveal.getCurrentSlide()}})}}toggle(i){typeof i=="boolean"?i?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}onSlideClicked(i){if(this.isActive()){i.preventDefault();let e=i.target;for(;e&&!e.nodeName.match(/section/gi);)e=e.parentNode;if(e&&!e.classList.contains("disabled")&&(this.deactivate(),e.nodeName.match(/section/gi))){let t=parseInt(e.getAttribute("data-index-h"),10),n=parseInt(e.getAttribute("data-index-v"),10);this.Reveal.slide(t,n)}}}},h0=class{constructor(i){this.Reveal=i,this.shortcuts={},this.bindings={},this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this)}configure(i,e){i.navigationMode==="linear"?(this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"]="Next slide",this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"]="Previous slide"):(this.shortcuts["N  ,  SPACE"]="Next slide",this.shortcuts["P  ,  Shift SPACE"]="Previous slide",this.shortcuts["&#8592;  ,  H"]="Navigate left",this.shortcuts["&#8594;  ,  L"]="Navigate right",this.shortcuts["&#8593;  ,  K"]="Navigate up",this.shortcuts["&#8595;  ,  J"]="Navigate down"),this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"]="Navigate without fragments",this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"]="Jump to first/last slide",this.shortcuts["B  ,  ."]="Pause",this.shortcuts.F="Fullscreen",this.shortcuts.G="Jump to slide",this.shortcuts["ESC, O"]="Slide overview"}bind(){document.addEventListener("keydown",this.onDocumentKeyDown,!1)}unbind(){document.removeEventListener("keydown",this.onDocumentKeyDown,!1)}addKeyBinding(i,e){typeof i=="object"&&i.keyCode?this.bindings[i.keyCode]={callback:e,key:i.key,description:i.description}:this.bindings[i]={callback:e,key:null,description:null}}removeKeyBinding(i){delete this.bindings[i]}triggerKey(i){this.onDocumentKeyDown({keyCode:i})}registerKeyboardShortcut(i,e){this.shortcuts[i]=e}getShortcuts(){return this.shortcuts}getBindings(){return this.bindings}onDocumentKeyDown(i){let e=this.Reveal.getConfig();if(typeof e.keyboardCondition=="function"&&e.keyboardCondition(i)===!1||e.keyboardCondition==="focused"&&!this.Reveal.isFocused())return!0;let t=i.keyCode,n=!this.Reveal.isAutoSliding();this.Reveal.onUserInput(i);let s=document.activeElement&&document.activeElement.isContentEditable===!0,r=document.activeElement&&document.activeElement.tagName&&/input|textarea/i.test(document.activeElement.tagName),a=document.activeElement&&document.activeElement.className&&/speaker-notes/i.test(document.activeElement.className),o=!([32,37,38,39,40,63,78,80,191].indexOf(i.keyCode)!==-1&&i.shiftKey||i.altKey)&&(i.shiftKey||i.altKey||i.ctrlKey||i.metaKey);if(s||r||a||o)return;let l=[66,86,190,191,112],c;if(typeof e.keyboard=="object")for(c in e.keyboard)e.keyboard[c]==="togglePause"&&l.push(parseInt(c,10));if(this.Reveal.isOverlayOpen()&&!["Escape","f","c","b","."].includes(i.key)||this.Reveal.isPaused()&&l.indexOf(t)===-1)return!1;let h=e.navigationMode==="linear"||!this.Reveal.hasHorizontalSlides()||!this.Reveal.hasVerticalSlides(),u=!1;if(typeof e.keyboard=="object"){for(c in e.keyboard)if(parseInt(c,10)===t){let d=e.keyboard[c];typeof d=="function"?d.apply(null,[i]):typeof d=="string"&&typeof this.Reveal[d]=="function"&&this.Reveal[d].call(),u=!0}}if(u===!1){for(c in this.bindings)if(parseInt(c,10)===t){let d=this.bindings[c].callback;typeof d=="function"?d.apply(null,[i]):typeof d=="string"&&typeof this.Reveal[d]=="function"&&this.Reveal[d].call(),u=!0}}u===!1&&(u=!0,t===80||t===33?this.Reveal.prev({skipFragments:i.altKey}):t===78||t===34?this.Reveal.next({skipFragments:i.altKey}):t===72||t===37?i.shiftKey?this.Reveal.slide(0):!this.Reveal.overview.isActive()&&h?e.rtl?this.Reveal.next({skipFragments:i.altKey}):this.Reveal.prev({skipFragments:i.altKey}):this.Reveal.left({skipFragments:i.altKey}):t===76||t===39?i.shiftKey?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):!this.Reveal.overview.isActive()&&h?e.rtl?this.Reveal.prev({skipFragments:i.altKey}):this.Reveal.next({skipFragments:i.altKey}):this.Reveal.right({skipFragments:i.altKey}):t===75||t===38?i.shiftKey?this.Reveal.slide(void 0,0):!this.Reveal.overview.isActive()&&h?this.Reveal.prev({skipFragments:i.altKey}):this.Reveal.up({skipFragments:i.altKey}):t===74||t===40?i.shiftKey?this.Reveal.slide(void 0,Number.MAX_VALUE):!this.Reveal.overview.isActive()&&h?this.Reveal.next({skipFragments:i.altKey}):this.Reveal.down({skipFragments:i.altKey}):t===36?this.Reveal.slide(0):t===35?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):t===32?(this.Reveal.overview.isActive()&&this.Reveal.overview.deactivate(),i.shiftKey?this.Reveal.prev({skipFragments:i.altKey}):this.Reveal.next({skipFragments:i.altKey})):[58,59,66,86,190].includes(t)||t===191&&!i.shiftKey?this.Reveal.togglePause():t===70?jd(e.embedded?this.Reveal.getViewportElement():document.documentElement):t===65?e.autoSlideStoppable&&this.Reveal.toggleAutoSlide(n):t===71?e.jumpToSlide&&this.Reveal.toggleJumpToSlide():t===67&&this.Reveal.isOverlayOpen()?this.Reveal.closeOverlay():(t===63||t===191)&&i.shiftKey||t===112?this.Reveal.toggleHelp():u=!1),u?i.preventDefault&&i.preventDefault():t===27||t===79?(this.Reveal.closeOverlay()===!1&&this.Reveal.overview.toggle(),i.preventDefault&&i.preventDefault()):t===13&&this.Reveal.overview.isActive()&&(this.Reveal.overview.deactivate(),i.preventDefault&&i.preventDefault()),this.Reveal.cueAutoSlide()}};function $d(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(i,s).enumerable})),t.push.apply(t,n)}return t}function Gn(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]==null?{}:arguments[e];e%2?$d(Object(t),!0).forEach(function(n){ih(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):$d(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}var u0=class{constructor(i){ih(this,"MAX_REPLACE_STATE_FREQUENCY",1e3),this.Reveal=i,this.writeURLTimeout=0,this.replaceStateTimestamp=0,this.onWindowHashChange=this.onWindowHashChange.bind(this)}bind(){window.addEventListener("hashchange",this.onWindowHashChange,!1)}unbind(){window.removeEventListener("hashchange",this.onWindowHashChange,!1)}getIndicesFromHash(i=window.location.hash,e={}){let t=i.replace(/^#\/?/,""),n=t.split("/");if(!/^[0-9]*$/.test(n[0])&&t.length){let s,r;/\/[-\d]+$/g.test(t)&&(r=parseInt(t.split("/").pop(),10),r=isNaN(r)?void 0:r,t=t.split("/").shift());try{let a=decodeURIComponent(t);s=(document.getElementById(a)||document.querySelector(`[data-id="${a}"]`)).closest(".slides section")}catch{}if(s)return Gn(Gn({},this.Reveal.getIndices(s)),{},{f:r})}else{let s=this.Reveal.getConfig(),r=s.hashOneBasedIndex||e.oneBasedIndex?1:0,a=parseInt(n[0],10)-r||0,o=parseInt(n[1],10)-r||0,l;return s.fragmentInURL&&(l=parseInt(n[2],10),isNaN(l)&&(l=void 0)),{h:a,v:o,f:l}}return null}readURL(){let i=this.Reveal.getIndices(),e=this.getIndicesFromHash();e?(e.h!==i.h||e.v!==i.v||e.f!==void 0)&&this.Reveal.slide(e.h,e.v,e.f):this.Reveal.slide(i.h||0,i.v||0)}writeURL(i){let e=this.Reveal.getConfig(),t=this.Reveal.getCurrentSlide();if(clearTimeout(this.writeURLTimeout),typeof i=="number")this.writeURLTimeout=setTimeout(this.writeURL,i);else if(t){let n=this.getHash();e.history?window.location.hash=n:e.hash&&(n==="/"?this.debouncedReplaceState(window.location.pathname+window.location.search):this.debouncedReplaceState("#"+n))}}replaceState(i){window.history.replaceState(null,null,i),this.replaceStateTimestamp=Date.now()}debouncedReplaceState(i){clearTimeout(this.replaceStateTimeout),Date.now()-this.replaceStateTimestamp>this.MAX_REPLACE_STATE_FREQUENCY?this.replaceState(i):this.replaceStateTimeout=setTimeout(()=>this.replaceState(i),this.MAX_REPLACE_STATE_FREQUENCY)}getHash(i){let e="/",t=i||this.Reveal.getCurrentSlide(),n=t?t.getAttribute("id"):null;n&&(n=encodeURIComponent(n));let s=this.Reveal.getIndices(i);if(this.Reveal.getConfig().fragmentInURL||(s.f=void 0),typeof n=="string"&&n.length)e="/"+n,s.f>=0&&(e+="/"+s.f);else{let r=+!!this.Reveal.getConfig().hashOneBasedIndex;(s.h>0||s.v>0||s.f>=0)&&(e+=s.h+r),(s.v>0||s.f>=0)&&(e+="/"+(s.v+r)),s.f>=0&&(e+="/"+s.f)}return e}onWindowHashChange(i){this.readURL()}},d0=class{constructor(i){this.Reveal=i,this.onNavigateLeftClicked=this.onNavigateLeftClicked.bind(this),this.onNavigateRightClicked=this.onNavigateRightClicked.bind(this),this.onNavigateUpClicked=this.onNavigateUpClicked.bind(this),this.onNavigateDownClicked=this.onNavigateDownClicked.bind(this),this.onNavigatePrevClicked=this.onNavigatePrevClicked.bind(this),this.onNavigateNextClicked=this.onNavigateNextClicked.bind(this),this.onEnterFullscreen=this.onEnterFullscreen.bind(this)}render(){let i=this.Reveal.getConfig().rtl,e=this.Reveal.getRevealElement();this.element=document.createElement("aside"),this.element.className="controls",this.element.innerHTML=`<button class="navigate-left" aria-label="${i?"next slide":"previous slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-right" aria-label="${i?"previous slide":"next slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>
			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`,this.Reveal.getRevealElement().appendChild(this.element),this.controlsLeft=Ge(e,".navigate-left"),this.controlsRight=Ge(e,".navigate-right"),this.controlsUp=Ge(e,".navigate-up"),this.controlsDown=Ge(e,".navigate-down"),this.controlsPrev=Ge(e,".navigate-prev"),this.controlsNext=Ge(e,".navigate-next"),this.controlsFullscreen=Ge(e,".enter-fullscreen"),this.controlsRightArrow=this.element.querySelector(".navigate-right"),this.controlsLeftArrow=this.element.querySelector(".navigate-left"),this.controlsDownArrow=this.element.querySelector(".navigate-down")}configure(i,e){let t=i.controls==="speaker"||i.controls==="speaker-only";this.element.style.display=i.controls&&(!t||this.Reveal.isSpeakerNotes())?"block":"none",this.element.setAttribute("data-controls-layout",i.controlsLayout),this.element.setAttribute("data-controls-back-arrows",i.controlsBackArrows)}bind(){let i=["touchstart","click"];Qd&&(i=["touchend"]),i.forEach(e=>{this.controlsLeft.forEach(t=>t.addEventListener(e,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(t=>t.addEventListener(e,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(t=>t.addEventListener(e,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(t=>t.addEventListener(e,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(t=>t.addEventListener(e,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(t=>t.addEventListener(e,this.onNavigateNextClicked,!1)),this.controlsFullscreen.forEach(t=>t.addEventListener(e,this.onEnterFullscreen,!1))})}unbind(){["touchstart","touchend","click"].forEach(i=>{this.controlsLeft.forEach(e=>e.removeEventListener(i,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(e=>e.removeEventListener(i,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(e=>e.removeEventListener(i,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(e=>e.removeEventListener(i,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(e=>e.removeEventListener(i,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(e=>e.removeEventListener(i,this.onNavigateNextClicked,!1)),this.controlsFullscreen.forEach(e=>e.removeEventListener(i,this.onEnterFullscreen,!1))})}update(){let i=this.Reveal.availableRoutes();[...this.controlsLeft,...this.controlsRight,...this.controlsUp,...this.controlsDown,...this.controlsPrev,...this.controlsNext].forEach(t=>{t.classList.remove("enabled","fragmented"),t.setAttribute("disabled","disabled")}),i.left&&this.controlsLeft.forEach(t=>{t.classList.add("enabled"),t.removeAttribute("disabled")}),i.right&&this.controlsRight.forEach(t=>{t.classList.add("enabled"),t.removeAttribute("disabled")}),i.up&&this.controlsUp.forEach(t=>{t.classList.add("enabled"),t.removeAttribute("disabled")}),i.down&&this.controlsDown.forEach(t=>{t.classList.add("enabled"),t.removeAttribute("disabled")}),(i.left||i.up)&&this.controlsPrev.forEach(t=>{t.classList.add("enabled"),t.removeAttribute("disabled")}),(i.right||i.down)&&this.controlsNext.forEach(t=>{t.classList.add("enabled"),t.removeAttribute("disabled")});let e=this.Reveal.getCurrentSlide();if(e){let t=this.Reveal.fragments.availableRoutes();t.prev&&this.controlsPrev.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}),t.next&&this.controlsNext.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")});let n=this.Reveal.isVerticalSlide(e),s=n&&e.parentElement&&e.parentElement.querySelectorAll(":scope > section").length>1;n&&s?(t.prev&&this.controlsUp.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}),t.next&&this.controlsDown.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")})):(t.prev&&this.controlsLeft.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}),t.next&&this.controlsRight.forEach(r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}))}if(this.Reveal.getConfig().controlsTutorial){let t=this.Reveal.getIndices();!this.Reveal.hasNavigatedVertically()&&i.down?this.controlsDownArrow.classList.add("highlight"):(this.controlsDownArrow.classList.remove("highlight"),this.Reveal.getConfig().rtl?!this.Reveal.hasNavigatedHorizontally()&&i.left&&t.v===0?this.controlsLeftArrow.classList.add("highlight"):this.controlsLeftArrow.classList.remove("highlight"):!this.Reveal.hasNavigatedHorizontally()&&i.right&&t.v===0?this.controlsRightArrow.classList.add("highlight"):this.controlsRightArrow.classList.remove("highlight"))}}destroy(){this.unbind(),this.element.remove()}onNavigateLeftClicked(i){i.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.prev():this.Reveal.left()}onNavigateRightClicked(i){i.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.next():this.Reveal.right()}onNavigateUpClicked(i){i.preventDefault(),this.Reveal.onUserInput(),this.Reveal.up()}onNavigateDownClicked(i){i.preventDefault(),this.Reveal.onUserInput(),this.Reveal.down()}onNavigatePrevClicked(i){i.preventDefault(),this.Reveal.onUserInput(),this.Reveal.prev()}onNavigateNextClicked(i){i.preventDefault(),this.Reveal.onUserInput(),this.Reveal.next()}onEnterFullscreen(i){let e=this.Reveal.getConfig(),t=this.Reveal.getViewportElement();jd(e.embedded?t:t.parentElement)}},f0=class{constructor(i){this.Reveal=i,this.onProgressClicked=this.onProgressClicked.bind(this)}render(){this.element=document.createElement("div"),this.element.className="progress",this.Reveal.getRevealElement().appendChild(this.element),this.bar=document.createElement("span"),this.element.appendChild(this.bar)}configure(i,e){this.element.style.display=i.progress?"block":"none"}bind(){this.Reveal.getConfig().progress&&this.element&&this.element.addEventListener("click",this.onProgressClicked,!1)}unbind(){this.Reveal.getConfig().progress&&this.element&&this.element.removeEventListener("click",this.onProgressClicked,!1)}update(){if(this.Reveal.getConfig().progress&&this.bar){let i=this.Reveal.getProgress();this.Reveal.getTotalSlides()<2&&(i=0),this.bar.style.transform="scaleX("+i+")"}}getMaxWidth(){return this.Reveal.getRevealElement().offsetWidth}onProgressClicked(i){this.Reveal.onUserInput(i),i.preventDefault();let e=this.Reveal.getSlides(),t=e.length,n=Math.floor(i.clientX/this.getMaxWidth()*t);this.Reveal.getConfig().rtl&&(n=t-n);let s=this.Reveal.getIndices(e[n]);this.Reveal.slide(s.h,s.v)}destroy(){this.element.remove()}},p0=class{constructor(i){this.Reveal=i,this.lastMouseWheelStep=0,this.cursorHidden=!1,this.cursorInactiveTimeout=0,this.onDocumentCursorActive=this.onDocumentCursorActive.bind(this),this.onDocumentMouseScroll=this.onDocumentMouseScroll.bind(this)}configure(i,e){i.mouseWheel?document.addEventListener("wheel",this.onDocumentMouseScroll,!1):document.removeEventListener("wheel",this.onDocumentMouseScroll,!1),i.hideInactiveCursor?(document.addEventListener("mousemove",this.onDocumentCursorActive,!1),document.addEventListener("mousedown",this.onDocumentCursorActive,!1)):(this.showCursor(),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1))}showCursor(){this.cursorHidden&&(this.cursorHidden=!1,this.Reveal.getRevealElement().style.cursor="")}hideCursor(){this.cursorHidden===!1&&(this.cursorHidden=!0,this.Reveal.getRevealElement().style.cursor="none")}destroy(){this.showCursor(),document.removeEventListener("wheel",this.onDocumentMouseScroll,!1),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1)}onDocumentCursorActive(i){this.showCursor(),clearTimeout(this.cursorInactiveTimeout),this.cursorInactiveTimeout=setTimeout(this.hideCursor.bind(this),this.Reveal.getConfig().hideCursorTime)}onDocumentMouseScroll(i){if(Date.now()-this.lastMouseWheelStep>1e3){this.lastMouseWheelStep=Date.now();let e=i.detail||-i.wheelDelta;e>0?this.Reveal.next():e<0&&this.Reveal.prev()}}},Yd=(i,e)=>{let t=document.createElement("script");t.type="text/javascript",t.async=!1,t.defer=!1,t.src=i,typeof e=="function"&&(t.onload=s=>{s.type==="load"&&(t.onload=t.onerror=null,e())},t.onerror=s=>{t.onload=t.onerror=null,e(Error("Failed loading script: "+t.src+`
`+s))});let n=document.querySelector("head");n&&n.insertBefore(t,n.lastChild)},m0=class{constructor(i){this.Reveal=i,this.state="idle",this.registeredPlugins={},this.asyncDependencies=[]}load(i,e){return this.state="loading",i.forEach(this.registerPlugin.bind(this)),new Promise(t=>{let n=[],s=0;if(e.forEach(r=>{(!r.condition||r.condition())&&(r.async?this.asyncDependencies.push(r):n.push(r))}),n.length){s=n.length;let r=a=>{a&&typeof a.callback=="function"&&a.callback(),--s===0&&this.initPlugins().then(t)};n.forEach(a=>{typeof a.id=="string"?(this.registerPlugin(a),r(a)):typeof a.src=="string"?Yd(a.src,()=>r(a)):(console.warn("Unrecognized plugin format",a),r())})}else this.initPlugins().then(t)})}initPlugins(){return new Promise(i=>{let e=Object.values(this.registeredPlugins),t=e.length;if(t===0)this.loadAsync().then(i);else{let n,s=()=>{--t===0?this.loadAsync().then(i):n()},r=0;n=()=>{let a=e[r++];if(typeof a.init=="function"){let o=a.init(this.Reveal);o&&typeof o.then=="function"?o.then(s):s()}else s()},n()}})}loadAsync(){return this.state="loaded",this.asyncDependencies.length&&this.asyncDependencies.forEach(i=>{Yd(i.src,i.callback)}),Promise.resolve()}registerPlugin(i){arguments.length===2&&typeof arguments[0]=="string"?(i=arguments[1],i.id=arguments[0]):typeof i=="function"&&(i=i());let e=i.id;typeof e=="string"?this.registeredPlugins[e]===void 0?(this.registeredPlugins[e]=i,this.state==="loaded"&&typeof i.init=="function"&&i.init(this.Reveal)):console.warn('reveal.js: "'+e+'" plugin has already been registered'):console.warn("Unrecognized plugin format; can't find plugin.id",i)}hasPlugin(i){return!!this.registeredPlugins[i]}getPlugin(i){return this.registeredPlugins[i]}getRegisteredPlugins(){return this.registeredPlugins}destroy(){Object.values(this.registeredPlugins).forEach(i=>{typeof i.destroy=="function"&&i.destroy()}),this.registeredPlugins={},this.asyncDependencies=[]}},g0=class{constructor(i){this.Reveal=i,this.onSlidesClicked=this.onSlidesClicked.bind(this),this.iframeTriggerSelector=null,this.mediaTriggerSelector="[data-preview-image], [data-preview-video]",this.stateProps=["previewIframe","previewImage","previewVideo","previewFit"],this.state={}}update(){this.iframeTriggerSelector=this.Reveal.getConfig().previewLinks?"a[href]:not([data-preview-link=false]), [data-preview-link]:not(a):not([data-preview-link=false])":"[data-preview-link]:not([data-preview-link=false])";let i=this.Reveal.getSlidesElement().querySelectorAll(this.iframeTriggerSelector).length>0,e=this.Reveal.getSlidesElement().querySelectorAll(this.mediaTriggerSelector).length>0;i||e?this.Reveal.getSlidesElement().addEventListener("click",this.onSlidesClicked,!1):this.Reveal.getSlidesElement().removeEventListener("click",this.onSlidesClicked,!1)}createOverlay(i){this.dom=document.createElement("div"),this.dom.classList.add("r-overlay"),this.dom.classList.add(i),this.viewport=document.createElement("div"),this.viewport.classList.add("r-overlay-viewport"),this.dom.appendChild(this.viewport),this.Reveal.getRevealElement().appendChild(this.dom)}previewIframe(i){if(typeof i!="string")return;let e;try{e=new URL(i,document.baseURI)}catch{return}if(e.protocol==="file:"&&window.location.protocol!=="file:"||!["http:","https:","file:"].includes(e.protocol)&&e.href!=="about:blank")return;this.close(),this.state={previewIframe:i},this.createOverlay("r-overlay-preview"),this.dom.dataset.state="loading",this.viewport.innerHTML=`<header class="r-overlay-header">
				<a class="r-overlay-header-button r-overlay-external" target="_blank" rel="noopener"><span class="icon"></span></a>
				<button class="r-overlay-header-button r-overlay-close"><span class="icon"></span></button>
			</header>
			<div class="r-overlay-spinner"></div>
			<div class="r-overlay-content">
				<iframe></iframe>
				<small class="r-overlay-content-inner">
					<span class="r-overlay-error x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>
				</small>
			</div>`;let t=this.dom.querySelector("iframe");t.addEventListener("load",n=>{this.dom.dataset.state="loaded"},!1),t.src=e.href,this.dom.querySelector(".r-overlay-external").href=e.href,this.dom.querySelector(".r-overlay-close").addEventListener("click",n=>{this.close(),n.preventDefault()},!1),this.dom.querySelector(".r-overlay-external").addEventListener("click",n=>{this.close()},!1),this.Reveal.dispatchEvent({type:"previewiframe",data:{url:i}})}previewMedia(i,e,t){if(e!=="image"&&e!=="video"){console.warn("Please specify a valid media type to preview (image|video)");return}this.close(),t=t||"scale-down",this.createOverlay("r-overlay-preview"),this.dom.dataset.state="loading",this.dom.dataset.previewFit=t,this.viewport.innerHTML=`<header class="r-overlay-header">
				<button class="r-overlay-header-button r-overlay-close">Esc <span class="icon"></span></button>
			</header>
			<div class="r-overlay-spinner"></div>
			<div class="r-overlay-content"></div>`;let n=this.dom.querySelector(".r-overlay-content");if(e==="image"){this.state={previewImage:i,previewFit:t};let s=document.createElement("img",{});s.src=i,n.appendChild(s),s.addEventListener("load",()=>{this.dom.dataset.state="loaded"},!1),s.addEventListener("error",()=>{this.dom.dataset.state="error",n.innerHTML='<span class="r-overlay-error">Unable to load image.</span>'},!1),this.dom.style.cursor="zoom-out",this.dom.addEventListener("click",r=>{this.close()},!1),this.Reveal.dispatchEvent({type:"previewimage",data:{url:i}})}else if(e==="video"){this.state={previewVideo:i,previewFit:t};let s=document.createElement("video");s.autoplay=this.dom.dataset.previewAutoplay!=="false",s.controls=this.dom.dataset.previewControls!=="false",s.loop=this.dom.dataset.previewLoop==="true",s.muted=this.dom.dataset.previewMuted==="true",s.playsInline=!0,s.src=i,n.appendChild(s),s.addEventListener("loadeddata",()=>{this.dom.dataset.state="loaded"},!1),s.addEventListener("error",()=>{this.dom.dataset.state="error",n.innerHTML='<span class="r-overlay-error">Unable to load video.</span>'},!1),this.Reveal.dispatchEvent({type:"previewvideo",data:{url:i}})}else throw Error("Please specify a valid media type to preview");this.dom.querySelector(".r-overlay-close").addEventListener("click",s=>{this.close(),s.preventDefault()},!1)}previewImage(i,e){this.previewMedia(i,"image",e)}previewVideo(i,e){this.previewMedia(i,"video",e)}toggleHelp(i){typeof i=="boolean"?i?this.showHelp():this.close():this.dom?this.close():this.showHelp()}showHelp(){if(this.Reveal.getConfig().help){this.close(),this.createOverlay("r-overlay-help");let i='<p class="title">Keyboard Shortcuts</p>',e=this.Reveal.keyboard.getShortcuts(),t=this.Reveal.keyboard.getBindings();i+="<table><th>KEY</th><th>ACTION</th>";for(let n in e)i+=`<tr><td>${n}</td><td>${e[n]}</td></tr>`;for(let n in t)t[n].key&&t[n].description&&(i+=`<tr><td>${t[n].key}</td><td>${t[n].description}</td></tr>`);i+="</table>",this.viewport.innerHTML=`
				<header class="r-overlay-header">
					<button class="r-overlay-header-button r-overlay-close">Esc <span class="icon"></span></button>
				</header>
				<div class="r-overlay-content">
					<div class="r-overlay-help-content">${i}</div>
				</div>
			`,this.dom.querySelector(".r-overlay-close").addEventListener("click",n=>{this.close(),n.preventDefault()},!1),this.Reveal.dispatchEvent({type:"showhelp"})}}isOpen(){return!!this.dom}close(){return this.dom?(this.dom.remove(),this.dom=null,this.state={},this.Reveal.dispatchEvent({type:"closeoverlay"}),!0):!1}getState(){return this.state}setState(i){this.stateProps.every(e=>this.state[e]===i[e])||(i.previewIframe?this.previewIframe(i.previewIframe):i.previewImage?this.previewImage(i.previewImage,i.previewFit):i.previewVideo?this.previewVideo(i.previewVideo,i.previewFit):this.close())}onSlidesClicked(i){let e=i.target,t=e.closest(this.iframeTriggerSelector),n=e.closest(this.mediaTriggerSelector);if(t){if(i.metaKey||i.shiftKey||i.altKey)return;let s=t.getAttribute("data-preview-link"),r=typeof s=="string"&&s.startsWith("http")?s:t.getAttribute("href");r&&(this.previewIframe(r),i.preventDefault())}else if(n){if(n.hasAttribute("data-preview-image")){let s=n.dataset.previewImage||n.getAttribute("src");s&&(this.previewImage(s,n.dataset.previewFit),i.preventDefault())}else if(n.hasAttribute("data-preview-video")){let s=n.dataset.previewVideo||n.getAttribute("src");if(!s){let r=n.querySelector("source");r&&(s=r.getAttribute("src"))}s&&(this.previewVideo(s,n.dataset.previewFit),i.preventDefault())}}}destroy(){this.close()}},Zd=40,v0=1.03,_0=class{constructor(i){this.Reveal=i,this.touchStartX=0,this.touchStartY=0,this.touchStartCount=0,this.touchCaptured=!1,this.activePointers=new Map,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onPointerCancel=this.onPointerCancel.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this)}bind(){let i=this.Reveal.getRevealElement();"onpointerdown"in window?(i.addEventListener("pointerdown",this.onPointerDown,!1),i.addEventListener("pointermove",this.onPointerMove,!1),i.addEventListener("pointerup",this.onPointerUp,!1),i.addEventListener("pointercancel",this.onPointerCancel,!1)):(i.addEventListener("touchstart",this.onTouchStart,!1),i.addEventListener("touchmove",this.onTouchMove,!1),i.addEventListener("touchend",this.onTouchEnd,!1))}unbind(){let i=this.Reveal.getRevealElement();i.removeEventListener("pointerdown",this.onPointerDown,!1),i.removeEventListener("pointermove",this.onPointerMove,!1),i.removeEventListener("pointerup",this.onPointerUp,!1),i.removeEventListener("pointercancel",this.onPointerCancel,!1),i.removeEventListener("touchstart",this.onTouchStart,!1),i.removeEventListener("touchmove",this.onTouchMove,!1),i.removeEventListener("touchend",this.onTouchEnd,!1)}isSwipePrevented(i){if(_o(i,"video[controls], audio[controls]"))return!0;for(;i&&typeof i.hasAttribute=="function";){if(i.hasAttribute("data-prevent-swipe"))return!0;i=i.parentNode}return!1}isViewportZoomed(){if(!window.visualViewport||typeof window.visualViewport.scale!="number")return!1;let i=window.visualViewport.scale;return this.visualViewportBaseScale=this.visualViewportBaseScale===void 0?i:Math.min(this.visualViewportBaseScale,i),i/this.visualViewportBaseScale>v0}onTouchStart(i){if(this.touchCaptured=!1,this.isSwipePrevented(i.target))return!0;this.touchStartX=i.touches[0].clientX,this.touchStartY=i.touches[0].clientY,this.touchStartCount=i.touches.length}onTouchMove(i){if(this.isSwipePrevented(i.target))return!0;let e=this.Reveal.getConfig();if(this.touchCaptured)Qd&&i.preventDefault();else{this.Reveal.onUserInput(i);let t=i.touches[0].clientX,n=i.touches[0].clientY;if(i.touches.length===1&&this.touchStartCount!==2){let s=this.Reveal.availableRoutes({includeFragments:!0}),r=t-this.touchStartX,a=n-this.touchStartY;r>Zd&&Math.abs(r)>Math.abs(a)?(this.touchCaptured=!0,e.navigationMode==="linear"?e.rtl?this.Reveal.next():this.Reveal.prev():this.Reveal.left()):r<-40&&Math.abs(r)>Math.abs(a)?(this.touchCaptured=!0,e.navigationMode==="linear"?e.rtl?this.Reveal.prev():this.Reveal.next():this.Reveal.right()):a>Zd&&s.up?(this.touchCaptured=!0,e.navigationMode==="linear"?this.Reveal.prev():this.Reveal.up()):a<-40&&s.down&&(this.touchCaptured=!0,e.navigationMode==="linear"?this.Reveal.next():this.Reveal.down()),e.embedded?(this.touchCaptured||this.Reveal.isVerticalSlide())&&i.preventDefault():i.preventDefault()}}}onTouchEnd(i){this.touchCaptured&&!this.Reveal.slideContent.isAllowedToPlayAudio()&&this.Reveal.startEmbeddedContent(this.Reveal.getCurrentSlide()),this.touchCaptured=!1}getActiveTouches(){return Array.from(this.activePointers.values(),i=>({clientX:i.clientX,clientY:i.clientY}))}onPointerDown(i){i.pointerType==="touch"&&(this.activePointers.set(i.pointerId,i),i.touches=this.getActiveTouches(),this.onTouchStart(i))}onPointerMove(i){i.pointerType==="touch"&&(this.activePointers.set(i.pointerId,i),i.touches=this.getActiveTouches(),this.onTouchMove(i))}onPointerUp(i){i.pointerType==="touch"&&(this.activePointers.delete(i.pointerId),i.touches=this.getActiveTouches(),this.onTouchEnd(i))}onPointerCancel(i){i.pointerType==="touch"&&(this.activePointers.delete(i.pointerId),i.touches=this.getActiveTouches(),this.onTouchEnd(i))}},eh="focus",Jd="blur",y0=class{constructor(i){this.Reveal=i,this.onRevealPointerDown=this.onRevealPointerDown.bind(this),this.onDocumentPointerDown=this.onDocumentPointerDown.bind(this)}configure(i,e){i.embedded?this.blur():(this.focus(),this.unbind())}bind(){this.Reveal.getConfig().embedded&&this.Reveal.getRevealElement().addEventListener("pointerdown",this.onRevealPointerDown,!1)}unbind(){this.Reveal.getRevealElement().removeEventListener("pointerdown",this.onRevealPointerDown,!1),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)}focus(){this.state!==eh&&(this.Reveal.getRevealElement().classList.add("focused"),document.addEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=eh}blur(){this.state!==Jd&&(this.Reveal.getRevealElement().classList.remove("focused"),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=Jd}isFocused(){return this.state===eh}destroy(){this.Reveal.getRevealElement().classList.remove("focused")}onRevealPointerDown(i){this.focus()}onDocumentPointerDown(i){let e=Jt(i.target,".reveal");(!e||e!==this.Reveal.getRevealElement())&&this.blur()}},x0=class{constructor(i){this.Reveal=i}render(){this.element=document.createElement("div"),this.element.className="speaker-notes",this.element.setAttribute("data-prevent-swipe",""),this.element.setAttribute("tabindex","0"),this.Reveal.getRevealElement().appendChild(this.element)}configure(i,e){i.showNotes&&this.element.setAttribute("data-layout",typeof i.showNotes=="string"?i.showNotes:"inline")}update(){this.Reveal.getConfig().showNotes&&this.element&&this.Reveal.getCurrentSlide()&&!this.Reveal.isScrollView()&&!this.Reveal.isPrintView()&&(this.element.innerHTML=this.getSlideNotes()||'<span class="notes-placeholder">No notes on this slide.</span>')}updateVisibility(){this.Reveal.getConfig().showNotes&&this.hasNotes()&&!this.Reveal.isScrollView()&&!this.Reveal.isPrintView()?this.Reveal.getRevealElement().classList.add("show-notes"):this.Reveal.getRevealElement().classList.remove("show-notes")}hasNotes(){return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length>0}isSpeakerNotesWindow(){return!!window.location.search.match(/receiver/gi)}getSlideNotes(i=this.Reveal.getCurrentSlide()){if(i.hasAttribute("data-notes"))return i.getAttribute("data-notes");let e=i.querySelectorAll("aside.notes");return e?Array.from(e).map(t=>t.innerHTML).join(`
`):null}destroy(){this.element.remove()}},b0=class{constructor(i,e){this.diameter=100,this.diameter2=this.diameter/2,this.thickness=6,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=i,this.progressCheck=e,this.canvas=document.createElement("canvas"),this.canvas.className="playback",this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.canvas.style.width=this.diameter2+"px",this.canvas.style.height=this.diameter2+"px",this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.render()}setPlaying(i){let e=this.playing;this.playing=i,!e&&this.playing?this.animate():this.render()}animate(){let i=this.progress;this.progress=this.progressCheck(),i>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&requestAnimationFrame(this.animate.bind(this))}render(){let i=this.playing?this.progress:0,e=this.diameter2-this.thickness,t=this.diameter2,n=this.diameter2;this.progressOffset+=(1-this.progressOffset)*.1;let s=-Math.PI/2+Math.PI*2*i,r=-Math.PI/2+this.progressOffset*(Math.PI*2);this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(t,n,e+4,0,Math.PI*2,!1),this.context.fillStyle="rgba( 0, 0, 0, 0.4 )",this.context.fill(),this.context.beginPath(),this.context.arc(t,n,e,0,Math.PI*2,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="rgba( 255, 255, 255, 0.2 )",this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(t,n,e,r,s,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#fff",this.context.stroke()),this.context.translate(t-14,n-14),this.playing?(this.context.fillStyle="#fff",this.context.fillRect(0,0,10,28),this.context.fillRect(18,0,10,28)):(this.context.beginPath(),this.context.translate(4,0),this.context.moveTo(0,0),this.context.lineTo(24,14),this.context.lineTo(0,28),this.context.fillStyle="#fff",this.context.fill()),this.context.restore()}on(i,e){this.canvas.addEventListener(i,e,!1)}off(i,e){this.canvas.removeEventListener(i,e,!1)}destroy(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)}},S0={width:960,height:700,margin:.04,minScale:.2,maxScale:2,controls:!0,controlsTutorial:!0,controlsLayout:"bottom-right",controlsBackArrows:"faded",progress:!0,slideNumber:!1,showSlideNumber:"all",hashOneBasedIndex:!1,hash:!1,respondToHashChanges:!0,jumpToSlide:!0,history:!1,keyboard:!0,keyboardCondition:null,disableLayout:!1,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,navigationMode:"default",shuffle:!1,fragments:!0,fragmentInURL:!0,embedded:!1,help:!0,pause:!0,showNotes:!1,showHiddenSlides:!1,autoPlayMedia:null,preloadIframes:null,mouseWheel:!1,previewLinks:!1,viewDistance:3,mobileViewDistance:2,display:"block",hideInactiveCursor:!0,hideCursorTime:5e3,sortFragmentsOnSync:!0,autoAnimate:!0,autoAnimateMatcher:null,autoAnimateEasing:"ease",autoAnimateDuration:1,autoAnimateUnmatched:!0,autoAnimateStyles:["opacity","color","background-color","padding","font-size","line-height","letter-spacing","border-width","border-color","border-radius","outline","outline-offset"],autoSlide:0,autoSlideStoppable:!0,autoSlideMethod:null,defaultTiming:null,postMessage:!0,postMessageEvents:!1,focusBodyOnPageVisibilityChange:!0,transition:"slide",transitionSpeed:"default",backgroundTransition:"fade",parallaxBackgroundImage:"",parallaxBackgroundSize:"",parallaxBackgroundRepeat:"",parallaxBackgroundPosition:"",parallaxBackgroundHorizontal:null,parallaxBackgroundVertical:null,view:null,scrollLayout:"full",scrollSnap:"mandatory",scrollProgress:"auto",scrollActivationWidth:435,pdfMaxPagesPerSlide:1/0,pdfSeparateFragments:!0,pdfPageHeightOffset:-1,dependencies:[],plugins:[]},ef="6.0.2";function tf(i,e){arguments.length<2&&(e=arguments[0],i=document.querySelector(".reveal"));let t={},n={},s=!1,r=!1,a,o,l,c,h={hasNavigatedHorizontally:!1,hasNavigatedVertically:!1},u=[],d=1,p={layout:"",overview:""},f={},g="idle",m=0,v,x=0,E=-1,y=!1,M=new $g(t),w=new Jg(t),_=new Kg(t),b=new e0(t),C=new Qg(t),T=new r0(t),P=new o0(t),N=new l0(t),R=new c0(t),L=new h0(t),F=new u0(t),G=new d0(t),B=new f0(t),K=new p0(t),V=new m0(t),X=new g0(t),Q=new y0(t),fe=new _0(t),Pe=new x0(t);function Z(D){if(!i)throw'Unable to find presentation root (<div class="reveal">).';if(s)throw"Reveal.js has already been initialized.";if(s=!0,f.wrapper=i,f.slides=i.querySelector(".slides"),!f.slides)throw'Unable to find slides container (<div class="slides">).';return n=Gn(Gn(Gn(Gn(Gn({},S0),n),e),D),Wd()),/print-pdf/gi.test(window.location.search)&&(n.view="print"),ae(),window.addEventListener("load",mt,!1),V.load(n.plugins,n.dependencies).then(Ie),new Promise(z=>t.on("ready",z))}function ae(){n.embedded===!0?f.viewport=Jt(i,".reveal-viewport")||i:(f.viewport=document.body,document.documentElement.classList.add("reveal-full-page")),f.viewport.classList.add("reveal-viewport")}function Ie(){s!==!1&&(r=!0,_e(),Fe(),ce(),ie(),pe(),ue(),Re(),C.update(!0),Ae(),F.readURL(),setTimeout(()=>{f.slides.classList.remove("no-transition"),f.wrapper.classList.add("ready"),U({type:"ready",data:{indexh:a,indexv:o,currentSlide:c}})},1))}function Ae(){let D=n.view==="print",z=n.view==="scroll"||n.view==="reader";(D||z)&&(D?ze():fe.unbind(),f.viewport.classList.add("loading-scroll-mode"),D?document.readyState==="complete"?P.activate():window.addEventListener("load",()=>P.activate()):T.activate())}function _e(){n.showHiddenSlides||Ge(f.wrapper,'section[data-visibility="hidden"]').forEach(D=>{let z=D.parentNode;z.childElementCount===1&&/section/i.test(z.nodeName)?z.remove():D.remove()})}function Fe(){f.slides.classList.add("no-transition"),vs?f.wrapper.classList.add("no-hover"):f.wrapper.classList.remove("no-hover"),C.render(),w.render(),_.render(),G.render(),B.render(),Pe.render(),f.pauseOverlay=Bg(f.wrapper,"div","pause-overlay",n.controls?'<button class="resume-button">Resume presentation</button>':null),f.statusElement=pt(),f.wrapper.setAttribute("role","application")}function pt(){let D=f.wrapper.querySelector(".aria-status");return D||(D=document.createElement("div"),D.style.position="absolute",D.style.height="1px",D.style.width="1px",D.style.overflow="hidden",D.style.clip="rect( 1px, 1px, 1px, 1px )",D.classList.add("aria-status"),D.setAttribute("aria-live","polite"),D.setAttribute("aria-atomic","true"),f.wrapper.appendChild(D)),D}function Oe(D){f.statusElement.textContent=D}function $e(D){let z="";if(D.nodeType===3)z+=D.textContent.trim();else if(D.nodeType===1){let se=D.getAttribute("aria-hidden"),le=window.getComputedStyle(D).display==="none";if(se!=="true"&&!le){if(D.tagName==="IMG"||D.tagName==="VIDEO"){let J=D.getAttribute("alt");J&&(z+=je(J))}Array.from(D.childNodes).forEach(J=>{z+=$e(J)}),["P","DIV","UL","OL","LI","H1","H2","H3","H4","H5","H6","BLOCKQUOTE"].includes(D.tagName)&&z.trim()!==""&&(z=je(z))}}return z=z.trim(),z===""?"":z+" "}function je(D){let z=D.trim();return z===""?D:/[.!?]$/.test(z)?z:z+"."}function ie(){setInterval(()=>{(!T.isActive()&&f.wrapper.scrollTop!==0||f.wrapper.scrollLeft!==0)&&(f.wrapper.scrollTop=0,f.wrapper.scrollLeft=0)},1e3)}function pe(){document.addEventListener("fullscreenchange",rt),document.addEventListener("webkitfullscreenchange",rt)}function ce(){n.postMessage&&window.addEventListener("message",Le,!1)}function Re(D){let z=Gn({},n);if(typeof D=="object"&&Ks(n,D),t.isReady()===!1)return;let se=f.wrapper.querySelectorAll(Gi).length;f.wrapper.classList.remove(z.transition),f.wrapper.classList.add(n.transition),f.wrapper.setAttribute("data-transition-speed",n.transitionSpeed),f.wrapper.setAttribute("data-background-transition",n.backgroundTransition),f.viewport.style.setProperty("--slide-width",typeof n.width=="string"?n.width:n.width+"px"),f.viewport.style.setProperty("--slide-height",typeof n.height=="string"?n.height:n.height+"px"),n.shuffle&&He(),jc(f.wrapper,"embedded",n.embedded),jc(f.wrapper,"rtl",n.rtl),jc(f.wrapper,"center",n.center),n.pause===!1&&ee(),b.reset(),v&&(v.destroy(),v=null),se>1&&n.autoSlide&&n.autoSlideStoppable&&(v=new b0(f.wrapper,()=>Math.min(Math.max((Date.now()-E)/m,0),1)),v.on("click",ke),y=!1),n.navigationMode==="default"?f.wrapper.removeAttribute("data-navigation-mode"):f.wrapper.setAttribute("data-navigation-mode",n.navigationMode),Pe.configure(n,z),Q.configure(n,z),K.configure(n,z),G.configure(n,z),B.configure(n,z),L.configure(n,z),N.configure(n,z),w.configure(n,z),Be()}function ge(){window.addEventListener("resize",Ue,!1),n.touch&&fe.bind(),n.keyboard&&L.bind(),n.progress&&B.bind(),n.respondToHashChanges&&F.bind(),G.bind(),Q.bind(),f.slides.addEventListener("click",Te,!1),f.slides.addEventListener("transitionend",xe,!1),f.pauseOverlay.addEventListener("click",ee,!1),n.focusBodyOnPageVisibilityChange&&document.addEventListener("visibilitychange",Ke,!1)}function ze(){fe.unbind(),Q.unbind(),L.unbind(),G.unbind(),B.unbind(),F.unbind(),window.removeEventListener("resize",Ue,!1),f.slides.removeEventListener("click",Te,!1),f.slides.removeEventListener("transitionend",xe,!1),f.pauseOverlay.removeEventListener("click",ee,!1)}function Ne(){s=!1,r!==!1&&(ze(),$s(),Pe.destroy(),Q.destroy(),X.destroy(),V.destroy(),K.destroy(),G.destroy(),B.destroy(),C.destroy(),w.destroy(),_.destroy(),document.removeEventListener("fullscreenchange",rt),document.removeEventListener("webkitfullscreenchange",rt),document.removeEventListener("visibilitychange",Ke,!1),window.removeEventListener("message",Le,!1),window.removeEventListener("load",mt,!1),f.pauseOverlay&&f.pauseOverlay.remove(),f.statusElement&&f.statusElement.remove(),document.documentElement.classList.remove("reveal-full-page"),f.wrapper.classList.remove("ready","center","has-horizontal-slides","has-vertical-slides"),f.wrapper.removeAttribute("data-transition-speed"),f.wrapper.removeAttribute("data-background-transition"),f.viewport.classList.remove("reveal-viewport"),f.viewport.style.removeProperty("--slide-width"),f.viewport.style.removeProperty("--slide-height"),f.slides.style.removeProperty("width"),f.slides.style.removeProperty("height"),f.slides.style.removeProperty("zoom"),f.slides.style.removeProperty("left"),f.slides.style.removeProperty("top"),f.slides.style.removeProperty("bottom"),f.slides.style.removeProperty("right"),f.slides.style.removeProperty("transform"),Array.from(f.wrapper.querySelectorAll(Gi)).forEach(D=>{D.style.removeProperty("display"),D.style.removeProperty("top"),D.removeAttribute("hidden"),D.removeAttribute("aria-hidden"),D.removeAttribute("inert")}))}function Ye(D,z,se){i.addEventListener(D,z,se)}function Ze(D,z,se){i.removeEventListener(D,z,se)}function nt(D){typeof D.layout=="string"&&(p.layout=D.layout),typeof D.overview=="string"&&(p.overview=D.overview),p.layout?Hi(f.slides,p.layout+" "+p.overview):Hi(f.slides,p.overview)}function U({target:D=f.wrapper,type:z,data:se,bubbles:le=!0}){let J=document.createEvent("HTMLEvents",1,2);return J.initEvent(z,le,!0),Ks(J,se),D.dispatchEvent(J),D===f.wrapper&&st(z),J}function Tt(D){U({type:"slidechanged",data:{indexh:a,indexv:o,previousSlide:l,currentSlide:c,origin:D}})}function st(D,z){if(n.postMessageEvents&&window.parent!==window.self){let se={namespace:"reveal",eventName:D,state:go()};Ks(se,z),window.parent.postMessage(JSON.stringify(se),"*")}}function mt(){if(f.wrapper&&!P.isActive()){let D=f.viewport.offsetWidth,z=f.viewport.offsetHeight;if(!n.disableLayout){vs&&!n.embedded&&document.documentElement.style.setProperty("--vh",window.innerHeight*.01+"px");let se=T.isActive()?Ve(D,z):Ve(),le=d;be(n.width,n.height),f.slides.style.width=se.width+"px",f.slides.style.height=se.height+"px",d=Math.min(se.presentationWidth/se.width,se.presentationHeight/se.height),d=Math.max(d,n.minScale),d=Math.min(d,n.maxScale),d=Math.round(d*100)/100,d===1||T.isActive()?(f.slides.style.zoom="",f.slides.style.left="",f.slides.style.top="",f.slides.style.bottom="",f.slides.style.right="",nt({layout:""})):(f.slides.style.zoom="",f.slides.style.left="50%",f.slides.style.top="50%",f.slides.style.bottom="auto",f.slides.style.right="auto",nt({layout:"translate(-50%, -50%) scale("+d+")"}));let J=Array.from(f.wrapper.querySelectorAll(Gi)).filter(De=>De.style.display!=="none"),et=Array(J.length);for(let De=0,Mt=J.length;De<Mt;De++){let _t=J[De];n.center||_t.classList.contains("center")?_t.classList.contains("stack")?et[De]=0:et[De]=Math.max((se.height-_t.scrollHeight)/2,0)+"px":et[De]=""}for(let De=0,Mt=J.length;De<Mt;De++)J[De].style.top=et[De];le!==d&&U({type:"resize",data:{oldScale:le,scale:d,size:se}})}Pt(),f.viewport.style.setProperty("--slide-scale",d),f.viewport.style.setProperty("--viewport-width",D+"px"),f.viewport.style.setProperty("--viewport-height",z+"px"),T.layout(),B.update(),C.updateParallax(),R.isActive()&&R.update()}}function be(D,z){Ge(f.slides,"section > .stretch, section > .r-stretch").forEach(se=>{let le=zg(se,z);if(/(img|video)/gi.test(se.nodeName)){let J=se.naturalWidth||se.videoWidth,et=se.naturalHeight||se.videoHeight,De=Math.min(D/J,le/et);se.style.width=J*De+"px",se.style.height=et*De+"px"}else se.style.width=D+"px",se.style.height=le+"px"})}function Pt(){if(f.wrapper&&!n.disableLayout&&!P.isActive()&&typeof n.scrollActivationWidth=="number"&&n.view!=="scroll"){let D=Ve();D.presentationWidth>0&&D.presentationWidth<=n.scrollActivationWidth?T.isActive()||(C.create(),T.activate()):T.isActive()&&T.deactivate()}}function Ve(D,z){let se=n.width,le=n.height;n.disableLayout&&(se=f.slides.offsetWidth,le=f.slides.offsetHeight);let J={width:se,height:le,presentationWidth:D||f.wrapper.offsetWidth,presentationHeight:z||f.wrapper.offsetHeight};return J.presentationWidth-=J.presentationWidth*n.margin,J.presentationHeight-=J.presentationHeight*n.margin,typeof J.width=="string"&&/%$/.test(J.width)&&(J.width=parseInt(J.width,10)/100*J.presentationWidth),typeof J.height=="string"&&/%$/.test(J.height)&&(J.height=parseInt(J.height,10)/100*J.presentationHeight),J}function qe(D,z){typeof D=="object"&&typeof D.setAttribute=="function"&&D.setAttribute("data-previous-indexv",z||0)}function I(D){if(typeof D=="object"&&typeof D.setAttribute=="function"&&D.classList.contains("stack")){let z=D.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(D.getAttribute(z)||0,10)}return 0}function S(D=c){return D&&D.parentNode&&!!D.parentNode.nodeName.match(/section/i)}function q(D=c){return D.classList.contains(".stack")||D.querySelector("section")!==null}function oe(){return c&&S(c)?!c.nextElementSibling:!1}function re(){return a===0&&o===0}function ve(){return c?!(c.nextElementSibling||S(c)&&c.parentNode.nextElementSibling):!1}function Se(){if(n.pause){let D=f.wrapper.classList.contains("paused");$s(),f.wrapper.classList.add("paused"),D===!1&&U({type:"paused"})}}function ee(){let D=f.wrapper.classList.contains("paused");f.wrapper.classList.remove("paused"),yi(),D&&U({type:"resumed"})}function te(D){typeof D=="boolean"?D?Se():ee():me()?ee():Se()}function me(){return f.wrapper.classList.contains("paused")}function k(D){typeof D=="boolean"?D?_.show():_.hide():_.isVisible()?_.hide():_.show()}function ne(D){typeof D=="boolean"?D?Zs():Ys():y?Zs():Ys()}function j(){return!!(m&&!y)}function he(D,z,se,le){if(U({type:"beforeslidechange",data:{indexh:D===void 0?a:D,indexv:z===void 0?o:z,origin:le}}).defaultPrevented)return;l=c;let J=f.wrapper.querySelectorAll(bi);if(T.isActive()){let We=T.getSlideByIndices(D,z);We&&T.scrollToSlide(We);return}if(J.length===0)return;z===void 0&&!R.isActive()&&(z=I(J[D])),l&&l.parentNode&&l.parentNode.classList.contains("stack")&&qe(l.parentNode,o);let et=u.concat();u.length=0;let De=a||0,Mt=o||0;a=Qe(bi,D===void 0?a:D),o=Qe(Qc,z===void 0?o:z);let _t=a!==De||o!==Mt;_t||(l=null);let An=J[a],Ht=An.querySelectorAll("section");i.classList.toggle("is-vertical-slide",Ht.length>1),c=Ht[o]||An;let xt=!1;_t&&l&&c&&!R.isActive()&&(g="running",xt=de(l,c,De,Mt),xt&&f.slides.classList.add("disable-slide-transitions")),Ot(),mt(),R.isActive()&&R.update(),se!==void 0&&N.goto(se),l&&l!==c&&(l.classList.remove("present"),l.setAttribute("aria-hidden","true"),re()&&setTimeout(()=>{qr().forEach(We=>{qe(We,0)})},0));e:for(let We=0,Bt=u.length;We<Bt;We++){for(let nn=0;nn<et.length;nn++)if(et[nn]===u[We]){et.splice(nn,1);continue e}f.viewport.classList.add(u[We]),U({type:u[We]})}for(;et.length;)f.viewport.classList.remove(et.pop());_t&&(M.afterSlideChanged(),Tt(le)),(_t||!l)&&(M.stopEmbeddedContent(l),M.startEmbeddedContent(c)),requestAnimationFrame(()=>{Oe($e(c))}),B.update(),G.update(),Pe.update(),C.update(),C.updateParallax(),w.update(),N.update(),F.writeURL(),yi(),xt&&(setTimeout(()=>{f.slides.classList.remove("disable-slide-transitions")},0),n.autoAnimate&&b.run(l,c))}function de(D,z,se,le){return D.hasAttribute("data-auto-animate")&&z.hasAttribute("data-auto-animate")&&D.getAttribute("data-auto-animate-id")===z.getAttribute("data-auto-animate-id")&&!(a>se||o>le?z:D).hasAttribute("data-auto-animate-restart")}function ye(D,z,se){let le=a||0;a=z,o=se;let J=c!==D;l=c,c=D,c&&l&&n.autoAnimate&&de(l,c,le,o)&&b.run(l,c),J&&(M.afterSlideChanged(),l&&(M.stopEmbeddedContent(l),M.stopEmbeddedContent(l.slideBackgroundElement)),M.startEmbeddedContent(c),M.startEmbeddedContent(c.slideBackgroundElement)),requestAnimationFrame(()=>{Oe($e(c))}),Tt()}function Be(){ze(),ge(),mt(),m=n.autoSlide,yi(),C.create(),F.writeURL(),n.sortFragmentsOnSync===!0&&N.sortAll(),a!==void 0&&(a=Qe(bi,a),o=Qe(Qc,o)),G.update(),B.update(),Ot(),Pe.update(),Pe.updateVisibility(),X.update(),C.update(!0),w.update(),M.formatEmbeddedContent(),n.autoPlayMedia===!1?M.stopEmbeddedContent(c,{unloadIframes:!1}):M.startEmbeddedContent(c),R.isActive()&&R.layout(),U({type:"sync"})}function it(D=c){C.sync(D),N.sync(D),M.load(D),C.update(),Pe.update(),U({type:"slidesync",data:{slide:D}})}function ue(){Hn().forEach(D=>{Ge(D,"section").forEach((z,se)=>{se>0&&(z.classList.remove("present"),z.classList.remove("past"),z.classList.add("future"),z.setAttribute("aria-hidden","true"))})})}function He(D=Hn()){D.forEach((z,se)=>{let le=D[Math.floor(Math.random()*D.length)];le.parentNode===z.parentNode&&z.parentNode.insertBefore(z,le);let J=z.querySelectorAll("section");J.length&&He(J)})}function Qe(D,z){let se=Ge(f.wrapper,D),le=se.length,J=T.isActive()||P.isActive(),et=!1,De=!1;if(le){n.loop&&(z>=le&&(et=!0),z%=le,z<0&&(z=le+z,De=!0)),z=Math.max(Math.min(z,le-1),0);for(let Ht=0;Ht<le;Ht++){let xt=se[Ht],We=n.rtl&&!S(xt);if(xt.classList.remove("past"),xt.classList.remove("present"),xt.classList.remove("future"),xt.setAttribute("hidden",""),xt.setAttribute("aria-hidden","true"),xt.querySelector("section")&&xt.classList.add("stack"),J){xt.classList.add("present");continue}Ht<z?(xt.classList.add(We?"future":"past"),n.fragments&&Ee(xt)):Ht>z?(xt.classList.add(We?"past":"future"),n.fragments&&vt(xt)):Ht===z&&n.fragments&&(et?vt(xt):De&&Ee(xt))}let Mt=se[z],_t=Mt.classList.contains("present");Mt.classList.add("present"),Mt.removeAttribute("hidden"),Mt.removeAttribute("aria-hidden"),_t||U({target:Mt,type:"visible",bubbles:!1});let An=Mt.getAttribute("data-state");An&&(u=u.concat(An.split(" ")))}else z=0;return z}function Ee(D){Ge(D,".fragment").forEach(z=>{z.classList.add("visible"),z.classList.remove("current-fragment")})}function vt(D){Ge(D,".fragment.visible").forEach(z=>{z.classList.remove("visible","current-fragment")})}function Ot(){let D=Hn(),z=D.length,se,le;if(z&&a!==void 0){let et=R.isActive(),De=et?10:n.viewDistance;vs&&(De=et?6:n.mobileViewDistance),P.isActive()&&(De=Number.MAX_VALUE);for(let Mt=0;Mt<z;Mt++){let _t=D[Mt],An=Ge(_t,"section"),Ht=An.length;if(se=Math.abs((a||0)-Mt)||0,n.loop&&(se=Math.abs(((a||0)-Mt)%(z-De))||0),se<De?M.load(_t):M.unload(_t),Ht){let xt=et?0:I(_t);for(let We=0;We<Ht;We++){let Bt=An[We];le=Math.abs(Mt===(a||0)?(o||0)-We:We-xt),se+le<De?M.load(Bt):M.unload(Bt)}}}Yr()?f.wrapper.classList.add("has-vertical-slides"):f.wrapper.classList.remove("has-vertical-slides"),$r()?f.wrapper.classList.add("has-horizontal-slides"):f.wrapper.classList.remove("has-horizontal-slides")}let J=R.isActive()||T.isActive()||P.isActive();Ge(f.wrapper,Gi).forEach(et=>{et.toggleAttribute("inert",!J&&et!==c&&!et.contains(c))})}function Yt({includeFragments:D=!1}={}){let z=f.wrapper.querySelectorAll(bi),se=f.wrapper.querySelectorAll(Qc),le={left:a>0,right:a<z.length-1,up:o>0,down:o<se.length-1};if(n.loop&&(z.length>1&&(le.left=!0,le.right=!0),se.length>1&&(le.up=!0,le.down=!0)),z.length>1&&n.navigationMode==="linear"&&(le.right=le.right||le.down,le.left=le.left||le.up),D===!0){let J=N.availableRoutes();le.left=le.left||J.prev,le.up=le.up||J.prev,le.down=le.down||J.next,le.right=le.right||J.next}if(n.rtl){let J=le.left;le.left=le.right,le.right=J}return le}function Wr(D=c){let z=Hn(),se=0;e:for(let le=0;le<z.length;le++){let J=z[le],et=J.querySelectorAll("section");for(let De=0;De<et.length;De++){if(et[De]===D)break e;et[De].dataset.visibility!=="uncounted"&&se++}if(J===D)break;J.classList.contains("stack")===!1&&J.dataset.visibility!=="uncounted"&&se++}return se}function Xr(){let D=Zr(),z=Wr();if(c){let se=c.querySelectorAll(".fragment");if(se.length>0){let le=c.querySelectorAll(".fragment.visible");z+=le.length/se.length*.9}}return Math.min(z/(D-1),1)}function mo(D){let z=a,se=o,le;if(D)if(T.isActive())z=parseInt(D.getAttribute("data-index-h"),10),D.getAttribute("data-index-v")&&(se=parseInt(D.getAttribute("data-index-v"),10));else{let J=S(D),et=J?D.parentNode:D,De=Hn();z=Math.max(De.indexOf(et),0),se=void 0,J&&(se=Math.max(Ge(D.parentNode,"section").indexOf(D),0))}if(!D&&c&&c.querySelectorAll(".fragment").length>0){let J=c.querySelector(".current-fragment");le=J&&J.hasAttribute("data-fragment-index")?parseInt(J.getAttribute("data-fragment-index"),10):c.querySelectorAll(".fragment.visible").length-1}return{h:z,v:se,f:le}}function Xs(){return Ge(f.wrapper,Gi+':not(.stack):not([data-visibility="uncounted"])')}function Hn(){return Ge(f.wrapper,bi)}function ei(){return Ge(f.wrapper,".slides>section>section")}function qr(){return Ge(f.wrapper,bi+".stack")}function $r(){return Hn().length>1}function Yr(){return ei().length>1}function qs(){return Xs().map(D=>{let z={};for(let se=0;se<D.attributes.length;se++){let le=D.attributes[se];z[le.name]=le.value}return z})}function Zr(){return Xs().length}function Jr(D,z){let se=Hn()[D],le=se&&se.querySelectorAll("section");return le&&le.length&&typeof z=="number"?le?le[z]:void 0:se}function ms(D,z){let se=typeof D=="number"?Jr(D,z):D;if(se)return se.slideBackgroundElement}function go(){let D=mo();return Gn({indexh:D.h,indexv:D.v,indexf:D.f,paused:me(),overview:R.isActive()},X.getState())}function vo(D){if(typeof D=="object"){he(Js(D.indexh),Js(D.indexv),Js(D.indexf));let z=Js(D.paused),se=Js(D.overview);typeof z=="boolean"&&z!==me()&&te(z),typeof se=="boolean"&&se!==R.isActive()&&R.toggle(se),X.setState(D)}}function yi(){if($s(),c&&n.autoSlide!==!1){let D=c.querySelector(".current-fragment[data-autoslide]"),z=D?D.getAttribute("data-autoslide"):null,se=c.parentNode?c.parentNode.getAttribute("data-autoslide"):null,le=c.getAttribute("data-autoslide");z?m=parseInt(z,10):le?m=parseInt(le,10):se?m=parseInt(se,10):(m=n.autoSlide,c.querySelectorAll(".fragment").length===0&&Ge(c,"video, audio").forEach(J=>{J.hasAttribute("data-autoplay")&&m&&J.duration*1e3/J.playbackRate>m&&(m=J.duration*1e3/J.playbackRate+1e3)})),m&&!y&&!me()&&!R.isActive()&&(!ve()||N.availableRoutes().next||n.loop===!0)&&(x=setTimeout(()=>{typeof n.autoSlideMethod=="function"?n.autoSlideMethod():$(),yi()},m),E=Date.now()),v&&v.setPlaying(x!==-1)}}function $s(){clearTimeout(x),x=-1}function Ys(){m&&!y&&(y=!0,U({type:"autoslidepaused"}),clearTimeout(x),v&&v.setPlaying(!1))}function Zs(){m&&y&&(y=!1,U({type:"autoslideresumed"}),yi())}function gs({skipFragments:D=!1}={}){if(h.hasNavigatedHorizontally=!0,T.isActive())return T.prev();n.rtl?(R.isActive()||D||N.next()===!1)&&Yt().left&&he(a+1,n.navigationMode==="grid"?o:void 0):(R.isActive()||D||N.prev()===!1)&&Yt().left&&he(a-1,n.navigationMode==="grid"?o:void 0)}function A({skipFragments:D=!1}={}){if(h.hasNavigatedHorizontally=!0,T.isActive())return T.next();n.rtl?(R.isActive()||D||N.prev()===!1)&&Yt().right&&he(a-1,n.navigationMode==="grid"?o:void 0):(R.isActive()||D||N.next()===!1)&&Yt().right&&he(a+1,n.navigationMode==="grid"?o:void 0)}function O({skipFragments:D=!1}={}){if(T.isActive())return T.prev();(R.isActive()||D||N.prev()===!1)&&Yt().up&&he(a,o-1)}function Y({skipFragments:D=!1}={}){if(h.hasNavigatedVertically=!0,T.isActive())return T.next();(R.isActive()||D||N.next()===!1)&&Yt().down&&he(a,o+1)}function W({skipFragments:D=!1}={}){if(T.isActive())return T.prev();if(D||N.prev()===!1)if(Yt().up)O({skipFragments:D});else{let z;if(z=n.rtl?Ge(f.wrapper,bi+".future").pop():Ge(f.wrapper,bi+".past").pop(),z&&z.classList.contains("stack")){let se=z.querySelectorAll("section").length-1||void 0;he(a-1,se)}else n.rtl?A({skipFragments:D}):gs({skipFragments:D})}}function $({skipFragments:D=!1}={}){if(h.hasNavigatedHorizontally=!0,h.hasNavigatedVertically=!0,T.isActive())return T.next();if(D||N.next()===!1){let z=Yt();z.down&&z.right&&n.loop&&oe()&&(z.down=!1),z.down?Y({skipFragments:D}):n.rtl?gs({skipFragments:D}):A({skipFragments:D})}}function Me(D){n.autoSlideStoppable&&Ys()}function Le(D){let z=D.data;if(typeof z=="string"&&z.charAt(0)==="{"&&z.charAt(z.length-1)==="}"&&(z=JSON.parse(z),z.method&&typeof t[z.method]=="function"))if(Zg.test(z.method)===!1){let se=t[z.method].apply(t,z.args);st("callback",{method:z.method,result:se})}else console.warn('reveal.js: "'+z.method+'" is is blacklisted from the postMessage API')}function xe(D){g==="running"&&/section/gi.test(D.target.nodeName)&&(g="idle",U({type:"slidetransitionend",data:{indexh:a,indexv:o,previousSlide:l,currentSlide:c}}))}function Te(D){let z=Jt(D.target,'a[href^="#"]');if(z){let se=z.getAttribute("href"),le=F.getIndicesFromHash(se);le&&(t.slide(le.h,le.v,le.f),D.preventDefault())}}function Ue(D){mt()}function Ke(D){document.hidden===!1&&document.activeElement!==document.body&&(typeof document.activeElement.blur=="function"&&document.activeElement.blur(),document.body.focus())}function rt(D){(document.fullscreenElement||document.webkitFullscreenElement)===f.wrapper&&(D.stopImmediatePropagation(),setTimeout(()=>{t.layout(),t.focus.focus()},1))}function ke(D){ve()&&n.loop===!1?(he(0,0),Zs()):y?Zs():Ys()}let ht={VERSION:ef,initialize:Z,configure:Re,destroy:Ne,sync:Be,syncSlide:it,syncFragments:N.sync.bind(N),slide:he,left:gs,right:A,up:O,down:Y,prev:W,next:$,navigateLeft:gs,navigateRight:A,navigateUp:O,navigateDown:Y,navigatePrev:W,navigateNext:$,navigateFragment:N.goto.bind(N),prevFragment:N.prev.bind(N),nextFragment:N.next.bind(N),on:Ye,off:Ze,addEventListener:Ye,removeEventListener:Ze,layout:mt,shuffle:He,availableRoutes:Yt,availableFragments:N.availableRoutes.bind(N),toggleHelp:X.toggleHelp.bind(X),toggleOverview:R.toggle.bind(R),toggleScrollView:T.toggle.bind(T),togglePause:te,toggleAutoSlide:ne,toggleJumpToSlide:k,isFirstSlide:re,isLastSlide:ve,isLastVerticalSlide:oe,isVerticalSlide:S,isVerticalStack:q,isPaused:me,isAutoSliding:j,isSpeakerNotes:Pe.isSpeakerNotesWindow.bind(Pe),isOverview:R.isActive.bind(R),isFocused:Q.isFocused.bind(Q),isOverlayOpen:X.isOpen.bind(X),isScrollView:T.isActive.bind(T),isPrintView:P.isActive.bind(P),isReady:()=>r,loadSlide:M.load.bind(M),unloadSlide:M.unload.bind(M),startEmbeddedContent:()=>M.startEmbeddedContent(c),stopEmbeddedContent:()=>M.stopEmbeddedContent(c,{unloadIframes:!1}),previewIframe:X.previewIframe.bind(X),previewImage:X.previewImage.bind(X),previewVideo:X.previewVideo.bind(X),showPreview:X.previewIframe.bind(X),hidePreview:X.close.bind(X),addEventListeners:ge,removeEventListeners:ze,dispatchEvent:U,getState:go,setState:vo,getProgress:Xr,getIndices:mo,getSlidesAttributes:qs,getSlidePastCount:Wr,getTotalSlides:Zr,getSlide:Jr,getPreviousSlide:()=>l,getCurrentSlide:()=>c,getSlideBackground:ms,getSlideNotes:Pe.getSlideNotes.bind(Pe),getSlides:Xs,getHorizontalSlides:Hn,getVerticalSlides:ei,hasHorizontalSlides:$r,hasVerticalSlides:Yr,hasNavigatedHorizontally:()=>h.hasNavigatedHorizontally,hasNavigatedVertically:()=>h.hasNavigatedVertically,shouldAutoAnimateBetween:de,addKeyBinding:L.addKeyBinding.bind(L),removeKeyBinding:L.removeKeyBinding.bind(L),triggerKey:L.triggerKey.bind(L),registerKeyboardShortcut:L.registerKeyboardShortcut.bind(L),getComputedSlideSize:Ve,setCurrentScrollPage:ye,removeHiddenSlides:_e,getScale:()=>d,getConfig:()=>n,getQueryHash:Wd,getSlidePath:F.getHash.bind(F),getRevealElement:()=>i,getSlidesElement:()=>f.slides,getViewportElement:()=>f.viewport,getBackgroundsElement:()=>C.element,registerPlugin:V.registerPlugin.bind(V),hasPlugin:V.hasPlugin.bind(V),getPlugin:V.getPlugin.bind(V),getPlugins:V.getRegisteredPlugins.bind(V)};return Ks(t,Gn(Gn({},ht),{},{announceStatus:Oe,getStatusText:$e,focus:Q,scroll:T,progress:B,controls:G,location:F,overview:R,keyboard:L,fragments:N,backgrounds:C,slideContent:M,slideNumber:w,onUserInput:Me,closeOverlay:X.close.bind(X),updateSlidesVisibility:Ot,layoutSlideContents:be,transformSlides:nt,cueAutoSlide:yi,cancelAutoSlide:$s})),ht}var Si=tf,Kd=[];Si.initialize=i=>{let e=document.querySelector(".reveal");if(!(e instanceof HTMLElement))throw Error('Unable to find presentation root (<div class="reveal">).');return Object.assign(Si,new tf(e,i)),Kd.map(t=>t(Si)),Si.initialize()},["configure","on","off","addEventListener","removeEventListener","registerPlugin"].forEach(i=>{Si[i]=(...e)=>{Kd.push(t=>t[i].call(null,...e))}}),Si.isReady=()=>!1,Si.VERSION=ef;function oh(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var xs=oh();function nf(i){xs=i}var ys={exec:()=>null};function gt(i,e=""){let t=typeof i=="string"?i:i.source,n={replace:(s,r)=>{let a=typeof r=="string"?r:r.source;return a=a.replace(dn.caret,"$1"),t=t.replace(s,a),n},getRegex:()=>new RegExp(t,e)};return n}var M0=(()=>{try{return!0}catch{return!1}})(),dn={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:i=>RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:i=>RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:i=>RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:i=>RegExp(`^ {0,${Math.min(3,i-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:i=>RegExp(`^ {0,${Math.min(3,i-1)}}#`),htmlBeginRegex:i=>RegExp(`^ {0,${Math.min(3,i-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:i=>RegExp(`^ {0,${Math.min(3,i-1)}}>`)},w0=/^(?:[ \t]*(?:\n|$))+/,E0=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,A0=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ta=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,T0=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,lh=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,uf=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,df=gt(uf).replace(/bull/g,lh).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),R0=gt(uf).replace(/bull/g,lh).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ch=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,C0=/^[^\n]+/,hh=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,P0=gt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",hh).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),I0=gt(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,lh).getRegex(),Eo="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",uh=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,L0=gt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",uh).replace("tag",Eo).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),sf=gt(ch).replace("hr",ta).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Eo).getRegex(),dh={blockquote:gt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",sf).getRegex(),code:E0,def:P0,fences:A0,heading:T0,hr:ta,html:L0,lheading:df,list:I0,newline:w0,paragraph:sf,table:ys,text:C0},rf=gt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ta).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Eo).getRegex(),D0={...dh,lheading:R0,table:rf,paragraph:gt(ch).replace("hr",ta).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",rf).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Eo).getRegex()},N0={...dh,html:gt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",uh).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ys,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:gt(ch).replace("hr",ta).replace("heading",` *#{1,6} *[^
]`).replace("lheading",df).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},k0=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,U0=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ff=/^( {2,}|\\)\n(?!\s*$)/,F0=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,js=/[\p{P}\p{S}]/u,Ao=/[\s\p{P}\p{S}]/u,fh=/[^\s\p{P}\p{S}]/u,O0=gt(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Ao).getRegex(),pf=/(?!~)[\p{P}\p{S}]/u,B0=/(?!~)[\s\p{P}\p{S}]/u,z0=/(?:[^\s\p{P}\p{S}]|~)/u,V0=gt(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",M0?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),mf=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,H0=gt(mf,"u").replace(/punct/g,js).getRegex(),G0=gt(mf,"u").replace(/punct/g,pf).getRegex(),gf="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",W0=gt(gf,"gu").replace(/notPunctSpace/g,fh).replace(/punctSpace/g,Ao).replace(/punct/g,js).getRegex(),X0=gt(gf,"gu").replace(/notPunctSpace/g,z0).replace(/punctSpace/g,B0).replace(/punct/g,pf).getRegex(),q0=gt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,fh).replace(/punctSpace/g,Ao).replace(/punct/g,js).getRegex(),$0=gt(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,js).getRegex(),Y0=gt("^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)","gu").replace(/notPunctSpace/g,fh).replace(/punctSpace/g,Ao).replace(/punct/g,js).getRegex(),Z0=gt(/\\(punct)/,"gu").replace(/punct/g,js).getRegex(),J0=gt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),K0=gt(uh).replace("(?:-->|$)","-->").getRegex(),j0=gt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",K0).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),So=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Q0=gt(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",So).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),vf=gt(/^!?\[(label)\]\[(ref)\]/).replace("label",So).replace("ref",hh).getRegex(),_f=gt(/^!?\[(ref)\](?:\[\])?/).replace("ref",hh).getRegex(),ev=gt("reflink|nolink(?!\\()","g").replace("reflink",vf).replace("nolink",_f).getRegex(),af=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,ph={_backpedal:ys,anyPunctuation:Z0,autolink:J0,blockSkip:V0,br:ff,code:U0,del:ys,delLDelim:ys,delRDelim:ys,emStrongLDelim:H0,emStrongRDelimAst:W0,emStrongRDelimUnd:q0,escape:k0,link:Q0,nolink:_f,punctuation:O0,reflink:vf,reflinkSearch:ev,tag:j0,text:F0,url:ys},tv={...ph,link:gt(/^!?\[(label)\]\((.*?)\)/).replace("label",So).getRegex(),reflink:gt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",So).getRegex()},sh={...ph,emStrongRDelimAst:X0,emStrongLDelim:G0,delLDelim:$0,delRDelim:Y0,url:gt(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",af).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:gt(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",af).getRegex()},nv={...sh,br:gt(ff).replace("{2,}","*").getRegex(),text:gt(sh.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},xo={normal:dh,gfm:D0,pedantic:N0},jr={normal:ph,gfm:sh,breaks:nv,pedantic:tv},iv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},of=i=>iv[i];function ti(i,e){if(e){if(dn.escapeTest.test(i))return i.replace(dn.escapeReplace,of)}else if(dn.escapeTestNoEncode.test(i))return i.replace(dn.escapeReplaceNoEncode,of);return i}function lf(i){try{i=encodeURI(i).replace(dn.percentDecode,"%")}catch{return null}return i}function cf(i,e){let t=i.replace(dn.findPipe,(s,r,a)=>{let o=!1,l=r;for(;--l>=0&&a[l]==="\\";)o=!o;return o?"|":" |"}).split(dn.splitPipe),n=0;if(t[0].trim()||t.shift(),t.length>0&&!t.at(-1)?.trim()&&t.pop(),e)if(t.length>e)t.splice(e);else for(;t.length<e;)t.push("");for(;n<t.length;n++)t[n]=t[n].trim().replace(dn.slashPipe,"|");return t}function Qr(i,e,t){let n=i.length;if(n===0)return"";let s=0;for(;s<n;){let r=i.charAt(n-s-1);if(r===e&&!t)s++;else if(r!==e&&t)s++;else break}return i.slice(0,n-s)}function sv(i,e){if(i.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<i.length;n++)if(i[n]==="\\")n++;else if(i[n]===e[0])t++;else if(i[n]===e[1]&&(t--,t<0))return n;return t>0?-2:-1}function rv(i,e=0){let t=e,n="";for(let s of i)if(s==="	"){let r=4-t%4;n+=" ".repeat(r),t+=r}else n+=s,t++;return n}function hf(i,e,t,n,s){let r=e.href,a=e.title||null,o=i[1].replace(s.other.outputLinkReplace,"$1");n.state.inLink=!0;let l={type:i[0].charAt(0)==="!"?"image":"link",raw:t,href:r,title:a,text:o,tokens:n.inlineTokens(o)};return n.state.inLink=!1,l}function av(i,e,t){let n=i.match(t.other.indentCodeCompensation);if(n===null)return e;let s=n[1];return e.split(`
`).map(r=>{let a=r.match(t.other.beginningSpace);if(a===null)return r;let[o]=a;return o.length>=s.length?r.slice(s.length):r}).join(`
`)}var Mo=class{constructor(i){wt(this,"options");wt(this,"rules");wt(this,"lexer");this.options=i||xs}space(i){let e=this.rules.block.newline.exec(i);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(i){let e=this.rules.block.code.exec(i);if(e){let t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:Qr(t,`
`)}}}fences(i){let e=this.rules.block.fences.exec(i);if(e){let t=e[0],n=av(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:n}}}heading(i){let e=this.rules.block.heading.exec(i);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let n=Qr(t,"#");(this.options.pedantic||!n||this.rules.other.endingSpaceChar.test(n))&&(t=n.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(i){let e=this.rules.block.hr.exec(i);if(e)return{type:"hr",raw:Qr(e[0],`
`)}}blockquote(i){let e=this.rules.block.blockquote.exec(i);if(e){let t=Qr(e[0],`
`).split(`
`),n="",s="",r=[];for(;t.length>0;){let a=!1,o=[],l;for(l=0;l<t.length;l++)if(this.rules.other.blockquoteStart.test(t[l]))o.push(t[l]),a=!0;else if(!a)o.push(t[l]);else break;t=t.slice(l);let c=o.join(`
`),h=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");n=n?`${n}
${c}`:c,s=s?`${s}
${h}`:h;let u=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(h,r,!0),this.lexer.state.top=u,t.length===0)break;let d=r.at(-1);if(d?.type==="code")break;if(d?.type==="blockquote"){let p=d,f=p.raw+`
`+t.join(`
`),g=this.blockquote(f);r[r.length-1]=g,n=n.substring(0,n.length-p.raw.length)+g.raw,s=s.substring(0,s.length-p.text.length)+g.text;break}if(d?.type==="list"){let p=d,f=p.raw+`
`+t.join(`
`),g=this.list(f);r[r.length-1]=g,n=n.substring(0,n.length-d.raw.length)+g.raw,s=s.substring(0,s.length-p.raw.length)+g.raw,t=f.substring(r.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:n,tokens:r,text:s}}}list(i){let e=this.rules.block.list.exec(i);if(e){let t=e[1].trim(),n=t.length>1,s={type:"list",raw:"",ordered:n,start:n?+t.slice(0,-1):"",loose:!1,items:[]};t=n?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=n?t:"[*+-]");let r=this.rules.other.listItemRegex(t),a=!1;for(;i;){let l=!1,c="",h="";if(!(e=r.exec(i))||this.rules.block.hr.test(i))break;c=e[0],i=i.substring(c.length);let u=rv(e[2].split(`
`,1)[0],e[1].length),d=i.split(`
`,1)[0],p=!u.trim(),f=0;if(this.options.pedantic?(f=2,h=u.trimStart()):p?f=e[1].length+1:(f=u.search(this.rules.other.nonSpaceChar),f=f>4?1:f,h=u.slice(f),f+=e[1].length),p&&this.rules.other.blankLine.test(d)&&(c+=d+`
`,i=i.substring(d.length+1),l=!0),!l){let g=this.rules.other.nextBulletRegex(f),m=this.rules.other.hrRegex(f),v=this.rules.other.fencesBeginRegex(f),x=this.rules.other.headingBeginRegex(f),E=this.rules.other.htmlBeginRegex(f),y=this.rules.other.blockquoteBeginRegex(f);for(;i;){let M=i.split(`
`,1)[0],w;if(d=M,this.options.pedantic?(d=d.replace(this.rules.other.listReplaceNesting,"  "),w=d):w=d.replace(this.rules.other.tabCharGlobal,"    "),v.test(d)||x.test(d)||E.test(d)||y.test(d)||g.test(d)||m.test(d))break;if(w.search(this.rules.other.nonSpaceChar)>=f||!d.trim())h+=`
`+w.slice(f);else{if(p||u.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||v.test(u)||x.test(u)||m.test(u))break;h+=`
`+d}p=!d.trim(),c+=M+`
`,i=i.substring(M.length+1),u=w.slice(f)}}s.loose||(a?s.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(a=!0)),s.items.push({type:"list_item",raw:c,task:!!this.options.gfm&&this.rules.other.listIsTask.test(h),loose:!1,text:h,tokens:[]}),s.raw+=c}let o=s.items.at(-1);if(o)o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let l of s.items){if(this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]),l.task){if(l.text=l.text.replace(this.rules.other.listReplaceTask,""),l.tokens[0]?.type==="text"||l.tokens[0]?.type==="paragraph"){l.tokens[0].raw=l.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),l.tokens[0].text=l.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let h=this.lexer.inlineQueue.length-1;h>=0;h--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[h].src)){this.lexer.inlineQueue[h].src=this.lexer.inlineQueue[h].src.replace(this.rules.other.listReplaceTask,"");break}}let c=this.rules.other.listTaskCheckbox.exec(l.raw);if(c){let h={type:"checkbox",raw:c[0]+" ",checked:c[0]!=="[ ]"};l.checked=h.checked,s.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=h.raw+l.tokens[0].raw,l.tokens[0].text=h.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(h)):l.tokens.unshift({type:"paragraph",raw:h.raw,text:h.raw,tokens:[h]}):l.tokens.unshift(h)}}if(!s.loose){let c=l.tokens.filter(h=>h.type==="space");s.loose=c.length>0&&c.some(h=>this.rules.other.anyLine.test(h.raw))}}if(s.loose)for(let l of s.items){l.loose=!0;for(let c of l.tokens)c.type==="text"&&(c.type="paragraph")}return s}}html(i){let e=this.rules.block.html.exec(i);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(i){let e=this.rules.block.def.exec(i);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),n=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:n,title:s}}}table(i){let e=this.rules.block.table.exec(i);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let t=cf(e[1]),n=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],r={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===n.length){for(let a of n)this.rules.other.tableAlignRight.test(a)?r.align.push("right"):this.rules.other.tableAlignCenter.test(a)?r.align.push("center"):this.rules.other.tableAlignLeft.test(a)?r.align.push("left"):r.align.push(null);for(let a=0;a<t.length;a++)r.header.push({text:t[a],tokens:this.lexer.inline(t[a]),header:!0,align:r.align[a]});for(let a of s)r.rows.push(cf(a,r.header.length).map((o,l)=>({text:o,tokens:this.lexer.inline(o),header:!1,align:r.align[l]})));return r}}lheading(i){let e=this.rules.block.lheading.exec(i);if(e){let t=e[1].trim();return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:t,tokens:this.lexer.inline(t)}}}paragraph(i){let e=this.rules.block.paragraph.exec(i);if(e){let t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(i){let e=this.rules.block.text.exec(i);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(i){let e=this.rules.inline.escape.exec(i);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(i){let e=this.rules.inline.tag.exec(i);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(i){let e=this.rules.inline.link.exec(i);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let r=Qr(t.slice(0,-1),"\\");if((t.length-r.length)%2==0)return}else{let r=sv(e[2],"()");if(r===-2)return;if(r>-1){let a=(e[0].indexOf("!")===0?5:4)+e[1].length+r;e[2]=e[2].substring(0,r),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let n=e[2],s="";if(this.options.pedantic){let r=this.rules.other.pedanticHrefTitle.exec(n);r&&(n=r[1],s=r[3])}else s=e[3]?e[3].slice(1,-1):"";return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?n.slice(1):n.slice(1,-1)),hf(e,{href:n&&n.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(i,e){let t;if((t=this.rules.inline.reflink.exec(i))||(t=this.rules.inline.nolink.exec(i))){let n=e[(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," ").toLowerCase()];if(!n){let s=t[0].charAt(0);return{type:"text",raw:s,text:s}}return hf(t,n,t[0],this.lexer,this.rules)}}emStrong(i,e,t=""){let n=this.rules.inline.emStrongLDelim.exec(i);if(!(!n||!n[1]&&!n[2]&&!n[3]&&!n[4]||n[4]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(n[1]||n[3])||!t||this.rules.inline.punctuation.exec(t))){let s=[...n[0]].length-1,r,a,o=s,l=0,c=n[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,e=e.slice(-1*i.length+s);(n=c.exec(e))!=null;){if(r=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!r)continue;if(a=[...r].length,n[3]||n[4]){o+=a;continue}if((n[5]||n[6])&&s%3&&!((s+a)%3)){l+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+l);let h=[...n[0]][0].length,u=i.slice(0,s+n.index+h+a);if(Math.min(s,a)%2){let p=u.slice(1,-1);return{type:"em",raw:u,text:p,tokens:this.lexer.inlineTokens(p)}}let d=u.slice(2,-2);return{type:"strong",raw:u,text:d,tokens:this.lexer.inlineTokens(d)}}}}codespan(i){let e=this.rules.inline.code.exec(i);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),n=this.rules.other.nonSpaceChar.test(t),s=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return n&&s&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(i){let e=this.rules.inline.br.exec(i);if(e)return{type:"br",raw:e[0]}}del(i,e,t=""){let n=this.rules.inline.delLDelim.exec(i);if(n&&(!n[1]||!t||this.rules.inline.punctuation.exec(t))){let s=[...n[0]].length-1,r,a,o=s,l=this.rules.inline.delRDelim;for(l.lastIndex=0,e=e.slice(-1*i.length+s);(n=l.exec(e))!=null;){if(r=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!r||(a=[...r].length,a!==s))continue;if(n[3]||n[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let c=[...n[0]][0].length,h=i.slice(0,s+n.index+c+a),u=h.slice(s,-s);return{type:"del",raw:h,text:u,tokens:this.lexer.inlineTokens(u)}}}}autolink(i){let e=this.rules.inline.autolink.exec(i);if(e){let t,n;return e[2]==="@"?(t=e[1],n="mailto:"+t):(t=e[1],n=t),{type:"link",raw:e[0],text:t,href:n,tokens:[{type:"text",raw:t,text:t}]}}}url(i){let e;if(e=this.rules.inline.url.exec(i)){let t,n;if(e[2]==="@")t=e[0],n="mailto:"+t;else{let s;do s=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(s!==e[0]);t=e[0],n=e[1]==="www."?"http://"+e[0]:e[0]}return{type:"link",raw:e[0],text:t,href:n,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(i){let e=this.rules.inline.text.exec(i);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},Wn=class rh{constructor(e){wt(this,"tokens");wt(this,"options");wt(this,"state");wt(this,"inlineQueue");wt(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||xs,this.options.tokenizer=this.options.tokenizer||new Mo,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:dn,block:xo.normal,inline:jr.normal};this.options.pedantic?(t.block=xo.pedantic,t.inline=jr.pedantic):this.options.gfm&&(t.block=xo.gfm,t.inline=this.options.breaks?jr.breaks:jr.gfm),this.tokenizer.rules=t}static get rules(){return{block:xo,inline:jr}}static lex(e,t){return new rh(t).lex(e)}static lexInline(e,t){return new rh(t).inlineTokens(e)}lex(e){e=e.replace(dn.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){for(this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(dn.tabCharGlobal,"    ").replace(dn.spaceLine,""));e;){let s;if(this.options.extensions?.block?.some(a=>(s=a.call({lexer:this},e,t))?(e=e.substring(s.raw.length),t.push(s),!0):!1))continue;if(s=this.tokenizer.space(e)){e=e.substring(s.raw.length);let a=t.at(-1);s.raw.length===1&&a!==void 0?a.raw+=`
`:t.push(s);continue}if(s=this.tokenizer.code(e)){e=e.substring(s.raw.length);let a=t.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+s.raw,a.text+=`
`+s.text,this.inlineQueue.at(-1).src=a.text):t.push(s);continue}if(s=this.tokenizer.fences(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(e)){e=e.substring(s.raw.length);let a=t.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+s.raw,a.text+=`
`+s.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title},t.push(s));continue}if(s=this.tokenizer.table(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(e)){e=e.substring(s.raw.length),t.push(s);continue}let r=e;if(this.options.extensions?.startBlock){let a=1/0,o=e.slice(1),l;this.options.extensions.startBlock.forEach(c=>{l=c.call({lexer:this},o),typeof l=="number"&&l>=0&&(a=Math.min(a,l))}),a<1/0&&a>=0&&(r=e.substring(0,a+1))}if(this.state.top&&(s=this.tokenizer.paragraph(r))){let a=t.at(-1);n&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+s.raw,a.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(s),n=r.length!==e.length,e=e.substring(s.raw.length);continue}if(s=this.tokenizer.text(e)){e=e.substring(s.raw.length);let a=t.at(-1);a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+s.raw,a.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(s);continue}if(e){let a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}throw Error(a)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e,s=null;if(this.tokens.links){let l=Object.keys(this.tokens.links);if(l.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)l.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(n=n.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,s.index)+"++"+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let r;for(;(s=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)r=s[2]?s[2].length:0,n=n.slice(0,s.index+r)+"["+"a".repeat(s[0].length-r-2)+"]"+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o="";for(;e;){a||(o=""),a=!1;let l;if(this.options.extensions?.inline?.some(h=>(l=h.call({lexer:this},e,t))?(e=e.substring(l.raw.length),t.push(l),!0):!1))continue;if(l=this.tokenizer.escape(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.tag(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.link(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(l.raw.length);let h=t.at(-1);l.type==="text"&&h?.type==="text"?(h.raw+=l.raw,h.text+=l.text):t.push(l);continue}if(l=this.tokenizer.emStrong(e,n,o)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.codespan(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.br(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.del(e,n,o)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.autolink(e)){e=e.substring(l.raw.length),t.push(l);continue}if(!this.state.inLink&&(l=this.tokenizer.url(e))){e=e.substring(l.raw.length),t.push(l);continue}let c=e;if(this.options.extensions?.startInline){let h=1/0,u=e.slice(1),d;this.options.extensions.startInline.forEach(p=>{d=p.call({lexer:this},u),typeof d=="number"&&d>=0&&(h=Math.min(h,d))}),h<1/0&&h>=0&&(c=e.substring(0,h+1))}if(l=this.tokenizer.inlineText(c)){e=e.substring(l.raw.length),l.raw.slice(-1)!=="_"&&(o=l.raw.slice(-1)),a=!0;let h=t.at(-1);h?.type==="text"?(h.raw+=l.raw,h.text+=l.text):t.push(l);continue}if(e){let h="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(h);break}throw Error(h)}}return t}},wo=class{constructor(i){wt(this,"options");wt(this,"parser");this.options=i||xs}space(i){return""}code({text:i,lang:e,escaped:t}){let n=(e||"").match(dn.notSpaceStart)?.[0],s=i.replace(dn.endingNewline,"")+`
`;return n?'<pre><code class="language-'+ti(n)+'">'+(t?s:ti(s,!0))+`</code></pre>
`:"<pre><code>"+(t?s:ti(s,!0))+`</code></pre>
`}blockquote({tokens:i}){return`<blockquote>
${this.parser.parse(i)}</blockquote>
`}html({text:i}){return i}def(i){return""}heading({tokens:i,depth:e}){return`<h${e}>${this.parser.parseInline(i)}</h${e}>
`}hr(i){return`<hr>
`}list(i){let e=i.ordered,t=i.start,n="";for(let a=0;a<i.items.length;a++){let o=i.items[a];n+=this.listitem(o)}let s=e?"ol":"ul",r=e&&t!==1?' start="'+t+'"':"";return"<"+s+r+`>
`+n+"</"+s+`>
`}listitem(i){return`<li>${this.parser.parse(i.tokens)}</li>
`}checkbox({checked:i}){return"<input "+(i?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:i}){return`<p>${this.parser.parseInline(i)}</p>
`}table(i){let e="",t="";for(let s=0;s<i.header.length;s++)t+=this.tablecell(i.header[s]);e+=this.tablerow({text:t});let n="";for(let s=0;s<i.rows.length;s++){let r=i.rows[s];t="";for(let a=0;a<r.length;a++)t+=this.tablecell(r[a]);n+=this.tablerow({text:t})}return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow({text:i}){return`<tr>
${i}</tr>
`}tablecell(i){let e=this.parser.parseInline(i.tokens),t=i.header?"th":"td";return(i.align?`<${t} align="${i.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:i}){return`<strong>${this.parser.parseInline(i)}</strong>`}em({tokens:i}){return`<em>${this.parser.parseInline(i)}</em>`}codespan({text:i}){return`<code>${ti(i,!0)}</code>`}br(i){return"<br>"}del({tokens:i}){return`<del>${this.parser.parseInline(i)}</del>`}link({href:i,title:e,tokens:t}){let n=this.parser.parseInline(t),s=lf(i);if(s===null)return n;i=s;let r='<a href="'+i+'"';return e&&(r+=' title="'+ti(e)+'"'),r+=">"+n+"</a>",r}image({href:i,title:e,text:t,tokens:n}){n&&(t=this.parser.parseInline(n,this.parser.textRenderer));let s=lf(i);if(s===null)return ti(t);i=s;let r=`<img src="${i}" alt="${ti(t)}"`;return e&&(r+=` title="${ti(e)}"`),r+=">",r}text(i){return"tokens"in i&&i.tokens?this.parser.parseInline(i.tokens):"escaped"in i&&i.escaped?i.text:ti(i.text)}},mh=class{strong({text:i}){return i}em({text:i}){return i}codespan({text:i}){return i}del({text:i}){return i}html({text:i}){return i}text({text:i}){return i}link({text:i}){return""+i}image({text:i}){return""+i}br(){return""}checkbox({raw:i}){return i}},Xn=class ah{constructor(e){wt(this,"options");wt(this,"renderer");wt(this,"textRenderer");this.options=e||xs,this.options.renderer=this.options.renderer||new wo,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new mh}static parse(e,t){return new ah(t).parse(e)}static parseInline(e,t){return new ah(t).parseInline(e)}parse(e){this.renderer.parser=this;let t="";for(let n=0;n<e.length;n++){let s=e[n];if(this.options.extensions?.renderers?.[s.type]){let a=s,o=this.options.extensions.renderers[a.type].call({parser:this},a);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(a.type)){t+=o||"";continue}}let r=s;switch(r.type){case"space":t+=this.renderer.space(r);break;case"hr":t+=this.renderer.hr(r);break;case"heading":t+=this.renderer.heading(r);break;case"code":t+=this.renderer.code(r);break;case"table":t+=this.renderer.table(r);break;case"blockquote":t+=this.renderer.blockquote(r);break;case"list":t+=this.renderer.list(r);break;case"checkbox":t+=this.renderer.checkbox(r);break;case"html":t+=this.renderer.html(r);break;case"def":t+=this.renderer.def(r);break;case"paragraph":t+=this.renderer.paragraph(r);break;case"text":t+=this.renderer.text(r);break;default:{let a='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw Error(a)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n="";for(let s=0;s<e.length;s++){let r=e[s];if(this.options.extensions?.renderers?.[r.type]){let o=this.options.extensions.renderers[r.type].call({parser:this},r);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){n+=o||"";continue}}let a=r;switch(a.type){case"escape":n+=t.text(a);break;case"html":n+=t.html(a);break;case"link":n+=t.link(a);break;case"image":n+=t.image(a);break;case"checkbox":n+=t.checkbox(a);break;case"strong":n+=t.strong(a);break;case"em":n+=t.em(a);break;case"codespan":n+=t.codespan(a);break;case"br":n+=t.br(a);break;case"del":n+=t.del(a);break;case"text":n+=t.text(a);break;default:{let o='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw Error(o)}}}return n}},bo,ea=(bo=class{constructor(i){wt(this,"options");wt(this,"block");this.options=i||xs}preprocess(i){return i}postprocess(i){return i}processAllTokens(i){return i}emStrongMask(i){return i}provideLexer(){return this.block?Wn.lex:Wn.lexInline}provideParser(){return this.block?Xn.parse:Xn.parseInline}},wt(bo,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),wt(bo,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),bo),_s=new class{constructor(...i){wt(this,"defaults",oh());wt(this,"options",this.setOptions);wt(this,"parse",this.parseMarkdown(!0));wt(this,"parseInline",this.parseMarkdown(!1));wt(this,"Parser",Xn);wt(this,"Renderer",wo);wt(this,"TextRenderer",mh);wt(this,"Lexer",Wn);wt(this,"Tokenizer",Mo);wt(this,"Hooks",ea);this.use(...i)}walkTokens(i,e){let t=[];for(let n of i)switch(t=t.concat(e.call(this,n)),n.type){case"table":{let s=n;for(let r of s.header)t=t.concat(this.walkTokens(r.tokens,e));for(let r of s.rows)for(let a of r)t=t.concat(this.walkTokens(a.tokens,e));break}case"list":{let s=n;t=t.concat(this.walkTokens(s.items,e));break}default:{let s=n;this.defaults.extensions?.childTokens?.[s.type]?this.defaults.extensions.childTokens[s.type].forEach(r=>{let a=s[r].flat(1/0);t=t.concat(this.walkTokens(a,e))}):s.tokens&&(t=t.concat(this.walkTokens(s.tokens,e)))}}return t}use(...i){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return i.forEach(t=>{let n={...t};if(n.async=this.defaults.async||n.async||!1,t.extensions&&(t.extensions.forEach(s=>{if(!s.name)throw Error("extension name required");if("renderer"in s){let r=e.renderers[s.name];r?e.renderers[s.name]=function(...a){let o=s.renderer.apply(this,a);return o===!1&&(o=r.apply(this,a)),o}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw Error("extension level must be 'block' or 'inline'");let r=e[s.level];r?r.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),n.extensions=e),t.renderer){let s=this.defaults.renderer||new wo(this.defaults);for(let r in t.renderer){if(!(r in s))throw Error(`renderer '${r}' does not exist`);if(["options","parser"].includes(r))continue;let a=r,o=t.renderer[a],l=s[a];s[a]=(...c)=>{let h=o.apply(s,c);return h===!1&&(h=l.apply(s,c)),h||""}}n.renderer=s}if(t.tokenizer){let s=this.defaults.tokenizer||new Mo(this.defaults);for(let r in t.tokenizer){if(!(r in s))throw Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;let a=r,o=t.tokenizer[a],l=s[a];s[a]=(...c)=>{let h=o.apply(s,c);return h===!1&&(h=l.apply(s,c)),h}}n.tokenizer=s}if(t.hooks){let s=this.defaults.hooks||new ea;for(let r in t.hooks){if(!(r in s))throw Error(`hook '${r}' does not exist`);if(["options","block"].includes(r))continue;let a=r,o=t.hooks[a],l=s[a];s[a]=ea.passThroughHooks.has(r)?c=>{if(this.defaults.async&&ea.passThroughHooksRespectAsync.has(r))return(async()=>{let u=await o.call(s,c);return l.call(s,u)})();let h=o.call(s,c);return l.call(s,h)}:(...c)=>{if(this.defaults.async)return(async()=>{let u=await o.apply(s,c);return u===!1&&(u=await l.apply(s,c)),u})();let h=o.apply(s,c);return h===!1&&(h=l.apply(s,c)),h}}n.hooks=s}if(t.walkTokens){let s=this.defaults.walkTokens,r=t.walkTokens;n.walkTokens=function(a){let o=[];return o.push(r.call(this,a)),s&&(o=o.concat(s.call(this,a))),o}}this.defaults={...this.defaults,...n}}),this}setOptions(i){return this.defaults={...this.defaults,...i},this}lexer(i,e){return Wn.lex(i,e??this.defaults)}parser(i,e){return Xn.parse(i,e??this.defaults)}parseMarkdown(i){return(e,t)=>{let n={...t},s={...this.defaults,...n},r=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&n.async===!1)return r(Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return r(Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return r(Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(s.hooks&&(s.hooks.options=s,s.hooks.block=i),s.async)return(async()=>{let a=s.hooks?await s.hooks.preprocess(e):e,o=await(s.hooks?await s.hooks.provideLexer():i?Wn.lex:Wn.lexInline)(a,s),l=s.hooks?await s.hooks.processAllTokens(o):o;s.walkTokens&&await Promise.all(this.walkTokens(l,s.walkTokens));let c=await(s.hooks?await s.hooks.provideParser():i?Xn.parse:Xn.parseInline)(l,s);return s.hooks?await s.hooks.postprocess(c):c})().catch(r);try{s.hooks&&(e=s.hooks.preprocess(e));let a=(s.hooks?s.hooks.provideLexer():i?Wn.lex:Wn.lexInline)(e,s);s.hooks&&(a=s.hooks.processAllTokens(a)),s.walkTokens&&this.walkTokens(a,s.walkTokens);let o=(s.hooks?s.hooks.provideParser():i?Xn.parse:Xn.parseInline)(a,s);return s.hooks&&(o=s.hooks.postprocess(o)),o}catch(a){return r(a)}}}onError(i,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,i){let n="<p>An error occurred:</p><pre>"+ti(t.message+"",!0)+"</pre>";return e?Promise.resolve(n):n}if(e)return Promise.reject(t);throw t}}};function bt(i,e){return _s.parse(i,e)}bt.options=bt.setOptions=function(i){return _s.setOptions(i),bt.defaults=_s.defaults,nf(bt.defaults),bt},bt.getDefaults=oh,bt.defaults=xs,bt.use=function(...i){return _s.use(...i),bt.defaults=_s.defaults,nf(bt.defaults),bt},bt.walkTokens=function(i,e){return _s.walkTokens(i,e)},bt.parseInline=_s.parseInline,bt.Parser=Xn,bt.parser=Xn.parse,bt.Renderer=wo,bt.TextRenderer=mh,bt.Lexer=Wn,bt.lexer=Wn.lex,bt.Tokenizer=Mo,bt.Hooks=ea,bt.parse=bt,bt.options,bt.setOptions,bt.use,bt.walkTokens,bt.parseInline,Xn.parse,Wn.lex;var yf=()=>{let i,e=null,t;function n(){if(e&&!e.closed)e.focus();else{if(e=window.open("about:blank","reveal.js - Notes","width=1100,height=700"),e.marked=bt,e.document.write(`<!--
	NOTE: You need to build the notes plugin after making changes to this file.
-->
<html lang="en">
	<head>
		<meta charset="utf-8">

		<title>reveal.js - Speaker View</title>

		<style>
			body {
				font-family: Helvetica;
				font-size: 18px;
			}

			#current-slide,
			#upcoming-slide,
			#speaker-controls {
				padding: 6px;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
			}

			#current-slide iframe,
			#upcoming-slide iframe {
				width: 100%;
				height: 100%;
				border: 1px solid #ddd;
			}

			#current-slide .label,
			#upcoming-slide .label {
				position: absolute;
				top: 10px;
				left: 10px;
				z-index: 2;
			}

			#connection-status {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 20;
				padding: 30% 20% 20% 20%;
				font-size: 18px;
				color: #222;
				background: #fff;
				text-align: center;
				box-sizing: border-box;
				line-height: 1.4;
			}

			.overlay-element {
				height: 34px;
				line-height: 34px;
				padding: 0 10px;
				text-shadow: none;
				background: rgba( 220, 220, 220, 0.8 );
				color: #222;
				font-size: 14px;
			}

			.overlay-element.interactive:hover {
				background: rgba( 220, 220, 220, 1 );
			}

			#current-slide {
				position: absolute;
				width: 60%;
				height: 100%;
				top: 0;
				left: 0;
				padding-right: 0;
			}

			#upcoming-slide {
				position: absolute;
				width: 40%;
				height: 40%;
				right: 0;
				top: 0;
			}

			/* Speaker controls */
			#speaker-controls {
				position: absolute;
				top: 40%;
				right: 0;
				width: 40%;
				height: 60%;
				overflow: auto;
				font-size: 18px;
			}

				.speaker-controls-time.hidden,
				.speaker-controls-notes.hidden {
					display: none;
				}

				.speaker-controls-time .label,
				.speaker-controls-pace .label,
				.speaker-controls-notes .label {
					text-transform: uppercase;
					font-weight: normal;
					font-size: 0.66em;
					color: #666;
					margin: 0;
				}

				.speaker-controls-time, .speaker-controls-pace {
					border-bottom: 1px solid rgba( 200, 200, 200, 0.5 );
					margin-bottom: 10px;
					padding: 10px 16px;
					padding-bottom: 20px;
					cursor: pointer;
				}

				.speaker-controls-time .reset-button {
					opacity: 0;
					float: right;
					color: #666;
					text-decoration: none;
				}
				.speaker-controls-time:hover .reset-button {
					opacity: 1;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock {
					width: 50%;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock,
				.speaker-controls-time .pacing .hours-value,
				.speaker-controls-time .pacing .minutes-value,
				.speaker-controls-time .pacing .seconds-value {
					font-size: 1.9em;
				}

				.speaker-controls-time .timer {
					float: left;
				}

				.speaker-controls-time .clock {
					float: right;
					text-align: right;
				}

				.speaker-controls-time span.mute {
					opacity: 0.3;
				}

				.speaker-controls-time .pacing-title {
					margin-top: 5px;
				}

				.speaker-controls-time .pacing.ahead {
					color: blue;
				}

				.speaker-controls-time .pacing.on-track {
					color: green;
				}

				.speaker-controls-time .pacing.behind {
					color: red;
				}

				.speaker-controls-notes {
					padding: 10px 16px;
				}

				.speaker-controls-notes .value {
					margin-top: 5px;
					line-height: 1.4;
					font-size: 1.2em;
				}

			/* Layout selector\xA0*/
			#speaker-layout {
				position: absolute;
				top: 10px;
				right: 10px;
				color: #222;
				z-index: 10;
			}
				#speaker-layout select {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					border: 0;
					box-shadow: 0;
					cursor: pointer;
					opacity: 0;

					font-size: 1em;
					background-color: transparent;

					-moz-appearance: none;
					-webkit-appearance: none;
					-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				}

				#speaker-layout select:focus {
					outline: none;
					box-shadow: none;
				}

			.clear {
				clear: both;
			}

			/* Speaker layout: Wide */
			body[data-speaker-layout="wide"] #current-slide,
			body[data-speaker-layout="wide"] #upcoming-slide {
				width: 50%;
				height: 45%;
				padding: 6px;
			}

			body[data-speaker-layout="wide"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="wide"] #upcoming-slide {
				top: 0;
				left: 50%;
			}

			body[data-speaker-layout="wide"] #speaker-controls {
				top: 45%;
				left: 0;
				width: 100%;
				height: 50%;
				font-size: 1.25em;
			}

			/* Speaker layout: Tall */
			body[data-speaker-layout="tall"] #current-slide,
			body[data-speaker-layout="tall"] #upcoming-slide {
				width: 45%;
				height: 50%;
				padding: 6px;
			}

			body[data-speaker-layout="tall"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="tall"] #upcoming-slide {
				top: 50%;
				left: 0;
			}

			body[data-speaker-layout="tall"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 45%;
				width: 55%;
				height: 100%;
				font-size: 1.25em;
			}

			/* Speaker layout: Notes only */
			body[data-speaker-layout="notes-only"] #current-slide,
			body[data-speaker-layout="notes-only"] #upcoming-slide {
				display: none;
			}

			body[data-speaker-layout="notes-only"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				font-size: 1.25em;
			}

			@media screen and (max-width: 1080px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 16px;
				}
			}

			@media screen and (max-width: 900px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 14px;
				}
			}

			@media screen and (max-width: 800px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 12px;
				}
			}

		</style>
	</head>

	<body>

		<div id="connection-status">Loading speaker view...</div>

		<div id="current-slide"></div>
		<div id="upcoming-slide"><span class="overlay-element label">Upcoming</span></div>
		<div id="speaker-controls">
			<div class="speaker-controls-time">
				<h4 class="label">Time <span class="reset-button">Click to Reset</span></h4>
				<div class="clock">
					<span class="clock-value">0:00 AM</span>
				</div>
				<div class="timer">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
				<div class="clear"></div>

				<h4 class="label pacing-title" style="display: none">Pacing \u2013 Time to finish current slide</h4>
				<div class="pacing" style="display: none">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
			</div>

			<div class="speaker-controls-notes hidden">
				<h4 class="label">Notes</h4>
				<div class="value"></div>
			</div>
		</div>
		<div id="speaker-layout" class="overlay-element interactive">
			<span class="speaker-layout-label"></span>
			<select class="speaker-layout-dropdown"></select>
		</div>

		<script>

			(function() {

				var notes,
					notesValue,
					currentState,
					currentSlide,
					upcomingSlide,
					layoutLabel,
					layoutDropdown,
					pendingCalls = {},
					lastRevealApiCallId = 0,
					connected = false

				var connectionStatus = document.querySelector( '#connection-status' );

				var SPEAKER_LAYOUTS = {
					'default': 'Default',
					'wide': 'Wide',
					'tall': 'Tall',
					'notes-only': 'Notes only'
				};

				setupLayout();

				let openerOrigin;

				try {
					openerOrigin = window.opener.location.origin;
				}
				catch ( error ) { console.warn( error ) }

				// In order to prevent XSS, the speaker view will only run if its
				// opener has the same origin as itself
				if( window.location.origin !== openerOrigin ) {
					connectionStatus.innerHTML = 'Cross origin error.<br>The speaker window can only be opened from the same origin.';
					return;
				}

				var connectionTimeout = setTimeout( function() {
					connectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';
				}, 5000 );

				window.addEventListener( 'message', function( event ) {

					// Validate the origin of all messages to avoid parsing messages
					// that aren't meant for us. Ignore when running off file:// so
					// that the speaker view continues to work without a web server.
					if( window.location.origin !== event.origin && window.location.origin !== 'file://' ) {
						return
					}

					clearTimeout( connectionTimeout );
					connectionStatus.style.display = 'none';

					var data = JSON.parse( event.data );

					// The overview mode is only useful to the reveal.js instance
					// where navigation occurs so we don't sync it
					if( data.state ) delete data.state.overview;

					// Messages sent by the notes plugin inside of the main window
					if( data && data.namespace === 'reveal-notes' ) {
						if( data.type === 'connect' ) {
							handleConnectMessage( data );
						}
						else if( data.type === 'state' ) {
							handleStateMessage( data );
						}
						else if( data.type === 'return' ) {
							pendingCalls[data.callId](data.result);
							delete pendingCalls[data.callId];
						}
					}
					// Messages sent by the reveal.js inside of the current slide preview
					else if( data && data.namespace === 'reveal' ) {
						const supportedEvents = [
							'slidechanged',
							'fragmentshown',
							'fragmenthidden',
							'paused',
							'resumed',
							'previewiframe',
							'previewimage',
							'previewvideo',
							'closeoverlay'
						];

						if( /ready/.test( data.eventName ) ) {
							// Send a message back to notify that the handshake is complete
							window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );
						}
						else if( supportedEvents.includes( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {
							dispatchStateToMainWindow( data.state );
						}
					}

				} );

				/**
				 * Updates the presentation in the main window to match the state
				 * of the presentation in the notes window.
				 */
				const dispatchStateToMainWindow = debounce(( state ) => {
					window.opener.postMessage( JSON.stringify({ method: 'setState', args: [ state ]} ), '*' );
				}, 500);

				/**
				 * Asynchronously calls the Reveal.js API of the main frame.
				 */
				function callRevealApi( methodName, methodArguments, callback ) {

					var callId = ++lastRevealApiCallId;
					pendingCalls[callId] = callback;
					window.opener.postMessage( JSON.stringify( {
						namespace: 'reveal-notes',
						type: 'call',
						callId: callId,
						methodName: methodName,
						arguments: methodArguments
					} ), '*' );

				}

				/**
				 * Called when the main window is trying to establish a
				 * connection.
				 */
				function handleConnectMessage( data ) {

					if( connected === false ) {
						connected = true;

						setupIframes( data );
						setupKeyboard();
						setupNotes();
						setupTimer();
						setupHeartbeat();
					}

				}

				/**
				 * Called when the main window sends an updated state.
				 */
				function handleStateMessage( data ) {

					// Store the most recently set state to avoid circular loops
					// applying the same state
					currentState = JSON.stringify( data.state );

					// No need for updating the notes in case of fragment changes
					if ( data.notes ) {
						notes.classList.remove( 'hidden' );
						notesValue.style.whiteSpace = data.whitespace;
						if( data.markdown ) {
							notesValue.innerHTML = marked.parse( data.notes );
						}
						else {
							notesValue.innerHTML = data.notes;
						}
					}
					else {
						notes.classList.add( 'hidden' );
					}

					// Don't show lightboxes in the upcoming slide
					const { previewVideo, previewImage, previewIframe, ...upcomingState } = data.state;

					// Update the note slides
					currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ upcomingState ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );

				}

				// Limit to max one state update per X ms
				handleStateMessage = debounce( handleStateMessage, 200 );

				/**
				 * Forward keyboard events to the current slide window.
				 * This enables keyboard events to work even if focus
				 * isn't set on the current slide iframe.
				 *
				 * Block F5 default handling, it reloads and disconnects
				 * the speaker notes window.
				 */
				function setupKeyboard() {

					document.addEventListener( 'keydown', function( event ) {
						if( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {
							event.preventDefault();
							return false;
						}
						currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );
					} );

				}

				/**
				 * Creates the preview iframes.
				 */
				function setupIframes( data ) {

					var params = [
						'receiver',
						'progress=false',
						'history=false',
						'transition=none',
						'autoSlide=0',
						'backgroundTransition=none'
					].join( '&' );

					var urlSeparator = /\\?/.test(data.url) ? '&' : '?';
					var hash = '#/' + data.state.indexh + '/' + data.state.indexv;
					var currentURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&postMessageEvents=true' + hash;
					var upcomingURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&controls=false' + hash;

					currentSlide = document.createElement( 'iframe' );
					currentSlide.setAttribute( 'width', 1280 );
					currentSlide.setAttribute( 'height', 1024 );
					currentSlide.setAttribute( 'src', currentURL );
					document.querySelector( '#current-slide' ).appendChild( currentSlide );

					upcomingSlide = document.createElement( 'iframe' );
					upcomingSlide.setAttribute( 'width', 640 );
					upcomingSlide.setAttribute( 'height', 512 );
					upcomingSlide.setAttribute( 'src', upcomingURL );
					document.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );

				}

				/**
				 * Setup the notes UI.
				 */
				function setupNotes() {

					notes = document.querySelector( '.speaker-controls-notes' );
					notesValue = document.querySelector( '.speaker-controls-notes .value' );

				}

				/**
				 * We send out a heartbeat at all times to ensure we can
				 * reconnect with the main presentation window after reloads.
				 */
				function setupHeartbeat() {

					setInterval( () => {
						window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'heartbeat'} ), '*' );
					}, 1000 );

				}

				function getTimings( callback ) {

					callRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {
						callRevealApi( 'getConfig', [], function ( config ) {
							var totalTime = config.totalTime;
							var minTimePerSlide = config.minimumTimePerSlide || 0;
							var defaultTiming = config.defaultTiming;
							if ((defaultTiming == null) && (totalTime == null)) {
								callback(null);
								return;
							}
							// Setting totalTime overrides defaultTiming
							if (totalTime) {
								defaultTiming = 0;
							}
							var timings = [];
							for ( var i in slideAttributes ) {
								var slide = slideAttributes[ i ];
								var timing = defaultTiming;
								if( slide.hasOwnProperty( 'data-timing' )) {
									var t = slide[ 'data-timing' ];
									timing = parseInt(t);
									if( isNaN(timing) ) {
										console.warn("Could not parse timing '" + t + "' of slide " + i + "; using default of " + defaultTiming);
										timing = defaultTiming;
									}
								}
								timings.push(timing);
							}
							if ( totalTime ) {
								// After we've allocated time to individual slides, we summarize it and
								// subtract it from the total time
								var remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );
								// The remaining time is divided by the number of slides that have 0 seconds
								// allocated at the moment, giving the average time-per-slide on the remaining slides
								var remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length
								var timePerSlide = Math.round( remainingTime / remainingSlides, 0 )
								// And now we replace every zero-value timing with that average
								timings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );
							}
							var slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length
							if ( slidesUnderMinimum ) {
								message = "The pacing time for " + slidesUnderMinimum + " slide(s) is under the configured minimum of " + minTimePerSlide + " seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).";
								alert(message);
							}
							callback( timings );
						} );
					} );

				}

				/**
				 * Return the number of seconds allocated for presenting
				 * all slides up to and including this one.
				 */
				function getTimeAllocated( timings, callback ) {

					callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
						var allocated = 0;
						for (var i in timings.slice(0, currentSlide + 1)) {
							allocated += timings[i];
						}
						callback( allocated );
					} );

				}

				/**
				 * Create the timer and clock and start updating them
				 * at an interval.
				 */
				function setupTimer() {

					var start = new Date(),
					timeEl = document.querySelector( '.speaker-controls-time' ),
					clockEl = timeEl.querySelector( '.clock-value' ),
					hoursEl = timeEl.querySelector( '.hours-value' ),
					minutesEl = timeEl.querySelector( '.minutes-value' ),
					secondsEl = timeEl.querySelector( '.seconds-value' ),
					pacingTitleEl = timeEl.querySelector( '.pacing-title' ),
					pacingEl = timeEl.querySelector( '.pacing' ),
					pacingHoursEl = pacingEl.querySelector( '.hours-value' ),
					pacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),
					pacingSecondsEl = pacingEl.querySelector( '.seconds-value' );

					var timings = null;
					getTimings( function ( _timings ) {

						timings = _timings;
						if (_timings !== null) {
							pacingTitleEl.style.removeProperty('display');
							pacingEl.style.removeProperty('display');
						}

						// Update once directly
						_updateTimer();

						// Then update every second
						setInterval( _updateTimer, 1000 );

					} );


					function _resetTimer() {

						if (timings == null) {
							start = new Date();
							_updateTimer();
						}
						else {
							// Reset timer to beginning of current slide
							getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
								var slideEndTiming = slideEndTimingSeconds * 1000;
								callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
									var currentSlideTiming = timings[currentSlide] * 1000;
									var previousSlidesTiming = slideEndTiming - currentSlideTiming;
									var now = new Date();
									start = new Date(now.getTime() - previousSlidesTiming);
									_updateTimer();
								} );
							} );
						}

					}

					timeEl.addEventListener( 'click', function() {
						_resetTimer();
						return false;
					} );

					function _displayTime( hrEl, minEl, secEl, time) {

						var sign = Math.sign(time) == -1 ? "-" : "";
						time = Math.abs(Math.round(time / 1000));
						var seconds = time % 60;
						var minutes = Math.floor( time / 60 ) % 60 ;
						var hours = Math.floor( time / ( 60 * 60 )) ;
						hrEl.innerHTML = sign + zeroPadInteger( hours );
						if (hours == 0) {
							hrEl.classList.add( 'mute' );
						}
						else {
							hrEl.classList.remove( 'mute' );
						}
						minEl.innerHTML = ':' + zeroPadInteger( minutes );
						if (hours == 0 && minutes == 0) {
							minEl.classList.add( 'mute' );
						}
						else {
							minEl.classList.remove( 'mute' );
						}
						secEl.innerHTML = ':' + zeroPadInteger( seconds );
					}

					function _updateTimer() {

						var diff, hours, minutes, seconds,
						now = new Date();

						diff = now.getTime() - start.getTime();

						clockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );
						_displayTime( hoursEl, minutesEl, secondsEl, diff );
						if (timings !== null) {
							_updatePacing(diff);
						}

					}

					function _updatePacing(diff) {

						getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
							var slideEndTiming = slideEndTimingSeconds * 1000;

							callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
								var currentSlideTiming = timings[currentSlide] * 1000;
								var timeLeftCurrentSlide = slideEndTiming - diff;
								if (timeLeftCurrentSlide < 0) {
									pacingEl.className = 'pacing behind';
								}
								else if (timeLeftCurrentSlide < currentSlideTiming) {
									pacingEl.className = 'pacing on-track';
								}
								else {
									pacingEl.className = 'pacing ahead';
								}
								_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );
							} );
						} );
					}

				}

				/**
				 * Sets up the speaker view layout and layout selector.
				 */
				function setupLayout() {

					layoutDropdown = document.querySelector( '.speaker-layout-dropdown' );
					layoutLabel = document.querySelector( '.speaker-layout-label' );

					// Render the list of available layouts
					for( var id in SPEAKER_LAYOUTS ) {
						var option = document.createElement( 'option' );
						option.setAttribute( 'value', id );
						option.textContent = SPEAKER_LAYOUTS[ id ];
						layoutDropdown.appendChild( option );
					}

					// Monitor the dropdown for changes
					layoutDropdown.addEventListener( 'change', function( event ) {

						setLayout( layoutDropdown.value );

					}, false );

					// Restore any currently persisted layout
					setLayout( getLayout() );

				}

				/**
				 * Sets a new speaker view layout. The layout is persisted
				 * in local storage.
				 */
				function setLayout( value ) {

					var title = SPEAKER_LAYOUTS[ value ];

					layoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );
					layoutDropdown.value = value;

					document.body.setAttribute( 'data-speaker-layout', value );

					// Persist locally
					if( supportsLocalStorage() ) {
						window.localStorage.setItem( 'reveal-speaker-layout', value );
					}

				}

				/**
				 * Returns the ID of the most recently set speaker layout
				 * or our default layout if none has been set.
				 */
				function getLayout() {

					if( supportsLocalStorage() ) {
						var layout = window.localStorage.getItem( 'reveal-speaker-layout' );
						if( layout ) {
							return layout;
						}
					}

					// Default to the first record in the layouts hash
					for( var id in SPEAKER_LAYOUTS ) {
						return id;
					}

				}

				function supportsLocalStorage() {

					try {
						localStorage.setItem('test', 'test');
						localStorage.removeItem('test');
						return true;
					}
					catch( e ) {
						return false;
					}

				}

				function zeroPadInteger( num ) {

					var str = '00' + parseInt( num );
					return str.substring( str.length - 2 );

				}

				/**
				 * Limits the frequency at which a function can be called.
				 */
				function debounce( fn, ms ) {

					var lastTime = 0,
						timeout;

					return function() {

						var args = arguments;
						var context = this;

						clearTimeout( timeout );

						var timeSinceLastCall = Date.now() - lastTime;
						if( timeSinceLastCall > ms ) {
							fn.apply( context, args );
							lastTime = Date.now();
						}
						else {
							timeout = setTimeout( function() {
								fn.apply( context, args );
								lastTime = Date.now();
							}, ms - timeSinceLastCall );
						}

					}

				}

			})();

		<\/script>
	</body>
</html>`),!e){alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.");return}r()}}function s(u){e&&!e.closed?e.focus():(e=u,window.addEventListener("message",c),h())}function r(){let u=t.getConfig().url,d=typeof u=="string"?u:window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search;i=setInterval(function(){e.postMessage(JSON.stringify({namespace:"reveal-notes",type:"connect",state:t.getState(),url:d}),"*")},500),window.addEventListener("message",c)}function a(u,d,p){let f=t[u].apply(t,d);e.postMessage(JSON.stringify({namespace:"reveal-notes",type:"return",result:f,callId:p}),"*")}function o(u){let d=t.getCurrentSlide(),p=d.querySelectorAll("aside.notes"),f=d.querySelector(".current-fragment"),g={namespace:"reveal-notes",type:"state",notes:"",markdown:!1,whitespace:"normal",state:t.getState()};if(d.hasAttribute("data-notes")&&(g.notes=d.getAttribute("data-notes"),g.whitespace="pre-wrap"),f){let m=f.querySelector("aside.notes");m?(g.notes=m.innerHTML,g.markdown=typeof m.getAttribute("data-markdown")=="string",p=null):f.hasAttribute("data-notes")&&(g.notes=f.getAttribute("data-notes"),g.whitespace="pre-wrap",p=null)}p&&p.length&&(p=Array.from(p).filter(m=>m.closest(".fragment")===null),g.notes=p.map(m=>m.innerHTML).join(`
`),g.markdown=p[0]&&typeof p[0].getAttribute("data-markdown")=="string"),e.postMessage(JSON.stringify(g),"*")}function l(u){try{return window.location.origin===u.source.location.origin}catch{return!1}}function c(u){if(l(u))try{let d=JSON.parse(u.data);d&&d.namespace==="reveal-notes"&&d.type==="connected"?(clearInterval(i),h()):d&&d.namespace==="reveal-notes"&&d.type==="call"&&a(d.methodName,d.arguments,d.callId)}catch{}}function h(){t.on("slidechanged",o),t.on("fragmentshown",o),t.on("fragmenthidden",o),t.on("overviewhidden",o),t.on("overviewshown",o),t.on("paused",o),t.on("resumed",o),t.on("previewiframe",o),t.on("previewimage",o),t.on("previewvideo",o),t.on("closeoverlay",o),o()}return{id:"notes",init:function(u){t=u,/receiver/i.test(window.location.search)||(window.location.search.match(/(\?|\&)notes/gi)===null?window.addEventListener("message",d=>{if(!e&&typeof d.data=="string"){let p;try{p=JSON.parse(d.data)}catch{}p&&p.namespace==="reveal-notes"&&p.type==="heartbeat"&&s(d.source)}}):n(),t.addKeyBinding({keyCode:83,key:"S",description:"Speaker notes view"},function(){n()}))},open:n}};function Mi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Rf(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}var Sn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},oa={duration:.5,overwrite:!1,delay:0},Ih,Qt,It,On=1e8,Et=1/On,Mh=Math.PI*2,ov=Mh/4,lv=0,Cf=Math.sqrt,cv=Math.cos,hv=Math.sin,Xt=function(e){return typeof e=="string"},zt=function(e){return typeof e=="function"},Ei=function(e){return typeof e=="number"},Oo=function(e){return typeof e>"u"},si=function(e){return typeof e=="object"},bn=function(e){return e!==!1},Lh=function(){return typeof window<"u"},To=function(e){return zt(e)||Xt(e)},Pf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},rn=Array.isArray,uv=/random\([^)]+\)/g,dv=/,\s*/g,xf=/(?:-?\.?\d|\.)+/gi,Dh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ws=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,gh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Nh=/[+-]=-?[.\d]+/,fv=/[^,'"\[\]\s]+/gi,pv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,kt,ni,wh,kh,Rn={},Io={},If,Lf=function(e){return(Io=er(e,Rn))&&an},Bo=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},la=function(e,t){return!t&&console.warn(e)},Df=function(e,t){return e&&(Rn[e]=t)&&Io&&(Io[e]=t)||Rn},ca=function(){return 0},mv={suppressEvents:!0,isStart:!0,kill:!1},Ro={suppressEvents:!0,kill:!1},gv={suppressEvents:!0},Uh={},Xi=[],Eh={},Nf,yn={},vh={},bf=30,Co=[],Fh="",Oh=function(e){var t=e[0],n,s;if(si(t)||zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(s=Co.length;s--&&!Co[s].targetTest(t););n=Co[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new Hh(e[s],n)))||e.splice(s,1);return e},qi=function(e){return e._gsap||Oh(Bn(e))[0]._gsap},Bh=function(e,t,n){return(n=e[t])&&zt(n)?e[t]():Oo(n)&&e.getAttribute&&e.getAttribute(t)||n},fn=function(e,t){return(e=e.split(",")).forEach(t)||e},Vt=function(e){return Math.round(e*1e5)/1e5||0},Nt=function(e){return Math.round(e*1e7)/1e7||0},Es=function(e,t){var n=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+s:n==="-"?e-s:n==="*"?e*s:e/s},vv=function(e,t){for(var n=t.length,s=0;e.indexOf(t[s])<0&&++s<n;);return s<n},Lo=function(){var e=Xi.length,t=Xi.slice(0),n,s;for(Eh={},Xi.length=0,n=0;n<e;n++)s=t[n],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},zh=function(e){return!!(e._initted||e._startAt||e.add)},kf=function(e,t,n,s){Xi.length&&!Qt&&Lo(),e.render(t,n,s||!!(Qt&&t<0&&zh(e))),Xi.length&&!Qt&&Lo()},Uf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(fv).length<2?t:Xt(e)?e.trim():e},Ff=function(e){return e},Cn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},_v=function(e){return function(t,n){for(var s in n)s in t||s==="duration"&&e||s==="ease"||(t[s]=n[s])}},er=function(e,t){for(var n in t)e[n]=t[n];return e},Sf=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=si(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Do=function(e,t){var n={},s;for(s in e)s in t||(n[s]=e[s]);return n},sa=function(e){var t=e.parent||kt,n=e.keyframes?_v(rn(e.keyframes)):Cn;if(bn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},yv=function(e,t){for(var n=e.length,s=n===t.length;s&&n--&&e[n]===t[n];);return n<0},Of=function(e,t,n,s,r){n===void 0&&(n="_first"),s===void 0&&(s="_last");var a=e[s],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[s]=t,t._prev=a,t.parent=t._dp=e,t},zo=function(e,t,n,s){n===void 0&&(n="_first"),s===void 0&&(s="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[s]===t&&(e[s]=r),t._next=t._prev=t.parent=null},$i=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},bs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},xv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ah=function(e,t,n,s){return e._startAt&&(Qt?e._startAt.revert(Ro):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},bv=function i(e){return!e||e._ts&&i(e.parent)},Mf=function(e){return e._repeat?tr(e._tTime,e=e.duration()+e._rDelay)*e:0},tr=function(e,t){var n=Math.floor(e=Nt(e/t));return e&&n===e?n-1:n},No=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Vo=function(e){return e._end=Nt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Et)||0))},Ho=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Nt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Vo(e),n._dirty||bs(n,e)),e},Bf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=No(e.rawTime(),t),(!t._dur||fa(0,t.totalDuration(),n)-t._tTime>Et)&&t.render(n,!0)),bs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Et}},ii=function(e,t,n,s){return t.parent&&$i(t),t._start=Nt((Ei(n)?n:!n&&ko(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==kt?Fn(e,n,t):e._time)+t._delay),t._end=Nt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Of(e,t,"_first","_last",e._sort?"_start":0),ko(t)||(e._recent=t),s||Bf(e,t),e._ts<0&&Ho(e,e._tTime),e},zf=function(e,t){return(Rn.ScrollTrigger||Bo("scrollTrigger",t))&&Rn.ScrollTrigger.create(t,e)},Vf=function(e,t,n,s,r){if(Xh(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Qt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Nf!==xn.frame)return Xi.push(e),e._lazy=[r,s],1},Sv=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},ko=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Mv=function(e,t,n,s){var r=e.ratio,a=t<0||!t&&(!e._start&&Sv(e)&&!(!e._initted&&ko(e))||(e._ts<0||e._dp._ts<0)&&!ko(e))?0:1,o=e._rDelay,l=0,c,h,u;if(o&&e._repeat&&(l=fa(0,e._tDur,t),h=tr(l,o),e._yoyo&&h&1&&(a=1-a),h!==tr(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Qt||s||e._zTime===Et||!t&&e._zTime){if(!e._initted&&Vf(e,t,s,n,l))return;for(u=e._zTime,e._zTime=t||(n?Et:0),n||(n=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Ah(e,t,n,!0),e._onUpdate&&!n&&Tn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Tn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&$i(e,1),!n&&!Qt&&(Tn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},wv=function(e,t,n){var s;if(n>t)for(s=e._first;s&&s._start<=n;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=n;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},nr=function(e,t,n,s){var r=e._repeat,a=Nt(t)||0,o=e._tTime/e._tDur;return o&&!s&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:Nt(a*(r+1)+e._rDelay*r):a,o>0&&!s&&Ho(e,e._tTime=e._tDur*o),e.parent&&Vo(e),n||bs(e.parent,e),e},wf=function(e){return e instanceof sn?bs(e):nr(e,e._dur)},Ev={_start:0,endTime:ca,totalDuration:ca},Fn=function i(e,t,n){var s=e.labels,r=e._recent||Ev,a=e.duration()>=On?r.endTime(!1):e._dur,o,l,c;return Xt(t)&&(isNaN(t)||t in s)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in s||(s[t]=a),s[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(rn(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},ra=function(e,t,n){var s=Ei(t[1]),r=(s?2:1)+(e<2?0:1),a=t[r],o,l;if(s&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=bn(l.vars.inherit)&&l.parent;a.immediateRender=bn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new Gt(t[0],a,t[r+1])},Yi=function(e,t){return e||e===0?t(e):t},fa=function(e,t,n){return n<e?e:n>t?t:n},en=function(e,t){return!Xt(e)||!(t=pv.exec(e))?"":t[1]},Av=function(e,t,n){return Yi(n,function(s){return fa(e,t,s)})},Th=[].slice,Hf=function(e,t){return e&&si(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&si(e[0]))&&!e.nodeType&&e!==ni},Tv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(s){var r;return Xt(s)&&!t||Hf(s,1)?(r=n).push.apply(r,Bn(s)):n.push(s)})||n},Bn=function(e,t,n){return It&&!t&&It.selector?It.selector(e):Xt(e)&&!n&&(wh||!ir())?Th.call((t||kh).querySelectorAll(e),0):rn(e)?Tv(e,n):Hf(e)?Th.call(e,0):e?[e]:[]},Rh=function(e){return e=Bn(e)[0]||la("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Bn(t,n.querySelectorAll?n:n===e?la("Invalid scope")||kh.createElement("div"):e)}},Gf=function(e){return e.sort(function(){return .5-Math.random()})},Wf=function(e){if(zt(e))return e;var t=si(e)?e:{each:e},n=Ss(t.ease),s=t.from||0,r=parseFloat(t.base)||0,a={},o=s>0&&s<1,l=isNaN(s)||o,c=t.axis,h=s,u=s;return Xt(s)?h=u={center:.5,edges:.5,end:1}[s]||0:!o&&l&&(h=s[0],u=s[1]),function(d,p,f){var g=(f||t).length,m=a[g],v,x,E,y,M,w,_,b,C;if(!m){if(C=t.grid==="auto"?0:(t.grid||[1,On])[1],!C){for(_=-On;_<(_=f[C++].getBoundingClientRect().left)&&C<g;);C<g&&C--}for(m=a[g]=[],v=l?Math.min(C,g)*h-.5:s%C,x=C===On?0:l?g*u/C-.5:s/C|0,_=0,b=On,w=0;w<g;w++)E=w%C-v,y=x-(w/C|0),m[w]=M=c?Math.abs(c==="y"?y:E):Cf(E*E+y*y),M>_&&(_=M),M<b&&(b=M);s==="random"&&Gf(m),m.max=_-b,m.min=b,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(C>g?g-1:c?c==="y"?g/C:C:Math.max(C,g/C))||0)*(s==="edges"?-1:1),m.b=g<0?r-g:r,m.u=en(t.amount||t.each)||0,n=n&&g<0?zv(n):n}return g=(m[d]-m.min)/m.max||0,Nt(m.b+(n?n(g):g)*m.v)+m.u}},Ch=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var s=Nt(Math.round(parseFloat(n)/e)*e*t);return(s-s%1)/t+(Ei(n)?0:en(n))}},Xf=function(e,t){var n=rn(e),s,r;return!n&&si(e)&&(s=n=e.radius||On,e.values?(e=Bn(e.values),(r=!Ei(e[0]))&&(s*=s)):e=Ch(e.increment)),Yi(t,n?zt(e)?function(a){return r=e(a),Math.abs(r-a)<=s?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=On,h=0,u=e.length,d,p;u--;)r?(d=e[u].x-o,p=e[u].y-l,d=d*d+p*p):d=Math.abs(e[u]-o),d<c&&(c=d,h=u);return h=!s||c<=s?e[h]:a,r||h===a||Ei(a)?h:h+en(a)}:Ch(e))},qf=function(e,t,n,s){return Yi(rn(e)?!t:n===!0?!!(n=0):!s,function(){return rn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(s=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*s)/s})},Rv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(s){return t.reduce(function(r,a){return a(r)},s)}},Cv=function(e,t){return function(n){return e(parseFloat(n))+(t||en(n))}},Pv=function(e,t,n){return Yf(e,t,0,1,n)},$f=function(e,t,n){return Yi(n,function(s){return e[~~t(s)]})},Iv=function i(e,t,n){var s=t-e;return rn(e)?$f(e,i(0,e.length),t):Yi(n,function(r){return(s+(r-e)%s)%s+e})},Lv=function i(e,t,n){var s=t-e,r=s*2;return rn(e)?$f(e,i(0,e.length-1),t):Yi(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>s?r-a:a)})},sr=function(e){return e.replace(uv,function(t){var n=t.indexOf("[")+1,s=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(dv);return qf(n?s:+s[0],n?0:+s[1],+s[2]||1e-5)})},Yf=function(e,t,n,s,r){var a=t-e,o=s-n;return Yi(r,function(l){return n+((l-e)/a*o||0)})},Dv=function i(e,t,n,s){var r=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!r){var a=Xt(e),o={},l,c,h,u,d;if(n===!0&&(s=1)&&(n=null),a)e={p:e},t={p:t};else if(rn(e)&&!rn(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(i(e[c-1],e[c]));u--,r=function(f){f*=u;var g=Math.min(d,~~f);return h[g](f-g)},n=t}else s||(e=er(rn(e)?[]:{},e));if(!h){for(l in t)Gh.call(o,e,l,"get",t[l]);r=function(f){return Yh(f,o)||(a?e.p:e)}}}return Yi(n,r)},Ef=function(e,t,n){var s=e.labels,r=On,a,o,l;for(a in s)o=s[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},Tn=function(e,t,n){var s=e.vars,r=s[t],a=It,o=e._ctx,l,c,h;if(r)return l=s[t+"Params"],c=s.callbackScope||e,n&&Xi.length&&Lo(),o&&(It=o),h=l?r.apply(c,l):r.call(c),It=a,h},na=function(e){return $i(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Qt),e.progress()<1&&Tn(e,"onInterrupt"),e},Qs,Zf=[],Jf=function(e){if(e)if(e=!e.name&&e.default||e,Lh()||e.headless){var t=e.name,n=zt(e),s=t&&!n&&e.init?function(){this._props=[]}:e,r={init:ca,render:Yh,add:Gh,kill:Jv,modifier:Zv,rawVars:0},a={targetTest:0,get:0,getSetter:Go,aliases:{},register:0};if(ir(),e!==s){if(yn[t])return;Cn(s,Cn(Do(e,r),a)),er(s.prototype,er(r,Do(e,a))),yn[s.prop=t]=s,e.targetTest&&(Co.push(s),Uh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Df(t,s),e.register&&e.register(an,s,pn)}else Zf.push(e)},At=255,ia={aqua:[0,At,At],lime:[0,At,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,At],navy:[0,0,128],white:[At,At,At],olive:[128,128,0],yellow:[At,At,0],orange:[At,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[At,0,0],pink:[At,192,203],cyan:[0,At,At],transparent:[At,At,At,0]},_h=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*At+.5|0},Kf=function(e,t,n){var s=e?Ei(e)?[e>>16,e>>8&At,e&At]:0:ia.black,r,a,o,l,c,h,u,d,p,f;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ia[e])s=ia[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&At,s&At,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&At,e&At]}else if(e.substr(0,3)==="hsl"){if(s=f=e.match(xf),!t)l=+s[0]%360/360,c=+s[1]/100,h=+s[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,s.length>3&&(s[3]*=1),s[0]=_h(l+1/3,r,a),s[1]=_h(l,r,a),s[2]=_h(l-1/3,r,a);else if(~e.indexOf("="))return s=e.match(Dh),n&&s.length<4&&(s[3]=1),s}else s=e.match(xf)||ia.transparent;s=s.map(Number)}return t&&!f&&(r=s[0]/At,a=s[1]/At,o=s[2]/At,u=Math.max(r,a,o),d=Math.min(r,a,o),h=(u+d)/2,u===d?l=c=0:(p=u-d,c=h>.5?p/(2-u-d):p/(u+d),l=u===r?(a-o)/p+(a<o?6:0):u===a?(o-r)/p+2:(r-a)/p+4,l*=60),s[0]=~~(l+.5),s[1]=~~(c*100+.5),s[2]=~~(h*100+.5)),n&&s.length<4&&(s[3]=1),s},jf=function(e){var t=[],n=[],s=-1;return e.split(wi).forEach(function(r){var a=r.match(ws)||[];t.push.apply(t,a),n.push(s+=a.length+1)}),t.c=n,t},Af=function(e,t,n){var s="",r=(e+s).match(wi),a=t?"hsla(":"rgba(",o=0,l,c,h,u;if(!r)return e;if(r=r.map(function(d){return(d=Kf(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=jf(e),l=n.c,l.join(s)!==h.c.join(s)))for(c=e.replace(wi,"1").split(ws),u=c.length-1;o<u;o++)s+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(wi),u=c.length-1;o<u;o++)s+=c[o]+r[o];return s+c[u]},wi=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ia)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),Nv=/hsl[a]?\(/,Vh=function(e){var t=e.join(" "),n;if(wi.lastIndex=0,wi.test(t))return n=Nv.test(t),e[1]=Af(e[1],n),e[0]=Af(e[0],n,jf(e[1])),!0},ha,xn=(function(){var i=Date.now,e=500,t=33,n=i(),s=n,r=1e3/240,a=r,o=[],l,c,h,u,d,p,f=function g(m){var v=i()-s,x=m===!0,E,y,M,w;if((v>e||v<0)&&(n+=v-t),s+=v,M=s-n,E=M-a,(E>0||x)&&(w=++u.frame,d=M-u.time*1e3,u.time=M=M/1e3,a+=E+(E>=r?0:r-E),y=1),x||(l=c(g)),y)for(p=0;p<o.length;p++)o[p](M,d,w,m)};return u={time:0,frame:0,tick:function(){f(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){If&&(!wh&&Lh()&&(ni=wh=window,kh=ni.document||{},Rn.gsap=an,(ni.gsapVersions||(ni.gsapVersions=[])).push(an.version),Lf(Io||ni.GreenSockGlobals||!ni.gsap&&ni||{}),Zf.forEach(Jf)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},ha=1,f(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ha=0,c=ca},lagSmoothing:function(m,v){e=m||1/0,t=Math.min(v||33,e)},fps:function(m){r=1e3/(m||240),a=u.time*1e3+r},add:function(m,v,x){var E=v?function(y,M,w,_){m(y,M,w,_),u.remove(E)}:m;return u.remove(m),o[x?"unshift":"push"](E),ir(),E},remove:function(m,v){~(v=o.indexOf(m))&&o.splice(v,1)&&p>=v&&p--},_listeners:o},u})(),ir=function(){return!ha&&xn.wake()},ft={},kv=/^[\d.\-M][\d.\-,\s]/,Uv=/["']/g,Fv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),s=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[s]=isNaN(c)?c.replace(Uv,"").trim():+c,s=l.substr(o+1).trim();return t},Ov=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<n?e.indexOf(")",n+1):n)},Bv=function(e){var t=(e+"").split("("),n=ft[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Fv(t[1])]:Ov(e).split(",").map(Uf)):ft._CE&&kv.test(e)?ft._CE("",e):n},zv=function(e){return function(t){return 1-e(1-t)}},Ss=function(e,t){return e&&(zt(e)?e:ft[e]||Bv(e))||t},As=function(e,t,n,s){n===void 0&&(n=function(l){return 1-t(1-l)}),s===void 0&&(s=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:s},a;return fn(e,function(o){ft[o]=Rn[o]=r,ft[a=o.toLowerCase()]=n;for(var l in r)ft[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ft[o+"."+l]=r[l]}),r},Qf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},yh=function i(e,t,n){var s=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/Mh*(Math.asin(1/s)||0),o=function(h){return h===1?1:s*Math.pow(2,-10*h)*hv((h-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Qf(o);return r=Mh/r,l.config=function(c,h){return i(e,c,h)},l},xh=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},s=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Qf(n);return s.config=function(r){return i(e,r)},s};fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;As(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ft.Linear.easeNone=ft.none=ft.Linear.easeIn;As("Elastic",yh("in"),yh("out"),yh());(function(i,e){var t=1/e,n=2*t,s=2.5*t,r=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<s?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};As("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);As("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});As("Circ",function(i){return-(Cf(1-i*i)-1)});As("Sine",function(i){return i===1?1:-cv(i*ov)+1});As("Back",xh("in"),xh("out"),xh());ft.SteppedEase=ft.steps=Rn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,s=e+(t?0:1),r=t?1:0,a=1-Et;return function(o){return((s*fa(0,a,o)|0)+r)*n}}};oa.ease=ft["quad.out"];fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Fh+=i+","+i+"Params,"});var Hh=function(e,t){this.id=lv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Bh,this.set=t?t.getSetter:Go},ua=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,nr(this,+t.duration,1,1),this.data=t.data,It&&(this._ctx=It,It.data.push(this)),ha||xn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,nr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,s){if(ir(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ho(this,n),!r._dp||r.parent||Bf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ii(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Et||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),kf(this,n,s)),this},e.time=function(n,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Mf(this))%(this._dur+this._rDelay)||(n?this._dur:0),s):this._time},e.totalProgress=function(n,s){return arguments.length?this.totalTime(this.totalDuration()*n,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Mf(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,s){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,s):this._repeat?tr(this._tTime,r)+1:1},e.timeScale=function(n,s){if(!arguments.length)return this._rts===-Et?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?No(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Et?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||r>0&&r<o)&&this.totalTime(fa(-Math.abs(this._delay),o,r),s!==!1),Vo(this),xv(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{ir(),this._ts=this._rts;var s=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==Et,a;if(r)for(this._tTime-=Et,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=s+Et){r=!1;break}a=a._next}this.totalTime(s,r)}return this},e.startTime=function(n){if(arguments.length){this._start=Nt(n);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&ii(s,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(bn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var s=this.parent||this._dp;return s?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?No(s.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=gv);var s=Qt;return Qt=n,zh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Qt=s,this},e.globalTime=function(n){for(var s=this,r=arguments.length?n:s.rawTime();s;)r=s._start+r/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,wf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var s=this._time;return this._rDelay=n,wf(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,s){return this.totalTime(Fn(this,n),bn(s))},e.restart=function(n,s){return this.play().totalTime(n?-this._delay:0,bn(s)),this._dur||(this._zTime=-Et),this},e.play=function(n,s){return n!=null&&this.seek(n,s),this.reversed(!1).paused(!1)},e.reverse=function(n,s){return n!=null&&this.seek(n||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(n,s){return n!=null&&this.seek(n,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Et,this},e.isActive=function(){var n=this.parent||this._dp,s=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=s&&r<this.endTime(!0)-Et)},e.eventCallback=function(n,s,r){var a=this.vars;return arguments.length>1?(s?(a[n]=s,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=s)):delete a[n],this):a[n]},e.then=function(n){var s=this,r=s._prom;return new Promise(function(a){var o=zt(n)?n:Ff,l=function(){var h=s.then;s.then=null,r&&r(),zt(o)&&(o=o(s))&&(o.then||o===s)&&(s.then=h),a(o),s.then=h};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?l():s._prom=l})},e.kill=function(){na(this)},i})();Cn(ua.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Et,_prom:0,_ps:!1,_rts:1});var sn=(function(i){Rf(e,i);function e(n,s){var r;return n===void 0&&(n={}),r=i.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=bn(n.sortChildren),kt&&ii(n.parent||kt,Mi(r),s),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&zf(Mi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(s,r,a){return ra(0,arguments,this),this},t.from=function(s,r,a){return ra(1,arguments,this),this},t.fromTo=function(s,r,a,o){return ra(2,arguments,this),this},t.set=function(s,r,a){return r.duration=0,r.parent=this,sa(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Gt(s,r,Fn(this,a),1),this},t.call=function(s,r,a){return ii(this,Gt.delayedCall(0,s,r),a)},t.staggerTo=function(s,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Gt(s,a,Fn(this,l)),this},t.staggerFrom=function(s,r,a,o,l,c,h){return a.runBackwards=1,sa(a).immediateRender=bn(a.immediateRender),this.staggerTo(s,r,a,o,l,c,h)},t.staggerFromTo=function(s,r,a,o,l,c,h,u){return o.startAt=a,sa(o).immediateRender=bn(o.immediateRender),this.staggerTo(s,r,o,l,c,h,u)},t.render=function(s,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=s<=0?0:Nt(s),u=this._zTime<0!=s<0&&(this._initted||!c),d,p,f,g,m,v,x,E,y,M,w,_;if(this!==kt&&h>l&&s>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,s+=this._time-o),d=h,y=this._start,E=this._ts,v=!E,u&&(c||(o=this._zTime),(s||!r)&&(this._zTime=s)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(m*100+s,r,a);if(d=Nt(h%m),h===l?(g=this._repeat,d=c):(M=Nt(h/m),g=~~M,g&&g===M&&(d=c,g--),d>c&&(d=c)),M=tr(this._tTime,m),!o&&this._tTime&&M!==g&&this._tTime-M*m-this._dur<=0&&(M=g),w&&g&1&&(d=c-d,_=1),g!==M&&!this._lock){var b=w&&M&1,C=b===(w&&g&1);if(g<M&&(b=!b),o=b?0:h%c?c:h,this._lock=1,this.render(o||(_?0:Nt(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Tn(this,"onRepeat"),this.vars.repeatRefresh&&!_&&(this.invalidate()._lock=1,M=g),o&&o!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,C&&(this._lock=2,o=b?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!_&&this.invalidate()),this._lock=0,!this._ts&&!v)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=wv(this,Nt(o),Nt(d)),x&&(h-=d-(d=x._start))),this._tTime=h,this._time=d,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,o=0),!o&&h&&c&&!r&&!M&&(Tn(this,"onStart"),this._tTime!==h))return this;if(d>=o&&s>=0)for(p=this._first;p;){if(f=p._next,(p._act||d>=p._start)&&p._ts&&x!==p){if(p.parent!==this)return this.render(s,r,a);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,r,a),d!==this._time||!this._ts&&!v){x=0,f&&(h+=this._zTime=-Et);break}}p=f}else{p=this._last;for(var T=s<0?s:d;p;){if(f=p._prev,(p._act||T<=p._end)&&p._ts&&x!==p){if(p.parent!==this)return this.render(s,r,a);if(p.render(p._ts>0?(T-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(T-p._start)*p._ts,r,a||Qt&&zh(p)),d!==this._time||!this._ts&&!v){x=0,f&&(h+=this._zTime=T?-Et:Et);break}}p=f}}if(x&&!r&&(this.pause(),x.render(d>=o?0:-Et)._zTime=d>=o?1:-1,this._ts))return this._start=y,Vo(this),this.render(s,r,a);this._onUpdate&&!r&&Tn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((s||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&$i(this,1),!r&&!(s<0&&!o)&&(h||o||!l)&&(Tn(this,h===l&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,r){var a=this;if(Ei(r)||(r=Fn(this,r,s)),!(s instanceof ua)){if(rn(s))return s.forEach(function(o){return a.add(o,r)}),this;if(Xt(s))return this.addLabel(s,r);if(zt(s))s=Gt.delayedCall(0,s);else return this}return this!==s?ii(this,s,r):this},t.getChildren=function(s,r,a,o){s===void 0&&(s=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-On);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Gt?r&&l.push(c):(a&&l.push(c),s&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(s){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===s)return r[a]},t.remove=function(s){return Xt(s)?this.removeLabel(s):zt(s)?this.killTweensOf(s):(s.parent===this&&zo(this,s),s===this._recent&&(this._recent=this._last),bs(this))},t.totalTime=function(s,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Nt(xn.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),i.prototype.totalTime.call(this,s,r),this._forcing=0,this):this._tTime},t.addLabel=function(s,r){return this.labels[s]=Fn(this,r),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,r,a){var o=Gt.delayedCall(0,r||ca,a);return o.data="isPause",this._hasPause=1,ii(this,o,Fn(this,s))},t.removePause=function(s){var r=this._first;for(s=Fn(this,s);r;)r._start===s&&r.data==="isPause"&&$i(r),r=r._next},t.killTweensOf=function(s,r,a){for(var o=this.getTweensOf(s,a),l=o.length;l--;)Wi!==o[l]&&o[l].kill(s,r);return this},t.getTweensOf=function(s,r){for(var a=[],o=Bn(s),l=this._first,c=Ei(r),h;l;)l instanceof Gt?vv(l._targets,o)&&(c?(!Wi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(s,r){r=r||{};var a=this,o=Fn(a,s),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,p,f=Gt.to(a,Cn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Et,onStart:function(){if(a.pause(),!p){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());f._dur!==m&&nr(f,m,0,1).render(f._time,!0,!0),p=1}h&&h.apply(f,u||[])}},r));return d?f.render(0):f},t.tweenFromTo=function(s,r,a){return this.tweenTo(r,Cn({startAt:{time:Fn(this,s)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),Ef(this,Fn(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),Ef(this,Fn(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Et)},t.shiftChildren=function(s,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(s=Nt(s);o;)o._start>=a&&(o._start+=s,o._end+=s),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=s);return bs(this)},t.invalidate=function(s){var r=this._first;for(this._lock=0;r;)r.invalidate(s),r=r._next;return i.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),bs(this)},t.totalDuration=function(s){var r=0,a=this,o=a._last,l=On,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-s:s));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ii(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=Nt(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;nr(a,a===kt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(s){if(kt._ts&&(kf(kt,No(s,kt)),Nf=xn.frame),xn.frame>=bf){bf+=Sn.autoSleep||120;var r=kt._first;if((!r||!r._ts)&&Sn.autoSleep&&xn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||xn.sleep()}}},e})(ua);Cn(sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Vv=function(e,t,n,s,r,a,o){var l=new pn(this._pt,e,t,0,1,$h,null,r),c=0,h=0,u,d,p,f,g,m,v,x;for(l.b=n,l.e=s,n+="",s+="",(v=~s.indexOf("random("))&&(s=sr(s)),a&&(x=[n,s],a(x,e,t),n=x[0],s=x[1]),d=n.match(gh)||[];u=gh.exec(s);)f=u[0],g=s.substring(c,u.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),f!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:f.charAt(1)==="="?Es(m,f)-m:parseFloat(f)-m,m:p&&p<4?Math.round:0},c=gh.lastIndex);return l.c=c<s.length?s.substring(c,s.length):"",l.fp=o,(Nh.test(s)||v)&&(l.e=0),this._pt=l,l},Gh=function(e,t,n,s,r,a,o,l,c,h){zt(s)&&(s=s(r||0,e,a));var u=e[t],d=n!=="get"?n:zt(u)?c?e[t.indexOf("set")||!zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,p=zt(u)?c?qv:tp:qh,f;if(Xt(s)&&(~s.indexOf("random(")&&(s=sr(s)),s.charAt(1)==="="&&(f=Es(d,s)+(en(d)||0),(f||f===0)&&(s=f))),!h||d!==s||Ph)return!isNaN(d*s)&&s!==""?(f=new pn(this._pt,e,t,+d||0,s-(d||0),typeof u=="boolean"?Yv:np,0,p),c&&(f.fp=c),o&&f.modifier(o,this,e),this._pt=f):(!u&&!(t in e)&&Bo(t,s),Vv.call(this,e,t,d,s,p,l||Sn.stringFilter,c))},Hv=function(e,t,n,s,r){if(zt(e)&&(e=aa(e,r,t,n,s)),!si(e)||e.style&&e.nodeType||rn(e)||Pf(e))return Xt(e)?aa(e,r,t,n,s):e;var a={},o;for(o in e)a[o]=aa(e[o],r,t,n,s);return a},Wh=function(e,t,n,s,r,a){var o,l,c,h;if(yn[e]&&(o=new yn[e]).init(r,o.rawVars?t[e]:Hv(t[e],s,r,a,n),n,s,a)!==!1&&(n._pt=l=new pn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==Qs))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Wi,Ph,Xh=function i(e,t,n){var s=e.vars,r=s.ease,a=s.startAt,o=s.immediateRender,l=s.lazy,c=s.onUpdate,h=s.runBackwards,u=s.yoyoEase,d=s.keyframes,p=s.autoRevert,f=e._dur,g=e._startAt,m=e._targets,v=e.parent,x=v&&v.data==="nested"?v.vars.targets:m,E=e._overwrite==="auto"&&!Ih,y=e.timeline,M=s.easeReverse||u,w,_,b,C,T,P,N,R,L,F,G,B,K;if(y&&(!d||!r)&&(r="none"),e._ease=Ss(r,oa.ease),e._rEase=M&&(Ss(M)||e._ease),e._from=!y&&!!s.runBackwards,e._from&&(e.ratio=1),!y||d&&!s.stagger){if(R=m[0]?qi(m[0]).harness:0,B=R&&s[R.prop],w=Do(s,Uh),g&&(g._zTime<0&&g.progress(1),t<0&&h&&o&&!p?g.render(-1,!0):g.revert(h&&f?Ro:mv),g._lazy=0),a){if($i(e._startAt=Gt.set(m,Cn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!g&&bn(l),startAt:null,delay:0,onUpdate:c&&function(){return Tn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt||!o&&!p)&&e._startAt.revert(Ro),o&&f&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&f&&!g){if(t&&(o=!1),b=Cn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&bn(l),immediateRender:o,stagger:0,parent:v},w),B&&(b[R.prop]=B),$i(e._startAt=Gt.set(m,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt?e._startAt.revert(Ro):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,Et,Et);else if(!t)return}for(e._pt=e._ptCache=0,l=f&&bn(l)||l&&!f,_=0;_<m.length;_++){if(T=m[_],N=T._gsap||Oh(m)[_]._gsap,e._ptLookup[_]=F={},Eh[N.id]&&Xi.length&&Lo(),G=x===m?_:x.indexOf(T),R&&(L=new R).init(T,B||w,e,G,x)!==!1&&(e._pt=C=new pn(e._pt,T,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(V){F[V]=C}),L.priority&&(P=1)),!R||B)for(b in w)yn[b]&&(L=Wh(b,w,e,G,T,x))?L.priority&&(P=1):F[b]=C=Gh.call(e,T,b,"get",w[b],G,x,0,s.stringFilter);e._op&&e._op[_]&&e.kill(T,e._op[_]),E&&e._pt&&(Wi=e,kt.killTweensOf(T,F,e.globalTime(t)),K=!e.parent,Wi=0),e._pt&&l&&(Eh[N.id]=1)}P&&Zh(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!K,d&&t<=0&&y.render(On,!0,!0)},Gv=function(e,t,n,s,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,p;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(h=d[p][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Ph=1,e.vars[t]="+=0",Xh(e,o),Ph=0,l?la(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(p=c.length;p--;)u=c[p],h=u._pt||u,h.s=(s||s===0)&&!r?s:h.s+(s||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=Vt(n)+en(u.e)),u.b&&(u.b=h.s+en(u.b))},Wv=function(e,t){var n=e[0]?qi(e[0]).harness:0,s=n&&n.aliases,r,a,o,l;if(!s)return t;r=er({},t);for(a in s)if(a in r)for(l=s[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},Xv=function(e,t,n,s){var r=t.ease||s||"power1.inOut",a,o;if(rn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},aa=function(e,t,n,s,r){return zt(e)?e.call(t,n,s,r):Xt(e)&&~e.indexOf("random(")?sr(e):e},Uo=Fh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ep={};fn(Uo+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return ep[i]=1});Uo=Uo.split(",");var Gt=(function(i){Rf(e,i);function e(n,s,r,a){var o;typeof s=="number"&&(r.duration=s,s=r,r=null),o=i.call(this,a?s:sa(s))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,p=l.overwrite,f=l.keyframes,g=l.defaults,m=l.scrollTrigger,v=s.parent||kt,x=(rn(n)||Pf(n)?Ei(n[0]):"length"in s)?[n]:Bn(n),E,y,M,w,_,b,C,T;if(o._targets=x.length?Oh(x):la("GSAP target "+n+" not found. https://gsap.com",!Sn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,f||d||To(c)||To(h)){s=o.vars;var P=s.easeReverse||s.yoyoEase;if(E=o.timeline=new sn({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:x}),E.kill(),E.parent=E._dp=Mi(o),E._start=0,d||To(c)||To(h)){if(w=x.length,C=d&&Wf(d),si(d))for(_ in d)~Uo.indexOf(_)&&(T||(T={}),T[_]=d[_]);for(y=0;y<w;y++)M=Do(s,ep),M.stagger=0,P&&(M.easeReverse=P),T&&er(M,T),b=x[y],M.duration=+aa(c,Mi(o),y,b,x),M.delay=(+aa(h,Mi(o),y,b,x)||0)-o._delay,!d&&w===1&&M.delay&&(o._delay=h=M.delay,o._start+=h,M.delay=0),E.to(b,M,C?C(y,b,x):0),E._ease=ft.none;E.duration()?c=h=0:o.timeline=0}else if(f){sa(Cn(E.vars.defaults,{ease:"none"})),E._ease=Ss(f.ease||s.ease||"none");var N=0,R,L,F;if(rn(f))f.forEach(function(G){return E.to(x,G,">")}),E.duration();else{M={};for(_ in f)_==="ease"||_==="easeEach"||Xv(_,f[_],M,f.easeEach);for(_ in M)for(R=M[_].sort(function(G,B){return G.t-B.t}),N=0,y=0;y<R.length;y++)L=R[y],F={ease:L.e,duration:(L.t-(y?R[y-1].t:0))/100*c},F[_]=L.v,E.to(x,F,N),N+=F.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||o.duration(c=E.duration())}else o.timeline=0;return p===!0&&!Ih&&(Wi=Mi(o),kt.killTweensOf(x),Wi=0),ii(v,Mi(o),r),s.reversed&&o.reverse(),s.paused&&o.paused(!0),(u||!c&&!f&&o._start===Nt(v._time)&&bn(u)&&bv(Mi(o))&&v.data!=="nested")&&(o._tTime=-Et,o.render(Math.max(0,-h)||0)),m&&zf(Mi(o),m),o}var t=e.prototype;return t.render=function(s,r,a){var o=this._time,l=this._tDur,c=this._dur,h=s<0,u=s>l-Et&&!h?l:s<Et?0:s,d,p,f,g,m,v,x,E;if(!c)Mv(this,s,r,a);else if(u!==this._tTime||!s||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,E=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+s,r,a);if(d=Nt(u%g),u===l?(f=this._repeat,d=c):(m=Nt(u/g),f=~~m,f&&f===m?(d=c,f--):d>c&&(d=c)),v=this._yoyo&&f&1,v&&(d=c-d),m=tr(this._tTime,g),d===o&&!a&&this._initted&&f===m)return this._tTime=u,this;f!==m&&this.vars.repeatRefresh&&!v&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(Nt(g*f),!0).invalidate()._lock=0)}if(!this._initted){if(Vf(this,h?s:d,a,r,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&f!==m))return this;if(c!==this._dur)return this.render(s,r,a)}if(this._rEase){var y=d<o;if(y!==this._inv){var M=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=M?(y?-1:1)/M:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(d/c);if(this._from&&(this.ratio=x=1-x),this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&u&&!r&&!m&&(Tn(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(x,p.d),p=p._next;E&&E.render(s<0?s:E._dur*E._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=s),this._onUpdate&&!r&&(h&&Ah(this,s,r,a),Tn(this,"onUpdate")),this._repeat&&f!==m&&this.vars.onRepeat&&!r&&this.parent&&Tn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Ah(this,s,!0,!0),(s||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&$i(this,1),!r&&!(h&&!o)&&(u||o||v)&&(Tn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),i.prototype.invalidate.call(this,s)},t.resetTo=function(s,r,a,o,l){ha||xn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Xh(this,c),h=this._ease(c/this._dur),Gv(this,s,r,a,o,h,c,l)?this.resetTo(s,r,a,o,1):(Ho(this,0),this.parent||Of(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,r){if(r===void 0&&(r="all"),!s&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?na(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Qt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(s,r,Wi&&Wi.vars.overwrite!==!0)._first||na(this),this.parent&&a!==this.timeline.totalDuration()&&nr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=s?Bn(s):o,c=this._ptLookup,h=this._pt,u,d,p,f,g,m,v;if((!r||r==="all")&&yv(o,l))return r==="all"&&(this._pt=0),na(this);for(u=this._op=this._op||[],r!=="all"&&(Xt(r)&&(g={},fn(r,function(x){return g[x]=1}),r=g),r=Wv(o,r)),v=o.length;v--;)if(~l.indexOf(o[v])){d=c[v],r==="all"?(u[v]=r,f=d,p={}):(p=u[v]=u[v]||{},f=r);for(g in f)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&zo(this,m,"_pt"),delete d[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&h&&na(this),this},e.to=function(s,r){return new e(s,r,arguments[2])},e.from=function(s,r){return ra(1,arguments)},e.delayedCall=function(s,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(s,r,a){return ra(2,arguments)},e.set=function(s,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(s,r)},e.killTweensOf=function(s,r,a){return kt.killTweensOf(s,r,a)},e})(ua);Cn(Gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});fn("staggerTo,staggerFrom,staggerFromTo",function(i){Gt[i]=function(){var e=new sn,t=Th.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var qh=function(e,t,n){return e[t]=n},tp=function(e,t,n){return e[t](n)},qv=function(e,t,n,s){return e[t](s.fp,n)},$v=function(e,t,n){return e.setAttribute(t,n)},Go=function(e,t){return zt(e[t])?tp:Oo(e[t])&&e.setAttribute?$v:qh},np=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Yv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},$h=function(e,t){var n=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;n;)s=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+s,n=n._next;s+=t.c}t.set(t.t,t.p,s,t)},Yh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Zv=function(e,t,n,s){for(var r=this._pt,a;r;)a=r._next,r.p===s&&r.modifier(e,t,n),r=a},Jv=function(e){for(var t=this._pt,n,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?zo(this,t,"_pt"):t.dep||(n=1),t=s;return!n},Kv=function(e,t,n,s){s.mSet(e,t,s.m.call(s.tween,n,s.mt),s)},Zh=function(e){for(var t=e._pt,n,s,r,a;t;){for(n=t._next,s=r;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:a)?t._prev._next=t:r=t,(t._next=s)?s._prev=t:a=t,t=n}e._pt=r},pn=(function(){function i(t,n,s,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=s,this.r=o||np,this.d=l||this,this.set=c||qh,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,s,r){this.mSet=this.mSet||this.set,this.set=Kv,this.m=n,this.mt=r,this.tween=s},i})();fn(Fh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return Uh[i]=1});Rn.TweenMax=Rn.TweenLite=Gt;Rn.TimelineLite=Rn.TimelineMax=sn;kt=new sn({sortChildren:!1,defaults:oa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Sn.stringFilter=Vh;var Ms=[],Po={},jv=[],Tf=0,Qv=0,bh=function(e){return(Po[e]||jv).map(function(t){return t()})},da=function(){var e=Date.now(),t=[];e-Tf>2&&(bh("matchMediaInit"),Ms.forEach(function(n){var s=n.queries,r=n.conditions,a,o,l,c;for(o in s)a=ni.matchMedia(s[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),bh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(s){return n.add(null,s)})}),Tf=e,bh("matchMedia"))},ip=(function(){function i(t,n){this.selector=n&&Rh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Qv++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,s,r){zt(n)&&(r=s,s=n,n=zt);var a=this,o=function(){var c=It,h=a.selector,u;return c&&c!==a&&c.data.push(a),r&&(a.selector=Rh(r)),It=a,u=s.apply(a,arguments),zt(u)&&a._r.push(u),It=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===zt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var s=It;It=null,n(this),It=s},e.getTweens=function(){var n=[];return this.data.forEach(function(s){return s instanceof i?n.push.apply(n,s.getTweens()):s instanceof Gt&&!(s.parent&&s.parent.data==="nested")&&n.push(s)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,s){var r=this;if(n?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof sn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Gt)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),s){for(var a=Ms.length;a--;)Ms[a].id===this.id&&Ms.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(da):o.removeEventListener("change",da)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},i})(),e_=(function(){function i(t){this.contexts=[],this.scope=t,It&&It.data.push(this)}var e=i.prototype;return e.add=function(n,s,r){si(n)||(n={matches:n});var a=new ip(0,r||this.scope),o=a.conditions={},l,c,h;It&&!a.selector&&(a.selector=It.selector),this.contexts.push(a),s=a.add("onMatch",s),a.queries=n;for(c in n)c==="all"?h=1:(l=ni.matchMedia(n[c]),l&&(Ms.indexOf(a)<0&&Ms.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(da):l.addEventListener("change",da),(a._mqs||(a._mqs=[])).push(l)));return h&&s(a,function(u){return a.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(s){return s.kill(n,!0)})},i})(),Fo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(s){return Jf(s)})},timeline:function(e){return new sn(e)},getTweensOf:function(e,t){return kt.getTweensOf(e,t)},getProperty:function(e,t,n,s){Xt(e)&&(e=Bn(e)[0]);var r=qi(e||{}).get,a=n?Ff:Uf;return n==="native"&&(n=""),e&&(t?a((yn[t]&&yn[t].get||r)(e,t,n,s)):function(o,l,c){return a((yn[o]&&yn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Bn(e),e.length>1){var s=e.map(function(h){return an.quickSetter(h,t,n)}),r=s.length;return function(h){for(var u=r;u--;)s[u](h)}}e=e[0]||{};var a=yn[t],o=qi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var u=new a;Qs._pt=0,u.init(e,n?h+n:h,Qs,0,[e]),u.render(1,u),Qs._pt&&Yh(1,Qs)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var s,r=an.to(e,Cn((s={},s[t]="+=0.1",s.paused=!0,s.stagger=0,s),n||{})),a=function(l,c,h){return r.resetTo(t,l,c,h)};return a.tween=r,a},isTweening:function(e){return kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ss(e.ease,oa.ease)),Sf(oa,e||{})},config:function(e){return Sf(Sn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,s=e.plugins,r=e.defaults,a=e.extendTimeline;(s||"").split(",").forEach(function(o){return o&&!yn[o]&&!Rn[o]&&la(t+" effect requires "+o+" plugin.")}),vh[t]=function(o,l,c){return n(Bn(o),Cn(l||{},r),c)},a&&(sn.prototype[t]=function(o,l,c){return this.add(vh[t](o,si(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ft[e]=Ss(t)},parseEase:function(e,t){return arguments.length?Ss(e,t):ft},getById:function(e){return kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new sn(e),s,r;for(n.smoothChildTiming=bn(e.smoothChildTiming),kt.remove(n),n._dp=0,n._time=n._tTime=kt._time,s=kt._first;s;)r=s._next,(t||!(!s._dur&&s instanceof Gt&&s.vars.onComplete===s._targets[0]))&&ii(n,s,s._start-s._delay),s=r;return ii(kt,n,0),n},context:function(e,t){return e?new ip(e,t):It},matchMedia:function(e){return new e_(e)},matchMediaRefresh:function(){return Ms.forEach(function(e){var t=e.conditions,n,s;for(s in t)t[s]&&(t[s]=!1,n=1);n&&e.revert()})||da()},addEventListener:function(e,t){var n=Po[e]||(Po[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Po[e],s=n&&n.indexOf(t);s>=0&&n.splice(s,1)},utils:{wrap:Iv,wrapYoyo:Lv,distribute:Wf,random:qf,snap:Xf,normalize:Pv,getUnit:en,clamp:Av,splitColor:Kf,toArray:Bn,selector:Rh,mapRange:Yf,pipe:Rv,unitize:Cv,interpolate:Dv,shuffle:Gf},install:Lf,effects:vh,ticker:xn,updateRoot:sn.updateRoot,plugins:yn,globalTimeline:kt,core:{PropTween:pn,globals:Df,Tween:Gt,Timeline:sn,Animation:ua,getCache:qi,_removeLinkedListItem:zo,reverting:function(){return Qt},context:function(e){return e&&It&&(It.data.push(e),e._ctx=It),It},suppressOverwrites:function(e){return Ih=e}}};fn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Fo[i]=Gt[i]});xn.add(sn.updateRoot);Qs=Fo.to({},{duration:0});var t_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},n_=function(e,t){var n=e._targets,s,r,a;for(s in t)for(r=n.length;r--;)a=e._ptLookup[r][s],a&&(a=a.d)&&(a._pt&&(a=t_(a,s)),a&&a.modifier&&a.modifier(t[s],e,n[r],s))},Sh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(s,r,a){a._onInit=function(o){var l,c;if(Xt(r)&&(l={},fn(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}n_(o,r)}}}},an=Fo.registerPlugin({name:"attr",init:function(e,t,n,s,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],s,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Qt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Sh("roundProps",Ch),Sh("modifiers"),Sh("snap",Xf))||Fo;Gt.version=sn.version=an.version="3.15.1";If=1;Lh()&&ir();var i_=ft.Power0,s_=ft.Power1,r_=ft.Power2,a_=ft.Power3,o_=ft.Power4,l_=ft.Linear,c_=ft.Quad,h_=ft.Cubic,u_=ft.Quart,d_=ft.Quint,f_=ft.Strong,p_=ft.Elastic,m_=ft.Back,g_=ft.SteppedEase,v_=ft.Bounce,__=ft.Sine,y_=ft.Expo,x_=ft.Circ;var sp,Zi,ar,tu,Ps,b_,rp,nu,S_=function(){return typeof window<"u"},Ti={},Cs=180/Math.PI,or=Math.PI/180,rr=Math.atan2,ap=1e8,iu=/([A-Z])/g,M_=/(left|right|width|margin|padding|x)/i,w_=/[\s,\(]\S/,ri={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Kh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},E_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},A_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},T_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},R_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},pp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},mp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},C_=function(e,t,n){return e.style[t]=n},P_=function(e,t,n){return e.style.setProperty(t,n)},I_=function(e,t,n){return e._gsap[t]=n},L_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},D_=function(e,t,n,s,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},N_=function(e,t,n,s,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},Ut="transform",Mn=Ut+"Origin",k_=function i(e,t){var n=this,s=this.target,r=s.style,a=s._gsap;if(e in Ti&&r){if(this.tfm=this.tfm||{},e!=="transform")e=ri[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Ai(s,o)}):this.tfm[e]=a.x?a[e]:Ai(s,e),e===Mn&&(this.tfm.zOrigin=a.zOrigin);else return ri.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(Ut)>=0)return;a.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(Mn,t,"")),e=Ut}(r||t)&&this.props.push(e,t,r[e])},gp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},U_=function(){var e=this.props,t=this.target,n=t.style,s=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(iu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)s[a]=this.tfm[a];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=nu(),(!r||!r.isStart)&&!n[Ut]&&(gp(n),s.zOrigin&&n[Mn]&&(n[Mn]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},vp=function(e,t){var n={target:e,props:[],revert:U_,save:k_};return e._gsap||an.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(s){return n.save(s)}),n},_p,jh=function(e,t){var n=Zi.createElementNS?Zi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Zi.createElement(e);return n&&n.style?n:Zi.createElement(e)},Pn=function i(e,t,n){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(iu,"-$1").toLowerCase())||s.getPropertyValue(t)||!n&&i(e,lr(t)||t,1)||""},op="O,Moz,ms,Ms,Webkit".split(","),lr=function(e,t,n){var s=t||Ps,r=s.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(op[a]+e in r););return a<0?null:(a===3?"ms":a>=0?op[a]:"")+e},Qh=function(){S_()&&window.document&&(sp=window,Zi=sp.document,ar=Zi.documentElement,Ps=jh("div")||{style:{}},b_=jh("div"),Ut=lr(Ut),Mn=Ut+"Origin",Ps.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",_p=!!lr("perspective"),nu=an.core.reverting,tu=1)},lp=function(e){var t=e.ownerSVGElement,n=jh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),r;s.style.display="block",n.appendChild(s),ar.appendChild(n);try{r=s.getBBox()}catch{}return n.removeChild(s),ar.removeChild(n),r},cp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},yp=function(e){var t,n;try{t=e.getBBox()}catch{t=lp(e),n=1}return t&&(t.width||t.height)||n||(t=lp(e)),t&&!t.width&&!t.x&&!t.y?{x:+cp(e,["x","cx","x1"])||0,y:+cp(e,["y","cy","y1"])||0,width:0,height:0}:t},xp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&yp(e))},Ki=function(e,t){if(t){var n=e.style,s;t in Ti&&t!==Mn&&(t=Ut),n.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(s==="--"?t:t.replace(iu,"-$1").toLowerCase())):n.removeAttribute(t)}},Ji=function(e,t,n,s,r,a){var o=new pn(e._pt,t,n,0,1,a?mp:pp);return e._pt=o,o.b=s,o.e=r,e._props.push(n),o},hp={deg:1,rad:1,turn:1},F_={grid:1,flex:1},ji=function i(e,t,n,s){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Ps.style,l=M_.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=s==="px",p=s==="%",f,g,m,v;if(s===a||!r||hp[s]||hp[a])return r;if(a!=="px"&&!d&&(r=i(e,t,n,"px")),v=e.getCTM&&xp(e),(p||a==="%")&&(Ti[t]||~t.indexOf("adius")))return f=v?e.getBBox()[l?"width":"height"]:e[h],Vt(p?r/f*u:r/100*f);if(o[l?"width":"height"]=u+(d?a:s),g=s!=="rem"&&~t.indexOf("adius")||s==="em"&&e.appendChild&&!c?e:e.parentNode,v&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Zi||!g.appendChild)&&(g=Zi.body),m=g._gsap,m&&p&&m.width&&l&&m.time===xn.time&&!m.uncache)return Vt(r/m.width*u);if(p&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=u+s,f=e[h],x?e.style[t]=x:Ki(e,t)}else(p||a==="%")&&!F_[Pn(g,"display")]&&(o.position=Pn(e,"position")),g===e&&(o.position="static"),g.appendChild(Ps),f=Ps[h],g.removeChild(Ps),o.position="absolute";return l&&p&&(m=qi(g),m.time=xn.time,m.width=g[h]),Vt(d?f*r/u:f&&r?u/f*r:0)},Ai=function(e,t,n,s){var r;return tu||Qh(),t in ri&&t!=="transform"&&(t=ri[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ti[t]&&t!=="transform"?(r=ga(e,s),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Xo(Pn(e,Mn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||s||~(r+"").indexOf("calc("))&&(r=Wo[t]&&Wo[t](e,t,n)||Pn(e,t)||Bh(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ji(e,t,r,n)+n:r},O_=function(e,t,n,s){if(!n||n==="none"){var r=lr(t,e,1),a=r&&Pn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=Pn(e,"borderTopColor"))}var o=new pn(this._pt,e.style,t,0,1,$h),l=0,c=0,h,u,d,p,f,g,m,v,x,E,y,M;if(o.b=n,o.e=s,n+="",s+="",s.substring(0,6)==="var(--"&&(s=Pn(e,s.substring(4,s.indexOf(")")))),s==="auto"&&(g=e.style[t],e.style[t]=s,s=Pn(e,t)||s,g?e.style[t]=g:Ki(e,t)),h=[n,s],Vh(h),n=h[0],s=h[1],d=n.match(ws)||[],M=s.match(ws)||[],M.length){for(;u=ws.exec(s);)m=u[0],x=s.substring(l,u.index),f?f=(f+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(f=1),m!==(g=d[c++]||"")&&(p=parseFloat(g)||0,y=g.substr((p+"").length),m.charAt(1)==="="&&(m=Es(p,m)+y),v=parseFloat(m),E=m.substr((v+"").length),l=ws.lastIndex-E.length,E||(E=E||Sn.units[t]||y,l===s.length&&(s+=E,o.e+=E)),y!==E&&(p=ji(e,t,g,E)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:p,c:v-p,m:f&&f<4||t==="zIndex"?Math.round:0});o.c=l<s.length?s.substring(l,s.length):""}else o.r=t==="display"&&s==="none"?mp:pp;return Nh.test(s)&&(o.e=0),this._pt=o,o},up={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},B_=function(e){var t=e.split(" "),n=t[0],s=t[1]||"50%";return(n==="top"||n==="bottom"||s==="left"||s==="right")&&(e=n,n=s,s=e),t[0]=up[n]||n,t[1]=up[s]||s,t.join(" ")},z_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,s=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)s.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Ti[o]&&(l=1,o=o==="transformOrigin"?Mn:Ut),Ki(n,o);l&&(Ki(n,Ut),a&&(a.svg&&n.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",ga(n,1),a.uncache=1,gp(s)))}},Wo={clearProps:function(e,t,n,s,r){if(r.data!=="isFromStart"){var a=e._pt=new pn(e._pt,t,n,0,0,z_);return a.u=s,a.pr=-10,a.tween=r,e._props.push(n),1}}},ma=[1,0,0,1,0,0],bp={},Sp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},dp=function(e){var t=Pn(e,Ut);return Sp(t)?ma:t.substr(7).match(Dh).map(Vt)},su=function(e,t){var n=e._gsap||qi(e),s=e.style,r=dp(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ma:r):(r===ma&&!e.offsetParent&&e!==ar&&!n.svg&&(l=s.display,s.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,ar.appendChild(e)),r=dp(e),l?s.display=l:Ki(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ar.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},eu=function(e,t,n,s,r,a){var o=e._gsap,l=r||su(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,p=l[0],f=l[1],g=l[2],m=l[3],v=l[4],x=l[5],E=t.split(" "),y=parseFloat(E[0])||0,M=parseFloat(E[1])||0,w,_,b,C;n?l!==ma&&(_=p*m-f*g)&&(b=y*(m/_)+M*(-g/_)+(g*x-m*v)/_,C=y*(-f/_)+M*(p/_)-(p*x-f*v)/_,y=b,M=C):(w=yp(e),y=w.x+(~E[0].indexOf("%")?y/100*w.width:y),M=w.y+(~(E[1]||E[0]).indexOf("%")?M/100*w.height:M)),s||s!==!1&&o.smooth?(v=y-c,x=M-h,o.xOffset=u+(v*p+x*g)-v,o.yOffset=d+(v*f+x*m)-x):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=M,o.smooth=!!s,o.origin=t,o.originIsAbsolute=!!n,e.style[Mn]="0px 0px",a&&(Ji(a,o,"xOrigin",c,y),Ji(a,o,"yOrigin",h,M),Ji(a,o,"xOffset",u,o.xOffset),Ji(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},ga=function(e,t){var n=e._gsap||new Hh(e);if("x"in n&&!t&&!n.uncache)return n;var s=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Pn(e,Mn)||"0",h,u,d,p,f,g,m,v,x,E,y,M,w,_,b,C,T,P,N,R,L,F,G,B,K,V,X,Q,fe,Pe,Z,ae;return h=u=d=g=m=v=x=E=y=0,p=f=1,n.svg=!!(e.getCTM&&xp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(s[Ut]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ut]!=="none"?l[Ut]:"")),s.scale=s.rotate=s.translate="none"),_=su(e,n.svg),n.svg&&(n.uncache?(K=e.getBBox(),c=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),eu(e,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,_)),M=n.xOrigin||0,w=n.yOrigin||0,_!==ma&&(P=_[0],N=_[1],R=_[2],L=_[3],h=F=_[4],u=G=_[5],_.length===6?(p=Math.sqrt(P*P+N*N),f=Math.sqrt(L*L+R*R),g=P||N?rr(N,P)*Cs:0,x=R||L?rr(R,L)*Cs+g:0,x&&(f*=Math.abs(Math.cos(x*or))),n.svg&&(h-=M-(M*P+w*R),u-=w-(M*N+w*L))):(ae=_[6],Pe=_[7],X=_[8],Q=_[9],fe=_[10],Z=_[11],h=_[12],u=_[13],d=_[14],b=rr(ae,fe),m=b*Cs,b&&(C=Math.cos(-b),T=Math.sin(-b),B=F*C+X*T,K=G*C+Q*T,V=ae*C+fe*T,X=F*-T+X*C,Q=G*-T+Q*C,fe=ae*-T+fe*C,Z=Pe*-T+Z*C,F=B,G=K,ae=V),b=rr(-R,fe),v=b*Cs,b&&(C=Math.cos(-b),T=Math.sin(-b),B=P*C-X*T,K=N*C-Q*T,V=R*C-fe*T,Z=L*T+Z*C,P=B,N=K,R=V),b=rr(N,P),g=b*Cs,b&&(C=Math.cos(b),T=Math.sin(b),B=P*C+N*T,K=F*C+G*T,N=N*C-P*T,G=G*C-F*T,P=B,F=K),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,v=180-v),p=Vt(Math.sqrt(P*P+N*N+R*R)),f=Vt(Math.sqrt(G*G+ae*ae)),b=rr(F,G),x=Math.abs(b)>2e-4?b*Cs:0,y=Z?1/(Z<0?-Z:Z):0),n.svg&&(B=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Sp(Pn(e,Ut)),B&&e.setAttribute("transform",B))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(p*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(f*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Vt(p),n.scaleY=Vt(f),n.rotation=Vt(g)+o,n.rotationX=Vt(m)+o,n.rotationY=Vt(v)+o,n.skewX=x+o,n.skewY=E+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(s[Mn]=Xo(c)),n.xOffset=n.yOffset=0,n.force3D=Sn.force3D,n.renderTransform=n.svg?H_:_p?Mp:V_,n.uncache=0,n},Xo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Jh=function(e,t,n){var s=en(t);return Vt(parseFloat(t)+parseFloat(ji(e,"x",n+"px",s)))+s},V_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Mp(e,t)},Ts="0deg",pa="0px",Rs=") ",Mp=function(e,t){var n=t||this,s=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,p=n.skewY,f=n.scaleX,g=n.scaleY,m=n.transformPerspective,v=n.force3D,x=n.target,E=n.zOrigin,y="",M=v==="auto"&&e&&e!==1||v===!0;if(E&&(u!==Ts||h!==Ts)){var w=parseFloat(h)*or,_=Math.sin(w),b=Math.cos(w),C;w=parseFloat(u)*or,C=Math.cos(w),a=Jh(x,a,_*C*-E),o=Jh(x,o,-Math.sin(w)*-E),l=Jh(x,l,b*C*-E+E)}m!==pa&&(y+="perspective("+m+Rs),(s||r)&&(y+="translate("+s+"%, "+r+"%) "),(M||a!==pa||o!==pa||l!==pa)&&(y+=l!==pa||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Rs),c!==Ts&&(y+="rotate("+c+Rs),h!==Ts&&(y+="rotateY("+h+Rs),u!==Ts&&(y+="rotateX("+u+Rs),(d!==Ts||p!==Ts)&&(y+="skew("+d+", "+p+Rs),(f!==1||g!==1)&&(y+="scale("+f+", "+g+Rs),x.style[Ut]=y||"translate(0, 0)"},H_=function(e,t){var n=t||this,s=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,p=n.target,f=n.xOrigin,g=n.yOrigin,m=n.xOffset,v=n.yOffset,x=n.forceCSS,E=parseFloat(a),y=parseFloat(o),M,w,_,b,C;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=or,c*=or,M=Math.cos(l)*u,w=Math.sin(l)*u,_=Math.sin(l-c)*-d,b=Math.cos(l-c)*d,c&&(h*=or,C=Math.tan(c-h),C=Math.sqrt(1+C*C),_*=C,b*=C,h&&(C=Math.tan(h),C=Math.sqrt(1+C*C),M*=C,w*=C)),M=Vt(M),w=Vt(w),_=Vt(_),b=Vt(b)):(M=u,b=d,w=_=0),(E&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(E=ji(p,"x",a,"px"),y=ji(p,"y",o,"px")),(f||g||m||v)&&(E=Vt(E+f-(f*M+g*_)+m),y=Vt(y+g-(f*w+g*b)+v)),(s||r)&&(C=p.getBBox(),E=Vt(E+s/100*C.width),y=Vt(y+r/100*C.height)),C="matrix("+M+","+w+","+_+","+b+","+E+","+y+")",p.setAttribute("transform",C),x&&(p.style[Ut]=C)},G_=function(e,t,n,s,r){var a=360,o=Xt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Cs:1),c=l-s,h=s+c+"deg",u,d;return o&&(u=r.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*ap)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*ap)%a-~~(c/a)*a)),e._pt=d=new pn(e._pt,t,n,s,c,E_),d.e=h,d.u="deg",e._props.push(n),d},fp=function(e,t){for(var n in t)e[n]=t[n];return e},W_=function(e,t,n){var s=fp({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,d,p,f;s.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ut]=t,o=ga(n,1),Ki(n,Ut),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ut],a[Ut]=t,o=ga(n,1),a[Ut]=c);for(l in Ti)c=s[l],h=o[l],c!==h&&r.indexOf(l)<0&&(p=en(c),f=en(h),u=p!==f?ji(n,l,c,f):parseFloat(c),d=parseFloat(h),e._pt=new pn(e._pt,o,l,u,d-u,Kh),e._pt.u=f||0,e._props.push(l));fp(o,s)};fn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",s="Bottom",r="Left",a=(e<3?[t,n,s,r]:[t+r,t+n,s+n,s+r]).map(function(o){return e<2?i+o:"border"+o+i});Wo[e>1?"border"+i:i]=function(o,l,c,h,u){var d,p;if(arguments.length<4)return d=a.map(function(f){return Ai(o,f,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(h+"").split(" "),p={},a.forEach(function(f,g){return p[f]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,p,u)}});var ru={name:"css",register:Qh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,s,r){var a=this._props,o=e.style,l=n.vars.startAt,c,h,u,d,p,f,g,m,v,x,E,y,M,w,_,b,C;tu||Qh(),this.styles=this.styles||vp(e),b=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(h=t[g],!(yn[g]&&Wh(g,t,n,s,e,r)))){if(p=typeof h,f=Wo[g],p==="function"&&(h=h.call(n,s,e,r),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=sr(h)),f)f(this,e,g,h,n)&&(_=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",wi.lastIndex=0,wi.test(c)||(m=en(c),v=en(h),v?m!==v&&(c=ji(e,g,c,v)+v):m&&(h+=m)),this.add(o,"setProperty",c,h,s,r,0,0,g),a.push(g),b.push(g,0,o[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,s,e,r):l[g],Xt(c)&&~c.indexOf("random(")&&(c=sr(c)),en(c+"")||c==="auto"||(c+=Sn.units[g]||en(Ai(e,g))||""),(c+"").charAt(1)==="="&&(c=Ai(e,g))):c=Ai(e,g),d=parseFloat(c),x=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),u=parseFloat(h),g in ri&&(g==="autoAlpha"&&(d===1&&Ai(e,"visibility")==="hidden"&&u&&(d=0),b.push("visibility",0,o.visibility),Ji(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=ri[g],~g.indexOf(",")&&(g=g.split(",")[0]))),E=g in Ti,E){if(this.styles.save(g),C=h,p==="string"&&h.substring(0,6)==="var(--"){if(h=Pn(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var T=e.style.perspective;e.style.perspective=h,h=Pn(e,"perspective"),T?e.style.perspective=T:Ki(e,"perspective")}u=parseFloat(h)}if(y||(M=e._gsap,M.renderTransform&&!t.parseTransform||ga(e,t.parseTransform),w=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new pn(this._pt,o,Ut,0,1,M.renderTransform,M,0,-1),y.dep=1),g==="scale")this._pt=new pn(this._pt,M,"scaleY",M.scaleY,(x?Es(M.scaleY,x+u):u)-M.scaleY||0,Kh),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){b.push(Mn,0,o[Mn]),h=B_(h),M.svg?eu(e,h,0,w,0,this):(v=parseFloat(h.split(" ")[2])||0,v!==M.zOrigin&&Ji(this,M,"zOrigin",M.zOrigin,v),Ji(this,o,g,Xo(c),Xo(h)));continue}else if(g==="svgOrigin"){eu(e,h,1,w,0,this);continue}else if(g in bp){G_(this,M,g,d,x?Es(d,x+h):h);continue}else if(g==="smoothOrigin"){Ji(this,M,"smooth",M.smooth,h);continue}else if(g==="force3D"){M[g]=h;continue}else if(g==="transform"){W_(this,h,e);continue}}else g in o||(g=lr(g)||g);if(E||(u||u===0)&&(d||d===0)&&!w_.test(h)&&g in o)m=(c+"").substr((d+"").length),u||(u=0),v=en(h)||(g in Sn.units?Sn.units[g]:m),m!==v&&(d=ji(e,g,c,v)),this._pt=new pn(this._pt,E?M:o,g,d,(x?Es(d,x+u):u)-d,!E&&(v==="px"||g==="zIndex")&&t.autoRound!==!1?R_:Kh),this._pt.u=v||0,E&&C!==h?(this._pt.b=c,this._pt.e=C,this._pt.r=T_):m!==v&&v!=="%"&&(this._pt.b=c,this._pt.r=A_);else if(g in o)O_.call(this,e,g,c,x?x+h:h);else if(g in e)this.add(e,g,c||e[g],x?x+h:h,s,r);else if(g!=="parseTransform"){Bo(g,h);continue}E||(g in o?b.push(g,0,o[g]):typeof e[g]=="function"?b.push(g,2,e[g]()):b.push(g,1,c||e[g])),a.push(g)}}_&&Zh(this)},render:function(e,t){if(t.tween._time||!nu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ai,aliases:ri,getSetter:function(e,t,n){var s=ri[t];return s&&s.indexOf(",")<0&&(t=s),t in Ti&&t!==Mn&&(e._gsap.x||Ai(e,"x"))?n&&rp===n?t==="scale"?L_:I_:(rp=n||{})&&(t==="scale"?D_:N_):e.style&&!Oo(e.style[t])?C_:~t.indexOf("-")?P_:Go(e,t)},core:{_removeProperty:Ki,_getMatrix:su}};an.utils.checkPrefix=lr;an.core.getStyleSaver=vp;(function(i,e,t,n){var s=fn(i+","+e+","+t,function(r){Ti[r]=1});fn(e,function(r){Sn.units[r]="deg",bp[r]=1}),ri[s[13]]=i+","+e,fn(n,function(r){var a=r.split(":");ri[a[1]]=s[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Sn.units[i]="px"});an.registerPlugin(ru);var mn=an.registerPlugin(ru)||an,nE=mn.core.Tween;var em=0,zu=1,tm=2;var Os=1,nm=2,kr=3,us=0,_n=1,mi=2,Bs=0,Ur=1,Vu=2,Hu=3,Gu=4,im=5;var zs=100,sm=101,rm=102,am=103,om=104,lm=200,cm=201,hm=202,um=203,Wu=204,Xu=205,dm=206,fm=207,pm=208,mm=209,gm=210,vm=211,_m=212,ym=213,xm=214,gl=0,vl=1,_l=2,Mr=3,yl=4,xl=5,bl=6,Sl=7,qu=0,bm=1,Sm=2,gi=0,$u=1,Yu=2,Zu=3,Ju=4,Ku=5,ju=6,Qu=7;var ed=300,Vs=301,Fr=302,ec=303,tc=304,Ml=1e3,oi=1001,wl=1002,jt=1003,Mm=1004;var no=1005;var vn=1006,nc=1007;var Bi=1008;var En=1009,td=1010,nd=1011,Or=1012,ic=1013,Jn=1014,Kn=1015,jn=1016,sc=1017,rc=1018,Hs=1020,id=35902,sd=35899,rd=1021,ad=1022,Qn=1023,Ni=1026,zi=1027,od=1028,ac=1029,ds=1030,oc=1031;var lc=1033,io=33776,so=33777,ro=33778,ao=33779,cc=35840,hc=35841,uc=35842,dc=35843,fc=36196,pc=37492,mc=37496,gc=37488,vc=37489,oo=37490,_c=37491,yc=37808,xc=37809,bc=37810,Sc=37811,Mc=37812,wc=37813,Ec=37814,Ac=37815,Tc=37816,Rc=37817,Cc=37818,Pc=37819,Ic=37820,Lc=37821,Dc=36492,Nc=36494,kc=36495,Uc=36283,Fc=36284,lo=36285,Oc=36286;var Ta=2300,El=2301,pl=2302,Cu=2303,Pu=2400,Iu=2401,Lu=2402;var wm=3200;var Bc=0,Em=1,Vi="",Dn="srgb",Ra="srgb-linear",Ca="linear",yt="srgb";var ml=7680;var Am=519,Tm=512,Rm=513,Cm=514,ld=515,Pm=516,Im=517,cd=518,hd=519,Lm=35044;var ud="300 es",Vn=2e3,wr=2001;function X_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function q_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Pa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dm(){let i=Pa("canvas");return i.style.display="block",i}var wp={},Er=null;function dd(...i){let e="THREE."+i.shift();Er?Er("log",e,...i):console.log(e,...i)}function Nm(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xe(...i){i=Nm(i);let e="THREE."+i.shift();if(Er)Er("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Je(...i){i=Nm(i);let e="THREE."+i.shift();if(Er)Er("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Sa(...i){let e=i.join(" ");e in wp||(wp[e]=!0,Xe(...i))}function km(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Um={[gl]:gl,[_l]:bl,[yl]:yl,[Mr]:xl,[vl]:vl,[bl]:_l,[Sl]:Sl,[xl]:Mr},ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ep=1234567,Ma=Math.PI/180,Ar=180/Math.PI;function Gs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function fd(i,e){return(i%e+e)%e}function $_(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Y_(i,e,t){return i!==e?(t-i)/(e-i):0}function wa(i,e,t){return(1-t)*i+t*e}function Z_(i,e,t,n){return wa(i,e,1-Math.exp(-t*n))}function J_(i,e=1){return e-Math.abs(fd(i,e*2)-e)}function K_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function j_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Q_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ey(i,e){return i+Math.random()*(e-i)}function ty(i){return i*(.5-Math.random())}function ny(i){i!==void 0&&(Ep=i);let e=Ep+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function iy(i){return i*Ma}function sy(i){return i*Ar}function ry(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function ay(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function pd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function oy(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),f=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*f,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*f,o*c);break;case"ZYZ":i.set(l*f,l*p,o*h,o*c);break;default:Xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function md(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Fm(i,e){if(e.constructor===Float32Array)return i;let t=md(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Om(i,e){if(e.constructor===Float32Array)return i;let t=md(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var co={DEG2RAD:Ma,RAD2DEG:Ar,generateUUID:Gs,clamp:ut,euclideanModulo:fd,mapLinear:$_,inverseLerp:Y_,lerp:wa,damp:Z_,pingpong:J_,smoothstep:K_,smootherstep:j_,randInt:Q_,randFloat:ey,randFloatSpread:ty,seededRandom:ny,degToRad:iy,radToDeg:sy,isPowerOfTwo:ry,ceilPowerOfTwo:ay,floorPowerOfTwo:pd,setQuaternionFromProperEuler:oy,normalize:Om,denormalize:Fm},bd=class bd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bd.prototype.isVector2=!0;var we=bd,di=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],f=r[a+2],g=r[a+3];if(u!==g||l!==d||c!==p||h!==f){let m=l*d+c*p+h*f+u*g;m<0&&(d=-d,p=-p,f=-f,g=-g,m=-m);let v=1-o;if(m<.9995){let x=Math.acos(m),E=Math.sin(x);v=Math.sin(v*x)/E,o=Math.sin(o*x)/E,l=l*v+d*o,c=c*v+p*o,h=h*v+f*o,u=u*v+g*o}else{l=l*v+d*o,c=c*v+p*o,h=h*v+f*o,u=u*v+g*o;let x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],f=r[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),f=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Sd=class Sd{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ap.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ap.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return au.copy(this).projectOnVector(e),this.sub(au)}reflect(e){return this.sub(au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sd.prototype.isVector3=!0;var H=Sd,au=new H,Ap=new di,Md=class Md{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],g=s[0],m=s[3],v=s[6],x=s[1],E=s[4],y=s[7],M=s[2],w=s[5],_=s[8];return r[0]=a*g+o*x+l*M,r[3]=a*m+o*E+l*w,r[6]=a*v+o*y+l*_,r[1]=c*g+h*x+u*M,r[4]=c*m+h*E+u*w,r[7]=c*v+h*y+u*_,r[2]=d*g+p*x+f*M,r[5]=d*m+p*E+f*w,r[8]=d*v+p*y+f*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,f=t*u+n*d+s*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/f;return e[0]=u*g,e[1]=(s*c-h*n)*g,e[2]=(o*n-s*a)*g,e[3]=d*g,e[4]=(h*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Sa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ou.makeScale(e,t)),this}rotate(e){return Sa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ou.makeRotation(-e)),this}translate(e,t){return Sa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ou.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Md.prototype.isMatrix3=!0;var tt=Md,ou=new tt,Tp=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rp=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ly(){let i={enabled:!0,workingColorSpace:Ra,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===yt&&(s.r=Di(s.r),s.g=Di(s.g),s.b=Di(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===yt&&(s.r=Sr(s.r),s.g=Sr(s.g),s.b=Sr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vi?Ca:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ra]:{primaries:e,whitePoint:n,transfer:Ca,toXYZ:Tp,fromXYZ:Rp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:Tp,fromXYZ:Rp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),i}var dt=ly();function Di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var cr,Al=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{cr===void 0&&(cr=Pa("canvas")),cr.width=e.width,cr.height=e.height;let s=cr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=cr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Pa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Di(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Di(t[n]/255)*255):t[n]=Di(t[n]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cy=0,Tr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=Gs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(lu(s[a].image)):r.push(lu(s[a]))}else r=lu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function lu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Al.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}var hy=0,cu=new H,wn=class i extends ui{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=oi,s=oi,r=vn,a=Bi,o=Qn,l=En,c=i.DEFAULT_ANISOTROPY,h=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=Gs(),this.name="",this.source=new Tr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(cu).x}get height(){return this.source.getSize(cu).y}get depth(){return this.source.getSize(cu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ml:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case wl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ml:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case wl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=ed;wn.DEFAULT_ANISOTROPY=1;var wd=class wd{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],g=l[2],m=l[6],v=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,y=(p+1)/2,M=(v+1)/2,w=(h+d)/4,_=(u+g)/4,b=(f+m)/4;return E>y&&E>M?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=_/n):y>M?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=b/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=_/r,s=b/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-f)*(m-f)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-f)/x,this.y=(u-g)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+v-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wd.prototype.isVector4=!0;var Lt=wd,Tl=class extends ui{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new wn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Tr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nn=class extends Tl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ia=class extends wn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Rl=class extends wn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ql=class Ql{constructor(e,t,n,s,r,a,o,l,c,h,u,d,p,f,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,p,f,g,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,p,f,g,m){let v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=s,v[1]=r,v[5]=a,v[9]=o,v[13]=l,v[2]=c,v[6]=h,v[10]=u,v[14]=d,v[3]=p,v[7]=f,v[11]=g,v[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ql().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/hr.setFromMatrixColumn(e,0).length(),r=1/hr.setFromMatrixColumn(e,1).length(),a=1/hr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,g=c*u;t[0]=d+g*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,g=c*u;t[0]=d-g*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,g=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,f=o*l,g=o*c;t[0]=l*h,t[4]=g-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-g*u}else if(e.order==="XZY"){let d=a*l,p=a*c,f=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uy,e,dy)}lookAt(e,t,n){let s=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),Qi.crossVectors(n,In),Qi.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Qi.crossVectors(n,In)),Qi.normalize(),qo.crossVectors(In,Qi),s[0]=Qi.x,s[4]=qo.x,s[8]=In.x,s[1]=Qi.y,s[5]=qo.y,s[9]=In.y,s[2]=Qi.z,s[6]=qo.z,s[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],g=n[6],m=n[10],v=n[14],x=n[3],E=n[7],y=n[11],M=n[15],w=s[0],_=s[4],b=s[8],C=s[12],T=s[1],P=s[5],N=s[9],R=s[13],L=s[2],F=s[6],G=s[10],B=s[14],K=s[3],V=s[7],X=s[11],Q=s[15];return r[0]=a*w+o*T+l*L+c*K,r[4]=a*_+o*P+l*F+c*V,r[8]=a*b+o*N+l*G+c*X,r[12]=a*C+o*R+l*B+c*Q,r[1]=h*w+u*T+d*L+p*K,r[5]=h*_+u*P+d*F+p*V,r[9]=h*b+u*N+d*G+p*X,r[13]=h*C+u*R+d*B+p*Q,r[2]=f*w+g*T+m*L+v*K,r[6]=f*_+g*P+m*F+v*V,r[10]=f*b+g*N+m*G+v*X,r[14]=f*C+g*R+m*B+v*Q,r[3]=x*w+E*T+y*L+M*K,r[7]=x*_+E*P+y*F+M*V,r[11]=x*b+E*N+y*G+M*X,r[15]=x*C+E*R+y*B+M*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],f=e[3],g=e[7],m=e[11],v=e[15],x=l*p-c*d,E=o*p-c*u,y=o*d-l*u,M=a*p-c*h,w=a*d-l*h,_=a*u-o*h;return t*(g*x-m*E+v*y)-n*(f*x-m*M+v*w)+s*(f*E-g*M+v*_)-r*(f*y-g*w+m*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],g=e[13],m=e[14],v=e[15],x=t*o-n*a,E=t*l-s*a,y=t*c-r*a,M=n*l-s*o,w=n*c-r*o,_=s*c-r*l,b=h*g-u*f,C=h*m-d*f,T=h*v-p*f,P=u*m-d*g,N=u*v-p*g,R=d*v-p*m,L=x*R-E*N+y*P+M*T-w*C+_*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/L;return e[0]=(o*R-l*N+c*P)*F,e[1]=(s*N-n*R-r*P)*F,e[2]=(g*_-m*w+v*M)*F,e[3]=(d*w-u*_-p*M)*F,e[4]=(l*T-a*R-c*C)*F,e[5]=(t*R-s*T+r*C)*F,e[6]=(m*y-f*_-v*E)*F,e[7]=(h*_-d*y+p*E)*F,e[8]=(a*N-o*T+c*b)*F,e[9]=(n*T-t*N-r*b)*F,e[10]=(f*w-g*y+v*x)*F,e[11]=(u*y-h*w-p*x)*F,e[12]=(o*C-a*P-l*b)*F,e[13]=(t*P-n*C+s*b)*F,e[14]=(g*E-f*M-m*x)*F,e[15]=(h*M-u*E+d*x)*F,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,f=r*u,g=a*h,m=a*u,v=o*u,x=l*c,E=l*h,y=l*u,M=n.x,w=n.y,_=n.z;return s[0]=(1-(g+v))*M,s[1]=(p+y)*M,s[2]=(f-E)*M,s[3]=0,s[4]=(p-y)*w,s[5]=(1-(d+v))*w,s[6]=(m+x)*w,s[7]=0,s[8]=(f+E)*_,s[9]=(m-x)*_,s[10]=(1-(d+g))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=hr.set(s[0],s[1],s[2]).length(),o=hr.set(s[4],s[5],s[6]).length(),l=hr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),qn.copy(this);let c=1/a,h=1/o,u=1/l;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=u,qn.elements[9]*=u,qn.elements[10]*=u,t.setFromRotationMatrix(qn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Vn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),f,g;if(l)f=r/(a-r),g=a*r/(a-r);else if(o===Vn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===wr)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Vn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),f,g;if(l)f=1/(a-r),g=a/(a-r);else if(o===Vn)f=-2/(a-r),g=-(a+r)/(a-r);else if(o===wr)f=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ql.prototype.isMatrix4=!0;var Ct=Ql,hr=new H,qn=new Ct,uy=new H(0,0,0),dy=new H(1,1,1),Qi=new H,qo=new H,In=new H,Cp=new Ct,Pp=new di,ki=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pp.setFromEuler(this),this.setFromQuaternion(Pp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ki.DEFAULT_ORDER="XYZ";var La=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},fy=0,Ip=new H,ur=new di,Ri=new Ct,$o=new H,va=new H,py=new H,my=new di,Lp=new H(1,0,0),Dp=new H(0,1,0),Np=new H(0,0,1),kp={type:"added"},gy={type:"removed"},dr={type:"childadded",child:null},hu={type:"childremoved",child:null},cn=class i extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=Gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new H,t=new ki,n=new di,s=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new tt}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new La,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis(Lp,e)}rotateY(e){return this.rotateOnAxis(Dp,e)}rotateZ(e){return this.rotateOnAxis(Np,e)}translateOnAxis(e,t){return Ip.copy(e).applyQuaternion(this.quaternion),this.position.add(Ip.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lp,e)}translateY(e){return this.translateOnAxis(Dp,e)}translateZ(e){return this.translateOnAxis(Np,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$o.copy(e):$o.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(va,$o,this.up):Ri.lookAt($o,va,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),ur.setFromRotationMatrix(Ri),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kp),dr.child=e,this.dispatchEvent(dr),dr.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gy),hu.child=e,this.dispatchEvent(hu),hu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kp),dr.child=e,this.dispatchEvent(dr),dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,e,py),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,my,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};cn.DEFAULT_UP=new H(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var li=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},vy={type:"move"},Rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),v=this._getHandJoint(c,g);m!==null&&(v.matrix.fromArray(m.transform.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=m.radius),v.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vy)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new li;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Bm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Yo={h:0,s:0,l:0};function uu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ot=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=dt.workingColorSpace){if(e=fd(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=uu(a,r,e+1/3),this.g=uu(a,r,e),this.b=uu(a,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=Dn){function n(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dn){let n=Bm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return dt.workingToColorSpace(ln.copy(this),e),Math.round(ut(ln.r*255,0,255))*65536+Math.round(ut(ln.g*255,0,255))*256+Math.round(ut(ln.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(ln.copy(this),t);let n=ln.r,s=ln.g,r=ln.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Dn){dt.workingToColorSpace(ln.copy(this),e);let t=ln.r,n=ln.g,s=ln.b;return e!==Dn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(es),this.setHSL(es.h+e,es.s+t,es.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(es),e.getHSL(Yo);let n=wa(es.h,Yo.h,t),s=wa(es.s,Yo.s,t),r=wa(es.l,Yo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new ot;ot.NAMES=Bm;var Da=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},$n=new H,Ci=new H,du=new H,Pi=new H,fr=new H,pr=new H,Up=new H,fu=new H,pu=new H,mu=new H,gu=new Lt,vu=new Lt,_u=new Lt,ss=class i{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$n.subVectors(e,t),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$n.subVectors(s,t),Ci.subVectors(n,t),du.subVectors(e,t);let a=$n.dot($n),o=$n.dot(Ci),l=$n.dot(du),c=Ci.dot(Ci),h=Ci.dot(du),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return r.set(1-p-f,f,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(a,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return gu.setScalar(0),vu.setScalar(0),_u.setScalar(0),gu.fromBufferAttribute(e,t),vu.fromBufferAttribute(e,n),_u.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(gu,r.x),a.addScaledVector(vu,r.y),a.addScaledVector(_u,r.z),a}static isFrontFacing(e,t,n,s){return $n.subVectors(n,t),Ci.subVectors(e,t),$n.cross(Ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),$n.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;fr.subVectors(s,n),pr.subVectors(r,n),fu.subVectors(e,n);let l=fr.dot(fu),c=pr.dot(fu);if(l<=0&&c<=0)return t.copy(n);pu.subVectors(e,s);let h=fr.dot(pu),u=pr.dot(pu);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(fr,a);mu.subVectors(e,r);let p=fr.dot(mu),f=pr.dot(mu);if(f>=0&&p<=f)return t.copy(r);let g=p*c-l*f;if(g<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(pr,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return Up.subVectors(r,s),o=(u-h)/(u-h+(p-f)),t.copy(s).addScaledVector(Up,o);let v=1/(m+g+d);return a=g*v,o=d*v,t.copy(n).addScaledVector(fr,a).addScaledVector(pr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},rs=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(r,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zo.copy(n.boundingBox)),Zo.applyMatrix4(e.matrixWorld),this.union(Zo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_a),Jo.subVectors(this.max,_a),mr.subVectors(e.a,_a),gr.subVectors(e.b,_a),vr.subVectors(e.c,_a),ts.subVectors(gr,mr),ns.subVectors(vr,gr),Is.subVectors(mr,vr);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-Is.z,Is.y,ts.z,0,-ts.x,ns.z,0,-ns.x,Is.z,0,-Is.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-Is.y,Is.x,0];return!yu(t,mr,gr,vr,Jo)||(t=[1,0,0,0,1,0,0,0,1],!yu(t,mr,gr,vr,Jo))?!1:(Ko.crossVectors(ts,ns),t=[Ko.x,Ko.y,Ko.z],yu(t,mr,gr,vr,Jo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ii=[new H,new H,new H,new H,new H,new H,new H,new H],Yn=new H,Zo=new rs,mr=new H,gr=new H,vr=new H,ts=new H,ns=new H,Is=new H,_a=new H,Jo=new H,Ko=new H,Ls=new H;function yu(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ls.fromArray(i,r);let o=s.x*Math.abs(Ls.x)+s.y*Math.abs(Ls.y)+s.z*Math.abs(Ls.z),l=e.dot(Ls),c=t.dot(Ls),h=n.dot(Ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Wt=new H,jo=new we,_y=0,hi=class extends ui{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_y++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lm,this.updateRanges=[],this.gpuType=Kn,this.version=0,this._normalizationScale=e!==void 0?md(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jo.fromBufferAttribute(this,t),jo.applyMatrix3(e),this.setXY(t,jo.x,jo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Fm(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Om(e,this.array)}};var Na=class extends hi{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ka=class extends hi{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var tn=class extends hi{constructor(e,t,n){super(new Float32Array(e),t,n)}},yy=new rs,ya=new H,xu=new H,Cr=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):yy.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ya.subVectors(e,this.center);let t=ya.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ya,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ya.copy(e.center).add(xu)),this.expandByPoint(ya.copy(e.center).sub(xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xy=0,zn=new Ct,bu=new cn,_r=new H,Ln=new rs,xa=new rs,Kt=new H,fi=class i extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=Gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(X_(e)?ka:Na)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return bu.lookAt(e),bu.updateMatrix(),this.applyMatrix4(bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tn(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];xa.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(Ln.min,xa.min),Ln.expandByPoint(Kt),Kt.addVectors(Ln.max,xa.max),Ln.expandByPoint(Kt)):(Ln.expandByPoint(xa.min),Ln.expandByPoint(xa.max))}Ln.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Kt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Kt.fromBufferAttribute(o,c),l&&(_r.fromBufferAttribute(e,c),Kt.add(_r)),s=Math.max(s,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new hi(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let C=0;C<n.count;C++)o[C]=new H,l[C]=new H;let h=new H,u=new H,d=new H,p=new we,f=new we,g=new we,m=new H,v=new H;function x(C,T,P){c[C]=c[T]=c[P]=1,h.fromBufferAttribute(n,C),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,P),p.fromBufferAttribute(r,C),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),u.sub(h),d.sub(h),f.sub(p),g.sub(p);let N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(m.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(N),v.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(N),o[C].add(m),o[T].add(m),o[P].add(m),l[C].add(v),l[T].add(v),l[P].add(v))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let C=0,T=E.length;C<T;++C){let P=E[C],N=P.start,R=P.count;for(let L=N,F=N+R;L<F;L+=3)x(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let y=new H,M=new H,w=new H,_=new H;function b(C){w.fromBufferAttribute(s,C),_.copy(w);let T=o[C];y.copy(T),y.sub(w.multiplyScalar(w.dot(T))).normalize(),M.crossVectors(_,T);let N=M.dot(l[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,N)}for(let C=0,T=n.count;C<T;++C)c[C]&&b(C);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new hi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new H,r=new H,a=new H,o=new H,l=new H,c=new H,h=new H,u=new H;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*h;for(let v=0;v<h;v++)d[f++]=c[p++]}return new hi(d,h,u)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Su=new H,by=new H,Sy=new tt,Zn=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Su.subVectors(n,t).cross(by.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Su),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Sy.getNormalMatrix(e),s=this.coplanarPoint(Su).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},My=0,Ui=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=Gs(),this.name="",this.type="Material",this.blending=Ur,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wu,this.blendDst=Xu,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ml,this.stencilZFail=ml,this.stencilZPass=ml,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Zn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new we().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new we().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Li=new H,Mu=new H,Qo=new H,el=new H,Cl=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Mu.copy(e).add(t).multiplyScalar(.5),Qo.copy(t).sub(e).normalize(),el.copy(this.origin).sub(Mu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Qo),o=el.dot(this.direction),l=-el.dot(Qo),c=el.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=r*h,u>=0)if(d>=-f)if(d<=f){let g=1/h;u*=g,d*=g,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Mu).addScaledVector(Qo,d),p}intersectSphere(e,t){if(e.radius<0)return null;Li.subVectors(e.center,this.origin);let n=Li.dot(this.direction),s=Li.dot(Li)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,p=e.z-a.z,f=t.x-a.x,g=t.y-a.y,m=t.z-a.z,v=n.x-a.x,x=n.y-a.y,E=n.z-a.z,y=Math.abs(l),M=Math.abs(c),w=Math.abs(h),_,b,C,T,P,N,R,L,F,G,B,K;if(y>=M&&y>=w?(C=l,N=u,F=f,K=v,l>=0?(_=c,b=h,T=d,P=p,R=g,L=m,G=x,B=E):(_=h,b=c,T=p,P=d,R=m,L=g,G=E,B=x)):M>=w?(C=c,N=d,F=g,K=x,c>=0?(_=h,b=l,T=p,P=u,R=m,L=f,G=E,B=v):(_=l,b=h,T=u,P=p,R=f,L=m,G=v,B=E)):(C=h,N=p,F=m,K=E,h>=0?(_=l,b=c,T=u,P=d,R=f,L=g,G=v,B=x):(_=c,b=l,T=d,P=u,R=g,L=f,G=x,B=v)),C===0)return null;let V=_/C,X=b/C,Q=1/C,fe=T-V*N,Pe=P-X*N,Z=R-V*F,ae=L-X*F,Ie=G-V*K,Ae=B-X*K,_e=Ie*ae-Ae*Z,Fe=fe*Ae-Pe*Ie,pt=Z*Pe-ae*fe;if(s){if(_e<0||Fe<0||pt<0)return null}else if((_e<0||Fe<0||pt<0)&&(_e>0||Fe>0||pt>0))return null;let Oe=_e+Fe+pt;if(Oe===0)return null;let $e=Q*(_e*N+Fe*F+pt*K);return(Oe>0?$e<0:$e>0)?null:this.at($e/Oe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},as=class extends Ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Fp=new Ct,Ds=new Cl,tl=new Cr,Op=new H,nl=new H,il=new H,sl=new H,wu=new H,rl=new H,Bp=new H,al=new H,hn=class extends cn{constructor(e=new fi,t=new as){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){rl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(wu.fromBufferAttribute(u,e),a?rl.addScaledVector(wu,h):rl.addScaledVector(wu.sub(t),h))}t.add(rl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tl.copy(n.boundingSphere),tl.applyMatrix4(r),Ds.copy(e.ray).recast(e.near),!(tl.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(tl,Op)===null||Ds.origin.distanceToSquared(Op)>(e.far-e.near)**2))&&(Fp.copy(r).invert(),Ds.copy(e.ray).applyMatrix4(Fp),!(n.boundingBox!==null&&Ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,g=d.length;f<g;f++){let m=d[f],v=a[m.materialIndex],x=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,M=E;y<M;y+=3){let w=o.getX(y),_=o.getX(y+1),b=o.getX(y+2);s=ol(this,v,e,n,c,h,u,w,_,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=f,v=g;m<v;m+=3){let x=o.getX(m),E=o.getX(m+1),y=o.getX(m+2);s=ol(this,a,e,n,c,h,u,x,E,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let f=0,g=d.length;f<g;f++){let m=d[f],v=a[m.materialIndex],x=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,M=E;y<M;y+=3){let w=y,_=y+1,b=y+2;s=ol(this,v,e,n,c,h,u,w,_,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=f,v=g;m<v;m+=3){let x=m,E=m+1,y=m+2;s=ol(this,a,e,n,c,h,u,x,E,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function wy(i,e,t,n,s,r,a,o){let l;if(e.side===_n?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===us,o),l===null)return null;al.copy(o),al.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(al);return c<t.near||c>t.far?null:{distance:c,point:al.clone(),object:i}}function ol(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,nl),i.getVertexPosition(l,il),i.getVertexPosition(c,sl);let h=wy(i,e,t,n,nl,il,sl,Bp);if(h){let u=new H;ss.getBarycoord(Bp,nl,il,sl,u),s&&(h.uv=ss.getInterpolatedAttribute(s,o,l,c,u,new we)),r&&(h.uv1=ss.getInterpolatedAttribute(r,o,l,c,u,new we)),a&&(h.normal=ss.getInterpolatedAttribute(a,o,l,c,u,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new H,materialIndex:0};ss.getNormal(nl,il,sl,d.normal),h.face=d,h.barycoord=u}return h}var Pl=class extends wn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=jt,h=jt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ns=new Cr,Ey=new we(.5,.5),ll=new H,os=class{constructor(e=new Zn,t=new Zn,n=new Zn,s=new Zn,r=new Zn,a=new Zn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],f=r[8],g=r[9],m=r[10],v=r[11],x=r[12],E=r[13],y=r[14],M=r[15];if(s[0].setComponents(c-a,p-h,v-f,M-x).normalize(),s[1].setComponents(c+a,p+h,v+f,M+x).normalize(),s[2].setComponents(c+o,p+u,v+g,M+E).normalize(),s[3].setComponents(c-o,p-u,v-g,M-E).normalize(),n)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,p-d,v-m,M-y).normalize();else if(s[4].setComponents(c-l,p-d,v-m,M-y).normalize(),t===Vn)s[5].setComponents(c+l,p+d,v+m,M+y).normalize();else if(t===wr)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){Ns.center.set(0,0,0);let t=Ey.distanceTo(e.center);return Ns.radius=.7071067811865476+t,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ll.x=s.normal.x>0?e.max.x:e.min.x,ll.y=s.normal.y>0?e.max.y:e.min.y,ll.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ll)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},zp=new Ct,Il=class i{constructor(){this.coordinateSystem=Vn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];zp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new os),n[s].setFromProjectionMatrix(zp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new os),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Ua=class extends wn{constructor(e=[],t=Vs,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Fi=class extends wn{constructor(e,t,n=Jn,s,r,a,o=jt,l=jt,c,h=Ni,u=1){if(h!==Ni&&h!==zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Fa=class extends Fi{constructor(e,t=Jn,n=Vs,s,r,a=jt,o=jt,l,c=Ni){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Oa=class extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Pr=class i extends fi{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;f("z","y","x",-1,-1,n,t,e,a,r,0),f("z","y","x",1,-1,n,t,-e,a,r,1),f("x","z","y",1,1,e,n,t,s,a,2),f("x","z","y",1,-1,e,n,-t,s,a,3),f("x","y","z",1,-1,e,t,n,s,r,4),f("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(h,3)),this.setAttribute("uv",new tn(u,2));function f(g,m,v,x,E,y,M,w,_,b,C){let T=y/_,P=M/b,N=y/2,R=M/2,L=w/2,F=_+1,G=b+1,B=0,K=0,V=new H;for(let X=0;X<G;X++){let Q=X*P-R;for(let fe=0;fe<F;fe++){let Pe=fe*T-N;V[g]=Pe*x,V[m]=Q*E,V[v]=L,c.push(V.x,V.y,V.z),V[g]=0,V[m]=0,V[v]=w>0?1:-1,h.push(V.x,V.y,V.z),u.push(fe/_),u.push(1-X/b),B+=1}}for(let X=0;X<b;X++)for(let Q=0;Q<_;Q++){let fe=d+Q+F*X,Pe=d+Q+F*(X+1),Z=d+(Q+1)+F*(X+1),ae=d+(Q+1)+F*X;l.push(fe,Pe,ae),l.push(Pe,Z,ae),K+=6}o.addGroup(p,K,C),p+=K,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new we:new H);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new H,s=[],r=[],a=[],o=new H,l=new Ct;for(let p=0;p<=e;p++){let f=p/e;s[p]=this.getTangentAt(f,new H)}r[0]=new H,a[0]=new H;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(ut(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(ut(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let f=1;f<=e;f++)r[f].applyMatrix4(l.makeRotationAxis(s[f],p*f)),a[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Ir=class extends kn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new we){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ll=class extends Ir{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function gd(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Vp=new H,Hp=new H,Eu=new gd,Au=new gd,Tu=new gd,Dl=class extends kn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new H){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Hp.subVectors(s[0],s[1]).add(s[0]),c=Hp);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Vp.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Vp),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(c.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);g<1e-4&&(g=1),f<1e-4&&(f=g),m<1e-4&&(m=g),Eu.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,f,g,m),Au.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,f,g,m),Tu.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,f,g,m)}else this.curveType==="catmullrom"&&(Eu.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Au.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Tu.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Eu.calc(l),Au.calc(l),Tu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Gp(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Ay(i,e){let t=1-i;return t*t*e}function Ty(i,e){return 2*(1-i)*i*e}function Ry(i,e){return i*i*e}function Ea(i,e,t,n){return Ay(i,e)+Ty(i,t)+Ry(i,n)}function Cy(i,e){let t=1-i;return t*t*t*e}function Py(i,e){let t=1-i;return 3*t*t*i*e}function Iy(i,e){return 3*(1-i)*i*i*e}function Ly(i,e){return i*i*i*e}function Aa(i,e,t,n,s){return Cy(i,e)+Py(i,t)+Iy(i,n)+Ly(i,s)}var Ba=class extends kn{constructor(e=new we,t=new we,n=new we,s=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new we){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Aa(e,s.x,r.x,a.x,o.x),Aa(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nl=class extends kn{constructor(e=new H,t=new H,n=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new H){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Aa(e,s.x,r.x,a.x,o.x),Aa(e,s.y,r.y,a.y,o.y),Aa(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},za=class extends kn{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kl=class extends kn{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Va=class extends kn{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ea(e,s.x,r.x,a.x),Ea(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ul=class extends kn{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ea(e,s.x,r.x,a.x),Ea(e,s.y,r.y,a.y),Ea(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ha=class extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Gp(o,l.x,c.x,h.x,u.x),Gp(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new we().fromArray(s))}return this}},Du=Object.freeze({__proto__:null,ArcCurve:Ll,CatmullRomCurve3:Dl,CubicBezierCurve:Ba,CubicBezierCurve3:Nl,EllipseCurve:Ir,LineCurve:za,LineCurve3:kl,QuadraticBezierCurve:Va,QuadraticBezierCurve3:Ul,SplineCurve:Ha}),Fl=class extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Du[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Du[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},ks=class extends Fl{constructor(e){super(),this.type="Path",this.currentPoint=new we,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new za(this.currentPoint.clone(),new we(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Va(this.currentPoint.clone(),new we(e,t),new we(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ba(this.currentPoint.clone(),new we(e,t),new we(n,s),new we(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ha(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Ir(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Oi=class extends ks{constructor(e){super(e),this.uuid=Gs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ks().fromJSON(s))}return this}};function Dy(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=zm(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Oy(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let d=t;d<s;d+=t){let p=i[d],f=i[d+1];p<o&&(o=p),f<l&&(l=f),p>h&&(h=p),f>u&&(u=f)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Ga(r,a,t,o,l,c,0),a}function zm(i,e,t,n,s){let r;if(s===Zy(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Wp(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Wp(a/n|0,i[a],i[a+1],r);return r&&Lr(r,r.next)&&(Xa(r),r=r.next),r}function Us(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Lr(t,t.next)||Ft(t.prev,t,t.next)===0)){if(Xa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ga(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Gy(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?ky(i,n,s,r):Ny(i)){e.push(l.i,i.i,c.i),Xa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Uy(Us(i),e),Ga(i,e,t,n,s,r,2)):a===2&&Fy(i,e,t,n,s,r):Ga(Us(i),e,t,n,s,r,1);break}}}function Ny(i){let e=i.prev,t=i,n=i.next;if(Ft(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),p=Math.max(o,l,c),f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&ba(s,o,r,l,a,c,f.x,f.y)&&Ft(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function ky(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Ft(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,p=Math.min(o,l,c),f=Math.min(h,u,d),g=Math.max(o,l,c),m=Math.max(h,u,d),v=Nu(p,f,e,t,n),x=Nu(g,m,e,t,n),E=i.prevZ,y=i.nextZ;for(;E&&E.z>=v&&y&&y.z<=x;){if(E.x>=p&&E.x<=g&&E.y>=f&&E.y<=m&&E!==s&&E!==a&&ba(o,h,l,u,c,d,E.x,E.y)&&Ft(E.prev,E,E.next)>=0||(E=E.prevZ,y.x>=p&&y.x<=g&&y.y>=f&&y.y<=m&&y!==s&&y!==a&&ba(o,h,l,u,c,d,y.x,y.y)&&Ft(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;E&&E.z>=v;){if(E.x>=p&&E.x<=g&&E.y>=f&&E.y<=m&&E!==s&&E!==a&&ba(o,h,l,u,c,d,E.x,E.y)&&Ft(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;y&&y.z<=x;){if(y.x>=p&&y.x<=g&&y.y>=f&&y.y<=m&&y!==s&&y!==a&&ba(o,h,l,u,c,d,y.x,y.y)&&Ft(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Uy(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Lr(n,s)&&Hm(n,t,t.next,s)&&Wa(n,s)&&Wa(s,n)&&(e.push(n.i,t.i,s.i),Xa(t),Xa(t.next),t=i=s),t=t.next}while(t!==i);return Us(t)}function Fy(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&qy(a,o)){let l=Gm(a,o);a=Us(a,a.next),l=Us(l,l.next),Ga(a,e,t,n,s,r,0),Ga(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Oy(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=zm(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Xy(c))}s.sort(By);for(let r=0;r<s.length;r++)t=zy(s[r],t);return t}function By(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function zy(i,e){let t=Vy(i,e);if(!t)return e;let n=Gm(t,i);return Us(n,n.next),Us(t,t.next)}function Vy(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Lr(i,t))return t;do{if(Lr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Vm(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Wa(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Hy(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Hy(i,e){return Ft(i.prev,i,e.prev)<0&&Ft(e.next,i,i.next)<0}function Gy(i,e,t,n){let s=i;do s.z===0&&(s.z=Nu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Wy(s)}function Wy(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Nu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Xy(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Vm(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function ba(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Vm(i,e,t,n,s,r,a,o)}function qy(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!$y(i,e)&&(Wa(i,e)&&Wa(e,i)&&Yy(i,e)&&(Ft(i.prev,i,e.prev)||Ft(i,e.prev,e))||Lr(i,e)&&Ft(i.prev,i,i.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Lr(i,e){return i.x===e.x&&i.y===e.y}function Hm(i,e,t,n){let s=hl(Ft(i,e,t)),r=hl(Ft(i,e,n)),a=hl(Ft(t,n,i)),o=hl(Ft(t,n,e));return!!(s!==r&&a!==o||s===0&&cl(i,t,e)||r===0&&cl(i,n,e)||a===0&&cl(t,i,n)||o===0&&cl(t,e,n))}function cl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function hl(i){return i>0?1:i<0?-1:0}function $y(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Hm(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Wa(i,e){return Ft(i.prev,i,i.next)<0?Ft(i,e,i.next)>=0&&Ft(i,i.prev,e)>=0:Ft(i,e,i.prev)<0||Ft(i,i.next,e)<0}function Yy(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Gm(i,e){let t=ku(i.i,i.x,i.y),n=ku(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Wp(i,e,t,n){let s=ku(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Xa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ku(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zy(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Uu=class{static triangulate(e,t,n=2){return Dy(e,t,n)}},ci=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Xp(e),qp(n,e);let a=e.length;t.forEach(Xp);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,qp(n,t[l]);let o=Uu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Xp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function qp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var qa=class i extends fi{constructor(e=new Oi([new we(.5,.5),new we(-.5,.5),new we(-.5,-.5),new we(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new tn(s,3)),this.setAttribute("uv",new tn(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,v=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Jy,E,y=!1,M,w,_,b;if(v){E=v.getSpacedPoints(h),y=!0,d=!1;let ie=v.isCatmullRomCurve3?v.closed:!1;M=v.computeFrenetFrames(h,ie),w=new H,_=new H,b=new H}d||(m=0,p=0,f=0,g=0);let C=o.extractPoints(c),T=C.shape,P=C.holes;if(!ci.isClockWise(T)){T=T.reverse();for(let ie=0,pe=P.length;ie<pe;ie++){let ce=P[ie];ci.isClockWise(ce)&&(P[ie]=ce.reverse())}}function R(ie){let ce=10000000000000001e-36,Re=ie[0];for(let ge=1;ge<=ie.length;ge++){let ze=ge%ie.length,Ne=ie[ze],Ye=Ne.x-Re.x,Ze=Ne.y-Re.y,nt=Ye*Ye+Ze*Ze,U=Math.max(Math.abs(Ne.x),Math.abs(Ne.y),Math.abs(Re.x),Math.abs(Re.y)),Tt=ce*U*U;if(nt<=Tt){ie.splice(ze,1),ge--;continue}Re=Ne}}R(T),P.forEach(R);let L=P.length,F=T;for(let ie=0;ie<L;ie++){let pe=P[ie];T=T.concat(pe)}function G(ie,pe,ce){return pe||Je("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(pe,ce)}let B=T.length;function K(ie,pe,ce){let Re,ge,ze,Ne=ie.x-pe.x,Ye=ie.y-pe.y,Ze=ce.x-ie.x,nt=ce.y-ie.y,U=Ne*Ne+Ye*Ye,Tt=Ne*nt-Ye*Ze;if(Math.abs(Tt)>Number.EPSILON){let st=Math.sqrt(U),mt=Math.sqrt(Ze*Ze+nt*nt),be=pe.x-Ye/st,Pt=pe.y+Ne/st,Ve=ce.x-nt/mt,qe=ce.y+Ze/mt,I=((Ve-be)*nt-(qe-Pt)*Ze)/(Ne*nt-Ye*Ze);Re=be+Ne*I-ie.x,ge=Pt+Ye*I-ie.y;let S=Re*Re+ge*ge;if(S<=2)return new we(Re,ge);ze=Math.sqrt(S/2)}else{let st=!1;Ne>Number.EPSILON?Ze>Number.EPSILON&&(st=!0):Ne<-Number.EPSILON?Ze<-Number.EPSILON&&(st=!0):Math.sign(Ye)===Math.sign(nt)&&(st=!0),st?(Re=-Ye,ge=Ne,ze=Math.sqrt(U)):(Re=Ne,ge=Ye,ze=Math.sqrt(U/2))}return new we(Re/ze,ge/ze)}let V=[];for(let ie=0,pe=F.length,ce=pe-1,Re=ie+1;ie<pe;ie++,ce++,Re++)ce===pe&&(ce=0),Re===pe&&(Re=0),V[ie]=K(F[ie],F[ce],F[Re]);let X=[],Q,fe=V.concat();for(let ie=0,pe=L;ie<pe;ie++){let ce=P[ie];Q=[];for(let Re=0,ge=ce.length,ze=ge-1,Ne=Re+1;Re<ge;Re++,ze++,Ne++)ze===ge&&(ze=0),Ne===ge&&(Ne=0),Q[Re]=K(ce[Re],ce[ze],ce[Ne]);X.push(Q),fe=fe.concat(Q)}let Pe;if(m===0)Pe=ci.triangulateShape(F,P);else{let ie=[],pe=[];for(let ce=0;ce<m;ce++){let Re=ce/m,ge=p*Math.cos(Re*Math.PI/2),ze=f*Math.sin(Re*Math.PI/2)+g;for(let Ne=0,Ye=F.length;Ne<Ye;Ne++){let Ze=G(F[Ne],V[Ne],ze);Fe(Ze.x,Ze.y,-ge),Re===0&&ie.push(Ze)}for(let Ne=0,Ye=L;Ne<Ye;Ne++){let Ze=P[Ne];Q=X[Ne];let nt=[];for(let U=0,Tt=Ze.length;U<Tt;U++){let st=G(Ze[U],Q[U],ze);Fe(st.x,st.y,-ge),Re===0&&nt.push(st)}Re===0&&pe.push(nt)}}Pe=ci.triangulateShape(ie,pe)}let Z=Pe.length,ae=f+g;for(let ie=0;ie<B;ie++){let pe=d?G(T[ie],fe[ie],ae):T[ie];y?(_.copy(M.normals[0]).multiplyScalar(pe.x),w.copy(M.binormals[0]).multiplyScalar(pe.y),b.copy(E[0]).add(_).add(w),Fe(b.x,b.y,b.z)):Fe(pe.x,pe.y,0)}for(let ie=1;ie<=h;ie++)for(let pe=0;pe<B;pe++){let ce=d?G(T[pe],fe[pe],ae):T[pe];y?(_.copy(M.normals[ie]).multiplyScalar(ce.x),w.copy(M.binormals[ie]).multiplyScalar(ce.y),b.copy(E[ie]).add(_).add(w),Fe(b.x,b.y,b.z)):Fe(ce.x,ce.y,u/h*ie)}for(let ie=m-1;ie>=0;ie--){let pe=ie/m,ce=p*Math.cos(pe*Math.PI/2),Re=f*Math.sin(pe*Math.PI/2)+g;for(let ge=0,ze=F.length;ge<ze;ge++){let Ne=G(F[ge],V[ge],Re);Fe(Ne.x,Ne.y,u+ce)}for(let ge=0,ze=P.length;ge<ze;ge++){let Ne=P[ge];Q=X[ge];for(let Ye=0,Ze=Ne.length;Ye<Ze;Ye++){let nt=G(Ne[Ye],Q[Ye],Re);y?Fe(nt.x,nt.y+E[h-1].y,E[h-1].x+ce):Fe(nt.x,nt.y,u+ce)}}}Ie(),Ae();function Ie(){let ie=s.length/3;if(d){let pe=0,ce=B*pe;for(let Re=0;Re<Z;Re++){let ge=Pe[Re];pt(ge[2]+ce,ge[1]+ce,ge[0]+ce)}pe=h+m*2,ce=B*pe;for(let Re=0;Re<Z;Re++){let ge=Pe[Re];pt(ge[0]+ce,ge[1]+ce,ge[2]+ce)}}else{for(let pe=0;pe<Z;pe++){let ce=Pe[pe];pt(ce[2],ce[1],ce[0])}for(let pe=0;pe<Z;pe++){let ce=Pe[pe];pt(ce[0]+B*h,ce[1]+B*h,ce[2]+B*h)}}n.addGroup(ie,s.length/3-ie,0)}function Ae(){let ie=s.length/3,pe=0;_e(F,pe),pe+=F.length;for(let ce=0,Re=P.length;ce<Re;ce++){let ge=P[ce];_e(ge,pe),pe+=ge.length}n.addGroup(ie,s.length/3-ie,1)}function _e(ie,pe){let ce=ie.length;for(;--ce>=0;){let Re=ce,ge=ce-1;ge<0&&(ge=ie.length-1);for(let ze=0,Ne=h+m*2;ze<Ne;ze++){let Ye=B*ze,Ze=B*(ze+1),nt=pe+Re+Ye,U=pe+ge+Ye,Tt=pe+ge+Ze,st=pe+Re+Ze;Oe(nt,U,Tt,st)}}}function Fe(ie,pe,ce){l.push(ie),l.push(pe),l.push(ce)}function pt(ie,pe,ce){$e(ie),$e(pe),$e(ce);let Re=s.length/3,ge=x.generateTopUV(n,s,Re-3,Re-2,Re-1);je(ge[0]),je(ge[1]),je(ge[2])}function Oe(ie,pe,ce,Re){$e(ie),$e(pe),$e(Re),$e(pe),$e(ce),$e(Re);let ge=s.length/3,ze=x.generateSideWallUV(n,s,ge-6,ge-3,ge-2,ge-1);je(ze[0]),je(ze[1]),je(ze[3]),je(ze[1]),je(ze[2]),je(ze[3])}function $e(ie){s.push(l[ie*3+0]),s.push(l[ie*3+1]),s.push(l[ie*3+2])}function je(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ky(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Du[s.type]().fromJSON(s)),new i(n,e.options)}},Jy={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new we(r,a),new we(o,l),new we(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],p=e[s*3+1],f=e[s*3+2],g=e[r*3],m=e[r*3+1],v=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new we(a,1-l),new we(c,1-u),new we(d,1-f),new we(g,1-v)]:[new we(o,1-l),new we(h,1-u),new we(p,1-f),new we(m,1-v)]}};function Ky(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Fs=class i extends fi{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],g=[],m=[];for(let v=0;v<h;v++){let x=v*d-a;for(let E=0;E<c;E++){let y=E*u-r;f.push(y,-x,0),g.push(0,0,1),m.push(E/o),m.push(1-v/l)}}for(let v=0;v<l;v++)for(let x=0;x<o;x++){let E=x+c*v,y=x+c*(v+1),M=x+1+c*(v+1),w=x+1+c*v;p.push(E,y,w),p.push(y,M,w)}this.setIndex(p),this.setAttribute("position",new tn(f,3)),this.setAttribute("normal",new tn(g,3)),this.setAttribute("uv",new tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Dr=class i extends fi{constructor(e=new Oi([new we(0,.5),new we(-.5,-.5),new we(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new tn(s,3)),this.setAttribute("normal",new tn(r,3)),this.setAttribute("uv",new tn(a,2));function c(h){let u=s.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;ci.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,v=f.length;m<v;m++){let x=f[m];ci.isClockWise(x)===!0&&(f[m]=x.reverse())}let g=ci.triangulateShape(p,f);for(let m=0,v=f.length;m<v;m++){let x=f[m];p=p.concat(x)}for(let m=0,v=p.length;m<v;m++){let x=p[m];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let m=0,v=g.length;m<v;m++){let x=g[m],E=x[0]+u,y=x[1]+u,M=x[2]+u;n.push(E,y,M),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return jy(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function jy(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var $a=class extends Ui{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ot(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Ws(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if($p(s))s.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if($p(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function un(i){let e={};for(let t=0;t<i.length;t++){let n=Ws(i[t]);for(let s in n)e[s]=n[s]}return e}function $p(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Qy(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var Wm={clone:Ws,merge:un},ex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pi=class extends Ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ex,this.fragmentShader=tx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=Qy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ot().setHex(s.value);break;case"v2":this.uniforms[n].value=new we().fromArray(s.value);break;case"v3":this.uniforms[n].value=new H().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Lt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new tt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ct().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ol=class extends pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ya=class extends Ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bc,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Bl=class extends Ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zl=class extends Ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function yr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ul(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ls=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Vl=class extends ls{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pu,endingEnd:Pu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Iu:r=e,o=2*t-n;break;case Lu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Iu:a=e,l=2*n-t;break;case Lu:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(s-t),g=f*f,m=g*f,v=-d*m+2*d*g-d*f,x=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*f+1,E=(-1-p)*m+(1.5+p)*g+.5*f,y=p*m-p*g;for(let M=0;M!==o;++M)r[M]=v*a[h+M]+x*a[c+M]+E*a[l+M]+y*a[u+M];return r}},Hl=class extends ls{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Gl=class extends ls{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Wl=class extends ls{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let f=(n-t)/(s-t),g=1-f;for(let m=0;m!==o;++m)r[m]=a[c+m]*g+a[l+m]*f;return r}let d=o*2,p=e-1;for(let f=0;f!==o;++f){let g=a[c+f],m=a[l+f],v=p*d+f*2,x=u[v],E=u[v+1],y=e*d+f*2,M=h[y],w=h[y+1],_=ix(n,t,x,M,s);r[f]=Xm(_,g,E,w,m)}return r}};function Xm(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function nx(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function ix(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Xm(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=nx(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Un=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yr(t,this.TimeBufferType),this.values=yr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:yr(e.times,Array),values:yr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ul(e.settings)&&(n.settings={inTangents:yr(e.settings.inTangents,Array),outTangents:yr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Wl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ta:t=this.InterpolantFactoryMethodDiscrete;break;case El:t=this.InterpolantFactoryMethodLinear;break;case pl:t=this.InterpolantFactoryMethodSmooth;break;case Cu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ta;case this.InterpolantFactoryMethodLinear:return El;case this.InterpolantFactoryMethodSmooth:return pl;case this.InterpolantFactoryMethodBezier:return Cu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;ul(this.settings)&&(Yp(this.settings.inTangents,e),Yp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ul(this.settings)&&(Zp(this.settings.inTangents,e),Zp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Je("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Je("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&q_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Je("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===pl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,p=u+n;for(let f=0;f!==n;++f){let g=t[u+f];if(g!==t[d+f]||g!==t[p+f]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ul(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Yp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Zp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=El;var cs=class extends Un{constructor(e,t,n){super(e,t,n)}};cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Ta;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Xl=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};Xl.prototype.ValueTypeName="color";var ql=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};ql.prototype.ValueTypeName="number";var $l=class extends ls{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)di.slerpFlat(r,0,a,c-o,a,c,l);return r}},Za=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new $l(this.times,this.values,this.getValueSize(),e)}};Za.prototype.ValueTypeName="quaternion";Za.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends Un{constructor(e,t,n){super(e,t,n)}};hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Ta;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Yl=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};Yl.prototype.ValueTypeName="vector";var Zl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qm=new Zl,Jl=class{constructor(e){this.manager=e!==void 0?e:qm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Jl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ja=class extends cn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ka=class extends Ja{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ru=new Ct,Jp=new H,Kp=new H,Kl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new os,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Jp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jp),Kp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ru.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ru,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===wr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ru)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},dl=new H,fl=new di,ai=new H,ja=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dl,fl,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,fl,ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(dl,fl,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,fl,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},is=new H,jp=new we,Qp=new we,gn=class extends ja{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,t){return this.getViewBounds(e,jp,Qp),t.subVectors(Qp,jp)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ma*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Qa=class extends ja{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Fu=class extends Kl{constructor(){super(new Qa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},eo=class extends Ja{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new Fu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var xr=-90,br=1,Nr=class extends cn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(xr,br,e,t);s.layers=this.layers,this.add(s);let r=new gn(xr,br,e,t);r.layers=this.layers,this.add(r);let a=new gn(xr,br,e,t);a.layers=this.layers,this.add(a);let o=new gn(xr,br,e,t);o.layers=this.layers,this.add(o);let l=new gn(xr,br,e,t);l.layers=this.layers,this.add(l);let c=new gn(xr,br,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=g,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},jl=class extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},to=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=sx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function sx(){this._document.hidden===!1&&this.reset()}var _d="\\[\\]\\.:\\/",rx=new RegExp("["+_d+"]","g"),yd="[^"+_d+"]",ax="[^"+_d.replace("\\.","")+"]",ox=/((?:WC+[\/:])*)/.source.replace("WC",yd),lx=/(WCOD+)?/.source.replace("WCOD",ax),cx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yd),hx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yd),ux=new RegExp("^"+ox+lx+cx+hx+"$"),dx=["material","materials","bones","map"],Ou=class{constructor(e,t,n){let s=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(rx,"")}static parseTrackName(e){let t=ux.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);dx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Je("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=Ou;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sE=new Float32Array(1);var Ed=class Ed{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Ed.prototype.isMatrix2=!0;var Bu=Ed;function xd(i,e,t,n){let s=fx(n);switch(t){case rd:return i*e;case od:return i*e/s.components*s.byteLength;case ac:return i*e/s.components*s.byteLength;case ds:return i*e*2/s.components*s.byteLength;case oc:return i*e*2/s.components*s.byteLength;case ad:return i*e*3/s.components*s.byteLength;case Qn:return i*e*4/s.components*s.byteLength;case lc:return i*e*4/s.components*s.byteLength;case io:case so:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ro:case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hc:case dc:return Math.max(i,16)*Math.max(e,8)/4;case cc:case uc:return Math.max(i,8)*Math.max(e,8)/2;case fc:case pc:case gc:case vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case mc:case oo:case _c:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case bc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Lc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Dc:case Nc:case kc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Uc:case Fc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case lo:case Oc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fx(i){switch(i){case En:case td:return{byteLength:1,components:1};case Or:case nd:case jn:return{byteLength:2,components:1};case sc:case rc:return{byteLength:2,components:4};case Jn:case ic:case Kn:return{byteLength:4,components:1};case id:case sd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function pg(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function mx(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,f)=>p.start-f.start);let d=0;for(let p=1;p<u.length;p++){let f=u[d],g=u[p];g.start<=f.start+f.count+1?f.count=Math.max(f.count,g.start+g.count-f.start):(++d,u[d]=g)}u.length=d+1;for(let p=0,f=u.length;p<f;p++){let g=u[p];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var gx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ax=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Px=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ux=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Bx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Vx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",qx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$x=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Yx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ib=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ab=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ob=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,lb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ub=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,db=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vb=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,_b=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Eb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ab=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cb=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ib=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Lb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Db=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ob=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Xb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$b=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,jb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,eS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,iS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_S=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,SS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,MS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ES=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,PS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,US=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,FS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,WS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$S=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:gx,alphahash_pars_fragment:vx,alphamap_fragment:_x,alphamap_pars_fragment:yx,alphatest_fragment:xx,alphatest_pars_fragment:bx,aomap_fragment:Sx,aomap_pars_fragment:Mx,batching_pars_vertex:wx,batching_vertex:Ex,begin_vertex:Ax,beginnormal_vertex:Tx,bsdfs:Rx,iridescence_fragment:Cx,bumpmap_pars_fragment:Px,clipping_planes_fragment:Ix,clipping_planes_pars_fragment:Lx,clipping_planes_pars_vertex:Dx,clipping_planes_vertex:Nx,color_fragment:kx,color_pars_fragment:Ux,color_pars_vertex:Fx,color_vertex:Ox,common:Bx,defaultnormal_vertex:zx,displacementmap_pars_vertex:Vx,displacementmap_vertex:Hx,emissivemap_fragment:Gx,emissivemap_pars_fragment:Wx,colorspace_fragment:Xx,colorspace_pars_fragment:qx,envmap_fragment:$x,envmap_common_pars_fragment:Yx,envmap_pars_fragment:Zx,envmap_pars_vertex:Jx,envmap_physical_pars_fragment:ob,envmap_vertex:Kx,fog_vertex:jx,fog_pars_vertex:Qx,fog_fragment:eb,fog_pars_fragment:tb,gradientmap_pars_fragment:nb,lightmap_pars_fragment:ib,lights_lambert_fragment:sb,lights_lambert_pars_fragment:rb,lights_pars_begin:ab,lights_toon_fragment:lb,lights_toon_pars_fragment:cb,lights_phong_fragment:hb,lights_phong_pars_fragment:ub,lights_physical_fragment:db,lights_physical_pars_fragment:fb,lights_fragment_begin:pb,lights_fragment_maps:mb,lights_fragment_end:gb,lightprobes_pars_fragment:vb,logdepthbuf_fragment:_b,logdepthbuf_pars_fragment:yb,logdepthbuf_pars_vertex:xb,logdepthbuf_vertex:bb,map_fragment:Sb,map_pars_fragment:Mb,map_particle_fragment:wb,map_particle_pars_fragment:Eb,metalnessmap_fragment:Ab,metalnessmap_pars_fragment:Tb,morphinstance_vertex:Rb,morphcolor_vertex:Cb,morphnormal_vertex:Pb,morphtarget_pars_vertex:Ib,morphtarget_vertex:Lb,normal_fragment_begin:Db,normal_fragment_maps:Nb,normal_pars_fragment:kb,normal_pars_vertex:Ub,normal_vertex:Fb,normalmap_pars_fragment:Ob,clearcoat_normal_fragment_begin:Bb,clearcoat_normal_fragment_maps:zb,clearcoat_pars_fragment:Vb,iridescence_pars_fragment:Hb,opaque_fragment:Gb,packing:Wb,premultiplied_alpha_fragment:Xb,project_vertex:qb,dithering_fragment:$b,dithering_pars_fragment:Yb,roughnessmap_fragment:Zb,roughnessmap_pars_fragment:Jb,shadowmap_pars_fragment:Kb,shadowmap_pars_vertex:jb,shadowmap_vertex:Qb,shadowmask_pars_fragment:eS,skinbase_vertex:tS,skinning_pars_vertex:nS,skinning_vertex:iS,skinnormal_vertex:sS,specularmap_fragment:rS,specularmap_pars_fragment:aS,tonemapping_fragment:oS,tonemapping_pars_fragment:lS,transmission_fragment:cS,transmission_pars_fragment:hS,uv_pars_fragment:uS,uv_pars_vertex:dS,uv_vertex:fS,worldpos_vertex:pS,background_vert:mS,background_frag:gS,backgroundCube_vert:vS,backgroundCube_frag:_S,cube_vert:yS,cube_frag:xS,depth_vert:bS,depth_frag:SS,distance_vert:MS,distance_frag:wS,equirect_vert:ES,equirect_frag:AS,linedashed_vert:TS,linedashed_frag:RS,meshbasic_vert:CS,meshbasic_frag:PS,meshlambert_vert:IS,meshlambert_frag:LS,meshmatcap_vert:DS,meshmatcap_frag:NS,meshnormal_vert:kS,meshnormal_frag:US,meshphong_vert:FS,meshphong_frag:OS,meshphysical_vert:BS,meshphysical_frag:zS,meshtoon_vert:VS,meshtoon_frag:HS,points_vert:GS,points_frag:WS,shadow_vert:XS,shadow_frag:qS,sprite_vert:$S,sprite_frag:YS},Ce={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},_i={basic:{uniforms:un([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:un([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:un([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:un([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:un([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new ot(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:un([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:un([Ce.points,Ce.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:un([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:un([Ce.common,Ce.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:un([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:un([Ce.sprite,Ce.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distance:{uniforms:un([Ce.common,Ce.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distance_vert,fragmentShader:lt.distance_frag},shadow:{uniforms:un([Ce.lights,Ce.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};_i.physical={uniforms:un([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var zc={r:0,b:0,g:0},ZS=new Ct,mg=new tt;mg.set(-1,0,0,0,1,0,0,0,1);function JS(i,e,t,n,s,r){let a=new ot(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function p(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){let y=x.backgroundBlurriness>0;E=e.get(E,y)}return E}function f(x){let E=!1,y=p(x);y===null?m(a,o):y&&y.isColor&&(m(y,1),E=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(x,E){let y=p(E);y&&y.isCubeTexture?(c===void 0&&(c=new hn(new Pr(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Ws(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ZS.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(mg),c.material.toneMapped=dt.getTransfer(y.colorSpace)!==yt,(h!==y||u!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new hn(new Fs(2,2),new pi({name:"BackgroundMaterial",uniforms:Ws(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=dt.getTransfer(y.colorSpace)!==yt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,E){x.getRGB(zc,vd(i)),t.buffers.color.setClear(zc.r,zc.g,zc.b,E,r)}function v(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,E=1){a.set(x),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:f,addToRenderList:g,dispose:v}}function KS(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(P,N,R,L,F){let G=!1,B=u(P,L,R,N);r!==B&&(r=B,c(r.object)),G=p(P,L,R,F),G&&f(P,L,R,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,y(P,N,R,L),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,N,R,L){let F=L.wireframe===!0,G=n[N.id];G===void 0&&(G={},n[N.id]=G);let B=P.isInstancedMesh===!0?P.id:0,K=G[B];K===void 0&&(K={},G[B]=K);let V=K[R.id];V===void 0&&(V={},K[R.id]=V);let X=V[F];return X===void 0&&(X=d(l()),V[F]=X),X}function d(P){let N=[],R=[],L=[];for(let F=0;F<t;F++)N[F]=0,R[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:R,attributeDivisors:L,object:P,attributes:{},index:null}}function p(P,N,R,L){let F=r.attributes,G=N.attributes,B=0,K=R.getAttributes();for(let V in K)if(K[V].location>=0){let Q=F[V],fe=G[V];if(fe===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(fe=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(fe=P.instanceColor)),Q===void 0||Q.attribute!==fe||fe&&Q.data!==fe.data)return!0;B++}return r.attributesNum!==B||r.index!==L}function f(P,N,R,L){let F={},G=N.attributes,B=0,K=R.getAttributes();for(let V in K)if(K[V].location>=0){let Q=G[V];Q===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor));let fe={};fe.attribute=Q,Q&&Q.data&&(fe.data=Q.data),F[V]=fe,B++}r.attributes=F,r.attributesNum=B,r.index=L}function g(){let P=r.newAttributes;for(let N=0,R=P.length;N<R;N++)P[N]=0}function m(P){v(P,0)}function v(P,N){let R=r.newAttributes,L=r.enabledAttributes,F=r.attributeDivisors;R[P]=1,L[P]===0&&(i.enableVertexAttribArray(P),L[P]=1),F[P]!==N&&(i.vertexAttribDivisor(P,N),F[P]=N)}function x(){let P=r.newAttributes,N=r.enabledAttributes;for(let R=0,L=N.length;R<L;R++)N[R]!==P[R]&&(i.disableVertexAttribArray(R),N[R]=0)}function E(P,N,R,L,F,G,B){B===!0?i.vertexAttribIPointer(P,N,R,F,G):i.vertexAttribPointer(P,N,R,L,F,G)}function y(P,N,R,L){g();let F=L.attributes,G=R.getAttributes(),B=N.defaultAttributeValues;for(let K in G){let V=G[K];if(V.location>=0){let X=F[K];if(X===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(X=P.instanceColor)),X!==void 0){let Q=X.normalized,fe=X.itemSize,Pe=e.get(X);if(Pe===void 0)continue;let Z=Pe.buffer,ae=Pe.type,Ie=Pe.bytesPerElement,Ae=ae===i.INT||ae===i.UNSIGNED_INT||X.gpuType===ic;if(X.isInterleavedBufferAttribute){let _e=X.data,Fe=_e.isInterleavedBuffer===!0?_e.stride:_e.itemSize,pt=X.offset;if(_e.isInstancedInterleavedBuffer||_e.isInstancedBufferAttribute){for(let Oe=0;Oe<V.locationSize;Oe++)v(V.location+Oe,_e.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Oe=0;Oe<V.locationSize;Oe++)m(V.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Oe=0;Oe<V.locationSize;Oe++)E(V.location+Oe,fe/V.locationSize,ae,Q,Fe*Ie,(pt+fe/V.locationSize*Oe)*Ie,Ae)}else{if(X.isInstancedBufferAttribute){for(let _e=0;_e<V.locationSize;_e++)v(V.location+_e,X.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let _e=0;_e<V.locationSize;_e++)m(V.location+_e);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let _e=0;_e<V.locationSize;_e++)E(V.location+_e,fe/V.locationSize,ae,Q,fe*Ie,fe/V.locationSize*_e*Ie,Ae)}}else if(B!==void 0){let Q=B[K];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(V.location,Q);break;case 3:i.vertexAttrib3fv(V.location,Q);break;case 4:i.vertexAttrib4fv(V.location,Q);break;default:i.vertexAttrib1fv(V.location,Q)}}}}x()}function M(){C();for(let P in n){let N=n[P];for(let R in N){let L=N[R];for(let F in L){let G=L[F];for(let B in G)h(G[B].object),delete G[B];delete L[F]}}delete n[P]}}function w(P){if(n[P.id]===void 0)return;let N=n[P.id];for(let R in N){let L=N[R];for(let F in L){let G=L[F];for(let B in G)h(G[B].object),delete G[B];delete L[F]}}delete n[P.id]}function _(P){for(let N in n){let R=n[N];for(let L in R){let F=R[L];if(F[P.id]===void 0)continue;let G=F[P.id];for(let B in G)h(G[B].object),delete G[B];delete F[P.id]}}}function b(P){for(let N in n){let R=n[N],L=P.isInstancedMesh===!0?P.id:0,F=R[L];if(F!==void 0){for(let G in F){let B=F[G];for(let K in B)h(B[K].object),delete B[K];delete F[G]}delete R[L],Object.keys(R).length===0&&delete n[N]}}}function C(){T(),a=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:T,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function jS(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function QS(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Qn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==En&&_!==Kn&&!b&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Xe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Xe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:m,maxAttributes:v,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:y,maxSamples:M,samples:w}}function eM(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Zn,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let f=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,v=i.get(u);if(!s||f===null||f.length===0||r&&!m)r?h(null):c();else{let x=r?0:n,E=x*4,y=v.clippingState||null;l.value=y,y=h(f,d,E,p);for(let M=0;M!==E;++M)y[M]=t[M];v.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,f){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,f!==!0||m===null){let v=p+g*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<v)&&(m=new Float32Array(v));for(let E=0,y=p;E!==g;++E,y+=4)a.copy(u[E]).applyMatrix4(x,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}var fo=class extends Nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ua(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Pr(5,5,5),r=new pi({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:Bs});r.uniforms.tEquirect.value=t;let a=new hn(s,r),o=t.minFilter;return t.minFilter===Bi&&(t.minFilter=vn),new Nr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},$m=256,tM=3,nM=20,gg=256,vg=16,iM=3,sM=new H,rM=new ot,Hc=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Nr(1,10,null),this._boxMesh=new hn(new Pr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=sM}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,p=l.autoClearDepth,f=l.autoClearStencil,g=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,g===null&&(e.background=l.getClearColor(rM));let m=new Nr(n,s,h);return m.position.copy(o),m.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=p,l.autoClearStencil=f,e.background=g,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max($m,pd(e))}_fromTexture(e,t){e.mapping===Vs||e.mapping===Fr?this._setSize(e.image.length===0?$m:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Ym(e,!1,!1),n=Math.log2(e)-tM;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Ym(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Vs||e.mapping===Fr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Zm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=aM(),this._integrationMaterial=oM());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/vg);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-iM)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(gg*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=lM());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Ym(i,e,t){return new fo(i,{minFilter:Bi,generateMipmaps:e,type:jn,colorSpace:Ra,depthBuffer:t})}function po(i,e,t){return new pi({name:i,uniforms:e,vertexShader:lt.cube_vert,fragmentShader:t,side:_n,blending:Bs,depthTest:!1,depthWrite:!1})}function aM(){return po("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${gg}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function oM(){return po("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:vg}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function lM(){return po("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${nM}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Zm(){return po("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Jm(){return po("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function cM(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?a(d):r(d)}function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===ec||p===tc)if(e.has(d)){let f=e.get(d).texture;return o(f,d.mapping)}else{let f=d.image;if(f&&f.height>0){let g=new fo(f.height);return g.fromEquirectangularTexture(i,d),e.set(d,g),d.addEventListener("dispose",c),o(g.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let p=d.mapping,f=p===ec||p===tc,g=p===Vs||p===Fr;if(f||g){let m=t.get(d),v=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return n===null&&(n=new Hc(i)),m=f?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let x=d.image;return f&&x&&x.height>0||g&&x&&l(x)?(n===null&&(n=new Hc(i)),m=f?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,p){return p===ec?d.mapping=Vs:p===tc&&(d.mapping=Fr),d}function l(d){let p=0,f=6;for(let g=0;g<f;g++)d[g]!==void 0&&p++;return p===f}function c(d){let p=d.target;p.removeEventListener("dispose",c);let f=e.get(p);f!==void 0&&(e.delete(p),f.dispose())}function h(d){let p=d.target;p.removeEventListener("dispose",h);let f=t.get(p);f!==void 0&&(t.delete(p),f.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function hM(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Sa("WebGLRenderer: "+n+" extension not supported."),s}}}function uM(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(f=>delete s[f]);function o(f){l(f.target)}function l(f){f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id],a.unregister(f);let g=r.get(f);g&&(e.remove(g),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function c(f,g){return s[g.id]!==void 0||(g.addEventListener("dispose",o),s[g.id]=new WeakRef(g),a.register(g,g.id,g),t.memory.geometries++),g}function h(f){let g=f.attributes;for(let m in g)e.update(g[m],i.ARRAY_BUFFER)}function u(f){let g=f.index,m=f.attributes.position,v=0;if(m===void 0)return;let x=g!==null?g.array.length:m.array.length/3-1,E=m.count>=65535?ka:Na,y=new E(Math.ceil(x/3)*6,1),M=y.array;if(g!==null){let _=g.array;v=g.version;for(let b=0,C=0;b<x;b+=3){let T=_[b+0],P=_[b+1],N=_[b+2];M[C++]=T,M[C++]=P,M[C++]=P,M[C++]=N,M[C++]=N,M[C++]=T}}else{v=m.version;for(let _=0,b=0;_<x;_+=3){let C=_+0,T=_+1,P=_+2;M[b++]=C,M[b++]=T,M[b++]=T,M[b++]=P,M[b++]=P,M[b++]=C}}y.version=v;let w=r.get(f);w&&e.remove(w),r.set(f,y)}function d(f){let g=r.get(f);if(g){let m=f.index;m!==null&&g.version<m.version&&u(f)}else u(f);return r.get(f)}function p(){for(let f in s){let g=s[f].deref();g!==void 0&&l(g)}}return{get:c,update:h,getWireframeAttribute:d,dispose:p}}function dM(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,u*a,p),t.update(d,n,p))}function h(u,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];t.update(g,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function fM(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function pM(i,e,t){let n=new WeakMap,s=new Lt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let C=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,f=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],E=0;p===!0&&(E=1),f===!0&&(E=2),g===!0&&(E=3);let y=o.attributes.position.count*E,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*M*4*u),_=new Ia(w,y,M,u);_.type=Kn,_.needsUpdate=!0;let b=E*4;for(let T=0;T<u;T++){let P=m[T],N=v[T],R=x[T],L=y*M*4*T;for(let F=0;F<P.count;F++){let G=F*b;p===!0&&(s.fromBufferAttribute(P,F),w[L+G+0]=s.x,w[L+G+1]=s.y,w[L+G+2]=s.z,w[L+G+3]=0),f===!0&&(s.fromBufferAttribute(N,F),w[L+G+4]=s.x,w[L+G+5]=s.y,w[L+G+6]=s.z,w[L+G+7]=0),g===!0&&(s.fromBufferAttribute(R,F),w[L+G+8]=s.x,w[L+G+9]=s.y,w[L+G+10]=s.z,w[L+G+11]=R.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new we(y,M)},n.set(o,d),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];let f=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",f),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function mM(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var gM={[$u]:"LINEAR_TONE_MAPPING",[Yu]:"REINHARD_TONE_MAPPING",[Zu]:"CINEON_TONE_MAPPING",[Ju]:"ACES_FILMIC_TONE_MAPPING",[ju]:"AGX_TONE_MAPPING",[Qu]:"NEUTRAL_TONE_MAPPING",[Ku]:"CUSTOM_TONE_MAPPING"};function vM(i,e,t,n,s,r){let a=new Nn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new fi;h.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new tn([0,2,0,0,2,0],2));let u=new Ol({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new hn(h,u),p=new Qa(-1,1,1,-1,0,1),f=null,g=null,m=!1,v,x=null,E=[],y=!1;this.setSize=function(M,w){a.setSize(M,w),o!==null&&o.setSize(M,w),l!==null&&l.setSize(M,w);for(let _=0;_<E.length;_++){let b=E[_];b.setSize&&b.setSize(M,w)}},this.setEffects=function(M){E=M,y=E.length>0&&E[0].isRenderPass===!0;let w=a.width,_=a.height;E.length>0&&o===null&&(o=new Nn(w,_,{type:jn,depthBuffer:!1,stencilBuffer:!1}),l=new Nn(w,_,{type:jn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&E.some(C=>C.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Fi(w,_),r===!0&&(c.format=zi,c.type=Hs)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let C=0;C<E.length;C++){let T=E[C];T.setSize&&T.setSize(w,_),b&&T.needsDepthTexture===!0&&T.setDepthTexture&&T.setDepthTexture(c)}},this.begin=function(M,w){if(m||M.toneMapping===gi&&E.length===0)return!1;if(x=w,w!==null){let _=w.width,b=w.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return y===!1&&M.setRenderTarget(a),v=M.toneMapping,M.toneMapping=gi,!0},this.hasRenderPass=function(){return y},this.end=function(M,w){M.toneMapping=v,m=!0;let _=a,b=o;for(let C=0;C<E.length;C++){let T=E[C];T.enabled!==!1&&(T.render(M,b,_,w),T.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(f!==M.outputColorSpace||g!==M.toneMapping){f=M.outputColorSpace,g=M.toneMapping,u.defines={},dt.getTransfer(f)===yt&&(u.defines.SRGB_TRANSFER="");let C=gM[g];C&&(u.defines[C]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,M.setRenderTarget(x),M.render(d,p),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var _g=new wn,yg=new Fi(1,1),xg=new Fa(1),bg=new Ia,Sg=new Rl,Mg=new Ua,Km=[],jm=[],Qm=new Float32Array(16),eg=new Float32Array(9),tg=new Float32Array(4);function zr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Km[s];if(r===void 0&&(r=new Float32Array(s),Km[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Wc(i,e){let t=jm[e];t===void 0&&(t=new Int32Array(e),jm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function _M(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function yM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function xM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function bM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function SM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,n))return;tg.set(n),i.uniformMatrix2fv(this.addr,!1,tg),$t(t,n)}}function MM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,n))return;eg.set(n),i.uniformMatrix3fv(this.addr,!1,eg),$t(t,n)}}function wM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,n))return;Qm.set(n),i.uniformMatrix4fv(this.addr,!1,Qm),$t(t,n)}}function EM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function AM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function TM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function RM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function CM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function PM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function IM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function LM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function Xc(i){return i.version===0&&(i.compareFunction=hd,i.needsUpdate=!0),i}function DM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Xc(yg):r=_g,t.setTexture2D(e||r,s)}function NM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Sg,s)}function kM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Xc(xg):r=Mg,t.setTextureCube(e||r,s)}function UM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||bg,s)}function FM(i){switch(i){case 5126:return _M;case 35664:return yM;case 35665:return xM;case 35666:return bM;case 35674:return SM;case 35675:return MM;case 35676:return wM;case 5124:case 35670:return EM;case 35667:case 35671:return AM;case 35668:case 35672:return TM;case 35669:case 35673:return RM;case 5125:return CM;case 36294:return PM;case 36295:return IM;case 36296:return LM;case 35678:case 36198:case 36298:case 36306:case 35682:return DM;case 35679:case 36299:case 36307:return NM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return UM}}function OM(i,e){i.uniform1fv(this.addr,e)}function BM(i,e){let t=zr(e,this.size,2);i.uniform2fv(this.addr,t)}function zM(i,e){let t=zr(e,this.size,3);i.uniform3fv(this.addr,t)}function VM(i,e){let t=zr(e,this.size,4);i.uniform4fv(this.addr,t)}function HM(i,e){let t=zr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function GM(i,e){let t=zr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function WM(i,e){let t=zr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function XM(i,e){i.uniform1iv(this.addr,e)}function qM(i,e){i.uniform2iv(this.addr,e)}function $M(i,e){i.uniform3iv(this.addr,e)}function YM(i,e){i.uniform4iv(this.addr,e)}function ZM(i,e){i.uniform1uiv(this.addr,e)}function JM(i,e){i.uniform2uiv(this.addr,e)}function KM(i,e){i.uniform3uiv(this.addr,e)}function jM(i,e){i.uniform4uiv(this.addr,e)}function QM(i,e,t){let n=this.cache,s=e.length,r=Wc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Xc(yg):a=_g;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function ew(i,e,t){let n=this.cache,s=e.length,r=Wc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Sg,r[a])}function tw(i,e,t){let n=this.cache,s=e.length,r=Wc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Xc(xg):a=Mg;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function nw(i,e,t){let n=this.cache,s=e.length,r=Wc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||bg,r[a])}function iw(i){switch(i){case 5126:return OM;case 35664:return BM;case 35665:return zM;case 35666:return VM;case 35674:return HM;case 35675:return GM;case 35676:return WM;case 5124:case 35670:return XM;case 35667:case 35671:return qM;case 35668:case 35672:return $M;case 35669:case 35673:return YM;case 5125:return ZM;case 36294:return JM;case 36295:return KM;case 36296:return jM;case 35678:case 36198:case 36298:case 36306:case 35682:return QM;case 35679:case 36299:case 36307:return ew;case 35680:case 36300:case 36308:case 36293:return tw;case 36289:case 36303:case 36311:case 36292:return nw}}var Rd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=FM(t.type)}},Cd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=iw(t.type)}},Pd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ad=/(\w+)(\])?(\[|\.)?/g;function ng(i,e){i.seq.push(e),i.map[e.id]=e}function sw(i,e,t){let n=i.name,s=n.length;for(Ad.lastIndex=0;;){let r=Ad.exec(n),a=Ad.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ng(t,c===void 0?new Rd(o,i,e):new Cd(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Pd(o),ng(t,u)),t=u}}}var Br=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);sw(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function ig(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var rw=37297,aw=0;function ow(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var sg=new tt;function lw(i){dt._getMatrix(sg,dt.workingColorSpace,i);let e=`mat3( ${sg.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case Ca:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function rg(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ow(i.getShaderSource(e),o)}else return r}function cw(i,e){let t=lw(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var hw={[$u]:"Linear",[Yu]:"Reinhard",[Zu]:"Cineon",[Ju]:"ACESFilmic",[ju]:"AgX",[Qu]:"Neutral",[Ku]:"Custom"};function uw(i,e){let t=hw[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Vc=new H;function dw(){dt.getLuminanceCoefficients(Vc);let i=Vc.x.toFixed(4),e=Vc.y.toFixed(4),t=Vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(uo).join(`
`)}function pw(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function mw(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function uo(i){return i!==""}function ag(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function og(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var gw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Id(i){return i.replace(gw,vw)}function vw(i,e){let t=lt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Id(t)}var _w=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lg(i){return i.replace(_w,yw)}function yw(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cg(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var xw={[Os]:"SHADOWMAP_TYPE_PCF",[kr]:"SHADOWMAP_TYPE_VSM"};function bw(i){return xw[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Sw={[Fr]:"ENVMAP_MODE_REFRACTION"};function Mw(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Sw[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ww={[qu]:"ENVMAP_BLENDING_MULTIPLY",[bm]:"ENVMAP_BLENDING_MIX",[Sm]:"ENVMAP_BLENDING_ADD"};function Ew(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ww[i.combine]||"ENVMAP_BLENDING_NONE"}function Aw(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=bw(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Mw(t),u=Ew(t),d=fw(t),p=pw(r),f=s.createProgram(),g,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(uo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(uo).join(`
`),m.length>0&&(m+=`
`)):(g=[cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uo).join(`
`),m=[cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?lt.tonemapping_pars_fragment:"",t.toneMapping!==gi?uw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,cw("linearToOutputTexel",t.outputColorSpace),dw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(uo).join(`
`)),a=Id(a),a=ag(a,t),a=og(a,t),o=Id(o),o=ag(o,t),o=og(o,t),a=lg(a),o=lg(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===ud?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ud?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=v+g+a,E=v+m+o,y=ig(s,s.VERTEX_SHADER,x),M=ig(s,s.FRAGMENT_SHADER,E);s.attachShader(f,y),s.attachShader(f,M),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function w(T){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(f)||"",N=s.getShaderInfoLog(y)||"",R=s.getShaderInfoLog(M)||"",L=P.trim(),F=N.trim(),G=R.trim(),B=!0,K=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,f,y,M);else{let V=rg(s,y,"vertex"),X=rg(s,M,"fragment");Je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+L+`
`+V+`
`+X)}else L!==""?Xe("WebGLProgram: Program Info Log:",L):(F===""||G==="")&&(K=!1);K&&(T.diagnostics={runnable:B,programLog:L,vertexShader:{log:F,prefix:g},fragmentShader:{log:G,prefix:m}})}s.deleteShader(y),s.deleteShader(M),_=new Br(s,f),b=mw(s,f)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(f,rw)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aw++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=y,this.fragmentShader=M,this}var Tw=0,Ld=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Dd(e),t.set(e,n)),n}},Dd=class{constructor(e){this.id=Tw++,this.code=e,this.usedTimes=0}};function Rw(i){return i===ds||i===oo||i===lo}function Cw(i,e,t,n,s,r){let a=new La,o=new Ld,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function f(_,b,C,T,P,N){let R=T.fog,L=P.geometry,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?T.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,B=e.get(_.envMap||F,G),K=d[_.type],V=n.precision;_.precision!==null&&(V=n.getMaxPrecision(_.precision),V!==_.precision&&Xe("WebGLProgram.getParameters:",_.precision,"not supported, using",V,"instead."));let X=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Q=X!==void 0?X.length:0,fe=0;L.morphAttributes.position!==void 0&&(fe=1),L.morphAttributes.normal!==void 0&&(fe=2),L.morphAttributes.color!==void 0&&(fe=3);let Pe,Z,ae,Ie;if(K){let Ee=_i[K];Pe=Ee.vertexShader,Z=Ee.fragmentShader}else{Pe=_.vertexShader,Z=_.fragmentShader;let Ee=o.getVertexShaderStage(_),vt=o.getFragmentShaderStage(_);o.update(_,Ee,vt),ae=Ee.id,Ie=vt.id}let Ae=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Fe=P.isInstancedMesh===!0,pt=P.isBatchedMesh===!0,Oe=!!_.map,$e=!!_.matcap,je=!!B,ie=je&&B.isPMREMTexture===!0,pe=!!_.aoMap,ce=!!_.lightMap,Re=!!_.bumpMap&&_.wireframe===!1,ge=!!_.normalMap,ze=!!_.displacementMap,Ne=!!_.emissiveMap,Ye=!!_.metalnessMap,Ze=!!_.roughnessMap,nt=_.anisotropy>0,U=_.clearcoat>0,Tt=_.diffuseRoughness>0,st=_.dispersion>0,mt=_.retroreflectivity>0,be=_.iridescence>0,Pt=_.sheen>0,Ve=_.transmission>0,qe=nt&&!!_.anisotropyMap,I=U&&!!_.clearcoatMap,S=U&&!!_.clearcoatNormalMap,q=U&&!!_.clearcoatRoughnessMap,oe=Tt&&!!_.diffuseRoughnessMap,re=be&&!!_.iridescenceMap,ve=be&&!!_.iridescenceThicknessMap,Se=Pt&&!!_.sheenColorMap,ee=Pt&&!!_.sheenRoughnessMap,te=!!_.specularMap,me=!!_.specularColorMap,k=!!_.specularIntensityMap,ne=Ve&&!!_.transmissionMap,j=Ve&&!!_.thicknessMap,he=!!_.gradientMap,de=!!_.alphaMap,ye=_.alphaTest>0,Be=!!_.alphaHash,it=!!_.extensions,ue=gi;_.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(ue=i.toneMapping);let He=ie?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,Qe={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:Pe,fragmentShader:Z,defines:_.defines,customVertexShaderID:ae,customFragmentShaderID:Ie,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:V,batching:pt,batchingColor:pt&&P._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&P.instanceColor!==null,instancingMorph:Fe&&P.morphTexture!==null,outputColorSpace:Ae===null?i.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Oe,matcap:$e,envMap:je,envMapMode:je&&B.mapping,envMapPMREM:ie,envMapMaxLod:ie?He.length-1:null,envMapSize:ie?He[0].width:null,aoMap:pe,lightMap:ce,bumpMap:Re,normalMap:ge,displacementMap:ze,emissiveMap:Ne,normalMapObjectSpace:ge&&_.normalMapType===Em,normalMapTangentSpace:ge&&_.normalMapType===Bc,packedNormalMap:ge&&_.normalMapType===Bc&&Rw(_.normalMap.format),metalnessMap:Ye,roughnessMap:Ze,anisotropy:nt,anisotropyMap:qe,clearcoat:U,clearcoatMap:I,clearcoatNormalMap:S,clearcoatRoughnessMap:q,diffuseRoughness:Tt,diffuseRoughnessMap:oe,dispersion:st,retroreflection:mt,iridescence:be,iridescenceMap:re,iridescenceThicknessMap:ve,sheen:Pt,sheenColorMap:Se,sheenRoughnessMap:ee,specularMap:te,specularColorMap:me,specularIntensityMap:k,transmission:Ve,transmissionMap:ne,thicknessMap:j,gradientMap:he,opaque:_.transparent===!1&&_.blending===Ur&&_.alphaToCoverage===!1,alphaMap:de,alphaTest:ye,alphaHash:Be,combine:_.combine,mapUv:Oe&&p(_.map.channel),aoMapUv:pe&&p(_.aoMap.channel),lightMapUv:ce&&p(_.lightMap.channel),bumpMapUv:Re&&p(_.bumpMap.channel),normalMapUv:ge&&p(_.normalMap.channel),displacementMapUv:ze&&p(_.displacementMap.channel),emissiveMapUv:Ne&&p(_.emissiveMap.channel),metalnessMapUv:Ye&&p(_.metalnessMap.channel),roughnessMapUv:Ze&&p(_.roughnessMap.channel),anisotropyMapUv:qe&&p(_.anisotropyMap.channel),clearcoatMapUv:I&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&p(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&p(_.diffuseRoughnessMap.channel),iridescenceMapUv:re&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:ee&&p(_.sheenRoughnessMap.channel),specularMapUv:te&&p(_.specularMap.channel),specularColorMapUv:me&&p(_.specularColorMap.channel),specularIntensityMapUv:k&&p(_.specularIntensityMap.channel),transmissionMapUv:ne&&p(_.transmissionMap.channel),thicknessMapUv:j&&p(_.thicknessMap.channel),alphaMapUv:de&&p(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ge||nt),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(Oe||de),fog:!!R,useFog:_.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&ge===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_e,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:fe,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:N.filter(Ee=>Ee.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:Oe&&_.map.isVideoTexture===!0&&dt.getTransfer(_.map.colorSpace)===yt,decodeVideoTextureEmissive:Ne&&_.emissiveMap.isVideoTexture===!0&&dt.getTransfer(_.emissiveMap.colorSpace)===yt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===mi,flipSided:_.side===_n,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:it&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&_.extensions.multiDraw===!0||pt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function g(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)b.push(C),b.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(m(b,_),v(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function m(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function v(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){let b=d[_.type],C;if(b){let T=_i[b];C=Wm.clone(T.uniforms)}else C=_.uniforms;return C}function E(_,b){let C=h.get(b);return C!==void 0?++C.usedTimes:(C=new Aw(i,b,_,s),c.push(C),h.set(b,C)),C}function y(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function M(_){o.remove(_)}function w(){o.dispose()}return{getParameters:f,getProgramCacheKey:g,getUniforms:x,acquireProgram:E,releaseProgram:y,releaseShaderCache:M,programs:c,dispose:w}}function Pw(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Iw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function hg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ug(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,f,g,m,v){let x=i[e];return x===void 0?(x={id:d.id,object:d,geometry:p,material:f,materialVariant:a(d),groupOrder:g,renderOrder:d.renderOrder,z:m,group:v},i[e]=x):(x.id=d.id,x.object=d,x.geometry=p,x.material=f,x.materialVariant=a(d),x.groupOrder=g,x.renderOrder=d.renderOrder,x.z=m,x.group=v),e++,x}function l(d,p,f,g,m,v,x){x.reversedDepth===!0&&(m=-m);let E=o(d,p,f,g,m,v);f.transmission>0?n.push(E):f.transparent===!0?s.push(E):t.push(E)}function c(d,p,f,g,m,v){let x=o(d,p,f,g,m,v);f.transmission>0?n.unshift(x):f.transparent===!0?s.unshift(x):t.unshift(x)}function h(d,p){t.length>1&&t.sort(d||Iw),n.length>1&&n.sort(p||hg),s.length>1&&s.sort(p||hg)}function u(){for(let d=e,p=i.length;d<p;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Lw(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new ug,i.set(n,[a])):s>=r.length?(a=new ug,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Dw(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new ot};break;case"SpotLight":t={position:new H,direction:new H,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function Nw(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var kw=0;function Uw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Fw(i){let e=new Dw,t=Nw(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let s=new H,r=new Ct,a=new Ct;function o(c){let h=0,u=0,d=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let p=0,f=0,g=0,m=0,v=0,x=0,E=0,y=0,M=0,w=0,_=0,b=0,C=0,T=0;c.sort(Uw);for(let N=0,R=c.length;N<R;N++){let L=c[N],F=L.color,G=L.intensity,B=L.distance,K=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ds?K=L.shadow.map.texture:K=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=F.r*G,u+=F.g*G,d+=F.b*G;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],G);T++}else if(L.isSunLight){let V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let X=L.shadow,Q=t.get(L);Q.shadowIntensity=X.intensity,Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[f]=Q,n.sunShadowMap[f]=K;let fe=X.getViewportCount();for(let Pe=0;Pe<fe;Pe++)n.sunShadowMatrix[g+Pe]=X.getMatrix(Pe),n.sunShadowCascade[g+Pe]=X._cascadeData[Pe];g+=fe,f++}n.sun[p]=V,p++}else if(L.isDirectionalLight){let V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let X=L.shadow,Q=t.get(L);Q.shadowIntensity=X.intensity,Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize=X.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=L.shadow.matrix,M++}n.directional[m]=V,m++}else if(L.isSpotLight){let V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(F).multiplyScalar(G),V.distance=B,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[x]=V;let X=L.shadow;if(L.map&&(n.spotLightMap[b]=L.map,b++,X.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[x]=X.matrix,L.castShadow){let Q=t.get(L);Q.shadowIntensity=X.intensity,Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize=X.mapSize,n.spotShadow[x]=Q,n.spotShadowMap[x]=K,_++}x++}else if(L.isRectAreaLight){let V=e.get(L);V.color.copy(F).multiplyScalar(G),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),n.rectArea[E]=V,E++}else if(L.isPointLight){let V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){let X=L.shadow,Q=t.get(L);Q.shadowIntensity=X.intensity,Q.shadowBias=X.bias,Q.shadowNormalBias=X.normalBias,Q.shadowRadius=X.radius,Q.shadowMapSize=X.mapSize,Q.shadowCameraNear=X.camera.near,Q.shadowCameraFar=X.camera.far,n.pointShadow[v]=Q,n.pointShadowMap[v]=K,n.pointShadowMatrix[v]=L.shadow.matrix,w++}n.point[v]=V,v++}else if(L.isHemisphereLight){let V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(G),V.groundColor.copy(L.groundColor).multiplyScalar(G),n.hemi[y]=V,y++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.sunLength!==p||P.directionalLength!==m||P.pointLength!==v||P.spotLength!==x||P.rectAreaLength!==E||P.hemiLength!==y||P.numSunShadows!==f||P.numDirectionalShadows!==M||P.numPointShadows!==w||P.numSpotShadows!==_||P.numSpotMaps!==b||P.numLightProbes!==T)&&(n.sun.length=p,n.directional.length=m,n.spot.length=x,n.rectArea.length=E,n.point.length=v,n.hemi.length=y,n.sunShadow.length=f,n.sunShadowMap.length=f,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-C,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=T,P.sunLength=p,P.directionalLength=m,P.pointLength=v,P.spotLength=x,P.rectAreaLength=E,P.hemiLength=y,P.numSunShadows=f,P.numDirectionalShadows=M,P.numPointShadows=w,P.numSpotShadows=_,P.numSpotMaps=b,P.numLightProbes=T,n.version=kw++)}function l(c,h){let u=0,d=0,p=0,f=0,g=0,m=0,v=h.matrixWorldInverse;for(let x=0,E=c.length;x<E;x++){let y=c[x];if(y.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(v),u++}else if(y.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),d++}else if(y.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),f++}else if(y.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(v),a.identity(),r.copy(y.matrixWorld),r.premultiply(v),a.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){let M=n.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(v),p++}else if(y.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(v),m++}}}return{setup:o,setupView:l,state:n}}function dg(i){let e=new Fw(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ow(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new dg(i),e.set(s,[o])):r>=a.length?(o=new dg(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Bw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Vw=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Hw=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],fg=new Ct,ho=new H,Td=new H;function Gw(i,e,t){let n=new os,s=new we,r=new we,a=new Lt,o=new Bl,l=new zl,c={},h=t.maxTextureSize,u={[us]:_n,[_n]:us,[mi]:mi},d=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Bw,fragmentShader:zw}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new fi;f.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new hn(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Os;let v=this.type;this.render=function(w,_,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===nm&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Os);let C=i.getRenderTarget(),T=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Bs),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let R=v!==this.type;R&&_.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(F=>F.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,F=w.length;L<F;L++){let G=w[L],B=G.shadow;if(B===void 0){Xe("WebGLShadowMap:",G,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let K=B.getFrameExtents();s.multiply(K),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,B.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=V,B.map===null||R===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===kr){if(G.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Nn(s.x,s.y,{format:ds,type:jn,minFilter:vn,magFilter:vn,generateMipmaps:!1}),B.map.texture.name=G.name+".shadowMap",B.map.depthTexture=new Fi(s.x,s.y,Kn),B.map.depthTexture.name=G.name+".shadowMapDepth",B.map.depthTexture.format=Ni,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=jt,B.map.depthTexture.magFilter=jt}else G.isPointLight?(B.map=new fo(s.x),B.map.depthTexture=new Fa(s.x,Jn)):(B.map=new Nn(s.x,s.y),B.map.depthTexture=new Fi(s.x,s.y,Jn)),B.map.depthTexture.name=G.name+".shadowMap",B.map.depthTexture.format=Ni,this.type===Os?(B.map.depthTexture.compareFunction=V?cd:ld,B.map.depthTexture.minFilter=vn,B.map.depthTexture.magFilter=vn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=jt,B.map.depthTexture.magFilter=jt);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let X=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();G.isPointLight!==!0&&B.updateMatrices(G,b);let Q=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:b.layers;for(let fe=0;fe<X;fe++){let Pe=B.getCamera(fe);if(G.isPointLight){let Z=B.camera,ae=B.matrix,Ie=G.distance||Z.far;Ie!==Z.far&&(Z.far=Ie,Z.updateProjectionMatrix()),ho.setFromMatrixPosition(G.matrixWorld),Z.position.copy(ho),Td.copy(Z.position),Td.add(Vw[fe]),Z.up.copy(Hw[fe]),Z.lookAt(Td),Z.updateMatrixWorld(),ae.makeTranslation(-ho.x,-ho.y,-ho.z),fg.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),B._frustum.setFromProjectionMatrix(fg,Z.coordinateSystem,Z.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,fe),i.clear();else{fe===0&&(i.setRenderTarget(B.map),i.clear());let Z=B.getViewport(fe);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),N.viewport(a)}n=B.getFrustum(fe),y(_,b,Pe,G,Q,this.type)}B.isPointLightShadow!==!0&&this.type===kr&&x(B,b),B.needsUpdate=!1}v=this.type,m.needsUpdate=!1,i.setRenderTarget(C,T,P)};function x(w,_){let b=e.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new Nn(s.x,s.y,{format:ds,type:jn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(_,null,b,d,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(_,null,b,p,g,null)}function E(w,_,b,C){let T=null,P=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)T=P;else if(T=b.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let N=T.uuid,R=_.uuid,L=c[N];L===void 0&&(L={},c[N]=L);let F=L[R];F===void 0&&(F=T.clone(),L[R]=F,_.addEventListener("dispose",M)),T=F}if(T.visible=_.visible,T.wireframe=_.wireframe,C===kr?T.side=_.shadowSide!==null?_.shadowSide:_.side:T.side=_.shadowSide!==null?_.shadowSide:u[_.side],T.alphaMap=_.alphaMap,T.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,T.map=_.map,T.clipShadows=_.clipShadows,T.clippingPlanes=_.clippingPlanes,T.clipIntersection=_.clipIntersection,T.displacementMap=_.displacementMap,T.displacementScale=_.displacementScale,T.displacementBias=_.displacementBias,T.wireframeLinewidth=_.wireframeLinewidth,T.linewidth=_.linewidth,b.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let N=i.properties.get(T);N.light=b}return T}function y(w,_,b,C,T,P){if(w.visible===!1)return;if(w.layers.test(T)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===kr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let L=e.update(w),F=w.material;if(Array.isArray(F)){let G=L.groups;for(let B=0,K=G.length;B<K;B++){let V=G[B],X=F[V.materialIndex];if(X&&X.visible){let Q=E(w,X,C,P);w.onBeforeShadow(i,w,_,b,L,Q,V),i.renderBufferDirect(b,null,L,Q,w,V),w.onAfterShadow(i,w,_,b,L,Q,V)}}}else if(F.visible){let G=E(w,F,C,P);w.onBeforeShadow(i,w,_,b,L,G,null),i.renderBufferDirect(b,null,L,G,w,null),w.onAfterShadow(i,w,_,b,L,G,null)}}let R=w.children;for(let L=0,F=R.length;L<F;L++)y(R[L],_,b,C,T,P)}function M(w){w.target.removeEventListener("dispose",M);for(let b in c){let C=c[b],T=w.target.uuid;T in C&&(C[T].dispose(),delete C[T])}}}function Ww(i,e){function t(){let k=!1,ne=new Lt,j=null,he=new Lt(0,0,0,0);return{setMask:function(de){j!==de&&!k&&(i.colorMask(de,de,de,de),j=de)},setLocked:function(de){k=de},setClear:function(de,ye,Be,it,ue){ue===!0&&(de*=it,ye*=it,Be*=it),ne.set(de,ye,Be,it),he.equals(ne)===!1&&(i.clearColor(de,ye,Be,it),he.copy(ne))},reset:function(){k=!1,j=null,he.set(-1,0,0,0)}}}function n(){let k=!1,ne=!1,j=null,he=null,de=null;return{setReversed:function(ye){if(ne!==ye){let Be=e.get("EXT_clip_control");ye?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),ne=ye;let it=de;de=null,this.setClear(it)}},getReversed:function(){return ne},setTest:function(ye){ye?_e(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(ye){j!==ye&&!k&&(i.depthMask(ye),j=ye)},setFunc:function(ye){if(ne&&(ye=Um[ye]),he!==ye){switch(ye){case gl:i.depthFunc(i.NEVER);break;case vl:i.depthFunc(i.ALWAYS);break;case _l:i.depthFunc(i.LESS);break;case Mr:i.depthFunc(i.LEQUAL);break;case yl:i.depthFunc(i.EQUAL);break;case xl:i.depthFunc(i.GEQUAL);break;case bl:i.depthFunc(i.GREATER);break;case Sl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=ye}},setLocked:function(ye){k=ye},setClear:function(ye){de!==ye&&(de=ye,ne&&(ye=1-ye),i.clearDepth(ye))},reset:function(){k=!1,j=null,he=null,de=null,ne=!1}}}function s(){let k=!1,ne=null,j=null,he=null,de=null,ye=null,Be=null,it=null,ue=null;return{setTest:function(He){k||(He?_e(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(He){ne!==He&&!k&&(i.stencilMask(He),ne=He)},setFunc:function(He,Qe,Ee){(j!==He||he!==Qe||de!==Ee)&&(i.stencilFunc(He,Qe,Ee),j=He,he=Qe,de=Ee)},setOp:function(He,Qe,Ee){(ye!==He||Be!==Qe||it!==Ee)&&(i.stencilOp(He,Qe,Ee),ye=He,Be=Qe,it=Ee)},setLocked:function(He){k=He},setClear:function(He){ue!==He&&(i.clearStencil(He),ue=He)},reset:function(){k=!1,ne=null,j=null,he=null,de=null,ye=null,Be=null,it=null,ue=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},u={},d={},p=new WeakMap,f=[],g=null,m=!1,v=null,x=null,E=null,y=null,M=null,w=null,_=null,b=new ot(0,0,0),C=0,T=!1,P=null,N=null,R=null,L=null,F=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,K=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),B=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),B=K>=2);let X=null,Q={},fe=i.getParameter(i.SCISSOR_BOX),Pe=i.getParameter(i.VIEWPORT),Z=new Lt().fromArray(fe),ae=new Lt().fromArray(Pe);function Ie(k,ne,j,he){let de=new Uint8Array(4),ye=i.createTexture();i.bindTexture(k,ye),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<j;Be++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(ne+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return ye}let Ae={};Ae[i.TEXTURE_2D]=Ie(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=Ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[i.TEXTURE_2D_ARRAY]=Ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=Ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_e(i.DEPTH_TEST),a.setFunc(Mr),Re(!1),ge(zu),_e(i.CULL_FACE),pe(Bs);function _e(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function Fe(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function pt(k,ne){return d[k]!==ne?(i.bindFramebuffer(k,ne),d[k]=ne,k===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ne),k===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function Oe(k,ne){let j=f,he=!1;if(k){j=p.get(ne),j===void 0&&(j=[],p.set(ne,j));let de=k.textures;if(j.length!==de.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,Be=de.length;ye<Be;ye++)j[ye]=i.COLOR_ATTACHMENT0+ye;j.length=de.length,he=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,he=!0);he&&i.drawBuffers(j)}function $e(k){return g!==k?(i.useProgram(k),g=k,!0):!1}let je={[zs]:i.FUNC_ADD,[sm]:i.FUNC_SUBTRACT,[rm]:i.FUNC_REVERSE_SUBTRACT};je[am]=i.MIN,je[om]=i.MAX;let ie={[lm]:i.ZERO,[cm]:i.ONE,[hm]:i.SRC_COLOR,[Wu]:i.SRC_ALPHA,[gm]:i.SRC_ALPHA_SATURATE,[pm]:i.DST_COLOR,[dm]:i.DST_ALPHA,[um]:i.ONE_MINUS_SRC_COLOR,[Xu]:i.ONE_MINUS_SRC_ALPHA,[mm]:i.ONE_MINUS_DST_COLOR,[fm]:i.ONE_MINUS_DST_ALPHA,[vm]:i.CONSTANT_COLOR,[_m]:i.ONE_MINUS_CONSTANT_COLOR,[ym]:i.CONSTANT_ALPHA,[xm]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(k,ne,j,he,de,ye,Be,it,ue,He){if(k===Bs){m===!0&&(Fe(i.BLEND),m=!1);return}if(m===!1&&(_e(i.BLEND),m=!0),k!==im){if(k!==v||He!==T){if((x!==zs||M!==zs)&&(i.blendEquation(i.FUNC_ADD),x=zs,M=zs),He)switch(k){case Ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vu:i.blendFunc(i.ONE,i.ONE);break;case Hu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Je("WebGLState: Invalid blending: ",k);break}else switch(k){case Ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Hu:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gu:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",k);break}E=null,y=null,w=null,_=null,b.set(0,0,0),C=0,v=k,T=He}return}de=de||ne,ye=ye||j,Be=Be||he,(ne!==x||de!==M)&&(i.blendEquationSeparate(je[ne],je[de]),x=ne,M=de),(j!==E||he!==y||ye!==w||Be!==_)&&(i.blendFuncSeparate(ie[j],ie[he],ie[ye],ie[Be]),E=j,y=he,w=ye,_=Be),(it.equals(b)===!1||ue!==C)&&(i.blendColor(it.r,it.g,it.b,ue),b.copy(it),C=ue),v=k,T=!1}function ce(k,ne){k.side===mi?Fe(i.CULL_FACE):_e(i.CULL_FACE);let j=k.side===_n;ne&&(j=!j),Re(j),k.blending===Ur&&k.transparent===!1?pe(Bs):pe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let he=k.stencilWrite;o.setTest(he),he&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ne(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?_e(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(k){P!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),P=k)}function ge(k){k!==em?(_e(i.CULL_FACE),k!==N&&(k===zu?i.cullFace(i.BACK):k===tm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),N=k}function ze(k){k!==R&&(B&&i.lineWidth(k),R=k)}function Ne(k,ne,j){k?(_e(i.POLYGON_OFFSET_FILL),(L!==ne||F!==j)&&(L=ne,F=j,a.getReversed()&&(ne=-ne,j=-j),i.polygonOffset(ne,j))):Fe(i.POLYGON_OFFSET_FILL)}function Ye(k){k?_e(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function Ze(k){k===void 0&&(k=i.TEXTURE0+G-1),X!==k&&(i.activeTexture(k),X=k)}function nt(k,ne,j){j===void 0&&(X===null?j=i.TEXTURE0+G-1:j=X);let he=Q[j];he===void 0&&(he={type:void 0,texture:void 0},Q[j]=he),(he.type!==k||he.texture!==ne)&&(X!==j&&(i.activeTexture(j),X=j),i.bindTexture(k,ne||Ae[k]),he.type=k,he.texture=ne)}function U(){let k=Q[X];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Tt(){try{i.compressedTexImage2D(...arguments)}catch(k){Je("WebGLState:",k)}}function st(){try{i.compressedTexImage3D(...arguments)}catch(k){Je("WebGLState:",k)}}function mt(){try{i.texSubImage2D(...arguments)}catch(k){Je("WebGLState:",k)}}function be(){try{i.texSubImage3D(...arguments)}catch(k){Je("WebGLState:",k)}}function Pt(){try{i.compressedTexSubImage2D(...arguments)}catch(k){Je("WebGLState:",k)}}function Ve(){try{i.compressedTexSubImage3D(...arguments)}catch(k){Je("WebGLState:",k)}}function qe(){try{i.texStorage2D(...arguments)}catch(k){Je("WebGLState:",k)}}function I(){try{i.texStorage3D(...arguments)}catch(k){Je("WebGLState:",k)}}function S(){try{i.texImage2D(...arguments)}catch(k){Je("WebGLState:",k)}}function q(){try{i.texImage3D(...arguments)}catch(k){Je("WebGLState:",k)}}function oe(k){return u[k]!==void 0?u[k]:i.getParameter(k)}function re(k,ne){u[k]!==ne&&(i.pixelStorei(k,ne),u[k]=ne)}function ve(k){Z.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Z.copy(k))}function Se(k){ae.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),ae.copy(k))}function ee(k,ne){let j=c.get(ne);j===void 0&&(j=new WeakMap,c.set(ne,j));let he=j.get(k);he===void 0&&(he=i.getUniformBlockIndex(ne,k.name),i.uniformBlockBinding(ne,he,he),j.set(k,he))}function te(k,ne,j){let de=c.get(ne).get(k);l[de]!==j&&(i.bindBufferBase(i.UNIFORM_BUFFER,de,j),l[de]=j)}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},X=null,Q={},d={},l={},p=new WeakMap,f=[],g=null,m=!1,v=null,x=null,E=null,y=null,M=null,w=null,_=null,b=new ot(0,0,0),C=0,T=!1,P=null,N=null,R=null,L=null,F=null,Z.set(0,0,i.canvas.width,i.canvas.height),ae.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_e,disable:Fe,bindFramebuffer:pt,drawBuffers:Oe,useProgram:$e,setBlending:pe,setMaterial:ce,setFlipSided:Re,setCullFace:ge,setLineWidth:ze,setPolygonOffset:Ne,setScissorTest:Ye,activeTexture:Ze,bindTexture:nt,unbindTexture:U,compressedTexImage2D:Tt,compressedTexImage3D:st,texImage2D:S,texImage3D:q,pixelStorei:re,getParameter:oe,updateUBOMapping:ee,uniformBlockBinding:te,texStorage2D:qe,texStorage3D:I,texSubImage2D:mt,texSubImage3D:be,compressedTexSubImage2D:Pt,compressedTexSubImage3D:Ve,scissor:ve,viewport:Se,reset:me}}function Xw(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,h=new WeakMap,u=new Set,d,p=new WeakMap,f=new Set,g=new FinalizationRegistry(I=>f.delete(I)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,S){return m?new OffscreenCanvas(I,S):Pa("canvas")}function x(I,S,q){let oe=1,re=qe(I);if((re.width>q||re.height>q)&&(oe=q/Math.max(re.width,re.height)),oe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ve=Math.floor(oe*re.width),Se=Math.floor(oe*re.height);d===void 0&&(d=v(ve,Se));let ee=S?v(ve,Se):d;return ee.width=ve,ee.height=Se,ee.getContext("2d").drawImage(I,0,0,ve,Se),Xe("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ve+"x"+Se+")."),ee}else return"data"in I&&Xe("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),I;return I}function E(I){return I.generateMipmaps}function y(I){i.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(I,S,q,oe,re,ve=!1){if(I!==null){if(i[I]!==void 0)return i[I];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Se;oe&&(Se=e.get("EXT_texture_norm16"),Se||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=S;if(S===i.RED&&(q===i.FLOAT&&(ee=i.R32F),q===i.HALF_FLOAT&&(ee=i.R16F),q===i.UNSIGNED_BYTE&&(ee=i.R8),q===i.UNSIGNED_SHORT&&Se&&(ee=Se.R16_EXT),q===i.SHORT&&Se&&(ee=Se.R16_SNORM_EXT)),S===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ee=i.R8UI),q===i.UNSIGNED_SHORT&&(ee=i.R16UI),q===i.UNSIGNED_INT&&(ee=i.R32UI),q===i.BYTE&&(ee=i.R8I),q===i.SHORT&&(ee=i.R16I),q===i.INT&&(ee=i.R32I)),S===i.RG&&(q===i.FLOAT&&(ee=i.RG32F),q===i.HALF_FLOAT&&(ee=i.RG16F),q===i.UNSIGNED_BYTE&&(ee=i.RG8),q===i.UNSIGNED_SHORT&&Se&&(ee=Se.RG16_EXT),q===i.SHORT&&Se&&(ee=Se.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ee=i.RG8UI),q===i.UNSIGNED_SHORT&&(ee=i.RG16UI),q===i.UNSIGNED_INT&&(ee=i.RG32UI),q===i.BYTE&&(ee=i.RG8I),q===i.SHORT&&(ee=i.RG16I),q===i.INT&&(ee=i.RG32I)),S===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),q===i.UNSIGNED_INT&&(ee=i.RGB32UI),q===i.BYTE&&(ee=i.RGB8I),q===i.SHORT&&(ee=i.RGB16I),q===i.INT&&(ee=i.RGB32I)),S===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),q===i.UNSIGNED_INT&&(ee=i.RGBA32UI),q===i.BYTE&&(ee=i.RGBA8I),q===i.SHORT&&(ee=i.RGBA16I),q===i.INT&&(ee=i.RGBA32I)),S===i.RGB&&(q===i.UNSIGNED_SHORT&&Se&&(ee=Se.RGB16_EXT),q===i.SHORT&&Se&&(ee=Se.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),S===i.RGBA){let te=ve?Ca:dt.getTransfer(re);q===i.FLOAT&&(ee=i.RGBA32F),q===i.HALF_FLOAT&&(ee=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ee=te===yt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&Se&&(ee=Se.RGBA16_EXT),q===i.SHORT&&Se&&(ee=Se.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function _(I,S){let q;return I?S===null||S===Jn||S===Hs?q=i.DEPTH24_STENCIL8:S===Kn?q=i.DEPTH32F_STENCIL8:S===Or&&(q=i.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Jn||S===Hs?q=i.DEPTH_COMPONENT24:S===Kn?q=i.DEPTH_COMPONENT32F:S===Or&&(q=i.DEPTH_COMPONENT16),q}function b(I,S){return E(I)===!0||I.isFramebufferTexture&&I.minFilter!==jt&&I.minFilter!==vn?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function C(I){let S=new WeakRef(I);n.get(I).__ref=S,f.add(S),g.register(I,S,S)}function T(I){let S=n.get(I).__ref;S!==void 0&&(f.delete(S),g.unregister(S))}function P(I){R(I.target)}function N(I){L(I.target)}function R(I){I.removeEventListener("dispose",P),T(I),G(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&u.delete(I)}function L(I){I.removeEventListener("dispose",N),T(I),K(I)}function F(){for(let I of f){let S=I.deref();S!==void 0&&(S.isRenderTarget===!0?L(S):R(S))}f.clear(),u.clear()}function G(I){let S=n.get(I);if(S.__webglInit===void 0)return;let q=I.source,oe=p.get(q);if(oe){let re=oe[S.__cacheKey];re.usedTimes--,re.usedTimes===0&&B(I),Object.keys(oe).length===0&&p.delete(q)}n.remove(I)}function B(I){let S=n.get(I);i.deleteTexture(S.__webglTexture);let q=I.source,oe=p.get(q);delete oe[S.__cacheKey],a.memory.textures--}function K(I){let S=n.get(I);S.__depthDisposeCallback&&S.__depthDisposeCallback();let q=I.depthTexture;if(q&&q.renderTarget===I&&R(q),I.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(S.__webglFramebuffer[re]))for(let ve=0;ve<S.__webglFramebuffer[re].length;ve++)i.deleteFramebuffer(S.__webglFramebuffer[re][ve]);else i.deleteFramebuffer(S.__webglFramebuffer[re]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[re])}else{if(Array.isArray(S.__webglFramebuffer))for(let re=0;re<S.__webglFramebuffer.length;re++)i.deleteFramebuffer(S.__webglFramebuffer[re]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let re=0;re<S.__webglColorRenderbuffer.length;re++)S.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[re]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let oe=I.textures;for(let re=0,ve=oe.length;re<ve;re++){let Se=n.get(oe[re]);Se.__webglTexture&&(i.deleteTexture(Se.__webglTexture),a.memory.textures--),n.remove(oe[re])}n.remove(I)}let V=0;function X(){V=0}function Q(){return V}function fe(I){V=I}function Pe(){let I=V;return I>=s.maxTextures&&Xe("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,I}function Z(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.mipmapsAutoUpdate),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function ae(I,S){let q=n.get(I);if(I.isVideoTexture&&Pt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&q.__version!==I.version){let oe=I.image;if(oe===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(q,I,S);return}}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+S)}function Ie(I,S){let q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){ce(q,I,S);return}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+S)}function Ae(I,S){let q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){ce(q,I,S);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+S)}function _e(I,S){let q=n.get(I);if(I.version>0&&q.__version!==I.version){Re(q,I,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+S)}let Fe={[Ml]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[wl]:i.MIRRORED_REPEAT},pt={[jt]:i.NEAREST,[Mm]:i.NEAREST_MIPMAP_NEAREST,[no]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[nc]:i.LINEAR_MIPMAP_NEAREST,[Bi]:i.LINEAR_MIPMAP_LINEAR},Oe={[Tm]:i.NEVER,[hd]:i.ALWAYS,[Rm]:i.LESS,[ld]:i.LEQUAL,[Cm]:i.EQUAL,[cd]:i.GEQUAL,[Pm]:i.GREATER,[Im]:i.NOTEQUAL};function $e(I,S){if(S.type===Kn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===vn||S.magFilter===nc||S.magFilter===no||S.magFilter===Bi||S.minFilter===vn||S.minFilter===nc||S.minFilter===no||S.minFilter===Bi)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Fe[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Fe[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Fe[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,pt[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,pt[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Oe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===jt||S.minFilter!==no&&S.minFilter!==Bi||S.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function je(I,S){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",P),C(S));let oe=S.source,re=p.get(oe);re===void 0&&(re={},p.set(oe,re));let ve=Z(S);if(ve!==I.__cacheKey){re[ve]===void 0&&(re[ve]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),re[ve].usedTimes++;let Se=re[I.__cacheKey];Se!==void 0&&(re[I.__cacheKey].usedTimes--,Se.usedTimes===0&&B(S)),I.__cacheKey=ve,I.__webglTexture=re[ve].texture}return q}function ie(I,S,q){return Math.floor(Math.floor(I/q)/S)}function pe(I,S,q,oe){let ve=I.updateRanges;if(ve.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,q,oe,S.data);else{ve.sort((k,ne)=>k.start-ne.start);let Se=0;for(let k=1;k<ve.length;k++){let ne=ve[Se],j=ve[k],he=ne.start+ne.count,de=ie(j.start,S.width,4),ye=ie(ne.start,S.width,4);j.start<=he+1&&de===ye&&ie(j.start+j.count-1,S.width,4)===de?ne.count=Math.max(ne.count,j.start+j.count-ne.start):(++Se,ve[Se]=j)}ve.length=Se+1;let ee=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let k=0,ne=ve.length;k<ne;k++){let j=ve[k],he=Math.floor(j.start/4),de=Math.ceil(j.count/4),ye=he%S.width,Be=Math.floor(he/S.width),it=de,ue=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(i.UNPACK_SKIP_ROWS,Be),t.texSubImage2D(i.TEXTURE_2D,0,ye,Be,it,ue,q,oe,S.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ee),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}function ce(I,S,q){let oe=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(oe=i.TEXTURE_3D);let re=je(I,S),ve=S.source;t.bindTexture(oe,I.__webglTexture,i.TEXTURE0+q);let Se=n.get(ve);if(ve.version!==Se.__version||re===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let ue=dt.getPrimaries(dt.workingColorSpace),He=S.colorSpace===Vi?null:dt.getPrimaries(S.colorSpace),Qe=S.colorSpace===Vi||ue===He?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let te=x(S.image,!1,s.maxTextureSize);te=Ve(S,te);let me=r.convert(S.format,S.colorSpace),k=r.convert(S.type),ne=w(S.internalFormat,me,k,S.normalized,S.colorSpace,S.isVideoTexture);$e(oe,S);let j,he=S.mipmaps,de=S.isVideoTexture!==!0,ye=Se.__version===void 0||re===!0,Be=ve.dataReady,it=b(S,te);if(S.isDepthTexture)ne=_(S.format===zi,S.type),ye&&(de?t.texStorage2D(i.TEXTURE_2D,1,ne,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,ne,te.width,te.height,0,me,k,null));else if(S.isDataTexture)if(he.length>0){de&&ye&&t.texStorage2D(i.TEXTURE_2D,it,ne,he[0].width,he[0].height);for(let ue=0,He=he.length;ue<He;ue++)j=he[ue],de?Be&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,j.width,j.height,me,k,j.data):t.texImage2D(i.TEXTURE_2D,ue,ne,j.width,j.height,0,me,k,j.data);S.generateMipmaps=!1}else de?(ye&&t.texStorage2D(i.TEXTURE_2D,it,ne,te.width,te.height),Be&&pe(S,te,me,k)):t.texImage2D(i.TEXTURE_2D,0,ne,te.width,te.height,0,me,k,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){de&&ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,it,ne,he[0].width,he[0].height,te.depth);for(let ue=0,He=he.length;ue<He;ue++)if(j=he[ue],S.format!==Qn)if(me!==null)if(de){if(Be)if(S.layerUpdates.size>0){let Qe=xd(j.width,j.height,S.format,S.type);for(let Ee of S.layerUpdates){let vt=j.data.subarray(Ee*Qe/j.data.BYTES_PER_ELEMENT,(Ee+1)*Qe/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,Ee,j.width,j.height,1,me,vt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,j.width,j.height,te.depth,me,j.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,ne,j.width,j.height,te.depth,0,j.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?Be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,j.width,j.height,te.depth,me,k,j.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,ne,j.width,j.height,te.depth,0,me,k,j.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{de&&ye&&t.texStorage2D(i.TEXTURE_2D,it,ne,he[0].width,he[0].height);for(let ue=0,He=he.length;ue<He;ue++)j=he[ue],S.format!==Qn?me!==null?de?Be&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,j.width,j.height,me,j.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,ne,j.width,j.height,0,j.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?Be&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,j.width,j.height,me,k,j.data):t.texImage2D(i.TEXTURE_2D,ue,ne,j.width,j.height,0,me,k,j.data)}else if(S.isDataArrayTexture)if(de){if(ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,it,ne,te.width,te.height,te.depth),Be)if(S.layerUpdates.size>0){let ue=xd(te.width,te.height,S.format,S.type);for(let He of S.layerUpdates){let Qe=te.data.subarray(He*ue/te.data.BYTES_PER_ELEMENT,(He+1)*ue/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,He,te.width,te.height,1,me,k,Qe)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,me,k,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ne,te.width,te.height,te.depth,0,me,k,te.data);else if(S.isData3DTexture)de?(ye&&t.texStorage3D(i.TEXTURE_3D,it,ne,te.width,te.height,te.depth),Be&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,me,k,te.data)):t.texImage3D(i.TEXTURE_3D,0,ne,te.width,te.height,te.depth,0,me,k,te.data);else if(S.isFramebufferTexture){if(ye)if(de)t.texStorage2D(i.TEXTURE_2D,it,ne,te.width,te.height);else{let ue=te.width,He=te.height;for(let Qe=0;Qe<it;Qe++)t.texImage2D(i.TEXTURE_2D,Qe,ne,ue,He,0,me,k,null),ue>>=1,He>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let ue=i.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),te.parentNode!==ue){ue.appendChild(te),u.add(S),ue.onpaint=He=>{let Qe=He.changedElements;for(let Ee of u)Qe.includes(Ee.image)&&(Ee.needsUpdate=!0)},ue.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{let Qe=i.RGBA,Ee=i.RGBA,vt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Qe,Ee,vt,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(he.length>0){if(de&&ye){let ue=qe(he[0]);t.texStorage2D(i.TEXTURE_2D,it,ne,ue.width,ue.height)}for(let ue=0,He=he.length;ue<He;ue++)j=he[ue],de?Be&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,me,k,j):t.texImage2D(i.TEXTURE_2D,ue,ne,me,k,j);S.generateMipmaps=!1}else if(de){if(ye){let ue=qe(te);t.texStorage2D(i.TEXTURE_2D,it,ne,ue.width,ue.height)}Be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,k,te)}else t.texImage2D(i.TEXTURE_2D,0,ne,me,k,te);E(S)&&S.mipmapsAutoUpdate===!0&&y(oe),Se.__version=ve.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Re(I,S,q){if(S.image.length!==6)return;let oe=je(I,S),re=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+q);let ve=n.get(re);if(re.version!==ve.__version||oe===!0){t.activeTexture(i.TEXTURE0+q);let Se=dt.getPrimaries(dt.workingColorSpace),ee=S.colorSpace===Vi?null:dt.getPrimaries(S.colorSpace),te=S.colorSpace===Vi||Se===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let me=S.isCompressedTexture||S.image[0].isCompressedTexture,k=S.image[0]&&S.image[0].isDataTexture,ne=[];for(let Ee=0;Ee<6;Ee++)!me&&!k?ne[Ee]=x(S.image[Ee],!0,s.maxCubemapSize):ne[Ee]=k?S.image[Ee].image:S.image[Ee],ne[Ee]=Ve(S,ne[Ee]);let j=ne[0],he=r.convert(S.format,S.colorSpace),de=r.convert(S.type),ye=w(S.internalFormat,he,de,S.normalized,S.colorSpace),Be=S.isVideoTexture!==!0,it=ve.__version===void 0||oe===!0,ue=re.dataReady,He=b(S,j);$e(i.TEXTURE_CUBE_MAP,S);let Qe;if(S.isDepthTexture){if(ye=_(S.format===zi,S.type),it)if(Be)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ye,j.width,j.height);else for(let Ee=0;Ee<6;Ee++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ye,j.width,j.height,0,he,de,null)}else if(me){Be&&it&&t.texStorage2D(i.TEXTURE_CUBE_MAP,He,ye,j.width,j.height);for(let Ee=0;Ee<6;Ee++){Qe=ne[Ee].mipmaps;for(let vt=0;vt<Qe.length;vt++){let Ot=Qe[vt];S.format!==Qn?he!==null?Be?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,vt,0,0,Ot.width,Ot.height,he,Ot.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,vt,ye,Ot.width,Ot.height,0,Ot.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,vt,0,0,Ot.width,Ot.height,he,de,Ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,vt,ye,Ot.width,Ot.height,0,he,de,Ot.data)}}}else{if(Qe=S.mipmaps,Be&&it){Qe.length>0&&He++;let Ee=qe(ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,He,ye,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(k){Be?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,ne[Ee].width,ne[Ee].height,he,de,ne[Ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ye,ne[Ee].width,ne[Ee].height,0,he,de,ne[Ee].data);for(let vt=0;vt<Qe.length;vt++){let Yt=Qe[vt].image[Ee].image;Be?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,vt+1,0,0,Yt.width,Yt.height,he,de,Yt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,vt+1,ye,Yt.width,Yt.height,0,he,de,Yt.data)}}else{Be?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,he,de,ne[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ye,he,de,ne[Ee]);for(let vt=0;vt<Qe.length;vt++){let Ot=Qe[vt];Be?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,vt+1,0,0,he,de,Ot.image[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,vt+1,ye,he,de,Ot.image[Ee])}}}E(S)&&S.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),ve.__version=re.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function ge(I,S,q,oe,re,ve){let Se=r.convert(q.format,q.colorSpace),ee=r.convert(q.type),te=w(q.internalFormat,Se,ee,q.normalized,q.colorSpace),me=n.get(S),k=n.get(q);if(k.__renderTarget=S,!me.__hasExternalTextures){let ne=Math.max(1,S.width>>ve),j=Math.max(1,S.height>>ve);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,ve,te,ne,j,S.depth,0,Se,ee,null):t.texImage2D(re,ve,te,ne,j,0,Se,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),be(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,re,k.__webglTexture,0,mt(S)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,re,k.__webglTexture,ve),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(I,S,q){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){let oe=S.depthTexture,re=oe&&oe.isDepthTexture?oe.type:null,ve=_(S.stencilBuffer,re),Se=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;be(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(S),ve,S.width,S.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(S),ve,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ve,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,I)}else{let oe=S.textures;for(let re=0;re<oe.length;re++){let ve=oe[re],Se=r.convert(ve.format,ve.colorSpace),ee=r.convert(ve.type),te=w(ve.internalFormat,Se,ee,ve.normalized,ve.colorSpace);be(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(S),te,S.width,S.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(S),te,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,te,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(I,S,q){let oe=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(S.depthTexture);re.__renderTarget=S;let ve=oe?S.depthTexture.image[0]:S.depthTexture.image;(!re.__webglTexture||ve.width!==S.width||ve.height!==S.height)&&(ve.width=S.width,ve.height=S.height,S.depthTexture.needsUpdate=!0),oe?_e(S.depthTexture,0):ae(S.depthTexture,0);let Se=re.__webglTexture,ee=mt(S),te=oe?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,me=S.depthTexture.format===zi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ni)be(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,te,Se,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,me,te,Se,0);else if(S.depthTexture.format===zi)be(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,te,Se,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,me,te,Se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(I){let S=n.get(I),q=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let oe=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),oe){let re=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,oe.removeEventListener("dispose",re)};oe.addEventListener("dispose",re),S.__depthDisposeCallback=re}S.__boundDepthTexture=oe}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if(q)for(let oe=0;oe<6;oe++)Ne(S.__webglFramebuffer[oe],I,oe);else I.texture.mipmaps.length>0?Ne(S.__webglFramebuffer[0],I,0):Ne(S.__webglFramebuffer,I,0);else if(q){S.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[oe]),S.__webglDepthbuffer[oe]===void 0)S.__webglDepthbuffer[oe]=i.createRenderbuffer(),ze(S.__webglDepthbuffer[oe],I,!1);else{let re=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=S.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,ve)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ze(S.__webglDepthbuffer,I,!1);else{let re=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,ve)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(I,S,q){let oe=n.get(I);S!==void 0&&ge(oe.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Ye(I)}function nt(I){let S=I.texture,q=n.get(I),oe=n.get(S);I.addEventListener("dispose",N),C(I);let re=I.textures,ve=I.isWebGLCubeRenderTarget===!0,Se=re.length>1;if(Se||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=S.version,a.memory.textures++),ve){q.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(S.mipmaps.length>0){q.__webglFramebuffer[ee]=[];for(let te=0;te<S.mipmaps.length;te++)q.__webglFramebuffer[ee][te]=i.createFramebuffer()}else q.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(S.mipmaps.length>0){q.__webglFramebuffer=[];for(let ee=0;ee<S.mipmaps.length;ee++)q.__webglFramebuffer[ee]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Se)for(let ee=0,te=re.length;ee<te;ee++){let me=n.get(re[ee]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&be(I)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ee=0;ee<re.length;ee++){let te=re[ee];q.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ee]);let me=r.convert(te.format,te.colorSpace),k=r.convert(te.type),ne=w(te.internalFormat,me,k,te.normalized,te.colorSpace,I.isXRRenderTarget===!0),j=mt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,j,ne,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,q.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(q.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ve){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),$e(i.TEXTURE_CUBE_MAP,S);for(let ee=0;ee<6;ee++)if(S.mipmaps.length>0)for(let te=0;te<S.mipmaps.length;te++)ge(q.__webglFramebuffer[ee][te],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,te);else ge(q.__webglFramebuffer[ee],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);E(S)?y(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(Se){for(let ee=0,te=re.length;ee<te;ee++){let me=re[ee],k=n.get(me),ne=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ne=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,k.__webglTexture),$e(ne,me),ge(q.__webglFramebuffer,I,me,i.COLOR_ATTACHMENT0+ee,ne,0),E(me)&&y(ne)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ee=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,oe.__webglTexture),$e(ee,S),S.mipmaps.length>0)for(let te=0;te<S.mipmaps.length;te++)ge(q.__webglFramebuffer[te],I,S,i.COLOR_ATTACHMENT0,ee,te);else ge(q.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,ee,0);E(S)?y(ee):S.mipmaps.length>0&&i.texParameteri(ee,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&Ye(I)}function U(I){let S=I.textures;for(let q=0,oe=S.length;q<oe;q++){let re=S[q];if(E(re)&&re.mipmapsAutoUpdate===!0){let ve=M(I),Se=n.get(re).__webglTexture;t.bindTexture(ve,Se),y(ve),t.unbindTexture()}}}let Tt=[];function st(I){if(I.samples>0){if(be(I)===!1){let S=I.textures,q=I.width,oe=I.height,re=i.COLOR_BUFFER_BIT,ve=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(I),ee=S.length>1;if(ee)for(let me=0;me<S.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let me=0;me<S.length;me++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[me]);let k=n.get(S[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,k,0)}i.blitFramebuffer(0,0,q,oe,0,0,q,oe,re,i.NEAREST),l===!0&&(Tt.length=0,Tt.push(i.COLOR_ATTACHMENT0+me),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Tt.push(ve),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let me=0;me<S.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,Se.__webglColorRenderbuffer[me]);let k=n.get(S[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,k,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function mt(I){return Math.min(s.maxSamples,I.samples)}function be(I){let S=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pt(I){let S=a.render.frame;h.get(I)!==S&&(h.set(I,S),I.update())}function Ve(I,S){let q=I.colorSpace,oe=I.format,re=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==Ra&&q!==Vi&&(dt.getTransfer(q)===yt?(oe!==Qn||re!==En)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",q)),S}function qe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=Pe,this.resetTextureUnits=X,this.getTextureUnits=Q,this.setTextureUnits=fe,this.setTexture2D=ae,this.setTexture2DArray=Ie,this.setTexture3D=Ae,this.setTextureCube=_e,this.rebindTextures=Ze,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=be,this.dispose=F}function qw(i,e){function t(n,s=Vi){let r,a=dt.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===rc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===id)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===td)return i.BYTE;if(n===nd)return i.SHORT;if(n===Or)return i.UNSIGNED_SHORT;if(n===ic)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===jn)return i.HALF_FLOAT;if(n===rd)return i.ALPHA;if(n===ad)return i.RGB;if(n===Qn)return i.RGBA;if(n===Ni)return i.DEPTH_COMPONENT;if(n===zi)return i.DEPTH_STENCIL;if(n===od)return i.RED;if(n===ac)return i.RED_INTEGER;if(n===ds)return i.RG;if(n===oc)return i.RG_INTEGER;if(n===lc)return i.RGBA_INTEGER;if(n===io||n===so||n===ro||n===ao)if(a===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cc||n===hc||n===uc||n===dc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===cc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fc||n===pc||n===mc||n===gc||n===vc||n===oo||n===_c)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fc||n===pc)return a===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===mc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===gc)return r.COMPRESSED_R11_EAC;if(n===vc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===oo)return r.COMPRESSED_RG11_EAC;if(n===_c)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===yc||n===xc||n===bc||n===Sc||n===Mc||n===wc||n===Ec||n===Ac||n===Tc||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ec)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ac)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ic)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Dc||n===Nc||n===kc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Dc)return a===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uc||n===Fc||n===lo||n===Oc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Uc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var $w=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Nd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Oa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new pi({vertexShader:$w,fragmentShader:Yw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hn(new Fs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kd=class extends ui{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,g=typeof XRWebGLBinding<"u",m=new Nd,v={},x=t.getContextAttributes(),E=null,y=null,M=[],w=[],_=new we,b=null,C=null,T=new gn;T.viewport=new Lt;let P=new gn;P.viewport=new Lt;let N=[T,P],R=new jl,L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ae=M[Z];return ae===void 0&&(ae=new Rr,M[Z]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Z){let ae=M[Z];return ae===void 0&&(ae=new Rr,M[Z]=ae),ae.getGripSpace()},this.getHand=function(Z){let ae=M[Z];return ae===void 0&&(ae=new Rr,M[Z]=ae),ae.getHandSpace()};function G(Z){let ae=w.indexOf(Z.inputSource);if(ae===-1)return;let Ie=M[ae];Ie!==void 0&&(Ie.update(Z.inputSource,Z.frame,c||a),Ie.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",K);for(let Z=0;Z<M.length;Z++){let ae=w[Z];ae!==null&&(w[Z]=null,M[Z].disconnect(ae))}L=null,F=null,m.reset();for(let Z in v)delete v[Z];if(e.setRenderTarget(E),p=null,d=null,u=null,s=null,y=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(_.width,_.height,!1),C!==null){let Z=C.camera;Z.fov=C.fov,Z.zoom=C.zoom,Z.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",B),s.addEventListener("inputsourceschange",K),x.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(_),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,Ae=null,_e=null;x.depth&&(_e=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ie=x.stencil?zi:Ni,Ae=x.stencil?Hs:Jn);let Fe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Fe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Nn(d.textureWidth,d.textureHeight,{format:Qn,type:En,depthTexture:new Fi(d.textureWidth,d.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ie={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ie),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Nn(p.framebufferWidth,p.framebufferHeight,{format:Qn,type:En,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Pe.setContext(s),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(Z){for(let ae=0;ae<Z.removed.length;ae++){let Ie=Z.removed[ae],Ae=w.indexOf(Ie);Ae>=0&&(w[Ae]=null,M[Ae].disconnect(Ie))}for(let ae=0;ae<Z.added.length;ae++){let Ie=Z.added[ae],Ae=w.indexOf(Ie);if(Ae===-1){for(let Fe=0;Fe<M.length;Fe++)if(Fe>=w.length){w.push(Ie),Ae=Fe;break}else if(w[Fe]===null){w[Fe]=Ie,Ae=Fe;break}if(Ae===-1)break}let _e=M[Ae];_e&&_e.connect(Ie)}}function V(Z,ae){ae===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ae.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ae=Z.near,Ie=Z.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(Ie=m.depthFar)),R.near=P.near=T.near=ae,R.far=P.far=T.far=Ie,(L!==R.near||F!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),L=R.near,F=R.far),R.layers.mask=Z.layers.mask|6,T.layers.mask=R.layers.mask&-5,P.layers.mask=R.layers.mask&-3;let Ae=Z.parent,_e=R.cameras;V(R,Ae);for(let Fe=0;Fe<_e.length;Fe++)V(_e[Fe],Ae);R.projectionMatrix.copy(T.projectionMatrix),R.projectionMatrixInverse.copy(T.projectionMatrixInverse),C===null&&Z.isPerspectiveCamera&&(C={camera:Z,fov:Z.fov,zoom:Z.zoom}),X(Z,R,Ae)};function X(Z,ae,Ie){Ie===null?Z.matrix.copy(ae.matrixWorld):(Z.matrix.copy(Ie.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ae.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ar*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(R)},this.getCameraTexture=function(Z){return v[Z]};let Q=null;function fe(Z,ae){if(h=ae.getViewerPose(c||a),f=ae,h!==null){let Ie=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Ae=!1;Ie.length!==R.cameras.length&&(R.cameras.length=0,Ae=!0);for(let Oe=0;Oe<Ie.length;Oe++){let $e=Ie[Oe],je=null;if(p!==null)je=p.getViewport($e);else{let pe=u.getViewSubImage(d,$e);je=pe.viewport,Oe===0&&(e.setRenderTargetTextures(y,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(y))}let ie=N[Oe];ie===void 0&&(ie=new gn,ie.layers.enable(Oe),ie.viewport=new Lt,N[Oe]=ie),ie.matrix.fromArray($e.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray($e.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(je.x,je.y,je.width,je.height),Oe===0&&(R.matrix.copy(ie.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Ae===!0&&R.cameras.push(ie)}let _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){u=n.getBinding();let Oe=u.getDepthInformation(Ie[0]);Oe&&Oe.isValid&&Oe.texture&&m.init(Oe,s.renderState)}if(_e&&_e.includes("camera-access")&&g){e.state.unbindTexture(),u=n.getBinding();for(let Oe=0;Oe<Ie.length;Oe++){let $e=Ie[Oe].camera;if($e){let je=v[$e];je||(je=new Oa,v[$e]=je);let ie=u.getCameraImage($e);je.sourceTexture=ie}}}}for(let Ie=0;Ie<M.length;Ie++){let Ae=w[Ie],_e=M[Ie];Ae!==null&&_e!==void 0&&_e.update(Ae,ae,c||a)}Q&&Q(Z,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),f=null}let Pe=new pg;Pe.setAnimationLoop(fe),this.setAnimationLoop=function(Z){Q=Z},this.dispose=function(){}}},Zw=new Ct,wg=new tt;wg.set(-1,0,0,0,1,0,0,0,1);function Jw(i,e){function t(m,v){m.matrixAutoUpdate===!0&&m.updateMatrix(),v.value.copy(m.matrix)}function n(m,v){v.color.getRGB(m.fogColor.value,vd(i)),v.isFog?(m.fogNear.value=v.near,m.fogFar.value=v.far):v.isFogExp2&&(m.fogDensity.value=v.density)}function s(m,v,x,E,y){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?r(m,v):v.isMeshLambertMaterial?(r(m,v),v.envMap&&(m.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(r(m,v),u(m,v)):v.isMeshPhongMaterial?(r(m,v),h(m,v),v.envMap&&(m.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(r(m,v),d(m,v),v.isMeshPhysicalMaterial&&p(m,v,y)):v.isMeshMatcapMaterial?(r(m,v),f(m,v)):v.isMeshDepthMaterial?r(m,v):v.isMeshDistanceMaterial?(r(m,v),g(m,v)):v.isMeshNormalMaterial?r(m,v):v.isLineBasicMaterial?(a(m,v),v.isLineDashedMaterial&&o(m,v)):v.isPointsMaterial?l(m,v,x,E):v.isSpriteMaterial?c(m,v):v.isShadowMaterial?(m.color.value.copy(v.color),m.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function r(m,v){m.opacity.value=v.opacity,v.color&&m.diffuse.value.copy(v.color),v.emissive&&m.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(m.map.value=v.map,t(v.map,m.mapTransform)),v.alphaMap&&(m.alphaMap.value=v.alphaMap,t(v.alphaMap,m.alphaMapTransform)),v.bumpMap&&(m.bumpMap.value=v.bumpMap,t(v.bumpMap,m.bumpMapTransform),m.bumpScale.value=v.bumpScale,v.side===_n&&(m.bumpScale.value*=-1)),v.normalMap&&(m.normalMap.value=v.normalMap,t(v.normalMap,m.normalMapTransform),m.normalScale.value.copy(v.normalScale),v.side===_n&&m.normalScale.value.negate()),v.displacementMap&&(m.displacementMap.value=v.displacementMap,t(v.displacementMap,m.displacementMapTransform),m.displacementScale.value=v.displacementScale,m.displacementBias.value=v.displacementBias),v.emissiveMap&&(m.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,m.emissiveMapTransform)),v.specularMap&&(m.specularMap.value=v.specularMap,t(v.specularMap,m.specularMapTransform)),v.alphaTest>0&&(m.alphaTest.value=v.alphaTest);let x=e.get(v),E=x.envMap,y=x.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(Zw.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(wg),m.reflectivity.value=v.reflectivity,m.ior.value=v.ior,m.refractionRatio.value=v.refractionRatio),v.lightMap&&(m.lightMap.value=v.lightMap,m.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,m.lightMapTransform)),v.aoMap&&(m.aoMap.value=v.aoMap,m.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,m.aoMapTransform))}function a(m,v){m.diffuse.value.copy(v.color),m.opacity.value=v.opacity,v.map&&(m.map.value=v.map,t(v.map,m.mapTransform))}function o(m,v){m.dashSize.value=v.dashSize,m.totalSize.value=v.dashSize+v.gapSize,m.scale.value=v.scale}function l(m,v,x,E){m.diffuse.value.copy(v.color),m.opacity.value=v.opacity,m.size.value=v.size*x,m.scale.value=E*.5,v.map&&(m.map.value=v.map,t(v.map,m.uvTransform)),v.alphaMap&&(m.alphaMap.value=v.alphaMap,t(v.alphaMap,m.alphaMapTransform)),v.alphaTest>0&&(m.alphaTest.value=v.alphaTest)}function c(m,v){m.diffuse.value.copy(v.color),m.opacity.value=v.opacity,m.rotation.value=v.rotation,v.map&&(m.map.value=v.map,t(v.map,m.mapTransform)),v.alphaMap&&(m.alphaMap.value=v.alphaMap,t(v.alphaMap,m.alphaMapTransform)),v.alphaTest>0&&(m.alphaTest.value=v.alphaTest)}function h(m,v){m.specular.value.copy(v.specular),m.shininess.value=Math.max(v.shininess,1e-4)}function u(m,v){v.gradientMap&&(m.gradientMap.value=v.gradientMap)}function d(m,v){m.metalness.value=v.metalness,v.metalnessMap&&(m.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,m.metalnessMapTransform)),m.roughness.value=v.roughness,v.roughnessMap&&(m.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,m.roughnessMapTransform)),v.envMap&&(m.envMapIntensity.value=v.envMapIntensity)}function p(m,v,x){m.ior.value=v.ior,v.diffuseRoughness>0&&(m.diffuseRoughness.value=v.diffuseRoughness,v.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=v.diffuseRoughnessMap,t(v.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),v.sheen>0&&(m.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),m.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(m.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,m.sheenColorMapTransform)),v.sheenRoughnessMap&&(m.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,m.sheenRoughnessMapTransform))),v.clearcoat>0&&(m.clearcoat.value=v.clearcoat,m.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(m.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,m.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(m.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===_n&&m.clearcoatNormalScale.value.negate())),v.dispersion>0&&(m.dispersion.value=v.dispersion),v.retroreflectivity>0&&(m.retroreflectivity.value=v.retroreflectivity),v.iridescence>0&&(m.iridescence.value=v.iridescence,m.iridescenceIOR.value=v.iridescenceIOR,m.iridescenceThicknessMinimum.value=v.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=v.iridescenceThicknessMaximum,v.iridescenceMap&&(m.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,m.iridescenceMapTransform)),v.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),v.transmission>0&&(m.transmission.value=v.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),v.transmissionMap&&(m.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,m.transmissionMapTransform)),m.thickness.value=v.thickness,v.thicknessMap&&(m.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=v.attenuationDistance,m.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(m.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(m.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=v.specularIntensity,m.specularColor.value.copy(v.specularColor),v.specularColorMap&&(m.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,m.specularColorMapTransform)),v.specularIntensityMap&&(m.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,m.specularIntensityMapTransform))}function f(m,v){v.matcap&&(m.matcap.value=v.matcap)}function g(m,v){let x=e.get(v).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Kw(i,e,t,n){let s={},r={};function a(x,E){let y=E.program;n.uniformBlockBinding(x,y,s[x.id])}function o(x,E){let y=s[x.id];y===void 0&&(f(x),y=l(x),s[x.id]=y,x.addEventListener("dispose",m));let M=E.program;n.updateUBOMapping(x,M);let w=e.render.frame;r[x.id]!==w&&(c(x),r[x.id]=w)}function l(x){let E=i.createBuffer(),y=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,y,M),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(x){let E=s[x.id],y=x.uniforms,M=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,_=y.length;w<_;w++){let b=y[w];if(Array.isArray(b))for(let C=0,T=b.length;C<T;C++)h(b[C],w,C,M);else h(b,w,0,M)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,E,y,M){if(d(x,E,y,M)===!0){let w=x.__offset,_=x.value;if(Array.isArray(_)){let b=0;for(let C=0;C<_.length;C++){let T=_[C],P=g(T,!0);u(T,x.__data,b),b+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,x.__data)}}function u(x,E,y){typeof x=="number"||typeof x=="boolean"?E[y]=x:x.isMatrix3?(E[y]=x.elements[0],E[y+1]=x.elements[1],E[y+2]=x.elements[2],E[y+3]=0,E[y+4]=x.elements[3],E[y+5]=x.elements[4],E[y+6]=x.elements[5],E[y+7]=0,E[y+8]=x.elements[6],E[y+9]=x.elements[7],E[y+10]=x.elements[8],E[y+11]=0):ArrayBuffer.isView(x)?E.set(x.subarray(0,E.length-y),y):x.toArray(E,y)}function d(x,E,y,M){let w=x.value,_=E+"_"+y;if(Array.isArray(w)){M[_]===void 0&&(M[_]=[]);let b=M[_],C=!1;for(let T=0;T<w.length;T++)p(w[T],b,T)===!0&&(C=!0);return C}return p(w,M,_)}function p(x,E,y){if(E[y]===void 0)return typeof x=="number"||typeof x=="boolean"?E[y]=x:ArrayBuffer.isView(x)?E[y]=x.slice():E[y]=x.clone(),!0;{let M=E[y];if(typeof x=="number"||typeof x=="boolean"){if(M!==x)return E[y]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(M.equals(x)===!1)return M.copy(x),!0}}return!1}function f(x){let E=x.uniforms,y=0,M=16;for(let _=0,b=E.length;_<b;_++){let C=Array.isArray(E[_])?E[_]:[E[_]];for(let T=0,P=C.length;T<P;T++){let N=C[T],R=Array.isArray(N.value)?N.value:[N.value],L=Array.isArray(E[_])||Array.isArray(N.value),F=y;for(let B=0,K=R.length;B<K;B++){let V=R[B],X=g(V,L),Q=y%M,fe=Q%X.boundary,Pe=Q+fe;y+=fe,Pe!==0&&M-Pe<X.storage&&(y+=M-Pe),B===0&&(F=y),y+=X.storage}let G=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new G((y-F)/Float32Array.BYTES_PER_ELEMENT),N.__offset=F}}let w=y%M;return w>0&&(y+=M-w),x.__size=y,x.__cache={},this}function g(x,E){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=16,y.storage=48):x.isMatrix4?(y.boundary=16,y.storage=64):x.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",x),E===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(x){let E=x.target;E.removeEventListener("dispose",m),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function v(){for(let x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:v}}var jw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vi=null;function Qw(){return vi===null&&(vi=new Pl(jw,16,16,ds,jn),vi.name="DFG_LUT",vi.minFilter=vn,vi.magFilter=vn,vi.wrapS=oi,vi.wrapT=oi,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}var Gc=class{constructor(e={}){let{canvas:t=Dm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=En}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=p,m=new Set([lc,oc,ac]),v=new Set([En,Jn,Or,Hs,sc,rc]),x=new Uint32Array(4),E=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},M=null,w=null,_=[],b=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,P=!1,N=null,R=null,L=null,F=null;this._outputColorSpace=Dn;let G=0,B=0,K=null,V=-1,X=null,Q=new Lt,fe=new Lt,Pe=null,Z=new ot(0),ae=0,Ie=t.width,Ae=t.height,_e=1,Fe=null,pt=null,Oe=new Lt(0,0,Ie,Ae),$e=new Lt(0,0,Ie,Ae),je=!1,ie=new os,pe=new Il,ce=!1,Re=!1,ge=new Ct,ze=new H,Ne=new Lt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ze=!1;function nt(){return K===null?_e:1}let U=n;function Tt(A,O){return t.getContext(A,O)}let st,mt,be,Pt,Ve,qe,I,S,q,oe,re,ve,Se,ee,te,me,k,ne,j,he,de,ye,Be;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),U===null){let O="webgl2";if(U=Tt(O,A),U===null)throw Tt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}it()}catch(A){throw t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Je("WebGLRenderer: "+A.message),A}function it(){st=new hM(U),st.init(),de=new qw(U,st),mt=new QS(U,st,e,de),be=new Ww(U,st),mt.reversedDepthBuffer&&d&&be.buffers.depth.setReversed(!0),R=U.createFramebuffer(),L=U.createFramebuffer(),F=U.createFramebuffer(),Pt=new fM(U),Ve=new Pw,qe=new Xw(U,st,be,Ve,mt,de,Pt),I=new cM(T),S=new mx(U),ye=new KS(U,S),q=new uM(U,S,Pt,ye),oe=new mM(U,q,S,ye,Pt),ne=new pM(U,mt,qe),te=new eM(Ve),re=new Cw(T,I,st,mt,ye,te),ve=new Jw(T,Ve),Se=new Lw,ee=new Ow(st),k=new JS(T,I,be,oe,f,l),me=new Gw(T,oe,mt),Be=new Kw(U,Pt,mt,be),j=new jS(U,st,Pt),he=new dM(U,st,Pt),Pt.programs=re.programs,T.capabilities=mt,T.extensions=st,T.properties=Ve,T.renderLists=Se,T.shadowMap=me,T.state=be,T.info=Pt}g!==En&&(C=new vM(g,t.width,t.height,o,s,r));let ue=new kd(T,U);this.xr=ue,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let A=st.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=st.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(A){A!==void 0&&(_e=A,this.setSize(Ie,Ae,!1))},this.getSize=function(A){return A.set(Ie,Ae)},this.setSize=function(A,O,Y=!0){if(ue.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=A,Ae=O,t.width=Math.floor(A*_e),t.height=Math.floor(O*_e),Y===!0&&(t.style.width=A+"px",t.style.height=O+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(Ie*_e,Ae*_e).floor()},this.setDrawingBufferSize=function(A,O,Y){Ie=A,Ae=O,_e=Y,t.width=Math.floor(A*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,A,O)},this.setEffects=function(A){if(g===En){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let O=0;O<A.length;O++)if(A[O].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Q)},this.getViewport=function(A){return A.copy(Oe)},this.setViewport=function(A,O,Y,W){A.isVector4?Oe.set(A.x,A.y,A.z,A.w):Oe.set(A,O,Y,W),be.viewport(Q.copy(Oe).multiplyScalar(nt()).round())},this.getScissor=function(A){return A.copy($e)},this.setScissor=function(A,O,Y,W){A.isVector4?$e.set(A.x,A.y,A.z,A.w):$e.set(A,O,Y,W),be.scissor(fe.copy($e).multiplyScalar(nt()).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(A){be.setScissorTest(je=A)},this.setOpaqueSort=function(A){Fe=A},this.setTransparentSort=function(A){pt=A},this.getClearColor=function(A){return A.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(A=!0,O=!0,Y=!0){let W=0;if(A){let $=!1;if(K!==null){let Me=K.texture.format;$=m.has(Me)}if($){let Me=K.texture.type,Le=v.has(Me),xe=k.getClearColor(),Te=k.getClearAlpha(),Ue=xe.r,Ke=xe.g,rt=xe.b;Le?(x[0]=Ue,x[1]=Ke,x[2]=rt,x[3]=Te,U.clearBufferuiv(U.COLOR,0,x)):(E[0]=Ue,E[1]=Ke,E[2]=rt,E[3]=Te,U.clearBufferiv(U.COLOR,0,E))}else W|=U.COLOR_BUFFER_BIT}O&&(W|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),k.dispose(),Se.dispose(),ee.dispose(),qe.dispose(),Ve.dispose(),I.dispose(),oe.dispose(),q.dispose(),ye.dispose(),Be.dispose(),re.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Xs),ue.removeEventListener("sessionend",Hn),ei.stop()};function He(A){A.preventDefault(),dd("WebGLRenderer: Context Lost."),P=!0}function Qe(){dd("WebGLRenderer: Context Restored."),P=!1;let A=Pt.autoReset,O=me.enabled,Y=me.autoUpdate,W=me.needsUpdate,$=me.type;it(),Pt.autoReset=A,me.enabled=O,me.autoUpdate=Y,me.needsUpdate=W,me.type=$}function Ee(A){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function vt(A){let O=A.target;O.removeEventListener("dispose",vt),Ot(O)}function Ot(A){Yt(A),Ve.remove(A)}function Yt(A){let O=Ve.get(A).programs;O!==void 0&&(O.forEach(function(Y){re.releaseProgram(Y)}),A.isShaderMaterial&&re.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,Y,W,$,Me){O===null&&(O=Ye);let Le=$.isMesh&&$.matrixWorld.determinantAffine()<0,xe=$s(A,O,Y,W,$);be.setMaterial(W,Le);let Te=Y.index,Ue=1;if(W.wireframe===!0){if(Te=q.getWireframeAttribute(Y),Te===void 0)return;Ue=2}let Ke=Y.drawRange,rt=Y.attributes.position,ke=Ke.start*Ue,ht=(Ke.start+Ke.count)*Ue;Me!==null&&(ke=Math.max(ke,Me.start*Ue),ht=Math.min(ht,(Me.start+Me.count)*Ue)),Te!==null?(ke=Math.max(ke,0),ht=Math.min(ht,Te.count)):rt!=null&&(ke=Math.max(ke,0),ht=Math.min(ht,rt.count));let D=ht-ke;if(D<0||D===1/0)return;ye.setup($,W,xe,Y,Te);let z,se=j;if(Te!==null&&(z=S.get(Te),se=he,se.setIndex(z)),$.isMesh)W.wireframe===!0?(be.setLineWidth(W.wireframeLinewidth*nt()),se.setMode(U.LINES)):se.setMode(U.TRIANGLES);else if($.isLine){let le=W.linewidth;le===void 0&&(le=1),be.setLineWidth(le*nt()),$.isLineSegments?se.setMode(U.LINES):$.isLineLoop?se.setMode(U.LINE_LOOP):se.setMode(U.LINE_STRIP)}else $.isPoints?se.setMode(U.POINTS):$.isSprite&&se.setMode(U.TRIANGLES);if($.isBatchedMesh)if(st.get("WEBGL_multi_draw"))se.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let le=$._multiDrawStarts,J=$._multiDrawCounts,et=$._multiDrawCount,De=Te?S.get(Te).bytesPerElement:1,Mt=Ve.get(W).currentProgram.getUniforms();for(let _t=0;_t<et;_t++)Mt.setValue(U,"_gl_DrawID",_t),se.render(le[_t]/De,J[_t])}else if($.isInstancedMesh)se.renderInstances(ke,D,$.count);else if(Y.isInstancedBufferGeometry){let le=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,J=Math.min(Y.instanceCount,le);se.renderInstances(ke,D,J)}else se.render(ke,D)};function Wr(A,O,Y,W){N!==null&&A.isNodeMaterial&&N.setObject(W,A),ce===!0&&te.setState(A,Y,!1),A.transparent===!0&&A.side===mi&&A.forceSinglePass===!1?(A.side=_n,A.needsUpdate=!0,ms(A,O,W),A.side=us,A.needsUpdate=!0,ms(A,O,W),A.side=mi):ms(A,O,W)}this.compile=function(A,O,Y=null){Y===null&&(Y=A),N!==null&&N.renderStart(A,O,Y),w=ee.get(Y),w.init(O),b.push(w),Y.traverseVisible(function($){$.isLight&&$.layers.test(O.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),A!==Y&&A.traverseVisible(function($){$.isLight&&$.layers.test(O.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),w.setupLights(),N!==null&&N.updateLights(w.state.lightsArray),Re=this.localClippingEnabled,ce=te.init(this.clippingPlanes,Re),ce===!0&&te.setGlobalState(this.clippingPlanes,O),N!==null&&me.render(w.state.shadowsArray,Y,O);let W=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Me=$.material;if(Me)if(Array.isArray(Me))for(let Le=0;Le<Me.length;Le++){let xe=Me[Le];Wr(xe,Y,O,$),W.add(xe)}else Wr(Me,Y,O,$),W.add(Me)}),w=b.pop(),N!==null&&N.renderEnd(),W},this.compileAsync=function(A,O,Y=null){let W=this.compile(A,O,Y);return new Promise($=>{function Me(){if(W.forEach(function(Le){let Te=Ve.get(Le).currentProgram;(Te===void 0||Te.isReady())&&W.delete(Le)}),W.size===0){$(A);return}setTimeout(Me,10)}st.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Xr=null;function mo(A){Xr&&Xr(A)}function Xs(){ei.stop()}function Hn(){ei.start()}let ei=new pg;ei.setAnimationLoop(mo),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(A){Xr=A,ue.setAnimationLoop(A),A===null?ei.stop():ei.start()},ue.addEventListener("sessionstart",Xs),ue.addEventListener("sessionend",Hn),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(A,O);let Y=ue.enabled===!0&&ue.isPresenting===!0,W=C!==null&&(K===null||Y)&&C.begin(T,K);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(O),O=ue.getCamera()),A.isScene===!0&&A.onBeforeRender(T,A,O,K),w=ee.get(A,b.length),w.init(O),w.state.textureUnits=qe.getTextureUnits(),b.push(w),ge.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?pe.setFromArrayCamera(O):ie.setFromProjectionMatrix(ge,Vn,O.reversedDepth),Re=this.localClippingEnabled,ce=te.init(this.clippingPlanes,Re),M=Se.get(A,_.length),M.init(),_.push(M),this.info.render.frame++,ue.enabled===!0&&ue.isPresenting===!0){let Le=T.xr.getDepthSensingMesh();Le!==null&&qr(Le,O,-1/0,T.sortObjects)}qr(A,O,0,T.sortObjects),M.finish(),N!==null&&N.updateLights(w.state.lightsArray),T.sortObjects===!0&&M.sort(Fe,pt),Ze=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Ze&&k.addToRenderList(M,A),this.info.autoReset===!0&&this.info.reset(),ce===!0&&te.beginShadows();let $=w.state.shadowsArray;if(me.render($,A,O),ce===!0&&te.endShadows(),(W&&C.hasRenderPass())===!1){let Le=M.opaque,xe=M.transmissive;if(w.setupLights(),O.isArrayCamera){let Te=O.cameras;if(xe.length>0)for(let Ue=0,Ke=Te.length;Ue<Ke;Ue++){let rt=Te[Ue];Yr(Le,xe,A,rt)}Ze&&k.render(A);for(let Ue=0,Ke=Te.length;Ue<Ke;Ue++){let rt=Te[Ue];$r(M,A,rt,rt.viewport)}}else xe.length>0&&Yr(Le,xe,A,O),Ze&&k.render(A),$r(M,A,O)}K!==null&&B===0&&(qe.updateMultisampleRenderTarget(K),qe.updateRenderTargetMipmap(K)),W&&C.end(T),A.isScene===!0&&A.onAfterRender(T,A,O),ye.resetDefaultState(),V=-1,X=null,b.pop(),b.length>0?(w=b[b.length-1],qe.setTextureUnits(w.state.textureUnits),ce===!0&&te.setGlobalState(T.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?M=_[_.length-1]:M=null,N!==null&&N.renderEnd()};function qr(A,O,Y,W){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){let Le=O.isArrayCamera?pe:ie;if(!A.frustumCulled||A.intersectsFrustum(Le)){W&&Ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ge);let xe=oe.update(A),Te=A.material;Te.visible&&M.push(A,xe,Te,Y,Ne.z,null,O)}}else if(A.isMesh||A.isLine||A.isPoints){let Le=O.isArrayCamera?pe:ie;if(!A.frustumCulled||A.intersectsFrustum(Le)){let xe=oe.update(A),Te=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ne.copy(A.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ne.copy(xe.boundingSphere.center)),Ne.applyMatrix4(A.matrixWorld).applyMatrix4(ge)),Array.isArray(Te)){let Ue=xe.groups;for(let Ke=0,rt=Ue.length;Ke<rt;Ke++){let ke=Ue[Ke],ht=Te[ke.materialIndex];ht&&ht.visible&&M.push(A,xe,ht,Y,Ne.z,ke,O)}}else Te.visible&&M.push(A,xe,Te,Y,Ne.z,null,O)}}}let Me=A.children;for(let Le=0,xe=Me.length;Le<xe;Le++)qr(Me[Le],O,Y,W)}function $r(A,O,Y,W){let{opaque:$,transmissive:Me,transparent:Le}=A;w.setupLightsView(Y),ce===!0&&te.setGlobalState(T.clippingPlanes,Y),W&&be.viewport(Q.copy(W)),$.length>0&&qs($,O,Y),Me.length>0&&qs(Me,O,Y),Le.length>0&&qs(Le,O,Y),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Yr(A,O,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[W.id]===void 0){let ke=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[W.id]=new Nn(1,1,{generateMipmaps:!0,type:ke?jn:En,minFilter:Bi,samples:Math.max(4,mt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let Me=w.state.transmissionRenderTarget[W.id],Le=W.viewport||Q;Me.setSize(Le.z*T.transmissionResolutionScale,Le.w*T.transmissionResolutionScale);let xe=T.getRenderTarget(),Te=T.getActiveCubeFace(),Ue=T.getActiveMipmapLevel();T.setRenderTarget(Me),T.getClearColor(Z),ae=T.getClearAlpha(),ae<1&&T.setClearColor(16777215,.5),T.clear(),Ze&&k.render(Y);let Ke=T.toneMapping;T.toneMapping=gi;let rt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),w.setupLightsView(W),ce===!0&&te.setGlobalState(T.clippingPlanes,W),qs(A,Y,W),qe.updateMultisampleRenderTarget(Me),qe.updateRenderTargetMipmap(Me),st.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let ht=0,D=O.length;ht<D;ht++){let z=O[ht],{object:se,geometry:le,material:J,group:et}=z;if(J.side===mi&&se.layers.test(W.layers)){let De=J.side;J.side=_n,J.needsUpdate=!0,Zr(se,Y,W,le,J,et),J.side=De,J.needsUpdate=!0,ke=!0}}ke===!0&&(qe.updateMultisampleRenderTarget(Me),qe.updateRenderTargetMipmap(Me))}T.setRenderTarget(xe,Te,Ue),T.setClearColor(Z,ae),rt!==void 0&&(W.viewport=rt),T.toneMapping=Ke}function qs(A,O,Y){let W=O.isScene===!0?O.overrideMaterial:null;for(let $=0,Me=A.length;$<Me;$++){let Le=A[$],{object:xe,geometry:Te,group:Ue}=Le,Ke=Le.material;Ke.allowOverride===!0&&W!==null&&(Ke=W),xe.layers.test(Y.layers)&&Zr(xe,O,Y,Te,Ke,Ue)}}function Zr(A,O,Y,W,$,Me){N!==null&&$.isNodeMaterial&&N.setObject(A,$),A.onBeforeRender(T,O,Y,W,$,Me),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(T,O,Y,W,A,Me),$.transparent===!0&&$.side===mi&&$.forceSinglePass===!1?($.side=_n,$.needsUpdate=!0,T.renderBufferDirect(Y,O,W,$,A,Me),$.side=us,$.needsUpdate=!0,T.renderBufferDirect(Y,O,W,$,A,Me),$.side=mi):T.renderBufferDirect(Y,O,W,$,A,Me),A.onAfterRender(T,O,Y,W,$,Me)}function Jr(A){let O=0;for(let Y of A)Y.texture!==null&&O++;return O}function ms(A,O,Y){O.isScene!==!0&&(O=Ye);let W=Ve.get(A),$=w.state.lights,Me=w.state.shadowsArray,Le=$.state.version,xe=re.getParameters(A,$.state,Me,O,Y,w.state.lightProbeGridArray),Te=re.getProgramCacheKey(xe),Ue=W.programs;W.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?O.environment:null,W.fog=O.fog;let Ke=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;W.envMap=I.get(A.envMap||W.environment,Ke),W.envMapRotation=W.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,Ue===void 0&&(A.addEventListener("dispose",vt),Ue=new Map,W.programs=Ue,W.programVariants=new Map);let rt=Ue.get(Te);if(rt!==void 0){if(W.currentProgram===rt&&W.lightsStateVersion===Le)return yi(A,xe),rt}else xe.uniforms=re.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,Y,xe),A.onBeforeCompile(xe,T),rt=re.acquireProgram(xe,Te),Ue.set(Te,rt),W.uniforms=xe.uniforms;let ke=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=te.uniform),yi(A,xe),W.needsLights=Zs(A),W.lightsStateVersion=Le,W.needsLights&&(ke.ambientLightColor.value=$.state.ambient,ke.lightProbe.value=$.state.probe,ke.sunLights.value=$.state.sun,ke.sunLightShadows.value=$.state.sunShadow,ke.directionalLights.value=$.state.directional,ke.directionalLightShadows.value=$.state.directionalShadow,ke.spotLights.value=$.state.spot,ke.spotLightShadows.value=$.state.spotShadow,ke.rectAreaLights.value=$.state.rectArea,ke.ltc_1.value=$.state.rectAreaLTC1,ke.ltc_2.value=$.state.rectAreaLTC2,ke.pointLights.value=$.state.point,ke.pointLightShadows.value=$.state.pointShadow,ke.hemisphereLights.value=$.state.hemi,ke.sunShadowMatrix.value=$.state.sunShadowMatrix,ke.sunShadowCascade.value=$.state.sunShadowCascade,ke.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ke.spotLightMatrix.value=$.state.spotLightMatrix,ke.spotLightMap.value=$.state.spotLightMap,ke.pointShadowMatrix.value=$.state.pointShadowMatrix),W.numLightProbeGrids=Jr(w.state.lightProbeGridArray),W.currentProgram=rt,W.uniformsList=null,rt}function go(A,O,Y,W,$){let Me=Ve.get(A),Le=Me.currentProgram.id+","+W+","+$,xe=Me.programVariants.get(Le);return xe===void 0?(xe=ms(A,O,Y),Me.programVariants.set(Le,xe)):(Me.currentProgram=xe,Me.uniformsList=null,Me.outputColorSpace=W,Me.toneMapping=$),xe}function vo(A){if(A.uniformsList===null){let O=A.currentProgram.getUniforms();A.uniformsList=Br.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function yi(A,O){let Y=Ve.get(A);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function $s(A,O,Y,W,$){O.isScene!==!0&&(O=Ye),qe.resetTextureUnits();let Me=O.fog,Le=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?O.environment:null,xe=K===null?T.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:dt.workingColorSpace,Te=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ue=I.get(W.envMap||Le,Te),Ke=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,rt=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ke=!!Y.morphAttributes.position,ht=!!Y.morphAttributes.normal,D=!!Y.morphAttributes.color,z=gi;W.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(z=T.toneMapping);let se=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,le=se!==void 0?se.length:0,J=Ve.get(W),et=w.state.lights;if(ce===!0&&(Re===!0||A!==X)){let Dt=A===X&&W.id===V;te.setState(W,A,Dt)}let De=!1,Mt=!1;W.version===J.__version?J.needsLights&&J.lightsStateVersion!==et.state.version||$.isBatchedMesh&&J.batching===!1||!$.isBatchedMesh&&J.batching===!0||$.isBatchedMesh&&J.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&J.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&J.instancing===!1||!$.isInstancedMesh&&J.instancing===!0||$.isSkinnedMesh&&J.skinning===!1||!$.isSkinnedMesh&&J.skinning===!0||$.isInstancedMesh&&J.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&J.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&J.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&J.instancingMorph===!1&&$.morphTexture!==null||J.envMap!==Ue||W.fog===!0&&J.fog!==Me||J.numClippingPlanes!==void 0&&(J.numClippingPlanes!==te.numPlanes||J.numIntersection!==te.numIntersection)||J.vertexAlphas!==Ke||J.vertexTangents!==rt||J.morphTargets!==ke||J.morphNormals!==ht||J.morphColors!==D||J.morphTargetsCount!==le||J.numLightProbeGrids!==Jr(w.state.lightProbeGridArray)?De=!0:(J.outputColorSpace!==xe||J.toneMapping!==z)&&(Mt=!0):(De=!0,J.__version=W.version);let _t=J.currentProgram;(De===!0||Mt===!0)&&(_t=Mt===!0?go(W,O,$,xe,z):ms(W,O,$),N&&W.isNodeMaterial&&N.onUpdateProgram(W,_t,J));let An=!1,Ht=!1,xt=!1,We=_t.getUniforms(),Bt=J.uniforms;if(be.useProgram(_t.program)&&(An=!0,Ht=!0,xt=!0),W.id!==V&&(V=W.id,Ht=!0),An||X!==A){be.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),We.setValue(U,"projectionMatrix",A.projectionMatrix),We.setValue(U,"viewMatrix",A.matrixWorldInverse);let Zt=We.map.cameraPosition;Zt!==void 0&&Zt.setValue(U,ze.setFromMatrixPosition(A.matrixWorld)),mt.logarithmicDepthBuffer&&We.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&We.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),X!==A&&(X=A,Ht=!0,xt=!0)}if(J.needsLights&&(et.state.sunShadowMap.length>0&&We.setValue(U,"sunShadowMap",et.state.sunShadowMap,qe),et.state.directionalShadowMap.length>0&&We.setValue(U,"directionalShadowMap",et.state.directionalShadowMap,qe),et.state.spotShadowMap.length>0&&We.setValue(U,"spotShadowMap",et.state.spotShadowMap,qe),et.state.pointShadowMap.length>0&&We.setValue(U,"pointShadowMap",et.state.pointShadowMap,qe)),$.isSkinnedMesh){We.setOptional(U,$,"bindMatrix"),We.setOptional(U,$,"bindMatrixInverse");let Dt=$.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),We.setValue(U,"boneTexture",Dt.boneTexture,qe))}$.isBatchedMesh&&(We.setOptional(U,$,"batchingTexture"),We.setValue(U,"batchingTexture",$._matricesTexture,qe),We.setOptional(U,$,"batchingIdTexture"),We.setValue(U,"batchingIdTexture",$._indirectTexture,qe),We.setOptional(U,$,"batchingColorTexture"),$._colorsTexture!==null&&We.setValue(U,"batchingColorTexture",$._colorsTexture,qe));let nn=Y.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&ne.update($,Y,_t),(Ht||J.receiveShadow!==$.receiveShadow)&&(J.receiveShadow=$.receiveShadow,We.setValue(U,"receiveShadow",$.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&O.environment!==null&&(Bt.envMapIntensity.value=O.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=Qw()),Ht){if(We.setValue(U,"toneMappingExposure",T.toneMappingExposure),J.needsLights&&Ys(Bt,xt),Me&&W.fog===!0&&ve.refreshFogUniforms(Bt,Me),ve.refreshMaterialUniforms(Bt,W,_e,Ae,w.state.transmissionRenderTarget[A.id]),J.needsLights&&J.numLightProbeGrids>0){let Dt=y,Zt=0;for(let xi of w.state.lightProbeGridArray)xi.texture!==null&&(Dt.textures[Zt]=xi.texture,Dt.min[Zt]=xi.boundingBox.min,Dt.max[Zt]=xi.boundingBox.max,Dt.resolution[Zt]=xi.resolution,Zt++);for(let xi in Dt)Dt[xi].length=Zt;Bt.probesSH.value=Dt.textures,Bt.probesMin.value=Dt.min,Bt.probesMax.value=Dt.max,Bt.probesResolution.value=Dt.resolution}Br.upload(U,vo(J),Bt,qe)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Br.upload(U,vo(J),Bt,qe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&We.setValue(U,"center",$.center),We.setValue(U,"modelViewMatrix",$.modelViewMatrix),We.setValue(U,"normalMatrix",$.normalMatrix),We.setValue(U,"modelMatrix",$.matrixWorld),W.uniformsGroups!==void 0){let Dt=W.uniformsGroups;for(let Zt=0,xi=Dt.length;Zt<xi;Zt++){let Gd=Dt[Zt];Be.update(Gd,_t),Be.bind(Gd,_t)}}return _t}function Ys(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.sunLights.needsUpdate=O,A.sunLightShadows.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function Zs(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(A,O,Y){let W=Ve.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Ve.get(A.texture).__webglTexture=O,Ve.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,O){let Y=Ve.get(A);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,Y=0){K=A,G=O,B=Y;let W=null,$=!1,Me=!1;if(A){let xe=Ve.get(A);if(xe.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(U.FRAMEBUFFER,xe.__webglFramebuffer),Q.copy(A.viewport),fe.copy(A.scissor),Pe=A.scissorTest,be.viewport(Q),be.scissor(fe),be.setScissorTest(Pe),V=-1;return}else if(xe.__webglFramebuffer===void 0)qe.setupRenderTarget(A);else if(xe.__hasExternalTextures)qe.rebindTextures(A,Ve.get(A.texture).__webglTexture,Ve.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ke=A.depthTexture;if(xe.__boundDepthTexture!==Ke){if(Ke!==null&&Ve.has(Ke)&&(A.width!==Ke.image.width||A.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(A)}}let Te=A.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(Me=!0);let Ue=Ve.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ue[O])?W=Ue[O][Y]:W=Ue[O],$=!0):A.samples>0&&qe.useMultisampledRTT(A)===!1?W=Ve.get(A).__webglMultisampledFramebuffer:Array.isArray(Ue)?W=Ue[Y]:W=Ue,Q.copy(A.viewport),fe.copy(A.scissor),Pe=A.scissorTest}else Q.copy(Oe).multiplyScalar(_e).floor(),fe.copy($e).multiplyScalar(_e).floor(),Pe=je;if(Y!==0&&(W=R),be.bindFramebuffer(U.FRAMEBUFFER,W)&&be.drawBuffers(A,W),be.viewport(Q),be.scissor(fe),be.setScissorTest(Pe),$){let xe=Ve.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,xe.__webglTexture,Y)}else if(Me){let xe=O;for(let Te=0;Te<A.textures.length;Te++){let Ue=Ve.get(A.textures[Te]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Te,Ue.__webglTexture,Y,xe)}}else if(A!==null&&Y!==0){let xe=Ve.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xe.__webglTexture,Y)}V=-1};function gs(A){let O=Ve.get(A);return(O.__readFormat!==A.format||O.__readType!==A.type)&&(O.__readFormat=A.format,O.__readType=A.type,O.__formatReadable=mt.textureFormatReadable(A.format),O.__typeReadable=mt.textureTypeReadable(A.type)),O}this.readRenderTargetPixels=function(A,O,Y,W,$,Me,Le,xe=0){if(!(A&&A.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ve.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Te=Te[Le],Array.isArray(Te)&&(Te=Te[0])),Te){be.bindFramebuffer(U.FRAMEBUFFER,Te);try{let Ue=A.textures[xe],Ke=Ue.format,rt=Ue.type;A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xe);let ke=gs(Ue);if(ke.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ke.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-W&&Y>=0&&Y<=A.height-$&&U.readPixels(O,Y,W,$,de.convert(Ke),de.convert(rt),Me)}finally{let Ue=K!==null?Ve.get(K).__webglFramebuffer:null;be.bindFramebuffer(U.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(A,O,Y,W,$,Me,Le,xe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Ve.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Te=Te[Le],Array.isArray(Te)&&(Te=Te[0])),Te)if(O>=0&&O<=A.width-W&&Y>=0&&Y<=A.height-$){be.bindFramebuffer(U.FRAMEBUFFER,Te);let Ue=A.textures[xe],Ke=Ue.format,rt=Ue.type;A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xe);let ke=gs(Ue);if(ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ht),U.bufferData(U.PIXEL_PACK_BUFFER,Me.byteLength,U.STREAM_READ),U.readPixels(O,Y,W,$,de.convert(Ke),de.convert(rt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let D=K!==null?Ve.get(K).__webglFramebuffer:null;be.bindFramebuffer(U.FRAMEBUFFER,D);let z=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await km(U,z,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ht),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Me),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ht),U.deleteSync(z),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,O=null,Y=0){let W=Math.pow(2,-Y),$=Math.floor(A.image.width*W),Me=Math.floor(A.image.height*W),Le=O!==null?O.x:0,xe=O!==null?O.y:0;qe.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,Le,xe,$,Me),be.unbindTexture()},this.copyTextureToTexture=function(A,O,Y=null,W=null,$=0,Me=0){let Le,xe,Te,Ue,Ke,rt,ke,ht,D,z=A.isCompressedTexture?A.mipmaps[Me]:A.image;if(Y!==null)Le=Y.max.x-Y.min.x,xe=Y.max.y-Y.min.y,Te=Y.isBox3?Y.max.z-Y.min.z:1,Ue=Y.min.x,Ke=Y.min.y,rt=Y.isBox3?Y.min.z:0;else{let We=Math.pow(2,-$);Le=Math.floor(z.width*We),xe=Math.floor(z.height*We),A.isDataArrayTexture?Te=z.depth:A.isData3DTexture?Te=Math.floor(z.depth*We):Te=1,Ue=0,Ke=0,rt=0}W!==null?(ke=W.x,ht=W.y,D=W.z):(ke=0,ht=0,D=0);let se=de.convert(O.format),le=de.convert(O.type),J;O.isData3DTexture?(qe.setTexture3D(O,0),J=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(qe.setTexture2DArray(O,0),J=U.TEXTURE_2D_ARRAY):(qe.setTexture2D(O,0),J=U.TEXTURE_2D),be.activeTexture(U.TEXTURE0),be.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),be.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),be.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);let et=be.getParameter(U.UNPACK_ROW_LENGTH),De=be.getParameter(U.UNPACK_IMAGE_HEIGHT),Mt=be.getParameter(U.UNPACK_SKIP_PIXELS),_t=be.getParameter(U.UNPACK_SKIP_ROWS),An=be.getParameter(U.UNPACK_SKIP_IMAGES);be.pixelStorei(U.UNPACK_ROW_LENGTH,z.width),be.pixelStorei(U.UNPACK_IMAGE_HEIGHT,z.height),be.pixelStorei(U.UNPACK_SKIP_PIXELS,Ue),be.pixelStorei(U.UNPACK_SKIP_ROWS,Ke),be.pixelStorei(U.UNPACK_SKIP_IMAGES,rt);let Ht=A.isDataArrayTexture||A.isData3DTexture,xt=O.isDataArrayTexture||O.isData3DTexture;if(A.isDepthTexture){let We=Ve.get(A),Bt=Ve.get(O),nn=Ve.get(We.__renderTarget),Dt=Ve.get(Bt.__renderTarget);be.bindFramebuffer(U.READ_FRAMEBUFFER,nn.__webglFramebuffer),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Zt=0;Zt<Te;Zt++)Ht&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ve.get(A).__webglTexture,$,rt+Zt),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ve.get(O).__webglTexture,Me,D+Zt)),U.blitFramebuffer(Ue,Ke,Ue+Le,Ke+xe,ke,ht,ke+Le,ht+xe,U.DEPTH_BUFFER_BIT,U.NEAREST);be.bindFramebuffer(U.READ_FRAMEBUFFER,null),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if($!==0||A.isRenderTargetTexture||Ve.has(A)){let We=Ve.get(A),Bt=Ve.get(O);be.bindFramebuffer(U.READ_FRAMEBUFFER,L),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,F);for(let nn=0;nn<Te;nn++)Ht?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,We.__webglTexture,$,rt+nn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,We.__webglTexture,$),xt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Bt.__webglTexture,Me,D+nn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Bt.__webglTexture,Me),$!==0?U.blitFramebuffer(Ue,Ke,Ue+Le,Ke+xe,ke,ht,ke+Le,ht+xe,U.COLOR_BUFFER_BIT,U.NEAREST):xt?U.copyTexSubImage3D(J,Me,ke,ht,D+nn,Ue,Ke,Le,xe):U.copyTexSubImage2D(J,Me,ke,ht,Ue,Ke,Le,xe);be.bindFramebuffer(U.READ_FRAMEBUFFER,null),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else xt?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(J,Me,ke,ht,D,Le,xe,Te,se,le,z.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(J,Me,ke,ht,D,Le,xe,Te,se,z.data):U.texSubImage3D(J,Me,ke,ht,D,Le,xe,Te,se,le,z):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Me,ke,ht,Le,xe,se,le,z.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Me,ke,ht,z.width,z.height,se,z.data):U.texSubImage2D(U.TEXTURE_2D,Me,ke,ht,Le,xe,se,le,z);be.pixelStorei(U.UNPACK_ROW_LENGTH,et),be.pixelStorei(U.UNPACK_IMAGE_HEIGHT,De),be.pixelStorei(U.UNPACK_SKIP_PIXELS,Mt),be.pixelStorei(U.UNPACK_SKIP_ROWS,_t),be.pixelStorei(U.UNPACK_SKIP_IMAGES,An),Me===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&U.generateMipmap(J),be.unbindTexture()},this.initRenderTarget=function(A){Ve.get(A).__webglFramebuffer===void 0&&qe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?qe.setTextureCube(A,0):A.isData3DTexture?qe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?qe.setTexture2DArray(A,0):qe.setTexture2D(A,0),be.unbindTexture()},this.resetState=function(){G=0,B=0,K=null,be.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var St={marino:1129583,azulIcono:4358583,amarillo:16308581,rojo:15221578,verde:6796175,blanco:16777215},Eg=[4,3,5,9,5,3],qc=29,t1=new Set([18,24]),Ag=20,Tg=25.8,n1=co.degToRad(12);function i1(i=.24){let e=new Oi;e.moveTo(0,i),e.lineTo(i,0),e.lineTo(0,-i),e.lineTo(-i,0),e.closePath();let t=new qa(e,{depth:.07,bevelEnabled:!0,bevelThickness:.011,bevelSize:.009,bevelSegments:2,curveSegments:1});return t.center(),t}function s1(i=.242){let e=new Oi;return e.moveTo(0,i),e.lineTo(-i,0),e.lineTo(0,-i),e.lineTo(i,0),e.closePath(),new Dr(e)}function Ud(i,e){let t=new Oi;t.moveTo(0,e),t.lineTo(-e,0),t.lineTo(0,-e),t.lineTo(e,0),t.closePath();let n=new ks;return n.moveTo(0,i),n.lineTo(i,0),n.lineTo(0,-i),n.lineTo(-i,0),n.closePath(),t.holes.push(n),new Dr(t)}function r1(){let i=[[-2,4],[2,4],[-3,3],[-1,3],[1,3],[3,3],[-2,2],[0,2],[2,2],[-3,1],[-1,1],[1,1],[3,1],[-2,0],[0,0],[2,0],[-3,-1],[-1,-1],[1,-1],[3,-1],[-2,-2],[0,-2],[2,-2],[-3,-3],[-1,-3],[1,-3],[3,-3],[-2,-4],[2,-4]],e=.7,t=4.8,n=0,s=i.map(([f,g])=>({x:t+f*e,y:n+g*e,z:f===0&&g===0?.06:0,escala:f===0&&g===0?1.52:1.38,acento:f===0&&g===0?St.amarillo:f===0&&Math.abs(g)===2?St.verde:Math.abs(f)===2&&g===0?St.rojo:Math.abs(f)===2&&Math.abs(g)===4?St.amarillo:St.marino}));function r(f,g,m,v,x){let E=[],y=0;Eg.forEach((_,b)=>{for(let C=0;C<_;C++)E.push(y),y+=f;b<Eg.length-1&&(y+=g)});let M=E[E.length-1]-E[0],w=m-M/2;return E.map(_=>({x:_+w,y:v,z:0,escala:x}))}let a=r(.4,.28,.42,-3.96,.64),o=r(.66,.54,0,0,.9),l=.45,c=4.65,h=0,u=[];for(let f=-2;f<=2;f++)for(let g=-2;g<=2;g++){let m=f===0&&g===0;u.push({x:c+(f-g)*l,y:h+(f+g)*l,z:m?.04:0,escala:m?1.46:1.38,esCentro:m,esEsquina:!1,colorEsquina:St.marino})}let d=2.68,p=[[0,d,St.rojo],[d,0,St.amarillo],[0,-d,St.verde],[-d,0,St.blanco]];for(let[f,g,m]of p)u.push({x:c+f,y:h+g,z:.04,escala:1.5,esCentro:!1,esEsquina:!0,colorEsquina:m});return{portada:s,banda:a,grupo:o,"rombo-mayor":u}}function Rg(i){let e=window.matchMedia("(prefers-reduced-motion: reduce)").matches,t=new Gc({canvas:i,antialias:!0,alpha:!0});t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),t.shadowMap.enabled=!0,t.shadowMap.type=Os;let n=new Da,s=new gn(Ag,16/9,.1,100);s.position.set(0,0,Tg);let r=new Ka(16777215,9155801,1.55);n.add(r);let a=new eo(16777215,.95);a.position.set(-2.5,3.8,14),a.castShadow=!0,a.shadow.mapSize.set(1024,1024),a.shadow.radius=4,a.shadow.bias=-5e-4,a.shadow.camera.left=-12,a.shadow.camera.right=12,a.shadow.camera.top=8,a.shadow.camera.bottom=-8,a.shadow.camera.near=2,a.shadow.camera.far=28,n.add(a),n.add(a.target);let o=new hn(new Fs(70,32),new $a({opacity:.14,color:St.marino}));o.position.set(0,0,-.22),o.receiveShadow=!0,n.add(o);let l=i1(.24),c=s1(.242),h=Ud(.213,.248),u=Ud(.231,.249),d=Ud(.28,.322),p=r1(),f=new li;n.add(f);let g=[];for(let C=0;C<qc;C++){let T=C+1,P=new li,N=new Ya({color:St.marino,roughness:.72,metalness:.02,transparent:!0,opacity:1}),R=new hn(l,N);R.castShadow=!0,R.receiveShadow=!0,P.add(R);let L=new as({color:St.blanco,transparent:!0,opacity:0,depthWrite:!1}),F=new hn(c,L);F.position.z=.0465,F.visible=!1,P.add(F);let G=new as({color:St.azulIcono,transparent:!0,opacity:0,depthWrite:!1}),B=new hn(h,G);B.position.z=.049,B.visible=!1,P.add(B);let K=null;if(t1.has(T)){let V=new as({color:St.rojo,transparent:!0,opacity:0,depthWrite:!1});K=new hn(d,V),K.position.z=.047,K.visible=!1,P.add(K)}f.add(P),g.push({n:T,grupo:P,malla:R,rellenoPlano:F,contorno:B,anillo:K,enCurso:!1})}function m(){let C=i.clientWidth||window.innerWidth,T=i.clientHeight||window.innerHeight;t.setSize(C,T,!1),s.aspect=C/T,s.updateProjectionMatrix()}window.addEventListener("resize",m),m();let v=!0,x=null,E=new to,y=new ot;function M(C,T,P,N){y.setHex(T),P===0?C.copy(y):mn.to(C,{r:y.r,g:y.g,b:y.b,duration:P,ease:N,overwrite:"auto"})}function w(C,T,P){if(P===0){C.material.opacity=T,C.visible=T>.01;return}T>.01&&(C.visible=!0),mn.to(C.material,{opacity:T,duration:P,ease:"power2.out",overwrite:"auto",onComplete:()=>{C.visible=C.material.opacity>.01}})}t.setAnimationLoop(()=>{E.update();let C=E.getElapsed();if(!e)for(let T of g)T.enCurso&&T.grupo.rotation.set(0,0,Math.sin(C*2)*n1);a.position.x=s.position.x-2.5,a.target.position.x=s.position.x,t.render(n,s)});function _(){let C=p.portada;g.forEach((T,P)=>{let N=P/qc*Math.PI*2+.4,R=3.2+P%5*.85;T.grupo.position.set(C[P].x+Math.cos(N)*R,C[P].y+Math.sin(N)*R*.75,1.2+P%3*.4),T.grupo.rotation.set(0,0,(P%3-1)*.25),T.grupo.scale.setScalar(.35)})}function b(C="banda",{hechas:T=0,actual:P=null,foco:N=null}={}){let R=p[C]?C:"banda",L=p[R],F=v&&R==="portada",G=v&&R!=="portada";F&&!e&&_(),v=!1;let B=x===R;x=R;let K=e||G?0:F?1.25:B?.65:1.35,V=F?"power3.out":B?"power2.out":"power3.inOut",X=0,Q=0,fe=Tg;if(R==="grupo"&&Array.isArray(N)&&N.length===2){let ae=Math.max(0,Math.min(qc-1,N[0]-1)),Ie=Math.max(0,Math.min(qc-1,N[1]-1)),Ae=L[ae].x,_e=L[Ie].x;X=(Ae+_e)/2;let Fe=Math.tan(co.degToRad(Ag/2)),pt=s.aspect||16/9,Oe=_e-Ae+1.1,$e=Ie-ae+1>=10?.78:.68,je=Oe/$e;fe=co.clamp(je/(2*Fe*pt),15.2,22.5),Q=-(fe*Fe)*.48}K===0?s.position.set(X,Q,fe):mn.to(s.position,{x:X,y:Q,z:fe,duration:K,ease:V,overwrite:"auto"});let Pe=R==="portada"||R==="grupo"||R==="rombo-mayor",Z=R==="grupo"||R==="rombo-mayor"||R==="portada";g.forEach((ae,Ie)=>{let Ae=L[Ie],_e=ae.n,Fe=!N||_e>=N[0]&&_e<=N[1],pt=R==="banda"&&P===_e,Oe=_e<=T,$e=R==="grupo"&&Fe&&!Oe,je=R==="grupo"&&!Fe&&!Oe;ae.enCurso=pt,ae.contorno.geometry=Z?u:h;let ie=0,pe=0,ce=Ae.escala;pt?(ie=.65,pe=.14,ce=Ae.escala*1.28):$e?(ie=.1,ce=Ae.escala*1.25):je&&(ie=-.12,ce=Ae.escala*.92);let Re=F&&!e?Ie*.012:0;K===0?(ae.grupo.position.set(Ae.x,Ae.y+pe,Ae.z+ie),ae.grupo.scale.setScalar(ce),ae.grupo.rotation.set(0,0,0)):(mn.to(ae.grupo.position,{x:Ae.x,y:Ae.y+pe,z:Ae.z+ie,duration:K,delay:Re,ease:V,overwrite:"auto"}),mn.to(ae.grupo.scale,{x:ce,y:ce,z:ce,duration:K,delay:Re,ease:V,overwrite:"auto"}),pt?mn.to(ae.grupo.rotation,{x:0,y:0,duration:K*.6,ease:V,overwrite:"auto"}):mn.to(ae.grupo.rotation,{x:0,y:0,z:0,duration:K,delay:Re,ease:V,overwrite:"auto"}));let ge=St.marino,ze=0,Ne=0,Ye=St.azulIcono,Ze=0,nt=!1;R==="portada"?(ge=Ae.acento,ze=1,Ye=St.marino,Ze=Ae.acento===St.amarillo?1:0,nt=!0):R==="rombo-mayor"?(ge=Ae.esEsquina?Ae.colorEsquina:Ae.esCentro?St.amarillo:St.marino,ze=1,Ye=St.marino,Ze=Ae.esEsquina||Ae.esCentro?1:0,nt=!0):pt?(ge=St.amarillo,ze=1,Ye=St.marino,Ze=1,nt=!0):Oe?(ge=St.marino,ze=1,Ze=0,nt=!0):$e?(ze=0,Ne=.85,Ye=St.marino,Ze=1,nt=!1):je?(ze=0,Ne=.09,Ye=St.marino,Ze=.25,nt=!1):(ze=0,Ne=Pe?.35:0,Ye=Pe?St.marino:St.azulIcono,Ze=Pe?.7:1,nt=!1),ae.malla.castShadow=nt,ae.malla.material.depthWrite=ze>.5;let U=K*.65;if(M(ae.malla.material.color,ge,U,"power2.out"),M(ae.contorno.material.color,Ye,U,"power2.out"),w(ae.malla,ze,U),w(ae.rellenoPlano,Ne,U),w(ae.contorno,Ze,U),ae.anillo){let Tt=R==="portada"||R==="rombo-mayor"?0:je?.25:.96;w(ae.anillo,Tt,U)}})}return{ir:b}}var $c={dgDigebi:{d:"digebi",t:"Director General de DIGEBI"},dirDid:{d:"dideduc",t:"Director Departamental (DIDEDUC)"},enlace:{d:"dideduc",t:"Enlace departamental"},subplice:{d:"digebi",t:"SUBPLICE (DIGEBI)"},materiales:{d:"digebi",t:"Materiales educativos (DIGEBI)"},dicoms:{d:"dicoms",t:"DICOMS"},sol:{d:"sol",t:"Personal solicitante"},digeduca:{d:"digeduca",t:"DIGEDUCA"},digemoca:{d:"digemoca",t:"DIGEMOCA (acompa\xF1a)"},direh:{d:"direh",t:"DIREH"}},a1={g1:{carriles:["dgDigebi","dirDid","enlace"],nodos:[{id:"i",tipo:"inicio",c:"dgDigebi",col:0},{id:"1",n:1,c:"dgDigebi",col:1,t:"Solicitar designaci\xF3n del enlace",s:"Oficio a cada DIDEDUC"},{id:"2",n:2,c:"dirDid",col:2,t:"Designar al enlace",s:"Remite el oficio de designaci\xF3n a DIGEBI"},{id:"3",n:3,c:"dgDigebi",col:3,t:"Remitir lineamientos",s:"Instrucciones de ejecuci\xF3n a cada enlace"},{id:"4",n:4,c:"enlace",col:4,t:"Solicitar usuario",s:"Formulario DES-FOR 05 para la plataforma"},{id:"f",tipo:"fin",c:"enlace",col:5,t:"Sigue G2"}],aristas:[["i","1"],["1","2"],["2","3"],["3","4"],["4","f"]]},g2:{carriles:["subplice","materiales","dicoms"],nodos:[{id:"i",tipo:"inicio",c:"subplice",col:0},{id:"5",n:5,c:"subplice",col:1,t:"Solicitar materiales",s:"Afiches y comunicados con fechas, requisitos y canales de consulta"},{id:"6",n:6,c:"materiales",col:2,t:"Elaborar materiales",s:"Dise\xF1a y traslada para revisi\xF3n"},{id:"d",tipo:"decision",c:"subplice",col:3,t:"\xBFAprobados?"},{id:"a",tipo:"nota",c:"materiales",col:3,t:"Ajustar materiales",s:"Incorpora observaciones"},{id:"7",n:7,c:"subplice",col:4,t:"Solicitar divulgaci\xF3n",s:"A DICOMS, un mes antes de la convocatoria"},{id:"p",tipo:"nota",c:"dicoms",col:5,t:"Publicar y socializar",s:"DICOMS y comunicaci\xF3n de cada DIDEDUC"},{id:"f",tipo:"fin",c:"dicoms",col:6,t:"Sigue G3"}],aristas:[["i","5"],["5","6"],["6","d"],["d","a","No"],["a","d","","regreso"],["d","7","S\xED"],["7","p"],["p","f"]]},g3:{carriles:["subplice","sol","enlace"],nodos:[{id:"8",n:8,c:"subplice",col:0,t:"Enviar convocatoria",s:"Fechas, requisitos y proceso a las DIDEDUC"},{id:"9",n:9,c:"subplice",col:1,t:"Informar y capacitar",s:"Instructivo, formularios y plataforma"},{id:"10",n:10,c:"subplice",col:2,t:"Abrir la plataforma",s:"Habilitada durante el per\xEDodo oficial"},{id:"11",n:11,c:"sol",col:3,t:"Enviar solicitud",s:"Firma con lapicero azul y adjunta en PDF"},{id:"12",n:12,c:"enlace",col:4,t:"Revisar documentos",s:"Existencia, legibilidad, integridad y correspondencia"},{id:"d",tipo:"decision",c:"enlace",col:5,t:"\xBFCompleto?"},{id:"s",tipo:"nota",c:"sol",col:5,t:"Subsanar",s:"Hasta 2 correcciones; si no, se declina"},{id:"f",tipo:"fin",c:"enlace",col:6,t:"Sigue G4"}],aristas:[["8","9"],["9","10"],["10","11"],["11","12"],["12","d"],["d","s","No"],["s","12","","regreso"],["d","f","S\xED"]]},g4a:{carriles:["subplice","digeduca"],nodos:[{id:"13",n:13,c:"subplice",col:0,t:"Trasladar n\xF3mina",s:"Personal con expediente completo"},{id:"14",n:14,c:"digeduca",col:1,t:"Programar evaluaci\xF3n",s:"Fechas, horarios y condiciones"},{id:"15",n:15,c:"digeduca",col:2,t:"Informar al personal",s:"Por correo y por medio de los enlaces"},{id:"16",n:16,c:"digeduca",col:3,t:"Aplicar evaluaci\xF3n",s:"Comprensi\xF3n lectora en idioma maya, xinka o gar\xEDfuna"},{id:"17",n:17,c:"digeduca",col:4,t:"Analizar resultados",s:"Identifica a quienes alcanzan el m\xEDnimo"},{id:"18",n:18,c:"digeduca",col:5,t:"Trasladar resultados",s:"Resultados oficiales a DIGEBI"},{id:"d",tipo:"decision",c:"subplice",col:6,t:"\xBF70 o m\xE1s?"},{id:"no",tipo:"nota",c:"digeduca",col:6,t:"No contin\xFAa",s:"Se registra y comunica el resultado"},{id:"f",tipo:"fin",c:"subplice",col:7,t:"Sigue 19 a 21"}],aristas:[["13","14"],["14","15"],["15","16"],["16","17"],["17","18"],["18","d"],["d","no","No"],["d","f","S\xED"]]},g4b:{carriles:["subplice","enlace"],nodos:[{id:"19",n:19,c:"subplice",col:0,t:"Trasladar aprobados",s:"N\xF3mina de aprobados a cada DIDEDUC"},{id:"20",n:20,c:"enlace",col:1,t:"Cargar resultados",s:"Asocia cada resultado a su expediente"},{id:"21",n:21,c:"subplice",col:2,t:"Verificar la carga",s:"Coteja la plataforma con las n\xF3minas"},{id:"d",tipo:"decision",c:"subplice",col:3,t:"\xBFCoinciden?"},{id:"r",tipo:"nota",c:"enlace",col:3,t:"Solicitar rectificaci\xF3n",s:"Se corrige antes de validar"},{id:"f",tipo:"fin",c:"subplice",col:4,t:"Sigue G5"}],aristas:[["19","20"],["20","21"],["21","d"],["d","r","No"],["r","20","","regreso"],["d","f","S\xED"]]},g5:{carriles:["subplice","enlace","digemoca"],nodos:[{id:"22",n:22,c:"subplice",col:0,t:"Aprobar herramientas",s:"Instrumentos oficiales de verificaci\xF3n"},{id:"23",n:23,c:"enlace",col:1,t:"Programar verificaci\xF3n",s:"Fechas, establecimientos y log\xEDstica"},{id:"m",tipo:"nota",c:"digemoca",col:1,t:"Coordina y acompa\xF1a",s:"Garantiza confiabilidad y validez"},{id:"24",n:24,c:"enlace",col:2,t:"Verificar EBI",s:"Presencial; aprueba con 70 puntos o m\xE1s"},{id:"25",n:25,c:"enlace",col:3,t:"Cargar instrumento",s:"Resultado e instrumento completo y legible"},{id:"26",n:26,c:"subplice",col:4,t:"Validar resultados",s:"Comprensi\xF3n lectora y EBI registrados"},{id:"d",tipo:"decision",c:"subplice",col:5,t:"\xBFAcreditada?"},{id:"o",tipo:"nota",c:"enlace",col:5,t:"Aclarar observaciones",s:"O notificar el resultado"},{id:"f",tipo:"fin",c:"subplice",col:6,t:"Sigue G6"}],aristas:[["22","23"],["23","m","","abajo"],["23","24"],["24","25"],["25","26"],["26","d"],["d","o","No"],["d","f","S\xED"]]},g6:{carriles:["subplice","direh"],nodos:[{id:"27",n:27,c:"subplice",col:0,t:"Consolidar n\xF3mina",s:"Solo expedientes con cumplimiento validado"},{id:"28",n:28,c:"subplice",col:1,t:"Trasladar a DIREH",s:"Mediante oficio, con respaldos"},{id:"d",tipo:"decision",c:"direh",col:2,t:"\xBFConforme?"},{id:"o",tipo:"nota",c:"direh",col:3,t:"Devolver observaciones",s:"Inconsistencias por subsanar"},{id:"a",tipo:"nota",c:"subplice",col:3,t:"Atender observaciones",s:"Corrige y remite de nuevo"},{id:"29",n:29,c:"direh",col:4,t:"Gestionar y pagar",s:"Conforme a la normativa"},{id:"cc",tipo:"nota",c:"direh",col:5,t:"Comunicar conclusi\xF3n",s:"Estado y cierre a DIGEBI"},{id:"f",tipo:"fin",c:"direh",col:6,t:"Fin"}],aristas:[["27","28"],["28","d"],["d","o","No"],["o","a"],["a","28","","regreso"],["d","29","S\xED"],["29","cc"],["cc","f"]]}},Fd=1836,Od=258,o1={observaciones:"ob\xADser\xADva\xADcio\xADnes",herramientas:"he\xADrra\xADmien\xADtas",verificaci\u00F3n:"ve\xADri\xADfi\xADca\xADci\xF3n",convocatoria:"con\xADvo\xADca\xADto\xADria",rectificaci\u00F3n:"rec\xADti\xADfi\xADca\xADci\xF3n",lineamientos:"li\xADnea\xADmien\xADtos",designaci\u00F3n:"de\xADsig\xADna\xADci\xF3n",divulgaci\u00F3n:"di\xADvul\xADga\xADci\xF3n",documentos:"do\xADcu\xADmen\xADtos",plataforma:"pla\xADta\xADfor\xADma",resultados:"re\xADsul\xADta\xADdos",evaluaci\u00F3n:"eva\xADlua\xADci\xF3n",instrumento:"ins\xADtru\xADmen\xADto",conclusi\u00F3n:"con\xADclu\xADsi\xF3n",materiales:"ma\xADte\xADria\xADles",departamental:"de\xADpar\xADta\xADmen\xADtal"};function l1(i){return i.replace(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+/g,e=>{let t=e.toLowerCase(),n=o1[t];if(n){let s=0;return n.replace(/[^-\u00AD]/g,()=>e[s++]||"")}return e.length>=11?e.slice(0,6)+"\xAD"+e.slice(6):e})}function Bd(i){let e=i.querySelectorAll(".nodo.paso, .nodo.nota");for(let t of e){let n=t.querySelector("b");if(!n||t.clientWidth===0)continue;t.dataset.wBase?(t.style.width=t.dataset.wBase,t.style.left=t.dataset.xBase):(t.dataset.wBase=t.style.width,t.dataset.xBase=t.style.left);let s=34,r=n.querySelector(".num");for(n.style.fontSize=s+"px",r&&(r.style.fontSize=s+"px");s>28&&(t.scrollWidth>t.clientWidth+1||t.scrollHeight>t.clientHeight+1);)s-=1,n.style.fontSize=s+"px",r&&(r.style.fontSize=s+"px");if(t.scrollWidth>t.clientWidth+1){let a=Math.ceil(t.scrollWidth-t.clientWidth)+8,o=parseFloat(t.style.width)||t.offsetWidth,l=parseFloat(t.style.left)||t.offsetLeft;t.style.width=o+a+"px",t.style.left=Math.max(Od+4,l-a/2)+"px"}}}function c1(i,e,t,n){if(i==="g6"){let o=[234,234,258,246,234,240,120],l=o.reduce((c,h)=>c+h,0);return o.map(c=>c/l*n)}if(i==="g4a"){let o=[340,340,340,340,206],l=o.reduce((c,h)=>c+h,0);return o.map(c=>c/l*n)}let s=Array.from({length:t},()=>new Set);for(let o of e.nodos)s[o.col].add(o.tipo||"paso");let r=s.map(o=>o.size===1&&o.has("inicio")?.62:o.size===1&&o.has("fin")?.72:1),a=r.reduce((o,l)=>o+l,0);return r.map(o=>o/a*n)}function Cg(i,e){let t=a1[e],n=e==="g4a",s=n?5:Math.max(...t.nodos.map(w=>w.col))+1,r=Fd-Od-12,a=c1(e,t,s,r),o=[],l=Od+8;for(let w of a)o.push(l+w/2),l+=w;let h={g1:[196,196,196],g2:[222,222,222],g3:[222,222,222],g4a:[216,444],g4b:[290,290],g5:[196,196,196],g6:[270,270]}[e]||t.carriles.map(()=>t.carriles.length===2?270:204),u=[],d=0;for(let w of h)u.push(d),d+=w;let p=d+(e==="g6"?42:0),g={g1:162,g2:178,g3:178,g4a:176,g4b:204,g5:162,g6:192}[e]||170;i.style.width=Fd+"px",i.style.height=p+"px",i.classList.add("flujo");let m={13:{col:0,sub:0},14:{col:0,sub:0},15:{col:1,sub:0},16:{col:2,sub:0},17:{col:1,sub:1},18:{col:2,sub:1},d:{col:3,sub:0},no:{col:3,sub:0},f:{col:4,sub:0}},v={},x=Object.fromEntries(t.carriles.map((w,_)=>[w,_]));for(let w of t.nodos){let _=w.tipo||"paso",b=x[w.c],C=w.col,T=u[b]+h[b]/2;if(n&&m[w.id]&&(C=m[w.id].col,b===1)){let G=h[1]/2;T=u[1]+m[w.id].sub*G+G/2}let P=a[C],N=_==="inicio"?Math.min(144,Math.floor(P-12)):_==="fin"?Math.min(188,Math.floor(P-10)):_==="decision"?214:Math.min(316,Math.floor(P-16)),R=_==="inicio"||_==="fin"?72:_==="decision"?158:g,L=e==="g6"&&w.id==="d"?-14:0,F=o[C]+L;v[w.id]={cx:F,cy:T,w:N,h:R,x:F-N/2,y:T-R/2,tipo:_,col:C,fIdx:b}}t.carriles.forEach((w,_)=>{let b=document.createElement("div");b.className=`carril dep-${$c[w].d}`,b.style.top=u[_]+"px",b.style.height=h[_]+"px",b.innerHTML=`<span>${$c[w].t}</span>`,i.appendChild(b)});let E=Object.fromEntries(t.nodos.map((w,_)=>[w.id,_])),y="http://www.w3.org/2000/svg",M=document.createElementNS(y,"svg");M.setAttribute("viewBox",`0 0 ${Fd} ${p}`),M.setAttribute("class","conexiones"),M.innerHTML=`<defs><marker id="pt-${e}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#4281B7"/></marker><marker id="pt-si-${e}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#176B4B"/></marker><marker id="pt-no-${e}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#E8434A"/></marker></defs>`;for(let[w,_,b="",C=""]of t.aristas){let T=v[w],P=v[_],N,R,L,F="start",G=Math.abs(T.cy-P.cy)<2&&P.col-T.col>1&&C!=="regreso";if(n&&w==="16"&&_==="17"){let X=u[1]+h[1]/2;N=`M${T.cx},${T.y+T.h} V${X} H${P.cx} V${P.y}`}else if(n&&w==="18"&&_==="d"){let X=T.x+T.w+20;N=`M${T.x+T.w},${T.cy} H${X} V${P.cy} H${P.x}`}else if(G){let X=Math.max(T.y+T.h,P.y+P.h)+30;N=`M${T.cx},${T.y+T.h} V${X} H${P.cx} V${P.y+P.h}`,R=(T.cx+P.cx)/2,L=X+30,F="middle"}else if(C==="regreso")if(Math.abs(T.cx-P.cx)<2){let X=P.cy>T.cy;N=`M${T.cx+22},${X?T.y+T.h:T.y} V${X?P.y:P.y+P.h}`}else if(Math.abs(T.cy-P.cy)<2){let X=T.y+T.h+20;N=`M${T.cx},${T.y+T.h} V${X} H${P.cx} V${P.y+P.h}`}else N=`M${T.x},${T.cy} H${P.cx+16} V${P.cy>T.cy?P.y:P.y+P.h}`;else if(Math.abs(T.cx-P.cx)<2||C==="abajo"){let X=t.aristas.some(Pe=>Pe[0]===_&&Pe[1]===w),Q=P.cy>T.cy,fe=T.cx-(X?18:0);N=`M${fe},${Q?T.y+T.h:T.y} V${Q?P.y:P.y+P.h}`,X?(R=fe-14,F="end"):(R=fe+14,F="start"),L=(T.cy+P.cy)/2+10}else{let X=T.x+T.w,Q=P.x,fe=(X+Q)/2;N=T.cy===P.cy?`M${X},${T.cy} H${Q}`:`M${X},${T.cy} H${fe} V${P.cy} H${Q}`,e==="g6"&&w==="d"&&_==="o"?(R=fe-10,L=T.cy-22,F="middle"):(R=fe,L=T.cy-18,F="middle")}let B=b==="S\xED"?" si":b==="No"?" no":"",K=b==="S\xED"?`pt-si-${e}`:b==="No"?`pt-no-${e}`:`pt-${e}`,V=document.createElementNS(y,"g");V.setAttribute("class",`fragment arista${B}`),V.setAttribute("data-fragment-index",String(E[C==="regreso"?w:_])),V.innerHTML=`<path d="${N}" marker-end="url(#${K})" ${C==="regreso"?'stroke-dasharray="6 6" class="punteada"':""}/>`+(b?`<text x="${R}" y="${L}" text-anchor="${F}">${b}</text>`:""),M.appendChild(V)}i.appendChild(M);for(let w of t.nodos){let _=v[w.id],b=document.createElement("div");if(b.className=`fragment nodo ${_.tipo} dep-${$c[w.c].d}`,b.dataset.fragmentIndex=String(E[w.id]),b.dataset.dep=$c[w.c].d,w.n&&(b.dataset.n=String(w.n)),w.s){let C=`${w.n?w.n+". ":""}${w.t}: ${w.s}`;b.title=C,b.setAttribute("aria-label",C)}Object.assign(b.style,{left:_.x+"px",top:_.y+"px",width:_.w+"px",height:_.h+"px"}),_.tipo==="inicio"?b.innerHTML="<b>Inicio</b>":_.tipo==="fin"?b.innerHTML=`<b>${w.t}</b>`:_.tipo==="decision"?b.innerHTML=`<svg class="rombo-svg" viewBox="0 0 214 158" aria-hidden="true"><polygon points="107,4 210,79 107,154 4,79"/></svg><b>${w.t}</b>`:b.innerHTML=`<b>${w.n?`<span class="num">${w.n}</span> `:""}${l1(w.t)}</b>`,i.appendChild(b)}}var h1="http://www.w3.org/2000/svg",at={marino:"#113C6F",azulIcono:"#4281B7",texto2:"#2E4A70",papel:"#EEF6FC",amarillo:"#F8D965",rojo:"#E8434A",rojoTexto:"#B81D24",blanco:"#FFFFFF",grisFondo:"#CBD5E1",grisBorde:"#475569",compFondo:"#D6E9F8"},Vr="'Outfit', 'Segoe UI', Arial, sans-serif",fs="'Atkinson Hyperlegible', 'Segoe UI', Arial, sans-serif";function ct(i,e={},t=""){let n=document.createElementNS(h1,i);for(let[s,r]of Object.entries(e))n.setAttribute(s,String(r));return t!==""&&(n.textContent=t),n}var Pg=[{nombre:"DIGEBI",propias:15,compartidas:3},{nombre:"DIDEDUC (6 a cargo del enlace)",propias:6,compartidas:1,destacada:!0},{nombre:"DIGEDUCA",propias:2,compartidas:3},{nombre:"DIGEMOCA",propias:0,compartidas:1},{nombre:"Personal solicitante",propias:1,compartidas:0},{nombre:"DIREH",propias:1,compartidas:0},{nombre:"DICOMS",propias:0,compartidas:0,nota:"participa en la actividad 7"}];function u1(i){let h=ct("svg",{viewBox:"0 0 1792 564",class:"grafica-svg",role:"img","aria-label":"Actividades por dependencia responsable: propias y compartidas"}),u=ct("defs"),d=ct("pattern",{id:"rayado-marino",width:14,height:14,patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"});d.appendChild(ct("rect",{width:14,height:14,fill:at.compFondo})),d.appendChild(ct("line",{x1:0,y1:0,x2:0,y2:14,stroke:at.marino,"stroke-width":4.5})),u.appendChild(d);let p=ct("pattern",{id:"rayado-amarillo",width:14,height:14,patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"});p.appendChild(ct("rect",{width:14,height:14,fill:at.amarillo})),p.appendChild(ct("line",{x1:0,y1:0,x2:0,y2:14,stroke:at.marino,"stroke-width":4})),u.appendChild(p),h.appendChild(u);let f=ct("g");f.appendChild(ct("rect",{x:594,y:8,width:32,height:26,rx:3,fill:at.marino})),f.appendChild(ct("text",{x:636,y:31,fill:at.marino,"font-family":fs,"font-size":30,"font-weight":700},"Propias (25)")),f.appendChild(ct("rect",{x:884,y:8,width:32,height:26,rx:3,fill:"url(#rayado-marino)",stroke:at.marino,"stroke-width":2.5})),f.appendChild(ct("text",{x:926,y:31,fill:at.marino,"font-family":fs,"font-size":30,"font-weight":700},"Compartidas (4)")),h.appendChild(f),h.appendChild(ct("line",{x1:594,y1:50,x2:594,y2:58+(Pg.length-1)*72+56+6,stroke:at.marino,"stroke-width":4})),Pg.forEach((g,m)=>{let v=58+m*72,x=v+56/2;h.appendChild(ct("text",{x:574,y:x+12,"text-anchor":"end",fill:at.marino,"font-family":fs,"font-size":34,"font-weight":700},g.nombre));let E=g.propias*56,y=g.compartidas*56,M=E+y;E>0&&h.appendChild(ct("rect",{x:594,y:v,width:E,height:56,rx:4,fill:g.destacada?at.amarillo:at.marino,stroke:g.destacada?at.marino:"none","stroke-width":g.destacada?3:0,class:"g-rect-h","data-x":594,"data-w":E,"data-x0":594})),y>0&&h.appendChild(ct("rect",{x:594+E,y:v,width:y,height:56,rx:4,fill:g.destacada?"url(#rayado-amarillo)":"url(#rayado-marino)",stroke:at.marino,"stroke-width":g.destacada?3:2.5,class:"g-rect-h","data-x":594+E,"data-w":y,"data-x0":594}));let w=g.nota?`0 \xB7 ${g.nota}`:g.compartidas>0?`${g.propias} + ${g.compartidas}`:`${g.propias}`;h.appendChild(ct("text",{x:594+M+20,y:x+12,fill:at.marino,"font-family":fs,"font-size":34,"font-weight":700},w))}),i.appendChild(h)}var Ig=[{id:"G1",ico:"#ico-g1",n:4,l1:"Nombramiento",l2:"del enlace"},{id:"G2",ico:"#ico-g2",n:3,l1:"Promoci\xF3n y",l2:"divulgaci\xF3n"},{id:"G3",ico:"#ico-g3",n:5,l1:"Convocatoria",l2:"y solicitud"},{id:"G4",ico:"#ico-g4",n:9,l1:"Comprensi\xF3n",l2:"lectora",filtro:!0},{id:"G5",ico:"#ico-g5",n:5,l1:"Verificaci\xF3n",l2:"de la EBI",filtro:!0},{id:"G6",ico:"#ico-g6",n:3,l1:"N\xF3mina",l2:"y pago"}];function d1(i){let a=1792/Ig.length,o=176,l=ct("svg",{viewBox:"0 0 1792 602",class:"grafica-svg",role:"img","aria-label":"Distribuci\xF3n de las 29 actividades en 6 grupos, con filtros de 70 puntos en G4 y G5"});Ig.forEach((c,h)=>{let u=a*(h+.5),d=c.n/9*394,p=u-o/2,f=464-d;if(l.appendChild(ct("rect",{x:p,y:f,width:o,height:d,rx:5,fill:at.marino,class:"g-rect-v","data-y":f,"data-h":d,"data-ybase":464})),l.appendChild(ct("text",{x:u,y:f-16,"text-anchor":"middle",fill:at.marino,"font-family":Vr,"font-size":60,"font-weight":800},String(c.n))),c.filtro){let y=u-118,M=c.n>=8?f+26:f-122;l.appendChild(ct("rect",{x:y,y:M,width:236,height:46,rx:7,fill:at.blanco,stroke:at.rojo,"stroke-width":3.5})),l.appendChild(ct("text",{x:u,y:M+32,"text-anchor":"middle",fill:at.rojoTexto,"font-family":Vr,"font-size":28,"font-weight":700},"filtro 70 puntos"))}let g=478,m=u-64;l.appendChild(ct("rect",{x:m,y:g,width:46,height:46,rx:6,fill:at.marino}));let v=ct("svg",{x:m+5,y:g+5,width:36,height:36,viewBox:"0 0 48 48"});v.style.color=at.azulIcono,v.appendChild(ct("use",{href:c.ico})),l.appendChild(v),l.appendChild(ct("text",{x:m+60,y:g+36,fill:at.marino,"font-family":Vr,"font-size":38,"font-weight":800},c.id)),l.appendChild(ct("text",{x:u,y:g+86,"text-anchor":"middle",fill:at.marino,"font-family":fs,"font-size":32,"font-weight":700},c.l1)),l.appendChild(ct("text",{x:u,y:g+122,"text-anchor":"middle",fill:at.marino,"font-family":fs,"font-size":32,"font-weight":700},c.l2))}),l.appendChild(ct("line",{x1:20,y1:464,x2:1772,y2:464,stroke:at.marino,"stroke-width":4})),i.appendChild(l)}var zd=[{titulo:"Bloque 1",sub:"G1 a G3",min:60,hIni:"8:15",hFin:"9:15",tipo:"bloque"},{titulo:"Bloque 2",sub:"G4 \xB7 DIGEDUCA",min:75,hIni:"9:15",hFin:"10:30",tipo:"destacado"},{titulo:"Refacci\xF3n",sub:"",min:20,hIni:"10:30",hFin:"10:50",tipo:"pausa"},{titulo:"Bloque 3",sub:"G5 y G6",min:70,hIni:"10:50",hFin:"12:00",tipo:"bloque"}];function f1(i){let a=zd.reduce((p,f)=>p+f.min,0),o=462,l=212,c=136,h=ct("svg",{viewBox:"0 0 1792 562",class:"grafica-svg",role:"img","aria-label":"Agenda proporcional del 25 de noviembre de 8:15 a 12:00: Bloque 1 (60 min), Bloque 2 (75 min), Refacci\xF3n (20 min) y Bloque 3 (70 min)"}),u=28,d=[{x:28,hora:"8:15",ancla:"start"}];zd.forEach((p,f)=>{let g=p.min/a*1736,m=p.tipo==="pausa",v=p.tipo==="destacado",x=m?c:l,E=o-x,y=u+g/2;m?(h.appendChild(ct("text",{x:y,y:214,"text-anchor":"middle",fill:at.marino,"font-family":Vr,"font-size":44,"font-weight":800},p.titulo)),h.appendChild(ct("line",{x1:y,y1:228,x2:y,y2:E-10,stroke:at.grisBorde,"stroke-width":3.5,"stroke-dasharray":"6 6"}))):(h.appendChild(ct("text",{x:y,y:66,"text-anchor":"middle",fill:at.marino,"font-family":Vr,"font-size":48,"font-weight":800},p.titulo)),p.sub&&h.appendChild(ct("text",{x:y,y:116,"text-anchor":"middle",fill:at.texto2,"font-family":fs,"font-size":36,"font-weight":700},p.sub))),h.appendChild(ct("rect",{x:u+2,y:E,width:g-4,height:x,rx:8,fill:v?at.amarillo:m?at.grisFondo:at.marino,stroke:v?at.marino:m?at.grisBorde:at.marino,"stroke-width":v?3.5:2.5,class:"g-rect-h","data-x":u+2,"data-w":g-4,"data-x0":u+2})),h.appendChild(ct("text",{x:y,y:E+x/2+(m?15:20),"text-anchor":"middle",fill:v||m?at.marino:at.blanco,"font-family":Vr,"font-size":m?44:56,"font-weight":800},`${p.min} min`)),u+=g,d.push({x:u,hora:p.hFin,ancla:f===zd.length-1?"end":"middle"})}),h.appendChild(ct("line",{x1:28,y1:o,x2:1764,y2:o,stroke:at.marino,"stroke-width":4}));for(let p of d)h.appendChild(ct("line",{x1:p.x,y1:o,x2:p.x,y2:o+20,stroke:at.marino,"stroke-width":3.5})),h.appendChild(ct("text",{x:p.x,y:o+70,"text-anchor":p.ancla,fill:at.marino,"font-family":fs,"font-size":38,"font-weight":700},p.hora));i.appendChild(h)}var p1={responsables:u1,grupos:d1,agenda:f1};function Lg(i,e){let t=p1[e];t&&(i.innerHTML="",i.classList.add("grafica"),t(i))}function Dg(i,e){if(i.dataset.animada==="1"||(i.dataset.animada="1",e))return;let t=i.querySelectorAll(".g-rect-h"),n=i.querySelectorAll(".g-rect-v");t.forEach((s,r)=>{let a=Number(s.dataset.x),o=Number(s.dataset.w),l=Number(s.dataset.x0);mn.fromTo(s,{attr:{x:l,width:0}},{attr:{x:a,width:o},duration:.8,delay:r*.04,ease:"power2.out"})}),n.forEach((s,r)=>{let a=Number(s.dataset.y),o=Number(s.dataset.h),l=Number(s.dataset.ybase);mn.fromTo(s,{attr:{y:l,height:0}},{attr:{y:a,height:o},duration:.8,delay:r*.05,ease:"power2.out"})})}var Yc=window.matchMedia("(prefers-reduced-motion: reduce)").matches,m1=29;document.querySelectorAll("[data-flujo]").forEach(i=>Cg(i,i.dataset.flujo));document.querySelectorAll("[data-grafica]").forEach(i=>Lg(i,i.dataset.grafica));var Vd=document.getElementById("contador");function g1(i,{hechas:e,actual:t}){if(i!=="banda"||!t&&e<=0){Vd.hidden=!0;return}let n=t||e;Vd.textContent=`Actividad ${n} de ${m1}`,Vd.hidden=!1}var Ng={ir(){}};try{Ng=Rg(document.getElementById("rombos"))}catch(i){document.body.classList.add("sin-3d"),console.warn("WebGL no disponible",i)}function v1(i){if(!i)return null;let e=i.split("-").map(Number);return e.length===2&&e[0]>0&&e[1]>0?e:null}function _1(i){let e=Number(i.dataset.hechas||0),t=[...i.querySelectorAll(".fragment.visible[data-n]")].map(r=>Number(r.dataset.n)).filter(r=>r>0);if(!t.length)return{hechas:e,actual:null};let n=Math.max(...t);return{hechas:Math.max(e,n-1),actual:n}}function Kc(i){let e=i.dataset.escena||"banda",t=v1(i.dataset.foco),n=_1(i);document.body.dataset.escena=e,Ng.ir(e,{...n,foco:t}),g1(e,n)}function kg(i){if(Bd(i),i.querySelectorAll("[data-grafica]").forEach(s=>Dg(s,Yc)),Yc)return;let e=i.querySelector(".t-entra"),t=i.querySelectorAll(".c-entra"),n=mn.timeline();e&&n.fromTo(e,{y:24,opacity:0,clipPath:"inset(0 0 100% 0)"},{y:0,opacity:1,clipPath:"inset(0 0 0% 0)",duration:.75,ease:"power3.out"}),t.length&&n.fromTo(t,{y:14,opacity:0},{y:0,opacity:1,duration:.55,stagger:.06,ease:"power2.out"},"-=0.32")}var Hr=document.getElementById("reloj"),Zc={},Gr=null,Hd=0;function y1(i){return`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`}function Jc(){if(!Gr){Hr.hidden=!0;return}Hr.hidden=!1;let i=(Date.now()-Zc[Gr])/1e3,e=Hd*60;Hr.querySelector(".t").textContent=`${y1(i)} de ${Hd}:00`,Hr.querySelector(".b").style.width=`${(Math.min(i/e,1)*100).toFixed(2)}%`,Hr.classList.toggle("aviso",i>e*.85)}setInterval(Jc,1e3);function Ug(i){let e=i.closest("[data-bloque]")||i,t=e.dataset.bloque;if(!t){Gr=null,Jc();return}Gr=t,Hd=Number(e.dataset.min),Hr.querySelector(".n").textContent=e.dataset.nombreBloque,Zc[t]||(Zc[t]=Date.now()),Jc()}document.addEventListener("keydown",i=>{i.key.toLowerCase()==="t"&&Gr&&(Zc[Gr]=Date.now(),Jc())});var ps=new Si({width:1920,height:1080,margin:0,minScale:.2,maxScale:2,hash:!0,controls:!0,controlsTutorial:!1,progress:!0,center:!1,transition:Yc?"none":"fade",transitionSpeed:"default",backgroundTransition:"none",plugins:[yf]});ps.initialize().then(()=>{let i=ps.getCurrentSlide();Kc(i),Ug(i),kg(i),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>Bd(ps.getCurrentSlide()))});ps.on("slidechanged",i=>{Kc(i.currentSlide),Ug(i.currentSlide),kg(i.currentSlide)});ps.on("fragmentshown",i=>{Kc(ps.getCurrentSlide());for(let e of i.fragments){let t=e.querySelector&&e.querySelector("path");if(t&&!Yc){let n=t.getTotalLength();mn.fromTo(t,{strokeDasharray:n,strokeDashoffset:n},{strokeDashoffset:0,duration:.45,ease:"power2.out",onComplete:()=>{t.style.strokeDasharray=t.classList.contains("punteada")?"6 6":""}})}}});ps.on("fragmenthidden",()=>Kc(ps.getCurrentSlide()));})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.1
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
