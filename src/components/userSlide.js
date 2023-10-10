import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    password: "",
    message: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setFormData: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        },
        clearFormData: (state) => {
            return {
                ...initialState,
            };
        },
    },
});

export const { setFormData, setMessage, clearFormData } = userSlice.actions;

export default userSlice.reducer;
