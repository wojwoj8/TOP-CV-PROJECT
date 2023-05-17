import _ from 'lodash';
import './App.css';
import './components/Forms.scss';
import './components/Preview.scss'
import uniqid from "uniqid";
import React, { useState } from 'react';
import Forms from './components/Forms';
import Preview from './components/Preview';


function App() {

  const [general, setGeneral] = useState({

          name: '',
          surname: '',
          email: '',
          github: '',
        
        })

  const [education, setEducation] = useState({

          school: '',
          degree: '',
          city: '',
          startDate: '',
          finishDate: '',
          id: uniqid(),

  })

  const [practical, setPractical] = useState({

      companyName: '',
      positionTitle: '',
      startDateP: '',
      finishDateP: '',
      mainTasks: '',
      id: uniqid(),

  })

  const [educations, setEducations] = useState([])
  const [practicals, setPracticals] = useState([])

  
  // setFormPart is variable for setState of different hooks

  const handleChange = (e, setFormPart) =>{

    let field = e.target.name
    setFormPart(prevSate => ({
        ...prevSate,
        [field]: e.target.value,
      
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
    const forms = document.querySelector('.forms-side');
    forms.classList.toggle('hidden');
    form.classList.toggle('hidden');
  }

  const onSub = (e, setFormPart) =>{
    e.preventDefault();
    // need to make array in order to concat
    const inpu = Array.from(e.target.parentElement.querySelectorAll('input'));
    const textareas = Array.from(e.target.parentElement.querySelectorAll('textarea'));
    const inputs = inpu.concat(textareas);

    let formPart = e.target.parentNode.className;

    // necesary for passing content object into array
    let formData = [...inputs].reduce((acc, input) => {
      acc[input.name] = input.value;
      return acc;
    }, {});

    if (formPart === 'education'){
      formData.id = education.id 
      setEducations(education => [...education, formData])
      setFormPart({

        school: '',
        degree: '',
        city: '',
        startDate: '',
        finishDate: '',
        id: uniqid(),
       
    })
  }

   else if (formPart === 'practical'){
    formData.id = practical.id; 
    setPracticals(practical => [...practical, formData])
    setFormPart({

      companyName: '',
      positionTitle: '',
      startDateP: '',
      finishDateP: '',
      mainTasks: '',
      id: uniqid(),

  })
}

  }
// in edit e is formPart
  const editButt = (e, setFormPart, setArray, array) =>{

    const prev = document.querySelector('.preview-content');
    const forms = document.querySelector('.forms-side');
    forms.classList.toggle('hidden');
    prev.classList.toggle('hidden');
    const found = array.find((elem) => elem.id = e.id)
    setFormPart(found)
    setArray((array) => array.filter(elem => elem.id !== e.id))
  }

  return (
    <div className="App">
      <Forms 
        handleChange={handleChange} 
        general={general} 
        education = {education}
        setEducation = {setEducation}
        practical = {practical}
        setPractical = {setPractical}
        onSub={onSub}
        showHide={showHide}
        setGeneral={setGeneral}
      ></Forms>
      <Preview 
        educations = {educations}
        practicals = {practicals}
        name={general.name}
        surname={general.surname}
        email={general.email}
        github={general.github}
        editButt={editButt}
        showHidePrev={showHidePrev}
        setEducation = {setEducation}
        setPractical = {setPractical}
        setEducations = {setEducations}
        setPracticals = {setPracticals}
      ></Preview>
    </div>
  );
};

export default App;
