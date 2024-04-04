document.addEventListener('DOMContentLoaded', function () {
    // Back to top button
    var backButton = document.querySelector('.back-to-top');
    backButton.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Navigation menu toggle
    var menuToggle = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('#navbarCollapse');
    menuToggle.addEventListener('click', function () {
        navbarCollapse.classList.toggle('show');
    });

    // Smooth scrolling for anchor links
    var navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
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
    $('#accordion .card-header a').on('click', function () {
        $(this).find('span').toggleClass('active');
    });

    // ... Add any additional functionality you need

});