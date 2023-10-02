import reset from "../actions/ProfileCourseActions";
import { createSlice } from "@reduxjs/toolkit";

const CourseSettingSlice = createSlice({
    name: "courseSetting",
    initialState: {},
    reducers: {
        setCourseSetting(state, action) {
            return action.payload;
        },
    },
    extraReducers(builder) {
      builder.addCase(reset, (state, action) => {
        return {};
      });
    },
});

export { CourseSettingSlice };
export const { setCourseSetting } = CourseSettingSlice.actions;
