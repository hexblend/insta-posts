const textEl = document.querySelector('.rubber-heading');
const text = textEl.textContent;
const letters = text.split('');

let html = '';

const makeSpan = letter => `<span class="rubber-letter">${letter}</span>`;

letters.forEach(letter => (html += makeSpan(letter)));

textEl.innerHTML = html;
