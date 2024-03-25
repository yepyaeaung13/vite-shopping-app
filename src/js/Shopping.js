import { initialRender } from "./core/initialRender.js";
import { listener } from "./core/listener.js";
import observer from "./core/observer.js";

class Shopping {
  init() {
    console.log("shopping class is running..");
    initialRender();
    listener();
    observer();
  }
}

export default Shopping;
