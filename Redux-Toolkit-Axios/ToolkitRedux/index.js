import {combineReducers, configureStore} from "@reduxjs/toolkit"
import toolkitSlice from "./toolkitSlice";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    toolkit: toolkitSlice
})

export const store = configureStore({
    reducer: rootReducer
}, applyMiddleware(thunk))