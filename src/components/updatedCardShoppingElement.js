import { updateElementDetails, updateCartShoppingTotalElement, setTotalCartShopping } from "../utils/utils";

export default function updatedCardShoppingElement(divProdName, buttonIndex) {

  if (divProdName && typeof divProdName == 'object' && buttonIndex) {

    const cardShoppingCounter = divProdName.querySelector(".counter");
    const totalValuePrice = divProdName.querySelector(".quantity");
    const cardPrice = document.getElementById(`priceItem-${buttonIndex}`);

    const counterValue = Number(cardShoppingCounter.dataset.value) + 1;
    updateElementDetails(cardShoppingCounter, counterValue, false, "x");

    const quantityValue = (counterValue + 1) * Number(cardPrice.dataset.value);
    updateElementDetails(totalValuePrice, quantityValue, true, "$");

    setTotalCartShopping();

    updateCartShoppingTotalElement();
  }
}