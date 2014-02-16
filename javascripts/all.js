// 移動 dom
// $( ".main-nav ul" ).appendAround();

// 讓服務頁副導覽，可以在第一畫面中顯示現在頁面標示。
if ( $('.services-nav').length != 0 ) {
  $('.services-nav').scrollLeft( $('.services-nav-item.active').offset().left );
}
