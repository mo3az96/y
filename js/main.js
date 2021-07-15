
$(document).ready(function () {
    var swiper = new Swiper(".parteners-slider .swiper-container", {
        loop: true,
        spaceBetween: 30,
        pagination: {
            el: ".parteners-slider .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
        },
    });
    var swiper = new Swiper(".consultants-slider .swiper-container", {
        loop: true,
        spaceBetween: 30,
        pagination: {
            el: ".consultants-slider .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 4,
            },
        },
    });
    var swiper = new Swiper(".blog-slider .swiper-container", {
        loop: true,
        spaceBetween: 30,
        pagination: {
            el: ".blog-slider .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
        },
    });
     //////////** Menu **//////////
     if ($(window).width() <= 767) {
        $('.menu-btn').click(function () {
            $(this).toggleClass("active");
            $("nav").slideToggle(300);
            $("body").toggleClass("overflow");
        })
    }
});