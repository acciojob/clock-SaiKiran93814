//your JS code here. If required.
function updateClock() {
  const timer = document.getElementById("timer");
  const now = new Date();
  timer.textContent = now.toLocaleString(); // Shows date and time
}

// Update the clock immediately on page load
updateClock();

// Then update it every second
setInterval(updateClock, 1000);