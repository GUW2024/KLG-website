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