import { createSlice } from "@reduxjs/toolkit";
import reset from "../actions/ProfileCourseActions";

const ScheduleRoleSlice = createSlice({
  name: "scheduleRole",
  initialState: {},
  reducers: {
    setScheduleRole(state, action) {
      return action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return {};
    });
  },
});

export { ScheduleRoleSlice };
export const { setScheduleRole } = ScheduleRoleSlice.actions;
