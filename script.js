document.addEventListener("DOMContentLoaded", () => {


  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.fade-in, .fade-up, .fade-down').forEach(el => observer.observe(el));


  const showSignup = document.getElementById('show-signup');
  const showSignin = document.getElementById('show-signin');
  const signupForm = document.getElementById('signup-form');
  const signinForm = document.getElementById('signin-form');


  if (showSignup && showSignin && signupForm && signinForm) {

    showSignup.addEventListener('click', () => {
      signinForm.classList.remove('active');
      signupForm.classList.add('active');
    });

    showSignin.addEventListener('click', () => {
      signupForm.classList.remove('active');
      signinForm.classList.add('active');
    });


    document.getElementById('signup-btn').addEventListener('click', (e) => {
      e.preventDefault();
      const name = document.getElementById('signup-name').value.trim();
      const email = document.getElementById('signup-email').value.trim();
      const pass = document.getElementById('signup-password').value.trim();

      if (name && email && pass) {
        alert(`Welcome ${name}! 🎉`);
        window.location.href = "index.html";
      } else {
        alert("Please fill all fields to sign up!");
      }
    });

    document.getElementById('signin-btn').addEventListener('click', (e) => {
      e.preventDefault();
      const email = document.getElementById('signin-email').value.trim();
      const pass = document.getElementById('signin-password').value.trim();

      if (email && pass) {
        alert("Welcome back! ✅");
        window.location.href = "index.html";
      } else {
        alert("Please enter email and password!");
      }
    });
  }
});