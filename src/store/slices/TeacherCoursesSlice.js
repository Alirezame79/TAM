import { createSlice } from "@reduxjs/toolkit";
import reset from "../actions/ProfileCourseActions";
import clean from "../actions/CleanDataActions";

const TeacherCoursesSlice = createSlice({
  name: "teacherCourses",
  initialState: [],
  reducers: {
    setTeacherCourses(state, action) {
      return action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export { TeacherCoursesSlice };
export const { setTeacherCourses } = TeacherCoursesSlice.actions;
