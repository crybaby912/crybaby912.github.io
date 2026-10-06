import { animate, rearrange, reduced, selectionIndicator } from './motion';

const filters = [...document.querySelectorAll<HTMLButtonElement>('[data-filter]')];
const cards = [...document.querySelectorAll<HTMLElement>('[data-category]')];
const group = document.querySelector<HTMLElement>('.category-switcher');
const status = document.querySelector<HTMLElement>('[data-filter-status]');
const moveIndicator = group ? selectionIndicator(group) : undefined;
filters.forEach((filter) => filter.addEventListener('click', () => {
  const category = filter.dataset.filter;
  filters.forEach((button) => button.setAttribute('aria-pressed', String(button === filter)));
  moveIndicator?.();
  rearrange(cards, () => cards.forEach((card) => {
    card.hidden = category !== 'ALL' && card.dataset.category !== category;
    if (!card.hidden) card.classList.remove('motion-pending');
  }));
  const count = cards.filter((card) => !card.hidden).length;
  if (status) status.textContent = category === 'ALL' ? `显示全部 ${count} 个项目` : `${category} · ${count} 个项目`;
}));

const counters = [...document.querySelectorAll<HTMLElement>('[data-count]')];
if (!reduced() && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    observer.unobserve(entry.target);
    // Overture's mechanical counter: keep the real value accessible throughout.
    void animate(entry.target, [{ transform: 'perspective(240px) rotateX(-65deg)', opacity: .15 }, { transform: 'perspective(240px) rotateX(0)', opacity: 1 }], { duration: 560 });
  }), { threshold: .8 });
  counters.forEach((counter) => observer.observe(counter));
}
