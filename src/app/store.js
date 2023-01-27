import { configureStore } from '@reduxjs/toolkit'
import { getAllCardDecksApi } from '../features/cardDeckApiSlice';
import cardDeckReducer from '../features/cardDeckSlice';


const store = configureStore({
    reducer: {
        card_decks: cardDeckReducer,
        [getAllCardDecksApi.reducerPath] : getAllCardDecksApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(getAllCardDecksApi.middleware)
});

export default store;