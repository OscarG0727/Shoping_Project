import { updateCartShoppingTotalElement, setTotalCartShopping } from "../utils/utils";

export default function createCardShoppingElement(cardShoppingElement, buttonIndex, cardElement) {

  const inicialValue = 1;
  const pricesItem = document.getElementById(`priceItem-${buttonIndex}`);
  const quantityData = inicialValue * Number(pricesItem.dataset.value || 1);

  cardShoppingElement += `<div class="shoping-card-container" id="${cardElement.dataset.value}">
                          <div class="shoping-card-description" id="${cardElement.dataset.value}-description">
                              <span id="spanNameProd">${cardElement.dataset.value}</span>
                              <div class="shoping-card-pricing">
                                <span data-value="${inicialValue}" id="counter" class="counter">${inicialValue}x</span>
                                <span data-value="${pricesItem.dataset.value}" id="priceItem" class="price-item">$${pricesItem.dataset.value}</span>
                                <span data-value="${quantityData}" id="${cardElement.dataset.value}-result" class="quantity">$${quantityData}</span>
                              </div>
                          </div>
                          <div>
                            <button class="cancel" id="btn-${cardElement.dataset.value}">X</button>
                          </div>
                        </div>
                        `;

  setTotalCartShopping();

  document
    .querySelector(".orders")
    .insertAdjacentHTML("beforeend", cardShoppingElement);

  updateCartShoppingTotalElement();
}