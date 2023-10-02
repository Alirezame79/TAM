import reset from "../actions/ProfileCourseActions";
import { createSlice } from "@reduxjs/toolkit";

const GroupListSlice = createSlice({
    name: "groupList",
    initialState: [],
    reducers: {
        setGroupList(state, action) {
            return action.payload;
        },
    },
    extraReducers(builder) {
      builder.addCase(reset, (state, action) => {
        return [];
      });
    },
});

export { GroupListSlice };
export const { setGroupList } = GroupListSlice.actions;
