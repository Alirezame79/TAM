import { createSlice } from "@reduxjs/toolkit";
import reset from "../actions/ProfileCourseActions";
import clean from "../actions/CleanDataActions";

const SelectedCourseSlice = createSlice({
  name: "course",
  initialState: {},
  reducers: {
    setCourse(state, action) {
      return action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(clean, (state, action) => {
      return {};
    });
  },
});

export { SelectedCourseSlice };
export const { setCourse } = SelectedCourseSlice.actions;
