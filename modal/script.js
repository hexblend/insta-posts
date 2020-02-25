const trigger = document.querySelector('.trigger');
const backgdrop = document.querySelector('.modal-backdrop');
const modal = document.querySelector('.modal');
trigger.addEventListener('click', () => modal.classList.add('modal-open'));
backgdrop.addEventListener('click', () => modal.classList.remove('modal-open'));
