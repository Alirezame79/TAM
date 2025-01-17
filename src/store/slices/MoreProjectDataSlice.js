import clean from "../actions/CleanDataActions";
import reset from "../actions/ProfileCourseActions";
import { createSlice } from "@reduxjs/toolkit";

const MoreProjectDataSlice = createSlice({
    name: "projectData",
    initialState: {},
    reducers: {
        setProjectData(state, action) {
            return action.payload;
        },
    },
    extraReducers(builder) {
      builder.addCase(clean, (state, action) => {
        return {};
      });
    },
});

export { MoreProjectDataSlice };
export const { setProjectData } = MoreProjectDataSlice.actions;
