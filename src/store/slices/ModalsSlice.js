import { createSlice } from "@reduxjs/toolkit";

const ModalsSlice = createSlice({
  name: "modal",
  initialState: null,
  reducers: {
    setModal(state, action) {
      return action.payload;
    },
  },
});

export { ModalsSlice };
export const { setModal } = ModalsSlice.actions;
