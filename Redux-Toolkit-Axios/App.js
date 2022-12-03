import './App.css';

import React from 'react';

const App = ({todos, getData, deleteData}) => {

    return (
        <div>
            <button onClick={() => getData()}>get data from api</button>
            <button onClick={() => deleteData()}>clear</button>
            <div>
                {todos.map((e, index) => (<div key={`num ${index}`}>
                    {e.title}
                </div>))}
            </div>
        </div>
    );
};

export default App;