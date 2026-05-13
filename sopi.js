function showPage(id) {
  document.querySelectorAll("section").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function beli(nama) {
  alert(nama + " ditambahkan ke keranjang!");
}