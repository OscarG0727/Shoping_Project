import { updateElementDetails } from "../utils/utils";
import { updateWindowsEmergent } from "../utils/utils";
import { windowsEmergentCreate } from "../components/windowsEmergent";
import { windowsEmergentClose } from "../components/windowsEmergent";
import { createOrderElement } from "../components/createOrderElement";
import { removeOrderElement } from "../components/removeOrderElements";

export default function confirmShoppingWindow(buttonIndex) {
  const cardProductElement = document.getElementById(`cardProduct-${buttonIndex}`);
  const cardProductName = document.getElementById(cardProductElement.dataset.value);
  const quantityConfirm = cardProductName.querySelector(".quantity");
  const counterConfirm = cardProductName.querySelector(".counter");

  const confirmOrder = document.querySelector(".Confirm");
  const confirmContainer = document.querySelectorAll(".shoping-card-description");
  const divPriceConfirm = document.getElementById(`priceItem-${buttonIndex}`);
  
  let totalValuePrice = 0;

  confirmOrder.addEventListener("click", () => {

    windowsEmergentCreate(totalValuePrice);

    for (let i = 0; i < confirmContainer.length; i++) {
      if (document.getElementById(cardProductElement.dataset.value + "-detail")) {
        const confirmElement = document.getElementById(`${cardProductElement.dataset.value}-orderConfirmInfo`);

        const counterElement = confirmElement.querySelector(".counter");
        updateElementDetails(counterElement, counterConfirm.dataset.value, false, "x");

        const quantityPrice = confirmElement.querySelector(".quantityConfirm");
        updateElementDetails(quantityPrice, quantityConfirm.dataset.value, true, "$");
      
      // -- 

      let containerShopping = document.getElementById(`${cardProductElement.dataset.value}-description`);
      let removeShoppingImg = document.getElementById(`${cardProductElement.dataset.value}-img`);
      let removeShopping = document.getElementById(`${cardProductElement.dataset.value}-detail`)
      let removeShoppingInfo = document.getElementById(`${cardProductElement.dataset.value}-orderConfirmInfo`);
      
      if (!containerShopping) {
        removeOrderElement(removeShoppingImg, removeShopping, removeShoppingInfo);
      }

      updateWindowsEmergent();

      continue
    }
    createOrderElement(cardProductElement, counterConfirm, divPriceConfirm, quantityConfirm);

    let containerShopping = document.getElementById(`${cardProductElement.dataset.value}-description`);
    let removeShoppingImg = document.getElementById(`${cardProductElement.dataset.value}-img`);
    let removeShopping = document.getElementById(`${cardProductElement.dataset.value}-detail`)
    let removeShoppingInfo = document.getElementById(`${cardProductElement.dataset.value}-orderConfirmInfo`);
    
    if (!containerShopping) {
      removeOrderElement(removeShoppingImg, removeShopping, removeShoppingInfo);
    }

    updateWindowsEmergent();

    const btnClose = document.getElementById("btn_close");

    btnClose.addEventListener("click", () => {
      windowsEmergentClose();
    });
  }});
}