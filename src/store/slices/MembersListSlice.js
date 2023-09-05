import { createSlice } from "@reduxjs/toolkit";

const MembersListSlice = createSlice({
    name: "membersList",
    initialState: [],
    reducers: {
        setMembersList(state, action) {
            return action.payload;
        },
    }
});

export { MembersListSlice };
export const { setMembersList } = MembersListSlice.actions;
