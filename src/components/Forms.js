import GeneralForm from "./GeneralForm";
import EducationForm from './EducationForm';
import PracticalForm from "./PracticalForm";

const Forms = ({ handleChange, general, education, 
    practical, onSub, showHide, setGeneral, setEducation}) => {

    return(
        <div className="forms-side">
            <GeneralForm
            general={general}
            handleChange={handleChange}
            showHide={showHide}
            setGeneral={setGeneral}
            >
            </GeneralForm>
             <EducationForm
            onSub={onSub}
            education={education}
            showHide={showHide}
            handleChange={handleChange}
            setEducation={setEducation}
            >
                
            </EducationForm>
            {/*
            <PracticalForm
            onSub={onSub}
            practical={practical}
            showHide={showHide}
            handleChange={handleChange}
            >
            </PracticalForm> */}
        </div>
    )
    
    
}

export default Forms