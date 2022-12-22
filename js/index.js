$(function () {
    $('.birthdayCard').mouseenter(function () {
        $('audio')[0].play();
    });

    $('.birthdayCard').mouseleave(function () {
        $('audio')[0].pause();
        $('audio')[0].currentTime = 0;
    });
});