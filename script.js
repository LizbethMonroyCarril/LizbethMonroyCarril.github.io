// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile nav toggle
document.getElementById('navToggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});

// Close nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// Scroll-reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, entry.target.dataset.delay || 0);
    }
  });
}, { threshold: 0.15 });

// Stagger skill cards
document.querySelectorAll('.skill-card').forEach((el, i) => {
  el.dataset.delay = i * 100;
  observer.observe(el);
});

// Timeline items
document.querySelectorAll('.timeline-item').forEach((el, i) => {
  el.dataset.delay = i * 150;
  observer.observe(el);
});

// Photo fallback
const photo = document.getElementById('heroPhoto');
if (photo) {
  photo.addEventListener('error', () => {
    photo.style.display = 'none';
    const wrap = photo.parentElement;
    wrap.style.background = 'linear-gradient(135deg, #e8829a 0%, #c45e75 100%)';
    wrap.style.borderRadius = '38% 62% 53% 47% / 44% 46% 54% 56%';
    const initials = document.createElement('div');
    initials.textContent = 'LMC';
    initials.style.cssText = `
      position:absolute; inset:0; display:flex; align-items:center;
      justify-content:center; font-family:'Playfair Display',serif;
      font-size:5rem; font-weight:900; color:rgba(255,255,255,0.6);
      letter-spacing:4px;
    `;
    wrap.appendChild(initials);
  });
}
