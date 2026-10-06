import { animate, develop, iris, rearrange, reduced, selectionIndicator } from './motion';

const items = [...document.querySelectorAll<HTMLAnchorElement>('[data-gallery-item]')];
const filters = [...document.querySelectorAll<HTMLButtonElement>('[data-gallery-filter]')];
const groups = [...document.querySelectorAll<HTMLElement>('[data-gallery-section]')];
const count = document.querySelector<HTMLElement>('[data-gallery-count]');
const filterGroup = document.querySelector<HTMLElement>('.showcase-switcher');
const moveIndicator = filterGroup ? selectionIndicator(filterGroup) : undefined;
const visibleItems = () => items.filter((item) => !item.hidden);

filters.forEach((filter) => filter.addEventListener('click', () => {
  const group = filter.dataset.galleryFilter;
  filters.forEach((button) => {
    button.classList.toggle('is-active', button === filter);
    button.setAttribute('aria-pressed', String(button === filter));
  });
  moveIndicator?.();
  rearrange(items, () => {
    items.forEach((item) => {
      item.hidden = group !== 'all' && item.dataset.galleryGroup !== group;
      if (!item.hidden) item.classList.remove('motion-pending');
    });
    groups.forEach((section) => { section.hidden = !section.querySelector('[data-gallery-item]:not([hidden])'); });
  });
  if (count) count.textContent = `显示 ${visibleItems().length} 个界面`;
}));

const dialog = document.querySelector<HTMLDialogElement>('[data-lightbox]');
const image = document.querySelector<HTMLImageElement>('[data-lightbox-image]');
const title = document.querySelector<HTMLElement>('#lightbox-title');
const caption = document.querySelector<HTMLElement>('[data-lightbox-caption]');
const counter = document.querySelector<HTMLElement>('[data-lightbox-counter]');
const status = document.querySelector<HTMLElement>('[data-lightbox-status]');
const closeButton = document.querySelector<HTMLButtonElement>('[data-lightbox-close]');
const playButton = document.querySelector<HTMLButtonElement>('[data-lightbox-play]');
const originalLink = document.querySelector<HTMLAnchorElement>('[data-lightbox-original]');
let trigger: HTMLAnchorElement | null = null;
let current: HTMLAnchorElement | null = null;
let request = 0;
let closing = false;
let playing = false;

const updatePlay = () => {
  if (!playButton) return;
  playButton.hidden = !current?.dataset.galleryPoster;
  playButton.setAttribute('aria-pressed', String(playing));
  playButton.textContent = playing ? '停止演示' : '播放演示';
};

const loadImage = async (direction = 0) => {
  if (!dialog || !image || !current) return;
  const id = ++request;
  const source = (!playing && current.dataset.galleryPoster) || current.dataset.gallerySrc!;
  image.getAnimations().forEach((animation) => animation.cancel());
  image.hidden = true;
  image.removeAttribute('src');
  dialog.setAttribute('aria-busy', 'true');
  if (status) { status.hidden = false; status.textContent = '正在加载完整图片…'; }
  const next = new Image();
  next.src = source;
  try {
    await next.decode();
    // Rapid arrows/closing invalidate old requests before they can replace the current frame.
    if (id !== request || !dialog.open) return;
    image.src = source;
    image.alt = current.dataset.galleryTitle ?? '项目界面';
    image.hidden = false;
    dialog.setAttribute('aria-busy', 'false');
    if (status) status.hidden = true;
    if (direction) void animate(image, [
      { opacity: 0, transform: `translateX(${direction * 18}px)` }, { opacity: 1, transform: 'none' },
    ], { duration: 280 });
    else void develop(image);
  } catch {
    if (id !== request || !dialog.open) return;
    dialog.setAttribute('aria-busy', 'false');
    if (status) status.textContent = '图片暂时未能加载，可打开原图重试，或切换下一张。';
  }
};

const render = (item: HTMLAnchorElement, direction = 0) => {
  current = item;
  playing = false;
  updatePlay();
  if (title) title.textContent = item.dataset.galleryTitle ?? '界面详情';
  if (caption) caption.textContent = item.dataset.galleryCaption ?? '';
  const visible = visibleItems();
  if (counter) counter.textContent = `${String(visible.indexOf(item) + 1).padStart(2, '0')} / ${String(visible.length).padStart(2, '0')}`;
  if (originalLink) originalLink.href = item.dataset.gallerySrc!;
  void loadImage(direction);
};

items.forEach((item) => item.addEventListener('click', (event) => {
  // Keep original-image links working without JS or native dialog support.
  if (!dialog?.showModal || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  if (closing) return;
  trigger = item;
  document.documentElement.classList.add('lightbox-open');
  dialog.showModal();
  render(item);
  void iris(dialog);
  closeButton?.focus({ preventScroll: true });
}));

const close = async () => {
  if (!dialog?.open || closing) return;
  closing = true;
  request++;
  playing = false;
  if (image && current?.dataset.galleryPoster) image.src = current.dataset.galleryPoster;
  // Clear interrupted entrance effects so Escape is always responsive.
  dialog.getAnimations().forEach((animation) => animation.cancel());
  if (!reduced()) await iris(dialog, false);
  dialog.close();
};

dialog?.addEventListener('close', () => {
  request++;
  closing = false;
  document.documentElement.classList.remove('lightbox-open');
  if (image) { image.hidden = true; image.removeAttribute('src'); }
  trigger?.focus({ preventScroll: true });
  trigger = null;
});
dialog?.addEventListener('cancel', (event) => { event.preventDefault(); void close(); });
dialog?.addEventListener('click', (event) => { if (event.target === dialog) void close(); });
closeButton?.addEventListener('click', () => void close());

const move = (direction: number) => {
  if (closing || !dialog?.open) return;
  const visible = visibleItems();
  const position = current ? visible.indexOf(current) : 0;
  if (visible.length) render(visible[(position + direction + visible.length) % visible.length], direction);
};
document.querySelector('[data-lightbox-prev]')?.addEventListener('click', () => move(-1));
document.querySelector('[data-lightbox-next]')?.addEventListener('click', () => move(1));
dialog?.addEventListener('keydown', (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.key === 'Tab') {
    const controls = [...dialog.querySelectorAll<HTMLElement>('button:not(:disabled), a[href], [tabindex="0"]')]
      .filter((element) => !element.hidden && element.getClientRects().length > 0);
    const first = controls[0];
    const last = controls.at(-1);
    if (event.shiftKey && (document.activeElement === first || !dialog.contains(document.activeElement))) {
      event.preventDefault(); last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first?.focus();
    }
    return;
  }
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1); }
});
playButton?.addEventListener('click', () => { if (!closing) { playing = !playing; updatePlay(); void loadImage(); } });
const stopDemo = () => { if (playing) { playing = false; updatePlay(); void loadImage(); } };
window.addEventListener('portfolio:motion', () => { if (reduced()) stopDemo(); });
document.addEventListener('visibilitychange', () => { if (document.hidden) stopDemo(); });

document.querySelectorAll<HTMLDetailsElement>('.incident-more').forEach((details) => {
  details.addEventListener('toggle', () => {
    const content = details.querySelector('.incident-more-grid');
    if (details.open && content) void animate(content, [{ opacity: 0, transform: 'translateY(-10px)' }, { opacity: 1, transform: 'none' }], { duration: 320 });
  });
});
