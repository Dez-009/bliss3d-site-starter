
// Smooth scroll
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    document
      .querySelector(btn.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Active nav highlighting based on scroll position
const sections = document.querySelectorAll('section');
const navButtons = document.querySelectorAll('.nav-btn');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navButtons.forEach(btn => {
          const target = btn.getAttribute('href').substring(1);
          btn.classList.toggle('active', target === entry.target.id);
        });
      }
    });
  },
  {
    threshold: 0.5,
  }
);

sections.forEach(section => observer.observe(section));

// Scroll-triggered animation
const animated = document.querySelectorAll('.animate');
function animateOnScroll() {
  animated.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);
