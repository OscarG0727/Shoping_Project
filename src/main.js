import "./styles/style_desktop.css";
import "./styles/style.css";
import "./components/cards.js"
import updatedCardShoppingElement from "./components/updatedCardShoppingElement.js"
import createCardShoppingElement from "./components/createCardShoppingElement.js"
import deleteCardShoppingElements from "./components/deleteCardShoppingElements.js"
import confirmShoppingWindow from "./components/confirmShoppingWindow.js";

let botons = document.querySelectorAll(".addcar");

for (let i = 0; i < botons.length; i++) {
  if (!botons[i]) {
    continue;
  }
  botons[i].addEventListener("click", () => {
    let cardShoppingElement = "";
    const totalItemCartShopping = document.getElementById("totalItemCartShopping")?.textContent || 0;
    if (totalItemCartShopping == 0) {
      document.querySelector(".text_empty").style.display = "none";
      document.querySelector(".img_empty").style.display = "none";
      document.querySelector(".total-confirm-container").style.display = "block";

      cardShoppingElement = `<h2 id="totalContainer" class="shoppingProd" >Your Cart(<span id="totalItemCartShopping">${totalItemCartShopping + 1}</span>)</h2>`;
    }
    const cardProductElement = document.getElementById(`cardProduct-${i}`);
    const cardProductName = document.getElementById(cardProductElement.dataset.value);
    if (cardProductName) {
      updatedCardShoppingElement(cardProductName, i);
    } else {
      createCardShoppingElement(cardShoppingElement, i, cardProductElement);
      deleteCardShoppingElements();
      confirmShoppingWindow(i);
    }
  });
}