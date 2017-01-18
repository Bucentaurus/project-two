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
    $("#tel").mask("+7(999) 999-99-99");

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

        $(".team-acco__link").click(function(){

            var container = $(this).closest('.team-acco'),
                items = container.find('.team-acco__link');

            //slide up all the link lists
            $(".team-acco__content").slideUp();
            //slide down the link list below the h3 clicked - only if its closed
            if(!$(this).next().is(":visible"))
            {
                $(this).next().slideDown();
            }

            items.removeClass('active');
            $(this).addClass('active');
        });

    //------------------------------------------------------------------------------------------------------------------


});

    //Horizontal Accordion
$(document).ready(function(){


    $(".menu-acco__item").on('click', function(){


        var container = $(this).closest('.menu-acco'),
            items = container.find('.menu-acco__item');
            //activeItem = items.find('.active');



        items.animate({width: "80px"}, {duration:500, queue:false});
        $(this).animate({width: "630px"}, {duration:500, queue:false});

        items.removeClass('active');
        $(this).addClass('active');


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
$(function()
{
    $('#form-order').on('submit', function(e)
    {
        e.preventDefault();

        var form = $(this),
            formData = form.serialize();


        $.ajax(
            {
                url: 'mail.php',
                type: 'POST',
                data: formData,

                success: function (data)
                {
                    console.log(data);

                    var popup = data.status ? "#success" : "#error";

                    var bPopup = $(popup).bPopup({ onClose: function(){ form.trigger('reset'); }});

                    $('.close__button').on('click', function(e)
                    {
                        bPopup.close();
                    });

                }

            }
        )

    })

});


$(function()
{
    ymaps.ready(init);
    var myMap;

    function init(){
        myMap = new ymaps.Map("map", {
            center: [59.91817154482064,30.30557799999997],
            zoom: 11,
            controls : []
        });

        var coords = [
                [59.895957564218754,30.423136],
                [59.97074337924254,30.23002483227747],
                [59.89148552967284,30.282508396524783],
                [59.85459973227818,30.33462870179196],
        ],
            myCollection = new ymaps.GeoObjectCollection({}, {

                draggable: false,
                iconLayout: 'default#image',
                iconImageHref: 'img/icons/map-marker.svg',
                iconImageSize: [46, 57],
                iconImageOffset: [-26, -52]
            });

        for (var i = 0; i < coords.length; i++)
        {
            myCollection.add(new ymaps.Placemark(coords[i]));
        };

        myMap.geoObjects.add(myCollection);

        myMap.behaviors.disable('scrollZoom');
    }
});
