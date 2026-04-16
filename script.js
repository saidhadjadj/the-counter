let count = 0;
const counterElement = document.querySelector('.counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

if (!counterElement || !incrementBtn || !decrementBtn || !resetBtn) {
  console.error('❌ Erreur : un élément du DOM est manquant.');
}

const MIN_COUNT = -100;
const MAX_COUNT = 100;

incrementBtn.setAttribute('aria-label', 'Augmenter le compteur');
decrementBtn.setAttribute('aria-label', 'Diminuer le compteur');
resetBtn.setAttribute('aria-label', 'Réinitialiser le compteur');

if (localStorage.getItem('count') !== null) {
  count = parseInt(localStorage.getItem('count'), 10);
}

function saveCount() {
  localStorage.setItem('count', count);
}

function updateCounter() {
  counterElement.textContent = count;
  if (count > 0) counterElement.style.color = '#4aff9e';
  else if (count < 0) counterElement.style.color = '#ff6b6b';
  else counterElement.style.color = '#ffbd0a'; // Jaune contrasté

  // Animation légère
  counterElement.animate([
    { transform: 'scale(1.2)', opacity: 0.8 },
    { transform: 'scale(1)', opacity: 1 }
  ], { duration: 200, easing: 'ease' });
}
incrementBtn.addEventListener('click', () => {
  if(count<MAX_COUNT){
    count++;
  }
  updateCounter();
  saveCount();
});

decrementBtn.addEventListener('click', () => {
  if(count>MIN_COUNT){
  count--;
  }
  updateCounter();
  saveCount();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateCounter();
  saveCount();
});

// ===== 5. RACCOURCIS CLAVIER =====
document.addEventListener('keydown', (e) => {
  if (e.key === '+' || e.key === 'ArrowUp') {
    e.preventDefault();
    count++;
    updateCounter();
    saveCount();
  }
  if (e.key === '-' || e.key === 'ArrowDown') {
    e.preventDefault();
    count--;
    updateCounter();
    saveCount();
  }
  if (e.key === '0' || e.key === 'r' || e.key === 'R') {
    e.preventDefault();
    count = 0;
    updateCounter();
    saveCount();
  }
});
updateCounter();
