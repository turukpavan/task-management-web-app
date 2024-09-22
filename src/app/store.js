import { configureStore } from "@reduxjs/toolkit";
import signupReducer from '../features/signup/signupSlice';
import dashboardReducer from '../features/Dashboard/dashboardSlice';

export const store = configureStore({
    reducer : {
        signup:signupReducer,
        dashboard:dashboardReducer
    }

})