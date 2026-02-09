function noClick() {
  document.getElementById("error").classList.remove("hidden");
}

function yesClick() {
  document.getElementById("question").style.display = "none";
  document.querySelector(".buttons").style.display = "none";
  document.getElementById("error").style.display = "none";
  document.getElementById("envelope").classList.remove("hidden");
}

function openLetter() {
  document.getElementById("envelope").style.display = "none";
  document.getElementById("letter").classList.remove("hidden");
  startLoveRain();
}

function startLoveRain() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (2 + Math.random() * 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 300);
}
