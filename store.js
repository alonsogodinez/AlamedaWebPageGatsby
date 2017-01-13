import {applyMiddleware, createStore} from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

const isProduction = process.env.NODE_ENV === 'production';

const productionMiddlewares = [
  promise(),
  thunk
];

const developmentMiddlewares = [
  ...productionMiddlewares,
  logger()
];



const middlewares = isProduction ? productionMiddlewares
                                 : developmentMiddlewares

const middleware = applyMiddleware(...middlewares);

export default createStore(reducer, middleware)