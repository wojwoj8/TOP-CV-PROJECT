import React, {Component} from "react";
import GeneralForm from "./GeneralForm";
import EducationForm from './EducationForm';
import PracticalForm from "./PracticalForm";

class Forms extends Component{
   
    
    render(){
        
        return(
            <div className="forms-side">
                <GeneralForm
                // onSub={this.props.onSub}
                general={this.props.general}
                handleChange={this.props.handleChange}
                showHide={this.props.showHide}
                >
                </GeneralForm>
                <EducationForm
                onSub={this.props.onSub}
                education={this.props.education}
                showHide={this.props.showHide}
                handleChange={this.props.handleChange}
                >
                    
                </EducationForm>
                <PracticalForm
                onSub={this.props.onSub}
                practical={this.props.practical}
                showHide={this.props.showHide}
                handleChange={this.props.handleChange}
                >
                </PracticalForm>
            </div>
        )
        
        
    }
}
export default Forms