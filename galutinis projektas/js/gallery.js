const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery img');
const fullImg = document.querySelector('.full-img');
const nav = document.querySelector('nav');

previews.forEach((preview) => {
  preview.addEventListener('click', () => {
    modal.classList.add('open');
    fullImg.classList.add('open');
    const fullImgSrc = preview.getAttribute('data-fullimg');
    fullImg.src = `./images/${fullImgSrc}`;
  });
});

modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    modal.classList.remove('open');
    fullImg.classList.remove('open');
  }
});