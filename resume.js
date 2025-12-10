// Resume site interactivity: theme toggle, smooth scroll, skill animations
(function(){
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const downloadLink = document.getElementById('download-link');

  // Theme handling
  const stored = localStorage.getItem('site-theme');
  if(stored === 'light') document.body.classList.add('theme-light');
  if(stored === 'dark') document.body.classList.remove('theme-light');

  function toggleTheme(){
    const isLight = document.body.classList.toggle('theme-light');
    localStorage.setItem('site-theme', isLight ? 'light' : 'dark');
  }
  if(themeToggle) themeToggle.addEventListener('click', toggleTheme);

  // Smooth scroll for nav links
  document.querySelectorAll('a.nav-link').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
    });
  });

  // Reveal on scroll + animate skill bars
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        // animate inside bars
        entry.target.querySelectorAll('.bar span').forEach(el=>{
          const pct = el.dataset.pct || '0%';
          el.style.width = pct;
        });
      }
    });
  },{threshold:0.12});

  document.querySelectorAll('.reveal').forEach(node=>observer.observe(node));

  // If resume.pdf missing, make download button link to contact
  if(downloadLink){
    fetch('resume.pdf',{method:'HEAD'}).then(r=>{
      if(!r.ok) downloadLink.setAttribute('href','#contact');
    }).catch(()=>{downloadLink.setAttribute('href','#contact');});
  }

  // Accessibility: focus visible for buttons
  document.addEventListener('keyup',e=>{
    if(e.key === 'Tab') document.body.classList.add('show-focus');
  });

})();
