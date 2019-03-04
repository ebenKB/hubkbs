window.onload = function() {
  // alert('the window has loaded...')
  // fetch('https://maps.googleapis.com/maps/api/timezone/json?location=39.6034810,-119.6822510&timestamp=1331161200&key=YOUR_API_KEY')
  // .then((data) => {
  //   console.log('this is the data from fetch :', data)
  // })
}

// add scroll animation for all scrollable elements
$("document").ready(() => {
  scroll('to-offering', 'offerings', 800);
  scroll('to-top', 'home', 1000);
  scroll('to-citation', 'citation', 800);
});

// Define a scroll function 
//  @params id = #id, to = #id, delay = integer
function scroll(id, to, delay) {
  $('#'+id).click(() =>{
    $('html, body').animate({
      scrollTop: $('#'+to).offset().top
    }, delay)
  });
}



$("document").ready(() =>{
// scroll positions
let last_known_scroll_position = 0;
let current_pos = last_known_scroll_position;

// add a scroll event listner
window.addEventListener('scroll', () =>{
  last_known_scroll_position = current_pos;
  current_pos = window.scrollY;
  
  window.requestAnimationFrame(() =>{
    // show floating button
    if(current_pos >= 700) {
      document.getElementById('to-top').classList.remove('hide');
    } else document.getElementById('to-top').classList.add('hide');
  });
});
});