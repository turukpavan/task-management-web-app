import {createSlice} from '@reduxjs/toolkit'
const initialState={
    users:[]
}
export const signupslice=createSlice({
    name: 'signup',
    initialState,
    reducers: {
        addUser:(state,action)=>{
            console.log(action.payload);
            state.users.push(action.payload);
        }
    }
})

export const {addUser}= signupslice.actions
export default signupslice.reducer