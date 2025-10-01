import"./style-D_2xh1s-.js";function u(n){n.addEventListener("click",()=>{const e=document.querySelector("#beans"),r=document.querySelector("#quote"),i=document.querySelector("#potTilt");if(!e||!r)return;n.classList.remove("tilted"),n.classList.add("tilted"),e.classList.remove("appear"),e.offsetWidth,e.classList.add("appear"),i&&(i.classList.remove("show"),i.offsetWidth,setTimeout(()=>{requestAnimationFrame(()=>{i.classList.add("show")})},1200));let d=!1;function c(t){if(!d)return;const o=t.getBoundingClientRect(),a=window.scrollY+o.bottom-window.innerHeight/2;window.scrollTo({top:a,behavior:"auto"}),requestAnimationFrame(()=>c(t))}e.addEventListener("animationstart",()=>{d=!0,requestAnimationFrame(()=>c(e))},{once:!0}),e.addEventListener("animationend",()=>{d=!1;const t=e.getBoundingClientRect(),o=window.scrollY+t.bottom+16,a=window.scrollX+t.left+t.width/2,l=o+200-document.documentElement.scrollHeight,m=document.getElementById("spacer");m&&l>0&&(m.style.height=`${l}px`),r.removeAttribute("hidden");const s=r;s.style.top=`${o}px`,s.style.left=`${a}px`,s.style.transform="translateX(-50%)",requestAnimationFrame(()=>s.classList.add("show")),window.scrollTo({top:o-window.innerHeight*.5,behavior:"smooth"})},{once:!0})})}document.querySelector("#app").innerHTML=`
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
`;u(document.querySelector("#pot"));
