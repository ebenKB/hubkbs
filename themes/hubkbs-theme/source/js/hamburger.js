// humburger for smaller view ports
$('document').ready( () => {
    const mediaMob = document.getElementById('media-mob');
  if(mediaMob != null) {
    mediaMob.addEventListener('click', () => {
      const burgerTop = document.getElementById('burger-top');
      const burgerMid = document.getElementById('burger-mid');
      const burgerDown = document.getElementById('burger-down');
      const menu = document.getElementById('menu');
    
      burgerTop.classList.toggle('burger-top-rotate');
      burgerDown.classList.toggle('burger-down-rotate');
      burgerMid.classList.toggle('hide');
      menu.classList.remove('menu-toggle');
    
      if (!burgerTop.classList.contains('burger-top-rotate')) {
        menu.classList.add('hide')
        burgerDown.style.backgroundColor = '#fff';
        burgerTop.style.backgroundColor = '#fff';
      } else {
        menu.classList.remove('hide')
      }
    });
  }
});
