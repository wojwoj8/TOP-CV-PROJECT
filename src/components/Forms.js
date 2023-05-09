import React, {Component} from "react";
import GeneralForm from "./GeneralForm";
import EducationForm from './EducationForm';
import PracticalForm from "./PracticalForm";

class Forms extends Component{
   
    showHide(e){
        const butt = e.target;
        let style = butt.nextElementSibling.style.display;
        console.log(style)
        style !== 'none' ? butt.nextElementSibling.style.display = 'none' : butt.nextElementSibling.style.display = 'flex';
        // butt.nextElementSibling.style.display='none';

    }
    render(){
        
        return(
            <div className="forms-side">
                <GeneralForm
                onSub={this.props.onSub}
                general={this.props.general}
                handleChange={this.props.handleChange}
                showHide={this.showHide}
                >
                </GeneralForm>
                <EducationForm
                onSub={this.props.onSub}
                education={this.props.education}
                showHide={this.showHide}
                handleChange={this.props.handleChange}>
                    
                </EducationForm>
                <PracticalForm
                onSub={this.props.onSub}
                practical={this.props.practical}
                showHide={this.showHide}
                handleChange={this.props.handleChange}>
                </PracticalForm>
            </div>
        )
        
        
    }
}
export default Forms