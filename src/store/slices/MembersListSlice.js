import clean from "../actions/CleanDataActions";
import reset from "../actions/ProfileCourseActions";
import { createSlice } from "@reduxjs/toolkit";

const MembersListSlice = createSlice({
    name: "membersList",
    initialState: [],
    reducers: {
        setMembersList(state, action) {
            return action.payload;
        },
    },
    extraReducers(builder) {
      builder.addCase(clean, (state, action) => {
        return [];
      });
    },
});

export { MembersListSlice };
export const { setMembersList } = MembersListSlice.actions;
