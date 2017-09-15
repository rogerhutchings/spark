import './map.js';

function createContext(el) {
  const data = el.parent().data();
  return {
    img: data.img,
    name: data.name,
    bio: data.bio
  }
}

$(document).ready(function(){
  const team = $('.js-person');

  team.find('.js-name').removeClass('orange').addClass('dn white');

  team.hover(function(event) {
    $(event.target).parent().find('.js-name').toggleClass('dn');
  });


  const source = $("#team-modal-template").html();
  const template = Handlebars.compile(source);

  team.addClass('overlay-bg-animate overlay-bg-o50-orange-hover pointer');

  team

  team.on('click', function (event) {
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
