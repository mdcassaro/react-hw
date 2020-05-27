
import React from "react";

function employeeFilter(props) {
    return (
        <div className="uk-flex uk-flex-middle">
            <div className="uk-margin-small-right">employeeFilter: </div>
            <select 
                className="uk-select" 
                id="filter"
                onChange={props.handleFilterChange}
                name="filterOption"
                value={props.filterOption}
            >
                <option value="all">All Employees</option>
                <option value="Chef">Chefs</option>
                <option value="Singer">Singers</option>
                <option value="Intern">Interns</option>
                <option value="Engineer">Engineers</option>
                <option value="Manager">Managers</option>
            </select>
        </div>
    );
}

export default employeeFilter;