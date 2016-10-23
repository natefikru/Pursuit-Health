jQuery(function($) {
    /*=============================================================
        Authour URI: www.binarytheme.com
        License: Commons Attribution 3.0
    
        http://creativecommons.org/licenses/by/3.0/
    
        100% To use For Personal And Commercial Use.
        IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
       
        ========================================================  */
    /*==========================================
    CUSTOM SCRIPTS
    =====================================================*/

    // CUSTOM LINKS SCROLLING FUNCTION 

    $('a[href*=#]').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
       && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                .animate({ scrollTop: targetOffset }, 800); //set scroll speed here
                return false;
            }
        }
    });
    
    $('.carousel').carousel();

    /*==========================================
   SCROLL REVEL SCRIPTS
   =====================================================*/

    
       window.scrollReveal = new scrollReveal(); 
    

    /*==========================================
    WRITE  YOUR  SCRIPTS BELOW
    =====================================================*/
    
    //navbar fade on scroll
    // on scroll, 
    var navbarHeight = $('navbar').height();
    $(window).on('scroll',function(){
        
        // we round here to reduce a little workload
        var stop = Math.round($(window).scrollTop());
        
        if (stop > navbarHeight) {
            $('.navbar').addClass('past-top');
        } else {
            $('.navbar').removeClass('past-top');
        }

    });
    

});