// Dark mode
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Counter
document.getElementById("counterBtn").addEventListener("click", () => {
  const val = document.getElementById("counterValue");
  val.textContent = parseInt(val.textContent) + 1;
});

// FAQ toggle
document.querySelectorAll(".faq-question").forEach(q => {
  q.addEventListener("click", () => {
    q.nextElementSibling.classList.toggle("hidden");
  });
});

// Form validation
const form = document.getElementById("signupForm");
form.addEventListener("submit", e => {
  e.preventDefault();
  let valid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (name.length < 2) {
    document.getElementById("nameError").textContent = "Name too short.";
    valid = false;
  } else document.getElementById("nameError").textContent = "";

  if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email.";
    valid = false;
  } else document.getElementById("emailError").textContent = "";

  if (!/^(?=.*\\d).{6,}$/.test(password)) {
    document.getElementById("passwordError").textContent = "Password too weak.";
    valid = false;
  } else document.getElementById("passwordError").textContent = "";

  if (valid) {
    document.getElementById("formSuccess").classList.remove("hidden");
    form.reset();
  }
});
