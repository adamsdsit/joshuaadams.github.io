// Example: Smooth scrolling for navigation links
$(document).ready(function(){
  $('a.nav-link').on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});
const links = document.querySelectorAll('.nav-link');
const currentPath = window.location.pathname;

links.forEach(link => {
  if (link.getAttribute('href') === currentPath.split("/").pop()) {
    link.classList.add('active');
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || (linkPath === 'index.html' && currentPath === '')) {
      link.classList.add('active');
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const phone = ['727', '505', '0626'].join('-');
  document.getElementById('phone').textContent = phone;
});
