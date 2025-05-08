import "./styles/style_desktop.css";
import "./styles/style.css";
import img from "/src/assets/icon-add-to-cart.svg";
import data from "../data.json";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
// import { setupCounter } from "./counter.js";

// `
let cards = "";

for (let i in data) {
  const imageSrc = data[i].image.desktop;
  const nameData = data[i].name;
  const catData = data[i].category;
  const priceData = data[i].price;
  cards += `<div class="items-container">
              <div class="card-container">
                  <img class="img-card" src="${imageSrc}"  alt="Vite logo" />
                  <button class="addcar"><img src="${img}" alt="${i}-img" width="5px" heigth="5px" ><b>ADD TO CAR</b></button>
              </div>
              <div class="card-tittle">
                <div class="category">
                  ${catData}
                </div>
                <div data-value="${nameData}" id="prodName-${i}" class="nameProd">
                  ${nameData}
                </div>
                <div data-value="${priceData}" id="priceItem-${i}" class="price">
                  $${priceData}
                </div>
              </div>
            </div>
  `;
}
/*Data-value: asigna el contenido añadido despues del "=" a la variable creada despues del "-" */
document.querySelector("#card").innerHTML = cards;

// let somCard = document.querySelectorAll(".img-card");
// somCard.addEventListener()

let botons = document.querySelectorAll(".addcar");
let textEmpty = document.querySelector(".text_empty");
let imgEmpty = document.querySelector(".img_empty");
let showCart = false;
let totalShopping = 0;
let valueTotal = 0;

