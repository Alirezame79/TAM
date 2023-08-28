import { createSlice } from "@reduxjs/toolkit";

const GroupListSlice = createSlice({
    name: "groupList",
    initialState: [],
    reducers: {
        setGroupList(state, action) {
            return action.payload;
        },
    }
});

export { GroupListSlice };
export const { setGroupList } = GroupListSlice.actions;
