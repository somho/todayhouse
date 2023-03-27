$(document).ready(function () {
    $('.info_mn1 li a').eq(0).addClass('on');
    $('.nav_in li a').eq(0).addClass('on');

    // HEADER
    $('.info_mn1 li a').click(function () {
        $('.info_mn1 li a').removeClass('on');
        $(this).addClass('on');
    });

    // IMG

    var current = 0;
    var setIntervalId;
    var idx = 0;

    // $('.img_box .btn').hide();

    $('.main2').on({
        mouseover: function () {
            clearInterval(setIntervalId);
        },
        mouseout: function () {
            timer();
        }
    });

    $('.prev').click(function () {
        idx = idx - 1;
        if (idx == -1) {
            idx = 4;
        }
        move(idx);
    })

    $('.next').click(function () {
        idx = idx + 1;
        if (idx == 5) {
            idx = 0;
        }
        move(idx);
    })

    timer();
    function timer() {
        setIntervalId = setInterval(function () {
            var n = current + 1;
            console.log(n);
            if (n == 5) {
                n = 0;
            }
            move(n);
        }, 5000);
    }

    function move(i) {
        var currentEl = $('.main2_list li').eq(current);
        var nextEl = $('.main2_list li').eq(i);

        currentEl.css({ left: '0px' }).animate({ left: '-270px' })
        nextEl.css({ left: '270px' }).animate({ left: '0px' })
        current = i;
    }

    // $('.main2_list li').on({
    //     mouseover: function () {
    //         $('.img_box .btn').show();
    //     },
    //     mouseout: function () {
    //         $('.img_box .btn').hide();
    //     }
    // });

    // #CONTENTS .BEST
    $('.nav_in li a').click(function () {
        $('.nav_in li a').removeClass('on');
        $(this).addClass('on');
    });



});