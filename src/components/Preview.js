import Icon from '@mdi/react';
import { mdiNoteEdit } from '@mdi/js';

const Preview = (educations, practicals, name, surname, email, github, editButt, showHidePrev) =>{

    return(
    <div className="preview">
        <button
            onClick={showHidePrev}
            className="sh-butt-prev">Preview
            </button>
        <div className="preview-content hidden">
            <div className="preview-general">
                <h2 className="name-prev">
                {name} {surname}
                </h2>
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
            <div className="preview-education">
            <h2 className="title-prev">Education</h2>
            {educations.map((education) => {
                return(
                    <div key={education.id} className="preview-education-content">
                        <div className="dates">
                        {education.startDate && (
                            <p>
                            {education.startDate} - {education.finishDate}
                            </p>
                        )}                              
                            {/* <Icon path={mdiNoteEdit} size={1} onClick={this.props.editButt.bind(this, education, "education")} />                                */}
                        </div>
                        
                                                    
                        <div className="degree-school">
                            <p className="bold-p">
                                {education.degree}
                            </p>
                            
                            <p className="small-p">
                                {education.school}
                                {education.school && education.city && ", "}
                                {education.city}
                            </p>
                        </div>
                        
                    </div>
                )
                    
                
            })}
            </div>
            <hr></hr>
            <div className="preview-practical">
                <h2 className="title-prev">Work Experience</h2>
                {practicals.map((practical) => {
                    return(
                        <div key={practical.id} className="preview-practical-content">
                            
                            <div className="dates">
                                {practical.startDateP && (
                                    <p>
                                    {practical.startDateP} - {practical.finishDateP}
                                    </p>
                                )}
                                    {/* <Icon path={mdiNoteEdit} size={1} onClick={this.props.editButt.bind(this, practical, "practical")}/> */}
                                </div>
                            
                            <div className="work-right">
                            
                                <p className="bold-p">
                                    {practical.companyName}
                                </p>
                                <p className="small-p">
                                    {practical.positionTitle}
                                </p>
                                    <br></br>
                                <p className="small-p">
                                    Main tasks:
                                    <br></br>
                                    {practical.mainTasks}
                                </p>

                            </div>
                        </div>
                    )
                }
                )}
                </div> 
            </div>
        </div>
        
    )
       
    
}
export default Preview;