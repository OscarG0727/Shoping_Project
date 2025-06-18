export function createOrderElement (cardProductElement, counterConfirm, divPriceConfirm, quantityConfirm) {
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
}


