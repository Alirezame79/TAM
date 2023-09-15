import { createSlice } from "@reduxjs/toolkit";

const ProjectListSlice = createSlice({
    name: "project",
    initialState: [],
    reducers: {
        setProjectList(state, action) {
            return action.payload;
        },
    }
});

export { ProjectListSlice };
export const { setProjectList } = ProjectListSlice.actions;
