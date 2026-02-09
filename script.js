function yesClick() {
  // hide question + buttons
  document.getElementById("question").style.display = "none";
  document.getElementById("buttons").style.display = "none";

  // show letter
  document.getElementById("letter").classList.remove("hidden");

  // start love rain
  setInterval(createHeart, 300);

  // vibration
  if (navigator.vibrate) {
    navigator.vibrate([200, 100, 200]);
  }
}

function noClick() {
  // LOTS OF ERROR ALERTS 😈
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      alert("⚠️ ERROR! Click YES 💖");
    }, i * 300);
  }
}

// heart rain
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (2 + Math.random() * 3) + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
