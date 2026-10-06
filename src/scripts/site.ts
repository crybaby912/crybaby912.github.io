import { animate, motionQuery, reduced, revealPage, selectionIndicator, stopMotion } from './motion';

const root = document.documentElement;
root.classList.add('motion-ready');
let paused = false;
try { paused = localStorage.getItem('portfolio-motion') === 'reduce'; } catch { /* Storage is optional. */ }
const motionButton = document.querySelector<HTMLButtonElement>('[data-motion-toggle]');
const syncMotion = () => {
  root.dataset.motion = paused || motionQuery.matches ? 'reduce' : 'full';
  motionButton?.setAttribute('aria-pressed', String(reduced()));
  if (motionButton) {
    motionButton.hidden = false;
    motionButton.title = motionQuery.matches ? '已跟随系统减少动态效果设置' : reduced() ? '开启动效' : '暂停动效';
    motionButton.querySelector('[data-motion-label]')!.textContent = reduced() ? '动效已暂停' : '暂停动效';
    motionButton.disabled = motionQuery.matches;
  }
  if (reduced()) stopMotion();
  window.dispatchEvent(new Event('portfolio:motion'));
};
motionButton?.addEventListener('click', () => {
  paused = !paused;
  try { localStorage.setItem('portfolio-motion', paused ? 'reduce' : 'system'); } catch { /* No persistence in private mode. */ }
  syncMotion();
});
motionQuery.addEventListener('change', syncMotion);
syncMotion();
revealPage();

const header = document.querySelector<HTMLElement>('.site-header');
const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
const nav = document.querySelector<HTMLElement>('.site-nav');
const setMenu = (open: boolean, restoreFocus = false) => {
  header?.classList.toggle('nav-open', open);
  toggle?.classList.toggle('is-open', open);
  toggle?.setAttribute('aria-expanded', String(open));
  toggle?.setAttribute('aria-label', open ? '关闭导航' : '打开导航');
  if (open && nav) {
    void animate(nav, [{ opacity: 0, transform: 'translateY(-8px) scale(.98)' }, { opacity: 1, transform: 'none' }], { duration: 260 });
    nav.querySelector<HTMLElement>('a')?.focus();
  } else if (restoreFocus) toggle?.focus();
};
toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') setMenu(false, true); });
document.addEventListener('click', (event) => { if (!header?.contains(event.target as Node)) setMenu(false); });
document.addEventListener('focusin', (event) => { if (!header?.contains(event.target as Node)) setMenu(false); });
window.matchMedia('(min-width: 681px)').addEventListener('change', () => setMenu(false));

const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]')];
const sections = [...document.querySelectorAll<HTMLElement>('[data-section]')];
const progress = document.querySelector<HTMLElement>('.scroll-progress span');
const sectionNav = document.querySelector<HTMLElement>('.case-nav');
const indicator = sectionNav ? selectionIndicator(sectionNav, '[aria-current="location"]') : undefined;
let frame = 0;
const updateScroll = () => {
  frame = 0;
  const max = root.scrollHeight - innerHeight;
  progress?.style.setProperty('transform', `scaleX(${max > 0 ? Math.min(scrollY / max, 1) : 0})`);
  header?.classList.toggle('is-scrolled', scrollY > 24);
  let current = sections[0]?.id;
  for (const section of sections) if (section.getBoundingClientRect().top <= innerHeight * .4) current = section.id;
  links.forEach((link) => {
    const selected = link.hash === `#${current}`;
    link.classList.toggle('is-active', selected);
    if (selected) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  indicator?.();
};
const schedule = () => { if (!frame) frame = requestAnimationFrame(updateScroll); };
window.addEventListener('scroll', schedule, { passive: true });
window.addEventListener('resize', schedule, { passive: true });
if ('ResizeObserver' in window) new ResizeObserver(schedule).observe(document.body);
updateScroll();

// Ambient chrome animates only while visible. The image itself remains still and readable.
const ambient = document.querySelector<HTMLElement>('[data-ambient]');
let inView = true;
const updateAmbient = () => ambient?.classList.toggle('ambient-paused', !inView || document.hidden || reduced());
if (ambient && 'IntersectionObserver' in window) new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; updateAmbient(); }).observe(ambient);
document.addEventListener('visibilitychange', updateAmbient);
window.addEventListener('portfolio:motion', updateAmbient);
updateAmbient();
