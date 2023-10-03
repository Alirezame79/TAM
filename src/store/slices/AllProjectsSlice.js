import { createSlice } from "@reduxjs/toolkit";
import reset from "../actions/ProfileCourseActions";

const AllProjectsSlice = createSlice({
  name: "AllProjects",
  initialState: {},
  reducers: {
    setAllProjects(state, action) {
      return action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export { AllProjectsSlice };
export const { setAllProjects } = AllProjectsSlice.actions;
