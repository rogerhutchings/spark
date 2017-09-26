function initMeetTheTeam() {
  const team = $('.js-person');
  const source = $("#team-modal-template").html();
  const template = Handlebars.compile(source);

  function createContext(el) {
    const data = el.parent().data();
    return {
      img: data.img,
      name: data.name,
      bio: data.bio
    }
  }

  function openLightbox({ target }) {
    const context = createContext($(target));
    $.featherlight(template(context));
  }

  function showName({ target }) {
    $(target).parent().find('.js-name').toggleClass('dn');
  }

  team.addClass('overlay-bg-animate overlay-bg-o50-orange-hover pointer');
  team.find('.js-name').removeClass('orange').addClass('dn white');

  team.hover(showName);

  team.on('click', openLightbox);

  $('#meet-the-team-section')
    .slick({
      arrows: false,
      dotsClass: 'slick-dots-large',
      dots: true,
      infinite: false
      responsive: [
        {
          breakpoint: 480,
          settings: {
            dotsClass: 'slick-dots',
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        }
      ],
      slidesToScroll: 3,
      slidesToShow: 3,
    });
}

$(document).ready(() => {
  if ($('#meet-the-team-section').length) {
    initMeetTheTeam();
  }
});
