import { createSlice } from "@reduxjs/toolkit";
import reset from "../actions/ProfileCourseActions";
import clean from "../actions/CleanDataActions";

const StudentCoursesSlice = createSlice({
  name: "studentCourses",
  initialState: [],
  reducers: {
    setStudentCourses(state, action) {
      return action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export { StudentCoursesSlice };
export const { setStudentCourses } = StudentCoursesSlice.actions;
