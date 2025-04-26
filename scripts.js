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

    // Obfuscate email and phone number
    const emailParts = ["joshadams", "protonmail", "com"];
    const obfuscatedEmail = emailParts.join('@');
    $('#email').text(obfuscatedEmail);
    $('#email').attr('href', 'mailto:' + obfuscatedEmail);

    const phoneParts = ['727', '505', '0626'].join('-');
    $('#phone').text(phoneParts);


    // Dark/Light Mode Toggle (simplified - auto)
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    } else {
         document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }
});
