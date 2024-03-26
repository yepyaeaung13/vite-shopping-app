import {
  addQty,
  cartItemDelete,
  createCard,
  createCartItems,
  productRender,
  showProduct,
  subQty,
} from "./cart.js";
import { selectColor, showSearchBox } from "./function.js";
import products from "./products.js";
import {
  cartCount,
  cartItemGroup,
  cartItemsCount,
  productCategory,
  productGroup,
  searchBox,
} from "./selectors.js";

export const cartBtnHandler = (event) => {
  // cartCount.innerText = parseInt(cartCount.innerText) + 1;
  // cartItemsCount.innerText = parseInt(cartItemsCount.innerText) + 1;
  const cardBtn = event.target.closest(".card-btn");
  cardBtn.innerText = "Added";
  cardBtn.disabled = true;
  cartItemGroup.append(createCartItems(event));
};

export const CartItemHandler = (event) => {
  if (event.target.classList.contains("cart-item-del-btn")) {
    cartItemDelete(event);
  }
  if (event.target.classList.contains("add-qty-btn")) {
    addQty(event);
  }
  if (event.target.classList.contains("sub-qty-btn")) {
    subQty(event);
  }
};

export const categoryHandler = (event) => {
  if (event.target.classList.contains("product-category")) {
    showProduct(products, event);
    selectColor(event);
  }
  if (event.target.classList.contains("all-product-category")) {
    productRender(products);
    selectColor(event);
  }
};

export const searchBoxHandler = (event) => {
  if (event.target.classList.contains("search-btn")) {
    showSearchBox();
  }
  productGroup.innerHTML = "";
  const searchString = event.target.value;
  products
    .filter(
      (el) =>
        el.title.includes(searchString) || el.description.includes(searchString)
    )
    .map((el) => productGroup.append(createCard(el)));
};
