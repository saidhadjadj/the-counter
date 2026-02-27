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

// ===== 1. ACCESSIBILITÉ =====
incrementBtn.setAttribute('aria-label', 'Augmenter le compteur');
decrementBtn.setAttribute('aria-label', 'Diminuer le compteur');
resetBtn.setAttribute('aria-label', 'Réinitialiser le compteur');

// ===== 2. LOCALSTORAGE =====
if (localStorage.getItem('count') !== null) {
  count = parseInt(localStorage.getItem('count'), 10);
}

function saveCount() {
  localStorage.setItem('count', count);
}

// ===== 3. MISE À JOUR =====
function updateCounter() {
  counterElement.textContent = count;

  // Couleurs accessibles
  if (count > 0) counterElement.style.color = '#4aff9e';
  else if (count < 0) counterElement.style.color = '#ff6b6b';
  else counterElement.style.color = '#ffbd0a'; // Jaune contrasté

  // Animation légère
  counterElement.animate([
    { transform: 'scale(1.2)', opacity: 0.8 },
    { transform: 'scale(1)', opacity: 1 }
  ], { duration: 200, easing: 'ease' });
}

// ===== 4. ÉVÉNEMENTS =====
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

// ===== 6. INITIALISATION =====
updateCounter();

//  d'un examen.Réponse : Ce projet peut constituer une bonne base pour un projet de compteur interactif simple, cependant, il n'est pas tout à fait complet et "fini" selon les standards professionnels ou pédagogiques.
// Améliorations recommandées avant de le présenter :
//
// 1. Ajoutez une gestion des erreurs : Vérifiez l'existence des éléments DOM avant de les manipuler.
// 2. Gérez les cas limites : Limitez le compteur à une valeur minimale (par exemple 0) ou maximale pour éviter les dépassements inattendus.
// 3. Ajoutez un feedback utilisateur plus explicite : Messages lorsqu'une limite est atteinte, focus visuel sur les boutons actifs, etc.
// 4. Travaillez l'accessibilité : Ajoutez des labels ARIA, vérifiez la navigation clavier, améliorez le contraste des couleurs avec CSS, etc.
// 5. Commentez le code de façon claire pour faciliter la compréhension par d'autres développeurs.
// 6. Implémentez un Responsive Design : Adaptez l'affichage aux mobiles et tablettes (CSS).
// 7. Ajoutez des tests : Un fichier de tests unitaires ou d’intégration pour vérifier les fonctionnalités principales.
// 8. Ajoutez un README.md complet : Présentez le projet, avec instructions d’installation, d’utilisation et captures d’écran.
// 9. Structurez le code et les fichiers : Séparez le JS, le CSS, et envisagez l’utilisation de modules JS pour des projets plus grands.
// 10. Ajoutez une favicon et améliorez le titre/html (accessibilité, SEO).
//
// Après avoir intégré ces améliorations, le projet serait beaucoup plus complet et présentable dans un portfolio ou lors