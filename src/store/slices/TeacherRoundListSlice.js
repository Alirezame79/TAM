import { createSlice } from "@reduxjs/toolkit";

const TeacherRoundListSlice = createSlice({
    name: "project",
    initialState: [],
    reducers: {
        setTeacherRoundList(state, action) {
            return action.payload;
        },
    }
});

export { TeacherRoundListSlice };
export const { setTeacherRoundList } = TeacherRoundListSlice.actions;
