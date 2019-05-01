$("document").ready(() => {
    setTimeout(() => {
      $('#add-popup').removeClass('hide');
    }, 2500);
  });

  $("#promo-close").on('click', (() => {
    $('#add-popup').addClass('hide');
    console.log('you want to close the addd')
  }));