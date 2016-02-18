
 
  $.fn.slider = function(e, options) {
  	
    /* 
       Slider Plugin By Christopher Shaw (www.chris-shaw.com)
    	 Version: 1.0
    */
    
    $(this).addClass('slider');
    var total_slides = 1;
    var viewing = 1;
    $(this).children('div').each(function() {
      $(this).addClass('slide');
      $(this).addClass('slide'+total_slides)
      total_slides++;
    });
    
    total_slides = total_slides - 1;
		    
    $(this).children('.slide').hide();
    $('.slide' + viewing).show();
    $(this).prepend('<span class="next">></span>');
    $(this).prepend('<span class="info"></span>');   
    $(this).prepend('<span class="previous"><</span>');
       
    $('body').prepend('<link rel="stylesheet" type="text/css" href="https://plugins.chris-shaw.com/slider/slider.css">');
 
    $(this).find('.info').text(viewing + ' of ' + total_slides);

    $(this).find('.next').click(function() {
      viewing++;
    });

    $(this).find('.previous').click(function() {
      viewing--;
    });

    $(this).find('.previous, .next').click(function() {
    	if (viewing > total_slides) {
      	viewing = 1;
      }
      
      if (viewing < 1) {
      	viewing = total_slides;
      }
      
      
      
      
      $('div.slide').hide();
      
      
      $('div.slide'+viewing).show();
      $('div.slider .info').text(viewing + ' of ' + total_slides);
    
    });
  }
