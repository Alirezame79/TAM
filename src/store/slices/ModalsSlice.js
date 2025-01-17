import clean from "../actions/CleanDataActions";
import reset from "../actions/ProfileCourseActions";
import { createSlice } from "@reduxjs/toolkit";

const ModalsSlice = createSlice({
  name: "modal",
  initialState: null,
  reducers: {
    setModal(state, action) {
      return action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(clean, (state, action) => {
      return null;
    });
  },
});

export { ModalsSlice };
export const { setModal } = ModalsSlice.actions;
