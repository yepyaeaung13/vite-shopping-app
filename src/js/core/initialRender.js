import { productRender } from "./cart.js";
import { listener } from "./listener.js";
import products from "./products.js";

export const initialRender = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      json.map((el) => products.push(el));
      productRender(products);
    });
};
