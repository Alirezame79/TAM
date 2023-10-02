import reset from "../actions/ProfileCourseActions";
import { createSlice } from "@reduxjs/toolkit";

const TeacherRoundListSlice = createSlice({
    name: "project",
    initialState: [],
    reducers: {
        setTeacherRoundList(state, action) {
            return action.payload;
        },
    },
    extraReducers(builder) {
      builder.addCase(reset, (state, action) => {
        return [];
      });
    },
});

export { TeacherRoundListSlice };
export const { setTeacherRoundList } = TeacherRoundListSlice.actions;
