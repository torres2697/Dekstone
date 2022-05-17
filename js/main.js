$(function () {
    // hamburger
    $('.hamburger').click(function () {
        $('.menu-mobile').addClass('active');
    });
    $('.close-button').click(function () {
        $('.menu-mobile').removeClass('active');
    });


    $(".go").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({ scrollTop: destination }, 600);
    });

    // gallery
    $('.photo__link').click(function () {
        $('.photo__overlay').addClass('active');
        $(this).hide();
    });

    // questions
    $('.question__block_open').click(function () {
        $(this).closest('.question__block').next().addClass('open');
        $(this).addClass('open').closest('.question__block').find('.question__block_close').addClass('open');
    });
    $('.question__block_close').click(function () {
        $(this).closest('.question__block').next().removeClass('open');
        $(this).removeClass('open').closest('.question__block').find('.question__block_open').removeClass('open');
    });


    // list-product
    $('.product__content').click(function () {
        $(this).find('.product__overlay').toggleClass('active');
        $(this).find('.product__icon').toggleClass('active');
    });


    // slider-travel
    $('.travel__wrappers').slick({
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-chevron-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-chevron-right' aria-hidden='true'></i></button>",
        autoplay: true,
        autoplaySpeed: 2000,
    });


    $('.header-slider').slick({
        prevArrow: "<button type='button' class='slick-pre pull-left'><i class='fa fa-long-arrow-alt-left' aria-hidden='true'></i><p class='minnumber'></p></button>  ",
        nextArrow: "  <button type='button' class='slick-nex pull-right'><p class='maxnumber'>03</p><i class='fa fa-long-arrow-alt-right' aria-hidden='true'></i></button>",
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    })

    $(".header-slider").on('afterChange', function (event, slick, currentSlide) {
        currentNumber = currentSlide + 1;
        $(".minnumber").text('0' + currentNumber);
    });
    $('.minnumber').text('01');

    // Параллакс от скролла
    $(window).bind('scroll', function (e) {
        parallaxScroll();
    });
    function parallaxScroll() {
        var scrolled = $(window).scrollTop();
        $('.meal').css('top', (0 - (scrolled * 0.3)) + 'px');
        $('.about-chili').css('top', (0 - (scrolled * 0.3)) + 'px');
        // $('.about-brok2').css('top', (0 - (scrolled * 0.3)) + 'px');
    }
});


// Form validation and ajax
$(document).ready(function () {
    $('[data-submit]').on('click', function (e) {
        e.preventDefault();
        $(this).parent('form').submit();
    })
    $.validator.addMethod(
        "regex",
        function (value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Please check your input."
    );

    // Функция валидации и вывода сообщений
    function valEl(el) {

        el.validate({
            rules: {
                tel: {
                    required: true,
                    regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
                },
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                tel: {
                    required: 'Поле обязательно для заполнения',
                    regex: 'Телефон может содержать символы + - ()'
                },
                name: {
                    required: 'Поле обязательно для заполнения',
                },
                email: {
                    required: 'Поле обязательно для заполнения',
                    email: 'Неверный формат E-mail'
                }
            },

            // Начинаем проверку id="" формы
            submitHandler: function (form) {
                $('#loader').fadeIn();
                var $form = $(form);
                var $formId = $(form).attr('id');
                $.ajax({
                    type: 'POST',
                    url: $form.attr('action'),
                    data: $form.serialize(),
                }).always(function (response) {
                    setTimeout(function () {
                        $('#loader').fadeOut();
                    }, 800);
                    setTimeout(function () {
                        $.fancybox.open($('#modalcall-5'), { touch: false });
                        $form.trigger('reset');
                        //строки для остлеживания целей в Я.Метрике и Google Analytics
                    }, 1100);
                });
                return false;
            }
        })
    }

    // Запускаем механизм валидации форм, если у них есть класс .form
    $('.form').each(function () {
        valEl($(this));
    });


    $("#ajax-form").submit(function (e) {
        e.preventDefault();
        var formData = {
            client_name: $('#client_name').prop('value'),
            client_phone: $('#client_phone').prop('value')
        };

        $.ajax({
            type: "POST",
            url: "send.php",
            data: formData,
            success: function () {
                $.fancybox.close();
                $.fancybox.open($('#modalcall-3'), {
                    touch: false
                });
            }
        });
    });
    $("#ajax-form2").submit(function (e) {
        e.preventDefault();
        var formData2 = {
            client_name2: $('#client_name2').prop('value'),
            client_email: $('#client_email').prop('value'),
            client_message: $('#client_message').prop('value')
        };

        $.ajax({
            type: "POST",
            url: "send2.php",
            data: formData2,
            success: function () {
                $.fancybox.close();
                $.fancybox.open($('#modalcall-4'), {
                    touch: false
                });
            }
        });
    });

});