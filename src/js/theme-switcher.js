// import { refs } from './refs';
// import { saveTheme, loadTheme } from './local-storage-api';

// initTheme();
// refs.themeBtn.addEventListener('click', onThemeToggle);

// function initTheme() {
//   const theme = loadTheme();
//   if (theme === 'dark') {
//     refs.container.classList.add('dark');
//   }
// }

// function onThemeToggle() {
//   const isDark = refs.container.classList.toggle('dark');
//   saveTheme(isDark ? 'dark' : 'light');
// }

// theme-switcher.js
import { saveTheme, loadTheme } from './local-storage-api';

document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    themeBtn: document.querySelector('.theme-toggle-button'),
    container: document.querySelector('.header'), // убедись, что класс совпадает
  };

  if (!refs.themeBtn || !refs.container) {
    console.error('Не найден элемент кнопки или контейнера!');
    return;
  }

  // === Инициализация темы при загрузке страницы ===
  initTheme();

  // === Слушатель кнопки ===
  refs.themeBtn.addEventListener('click', onThemeToggle);

  // Функция инициализации темы
  function initTheme() {
    const savedTheme = loadTheme(); // 'dark' или 'light'
    if (savedTheme === 'dark') {
      refs.container.classList.add('dark');
    } else {
      refs.container.classList.remove('dark');
    }
  }

  // Функция переключения темы
  function onThemeToggle() {
    const isDark = refs.container.classList.toggle('dark');
    const theme = isDark ? 'dark' : 'light';
    saveTheme(theme); // сохраняем в localStorage
  }
});
