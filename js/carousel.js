let carrete = document.getElementById("carrete");
let animationFrame;

function resetAnimation() {
  carrete.style.animation = "none";
  // Forzar reflow
  void carrete.offsetWidth;
  carrete.style.animation = "scroll 15s linear infinite";
}

// Optimizar redimensionamiento con debounce
function debounce(func, timeout = 100) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const handleResize = debounce(() => {
  cancelAnimationFrame(animationFrame);
  animationFrame = requestAnimationFrame(resetAnimation);
});

window.addEventListener("resize", handleResize);

// Inicializar
resetAnimation();
