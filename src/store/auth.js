import {createSlice, configureStore} from '@reduxjs/toolkit'

const inititalAuthState = {
    isAuthenticated: false
}
const authSlice = createSlice({
    name: 'authentication',
    initialState: inititalAuthState,
    reducers: {
        login(state){
            state.isAuthenticated = true ;
        },
        logout(state) {
            state.isAuthenticated = false ;
        }
    }
});
export const authActions = authSlice.actions ;
export default authSlice.reducer ;