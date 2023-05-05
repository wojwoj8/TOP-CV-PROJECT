import React, { Component } from "react";
import './FormsCss.scss'

import General from "./General";
import Education from './Education';

class Forms extends Component{

    render(){
        return(
            <div className="forms-side">
                <General></General>
                <Education></Education>
            </div>
            
            )
    }
}
export default Forms