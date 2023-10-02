import { createSlice } from "@reduxjs/toolkit";
import reset from "../actions/ProfileCourseActions";

const AssistantListSlice = createSlice({
    name: "assistantList",
    initialState: [],
    reducers: {
        setAssistantList(state, action) {
            return action.payload;
        },
    },
    extraReducers(builder) {
      builder.addCase(reset, (state, action) => {
        return [];
      });
    },
});

export { AssistantListSlice };
export const { setAssistantList } = AssistantListSlice.actions;
