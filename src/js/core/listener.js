import { CartItemHandler, cartBtnHandler, categoryHandler } from "./handler.js";
import { cartItemGroup, productCategory, productGroup } from "./selectors.js";
export const listener = () => {
  productGroup.addEventListener("click", (event) => {
    if (event.target.classList.contains("card-btn")) {
      cartBtnHandler(event);
    }
  });
  cartItemGroup.addEventListener("click", (event) => {
    CartItemHandler(event);
  });
  productCategory.addEventListener("click", (event) => {
    categoryHandler(event);
  });
};
