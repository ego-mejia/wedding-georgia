const carrete = document.getElementById("carrete");

function scrollLeft() {
  carrete.scrollBy({ left: -300, behavior: "smooth" });
}

function scrollRight() {
  carrete.scrollBy({ left: 300, behavior: "smooth" });
}
