import {
  cardTemplate,
  cartCount,
  cartItemGroup,
  cartItemTemplate,
  cartItemsCount,
  cartTotalAmount,
  productGroup,
} from "./selectors.js";

export const createCard = (product) => {
  const card = cardTemplate.content.cloneNode(true);
  card.querySelector(".card-img").src = product.image;
  card.querySelector(".card-title").innerText = product.title;
  card.querySelector(".card-detail").innerText = product.description;
  card.querySelector(".card-rating").innerText = product.rating.rate;
  card.querySelector(".card-price").innerText = product.price;
  card.querySelector(".card-category").innerText = product.category;
  const cardId = card.querySelector(".card-id");
  cardId.innerText = product.id;
  const cardBtn = card.querySelector(".card-btn");

  const cartItemId = cartItemGroup.querySelectorAll(".cart-item-id");
  for (let el of cartItemId) {
    if (cardId.innerText === el.innerText) {
      cardBtn.innerText = "Added";
      cardBtn.disabled = true;
    }
  }
  return card;
};

export const productRender = (products) => {
  productGroup.innerHTML = "";
  products.map((el) => {
    productGroup.append(createCard(el));
  });
};

export const createCartItems = (event) => {
  const card = event.target.closest(".card");
  const cardImg = card.querySelector(".card-img");
  const cardTitle = card.querySelector(".card-title");
  const cardPrice = card.querySelector(".card-price");
  const cardId = card.querySelector(".card-id");

  const cartItems = cartItemTemplate.content.cloneNode(true);
  cartItems.querySelector(".cart-item-img").src = cardImg.src;
  cartItems.querySelector(".cart-item-title").innerText = cardTitle.innerText;
  cartItems.querySelector(".cart-item-id").innerText = cardId.innerText;

  const cartItemPrice = cartItems.querySelector(".cart-item-price");
  cartItemPrice.innerText = cardPrice.innerText;

  const cartItemQty = cartItems.querySelector(".cart-item-qty");
  cartItemQty.innerText = 1;

  const cartItemAmount = cartItems.querySelector(".cart-item-amount");
  cartItemAmount.innerText = cartItemPrice.innerText * cartItemQty.innerText;

  return cartItems;
};

export const cartItemDelete = (event) => {
  const cartItem = event.target.closest(".cart-item");
  const cartItemId = cartItem.querySelector(".cart-item-id");
  const cardId = productGroup.querySelectorAll(".card-id");

  cardId.forEach((el) => {
    if (el.innerText === cartItemId.innerText) {
      const card = el.closest(".card");
      const cardBtn = card.querySelector(".card-btn");
      cardBtn.innerText = "Add to cart";
      cardBtn.disabled = false;
    }
  });

  cartItem.remove();
};

export const addQty = (event) => {
  const cartItem = event.target.closest(".cart-item");
  const qty = cartItem.querySelector(".cart-item-qty");
  const price = cartItem.querySelector(".cart-item-price");
  const amount = cartItem.querySelector(".cart-item-amount");
  qty.innerText = parseInt(qty.innerText) + 1;
  amount.innerText = (qty.innerText * price.innerText).toFixed(2);
};
export const subQty = (event) => {
  const cartItem = event.target.closest(".cart-item");
  const qty = cartItem.querySelector(".cart-item-qty");
  const price = cartItem.querySelector(".cart-item-price");
  const amount = cartItem.querySelector(".cart-item-amount");
  if (qty.innerText > 1) {
    qty.innerText = parseInt(qty.innerText) - 1;
    amount.innerText = (qty.innerText * price.innerText).toFixed(2);
  }
};

export const updateCount = () => {
  cartCount.innerText = cartItemGroup.querySelectorAll(".cart-item").length;
  cartItemsCount.innerText =
    cartItemGroup.querySelectorAll(".cart-item").length;
};

export const updateTotalAmount = () => {
  const cartItemsAmount = cartItemGroup.querySelectorAll(".cart-item-amount");
  cartTotalAmount.innerText = [...cartItemsAmount].reduce(
    (pv, cv) => (parseFloat(pv) + parseFloat(cv.innerText)).toFixed(2),
    0
  );
};

export const cartObserver = () => {
  const run = () => {
    updateCount();
    updateTotalAmount();
  };

  const observerOption = {
    childList: true,
    subtree: true,
  };

  const observer = new MutationObserver(run);
  observer.observe(cartItemGroup, observerOption);
};

export const showProduct = (products, event) => {
  const currentCategory = event.target.innerText;
  productGroup.innerHTML = "";
  for (let el of products) {
    if (currentCategory === el.category) {
      productGroup.append(createCard(el));
    }
  }
};
