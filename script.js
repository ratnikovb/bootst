$(document).ready(function () {

    //Smooth scroll
    $('a[href^="#"]').click(function () {
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top
        }, 2000);
        return false;
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

    //   spincrement  Initialization

    var show = true;
    var countbox = "#facts";
    $(window).on("scroll load resize", function () {

        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена

        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа

        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа

        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками

        if (w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $(".spincrement").spincrement({
                thousandSeparator: ""
                , duration: 12000
            });

            show = false;
        }
    });
    //fitText Initialization

    $("#resp_h2").fitText(0.7, {
        minFontSize: '20px'
        , maxFontSize: '70px'
    });
    $("#resp_h1").fitText(0.7, {
        minFontSize: '20px'
        , maxFontSize: '150px'
    });


    // accordeon

    function openFirstPanel() {
        $('.acc_content:first').slideDown().addClass('active');
        $('.acc_panel:first').children('.fa-angle-down').toggleClass('fa-rotate-180');
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
});
