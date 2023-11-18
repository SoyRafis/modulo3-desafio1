var price = 400000;

var initialPriceElement = document.querySelector(".precio-inicial");
var quantityElement = document.querySelector(".cantidad");
var totalValueElement = document.querySelector(".valor-total");

var upButtonElement = document.querySelector("#button-up");
var downButtonElement = document.querySelector("#button-down");

initialPriceElement.innerHTML = price;

upButtonElement.addEventListener("click", () => {
  var currentQuantity = quantityElement.innerHTML;
  var updatedQuantity = Number(currentQuantity) + 1;
  quantityElement.innerHTML = updatedQuantity;
  totalValueElement.innerHTML = updatedQuantity * price;
});

downButtonElement.addEventListener("click", () => {
  var currentQuantity = quantityElement.innerHTML;
  if (currentQuantity > 0) {
    var updatedQuantity = Number(currentQuantity) - 1;
    quantityElement.innerHTML = updatedQuantity;
    totalValueElement.innerHTML = updatedQuantity * price;
  }
});
