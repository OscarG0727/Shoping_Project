import img from "/src/assets/icon-add-to-cart.svg";
import data from "../../data.json";

let cards = "";

for (let cardIndex in data) {

  const { image, category, price, name } = data[cardIndex];

  cards += `<div class="items-container">
              <div class="card-container">
                  <img class="img-card" src="${image.desktop}"  alt="Vite logo" />
                  <button class="addcar"><img src="${img}" alt="${cardIndex}-img" width="5px" heigth="5px"><b>ADD TO CAR</b></button>
              </div>
              <div class="card-tittle">
                <div class="category">
                  ${category}
                </div>
                <div data-value="${name}" id="prodName-${cardIndex}" class="nameProd">
                  ${name}
                </div>
                <div data-value="${price}" id="priceItem-${cardIndex}" class="price">
                  $${price}
                </div>
              </div>
            </div>
  `;
}

document.querySelector("#card").innerHTML = cards;