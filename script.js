let navbar = document.querySelector(".navbar");
let cartItems = document.querySelector(".cart-items-container");
let searchForm = document.querySelector(".search-form");

// Toggle navbar visibility
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItems.classList.remove("active");
};

// Toggle cart items visibility
document.querySelector("#cart-btn").onclick = () => {
  cartItems.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItems.classList.remove("active");
};

windows.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItems.classList.remove("active");
};
