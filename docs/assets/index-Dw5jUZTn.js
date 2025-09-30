(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function f(i){i.addEventListener("click",()=>{const o=document.querySelector("#beans"),n=document.querySelector("#quote"),r=document.querySelector("#potTilt");if(!o||!n)return;i.classList.remove("tilted"),i.classList.add("tilted"),o.classList.remove("appear"),o.offsetWidth,o.classList.add("appear"),r&&(r.classList.remove("show"),r.offsetWidth,setTimeout(()=>{requestAnimationFrame(()=>{r.classList.add("show")})},1200));const e=500,t=3e3;setTimeout(()=>{const s=performance.now();(function c(a){const d=Math.min((a-s)/t,1),l=o.getBoundingClientRect(),u=window.scrollY+l.bottom-window.innerHeight/2;window.scrollTo({top:u,behavior:"auto"}),d<1&&requestAnimationFrame(c)})(s)},e),o.addEventListener("animationend",()=>{window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),n.classList.add("show")},{once:!0})})}document.querySelector("#app").innerHTML=`
  <div id="scene">
    <img id="pot" src="images/pot.png" alt="Pot" />
    <img id="potTilt" src="images/coffeTilt.png" alt="bilde"/>
    <img id="beans" src="images/beans.png" alt="beans" />
    <img id="arrow" src="images/arrow.png" alt="arrow" />
  </div>


  <div id="quote">
    <p> "More espresso, less depresso."</p>
  </div>
`;f(document.querySelector("#pot"));
