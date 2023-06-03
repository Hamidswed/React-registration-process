import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/userType";

type InitialType = {
  user: UserType;
  step1: boolean;
};

const initialState: InitialType = {
  user: {
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    planInfo: {
      title: "",
      price: 0,
      timeFrame: false,
    },
  },
  step1: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getPersonalInfo: (state, action) => {
      state.user.personalInfo = action.payload;
      state.step1 = true;
    },
    getTimeFram: (state, action) => {
      state.user.planInfo.timeFrame = action.payload;
    },
    getPlanInfo: (state, action) => {
      state.user.planInfo = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
