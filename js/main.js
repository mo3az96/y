
$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");

        sal({
            once: true,
            threshold: 0.3,
        });
        if ($(window).width() <= 767) {
            const scrollAnimations = sal();
            scrollAnimations.disable();
        }
        var scene = $('#scene').get(0);
        var parallaxInstance = new Parallax(scene);
    });
});
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
    if ($(window).width() <= 991) {
        $(".service-projects-block .work-item").wrap("<div class='swiper-slide'></div>");
        $(".service-projects-block .works-grid").addClass("swiper-wrapper").removeClass("works-grid");
        $(".service-related-block .service-grid-item").wrap("<div class='swiper-slide'></div>");
        $(".service-related-block .services-grid").addClass("swiper-wrapper").removeClass("services-grid");
        $(".course-related-block .course-grid-item").wrap("<div class='swiper-slide'></div>");
        $(".course-related-block .courses-grid").addClass("swiper-wrapper").removeClass("courses-grid");

        $(".single-aside .small-blog").wrap("<div class='swiper-slide'></div>");
        $(".single-aside .related-blog").addClass("swiper-wrapper").removeClass("related-blog");

        var swiper = new Swiper('.service-projects-block .swiper-container', {
            spaceBetween: 15,
            loop: true,
            // autoplay: {
            //     delay: 5000,
            // },
            pagination: {
                el: '.service-projects-block .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 2,
                },
            },
        });
        var swiper = new Swiper('.service-related-block .swiper-container', {
            spaceBetween: 15,
            loop: true,
            // autoplay: {
            //     delay: 5000,
            // },
            pagination: {
                el: '.service-related-block .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 2,
                },
            },
        });
        var swiper = new Swiper('.single-aside .swiper-container', {
            spaceBetween: 15,
            loop: true,
            // autoplay: {
            //     delay: 5000,
            // },
            pagination: {
                el: '.single-aside .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 2,
                },
            },
        });
        var swiper = new Swiper('.course-related-block .swiper-container', {
            spaceBetween: 15,
            loop: true,
            // autoplay: {
            //     delay: 5000,
            // },
            pagination: {
                el: '.course-related-block .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 2,
                },
            },
        });
    }
    //////////** Menu **//////////
    if ($(window).width() <= 767) {
        $('.menu-btn').click(function () {
            $(this).toggleClass("active");
            $("nav").slideToggle(300);
            $("body").toggleClass("overflow");
        })
    }
    $("select.form-control").select2()
});