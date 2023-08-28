import { createSlice } from "@reduxjs/toolkit";

const initialState: Record<string, boolean> = {};

const popoverSlice = createSlice({
  name: "popover",
  initialState,
  reducers: {
    openPopover: (state, action) => {
      const popoverId = action.payload;
      state[popoverId] = true;
    },
    closePopover: (state, action) => {
      const popoverId = action.payload;
      state[popoverId] = false;
    },
  },
});

export const { openPopover, closePopover } = popoverSlice.actions;

export default popoverSlice.reducer;
