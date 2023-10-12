import clean from "../actions/CleanDataActions";
import reset from "../actions/ProfileCourseActions";
import { createSlice } from "@reduxjs/toolkit";

const ProjectSlice = createSlice({
    name: "project",
    initialState: {},
    reducers: {
        setProject(state, action) {
            return action.payload;
        },
    },
    extraReducers(builder) {
      builder.addCase(clean, (state, action) => {
        return {};
      });
    },
});

export { ProjectSlice };
export const { setProject } = ProjectSlice.actions;
