// humburger for smaller view ports
$('document').ready( () => {
    const mediaMob = document.getElementById('media-mob');
  if(mediaMob != null) {
    mediaMob.addEventListener('click', () => {
      const burgerTop = document.getElementById('burger-top');
      const burgerMid = document.getElementById('burger-mid');
      const burgerDown = document.getElementById('burger-down');
      const menu = document.getElementById('menu');
      // const header = document.getElementById('site-header');
    
      burgerTop.classList.toggle('burger-top-rotate');
      burgerDown.classList.toggle('burger-down-rotate');
      burgerMid.classList.toggle('hide');
      menu.classList.remove('menu-toggle');
    
      if (!burgerTop.classList.contains('burger-top-rotate')) {
        menu.classList.add('hide')
        burgerDown.style.backgroundColor = '#fff';
        burgerTop.style.backgroundColor = '#fff';
        // menu.classList.add('thirteen');
        // header.style.setProperty('position', 'fixed');
      } else {
        menu.classList.remove('hide');
        // header.style.setProperty('position', 'relative');
        
        if(menu.classList.contains('thirteen')) {
          menu.classList.remove('thirteen');
        }

        // $('html, body').animate({
        //   scrollTop: $('#'+'home').offset().top
        // }, 300)
      }
    });
  }
});

// $('.nav-item').addEventListener('click', ()=> {
//   // allow the header to be scrollable
//   header.style.setProperty('position', 'relative');
// })
