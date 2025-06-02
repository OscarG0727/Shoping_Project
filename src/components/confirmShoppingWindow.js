import { updateElementDetails } from "../utils/utils";

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

    const dataConfim = `<div class="winEmergent">
                                  <div class="emergent_content">
                                    <div class="confirmDescription">
                                      <img src="./src/assets/icon-order-confirmed.svg" alt="">
                                      <h1>Order Confirmed</h1>
                                      <span>We hope you enjoy your food!</span>
                                    </div>
                                    <div class="ordersConfirmedContainer">      
                                      <div class="ordersConfirmed">
                                        <div class="ordersConfirmedDescription">
                                        </div>
                                        <div class="TotalConfirmed">
                                        </div>
                                      </div>
                                      <div>
                                        <span class="orderResult">Order Total:<p data-value="${totalValuePrice}"class="total-Price">$${totalValuePrice}</p></span>
                                      </div>
                                    </div>
                                      <div class="btn_ResetContainer">
                                        <button class="btn_Reset">Start New Order</button>
                                      </div>
                                      <button id="btn_close" class="btn_emergent">X</button>
                                  </div>
                                </div>`

    const winEmergent = document.querySelector(".winEmergent")

    if (!winEmergent) {
      document.querySelector(".emergent").insertAdjacentHTML("beforeend", dataConfim);
    }

    if (winEmergent) {
      winEmergent.style.display = "flex"
    }

    for (let i = 0; i < confirmContainer.length; i++) {
      if (document.getElementById(cardProductElement.dataset.value + "-detail")) {
        const confirmElement = document.getElementById(`${cardProductElement.dataset.value}-orderConfirmInfo`);

        const counterElement = confirmElement.querySelector(".counter");
        updateElementDetails(counterElement, counterConfirm.dataset.value, false, "x");

        const quantityPrice = confirmElement.querySelector(".quantityConfirm");
        updateElementDetails(quantityPrice, quantityConfirm.dataset.value, true, "$");
      }

      // -- 

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

      let containerShopping = document.getElementById(`${cardProductElement.dataset.value}-description`);
      if (!containerShopping) {
        let removeShoppingImg = document.getElementById(`${cardProductElement.dataset.value}-img`);
        removeShoppingImg.remove()
        let removeShopping = document.getElementById(`${cardProductElement.dataset.value}-detail`)
        removeShopping.remove();
        let removeShoppingInfo = document.getElementById(`${cardProductElement.dataset.value}-orderConfirmInfo`);
        removeShoppingInfo.remove();
      }

      continue
    }
    const divNameCorfirm = `<img id="${cardProductElement.dataset.value}-img" src=""/>
                                  <span id="${cardProductElement.dataset.value}-detail">${cardProductElement.dataset.value}</span>
                                  <div class="orderConfirmedInfo" id="${cardProductElement.dataset.value}-orderConfirmInfo">
                                    <div class="ordersConfirmedPrice">
                                      <span class="counter">${counterConfirm.dataset.value}x</span>
                                      <span class="price-item">$${divPriceConfirm.dataset.value}</span>
                                    </div>
                                    <div class="orderConfirmedTotal">
                                      <span data-value="${quantityConfirm.dataset.value}" id="${cardProductElement.dataset.value}-quantity" class="quantityConfirm">$${quantityConfirm.dataset.value}</span>
                                    </div>
                                  </div>
          `

    document.querySelector(".ordersConfirmedDescription").insertAdjacentHTML("beforeend", divNameCorfirm)

    let containerShopping = document.getElementById(`${cardProductElement.dataset.value}-description`);
    if (!containerShopping) {
      let removeContainerImg = document.getElementById(`${cardProductElement.dataset.value}-img`);
      removeContainerImg.remove()
      let removeShopping = document.getElementById(`${cardProductElement.dataset.value}-detail`)
      let removeShoppingInfo = document.getElementById(`${cardProductElement.dataset.value}-orderConfirmInfo`);
      removeShopping.remove();
      removeShoppingInfo.remove();
    }

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


    const btnClose = document.getElementById("btn_close");

    btnClose.addEventListener("click", () => {
      if (winEmergent) {
        winEmergent.style.display = "None"
      }
    });
  });
}