/**
 * Created by bucentaurus on 13/01/2017.
 */
$(document).ready(function() {

    //OnePage Scroll
    $('#fullpage').fullpage(
        {
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'eighthPage']
        }
    );
    //------------------------------------------------------------------------------------------------------------------


    //MaskedInput
    $("#telephone").mask("+7(999) 999-99-99");

    //------------------------------------------------------------------------------------------------------------------

    //Sidemenu active item

    $('.team-acco__link').click(function(e)
    {
        e.preventDefault();
    });

    $('.sidemenu__item').click(function()
    {
        var container = $(this).closest('.sidemenu'),
            items = container.find('.sidemenu__item');

        items.removeClass('active');
       $(this).addClass('active');
    });

    //------------------------------------------------------------------------------------------------------------------

    //Vertical Accordion
    $('.team-acco__item').accordion({
        "transitionSpeed": 1000
    });
    //------------------------------------------------------------------------------------------------------------------


});

    //Horizontal Accordion
$(document).ready(function(){

    activeItem = $(".menu-acco li:last-child");
    $(activeItem).addClass('active');

    $(".menu-acco li").click(function(){
        $(activeItem).animate({width: "80px"}, {duration:450, queue:false});
        $(this).animate({width: "630px"}, {duration:450, queue:false});
        activeItem = this;
    });

});
    //------------------------------------------------------------------------------------------------------------------

    //Slider
$(function()
{
    var number = $('.burger__item').length;


    $('.burgers__root').jcarousel(
        {
        wrap: 'circular'
        });

    $('.burgers__prev').jcarouselControl(
        {
             target: '-=1'
        });

    $('.burgers__next').jcarouselControl(
        {
            target: '+=1'
        });
});
    //------------------------------------------------------------------------------------------------------------------

    //Order form

