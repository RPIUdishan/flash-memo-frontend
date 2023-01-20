import { configureStore } from '@reduxjs/toolkit'
import cardDeckReducer from '../features/cardDeckSlice';

const store = configureStore({
    reducer: {
        card_decks: cardDeckReducer
    },
});

export default store;