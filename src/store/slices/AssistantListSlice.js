import { createSlice } from "@reduxjs/toolkit";

const AssistantListSlice = createSlice({
    name: "assistantList",
    initialState: [],
    reducers: {
        setAssistantList(state, action) {
            return action.payload;
        },
    }
});

export { AssistantListSlice };
export const { setAssistantList } = AssistantListSlice.actions;
