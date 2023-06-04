import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/userType";

type InitialType = {
  user: UserType;
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
      title: "Silver",
      price: 8,
      timeFrame: false,
    },
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getPersonalInfo: (state, action) => {
      state.user.personalInfo = action.payload;
    },
    getTimeFram: (state, action) => {
      state.user.planInfo.timeFrame = action.payload;
    },
    getPrice: (state, action) => {
      state.user.planInfo.price = action.payload;
    },
    getPlanInfo: (state, action) => {
      state.user.planInfo = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
