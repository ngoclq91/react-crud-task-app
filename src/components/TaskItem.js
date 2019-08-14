import React, { Component } from 'react';

class TaskItem extends Component{
    render() {
        let { task, index } = this.props;
        return (
            <tr>
                <td className="text-center">{index}</td>
                <td className="text-center">
                    {task.name}
                </td>
                <td className="text-center">
                    <span className={task.status ? 'badge badge-success' : 'badge badge-danger'}>{task.status ? 'Active' : 'Disable'}</span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning mr-2">
                        <span className="fas fa-pencil-alt mr-2"></span>Edit
                    </button>
                    <button type="button" className="btn btn-danger">
                        <span className="fas fa-trash mr-2"></span>Edit
                    </button>
                </td>
            </tr>
            /*<tr>
                <td className="text-center">2</td>
                <td className="text-center">
                    Study Python
                </td>
                <td className="text-center">
                    <span className="badge badge-secondary">Disable</span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning mr-2">
                        <span className="fas fa-pencil-alt mr-2"></span>Edit
                    </button>
                    <button type="button" className="btn btn-danger">
                        <span className="fas fa-trash mr-2"></span>Edit
                    </button>
                </td>
            </tr>*/
        )
    }
}

export default TaskItem;
