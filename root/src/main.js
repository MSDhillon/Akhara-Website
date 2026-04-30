var navLinks = document.getElementById('navLinks');

function showMenu() {
  navLinks.style.right = '0';
}
function hideMenu() {
  navLinks.style.right = '-200px';
}

const carousel = document.getElementById('carousel');

document.querySelector('.next').onclick = () => {
  carousel.scrollBy({ left: carousel.offsetWidth, behavior: 'smooth' });
};

document.querySelector('.prev').onclick = () => {
  carousel.scrollBy({ left: -carousel.offsetWidth, behavior: 'smooth' });
};