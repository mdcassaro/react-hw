import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";

class App extends Component {
 
  state = {
    employees
  };

  removeEmployee = id => {
    
    const employees = this.state.employees.filter(employee => employee.id !== id);
    
    this.setState({ employees });
  };

  render() {
    return (
      <Wrapper>
        <Title>Employee's List</Title>
        {this.state.employees.map(employees => (
          <EmployeeCard
            removeEmployee={this.removeEmployee}
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
