import React, { Component } from "react";
import { GetAllAnimals } from "../services/Animals";
import AnimalsList from "./AnimalsList";
import Praveen from "./Header";
import Loader from "./Loader";

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
    const { Animals, Loaded } = this.state;
    return (
      <div className="App">
        <Praveen dark={true} className="Header">
          Hello World Life
        </Praveen>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {Loaded ? <AnimalsList List={Animals} /> : <Loader />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
