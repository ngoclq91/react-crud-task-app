import React, { Component } from 'react';

class TaskForm extends Component{
    render() {
        return (
            <div className="card col-xs-4 col-sm-4 col-md-4 col-lg-4 p-0">
                <h4 className="card-header bg-warning text-white">
                    <span className="fa fa-plus mr-2"></span>
                    <span>Add New Task</span>
                    <span className="far fa-times-circle" style={{float: 'right'}}></span>
                </h4>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="inputTask" className="col-form-label font-weight-bold">Task Name:</label>
                            <input type="text" className="form-control" name="inputTask" id="inputTask"
                                   placeholder="Please enter task"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputLabel" className="col-form-label font-weight-bold">Label:</label>
                            <input type="text" className="form-control" name="inputLabel" id="inputLabel"
                                   placeholder="Please enter label"/>
                        </div>
                        <div className="form-group row">
                            <div className="offset-sm-2 col-sm-8 sm-offset-2">
                                <button type="submit" className="btn btn-warning text-white mr-3">
                                    <span className="fa fa-plus mr-1"></span>Save
                                </button>
                                <button type="reset" className="btn btn-danger">
                                    <span className="fa fa-times mr-1"></span>Reset
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default TaskForm;
