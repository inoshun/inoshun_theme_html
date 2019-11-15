jQuery(function($){
  // 記事一覧のサムネイルのheight指定
  var thumbnail = $('.article_thumbnail');
  var thumbnailWidth;
  var setThumbnailHeight = function(){
    thumbnailWidth = thumbnail.innerWidth();
    thumbnail.css('height', (thumbnailWidth * 0.55) + 'px');
  }
  setThumbnailHeight();
  $(window).resize(function() {
    setThumbnailHeight();
  });

  // 記事下のナビゲーションボタンのhoverアクション
  if ($('a.prev')) {
    var prevBtn = $('a.prev');
  }
  if ($('a.next')) {
    var nextBtn = $('a.next');
  }
  var listBtn = $('a.list_btn');
  prevBtn.hover(
    function(){
      $(this).find('img').attr("src", "images/arrow_prev_hover.png");
      $(this).find('img').addClass("hover_anm");
    },
    function(){
      $(this).find('img').attr("src", "images/arrow_prev_on.png");
      $(this).find('img').removeClass("hover_anm");
    }
  );
  nextBtn.hover(
    function(){
      $(this).find('img').attr("src", "images/arrow_next_hover.png");
      $(this).find('img').addClass("hover_anm");
    },
    function(){
      $(this).find('img').attr("src", "images/arrow_next_on.png");
      $(this).find('img').removeClass("hover_anm");
    }
  );
  listBtn.hover(
    function(){
      $(this).find('img').attr("src", "images/list_btn_hover.png");
    },
    function(){
      $(this).find('img').attr("src", "images/list_btn.png");
    }
  );


});
