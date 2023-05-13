import React, {Component} from "react";
import Icon from '@mdi/react';
import { mdiNoteEdit } from '@mdi/js';


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
                className="sh-butt-prev">Preview
                {/* <Icon path={mdiMenuUp} size={1} /> */}
                </button>
            <div className="preview-content hidden">
                <div className="preview-general">
                    <h2 className="name-prev">
                    {name} {surname}</h2>
                    <div className="email-git">
                        <div>
                            <label htmlFor="email">Email: </label>
                            <span name="email">
                            {email}
                            </span>
                        </div>
                        <div className="git-div">
                            <label htmlFor="github">Github: </label>
                            <a name="github" href="{github}">
                            {github}
                            </a>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <h2>Education</h2>
                {educations.map((education) => {
                    return(
                        <div key={education.id} className="preview-education">
                            
                            
                                <div className="dates">
                                {education.startDate && (
                                    <p>
                                    {education.startDate} - {education.finishDate}
                                    </p>
                                )}
                                    <button className="editButt" onClick={this.props.editButt.bind(this, education, "education")}>
                                    <Icon path={mdiNoteEdit} size={1} />
                                    </button>
                                    
                                </div>
                                
                                                        
                            <div className="degree-school">
                                <p>
                                    {education.degree}
                                </p>
                                
                                <p>
                                    {education.school}
                                    {education.school && education.city && ","}
                                    {education.city}
                                </p>
                            </div>
                            
                        </div>
                    )
                        
                    
                })}
                <hr></hr>
                <h2>Work Experience</h2>
                {practicals.map((practical) => {
                    return(
                        <div key={practical.id} className="preview-practical">
                            
                            <div className="dates">
                                {practical.startDateP && (
                                    <p>
                                    {practical.startDateP} - {practical.finishDateP}
                                    </p>
                                )}
                                    <button className="editButt" onClick={this.props.editButt.bind(this, practical, "practical")}>
                                    <Icon path={mdiNoteEdit} size={1} />
                                    </button>
                                    
                                </div>
                            
                            <div className="work-right">
                            
                                <p>
                                    Company: {practical.companyName}
                                </p>
                                <p>
                                    Position: {practical.positionTitle}
                                </p>

                                <p>
                                    Main tasks: {practical.mainTasks}
                                </p>

                            </div>
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