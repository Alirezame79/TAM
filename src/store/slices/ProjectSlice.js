import { createSlice } from "@reduxjs/toolkit";

const ProjectSlice = createSlice({
    name: "project",
    initialState: {},
    reducers: {
        setProject(state, action) {
            return action.payload;
        },
    }
});

export { ProjectSlice };
export const { setProject } = ProjectSlice.actions;
