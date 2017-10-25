$(document).ready(() => {
  $('.js-share').jsSocials({
    showLabel: false,
    showCount: false,
    shares: [
      'email',
      {
        share: 'twitter',
        via: 'sparkcomms'
      },
      'facebook',
      'googleplus',
      'linkedin'
    ]
  });
});
