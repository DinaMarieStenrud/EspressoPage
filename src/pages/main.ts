import '../style.css'

import { setupCounter } from '../components/counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div className="circle-wrapper">
    <img src="/images/pot.png" alt="Pot" />
  </div>

`
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
