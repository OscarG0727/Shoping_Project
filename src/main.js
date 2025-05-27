import "./styles/style_desktop.css";
import "./styles/style.css";
import "./components/cards.js"
import updatedCardShoppingElement from "./components/updatedCardShoppingElement.js"

let botons = document.querySelectorAll(".addcar");
let textEmpty = document.querySelector(".text_empty");
let imgEmpty = document.querySelector(".img_empty");
let confirmText = document.querySelector(".total-confirm-container");
let totalItemCartShopping = 0;

for (let i = 0; i < botons.length; i++) {
  if (!botons[i]) {
    continue;
  }
  botons[i].addEventListener("click", () => {
    let shopingProd = "";
    if (totalItemCartShopping == 0) {
      textEmpty.style.display = "none";
      imgEmpty.style.display = "none";
      confirmText.style.display = "block";

      shopingProd = `<h2 id="totalContainer" class="shoppingProd" >Your Cart(<span id="totalItemCartShopping">${totalItemCartShopping + 1}</span>)</h2>`;
    }
    const nameProd = document.getElementById(`prodName-${i}`);
    const divProdName = document.getElementById(nameProd.dataset.value);
    if (divProdName) {
      totalItemCartShopping = updatedCardShoppingElement(divProdName, i, totalItemCartShopping);
    } else {
      const inicialValue = 1;
      totalItemCartShopping += 1;

      const pricesItem = document.getElementById(`priceItem-${i}`);
      const quantityData = Number(inicialValue * pricesItem.dataset.value);

      shopingProd += `<div class="shoping-card-container" id="${nameProd.dataset.value}">
                          <div class="shoping-card-description" id="${nameProd.dataset.value}-description">
                              <span id="spanNameProd">${nameProd.dataset.value}</span>
                              <div class="shoping-card-pricing">
                                <span data-value="${inicialValue}" id="counter" class="counter">x${inicialValue}</span>
                                <span data-value="${pricesItem.dataset.value}" id="priceItem" class="price-item">$${pricesItem.dataset.value}</span>
                                <span data-value="${quantityData}" id="${nameProd.dataset.value}-result" class="quantity">$${quantityData}</span>
                              </div>
                          </div>
                          <div>
                              <button class="cancel" id="btn-${nameProd.dataset.value}">X</button>
                          </div>
                        </div>
                        `;

      let shoppingCartSpan = document.getElementById("totalItemCartShopping");
      if (shoppingCartSpan) {
        shoppingCartSpan.textContent = totalItemCartShopping;
      }

      document
        .querySelector(".orders")
        .insertAdjacentHTML("beforeend", shopingProd);


      // ----------------------------

      const pValueResult = document.querySelector(".valueResult");

      const quantityResults = document.querySelector(".orders").querySelectorAll(".quantity");
      if (quantityResults) {
        let totalQuantityInner = 0
        for (const entry of quantityResults) {
          totalQuantityInner += Number(entry.dataset.value);
        }
        pValueResult.dataset.value = totalQuantityInner;
        pValueResult.textContent = "$" + totalQuantityInner;
      }

      let cancelbuttons = document.querySelectorAll(".cancel");
      cancelbuttons.forEach((btn) => {

        btn.addEventListener("click", () => {
          const idContainer =
            btn.id.slice(
              4
            );
          const selectedContainer =
            document.getElementById(
              idContainer
            );
          if (selectedContainer) {
            const nameProd = document.getElementById(`prodName-${i}`);

            const divProdName = document.getElementById(nameProd.dataset.value);
            if (divProdName) {
              const counterResult = divProdName.querySelector(".counter");
              let resultShopping = document.getElementById("totalItemCartShopping");
              if (resultShopping) {
                const resValue =
                  Number(totalItemCartShopping) - Number(counterResult.dataset.value);

                resultShopping.textContent = resValue;
                totalItemCartShopping = resValue;
              }
            }

            selectedContainer.remove();

            const restQuantity = divNameProd.querySelector(".quantity");
            if (restQuantity) {
              let valueRest = document.querySelector(".valueResult")
              valueRest.dataset.value -= Number(restQuantity.dataset.value);
              valueRest.textContent = "$" + valueRest.dataset.value;
            }


            if (totalItemCartShopping <= 0) {
              const removeCart = document.getElementById("totalContainer");
              removeCart.remove();
              textEmpty.style.display = "block";
              imgEmpty.style.display = "block";
              confirmText.style.display = "none";
              valueTotal = 0;
            }
          }
        });
      });
      const confirmOrder = document.querySelector(".Confirm");
      const spanNameProd = document.getElementById(`prodName-${i}`);
      const confirmContainer = document.querySelectorAll(".shoping-card-description");
      const divPriceConfirm = document.getElementById(`priceItem-${i}`);
      const divNameProd = document.getElementById(nameProd.dataset.value);
      const quantityConfirm = divNameProd.querySelector(".quantity");
      const counterConfirm = divNameProd.querySelector(".counter");

      let totalValuePrice = 0;

      confirmOrder.addEventListener("click", () => {

        const dataConfim = `<div class="win_emergent">
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

        const win_emergent = document.querySelector(".win_emergent")

        if (!win_emergent) {
          document.querySelector(".emergent").insertAdjacentHTML("beforeend", dataConfim);
        }

        if (win_emergent) {
          win_emergent.style.display = "flex"
        }

        for (let i = 0; i < confirmContainer.length; i++) {
          if (document.getElementById(spanNameProd.dataset.value + "-detail")) {
            const divCounter = document.getElementById(`${spanNameProd.dataset.value}-orderConfirmInfo`);
            const counterInfo = divCounter.querySelector(".counter");
            counterInfo.textContent = "x" + counterConfirm.dataset.value;
            counterInfo.dataset.value = counterConfirm.dataset.value;
            const quantityPrice = divCounter.querySelector(".quantityConfirm");
            quantityPrice.textContent = "$" + quantityConfirm.dataset.value;
            quantityPrice.dataset.value = quantityConfirm.dataset.value;

            const totalPrice = document.querySelector(".total-Price");
            const quantityPopupResults = document.querySelector(".ordersConfirmedDescription").querySelectorAll(".quantityConfirm");
            if (quantityResults) {
              let totalPopupQuantityInner = 0
              for (const entry of quantityPopupResults) {
                totalPopupQuantityInner += Number(entry.dataset.value);
              }
              totalPrice.textContent = "$" + totalPopupQuantityInner;
            }

            let containerShopping = document.getElementById(`${nameProd.dataset.value}-description`);
            if (!containerShopping) {
              let removeShoppingImg = document.getElementById(`${spanNameProd.dataset.value}-img`);
              removeShoppingImg.remove()
              let removeShopping = document.getElementById(`${spanNameProd.dataset.value}-detail`)
              removeShopping.remove();
              let removeShoppingInfo = document.getElementById(`${spanNameProd.dataset.value}-orderConfirmInfo`);
              removeShoppingInfo.remove();
            }

            continue
          }
          const divNameCorfirm = `<img id="${spanNameProd.dataset.value}-img" src=""/>
                                  <span id="${spanNameProd.dataset.value}-detail">${spanNameProd.dataset.value}</span>
                                  <div class="orderConfirmedInfo" id="${spanNameProd.dataset.value}-orderConfirmInfo">
                                    <div class="ordersConfirmedPrice">
                                      <span class="counter">x${counterConfirm.dataset.value}</span>
                                      <span class="price-item">@${divPriceConfirm.dataset.value}</span>
                                    </div>
                                    <div class="orderConfirmedTotal">
                                      <span data-value="${quantityConfirm.dataset.value}" id="${spanNameProd.dataset.value}-quantity" class="quantityConfirm">$${quantityConfirm.dataset.value}</span>
                                    </div>
                                  </div>
          `

          document.querySelector(".ordersConfirmedDescription").insertAdjacentHTML("beforeend", divNameCorfirm)

          let containerShopping = document.getElementById(`${nameProd.dataset.value}-description`);
          if (!containerShopping) {
            let removeContainerImg = document.getElementById(`${spanNameProd.dataset.value}-img`);
            removeContainerImg.remove()
            let removeShopping = document.getElementById(`${spanNameProd.dataset.value}-detail`)
            let removeShoppingInfo = document.getElementById(`${spanNameProd.dataset.value}-orderConfirmInfo`);
            removeShopping.remove();
            removeShoppingInfo.remove();
          }

          const totalPrice = document.querySelector(".total-Price");
          const quantityPopupResults = document.querySelector(".ordersConfirmedDescription").querySelectorAll(".quantityConfirm");
          if (quantityResults) {
            let totalPopupQuantityInner = 0
            for (const entry of quantityPopupResults) {
              totalPopupQuantityInner += Number(entry.dataset.value);
            }
            totalPrice.textContent = "$" + totalPopupQuantityInner;
          }
        }

        const btnClose = document.getElementById("btn_close");

        btnClose.addEventListener("click", () => {
          if (win_emergent) {
            win_emergent.style.display = "None"
          }
        });
      });
    }
  });
}
