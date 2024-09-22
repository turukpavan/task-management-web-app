import {createSlice} from '@reduxjs/toolkit'
const initialState={
    tasks:[]
}
export const dashboardSlice=createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        addTask:(state,action)=>{
            console.log(action.payload);
            state.tasks.push(action.payload);
        },
        editTask:(state,action)=>{
            const {id,editedTask}=action.payload;
            const index=state.tasks.findIndex(task=>task.id===id);

            if(index !== -1){
                state.tasks[index]={...state.tasks[index],...editedTask}
            }

        },

        deleteTask:(state,action)=>{
            console.log(action.payload);
            
            state.tasks=state.tasks.filter(task=>task.id !== action.payload)

        }
    }
})

export const {editTask, addTask, deleteTask}= dashboardSlice.actions
export default dashboardSlice.reducer