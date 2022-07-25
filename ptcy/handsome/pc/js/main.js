$(function () {

    resize();
    $(window).resize(function (event) {
        resize();
    });

    $(".ul_tag li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");

    })
    $(".wow_list .wow").each(function (e) {
        $(this).attr("data-wow-delay", ($(this).index() / 10) + "s");
    })
    $(".explosive_items.owlCarousel").owlCarousel({
        items: 3,
        responsive: {
            
            0: {
                items: 2, margin: 20
            }, 
            600: { items:3,margin:40
            }
        },
        dots: false, loop: true, margin: 40
    });
    $(".special_offer_items.owlCarousel").owlCarousel({
        items: 2, responsive: {

            0: {
                items: 1, margin: 20
            },
            600: {
                items: 2, margin: 40
            }
        },
        dots: false, loop: true, margin: 40
    });
    $(".warehouse .left .tit").click(function () { $(this).parent().toggleClass("on")})
    $(".owl").each(function () {
        if ($(this).find(".item").length > 1) {
            var owl = $(this).find(".owlCarousel").owlCarousel({ items: 1, loop: true, autoplay: true });

            owl.on('changed.owl.carousel', function (event) {
                owl.find(".animated").each(function () { $(this).removeClass($(this).attr("data-animation")); })
                owl.find(".owl-item").eq(event.item.index).find(".animated").each(function () { $(this).addClass($(this).attr("data-animation")); });
            })

            $(this).find(".owl_cur").find(".next").click(function () {
                owl.trigger("next.owl.carousel")
            })
            $(this).find(".owl_cur").find(".prev").click(function () {
                owl.trigger("prev.owl.carousel")
            })
        }
    })
    $(".banner .owl-item").eq(2).find(".animated").each(function () {
        $(this).addClass($(this).attr("data-animation"));
    })
    $(window).scroll(function () {
        $(".animated").each(function () {
            if ($(this).offset().top - $(window).scrollTop() > $(window).height() - 80)
                $(this).removeClass($(this).attr("data-animation"));
            else
                $(this).addClass($(this).attr("data-animation"));
        })

        if ($(window).scrollTop() > 30) {
            $(".header").addClass("fixed");
        }
        else { $(".header").removeClass("fixed"); }
    })


    $(".menu_wrap").click(function () { $(".header").toggleClass("h_menu") });


    $(window).load(function () {
        if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
            if ($(window).width() > 1024) new WOW().init();
        }
    })

    $('.btn_join').click(function () {
        $('.modal_join').fadeIn();
    })

});

/*main*/
//

function font() {


}


/*call*/
//
function resize() {
    var ht = $(window).height();

}