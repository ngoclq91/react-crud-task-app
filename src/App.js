import React from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                {/* START jumbotron */}
                <div className="jumbotron text-center text-center">
                    <h1 className="font-weight-bold">CRUD : TASK</h1>
                </div>
                {/* END jumbotron*/}

                <div className="container">
                    <div className="row">
                        {/* START form add task */}
                        <TaskForm/>
                        {/* END form add task */}

                        {/* START control */}
                        <Control/>
                        {/* END control */}
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
