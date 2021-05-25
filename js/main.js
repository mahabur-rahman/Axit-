// smooth scroll

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1800,
    speedAsDuration: true,
});

// ======= magnific popup =======

// $('.video-play').magnificPopup({
//     type: 'image',
//     type: 'iframe',
//     gallery: {
//         enabled: true
//     },
//     zoom: {
//         enabled: true,

//         duration: 300,
//         easing: 'ease-in-out',

//         opener: function(openerElement) {

//             return openerElement.is('img') ? openerElement : openerElement.find('img');
//         }
//     }
// });

// ======= counter up =======

$(".counting").counterUp({
    delay: 2,
    time: 200,
});

// ======= uikit =======

// UIkit.util.on('#mahabur', 'scrolled', function() {
//     alert('almost done!.');
// });

// ======= mixit up for filtering =======

// var mixer = mixitup('.container');

// ======= wow / animate =======
new WOW().init();

// ======= owl carousel =======

// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 10,
//     autoplay: true,
//     loop: true,
//     nav: true,
//     navText: ['<', '>'],
//     autoplayTimeout: 3000,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 3
//         },
//         1000: {
//             items: 3
//         }
//     }
// });

// ======= slick slider =======

$(".testimonial-slider").slick({
    arrows: false,
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});
$(".social-slider").slick({
    arrows: false,
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
    ],
});

// ======= AOS for animate, fade scroll to show slide =======

AOS.init({
    duration: 1000,
    offset: 300,
});

// ======= type js =======

var typed = new Typed(".typed", {
    strings: ["Free", "Creative", "Freebie"],
    typeSpeed: 60,
    backSpeed: 60,
    startDelay: 1000,
    backDelay: 1000,
    loop: true,
    cursorChar: "",
});

// fancy box

$("[data-fancybox]").fancybox({
    // for image / gallery effect
    arrows: true,
    infobar: true,
    loop: true,
    buttons: [
        "zoom",
        "share",
        "slideShow",
        "fullScreen",
        "download",
        "thumbs",
        "close",
    ],
    animationEffect: "zoom-in-out",
    transitionEffect: "rotate",
});

// progress circle bar
// $('.circlechart').circlechart();

// Parallaxie effect on background

$("#heroBanner").parallaxie({
    speed: 0.5,
    offset: 10,
});

$("#download").parallaxie({
    speed: 0.5,
    offset: 10,
});