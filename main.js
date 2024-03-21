import "./style.css";
import "flowbite";
import "@fortawesome/fontawesome-free/css/all.css";

console.log("App Start....");

const products = fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json.length));

console.log(products);
