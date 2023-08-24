import { createSlice } from "@reduxjs/toolkit";

const CheckAssistantSlice = createSlice({
    name: "checkAssistant",
    initialState: {},
    reducers: {
        setAssistant(state, action) {
            return action.payload;
        },
    }
});

export { CheckAssistantSlice };
export const { setAssistant } = CheckAssistantSlice.actions;
