import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import {CONSTANTS,sort} from '../actions';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";




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
  let store = createStore(
    persistedReducer,
    applyMiddleware(thunk,logger)
  )
  let persistor = persistStore(store);
  return {store, persistor}
}