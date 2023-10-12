import clean from "../actions/CleanDataActions";
import reset from "../actions/ProfileCourseActions";
import { createSlice } from "@reduxjs/toolkit";

const ProjectListSlice = createSlice({
    name: "project",
    initialState: [],
    reducers: {
        setProjectList(state, action) {
            return action.payload;
        },
    },
    extraReducers(builder) {
      builder.addCase(clean, (state, action) => {
        return [];
      });
    },
});

export { ProjectListSlice };
export const { setProjectList } = ProjectListSlice.actions;
