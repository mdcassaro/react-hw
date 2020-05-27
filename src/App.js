import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import EmployeeSearch from "./components/EmployeeSearch";

class App extends Component {
 
  state = {
    employees
  };

  removeEmployee = id => {
    
    const employees = this.state.employees.filter(employee => employee.id !== id);
    
    this.setState({ employees });
  };

  sortEmployees = name =>{
    const sortedEmployees = this.state.employees.filter(employee => employee.name);
    this.setState({ sortedEmployees })
  }

  
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.sortEmployees(this.state.search);
  };
  
  

  render() {
    return (
      <Wrapper>
        <Title>Employee's List</Title>
        <EmployeeSearch
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
        {this.state.employees.map(employees => (
          <EmployeeCard
            removeEmployee={this.removeEmployee}
            sortEmployees={this.sortEmployees}
            id={employees.id}
            key={employees.id}
            name={employees.name}
            occupation={employees.occupation}
            email={employees.email}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
