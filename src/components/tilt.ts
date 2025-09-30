

export function tiltCoffiepot(element: HTMLElement) {
  element.addEventListener('click', () => {
    const beansImg = document.querySelector<HTMLImageElement>('#beans');
    const quote    = document.querySelector<HTMLDivElement>('#quote');
 
    const potTilt  = document.querySelector<HTMLImageElement>('#potTilt');
    if (!beansImg || !quote) return;

  
    element.classList.remove('tilted');
    element.classList.add('tilted');


    // bønnefall
    beansImg.classList.remove('appear'); void beansImg.offsetWidth;
    beansImg.classList.add('appear');

 
    //pot Tilt
    if (potTilt) {
      potTilt.classList.remove('show');   
      void potTilt.offsetWidth;           

      const crossfadeDelay = 1200; 
      setTimeout(() => {

        requestAnimationFrame(() => {
          potTilt.classList.add('show'); 
  
      });
      }, crossfadeDelay);
    }


    //Bønnene som faller 
    const delay = 500, duration = 3000;
    setTimeout(() => {
      const start = performance.now();
      (function frame(now: number) {
        const progress = Math.min((now - start) / duration, 1);
        const rect = beansImg.getBoundingClientRect();
        const targetY = window.scrollY + rect.bottom - window.innerHeight / 2;
        window.scrollTo({ top: targetY, behavior: 'auto' });
        if (progress < 1) requestAnimationFrame(frame);
      })(start);
    }, delay);


    // quote i bunnen av siden
    beansImg.addEventListener('animationend', () => {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
      quote.classList.add('show');
    }, { once: true });
  });
}
