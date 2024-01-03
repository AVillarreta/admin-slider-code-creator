/* import reducer from "./reducer.js";
import { createStore } from "redux";
import * as thunk from "redux-thunk";

const store = createStore(reducer);

export default store; */

/* 
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const middleware = applyMiddleware(thunk);

const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store; */

import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducer"; // Asegúrate de importar tu reducer raíz

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);

export default store;
