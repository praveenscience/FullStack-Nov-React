import React, { Component } from "react";

class App extends Component {
  state = {
    Name: "Praveen Kumar",
    Age: 27,
    Address: {
      City: "London",
      State: "England",
      Country: "UK"
    },
    Phones: ["+449876543210", "+919876543210"],
    Professional: true,
    DateOfReg: new Date(),
    Count: 10
  };
  componentDidMount() {
    const timerId = setInterval(() => {
      if (this.state.Count - 1 === 0) {
        clearInterval(timerId);
        this.setState({
          Count: "Completed!"
        });
      } else {
        this.setState({
          Count: this.state.Count - 1
        });
      }
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-12 py-3">
              <p>Hello {this.state.Name}</p>
              <p>
                Countdown to something! You have{" "}
                {this.state.Count.toString().toLowerCase() +
                  (this.state.Count !== "Completed!" ? " seconds left!" : "")}
              </p>
              <pre className="my-3 p-2 bg-light border rounded">
                {JSON.stringify(this.state, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
