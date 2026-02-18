/* ============================
   SOLARTE – script.js
   ============================ */

'use strict';

// ── PARTICLES ──────────────────────────────────────
(function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 50; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left   = Math.random() * 100 + '%';
    p.style.top    = Math.random() * 100 + '%';
    p.style.width  = (2 + Math.random() * 3) + 'px';
    p.style.height = p.style.width;
    p.style.animationDelay    = Math.random() * 20 + 's';
    p.style.animationDuration = (15 + Math.random() * 10) + 's';
    container.appendChild(p);
  }
})();

// ── NAVBAR SCROLL ───────────────────────────────────
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

const debounce = (fn, ms) => {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
};

window.addEventListener('scroll', debounce(() => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Active nav link
  let current = '';
  document.querySelectorAll('section[id]').forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(l => {
    l.classList.remove('active');
    if (l.getAttribute('href') === '#' + current) l.classList.add('active');
  });
}, 50));

// ── MOBILE MENU ─────────────────────────────────────
const menuToggle = document.getElementById('menuToggle');
const mobileNav  = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
  const spans = menuToggle.querySelectorAll('span');
  const isOpen = mobileNav.classList.contains('open');
  spans[0].style.transform = isOpen ? 'translateY(7px) rotate(45deg)' : '';
  spans[1].style.opacity   = isOpen ? '0' : '';
  spans[2].style.transform = isOpen ? 'translateY(-7px) rotate(-45deg)' : '';
});

// Close menu on link click
mobileNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuToggle.querySelectorAll('span').forEach(s => {
      s.style.transform = s.style.opacity = '';
    });
  });
});

// ── FLIP CARDS (mobile tap) ─────────────────────────
document.querySelectorAll('.service-card-flip').forEach(card => {
  card.addEventListener('click', () => {
    if (window.innerWidth <= 767) {
      card.classList.toggle('flipped');
    }
  });
});

// ── INTERSECTION OBSERVER (scroll reveal + counters) ─
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── COUNTER ANIMATION ───────────────────────────────
function animateCounter(el, target, duration = 1800) {
  const increment = target / (duration / 16);
  let current = 0;
  const tick = () => {
    current += increment;
    if (current >= target) {
      el.textContent = Math.round(target);
    } else {
      el.textContent = Math.round(current);
      requestAnimationFrame(tick);
    }
  };
  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      animateCounter(el, target);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target], .counter').forEach(el => {
  if (!el.dataset.target && el.classList.contains('counter')) {
    el.dataset.target = el.textContent;
    el.textContent = '0';
  }
  counterObserver.observe(el);
});

// ── SMOOTH SCROLL ───────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ── FORM SUBMIT ─────────────────────────────────────
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const orig = btn.textContent;
    btn.textContent = '✓ ¡Mensaje enviado!';
    btn.style.background = 'linear-gradient(135deg, #6A8E3F, #5a7a34)';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = orig;
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 3000);
  });
}

// ── PARALLAX HERO ───────────────────────────────────
const heroBg = document.querySelector('.hero-bg-glow');
if (heroBg) {
  window.addEventListener('scroll', debounce(() => {
    const scrolled = window.scrollY;
    heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
  }, 10));
}
