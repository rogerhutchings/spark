import './map';
import './meet-the-team';

$(document).ready(() => {
  // $('[name="open-menu"]').on('click', function () {
  //   console.log('foo')
  //   $(this).toggleClass('is-active');
  // });

  $('#js-open-menu').on('click', function (event) {
    $(this).toggleClass('is-active');
    $('.js-nav').toggleClass('open');
    $('body').toggleClass('open');
  });
});
