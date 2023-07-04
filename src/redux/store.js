import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistReducer,
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

// import storage from 'redux-persist/lib/storage';

// const contactsConfig = {
//   key: 'contacts',
//   storage,
// };
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
// export const store = configureStore({
//   reducer: {
//     contacts: persistReducer(contactsConfig, contactsReducer),
//     filter: filterReducer,
//   },

//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
