
import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

const middleware = applyMiddleware(promise(),
  thunk,
  process.env.NODE_ENV === 'production'? null : logger()
);

export default createStore(reducer, middleware)