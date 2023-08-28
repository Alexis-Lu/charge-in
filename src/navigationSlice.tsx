import { createSlice } from "@reduxjs/toolkit";

interface NavigationState {
  drawerOpen: boolean;
  activeButtonId: number;
  activeContent: string;
}

const initialState: NavigationState = {
  drawerOpen: false,
  activeButtonId: 1,
  activeContent: "accueil",
};

type ContentMapping = {
  [key: number]: string;
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setDrawerOpen: (state, action) => {
      state.drawerOpen = action.payload;
    },
    setActiveButtonId: (state, action) => {
      state.activeButtonId = action.payload;
      state.activeContent = contentMapping[action.payload];
    },
  },
});

const contentMapping: ContentMapping = {
  1: "accueil",
  2: "maisons",
};

export const { setDrawerOpen, setActiveButtonId } = navigationSlice.actions;

export default navigationSlice.reducer;
