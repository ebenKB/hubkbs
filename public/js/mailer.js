window.addEventListener('load', (() => {
    (function(){
        emailjs.init("user_5rNVBXR5IxRoQZYt669X5");
    })();

    const btn = document.getElementById('btnSubmit');
    if(btn != null) {
      btn.addEventListener('click', (() => {
        $('#validated-form').addClass('validated'); 
      }));
    }

    const form = document.getElementById('contact-form');
    if(form != null) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            $('#btnSubmit').text("Sending message...");
            emailjs.sendForm('gmail', 'contact-form', this)
                .then((data) => {
                    if(data.status == 200) {
                        // message sent successfully
                        showStatus();
                    }
                })
                .catch(() => {
                    alert("sorry! an error occured while sending your message")
                })
        });
    }
}));

function showStatus() {

}