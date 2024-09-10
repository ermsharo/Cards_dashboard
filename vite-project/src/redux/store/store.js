import { configureStore } from "@reduxjs/toolkit";

// import userInfoReducer from "../features/userInfoSlice";
// import qrCodeSlice from "../features/qrcodeInfoSlice";
// import categoriesSlice from "../features/categoriesSlice";
// import employersReducer from "../features/employersSlice";

export const store = configureStore({
  reducer: {
    // qrcode: qrCodeSlice,
    // userInfo: userInfoReducer,
    // categories: categoriesSlice,
    // employers: employersReducer,
  },
});

export default store;
