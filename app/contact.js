$(document).ready(function(){
   $('.close-the-div').on('click', function(){
       $('#contact-container').fadeOut(600).animate({
           display: "none",
           top: "-700px",
            }, 200);
       });
   
    
    $('.animate-contact-form').on('click', function(){
        $('#contact-container').fadeIn(200).animate({
            display: "block",
            top: "275px",
            }, 1500);
    });
    
});