for (let i = 0; i < botons.length; i++) {
  /*se itera por la cantidad de botones que hay */
  if (!botons[i]) {
    continue;
  }
  botons[i].addEventListener("click", () => {
    /*se le asigna un evento, cuando haga click */
    let shopingProd = ""; /*creamos una variable que tiene un str vacio */
    if (totalShopping == 0) {
      textEmpty.style.display = "none";
      imgEmpty.style.display = "none";
      /*comprobamos si la variable es igual a 0 */
      shopingProd = `<h2 id="totalContainer" class="shoppingProd" >Your Cart(<span id="totalShopping">${totalShopping + 1
        }</span>)</h2>`; /*creamos el titulo donde el numero aumentara cuando se le añadan numeros */
    }
    const nameProd = document.getElementById(`prodName-${i}`); /*se localiza la variable mediante id y se guarda en una nueva variable */
    const divProdName = document.getElementById(nameProd.dataset.value); /*se obtiene el valor de data a traves de la variable creada anteriormente */
    if (divProdName) {/*si la variable se encuentra */
      const spanCounter = divProdName.querySelector(".counter"); /*Seleccionamos con la clase .counter y guardamos el valor en una nueva variable */
      if (spanCounter) {
        /*si la variable es true */
        const counterValue = Number(
          spanCounter.dataset.value
        ); /*guardamos en una nueva variable el valor de counter */
        spanCounter.textContent =
          counterValue + 1 + "x"; /*se añade el valor de counter + 1 */
        spanCounter.dataset.value =
          counterValue + 1; /*añadimos al dataset el valor de counter + 1 */
        const divPriceItem = document.getElementById(`priceItem-${i}`); /* declaramos la variable y guardamos dentro el valor del html*/
        const quantityResult = divProdName.querySelector(".quantity"); /*declaramos una nueva variable y y guardamos el valor por el nombre del valor*/
        if (quantityResult) { /*si la variable existe */
          const quantityValue = (counterValue + 1) * Number(divPriceItem.dataset.value); /*declaramos una variable donde estara la multiplicacion de quantity*/
          quantityResult.textContent = "$" + quantityValue; /*sobreescribiremos el valor html de quantityResult */
          quantityResult.dataset.value = quantityValue; /*sobreescribimos el value de la variable */
          console.log("Result", quantityResult)
          console.log("Value", quantityValue)
          console.log("divProdName", divProdName)
        }
        totalShopping += 1; /*cuando se añade un articulo repetido este igual se añade */
        let shoppingCartSpan = document.getElementById("totalShopping");
        /*creamos una nueva variable donde guardaremos el valor de totalShopping */
        if (shoppingCartSpan) {
          /*si este existe */
          console.log("aca totalShopping: ", totalShopping);
          shoppingCartSpan.textContent = totalShopping;
          /*se reemplazara el contenido de la variable */
        }
      }
    } else {
      const inicialValue = 1; /*se crea la variable del counter */
      totalShopping += 1; /*si no hay objetos repetidos, toma este valor y sigue  */


      const pricesItem = document.getElementById(`priceItem-${i}`); /*en una variable guardamos el getElement de priceItem */
      const divPriceItem = document.getElementById(pricesItem.dataset.value); /*en otra variable guardaremos la variable anterior junto con el metodo dataset */
      console.log("aca totalShopping: ", totalShopping);
      let counterData = document.querySelector(".counter");
      // console.log(nameProd.dataset.value)
      const quantityData = Number(inicialValue * pricesItem.dataset.value);
      // console.log(quantityData)

      shopingProd += `<div class="shoping-card-container" id="${nameProd.dataset.value}">
                          <div class="shoping-card-description">
                              <span id="spanNameProd">${nameProd.dataset.value}</span>
                              <div class="shoping-card-pricing">
                                <span data-value="${inicialValue}" id="counter" class="counter">x${inicialValue}</span>
                                <span data-value="${pricesItem.dataset.value}" id="priceItem" class="price-item">$${pricesItem.dataset.value}</span>
                                <span data-value="${quantityData}" id="quantityItem" class="quantity">$${quantityData}</span>
                              </div>
                          </div>
                          <div>
                              <button class="cancel" id="btn-${nameProd.dataset.value}">X</button>
                          </div>
                        </div>
                        `;

      let shoppingCartSpan = document.getElementById("totalShopping");
      if (shoppingCartSpan) {
        console.log("aqui totalShopping: ", totalShopping);
        shoppingCartSpan.textContent = totalShopping;
      }
      // let counterTotal = document.getElementById("counter");
      // let quantityValue = document.getElementById("quantityItem");
      // let valueResult = document.getElementById("orderValue");
      // if (valueResult) {
      //   for(i = 0; i < counterTotal.length; i++) {
      //     valueResult += Number(quantityValue.dataset.value);
      //   }
      // }
      // let totalValue = "";
      // if(totalValue == ""){
      //   totalValue = shopingProd;
      //   shopingProd +=`<div>
      //                     <span id="orderValue">Order Total ${valueTotal}</span>
      //                   </div>

      //                     `;
      //   }

      document
        .querySelector(".orders")
        .insertAdjacentHTML("beforeend", shopingProd);



      let cancelbuttons = document.querySelectorAll(".cancel");
      console.log("cancelbuttons", cancelbuttons);
      cancelbuttons.forEach((btn) => {
        /*itera por la cantidad de la variable */

        btn.addEventListener("click", () => {
          /*le agregamos un evento */
          const idContainer =
            btn.id.slice(
              4
            ); /*va a returnar una seccion del str dependiendo del nuevo que pongamos */
          const selectedContainer =
            document.getElementById(
              idContainer
            ); /*guardamos en una nueva variable el elemento identificado por el id */
          console.log("selectedContainer", selectedContainer);
          if (selectedContainer) {
            /*si la variable existe */
            const nameProd = document.getElementById(`prodName-${i}`);
            /*se localiza la variable mediante id y se guarda en una nueva variable */

            const divProdName = document.getElementById(nameProd.dataset.value);
            /*se crea una nueva variable donde se guarda el data-value de nameProd */
            if (divProdName) {
              /*si existe la variable */
              const counterResult = divProdName.querySelector(".counter");
              /*creamos una variable donde tendremos el valor de counter mediante el divProdName*/
              console.log("counterResult", counterResult);
              let resultShopping = document.getElementById("totalShopping");
              /*creamos una variable y guardamos el valor mediante el id */
              if (resultShopping) {
                /*si existe la variable */
                const resValue =
                  Number(totalShopping) - Number(counterResult.dataset.value);
                /*creamos una nueva variable donde guardaremos la resta del resultShopping */

                console.log("totalShopping", totalShopping);
                console.log("resValue", resValue);
                resultShopping.textContent = resValue;
                /*reemplazamos el contenido de resultShopping con el valor del resValue */
                totalShopping = resValue;
                /*reemplazamos el valor de totalShopping con el valor de resValue */
              }
            }

            selectedContainer.remove();
            /*removemos el selectedContainer despues de restar el totalShopping */

            if (totalShopping <= 0) {
              /*si la variable es menor o igual que 0 */
              const removeCart = document.getElementById("totalContainer");
              /*creamos una nueva variable donde guardamos el valor mediante el id */
              removeCart.remove();
              /*lo removemos para que no se muestre fisicamente */
              textEmpty.style.display = "block";
              imgEmpty.style.display = "block";
            }
          }
        });
      });
      const confirmOrder = document.querySelector(".Confirm");
      const counterConfirm = document.getElementById("counter");
      const spanNameProd = document.getElementById(`prodName-${i}`);
      const confirmContainer = document.querySelectorAll(".shoping-card-description");
      console.log("esto es confirmContainer.length", confirmContainer.length);
      console.log("esto es ShoppingProd.length", spanNameProd);
      const divPriceConfirm = document.getElementById(`priceItem-${i}`);
      console.log("esto es confirmContainer", divPriceConfirm);
      const divNameProd = document.getElementById(nameProd.dataset.value);
      const quantityConfirm = divNameProd.querySelector(".quantity");

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
                                        <span class="orderResult">Order Total</span>
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
            continue
          }
          const divNameCorfirm = `<img src=""/>
                                  <span id="${spanNameProd.dataset.value}-detail">${spanNameProd.dataset.value}</span>
                                  <div class="ordersConfirmedPrice">
                                    <span class="counter">x${counterConfirm.dataset.value}</span>
                                    <span class="price-item">@${divPriceConfirm.dataset.value}</span>
                                  </div>
                                      `

          document.querySelector(".ordersConfirmedDescription").insertAdjacentHTML("beforeend", divNameCorfirm)

          const quantityConfirmValue = `<span class="quantityConfirm">$${quantityConfirm.dataset.value}</span>`

          document.querySelector(".TotalConfirmed").insertAdjacentHTML("beforeend", quantityConfirmValue)
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
