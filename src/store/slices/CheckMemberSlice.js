import { createSlice } from "@reduxjs/toolkit";

const CheckMemberSlice = createSlice({
    name: "checkMember",
    initialState: {},
    reducers: {
        setMember(state, action) {
            return action.payload;
        },
    }
});

export { CheckMemberSlice };
export const { setMember } = CheckMemberSlice.actions;
