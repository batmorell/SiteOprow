$(window).scroll(function(e){
    parallax();
});
function parallax(){

    var scrolled = $(window).scrollTop();

    $('#headBG').css('top', -(scrolled * 0.3) + 'px');
    $('#homeImg').css('top', -(scrolled * 0.3 )+350 + 'px');
    $('#homeTxt').css('top', -(scrolled * 0.6 )+650 + 'px');
    $('#affluenceImg').css('top', -(scrolled * 0.3 )+350 + 'px');
    $('#affluenceTxt').css('top', -(scrolled * 0.6 )+750 + 'px');
    $('#BLBG').css('top', -(scrolled * 0.3 ) + 800 + 'px');
}
