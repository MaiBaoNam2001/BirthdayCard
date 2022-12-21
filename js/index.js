$(function () {
    $('.birthdayCard').mouseenter(function () {
        let audio = $('<audio>', {
            src: 'https://maibaonam2001.github.io/BirthdayCard/music/happy-birthday-to-you.mp3',
            loop: true,
            autoplay: true
        });
        $('body').prepend(audio);
    });

    $('.birthdayCard').mouseleave(function () {
        $('body').find('audio').eq(0).remove();
    });
});