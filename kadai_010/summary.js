$(function () {
  // id属性がchange-colorの要素がクリックされたら
  $('#change-color').on('click', function() {
    // id属性がtargetの要素の文字色が変わる
    $('#target').css('color', 'red');
  });

  // id属性がchange-textの要素がクリックされたら
  $('#change-text').on('click', function() {
    // id属性がtargetの要素の文字を「こんにちは！」から「Hello!」に変更する
    $('#target').text('Hello!');
  });

  // id属性がfade-outの要素がクリックされたら
  $('#fade-out').on('click', function() {
    // id属性がtargetの要素をフェードアウトする
    $('#target').fadeOut();
  });

  // id属性がfade-inの要素がクリックされたら
  $('#fade-in').on('click', function() {
    // id属性がtargetの要素をフェードインする
    $('#target').fadeIn();
  });
});