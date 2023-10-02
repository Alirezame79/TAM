import reset from "../actions/ProfileCourseActions";
import { createSlice } from "@reduxjs/toolkit";

const CheckAssistantSlice = createSlice({
    name: "checkAssistant",
    initialState: {},
    reducers: {
        setAssistant(state, action) {
            return action.payload;
        },
    },
    extraReducers(builder) {
      builder.addCase(reset, (state, action) => {
        return {};
      });
    },
});

export { CheckAssistantSlice };
export const { setAssistant } = CheckAssistantSlice.actions;
