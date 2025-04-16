$(document).ready(function() {
    // Mobile menu toggle functionality
    $('#hamburger-btn').click(function() {
        $('#nav-links-container').toggleClass('show');
    });

    // Close menu when a link is clicked (optional)
    $('#nav-links .nav-link').click(function() {
        if ($('#nav-links-container').hasClass('show')) {
            $('#nav-links-container').removeClass('show');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll('a.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Highlight active nav link
    const links = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname.split("/").pop();
    links.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || (linkPath === 'index.html' && currentPath === '')) {
            link.classList.add('active');
        }
    });

    // Display obfuscated phone number
    const phone = ['727', '505', '0626'].join('-');
    const phoneElement = document.getElementById('phone');
    if (phoneElement) {
        phoneElement.textContent = phone;
    }
});
