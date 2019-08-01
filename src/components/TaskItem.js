import React, { Component } from 'react';

class TaskItem extends Component{
    render() {
        return (
            <tr>
                <td className="text-center">1</td>
                <td className="text-center">
                    Study React
                </td>
                <td className="text-center">
                    <span className="badge badge-info">Active</span>
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
