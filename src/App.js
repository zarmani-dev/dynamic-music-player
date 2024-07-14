import listener from "./listener";
import observer from "./observer";

export default class App {
  init() {
    observer();
    listener();
  }
}
