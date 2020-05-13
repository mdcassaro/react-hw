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
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.friends equal to the new friends array
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
