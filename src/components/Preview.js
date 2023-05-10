import React, {Component} from "react";

class Preview extends Component{

    
    render(){
        const {name, surname, email, educations, 
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

                    <p>
                    Email: {email}
                    </p>
                </div>
                {educations.map((education) => {
                    return(
                        <div className="preview-education">
                            <h3>Education</h3>
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
                
                {practicals.map((practical) => {
                    return(
                        <div className="preview-practical">
                            <h3>Practical Experience</h3>
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