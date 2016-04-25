$(document).ready(function () {
    $(function () {
        function hideModal(modalwindow) {
            $(modalwindow).modal('hide');
        }

        $('#mapModalClose').on('click', function (e) {
            e.preventDefault();
            hideModal('#mapModal');
        });

    });
//    $(".spincrement").spincrement();

  var show = true;
    var countbox = "#facts";
    $(window).on("scroll load resize", function(){

        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена

        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа

        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа

        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками

        if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement").spincrement({
                thousandSeparator: "",
                duration: 12000
            });

            show = false;
        }
    });
});
