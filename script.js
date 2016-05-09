$(document).ready(function () {

    //Smooth scroll
    $('a[href^="#"]').click(function () {
        var el = $(this).attr('href');

        $('body').animate({
            scrollTop: $(el).offset().top
        }, 2000);
        return false;
    });

    //fitText Init

    $("#resp_h2").fitText(0.7, {
        minFontSize: '20px',
        maxFontSize: '70px'
    });
    $("#resp_h1").fitText(0.6, {
        minFontSize: '20px',
        maxFontSize: '150px'
    });
    //   spincrement  Init

    var show = true, countbox = "#facts";
    $(window).on("scroll load resize", function () {

        if (!show) return false; //cancel the animation if it shown

        var w_top = $(window).scrollTop(), //  scrolled from top
            e_top = $(countbox).offset().top; // from top to countbox Расстояние от блока со счетчиками до верха всего документа

        var w_height = $(window).height(),
            d_height = $(document).height();

        var e_height = $(countbox).outerHeight(); //countbox full height

        if (w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $(".spincrement").spincrement({
                thousandSeparator: ""
                , duration: 12000
            });

            show = false;
        }
    });
    //paralax
        $('.tablet-inner').parallax({imageSrc: 'images/pagelayout.jpg'});
        $('.phone-inner').parallax({imageSrc: 'images/pagelayoutphone.jpg'});

    // accordeon

    function openFirstPanel() {
        $('.acc_content:first').slideDown().addClass('active');
        $('.acc_panel:first').children('.fa-angle-down').addClass('fa-rotate-180');
    }

    (function ($) {
        $('.acc_content').hide();
        var allPanels = $('.acc_content').hide();

        openFirstPanel();

        $('.acc_panel').click(function () {
            $this = $(this);
            $target = $this.next();


            if ($target.hasClass('active')) {
                $target.removeClass('active').slideUp();
                $this.children('.fa-angle-down').removeClass('fa-rotate-180');

            } else {
                allPanels.removeClass('active').slideUp();
                $target.addClass('active').slideDown();
                $this.children('.fa-angle-down').addClass('fa-rotate-180');
            }

            return false;
        });

    })(jQuery);

    // owl carousel slider init and setting

     $(".owl-carousel").owlCarousel({
            loop:false,
            margin:20,
            nav:true,
            dots:true,
            items:1,
            navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],

     });
    //Modal window
    $(function () {
        function hideModal(modalwindow) {
            $(modalwindow).modal('hide');
        }

        $('#mapModalClose').on('click', function (e) {
            e.preventDefault();
            hideModal('#mapModal');
        });
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800){
            $("#scrl_top_btn").fadeIn();
        }
        else{
            $("#scrl_top_btn").fadeOut();
        }
    })
    $("#scrl_top_btn").click(function (){
        $("body").animate({ scrollTop:0}, 500);
    })
});
