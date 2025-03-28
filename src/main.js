import './style.css'
import data from '../data.json'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

// //document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `
let cards = '';

// for (let i = 0;i < data.length;i++) {
//   const imageSrc = data[i].image.desktop;
//   cards += `<div><img src="${imageSrc}" class="logo" alt="Vite logo" />
//   </div>`

// }
for (let i in data) {
  console.log(i);
  const imageSrc = data[i].image.desktop;
  const nameData = data[i].name;
  const catData = data[i].category
  const priceData = data[i].price
  cards += `<div class="card-container"><img src="${imageSrc}"  alt="Vite logo" /><button class="addcar"><img src="" alt=""><b>add to car</b></button>
  </div>
  <div class="card-tittle">
    <div class="category">
      ${catData}
    </div>
    <div>
      ${nameData}
    </div>
    <div class="price">
      $${priceData}
    </div>
  </div>
  ` 
}
document.querySelector('#card').innerHTML = cards

let list = [];