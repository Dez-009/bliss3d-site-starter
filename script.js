
// Smooth scroll and active nav effect
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelector(btn.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

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
