import React, {Component} from "react";
import General from "./General";

class GeneralButton extends Component{

    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <button onClick={this.props.onClicked}>Click Me!</button>   
            </div>
            )
    }
}

export default GeneralButton