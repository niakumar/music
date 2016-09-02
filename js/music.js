
 // Run the script on page load.

    // If using jQuery
    // $(function(){
    //   AudioJS.setup();
    // })

    // If using Prototype
    // document.observe("dom:loaded", function() {
    //   AudioJS.setup();
    // });

    // If not using a JS library
    window.onload = function(){
      AudioJS.setup();
      $('.playlist').insertBefore(".vjs-volume-control");
      $('.play_sg_name').insertBefore('.vjs-progress-holder')

      $('.upload_songs').click(function(){
      	$('.overlay, .upload_popup').addClass('display_block');
      	$('body').addClass('overflow_hidden');

      });
      $('.closed').click(function(){
        $('.overlay, .upload_popup').removeClass('display_block');
        $('body').removeClass('overflow_hidden');
      });

      $('.playlist').click(function(){
        $('.playlist').children('ul').toggleClass('display_block');  
      })
    };



