import React, { Component } from "react";
import Praveen from "./Header";

class App extends Component {
  state = {};
  componentDidMount() {
    // Let's watch it later.
  }
  render() {
    return (
      <div className="App">
        <Praveen dark={true} className="Header">
          Hello World Life
        </Praveen>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">Main application.</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
