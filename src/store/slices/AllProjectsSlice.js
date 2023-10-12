import { createSlice } from "@reduxjs/toolkit";
import reset from "../actions/ProfileCourseActions";
import clean from "../actions/CleanDataActions";

const AllProjectsSlice = createSlice({
  name: "AllProjects",
  initialState: {},
  reducers: {
    setAllProjects(state, action) {
      return action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(clean, (state, action) => {
      return {};
    });
  },
});

export { AllProjectsSlice };
export const { setAllProjects } = AllProjectsSlice.actions;
