import Swal from "sweetalert2";
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
  cartBtn,
  cartCount,
  cartItemGroup,
  cartItemsCount,
  cartTotalAmount,
  productCategory,
  productGroup,
  searchBox,
} from "./selectors.js";

export const cartBtnHandler = (event) => {
  // cartCount.innerText = parseInt(cartCount.innerText) + 1;
  // cartItemsCount.innerText = parseInt(cartItemsCount.innerText) + 1;
  cartBtn.classList.add("animate__headShake");
  cartBtn.addEventListener("animationend", () => {
    cartBtn.classList.remove("animate__headShake");
  });
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
  productGroup.innerHTML = "";
  const searchString = event.target.value;
  products
    .filter(
      (el) =>
        el.title.toLowerCase().includes(searchString) ||
        el.description.toLowerCase().includes(searchString)
    )
    .map((el) => productGroup.append(createCard(el)));
};

export const orderHandler = (event) => {
  if (cartTotalAmount.innerText > 0) {
    Swal.fire({
      title: "Order Success",
      text: "Please wait for 3 days and we will deliver it to your home",
      icon: "success",
    });
    cartItemGroup.innerHTML = "";
    productRender(products);
  } else {
    Swal.fire({
      title: "Cart is empty!",
      text: "There are no items, please add to cart.",
      icon: "warning",
    });
  }
};
