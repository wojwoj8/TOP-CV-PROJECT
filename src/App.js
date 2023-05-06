import './App.css';
import React, { Component } from 'react';
import Forms from './components/Forms';

class App extends Component {
  constructor(props){
    super(props);

  
    this.state = {
      general: {
        name: '',
        surname: '',
        email: '',
      }
    }
  }

  handleChange = (e) =>{
    this.setState({
      general: {
        ...this.state.general,
        name: e.target.value,
        surname: e.target.value,
        email: e.target.value,
      }
      
    })
  }
  render() {
  return (
    <div className="App">
      <Forms handleChange={this.handleChange} general={this.state.general}></Forms>
    </div>
  );
}
}
export default App;
