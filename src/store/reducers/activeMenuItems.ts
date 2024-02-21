import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface selectedIndexStateType {
  activeIndex: number;
  policyActiveIndex: number;
  personActiveIndex: number;
}

const initialState: selectedIndexStateType = {
  activeIndex: 0,
  personActiveIndex: 0,
  policyActiveIndex: 0,
};

export const activeMenuIndexSlice = createSlice({
  name: "selectedTitle",
  initialState,
  reducers: {
    setActiveMenuIndex: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        activeIndex: action.payload,
      };
    },
    setPersonActiveIndex: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        personActiveIndex: action.payload,
      };
    },
    setPolicyActiveIndex: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        policyActiveIndex: action.payload,
      };
    },
  },
});


export const { setActiveMenuIndex, setPolicyActiveIndex, setPersonActiveIndex } =
  activeMenuIndexSlice.actions;


export default activeMenuIndexSlice.reducer;
