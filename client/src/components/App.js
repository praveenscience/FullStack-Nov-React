import React, { Component } from "react";
import { GetAllAnimals } from "../services/Animals";
import AnimalsList from "./AnimalsList";
import Header from "./Header";
import Loader from "./Loader";

class App extends Component {
  state = {
    Animals: [],
    Loaded: false
  };
  reloadAnimals = () => {
    GetAllAnimals().then(res =>
      this.setState({
        Animals: res.data.filter(Boolean),
        Loaded: true
      })
    );
  };
  componentDidMount() {
    this.reloadAnimals();
  }
  render() {
    const { Animals, Loaded } = this.state;
    return (
      <div className="App">
        <Header dark={true} className="Header">
          Hello World Life
        </Header>
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
