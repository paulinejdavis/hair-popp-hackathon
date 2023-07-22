let currentSectionIndex = 0;
const sections = document.getElementsByClassName("carousel-section");

function showNextSection() {
  if (currentSectionIndex < sections.length - 1) {
    currentSectionIndex++;
    transitionToSection();
  }
}

function showPrevSection() {
  if (currentSectionIndex > 0) {
    currentSectionIndex--;
    transitionToSection();
  }
}

function transitionToSection() {
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = i === currentSectionIndex ? "block" : "none";
  }
}

function handleStart() {
  document.getElementById("container").style.display = "none";
  currentSectionIndex = 0;
  transitionToSection();
}

function clearContainer() {
  document.getElementById("container").style.display = "block";
  currentSectionIndex = 0;
  transitionToSection();
}
