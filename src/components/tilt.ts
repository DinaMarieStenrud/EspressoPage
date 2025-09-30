

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


let follow = false;

function followScroll(beans: HTMLImageElement) {
  if (!follow) return;
  const rect = beans.getBoundingClientRect();
  const targetY = window.scrollY + rect.bottom - window.innerHeight / 2;
  window.scrollTo({ top: targetY, behavior: 'auto' });
  requestAnimationFrame(() => followScroll(beans));
}


  beansImg.addEventListener('animationstart', () => {
    follow = true;
    requestAnimationFrame(() => followScroll(beansImg));
  }, { once: true });


  beansImg.addEventListener('animationend', () => {
    follow = false;

    const rect = beansImg.getBoundingClientRect();
    const quoteY = window.scrollY + rect.bottom + 16; // 16px luft
    const quoteX = window.scrollX + rect.left + rect.width / 2;

    const need = quoteY + 200 - document.documentElement.scrollHeight;
    const spacer = document.getElementById('spacer') as HTMLDivElement | null;
    if (spacer && need > 0) spacer.style.height = `${need}px`;

    quote.removeAttribute('hidden');
    const q = quote as HTMLDivElement;
    q.style.top = `${quoteY}px`;
    q.style.left = `${quoteX}px`;
    q.style.transform = 'translateX(-50%)';

    requestAnimationFrame(() => q.classList.add('show'));

  
    window.scrollTo({ top: quoteY - window.innerHeight * 0.5, behavior: 'smooth' });
  }, { once: true });



  });
}
