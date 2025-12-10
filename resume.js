// Resume site interactivity: theme toggle, smooth scroll, skill animations
(function(){
  // Theme handling + nav behaviour + reveal animations + skill bars
  const themeToggle = document.getElementById('theme-toggle');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const downloadLink = document.getElementById('download-link');

  // Initialize theme
  const stored = localStorage.getItem('site-theme');
  if(stored === 'light') document.body.classList.add('theme-light');
  else if(stored === 'dark') document.body.classList.remove('theme-light');

  // Accessibility: ensure nav-toggle reports initial state
  if(navToggle){
    navToggle.setAttribute('aria-expanded', 'false');
  }

  function toggleTheme(){
    const isLight = document.body.classList.toggle('theme-light');
    localStorage.setItem('site-theme', isLight ? 'light' : 'dark');
  }
  if(themeToggle) themeToggle.addEventListener('click', toggleTheme);

  // Mobile nav toggle
  if(navToggle && navLinks){
    navToggle.addEventListener('click', ()=>{
      navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
  }

  // Close mobile nav with Escape key for accessibility
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && navLinks && navLinks.classList.contains('open')){
      navLinks.classList.remove('open');
      if(navToggle) navToggle.setAttribute('aria-expanded','false');
      navToggle.focus();
    }
  });

  // Smooth scroll for same-page anchors
  document.querySelectorAll('a.nav-link').forEach(a=>{
    const href = a.getAttribute('href');
    if(href && href.startsWith('#')){
      a.addEventListener('click', e=>{
        e.preventDefault();
        const id = href.slice(1);
        const el = document.getElementById(id);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
      });
    }
  });

  // Reveal observer + skill bar animate
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        entry.target.querySelectorAll('.bar span').forEach(el=>{
          const pct = el.dataset.pct || '0%';
          el.style.width = pct;
        });
      }
    });
  },{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(node=>observer.observe(node));

  // Project expand toggles (if any)
  document.querySelectorAll('.proj .toggle-details').forEach(btn=>{
    btn.addEventListener('click', e=>{
      const panel = btn.closest('.proj').querySelector('.proj-details');
      if(panel){
        panel.classList.toggle('open');
        btn.setAttribute('aria-expanded', panel.classList.contains('open'));
      }
    });
  });

  // If resume.pdf missing, make download button link to contact
  if(downloadLink){
    fetch('resume.pdf',{method:'HEAD'}).then(r=>{
      if(!r.ok) downloadLink.setAttribute('href','#contact');
    }).catch(()=>{downloadLink.setAttribute('href','#contact');});
  }

  // Contact form UX: try AJAX submit (falls back to native POST if CORS blocks)
  const contactForm = document.getElementById('contact-form');
  const contactStatus = document.getElementById('contact-status');
  if(contactForm){
    contactForm.addEventListener('submit', async (e)=>{
      e.preventDefault();
      if(contactStatus) contactStatus.textContent = 'Sending...';
      const action = contactForm.getAttribute('action') || window.location.href;
      const formData = new FormData(contactForm);

      try{
        // Attempt a fetch; use no-cors for Formsubmit to allow the POST
        await fetch(action, { method: 'POST', body: formData, mode: 'no-cors' });
        if(contactStatus) contactStatus.textContent = 'Thanks — your message was sent. Please check your email for confirmation.';
        contactForm.reset();
      }catch(err){
        // If fetch fails, fallback to default form submit
        if(contactStatus) contactStatus.textContent = 'Network error — attempting fallback submit.';
        contactForm.removeEventListener('submit', arguments.callee);
        contactForm.submit();
      }
    });
  }

  // Accessibility: show focus outline on keyboard navigation
  document.addEventListener('keyup',e=>{
    if(e.key === 'Tab') document.body.classList.add('show-focus');
  });

})();
