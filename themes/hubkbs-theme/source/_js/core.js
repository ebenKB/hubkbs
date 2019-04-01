window.onload = function() {
  // alert('the window has loaded...')
  // fetch('https://maps.googleapis.com/maps/api/timezone/json?location=39.6034810,-119.6822510&timestamp=1331161200&key=YOUR_API_KEY')
  // .then((data) => {
  //   console.log('this is the data from fetch :', data)
  // })
}

$('document').ready(() => {
  const btn = document.getElementById('btnSubmit');
  if(btn != null) {
    btn.addEventListener('click', (() => {
      $('#validated-form').addClass('validated');
      console.log("validated...");
    }));
  }
});

// add scroll animation for all scrollable elements
$("document").ready(() => {
  scroll('to-offering', 'offerings', 500);
  scroll('to-top', 'home', 1000);
  scroll('to-citation', 'citation', 1000);
  scroll('to-research', 'research', 1000);
  scroll('to-data-analysis', 'data-analysis', 1000);
  scroll('to-software', 'software', 1000);
  scroll('to-printing', 'printing', 1000);
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

$("document").ready(() => {
// scroll positions
let last_known_scroll_position = 0;
let current_pos = last_known_scroll_position;

// add a scroll event listner
window.addEventListener('scroll', () => {
  last_known_scroll_position = current_pos;
  current_pos = window.scrollY;
  
  window.requestAnimationFrame(() => {
    // scroll down
    if (current_pos > last_known_scroll_position) {
          // animate nav header 
      if (current_pos >= 300) {
        document.getElementById('site-header').classList.add('addColour')
      }
    } else {
      // scroll up 
      if (last_known_scroll_position - current_pos > 12) {
        document.getElementById('site-header').classList.remove('addColour');
      } else if (current_pos == 0) {
        document.getElementById('site-header').classList.remove('addColour');
      }
    }

    // show floating button
    if(current_pos >= 700) {
      document.getElementById('to-top').classList.remove('slide-out_right');
    } else document.getElementById('to-top').classList.add('slide-out_right');
  });
});
});