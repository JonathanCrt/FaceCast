$(window).scroll(function(){
    
        // top value in this case 0
        var wScroll = $(this).scrollTop();
      
      
        // determine when to show button
        var showScrollButton = 200;
    
        // fadein / fadeout back to  top button
        if (wScroll > showScrollButton) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    });
    
    // 2. lets create the button
    $('body').append('<a id="top" href="#">â˛</a>');
    
    // 3. lets create the css properties
    $('#top').css({
      "bottom" : "200px",
      "right" : "20px",
      "position" : "fixed",
      "cursor" : "pointer",
      "z-index" : "1",
      "display" : "none",
      "background-color" : "#FF0000",
      "padding" :"12px 15px",
      "color" : "#ffffff"
    });
    
    // 4. lets create the on click
    $('#top').click(function () {
        $('body,html').animate({
    
          // position you want to scroll to
          scrollTop: 0
        }, 1500);
    
        // stop anchor link behavior
        return false;
    });