import React, {Component} from "react";
import Icon from '@mdi/react';
import { mdilPencil } from '@mdi/light-js';

class Preview extends Component{

    
    render(){
        const {name, surname, email, educations, github,
            // school, startDate, finishDate, degree, 
            // companyName, positionTitle, startDateP, finishDateP, mainTasks
        practicals} = this.props
        return(
        <div className="preview">
            <button
                onClick={this.props.showHidePrev}
                className="sh-butt-prev">Preview</button>
            <div className="preview-content hidden">
                <div className="preview-general">
                    <h2>
                    {name} {surname}</h2>
                    <label htmlFor="email">Email: </label>
                    <p name="email">
                    {email}
                    </p>
                    <label htmlFor="github">Github: </label>
                    <a name="github" href="{github}">
                    {github}
                    </a>
                </div>
                <h2>Education</h2>
                {educations.map((education) => {
                    return(
                        <div key={education.id} className="preview-education">
                            <button onClick={this.props.editButt.bind(this, education, "education")}>
                            <Icon path={mdilPencil} size={1} />
                            </button>
                            
                            <p>
                                School: {education.school}
                            </p>
                            <p>
                                Degree: {education.degree}
                            </p>
                            <p>
                                Start date: {education.startDate}
                            </p>
                            <p>
                                Finish date: {education.finishDate}
                            </p>
                        </div>
                    )
                        
                    
                })}
                <h2>Work Experience</h2>
                {practicals.map((practical) => {
                    return(
                        <div key={practical.id} className="preview-practical">
                            <button onClick={this.props.editButt.bind(this, practical, "practical")}>
                            <Icon path={mdilPencil} size={1} spin/>
                            </button>
                            
                            <p>
                                Company: {practical.companyName}
                            </p>
                            <p>
                                Position: {practical.positionTitle}
                            </p>
                            <p>
                                Start date: {practical.startDateP}
                            </p>
                            <p>
                                Finish date: {practical.finishDateP}
                            </p>
                            <p>
                                Main tasks: {practical.mainTasks}
                            </p>
                        </div>
                    )
                }
                )}
                
                </div>
         </div> 
        )
       
    }
}
export default Preview;