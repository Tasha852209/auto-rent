import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { advertsApiSlice } from './adverts/advertsSlice';
import { filtersReducer } from './filters/filtersSlice';
import favoritesReducer from './favorites/favoritesSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const reducers = combineReducers({
  [advertsApiSlice.reducerPath]: advertsApiSlice.reducer,
  filters: filtersReducer,
  favorites: favoritesReducer,
});

const persistConfig = {
  key: 'favorites',
  version: 1,
  storage,
  whitelist: ['favorites'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(advertsApiSlice.middleware),
});

export let persistor = persistStore(store);
