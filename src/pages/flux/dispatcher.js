import { Dispatcher } from "flux";
// import store from "./store";

let Mydispatch = new Dispatcher();

Mydispatch.register((action) => {
  // switch (action.type) {
  //   case "jian":
  //     store.jian()
  //     break;
  //   case "jia":
  //     store.jia()
  //     break;
  // }
});
export default Mydispatch;
