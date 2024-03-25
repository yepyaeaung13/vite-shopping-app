import { product_category } from "./selectors";

export const selectColor = (event) => {
  const selectEl = event.target;
  for (let el of product_category) {
    if (el.classList.contains("selected")) {
      el.classList.remove("bg-zinc-700");
      el.classList.remove("text-white");
      el.classList.remove("selected");
    }
  }
  selectEl.classList.add("selected", "bg-zinc-700", "text-white");
};
