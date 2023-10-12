import clean from "../actions/CleanDataActions";
import reset from "../actions/ProfileCourseActions";
import { createSlice } from "@reduxjs/toolkit";

const StudentRoundListSlice = createSlice({
    name: "project",
    initialState: [],
    reducers: {
        setStudentRoundList(state, action) {
            return action.payload;
        },
    },
    extraReducers(builder) {
      builder.addCase(clean, (state, action) => {
        return [];
      });
    },
});

export { StudentRoundListSlice };
export const { setStudentRoundList } = StudentRoundListSlice.actions;
