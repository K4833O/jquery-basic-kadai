$(function () {
  // class属性がbtnの要素がクリックされたら
  $('.btn').on('click', function(){
    // class属性がtext-boxの要素に「クリックしました！」と値を変更
    $('.text-box').val('クリックしました！');
  });
});