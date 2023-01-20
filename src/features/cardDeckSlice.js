import { createSlice } from '@reduxjs/toolkit'

export const cardDeckSlice = createSlice({
  name: 'card_decks',

  initialState: {
    value: []
  },
  
  reducers: {
    addCardDeck: (state, action) => {
      let x = action.payload
      state.value.push(x)
      console.log("final", x)
    },
  }
})

export const { addCardDeck } = cardDeckSlice.actions

export default cardDeckSlice.reducer

export const selectCardDecks = (state) => state.card_decks.value;