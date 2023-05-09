import React, {Component} from "react"

class PracticalForm extends Component{


    render(){
        const {companyName, positionTitle, startDateP, finishDateP, mainTasks} = this.props
        return(
            <div>
                <div className="practical">
                <h2>Pracical</h2>
                <form className="practical-form"
                onSubmit={this.props.onSub}>
                    <label htmlFor="companyName">Company Name: </label>
                    <input name="companyName"
                    value={companyName}
                    onChange={this.props.handleChange}
                    ></input>
                    <label htmlFor="positionTitle">Position Title: </label>
                    <input name="positionTitle"
                    value={positionTitle}
                    onChange={this.props.handleChange}
                    ></input>
                    <label htmlFor="startDateP">Start Date: </label>
                    <input name="startDateP"
                    value={startDateP}
                    onChange={this.props.handleChange}
                    type="date"
                    ></input>
                    <input name="finishDateP"
                    value={finishDateP}
                    onChange={this.props.handleChange}
                    type="date"
                    ></input>
                    <label htmlFor="mainTasks">Main tasks: </label>
                    <textarea
                    name="mainTasks"
                    value={mainTasks}
                    onChange={this.props.handleChange}
                    >
                    </textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            </div>
        );
    }
}
export default PracticalForm