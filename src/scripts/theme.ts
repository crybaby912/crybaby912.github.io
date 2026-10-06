type Theme = 'light' | 'dark';

const storageKey = 'portfolio-theme';
const root = document.documentElement;
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
const buttons = document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]');

function readPreference(): Theme | null {
  try {
    const stored = localStorage.getItem(storageKey);
    return stored === 'light' || stored === 'dark' ? stored : null;
  } catch { return null; }
}

let preference = readPreference();
function applyTheme() {
  const theme = preference ?? (systemTheme.matches ? 'dark' : 'light');
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#101917' : '#f6f8f5');
  buttons.forEach((button) => {
    button.setAttribute('aria-pressed', String(theme === 'dark'));
    button.title = theme === 'dark' ? '切换为浅色模式' : '切换为深色模式';
    button.hidden = false;
  });
}

buttons.forEach((button) => button.addEventListener('click', () => {
  preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem(storageKey, preference); } catch { /* Keep the in-memory preference. */ }
  applyTheme();
}));

systemTheme.addEventListener('change', () => { if (!preference) applyTheme(); });
window.addEventListener('storage', (event) => {
  if (event.key === storageKey || event.key === null) {
    preference = readPreference();
    applyTheme();
  }
});
window.addEventListener('pageshow', () => {
  // Reconcile a restored page with changes made in another tab or page.
  preference = readPreference();
  applyTheme();
});
applyTheme();
