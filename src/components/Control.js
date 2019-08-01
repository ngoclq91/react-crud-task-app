import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
import TaskList from "./TaskList";

class Control extends Component{
    render() {
        return (
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <button type="button" className="btn btn-primary mb-3">
                    <span className="fa fa-plus mr-1"></span>Add New Task
                </button>
                <div className="container p-0">
                    <div className="row">
                        {/* START search */}
                        <Search/>
                        {/* END search */}

                        {/* START Sort*/}
                        <Sort/>
                        {/* END Sort */}
                    </div>
                </div>

                {/* START table list*/}
                <TaskList/>
                {/* END table list */}
            </div>
        )
    }
}

export default Control;
