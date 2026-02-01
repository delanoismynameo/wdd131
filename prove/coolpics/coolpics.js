let menu = document.querySelector('nav');
let btn = document.querySelector('.menu-btn');

const modal = document.querySelector('dialog');
const modalImage = document.querySelector('dialog img');
const main = document.querySelector('main');
const closeButton = document.querySelector('.close-viewer')

btn.addEventListener('click', toggleMenu);

function toggleMenu(){
    menu.classList.toggle('hide');
}

main.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        modalImage.src = e.target.src;
        modalImage.alt = e.target.alt;
        modal.showModal();
    }
});

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});