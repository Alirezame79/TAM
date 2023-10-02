import reset from "../actions/ProfileCourseActions";
import { createSlice } from "@reduxjs/toolkit";

const StudentProjectSlice = createSlice({
    name: "studentProject",
    initialState: [],
    reducers: {
        setStudentProject(state, action) {
            return action.payload;
        },
    },
    extraReducers(builder) {
      builder.addCase(reset, (state, action) => {
        return [];
      });
    },
});

export { StudentProjectSlice };
export const { setStudentProject } = StudentProjectSlice.actions;
