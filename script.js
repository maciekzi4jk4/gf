let clicks = 0;
const redButton = document.querySelector('.red');
const GreenButton = document.querySelector('.green');


redButton.addEventListener('click', () => {
    alert("naprawde? :<");
});

GreenButton.addEventListener('click', () => {
    window.location.href = 'wow.html';
});