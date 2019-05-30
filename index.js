import React, { Component } from 'react';
import { render } from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";
import Navbar from "./Navbar";
import Products from "./Products";
import reduer from "./store/reducer";

const store = createStore(reduer);

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className = "container">
        <Navbar />
        <Products />
      </div>
    );
  }
}

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
