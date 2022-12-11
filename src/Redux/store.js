import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";
import userSlice from "./Slices/userSlice";
import productSlice from "./Slices/Admin/productSlice";

/* ==== copied from redux persist documentation: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist  ==== */
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

/* ==== copied from redux persist documentation: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist  ==== */
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userSlice,
  products: productSlice,
  cart: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

/* const userPersistedReducer = persistReducer(persistConfig, userSlice);
const productPersistedReducer = persistReducer(persistConfig, productSlice);
const cartPersistedReducer = persistReducer(persistConfig, cartSlice); */

export const store = configureStore({
  /*  reducer: {
    cart: cartPersistedReducer,

    products: productPersistedReducer,

    user: userPersistedReducer,
  }, */
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
