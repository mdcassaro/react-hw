import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  render() {
    return (
      <Wrapper>
        <Title>employees List</Title>
        {this.state.employees.map(employees => (
          <FriendCard
            removeFriend={this.removeFriend}
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
