
var nam = document.getElementById('nam');
var subject = document.getElementById('subj');
var email = document.getElementById('email');
var message = document.getElementById('msg');
var sub = document.getElementById('submit-btn');
var sent = document.getElementById('sendmessage');

var data = {
    service_id: 'service_5henyxo',
    template_id: 'template_egbiepe',
    user_id: 'user_JWFDrWwGGF50l6T287OOG',
    template_params: {
        'name': `${nam.value}`,
        'subject': `${subject.value}`,
        'email': `${email.value}`,
        'message': `${message.value}`
    }
}

sub.addEventListener('submit', async function(e,data) {
    e.preventDefault()
    await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            console.log(res);
            sent.style.display = 'block'
        })
})

