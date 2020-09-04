import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {composeWithDevTools} from 'redux-devtools-extension'



const persistConfig = {
  key:'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);



// const reducer = () => {}
const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
  if(typeof action !== "function"){
    console.log('dispatching:', action);
  }
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
}


export default ()=>{  
  let store =
    process.env.NODE_ENV == "development"
      ? createStore(
          persistedReducer,
          composeWithDevTools(applyMiddleware(thunk, logger))
        )
      : createStore(persistedReducer, applyMiddleware(thunk));
  let persistor = persistStore(store);
  return {store, persistor}
}