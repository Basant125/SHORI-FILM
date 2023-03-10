import { configureStore, getDefaultMiddleware, } from '@reduxjs/toolkit'
import movieReducer from './reducers'
import storage from 'redux-persist/lib/storage';
import {
    persistReducer, persistStore, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, movieReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    // devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)