var off_canvas = function (){

  $(".off-canvas-toggle-btn").on("click", function(){
    $("body").toggleClass("open-menu");
  });

  $(".outside a, .off-canvas-mask").on("click", function(){
    $("body").removeClass("open-menu");
  });

};

off_canvas();
