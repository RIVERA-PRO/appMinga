import { configureStore } from "@reduxjs/toolkit";

import bottomTabsReducer from "./Perfil/reducer"
export const store = configureStore({
  reducer: {

    bottomTabsReducer: bottomTabsReducer
  },
});
