$(window).on("load", function() {
    "use strict";


    // ============== Sticky Header Function ============ 


    $(window).on("scroll", function() {
        var header_height = $("header").innerHeight();
        if ($(this).scrollTop() > 1){  
            $('header.stick').addClass("sticky animated slideInDown");
            
          }
          else{
            $('header.stick').removeClass("sticky animated slideInDown");
          }
    });


    // =============== Widget DropDown Menu =================

    $(".widget-categories ul ul").parent().addClass("menu-has-item");
    $(".widget-categories ul li.menu-has-item > a").on("click", function(){
    	$(this).parent().toggleClass("active").siblings().removeClass("active");
    	$(this).next("ul").slideToggle();
    	$(this).parent().siblings().find("ul").slideUp();
    	return false;
    });


    // =============== Making Div Alignment =================

    if ($(window).width() > 991) {
        var list_height = $(".listing-img").innerHeight();
        $(".listing-info").css({
            "height": list_height
        });
    };

    // =============== Making Div alignment with another Div =================

    if ($(window).width() > 576) {
    var tr_height = $(".treding-new").innerHeight();
    $(".tr-news-img").css({
      "height": tr_height
    });
    };  

    // =============== Locations Tabs Functionality =================

    $('.locations-list ul li').on("click", function(){
        var tab_id = $(this).attr('data-tab');
        $('.locations-list ul li').removeClass('current');
        $('.location-img').removeClass('current');
        $(this).addClass('current animated fadeIn');
        $("#"+tab_id).addClass('current animated fadeIn');
    });

    // =============== Responsive Mobile Menu =================

    $("nav ul ul ul").parent().addClass("sub-menu-has-items");

    $(".open-menu").on("click", function(){
      $(".responsive-mobile-menu").addClass("active");
      $(this).parent().addClass("active");
    });

    $(".close-menu, html").on("click", function(){
      $(".responsive-mobile-menu").removeClass("active");
      $(this).parent().removeClass("active");
    });

    $(".open-menu, .responsive-mobile-menu").on("click", function(e){
      e.stopPropagation();
    });

    $(".responsive-mobile-menu ul ul").parent().addClass("menu-has-items");
    $(".responsive-mobile-menu ul li.menu-has-items > a").on("click", function(){
      $(this).parent().toggleClass("active").siblings().removeClass("active");
      $(this).next("ul").slideToggle();
      $(this).parent().siblings().find("ul").slideUp();
      return false;
    });



    //  ============ Making Footer Scrolling Animations

    var footer_height = $("footer").innerHeight();
    $(".wrapper").css({
        "margin-bottom": footer_height
    });
    $("footer").css({
        "height": footer_height
    });
    
    // ============ PAGE LOADER ============= 

    $('.page-loading').fadeOut();


});


