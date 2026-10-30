(() => {
  const config = window.NEC_CONFIG || {};
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const whatsapp = document.getElementById('whatsappLink');
  if (whatsapp && config.whatsappNumber) {
    const message = config.whatsappMessage || 'Hello Never Ending Captures, I would like to enquire about a photography or film project.';
    whatsapp.href = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
    whatsapp.target = '_blank';
    whatsapp.rel = 'noopener noreferrer';
  }

  const menuButton = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeMenu = () => {
    mobileMenu?.classList.remove('open');
    mobileMenu?.setAttribute('aria-hidden', 'true');
    menuButton?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };
  menuButton?.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('open');
    mobileMenu.classList.toggle('open', isOpen);
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    menuButton.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
  });
  mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });

  const heroVideo = document.querySelector('.hero-video');
  const heroPoster = document.querySelector('.hero-poster');
  if (heroVideo) {
    const showPoster = () => { if (heroPoster) heroPoster.style.display = 'block'; };
    heroVideo.addEventListener('error', showPoster);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      heroVideo.pause();
      showPoster();
    } else {
      const playPromise = heroVideo.play();
      if (playPromise?.catch) playPromise.catch(showPoster);
    }
  }

  const revealItems = document.querySelectorAll('.intro, .section-top, .work-card, .interior-gallery figure, .capabilities > div, .corporate-copy, .corporate-art, .corporate-services > div, .film-content, .about-mark, .about-copy');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => {
      item.classList.add('reveal');
      observer.observe(item);
    });
  } else {
    revealItems.forEach(item => item.classList.add('visible'));
  }

  const modal = document.getElementById('filmModal');
  const film = document.getElementById('filmVideo');
  const openFilm = document.getElementById('openFilm');
  const closeFilm = () => {
    modal?.classList.remove('open');
    modal?.setAttribute('aria-hidden', 'true');
    film?.pause();
    document.body.style.overflow = '';
  };
  openFilm?.addEventListener('click', () => {
    modal?.classList.add('open');
    modal?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    film?.play().catch(() => {});
  });
  document.getElementById('closeFilm')?.addEventListener('click', closeFilm);
  modal?.addEventListener('click', event => {
    if (event.target === modal) closeFilm();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeFilm();
  });
})();