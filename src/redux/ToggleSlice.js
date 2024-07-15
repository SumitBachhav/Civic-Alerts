import { createSlice } from "@reduxjs/toolkit";

const initialState = { Value : 0,
  
 };

const toggleSlice = createSlice({
    name: 'toggleSlice' ,
    initialState ,
    //actions
    reducers: {
      tr: (state) =>{ state.Value = 1 },
      fl: (state) =>{ state.Value = 0 },
}
})

export const {tr, fl, tg} = toggleSlice.actions;

export default toggleSlice.reducer;