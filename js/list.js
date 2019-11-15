jQuery(function($){
  // 記事一覧のサムネイルのheight指定
  var thumbnail = $('.thumbnail');
  var thumbnailWidth;
  var winWidth;
  var setThumbnailHeight = function(){
    winWidth = $(window).innerWidth();
    thumbnailWidth = thumbnail.innerWidth();
    if (winWidth > 600) {
      thumbnail.css('height', thumbnailWidth + 'px');
    } else {
      thumbnail.css('height', thumbnailWidth/2 + 'px');
    }
  }
  setThumbnailHeight();
  $(window).resize(function() {
    setThumbnailHeight();
  });


});
