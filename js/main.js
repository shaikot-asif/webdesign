$(document).ready(function(){


        $('.demo').slick({
            slidesToShow: 2,
            slidesToScroll:2,
            arrows: true,
            dots: true,
            dotsClass: 'slick-dots',
            autoplay: true,
            autoplaySpeed: 3000,

            responsive: [{

                breakpoint: 800,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll:1,
                }
            
              }]
            
        });




      $('.thomas-video img').click(function(){
          $(this).hide();
      });



      $('.people').slick({
        slidesToScroll:2,
        slidesToShow: 2,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dotsClass: 'slick-dots',
        responsive: [{

            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll:1,
            }
        
          
        
          }]
        

        
    });

    $(document).ready(function() {
        $('nav').stickynav();
      });


      new WOW().init();

      $("body").toTopButton({
        imagePath: 'toup.png',
        arrowType: 'arrow',
        imgClass: 'arrow-img'
      });
      
});

function openNav() {
  document.getElementById("closeopen").style.width="100%";
}
function closeNav() {
  document.getElementById("closeopen").style.width="0%";
}


