import { showSearchBox } from "./function.js";
import {
  CartItemHandler,
  cartBtnHandler,
  categoryHandler,
  orderHandler,
  searchBoxHandler,
} from "./handler.js";
import {
  cartItemGroup,
  orderBtn,
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
    if (event.target.classList.contains("search-btn")) {
      showSearchBox();
    }
  });
  searchBox.addEventListener("keyup", (event) => {
    searchBoxHandler(event);
  });
  orderBtn.addEventListener("click", (event) => {
    orderHandler(event);
  });
};
