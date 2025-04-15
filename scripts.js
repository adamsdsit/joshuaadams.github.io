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
