/**
 * Adapted from ruiqichenbiec/design-systems (MIT, DayDreamInAReverie).
 * Lens: bounded-step spring. Overture: iris / develop / FLIP motion grammar.
 * Pinned source and full license: public/licenses/design-systems.txt.
 */
export const ease = 'cubic-bezier(.16, 1, .3, 1)';
export const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
export const reduced = () => motionQuery.matches || document.documentElement.dataset.motion === 'reduce';
const active = new Set<Animation>();

export function animate(element: Element, frames: Keyframe[], options: KeyframeAnimationOptions = {}) {
  if (reduced() || !element.animate) return Promise.resolve();
  const animation = element.animate(frames, { duration: 480, easing: ease, ...options });
  active.add(animation);
  return animation.finished.catch(() => undefined).finally(() => active.delete(animation));
}

export function stopMotion() {
  active.forEach((animation) => animation.cancel());
  active.clear();
}

// Lens's spring solver preserves velocity when a target changes mid-flight.
class Spring {
  value: number;
  target: number;
  velocity = 0;
  constructor(value = 0) { this.value = this.target = value; }
  step(dt: number, stiffness = 260, damping = 27) {
    let remaining = Math.min(Math.max(dt, 0), .08);
    while (remaining > 0) {
      const h = Math.min(remaining, 1 / 180);
      this.velocity += ((this.target - this.value) * stiffness - this.velocity * damping) * h;
      this.value += this.velocity * h;
      remaining -= h;
    }
    if (!this.moving) this.snap();
    return this.value;
  }
  snap(value = this.target) { this.value = this.target = value; this.velocity = 0; }
  get moving() { return Math.abs(this.velocity) > .025 || Math.abs(this.target - this.value) > .005; }
}

/** Lens selection surface: animate only its position/scale, not document layout. */
export function selectionIndicator(group: HTMLElement, selector = '[aria-pressed="true"]') {
  const surface = document.createElement('span');
  surface.className = 'selection-lens';
  surface.setAttribute('aria-hidden', 'true');
  group.prepend(surface);
  const x = new Spring();
  const width = new Spring();
  let raf = 0;
  let last = 0;
  let ready = false;
  const paint = () => { surface.style.transform = `translateX(${x.value}px) scaleX(${width.target ? Math.max(0, width.value) / width.target : 1})`; };
  const tick = (now: number) => {
    raf = 0;
    if (reduced() || document.hidden) { x.snap(); width.snap(); }
    else { x.step((now - last) / 1000); width.step((now - last) / 1000); }
    last = now;
    paint();
    if (x.moving || width.moving) raf = requestAnimationFrame(tick);
  };
  const update = (instant = false) => {
    const selected = group.querySelector<HTMLElement>(selector);
    if (!selected || !group.offsetWidth) return;
    x.target = selected.offsetLeft;
    width.target = selected.offsetWidth;
    surface.style.width = `${width.target}px`;
    if (!ready || instant || reduced()) { x.snap(); width.snap(); paint(); ready = true; }
    else if (!raf) { last = performance.now(); raf = requestAnimationFrame(tick); }
  };
  if ('ResizeObserver' in window) new ResizeObserver(() => update(true)).observe(group);
  window.addEventListener('portfolio:motion', () => update(true));
  update(true);
  group.classList.add('has-selection-lens');
  return update;
}

export function iris(element: Element, open = true) {
  return animate(element, [
    { clipPath: open ? 'inset(0 0 100% 0 round 20px)' : 'inset(0 0 0% 0 round 20px)', opacity: open ? .6 : 1 },
    { clipPath: open ? 'inset(0 0 0% 0 round 20px)' : 'inset(0 0 12% 0 round 20px)', opacity: open ? 1 : 0 },
  ], { duration: open ? 620 : 180 });
}

// Adapted develop curve: screenshots finish at their unmodified colors and contrast.
export function develop(element: Element, delay = 0) {
  return animate(element, [
    { filter: 'saturate(.35) brightness(1.12)', opacity: .4 },
    { filter: 'saturate(1) brightness(1)', opacity: 1 },
  ], { duration: 620, delay, fill: 'backwards' });
}

/** Overture FLIP, keyed by DOM identity; cancel stale transitions on rapid filtering. */
export function rearrange(items: HTMLElement[], mutate: () => void) {
  const before = new Map(items.filter((item) => !item.hidden).map((item) => [item, item.getBoundingClientRect()]));
  items.forEach((item) => item.getAnimations().forEach((animation) => animation.cancel()));
  mutate();
  items.filter((item) => !item.hidden).forEach((item, index) => {
    const from = before.get(item);
    const to = item.getBoundingClientRect();
    if (from) {
      const dx = from.left - to.left;
      const dy = from.top - to.top;
      if (Math.abs(dx) + Math.abs(dy) > 1) void animate(item, [
        { transform: `translate(${dx}px, ${dy}px)` }, { transform: 'translate(0, 0)' },
      ], { duration: 540 });
    } else {
      void animate(item, [{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 420, delay: Math.min(index * 45, 160), fill: 'backwards' });
    }
  });
}

export function revealPage() {
  const items = [...document.querySelectorAll<HTMLElement>('[data-reveal], [data-detail-reveal]')];
  const pending = new Set<HTMLElement>();
  const show = (element: HTMLElement, delay = 0) => {
    pending.delete(element);
    element.classList.remove('motion-pending');
    element.classList.add('is-visible');
    if (reduced()) return;
    if (element.matches('[data-aperture]')) {
      void iris(element);
      const image = element.querySelector('img');
      if (image) void develop(image, 90);
    } else void animate(element, [{ opacity: 0, transform: 'translateY(20px)' }, { opacity: 1, transform: 'translateY(0)' }],
      { duration: 620, delay, fill: 'backwards' });
  };
  if (reduced() || !('IntersectionObserver' in window)) { items.forEach((item) => show(item)); return; }
  const observer = new IntersectionObserver((entries) => {
    let order = 0;
    for (const entry of entries) if (entry.isIntersecting) {
      const element = entry.target as HTMLElement;
      show(element, Math.min(order++ * 65, 240));
      observer.unobserve(element);
    }
  }, { threshold: .06, rootMargin: '0px 0px -24px' });
  items.forEach((item) => { pending.add(item); item.classList.add('motion-pending'); observer.observe(item); });
  const finish = () => { if (reduced()) { observer.disconnect(); [...pending].forEach((item) => show(item)); } };
  window.addEventListener('portfolio:motion', finish);
  // A keyboard user must never focus an invisible control while a reveal is pending.
  document.addEventListener('focusin', (event) => {
    const element = (event.target as HTMLElement).closest<HTMLElement>('.motion-pending');
    if (element) { observer.unobserve(element); show(element); }
  });
}
