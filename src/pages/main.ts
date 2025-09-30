import '../style.css';
import { tiltCoffiepot } from '../components/tilt.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="scene">
    <img id="pot" src="images/pot.png" alt="Pot" />
    <img id="potTilt" src="images/coffeTilt.png" alt="bilde"/>
    <img id="beans" src="images/beans.png" alt="beans" />
    <img id="arrow" src="images/arrow.png" alt="arrow" />
  </div>

  <div id="recipe">
    
  </div>


  <div id="quote" hidden>
    <p id="text">"More espresso, less depresso."</p>
    <a href="recipe.html">
      <button id="buttonRec">Recipe</button>
    </a>
  </div>

  <div id="spacer" aria-hidden="true"></div>

`;

tiltCoffiepot(document.querySelector<HTMLElement>('#pot')!);
