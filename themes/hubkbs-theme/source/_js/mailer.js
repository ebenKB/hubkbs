window.addEventListener('DomContentLoaded', (() => {
    (function(){
        emailjs.init("user_5rNVBXR5IxRoQZYt669X5");
     })();
}));

$('document').ready(() => {
    const btn = document.getElementById('btnSubmit');
    if(btn != null) {
      btn.addEventListener('click', ((e) => {
        $('#validated-form').addClass('validated');
        console.log("validated...");
        e.preventDefault();

        emailjs.sendForm('gmail', 'hubkbs', 'contact-form')
            .then((data) => {
                alert("sent mesage", data);
            });
      }));
    }
  });