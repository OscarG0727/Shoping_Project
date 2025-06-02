import { updateCartShoppingTotalElement } from "../utils/utils";

export default function deleteCardShoppingElements() {

  let cancelbuttons = document.querySelectorAll(".cancel");

  cancelbuttons.forEach((btn) => {

    btn.addEventListener("click", () => {

      const idContainer = btn.id.slice(4);
      const cardProductName = document.getElementById(idContainer);

      if (cardProductName) {
        const totalCartShopping = document.getElementById("totalItemCartShopping");
        let totalCartShoppingValue = Number(totalCartShopping?.textContent || 0);

        const counterResult = cardProductName.querySelector(".counter");

        if (totalCartShopping) {
          const newValue = totalCartShoppingValue - Number(counterResult.dataset.value);
          totalCartShopping.textContent = newValue;
          totalCartShoppingValue = newValue;
        }

        cardProductName.remove();

        updateCartShoppingTotalElement();

        if (totalCartShoppingValue <= 0) {
          document.getElementById("totalContainer")?.remove();
          document.querySelector(".text_empty").style.display = "block";
          document.querySelector(".img_empty").style.display = "block";
          document.querySelector(".total-confirm-container").style.display = "none";
        }
      }
    });
  });
}