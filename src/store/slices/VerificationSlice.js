import { createSlice } from "@reduxjs/toolkit";

const VerificationSlice = createSlice({
  name: "verification",
  initialState: false,
  reducers: {
    setVerification(state, action) {
      return action.payload;
    },
  },
});

export { VerificationSlice };
export const { setVerification } = VerificationSlice.actions;
