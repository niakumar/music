
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
      $("<li class='playlist'><i></i></li>").insertBefore(".vjs-volume-control");
    };

