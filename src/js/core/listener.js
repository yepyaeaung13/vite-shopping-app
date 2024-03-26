import {
  CartItemHandler,
  cartBtnHandler,
  categoryHandler,
  searchBoxHandler,
} from "./handler.js";
import {
  cartItemGroup,
  productCategory,
  productGroup,
  searchBox,
  searchBoxContainer,
} from "./selectors.js";
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
  searchBoxContainer.addEventListener("click", (event) => {
    searchBoxHandler(event);
  });
  searchBox.addEventListener("keyup", (event) => {
    searchBoxHandler(event);
  });
};
