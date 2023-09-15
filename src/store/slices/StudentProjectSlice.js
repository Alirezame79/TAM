import { createSlice } from "@reduxjs/toolkit";

const StudentProjectSlice = createSlice({
    name: "studentProject",
    initialState: [],
    reducers: {
        setStudentProject(state, action) {
            return action.payload;
        },
    }
});

export { StudentProjectSlice };
export const { setStudentProject } = StudentProjectSlice.actions;
