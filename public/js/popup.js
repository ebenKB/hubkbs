$("document").ready(() => {
    setTimeout(() => {
      $('#add-popup').removeClass('hide');
    }, 2500);
  });

  $("#promo-close").on('click', (() =>{
    $('#add-popup').addClass('hide');
  }));