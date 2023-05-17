const EducationForm = ({education, handleChange, showHide, onSub, setEducation}) =>{


        return(
            <div className="education">
                <button
                onClick={showHide}
                className="sh-butt">Education</button>
                <form className="education-form hidden"
                onSubmit={onSub}
                >

                    <label htmlFor="school">School: </label>
                    <input name="school"
                    value={education.school}
                    onChange={e => handleChange(e, setEducation)}
                    ></input>
                    
                    <label htmlFor="degree">Degree: </label>
                    <input name="degree"
                    value={education.degree}
                    onChange={e => handleChange(e, setEducation)}
                    ></input>

                    <label htmlFor="city">City: </label>
                    <input name="city"
                    value={education.city}
                    onChange={e => handleChange(e, setEducation)}
                    ></input>

                    <label htmlFor="startDate">Start date: </label>

                    <input name="startDate"
                    value={education.startDate}
                    type="date"
                    onChange={e => handleChange(e, setEducation)}
                    ></input>

                    <label htmlFor="finishDate">Finish date: </label>
                    <input name="finishDate"
                    value={education.finishDate}
                    onChange={e => handleChange(e, setEducation)}
                    type="date"
                    ></input>

                    <button type="submit">Add Education</button>
                </form>
            </div>
        )
    }

export default EducationForm