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

export function updateWindowsEmergent() {
  const totalPrice = document.querySelector(".total-Price");
  const quantityPopupResults = document.querySelector(".ordersConfirmedDescription").querySelectorAll(".quantityConfirm");
  const quantityResults = document.querySelector(".orders").querySelectorAll(".quantity");
  if (quantityResults) {
    let totalPopupQuantityInner = 0
    for (const entry of quantityPopupResults) {
      totalPopupQuantityInner += Number(entry.dataset.value);
    }
    totalPrice.textContent = "$" + totalPopupQuantityInner;
  }
}
