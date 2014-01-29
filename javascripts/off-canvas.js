var off_canvas = function (){

  var menuStatus = $("body");
  var openMenuButton = $(".open-menu-btn");
  var closeMenuButton = $(".outside .close-menu-btn");

  openMenuButton.on("click", function(event){
    menuStatus.addClass("model open-menu");
    event.preventDefault();
  });

  closeMenuButton.on("click", function(){
    menuStatus.removeClass("open-menu").delay(500).queue(function(){
			menuStatus.removeClass("model");
			menuStatus.dequeue();
    });
    event.preventDefault();
  });

};

off_canvas();
// $( window ).resize(function() {
//   $('body').removeClass('open-menu');
// });


