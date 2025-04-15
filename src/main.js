import './styles/style.css'
import './styles/style_desktop.css'
import img from './assets/cart-arrow-down.svg'
import data from '../data.json'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'


// `
let cards = '';

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
              <div data-value="${nameData}" id="prodName-${i}">
                  ${nameData}
              </div>
              <div data-value="${priceData}" id="priceItem-${i}" class="price">
                  $${priceData}
              </div>
              </div>
            </div>
  `
}
/*Data-value: asigna el contenido añadido despues del "=" a la variable creada despues del "-" */
document.querySelector('#card').innerHTML = cards

// let somCard = document.querySelectorAll(".img-card");
// somCard.addEventListener()


let botons = document.querySelectorAll('.addcar');

let showCart = false;
let totalShopping = 0;


for (let i =0; i < botons.length;i++) { /*se itera por la cantidad de botones que hay */
  if (!botons[i]) {continue};
  botons[i].addEventListener("click", () =>  { /*se le asigna un evento, cuando haga click */
    let shopingProd = ""; /*creamos una variable que tiene un str vacio */
    if (totalShopping == 0) {/*comprobamos si la variable es igual a 0 */
      shopingProd = `<h2 id="totalContainer" class="shoppingProd" >Your Cart(<span id="totalShopping">${totalShopping + 1}</span>)</h2>`; /*creamos el titulo donde el numero aumentara cuando se le añadan numeros */
    }
    const nameProd = document.getElementById(`prodName-${i}`); /*se localiza la variable mediante id y se guarda en una nueva variable */
    const divProdName = document.getElementById(nameProd.dataset.value); /*se obtiene el valor de data a traves de la variable creada anteriormente */
    if (divProdName){ /*si la variable se encuentra */
      const spanCounter = divProdName.querySelector(".counter"); /*Seleccionamos con la clase .counter y guardamos el valor en una nueva variable */
      if (spanCounter) { /*si la variable es true */
        const counterValue = Number(spanCounter.dataset.value); /*guardamos en una nueva variable el valor de counter */
        spanCounter.textContent = (counterValue+1) + "x"; /*se añade el valor de counter + 1 */
        spanCounter.dataset.value = counterValue+1; /*añadimos al dataset el valor de counter + 1 */
        const divPriceItem = document.getElementById(`priceItem-${i}`);
        const quantityResult = nameProd.querySelector(".quantity"); 
        // console.log(quantityResult.dataset.value);
        // console.log(spanCounter);
        // console.log(divPriceItem);
        console.log("quantity",quantityResult);
        if (quantityResult) {
          const quantityValue = Number(counterValue + 1 * divPriceItem.dataset.value);
          // console.log(quantityValue);
          quantityResult.textContent = "$" + quantityValue;
          quantityResult.dataset.value = quantityValue;
          // console.log(quantityResult);
        }
        totalShopping += 1;/*cuando se añade un articulo repetido este igual se añade */
        let shoppingCartSpan = document.getElementById("totalShopping");/*creamos una nueva variable donde guardaremos el valor de totalShopping */
        if(shoppingCartSpan){ /*si este existe */
          shoppingCartSpan.textContent = totalShopping; /*se reemplazara el contenido de la variable */
        }
      }
    }
    else {
      const inicialValue = 1; /*se crea la variable del counter */
      totalShopping += 1; /*si no hay objetos repetidos, toma este valor y sigue  */

      const pricesItem = document.getElementById(`priceItem-${i}`); /*en una variable guardamos el getElement de priceItem */
      const divPriceItem = document.getElementById(pricesItem.dataset.value); /*en otra variable guardaremos la variable anterior junto con el metodo dataset */

      let counterData = document.querySelector(".counter");
      // console.log(nameProd.dataset.value)
      const quantityData = Number(inicialValue * pricesItem.dataset.value);
      // console.log(quantityData)

      shopingProd += `<div class="shoping-card-container" id="${nameProd.dataset.value}">
                              <div class="shoping-card-description">
                                <span >${nameProd.dataset.value}</span>
                                <div class="shoping-card-pricing">
                                  <span data-value="${inicialValue}" id="counter" class="counter">${inicialValue}x</span>
                                  <span data-value="${pricesItem.dataset.value}" class="price-item">$${pricesItem.dataset.value}</span>
                                  <span data-value="${quantityData}" class="quantity">$${quantityData}</span>
                                </div>
                              </div>
                              <div>
                                <button class="cancel" id="btn-${nameProd.dataset.value}">X</button>
                              </div>
                            </div>`

      let shoppingCartSpan = document.getElementById("totalShopping");
      if(shoppingCartSpan){
        shoppingCartSpan.textContent = totalShopping;
      }

      document.querySelector('.orders').insertAdjacentHTML('beforeend', shopingProd);
      
      let cancelbuttons = document.querySelectorAll(".cancel")
          console.log(cancelbuttons);
          cancelbuttons.for(btn => { /*itera por la cantidad de la variable */
            
              btn.addEventListener("click", () => { /*le agregamos un evento */
                console.log("btn", btn)
                const idContainer = btn.id.slice(4);/*va a returnar una seccion del str dependiendo del nuevo que pongamos */
                const selectedContainer = document.getElementById(idContainer); /*guardamos en una nueva variable el elemento identificado por el id */
                selectedContainer.style.display = "None"; /*le damos una instruccion que oculta un elemento del DOM  */
                // selectedContainer.style.cursor = "not-allowed"
                console.log(idContainer);
                if (totalShopping <= 1){
                  const removeCart = document.getElementById("totalContainer");
                  removeCart.style.display = "None";  
                }
                
                const nameProd = document.getElementById(`prodName-${i}`); /*se localiza la variable mediante id y se guarda en una nueva variable */
                const divProdName = document.getElementById(nameProd.dataset.value);
                if (divProdName){ /*si la variable se encuentra */
                  const counterResult = divProdName.querySelector(".counter");
                  console.log("counterResult",counterResult);
                  let resultShopping = document.getElementById("totalShopping");
                  if (resultShopping) {
                    const resValue = Number(totalShopping) - Number(counterResult.dataset.value);
                    
                    console.log("totalShopping",totalShopping);
                    console.log("resValue",resValue);
                    // resultShopping.textContent = resValue;
                    // shoppingCartSpan.textContent = totalShopping;
                    // totalShopping =  resValue;
                  }
                }
              }
          )
      })
    }
  });
};



// let confirmOrder = querySelector(".Confirm");


// confirmOrder.addEventListener("click", () => {
//     const dataConfim = `<div class="win_emergent">
//                           <div class="emergent_content">
//                             <img src=""  alt="@" />
//                             <span >${nameProd}</span>
//                             <span>${spanCounter}</span>
//                             <button class="btn_emergent">X</button>
//                           </div>
//                         </div>`

//   btn_emergent.addEventListener("click", () => {

//   })
// });


