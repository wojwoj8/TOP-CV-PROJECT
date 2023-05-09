import React, {Component} from "react";

class Preview extends Component{

    
    render(){
        const {name, surname, email, school, startDate, finishDate, degree, 
            companyName, positionTitle, startDateP, finishDateP, mainTasks} = this.props
        return(
        <div className="preview">
            <button
                onClick={this.props.showHidePrev}
                className="sh-butt-prev">Preview</button>
            <div className="preview-content hidden">
                <div className="preview-general">
                    <h2>
                    {name} {surname}</h2>

                    <p>
                    Email: {email}
                    </p>
                </div>
                <div className="preview-education">
                    <h3>Education</h3>
                    <p>
                        School: {school}
                    </p>
                    <p>
                        Degree: {degree}
                    </p>
                    <p>
                        Start date: {startDate}
                    </p>
                    <p>
                        Finish date: {finishDate}
                    </p>
                </div>
                <div className="preview-practical">
                    <h3>Practical Experience</h3>
                    <p>
                        Company: {companyName}
                    </p>
                    <p>
                        Position: {positionTitle}
                    </p>
                    <p>
                        Start date: {startDateP}
                    </p>
                    <p>
                        Finish date: {finishDateP}
                    </p>
                    <p>
                        Main tasks: {mainTasks}
                    </p>
                    </div>
                </div>
         </div> 
        )
       
    }
}
export default Preview;