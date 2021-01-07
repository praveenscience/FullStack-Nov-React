import React, { Component } from "react";
import { GetAllAnimals } from "../services/Animals";
import Praveen from "./Header";

class App extends Component {
  state = {
    Animals: []
  };
  componentDidMount() {
    GetAllAnimals().then(Animals => this.setState({ Animals }));
  }
  render() {
    return (
      <div className="App">
        <Praveen dark={true} className="Header">
          Hello World Life
        </Praveen>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <pre className="border rounded bg-light p-1 my-3">
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
