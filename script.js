const bagCount = document.querySelector(".bag-count");
const toast = document.querySelector(".toast");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

let count = 0;
let toastTimer;

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.active").classList.remove("active");
    button.classList.add("active");

    const category = button.dataset.filter;
    document.querySelectorAll(".product").forEach((product) => {
      product.hidden = category !== "all" && product.dataset.category !== category;
    });
  });
});

document.querySelectorAll(".add-button").forEach((button) => {
  button.addEventListener("click", () => {
    count += 1;
    bagCount.textContent = count;
    showToast("Added to your bag");
  });
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}