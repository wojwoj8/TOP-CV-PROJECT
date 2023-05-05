import React, {Component} from "react";


class Preview extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {name, surname, email} = this.props.formValues;
        return(
            <div>
                <h1>Preview</h1>
                <p>Name: {name}</p>
            </div>
        )
        
    }
}
export default Preview