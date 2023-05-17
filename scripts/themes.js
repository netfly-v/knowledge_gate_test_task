const changeThemeButtons = document.querySelectorAll('.changeTheme');

changeThemeButtons.forEach(button => {
  button.addEventListener('click', function () {
    const theme = this.dataset.theme;
    applyTheme(theme);
  });
});

function applyTheme(themeName) {
  document.querySelector('[title="theme"]')?.setAttribute('href', `theme-${themeName}.css`);
  changeThemeButtons.forEach(button => {
    button.style.display = 'block';
  });
  document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none';
}

const activeTheme = localStorage.getItem('theme');

if (activeTheme === null || activeTheme === 'light') {
  applyTheme('light');
} else if (activeTheme === 'dark') {
  applyTheme('dark');
}
