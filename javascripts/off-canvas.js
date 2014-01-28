var off_canvas = function (){

  $(".off-canvas-toggle-btn").on("click", function(event){
    $("body").toggleClass("model open-menu");
    event.preventDefault;
  });

  $(".outside a, .off-canvas-mask, .outside .close").on("click", function(){
    $("body").removeClass("open-menu").delay(500).queue(function(){
			$(this).removeClass("model");
			$(this).dequeue();
    });
  });

};

off_canvas();
// $( window ).resize(function() {
//   $('body').removeClass('open-menu');
// });


