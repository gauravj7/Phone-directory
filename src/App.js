import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Add from './Add.js';

import './App.css';
import Home from './Home.jsx';

class App extends Component {

  state = {
    name: '',
    phone: '',
    list: []
  }

  onHandleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onAddItem = item => {
    this.setState(prevState => ({
      ...prevState,
      list: [
        ...prevState.list,
        item
      ]
    }));
  }

 

  onDeleteItem = id => {
    const { list } = this.state;
    list.splice(id, 1);
    this.setState({
      list
    })
  }

  render() {    
    return (
      <Router>
      <Switch>
       <Route exact path="/" render={props => <Home onDeleteItem={this.onDeleteItem} {...props} {...this.state} />} />
       <Route exact path="/Add" render={props => <Add addItem={this.onAddItem} {...props} {...this.state} />} />
      </Switch>
    </Router>

    );
  }
}

export default App;
