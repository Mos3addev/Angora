let offsetScroll = $('#About').offset().top;
$(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    if(scrollTop > offsetScroll - 50)
    {
        $('#nav-main').css('backgroundColor','rgba(0,0,0,0.5)')
    }
    else
    {
        $('#nav-main').css('backgroundColor','transparent')
    }
}
)
$("a[href^='#']").click(function (e) {
    Ahref = $(e.target).attr('href');
    let sectionOffset = $(Ahref).offset().top;
    $('html,body').animate({scrollTop:sectionOffset},500)
});
