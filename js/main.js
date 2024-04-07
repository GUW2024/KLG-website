document.addEventListener('DOMContentLoaded', function() {
    // Back to top button
    var backButton = document.querySelector('.back-to-top');
    backButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Navigation menu toggle
    var menuToggle = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('#navbarCollapse');
    menuToggle.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show');
    });

    // Smooth scrolling for anchor links
    var navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - navbarHeight(), // Adjust for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // Function to get the height of the navbar
    function navbarHeight() {
        var navbar = document.querySelector('.nav-bar');
        return navbar.offsetHeight;
    }

    // Testimonial carousel
    $('.testimonials-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // FAQs accordion
    $('#accordion .card-header a').on('click', function() {
        $(this).find('span').toggleClass('active');
    });

    // ... Add any additional functionality you need

});

$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true, // Set loop to true
        autoplay: true,
        autoplayTimeout: 5000, // Adjust autoplay speed as needed
        autoplayHoverPause: true,
        nav: true, // Show navigation buttons
        navText: ['<span class="fa fa-chevron-left"></span>', '<span class="fa fa-chevron-right"></span>'], // Custom navigation icons
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });
});

$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true, // Set loop to true
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'], // Bootstrap icons for navigation
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });
});


// Function to change the language
function changeLanguage(language) {
    // Get all elements that need to be translated
    var elementsToTranslate = document.querySelectorAll('[data-translate]');

    // Loop through each element and update its content based on the selected language
    elementsToTranslate.forEach(function(element) {
        // Get the translation key for this element
        var translationKey = element.dataset.translate;

        // Depending on the language, update the content accordingly
        switch (language) {
            case 'english':
                element.innerText = translationsEnglish[translationKey];
                break;
            case 'spanish':
                element.innerText = translationsSpanish[translationKey];
                break;
                // Add cases for other languages as needed
            default:
                // If the language is not supported, default to English
                element.innerText = translationsEnglish[translationKey];
        }
    });
}

// Define translations for English
var translationsEnglish = {
    'welcome_message': 'Welcome to our website!',
    'about_us': 'About Us',
    'services': 'Services',
    'why_us': 'Why Us',
    'best_practices': 'Best Law Practices',
    'efficiency_trust': 'Efficiency & Trust',
    'results_deserved': 'Results You Deserve',
    'meet_staff': 'Meet Our Staff',
    'meet_staff_title': 'Meet Our Staff',
    'client_reviews': 'Client Reviews',
    'review_1': 'KLG was able to help me file for Bankruptcy. The team there was fast, efficient, reliable, and kind. Would definitely recommend.',
    'review_2': 'The KLG Legal team was very quick, professional, and understanding of the law. They helped me settle my divorce.',
    'service_areas': 'Service Areas',
    'civil_law': 'Civil Law',
    'family_law': 'Family Law',
    'business_law': 'Business Law',
    'education_law': 'Education Law',
    'immigration_law': 'Immigration Law',
    'useful_pages': 'Useful Pages',
    'contact_us': 'Get In Touch',
    'address': '22760 Hawthore Blvd Suite 103 Torrance, CA',
    'phone': '+310 548-7240',
    'email': 'frank@keller.ms',
    'terms_of_use': 'Terms of Use',
    'privacy_policy': 'Privacy Policy',
    'cookies': 'Cookies',
    'help': 'Help',
    'faqs': 'FAQs',
    'back_to_top': 'Back to Top',
    'english': 'English',
    'spanish': 'Spanish'
};

// Define translations for Spanish
var translationsSpanish = {
    'welcome_message': '¡Bienvenido a nuestro sitio web!',
    'about_us': 'Sobre Nosotros',
    'services': 'Servicios',
    'why_us': 'Por Qué Elegirnos',
    'best_practices': 'Mejores Prácticas Legales',
    'efficiency_trust': 'Eficiencia y Confianza',
    'results_deserved': 'Resultados que Mereces',
    'meet_staff': 'Conoce a Nuestro Equipo',
    'meet_staff_title': 'Conoce a Nuestro Equipo',
    'client_reviews': 'Opiniones de Clientes',
    'review_1': 'KLG pudo ayudarme a presentar la bancarrota. El equipo fue rápido, eficiente, confiable y amable. ¡Definitivamente lo recomendaría!',
    'review_2': 'El equipo legal de KLG fue muy rápido, profesional y comprensivo de la ley. Me ayudaron a resolver mi divorcio.',
    'service_areas': 'Áreas de Servicio',
    'civil_law': 'Derecho Civil',
    'family_law': 'Derecho de Familia',
    'business_law': 'Derecho de Negocios',
    'education_law': 'Derecho de la Educación',
    'immigration_law': 'Derecho de Inmigración',
    'useful_pages': 'Páginas Útiles',
    'contact_us': 'Contáctanos',
    'address': '22760 Hawthore Blvd Suite 103 Torrance, CA',
    'phone': '+310 548-7240',
    'email': 'frank@keller.ms',
    'terms_of_use': 'Términos de Uso',
    'privacy_policy': 'Política de Privacidad',
    'cookies': 'Cookies',
    'help': 'Ayuda',
    'faqs': 'Preguntas Frecuentes',
    'back_to_top': 'Volver Arriba',
    'english': 'Inglés',
    'spanish': 'Español'
};

// Add event listeners for language dropdown
document.addEventListener('DOMContentLoaded', function() {
    var languageDropdown = document.getElementById('language-dropdown');

    // Add event listener for change event
    languageDropdown.addEventListener('change', function() {
        var selectedLanguage = this.value;
        // Call changeLanguage function with the selected language
        changeLanguage(selectedLanguage);
    });
});