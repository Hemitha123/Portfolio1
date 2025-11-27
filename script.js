// Fade-up animation
const faders = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

faders.forEach(el => observer.observe(el));

// Contact form toast
const form = document.querySelector('.contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const t = document.createElement('div');
  t.textContent = "Message sent — I'll get back to you soon.";
  t.style.position="fixed";
  t.style.right="20px";
  t.style.bottom="20px";
  t.style.background="linear-gradient(90deg,#3b82f6,#38bdf8)";
  t.style.padding="12px 16px";
  t.style.borderRadius="12px";
  t.style.color="#071428";
  document.body.appendChild(t);
  setTimeout(()=>t.remove(),2600);
  form.reset();
});
