import { createSlice } from "@reduxjs/toolkit";
import reset from "../actions/ProfileCourseActions";
import clean from "../actions/CleanDataActions";

const AssistantCoursesSlice = createSlice({
  name: "assistantCourses",
  initialState: [],
  reducers: {
    setAssistantCourses(state, action) {
      return action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export { AssistantCoursesSlice };
export const { setAssistantCourses } = AssistantCoursesSlice.actions;
