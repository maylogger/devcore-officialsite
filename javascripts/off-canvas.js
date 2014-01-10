var off_canvas = function (){
  $(".off-canvas-toggle-btn").on("click", function(){
    $("body").toggleClass("open-menu");
  });

  $(".off-canvas-close-btn").on("click", function(){
    removeOffCanvas();
  });

  $(".off-canvas-mask").on("click", function(){
    removeOffCanvas();
  });

  // 點 menu 裡面的連結後，關閉 menu
  $(".off-canvas-menu a").on("click", function(){
    removeOffCanvas();
  });

  function removeOffCanvas(){
    $("body").removeClass("open-menu");
  }

};

off_canvas();
