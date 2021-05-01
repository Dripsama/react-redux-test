import ReactDOM from "react-dom";

import App from "./App";
import { createStore } from "redux";
import reducers from "./reducers/index";
import { Provider } from "react-redux";

const mystore = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={mystore}>
    <App />
  </Provider>,
  rootElement
);
