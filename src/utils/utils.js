export function updateElementDetails(element, value, isLeft, symbolItem) {
  if (element) {
    element.textContent = symbolItem ? (isLeft ? symbolItem + value : value + symbolItem) : value;
    element.dataset.value = value;
  }
}

export function updateCartShoppingTotalElement() {
  const totalShoppingCartItem = document.querySelector(".valueResult");
  if (totalShoppingCartItem) {
    const quantityResults = document.querySelector(".orders").querySelectorAll(".quantity");
    if (quantityResults) {
      let totalQuantityInner = 0
      for (const entry of quantityResults) {
        totalQuantityInner += Number(entry.dataset.value);
      }
      updateElementDetails(totalShoppingCartItem, totalQuantityInner, true, "$");
    }
  }
}

export function setTotalCartShopping() {
  const totalCartShopping = document.getElementById("totalItemCartShopping");
  const totalCartShoppingValue = Number(totalCartShopping?.textContent || 0) + 1;

  updateElementDetails(totalCartShopping, totalCartShoppingValue, false, null);
}