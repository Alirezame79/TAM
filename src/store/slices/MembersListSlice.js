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
      builder.addCase(reset, (state, action) => {
        return [];
      });
    },
});

export { MembersListSlice };
export const { setMembersList } = MembersListSlice.actions;
