import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component{

    render() {
        return (
            <div className="container p-0">
                <div className="row">
                    <Search/>
                    <Sort/>
                </div>
            </div>
        )
    }
}

export default Control;
