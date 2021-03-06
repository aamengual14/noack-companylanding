var $ = $.noConflict();
$(document).ready(function () {
    "use strict";


// site preloader
    $(window).load(function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

// $('body,html').stop(true,true).animate({scrollTop: stop}, delay);


    //animated scroll menu
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $('.navbar-transparent').addClass('shrink');
            $('#custom-navbar-brand').css('color', 'white');
            $('.navbar-inverse.navbar-transparent .navbar-nav > li >').css('color', 'white');
            $('#facebook').css('color', 'white');
            $('#twitter').css('color', 'white');
        }
        if (scroll <= 0) {
            $('.navbar-transparent').removeClass('shrink');
            $('#custom-navbar-brand').css('color', '#393f4d');
            $('.navbar-inverse.navbar-transparent .navbar-nav > li >').css('color', '#393f4d');
            $('#facebook').css('color', '#393f4d');
            $('#twitter').css('color', '#393f4d');

            // $('#home-tab').css('color', '#C0B283');
            // color used prior to switching everything to black - #393f4d
        }
    });

//smooth scroll
    $(function () {
        $('.scroll-to a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 600);
                    return false;
                }
            }
        });
    });

//sticky header
    $(window).resize(function () {
        $(".navbar-collapse").css({maxHeight: $(window).height() - $(".navbar-header").height() + "px"});
    });

//sticky header on scroll
    $(window).load(function () {
        $(".sticky-header").sticky({topSpacing: 0});
    });

    //counters
    $('.counter').counterUp({
        delay: 10,
        time: 4000
    });

    //parallax stellar
    $(document).ready(function () {
    $(window).stellar({
        horizontalScrolling: false,
        responsive: true
    });
});

//Auto Close Responsive Navbar on Click
    function close_toggle() {
        if ($(window).width() <= 768) {
            $('.navbar-collapse a').on('click', function () {
                $('.navbar-collapse').collapse('hide');
            });
        }
        else {
            $('.navbar .navbar-default a').off('click');
        }
    }
    close_toggle();
    $(window).resize(close_toggle);

    //testimonial flexslider
    $(window).load(function () {
        $('.testimonial_slider').flexslider({
            controlNav: true,
            directionNav: false,
            animation: "slide",
            slideshowSpeed: 4000
        });
    });

    //back to top
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
});
