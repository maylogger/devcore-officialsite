// 開啟 menu
$(".menu-btn").on("click", function(){
  $("body").toggleClass("open-menu");
});

// 點 menu 裡面的連結後，關閉 menu
$(".main-nav a").on("click", function(){
  $("body").removeClass("open-menu");
});


// 移動 dom
$( ".main-nav" ).appendAround();
