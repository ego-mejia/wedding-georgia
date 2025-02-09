function updateCountdown() {
  const targetDate = new Date("June 25, 2025 13:00:00").getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference < 0) {
    document.querySelector(".count-down__div--clock").innerHTML =
      "<h3>¡El evento ha comenzado!</h3>";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").innerText = String(seconds).padStart(
    2,
    "0"
  );
}

updateCountdown(); // Ejecutar inmediatamente
setInterval(updateCountdown, 1000); // Actualizar cada segundo
