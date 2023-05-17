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

  const [educations, setEducations] = useState([{
    "school": "asd",
    "degree": "sfd",
    "city": "",
    "startDate": "",
    "finishDate": "",
    "id": "lhrwutt3"
  }])
  const [practicals, setPracticals] = useState([{
    "companyName": "asd",
    "positionTitle": "dfs",
    "startDateP": "",
    "finishDateP": "",
    "mainTasks": "",
    "id": "lhrwutt4"
  }])

  
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

  const editButt = (e, name, setFormPart , setArray) =>{

    const prev = document.querySelector('.preview-content');
    const forms = document.querySelector('.forms-side');
    forms.classList.toggle('hidden');
    prev.classList.toggle('hidden');

    setArray((array) => array.filter(elem => elem.id !== e.id))
    setFormPart(prev =>({
      ...prev[name],
      ...e,
    }))

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
      ></Preview>
    </div>
  );
};

export default App;
