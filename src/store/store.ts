import {combineReducers, configureStore} from '@reduxjs/toolkit'

import storage from 'redux-persist/lib/storage'

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER} from 'redux-persist'
import todosReducer from "./slices/todosSlice.ts";

const reducers = combineReducers(
    {
        todos:todosReducer
    })

const persistConfig = {
    key: 'root',
    storage,
    blacklist:[""]
}
const persistedReducers = persistReducer(persistConfig, reducers)


const store= configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
export const persistor=persistStore(store)
export default store;


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch