import { configureStore } from "@reduxjs/toolkit";
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
const userPersistedReducer = persistReducer(persistConfig, userSlice);
const productPersistedReducer = persistReducer(persistConfig, productSlice);

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productPersistedReducer,

    user: userPersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
