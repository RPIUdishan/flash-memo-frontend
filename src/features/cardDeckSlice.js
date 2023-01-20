import { createSlice } from '@reduxjs/toolkit'

export const nameSlice = createSlice({
  name: 'names',
  initialState: {
    value: []
  },
  reducers: {
    addName: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    //   let x = "asdf"
      let x = action.payload
      state.value.push(x)
    },
  }
})

export const { addName } = nameSlice.actions

export default nameSlice.reducer

export const selectName = (state) => state.names.value;