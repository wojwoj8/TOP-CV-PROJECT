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
      },
      practical: {
        companyName: '',
        positionTitle: '',
        startDateP: '',
        finishDateP: '',
        mainTasks: '',
      }
    }
  }

  handleChange = (e) =>{
    // let field = e.target.name
    // let formPart = e.target.parentNode.parentNode.className;
    // // console.log(field);
    // // console.log(formPart)
   
    // this.setState(prevSate =>({
    //   [formPart]: {
    //     ...prevSate[formPart],
    //     [field]: e.target.value,
    //   }
    // }))
    
  }
  onSub = (e) =>{
    e.preventDefault();
    // need to make array in order to concat
    const inpu = Array.from(e.target.parentElement.querySelectorAll('input'));
    const textareas = Array.from(e.target.parentElement.querySelectorAll('textarea'));
    const inputs = inpu.concat(textareas);

    let formPart = e.target.parentNode.className;
    let formData = [...inputs].reduce((acc, input) => {
      acc[input.name] = input.value;
      return acc;
    }, {});
    // console.log(formPart)
    // console.log(inputs[0].name)
    // console.log(data)
      this.setState(prevSate =>({
      [formPart]: {
        ...prevSate[formPart],
        ...formData
      }

    }))
  }
  render(){
    const {name, surname, email} = this.state.general
    const {school, degree, finishDate, startDate} = this.state.education
    const {companyName, positionTitle, startDateP, finishDateP, mainTasks} = this.state.practical
  return (
    <div className="App">
      <Forms 
        handleChange={this.handleChange} 
        general={this.state.general} 
        education = {this.state.education}
        practical = {this.state.practical}
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
        companyName={companyName}
        positionTitle={positionTitle}
        startDateP={startDateP}
        finishDateP={finishDateP}
        mainTasks={mainTasks}
      ></Preview>
    </div>
  );
}
}
export default App;
