import React, { Component } from "react";
import { GetAllAnimals } from "../services/Animals";
import Praveen from "./Header";

class App extends Component {
  state = {
    Animals: [],
    Loaded: false
  };
  componentDidMount() {
    GetAllAnimals().then(Animals =>
      this.setState({
        Animals,
        Loaded: true
      })
    );
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
              {this.state.Loaded ? (
                <pre className="border rounded bg-light p-1 my-3">
                  {JSON.stringify(this.state, null, 2)}
                </pre>
              ) : (
                <div className="Loading text-center">
                  <img src="https://i.imgur.com/SUvUcpv.gif" alt="Loading..." />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
