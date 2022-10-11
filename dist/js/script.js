$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/slider/arrow_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/slider/arrow_right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  arrows: false,
                  dots: true
                }
              },          
        ]
    });
  });