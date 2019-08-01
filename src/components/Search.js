import React, { Component } from 'react';

class Search extends Component{
    render() {
        return (
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
        );
    }
}

export default Search;
