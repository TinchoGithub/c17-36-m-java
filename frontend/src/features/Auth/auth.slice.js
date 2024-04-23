import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false,
    user: {},
    jwtToken: "",
    roles: [],
}  



export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.isAuthenticated = true;
            state.jwtToken = action.payload.jwtToken;
            state.user = action.payload;
            state.roles = action.payload.roles;
        },
        logOut: (state) => {
            state.isAuthenticated = false;
            state.jwtToken = "";
            state.user = {};
            state.roles = [];
        },
    },
})

// Action creators are generated for each case reducer function
export const { logIn, logOut } = authSlice.actions

export default authSlice.reducer