let mobileCont=document.querySelector(".Menu_Bar"),OP_Btn=document.querySelector(".Toggle"),CL_Btn=document.querySelector(".Circle"),searchIconH=document.querySelector(".headerSearchIcon"),searchPop=document.querySelector(".SearchBox-popup"),closeSearchH=document.querySelector(".SearchBox-popup .CloseSearch");searchIconH.addEventListener("click",(()=>{searchPop.classList.add("OpenSearch")})),closeSearchH.addEventListener("click",(()=>{searchPop.classList.remove("OpenSearch")}));const lenis=new Lenis({smoothWheel:!0,wheelMultiplier:2});function raf(e){lenis.raf(e),requestAnimationFrame(raf)}requestAnimationFrame(raf);let flag=!1;OP_Btn.addEventListener("click",(()=>{flag=!flag,mobileCont.classList.add("OP"),lenis.stop(),gsap.to(".Mobile_Header .Is_top",{y:"0",ease:"none",duration:.5}),gsap.to(".Mobile_Header .Is_bottom",{y:"0",ease:"none",duration:.5}),gsap.to(".Mobile_Header .Menu_Link",{x:"0",opacity:1,ease:"none",duration:.4,delay:1,stagger:.1}),gsap.to(".Mobile_Header .Row",{x:"0",opacity:1,ease:"none",duration:.4,delay:1,stagger:.1}),gsap.to(".Mobile_Header .Line",{width:"100%",opacity:1,ease:"none",duration:.4,delay:1}),gsap.to(".Mobile_Header .Circle",{scale:1,opacity:1,ease:"none",duration:.4,delay:1})})),gsap.set(".Mobile_Header .Is_top",{y:"-100%"}),gsap.set(".Mobile_Header .Is_bottom",{y:"+100%"}),gsap.set(".Mobile_Header .Menu_Link",{x:"-200%",opacity:0}),gsap.set(".Mobile_Header .Row",{x:"-200%",opacity:0}),gsap.set(".Mobile_Header .Line",{width:0}),gsap.set(".Mobile_Header .Circle",{scale:0,opacity:0}),CL_Btn.addEventListener("click",(()=>{flag=!flag,lenis.start(),gsap.to(".Mobile_Header .Menu_Link",{x:"-200%",opacity:0,ease:"none",duration:.2,stagger:.1}),gsap.to(".Mobile_Header .Row",{x:"-200%",opacity:0,ease:"none",duration:.2,stagger:.1}),gsap.to(".Mobile_Header .Line",{width:0,opacity:0,ease:"none",duration:.4,delay:1}),gsap.to(".Mobile_Header .Circle",{scale:0,opacity:0,ease:"none",duration:.4,delay:1}),gsap.to(".Mobile_Header .Is_top",{y:"-100%",ease:"none",duration:.5,delay:.8}),gsap.to(".Mobile_Header .Is_bottom",{y:"+100%",ease:"none",duration:.5,delay:.8}),setTimeout((()=>{mobileCont.classList.remove("OP"),lenis.start()}),1500)}));let wrapp=document.querySelector("#searchContainer");scrollbar=Scrollbar.init(wrapp),function(){"use strict";var e={input:document.querySelector('[search="input"]'),items:document.querySelectorAll('[search="item"]'),noResults:document.querySelector('[search="noResults"]'),clear:document.querySelector('[search="clear"]'),indexedItems:[],hasControls:function(){return null!=this.input&&null!=this.items}};function t(t){if(Array.prototype.filter.call(e.items,(function(e){return e.hasAttribute("open")})).length&&t.length>1)e.noResults.setAttribute("hidden","");else{if(t.length>1)return e.noResults.removeAttribute("hidden"),void Array.prototype.forEach.call(e.items,(function(e){e.setAttribute("hidden","")}));e.noResults.setAttribute("hidden","")}}function o(){Array.prototype.forEach.call(e.items,(function(e){e.innerHTML=e.innerHTML.replace(/<mark>([^<]+)<\/mark>/gi,"$1")}));var o=event.target.value.trim().toLowerCase();o.length>1?(e.indexedItems.forEach((function(t,n){-1!=e.indexedItems[n].indexOf(o)?(e.items[n].setAttribute("open",!0),e.items[n].removeAttribute("hidden"),e.items[n].innerHTML=e.items[n].innerHTML.replace(new RegExp(o+"(?!([^<]+)?>)","gi"),"<mark>$&</mark>")):(e.items[n].removeAttribute("open"),e.items[n].setAttribute("hidden",""))})),e.clear.removeAttribute("hidden")):(Array.prototype.forEach.call(e.items,(function(e){e.removeAttribute("open"),e.removeAttribute("hidden")})),e.clear.setAttribute("hidden","")),t(o)}e.noResults.setAttribute("hidden",""),e.hasControls()&&(Array.prototype.forEach.call(e.items,(function(t){e.indexedItems.push(t.textContent.replace(/\s{2,}/g," ").toLowerCase())})),e.input.addEventListener("keydown",(function(e){if(13===e.keyCode)return e.preventDefault(),!1})),e.input.addEventListener("keyup",(function(e){o()})),e.clear.addEventListener("click",(function(){event.target.setAttribute("hidden",""),t(""),o(),e.input.focus()})))}();