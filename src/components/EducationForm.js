import React, {Component} from "react";

class EducationForm extends Component{

    render(){

        const {school, startDate, finishDate, degree} = this.props;

        return(
            <div className="education">
                <button
                onClick={this.props.showHide}
                className="sh-butt">Education</button>
                <form className="education-form hidden"
                onSubmit={this.props.onSub}
                // onSubmit={(e) => {
                //     e.preventDefault();
                //     console.log(this.props);
                // }}
                >

                    <label htmlFor="school">School: </label>
                    <input name="school"
                    value={school}
                    onChange={this.props.handleChange}
                    ></input>
                    
                    <label htmlFor="degree">Degree: </label>
                    <input name="degree"
                    value={degree}
                    onChange={this.props.handleChange}
                    ></input>

                    <label htmlFor="startDate">Start date: </label>

                    <input name="startDate"
                    value={startDate}
                    type="date"
                    onChange={this.props.handleChange}
                    ></input>

                    <label htmlFor="finishDate">Finish date: </label>
                    <input name="finishDate"
                    value={finishDate}
                    onChange={this.props.handleChange}
                    type="date"
                    ></input>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default EducationForm