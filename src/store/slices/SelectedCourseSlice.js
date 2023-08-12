import { createSlice } from '@reduxjs/toolkit';
import reset from '../actions/ProfileCourseActions'

const SelectedCourseSlice = createSlice({
    name: "course",
    initialState: {},
    reducers: {
        setCourse(state, action) {
            return action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return {}
        })
    }
});

export { SelectedCourseSlice }
export const { setCourse } = SelectedCourseSlice.actions