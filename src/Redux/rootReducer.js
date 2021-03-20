import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import dataReducer from "./reducers/datareducer/dataReducer";
import postReducer from "./reducers/postreducer/postReducer"

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['cart']
};

const rootReducer = combineReducers({
  data: dataReducer,
    post: postReducer
});

export default persistReducer(persistConfig, rootReducer);