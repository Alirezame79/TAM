import reset from "../actions/ProfileCourseActions";
import { createSlice } from "@reduxjs/toolkit";

const CheckMemberSlice = createSlice({
    name: "checkMember",
    initialState: {},
    reducers: {
        setMember(state, action) {
            return action.payload;
        },
    },
    extraReducers(builder) {
      builder.addCase(reset, (state, action) => {
        return {};
      });
    },
});

export { CheckMemberSlice };
export const { setMember } = CheckMemberSlice.actions;
