const PHONE = "+36308345744";

function openMessenger() {
  const text = encodeURIComponent(
    "Szia! Az Urban Cruiser szolgáltatás miatt írok. Szeretnék segítséget kérni: "
  );
  location.href = `sms:${PHONE}?body=${text}`;
}

function openCall() {
  location.href = `tel:${PHONE}`;
}

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

document.querySelectorAll(".reveal[data-delay]").forEach((el) => {
  el.style.setProperty("--delay", el.dataset.delay || "0");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");

      entry.target.querySelectorAll(".reveal:not(.visible)").forEach((child) => {
        child.classList.add("visible");
      });
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(".slide-up, .reveal").forEach((el) => observer.observe(el));

document.querySelectorAll(".hero .reveal").forEach((el) => {
  requestAnimationFrame(() => el.classList.add("visible"));
});
