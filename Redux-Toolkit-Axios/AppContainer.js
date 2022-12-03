import React from 'react';
import {connect} from "react-redux";
import App from "./App";
import {changeInput, decrement, increment, getData, deleteData} from "./ToolkitRedux/toolkitSlice";


const AppContainer = (props) => {
    return <App {...props} />
};

let mapStateToProps = (state) => {
    return {
        count: state.toolkit.count,
        input: state.toolkit.input,
        todos: state.toolkit.todos
    }
}

export default connect(mapStateToProps, {
    increment,
    decrement,
    changeInput,
    getData,
    deleteData
})(AppContainer);