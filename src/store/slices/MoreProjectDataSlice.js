import { createSlice } from "@reduxjs/toolkit";

const MoreProjectDataSlice = createSlice({
    name: "projectData",
    initialState: {},
    reducers: {
        setProjectData(state, action) {
            return action.payload;
        },
    }
});

export { MoreProjectDataSlice };
export const { setProjectData } = MoreProjectDataSlice.actions;
