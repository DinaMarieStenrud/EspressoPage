(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function f(c){c.addEventListener("click",()=>{const o=document.querySelector("#beans"),s=document.querySelector("#quote"),r=document.querySelector("#potTilt");if(!o||!s)return;c.classList.remove("tilted"),c.classList.add("tilted"),o.classList.remove("appear"),o.offsetWidth,o.classList.add("appear"),r&&(r.classList.remove("show"),r.offsetWidth,setTimeout(()=>{requestAnimationFrame(()=>{r.classList.add("show")})},1200));let e=!1;function t(i){if(!e)return;const n=i.getBoundingClientRect(),l=window.scrollY+n.bottom-window.innerHeight/2;window.scrollTo({top:l,behavior:"auto"}),requestAnimationFrame(()=>t(i))}o.addEventListener("animationstart",()=>{e=!0,requestAnimationFrame(()=>t(o))},{once:!0}),o.addEventListener("animationend",()=>{e=!1;const i=o.getBoundingClientRect(),n=window.scrollY+i.bottom+16,l=window.scrollX+i.left+i.width/2,a=n+200-document.documentElement.scrollHeight,u=document.getElementById("spacer");u&&a>0&&(u.style.height=`${a}px`),s.removeAttribute("hidden");const d=s;d.style.top=`${n}px`,d.style.left=`${l}px`,d.style.transform="translateX(-50%)",requestAnimationFrame(()=>d.classList.add("show")),window.scrollTo({top:n-window.innerHeight*.5,behavior:"smooth"})},{once:!0})})}document.querySelector("#app").innerHTML=`
  <div id="scene">
    <img id="pot" src="images/pot.png" alt="Pot" />
    <img id="potTilt" src="images/coffeTilt.png" alt="bilde"/>
    <img id="beans" src="images/beans.png" alt="beans" />
    <img id="arrow" src="images/arrow.png" alt="arrow" />
  </div>

  <div id="recipe"></div>

  <div id="quote" hidden>
    <p id="text">"More espresso, less depresso."</p>
    <a id="buttonRec" href="./recipe.html">Recipe</a>
  </div>

  <div id="spacer" aria-hidden="true"></div>
`;f(document.querySelector("#pot"));
