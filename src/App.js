import React from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from "./components/TaskList";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: []
        }
    }

    componentWillMount() {
        if (localStorage && localStorage.getItem('taskList')) {
            let tasks = JSON.parse(localStorage.getItem('taskList'));
            this.setState({
                tasks: tasks
            })
        }
    }

    onGenerateData = () => {
        let tasks = [
            {
                id : this.generateUUID(),
                name: 'hoc lap trinh',
                status: true
            },
            {
                id : this.generateUUID(),
                name: 'meeting',
                status: false
            },
            {
                id : this.generateUUID(),
                name: 'hoc tieng nhat',
                status: true
            }
        ];
        localStorage.setItem('taskList', JSON.stringify(tasks));
    };

    generateUUID = () => {
        return (
            [1e7]+-1e3+-4e3+-8e3+-1e11
        ).replace(/[108]/g, c => (
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0])
            &
            (15 >> c / 4)
        ).toString(16))
    };

    render() {
        let { tasks } = this.state;

        return (
            <div className="container">
                <div className="jumbotron text-center text-center">
                    <h1 className="font-weight-bold">CRUD : TASK</h1>
                </div>

                <div className="container">
                    <div className="row">
                        <TaskForm/>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <button type="button" className="btn btn-primary mb-3">
                                <span className="fa fa-plus mr-1"></span>Add New Task
                            </button>
                            <button type="button" className="btn btn-danger mb-3 ml-3" onClick={this.onGenerateData}>Generate Data</button>
                            <Control/>
                            <TaskList tasks={tasks}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
