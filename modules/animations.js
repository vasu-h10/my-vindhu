export function runAnimations() {
  console.log("Animations initialized");
  const hearts = document.querySelectorAll(".heart-icon");
  hearts.forEach(h => {
    h.style.transition = "transform 0.3s";
    h.addEventListener("mouseover", () => h.style.transform = "scale(1.2)");
    h.addEventListener("mouseout", () => h.style.transform = "scale(1)");
  });
}
