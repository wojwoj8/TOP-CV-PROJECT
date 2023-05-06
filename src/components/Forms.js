import React, {Component} from "react";
import GeneralForm from "./GeneralForm";

class Forms extends Component{
   
    render(){
        
        return(
            <div>
                <GeneralForm
                general={this.props.general}
                handleChange={this.props.handleChange}
                >
                </GeneralForm>
            </div>
        )
        
        
    }
}
export default Forms