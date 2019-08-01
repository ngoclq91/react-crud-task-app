import React from 'react';

class App_mockup extends React.Component {
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
                        {/* END form add task */}

                        {/* START control & table list */}
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <button type="button" className="btn btn-primary mb-3">
                                <span className="fa fa-plus mr-1"></span>Add New Task
                            </button>

                            {/* START control */}
                            <div className="container p-0">
                                <div className="row">
                                    {/* START Search */}
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" name="" id="" placeholder="Search"/>
                                            <span className="input-group-append">
                                                <button className="btn btn-primary">
                                                    <span className="fa fa-search mr-1"></span>Search
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                    {/* END search */}

                                    {/* START Sort*/}
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <div className="dropdown">
                                            <button className="btn btn-primary dropdown-toggle" type="button" id="triggerId"
                                               data-toggle="dropdown" aria-haspopup="true"
                                               aria-expanded="false">
                                                Sort
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="triggerId">
                                                <li>
                                                    <a role="button" className="dropdown-item" href="...">
                                                        <span className="fas fa-sort-alpha-down pr-2" style={{fontSize: '1.5em'}}></span>Name A -> Z
                                                    </a>
                                                </li>
                                                <li>
                                                    <a role="button" className="dropdown-item" href="...">
                                                        <span className="fas fa-sort-alpha-down-alt pr-2" style={{fontSize: '1.5em'}}></span>Name Z -> A
                                                    </a>
                                                </li>
                                                <li className="dropdown-divider" role="separator"></li>
                                                <li>
                                                    <a role="button" className="dropdown-item" href="...">Status: Active</a>
                                                </li>
                                                <li>
                                                    <a role="button" className="dropdown-item" href="...">Status: Disable</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* END Sort */}
                                </div>
                            </div>
                            {/* END control*/}

                            {/* START table list*/}
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
                                                <tr>
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
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* END table list */}
                        </div>
                        {/* END control & table list */}
                    </div>
                </div>
            </div>
        );
    }
}
export default App_mockup;
