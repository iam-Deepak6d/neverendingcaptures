(()=>{const c=window.NEC_CONFIG||{};const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();const w=document.getElementById('whatsappLink');if(w&&!String(c.whatsappNumber).includes('X')){w.href=`https://wa.me/${c.whatsappNumber}?text=${encodeURIComponent(c.whatsappMessage||'')}`;w.target='_blank';w.rel='noopener'}else if(w)w.addEventListener('click',()=>alert('Add your WhatsApp number in assets/js/config.js first.'));const t=document.querySelector('.menu-toggle'),m=document.querySelector('.mobile-menu');const close=()=>{m.classList.remove('open');m.setAttribute('aria-hidden','true');t.setAttribute('aria-expanded','false')};t?.addEventListener('click',()=>{const o=!m.classList.contains('open');m.classList.toggle('open',o);m.setAttribute('aria-hidden',String(!o));t.setAttribute('aria-expanded',String(o))});m?.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>ob.observe(e));const modal=document.getElementById('filmModal'),v=document.getElementById('filmVideo');document.getElementById('openFilm')?.addEventListener('click',()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false');v.play().catch(()=>{});document.body.style.overflow='hidden'});const cf=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');v.pause();document.body.style.overflow=''};document.getElementById('closeFilm')?.addEventListener('click',cf);modal?.addEventListener('click',e=>{if(e.target===modal)cf()});document.addEventListener('keydown',e=>{if(e.key==='Escape')cf()})})();
// HERO SLIDESHOW
const heroSlides = document.querySelectorAll('.hero-slide');

if (heroSlides.length > 1) {

  let heroCurrent = 0;

  // Make sure the first photo is visible
  heroSlides.forEach((slide, index) => {
    slide.classList.toggle('active', index === 0);
  });

  // Change photo every 3 seconds
  setInterval(() => {

    const nextSlide =
      (heroCurrent + 1) % heroSlides.length;

    // Fade the next photo in first
    heroSlides[nextSlide].classList.add('active');

    // Wait for the smooth fade before hiding the previous photo
    setTimeout(() => {
      heroSlides[heroCurrent].classList.remove('active');
      heroCurrent = nextSlide;
    }, 1200);

  }, 3000);
}
