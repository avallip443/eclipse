const modal = document.getElementById("theme-modal");
const themesBtn = document.getElementById("themes");
const closeModal = document.getElementById("close-modal");
const themeButtons = document.querySelectorAll(".theme-select");

themesBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selectedTheme = btn.getAttribute("data-theme");

    document.body.classList.remove(
      "theme-light",
      "theme-dark",
      "theme-twilight",
      "theme-cyber",
      "theme-vampire",
      "theme-ember",
      "theme-canyon",
      "theme-orchid",
      "theme-meadow",
      "thme-galaxy"
    );

    document.body.classList.add(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
    modal.classList.add("hidden");
  });
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.classList.add(savedTheme);
}
