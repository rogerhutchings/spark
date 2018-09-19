$(document).ready(() => {
  const nav = $('.js-nav');

  $('#js-open-menu').on('click', function (event) {
    $(this).toggleClass('is-active');
    nav.toggleClass('open');
    $('body').toggleClass('open');
  });

});
