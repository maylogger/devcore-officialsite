// 移動 dom
// $( ".main-nav ul" ).appendAround();

// 讓服務頁副導覽，可以在第一畫面中顯示現在頁面標示。
if ( $('.services-nav').length != 0 ) {
  var services_nav_scroll_bar = $('.services-nav');
  var services_nav_item_active_offset_left = $('.services-nav-item.active').offset().left;
  services_nav_scroll_bar.scrollLeft(services_nav_item_active_offset_left);
}
