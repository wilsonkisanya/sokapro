$( document ).ready(function() {
    $(".scrollmenu").niceScroll({
        cursor:" #BA0C2F",
        cursorwidth: '2px', 
        autohidemode: true, 
        zindex: 999, 
        cursorborder:"none", 
        cursoropacitymin:"0", 
        cursoropacitymax:"1",
    });


     // Select
    $("select").change(function () { 
        var str = ""; 
        str = $(this).find("option:selected").text(); 
        $(this).parent().find(".out").text(str);
     });
 
     $("select").each(function(index, el){
         var str = ""; 
         str = $(this).find("option").first().text(); 
         $(this).parent().find(".out").text(str);
     })
    
      // Carousel
      $(".carousel-inner").show().carousel({
        autoPlay: 5000, //Set AutoPlay to 3 seconds
          loop:true,
          margin:10,
          nav:true,
          responsive:{
              0:{
                  items:2
              },
              600:{
                  items:3
              },
              1000:{
                  items:5
              }
          }
        });

        

        //--------add class active
        $("sport-icona .active-sports").click(function () {
            if ($(this).hasClass("active-sports")) {
                $(this).removeClass("active-sports");
            } else {
                $("sport-icon a.active-sports").removeClass("active-sports");
                $(this).addClass("active-sports");
            }
        });

        

    });

   
        // :: 8.0 Sticky Active Code
        
        // Back to top

        $(window).scroll(function() {
            if ($(this).scrollTop()) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });
        
        $("#toTop").click(function () { 
           $("html, body").animate({scrollTop: 0}, 500);
        });

    // Bootstrap Modal
        $(document).bind("contextmenu", function (e) {
            $("#myModal").modal("hide");

        });




    

    

    

  
