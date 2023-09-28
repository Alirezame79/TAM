import { createSlice } from "@reduxjs/toolkit";

const StudentRoundListSlice = createSlice({
    name: "project",
    initialState: [],
    reducers: {
        setStudentRoundList(state, action) {
            return action.payload;
        },
    }
});

export { StudentRoundListSlice };
export const { setStudentRoundList } = StudentRoundListSlice.actions;
