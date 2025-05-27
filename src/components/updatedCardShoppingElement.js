import { updateElementDetails, updateCartShoppingTotalElement } from "../utils/utils";

export default function updatedCardShoppingElement(divProdName, buttonIndex, totalItemCartShopping) {

  if (divProdName && typeof divProdName == 'object' && buttonIndex) {

    const cardShoppingCounter = divProdName.querySelector(".counter");
    const totalValuePrice = divProdName.querySelector(".quantity");
    const cardPrice = document.getElementById(`priceItem-${buttonIndex}`);

    const counterValue = Number(cardShoppingCounter.dataset.value) + 1;
    updateElementDetails(cardShoppingCounter, counterValue, false, "x");

    const quantityValue = (counterValue + 1) * Number(cardPrice.dataset.value);
    updateElementDetails(totalValuePrice, quantityValue, true, "$");

    totalItemCartShopping += 1;

    updateElementDetails(document.getElementById("totalItemCartShopping"), totalItemCartShopping, false, null);

    updateCartShoppingTotalElement();

    return totalItemCartShopping
  }
}