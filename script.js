function yesClick() {
  document.getElementById("error").classList.add("hidden");
  document.getElementById("envelope").classList.remove("hidden");
}

function noClick() {
  document.getElementById("error").classList.remove("hidden");
}

function openLetter() {
  document.getElementById("envelope").classList.add("hidden");
  document.getElementById("letter").classList.remove("hidden");
}
