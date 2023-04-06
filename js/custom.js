$(document).ready(function() {
    $( ".toggle-btn" ).click(function(){
        $(this).toggleClass('active');
        $( ".toggle-wraper" ).slideToggle();
        
    });

  })
