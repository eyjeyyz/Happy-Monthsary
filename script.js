const envelope = document.querySelector("#envelope");
const letter = document.querySelector("#letter");
const heartButton = document.querySelector("#heart-button");
const announcement = document.querySelector("#announcement");

envelope.addEventListener("click", () => {
  const isOpen = envelope.classList.toggle("is-open");
  envelope.setAttribute("aria-expanded", String(isOpen));
  letter.classList.toggle("is-visible", isOpen);
  letter.setAttribute("aria-hidden", String(!isOpen));
  announcement.textContent = isOpen
    ? "Your love letter is open."
    : "Your love letter is closed.";
});

heartButton.addEventListener("click", () => {
  announcement.textContent = "A little love is on its way!";

  for (let index = 0; index < 12; index += 1) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.setAttribute("aria-hidden", "true");
    heart.textContent = index % 3 === 0 ? "♥" : "♡";
    heart.style.left = `${8 + Math.random() * 84}%`;
    heart.style.animationDelay = `${Math.random() * 0.55}s`;
    heart.style.fontSize = `${14 + Math.random() * 18}px`;
    document.body.append(heart);
    heart.addEventListener("animationend", () => heart.remove(), { once: true });
  }
});
