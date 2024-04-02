import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./components/modals/modalSlice";

export default configureStore({
  reducer: {
    modal: modalSlice
  },
});
