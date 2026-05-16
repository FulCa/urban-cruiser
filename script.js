function openMessenger() {
  const phone = "36301234567";
  const text = encodeURIComponent("Szia! A motoros cruiser szolgáltatás miatt írok.");
  location.href = `sms:${phone}?body=${text}`;
}

// Scroll animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".slide-up").forEach(el => observer.observe(el));
