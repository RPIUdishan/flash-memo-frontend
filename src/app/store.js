import { configureStore } from '@reduxjs/toolkit'
import { cardDecksApi } from '../features/cardDeckApiSlice';
import cardDeckReducer from '../features/cardDeckSlice';


const store = configureStore({
    reducer: {
        card_decks: cardDeckReducer,
        [cardDecksApi.reducerPath] : cardDecksApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardDecksApi.middleware)
});

export default store;