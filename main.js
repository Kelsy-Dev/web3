const icon = document.querySelector('.icon');
const cross = document.querySelector('.icon-menu');
const menuBar = document.querySelector('.menu');


icon.addEventListener('click', () => {
    icon.classList.add('hide');
    cross.classList.remove('hide');
    menuBar.classList.remove('hide');
})
cross.addEventListener('click', () => {
    icon.classList.remove('hide');
    cross.classList.add('hide');
    menuBar.classList.add('hide');
})
