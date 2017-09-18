import './map';
import './meet-the-team';

$(document).ready(() => {
  $('#js-open-menu').on('click', function (event) {
    $(this).toggleClass('is-active');
    $('.js-nav').toggleClass('open');
    $('body').toggleClass('open');
  });
});
