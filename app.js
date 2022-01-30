var toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", toggleFunction);

function toggleFunction(e) {
  e.preventDefault();
  var internalToggle = document.getElementById("internalToggle");
  var cards = document.querySelectorAll(".card");
  if (!internalToggle.classList.contains("toggleMove")) {
    internalToggle.classList.add("toggleMove");
    cards.forEach((card) => {
      card.classList.add("showMonthly");
    });
  } else {
    internalToggle.classList.remove("toggleMove");
    cards.forEach((card) => {
      card.classList.remove("showMonthly");
    });
  }
}
