$(function () {

  //クリックのクラス
  $('#js-btnMenu').on('click', function () {
    $(this).toggleClass('active');
    $('.humberger-nav').toggleClass('show');
    $('.title').toggleClass('show');
  });

})