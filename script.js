
const dayBtn = document.querySelector('.day');
const nightBtn = document.querySelector('.night');
const body = document.body;


nightBtn.addEventListener('click', () => {
    body.classList.add('dark-theme');
});


dayBtn.addEventListener('click', () => {
    body.classList.remove('dark-theme');
});