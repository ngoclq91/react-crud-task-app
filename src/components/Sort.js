import React, { Component } from 'react';

class Sort extends Component{
    render() {
        return (
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
        )
    }
}

export default Sort;
