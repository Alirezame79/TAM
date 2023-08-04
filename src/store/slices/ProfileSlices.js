import { createSlice } from '@reduxjs/toolkit';
import reset from '../actions/ProfileCourseActions'

const ProfileSlice = createSlice({
    name: "profile",
    initialState: {},
    reducers: {
        setProfile(state, action) {
            return action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return {}
        })
    }
});

export { ProfileSlice }
export const { setProfile } = ProfileSlice.actions