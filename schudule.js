const menuBtn = document.getElementById("menuBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

menuBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (
    !menuBtn.contains(e.target) &&
    !dropdownMenu.contains(e.target)
  ) {
    dropdownMenu.classList.remove("show");
  }
});

const popup = document.getElementById("eventPopup");
const title = document.getElementById("popupTitle");
const text = document.getElementById("popupText");

function showEvent(name, desc) {
  title.textContent = name;
  text.textContent = desc;
  popup.style.display = "block";
}

function closePopup() {
  popup.style.display = "none";
}