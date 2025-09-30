import '../style.css';
import { tiltCoffiepot } from '../components/tilt.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="scene">
    <img id="pot" src="/images/pot.png" alt="Pot" />
    <img id="potTilt" src="/images/coffeTilt.png" alt="bilde"/>
    <img id="beans" src="/images/beans.png" alt="beans" />
  </div>


  <div id="quote">
    <p> "More espresso, less depresso."</p>
  </div>
`;

tiltCoffiepot(document.querySelector<HTMLElement>('#pot')!);
