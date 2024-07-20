// Меню и плавный скролл
const toggleButton = document.querySelector('.toggle');
const navMenu = document.querySelector('.nav__list');
const body = document.body;

function toggleMenu(isOpen) {
  navMenu.classList.toggle('active', isOpen);
  toggleButton.classList.toggle('active', isOpen);
  body.style.overflow = isOpen ? 'hidden' : '';
}

toggleButton.addEventListener('click', () => toggleMenu(!navMenu.classList.contains('active')));

document.querySelectorAll('.nav__item a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    window.scrollTo({ top: targetElement.offsetTop - 100, behavior: 'smooth' });
    toggleMenu(false);
  });
});

// Animation
AOS.init();