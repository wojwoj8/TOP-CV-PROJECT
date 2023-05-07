import './App.css';
import './components/Forms.scss';
import React, { Component } from 'react';
import Forms from './components/Forms';
import Preview from './components/Preview';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      general: {
        name: '',
        surname: '',
        email: '',
      },
      education: {
        school: '',
        degree: '',
        startDate: '',
        finishDate: '',
      }
    }
  }

  handleChange = (e) =>{
    let field = e.target.name
    let formPart = e.target.parentNode.parentNode.className;
    // console.log(field);
    // console.log(formPart)
   
    this.setState(prevSate =>({
      [formPart]: {
        ...prevSate[formPart],
        [field]: e.target.value,
      }
    }))
    
    
  }
  onSub = (e) =>{
    e.preventDefault();

  }
  render() {
    const {name, surname, email} = this.state.general
    const {school, degree, finishDate, startDate} = this.state.education
  return (
    <div className="App">
      <Forms 
        handleChange={this.handleChange} 
        general={this.state.general} 
        education = {this.state.education}
        onSub={this.onSub}
      ></Forms>
      <Preview 
        name={name}
        surname={surname}
        email={email}
        school={school}
        degree={degree}
        finishDate={finishDate}
        startDate={startDate}
      ></Preview>
    </div>
  );
}
}
export default App;
