import GeneralForm from "./GeneralForm";
import EducationForm from './EducationForm';
import PracticalForm from "./PracticalForm";

const Forms = ({ handleChange, general, education, practical, onSub, showHide}) => {

    return(
        <div className="forms-side">
            <GeneralForm
            // onSub={this.props.onSub}
            general={general}
            handleChange={handleChange}
            showHide={showHide}
            >
            </GeneralForm>
            {/* <EducationForm
            onSub={onSub}
            education={education}
            showHide={showHide}
            handleChange={handleChange}
            >
                
            </EducationForm>
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