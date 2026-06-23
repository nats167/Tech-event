const phrases = [
  "Build. Compete. Innovate.",
  "Show off that code.",
  "One day and a lot of opportunities.",
  "A tech fest for YOU",
];
 
let phraseIndex = 0;
let charIndex   = 0;
let deleting    = false;
 
const typedEl = document.getElementById("typed");
 
function type() {
  const word = phrases[phraseIndex];
 
  if (!deleting) {
    typedEl.textContent = word.slice(0, charIndex + 1);
    charIndex++;
 
    if (charIndex === word.length) {
      deleting = true;
      setTimeout(type, 2800);
      return;
    }
    setTimeout(type, 75);
 
  } else {
    typedEl.textContent = word.slice(0, charIndex - 1);
    charIndex--;
 
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 350);
      return;
    }
    setTimeout(type, 35);
  }
}
 
type();
 
 

const EVENT_DATE = new Date("2026-07-01T09:00:00");
const PUBLISH_DATE = new Date("2026-06-06T00:00:00");
const TOTAL_MS     = EVENT_DATE - PUBLISH_DATE;
 
const RADIUS  = 42;
const CIRC    = 2 * Math.PI * RADIUS; 
 
const ringEl  = document.getElementById("ring");
const pctEl   = document.getElementById("pct");
const ddEl    = document.getElementById("dd");
const hhEl    = document.getElementById("hh");
const mmEl    = document.getElementById("mm");
const ssEl    = document.getElementById("ss");
 
function pad(n) {
  return String(n).padStart(2, "0");
}
 
function tick() {
  const now     = new Date();
  const diff    = EVENT_DATE - now;
  const elapsed = now - PUBLISH_DATE;


  const pct    = Math.min(100, Math.max(0, (elapsed / TOTAL_MS) * 100));
  const offset = CIRC * (1 - pct / 100);
  ringEl.style.strokeDashoffset = offset;
  pctEl.textContent = Math.round(pct) + "%";
 


  if (diff <= 0) {
    ddEl.textContent = "00";
    hhEl.textContent = "00";
    mmEl.textContent = "00";
    ssEl.textContent = "00";
    return;
  }
 
  ddEl.textContent = pad(Math.floor(diff / 86400000));
  hhEl.textContent = pad(Math.floor(diff / 3600000) % 24);
  mmEl.textContent = pad(Math.floor(diff / 60000)   % 60);
  ssEl.textContent = pad(Math.floor(diff / 1000)    % 60);
}

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
 
tick();
setInterval(tick, 1000);