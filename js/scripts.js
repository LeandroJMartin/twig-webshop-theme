$(document).ready(function () {
    
    $('.tabela-medidas').hide();
    $('.fadePopup').click(function() {
        $('.tabela-medidas').addClass('mostra');
        event.preventDefault();
        $('.tabela-medidas').fadeIn(300);

    });
    $('.tabela-medidas').click(function() {
       event.preventDefault();
        $('.tabela-medidas').fadeOut(300);
    });
    $('.tabela-close-btn').click(function() {
       event.preventDefault();
        $('.tabela-medidas').fadeOut(300);
    });

    //-- Search
    $(".bt-search, input").click(function(e){
        var e=window.event||e;
        $('.search-text').addClass("show_search");
        e.stopPropagation();
      });
    $(document).click(function(e){
        $('.search-text').removeClass("show_search");
    });
    
    
    $('#bannerHome').owlCarousel({
        loop: true,
        margin: 1,
        mouseDrag: true,
        autoplay: true,
        dots: true,
        nav: true,
        rewind: true,            
        responsiveClass: true,
        items: 1,
    });


    // Project owlCarousel
    $('.slideProduct').owlCarousel({ 
        loop: false,
        margin: 1,
        mouseDrag: true,
        autoplay: false,
        dots: false,
        nav: true,
        rewind: true,            
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            767: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });
    $('#slideProduto').owlCarousel({
        loop: false,
        rewind:true,
        margin: 1,
        mouseDrag: true,
        autoplay: false,
        dots: false,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 1,
            },
            1200: {
                items: 1
            }
        }
    });

    $(function($){
        $(window).on('load', function(){
            $.instagramFeed({
                'username': 'sigamojave',
                'container': "#instagram-feed3",
                'display_profile': false,
                'display_biography': false,
                'display_gallery': true,
                'callback': null,
                'styling': true,
                'items': 12,
                'items_per_row': 6,
                'margin': 0.30
            });
        });
    })(jQuery);
    
});