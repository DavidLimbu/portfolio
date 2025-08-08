const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
});

// Typed text effect
const typedText = document.getElementById('typed-text');
const texts = ['David Limbu', 'a Web Developer', 'a Designer'];
let i = 0, j = 0, isDeleting = false;

function type() {
  const current = texts[i];
  if (isDeleting) {
    typedText.textContent = current.substring(0, j--);
  } else {
    typedText.textContent = current.substring(0, j++);
  }
  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % texts.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}
type();

// Project filter
function filterProjects(category, btn) {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
  document.querySelectorAll('.filter-buttons button').forEach(b => b.classList.remove('active'));
  if(btn) btn.classList.add('active');
}
filterProjects('all', document.querySelector('.filter-buttons button'));

// Scroll to top button
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  scrollBtn.style.display = document.documentElement.scrollTop > 200 ? "block" : "none";
};
function topFunction() {
  document.documentElement.scrollTop = 0;
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form (demo)
document.querySelector('#contact form').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you for your message!');
  this.reset();
});