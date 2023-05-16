import './App.css';
import './components/Forms.scss';
import './components/Preview.scss'
import uniqid from "uniqid";
import React, { useState } from 'react';
import Forms from './components/Forms';
import Preview from './components/Preview';


function App() {

  const [data, setData] = useState({
    general: {
            name: '',
            surname: '',
            email: '',
            github: '',
          },
  // const [data, setData] = useState({
  //   state: {
  //     general: {
  //       name: '',
  //       surname: '',
  //       email: '',
  //       github: '',
  //     },
  //     education: {
  //       school: '',
  //       degree: '',
  //       city: '',
  //       startDate: '',
  //       finishDate: '',
  //       id: uniqid(),
  //     },
  //     practical: {
  //       companyName: '',
  //       positionTitle: '',
  //       startDateP: '',
  //       finishDateP: '',
  //       mainTasks: '',
  //       id: uniqid(),
  //     },
  //     educations: [],
  //     practicals: [],

  //   }
  })
 

  const handleChange = (e) =>{
    let field = e.target.name
    let formPart = e.target.parentNode.parentNode.className;
    // console.log(e.target.value);
    // console.log(formPart)
  //  console.log(data)
    setData(prevSate =>({
      [formPart]: {
        ...prevSate[formPart],
        [field]: e.target.value,
        
      }
    }))
    
  }
  const showHide = (e) =>{
    const butt = e.target;
    let form = butt.nextElementSibling;
    form.classList.toggle('hidden');
}
  const showHidePrev = (e) =>{
    const butt = e.target;
    let form = butt.nextElementSibling;
    // butt.innerHTML = 'show'
    const forms = document.querySelector('.forms-side');
    forms.classList.toggle('hidden');
    form.classList.toggle('hidden');
  }

  const onSub = (e) =>{
    e.preventDefault();
    // need to make array in order to concat
    const inpu = Array.from(e.target.parentElement.querySelectorAll('input'));
    const textareas = Array.from(e.target.parentElement.querySelectorAll('textarea'));
    const inputs = inpu.concat(textareas);

    let formPart = e.target.parentNode.className;
    let formData = [...inputs].reduce((acc, input) => {
      acc[input.name] = input.value;
      // input.value = '';
      return acc;
    }, {});
    
    // console.log(formPart)
    // console.log(formData)

    if (formPart === 'education'){
      formData.id = this.state.education.id; 
      this.setState(prevSate =>({
        [formPart]: {
          ...prevSate[formPart],
          ...formData,   
        },
        educations: this.state.educations.concat(formData),
        education: {
          school: '',
          degree: '',
          city: '',
          startDate: '',
          finishDate: '',
          id: uniqid(),
        },
    }))
  }

   else if (formPart === 'practical'){
    formData.id = this.state.practical.id; 
    this.setState(prevSate =>({
      [formPart]: {
        ...prevSate[formPart],
        ...formData
      },
      practicals: this.state.practicals.concat(formData),
      practical: {
        companyName: '',
        positionTitle: '',
        startDateP: '',
        finishDateP: '',
        mainTasks: '',
        id: uniqid(),
      },
  }))
}

    //   this.setState(prevSate =>({
    //   [formPart]: {
    //     ...prevSate[formPart],
    //     ...formData
    //   }

    // }))
    
    
  }

  const editButt = (e, name) =>{
    // console.log(e);
    const prev = document.querySelector('.preview-content');
    const forms = document.querySelector('.forms-side');
    forms.classList.toggle('hidden');
    prev.classList.toggle('hidden');
    const arr = name + 's';
    //console.log(arr);
   // const toRem = this.state[arr].find((elem) => elem.id === e.id)
    //console.log(toRem)
    // console.log(...e)
    this.setState(prev =>({
      [name]: {
        ...prev[name],
        ...e,
      },
      [arr]: this.state[arr].filter(elem => elem.id !== e.id)
    }))
    //console.log(this.state.education)
  }

    // const {name, surname, email, github} = data.state.general;
    // const {school, degree, finishDate, startDate} = this.state.education
    // const {companyName, positionTitle, startDateP, finishDateP, mainTasks} = this.state.practical
  return (
    <div className="App">
      <Forms 
        handleChange={handleChange} 
        general={data} 
        // education = {data}
        // practical = {data}
        onSub={onSub}
        showHide={showHide}
      ></Forms>
      {/* <Preview 
        educations = {data}
        name={data}
        surname={data}
        email={data}
        github={data}
        editButt={editButt}


        showHidePrev={showHidePrev}
        practicals = {data}
      ></Preview> */}
    </div>
  );
};

export default App;
