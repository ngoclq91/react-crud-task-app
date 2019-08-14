import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component{

    render() {
        let {tasks} = this.props;

        let elemTask = tasks.map((task, index) => {
            return <TaskItem key={task.id} index={Number.parseInt(index )+ 1} task={task}/>
        });

        return (
            <div className="container p-0">
                <div className="row">
                    <div className="col-sm-12">
                        <table className="table table-bordered table-hover">
                            <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Task</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="text" className="form-control" name="filterName"/>
                                </td>
                                <td>
                                    <select name="filterStatus" id="filterStatus" className="form-control">
                                        <option value="-1">All</option>
                                        <option value="0">Active</option>
                                        <option value="1">Disable</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            {elemTask}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskList;
