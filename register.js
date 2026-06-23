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

const form = document.getElementById("regForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const roll = document.getElementById("roll").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  const selectedEvents = [
    ...document.querySelectorAll(
      '.events-grid input[type="checkbox"]:checked'
    )
  ].map(cb => cb.value);

if(roll.length !== 9){
  alert("Roll number must contain exactly 9 characters.");
  return;
}

  if (!/^\d{10}$/.test(phone)) {
    alert("Phone number must contain exactly 10 digits.");
    return;
  }

  if (!/^[a-zA-Z0-9._%+-]+@iiitdm\.ac\.in$/.test(email)) {
    alert("Please use your IIITDM email.");
    return;
  }

  if (selectedEvents.length === 0) {
    alert("Please select at least one event.");
    return;
  }

  console.log({
    name,
    roll,
    phone,
    email,
    events: selectedEvents
  });

  alert("Registration Successful!");
  form.reset();
});