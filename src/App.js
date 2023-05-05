import './App.css';
import React, { Component } from 'react';
import Forms from './components/Forms';
import Preview from './components/Preview';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        name: '',
        email: '',
        surname: '',
      },
    };
  }

  handleFormChange = (name, value) => {
    this.setState((prevState) => ({
      formValues: {
        ...prevState.formValues,
        [name]: value,
      },
    }));
  };

  render() {
  return (
    <div className="App">
      <Forms></Forms>
      <Preview formValues={this.state.formValues}></Preview>
    </div>
  );
}
}
export default App;
