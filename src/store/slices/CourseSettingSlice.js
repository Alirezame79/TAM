import { createSlice } from "@reduxjs/toolkit";

const CourseSettingSlice = createSlice({
    name: "courseSetting",
    initialState: {},
    reducers: {
        setCourseSetting(state, action) {
            return action.payload;
        },
    }
});

export { CourseSettingSlice };
export const { setCourseSetting } = CourseSettingSlice.actions;
