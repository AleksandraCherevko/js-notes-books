import { saveTheme, loadTheme } from './local-storage-api';

document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.querySelector('.theme-toggle-button');
  const body = document.body;

  const savedTheme = loadTheme();
  body.classList.remove('theme-dark', 'theme-light');
  body.classList.add(`theme-${savedTheme}`);


  themeBtn.addEventListener('click', () => {
    const isDark = body.classList.contains('theme-dark');
    const newTheme = isDark ? 'light' : 'dark';

    body.classList.remove('theme-dark', 'theme-light');
    body.classList.add(`theme-${newTheme}`);

    saveTheme(newTheme);
  });
});
