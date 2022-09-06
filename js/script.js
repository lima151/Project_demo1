$(function($){

    $('#banner').slick({
        prevArrow: '<i class="fa-solid fa-arrow-left-long banner_arrow_left"></i>',
        nextArrow: '<i class="fa-solid fa-arrow-right-long banner_arrow_right"></i>',
    });

    // light box js
    new VenoBox({
       selector: ".myWork",
        spinner: 'circle-fade',
   });

  

    //filter js
    $('.filter-container').filterizr();

    $('.filter_menu ul li').on('click', function(){
        $('.filter_menu ul li').removeClass('active');
        $(this).addClass('active');
    });

});
