function truncate(str, max, ellipsis = '…') {
  if (str.length > max) {
    return str.substr(0, max - ellipsis.length) + ellipsis;
  } else {
    return str;
  }
}

$(document).ready(() => {
  // Derived from max link length (+ 2), plus the 'via' section
  const truncLength = 98;

  const pageTitle = $(document).prop('title').replace(' | Spark Communications', '');

  const twitterTitle = truncate(pageTitle, truncLength);

  $('.js-share').jsSocials({
    showLabel: false,
    showCount: false,
    shares: [
      'email',
      {
        share: 'twitter',
        via: 'sparkcomms',
        text: twitterTitle
      },
      'facebook',
      'googleplus',
      'linkedin'
    ]
  });
});
