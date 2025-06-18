export function windowsEmergentCreate (totalValue) {
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
                                        <span class="orderResult">Order Total:<p data-value="${totalValue}"class="total-Price">$${totalValue}</p></span>
                                    </div>
                                </div>
                                    <div class="btn_ResetContainer">
                                        <button class="btn_Reset">Start New Order</button>
                                    </div>
                                    <button id="btn_close" class="btn_emergent">X</button>
                                </div>
                            </div>
                        </div>    `

    const winEmergent = document.querySelector(".winEmergent")
    
    if (!winEmergent) {
      document.querySelector(".emergent").insertAdjacentHTML("beforeend", dataConfim);
    }

    if (winEmergent) {
      winEmergent.style.display = "flex"
    }
}

export function windowsEmergentClose () {
    const winEmergent = document.querySelector(".winEmergent")
    winEmergent.style.display = "None"
}