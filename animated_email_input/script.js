const input = document.querySelector('.email-input');
const send_envelope = document.querySelector('.send-envelope');
const send_button = document.querySelector('.send-button');
const hidden_envelope = document.querySelector('.hidden-envelope');

const validateEmail = email => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email) ? true : false;
}

input.addEventListener('keyup', e => {
    const email = e.target.value;
    !validateEmail(email)
        ? send_envelope.style.color = '#0E1C2C'
        : send_envelope.style.color = '#fff';
});

send_button.addEventListener('click', e => {
    e.preventDefault();
    if (validateEmail(input.value)) {
        send_button.style.left = 0;
        send_envelope.style.opacity = 0;
        setTimeout(() => hidden_envelope.style.animation = '1s ease-in-out fadeOut forwards', 100);
    }
});
