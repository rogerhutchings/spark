import './map.js';

function createContext(el) {
  const data = el.parent().data();
  return {
    imgSrc: el.attr('src'),
    name: data.name,
    bio: data.bio
  }
}

$(document).ready(function(){
  $('.js-name').remove();

  const source = $("#team-modal-template").html();
  const template = Handlebars.compile(source);


  $('.js-person').on('click', function (event) {
    const context = createContext($(event.target));
    $.featherlight(template(context));
  });

  $('#meet-the-team').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
  });
});
