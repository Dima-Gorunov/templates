import {createSlice} from "@reduxjs/toolkit";
import {defApi} from "../Api";


const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        todos: []
    },
    reducers: {
        setToDos(state, action) {
            state.todos = action.payload
        },
        deleteToDos(state) {
            state.todos = []
        }
    }
})
export const getData = () => {
    return async dispatch => {
        await defApi.getToDos().then(response => {
            if (response.status === 200) {
                dispatch(toolkitSlice.actions.setToDos(response.data))
            }
        })
    }
}

export const deleteData = () => {
    return async dispatch => {
        dispatch(toolkitSlice.actions.deleteToDos())
    }
}


export default toolkitSlice.reducer

export const {
    changeInput,
    decrement,
    increment
} = toolkitSlice.actions