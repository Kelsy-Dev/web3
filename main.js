const icon = document.querySelector('.icon');
const cross = document.querySelector('.icon-menu');
icon.addEventListener('click', () => {
    icon.classList.add('open-menu');
    cross.classList.remove('icon-menu');
})
cross.addEventListener('click', () => {
    icon.classList.remove('open-menu');
    cross.classList.add('icon-menu');
})
