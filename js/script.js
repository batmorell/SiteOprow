$(window).on("load", function() {
    $('#Loading').remove();
})

$(window).scroll(function(e){
    parallax();

    var fromTop = $(this).scrollTop()+topMenuHeight;

    var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
            return this;
    });
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";
    menuItems
        .parent().removeClass("active")
        .end().filter("[href='#"+id+"']").parent().addClass("active");
});

function parallax(){

    var scrolled = $(window).scrollTop();

    $('#headBG').css('top', -(scrolled * 0.3) + 'px');
    $('#homeImg').css('top', -(scrolled * 0.3 )+350 + 'px');
    $('#homeTxt').css('top', -(scrolled * 0.6 )+650 + 'px');
    $('#affluenceImg').css('top', -(scrolled * 0.3 )+350 + 'px');
    $('#affluenceTxt').css('top', -(scrolled * 0.6 )+750 + 'px');
    $('#BLBG').css('top', -(scrolled * 0.2 ) + 550 + 'px');
}

$(".navbar-nav li").on("click", function(){
    console.log('click');
    $(".navbar-nav").find(".active").removeClass("active");
    $(this).addClass("active");
});

var topMenu = $(".navbar-nav"),
    topMenuHeight = topMenu.outerHeight()+15,
// All list items
    menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });